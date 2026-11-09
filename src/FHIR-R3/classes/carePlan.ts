/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
 * Base StructureDefinition for CarePlan Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External Ids for this plan (0..*) */
  identifier?: Array<Identifier>;
  /** Protocol or definition (0..*) */
  definition?: Array<Reference>;
  /** Fulfills care plan (0..*) */
  basedOn?: Array<Reference>;
  /** CarePlan replaced by this CarePlan (0..*) */
  replaces?: Array<Reference>;
  /** Part of referenced CarePlan (0..*) */
  partOf?: Array<Reference>;
  /** draft | active | suspended | completed | entered-in-error | cancelled | unknown (1..1) */
  status?: CarePlan.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** proposal | plan | order | option (1..1) */
  intent?: CarePlan.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** Type of plan (0..*) */
  category?: Array<CodeableConcept>;
  /** Human-friendly name for the CarePlan (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Summary of nature of plan (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Who care plan is for (1..1) */
  subject: Reference;
  /** Created in context of (0..1) */
  context?: Reference;
  /** Time period plan covers (0..1) */
  period?: Period;
  /** Who is responsible for contents of the plan (0..*) */
  author?: Array<Reference>;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/care-plan-status */
  export type StatusEnum =
    'draft' | 'active' | 'suspended' | 'completed' | 'entered-in-error' | 'cancelled' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Suspended: 'suspended' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
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
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** diet | drug | encounter | observation | procedure | supply | other (0..1) */
  category?: CodeableConcept;
  /** Protocol or definition (0..1) */
  definition?: Reference;
  /** Detail type of activity (0..1) */
  code?: CodeableConcept;
  /** Why activity should be done or why activity was prohibited (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Condition triggering need for activity (0..*) */
  reasonReference?: Array<Reference>;
  /** Goals this activity relates to (0..*) */
  goal?: Array<Reference>;
  /** not-started | scheduled | in-progress | on-hold | completed | cancelled | unknown (1..1) */
  status?: CarePlanDetail.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: string;
  /** Id and extensions of the primitive `statusReason`. */
  _statusReason?: Element;
  /** Do NOT do (0..1) */
  prohibited?: boolean;
  /** Id and extensions of the primitive `prohibited`. */
  _prohibited?: Element;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/care-plan-activity-status */
  export type StatusEnum =
    'not-started' | 'scheduled' | 'in-progress' | 'on-hold' | 'completed' | 'cancelled' | 'unknown';
  export const StatusEnum = {
    NotStarted: 'not-started' as StatusEnum,
    Scheduled: 'scheduled' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}
