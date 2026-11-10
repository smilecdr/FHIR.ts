/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for CommunicationRequest Resource
 */
export class CommunicationRequest extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basedOn', typeCode: 'Reference' }],
    },
    {
      elementName: 'replaces',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'replaces',
          typeCode: 'Reference',
          targetResourceTypes: ['CommunicationRequest'],
        },
      ],
    },
    {
      elementName: 'groupIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'groupIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.RequestStatus }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'priority', typeCode: 'code', allowedCodes: valueSetCodes.RequestPriority },
      ],
    },
    {
      elementName: 'medium',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'medium', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
      ],
    },
    {
      elementName: 'recipient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'recipient',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Group',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'topic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'topic', typeCode: 'Reference' }],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'context',
          typeCode: 'Reference',
          targetResourceTypes: ['Encounter', 'EpisodeOfCare'],
        },
      ],
    },
    {
      elementName: 'payload',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'payload', typeCode: 'CommunicationRequestPayload' }],
    },
    {
      elementName: 'occurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrencePeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'authoredOn',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authoredOn', typeCode: 'dateTime' }],
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
          targetResourceTypes: [
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'requester',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requester', typeCode: 'CommunicationRequestRequester' }],
    },
    {
      elementName: 'reasonCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reasonReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reasonReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition', 'Observation'],
        },
      ],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'CommunicationRequest';

  /** Unique identifier (0..*) */
  identifier?: Identifier[];

  /** Fulfills plan or proposal (0..*) */
  basedOn?: Reference[];

  /** Request(s) replaced by this request (0..*) */
  replaces?: Reference[];

  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;

  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.RequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Message category (0..*) */
  category?: CodeableConcept[];

  /** Message urgency (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** A channel of communication (0..*) */
  medium?: CodeableConcept[];

  /** Focus of message (0..1) */
  subject?: Reference;

  /** Message recipient (0..*) */
  recipient?: Reference[];

  /** Focal resources (0..*) */
  topic?: Reference[];

  /** Encounter or episode leading to message (0..1) */
  context?: Reference;

  /** Message payload (0..*) */
  payload?: CommunicationRequestPayload[];

  /** When scheduled (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When scheduled (0..1) */
  occurrencePeriod?: Period;

  /** When request transitioned to being actionable (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;

  /** Message sender (0..1) */
  sender?: Reference;

  /** Who/what is requesting service (0..1) */
  requester?: CommunicationRequestRequester;

  /** Why is communication needed? (0..*) */
  reasonCode?: CodeableConcept[];

  /** Why is communication needed? (0..*) */
  reasonReference?: Reference[];

  /** Comments made about communication request (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'CommunicationRequest';
  }

  /** FHIR JSON for this CommunicationRequest, typed as the plain `CommunicationRequest` data type. */
  override toJSON(): plainTypes.CommunicationRequest {
    return this.serialize() as plainTypes.CommunicationRequest;
  }

  /** Unique identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Fulfills plan or proposal (0..*) Never undefined; an empty list is created when absent. */
  getBasedOn(): Reference[] {
    if (this.basedOn === undefined) {
      this.basedOn = [];
    }
    return this.basedOn;
  }

  setBasedOn(basedOn: Reference[] | undefined): this {
    return this.setFieldValue('basedOn', basedOn);
  }

  hasBasedOn(): boolean {
    return this.hasFieldValue('basedOn');
  }

  /** Appends a new, empty Reference to `basedOn` and returns it so it can be filled in. */
  addBasedOn(): Reference;
  /** Appends the given Reference to `basedOn` and returns this object for chaining. */
  addBasedOn(reference: Reference): this;
  addBasedOn(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('basedOn', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('basedOn', createdReference);
    return createdReference;
  }

  /** The first Reference of `basedOn`. One is added when the list is empty. */
  getBasedOnFirstRep(): Reference {
    const firstReference = this.getBasedOn()[0];
    return firstReference === undefined ? this.addBasedOn() : firstReference;
  }

  /** Request(s) replaced by this request (0..*) Never undefined; an empty list is created when absent. */
  getReplaces(): Reference[] {
    if (this.replaces === undefined) {
      this.replaces = [];
    }
    return this.replaces;
  }

  setReplaces(replaces: Reference[] | undefined): this {
    return this.setFieldValue('replaces', replaces);
  }

  hasReplaces(): boolean {
    return this.hasFieldValue('replaces');
  }

  /** Appends a new, empty Reference to `replaces` and returns it so it can be filled in. */
  addReplaces(): Reference;
  /** Appends the given Reference to `replaces` and returns this object for chaining. */
  addReplaces(reference: Reference): this;
  addReplaces(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('replaces', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('replaces', createdReference);
    return createdReference;
  }

  /** The first Reference of `replaces`. One is added when the list is empty. */
  getReplacesFirstRep(): Reference {
    const firstReference = this.getReplaces()[0];
    return firstReference === undefined ? this.addReplaces() : firstReference;
  }

  /** Composite request this is part of (0..1) Created when absent. */
  getGroupIdentifier(): Identifier {
    if (this.groupIdentifier === undefined) {
      this.groupIdentifier = new Identifier();
    }
    return this.groupIdentifier;
  }

  setGroupIdentifier(groupIdentifier: Identifier | undefined): this {
    return this.setFieldValue('groupIdentifier', groupIdentifier);
  }

  hasGroupIdentifier(): boolean {
    return this.hasFieldValue('groupIdentifier');
  }

  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.RequestStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.RequestStatus | undefined): this {
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

  /** Message category (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** Message urgency (0..1) */
  getPriority(): valueSetCodes.RequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.RequestPriority | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The element carrying the id and extensions of `priority`. Created when absent. */
  getPriorityElement(): Element {
    if (this._priority === undefined) {
      this._priority = new Element();
    }
    return this._priority;
  }

  setPriorityElement(priorityElement: Element | undefined): this {
    this._priority = priorityElement;
    return this;
  }

  /** A channel of communication (0..*) Never undefined; an empty list is created when absent. */
  getMedium(): CodeableConcept[] {
    if (this.medium === undefined) {
      this.medium = [];
    }
    return this.medium;
  }

  setMedium(medium: CodeableConcept[] | undefined): this {
    return this.setFieldValue('medium', medium);
  }

  hasMedium(): boolean {
    return this.hasFieldValue('medium');
  }

  /** Appends a new, empty CodeableConcept to `medium` and returns it so it can be filled in. */
  addMedium(): CodeableConcept;
  /** Appends the given CodeableConcept to `medium` and returns this object for chaining. */
  addMedium(codeableConcept: CodeableConcept): this;
  addMedium(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('medium', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('medium', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `medium`. One is added when the list is empty. */
  getMediumFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getMedium()[0];
    return firstCodeableConcept === undefined ? this.addMedium() : firstCodeableConcept;
  }

  /** Focus of message (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Message recipient (0..*) Never undefined; an empty list is created when absent. */
  getRecipient(): Reference[] {
    if (this.recipient === undefined) {
      this.recipient = [];
    }
    return this.recipient;
  }

  setRecipient(recipient: Reference[] | undefined): this {
    return this.setFieldValue('recipient', recipient);
  }

  hasRecipient(): boolean {
    return this.hasFieldValue('recipient');
  }

  /** Appends a new, empty Reference to `recipient` and returns it so it can be filled in. */
  addRecipient(): Reference;
  /** Appends the given Reference to `recipient` and returns this object for chaining. */
  addRecipient(reference: Reference): this;
  addRecipient(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('recipient', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('recipient', createdReference);
    return createdReference;
  }

  /** The first Reference of `recipient`. One is added when the list is empty. */
  getRecipientFirstRep(): Reference {
    const firstReference = this.getRecipient()[0];
    return firstReference === undefined ? this.addRecipient() : firstReference;
  }

  /** Focal resources (0..*) Never undefined; an empty list is created when absent. */
  getTopic(): Reference[] {
    if (this.topic === undefined) {
      this.topic = [];
    }
    return this.topic;
  }

  setTopic(topic: Reference[] | undefined): this {
    return this.setFieldValue('topic', topic);
  }

  hasTopic(): boolean {
    return this.hasFieldValue('topic');
  }

  /** Appends a new, empty Reference to `topic` and returns it so it can be filled in. */
  addTopic(): Reference;
  /** Appends the given Reference to `topic` and returns this object for chaining. */
  addTopic(reference: Reference): this;
  addTopic(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('topic', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('topic', createdReference);
    return createdReference;
  }

  /** The first Reference of `topic`. One is added when the list is empty. */
  getTopicFirstRep(): Reference {
    const firstReference = this.getTopic()[0];
    return firstReference === undefined ? this.addTopic() : firstReference;
  }

  /** Encounter or episode leading to message (0..1) Created when absent. */
  getContext(): Reference {
    if (this.context === undefined) {
      this.context = new Reference();
    }
    return this.context;
  }

  setContext(context: Reference | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** Message payload (0..*) Never undefined; an empty list is created when absent. */
  getPayload(): CommunicationRequestPayload[] {
    if (this.payload === undefined) {
      this.payload = [];
    }
    return this.payload;
  }

  setPayload(payload: CommunicationRequestPayload[] | undefined): this {
    return this.setFieldValue('payload', payload);
  }

  hasPayload(): boolean {
    return this.hasFieldValue('payload');
  }

  /** Appends a new, empty CommunicationRequestPayload to `payload` and returns it so it can be filled in. */
  addPayload(): CommunicationRequestPayload;
  /** Appends the given CommunicationRequestPayload to `payload` and returns this object for chaining. */
  addPayload(communicationRequestPayload: CommunicationRequestPayload): this;
  addPayload(
    communicationRequestPayload?: CommunicationRequestPayload
  ): CommunicationRequestPayload | this {
    if (communicationRequestPayload !== undefined) {
      return this.addFieldValue('payload', communicationRequestPayload);
    }
    const createdCommunicationRequestPayload = new CommunicationRequestPayload();
    this.addFieldValue('payload', createdCommunicationRequestPayload);
    return createdCommunicationRequestPayload;
  }

  /** The first CommunicationRequestPayload of `payload`. One is added when the list is empty. */
  getPayloadFirstRep(): CommunicationRequestPayload {
    const firstCommunicationRequestPayload = this.getPayload()[0];
    return firstCommunicationRequestPayload === undefined
      ? this.addPayload()
      : firstCommunicationRequestPayload;
  }

  /** When scheduled (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('occurrence');
  }

  /** True when any type of `occurrence[x]` is set. */
  hasOccurrence(): boolean {
    return this.hasChoiceValue('occurrence');
  }

  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrence[x]` as dateTime and clears every other type of it. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  getOccurrencePeriod(): Period | undefined {
    return this.occurrencePeriod;
  }

  /** Sets `occurrence[x]` as Period and clears every other type of it. */
  setOccurrencePeriod(occurrencePeriod: Period | undefined): this {
    return this.setFieldValue('occurrencePeriod', occurrencePeriod);
  }

  hasOccurrencePeriod(): boolean {
    return this.hasFieldValue('occurrencePeriod');
  }

  /** When request transitioned to being actionable (0..1) */
  getAuthoredOn(): string | undefined {
    return this.authoredOn;
  }

  /** Sets `authoredOn`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setAuthoredOn(authoredOn: string | undefined): this {
    return this.setFieldValue('authoredOn', authoredOn);
  }

  hasAuthoredOn(): boolean {
    return this.hasFieldValue('authoredOn');
  }

  /** The element carrying the id and extensions of `authoredOn`. Created when absent. */
  getAuthoredOnElement(): Element {
    if (this._authoredOn === undefined) {
      this._authoredOn = new Element();
    }
    return this._authoredOn;
  }

  setAuthoredOnElement(authoredOnElement: Element | undefined): this {
    this._authoredOn = authoredOnElement;
    return this;
  }

  /** Message sender (0..1) Created when absent. */
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

  /** Who/what is requesting service (0..1) Created when absent. */
  getRequester(): CommunicationRequestRequester {
    if (this.requester === undefined) {
      this.requester = new CommunicationRequestRequester();
    }
    return this.requester;
  }

  setRequester(requester: CommunicationRequestRequester | undefined): this {
    return this.setFieldValue('requester', requester);
  }

  hasRequester(): boolean {
    return this.hasFieldValue('requester');
  }

  /** Why is communication needed? (0..*) Never undefined; an empty list is created when absent. */
  getReasonCode(): CodeableConcept[] {
    if (this.reasonCode === undefined) {
      this.reasonCode = [];
    }
    return this.reasonCode;
  }

  setReasonCode(reasonCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonCode', reasonCode);
  }

  hasReasonCode(): boolean {
    return this.hasFieldValue('reasonCode');
  }

  /** Appends a new, empty CodeableConcept to `reasonCode` and returns it so it can be filled in. */
  addReasonCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonCode` and returns this object for chaining. */
  addReasonCode(codeableConcept: CodeableConcept): this;
  addReasonCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonCode`. One is added when the list is empty. */
  getReasonCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonCode()[0];
    return firstCodeableConcept === undefined ? this.addReasonCode() : firstCodeableConcept;
  }

  /** Why is communication needed? (0..*) Never undefined; an empty list is created when absent. */
  getReasonReference(): Reference[] {
    if (this.reasonReference === undefined) {
      this.reasonReference = [];
    }
    return this.reasonReference;
  }

  setReasonReference(reasonReference: Reference[] | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** Appends a new, empty Reference to `reasonReference` and returns it so it can be filled in. */
  addReasonReference(): Reference;
  /** Appends the given Reference to `reasonReference` and returns this object for chaining. */
  addReasonReference(reference: Reference): this;
  addReasonReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reasonReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reasonReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reasonReference`. One is added when the list is empty. */
  getReasonReferenceFirstRep(): Reference {
    const firstReference = this.getReasonReference()[0];
    return firstReference === undefined ? this.addReasonReference() : firstReference;
  }

  /** Comments made about communication request (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }
}

modelTypeRegistry.register('CommunicationRequest', CommunicationRequest, true);

/** True when the value is a CommunicationRequest model instance. */
export function isCommunicationRequest(candidate: unknown): candidate is CommunicationRequest {
  return candidate instanceof CommunicationRequest;
}

/**
 * Message payload
 */
export class CommunicationRequestPayload extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'contentString', typeCode: 'string' },
        { jsonKey: 'contentAttachment', typeCode: 'Attachment' },
        { jsonKey: 'contentReference', typeCode: 'Reference' },
      ],
    },
  ];

  /** Message part content (1..1) */
  contentString?: string;
  /** Id and extensions of the primitive `contentString`. */
  _contentString?: Element;
  /** Message part content (1..1) */
  contentAttachment?: Attachment;
  /** Message part content (1..1) */
  contentReference?: Reference;

  override fhirType(): string {
    return 'CommunicationRequest.payload';
  }

  /** FHIR JSON for this CommunicationRequestPayload, typed as the plain `CommunicationRequestPayload` data type. */
  override toJSON(): plainTypes.CommunicationRequestPayload {
    return this.serialize() as plainTypes.CommunicationRequestPayload;
  }

  /** Message part content (1..1) Whichever type of `content[x]` is set. */
  getContent(): string | Attachment | Reference | undefined {
    return this.getChoiceValue<string | Attachment | Reference>('content');
  }

  /** True when any type of `content[x]` is set. */
  hasContent(): boolean {
    return this.hasChoiceValue('content');
  }

  getContentString(): string | undefined {
    return this.contentString;
  }

  /** Sets `content[x]` as string and clears every other type of it. */
  setContentString(contentString: string | undefined): this {
    return this.setFieldValue('contentString', contentString);
  }

  hasContentString(): boolean {
    return this.hasFieldValue('contentString');
  }

  getContentAttachment(): Attachment | undefined {
    return this.contentAttachment;
  }

  /** Sets `content[x]` as Attachment and clears every other type of it. */
  setContentAttachment(contentAttachment: Attachment | undefined): this {
    return this.setFieldValue('contentAttachment', contentAttachment);
  }

  hasContentAttachment(): boolean {
    return this.hasFieldValue('contentAttachment');
  }

  getContentReference(): Reference | undefined {
    return this.contentReference;
  }

  /** Sets `content[x]` as Reference and clears every other type of it. */
  setContentReference(contentReference: Reference | undefined): this {
    return this.setFieldValue('contentReference', contentReference);
  }

  hasContentReference(): boolean {
    return this.hasFieldValue('contentReference');
  }
}

modelTypeRegistry.register('CommunicationRequestPayload', CommunicationRequestPayload, false);

/**
 * Who/what is requesting service
 */
export class CommunicationRequestRequester extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'agent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'agent',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'onBehalfOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'onBehalfOf', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
  ];

  /** Individual making the request (1..1) */
  agent?: Reference;

  /** Organization agent is acting for (0..1) */
  onBehalfOf?: Reference;

  override fhirType(): string {
    return 'CommunicationRequest.requester';
  }

  /** FHIR JSON for this CommunicationRequestRequester, typed as the plain `CommunicationRequestRequester` data type. */
  override toJSON(): plainTypes.CommunicationRequestRequester {
    return this.serialize() as plainTypes.CommunicationRequestRequester;
  }

  /** Individual making the request (1..1) Created when absent. */
  getAgent(): Reference {
    if (this.agent === undefined) {
      this.agent = new Reference();
    }
    return this.agent;
  }

  setAgent(agent: Reference | undefined): this {
    return this.setFieldValue('agent', agent);
  }

  hasAgent(): boolean {
    return this.hasFieldValue('agent');
  }

  /** Organization agent is acting for (0..1) Created when absent. */
  getOnBehalfOf(): Reference {
    if (this.onBehalfOf === undefined) {
      this.onBehalfOf = new Reference();
    }
    return this.onBehalfOf;
  }

  setOnBehalfOf(onBehalfOf: Reference | undefined): this {
    return this.setFieldValue('onBehalfOf', onBehalfOf);
  }

  hasOnBehalfOf(): boolean {
    return this.hasFieldValue('onBehalfOf');
  }
}

modelTypeRegistry.register('CommunicationRequestRequester', CommunicationRequestRequester, false);
