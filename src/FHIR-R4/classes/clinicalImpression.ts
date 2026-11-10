/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
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
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter, but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export class ClinicalImpression {
  resourceType: 'ClinicalImpression';
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
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** in-progress | completed | entered-in-error (1..1) */
  status?: ClinicalImpression.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;
  /** Kind of assessment performed (0..1) */
  code?: CodeableConcept;
  /** Why/how the assessment was performed (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Patient or group assessed (1..1) */
  subject: Reference;
  /** Encounter created as part of (0..1) */
  encounter?: Reference;
  /** Time of assessment (0..1) */
  effectiveDateTime?: Date | string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Time of assessment (0..1) */
  effectivePeriod?: Period;
  /** When the assessment was documented (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The clinician performing the assessment (0..1) */
  assessor?: Reference;
  /** Reference to last assessment (0..1) */
  previous?: Reference;
  /** Relevant impressions of patient state (0..*) */
  problem?: Array<Reference>;
  /** One or more sets of investigations (signs, symptoms, etc.) (0..*) */
  investigation?: Array<ClinicalImpressionInvestigation>;
  /** Clinical Protocol followed (0..*) */
  protocol?: Array<string>;
  /** Id and extensions of the primitive `protocol`. */
  _protocol?: Array<Element | null>;
  /** Summary of the assessment (0..1) */
  summary?: string;
  /** Id and extensions of the primitive `summary`. */
  _summary?: Element;
  /** Possible or likely findings and diagnoses (0..*) */
  finding?: Array<ClinicalImpressionFinding>;
  /** Estimate of likely outcome (0..*) */
  prognosisCodeableConcept?: Array<CodeableConcept>;
  /** RiskAssessment expressing likely outcome (0..*) */
  prognosisReference?: Array<Reference>;
  /** Information supporting the clinical impression (0..*) */
  supportingInfo?: Array<Reference>;
  /** Comments made about the ClinicalImpression (0..*) */
  note?: Array<Annotation>;
}

export namespace ClinicalImpression {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/clinicalimpression-status */
  export type StatusEnum = 'in-progress' | 'completed' | 'entered-in-error';
  export const StatusEnum = {
    InProgress: 'in-progress' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * One or more sets of investigations (signs, symptoms, etc.)
 */
export class ClinicalImpressionInvestigation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A name/code for the set (1..1) */
  code: CodeableConcept;
  /** Record of a specific investigation (0..*) */
  item?: Array<Reference>;
}

/**
 * Possible or likely findings and diagnoses
 */
export class ClinicalImpressionFinding {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What was found (0..1) */
  itemCodeableConcept?: CodeableConcept;
  /** What was found (0..1) */
  itemReference?: Reference;
  /** Which investigations support finding (0..1) */
  basis?: string;
  /** Id and extensions of the primitive `basis`. */
  _basis?: Element;
}
