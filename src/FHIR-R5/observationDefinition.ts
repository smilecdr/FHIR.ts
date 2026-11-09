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
import type { Period } from './period';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export interface ObservationDefinition {
  resourceType: 'ObservationDefinition';
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
  /** Logical canonical URL to reference this ObservationDefinition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business identifier of the ObservationDefinition (0..1) */
  identifier?: Identifier;
  /** Business version of the ObservationDefinition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this ObservationDefinition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this ObservationDefinition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ObservationDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** If for testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The name of the individual or organization that published the ObservationDefinition (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the ObservationDefinition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Content intends to support these contexts (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for this ObservationDefinition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this ObservationDefinition is defined (0..1) */
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
  /** When ObservationDefinition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** Date on which the asset content was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** The effective date range for the ObservationDefinition (0..1) */
  effectivePeriod?: Period;
  /** Based on FHIR definition of another observation (0..*) */
  derivedFromCanonical?: Array<string>;
  /** Id and extensions of the primitive `derivedFromCanonical`. */
  _derivedFromCanonical?: Array<Element | null>;
  /** Based on external definition (0..*) */
  derivedFromUri?: Array<string>;
  /** Id and extensions of the primitive `derivedFromUri`. */
  _derivedFromUri?: Array<Element | null>;
  /** Type of subject for the defined observation (0..*) */
  subject?: Array<CodeableConcept>;
  /** Desired kind of performer for such kind of observation (0..1) */
  performerType?: CodeableConcept;
  /** General type of observation (0..*) */
  category?: Array<CodeableConcept>;
  /** Type of observation (1..1) */
  code: CodeableConcept;
  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period (0..*) */
  permittedDataType?: Array<ObservationDefinition.PermittedDataTypeEnum>;
  /** Id and extensions of the primitive `permittedDataType`. */
  _permittedDataType?: Array<Element | null>;
  /** Multiple results allowed for conforming observations (0..1) */
  multipleResultsAllowed?: boolean;
  /** Id and extensions of the primitive `multipleResultsAllowed`. */
  _multipleResultsAllowed?: Element;
  /** Body part to be observed (0..1) */
  bodySite?: CodeableConcept;
  /** Method used to produce the observation (0..1) */
  method?: CodeableConcept;
  /** Kind of specimen used by this type of observation (0..*) */
  specimen?: Array<Reference>;
  /** Measurement device or model of device (0..*) */
  device?: Array<Reference>;
  /** The preferred name to be used when reporting the observation results (0..1) */
  preferredReportName?: string;
  /** Id and extensions of the primitive `preferredReportName`. */
  _preferredReportName?: Element;
  /** Unit for quantitative results (0..*) */
  permittedUnit?: Array<Coding>;
  /** Set of qualified values for observation results (0..*) */
  qualifiedValue?: Array<ObservationDefinitionQualifiedValue>;
  /** Definitions of related resources belonging to this kind of observation group (0..*) */
  hasMember?: Array<Reference>;
  /** Component results (0..*) */
  component?: Array<ObservationDefinitionComponent>;
}

export namespace ObservationDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/permitted-data-type */
  export type PermittedDataTypeEnum =
    | 'Quantity'
    | 'CodeableConcept'
    | 'string'
    | 'boolean'
    | 'integer'
    | 'Range'
    | 'Ratio'
    | 'SampledData'
    | 'time'
    | 'dateTime'
    | 'Period';
  export const PermittedDataTypeEnum = {
    Quantity: 'Quantity' as PermittedDataTypeEnum,
    CodeableConcept: 'CodeableConcept' as PermittedDataTypeEnum,
    String: 'string' as PermittedDataTypeEnum,
    Boolean: 'boolean' as PermittedDataTypeEnum,
    Integer: 'integer' as PermittedDataTypeEnum,
    Range: 'Range' as PermittedDataTypeEnum,
    Ratio: 'Ratio' as PermittedDataTypeEnum,
    SampledData: 'SampledData' as PermittedDataTypeEnum,
    Time: 'time' as PermittedDataTypeEnum,
    DateTime: 'dateTime' as PermittedDataTypeEnum,
    Period: 'Period' as PermittedDataTypeEnum,
  };
}

/**
 * Set of qualified values for observation results
 */
export interface ObservationDefinitionQualifiedValue {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Context qualifier for the set of qualified values (0..1) */
  context?: CodeableConcept;
  /** Targetted population for the set of qualified values (0..*) */
  appliesTo?: Array<CodeableConcept>;
  /** male | female | other | unknown (0..1) */
  gender?: ObservationDefinitionQualifiedValue.GenderEnum;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;
  /** Applicable age range for the set of qualified values (0..1) */
  age?: Range;
  /** Applicable gestational age range for the set of qualified values (0..1) */
  gestationalAge?: Range;
  /** Condition associated with the set of qualified values (0..1) */
  condition?: string;
  /** Id and extensions of the primitive `condition`. */
  _condition?: Element;
  /** reference | critical | absolute (0..1) */
  rangeCategory?: ObservationDefinitionQualifiedValue.RangeCategoryEnum;
  /** Id and extensions of the primitive `rangeCategory`. */
  _rangeCategory?: Element;
  /** The range for continuous or ordinal observations (0..1) */
  range?: Range;
  /** Value set of valid coded values as part of this set of qualified values (0..1) */
  validCodedValueSet?: string;
  /** Id and extensions of the primitive `validCodedValueSet`. */
  _validCodedValueSet?: Element;
  /** Value set of normal coded values as part of this set of qualified values (0..1) */
  normalCodedValueSet?: string;
  /** Id and extensions of the primitive `normalCodedValueSet`. */
  _normalCodedValueSet?: Element;
  /** Value set of abnormal coded values as part of this set of qualified values (0..1) */
  abnormalCodedValueSet?: string;
  /** Id and extensions of the primitive `abnormalCodedValueSet`. */
  _abnormalCodedValueSet?: Element;
  /** Value set of critical coded values as part of this set of qualified values (0..1) */
  criticalCodedValueSet?: string;
  /** Id and extensions of the primitive `criticalCodedValueSet`. */
  _criticalCodedValueSet?: Element;
}

export namespace ObservationDefinitionQualifiedValue {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/administrative-gender */
  export type GenderEnum = 'male' | 'female' | 'other' | 'unknown';
  export const GenderEnum = {
    Male: 'male' as GenderEnum,
    Female: 'female' as GenderEnum,
    Other: 'other' as GenderEnum,
    Unknown: 'unknown' as GenderEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/observation-range-category */
  export type RangeCategoryEnum = 'reference' | 'critical' | 'absolute';
  export const RangeCategoryEnum = {
    Reference: 'reference' as RangeCategoryEnum,
    Critical: 'critical' as RangeCategoryEnum,
    Absolute: 'absolute' as RangeCategoryEnum,
  };
}

/**
 * Component results
 */
export interface ObservationDefinitionComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of observation (1..1) */
  code: CodeableConcept;
  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period (0..*) */
  permittedDataType?: Array<ObservationDefinitionComponent.PermittedDataTypeEnum>;
  /** Id and extensions of the primitive `permittedDataType`. */
  _permittedDataType?: Array<Element | null>;
  /** Unit for quantitative results (0..*) */
  permittedUnit?: Array<Coding>;
  /** Set of qualified values for observation results (0..*) */
  qualifiedValue?: Array<ObservationDefinitionQualifiedValue>;
}

export namespace ObservationDefinitionComponent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/permitted-data-type */
  export type PermittedDataTypeEnum =
    | 'Quantity'
    | 'CodeableConcept'
    | 'string'
    | 'boolean'
    | 'integer'
    | 'Range'
    | 'Ratio'
    | 'SampledData'
    | 'time'
    | 'dateTime'
    | 'Period';
  export const PermittedDataTypeEnum = {
    Quantity: 'Quantity' as PermittedDataTypeEnum,
    CodeableConcept: 'CodeableConcept' as PermittedDataTypeEnum,
    String: 'string' as PermittedDataTypeEnum,
    Boolean: 'boolean' as PermittedDataTypeEnum,
    Integer: 'integer' as PermittedDataTypeEnum,
    Range: 'Range' as PermittedDataTypeEnum,
    Ratio: 'Ratio' as PermittedDataTypeEnum,
    SampledData: 'SampledData' as PermittedDataTypeEnum,
    Time: 'time' as PermittedDataTypeEnum,
    DateTime: 'dateTime' as PermittedDataTypeEnum,
    Period: 'Period' as PermittedDataTypeEnum,
  };
}
