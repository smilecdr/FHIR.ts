/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { Coding } from './coding';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';

/**
 * Base StructureDefinition for Subscription Resource
 */
export class Subscription extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.SubscriptionStatus },
      ],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactPoint' }],
    },
    {
      elementName: 'end',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'end', typeCode: 'instant' }],
    },
    {
      elementName: 'reason',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'string' }],
    },
    {
      elementName: 'criteria',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'criteria', typeCode: 'string' }],
    },
    {
      elementName: 'error',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'error', typeCode: 'string' }],
    },
    {
      elementName: 'channel',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'channel', typeCode: 'SubscriptionChannel' }],
    },
    {
      elementName: 'tag',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'tag', typeCode: 'Coding' }],
    },
  ];

  readonly resourceType = 'Subscription';

  /** requested | active | error | off (1..1) */
  status?: valueSetCodes.SubscriptionStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Contact details for source (e.g. troubleshooting) (0..*) */
  contact?: ContactPoint[];

  /** When to automatically delete the subscription (0..1) */
  end?: string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  /** Description of why this subscription was created (1..1) */
  reason?: string;
  /** Id and extensions of the primitive `reason`. */
  _reason?: Element;

  /** Rule for server push criteria (1..1) */
  criteria?: string;
  /** Id and extensions of the primitive `criteria`. */
  _criteria?: Element;

  /** Latest error note (0..1) */
  error?: string;
  /** Id and extensions of the primitive `error`. */
  _error?: Element;

  /** The channel on which to report matches to the criteria (1..1) */
  channel?: SubscriptionChannel;

  /** A tag to add to matching resources (0..*) */
  tag?: Coding[];

  override fhirType(): string {
    return 'Subscription';
  }

  /** FHIR JSON for this Subscription, typed as the plain `Subscription` data type. */
  override toJSON(): plainTypes.Subscription {
    return this.serialize() as plainTypes.Subscription;
  }

  /** requested | active | error | off (1..1) */
  getStatus(): valueSetCodes.SubscriptionStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.SubscriptionStatus | undefined): this {
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

  /** Contact details for source (e.g. troubleshooting) (0..*) Never undefined; an empty list is created when absent. */
  getContact(): ContactPoint[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: ContactPoint[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty ContactPoint to `contact` and returns it so it can be filled in. */
  addContact(): ContactPoint;
  /** Appends the given ContactPoint to `contact` and returns this object for chaining. */
  addContact(contactPoint: ContactPoint): this;
  addContact(contactPoint?: ContactPoint): ContactPoint | this {
    if (contactPoint !== undefined) {
      return this.addFieldValue('contact', contactPoint);
    }
    const createdContactPoint = new ContactPoint();
    this.addFieldValue('contact', createdContactPoint);
    return createdContactPoint;
  }

  /** The first ContactPoint of `contact`. One is added when the list is empty. */
  getContactFirstRep(): ContactPoint {
    const firstContactPoint = this.getContact()[0];
    return firstContactPoint === undefined ? this.addContact() : firstContactPoint;
  }

  /** When to automatically delete the subscription (0..1) */
  getEnd(): string | undefined {
    return this.end;
  }

  /** Sets `end`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setEnd(end: string | undefined): this {
    return this.setFieldValue('end', end);
  }

  hasEnd(): boolean {
    return this.hasFieldValue('end');
  }

  /** The element carrying the id and extensions of `end`. Created when absent. */
  getEndElement(): Element {
    if (this._end === undefined) {
      this._end = new Element();
    }
    return this._end;
  }

  setEndElement(endElement: Element | undefined): this {
    this._end = endElement;
    return this;
  }

  /** Description of why this subscription was created (1..1) */
  getReason(): string | undefined {
    return this.reason;
  }

  /** Sets `reason`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReason(reason: string | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** The element carrying the id and extensions of `reason`. Created when absent. */
  getReasonElement(): Element {
    if (this._reason === undefined) {
      this._reason = new Element();
    }
    return this._reason;
  }

  setReasonElement(reasonElement: Element | undefined): this {
    this._reason = reasonElement;
    return this;
  }

  /** Rule for server push criteria (1..1) */
  getCriteria(): string | undefined {
    return this.criteria;
  }

  /** Sets `criteria`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCriteria(criteria: string | undefined): this {
    return this.setFieldValue('criteria', criteria);
  }

  hasCriteria(): boolean {
    return this.hasFieldValue('criteria');
  }

  /** The element carrying the id and extensions of `criteria`. Created when absent. */
  getCriteriaElement(): Element {
    if (this._criteria === undefined) {
      this._criteria = new Element();
    }
    return this._criteria;
  }

  setCriteriaElement(criteriaElement: Element | undefined): this {
    this._criteria = criteriaElement;
    return this;
  }

  /** Latest error note (0..1) */
  getError(): string | undefined {
    return this.error;
  }

  /** Sets `error`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setError(error: string | undefined): this {
    return this.setFieldValue('error', error);
  }

  hasError(): boolean {
    return this.hasFieldValue('error');
  }

  /** The element carrying the id and extensions of `error`. Created when absent. */
  getErrorElement(): Element {
    if (this._error === undefined) {
      this._error = new Element();
    }
    return this._error;
  }

  setErrorElement(errorElement: Element | undefined): this {
    this._error = errorElement;
    return this;
  }

  /** The channel on which to report matches to the criteria (1..1) Created when absent. */
  getChannel(): SubscriptionChannel {
    if (this.channel === undefined) {
      this.channel = new SubscriptionChannel();
    }
    return this.channel;
  }

  setChannel(channel: SubscriptionChannel | undefined): this {
    return this.setFieldValue('channel', channel);
  }

  hasChannel(): boolean {
    return this.hasFieldValue('channel');
  }

  /** A tag to add to matching resources (0..*) Never undefined; an empty list is created when absent. */
  getTag(): Coding[] {
    if (this.tag === undefined) {
      this.tag = [];
    }
    return this.tag;
  }

  setTag(tag: Coding[] | undefined): this {
    return this.setFieldValue('tag', tag);
  }

  hasTag(): boolean {
    return this.hasFieldValue('tag');
  }

  /** Appends a new, empty Coding to `tag` and returns it so it can be filled in. */
  addTag(): Coding;
  /** Appends the given Coding to `tag` and returns this object for chaining. */
  addTag(coding: Coding): this;
  addTag(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('tag', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('tag', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `tag`. One is added when the list is empty. */
  getTagFirstRep(): Coding {
    const firstCoding = this.getTag()[0];
    return firstCoding === undefined ? this.addTag() : firstCoding;
  }
}

modelTypeRegistry.register('Subscription', Subscription, true);

/** True when the value is a Subscription model instance. */
export function isSubscription(candidate: unknown): candidate is Subscription {
  return candidate instanceof Subscription;
}

/**
 * The channel on which to report matches to the criteria
 */
export class SubscriptionChannel extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.SubscriptionChannelType },
      ],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'endpoint', typeCode: 'uri' }],
    },
    {
      elementName: 'payload',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'payload', typeCode: 'string' }],
    },
    {
      elementName: 'header',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'header', typeCode: 'string' }],
    },
  ];

  /** rest-hook | websocket | email | sms | message (1..1) */
  type?: valueSetCodes.SubscriptionChannelType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Where the channel points to (0..1) */
  endpoint?: string;
  /** Id and extensions of the primitive `endpoint`. */
  _endpoint?: Element;

  /** Mimetype to send, or omit for no payload (0..1) */
  payload?: string;
  /** Id and extensions of the primitive `payload`. */
  _payload?: Element;

  /** Usage depends on the channel type (0..*) */
  header?: string[];
  /** Id and extensions of the primitive `header`. */
  _header?: (Element | null)[];

  override fhirType(): string {
    return 'Subscription.channel';
  }

  /** FHIR JSON for this SubscriptionChannel, typed as the plain `SubscriptionChannel` data type. */
  override toJSON(): plainTypes.SubscriptionChannel {
    return this.serialize() as plainTypes.SubscriptionChannel;
  }

  /** rest-hook | websocket | email | sms | message (1..1) */
  getType(): valueSetCodes.SubscriptionChannelType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.SubscriptionChannelType | undefined): this {
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

  /** Where the channel points to (0..1) */
  getEndpoint(): string | undefined {
    return this.endpoint;
  }

  /** Sets `endpoint`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setEndpoint(endpoint: string | undefined): this {
    return this.setFieldValue('endpoint', endpoint);
  }

  hasEndpoint(): boolean {
    return this.hasFieldValue('endpoint');
  }

  /** The element carrying the id and extensions of `endpoint`. Created when absent. */
  getEndpointElement(): Element {
    if (this._endpoint === undefined) {
      this._endpoint = new Element();
    }
    return this._endpoint;
  }

  setEndpointElement(endpointElement: Element | undefined): this {
    this._endpoint = endpointElement;
    return this;
  }

  /** Mimetype to send, or omit for no payload (0..1) */
  getPayload(): string | undefined {
    return this.payload;
  }

  /** Sets `payload`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPayload(payload: string | undefined): this {
    return this.setFieldValue('payload', payload);
  }

  hasPayload(): boolean {
    return this.hasFieldValue('payload');
  }

  /** The element carrying the id and extensions of `payload`. Created when absent. */
  getPayloadElement(): Element {
    if (this._payload === undefined) {
      this._payload = new Element();
    }
    return this._payload;
  }

  setPayloadElement(payloadElement: Element | undefined): this {
    this._payload = payloadElement;
    return this;
  }

  /** Usage depends on the channel type (0..*) Never undefined; an empty list is created when absent. */
  getHeader(): string[] {
    if (this.header === undefined) {
      this.header = [];
    }
    return this.header;
  }

  setHeader(header: string[] | undefined): this {
    return this.setFieldValue('header', header);
  }

  hasHeader(): boolean {
    return this.hasFieldValue('header');
  }

  /** Appends one value to `header`. Throws a FhirModelError when it is not a valid FHIR string. */
  addHeader(header: string): this {
    return this.addFieldValue('header', header);
  }
}

modelTypeRegistry.register('SubscriptionChannel', SubscriptionChannel, false);
