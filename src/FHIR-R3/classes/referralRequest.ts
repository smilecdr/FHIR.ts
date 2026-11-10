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
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for ReferralRequest Resource
 */
export class ReferralRequest {
  resourceType: 'ReferralRequest';
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
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates protocol or definition (0..*) */
  definition?: Array<Reference>;
  /** Request fulfilled by this request (0..*) */
  basedOn?: Array<Reference>;
  /** Request(s) replaced by this request (0..*) */
  replaces?: Array<Reference>;
  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown (1..1) */
  status?: ReferralRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** proposal | plan | order (1..1) */
  intent?: ReferralRequest.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** Referral/Transition of care request type (0..1) */
  type?: CodeableConcept;
  /** Urgency of referral / transfer of care request (0..1) */
  priority?: ReferralRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** Actions requested as part of the referral (0..*) */
  serviceRequested?: Array<CodeableConcept>;
  /** Patient referred to care or transfer (1..1) */
  subject: Reference;
  /** Originating encounter (0..1) */
  context?: Reference;
  /** When the service(s) requested in the referral should occur (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When the service(s) requested in the referral should occur (0..1) */
  occurrencePeriod?: Period;
  /** Date of creation/activation (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Who/what is requesting service (0..1) */
  requester?: ReferralRequestRequester;
  /** The clinical specialty (discipline) that the referral is requested for (0..1) */
  specialty?: CodeableConcept;
  /** Receiver of referral / transfer of care request (0..*) */
  recipient?: Array<Reference>;
  /** Reason for referral / transfer of care request (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Why is service needed? (0..*) */
  reasonReference?: Array<Reference>;
  /** A textual description of the referral (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Additonal information to support referral or transfer of care request (0..*) */
  supportingInfo?: Array<Reference>;
  /** Comments made about referral request (0..*) */
  note?: Array<Annotation>;
  /** Key events in history of request (0..*) */
  relevantHistory?: Array<Reference>;
}

export namespace ReferralRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-status */
  export type StatusEnum =
    'draft' | 'active' | 'suspended' | 'cancelled' | 'completed' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Suspended: 'suspended' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-intent */
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
 * Who/what is requesting service
 */
export class ReferralRequestRequester {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Individual making the request (1..1) */
  agent: Reference;
  /** Organization agent is acting for (0..1) */
  onBehalfOf?: Reference;
}
