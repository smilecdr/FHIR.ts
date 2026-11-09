/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
export class DocumentManifest extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'masterIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'masterIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
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
          allowedCodes: valueSetCodes.DocumentReferenceStatus,
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Group', 'Patient', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'created',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
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
      elementName: 'recipient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'recipient',
          typeCode: 'Reference',
          targetResourceTypes: [
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
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'uri' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'content',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'content', typeCode: 'Reference' }],
    },
    {
      elementName: 'related',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'related', typeCode: 'DocumentManifestRelated' }],
    },
  ];

  readonly resourceType = 'DocumentManifest';

  /** Unique Identifier for the set of documents (0..1) */
  masterIdentifier?: Identifier;

  /** Other identifiers for the manifest (0..*) */
  identifier?: Identifier[];

  /** current | superseded | entered-in-error (1..1) */
  status?: valueSetCodes.DocumentReferenceStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Kind of document set (0..1) */
  type?: CodeableConcept;

  /** The subject of the set of documents (0..1) */
  subject?: Reference;

  /** When this document manifest created (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Who and/or what authored the DocumentManifest (0..*) */
  author?: Reference[];

  /** Intended to get notified about this set of documents (0..*) */
  recipient?: Reference[];

  /** The source system/application/software (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;

  /** Human-readable description (title) (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Items in manifest (1..*) */
  content?: Reference[];

  /** Related things (0..*) */
  related?: DocumentManifestRelated[];

  override fhirType(): string {
    return 'DocumentManifest';
  }

  /** FHIR JSON for this DocumentManifest, typed as the plain `DocumentManifest` data type. */
  override toJSON(): plainTypes.DocumentManifest {
    return this.serialize() as plainTypes.DocumentManifest;
  }

  /** Unique Identifier for the set of documents (0..1) Created when absent. */
  getMasterIdentifier(): Identifier {
    if (this.masterIdentifier === undefined) {
      this.masterIdentifier = new Identifier();
    }
    return this.masterIdentifier;
  }

  setMasterIdentifier(masterIdentifier: Identifier | undefined): this {
    return this.setFieldValue('masterIdentifier', masterIdentifier);
  }

  hasMasterIdentifier(): boolean {
    return this.hasFieldValue('masterIdentifier');
  }

  /** Other identifiers for the manifest (0..*) Never undefined; an empty list is created when absent. */
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

  /** current | superseded | entered-in-error (1..1) */
  getStatus(): valueSetCodes.DocumentReferenceStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.DocumentReferenceStatus | undefined): this {
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

  /** Kind of document set (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The subject of the set of documents (0..1) Created when absent. */
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

  /** When this document manifest created (0..1) */
  getCreated(): string | undefined {
    return this.created;
  }

  /** Sets `created`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCreated(created: string | undefined): this {
    return this.setFieldValue('created', created);
  }

  hasCreated(): boolean {
    return this.hasFieldValue('created');
  }

  /** The element carrying the id and extensions of `created`. Created when absent. */
  getCreatedElement(): Element {
    if (this._created === undefined) {
      this._created = new Element();
    }
    return this._created;
  }

  setCreatedElement(createdElement: Element | undefined): this {
    this._created = createdElement;
    return this;
  }

  /** Who and/or what authored the DocumentManifest (0..*) Never undefined; an empty list is created when absent. */
  getAuthor(): Reference[] {
    if (this.author === undefined) {
      this.author = [];
    }
    return this.author;
  }

  setAuthor(author: Reference[] | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Appends a new, empty Reference to `author` and returns it so it can be filled in. */
  addAuthor(): Reference;
  /** Appends the given Reference to `author` and returns this object for chaining. */
  addAuthor(reference: Reference): this;
  addAuthor(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('author', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('author', createdReference);
    return createdReference;
  }

  /** The first Reference of `author`. One is added when the list is empty. */
  getAuthorFirstRep(): Reference {
    const firstReference = this.getAuthor()[0];
    return firstReference === undefined ? this.addAuthor() : firstReference;
  }

  /** Intended to get notified about this set of documents (0..*) Never undefined; an empty list is created when absent. */
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

  /** The source system/application/software (0..1) */
  getSource(): string | undefined {
    return this.source;
  }

  /** Sets `source`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setSource(source: string | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** The element carrying the id and extensions of `source`. Created when absent. */
  getSourceElement(): Element {
    if (this._source === undefined) {
      this._source = new Element();
    }
    return this._source;
  }

  setSourceElement(sourceElement: Element | undefined): this {
    this._source = sourceElement;
    return this;
  }

  /** Human-readable description (title) (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Items in manifest (1..*) Never undefined; an empty list is created when absent. */
  getContent(): Reference[] {
    if (this.content === undefined) {
      this.content = [];
    }
    return this.content;
  }

  setContent(content: Reference[] | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** Appends a new, empty Reference to `content` and returns it so it can be filled in. */
  addContent(): Reference;
  /** Appends the given Reference to `content` and returns this object for chaining. */
  addContent(reference: Reference): this;
  addContent(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('content', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('content', createdReference);
    return createdReference;
  }

  /** The first Reference of `content`. One is added when the list is empty. */
  getContentFirstRep(): Reference {
    const firstReference = this.getContent()[0];
    return firstReference === undefined ? this.addContent() : firstReference;
  }

  /** Related things (0..*) Never undefined; an empty list is created when absent. */
  getRelated(): DocumentManifestRelated[] {
    if (this.related === undefined) {
      this.related = [];
    }
    return this.related;
  }

  setRelated(related: DocumentManifestRelated[] | undefined): this {
    return this.setFieldValue('related', related);
  }

  hasRelated(): boolean {
    return this.hasFieldValue('related');
  }

  /** Appends a new, empty DocumentManifestRelated to `related` and returns it so it can be filled in. */
  addRelated(): DocumentManifestRelated;
  /** Appends the given DocumentManifestRelated to `related` and returns this object for chaining. */
  addRelated(documentManifestRelated: DocumentManifestRelated): this;
  addRelated(documentManifestRelated?: DocumentManifestRelated): DocumentManifestRelated | this {
    if (documentManifestRelated !== undefined) {
      return this.addFieldValue('related', documentManifestRelated);
    }
    const createdDocumentManifestRelated = new DocumentManifestRelated();
    this.addFieldValue('related', createdDocumentManifestRelated);
    return createdDocumentManifestRelated;
  }

  /** The first DocumentManifestRelated of `related`. One is added when the list is empty. */
  getRelatedFirstRep(): DocumentManifestRelated {
    const firstDocumentManifestRelated = this.getRelated()[0];
    return firstDocumentManifestRelated === undefined
      ? this.addRelated()
      : firstDocumentManifestRelated;
  }
}

modelTypeRegistry.register('DocumentManifest', DocumentManifest, true);

/** True when the value is a DocumentManifest model instance. */
export function isDocumentManifest(candidate: unknown): candidate is DocumentManifest {
  return candidate instanceof DocumentManifest;
}

/**
 * Related things
 */
export class DocumentManifestRelated extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'ref',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ref', typeCode: 'Reference' }],
    },
  ];

  /** Identifiers of things that are related (0..1) */
  identifier?: Identifier;

  /** Related Resource (0..1) */
  ref?: Reference;

  override fhirType(): string {
    return 'DocumentManifest.related';
  }

  /** FHIR JSON for this DocumentManifestRelated, typed as the plain `DocumentManifestRelated` data type. */
  override toJSON(): plainTypes.DocumentManifestRelated {
    return this.serialize() as plainTypes.DocumentManifestRelated;
  }

  /** Identifiers of things that are related (0..1) Created when absent. */
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

  /** Related Resource (0..1) Created when absent. */
  getRef(): Reference {
    if (this.ref === undefined) {
      this.ref = new Reference();
    }
    return this.ref;
  }

  setRef(ref: Reference | undefined): this {
    return this.setFieldValue('ref', ref);
  }

  hasRef(): boolean {
    return this.hasFieldValue('ref');
  }
}

modelTypeRegistry.register('DocumentManifestRelated', DocumentManifestRelated, false);
