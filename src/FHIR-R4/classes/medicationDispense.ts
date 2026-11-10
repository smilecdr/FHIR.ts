/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Dosage } from './dosage';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient. This includes a description of the medication product (supply) provided and the instructions for administering the medication. The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export class MedicationDispense {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Event that dispense is part of (0..*) */
  partOf?: Array<Reference>;
  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown (1..1) */
  status?: MedicationDispense.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Why a dispense was not performed (0..1) */
  statusReasonCodeableConcept?: CodeableConcept;
  /** Why a dispense was not performed (0..1) */
  statusReasonReference?: Reference;
  /** Type of medication dispense (0..1) */
  category?: CodeableConcept;
  /** What medication was supplied (1..1) */
  medicationCodeableConcept?: CodeableConcept;
  /** What medication was supplied (1..1) */
  medicationReference?: Reference;
  /** Who the dispense is for (0..1) */
  subject?: Reference;
  /** Encounter / Episode associated with event (0..1) */
  context?: Reference;
  /** Information that supports the dispensing of the medication (0..*) */
  supportingInformation?: Array<Reference>;
  /** Who performed event (0..*) */
  performer?: Array<MedicationDispensePerformer>;
  /** Where the dispense occurred (0..1) */
  location?: Reference;
  /** Medication order that authorizes the dispense (0..*) */
  authorizingPrescription?: Array<Reference>;
  /** Trial fill, partial fill, emergency fill, etc. (0..1) */
  type?: CodeableConcept;
  /** Amount dispensed (0..1) */
  quantity?: Quantity;
  /** Amount of medication expressed as a timing amount (0..1) */
  daysSupply?: Quantity;
  /** When product was packaged and reviewed (0..1) */
  whenPrepared?: Date | string;
  /** Id and extensions of the primitive `whenPrepared`. */
  _whenPrepared?: Element;
  /** When product was given out (0..1) */
  whenHandedOver?: Date | string;
  /** Id and extensions of the primitive `whenHandedOver`. */
  _whenHandedOver?: Element;
  /** Where the medication was sent (0..1) */
  destination?: Reference;
  /** Who collected the medication (0..*) */
  receiver?: Array<Reference>;
  /** Information about the dispense (0..*) */
  note?: Array<Annotation>;
  /** How the medication is to be used by the patient or administered by the caregiver (0..*) */
  dosageInstruction?: Array<Dosage>;
  /** Whether a substitution was performed on the dispense (0..1) */
  substitution?: MedicationDispenseSubstitution;
  /** Clinical issue with action (0..*) */
  detectedIssue?: Array<Reference>;
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
export class MedicationDispensePerformer {
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
export class MedicationDispenseSubstitution {
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
  /** Who is responsible for the substitution (0..*) */
  responsibleParty?: Array<Reference>;
}
