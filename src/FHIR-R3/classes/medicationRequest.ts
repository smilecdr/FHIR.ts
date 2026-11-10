/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Dosage } from './dosage';
import type { Duration } from './duration';
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
 * Base StructureDefinition for MedicationRequest Resource
 */
export class MedicationRequest {
  resourceType: 'MedicationRequest';
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
  /** External ids for this request (0..*) */
  identifier?: Array<Identifier>;
  /** Protocol or definition (0..*) */
  definition?: Array<Reference>;
  /** What request fulfills (0..*) */
  basedOn?: Array<Reference>;
  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;
  /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown (0..1) */
  status?: MedicationRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** proposal | plan | order | instance-order (1..1) */
  intent?: MedicationRequest.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** Type of medication usage (0..1) */
  category?: CodeableConcept;
  /** routine | urgent | stat | asap (0..1) */
  priority?: MedicationRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** Medication to be taken (1..1) */
  medicationCodeableConcept?: CodeableConcept;
  /** Medication to be taken (1..1) */
  medicationReference?: Reference;
  /** Who or group medication request is for (1..1) */
  subject: Reference;
  /** Created during encounter/admission/stay (0..1) */
  context?: Reference;
  /** Information to support ordering of the medication (0..*) */
  supportingInformation?: Array<Reference>;
  /** When request was initially authored (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Who/What requested the Request (0..1) */
  requester?: MedicationRequestRequester;
  /** Person who entered the request (0..1) */
  recorder?: Reference;
  /** Reason or indication for writing the prescription (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Condition or Observation that supports why the prescription is being written (0..*) */
  reasonReference?: Array<Reference>;
  /** Information about the prescription (0..*) */
  note?: Array<Annotation>;
  /** How the medication should be taken (0..*) */
  dosageInstruction?: Array<Dosage>;
  /** Medication supply authorization (0..1) */
  dispenseRequest?: MedicationRequestDispenseRequest;
  /** Any restrictions on medication substitution (0..1) */
  substitution?: MedicationRequestSubstitution;
  /** An order/prescription that is being replaced (0..1) */
  priorPrescription?: Reference;
  /** Clinical Issue with action (0..*) */
  detectedIssue?: Array<Reference>;
  /** A list of events of interest in the lifecycle (0..*) */
  eventHistory?: Array<Reference>;
}

export namespace MedicationRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-request-status */
  export type StatusEnum =
    | 'active'
    | 'on-hold'
    | 'cancelled'
    | 'completed'
    | 'entered-in-error'
    | 'stopped'
    | 'draft'
    | 'unknown';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-request-intent */
  export type IntentEnum = 'proposal' | 'plan' | 'order' | 'instance-order';
  export const IntentEnum = {
    Proposal: 'proposal' as IntentEnum,
    Plan: 'plan' as IntentEnum,
    Order: 'order' as IntentEnum,
    InstanceOrder: 'instance-order' as IntentEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-request-priority */
  export type PriorityEnum = 'routine' | 'urgent' | 'stat' | 'asap';
  export const PriorityEnum = {
    Routine: 'routine' as PriorityEnum,
    Urgent: 'urgent' as PriorityEnum,
    Stat: 'stat' as PriorityEnum,
    Asap: 'asap' as PriorityEnum,
  };
}

/**
 * Who/What requested the Request
 */
export class MedicationRequestRequester {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Who ordered the initial medication(s) (1..1) */
  agent: Reference;
  /** Organization agent is acting for (0..1) */
  onBehalfOf?: Reference;
}

/**
 * Medication supply authorization
 */
export class MedicationRequestDispenseRequest {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Time period supply is authorized for (0..1) */
  validityPeriod?: Period;
  /** Number of refills authorized (0..1) */
  numberOfRepeatsAllowed?: number;
  /** Id and extensions of the primitive `numberOfRepeatsAllowed`. */
  _numberOfRepeatsAllowed?: Element;
  /** Amount of medication to supply per dispense (0..1) */
  quantity?: Quantity;
  /** Number of days supply per dispense (0..1) */
  expectedSupplyDuration?: Duration;
  /** Intended dispenser (0..1) */
  performer?: Reference;
}

/**
 * Any restrictions on medication substitution
 */
export class MedicationRequestSubstitution {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether substitution is allowed or not (1..1) */
  allowed?: boolean;
  /** Id and extensions of the primitive `allowed`. */
  _allowed?: Element;
  /** Why should (not) substitution be made (0..1) */
  reason?: CodeableConcept;
}
