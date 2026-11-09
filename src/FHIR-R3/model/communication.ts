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
import { Reference } from './reference';

/**
 * Base StructureDefinition for Communication Resource
 */
export class Communication extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'definition',
          typeCode: 'Reference',
          targetResourceTypes: ['ActivityDefinition', 'PlanDefinition'],
        },
      ],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basedOn', typeCode: 'Reference' }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EventStatus }],
    },
    {
      elementName: 'notDone',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'notDone', typeCode: 'boolean' }],
    },
    {
      elementName: 'notDoneReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'notDoneReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
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
      elementName: 'sent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sent', typeCode: 'dateTime' }],
    },
    {
      elementName: 'received',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'received', typeCode: 'dateTime' }],
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
      elementName: 'payload',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'payload', typeCode: 'CommunicationPayload' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'Communication';

  /** Unique identifier (0..*) */
  identifier?: Identifier[];

  /** Instantiates protocol or definition (0..*) */
  definition?: Reference[];

  /** Request fulfilled by this communication (0..*) */
  basedOn?: Reference[];

  /** Part of this action (0..*) */
  partOf?: Reference[];

  /** preparation | in-progress | suspended | aborted | completed | entered-in-error (1..1) */
  status?: valueSetCodes.EventStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Communication did not occur (0..1) */
  notDone?: boolean;
  /** Id and extensions of the primitive `notDone`. */
  _notDone?: Element;

  /** Why communication did not occur (0..1) */
  notDoneReason?: CodeableConcept;

  /** Message category (0..*) */
  category?: CodeableConcept[];

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

  /** When sent (0..1) */
  sent?: string;
  /** Id and extensions of the primitive `sent`. */
  _sent?: Element;

  /** When received (0..1) */
  received?: string;
  /** Id and extensions of the primitive `received`. */
  _received?: Element;

  /** Message sender (0..1) */
  sender?: Reference;

  /** Indication for message (0..*) */
  reasonCode?: CodeableConcept[];

  /** Why was communication done? (0..*) */
  reasonReference?: Reference[];

  /** Message payload (0..*) */
  payload?: CommunicationPayload[];

  /** Comments made about the communication (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'Communication';
  }

  /** FHIR JSON for this Communication, typed as the plain `Communication` data type. */
  override toJSON(): plainTypes.Communication {
    return this.serialize() as plainTypes.Communication;
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

  /** Instantiates protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getDefinition(): Reference[] {
    if (this.definition === undefined) {
      this.definition = [];
    }
    return this.definition;
  }

  setDefinition(definition: Reference[] | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** Appends a new, empty Reference to `definition` and returns it so it can be filled in. */
  addDefinition(): Reference;
  /** Appends the given Reference to `definition` and returns this object for chaining. */
  addDefinition(reference: Reference): this;
  addDefinition(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('definition', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('definition', createdReference);
    return createdReference;
  }

  /** The first Reference of `definition`. One is added when the list is empty. */
  getDefinitionFirstRep(): Reference {
    const firstReference = this.getDefinition()[0];
    return firstReference === undefined ? this.addDefinition() : firstReference;
  }

  /** Request fulfilled by this communication (0..*) Never undefined; an empty list is created when absent. */
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

  /** Part of this action (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): Reference[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends a new, empty Reference to `partOf` and returns it so it can be filled in. */
  addPartOf(): Reference;
  /** Appends the given Reference to `partOf` and returns this object for chaining. */
  addPartOf(reference: Reference): this;
  addPartOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('partOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('partOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `partOf`. One is added when the list is empty. */
  getPartOfFirstRep(): Reference {
    const firstReference = this.getPartOf()[0];
    return firstReference === undefined ? this.addPartOf() : firstReference;
  }

  /** preparation | in-progress | suspended | aborted | completed | entered-in-error (1..1) */
  getStatus(): valueSetCodes.EventStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EventStatus | undefined): this {
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

  /** Communication did not occur (0..1) */
  getNotDone(): boolean | undefined {
    return this.notDone;
  }

  /** Sets `notDone`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setNotDone(notDone: boolean | undefined): this {
    return this.setFieldValue('notDone', notDone);
  }

  hasNotDone(): boolean {
    return this.hasFieldValue('notDone');
  }

  /** The element carrying the id and extensions of `notDone`. Created when absent. */
  getNotDoneElement(): Element {
    if (this._notDone === undefined) {
      this._notDone = new Element();
    }
    return this._notDone;
  }

  setNotDoneElement(notDoneElement: Element | undefined): this {
    this._notDone = notDoneElement;
    return this;
  }

  /** Why communication did not occur (0..1) Created when absent. */
  getNotDoneReason(): CodeableConcept {
    if (this.notDoneReason === undefined) {
      this.notDoneReason = new CodeableConcept();
    }
    return this.notDoneReason;
  }

  setNotDoneReason(notDoneReason: CodeableConcept | undefined): this {
    return this.setFieldValue('notDoneReason', notDoneReason);
  }

  hasNotDoneReason(): boolean {
    return this.hasFieldValue('notDoneReason');
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

  /** When sent (0..1) */
  getSent(): string | undefined {
    return this.sent;
  }

  /** Sets `sent`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setSent(sent: string | undefined): this {
    return this.setFieldValue('sent', sent);
  }

  hasSent(): boolean {
    return this.hasFieldValue('sent');
  }

  /** The element carrying the id and extensions of `sent`. Created when absent. */
  getSentElement(): Element {
    if (this._sent === undefined) {
      this._sent = new Element();
    }
    return this._sent;
  }

  setSentElement(sentElement: Element | undefined): this {
    this._sent = sentElement;
    return this;
  }

  /** When received (0..1) */
  getReceived(): string | undefined {
    return this.received;
  }

  /** Sets `received`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setReceived(received: string | undefined): this {
    return this.setFieldValue('received', received);
  }

  hasReceived(): boolean {
    return this.hasFieldValue('received');
  }

  /** The element carrying the id and extensions of `received`. Created when absent. */
  getReceivedElement(): Element {
    if (this._received === undefined) {
      this._received = new Element();
    }
    return this._received;
  }

  setReceivedElement(receivedElement: Element | undefined): this {
    this._received = receivedElement;
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

  /** Indication for message (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why was communication done? (0..*) Never undefined; an empty list is created when absent. */
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

  /** Message payload (0..*) Never undefined; an empty list is created when absent. */
  getPayload(): CommunicationPayload[] {
    if (this.payload === undefined) {
      this.payload = [];
    }
    return this.payload;
  }

  setPayload(payload: CommunicationPayload[] | undefined): this {
    return this.setFieldValue('payload', payload);
  }

  hasPayload(): boolean {
    return this.hasFieldValue('payload');
  }

  /** Appends a new, empty CommunicationPayload to `payload` and returns it so it can be filled in. */
  addPayload(): CommunicationPayload;
  /** Appends the given CommunicationPayload to `payload` and returns this object for chaining. */
  addPayload(communicationPayload: CommunicationPayload): this;
  addPayload(communicationPayload?: CommunicationPayload): CommunicationPayload | this {
    if (communicationPayload !== undefined) {
      return this.addFieldValue('payload', communicationPayload);
    }
    const createdCommunicationPayload = new CommunicationPayload();
    this.addFieldValue('payload', createdCommunicationPayload);
    return createdCommunicationPayload;
  }

  /** The first CommunicationPayload of `payload`. One is added when the list is empty. */
  getPayloadFirstRep(): CommunicationPayload {
    const firstCommunicationPayload = this.getPayload()[0];
    return firstCommunicationPayload === undefined ? this.addPayload() : firstCommunicationPayload;
  }

  /** Comments made about the communication (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('Communication', Communication, true);

/** True when the value is a Communication model instance. */
export function isCommunication(candidate: unknown): candidate is Communication {
  return candidate instanceof Communication;
}

/**
 * Message payload
 */
export class CommunicationPayload extends BackboneElement {
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
    return 'Communication.payload';
  }

  /** FHIR JSON for this CommunicationPayload, typed as the plain `CommunicationPayload` data type. */
  override toJSON(): plainTypes.CommunicationPayload {
    return this.serialize() as plainTypes.CommunicationPayload;
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

modelTypeRegistry.register('CommunicationPayload', CommunicationPayload, false);
