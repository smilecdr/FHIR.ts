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
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';

/**
 * Describes the event of a patient consuming or otherwise being administered a medication. This may be as simple as swallowing a tablet or it may be a long running infusion. Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. This event can also be used to record waste using a status of not-done and the appropriate statusReason.
 */
export interface MedicationAdministration {
  resourceType: 'MedicationAdministration';
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
  /** External identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Plan this is fulfilled by this administration (0..*) */
  basedOn?: Array<Reference>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown (1..1) */
  status?: MedicationAdministration.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason administration not performed (0..*) */
  statusReason?: Array<CodeableConcept>;
  /** Type of medication administration (0..*) */
  category?: Array<CodeableConcept>;
  /** What was administered (1..1) */
  medication: CodeableReference;
  /** Who received medication (1..1) */
  subject: Reference;
  /** Encounter administered as part of (0..1) */
  encounter?: Reference;
  /** Additional information to support administration (0..*) */
  supportingInformation?: Array<Reference>;
  /** Specific date/time or interval of time during which the administration took place (or did not take place) (1..1) */
  occurenceDateTime?: string;
  /** Id and extensions of the primitive `occurenceDateTime`. */
  _occurenceDateTime?: Element;
  /** Specific date/time or interval of time during which the administration took place (or did not take place) (1..1) */
  occurencePeriod?: Period;
  /** Specific date/time or interval of time during which the administration took place (or did not take place) (1..1) */
  occurenceTiming?: Timing;
  /** When the MedicationAdministration was first captured in the subject's record (0..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;
  /** Full dose was not administered (0..1) */
  isSubPotent?: boolean;
  /** Id and extensions of the primitive `isSubPotent`. */
  _isSubPotent?: Element;
  /** Reason full dose was not administered (0..*) */
  subPotentReason?: Array<CodeableConcept>;
  /** Who or what performed the medication administration and what type of performance they did (0..*) */
  performer?: Array<MedicationAdministrationPerformer>;
  /** Concept, condition or observation that supports why the medication was administered (0..*) */
  reason?: Array<CodeableReference>;
  /** Request administration performed against (0..1) */
  request?: Reference;
  /** Device used to administer (0..*) */
  device?: Array<CodeableReference>;
  /** Information about the administration (0..*) */
  note?: Array<Annotation>;
  /** Details of how medication was taken (0..1) */
  dosage?: MedicationAdministrationDosage;
  /** A list of events of interest in the lifecycle (0..*) */
  eventHistory?: Array<Reference>;
}

export namespace MedicationAdministration {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-admin-status */
  export type StatusEnum =
    | 'in-progress'
    | 'not-done'
    | 'on-hold'
    | 'completed'
    | 'entered-in-error'
    | 'stopped'
    | 'unknown';
  export const StatusEnum = {
    InProgress: 'in-progress' as StatusEnum,
    NotDone: 'not-done' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Who or what performed the medication administration and what type of performance they did
 */
export interface MedicationAdministrationPerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of performance (0..1) */
  function?: CodeableConcept;
  /** Who or what performed the medication administration (1..1) */
  actor: CodeableReference;
}

/**
 * Details of how medication was taken
 */
export interface MedicationAdministrationDosage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Free text dosage instructions e.g. SIG (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Body site administered to (0..1) */
  site?: CodeableConcept;
  /** Path of substance into body (0..1) */
  route?: CodeableConcept;
  /** How drug was administered (0..1) */
  method?: CodeableConcept;
  /** Amount of medication per dose (0..1) */
  dose?: Quantity;
  /** Dose quantity per unit of time (0..1) */
  rateRatio?: Ratio;
  /** Dose quantity per unit of time (0..1) */
  rateQuantity?: Quantity;
}
