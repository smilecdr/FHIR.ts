/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Age } from './age';
import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Range } from './range';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Condition Resource
 */
export class Condition {
  resourceType: 'Condition';
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
  /** External Ids for this condition (0..*) */
  identifier?: Array<Identifier>;
  /** active | recurrence | inactive | remission | resolved (0..1) */
  clinicalStatus?: Condition.ClinicalStatusEnum;
  /** Id and extensions of the primitive `clinicalStatus`. */
  _clinicalStatus?: Element;
  /** provisional | differential | confirmed | refuted | entered-in-error | unknown (0..1) */
  verificationStatus?: Condition.VerificationStatusEnum;
  /** Id and extensions of the primitive `verificationStatus`. */
  _verificationStatus?: Element;
  /** problem-list-item | encounter-diagnosis (0..*) */
  category?: Array<CodeableConcept>;
  /** Subjective severity of condition (0..1) */
  severity?: CodeableConcept;
  /** Identification of the condition, problem or diagnosis (0..1) */
  code?: CodeableConcept;
  /** Anatomical location, if relevant (0..*) */
  bodySite?: Array<CodeableConcept>;
  /** Who has the condition? (1..1) */
  subject: Reference;
  /** Encounter or episode when condition first asserted (0..1) */
  context?: Reference;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetDateTime?: string;
  /** Id and extensions of the primitive `onsetDateTime`. */
  _onsetDateTime?: Element;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetAge?: Age;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetPeriod?: Period;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetRange?: Range;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetString?: string;
  /** Id and extensions of the primitive `onsetString`. */
  _onsetString?: Element;
  /** If/when in resolution/remission (0..1) */
  abatementDateTime?: string;
  /** Id and extensions of the primitive `abatementDateTime`. */
  _abatementDateTime?: Element;
  /** If/when in resolution/remission (0..1) */
  abatementAge?: Age;
  /** If/when in resolution/remission (0..1) */
  abatementBoolean?: boolean;
  /** Id and extensions of the primitive `abatementBoolean`. */
  _abatementBoolean?: Element;
  /** If/when in resolution/remission (0..1) */
  abatementPeriod?: Period;
  /** If/when in resolution/remission (0..1) */
  abatementRange?: Range;
  /** If/when in resolution/remission (0..1) */
  abatementString?: string;
  /** Id and extensions of the primitive `abatementString`. */
  _abatementString?: Element;
  /** Date record was believed accurate (0..1) */
  assertedDate?: string;
  /** Id and extensions of the primitive `assertedDate`. */
  _assertedDate?: Element;
  /** Person who asserts this condition (0..1) */
  asserter?: Reference;
  /** Stage/grade, usually assessed formally (0..1) */
  stage?: ConditionStage;
  /** Supporting evidence (0..*) */
  evidence?: Array<ConditionEvidence>;
  /** Additional information about the Condition (0..*) */
  note?: Array<Annotation>;
}

export namespace Condition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/condition-clinical */
  export type ClinicalStatusEnum = 'active' | 'recurrence' | 'inactive' | 'remission' | 'resolved';
  export const ClinicalStatusEnum = {
    Active: 'active' as ClinicalStatusEnum,
    Recurrence: 'recurrence' as ClinicalStatusEnum,
    Inactive: 'inactive' as ClinicalStatusEnum,
    Remission: 'remission' as ClinicalStatusEnum,
    Resolved: 'resolved' as ClinicalStatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/condition-ver-status */
  export type VerificationStatusEnum =
    'provisional' | 'differential' | 'confirmed' | 'refuted' | 'entered-in-error' | 'unknown';
  export const VerificationStatusEnum = {
    Provisional: 'provisional' as VerificationStatusEnum,
    Differential: 'differential' as VerificationStatusEnum,
    Confirmed: 'confirmed' as VerificationStatusEnum,
    Refuted: 'refuted' as VerificationStatusEnum,
    EnteredInError: 'entered-in-error' as VerificationStatusEnum,
    Unknown: 'unknown' as VerificationStatusEnum,
  };
}

/**
 * Stage/grade, usually assessed formally
 */
export class ConditionStage {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Simple summary (disease specific) (0..1) */
  summary?: CodeableConcept;
  /** Formal record of assessment (0..*) */
  assessment?: Array<Reference>;
}

/**
 * Supporting evidence
 */
export class ConditionEvidence {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Manifestation/symptom (0..*) */
  code?: Array<CodeableConcept>;
  /** Supporting information found elsewhere (0..*) */
  detail?: Array<Reference>;
}
