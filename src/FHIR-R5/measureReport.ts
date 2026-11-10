/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReport {
  resourceType: 'MeasureReport';
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
  /** Additional identifier for the MeasureReport (0..*) */
  identifier?: Array<Identifier>;
  /** complete | pending | error (1..1) */
  status?: MeasureReport.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** individual | subject-list | summary | data-exchange (1..1) */
  type?: MeasureReport.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** incremental | snapshot (0..1) */
  dataUpdateType?: MeasureReport.DataUpdateTypeEnum;
  /** Id and extensions of the primitive `dataUpdateType`. */
  _dataUpdateType?: Element;
  /** What measure was calculated (0..1) */
  measure?: string;
  /** Id and extensions of the primitive `measure`. */
  _measure?: Element;
  /** What individual(s) the report is for (0..1) */
  subject?: Reference;
  /** When the measure was calculated (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who is reporting the data (0..1) */
  reporter?: Reference;
  /** What vendor prepared the data (0..1) */
  reportingVendor?: Reference;
  /** Where the reported data is from (0..1) */
  location?: Reference;
  /** What period the report covers (1..1) */
  period: Period;
  /** What parameters were provided to the report (0..1) */
  inputParameters?: Reference;
  /** What scoring method (e.g. proportion, ratio, continuous-variable) (0..1) */
  scoring?: CodeableConcept;
  /** increase | decrease (0..1) */
  improvementNotation?: CodeableConcept;
  /** Measure results for each group (0..*) */
  group?: Array<MeasureReportGroup>;
  /** Additional information collected for the report (0..*) */
  supplementalData?: Array<Reference>;
  /** What data was used to calculate the measure score (0..*) */
  evaluatedResource?: Array<Reference>;
}

export namespace MeasureReport {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/measure-report-status */
  export type StatusEnum = 'complete' | 'pending' | 'error';
  export const StatusEnum = {
    Complete: 'complete' as StatusEnum,
    Pending: 'pending' as StatusEnum,
    Error: 'error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/measure-report-type */
  export type TypeEnum = 'individual' | 'subject-list' | 'summary' | 'data-exchange';
  export const TypeEnum = {
    Individual: 'individual' as TypeEnum,
    SubjectList: 'subject-list' as TypeEnum,
    Summary: 'summary' as TypeEnum,
    DataExchange: 'data-exchange' as TypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/submit-data-update-type */
  export type DataUpdateTypeEnum = 'incremental' | 'snapshot';
  export const DataUpdateTypeEnum = {
    Incremental: 'incremental' as DataUpdateTypeEnum,
    Snapshot: 'snapshot' as DataUpdateTypeEnum,
  };
}

/**
 * Measure results for each group
 */
export interface MeasureReportGroup {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Pointer to specific group from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** Meaning of the group (0..1) */
  code?: CodeableConcept;
  /** What individual(s) the report is for (0..1) */
  subject?: Reference;
  /** The populations in the group (0..*) */
  population?: Array<MeasureReportPopulation>;
  /** What score this group achieved (0..1) */
  measureScoreQuantity?: Quantity;
  /** What score this group achieved (0..1) */
  measureScoreDateTime?: string;
  /** Id and extensions of the primitive `measureScoreDateTime`. */
  _measureScoreDateTime?: Element;
  /** What score this group achieved (0..1) */
  measureScoreCodeableConcept?: CodeableConcept;
  /** What score this group achieved (0..1) */
  measureScorePeriod?: Period;
  /** What score this group achieved (0..1) */
  measureScoreRange?: Range;
  /** What score this group achieved (0..1) */
  measureScoreDuration?: Duration;
  /** Stratification results (0..*) */
  stratifier?: Array<MeasureReportStratifier>;
}

/**
 * The populations in the group
 */
export interface MeasureReportPopulation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Pointer to specific population from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;
  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;
  /** For subject-list reports, the subject results in this population (0..1) */
  subjectResults?: Reference;
  /** For subject-list reports, a subject result in this population (0..*) */
  subjectReport?: Array<Reference>;
  /** What individual(s) in the population (0..1) */
  subjects?: Reference;
}

/**
 * Stratification results
 */
export interface MeasureReportStratifier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Pointer to specific stratifier from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** What stratifier of the group (0..1) */
  code?: CodeableConcept;
  /** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components (0..*) */
  stratum?: Array<MeasureReportStratum>;
}

/**
 * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 */
export interface MeasureReportStratum {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The stratum value, e.g. male (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** The stratum value, e.g. male (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** The stratum value, e.g. male (0..1) */
  valueQuantity?: Quantity;
  /** The stratum value, e.g. male (0..1) */
  valueRange?: Range;
  /** The stratum value, e.g. male (0..1) */
  valueReference?: Reference;
  /** Stratifier component values (0..*) */
  component?: Array<MeasureReportComponent>;
  /** Population results in this stratum (0..*) */
  population?: Array<MeasureReportPopulation1>;
  /** What score this stratum achieved (0..1) */
  measureScoreQuantity?: Quantity;
  /** What score this stratum achieved (0..1) */
  measureScoreDateTime?: string;
  /** Id and extensions of the primitive `measureScoreDateTime`. */
  _measureScoreDateTime?: Element;
  /** What score this stratum achieved (0..1) */
  measureScoreCodeableConcept?: CodeableConcept;
  /** What score this stratum achieved (0..1) */
  measureScorePeriod?: Period;
  /** What score this stratum achieved (0..1) */
  measureScoreRange?: Range;
  /** What score this stratum achieved (0..1) */
  measureScoreDuration?: Duration;
}

/**
 * Stratifier component values
 */
export interface MeasureReportComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Pointer to specific stratifier component from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** What stratifier component of the group (1..1) */
  code: CodeableConcept;
  /** The stratum component value, e.g. male (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** The stratum component value, e.g. male (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** The stratum component value, e.g. male (1..1) */
  valueQuantity?: Quantity;
  /** The stratum component value, e.g. male (1..1) */
  valueRange?: Range;
  /** The stratum component value, e.g. male (1..1) */
  valueReference?: Reference;
}

/**
 * Population results in this stratum
 */
export interface MeasureReportPopulation1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Pointer to specific population from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;
  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;
  /** For subject-list reports, the subject results in this population (0..1) */
  subjectResults?: Reference;
  /** For subject-list reports, a subject result in this population (0..*) */
  subjectReport?: Array<Reference>;
  /** What individual(s) in the population (0..1) */
  subjects?: Reference;
}
