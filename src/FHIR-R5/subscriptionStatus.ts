/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * The SubscriptionStatus resource describes the state of a Subscription during notifications. It is not persisted.
 */
export interface SubscriptionStatus {
  resourceType: 'SubscriptionStatus';
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
  /** requested | active | error | off | entered-in-error (0..1) */
  status?: SubscriptionStatus.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** handshake | heartbeat | event-notification | query-status | query-event (1..1) */
  type?: SubscriptionStatus.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Events since the Subscription was created (0..1) */
  eventsSinceSubscriptionStart?: string;
  /** Id and extensions of the primitive `eventsSinceSubscriptionStart`. */
  _eventsSinceSubscriptionStart?: Element;
  /** Detailed information about any events relevant to this notification (0..*) */
  notificationEvent?: Array<SubscriptionStatusNotificationEvent>;
  /** Reference to the Subscription responsible for this notification (1..1) */
  subscription: Reference;
  /** Reference to the SubscriptionTopic this notification relates to (0..1) */
  topic?: string;
  /** Id and extensions of the primitive `topic`. */
  _topic?: Element;
  /** List of errors on the subscription (0..*) */
  error?: Array<CodeableConcept>;
}

export namespace SubscriptionStatus {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/subscription-status */
  export type StatusEnum = 'requested' | 'active' | 'error' | 'off' | 'entered-in-error';
  export const StatusEnum = {
    Requested: 'requested' as StatusEnum,
    Active: 'active' as StatusEnum,
    Error: 'error' as StatusEnum,
    Off: 'off' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/subscription-notification-type */
  export type TypeEnum =
    'handshake' | 'heartbeat' | 'event-notification' | 'query-status' | 'query-event';
  export const TypeEnum = {
    Handshake: 'handshake' as TypeEnum,
    Heartbeat: 'heartbeat' as TypeEnum,
    EventNotification: 'event-notification' as TypeEnum,
    QueryStatus: 'query-status' as TypeEnum,
    QueryEvent: 'query-event' as TypeEnum,
  };
}

/**
 * Detailed information about any events relevant to this notification
 */
export interface SubscriptionStatusNotificationEvent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Sequencing index of this event (1..1) */
  eventNumber?: string;
  /** Id and extensions of the primitive `eventNumber`. */
  _eventNumber?: Element;
  /** The instant this event occurred (0..1) */
  timestamp?: string;
  /** Id and extensions of the primitive `timestamp`. */
  _timestamp?: Element;
  /** Reference to the primary resource or information of this event (0..1) */
  focus?: Reference;
  /** References related to the focus resource and/or context of this event (0..*) */
  additionalContext?: Array<Reference>;
}
