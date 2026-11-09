/** One permitted type of an element, ready to be emitted. */
export interface FieldTypeModel {
  /** JSON property name: the element name, or name plus type for a choice (`valueQuantity`). */
  jsonKey: string;
  /** FHIR primitive code, or the name of the model class. */
  typeCode: string;
  isPrimitive: boolean;
  /** TypeScript type of a single value. */
  typeScriptType: string;
  /** True when the class cannot be instantiated (Resource, DomainResource...). */
  isAbstractClass: boolean;
  /** Name of the constant in valueSetCodes.ts holding the allowed codes. */
  valueSetConstantName?: string;
  targetResourceTypes?: string[];
}

export interface FieldModel {
  elementName: string;
  description: string;
  minimum: number;
  /** `Infinity` for `*`. */
  maximum: number;
  isList: boolean;
  isChoice: boolean;
  types: FieldTypeModel[];
}

export interface ClassModel {
  className: string;
  /** FHIR type name or element path, e.g. `Patient` or `Patient.contact`. */
  fhirTypeName: string;
  /** `Base` for the root classes of a version. */
  baseClassName: string;
  isAbstract: boolean;
  /** True for concrete resources such as Patient, false for Resource and DomainResource. */
  isConcreteResource: boolean;
  description: string;
  fields: FieldModel[];
}

/** All classes generated from one StructureDefinition. The first one is the type itself. */
export interface FileModel {
  /** File name without extension, e.g. `humanName`. */
  moduleName: string;
  classes: ClassModel[];
}
