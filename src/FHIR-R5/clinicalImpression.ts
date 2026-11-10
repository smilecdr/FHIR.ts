/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter, but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export interface ClinicalImpression {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  status?: ClinicalImpression.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;
  /** Why/how the assessment was performed (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Patient or group assessed (1..1) */
  subject: Reference;
  /** The Encounter during which this ClinicalImpression was created (0..1) */
  encounter?: Reference;
  /** Time of assessment (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Time of assessment (0..1) */
  effectivePeriod?: Period;
  /** When the assessment was documented (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The clinician performing the assessment (0..1) */
  performer?: Reference;
  /** Reference to last assessment (0..1) */
  previous?: Reference;
  /** Relevant impressions of patient state (0..*) */
  problem?: Array<Reference>;
  /** Change in the status/pattern of a subject's condition since previously assessed, such as worsening, improving, or no change (0..1) */
  changePattern?: CodeableConcept;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-status */
  export type StatusEnum =
    | 'preparation'
    | 'in-progress'
    | 'not-done'
    | 'on-hold'
    | 'stopped'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    NotDone: 'not-done' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Possible or likely findings and diagnoses
 */
export interface ClinicalImpressionFinding {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What was found (0..1) */
  item?: CodeableReference;
  /** Which investigations support finding (0..1) */
  basis?: string;
  /** Id and extensions of the primitive `basis`. */
  _basis?: Element;
}
