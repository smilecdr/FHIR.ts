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
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { SampledData } from './sampledData';
import type { Signature } from './signature';
import type { Timing } from './timing';

/**
 * Base StructureDefinition for ElementDefinition Type
 */
export class ElementDefinition {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Path of the element in the hierarchy of elements (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** xmlAttr | xmlText | typeAttr | cdaText | xhtml (0..*) */
  representation?: Array<ElementDefinition.RepresentationEnum>;
  /** Id and extensions of the primitive `representation`. */
  _representation?: Array<Element | null>;
  /** Name for this particular element (in a set of slices) (0..1) */
  sliceName?: string;
  /** Id and extensions of the primitive `sliceName`. */
  _sliceName?: Element;
  /** Name for element to display with or prompt for element (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;
  /** Corresponding codes in terminologies (0..*) */
  code?: Array<Coding>;
  /** This element is sliced - slices follow (0..1) */
  slicing?: ElementDefinitionSlicing;
  /** Concise definition for space-constrained presentation (0..1) */
  short?: string;
  /** Id and extensions of the primitive `short`. */
  _short?: Element;
  /** Full formal definition as narrative text (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
  /** Comments about the use of this element (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Why this resource has been created (0..1) */
  requirements?: string;
  /** Id and extensions of the primitive `requirements`. */
  _requirements?: Element;
  /** Other names (0..*) */
  alias?: Array<string>;
  /** Id and extensions of the primitive `alias`. */
  _alias?: Array<Element | null>;
  /** Minimum Cardinality (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;
  /** Maximum Cardinality (a number or *) (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;
  /** Base definition information for tools (0..1) */
  base?: ElementDefinitionBase;
  /** Reference to definition of content for the element (0..1) */
  contentReference?: string;
  /** Id and extensions of the primitive `contentReference`. */
  _contentReference?: Element;
  /** Data type and Profile for this element (0..*) */
  type?: Array<ElementDefinitionType>;
  /** Specified value if missing from instance (0..1) */
  defaultValueBase64Binary?: string;
  /** Id and extensions of the primitive `defaultValueBase64Binary`. */
  _defaultValueBase64Binary?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueBoolean?: boolean;
  /** Id and extensions of the primitive `defaultValueBoolean`. */
  _defaultValueBoolean?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueCode?: string;
  /** Id and extensions of the primitive `defaultValueCode`. */
  _defaultValueCode?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueDate?: string;
  /** Id and extensions of the primitive `defaultValueDate`. */
  _defaultValueDate?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueDateTime?: string;
  /** Id and extensions of the primitive `defaultValueDateTime`. */
  _defaultValueDateTime?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueDecimal?: number;
  /** Id and extensions of the primitive `defaultValueDecimal`. */
  _defaultValueDecimal?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueId?: string;
  /** Id and extensions of the primitive `defaultValueId`. */
  _defaultValueId?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueInstant?: string;
  /** Id and extensions of the primitive `defaultValueInstant`. */
  _defaultValueInstant?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueInteger?: number;
  /** Id and extensions of the primitive `defaultValueInteger`. */
  _defaultValueInteger?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueMarkdown?: string;
  /** Id and extensions of the primitive `defaultValueMarkdown`. */
  _defaultValueMarkdown?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueOid?: string;
  /** Id and extensions of the primitive `defaultValueOid`. */
  _defaultValueOid?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValuePositiveInt?: number;
  /** Id and extensions of the primitive `defaultValuePositiveInt`. */
  _defaultValuePositiveInt?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueString?: string;
  /** Id and extensions of the primitive `defaultValueString`. */
  _defaultValueString?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueTime?: string;
  /** Id and extensions of the primitive `defaultValueTime`. */
  _defaultValueTime?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueUnsignedInt?: number;
  /** Id and extensions of the primitive `defaultValueUnsignedInt`. */
  _defaultValueUnsignedInt?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueUri?: string;
  /** Id and extensions of the primitive `defaultValueUri`. */
  _defaultValueUri?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueAddress?: Address;
  /** Specified value if missing from instance (0..1) */
  defaultValueAge?: Age;
  /** Specified value if missing from instance (0..1) */
  defaultValueAnnotation?: Annotation;
  /** Specified value if missing from instance (0..1) */
  defaultValueAttachment?: Attachment;
  /** Specified value if missing from instance (0..1) */
  defaultValueCodeableConcept?: CodeableConcept;
  /** Specified value if missing from instance (0..1) */
  defaultValueCoding?: Coding;
  /** Specified value if missing from instance (0..1) */
  defaultValueContactPoint?: ContactPoint;
  /** Specified value if missing from instance (0..1) */
  defaultValueCount?: Count;
  /** Specified value if missing from instance (0..1) */
  defaultValueDistance?: Distance;
  /** Specified value if missing from instance (0..1) */
  defaultValueDuration?: Duration;
  /** Specified value if missing from instance (0..1) */
  defaultValueHumanName?: HumanName;
  /** Specified value if missing from instance (0..1) */
  defaultValueIdentifier?: Identifier;
  /** Specified value if missing from instance (0..1) */
  defaultValueMoney?: Money;
  /** Specified value if missing from instance (0..1) */
  defaultValuePeriod?: Period;
  /** Specified value if missing from instance (0..1) */
  defaultValueQuantity?: Quantity;
  /** Specified value if missing from instance (0..1) */
  defaultValueRange?: Range;
  /** Specified value if missing from instance (0..1) */
  defaultValueRatio?: Ratio;
  /** Specified value if missing from instance (0..1) */
  defaultValueReference?: Reference;
  /** Specified value if missing from instance (0..1) */
  defaultValueSampledData?: SampledData;
  /** Specified value if missing from instance (0..1) */
  defaultValueSignature?: Signature;
  /** Specified value if missing from instance (0..1) */
  defaultValueTiming?: Timing;
  /** Specified value if missing from instance (0..1) */
  defaultValueMeta?: Meta;
  /** Implicit meaning when this element is missing (0..1) */
  meaningWhenMissing?: string;
  /** Id and extensions of the primitive `meaningWhenMissing`. */
  _meaningWhenMissing?: Element;
  /** What the order of the elements means (0..1) */
  orderMeaning?: string;
  /** Id and extensions of the primitive `orderMeaning`. */
  _orderMeaning?: Element;
  /** Value must be exactly this (0..1) */
  fixedBase64Binary?: string;
  /** Id and extensions of the primitive `fixedBase64Binary`. */
  _fixedBase64Binary?: Element;
  /** Value must be exactly this (0..1) */
  fixedBoolean?: boolean;
  /** Id and extensions of the primitive `fixedBoolean`. */
  _fixedBoolean?: Element;
  /** Value must be exactly this (0..1) */
  fixedCode?: string;
  /** Id and extensions of the primitive `fixedCode`. */
  _fixedCode?: Element;
  /** Value must be exactly this (0..1) */
  fixedDate?: string;
  /** Id and extensions of the primitive `fixedDate`. */
  _fixedDate?: Element;
  /** Value must be exactly this (0..1) */
  fixedDateTime?: string;
  /** Id and extensions of the primitive `fixedDateTime`. */
  _fixedDateTime?: Element;
  /** Value must be exactly this (0..1) */
  fixedDecimal?: number;
  /** Id and extensions of the primitive `fixedDecimal`. */
  _fixedDecimal?: Element;
  /** Value must be exactly this (0..1) */
  fixedId?: string;
  /** Id and extensions of the primitive `fixedId`. */
  _fixedId?: Element;
  /** Value must be exactly this (0..1) */
  fixedInstant?: string;
  /** Id and extensions of the primitive `fixedInstant`. */
  _fixedInstant?: Element;
  /** Value must be exactly this (0..1) */
  fixedInteger?: number;
  /** Id and extensions of the primitive `fixedInteger`. */
  _fixedInteger?: Element;
  /** Value must be exactly this (0..1) */
  fixedMarkdown?: string;
  /** Id and extensions of the primitive `fixedMarkdown`. */
  _fixedMarkdown?: Element;
  /** Value must be exactly this (0..1) */
  fixedOid?: string;
  /** Id and extensions of the primitive `fixedOid`. */
  _fixedOid?: Element;
  /** Value must be exactly this (0..1) */
  fixedPositiveInt?: number;
  /** Id and extensions of the primitive `fixedPositiveInt`. */
  _fixedPositiveInt?: Element;
  /** Value must be exactly this (0..1) */
  fixedString?: string;
  /** Id and extensions of the primitive `fixedString`. */
  _fixedString?: Element;
  /** Value must be exactly this (0..1) */
  fixedTime?: string;
  /** Id and extensions of the primitive `fixedTime`. */
  _fixedTime?: Element;
  /** Value must be exactly this (0..1) */
  fixedUnsignedInt?: number;
  /** Id and extensions of the primitive `fixedUnsignedInt`. */
  _fixedUnsignedInt?: Element;
  /** Value must be exactly this (0..1) */
  fixedUri?: string;
  /** Id and extensions of the primitive `fixedUri`. */
  _fixedUri?: Element;
  /** Value must be exactly this (0..1) */
  fixedAddress?: Address;
  /** Value must be exactly this (0..1) */
  fixedAge?: Age;
  /** Value must be exactly this (0..1) */
  fixedAnnotation?: Annotation;
  /** Value must be exactly this (0..1) */
  fixedAttachment?: Attachment;
  /** Value must be exactly this (0..1) */
  fixedCodeableConcept?: CodeableConcept;
  /** Value must be exactly this (0..1) */
  fixedCoding?: Coding;
  /** Value must be exactly this (0..1) */
  fixedContactPoint?: ContactPoint;
  /** Value must be exactly this (0..1) */
  fixedCount?: Count;
  /** Value must be exactly this (0..1) */
  fixedDistance?: Distance;
  /** Value must be exactly this (0..1) */
  fixedDuration?: Duration;
  /** Value must be exactly this (0..1) */
  fixedHumanName?: HumanName;
  /** Value must be exactly this (0..1) */
  fixedIdentifier?: Identifier;
  /** Value must be exactly this (0..1) */
  fixedMoney?: Money;
  /** Value must be exactly this (0..1) */
  fixedPeriod?: Period;
  /** Value must be exactly this (0..1) */
  fixedQuantity?: Quantity;
  /** Value must be exactly this (0..1) */
  fixedRange?: Range;
  /** Value must be exactly this (0..1) */
  fixedRatio?: Ratio;
  /** Value must be exactly this (0..1) */
  fixedReference?: Reference;
  /** Value must be exactly this (0..1) */
  fixedSampledData?: SampledData;
  /** Value must be exactly this (0..1) */
  fixedSignature?: Signature;
  /** Value must be exactly this (0..1) */
  fixedTiming?: Timing;
  /** Value must be exactly this (0..1) */
  fixedMeta?: Meta;
  /** Value must have at least these property values (0..1) */
  patternBase64Binary?: string;
  /** Id and extensions of the primitive `patternBase64Binary`. */
  _patternBase64Binary?: Element;
  /** Value must have at least these property values (0..1) */
  patternBoolean?: boolean;
  /** Id and extensions of the primitive `patternBoolean`. */
  _patternBoolean?: Element;
  /** Value must have at least these property values (0..1) */
  patternCode?: string;
  /** Id and extensions of the primitive `patternCode`. */
  _patternCode?: Element;
  /** Value must have at least these property values (0..1) */
  patternDate?: string;
  /** Id and extensions of the primitive `patternDate`. */
  _patternDate?: Element;
  /** Value must have at least these property values (0..1) */
  patternDateTime?: string;
  /** Id and extensions of the primitive `patternDateTime`. */
  _patternDateTime?: Element;
  /** Value must have at least these property values (0..1) */
  patternDecimal?: number;
  /** Id and extensions of the primitive `patternDecimal`. */
  _patternDecimal?: Element;
  /** Value must have at least these property values (0..1) */
  patternId?: string;
  /** Id and extensions of the primitive `patternId`. */
  _patternId?: Element;
  /** Value must have at least these property values (0..1) */
  patternInstant?: string;
  /** Id and extensions of the primitive `patternInstant`. */
  _patternInstant?: Element;
  /** Value must have at least these property values (0..1) */
  patternInteger?: number;
  /** Id and extensions of the primitive `patternInteger`. */
  _patternInteger?: Element;
  /** Value must have at least these property values (0..1) */
  patternMarkdown?: string;
  /** Id and extensions of the primitive `patternMarkdown`. */
  _patternMarkdown?: Element;
  /** Value must have at least these property values (0..1) */
  patternOid?: string;
  /** Id and extensions of the primitive `patternOid`. */
  _patternOid?: Element;
  /** Value must have at least these property values (0..1) */
  patternPositiveInt?: number;
  /** Id and extensions of the primitive `patternPositiveInt`. */
  _patternPositiveInt?: Element;
  /** Value must have at least these property values (0..1) */
  patternString?: string;
  /** Id and extensions of the primitive `patternString`. */
  _patternString?: Element;
  /** Value must have at least these property values (0..1) */
  patternTime?: string;
  /** Id and extensions of the primitive `patternTime`. */
  _patternTime?: Element;
  /** Value must have at least these property values (0..1) */
  patternUnsignedInt?: number;
  /** Id and extensions of the primitive `patternUnsignedInt`. */
  _patternUnsignedInt?: Element;
  /** Value must have at least these property values (0..1) */
  patternUri?: string;
  /** Id and extensions of the primitive `patternUri`. */
  _patternUri?: Element;
  /** Value must have at least these property values (0..1) */
  patternAddress?: Address;
  /** Value must have at least these property values (0..1) */
  patternAge?: Age;
  /** Value must have at least these property values (0..1) */
  patternAnnotation?: Annotation;
  /** Value must have at least these property values (0..1) */
  patternAttachment?: Attachment;
  /** Value must have at least these property values (0..1) */
  patternCodeableConcept?: CodeableConcept;
  /** Value must have at least these property values (0..1) */
  patternCoding?: Coding;
  /** Value must have at least these property values (0..1) */
  patternContactPoint?: ContactPoint;
  /** Value must have at least these property values (0..1) */
  patternCount?: Count;
  /** Value must have at least these property values (0..1) */
  patternDistance?: Distance;
  /** Value must have at least these property values (0..1) */
  patternDuration?: Duration;
  /** Value must have at least these property values (0..1) */
  patternHumanName?: HumanName;
  /** Value must have at least these property values (0..1) */
  patternIdentifier?: Identifier;
  /** Value must have at least these property values (0..1) */
  patternMoney?: Money;
  /** Value must have at least these property values (0..1) */
  patternPeriod?: Period;
  /** Value must have at least these property values (0..1) */
  patternQuantity?: Quantity;
  /** Value must have at least these property values (0..1) */
  patternRange?: Range;
  /** Value must have at least these property values (0..1) */
  patternRatio?: Ratio;
  /** Value must have at least these property values (0..1) */
  patternReference?: Reference;
  /** Value must have at least these property values (0..1) */
  patternSampledData?: SampledData;
  /** Value must have at least these property values (0..1) */
  patternSignature?: Signature;
  /** Value must have at least these property values (0..1) */
  patternTiming?: Timing;
  /** Value must have at least these property values (0..1) */
  patternMeta?: Meta;
  /** Example value (as defined for type) (0..*) */
  example?: Array<ElementDefinitionExample>;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueDate?: string;
  /** Id and extensions of the primitive `minValueDate`. */
  _minValueDate?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueDateTime?: string;
  /** Id and extensions of the primitive `minValueDateTime`. */
  _minValueDateTime?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueInstant?: string;
  /** Id and extensions of the primitive `minValueInstant`. */
  _minValueInstant?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueTime?: string;
  /** Id and extensions of the primitive `minValueTime`. */
  _minValueTime?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueDecimal?: number;
  /** Id and extensions of the primitive `minValueDecimal`. */
  _minValueDecimal?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueInteger?: number;
  /** Id and extensions of the primitive `minValueInteger`. */
  _minValueInteger?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValuePositiveInt?: number;
  /** Id and extensions of the primitive `minValuePositiveInt`. */
  _minValuePositiveInt?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueUnsignedInt?: number;
  /** Id and extensions of the primitive `minValueUnsignedInt`. */
  _minValueUnsignedInt?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueQuantity?: Quantity;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueDate?: string;
  /** Id and extensions of the primitive `maxValueDate`. */
  _maxValueDate?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueDateTime?: string;
  /** Id and extensions of the primitive `maxValueDateTime`. */
  _maxValueDateTime?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueInstant?: string;
  /** Id and extensions of the primitive `maxValueInstant`. */
  _maxValueInstant?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueTime?: string;
  /** Id and extensions of the primitive `maxValueTime`. */
  _maxValueTime?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueDecimal?: number;
  /** Id and extensions of the primitive `maxValueDecimal`. */
  _maxValueDecimal?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueInteger?: number;
  /** Id and extensions of the primitive `maxValueInteger`. */
  _maxValueInteger?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValuePositiveInt?: number;
  /** Id and extensions of the primitive `maxValuePositiveInt`. */
  _maxValuePositiveInt?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueUnsignedInt?: number;
  /** Id and extensions of the primitive `maxValueUnsignedInt`. */
  _maxValueUnsignedInt?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueQuantity?: Quantity;
  /** Max length for strings (0..1) */
  maxLength?: number;
  /** Id and extensions of the primitive `maxLength`. */
  _maxLength?: Element;
  /** Reference to invariant about presence (0..*) */
  condition?: Array<string>;
  /** Id and extensions of the primitive `condition`. */
  _condition?: Array<Element | null>;
  /** Condition that must evaluate to true (0..*) */
  constraint?: Array<ElementDefinitionConstraint>;
  /** If the element must supported (0..1) */
  mustSupport?: boolean;
  /** Id and extensions of the primitive `mustSupport`. */
  _mustSupport?: Element;
  /** If this modifies the meaning of other elements (0..1) */
  isModifier?: boolean;
  /** Id and extensions of the primitive `isModifier`. */
  _isModifier?: Element;
  /** Include when _summary = true? (0..1) */
  isSummary?: boolean;
  /** Id and extensions of the primitive `isSummary`. */
  _isSummary?: Element;
  /** ValueSet details if this is coded (0..1) */
  binding?: ElementDefinitionBinding;
  /** Map element to another set of definitions (0..*) */
  mapping?: Array<ElementDefinitionMapping>;
}

export namespace ElementDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/property-representation */
  export type RepresentationEnum = 'xmlAttr' | 'xmlText' | 'typeAttr' | 'cdaText' | 'xhtml';
  export const RepresentationEnum = {
    XmlAttr: 'xmlAttr' as RepresentationEnum,
    XmlText: 'xmlText' as RepresentationEnum,
    TypeAttr: 'typeAttr' as RepresentationEnum,
    CdaText: 'cdaText' as RepresentationEnum,
    Xhtml: 'xhtml' as RepresentationEnum,
  };
}

/**
 * This element is sliced - slices follow
 */
export class ElementDefinitionSlicing {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Element values that are used to distinguish the slices (0..*) */
  discriminator?: Array<ElementDefinitionDiscriminator>;
  /** Text description of how slicing works (or not) (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** If elements must be in same order as slices (0..1) */
  ordered?: boolean;
  /** Id and extensions of the primitive `ordered`. */
  _ordered?: Element;
  /** closed | open | openAtEnd (1..1) */
  rules?: ElementDefinitionSlicing.RulesEnum;
  /** Id and extensions of the primitive `rules`. */
  _rules?: Element;
}

export namespace ElementDefinitionSlicing {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-slicing-rules */
  export type RulesEnum = 'closed' | 'open' | 'openAtEnd';
  export const RulesEnum = {
    Closed: 'closed' as RulesEnum,
    Open: 'open' as RulesEnum,
    OpenAtEnd: 'openAtEnd' as RulesEnum,
  };
}

/**
 * Element values that are used to distinguish the slices
 */
export class ElementDefinitionDiscriminator {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** value | exists | pattern | type | profile (1..1) */
  type?: ElementDefinitionDiscriminator.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Path to element value (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
}

export namespace ElementDefinitionDiscriminator {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/discriminator-type */
  export type TypeEnum = 'value' | 'exists' | 'pattern' | 'type' | 'profile';
  export const TypeEnum = {
    Value: 'value' as TypeEnum,
    Exists: 'exists' as TypeEnum,
    Pattern: 'pattern' as TypeEnum,
    Type: 'type' as TypeEnum,
    Profile: 'profile' as TypeEnum,
  };
}

/**
 * Base definition information for tools
 */
export class ElementDefinitionBase {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Path that identifies the base element (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** Min cardinality of the base element (1..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;
  /** Max cardinality of the base element (1..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;
}

/**
 * Data type and Profile for this element
 */
export class ElementDefinitionType {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Data type or Resource (reference to definition) (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Profile (StructureDefinition) to apply (or IG) (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;
  /** Profile (StructureDefinition) to apply to reference target (or IG) (0..1) */
  targetProfile?: string;
  /** Id and extensions of the primitive `targetProfile`. */
  _targetProfile?: Element;
  /** contained | referenced | bundled - how aggregated (0..*) */
  aggregation?: Array<ElementDefinitionType.AggregationEnum>;
  /** Id and extensions of the primitive `aggregation`. */
  _aggregation?: Array<Element | null>;
  /** either | independent | specific (0..1) */
  versioning?: ElementDefinitionType.VersioningEnum;
  /** Id and extensions of the primitive `versioning`. */
  _versioning?: Element;
}

export namespace ElementDefinitionType {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-aggregation-mode */
  export type AggregationEnum = 'contained' | 'referenced' | 'bundled';
  export const AggregationEnum = {
    Contained: 'contained' as AggregationEnum,
    Referenced: 'referenced' as AggregationEnum,
    Bundled: 'bundled' as AggregationEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/reference-version-rules */
  export type VersioningEnum = 'either' | 'independent' | 'specific';
  export const VersioningEnum = {
    Either: 'either' as VersioningEnum,
    Independent: 'independent' as VersioningEnum,
    Specific: 'specific' as VersioningEnum,
  };
}

/**
 * Example value (as defined for type)
 */
export class ElementDefinitionExample {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Describes the purpose of this example (1..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueInstant?: string;
  /** Id and extensions of the primitive `valueInstant`. */
  _valueInstant?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueOid?: string;
  /** Id and extensions of the primitive `valueOid`. */
  _valueOid?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valuePositiveInt?: number;
  /** Id and extensions of the primitive `valuePositiveInt`. */
  _valuePositiveInt?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueUnsignedInt?: number;
  /** Id and extensions of the primitive `valueUnsignedInt`. */
  _valueUnsignedInt?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueAddress?: Address;
  /** Value of Example (one of allowed types) (1..1) */
  valueAge?: Age;
  /** Value of Example (one of allowed types) (1..1) */
  valueAnnotation?: Annotation;
  /** Value of Example (one of allowed types) (1..1) */
  valueAttachment?: Attachment;
  /** Value of Example (one of allowed types) (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value of Example (one of allowed types) (1..1) */
  valueCoding?: Coding;
  /** Value of Example (one of allowed types) (1..1) */
  valueContactPoint?: ContactPoint;
  /** Value of Example (one of allowed types) (1..1) */
  valueCount?: Count;
  /** Value of Example (one of allowed types) (1..1) */
  valueDistance?: Distance;
  /** Value of Example (one of allowed types) (1..1) */
  valueDuration?: Duration;
  /** Value of Example (one of allowed types) (1..1) */
  valueHumanName?: HumanName;
  /** Value of Example (one of allowed types) (1..1) */
  valueIdentifier?: Identifier;
  /** Value of Example (one of allowed types) (1..1) */
  valueMoney?: Money;
  /** Value of Example (one of allowed types) (1..1) */
  valuePeriod?: Period;
  /** Value of Example (one of allowed types) (1..1) */
  valueQuantity?: Quantity;
  /** Value of Example (one of allowed types) (1..1) */
  valueRange?: Range;
  /** Value of Example (one of allowed types) (1..1) */
  valueRatio?: Ratio;
  /** Value of Example (one of allowed types) (1..1) */
  valueReference?: Reference;
  /** Value of Example (one of allowed types) (1..1) */
  valueSampledData?: SampledData;
  /** Value of Example (one of allowed types) (1..1) */
  valueSignature?: Signature;
  /** Value of Example (one of allowed types) (1..1) */
  valueTiming?: Timing;
  /** Value of Example (one of allowed types) (1..1) */
  valueMeta?: Meta;
}

/**
 * Condition that must evaluate to true
 */
export class ElementDefinitionConstraint {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Target of 'condition' reference above (1..1) */
  key?: string;
  /** Id and extensions of the primitive `key`. */
  _key?: Element;
  /** Why this constraint is necessary or appropriate (0..1) */
  requirements?: string;
  /** Id and extensions of the primitive `requirements`. */
  _requirements?: Element;
  /** error | warning (1..1) */
  severity?: ElementDefinitionConstraint.SeverityEnum;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;
  /** Human description of constraint (1..1) */
  human?: string;
  /** Id and extensions of the primitive `human`. */
  _human?: Element;
  /** FHIRPath expression of constraint (1..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
  /** XPath expression of constraint (0..1) */
  xpath?: string;
  /** Id and extensions of the primitive `xpath`. */
  _xpath?: Element;
  /** Reference to original source of constraint (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;
}

export namespace ElementDefinitionConstraint {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/constraint-severity */
  export type SeverityEnum = 'error' | 'warning';
  export const SeverityEnum = {
    Error: 'error' as SeverityEnum,
    Warning: 'warning' as SeverityEnum,
  };
}

/**
 * ValueSet details if this is coded
 */
export class ElementDefinitionBinding {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** required | extensible | preferred | example (1..1) */
  strength?: ElementDefinitionBinding.StrengthEnum;
  /** Id and extensions of the primitive `strength`. */
  _strength?: Element;
  /** Human explanation of the value set (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Source of value set (0..1) */
  valueSetUri?: string;
  /** Id and extensions of the primitive `valueSetUri`. */
  _valueSetUri?: Element;
  /** Source of value set (0..1) */
  valueSetReference?: Reference;
}

export namespace ElementDefinitionBinding {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/binding-strength */
  export type StrengthEnum = 'required' | 'extensible' | 'preferred' | 'example';
  export const StrengthEnum = {
    Required: 'required' as StrengthEnum,
    Extensible: 'extensible' as StrengthEnum,
    Preferred: 'preferred' as StrengthEnum,
    Example: 'example' as StrengthEnum,
  };
}

/**
 * Map element to another set of definitions
 */
export class ElementDefinitionMapping {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Reference to mapping declaration (1..1) */
  identity?: string;
  /** Id and extensions of the primitive `identity`. */
  _identity?: Element;
  /** Computable language of mapping (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Details of the mapping (1..1) */
  map?: string;
  /** Id and extensions of the primitive `map`. */
  _map?: Element;
  /** Comments about the mapping or its use (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
}
