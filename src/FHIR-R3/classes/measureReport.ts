/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for MeasureReport Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Additional identifier for the Report (0..1) */
  identifier?: Identifier;
  /** complete | pending | error (1..1) */
  status?: MeasureReport.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** individual | patient-list | summary (1..1) */
  type?: MeasureReport.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** What measure was evaluated (1..1) */
  measure: Reference;
  /** What patient the report is for (0..1) */
  patient?: Reference;
  /** When the report was generated (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who is reporting the data (0..1) */
  reportingOrganization?: Reference;
  /** What period the report covers (1..1) */
  period: Period;
  /** Measure results for each group (0..*) */
  group?: Array<MeasureReportGroup>;
  /** What data was evaluated to produce the measure score (0..1) */
  evaluatedResources?: Reference;
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
  export type TypeEnum = 'individual' | 'patient-list' | 'summary';
  export const TypeEnum = {
    Individual: 'individual' as TypeEnum,
    PatientList: 'patient-list' as TypeEnum,
    Summary: 'summary' as TypeEnum,
  };
}

/**
 * Measure results for each group
 */
export class MeasureReportGroup {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** What group of the measure (1..1) */
  identifier: Identifier;
  /** The populations in the group (0..*) */
  population?: Array<MeasureReportPopulation>;
  /** What score this group achieved (0..1) */
  measureScore?: number;
  /** Id and extensions of the primitive `measureScore`. */
  _measureScore?: Element;
  /** Stratification results (0..*) */
  stratifier?: Array<MeasureReportStratifier>;
}

/**
 * The populations in the group
 */
export class MeasureReportPopulation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Population identifier as defined in the measure (0..1) */
  identifier?: Identifier;
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score (0..1) */
  code?: CodeableConcept;
  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;
  /** For patient-list reports, the patients in this population (0..1) */
  patients?: Reference;
}

/**
 * Stratification results
 */
export class MeasureReportStratifier {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** What stratifier of the group (0..1) */
  identifier?: Identifier;
  /** Stratum results, one for each unique value in the stratifier (0..*) */
  stratum?: Array<MeasureReportStratum>;
}

/**
 * Stratum results, one for each unique value in the stratifier
 */
export class MeasureReportStratum {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The stratum value, e.g. male (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** Population results in this stratum (0..*) */
  population?: Array<MeasureReportPopulation1>;
  /** What score this stratum achieved (0..1) */
  measureScore?: number;
  /** Id and extensions of the primitive `measureScore`. */
  _measureScore?: Element;
}

/**
 * Population results in this stratum
 */
export class MeasureReportPopulation1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Population identifier as defined in the measure (0..1) */
  identifier?: Identifier;
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score (0..1) */
  code?: CodeableConcept;
  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;
  /** For patient-list reports, the patients in this population (0..1) */
  patients?: Reference;
}
