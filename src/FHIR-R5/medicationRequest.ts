/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
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
import type { ResourceList } from './resourceList';

/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export interface MedicationRequest {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External ids for this request (0..*) */
  identifier?: Array<Identifier>;
  /** A plan or request that is fulfilled in whole or in part by this medication request (0..*) */
  basedOn?: Array<Reference>;
  /** Reference to an order/prescription that is being replaced by this MedicationRequest (0..1) */
  priorPrescription?: Reference;
  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;
  /** active | on-hold | ended | stopped | completed | cancelled | entered-in-error | draft | unknown (1..1) */
  status?: MedicationRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;
  /** When the status was changed (0..1) */
  statusChanged?: string;
  /** Id and extensions of the primitive `statusChanged`. */
  _statusChanged?: Element;
  /** proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: MedicationRequest.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** Grouping or category of medication request (0..*) */
  category?: Array<CodeableConcept>;
  /** routine | urgent | asap | stat (0..1) */
  priority?: MedicationRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** True if patient is to stop taking or not to start taking the medication (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;
  /** Medication to be taken (1..1) */
  medication: CodeableReference;
  /** Individual or group for whom the medication has been requested (1..1) */
  subject: Reference;
  /** The person or organization who provided the information about this request, if the source is someone other than the requestor (0..*) */
  informationSource?: Array<Reference>;
  /** Encounter created as part of encounter/admission/stay (0..1) */
  encounter?: Reference;
  /** Information to support fulfilling of the medication (0..*) */
  supportingInformation?: Array<Reference>;
  /** When request was initially authored (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Who/What requested the Request (0..1) */
  requester?: Reference;
  /** Reported rather than primary record (0..1) */
  reported?: boolean;
  /** Id and extensions of the primitive `reported`. */
  _reported?: Element;
  /** Desired kind of performer of the medication administration (0..1) */
  performerType?: CodeableConcept;
  /** Intended performer of administration (0..*) */
  performer?: Array<Reference>;
  /** Intended type of device for the administration (0..*) */
  device?: Array<CodeableReference>;
  /** Person who entered the request (0..1) */
  recorder?: Reference;
  /** Reason or indication for ordering or not ordering the medication (0..*) */
  reason?: Array<CodeableReference>;
  /** Overall pattern of medication administration (0..1) */
  courseOfTherapyType?: CodeableConcept;
  /** Associated insurance coverage (0..*) */
  insurance?: Array<Reference>;
  /** Information about the prescription (0..*) */
  note?: Array<Annotation>;
  /** Full representation of the dosage instructions (0..1) */
  renderedDosageInstruction?: string;
  /** Id and extensions of the primitive `renderedDosageInstruction`. */
  _renderedDosageInstruction?: Element;
  /** Period over which the medication is to be taken (0..1) */
  effectiveDosePeriod?: Period;
  /** Specific instructions for how the medication should be taken (0..*) */
  dosageInstruction?: Array<Dosage>;
  /** Medication supply authorization (0..1) */
  dispenseRequest?: MedicationRequestDispenseRequest;
  /** Any restrictions on medication substitution (0..1) */
  substitution?: MedicationRequestSubstitution;
  /** A list of events of interest in the lifecycle (0..*) */
  eventHistory?: Array<Reference>;
}

export namespace MedicationRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medicationrequest-status */
  export type StatusEnum =
    | 'active'
    | 'on-hold'
    | 'ended'
    | 'stopped'
    | 'completed'
    | 'cancelled'
    | 'entered-in-error'
    | 'draft'
    | 'unknown';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Ended: 'ended' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medicationrequest-intent */
  export type IntentEnum =
    | 'proposal'
    | 'plan'
    | 'order'
    | 'original-order'
    | 'reflex-order'
    | 'filler-order'
    | 'instance-order'
    | 'option';
  export const IntentEnum = {
    Proposal: 'proposal' as IntentEnum,
    Plan: 'plan' as IntentEnum,
    Order: 'order' as IntentEnum,
    OriginalOrder: 'original-order' as IntentEnum,
    ReflexOrder: 'reflex-order' as IntentEnum,
    FillerOrder: 'filler-order' as IntentEnum,
    InstanceOrder: 'instance-order' as IntentEnum,
    Option: 'option' as IntentEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-priority */
  export type PriorityEnum = 'routine' | 'urgent' | 'asap' | 'stat';
  export const PriorityEnum = {
    Routine: 'routine' as PriorityEnum,
    Urgent: 'urgent' as PriorityEnum,
    Asap: 'asap' as PriorityEnum,
    Stat: 'stat' as PriorityEnum,
  };
}

/**
 * Medication supply authorization
 */
export interface MedicationRequestDispenseRequest {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** First fill details (0..1) */
  initialFill?: MedicationRequestInitialFill;
  /** Minimum period of time between dispenses (0..1) */
  dispenseInterval?: Duration;
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
  /** Intended performer of dispense (0..1) */
  dispenser?: Reference;
  /** Additional information for the dispenser (0..*) */
  dispenserInstruction?: Array<Annotation>;
  /** Type of adherence packaging to use for the dispense (0..1) */
  doseAdministrationAid?: CodeableConcept;
}

/**
 * First fill details
 */
export interface MedicationRequestInitialFill {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** First fill quantity (0..1) */
  quantity?: Quantity;
  /** First fill duration (0..1) */
  duration?: Duration;
}

/**
 * Any restrictions on medication substitution
 */
export interface MedicationRequestSubstitution {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether substitution is allowed or not (1..1) */
  allowedBoolean?: boolean;
  /** Id and extensions of the primitive `allowedBoolean`. */
  _allowedBoolean?: Element;
  /** Whether substitution is allowed or not (1..1) */
  allowedCodeableConcept?: CodeableConcept;
  /** Why should (not) substitution be made (0..1) */
  reason?: CodeableConcept;
}
