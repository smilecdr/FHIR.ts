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
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { Timing } from './timing';

/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export class CarePlan {
  resourceType: 'CarePlan';
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
  /** External Ids for this plan (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: Array<string>;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Array<Element | null>;
  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: Array<string>;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Array<Element | null>;
  /** Fulfills CarePlan (0..*) */
  basedOn?: Array<Reference>;
  /** CarePlan replaced by this CarePlan (0..*) */
  replaces?: Array<Reference>;
  /** Part of referenced CarePlan (0..*) */
  partOf?: Array<Reference>;
  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  status?: CarePlan.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** proposal | plan | order | option (1..1) */
  intent?: CarePlan.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** Type of plan (0..*) */
  category?: Array<CodeableConcept>;
  /** Human-friendly name for the care plan (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Summary of nature of plan (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Who the care plan is for (1..1) */
  subject: Reference;
  /** Encounter created as part of (0..1) */
  encounter?: Reference;
  /** Time period plan covers (0..1) */
  period?: Period;
  /** Date record was first recorded (0..1) */
  created?: Date | string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Who is the designated responsible party (0..1) */
  author?: Reference;
  /** Who provided the content of the care plan (0..*) */
  contributor?: Array<Reference>;
  /** Who's involved in plan? (0..*) */
  careTeam?: Array<Reference>;
  /** Health issues this plan addresses (0..*) */
  addresses?: Array<Reference>;
  /** Information considered as part of plan (0..*) */
  supportingInfo?: Array<Reference>;
  /** Desired outcome of plan (0..*) */
  goal?: Array<Reference>;
  /** Action to occur as part of plan (0..*) */
  activity?: Array<CarePlanActivity>;
  /** Comments about the plan (0..*) */
  note?: Array<Annotation>;
}

export namespace CarePlan {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-status */
  export type StatusEnum =
    'draft' | 'active' | 'on-hold' | 'revoked' | 'completed' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Revoked: 'revoked' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/care-plan-intent */
  export type IntentEnum = 'proposal' | 'plan' | 'order' | 'option';
  export const IntentEnum = {
    Proposal: 'proposal' as IntentEnum,
    Plan: 'plan' as IntentEnum,
    Order: 'order' as IntentEnum,
    Option: 'option' as IntentEnum,
  };
}

/**
 * Action to occur as part of plan
 */
export class CarePlanActivity {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Results of the activity (0..*) */
  outcomeCodeableConcept?: Array<CodeableConcept>;
  /** Appointment, Encounter, Procedure, etc. (0..*) */
  outcomeReference?: Array<Reference>;
  /** Comments about the activity status/progress (0..*) */
  progress?: Array<Annotation>;
  /** Activity details defined in specific resource (0..1) */
  reference?: Reference;
  /** In-line definition of activity (0..1) */
  detail?: CarePlanDetail;
}

/**
 * In-line definition of activity
 */
export class CarePlanDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription (0..1) */
  kind?: CarePlanDetail.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: Array<string>;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Array<Element | null>;
  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: Array<string>;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Array<Element | null>;
  /** Detail type of activity (0..1) */
  code?: CodeableConcept;
  /** Why activity should be done or why activity was prohibited (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Why activity is needed (0..*) */
  reasonReference?: Array<Reference>;
  /** Goals this activity relates to (0..*) */
  goal?: Array<Reference>;
  /** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error (1..1) */
  status?: CarePlanDetail.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;
  /** If true, activity is prohibiting action (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;
  /** When activity is to occur (0..1) */
  scheduledTiming?: Timing;
  /** When activity is to occur (0..1) */
  scheduledPeriod?: Period;
  /** When activity is to occur (0..1) */
  scheduledString?: string;
  /** Id and extensions of the primitive `scheduledString`. */
  _scheduledString?: Element;
  /** Where it should happen (0..1) */
  location?: Reference;
  /** Who will be responsible? (0..*) */
  performer?: Array<Reference>;
  /** What is to be administered/supplied (0..1) */
  productCodeableConcept?: CodeableConcept;
  /** What is to be administered/supplied (0..1) */
  productReference?: Reference;
  /** How to consume/day? (0..1) */
  dailyAmount?: Quantity;
  /** How much to administer/supply/consume (0..1) */
  quantity?: Quantity;
  /** Extra info describing activity to perform (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

export namespace CarePlanDetail {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/care-plan-activity-kind */
  export type KindEnum =
    | 'Appointment'
    | 'CommunicationRequest'
    | 'DeviceRequest'
    | 'MedicationRequest'
    | 'NutritionOrder'
    | 'Task'
    | 'ServiceRequest'
    | 'VisionPrescription';
  export const KindEnum = {
    Appointment: 'Appointment' as KindEnum,
    CommunicationRequest: 'CommunicationRequest' as KindEnum,
    DeviceRequest: 'DeviceRequest' as KindEnum,
    MedicationRequest: 'MedicationRequest' as KindEnum,
    NutritionOrder: 'NutritionOrder' as KindEnum,
    Task: 'Task' as KindEnum,
    ServiceRequest: 'ServiceRequest' as KindEnum,
    VisionPrescription: 'VisionPrescription' as KindEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/care-plan-activity-status */
  export type StatusEnum =
    | 'not-started'
    | 'scheduled'
    | 'in-progress'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'stopped'
    | 'unknown'
    | 'entered-in-error';
  export const StatusEnum = {
    NotStarted: 'not-started' as StatusEnum,
    Scheduled: 'scheduled' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}
