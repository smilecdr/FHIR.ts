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
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export class MeasureReport {
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
  contained?: Array<Resource>;
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
  /** individual | subject-list | summary | data-collection (1..1) */
  type?: MeasureReport.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** What measure was calculated (1..1) */
  measure?: string;
  /** Id and extensions of the primitive `measure`. */
  _measure?: Element;
  /** What individual(s) the report is for (0..1) */
  subject?: Reference;
  /** When the report was generated (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who is reporting the data (0..1) */
  reporter?: Reference;
  /** What period the report covers (1..1) */
  period: Period;
  /** increase | decrease (0..1) */
  improvementNotation?: CodeableConcept;
  /** Measure results for each group (0..*) */
  group?: Array<MeasureReportGroup>;
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
  export type TypeEnum = 'individual' | 'subject-list' | 'summary' | 'data-collection';
  export const TypeEnum = {
    Individual: 'individual' as TypeEnum,
    SubjectList: 'subject-list' as TypeEnum,
    Summary: 'summary' as TypeEnum,
    DataCollection: 'data-collection' as TypeEnum,
  };
}

/**
 * Measure results for each group
 */
export class MeasureReportGroup {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Meaning of the group (0..1) */
  code?: CodeableConcept;
  /** The populations in the group (0..*) */
  population?: Array<MeasureReportPopulation>;
  /** What score this group achieved (0..1) */
  measureScore?: Quantity;
  /** Stratification results (0..*) */
  stratifier?: Array<MeasureReportStratifier>;
}

/**
 * The populations in the group
 */
export class MeasureReportPopulation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;
  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;
  /** For subject-list reports, the subject results in this population (0..1) */
  subjectResults?: Reference;
}

/**
 * Stratification results
 */
export class MeasureReportStratifier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What stratifier of the group (0..*) */
  code?: Array<CodeableConcept>;
  /** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components (0..*) */
  stratum?: Array<MeasureReportStratum>;
}

/**
 * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 */
export class MeasureReportStratum {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The stratum value, e.g. male (0..1) */
  value?: CodeableConcept;
  /** Stratifier component values (0..*) */
  component?: Array<MeasureReportComponent>;
  /** Population results in this stratum (0..*) */
  population?: Array<MeasureReportPopulation1>;
  /** What score this stratum achieved (0..1) */
  measureScore?: Quantity;
}

/**
 * Stratifier component values
 */
export class MeasureReportComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What stratifier component of the group (1..1) */
  code: CodeableConcept;
  /** The stratum component value, e.g. male (1..1) */
  value: CodeableConcept;
}

/**
 * Population results in this stratum
 */
export class MeasureReportPopulation1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;
  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;
  /** For subject-list reports, the subject results in this population (0..1) */
  subjectResults?: Reference;
}
