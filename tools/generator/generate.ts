import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import {
  ClassFileEmitter,
  EmitContext,
  generatedFileHeader,
  memberNamesOf,
  RESERVED_MEMBER_NAMES,
} from './emitClasses';
import {
  emitBaseResourceInterface,
  emitPlainBarrel,
  emitPrimitiveAliases,
  emitResourceInterface,
  emitResourceUnion,
  namesOfConcreteResources,
  PlainEmitContext,
  PlainFileEmitter,
  PRIMITIVES_MODULE_NAME,
  RESOURCE_UNION_MODULE_NAME,
} from './emitPlainTypes';
import { StructureLoader } from './loadStructures';
import { ClassModel, FileModel } from './modelTypes';
import { assignPlainTypeNames } from './naming';
import {
  ensureSpecPackage,
  FHIR_VERSIONS,
  FhirVersionConfig,
  REPOSITORY_ROOT,
} from './specPackages';
import { ValueSetExpander, ValueSetModel } from './valueSets';

/** Modules the generator writes besides one per FHIR type. */
const SUPPORT_MODULE_NAMES = ['index', 'modelTypeRegistry', 'parseResource', 'valueSetCodes'];

function assertNoNameClashes(fileModels: FileModel[], context: EmitContext): void {
  const seenModuleNames = new Set<string>(
    SUPPORT_MODULE_NAMES.map((moduleName) => moduleName.toLowerCase())
  );
  const seenClassNames = new Set<string>();
  for (const fileModel of fileModels) {
    const caseInsensitiveModuleName = fileModel.moduleName.toLowerCase();
    if (seenModuleNames.has(caseInsensitiveModuleName)) {
      throw new Error(`Two modules would be written to ${fileModel.moduleName}.ts`);
    }
    seenModuleNames.add(caseInsensitiveModuleName);
    for (const classModel of fileModel.classes) {
      if (seenClassNames.has(classModel.className)) {
        throw new Error(`Class name ${classModel.className} is generated twice`);
      }
      seenClassNames.add(classModel.className);
    }
  }
  for (const classModel of context.classModelsByClassName.values()) {
    const methodNames: string[] = [];
    const propertyNames: string[] = [];
    let currentClass: ClassModel | undefined = classModel;
    while (currentClass !== undefined) {
      const memberNames = memberNamesOf(currentClass);
      methodNames.push(...memberNames.methodNames);
      propertyNames.push(...memberNames.propertyNames);
      currentClass = context.classModelsByClassName.get(currentClass.baseClassName);
    }
    const allMemberNames = [...methodNames, ...propertyNames];
    const seenMemberNames = new Set<string>();
    for (const memberName of allMemberNames) {
      if (seenMemberNames.has(memberName) || RESERVED_MEMBER_NAMES.has(memberName)) {
        throw new Error(`${classModel.className} would get a clashing member named ${memberName}`);
      }
      seenMemberNames.add(memberName);
    }
  }
}

function emitValueSetCodes(valueSetModels: ValueSetModel[], context: EmitContext): string {
  const constantSources = valueSetModels.map((valueSetModel) => {
    const entrySources = valueSetModel.codeEntries.map(
      (codeEntry) => `${codeEntry.keyName}: ${JSON.stringify(codeEntry.code)}`
    );
    const { constantName } = valueSetModel;
    return [
      `/** ${valueSetModel.title.replace(/\*\//g, '* /')} (${valueSetModel.canonicalUrl}) */`,
      `export const ${constantName} = { ${entrySources.join(', ')} } as const;`,
      `export type ${constantName} = (typeof ${constantName})[keyof typeof ${constantName}];`,
      '',
    ].join('\n');
  });
  return [
    generatedFileHeader(context),
    '// Codes of the value sets that FHIR binds to elements with strength "required".',
    '',
    ...constantSources,
  ].join('\n');
}

function emitModelTypeRegistry(context: EmitContext): string {
  return [
    generatedFileHeader(context),
    `import { TypeRegistry } from '../../library/model';`,
    '',
    `/** Every FHIR ${context.versionLabel} model class by type name. Classes add themselves when their module loads. */`,
    `export const modelTypeRegistry = new TypeRegistry('${context.versionLabel}');`,
    '',
  ].join('\n');
}

function emitParseResource(context: EmitContext): string {
  return [
    generatedFileHeader(context),
    `import type { ParseOptions } from '../../library/model';`,
    `import { modelTypeRegistry } from './modelTypeRegistry';`,
    `import type { Resource } from './resource';`,
    '',
    '/**',
    ` * Builds the model for any FHIR ${context.versionLabel} resource, choosing the class from the JSON's \`resourceType\`.`,
    ' * Throws a FhirModelError when the resource type is unknown or the JSON does not match it.',
    ' */',
    'export function parseResource(json: unknown, parseOptions: ParseOptions = {}): Resource {',
    '  return modelTypeRegistry.parseResource(json, parseOptions) as Resource;',
    '}',
    '',
  ].join('\n');
}

function emitIndex(fileModels: FileModel[], context: EmitContext): string {
  return [
    generatedFileHeader(context),
    ...fileModels.map((fileModel) => `export * from './${fileModel.moduleName}';`),
    `export * as valueSetCodes from './valueSetCodes';`,
    `export { modelTypeRegistry } from './modelTypeRegistry';`,
    `export { parseResource } from './parseResource';`,
    `export { Base, FhirModelError } from '../../library/model';`,
    `export type { ParseOptions, ValidationIssue, ValidationIssueCode, ValidationSeverity } from '../../library/model';`,
    '',
  ].join('\n');
}

/** Removes the TypeScript files directly inside a directory, leaving its subdirectories alone. */
function removeGeneratedModules(directoryPath: string): void {
  fs.mkdirSync(directoryPath, { recursive: true });
  for (const fileName of fs.readdirSync(directoryPath)) {
    if (fileName.endsWith('.ts')) {
      fs.rmSync(path.join(directoryPath, fileName));
    }
  }
}

async function writeModules(
  relativeDirectory: string,
  sourcesByModuleName: ReadonlyMap<string, string>
): Promise<void> {
  const directoryPath = path.join(REPOSITORY_ROOT, relativeDirectory);
  removeGeneratedModules(directoryPath);
  const prettierOptions = await prettier.resolveConfig(
    path.join(REPOSITORY_ROOT, 'src', 'index.ts')
  );
  for (const [moduleName, moduleSource] of sourcesByModuleName) {
    const formattedSource = await prettier.format(moduleSource, {
      ...prettierOptions,
      parser: 'typescript',
    });
    fs.writeFileSync(path.join(directoryPath, `${moduleName}.ts`), formattedSource);
  }
}

function relativeImportPath(fromDirectory: string, toPath: string): string {
  const importPath = path.relative(fromDirectory, toPath).replace(/\\/g, '/');
  return importPath.startsWith('.') ? importPath : `./${importPath}`;
}

function emitPlainModules(fileModels: FileModel[], context: PlainEmitContext): Map<string, string> {
  const sourcesByModuleName = new Map<string, string>();
  for (const fileModel of fileModels) {
    const moduleSource = new PlainFileEmitter(fileModel, context).emit();
    if (moduleSource !== undefined) {
      sourcesByModuleName.set(fileModel.moduleName, moduleSource);
    }
  }
  sourcesByModuleName.set(PRIMITIVES_MODULE_NAME, emitPrimitiveAliases(context));
  sourcesByModuleName.set(RESOURCE_UNION_MODULE_NAME, emitResourceUnion(context));
  const barrelName = context.versionConfig.plainBarrelName;
  if (sourcesByModuleName.has(barrelName)) {
    throw new Error(`The barrel ${barrelName}.ts would overwrite a data type module`);
  }
  sourcesByModuleName.set(
    barrelName,
    emitPlainBarrel(Array.from(sourcesByModuleName.keys()), context)
  );
  return sourcesByModuleName;
}

function emitResourceInterfaceModules(
  interfaceConfig: { directory: string; barrelName: string },
  context: PlainEmitContext
): Map<string, string> {
  const plainTypesImportPath = relativeImportPath(
    interfaceConfig.directory,
    context.versionConfig.plainDirectory
  );
  const sourcesByModuleName = new Map<string, string>();
  sourcesByModuleName.set('IResource', emitBaseResourceInterface(context));
  for (const resourceName of namesOfConcreteResources(context)) {
    sourcesByModuleName.set(
      `I${resourceName}`,
      emitResourceInterface(resourceName, plainTypesImportPath, context)
    );
  }
  sourcesByModuleName.set(
    interfaceConfig.barrelName,
    emitPlainBarrel(Array.from(sourcesByModuleName.keys()), context)
  );
  return sourcesByModuleName;
}

async function generateVersion(versionConfig: FhirVersionConfig): Promise<void> {
  const packageContentDirectory = await ensureSpecPackage(versionConfig);
  const valueSetExpander = new ValueSetExpander(packageContentDirectory);
  const structureLoader = new StructureLoader(packageContentDirectory, valueSetExpander);
  const fileModels = structureLoader.loadFiles();
  const packageLabel = `${versionConfig.packageName}@${versionConfig.packageVersion}`;

  const moduleNamesByClassName = new Map<string, string>();
  const classModelsByClassName = new Map<string, ClassModel>();
  const extendedClassNames = new Set<string>();
  for (const fileModel of fileModels) {
    for (const classModel of fileModel.classes) {
      moduleNamesByClassName.set(classModel.className, fileModel.moduleName);
      classModelsByClassName.set(classModel.className, classModel);
      extendedClassNames.add(classModel.baseClassName);
    }
  }

  // The resource union takes the name `Resource` in R3 and R4, so the abstract
  // Resource type has no data type of its own there.
  const classModels = Array.from(classModelsByClassName.values());
  const plainTypeNamesByElementPath = assignPlainTypeNames(
    classModels.map((classModel) => classModel.fhirTypeName)
  );
  const plainTypeNamesByClassName = new Map<string, string>();
  const moduleNamesByPlainTypeName = new Map<string, string>([
    [versionConfig.resourceUnionName, RESOURCE_UNION_MODULE_NAME],
  ]);
  for (const classModel of classModels) {
    const plainTypeName = plainTypeNamesByElementPath.get(classModel.fhirTypeName) as string;
    if (plainTypeName === versionConfig.resourceUnionName) {
      continue;
    }
    if (moduleNamesByPlainTypeName.has(plainTypeName)) {
      throw new Error(`Data type name ${plainTypeName} is generated twice`);
    }
    plainTypeNamesByClassName.set(classModel.className, plainTypeName);
    moduleNamesByPlainTypeName.set(
      plainTypeName,
      moduleNamesByClassName.get(classModel.className) as string
    );
  }

  const context: EmitContext = {
    versionLabel: versionConfig.versionLabel,
    packageLabel,
    moduleNamesByClassName,
    classModelsByClassName,
    extendedClassNames,
    plainTypeNamesByClassName,
    plainTypesImportPath: relativeImportPath(
      versionConfig.modelDirectory,
      path.join(versionConfig.plainDirectory, versionConfig.plainBarrelName)
    ),
  };
  assertNoNameClashes(fileModels, context);

  const modelSourcesByModuleName = new Map<string, string>();
  for (const fileModel of fileModels) {
    modelSourcesByModuleName.set(
      fileModel.moduleName,
      new ClassFileEmitter(fileModel, context).emit()
    );
  }
  const valueSetModels = valueSetExpander.usedModels();
  modelSourcesByModuleName.set('valueSetCodes', emitValueSetCodes(valueSetModels, context));
  modelSourcesByModuleName.set('modelTypeRegistry', emitModelTypeRegistry(context));
  modelSourcesByModuleName.set('parseResource', emitParseResource(context));
  modelSourcesByModuleName.set('index', emitIndex(fileModels, context));

  const plainContext: PlainEmitContext = {
    versionConfig,
    versionLabel: versionConfig.versionLabel,
    packageLabel,
    fileModels,
    classModelsByClassName,
    plainTypeNamesByClassName,
    moduleNamesByPlainTypeName,
    valueSetModelsByConstantName: new Map(
      valueSetModels.map((valueSetModel) => [valueSetModel.constantName, valueSetModel] as const)
    ),
    primitiveTypeCodes: structureLoader.getPrimitiveTypeCodes(),
  };
  const plainSourcesByModuleName = emitPlainModules(fileModels, plainContext);

  // The plain data types are written first: in R5 the model directory sits inside their directory.
  await writeModules(versionConfig.plainDirectory, plainSourcesByModuleName);
  if (versionConfig.resourceInterfaces !== undefined) {
    await writeModules(
      versionConfig.resourceInterfaces.directory,
      emitResourceInterfaceModules(versionConfig.resourceInterfaces, plainContext)
    );
  }
  await writeModules(versionConfig.modelDirectory, modelSourcesByModuleName);
  console.log(
    `${versionConfig.versionLabel}: wrote ${classModelsByClassName.size} model classes to ${versionConfig.modelDirectory}, ` +
      `${plainTypeNamesByClassName.size} data types to ${versionConfig.plainDirectory} and ${valueSetModels.length} value sets`
  );
}

async function main(): Promise<void> {
  const requestedLabels = process.argv.slice(2);
  const versionsToGenerate = FHIR_VERSIONS.filter(
    (versionConfig) =>
      requestedLabels.length === 0 || requestedLabels.includes(versionConfig.versionLabel)
  );
  for (const versionConfig of versionsToGenerate) {
    await generateVersion(versionConfig);
  }
}

main().catch((generationError) => {
  console.error(generationError);
  process.exitCode = 1;
});
