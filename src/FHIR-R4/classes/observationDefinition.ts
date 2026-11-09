/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Range } from './range';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export class ObservationDefinition {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Category of observation (0..*) */
  category?: Array<CodeableConcept>;
  /** Type of observation (code / type) (1..1) */
  code: CodeableConcept;
  /** Business identifier for this ObservationDefinition instance (0..*) */
  identifier?: Array<Identifier>;
  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period (0..*) */
  permittedDataType?: Array<ObservationDefinition.PermittedDataTypeEnum>;
  /** Id and extensions of the primitive `permittedDataType`. */
  _permittedDataType?: Array<Element | null>;
  /** Multiple results allowed (0..1) */
  multipleResultsAllowed?: boolean;
  /** Id and extensions of the primitive `multipleResultsAllowed`. */
  _multipleResultsAllowed?: Element;
  /** Method used to produce the observation (0..1) */
  method?: CodeableConcept;
  /** Preferred report name (0..1) */
  preferredReportName?: string;
  /** Id and extensions of the primitive `preferredReportName`. */
  _preferredReportName?: Element;
  /** Characteristics of quantitative results (0..1) */
  quantitativeDetails?: ObservationDefinitionQuantitativeDetails;
  /** Qualified range for continuous and ordinal observation results (0..*) */
  qualifiedInterval?: Array<ObservationDefinitionQualifiedInterval>;
  /** Value set of valid coded values for the observations conforming to this ObservationDefinition (0..1) */
  validCodedValueSet?: Reference;
  /** Value set of normal coded values for the observations conforming to this ObservationDefinition (0..1) */
  normalCodedValueSet?: Reference;
  /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition (0..1) */
  abnormalCodedValueSet?: Reference;
  /** Value set of critical coded values for the observations conforming to this ObservationDefinition (0..1) */
  criticalCodedValueSet?: Reference;
}

export namespace ObservationDefinition {
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
 * Characteristics of quantitative results
 */
export class ObservationDefinitionQuantitativeDetails {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Customary unit for quantitative results (0..1) */
  customaryUnit?: CodeableConcept;
  /** SI unit for quantitative results (0..1) */
  unit?: CodeableConcept;
  /** SI to Customary unit conversion factor (0..1) */
  conversionFactor?: number;
  /** Id and extensions of the primitive `conversionFactor`. */
  _conversionFactor?: Element;
  /** Decimal precision of observation quantitative results (0..1) */
  decimalPrecision?: number;
  /** Id and extensions of the primitive `decimalPrecision`. */
  _decimalPrecision?: Element;
}

/**
 * Qualified range for continuous and ordinal observation results
 */
export class ObservationDefinitionQualifiedInterval {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** reference | critical | absolute (0..1) */
  category?: ObservationDefinitionQualifiedInterval.CategoryEnum;
  /** Id and extensions of the primitive `category`. */
  _category?: Element;
  /** The interval itself, for continuous or ordinal observations (0..1) */
  range?: Range;
  /** Range context qualifier (0..1) */
  context?: CodeableConcept;
  /** Targetted population of the range (0..*) */
  appliesTo?: Array<CodeableConcept>;
  /** male | female | other | unknown (0..1) */
  gender?: ObservationDefinitionQualifiedInterval.GenderEnum;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;
  /** Applicable age range, if relevant (0..1) */
  age?: Range;
  /** Applicable gestational age range, if relevant (0..1) */
  gestationalAge?: Range;
  /** Condition associated with the reference range (0..1) */
  condition?: string;
  /** Id and extensions of the primitive `condition`. */
  _condition?: Element;
}

export namespace ObservationDefinitionQualifiedInterval {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/observation-range-category */
  export type CategoryEnum = 'reference' | 'critical' | 'absolute';
  export const CategoryEnum = {
    Reference: 'reference' as CategoryEnum,
    Critical: 'critical' as CategoryEnum,
    Absolute: 'absolute' as CategoryEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/administrative-gender */
  export type GenderEnum = 'male' | 'female' | 'other' | 'unknown';
  export const GenderEnum = {
    Male: 'male' as GenderEnum,
    Female: 'female' as GenderEnum,
    Other: 'other' as GenderEnum,
    Unknown: 'unknown' as GenderEnum,
  };
}
