/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Reference } from './reference';

/**
 * The SubscriptionStatus resource describes the state of a Subscription during notifications. It is not persisted.
 */
export class SubscriptionStatus extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.SubscriptionStatusCodes,
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.SubscriptionNotificationType,
        },
      ],
    },
    {
      elementName: 'eventsSinceSubscriptionStart',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'eventsSinceSubscriptionStart', typeCode: 'integer64' }],
    },
    {
      elementName: 'notificationEvent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'notificationEvent', typeCode: 'SubscriptionStatusNotificationEvent' }],
    },
    {
      elementName: 'subscription',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subscription', typeCode: 'Reference', targetResourceTypes: ['Subscription'] },
      ],
    },
    {
      elementName: 'topic',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'topic', typeCode: 'canonical' }],
    },
    {
      elementName: 'error',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'error', typeCode: 'CodeableConcept' }],
    },
  ];

  readonly resourceType = 'SubscriptionStatus';

  /** requested | active | error | off | entered-in-error (0..1) */
  status?: valueSetCodes.SubscriptionStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** handshake | heartbeat | event-notification | query-status | query-event (1..1) */
  type?: valueSetCodes.SubscriptionNotificationType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Events since the Subscription was created (0..1) */
  eventsSinceSubscriptionStart?: string;
  /** Id and extensions of the primitive `eventsSinceSubscriptionStart`. */
  _eventsSinceSubscriptionStart?: Element;

  /** Detailed information about any events relevant to this notification (0..*) */
  notificationEvent?: SubscriptionStatusNotificationEvent[];

  /** Reference to the Subscription responsible for this notification (1..1) */
  subscription?: Reference;

  /** Reference to the SubscriptionTopic this notification relates to (0..1) */
  topic?: string;
  /** Id and extensions of the primitive `topic`. */
  _topic?: Element;

  /** List of errors on the subscription (0..*) */
  error?: CodeableConcept[];

  override fhirType(): string {
    return 'SubscriptionStatus';
  }

  /** FHIR JSON for this SubscriptionStatus, typed as the plain `SubscriptionStatus` data type. */
  override toJSON(): plainTypes.SubscriptionStatus {
    return this.serialize() as plainTypes.SubscriptionStatus;
  }

  /** requested | active | error | off | entered-in-error (0..1) */
  getStatus(): valueSetCodes.SubscriptionStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.SubscriptionStatusCodes | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** handshake | heartbeat | event-notification | query-status | query-event (1..1) */
  getType(): valueSetCodes.SubscriptionNotificationType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.SubscriptionNotificationType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Events since the Subscription was created (0..1) */
  getEventsSinceSubscriptionStart(): string | undefined {
    return this.eventsSinceSubscriptionStart;
  }

  /** Sets `eventsSinceSubscriptionStart`. Throws a FhirModelError when the value is not a valid FHIR integer64. */
  setEventsSinceSubscriptionStart(eventsSinceSubscriptionStart: string | undefined): this {
    return this.setFieldValue('eventsSinceSubscriptionStart', eventsSinceSubscriptionStart);
  }

  hasEventsSinceSubscriptionStart(): boolean {
    return this.hasFieldValue('eventsSinceSubscriptionStart');
  }

  /** The element carrying the id and extensions of `eventsSinceSubscriptionStart`. Created when absent. */
  getEventsSinceSubscriptionStartElement(): Element {
    if (this._eventsSinceSubscriptionStart === undefined) {
      this._eventsSinceSubscriptionStart = new Element();
    }
    return this._eventsSinceSubscriptionStart;
  }

  setEventsSinceSubscriptionStartElement(
    eventsSinceSubscriptionStartElement: Element | undefined
  ): this {
    this._eventsSinceSubscriptionStart = eventsSinceSubscriptionStartElement;
    return this;
  }

  /** Detailed information about any events relevant to this notification (0..*) Never undefined; an empty list is created when absent. */
  getNotificationEvent(): SubscriptionStatusNotificationEvent[] {
    if (this.notificationEvent === undefined) {
      this.notificationEvent = [];
    }
    return this.notificationEvent;
  }

  setNotificationEvent(notificationEvent: SubscriptionStatusNotificationEvent[] | undefined): this {
    return this.setFieldValue('notificationEvent', notificationEvent);
  }

  hasNotificationEvent(): boolean {
    return this.hasFieldValue('notificationEvent');
  }

  /** Appends a new, empty SubscriptionStatusNotificationEvent to `notificationEvent` and returns it so it can be filled in. */
  addNotificationEvent(): SubscriptionStatusNotificationEvent;
  /** Appends the given SubscriptionStatusNotificationEvent to `notificationEvent` and returns this object for chaining. */
  addNotificationEvent(
    subscriptionStatusNotificationEvent: SubscriptionStatusNotificationEvent
  ): this;
  addNotificationEvent(
    subscriptionStatusNotificationEvent?: SubscriptionStatusNotificationEvent
  ): SubscriptionStatusNotificationEvent | this {
    if (subscriptionStatusNotificationEvent !== undefined) {
      return this.addFieldValue('notificationEvent', subscriptionStatusNotificationEvent);
    }
    const createdSubscriptionStatusNotificationEvent = new SubscriptionStatusNotificationEvent();
    this.addFieldValue('notificationEvent', createdSubscriptionStatusNotificationEvent);
    return createdSubscriptionStatusNotificationEvent;
  }

  /** The first SubscriptionStatusNotificationEvent of `notificationEvent`. One is added when the list is empty. */
  getNotificationEventFirstRep(): SubscriptionStatusNotificationEvent {
    const firstSubscriptionStatusNotificationEvent = this.getNotificationEvent()[0];
    return firstSubscriptionStatusNotificationEvent === undefined
      ? this.addNotificationEvent()
      : firstSubscriptionStatusNotificationEvent;
  }

  /** Reference to the Subscription responsible for this notification (1..1) Created when absent. */
  getSubscription(): Reference {
    if (this.subscription === undefined) {
      this.subscription = new Reference();
    }
    return this.subscription;
  }

  setSubscription(subscription: Reference | undefined): this {
    return this.setFieldValue('subscription', subscription);
  }

  hasSubscription(): boolean {
    return this.hasFieldValue('subscription');
  }

  /** Reference to the SubscriptionTopic this notification relates to (0..1) */
  getTopic(): string | undefined {
    return this.topic;
  }

  /** Sets `topic`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setTopic(topic: string | undefined): this {
    return this.setFieldValue('topic', topic);
  }

  hasTopic(): boolean {
    return this.hasFieldValue('topic');
  }

  /** The element carrying the id and extensions of `topic`. Created when absent. */
  getTopicElement(): Element {
    if (this._topic === undefined) {
      this._topic = new Element();
    }
    return this._topic;
  }

  setTopicElement(topicElement: Element | undefined): this {
    this._topic = topicElement;
    return this;
  }

  /** List of errors on the subscription (0..*) Never undefined; an empty list is created when absent. */
  getError(): CodeableConcept[] {
    if (this.error === undefined) {
      this.error = [];
    }
    return this.error;
  }

  setError(error: CodeableConcept[] | undefined): this {
    return this.setFieldValue('error', error);
  }

  hasError(): boolean {
    return this.hasFieldValue('error');
  }

  /** Appends a new, empty CodeableConcept to `error` and returns it so it can be filled in. */
  addError(): CodeableConcept;
  /** Appends the given CodeableConcept to `error` and returns this object for chaining. */
  addError(codeableConcept: CodeableConcept): this;
  addError(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('error', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('error', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `error`. One is added when the list is empty. */
  getErrorFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getError()[0];
    return firstCodeableConcept === undefined ? this.addError() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('SubscriptionStatus', SubscriptionStatus, true);

/** True when the value is a SubscriptionStatus model instance. */
export function isSubscriptionStatus(candidate: unknown): candidate is SubscriptionStatus {
  return candidate instanceof SubscriptionStatus;
}

/**
 * Detailed information about any events relevant to this notification
 */
export class SubscriptionStatusNotificationEvent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'eventNumber',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'eventNumber', typeCode: 'integer64' }],
    },
    {
      elementName: 'timestamp',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'timestamp', typeCode: 'instant' }],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'focus', typeCode: 'Reference' }],
    },
    {
      elementName: 'additionalContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additionalContext', typeCode: 'Reference' }],
    },
  ];

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
  additionalContext?: Reference[];

  override fhirType(): string {
    return 'SubscriptionStatus.notificationEvent';
  }

  /** FHIR JSON for this SubscriptionStatusNotificationEvent, typed as the plain `SubscriptionStatusNotificationEvent` data type. */
  override toJSON(): plainTypes.SubscriptionStatusNotificationEvent {
    return this.serialize() as plainTypes.SubscriptionStatusNotificationEvent;
  }

  /** Sequencing index of this event (1..1) */
  getEventNumber(): string | undefined {
    return this.eventNumber;
  }

  /** Sets `eventNumber`. Throws a FhirModelError when the value is not a valid FHIR integer64. */
  setEventNumber(eventNumber: string | undefined): this {
    return this.setFieldValue('eventNumber', eventNumber);
  }

  hasEventNumber(): boolean {
    return this.hasFieldValue('eventNumber');
  }

  /** The element carrying the id and extensions of `eventNumber`. Created when absent. */
  getEventNumberElement(): Element {
    if (this._eventNumber === undefined) {
      this._eventNumber = new Element();
    }
    return this._eventNumber;
  }

  setEventNumberElement(eventNumberElement: Element | undefined): this {
    this._eventNumber = eventNumberElement;
    return this;
  }

  /** The instant this event occurred (0..1) */
  getTimestamp(): string | undefined {
    return this.timestamp;
  }

  /** Sets `timestamp`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setTimestamp(timestamp: string | undefined): this {
    return this.setFieldValue('timestamp', timestamp);
  }

  hasTimestamp(): boolean {
    return this.hasFieldValue('timestamp');
  }

  /** The element carrying the id and extensions of `timestamp`. Created when absent. */
  getTimestampElement(): Element {
    if (this._timestamp === undefined) {
      this._timestamp = new Element();
    }
    return this._timestamp;
  }

  setTimestampElement(timestampElement: Element | undefined): this {
    this._timestamp = timestampElement;
    return this;
  }

  /** Reference to the primary resource or information of this event (0..1) Created when absent. */
  getFocus(): Reference {
    if (this.focus === undefined) {
      this.focus = new Reference();
    }
    return this.focus;
  }

  setFocus(focus: Reference | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** References related to the focus resource and/or context of this event (0..*) Never undefined; an empty list is created when absent. */
  getAdditionalContext(): Reference[] {
    if (this.additionalContext === undefined) {
      this.additionalContext = [];
    }
    return this.additionalContext;
  }

  setAdditionalContext(additionalContext: Reference[] | undefined): this {
    return this.setFieldValue('additionalContext', additionalContext);
  }

  hasAdditionalContext(): boolean {
    return this.hasFieldValue('additionalContext');
  }

  /** Appends a new, empty Reference to `additionalContext` and returns it so it can be filled in. */
  addAdditionalContext(): Reference;
  /** Appends the given Reference to `additionalContext` and returns this object for chaining. */
  addAdditionalContext(reference: Reference): this;
  addAdditionalContext(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('additionalContext', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('additionalContext', createdReference);
    return createdReference;
  }

  /** The first Reference of `additionalContext`. One is added when the list is empty. */
  getAdditionalContextFirstRep(): Reference {
    const firstReference = this.getAdditionalContext()[0];
    return firstReference === undefined ? this.addAdditionalContext() : firstReference;
  }
}

modelTypeRegistry.register(
  'SubscriptionStatusNotificationEvent',
  SubscriptionStatusNotificationEvent,
  false
);
