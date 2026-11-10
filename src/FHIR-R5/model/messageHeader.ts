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
import { Coding } from './coding';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * The header for a message exchange that is either requesting or responding to an action. The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export class MessageHeader extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'event',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'eventCoding', typeCode: 'Coding' },
        { jsonKey: 'eventCanonical', typeCode: 'canonical' },
      ],
    },
    {
      elementName: 'destination',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'destination', typeCode: 'MessageHeaderDestination' }],
    },
    {
      elementName: 'sender',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'sender',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'source',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'MessageHeaderSource' }],
    },
    {
      elementName: 'responsible',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'responsible',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'response',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'response', typeCode: 'MessageHeaderResponse' }],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'focus', typeCode: 'Reference' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'canonical' }],
    },
  ];

  readonly resourceType = 'MessageHeader';

  /** Event code or link to EventDefinition (1..1) */
  eventCoding?: Coding;
  /** Event code or link to EventDefinition (1..1) */
  eventCanonical?: string;
  /** Id and extensions of the primitive `eventCanonical`. */
  _eventCanonical?: Element;

  /** Message destination application(s) (0..*) */
  destination?: MessageHeaderDestination[];

  /** Real world sender of the message (0..1) */
  sender?: Reference;

  /** The source of the decision (0..1) */
  author?: Reference;

  /** Message source application (1..1) */
  source?: MessageHeaderSource;

  /** Final responsibility for event (0..1) */
  responsible?: Reference;

  /** Cause of event (0..1) */
  reason?: CodeableConcept;

  /** If this is a reply to prior message (0..1) */
  response?: MessageHeaderResponse;

  /** The actual content of the message (0..*) */
  focus?: Reference[];

  /** Link to the definition for this message (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;

  override fhirType(): string {
    return 'MessageHeader';
  }

  /** FHIR JSON for this MessageHeader, typed as the plain `MessageHeader` data type. */
  override toJSON(): plainTypes.MessageHeader {
    return this.serialize() as plainTypes.MessageHeader;
  }

  /** Event code or link to EventDefinition (1..1) Whichever type of `event[x]` is set. */
  getEvent(): Coding | string | undefined {
    return this.getChoiceValue<Coding | string>('event');
  }

  /** True when any type of `event[x]` is set. */
  hasEvent(): boolean {
    return this.hasChoiceValue('event');
  }

  getEventCoding(): Coding | undefined {
    return this.eventCoding;
  }

  /** Sets `event[x]` as Coding and clears every other type of it. */
  setEventCoding(eventCoding: Coding | undefined): this {
    return this.setFieldValue('eventCoding', eventCoding);
  }

  hasEventCoding(): boolean {
    return this.hasFieldValue('eventCoding');
  }

  getEventCanonical(): string | undefined {
    return this.eventCanonical;
  }

  /** Sets `event[x]` as canonical and clears every other type of it. */
  setEventCanonical(eventCanonical: string | undefined): this {
    return this.setFieldValue('eventCanonical', eventCanonical);
  }

  hasEventCanonical(): boolean {
    return this.hasFieldValue('eventCanonical');
  }

  /** Message destination application(s) (0..*) Never undefined; an empty list is created when absent. */
  getDestination(): MessageHeaderDestination[] {
    if (this.destination === undefined) {
      this.destination = [];
    }
    return this.destination;
  }

  setDestination(destination: MessageHeaderDestination[] | undefined): this {
    return this.setFieldValue('destination', destination);
  }

  hasDestination(): boolean {
    return this.hasFieldValue('destination');
  }

  /** Appends a new, empty MessageHeaderDestination to `destination` and returns it so it can be filled in. */
  addDestination(): MessageHeaderDestination;
  /** Appends the given MessageHeaderDestination to `destination` and returns this object for chaining. */
  addDestination(messageHeaderDestination: MessageHeaderDestination): this;
  addDestination(
    messageHeaderDestination?: MessageHeaderDestination
  ): MessageHeaderDestination | this {
    if (messageHeaderDestination !== undefined) {
      return this.addFieldValue('destination', messageHeaderDestination);
    }
    const createdMessageHeaderDestination = new MessageHeaderDestination();
    this.addFieldValue('destination', createdMessageHeaderDestination);
    return createdMessageHeaderDestination;
  }

  /** The first MessageHeaderDestination of `destination`. One is added when the list is empty. */
  getDestinationFirstRep(): MessageHeaderDestination {
    const firstMessageHeaderDestination = this.getDestination()[0];
    return firstMessageHeaderDestination === undefined
      ? this.addDestination()
      : firstMessageHeaderDestination;
  }

  /** Real world sender of the message (0..1) Created when absent. */
  getSender(): Reference {
    if (this.sender === undefined) {
      this.sender = new Reference();
    }
    return this.sender;
  }

  setSender(sender: Reference | undefined): this {
    return this.setFieldValue('sender', sender);
  }

  hasSender(): boolean {
    return this.hasFieldValue('sender');
  }

  /** The source of the decision (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Message source application (1..1) Created when absent. */
  getSource(): MessageHeaderSource {
    if (this.source === undefined) {
      this.source = new MessageHeaderSource();
    }
    return this.source;
  }

  setSource(source: MessageHeaderSource | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Final responsibility for event (0..1) Created when absent. */
  getResponsible(): Reference {
    if (this.responsible === undefined) {
      this.responsible = new Reference();
    }
    return this.responsible;
  }

  setResponsible(responsible: Reference | undefined): this {
    return this.setFieldValue('responsible', responsible);
  }

  hasResponsible(): boolean {
    return this.hasFieldValue('responsible');
  }

  /** Cause of event (0..1) Created when absent. */
  getReason(): CodeableConcept {
    if (this.reason === undefined) {
      this.reason = new CodeableConcept();
    }
    return this.reason;
  }

  setReason(reason: CodeableConcept | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** If this is a reply to prior message (0..1) Created when absent. */
  getResponse(): MessageHeaderResponse {
    if (this.response === undefined) {
      this.response = new MessageHeaderResponse();
    }
    return this.response;
  }

  setResponse(response: MessageHeaderResponse | undefined): this {
    return this.setFieldValue('response', response);
  }

  hasResponse(): boolean {
    return this.hasFieldValue('response');
  }

  /** The actual content of the message (0..*) Never undefined; an empty list is created when absent. */
  getFocus(): Reference[] {
    if (this.focus === undefined) {
      this.focus = [];
    }
    return this.focus;
  }

  setFocus(focus: Reference[] | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Appends a new, empty Reference to `focus` and returns it so it can be filled in. */
  addFocus(): Reference;
  /** Appends the given Reference to `focus` and returns this object for chaining. */
  addFocus(reference: Reference): this;
  addFocus(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('focus', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('focus', createdReference);
    return createdReference;
  }

  /** The first Reference of `focus`. One is added when the list is empty. */
  getFocusFirstRep(): Reference {
    const firstReference = this.getFocus()[0];
    return firstReference === undefined ? this.addFocus() : firstReference;
  }

  /** Link to the definition for this message (0..1) */
  getDefinition(): string | undefined {
    return this.definition;
  }

  /** Sets `definition`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setDefinition(definition: string | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** The element carrying the id and extensions of `definition`. Created when absent. */
  getDefinitionElement(): Element {
    if (this._definition === undefined) {
      this._definition = new Element();
    }
    return this._definition;
  }

  setDefinitionElement(definitionElement: Element | undefined): this {
    this._definition = definitionElement;
    return this;
  }
}

modelTypeRegistry.register('MessageHeader', MessageHeader, true);

/** True when the value is a MessageHeader model instance. */
export function isMessageHeader(candidate: unknown): candidate is MessageHeader {
  return candidate instanceof MessageHeader;
}

/**
 * Message destination application(s)
 */
export class MessageHeaderDestination extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'endpointUrl', typeCode: 'url' },
        { jsonKey: 'endpointReference', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] },
      ],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'target', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'receiver',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'receiver',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
  ];

  /** Actual destination address or Endpoint resource (0..1) */
  endpointUrl?: string;
  /** Id and extensions of the primitive `endpointUrl`. */
  _endpointUrl?: Element;
  /** Actual destination address or Endpoint resource (0..1) */
  endpointReference?: Reference;

  /** Name of system (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Particular delivery destination within the destination (0..1) */
  target?: Reference;

  /** Intended "real-world" recipient for the data (0..1) */
  receiver?: Reference;

  override fhirType(): string {
    return 'MessageHeader.destination';
  }

  /** FHIR JSON for this MessageHeaderDestination, typed as the plain `MessageHeaderDestination` data type. */
  override toJSON(): plainTypes.MessageHeaderDestination {
    return this.serialize() as plainTypes.MessageHeaderDestination;
  }

  /** Actual destination address or Endpoint resource (0..1) Whichever type of `endpoint[x]` is set. */
  getEndpoint(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('endpoint');
  }

  /** True when any type of `endpoint[x]` is set. */
  hasEndpoint(): boolean {
    return this.hasChoiceValue('endpoint');
  }

  getEndpointUrl(): string | undefined {
    return this.endpointUrl;
  }

  /** Sets `endpoint[x]` as url and clears every other type of it. */
  setEndpointUrl(endpointUrl: string | undefined): this {
    return this.setFieldValue('endpointUrl', endpointUrl);
  }

  hasEndpointUrl(): boolean {
    return this.hasFieldValue('endpointUrl');
  }

  getEndpointReference(): Reference | undefined {
    return this.endpointReference;
  }

  /** Sets `endpoint[x]` as Reference and clears every other type of it. */
  setEndpointReference(endpointReference: Reference | undefined): this {
    return this.setFieldValue('endpointReference', endpointReference);
  }

  hasEndpointReference(): boolean {
    return this.hasFieldValue('endpointReference');
  }

  /** Name of system (0..1) */
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

  /** Particular delivery destination within the destination (0..1) Created when absent. */
  getTarget(): Reference {
    if (this.target === undefined) {
      this.target = new Reference();
    }
    return this.target;
  }

  setTarget(target: Reference | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Intended "real-world" recipient for the data (0..1) Created when absent. */
  getReceiver(): Reference {
    if (this.receiver === undefined) {
      this.receiver = new Reference();
    }
    return this.receiver;
  }

  setReceiver(receiver: Reference | undefined): this {
    return this.setFieldValue('receiver', receiver);
  }

  hasReceiver(): boolean {
    return this.hasFieldValue('receiver');
  }
}

modelTypeRegistry.register('MessageHeaderDestination', MessageHeaderDestination, false);

/**
 * Message source application
 */
export class MessageHeaderSource extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'endpointUrl', typeCode: 'url' },
        { jsonKey: 'endpointReference', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] },
      ],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'software',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'software', typeCode: 'string' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contact', typeCode: 'ContactPoint' }],
    },
  ];

  /** Actual source address or Endpoint resource (0..1) */
  endpointUrl?: string;
  /** Id and extensions of the primitive `endpointUrl`. */
  _endpointUrl?: Element;
  /** Actual source address or Endpoint resource (0..1) */
  endpointReference?: Reference;

  /** Name of system (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name of software running the system (0..1) */
  software?: string;
  /** Id and extensions of the primitive `software`. */
  _software?: Element;

  /** Version of software running (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Human contact for problems (0..1) */
  contact?: ContactPoint;

  override fhirType(): string {
    return 'MessageHeader.source';
  }

  /** FHIR JSON for this MessageHeaderSource, typed as the plain `MessageHeaderSource` data type. */
  override toJSON(): plainTypes.MessageHeaderSource {
    return this.serialize() as plainTypes.MessageHeaderSource;
  }

  /** Actual source address or Endpoint resource (0..1) Whichever type of `endpoint[x]` is set. */
  getEndpoint(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('endpoint');
  }

  /** True when any type of `endpoint[x]` is set. */
  hasEndpoint(): boolean {
    return this.hasChoiceValue('endpoint');
  }

  getEndpointUrl(): string | undefined {
    return this.endpointUrl;
  }

  /** Sets `endpoint[x]` as url and clears every other type of it. */
  setEndpointUrl(endpointUrl: string | undefined): this {
    return this.setFieldValue('endpointUrl', endpointUrl);
  }

  hasEndpointUrl(): boolean {
    return this.hasFieldValue('endpointUrl');
  }

  getEndpointReference(): Reference | undefined {
    return this.endpointReference;
  }

  /** Sets `endpoint[x]` as Reference and clears every other type of it. */
  setEndpointReference(endpointReference: Reference | undefined): this {
    return this.setFieldValue('endpointReference', endpointReference);
  }

  hasEndpointReference(): boolean {
    return this.hasFieldValue('endpointReference');
  }

  /** Name of system (0..1) */
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

  /** Name of software running the system (0..1) */
  getSoftware(): string | undefined {
    return this.software;
  }

  /** Sets `software`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSoftware(software: string | undefined): this {
    return this.setFieldValue('software', software);
  }

  hasSoftware(): boolean {
    return this.hasFieldValue('software');
  }

  /** The element carrying the id and extensions of `software`. Created when absent. */
  getSoftwareElement(): Element {
    if (this._software === undefined) {
      this._software = new Element();
    }
    return this._software;
  }

  setSoftwareElement(softwareElement: Element | undefined): this {
    this._software = softwareElement;
    return this;
  }

  /** Version of software running (0..1) */
  getVersion(): string | undefined {
    return this.version;
  }

  /** Sets `version`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersion(version: string | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** The element carrying the id and extensions of `version`. Created when absent. */
  getVersionElement(): Element {
    if (this._version === undefined) {
      this._version = new Element();
    }
    return this._version;
  }

  setVersionElement(versionElement: Element | undefined): this {
    this._version = versionElement;
    return this;
  }

  /** Human contact for problems (0..1) Created when absent. */
  getContact(): ContactPoint {
    if (this.contact === undefined) {
      this.contact = new ContactPoint();
    }
    return this.contact;
  }

  setContact(contact: ContactPoint | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }
}

modelTypeRegistry.register('MessageHeaderSource', MessageHeaderSource, false);

/**
 * If this is a reply to prior message
 */
export class MessageHeaderResponse extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.ResponseType }],
    },
    {
      elementName: 'details',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'details', typeCode: 'Reference', targetResourceTypes: ['OperationOutcome'] },
      ],
    },
  ];

  /** Bundle.identifier of original message (1..1) */
  identifier?: Identifier;

  /** ok | transient-error | fatal-error (1..1) */
  code?: valueSetCodes.ResponseType;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Specific list of hints/warnings/errors (0..1) */
  details?: Reference;

  override fhirType(): string {
    return 'MessageHeader.response';
  }

  /** FHIR JSON for this MessageHeaderResponse, typed as the plain `MessageHeaderResponse` data type. */
  override toJSON(): plainTypes.MessageHeaderResponse {
    return this.serialize() as plainTypes.MessageHeaderResponse;
  }

  /** Bundle.identifier of original message (1..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** ok | transient-error | fatal-error (1..1) */
  getCode(): valueSetCodes.ResponseType | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.ResponseType | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** The element carrying the id and extensions of `code`. Created when absent. */
  getCodeElement(): Element {
    if (this._code === undefined) {
      this._code = new Element();
    }
    return this._code;
  }

  setCodeElement(codeElement: Element | undefined): this {
    this._code = codeElement;
    return this;
  }

  /** Specific list of hints/warnings/errors (0..1) Created when absent. */
  getDetails(): Reference {
    if (this.details === undefined) {
      this.details = new Reference();
    }
    return this.details;
  }

  setDetails(details: Reference | undefined): this {
    return this.setFieldValue('details', details);
  }

  hasDetails(): boolean {
    return this.hasFieldValue('details');
  }
}

modelTypeRegistry.register('MessageHeaderResponse', MessageHeaderResponse, false);
