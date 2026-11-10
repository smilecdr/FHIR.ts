/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
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
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
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
      elementName: 'inResponseTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'inResponseTo', typeCode: 'Reference', targetResourceTypes: ['Communication'] },
      ],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EventStatus }],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
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
      elementName: 'topic',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'topic', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'about',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'about', typeCode: 'Reference' }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
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
          targetResourceTypes: [
            'Condition',
            'DiagnosticReport',
            'DocumentReference',
            'Observation',
          ],
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

  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: string[];
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: (Element | null)[];

  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: string[];
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: (Element | null)[];

  /** Request fulfilled by this communication (0..*) */
  basedOn?: Reference[];

  /** Part of this action (0..*) */
  partOf?: Reference[];

  /** Reply to (0..*) */
  inResponseTo?: Reference[];

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.EventStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;

  /** Message category (0..*) */
  category?: CodeableConcept[];

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** A channel of communication (0..*) */
  medium?: CodeableConcept[];

  /** Focus of message (0..1) */
  subject?: Reference;

  /** Description of the purpose/content (0..1) */
  topic?: CodeableConcept;

  /** Resources that pertain to this communication (0..*) */
  about?: Reference[];

  /** Encounter created as part of (0..1) */
  encounter?: Reference;

  /** When sent (0..1) */
  sent?: string;
  /** Id and extensions of the primitive `sent`. */
  _sent?: Element;

  /** When received (0..1) */
  received?: string;
  /** Id and extensions of the primitive `received`. */
  _received?: Element;

  /** Message recipient (0..*) */
  recipient?: Reference[];

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

  /** Instantiates FHIR protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesCanonical(): string[] {
    if (this.instantiatesCanonical === undefined) {
      this.instantiatesCanonical = [];
    }
    return this.instantiatesCanonical;
  }

  setInstantiatesCanonical(instantiatesCanonical: string[] | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** Appends one value to `instantiatesCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  /** Instantiates external protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesUri(): string[] {
    if (this.instantiatesUri === undefined) {
      this.instantiatesUri = [];
    }
    return this.instantiatesUri;
  }

  setInstantiatesUri(instantiatesUri: string[] | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** Appends one value to `instantiatesUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addFieldValue('instantiatesUri', instantiatesUri);
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

  /** Reply to (0..*) Never undefined; an empty list is created when absent. */
  getInResponseTo(): Reference[] {
    if (this.inResponseTo === undefined) {
      this.inResponseTo = [];
    }
    return this.inResponseTo;
  }

  setInResponseTo(inResponseTo: Reference[] | undefined): this {
    return this.setFieldValue('inResponseTo', inResponseTo);
  }

  hasInResponseTo(): boolean {
    return this.hasFieldValue('inResponseTo');
  }

  /** Appends a new, empty Reference to `inResponseTo` and returns it so it can be filled in. */
  addInResponseTo(): Reference;
  /** Appends the given Reference to `inResponseTo` and returns this object for chaining. */
  addInResponseTo(reference: Reference): this;
  addInResponseTo(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('inResponseTo', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('inResponseTo', createdReference);
    return createdReference;
  }

  /** The first Reference of `inResponseTo`. One is added when the list is empty. */
  getInResponseToFirstRep(): Reference {
    const firstReference = this.getInResponseTo()[0];
    return firstReference === undefined ? this.addInResponseTo() : firstReference;
  }

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
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

  /** Reason for current status (0..1) Created when absent. */
  getStatusReason(): CodeableConcept {
    if (this.statusReason === undefined) {
      this.statusReason = new CodeableConcept();
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableConcept | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
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

  /** routine | urgent | asap | stat (0..1) */
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

  /** Description of the purpose/content (0..1) Created when absent. */
  getTopic(): CodeableConcept {
    if (this.topic === undefined) {
      this.topic = new CodeableConcept();
    }
    return this.topic;
  }

  setTopic(topic: CodeableConcept | undefined): this {
    return this.setFieldValue('topic', topic);
  }

  hasTopic(): boolean {
    return this.hasFieldValue('topic');
  }

  /** Resources that pertain to this communication (0..*) Never undefined; an empty list is created when absent. */
  getAbout(): Reference[] {
    if (this.about === undefined) {
      this.about = [];
    }
    return this.about;
  }

  setAbout(about: Reference[] | undefined): this {
    return this.setFieldValue('about', about);
  }

  hasAbout(): boolean {
    return this.hasFieldValue('about');
  }

  /** Appends a new, empty Reference to `about` and returns it so it can be filled in. */
  addAbout(): Reference;
  /** Appends the given Reference to `about` and returns this object for chaining. */
  addAbout(reference: Reference): this;
  addAbout(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('about', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('about', createdReference);
    return createdReference;
  }

  /** The first Reference of `about`. One is added when the list is empty. */
  getAboutFirstRep(): Reference {
    const firstReference = this.getAbout()[0];
    return firstReference === undefined ? this.addAbout() : firstReference;
  }

  /** Encounter created as part of (0..1) Created when absent. */
  getEncounter(): Reference {
    if (this.encounter === undefined) {
      this.encounter = new Reference();
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
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
