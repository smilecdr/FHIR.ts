/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
 * Base StructureDefinition for MedicationDispense Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Event that dispense is part of (0..*) */
  partOf?: Array<Reference>;
  /** preparation | in-progress | on-hold | completed | entered-in-error | stopped (0..1) */
  status?: MedicationDispense.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
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
  /** Medication order that authorizes the dispense (0..*) */
  authorizingPrescription?: Array<Reference>;
  /** Trial fill, partial fill, emergency fill, etc. (0..1) */
  type?: CodeableConcept;
  /** Amount dispensed (0..1) */
  quantity?: Quantity;
  /** Amount of medication expressed as a timing amount (0..1) */
  daysSupply?: Quantity;
  /** When product was packaged and reviewed (0..1) */
  whenPrepared?: string;
  /** Id and extensions of the primitive `whenPrepared`. */
  _whenPrepared?: Element;
  /** When product was given out (0..1) */
  whenHandedOver?: string;
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
  /** Whether the dispense was or was not performed (0..1) */
  notDone?: boolean;
  /** Id and extensions of the primitive `notDone`. */
  _notDone?: Element;
  /** Why a dispense was not performed (0..1) */
  notDoneReasonCodeableConcept?: CodeableConcept;
  /** Why a dispense was not performed (0..1) */
  notDoneReasonReference?: Reference;
  /** A list of releveant lifecycle events (0..*) */
  eventHistory?: Array<Reference>;
}

export namespace MedicationDispense {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-dispense-status */
  export type StatusEnum =
    'preparation' | 'in-progress' | 'on-hold' | 'completed' | 'entered-in-error' | 'stopped';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
  };
}

/**
 * Who performed event
 */
export class MedicationDispensePerformer {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Individual who was performing (1..1) */
  actor: Reference;
  /** Organization organization was acting for (0..1) */
  onBehalfOf?: Reference;
}

/**
 * Whether a substitution was performed on the dispense
 */
export class MedicationDispenseSubstitution {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
