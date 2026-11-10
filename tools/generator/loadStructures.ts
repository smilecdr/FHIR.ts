import { ClassModel, FieldModel, FieldTypeModel, FileModel } from './modelTypes';
import { classNameForElementPath, documentationText, lowerFirst, upperFirst } from './naming';
import { readPackageResources } from './specPackages';
import { ValueSetExpander } from './valueSets';

interface ElementTypeDefinition {
  code: string;
  /** A list from R4 on. STU3 has one profile per type entry and repeats the entry. */
  targetProfile?: string[] | string;
  extension?: { url: string; valueUrl?: string; valueUri?: string }[];
}

interface ElementDefinition {
  path: string;
  short?: string;
  min: number;
  max: string;
  base?: { path: string; min: number; max: string };
  type?: ElementTypeDefinition[];
  contentReference?: string;
  binding?: {
    strength: string;
    /** R4 and later. */
    valueSet?: string;
    /** STU3. */
    valueSetUri?: string;
    valueSetReference?: { reference?: string };
  };
}

interface StructureDefinition {
  name: string;
  kind: string;
  abstract: boolean;
  derivation?: string;
  baseDefinition?: string;
  description?: string;
  snapshot: { element: ElementDefinition[] };
}

const FHIR_TYPE_EXTENSION_URL =
  'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type';
const FHIRPATH_SYSTEM_TYPE_PREFIX = 'http://hl7.org/fhirpath/System.';

/** Definitions that describe the type system itself rather than a class to generate. */
const SKIPPED_STRUCTURE_NAMES: ReadonlySet<string> = new Set([
  'Base',
  'PrimitiveType',
  'CanonicalResource',
  'MetadataResource',
]);

/** Element is abstract in the spec but is instantiated to carry primitive extensions. */
const ALWAYS_CONCRETE_CLASS_NAMES: ReadonlySet<string> = new Set(['Element']);

/** The spec prefixes data type descriptions with boilerplate that adds nothing to the class comment. */
const GENERIC_DESCRIPTION_PREFIX_REGEX = /^Base StructureDefinition for \w+ (Type|Resource): /;

const INHERITED_ELEMENT_BASE_PREFIXES: readonly string[] = ['Element.', 'BackboneElement.'];

/** STU3 snapshots leave out `base`, so the inherited elements are recognised by name there. */
const BACKBONE_ELEMENT_INHERITED_NAMES: ReadonlySet<string> = new Set([
  'id',
  'extension',
  'modifierExtension',
]);

function isInheritedByBackboneElement(elementDefinition: ElementDefinition): boolean {
  if (elementDefinition.base === undefined) {
    const elementName = elementDefinition.path.slice(elementDefinition.path.lastIndexOf('.') + 1);
    return BACKBONE_ELEMENT_INHERITED_NAMES.has(elementName);
  }
  const basePath = elementDefinition.base.path;
  return INHERITED_ELEMENT_BASE_PREFIXES.some((inheritedPrefix) =>
    basePath.startsWith(inheritedPrefix)
  );
}

function targetProfilesOf(elementType: ElementTypeDefinition): string[] {
  if (elementType.targetProfile === undefined) {
    return [];
  }
  return Array.isArray(elementType.targetProfile)
    ? elementType.targetProfile
    : [elementType.targetProfile];
}

const NUMBER_PRIMITIVE_TYPE_CODES: ReadonlySet<string> = new Set([
  'integer',
  'decimal',
  'positiveInt',
  'unsignedInt',
]);

function lastUrlSegment(canonicalUrl: string): string {
  return canonicalUrl.slice(canonicalUrl.lastIndexOf('/') + 1);
}

function parseMaximum(maximumText: string): number {
  return maximumText === '*' ? Number.POSITIVE_INFINITY : Number(maximumText);
}

export function typeScriptTypeForPrimitive(primitiveTypeCode: string): string {
  if (primitiveTypeCode === 'boolean') {
    return 'boolean';
  }
  return NUMBER_PRIMITIVE_TYPE_CODES.has(primitiveTypeCode) ? 'number' : 'string';
}

/**
 * Reads the StructureDefinitions of a spec package and turns every resource
 * and complex data type into the class models the emitter writes out.
 */
export class StructureLoader {
  private readonly structureDefinitions: StructureDefinition[];
  private readonly primitiveTypeCodes: ReadonlySet<string>;
  private readonly abstractClassNames: ReadonlySet<string>;
  private readonly generatedTypeNames: ReadonlySet<string>;

  constructor(
    packageContentDirectory: string,
    private readonly valueSetExpander: ValueSetExpander
  ) {
    const allStructureDefinitions = readPackageResources<StructureDefinition>(
      packageContentDirectory,
      'StructureDefinition'
    );
    this.primitiveTypeCodes = new Set(
      allStructureDefinitions
        .filter((structureDefinition) => structureDefinition.kind === 'primitive-type')
        .map((structureDefinition) => structureDefinition.name)
    );
    this.structureDefinitions = allStructureDefinitions
      .filter(
        (structureDefinition) =>
          (structureDefinition.kind === 'resource' ||
            structureDefinition.kind === 'complex-type') &&
          structureDefinition.derivation !== 'constraint' &&
          !SKIPPED_STRUCTURE_NAMES.has(structureDefinition.name)
      )
      .sort((leftDefinition, rightDefinition) =>
        leftDefinition.name < rightDefinition.name
          ? -1
          : leftDefinition.name > rightDefinition.name
            ? 1
            : 0
      );
    this.generatedTypeNames = new Set(
      this.structureDefinitions.map((structureDefinition) => structureDefinition.name)
    );
    this.abstractClassNames = new Set(
      this.structureDefinitions
        .filter(
          (structureDefinition) =>
            structureDefinition.abstract &&
            !ALWAYS_CONCRETE_CLASS_NAMES.has(structureDefinition.name)
        )
        .map((structureDefinition) => structureDefinition.name)
    );
  }

  /** The primitive type codes of this FHIR version, such as `string`, `date` and `code`. */
  getPrimitiveTypeCodes(): string[] {
    return Array.from(this.primitiveTypeCodes).sort();
  }

  loadFiles(): FileModel[] {
    return this.structureDefinitions.map((structureDefinition) =>
      this.buildFile(structureDefinition)
    );
  }

  private buildFile(structureDefinition: StructureDefinition): FileModel {
    const typeName = structureDefinition.name;
    const elementDefinitions = structureDefinition.snapshot.element;
    const pathsWithChildren = new Set(
      elementDefinitions.map((elementDefinition) =>
        elementDefinition.path.slice(0, elementDefinition.path.lastIndexOf('.'))
      )
    );
    const baseTypeName =
      structureDefinition.baseDefinition === undefined
        ? 'Base'
        : lastUrlSegment(structureDefinition.baseDefinition);
    const isAbstract = this.abstractClassNames.has(typeName);

    const classes: ClassModel[] = [
      {
        className: typeName,
        fhirTypeName: typeName,
        baseClassName: this.generatedTypeNames.has(baseTypeName) ? baseTypeName : 'Base',
        isAbstract,
        isConcreteResource: structureDefinition.kind === 'resource' && !isAbstract,
        description: documentationText(structureDefinition.description).replace(
          GENERIC_DESCRIPTION_PREFIX_REGEX,
          ''
        ),
        fields: this.buildFields(
          typeName,
          elementDefinitions,
          pathsWithChildren,
          (elementDefinition) =>
            (elementDefinition.base?.path ?? elementDefinition.path).startsWith(`${typeName}.`)
        ),
      },
    ];

    for (const elementDefinition of elementDefinitions) {
      const isNestedClass =
        elementDefinition.path !== typeName && pathsWithChildren.has(elementDefinition.path);
      if (!isNestedClass) {
        continue;
      }
      const nestedBaseTypeName = elementDefinition.type?.[0]?.code;
      if (nestedBaseTypeName !== 'BackboneElement' && nestedBaseTypeName !== 'Element') {
        throw new Error(
          `${elementDefinition.path} has child elements but is of type ${String(nestedBaseTypeName)}`
        );
      }
      classes.push({
        className: classNameForElementPath(elementDefinition.path),
        fhirTypeName: elementDefinition.path,
        baseClassName: nestedBaseTypeName,
        isAbstract: false,
        isConcreteResource: false,
        description: documentationText(elementDefinition.short),
        fields: this.buildFields(
          elementDefinition.path,
          elementDefinitions,
          pathsWithChildren,
          (childDefinition) => !isInheritedByBackboneElement(childDefinition)
        ),
      });
    }
    return { moduleName: lowerFirst(typeName), classes };
  }

  private buildFields(
    parentPath: string,
    elementDefinitions: ElementDefinition[],
    pathsWithChildren: ReadonlySet<string>,
    isDeclaredHere: (elementDefinition: ElementDefinition) => boolean
  ): FieldModel[] {
    const childPathPrefix = `${parentPath}.`;
    return elementDefinitions
      .filter(
        (elementDefinition) =>
          elementDefinition.path.startsWith(childPathPrefix) &&
          !elementDefinition.path.slice(childPathPrefix.length).includes('.') &&
          elementDefinition.max !== '0' &&
          isDeclaredHere(elementDefinition)
      )
      .map((elementDefinition) => this.buildField(elementDefinition, pathsWithChildren));
  }

  private buildField(
    elementDefinition: ElementDefinition,
    pathsWithChildren: ReadonlySet<string>
  ): FieldModel {
    const rawElementName = elementDefinition.path.slice(
      elementDefinition.path.lastIndexOf('.') + 1
    );
    const isChoice = rawElementName.endsWith('[x]');
    const elementName = isChoice ? rawElementName.slice(0, -'[x]'.length) : rawElementName;
    const maximum = parseMaximum(elementDefinition.max);
    const isList = parseMaximum(elementDefinition.base?.max ?? elementDefinition.max) > 1;
    if (isChoice && isList) {
      throw new Error(
        `${elementDefinition.path} is a repeating choice element, which is not supported`
      );
    }

    const types: FieldTypeModel[] = [];
    if (elementDefinition.contentReference !== undefined) {
      const referencedPath = elementDefinition.contentReference.slice(
        elementDefinition.contentReference.indexOf('#') + 1
      );
      types.push(this.classFieldType(elementName, classNameForElementPath(referencedPath)));
    } else if (pathsWithChildren.has(elementDefinition.path)) {
      types.push(this.classFieldType(elementName, classNameForElementPath(elementDefinition.path)));
    } else {
      const targetProfilesByTypeCode = new Map<string, string[]>();
      for (const elementType of elementDefinition.type ?? []) {
        const typeCode = this.resolveTypeCode(elementType, elementDefinition);
        targetProfilesByTypeCode.set(typeCode, [
          ...(targetProfilesByTypeCode.get(typeCode) ?? []),
          ...targetProfilesOf(elementType),
        ]);
      }
      for (const [typeCode, targetProfiles] of targetProfilesByTypeCode) {
        const jsonKey = isChoice ? `${elementName}${upperFirst(typeCode)}` : elementName;
        types.push(
          this.primitiveTypeCodes.has(typeCode)
            ? this.primitiveFieldType(jsonKey, typeCode, elementDefinition)
            : this.classFieldType(jsonKey, typeCode, targetProfiles)
        );
      }
    }
    if (types.length === 0) {
      throw new Error(`${elementDefinition.path} has no type`);
    }
    return {
      elementName,
      description: documentationText(elementDefinition.short),
      minimum: elementDefinition.min,
      maximum,
      isList,
      isChoice,
      types,
    };
  }

  private resolveTypeCode(
    elementType: ElementTypeDefinition,
    elementDefinition: ElementDefinition
  ): string {
    if (!elementType.code.startsWith(FHIRPATH_SYSTEM_TYPE_PREFIX)) {
      return elementType.code;
    }
    if ((elementDefinition.base?.path ?? elementDefinition.path) === 'Resource.id') {
      return 'id';
    }
    const fhirTypeExtension = (elementType.extension ?? []).find(
      (typeExtension) => typeExtension.url === FHIR_TYPE_EXTENSION_URL
    );
    return fhirTypeExtension?.valueUrl ?? fhirTypeExtension?.valueUri ?? 'string';
  }

  private primitiveFieldType(
    jsonKey: string,
    primitiveTypeCode: string,
    elementDefinition: ElementDefinition
  ): FieldTypeModel {
    const binding = elementDefinition.binding;
    const boundValueSet =
      binding?.valueSet ?? binding?.valueSetUri ?? binding?.valueSetReference?.reference;
    const valueSetModel =
      primitiveTypeCode === 'code' &&
      binding?.strength === 'required' &&
      boundValueSet !== undefined
        ? this.valueSetExpander.modelFor(boundValueSet)
        : undefined;
    return {
      jsonKey,
      typeCode: primitiveTypeCode,
      isPrimitive: true,
      typeScriptType:
        valueSetModel === undefined
          ? typeScriptTypeForPrimitive(primitiveTypeCode)
          : `valueSetCodes.${valueSetModel.constantName}`,
      isAbstractClass: false,
      valueSetConstantName: valueSetModel?.constantName,
    };
  }

  /**
   * @param targetProfiles profiles a Reference may point at; undefined for a
   *   backbone element, whose class is generated from the element itself.
   */
  private classFieldType(
    jsonKey: string,
    className: string,
    targetProfiles?: string[]
  ): FieldTypeModel {
    const isNestedClass = targetProfiles === undefined;
    if (!isNestedClass && !this.generatedTypeNames.has(className)) {
      throw new Error(`${jsonKey} uses type ${className}, for which no class is generated`);
    }
    const targetResourceTypes = Array.from(new Set((targetProfiles ?? []).map(lastUrlSegment)));
    const isRestrictedReference =
      className === 'Reference' &&
      targetResourceTypes.length > 0 &&
      !targetResourceTypes.includes('Resource');
    return {
      jsonKey,
      typeCode: className,
      isPrimitive: false,
      typeScriptType: className,
      isAbstractClass: this.abstractClassNames.has(className),
      targetResourceTypes: isRestrictedReference ? targetResourceTypes.sort() : undefined,
    };
  }
}
