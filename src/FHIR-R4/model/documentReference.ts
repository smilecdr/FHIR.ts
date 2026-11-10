/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
export class DocumentReference extends DomainResource {
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
      elementName: 'docStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'docStatus', typeCode: 'code', allowedCodes: valueSetCodes.CompositionStatus },
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
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
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
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'instant' }],
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
      elementName: 'authenticator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'authenticator',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'custodian',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'custodian', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'relatesTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatesTo', typeCode: 'DocumentReferenceRelatesTo' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'securityLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabel', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'content',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'content', typeCode: 'DocumentReferenceContent' }],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'context', typeCode: 'DocumentReferenceContext' }],
    },
  ];

  readonly resourceType = 'DocumentReference';

  /** Master Version Specific Identifier (0..1) */
  masterIdentifier?: Identifier;

  /** Other identifiers for the document (0..*) */
  identifier?: Identifier[];

  /** current | superseded | entered-in-error (1..1) */
  status?: valueSetCodes.DocumentReferenceStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** preliminary | final | amended | entered-in-error (0..1) */
  docStatus?: valueSetCodes.CompositionStatus;
  /** Id and extensions of the primitive `docStatus`. */
  _docStatus?: Element;

  /** Kind of document (LOINC if possible) (0..1) */
  type?: CodeableConcept;

  /** Categorization of document (0..*) */
  category?: CodeableConcept[];

  /** Who/what is the subject of the document (0..1) */
  subject?: Reference;

  /** When this document reference was created (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who and/or what authored the document (0..*) */
  author?: Reference[];

  /** Who/what authenticated the document (0..1) */
  authenticator?: Reference;

  /** Organization which maintains the document (0..1) */
  custodian?: Reference;

  /** Relationships to other documents (0..*) */
  relatesTo?: DocumentReferenceRelatesTo[];

  /** Human-readable description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Document security-tags (0..*) */
  securityLabel?: CodeableConcept[];

  /** Document referenced (1..*) */
  content?: DocumentReferenceContent[];

  /** Clinical context of document (0..1) */
  context?: DocumentReferenceContext;

  override fhirType(): string {
    return 'DocumentReference';
  }

  /** FHIR JSON for this DocumentReference, typed as the plain `DocumentReference` data type. */
  override toJSON(): plainTypes.DocumentReference {
    return this.serialize() as plainTypes.DocumentReference;
  }

  /** Master Version Specific Identifier (0..1) Created when absent. */
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

  /** Other identifiers for the document (0..*) Never undefined; an empty list is created when absent. */
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

  /** preliminary | final | amended | entered-in-error (0..1) */
  getDocStatus(): valueSetCodes.CompositionStatus | undefined {
    return this.docStatus;
  }

  /** Sets `docStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDocStatus(docStatus: valueSetCodes.CompositionStatus | undefined): this {
    return this.setFieldValue('docStatus', docStatus);
  }

  hasDocStatus(): boolean {
    return this.hasFieldValue('docStatus');
  }

  /** The element carrying the id and extensions of `docStatus`. Created when absent. */
  getDocStatusElement(): Element {
    if (this._docStatus === undefined) {
      this._docStatus = new Element();
    }
    return this._docStatus;
  }

  setDocStatusElement(docStatusElement: Element | undefined): this {
    this._docStatus = docStatusElement;
    return this;
  }

  /** Kind of document (LOINC if possible) (0..1) Created when absent. */
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

  /** Categorization of document (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who/what is the subject of the document (0..1) Created when absent. */
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

  /** When this document reference was created (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Who and/or what authored the document (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who/what authenticated the document (0..1) Created when absent. */
  getAuthenticator(): Reference {
    if (this.authenticator === undefined) {
      this.authenticator = new Reference();
    }
    return this.authenticator;
  }

  setAuthenticator(authenticator: Reference | undefined): this {
    return this.setFieldValue('authenticator', authenticator);
  }

  hasAuthenticator(): boolean {
    return this.hasFieldValue('authenticator');
  }

  /** Organization which maintains the document (0..1) Created when absent. */
  getCustodian(): Reference {
    if (this.custodian === undefined) {
      this.custodian = new Reference();
    }
    return this.custodian;
  }

  setCustodian(custodian: Reference | undefined): this {
    return this.setFieldValue('custodian', custodian);
  }

  hasCustodian(): boolean {
    return this.hasFieldValue('custodian');
  }

  /** Relationships to other documents (0..*) Never undefined; an empty list is created when absent. */
  getRelatesTo(): DocumentReferenceRelatesTo[] {
    if (this.relatesTo === undefined) {
      this.relatesTo = [];
    }
    return this.relatesTo;
  }

  setRelatesTo(relatesTo: DocumentReferenceRelatesTo[] | undefined): this {
    return this.setFieldValue('relatesTo', relatesTo);
  }

  hasRelatesTo(): boolean {
    return this.hasFieldValue('relatesTo');
  }

  /** Appends a new, empty DocumentReferenceRelatesTo to `relatesTo` and returns it so it can be filled in. */
  addRelatesTo(): DocumentReferenceRelatesTo;
  /** Appends the given DocumentReferenceRelatesTo to `relatesTo` and returns this object for chaining. */
  addRelatesTo(documentReferenceRelatesTo: DocumentReferenceRelatesTo): this;
  addRelatesTo(
    documentReferenceRelatesTo?: DocumentReferenceRelatesTo
  ): DocumentReferenceRelatesTo | this {
    if (documentReferenceRelatesTo !== undefined) {
      return this.addFieldValue('relatesTo', documentReferenceRelatesTo);
    }
    const createdDocumentReferenceRelatesTo = new DocumentReferenceRelatesTo();
    this.addFieldValue('relatesTo', createdDocumentReferenceRelatesTo);
    return createdDocumentReferenceRelatesTo;
  }

  /** The first DocumentReferenceRelatesTo of `relatesTo`. One is added when the list is empty. */
  getRelatesToFirstRep(): DocumentReferenceRelatesTo {
    const firstDocumentReferenceRelatesTo = this.getRelatesTo()[0];
    return firstDocumentReferenceRelatesTo === undefined
      ? this.addRelatesTo()
      : firstDocumentReferenceRelatesTo;
  }

  /** Human-readable description (0..1) */
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

  /** Document security-tags (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabel(): CodeableConcept[] {
    if (this.securityLabel === undefined) {
      this.securityLabel = [];
    }
    return this.securityLabel;
  }

  setSecurityLabel(securityLabel: CodeableConcept[] | undefined): this {
    return this.setFieldValue('securityLabel', securityLabel);
  }

  hasSecurityLabel(): boolean {
    return this.hasFieldValue('securityLabel');
  }

  /** Appends a new, empty CodeableConcept to `securityLabel` and returns it so it can be filled in. */
  addSecurityLabel(): CodeableConcept;
  /** Appends the given CodeableConcept to `securityLabel` and returns this object for chaining. */
  addSecurityLabel(codeableConcept: CodeableConcept): this;
  addSecurityLabel(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('securityLabel', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('securityLabel', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `securityLabel`. One is added when the list is empty. */
  getSecurityLabelFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSecurityLabel()[0];
    return firstCodeableConcept === undefined ? this.addSecurityLabel() : firstCodeableConcept;
  }

  /** Document referenced (1..*) Never undefined; an empty list is created when absent. */
  getContent(): DocumentReferenceContent[] {
    if (this.content === undefined) {
      this.content = [];
    }
    return this.content;
  }

  setContent(content: DocumentReferenceContent[] | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** Appends a new, empty DocumentReferenceContent to `content` and returns it so it can be filled in. */
  addContent(): DocumentReferenceContent;
  /** Appends the given DocumentReferenceContent to `content` and returns this object for chaining. */
  addContent(documentReferenceContent: DocumentReferenceContent): this;
  addContent(documentReferenceContent?: DocumentReferenceContent): DocumentReferenceContent | this {
    if (documentReferenceContent !== undefined) {
      return this.addFieldValue('content', documentReferenceContent);
    }
    const createdDocumentReferenceContent = new DocumentReferenceContent();
    this.addFieldValue('content', createdDocumentReferenceContent);
    return createdDocumentReferenceContent;
  }

  /** The first DocumentReferenceContent of `content`. One is added when the list is empty. */
  getContentFirstRep(): DocumentReferenceContent {
    const firstDocumentReferenceContent = this.getContent()[0];
    return firstDocumentReferenceContent === undefined
      ? this.addContent()
      : firstDocumentReferenceContent;
  }

  /** Clinical context of document (0..1) Created when absent. */
  getContext(): DocumentReferenceContext {
    if (this.context === undefined) {
      this.context = new DocumentReferenceContext();
    }
    return this.context;
  }

  setContext(context: DocumentReferenceContext | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }
}

modelTypeRegistry.register('DocumentReference', DocumentReference, true);

/** True when the value is a DocumentReference model instance. */
export function isDocumentReference(candidate: unknown): candidate is DocumentReference {
  return candidate instanceof DocumentReference;
}

/**
 * Relationships to other documents
 */
export class DocumentReferenceRelatesTo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.DocumentRelationshipType },
      ],
    },
    {
      elementName: 'target',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'target', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

  /** replaces | transforms | signs | appends (1..1) */
  code?: valueSetCodes.DocumentRelationshipType;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Target of the relationship (1..1) */
  target?: Reference;

  override fhirType(): string {
    return 'DocumentReference.relatesTo';
  }

  /** FHIR JSON for this DocumentReferenceRelatesTo, typed as the plain `DocumentReferenceRelatesTo` data type. */
  override toJSON(): plainTypes.DocumentReferenceRelatesTo {
    return this.serialize() as plainTypes.DocumentReferenceRelatesTo;
  }

  /** replaces | transforms | signs | appends (1..1) */
  getCode(): valueSetCodes.DocumentRelationshipType | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.DocumentRelationshipType | undefined): this {
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

  /** Target of the relationship (1..1) Created when absent. */
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
}

modelTypeRegistry.register('DocumentReferenceRelatesTo', DocumentReferenceRelatesTo, false);

/**
 * Document referenced
 */
export class DocumentReferenceContent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'attachment',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'attachment', typeCode: 'Attachment' }],
    },
    {
      elementName: 'format',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'format', typeCode: 'Coding' }],
    },
  ];

  /** Where to access the document (1..1) */
  attachment?: Attachment;

  /** Format/content rules for the document (0..1) */
  format?: Coding;

  override fhirType(): string {
    return 'DocumentReference.content';
  }

  /** FHIR JSON for this DocumentReferenceContent, typed as the plain `DocumentReferenceContent` data type. */
  override toJSON(): plainTypes.DocumentReferenceContent {
    return this.serialize() as plainTypes.DocumentReferenceContent;
  }

  /** Where to access the document (1..1) Created when absent. */
  getAttachment(): Attachment {
    if (this.attachment === undefined) {
      this.attachment = new Attachment();
    }
    return this.attachment;
  }

  setAttachment(attachment: Attachment | undefined): this {
    return this.setFieldValue('attachment', attachment);
  }

  hasAttachment(): boolean {
    return this.hasFieldValue('attachment');
  }

  /** Format/content rules for the document (0..1) Created when absent. */
  getFormat(): Coding {
    if (this.format === undefined) {
      this.format = new Coding();
    }
    return this.format;
  }

  setFormat(format: Coding | undefined): this {
    return this.setFieldValue('format', format);
  }

  hasFormat(): boolean {
    return this.hasFieldValue('format');
  }
}

modelTypeRegistry.register('DocumentReferenceContent', DocumentReferenceContent, false);

/**
 * Clinical context of document
 */
export class DocumentReferenceContext extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'encounter',
          typeCode: 'Reference',
          targetResourceTypes: ['Encounter', 'EpisodeOfCare'],
        },
      ],
    },
    {
      elementName: 'event',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'event', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'facilityType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'facilityType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'practiceSetting',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'practiceSetting', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'sourcePatientInfo',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sourcePatientInfo', typeCode: 'Reference', targetResourceTypes: ['Patient'] },
      ],
    },
    {
      elementName: 'related',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'related', typeCode: 'Reference' }],
    },
  ];

  /** Context of the document content (0..*) */
  encounter?: Reference[];

  /** Main clinical acts documented (0..*) */
  event?: CodeableConcept[];

  /** Time of service that is being documented (0..1) */
  period?: Period;

  /** Kind of facility where patient was seen (0..1) */
  facilityType?: CodeableConcept;

  /** Additional details about where the content was created (e.g. clinical specialty) (0..1) */
  practiceSetting?: CodeableConcept;

  /** Patient demographics from source (0..1) */
  sourcePatientInfo?: Reference;

  /** Related identifiers or resources (0..*) */
  related?: Reference[];

  override fhirType(): string {
    return 'DocumentReference.context';
  }

  /** FHIR JSON for this DocumentReferenceContext, typed as the plain `DocumentReferenceContext` data type. */
  override toJSON(): plainTypes.DocumentReferenceContext {
    return this.serialize() as plainTypes.DocumentReferenceContext;
  }

  /** Context of the document content (0..*) Never undefined; an empty list is created when absent. */
  getEncounter(): Reference[] {
    if (this.encounter === undefined) {
      this.encounter = [];
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference[] | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
  }

  /** Appends a new, empty Reference to `encounter` and returns it so it can be filled in. */
  addEncounter(): Reference;
  /** Appends the given Reference to `encounter` and returns this object for chaining. */
  addEncounter(reference: Reference): this;
  addEncounter(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('encounter', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('encounter', createdReference);
    return createdReference;
  }

  /** The first Reference of `encounter`. One is added when the list is empty. */
  getEncounterFirstRep(): Reference {
    const firstReference = this.getEncounter()[0];
    return firstReference === undefined ? this.addEncounter() : firstReference;
  }

  /** Main clinical acts documented (0..*) Never undefined; an empty list is created when absent. */
  getEvent(): CodeableConcept[] {
    if (this.event === undefined) {
      this.event = [];
    }
    return this.event;
  }

  setEvent(event: CodeableConcept[] | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
  }

  /** Appends a new, empty CodeableConcept to `event` and returns it so it can be filled in. */
  addEvent(): CodeableConcept;
  /** Appends the given CodeableConcept to `event` and returns this object for chaining. */
  addEvent(codeableConcept: CodeableConcept): this;
  addEvent(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('event', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('event', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `event`. One is added when the list is empty. */
  getEventFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getEvent()[0];
    return firstCodeableConcept === undefined ? this.addEvent() : firstCodeableConcept;
  }

  /** Time of service that is being documented (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** Kind of facility where patient was seen (0..1) Created when absent. */
  getFacilityType(): CodeableConcept {
    if (this.facilityType === undefined) {
      this.facilityType = new CodeableConcept();
    }
    return this.facilityType;
  }

  setFacilityType(facilityType: CodeableConcept | undefined): this {
    return this.setFieldValue('facilityType', facilityType);
  }

  hasFacilityType(): boolean {
    return this.hasFieldValue('facilityType');
  }

  /** Additional details about where the content was created (e.g. clinical specialty) (0..1) Created when absent. */
  getPracticeSetting(): CodeableConcept {
    if (this.practiceSetting === undefined) {
      this.practiceSetting = new CodeableConcept();
    }
    return this.practiceSetting;
  }

  setPracticeSetting(practiceSetting: CodeableConcept | undefined): this {
    return this.setFieldValue('practiceSetting', practiceSetting);
  }

  hasPracticeSetting(): boolean {
    return this.hasFieldValue('practiceSetting');
  }

  /** Patient demographics from source (0..1) Created when absent. */
  getSourcePatientInfo(): Reference {
    if (this.sourcePatientInfo === undefined) {
      this.sourcePatientInfo = new Reference();
    }
    return this.sourcePatientInfo;
  }

  setSourcePatientInfo(sourcePatientInfo: Reference | undefined): this {
    return this.setFieldValue('sourcePatientInfo', sourcePatientInfo);
  }

  hasSourcePatientInfo(): boolean {
    return this.hasFieldValue('sourcePatientInfo');
  }

  /** Related identifiers or resources (0..*) Never undefined; an empty list is created when absent. */
  getRelated(): Reference[] {
    if (this.related === undefined) {
      this.related = [];
    }
    return this.related;
  }

  setRelated(related: Reference[] | undefined): this {
    return this.setFieldValue('related', related);
  }

  hasRelated(): boolean {
    return this.hasFieldValue('related');
  }

  /** Appends a new, empty Reference to `related` and returns it so it can be filled in. */
  addRelated(): Reference;
  /** Appends the given Reference to `related` and returns this object for chaining. */
  addRelated(reference: Reference): this;
  addRelated(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('related', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('related', createdReference);
    return createdReference;
  }

  /** The first Reference of `related`. One is added when the list is empty. */
  getRelatedFirstRep(): Reference {
    const firstReference = this.getRelated()[0];
    return firstReference === undefined ? this.addRelated() : firstReference;
  }
}

modelTypeRegistry.register('DocumentReferenceContext', DocumentReferenceContext, false);
