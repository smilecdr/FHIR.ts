import { generatedFileHeader } from './emitClasses';
import { typeScriptTypeForPrimitive } from './loadStructures';
import { ClassModel, FieldModel, FieldTypeModel, FileModel } from './modelTypes';
import { upperFirst } from './naming';
import { FhirVersionConfig } from './specPackages';
import { ValueSetModel } from './valueSets';

/** Everything the plain type emitter needs to know about one FHIR version. */
export interface PlainEmitContext {
  versionConfig: FhirVersionConfig;
  versionLabel: string;
  packageLabel: string;
  fileModels: FileModel[];
  classModelsByClassName: ReadonlyMap<string, ClassModel>;
  /** Plain data type name of every model class that has one. */
  plainTypeNamesByClassName: ReadonlyMap<string, string>;
  /** Module (file) name each plain data type is declared in. */
  moduleNamesByPlainTypeName: ReadonlyMap<string, string>;
  valueSetModelsByConstantName: ReadonlyMap<string, ValueSetModel>;
  primitiveTypeCodes: string[];
}

const CONTENT_DESCRIPTION = 'data types';
const ELEMENT_TYPE_NAME = 'Element';
export const RESOURCE_UNION_MODULE_NAME = 'resourceList';
export const PRIMITIVES_MODULE_NAME = 'primitives';
/** Element types that hold whichever resource the JSON names. */
const ANY_RESOURCE_TYPE_CODES: ReadonlySet<string> = new Set(['Resource', 'DomainResource']);
/** FHIR primitives that hold a point in time. `time` is excluded: it has no date part. */
const DATE_PRIMITIVE_TYPE_CODES: ReadonlySet<string> = new Set(['date', 'dateTime', 'instant']);
const JAVASCRIPT_DATE_OR_STRING = 'Date | string';
/** Alias names that would otherwise shadow a TypeScript keyword type. */
const PRIMITIVE_ALIAS_NAMES: Readonly<Record<string, string>> = {
  string: 'ModelString',
  boolean: 'ModelBoolean',
};

export function primitiveAliasNameFor(primitiveTypeCode: string): string {
  return PRIMITIVE_ALIAS_NAMES[primitiveTypeCode] ?? upperFirst(primitiveTypeCode);
}

/** Name of the code type and constant a coded element gets inside its owner's namespace. */
function enumNameFor(fieldType: FieldTypeModel): string {
  return `${upperFirst(fieldType.jsonKey)}Enum`;
}

/**
 * A property is declared required when FHIR requires the element and it is a
 * complex type. Required primitives stay optional because FHIR JSON may carry
 * only their extension (`_status`) in place of the value, and each type of a
 * choice element is optional because only one of them is present.
 */
function isRequiredProperty(fieldModel: FieldModel, fieldType: FieldTypeModel): boolean {
  return fieldModel.minimum > 0 && !fieldModel.isChoice && !fieldType.isPrimitive;
}

/** The fields of a class with the inherited ones first, as they appear in FHIR JSON. */
function fieldsIncludingInherited(classModel: ClassModel, context: PlainEmitContext): FieldModel[] {
  const baseClassModel = context.classModelsByClassName.get(classModel.baseClassName);
  const inheritedFields =
    baseClassModel === undefined ? [] : fieldsIncludingInherited(baseClassModel, context);
  return [...inheritedFields, ...classModel.fields];
}

function concreteResourceNames(context: PlainEmitContext): string[] {
  return Array.from(context.classModelsByClassName.values())
    .filter((classModel) => classModel.isConcreteResource)
    .map((classModel) => classModel.className)
    .sort();
}

/**
 * Writes the plain data types of one StructureDefinition: a class or interface
 * without behaviour for the type itself and for each of its backbone elements.
 */
export class PlainFileEmitter {
  private readonly localPlainTypeNames: ReadonlySet<string>;
  private readonly importedPlainTypeNames = new Set<string>();

  constructor(
    private readonly fileModel: FileModel,
    private readonly context: PlainEmitContext
  ) {
    this.localPlainTypeNames = new Set(
      fileModel.classes
        .map((classModel) => context.plainTypeNamesByClassName.get(classModel.className))
        .filter((plainTypeName): plainTypeName is string => plainTypeName !== undefined)
    );
  }

  /** The module source, or undefined when none of the file's types has a plain data type. */
  emit(): string | undefined {
    const declarationSources = this.fileModel.classes
      .filter((classModel) => this.context.plainTypeNamesByClassName.has(classModel.className))
      .map((classModel) => this.emitDeclaration(classModel));
    if (declarationSources.length === 0) {
      return undefined;
    }
    return [
      generatedFileHeader(this.context, CONTENT_DESCRIPTION),
      this.emitImports(),
      ...declarationSources,
    ].join('\n');
  }

  private emitImports(): string {
    const plainTypeNamesByModuleName = new Map<string, string[]>();
    for (const plainTypeName of Array.from(this.importedPlainTypeNames).sort()) {
      const moduleName = this.context.moduleNamesByPlainTypeName.get(plainTypeName);
      if (moduleName === undefined) {
        throw new Error(`${this.fileModel.moduleName} uses unknown data type ${plainTypeName}`);
      }
      plainTypeNamesByModuleName.set(moduleName, [
        ...(plainTypeNamesByModuleName.get(moduleName) ?? []),
        plainTypeName,
      ]);
    }
    const importLines = Array.from(plainTypeNamesByModuleName.keys())
      .sort()
      .map(
        (moduleName) =>
          `import type { ${(plainTypeNamesByModuleName.get(moduleName) ?? []).join(', ')} } from './${moduleName}';`
      );
    return `${importLines.join('\n')}\n`;
  }

  private usePlainType(plainTypeName: string): string {
    if (!this.localPlainTypeNames.has(plainTypeName)) {
      this.importedPlainTypeNames.add(plainTypeName);
    }
    return plainTypeName;
  }

  private emitDeclaration(classModel: ClassModel): string {
    const plainTypeName = this.context.plainTypeNamesByClassName.get(
      classModel.className
    ) as string;
    const fieldModels = fieldsIncludingInherited(classModel, this.context);
    const memberSources: string[] = [];
    if (classModel.isConcreteResource) {
      memberSources.push(`resourceType: '${classModel.className}';`);
    } else if (ANY_RESOURCE_TYPE_CODES.has(classModel.className)) {
      memberSources.push('resourceType: string;');
    }
    const enumSources: string[] = [];
    for (const fieldModel of fieldModels) {
      for (const fieldType of fieldModel.types) {
        memberSources.push(this.emitProperty(fieldModel, fieldType, plainTypeName));
        if (fieldType.valueSetConstantName !== undefined) {
          enumSources.push(this.emitEnum(fieldType));
        }
      }
    }
    const declarationKeyword = this.context.versionConfig.plainDeclarationKind;
    const declarationSource = [
      `/**\n * ${classModel.description || plainTypeName}\n */`,
      `export ${declarationKeyword} ${plainTypeName} {`,
      memberSources.join('\n'),
      '}',
    ];
    if (enumSources.length > 0) {
      declarationSource.push(
        '',
        `export namespace ${plainTypeName} {`,
        enumSources.join('\n'),
        '}'
      );
    }
    return `${declarationSource.join('\n')}\n`;
  }

  private emitProperty(
    fieldModel: FieldModel,
    fieldType: FieldTypeModel,
    ownerTypeName: string
  ): string {
    const itemTypeText = this.itemTypeText(fieldType, ownerTypeName);
    const maximumText = Number.isFinite(fieldModel.maximum) ? String(fieldModel.maximum) : '*';
    const cardinality = `${fieldModel.minimum}..${maximumText}`;
    const description =
      fieldModel.description.length > 0
        ? `${fieldModel.description} (${cardinality})`
        : cardinality;
    const optionalMarker = isRequiredProperty(fieldModel, fieldType) ? '' : '?';
    const propertyLines = [
      `/** ${description} */`,
      `${fieldType.jsonKey}${optionalMarker}: ${fieldModel.isList ? `Array<${itemTypeText}>` : itemTypeText};`,
    ];
    if (fieldType.isPrimitive) {
      const elementTypeName = this.usePlainType(ELEMENT_TYPE_NAME);
      propertyLines.push(
        `/** Id and extensions of the primitive \`${fieldType.jsonKey}\`. */`,
        `_${fieldType.jsonKey}?: ${fieldModel.isList ? `Array<${elementTypeName} | null>` : elementTypeName};`
      );
    }
    return propertyLines.join('\n');
  }

  private itemTypeText(fieldType: FieldTypeModel, ownerTypeName: string): string {
    if (fieldType.isPrimitive) {
      if (fieldType.valueSetConstantName !== undefined) {
        return `${ownerTypeName}.${enumNameFor(fieldType)}`;
      }
      const acceptsJavaScriptDate =
        this.context.versionConfig.plainDatesAcceptJavaScriptDate &&
        DATE_PRIMITIVE_TYPE_CODES.has(fieldType.typeCode);
      return acceptsJavaScriptDate
        ? JAVASCRIPT_DATE_OR_STRING
        : typeScriptTypeForPrimitive(fieldType.typeCode);
    }
    if (ANY_RESOURCE_TYPE_CODES.has(fieldType.typeCode)) {
      return this.usePlainType(this.context.versionConfig.resourceUnionName);
    }
    const plainTypeName = this.context.plainTypeNamesByClassName.get(fieldType.typeCode);
    if (plainTypeName === undefined) {
      throw new Error(
        `${ownerTypeName}.${fieldType.jsonKey} uses ${fieldType.typeCode}, which has no data type`
      );
    }
    return this.usePlainType(plainTypeName);
  }

  private emitEnum(fieldType: FieldTypeModel): string {
    const valueSetModel = this.context.valueSetModelsByConstantName.get(
      fieldType.valueSetConstantName as string
    );
    if (valueSetModel === undefined) {
      throw new Error(`Value set ${String(fieldType.valueSetConstantName)} was not expanded`);
    }
    const enumName = enumNameFor(fieldType);
    const codeUnion = valueSetModel.codeEntries
      .map((codeEntry) => JSON.stringify(codeEntry.code))
      .join(' | ');
    const constantEntries = valueSetModel.codeEntries.map(
      (codeEntry) => `${codeEntry.keyName}: ${JSON.stringify(codeEntry.code)} as ${enumName}`
    );
    return [
      `/** Codes of the required value set ${valueSetModel.canonicalUrl} */`,
      `export type ${enumName} = ${codeUnion};`,
      `export const ${enumName} = { ${constantEntries.join(', ')} };`,
    ].join('\n');
  }
}

/** The module declaring the union of every resource type. */
export function emitResourceUnion(context: PlainEmitContext): string {
  const resourceNames = concreteResourceNames(context);
  const importLines = resourceNames.map((resourceName) => {
    const moduleName = context.moduleNamesByPlainTypeName.get(resourceName) as string;
    return `import type { ${resourceName} } from './${moduleName}';`;
  });
  const { resourceUnionName, resourceTypeNameUnionName } = context.versionConfig;
  const unionSources = [
    `/** Any FHIR ${context.versionLabel} resource. Checking \`resourceType\` narrows it to one resource type. */`,
    `export type ${resourceUnionName} = ${resourceNames.join(' | ')};`,
  ];
  if (resourceTypeNameUnionName !== undefined) {
    unionSources.push(
      '',
      `/** The name of any FHIR ${context.versionLabel} resource type. */`,
      `export type ${resourceTypeNameUnionName} = ${resourceNames.map((resourceName) => `'${resourceName}'`).join(' | ')};`
    );
  }
  return [
    generatedFileHeader(context, CONTENT_DESCRIPTION),
    ...importLines,
    '',
    ...unionSources,
    '',
  ].join('\n');
}

/** The module declaring one type alias per FHIR primitive type, such as `Code` and `DateTime`. */
export function emitPrimitiveAliases(context: PlainEmitContext): string {
  const aliasSources = context.primitiveTypeCodes.map(
    (primitiveTypeCode) =>
      `/** FHIR ${primitiveTypeCode} */\nexport type ${primitiveAliasNameFor(primitiveTypeCode)} = ${typeScriptTypeForPrimitive(primitiveTypeCode)};`
  );
  return [generatedFileHeader(context, CONTENT_DESCRIPTION), ...aliasSources, ''].join('\n');
}

export function emitPlainBarrel(moduleNames: string[], context: PlainEmitContext): string {
  return [
    generatedFileHeader(context, CONTENT_DESCRIPTION),
    ...moduleNames.map((moduleName) => `export * from './${moduleName}';`),
    '',
  ].join('\n');
}

/**
 * The `IPatient`-style interface of a resource. It extends the data type of
 * the same resource, so the two can never differ. A resource with coded
 * elements is re-exported as well, so its code constants (`Patient.GenderEnum`)
 * are reachable from the interfaces barrel as they always were.
 */
export function emitResourceInterface(
  resourceName: string,
  plainTypesImportPath: string,
  context: PlainEmitContext
): string {
  const resourceClass = context.classModelsByClassName.get(resourceName) as ClassModel;
  const hasCodedElements = fieldsIncludingInherited(resourceClass, context)
    .flatMap((fieldModel) => fieldModel.types)
    .some((fieldType) => fieldType.valueSetConstantName !== undefined);
  const interfaceSource = [
    generatedFileHeader(context, 'resource interfaces'),
    `import { ${resourceName} } from '${plainTypesImportPath}/${context.moduleNamesByPlainTypeName.get(resourceName) as string}';`,
    '',
    `/** Interface form of the ${resourceName} resource, identical in shape to the \`${resourceName}\` data type. */`,
    `export interface I${resourceName} extends ${resourceName} {}`,
  ];
  if (hasCodedElements) {
    interfaceSource.push('', `export { ${resourceName} };`);
  }
  return `${interfaceSource.join('\n')}\n`;
}

/** The interface every `IPatient`-style interface satisfies. */
export function emitBaseResourceInterface(context: PlainEmitContext): string {
  return [
    generatedFileHeader(context, 'resource interfaces'),
    `/** The elements every FHIR ${context.versionLabel} resource has. */`,
    'export interface IResource {',
    '  resourceType: string;',
    '  id?: string;',
    '}',
    '',
  ].join('\n');
}

export function namesOfConcreteResources(context: PlainEmitContext): string[] {
  return concreteResourceNames(context);
}
