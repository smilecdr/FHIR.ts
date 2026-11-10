/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Dosage } from './dosage';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient. This includes a description of the medication product (supply) provided and the instructions for administering the medication. The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export interface MedicationDispense {
  resourceType: 'MedicationDispense';
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
  /** Plan that is fulfilled by this dispense (0..*) */
  basedOn?: Array<Reference>;
  /** Event that dispense is part of (0..*) */
  partOf?: Array<Reference>;
  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown (1..1) */
  status?: MedicationDispense.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Why a dispense was not performed (0..1) */
  notPerformedReason?: CodeableReference;
  /** When the status changed (0..1) */
  statusChanged?: string;
  /** Id and extensions of the primitive `statusChanged`. */
  _statusChanged?: Element;
  /** Type of medication dispense (0..*) */
  category?: Array<CodeableConcept>;
  /** What medication was supplied (1..1) */
  medication: CodeableReference;
  /** Who the dispense is for (1..1) */
  subject: Reference;
  /** Encounter associated with event (0..1) */
  encounter?: Reference;
  /** Information that supports the dispensing of the medication (0..*) */
  supportingInformation?: Array<Reference>;
  /** Who performed event (0..*) */
  performer?: Array<MedicationDispensePerformer>;
  /** Where the dispense occurred (0..1) */
  location?: Reference;
  /** Medication order that authorizes the dispense (0..*) */
  authorizingPrescription?: Array<Reference>;
  /** Trial fill, partial fill, emergency fill, etc (0..1) */
  type?: CodeableConcept;
  /** Amount dispensed (0..1) */
  quantity?: Quantity;
  /** Amount of medication expressed as a timing amount (0..1) */
  daysSupply?: Quantity;
  /** When the recording of the dispense started (0..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;
  /** When product was packaged and reviewed (0..1) */
  whenPrepared?: string;
  /** Id and extensions of the primitive `whenPrepared`. */
  _whenPrepared?: Element;
  /** When product was given out (0..1) */
  whenHandedOver?: string;
  /** Id and extensions of the primitive `whenHandedOver`. */
  _whenHandedOver?: Element;
  /** Where the medication was/will be sent (0..1) */
  destination?: Reference;
  /** Who collected the medication or where the medication was delivered (0..*) */
  receiver?: Array<Reference>;
  /** Information about the dispense (0..*) */
  note?: Array<Annotation>;
  /** Full representation of the dosage instructions (0..1) */
  renderedDosageInstruction?: string;
  /** Id and extensions of the primitive `renderedDosageInstruction`. */
  _renderedDosageInstruction?: Element;
  /** How the medication is to be used by the patient or administered by the caregiver (0..*) */
  dosageInstruction?: Array<Dosage>;
  /** Whether a substitution was performed on the dispense (0..1) */
  substitution?: MedicationDispenseSubstitution;
  /** A list of relevant lifecycle events (0..*) */
  eventHistory?: Array<Reference>;
}

export namespace MedicationDispense {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medicationdispense-status */
  export type StatusEnum =
    | 'preparation'
    | 'in-progress'
    | 'cancelled'
    | 'on-hold'
    | 'completed'
    | 'entered-in-error'
    | 'stopped'
    | 'declined'
    | 'unknown';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Declined: 'declined' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Who performed event
 */
export interface MedicationDispensePerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Who performed the dispense and what they did (0..1) */
  function?: CodeableConcept;
  /** Individual who was performing (1..1) */
  actor: Reference;
}

/**
 * Whether a substitution was performed on the dispense
 */
export interface MedicationDispenseSubstitution {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether a substitution was or was not performed on the dispense (1..1) */
  wasSubstituted?: boolean;
  /** Id and extensions of the primitive `wasSubstituted`. */
  _wasSubstituted?: Element;
  /** Code signifying whether a different drug was dispensed from what was prescribed (0..1) */
  type?: CodeableConcept;
  /** Why was substitution made (0..*) */
  reason?: Array<CodeableConcept>;
  /** Who is responsible for the substitution (0..1) */
  responsibleParty?: Reference;
}
