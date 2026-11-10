/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMap {
  resourceType: 'StructureMap';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;
  /** Contained, inline Resources (0..*) */
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this structure map, represented as a URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the structure map (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the structure map (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this structure map (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this structure map (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: StructureMap.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the structure map (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for structure map (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this structure map is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** Structure Definition used by this map (0..*) */
  structure?: Array<StructureMapStructure>;
  /** Other maps used by this map (canonical URLs) (0..*) */
  import?: Array<string>;
  /** Id and extensions of the primitive `import`. */
  _import?: Array<Element | null>;
  /** Definition of the constant value used in the map rules (0..*) */
  const?: Array<StructureMapConst>;
  /** Named sections for reader convenience (1..*) */
  group: Array<StructureMapGroup>;
}

export namespace StructureMap {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Structure Definition used by this map
 */
export interface StructureMapStructure {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical reference to structure definition (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** source | queried | target | produced (1..1) */
  mode?: StructureMapStructure.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Name for type in this map (0..1) */
  alias?: string;
  /** Id and extensions of the primitive `alias`. */
  _alias?: Element;
  /** Documentation on use of structure (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

export namespace StructureMapStructure {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/map-model-mode */
  export type ModeEnum = 'source' | 'queried' | 'target' | 'produced';
  export const ModeEnum = {
    Source: 'source' as ModeEnum,
    Queried: 'queried' as ModeEnum,
    Target: 'target' as ModeEnum,
    Produced: 'produced' as ModeEnum,
  };
}

/**
 * Definition of the constant value used in the map rules
 */
export interface StructureMapConst {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Constant name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** FHIRPath exression - value of the constant (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Named sections for reader convenience
 */
export interface StructureMapGroup {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Human-readable label (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Another group that this group adds rules to (0..1) */
  extends?: string;
  /** Id and extensions of the primitive `extends`. */
  _extends?: Element;
  /** types | type-and-types (0..1) */
  typeMode?: StructureMapGroup.TypeModeEnum;
  /** Id and extensions of the primitive `typeMode`. */
  _typeMode?: Element;
  /** Additional description/explanation for group (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
  /** Named instance provided when invoking the map (1..*) */
  input: Array<StructureMapInput>;
  /** Transform Rule from source to target (0..*) */
  rule?: Array<StructureMapRule>;
}

export namespace StructureMapGroup {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/map-group-type-mode */
  export type TypeModeEnum = 'types' | 'type-and-types';
  export const TypeModeEnum = {
    Types: 'types' as TypeModeEnum,
    TypeAndTypes: 'type-and-types' as TypeModeEnum,
  };
}

/**
 * Named instance provided when invoking the map
 */
export interface StructureMapInput {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name for this instance of data (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Type for this instance of data (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** source | target (1..1) */
  mode?: StructureMapInput.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Documentation for this instance of data (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

export namespace StructureMapInput {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/map-input-mode */
  export type ModeEnum = 'source' | 'target';
  export const ModeEnum = { Source: 'source' as ModeEnum, Target: 'target' as ModeEnum };
}

/**
 * Transform Rule from source to target
 */
export interface StructureMapRule {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of the rule for internal references (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Source inputs to the mapping (1..*) */
  source: Array<StructureMapSource>;
  /** Content to create because of this mapping rule (0..*) */
  target?: Array<StructureMapTarget>;
  /** Rules contained in this rule (0..*) */
  rule?: Array<StructureMapRule>;
  /** Which other rules to apply in the context of this rule (0..*) */
  dependent?: Array<StructureMapDependent>;
  /** Documentation for this instance of data (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

/**
 * Source inputs to the mapping
 */
export interface StructureMapSource {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type or variable this rule applies to (1..1) */
  context?: string;
  /** Id and extensions of the primitive `context`. */
  _context?: Element;
  /** Specified minimum cardinality (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;
  /** Specified maximum cardinality (number or *) (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;
  /** Rule only applies if source has this type (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Default value if no value exists (0..1) */
  defaultValue?: string;
  /** Id and extensions of the primitive `defaultValue`. */
  _defaultValue?: Element;
  /** Optional field for this source (0..1) */
  element?: string;
  /** Id and extensions of the primitive `element`. */
  _element?: Element;
  /** first | not_first | last | not_last | only_one (0..1) */
  listMode?: StructureMapSource.ListModeEnum;
  /** Id and extensions of the primitive `listMode`. */
  _listMode?: Element;
  /** Named context for field, if a field is specified (0..1) */
  variable?: string;
  /** Id and extensions of the primitive `variable`. */
  _variable?: Element;
  /** FHIRPath expression - must be true or the rule does not apply (0..1) */
  condition?: string;
  /** Id and extensions of the primitive `condition`. */
  _condition?: Element;
  /** FHIRPath expression - must be true or the mapping engine throws an error instead of completing (0..1) */
  check?: string;
  /** Id and extensions of the primitive `check`. */
  _check?: Element;
  /** Message to put in log if source exists (FHIRPath) (0..1) */
  logMessage?: string;
  /** Id and extensions of the primitive `logMessage`. */
  _logMessage?: Element;
}

export namespace StructureMapSource {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/map-source-list-mode */
  export type ListModeEnum = 'first' | 'not_first' | 'last' | 'not_last' | 'only_one';
  export const ListModeEnum = {
    First: 'first' as ListModeEnum,
    NotFirst: 'not_first' as ListModeEnum,
    Last: 'last' as ListModeEnum,
    NotLast: 'not_last' as ListModeEnum,
    OnlyOne: 'only_one' as ListModeEnum,
  };
}

/**
 * Content to create because of this mapping rule
 */
export interface StructureMapTarget {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Variable this rule applies to (0..1) */
  context?: string;
  /** Id and extensions of the primitive `context`. */
  _context?: Element;
  /** Field to create in the context (0..1) */
  element?: string;
  /** Id and extensions of the primitive `element`. */
  _element?: Element;
  /** Named context for field, if desired, and a field is specified (0..1) */
  variable?: string;
  /** Id and extensions of the primitive `variable`. */
  _variable?: Element;
  /** first | share | last | single (0..*) */
  listMode?: Array<StructureMapTarget.ListModeEnum>;
  /** Id and extensions of the primitive `listMode`. */
  _listMode?: Array<Element | null>;
  /** Internal rule reference for shared list items (0..1) */
  listRuleId?: string;
  /** Id and extensions of the primitive `listRuleId`. */
  _listRuleId?: Element;
  /** create | copy + (0..1) */
  transform?: StructureMapTarget.TransformEnum;
  /** Id and extensions of the primitive `transform`. */
  _transform?: Element;
  /** Parameters to the transform (0..*) */
  parameter?: Array<StructureMapParameter>;
}

export namespace StructureMapTarget {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/map-target-list-mode */
  export type ListModeEnum = 'first' | 'share' | 'last' | 'single';
  export const ListModeEnum = {
    First: 'first' as ListModeEnum,
    Share: 'share' as ListModeEnum,
    Last: 'last' as ListModeEnum,
    Single: 'single' as ListModeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/map-transform */
  export type TransformEnum =
    | 'create'
    | 'copy'
    | 'truncate'
    | 'escape'
    | 'cast'
    | 'append'
    | 'translate'
    | 'reference'
    | 'dateOp'
    | 'uuid'
    | 'pointer'
    | 'evaluate'
    | 'cc'
    | 'c'
    | 'qty'
    | 'id'
    | 'cp';
  export const TransformEnum = {
    Create: 'create' as TransformEnum,
    Copy: 'copy' as TransformEnum,
    Truncate: 'truncate' as TransformEnum,
    Escape: 'escape' as TransformEnum,
    Cast: 'cast' as TransformEnum,
    Append: 'append' as TransformEnum,
    Translate: 'translate' as TransformEnum,
    Reference: 'reference' as TransformEnum,
    DateOp: 'dateOp' as TransformEnum,
    Uuid: 'uuid' as TransformEnum,
    Pointer: 'pointer' as TransformEnum,
    Evaluate: 'evaluate' as TransformEnum,
    Cc: 'cc' as TransformEnum,
    C: 'c' as TransformEnum,
    Qty: 'qty' as TransformEnum,
    Id: 'id' as TransformEnum,
    Cp: 'cp' as TransformEnum,
  };
}

/**
 * Parameters to the transform
 */
export interface StructureMapParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Parameter value - variable or literal (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
}

/**
 * Which other rules to apply in the context of this rule
 */
export interface StructureMapDependent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of a rule or group to apply (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Parameter to pass to the rule or group (1..*) */
  parameter: Array<StructureMapParameter>;
}
