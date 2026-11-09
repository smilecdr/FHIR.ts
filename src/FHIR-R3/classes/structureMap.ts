/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Age } from './age';
import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { ContactPoint } from './contactPoint';
import type { Count } from './count';
import type { Distance } from './distance';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { HumanName } from './humanName';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { SampledData } from './sampledData';
import type { Signature } from './signature';
import type { Timing } from './timing';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for StructureMap Resource
 */
export class StructureMap {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Logical URI to reference this structure map (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the structure map (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the structure map (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
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
  /** Date this was last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the structure map (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Context the content is intended to support (0..*) */
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
  /** Structure Definition used by this map (0..*) */
  structure?: Array<StructureMapStructure>;
  /** Other maps used by this map (canonical URLs) (0..*) */
  import?: Array<string>;
  /** Id and extensions of the primitive `import`. */
  _import?: Array<Element | null>;
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
export class StructureMapStructure {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical URL for structure definition (1..1) */
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
 * Named sections for reader convenience
 */
export class StructureMapGroup {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Human-readable label (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Another group that this group adds rules to (0..1) */
  extends?: string;
  /** Id and extensions of the primitive `extends`. */
  _extends?: Element;
  /** none | types | type-and-types (1..1) */
  typeMode?: StructureMapGroup.TypeModeEnum;
  /** Id and extensions of the primitive `typeMode`. */
  _typeMode?: Element;
  /** Additional description/explaination for group (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
  /** Named instance provided when invoking the map (1..*) */
  input: Array<StructureMapInput>;
  /** Transform Rule from source to target (1..*) */
  rule: Array<StructureMapRule>;
}

export namespace StructureMapGroup {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/map-group-type-mode */
  export type TypeModeEnum = 'none' | 'types' | 'type-and-types';
  export const TypeModeEnum = {
    None: 'none' as TypeModeEnum,
    Types: 'types' as TypeModeEnum,
    TypeAndTypes: 'type-and-types' as TypeModeEnum,
  };
}

/**
 * Named instance provided when invoking the map
 */
export class StructureMapInput {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
export class StructureMapRule {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of the rule for internal references (1..1) */
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
export class StructureMapSource {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  defaultValueBase64Binary?: string;
  /** Id and extensions of the primitive `defaultValueBase64Binary`. */
  _defaultValueBase64Binary?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueBoolean?: boolean;
  /** Id and extensions of the primitive `defaultValueBoolean`. */
  _defaultValueBoolean?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueCode?: string;
  /** Id and extensions of the primitive `defaultValueCode`. */
  _defaultValueCode?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueDate?: string;
  /** Id and extensions of the primitive `defaultValueDate`. */
  _defaultValueDate?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueDateTime?: string;
  /** Id and extensions of the primitive `defaultValueDateTime`. */
  _defaultValueDateTime?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueDecimal?: number;
  /** Id and extensions of the primitive `defaultValueDecimal`. */
  _defaultValueDecimal?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueId?: string;
  /** Id and extensions of the primitive `defaultValueId`. */
  _defaultValueId?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueInstant?: string;
  /** Id and extensions of the primitive `defaultValueInstant`. */
  _defaultValueInstant?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueInteger?: number;
  /** Id and extensions of the primitive `defaultValueInteger`. */
  _defaultValueInteger?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueMarkdown?: string;
  /** Id and extensions of the primitive `defaultValueMarkdown`. */
  _defaultValueMarkdown?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueOid?: string;
  /** Id and extensions of the primitive `defaultValueOid`. */
  _defaultValueOid?: Element;
  /** Default value if no value exists (0..1) */
  defaultValuePositiveInt?: number;
  /** Id and extensions of the primitive `defaultValuePositiveInt`. */
  _defaultValuePositiveInt?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueString?: string;
  /** Id and extensions of the primitive `defaultValueString`. */
  _defaultValueString?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueTime?: string;
  /** Id and extensions of the primitive `defaultValueTime`. */
  _defaultValueTime?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueUnsignedInt?: number;
  /** Id and extensions of the primitive `defaultValueUnsignedInt`. */
  _defaultValueUnsignedInt?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueUri?: string;
  /** Id and extensions of the primitive `defaultValueUri`. */
  _defaultValueUri?: Element;
  /** Default value if no value exists (0..1) */
  defaultValueAddress?: Address;
  /** Default value if no value exists (0..1) */
  defaultValueAge?: Age;
  /** Default value if no value exists (0..1) */
  defaultValueAnnotation?: Annotation;
  /** Default value if no value exists (0..1) */
  defaultValueAttachment?: Attachment;
  /** Default value if no value exists (0..1) */
  defaultValueCodeableConcept?: CodeableConcept;
  /** Default value if no value exists (0..1) */
  defaultValueCoding?: Coding;
  /** Default value if no value exists (0..1) */
  defaultValueContactPoint?: ContactPoint;
  /** Default value if no value exists (0..1) */
  defaultValueCount?: Count;
  /** Default value if no value exists (0..1) */
  defaultValueDistance?: Distance;
  /** Default value if no value exists (0..1) */
  defaultValueDuration?: Duration;
  /** Default value if no value exists (0..1) */
  defaultValueHumanName?: HumanName;
  /** Default value if no value exists (0..1) */
  defaultValueIdentifier?: Identifier;
  /** Default value if no value exists (0..1) */
  defaultValueMoney?: Money;
  /** Default value if no value exists (0..1) */
  defaultValuePeriod?: Period;
  /** Default value if no value exists (0..1) */
  defaultValueQuantity?: Quantity;
  /** Default value if no value exists (0..1) */
  defaultValueRange?: Range;
  /** Default value if no value exists (0..1) */
  defaultValueRatio?: Ratio;
  /** Default value if no value exists (0..1) */
  defaultValueReference?: Reference;
  /** Default value if no value exists (0..1) */
  defaultValueSampledData?: SampledData;
  /** Default value if no value exists (0..1) */
  defaultValueSignature?: Signature;
  /** Default value if no value exists (0..1) */
  defaultValueTiming?: Timing;
  /** Default value if no value exists (0..1) */
  defaultValueMeta?: Meta;
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
export class StructureMapTarget {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type or variable this rule applies to (0..1) */
  context?: string;
  /** Id and extensions of the primitive `context`. */
  _context?: Element;
  /** type | variable (0..1) */
  contextType?: StructureMapTarget.ContextTypeEnum;
  /** Id and extensions of the primitive `contextType`. */
  _contextType?: Element;
  /** Field to create in the context (0..1) */
  element?: string;
  /** Id and extensions of the primitive `element`. */
  _element?: Element;
  /** Named context for field, if desired, and a field is specified (0..1) */
  variable?: string;
  /** Id and extensions of the primitive `variable`. */
  _variable?: Element;
  /** first | share | last | collate (0..*) */
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/map-context-type */
  export type ContextTypeEnum = 'type' | 'variable';
  export const ContextTypeEnum = {
    Type: 'type' as ContextTypeEnum,
    Variable: 'variable' as ContextTypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/map-target-list-mode */
  export type ListModeEnum = 'first' | 'share' | 'last' | 'collate';
  export const ListModeEnum = {
    First: 'first' as ListModeEnum,
    Share: 'share' as ListModeEnum,
    Last: 'last' as ListModeEnum,
    Collate: 'collate' as ListModeEnum,
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
export class StructureMapParameter {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
}

/**
 * Which other rules to apply in the context of this rule
 */
export class StructureMapDependent {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of a rule or group to apply (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Variable to pass to the rule or group (1..*) */
  variable?: Array<string>;
  /** Id and extensions of the primitive `variable`. */
  _variable?: Array<Element | null>;
}
