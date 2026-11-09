/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { Coding } from './coding';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * The subscription resource describes a particular client's request to be notified about a SubscriptionTopic.
 */
export class Subscription extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'status',
      minimum: 1,
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
      elementName: 'topic',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'topic', typeCode: 'canonical' }],
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
      elementName: 'managingEntity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'managingEntity',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'HealthcareService',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'string' }],
    },
    {
      elementName: 'filterBy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'filterBy', typeCode: 'SubscriptionFilterBy' }],
    },
    {
      elementName: 'channelType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'channelType', typeCode: 'Coding' }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'endpoint', typeCode: 'url' }],
    },
    {
      elementName: 'parameter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'SubscriptionParameter' }],
    },
    {
      elementName: 'heartbeatPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'heartbeatPeriod', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'timeout',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'timeout', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'contentType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentType', typeCode: 'code' }],
    },
    {
      elementName: 'content',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'content',
          typeCode: 'code',
          allowedCodes: valueSetCodes.SubscriptionPayloadContent,
        },
      ],
    },
    {
      elementName: 'maxCount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxCount', typeCode: 'positiveInt' }],
    },
  ];

  readonly resourceType = 'Subscription';

  /** Additional identifiers (business identifier) (0..*) */
  identifier?: Identifier[];

  /** Human readable name for this subscription (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** requested | active | error | off | entered-in-error (1..1) */
  status?: valueSetCodes.SubscriptionStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reference to the subscription topic being subscribed to (1..1) */
  topic?: string;
  /** Id and extensions of the primitive `topic`. */
  _topic?: Element;

  /** Contact details for source (e.g. troubleshooting) (0..*) */
  contact?: ContactPoint[];

  /** When to automatically delete the subscription (0..1) */
  end?: string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  /** Entity responsible for Subscription changes (0..1) */
  managingEntity?: Reference;

  /** Description of why this subscription was created (0..1) */
  reason?: string;
  /** Id and extensions of the primitive `reason`. */
  _reason?: Element;

  /** Criteria for narrowing the subscription topic stream (0..*) */
  filterBy?: SubscriptionFilterBy[];

  /** Channel type for notifications (1..1) */
  channelType?: Coding;

  /** Where the channel points to (0..1) */
  endpoint?: string;
  /** Id and extensions of the primitive `endpoint`. */
  _endpoint?: Element;

  /** Channel type (0..*) */
  parameter?: SubscriptionParameter[];

  /** Interval in seconds to send 'heartbeat' notification (0..1) */
  heartbeatPeriod?: number;
  /** Id and extensions of the primitive `heartbeatPeriod`. */
  _heartbeatPeriod?: Element;

  /** Timeout in seconds to attempt notification delivery (0..1) */
  timeout?: number;
  /** Id and extensions of the primitive `timeout`. */
  _timeout?: Element;

  /** MIME type to send, or omit for no payload (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;

  /** empty | id-only | full-resource (0..1) */
  content?: valueSetCodes.SubscriptionPayloadContent;
  /** Id and extensions of the primitive `content`. */
  _content?: Element;

  /** Maximum number of events that can be combined in a single notification (0..1) */
  maxCount?: number;
  /** Id and extensions of the primitive `maxCount`. */
  _maxCount?: Element;

  override fhirType(): string {
    return 'Subscription';
  }

  /** FHIR JSON for this Subscription, typed as the plain `Subscription` data type. */
  override toJSON(): plainTypes.Subscription {
    return this.serialize() as plainTypes.Subscription;
  }

  /** Additional identifiers (business identifier) (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
  }

  /** Human readable name for this subscription (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** requested | active | error | off | entered-in-error (1..1) */
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

  /** Reference to the subscription topic being subscribed to (1..1) */
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

  /** Entity responsible for Subscription changes (0..1) Created when absent. */
  getManagingEntity(): Reference {
    if (this.managingEntity === undefined) {
      this.managingEntity = new Reference();
    }
    return this.managingEntity;
  }

  setManagingEntity(managingEntity: Reference | undefined): this {
    return this.setFieldValue('managingEntity', managingEntity);
  }

  hasManagingEntity(): boolean {
    return this.hasFieldValue('managingEntity');
  }

  /** Description of why this subscription was created (0..1) */
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

  /** Criteria for narrowing the subscription topic stream (0..*) Never undefined; an empty list is created when absent. */
  getFilterBy(): SubscriptionFilterBy[] {
    if (this.filterBy === undefined) {
      this.filterBy = [];
    }
    return this.filterBy;
  }

  setFilterBy(filterBy: SubscriptionFilterBy[] | undefined): this {
    return this.setFieldValue('filterBy', filterBy);
  }

  hasFilterBy(): boolean {
    return this.hasFieldValue('filterBy');
  }

  /** Appends a new, empty SubscriptionFilterBy to `filterBy` and returns it so it can be filled in. */
  addFilterBy(): SubscriptionFilterBy;
  /** Appends the given SubscriptionFilterBy to `filterBy` and returns this object for chaining. */
  addFilterBy(subscriptionFilterBy: SubscriptionFilterBy): this;
  addFilterBy(subscriptionFilterBy?: SubscriptionFilterBy): SubscriptionFilterBy | this {
    if (subscriptionFilterBy !== undefined) {
      return this.addFieldValue('filterBy', subscriptionFilterBy);
    }
    const createdSubscriptionFilterBy = new SubscriptionFilterBy();
    this.addFieldValue('filterBy', createdSubscriptionFilterBy);
    return createdSubscriptionFilterBy;
  }

  /** The first SubscriptionFilterBy of `filterBy`. One is added when the list is empty. */
  getFilterByFirstRep(): SubscriptionFilterBy {
    const firstSubscriptionFilterBy = this.getFilterBy()[0];
    return firstSubscriptionFilterBy === undefined ? this.addFilterBy() : firstSubscriptionFilterBy;
  }

  /** Channel type for notifications (1..1) Created when absent. */
  getChannelType(): Coding {
    if (this.channelType === undefined) {
      this.channelType = new Coding();
    }
    return this.channelType;
  }

  setChannelType(channelType: Coding | undefined): this {
    return this.setFieldValue('channelType', channelType);
  }

  hasChannelType(): boolean {
    return this.hasFieldValue('channelType');
  }

  /** Where the channel points to (0..1) */
  getEndpoint(): string | undefined {
    return this.endpoint;
  }

  /** Sets `endpoint`. Throws a FhirModelError when the value is not a valid FHIR url. */
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

  /** Channel type (0..*) Never undefined; an empty list is created when absent. */
  getParameter(): SubscriptionParameter[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: SubscriptionParameter[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty SubscriptionParameter to `parameter` and returns it so it can be filled in. */
  addParameter(): SubscriptionParameter;
  /** Appends the given SubscriptionParameter to `parameter` and returns this object for chaining. */
  addParameter(subscriptionParameter: SubscriptionParameter): this;
  addParameter(subscriptionParameter?: SubscriptionParameter): SubscriptionParameter | this {
    if (subscriptionParameter !== undefined) {
      return this.addFieldValue('parameter', subscriptionParameter);
    }
    const createdSubscriptionParameter = new SubscriptionParameter();
    this.addFieldValue('parameter', createdSubscriptionParameter);
    return createdSubscriptionParameter;
  }

  /** The first SubscriptionParameter of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): SubscriptionParameter {
    const firstSubscriptionParameter = this.getParameter()[0];
    return firstSubscriptionParameter === undefined
      ? this.addParameter()
      : firstSubscriptionParameter;
  }

  /** Interval in seconds to send 'heartbeat' notification (0..1) */
  getHeartbeatPeriod(): number | undefined {
    return this.heartbeatPeriod;
  }

  /** Sets `heartbeatPeriod`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setHeartbeatPeriod(heartbeatPeriod: number | undefined): this {
    return this.setFieldValue('heartbeatPeriod', heartbeatPeriod);
  }

  hasHeartbeatPeriod(): boolean {
    return this.hasFieldValue('heartbeatPeriod');
  }

  /** The element carrying the id and extensions of `heartbeatPeriod`. Created when absent. */
  getHeartbeatPeriodElement(): Element {
    if (this._heartbeatPeriod === undefined) {
      this._heartbeatPeriod = new Element();
    }
    return this._heartbeatPeriod;
  }

  setHeartbeatPeriodElement(heartbeatPeriodElement: Element | undefined): this {
    this._heartbeatPeriod = heartbeatPeriodElement;
    return this;
  }

  /** Timeout in seconds to attempt notification delivery (0..1) */
  getTimeout(): number | undefined {
    return this.timeout;
  }

  /** Sets `timeout`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setTimeout(timeout: number | undefined): this {
    return this.setFieldValue('timeout', timeout);
  }

  hasTimeout(): boolean {
    return this.hasFieldValue('timeout');
  }

  /** The element carrying the id and extensions of `timeout`. Created when absent. */
  getTimeoutElement(): Element {
    if (this._timeout === undefined) {
      this._timeout = new Element();
    }
    return this._timeout;
  }

  setTimeoutElement(timeoutElement: Element | undefined): this {
    this._timeout = timeoutElement;
    return this;
  }

  /** MIME type to send, or omit for no payload (0..1) */
  getContentType(): string | undefined {
    return this.contentType;
  }

  /** Sets `contentType`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setContentType(contentType: string | undefined): this {
    return this.setFieldValue('contentType', contentType);
  }

  hasContentType(): boolean {
    return this.hasFieldValue('contentType');
  }

  /** The element carrying the id and extensions of `contentType`. Created when absent. */
  getContentTypeElement(): Element {
    if (this._contentType === undefined) {
      this._contentType = new Element();
    }
    return this._contentType;
  }

  setContentTypeElement(contentTypeElement: Element | undefined): this {
    this._contentType = contentTypeElement;
    return this;
  }

  /** empty | id-only | full-resource (0..1) */
  getContent(): valueSetCodes.SubscriptionPayloadContent | undefined {
    return this.content;
  }

  /** Sets `content`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setContent(content: valueSetCodes.SubscriptionPayloadContent | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** The element carrying the id and extensions of `content`. Created when absent. */
  getContentElement(): Element {
    if (this._content === undefined) {
      this._content = new Element();
    }
    return this._content;
  }

  setContentElement(contentElement: Element | undefined): this {
    this._content = contentElement;
    return this;
  }

  /** Maximum number of events that can be combined in a single notification (0..1) */
  getMaxCount(): number | undefined {
    return this.maxCount;
  }

  /** Sets `maxCount`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setMaxCount(maxCount: number | undefined): this {
    return this.setFieldValue('maxCount', maxCount);
  }

  hasMaxCount(): boolean {
    return this.hasFieldValue('maxCount');
  }

  /** The element carrying the id and extensions of `maxCount`. Created when absent. */
  getMaxCountElement(): Element {
    if (this._maxCount === undefined) {
      this._maxCount = new Element();
    }
    return this._maxCount;
  }

  setMaxCountElement(maxCountElement: Element | undefined): this {
    this._maxCount = maxCountElement;
    return this;
  }
}

modelTypeRegistry.register('Subscription', Subscription, true);

/** True when the value is a Subscription model instance. */
export function isSubscription(candidate: unknown): candidate is Subscription {
  return candidate instanceof Subscription;
}

/**
 * Criteria for narrowing the subscription topic stream
 */
export class SubscriptionFilterBy extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'resourceType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resourceType', typeCode: 'uri' }],
    },
    {
      elementName: 'filterParameter',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'filterParameter', typeCode: 'string' }],
    },
    {
      elementName: 'comparator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'comparator', typeCode: 'code', allowedCodes: valueSetCodes.SearchComparator },
      ],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'modifier', typeCode: 'code', allowedCodes: valueSetCodes.SearchModifierCode },
      ],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** Allowed Resource (reference to definition) for this Subscription filter (0..1) */
  resourceType?: string;
  /** Id and extensions of the primitive `resourceType`. */
  _resourceType?: Element;

  /** Filter label defined in SubscriptionTopic (1..1) */
  filterParameter?: string;
  /** Id and extensions of the primitive `filterParameter`. */
  _filterParameter?: Element;

  /** eq | ne | gt | lt | ge | le | sa | eb | ap (0..1) */
  comparator?: valueSetCodes.SearchComparator;
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: Element;

  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate (0..1) */
  modifier?: valueSetCodes.SearchModifierCode;
  /** Id and extensions of the primitive `modifier`. */
  _modifier?: Element;

  /** Literal value or resource path (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'Subscription.filterBy';
  }

  /** FHIR JSON for this SubscriptionFilterBy, typed as the plain `SubscriptionFilterBy` data type. */
  override toJSON(): plainTypes.SubscriptionFilterBy {
    return this.serialize() as plainTypes.SubscriptionFilterBy;
  }

  /** Allowed Resource (reference to definition) for this Subscription filter (0..1) */
  getResourceType(): string | undefined {
    return this.resourceType;
  }

  /** Sets `resourceType`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setResourceType(resourceType: string | undefined): this {
    return this.setFieldValue('resourceType', resourceType);
  }

  hasResourceType(): boolean {
    return this.hasFieldValue('resourceType');
  }

  /** The element carrying the id and extensions of `resourceType`. Created when absent. */
  getResourceTypeElement(): Element {
    if (this._resourceType === undefined) {
      this._resourceType = new Element();
    }
    return this._resourceType;
  }

  setResourceTypeElement(resourceTypeElement: Element | undefined): this {
    this._resourceType = resourceTypeElement;
    return this;
  }

  /** Filter label defined in SubscriptionTopic (1..1) */
  getFilterParameter(): string | undefined {
    return this.filterParameter;
  }

  /** Sets `filterParameter`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setFilterParameter(filterParameter: string | undefined): this {
    return this.setFieldValue('filterParameter', filterParameter);
  }

  hasFilterParameter(): boolean {
    return this.hasFieldValue('filterParameter');
  }

  /** The element carrying the id and extensions of `filterParameter`. Created when absent. */
  getFilterParameterElement(): Element {
    if (this._filterParameter === undefined) {
      this._filterParameter = new Element();
    }
    return this._filterParameter;
  }

  setFilterParameterElement(filterParameterElement: Element | undefined): this {
    this._filterParameter = filterParameterElement;
    return this;
  }

  /** eq | ne | gt | lt | ge | le | sa | eb | ap (0..1) */
  getComparator(): valueSetCodes.SearchComparator | undefined {
    return this.comparator;
  }

  /** Sets `comparator`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setComparator(comparator: valueSetCodes.SearchComparator | undefined): this {
    return this.setFieldValue('comparator', comparator);
  }

  hasComparator(): boolean {
    return this.hasFieldValue('comparator');
  }

  /** The element carrying the id and extensions of `comparator`. Created when absent. */
  getComparatorElement(): Element {
    if (this._comparator === undefined) {
      this._comparator = new Element();
    }
    return this._comparator;
  }

  setComparatorElement(comparatorElement: Element | undefined): this {
    this._comparator = comparatorElement;
    return this;
  }

  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate (0..1) */
  getModifier(): valueSetCodes.SearchModifierCode | undefined {
    return this.modifier;
  }

  /** Sets `modifier`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setModifier(modifier: valueSetCodes.SearchModifierCode | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** The element carrying the id and extensions of `modifier`. Created when absent. */
  getModifierElement(): Element {
    if (this._modifier === undefined) {
      this._modifier = new Element();
    }
    return this._modifier;
  }

  setModifierElement(modifierElement: Element | undefined): this {
    this._modifier = modifierElement;
    return this;
  }

  /** Literal value or resource path (1..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setValue(value: string | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** The element carrying the id and extensions of `value`. Created when absent. */
  getValueElement(): Element {
    if (this._value === undefined) {
      this._value = new Element();
    }
    return this._value;
  }

  setValueElement(valueElement: Element | undefined): this {
    this._value = valueElement;
    return this;
  }
}

modelTypeRegistry.register('SubscriptionFilterBy', SubscriptionFilterBy, false);

/**
 * Channel type
 */
export class SubscriptionParameter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** Name (key) of the parameter (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Value of the parameter to use or pass through (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'Subscription.parameter';
  }

  /** FHIR JSON for this SubscriptionParameter, typed as the plain `SubscriptionParameter` data type. */
  override toJSON(): plainTypes.SubscriptionParameter {
    return this.serialize() as plainTypes.SubscriptionParameter;
  }

  /** Name (key) of the parameter (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Value of the parameter to use or pass through (1..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setValue(value: string | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** The element carrying the id and extensions of `value`. Created when absent. */
  getValueElement(): Element {
    if (this._value === undefined) {
      this._value = new Element();
    }
    return this._value;
  }

  setValueElement(valueElement: Element | undefined): this {
    this._value = valueElement;
    return this;
  }
}

modelTypeRegistry.register('SubscriptionParameter', SubscriptionParameter, false);
