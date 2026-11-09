/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
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
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
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
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External Ids for this condition (0..*) */
  identifier?: Array<Identifier>;
  /** active | recurrence | relapse | inactive | remission | resolved (0..1) */
  clinicalStatus?: CodeableConcept;
  /** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error (0..1) */
  verificationStatus?: CodeableConcept;
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
  /** Encounter created as part of (0..1) */
  encounter?: Reference;
  /** Estimated or actual date, date-time, or age (0..1) */
  onsetDateTime?: Date | string;
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
  /** When in resolution/remission (0..1) */
  abatementDateTime?: Date | string;
  /** Id and extensions of the primitive `abatementDateTime`. */
  _abatementDateTime?: Element;
  /** When in resolution/remission (0..1) */
  abatementAge?: Age;
  /** When in resolution/remission (0..1) */
  abatementPeriod?: Period;
  /** When in resolution/remission (0..1) */
  abatementRange?: Range;
  /** When in resolution/remission (0..1) */
  abatementString?: string;
  /** Id and extensions of the primitive `abatementString`. */
  _abatementString?: Element;
  /** Date record was first recorded (0..1) */
  recordedDate?: Date | string;
  /** Id and extensions of the primitive `recordedDate`. */
  _recordedDate?: Element;
  /** Who recorded the condition (0..1) */
  recorder?: Reference;
  /** Person who asserts this condition (0..1) */
  asserter?: Reference;
  /** Stage/grade, usually assessed formally (0..*) */
  stage?: Array<ConditionStage>;
  /** Supporting evidence (0..*) */
  evidence?: Array<ConditionEvidence>;
  /** Additional information about the Condition (0..*) */
  note?: Array<Annotation>;
}

/**
 * Stage/grade, usually assessed formally
 */
export class ConditionStage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Simple summary (disease specific) (0..1) */
  summary?: CodeableConcept;
  /** Formal record of assessment (0..*) */
  assessment?: Array<Reference>;
  /** Kind of staging (0..1) */
  type?: CodeableConcept;
}

/**
 * Supporting evidence
 */
export class ConditionEvidence {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Manifestation/symptom (0..*) */
  code?: Array<CodeableConcept>;
  /** Supporting information found elsewhere (0..*) */
  detail?: Array<Reference>;
}
