import { ClassModel, FieldModel, FieldTypeModel, FileModel } from './modelTypes';
import { lowerFirst, parameterNameFor, upperFirst } from './naming';

/** Everything the emitter needs to know about the other classes of the same FHIR version. */
export interface EmitContext {
  versionLabel: string;
  packageLabel: string;
  /** Module (file) name of every generated class. */
  moduleNamesByClassName: ReadonlyMap<string, string>;
  classModelsByClassName: ReadonlyMap<string, ClassModel>;
  /** Classes that at least one other generated class extends. */
  extendedClassNames: ReadonlySet<string>;
  /** Name of the plain data type with the same JSON shape, for the classes that have one. */
  plainTypeNamesByClassName: ReadonlyMap<string, string>;
  /** Import path of the plain types barrel, relative to the model directory. */
  plainTypesImportPath: string;
}

const CORE_IMPORT_PATH = '../../library/model';
const ELEMENT_CLASS_NAME = 'Element';
const EXTENSION_CLASS_NAME = 'Extension';
const REFERENCE_CLASS_NAME = 'Reference';
const RESOURCE_CLASS_NAME = 'Resource';

/** Members of the core Base class that a generated accessor must never shadow. */
export const RESERVED_MEMBER_NAMES: ReadonlySet<string> = new Set([
  'constructor',
  'ownFields',
  'fromJSON',
  'toJSON',
  'isEmpty',
  'copy',
  'validate',
  'isValid',
  'assertValid',
  'fhirType',
  'typeRegistry',
  'serialize',
  'setFieldValue',
  'addFieldValue',
  'hasFieldValue',
  'getChoiceValue',
  'hasChoiceValue',
  'createInstance',
]);

export function generatedFileHeader(
  context: { versionLabel: string; packageLabel: string },
  contentDescription = 'model classes'
): string {
  return [
    '/**',
    ` * FHIR ${context.versionLabel} ${contentDescription} generated from ${context.packageLabel}.`,
    ' * Do not edit by hand. Change tools/generator and run `npm run generate` instead.',
    ' */',
    '',
  ].join('\n');
}

function ancestorClassNames(classModel: ClassModel, context: EmitContext): string[] {
  const ancestors: string[] = [];
  let currentBaseName = classModel.baseClassName;
  while (currentBaseName !== 'Base') {
    ancestors.push(currentBaseName);
    const baseClassModel = context.classModelsByClassName.get(currentBaseName);
    if (baseClassModel === undefined) {
      throw new Error(`${classModel.className} extends unknown class ${currentBaseName}`);
    }
    currentBaseName = baseClassModel.baseClassName;
  }
  return ancestors;
}

function hasPrimitiveField(classModel: ClassModel): boolean {
  return classModel.fields.some((fieldModel) =>
    fieldModel.types.some((fieldType) => fieldType.isPrimitive)
  );
}

function ownsExtensionList(classModel: ClassModel): boolean {
  return classModel.fields.some(
    (fieldModel) =>
      fieldModel.elementName === 'extension' &&
      fieldModel.isList &&
      fieldModel.types[0]?.typeCode === EXTENSION_CLASS_NAME
  );
}

/**
 * Writes the TypeScript source of one module: the class of a FHIR type plus
 * the classes of its backbone elements.
 */
export class ClassFileEmitter {
  private readonly localClassNames: ReadonlySet<string>;
  /** Classes that may be imported as values without risking a circular `extends`. */
  private readonly valueImportedClassNames = new Set<string>();
  private readonly typeImportedClassNames = new Set<string>();
  private readonly isBaseClassFile: boolean;
  private usesValueSetCodes = false;
  private usesPlainTypes = false;

  constructor(
    private readonly fileModel: FileModel,
    private readonly context: EmitContext
  ) {
    this.localClassNames = new Set(fileModel.classes.map((classModel) => classModel.className));
    this.isBaseClassFile = fileModel.classes.some((classModel) =>
      context.extendedClassNames.has(classModel.className)
    );
  }

  emit(): string {
    const classSources = this.fileModel.classes.map((classModel) => this.emitClass(classModel));
    return [generatedFileHeader(this.context), this.emitImports(), ...classSources].join('\n');
  }

  /**
   * Records that a class is used. A module holding a class that others extend
   * must finish loading before its subclasses are defined, so it only imports
   * its own ancestors and Element as values; every other class is imported as
   * a type and created through the type registry.
   */
  private useClass(className: string, owningClass: ClassModel): void {
    if (this.localClassNames.has(className)) {
      return;
    }
    const isSafeValueImport =
      !this.isBaseClassFile ||
      className === ELEMENT_CLASS_NAME ||
      ancestorClassNames(owningClass, this.context).includes(className);
    if (isSafeValueImport) {
      this.valueImportedClassNames.add(className);
    } else {
      this.typeImportedClassNames.add(className);
    }
  }

  private newInstanceExpression(className: string): string {
    const canUseConstructor =
      this.localClassNames.has(className) || this.valueImportedClassNames.has(className);
    return canUseConstructor
      ? `new ${className}()`
      : `this.createInstance<${className}>('${className}')`;
  }

  private emitImports(): string {
    const importLines: string[] = [];
    const needsBase = this.fileModel.classes.some(
      (classModel) => classModel.baseClassName === 'Base'
    );
    const isReferenceFile = this.localClassNames.has(REFERENCE_CLASS_NAME);
    const coreValueNames = [
      ...(needsBase ? ['Base'] : []),
      ...(isReferenceFile ? ['FhirModelError'] : []),
    ];
    if (coreValueNames.length > 0) {
      importLines.push(`import { ${coreValueNames.join(', ')} } from '${CORE_IMPORT_PATH}';`);
    }
    const coreTypeNames = ['FieldDefinition', ...(needsBase ? ['TypeRegistry'] : [])];
    importLines.push(`import type { ${coreTypeNames.join(', ')} } from '${CORE_IMPORT_PATH}';`);
    importLines.push(`import { modelTypeRegistry } from './modelTypeRegistry';`);
    if (this.usesValueSetCodes) {
      importLines.push(`import * as valueSetCodes from './valueSetCodes';`);
    }
    if (this.usesPlainTypes) {
      importLines.push(`import type * as plainTypes from '${this.context.plainTypesImportPath}';`);
    }
    importLines.push(...this.emitClassImports(this.valueImportedClassNames, 'import'));
    const typeOnlyClassNames = new Set(
      Array.from(this.typeImportedClassNames).filter(
        (className) => !this.valueImportedClassNames.has(className)
      )
    );
    importLines.push(...this.emitClassImports(typeOnlyClassNames, 'import type'));
    return `${importLines.join('\n')}\n`;
  }

  private emitClassImports(classNames: ReadonlySet<string>, importKeyword: string): string[] {
    const classNamesByModuleName = new Map<string, string[]>();
    for (const className of Array.from(classNames).sort()) {
      const moduleName = this.context.moduleNamesByClassName.get(className);
      if (moduleName === undefined) {
        throw new Error(`${this.fileModel.moduleName} uses unknown class ${className}`);
      }
      classNamesByModuleName.set(moduleName, [
        ...(classNamesByModuleName.get(moduleName) ?? []),
        className,
      ]);
    }
    return Array.from(classNamesByModuleName.keys())
      .sort()
      .map(
        (moduleName) =>
          `${importKeyword} { ${(classNamesByModuleName.get(moduleName) ?? []).join(', ')} } from './${moduleName}';`
      );
  }

  private emitClass(classModel: ClassModel): string {
    const { className } = classModel;
    const isRootClass = classModel.baseClassName === 'Base';
    if (!isRootClass) {
      this.useClass(classModel.baseClassName, classModel);
    }
    if (hasPrimitiveField(classModel)) {
      this.useClass(ELEMENT_CLASS_NAME, classModel);
    }
    for (const fieldModel of classModel.fields) {
      for (const fieldType of fieldModel.types) {
        if (!fieldType.isPrimitive) {
          this.useClass(fieldType.typeCode, classModel);
        }
        if (fieldType.valueSetConstantName !== undefined) {
          this.usesValueSetCodes = true;
        }
      }
    }

    const memberSources: string[] = [
      `static override readonly ownFields: readonly FieldDefinition[] = [${classModel.fields
        .map((fieldModel) => this.emitFieldDefinition(fieldModel))
        .join(',\n')}];`,
    ];
    if (classModel.isConcreteResource) {
      memberSources.push(`readonly resourceType = '${className}';`);
    } else if (className === RESOURCE_CLASS_NAME) {
      memberSources.push(
        `/** The FHIR resource type, for example \`Patient\`. */\nabstract readonly resourceType: string;`
      );
    }
    memberSources.push(
      ...classModel.fields.map((fieldModel) => this.emitFieldDeclarations(fieldModel))
    );
    memberSources.push(`override fhirType(): string { return '${classModel.fhirTypeName}'; }`);
    if (isRootClass) {
      memberSources.push(
        `protected override typeRegistry(): TypeRegistry { return modelTypeRegistry; }`
      );
    }
    const plainTypeName = this.context.plainTypeNamesByClassName.get(className);
    if (plainTypeName !== undefined && !this.context.extendedClassNames.has(className)) {
      this.usesPlainTypes = true;
      memberSources.push(
        `/** FHIR JSON for this ${className}, typed as the plain \`${plainTypeName}\` data type. */\n` +
          `override toJSON(): plainTypes.${plainTypeName} { return this.serialize() as plainTypes.${plainTypeName}; }`
      );
    }
    for (const fieldModel of classModel.fields) {
      memberSources.push(this.emitAccessors(fieldModel, classModel));
    }
    if (ownsExtensionList(classModel)) {
      memberSources.push(this.emitExtensionHelpers());
    }
    if (className === REFERENCE_CLASS_NAME) {
      this.useClass(RESOURCE_CLASS_NAME, classModel);
      memberSources.push(this.emitReferenceFactory());
    }

    const classKeyword = classModel.isAbstract ? 'abstract class' : 'class';
    const classSource = [
      `/**\n * ${classModel.description || className}\n */`,
      `export ${classKeyword} ${className} extends ${classModel.baseClassName} {`,
      memberSources.join('\n\n'),
      '}',
      '',
      `modelTypeRegistry.register('${className}', ${className}, ${String(classModel.isConcreteResource)});`,
    ];
    if (classModel.isConcreteResource) {
      classSource.push(
        '',
        `/** True when the value is a ${className} model instance. */`,
        `export function is${className}(candidate: unknown): candidate is ${className} { return candidate instanceof ${className}; }`
      );
    }
    return `${classSource.join('\n')}\n`;
  }

  private emitFieldDefinition(fieldModel: FieldModel): string {
    const typeSources = fieldModel.types.map((fieldType) => {
      const typeProperties = [
        `jsonKey: '${fieldType.jsonKey}'`,
        `typeCode: '${fieldType.typeCode}'`,
      ];
      if (fieldType.valueSetConstantName !== undefined) {
        typeProperties.push(`allowedCodes: valueSetCodes.${fieldType.valueSetConstantName}`);
      }
      if (fieldType.targetResourceTypes !== undefined) {
        const quotedTargets = fieldType.targetResourceTypes.map((targetType) => `'${targetType}'`);
        typeProperties.push(`targetResourceTypes: [${quotedTargets.join(', ')}]`);
      }
      return `{ ${typeProperties.join(', ')} }`;
    });
    const maximumSource = Number.isFinite(fieldModel.maximum)
      ? String(fieldModel.maximum)
      : 'Infinity';
    return (
      `{ elementName: '${fieldModel.elementName}', minimum: ${fieldModel.minimum}, maximum: ${maximumSource}, ` +
      `isList: ${String(fieldModel.isList)}, types: [${typeSources.join(', ')}] }`
    );
  }

  private emitFieldDeclarations(fieldModel: FieldModel): string {
    const declarationLines: string[] = [];
    for (const fieldType of fieldModel.types) {
      const storedType = fieldModel.isList
        ? `${fieldType.typeScriptType}[]`
        : fieldType.typeScriptType;
      declarationLines.push(
        `/** ${this.describeField(fieldModel)} */`,
        `${fieldType.jsonKey}?: ${storedType};`
      );
      if (fieldType.isPrimitive) {
        const extensionType = fieldModel.isList
          ? `(${ELEMENT_CLASS_NAME} | null)[]`
          : ELEMENT_CLASS_NAME;
        declarationLines.push(
          `/** Id and extensions of the primitive \`${fieldType.jsonKey}\`. */`,
          `_${fieldType.jsonKey}?: ${extensionType};`
        );
      }
    }
    return declarationLines.join('\n');
  }

  private describeField(fieldModel: FieldModel): string {
    const maximumText = Number.isFinite(fieldModel.maximum) ? String(fieldModel.maximum) : '*';
    const cardinality = `${fieldModel.minimum}..${maximumText}`;
    return fieldModel.description.length > 0
      ? `${fieldModel.description} (${cardinality})`
      : `Cardinality ${cardinality}`;
  }

  private emitAccessors(fieldModel: FieldModel, classModel: ClassModel): string {
    if (fieldModel.isChoice) {
      return this.emitChoiceAccessors(fieldModel, classModel);
    }
    const fieldType = fieldModel.types[0] as FieldTypeModel;
    if (fieldModel.isList) {
      return fieldType.isPrimitive
        ? this.emitPrimitiveListAccessors(fieldModel, fieldType, classModel)
        : this.emitClassListAccessors(fieldModel, fieldType, classModel);
    }
    return fieldType.isPrimitive
      ? this.emitSinglePrimitiveAccessors(fieldModel, fieldType, classModel)
      : this.emitSingleClassAccessors(fieldModel, fieldType, classModel);
  }

  private emitSinglePrimitiveAccessors(
    fieldModel: FieldModel,
    fieldType: FieldTypeModel,
    classModel: ClassModel
  ): string {
    const { jsonKey, typeScriptType } = fieldType;
    const accessorNames = accessorNamesFor(jsonKey, classModel);
    const parameterName = parameterNameFor(jsonKey);
    const extensionParameterName = `${jsonKey}Element`;
    return [
      `/** ${this.describeField(fieldModel)} */`,
      `${accessorNames.getter}(): ${typeScriptType} | undefined { return this.${jsonKey}; }`,
      '',
      `/** Sets \`${jsonKey}\`. Throws a FhirModelError when the value is not a valid FHIR ${fieldType.typeCode}${
        fieldType.valueSetConstantName === undefined ? '' : ' or is outside the required value set'
      }. */`,
      `${accessorNames.setter}(${parameterName}: ${typeScriptType} | undefined): this { return this.setFieldValue('${jsonKey}', ${parameterName}); }`,
      '',
      `${accessorNames.presenceCheck}(): boolean { return this.hasFieldValue('${jsonKey}'); }`,
      '',
      `/** The element carrying the id and extensions of \`${jsonKey}\`. Created when absent. */`,
      `${accessorNames.elementGetter}(): ${ELEMENT_CLASS_NAME} {`,
      `  if (this._${jsonKey} === undefined) { this._${jsonKey} = ${this.newInstanceExpression(ELEMENT_CLASS_NAME)}; }`,
      `  return this._${jsonKey};`,
      '}',
      '',
      `${accessorNames.elementSetter}(${extensionParameterName}: ${ELEMENT_CLASS_NAME} | undefined): this {`,
      `  this._${jsonKey} = ${extensionParameterName};`,
      '  return this;',
      '}',
    ].join('\n');
  }

  private emitSingleClassAccessors(
    fieldModel: FieldModel,
    fieldType: FieldTypeModel,
    classModel: ClassModel
  ): string {
    const { jsonKey, typeScriptType } = fieldType;
    const accessorNames = accessorNamesFor(jsonKey, classModel);
    const parameterName = parameterNameFor(jsonKey);
    const getterSource = fieldType.isAbstractClass
      ? [
          `/** ${this.describeField(fieldModel)} */`,
          `${accessorNames.getter}(): ${typeScriptType} | undefined { return this.${jsonKey}; }`,
        ]
      : [
          `/** ${this.describeField(fieldModel)} Created when absent. */`,
          `${accessorNames.getter}(): ${typeScriptType} {`,
          `  if (this.${jsonKey} === undefined) { this.${jsonKey} = ${this.newInstanceExpression(typeScriptType)}; }`,
          `  return this.${jsonKey};`,
          '}',
        ];
    return [
      ...getterSource,
      '',
      `${accessorNames.setter}(${parameterName}: ${typeScriptType} | undefined): this { return this.setFieldValue('${jsonKey}', ${parameterName}); }`,
      '',
      `${accessorNames.presenceCheck}(): boolean { return this.hasFieldValue('${jsonKey}'); }`,
    ].join('\n');
  }

  private emitListGetterAndSetter(
    fieldModel: FieldModel,
    fieldType: FieldTypeModel,
    classModel: ClassModel
  ): string[] {
    const { jsonKey, typeScriptType } = fieldType;
    const accessorNames = accessorNamesFor(jsonKey, classModel);
    const parameterName = parameterNameFor(jsonKey);
    return [
      `/** ${this.describeField(fieldModel)} Never undefined; an empty list is created when absent. */`,
      `${accessorNames.getter}(): ${typeScriptType}[] {`,
      `  if (this.${jsonKey} === undefined) { this.${jsonKey} = []; }`,
      `  return this.${jsonKey};`,
      '}',
      '',
      `${accessorNames.setter}(${parameterName}: ${typeScriptType}[] | undefined): this { return this.setFieldValue('${jsonKey}', ${parameterName}); }`,
      '',
    ];
  }

  private emitPrimitiveListAccessors(
    fieldModel: FieldModel,
    fieldType: FieldTypeModel,
    classModel: ClassModel
  ): string {
    const { jsonKey, typeScriptType } = fieldType;
    const accessorNames = accessorNamesFor(jsonKey, classModel);
    const parameterName = parameterNameFor(jsonKey);
    return [
      ...this.emitListGetterAndSetter(fieldModel, fieldType, classModel),
      `${accessorNames.presenceCheck}(): boolean { return this.hasFieldValue('${jsonKey}'); }`,
      '',
      `/** Appends one value to \`${jsonKey}\`. Throws a FhirModelError when it is not a valid FHIR ${fieldType.typeCode}. */`,
      `${accessorNames.adder}(${parameterName}: ${typeScriptType}): this { return this.addFieldValue('${jsonKey}', ${parameterName}); }`,
    ].join('\n');
  }

  private emitClassListAccessors(
    fieldModel: FieldModel,
    fieldType: FieldTypeModel,
    classModel: ClassModel
  ): string {
    const { jsonKey, typeScriptType } = fieldType;
    const accessorNames = accessorNamesFor(jsonKey, classModel);
    const itemParameterName = parameterNameFor(lowerFirst(typeScriptType));
    const createdItemName = `created${typeScriptType}`;
    const firstItemName = `first${typeScriptType}`;
    const isExtensionList = jsonKey === 'extension' && ownsExtensionList(classModel);
    const hasMethodSource = isExtensionList
      ? []
      : [
          `${accessorNames.presenceCheck}(): boolean { return this.hasFieldValue('${jsonKey}'); }`,
          '',
        ];
    if (fieldType.isAbstractClass) {
      return [
        ...this.emitListGetterAndSetter(fieldModel, fieldType, classModel),
        ...hasMethodSource,
        `/** Appends one ${typeScriptType} to \`${jsonKey}\`. */`,
        `${accessorNames.adder}(${itemParameterName}: ${typeScriptType}): this { return this.addFieldValue('${jsonKey}', ${itemParameterName}); }`,
      ].join('\n');
    }
    return [
      ...this.emitListGetterAndSetter(fieldModel, fieldType, classModel),
      ...hasMethodSource,
      `/** Appends a new, empty ${typeScriptType} to \`${jsonKey}\` and returns it so it can be filled in. */`,
      `${accessorNames.adder}(): ${typeScriptType};`,
      `/** Appends the given ${typeScriptType} to \`${jsonKey}\` and returns this object for chaining. */`,
      `${accessorNames.adder}(${itemParameterName}: ${typeScriptType}): this;`,
      `${accessorNames.adder}(${itemParameterName}?: ${typeScriptType}): ${typeScriptType} | this {`,
      `  if (${itemParameterName} !== undefined) { return this.addFieldValue('${jsonKey}', ${itemParameterName}); }`,
      `  const ${createdItemName} = ${this.newInstanceExpression(typeScriptType)};`,
      `  this.addFieldValue('${jsonKey}', ${createdItemName});`,
      `  return ${createdItemName};`,
      '}',
      '',
      `/** The first ${typeScriptType} of \`${jsonKey}\`. One is added when the list is empty. */`,
      `${accessorNames.firstRepGetter}(): ${typeScriptType} {`,
      `  const ${firstItemName} = this.${accessorNames.getter}()[0];`,
      `  return ${firstItemName} === undefined ? this.${accessorNames.adder}() : ${firstItemName};`,
      '}',
    ].join('\n');
  }

  private emitChoiceAccessors(fieldModel: FieldModel, classModel: ClassModel): string {
    const accessorNames = accessorNamesFor(fieldModel.elementName, classModel);
    const permittedTypes = Array.from(
      new Set(fieldModel.types.map((fieldType) => fieldType.typeScriptType))
    );
    const choiceUnion = permittedTypes.join(' | ');
    const accessorLines = [
      `/** ${this.describeField(fieldModel)} Whichever type of \`${fieldModel.elementName}[x]\` is set. */`,
      `${accessorNames.getter}(): ${choiceUnion} | undefined { return this.getChoiceValue<${choiceUnion}>('${fieldModel.elementName}'); }`,
      '',
      `/** True when any type of \`${fieldModel.elementName}[x]\` is set. */`,
      `${accessorNames.presenceCheck}(): boolean { return this.hasChoiceValue('${fieldModel.elementName}'); }`,
    ];
    for (const fieldType of fieldModel.types) {
      const { jsonKey, typeScriptType } = fieldType;
      const typedAccessorNames = accessorNamesFor(jsonKey, classModel);
      const parameterName = parameterNameFor(jsonKey);
      accessorLines.push(
        '',
        `${typedAccessorNames.getter}(): ${typeScriptType} | undefined { return this.${jsonKey}; }`,
        '',
        `/** Sets \`${fieldModel.elementName}[x]\` as ${fieldType.typeCode} and clears every other type of it. */`,
        `${typedAccessorNames.setter}(${parameterName}: ${typeScriptType} | undefined): this { return this.setFieldValue('${jsonKey}', ${parameterName}); }`,
        '',
        `${typedAccessorNames.presenceCheck}(): boolean { return this.hasFieldValue('${jsonKey}'); }`
      );
    }
    return accessorLines.join('\n');
  }

  private emitExtensionHelpers(): string {
    return [
      '/** True when an extension is present. With a URL, true when an extension with that URL is present. */',
      'hasExtension(extensionUrl?: string): boolean {',
      `  if (extensionUrl === undefined) { return this.hasFieldValue('extension'); }`,
      '  return this.getExtensionsByUrl(extensionUrl).length > 0;',
      '}',
      '',
      '/** Every extension with the given URL. */',
      `getExtensionsByUrl(extensionUrl: string): ${EXTENSION_CLASS_NAME}[] {`,
      '  return this.getExtension().filter((candidateExtension) => candidateExtension.url === extensionUrl);',
      '}',
      '',
      '/** The first extension with the given URL, or undefined when there is none. */',
      `getExtensionByUrl(extensionUrl: string): ${EXTENSION_CLASS_NAME} | undefined {`,
      '  return this.getExtensionsByUrl(extensionUrl)[0];',
      '}',
    ].join('\n');
  }

  private emitReferenceFactory(): string {
    return [
      '/** Builds a relative reference such as `Patient/123` to a resource that has an id. */',
      `static to(resource: ${RESOURCE_CLASS_NAME}): ${REFERENCE_CLASS_NAME} {`,
      '  const resourceId = resource.getId();',
      '  if (resourceId === undefined) {',
      "    throw new FhirModelError('required', `${resource.resourceType}.id`, 'a resource needs an id before it can be referenced');",
      '  }',
      `  return new ${REFERENCE_CLASS_NAME}().setReference(\`\${resource.resourceType}/\${resourceId}\`);`,
      '}',
    ].join('\n');
  }
}

/** The accessor method names of one element or one typed variant of a choice element. */
export interface AccessorNames {
  getter: string;
  setter: string;
  presenceCheck: string;
  adder: string;
  firstRepGetter: string;
  elementGetter: string;
  elementSetter: string;
}

/**
 * Accessor names follow HAPI: `getX`, `setX`, `hasX`, `addX`. A stored property
 * and a method cannot share a name, so when a sibling element is itself called
 * `addItem` or `hasSeverity` the accessor is named `addItemEntry` or `hasSeverityValue`.
 */
export function accessorNamesFor(memberName: string, classModel: ClassModel): AccessorNames {
  const propertyNames = new Set(
    classModel.fields.flatMap((fieldModel) =>
      fieldModel.types.map((fieldType) => fieldType.jsonKey)
    )
  );
  const memberSuffix = upperFirst(memberName);
  const nameAvoidingProperties = (methodPrefix: string, clashSuffix: string): string => {
    const preferredName = `${methodPrefix}${memberSuffix}`;
    return propertyNames.has(preferredName) ? `${preferredName}${clashSuffix}` : preferredName;
  };
  const getter = nameAvoidingProperties('get', 'Value');
  const setter = nameAvoidingProperties('set', 'Value');
  return {
    getter,
    setter,
    presenceCheck: nameAvoidingProperties('has', 'Value'),
    adder: nameAvoidingProperties('add', 'Entry'),
    firstRepGetter: `${getter}FirstRep`,
    elementGetter: `${getter}Element`,
    elementSetter: `${setter}Element`,
  };
}

/** Names of the accessor methods and stored properties the emitter creates for a class. */
export function memberNamesOf(classModel: ClassModel): {
  methodNames: string[];
  propertyNames: string[];
} {
  const methodNames: string[] = [];
  const propertyNames: string[] = [];
  for (const fieldModel of classModel.fields) {
    if (fieldModel.isChoice) {
      const choiceAccessorNames = accessorNamesFor(fieldModel.elementName, classModel);
      methodNames.push(choiceAccessorNames.getter, choiceAccessorNames.presenceCheck);
    }
    for (const fieldType of fieldModel.types) {
      const accessorNames = accessorNamesFor(fieldType.jsonKey, classModel);
      propertyNames.push(fieldType.jsonKey);
      methodNames.push(accessorNames.getter, accessorNames.setter, accessorNames.presenceCheck);
      if (fieldType.isPrimitive) {
        propertyNames.push(`_${fieldType.jsonKey}`);
      }
      if (fieldType.isPrimitive && !fieldModel.isList && !fieldModel.isChoice) {
        methodNames.push(accessorNames.elementGetter, accessorNames.elementSetter);
      }
      if (fieldModel.isList) {
        methodNames.push(accessorNames.adder);
        if (!fieldType.isPrimitive && !fieldType.isAbstractClass) {
          methodNames.push(accessorNames.firstRepGetter);
        }
      }
    }
  }
  if (ownsExtensionList(classModel)) {
    methodNames.push('getExtensionsByUrl', 'getExtensionByUrl');
  }
  return { methodNames, propertyNames };
}
