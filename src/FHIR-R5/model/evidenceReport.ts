/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Narrative } from './narrative';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 */
export class EvidenceReport extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PublicationStatus },
      ],
    },
    {
      elementName: 'useContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'useContext', typeCode: 'UsageContext' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'relatedIdentifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'citeAs',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'citeAsReference', typeCode: 'Reference', targetResourceTypes: ['Citation'] },
        { jsonKey: 'citeAsMarkdown', typeCode: 'markdown' },
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
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subject', typeCode: 'EvidenceReportSubject' }],
    },
    {
      elementName: 'publisher',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'publisher', typeCode: 'string' }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'author', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'editor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'editor', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'reviewer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reviewer', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'endorser',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endorser', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'relatesTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatesTo', typeCode: 'EvidenceReportRelatesTo' }],
    },
    {
      elementName: 'section',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'section', typeCode: 'EvidenceReportSection' }],
    },
  ];

  readonly resourceType = 'EvidenceReport';

  /** Canonical identifier for this EvidenceReport, represented as a globally unique URI (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Unique identifier for the evidence report (0..*) */
  identifier?: Identifier[];

  /** Identifiers for articles that may relate to more than one evidence report (0..*) */
  relatedIdentifier?: Identifier[];

  /** Citation for this report (0..1) */
  citeAsReference?: Reference;
  /** Citation for this report (0..1) */
  citeAsMarkdown?: string;
  /** Id and extensions of the primitive `citeAsMarkdown`. */
  _citeAsMarkdown?: Element;

  /** Kind of report (0..1) */
  type?: CodeableConcept;

  /** Used for footnotes and annotations (0..*) */
  note?: Annotation[];

  /** Link, description or reference to artifact associated with the report (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Focus of the report (1..1) */
  subject?: EvidenceReportSubject;

  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Who authored the content (0..*) */
  author?: ContactDetail[];

  /** Who edited the content (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the content (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the content (0..*) */
  endorser?: ContactDetail[];

  /** Relationships to other compositions/documents (0..*) */
  relatesTo?: EvidenceReportRelatesTo[];

  /** Composition is broken into sections (0..*) */
  section?: EvidenceReportSection[];

  override fhirType(): string {
    return 'EvidenceReport';
  }

  /** FHIR JSON for this EvidenceReport, typed as the plain `EvidenceReport` data type. */
  override toJSON(): plainTypes.EvidenceReport {
    return this.serialize() as plainTypes.EvidenceReport;
  }

  /** Canonical identifier for this EvidenceReport, represented as a globally unique URI (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }

  /** draft | active | retired | unknown (1..1) */
  getStatus(): valueSetCodes.PublicationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.PublicationStatus | undefined): this {
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

  /** The context that the content is intended to support (0..*) Never undefined; an empty list is created when absent. */
  getUseContext(): UsageContext[] {
    if (this.useContext === undefined) {
      this.useContext = [];
    }
    return this.useContext;
  }

  setUseContext(useContext: UsageContext[] | undefined): this {
    return this.setFieldValue('useContext', useContext);
  }

  hasUseContext(): boolean {
    return this.hasFieldValue('useContext');
  }

  /** Appends a new, empty UsageContext to `useContext` and returns it so it can be filled in. */
  addUseContext(): UsageContext;
  /** Appends the given UsageContext to `useContext` and returns this object for chaining. */
  addUseContext(usageContext: UsageContext): this;
  addUseContext(usageContext?: UsageContext): UsageContext | this {
    if (usageContext !== undefined) {
      return this.addFieldValue('useContext', usageContext);
    }
    const createdUsageContext = new UsageContext();
    this.addFieldValue('useContext', createdUsageContext);
    return createdUsageContext;
  }

  /** The first UsageContext of `useContext`. One is added when the list is empty. */
  getUseContextFirstRep(): UsageContext {
    const firstUsageContext = this.getUseContext()[0];
    return firstUsageContext === undefined ? this.addUseContext() : firstUsageContext;
  }

  /** Unique identifier for the evidence report (0..*) Never undefined; an empty list is created when absent. */
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

  /** Identifiers for articles that may relate to more than one evidence report (0..*) Never undefined; an empty list is created when absent. */
  getRelatedIdentifier(): Identifier[] {
    if (this.relatedIdentifier === undefined) {
      this.relatedIdentifier = [];
    }
    return this.relatedIdentifier;
  }

  setRelatedIdentifier(relatedIdentifier: Identifier[] | undefined): this {
    return this.setFieldValue('relatedIdentifier', relatedIdentifier);
  }

  hasRelatedIdentifier(): boolean {
    return this.hasFieldValue('relatedIdentifier');
  }

  /** Appends a new, empty Identifier to `relatedIdentifier` and returns it so it can be filled in. */
  addRelatedIdentifier(): Identifier;
  /** Appends the given Identifier to `relatedIdentifier` and returns this object for chaining. */
  addRelatedIdentifier(identifier: Identifier): this;
  addRelatedIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('relatedIdentifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('relatedIdentifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `relatedIdentifier`. One is added when the list is empty. */
  getRelatedIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getRelatedIdentifier()[0];
    return firstIdentifier === undefined ? this.addRelatedIdentifier() : firstIdentifier;
  }

  /** Citation for this report (0..1) Whichever type of `citeAs[x]` is set. */
  getCiteAs(): Reference | string | undefined {
    return this.getChoiceValue<Reference | string>('citeAs');
  }

  /** True when any type of `citeAs[x]` is set. */
  hasCiteAs(): boolean {
    return this.hasChoiceValue('citeAs');
  }

  getCiteAsReference(): Reference | undefined {
    return this.citeAsReference;
  }

  /** Sets `citeAs[x]` as Reference and clears every other type of it. */
  setCiteAsReference(citeAsReference: Reference | undefined): this {
    return this.setFieldValue('citeAsReference', citeAsReference);
  }

  hasCiteAsReference(): boolean {
    return this.hasFieldValue('citeAsReference');
  }

  getCiteAsMarkdown(): string | undefined {
    return this.citeAsMarkdown;
  }

  /** Sets `citeAs[x]` as markdown and clears every other type of it. */
  setCiteAsMarkdown(citeAsMarkdown: string | undefined): this {
    return this.setFieldValue('citeAsMarkdown', citeAsMarkdown);
  }

  hasCiteAsMarkdown(): boolean {
    return this.hasFieldValue('citeAsMarkdown');
  }

  /** Kind of report (0..1) Created when absent. */
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

  /** Used for footnotes and annotations (0..*) Never undefined; an empty list is created when absent. */
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

  /** Link, description or reference to artifact associated with the report (0..*) Never undefined; an empty list is created when absent. */
  getRelatedArtifact(): RelatedArtifact[] {
    if (this.relatedArtifact === undefined) {
      this.relatedArtifact = [];
    }
    return this.relatedArtifact;
  }

  setRelatedArtifact(relatedArtifact: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('relatedArtifact', relatedArtifact);
  }

  hasRelatedArtifact(): boolean {
    return this.hasFieldValue('relatedArtifact');
  }

  /** Appends a new, empty RelatedArtifact to `relatedArtifact` and returns it so it can be filled in. */
  addRelatedArtifact(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `relatedArtifact` and returns this object for chaining. */
  addRelatedArtifact(relatedArtifact: RelatedArtifact): this;
  addRelatedArtifact(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('relatedArtifact', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('relatedArtifact', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `relatedArtifact`. One is added when the list is empty. */
  getRelatedArtifactFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getRelatedArtifact()[0];
    return firstRelatedArtifact === undefined ? this.addRelatedArtifact() : firstRelatedArtifact;
  }

  /** Focus of the report (1..1) Created when absent. */
  getSubject(): EvidenceReportSubject {
    if (this.subject === undefined) {
      this.subject = new EvidenceReportSubject();
    }
    return this.subject;
  }

  setSubject(subject: EvidenceReportSubject | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Name of the publisher/steward (organization or individual) (0..1) */
  getPublisher(): string | undefined {
    return this.publisher;
  }

  /** Sets `publisher`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPublisher(publisher: string | undefined): this {
    return this.setFieldValue('publisher', publisher);
  }

  hasPublisher(): boolean {
    return this.hasFieldValue('publisher');
  }

  /** The element carrying the id and extensions of `publisher`. Created when absent. */
  getPublisherElement(): Element {
    if (this._publisher === undefined) {
      this._publisher = new Element();
    }
    return this._publisher;
  }

  setPublisherElement(publisherElement: Element | undefined): this {
    this._publisher = publisherElement;
    return this;
  }

  /** Contact details for the publisher (0..*) Never undefined; an empty list is created when absent. */
  getContact(): ContactDetail[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: ContactDetail[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty ContactDetail to `contact` and returns it so it can be filled in. */
  addContact(): ContactDetail;
  /** Appends the given ContactDetail to `contact` and returns this object for chaining. */
  addContact(contactDetail: ContactDetail): this;
  addContact(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('contact', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('contact', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `contact`. One is added when the list is empty. */
  getContactFirstRep(): ContactDetail {
    const firstContactDetail = this.getContact()[0];
    return firstContactDetail === undefined ? this.addContact() : firstContactDetail;
  }

  /** Who authored the content (0..*) Never undefined; an empty list is created when absent. */
  getAuthor(): ContactDetail[] {
    if (this.author === undefined) {
      this.author = [];
    }
    return this.author;
  }

  setAuthor(author: ContactDetail[] | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Appends a new, empty ContactDetail to `author` and returns it so it can be filled in. */
  addAuthor(): ContactDetail;
  /** Appends the given ContactDetail to `author` and returns this object for chaining. */
  addAuthor(contactDetail: ContactDetail): this;
  addAuthor(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('author', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('author', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `author`. One is added when the list is empty. */
  getAuthorFirstRep(): ContactDetail {
    const firstContactDetail = this.getAuthor()[0];
    return firstContactDetail === undefined ? this.addAuthor() : firstContactDetail;
  }

  /** Who edited the content (0..*) Never undefined; an empty list is created when absent. */
  getEditor(): ContactDetail[] {
    if (this.editor === undefined) {
      this.editor = [];
    }
    return this.editor;
  }

  setEditor(editor: ContactDetail[] | undefined): this {
    return this.setFieldValue('editor', editor);
  }

  hasEditor(): boolean {
    return this.hasFieldValue('editor');
  }

  /** Appends a new, empty ContactDetail to `editor` and returns it so it can be filled in. */
  addEditor(): ContactDetail;
  /** Appends the given ContactDetail to `editor` and returns this object for chaining. */
  addEditor(contactDetail: ContactDetail): this;
  addEditor(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('editor', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('editor', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `editor`. One is added when the list is empty. */
  getEditorFirstRep(): ContactDetail {
    const firstContactDetail = this.getEditor()[0];
    return firstContactDetail === undefined ? this.addEditor() : firstContactDetail;
  }

  /** Who reviewed the content (0..*) Never undefined; an empty list is created when absent. */
  getReviewer(): ContactDetail[] {
    if (this.reviewer === undefined) {
      this.reviewer = [];
    }
    return this.reviewer;
  }

  setReviewer(reviewer: ContactDetail[] | undefined): this {
    return this.setFieldValue('reviewer', reviewer);
  }

  hasReviewer(): boolean {
    return this.hasFieldValue('reviewer');
  }

  /** Appends a new, empty ContactDetail to `reviewer` and returns it so it can be filled in. */
  addReviewer(): ContactDetail;
  /** Appends the given ContactDetail to `reviewer` and returns this object for chaining. */
  addReviewer(contactDetail: ContactDetail): this;
  addReviewer(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('reviewer', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('reviewer', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `reviewer`. One is added when the list is empty. */
  getReviewerFirstRep(): ContactDetail {
    const firstContactDetail = this.getReviewer()[0];
    return firstContactDetail === undefined ? this.addReviewer() : firstContactDetail;
  }

  /** Who endorsed the content (0..*) Never undefined; an empty list is created when absent. */
  getEndorser(): ContactDetail[] {
    if (this.endorser === undefined) {
      this.endorser = [];
    }
    return this.endorser;
  }

  setEndorser(endorser: ContactDetail[] | undefined): this {
    return this.setFieldValue('endorser', endorser);
  }

  hasEndorser(): boolean {
    return this.hasFieldValue('endorser');
  }

  /** Appends a new, empty ContactDetail to `endorser` and returns it so it can be filled in. */
  addEndorser(): ContactDetail;
  /** Appends the given ContactDetail to `endorser` and returns this object for chaining. */
  addEndorser(contactDetail: ContactDetail): this;
  addEndorser(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('endorser', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('endorser', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `endorser`. One is added when the list is empty. */
  getEndorserFirstRep(): ContactDetail {
    const firstContactDetail = this.getEndorser()[0];
    return firstContactDetail === undefined ? this.addEndorser() : firstContactDetail;
  }

  /** Relationships to other compositions/documents (0..*) Never undefined; an empty list is created when absent. */
  getRelatesTo(): EvidenceReportRelatesTo[] {
    if (this.relatesTo === undefined) {
      this.relatesTo = [];
    }
    return this.relatesTo;
  }

  setRelatesTo(relatesTo: EvidenceReportRelatesTo[] | undefined): this {
    return this.setFieldValue('relatesTo', relatesTo);
  }

  hasRelatesTo(): boolean {
    return this.hasFieldValue('relatesTo');
  }

  /** Appends a new, empty EvidenceReportRelatesTo to `relatesTo` and returns it so it can be filled in. */
  addRelatesTo(): EvidenceReportRelatesTo;
  /** Appends the given EvidenceReportRelatesTo to `relatesTo` and returns this object for chaining. */
  addRelatesTo(evidenceReportRelatesTo: EvidenceReportRelatesTo): this;
  addRelatesTo(evidenceReportRelatesTo?: EvidenceReportRelatesTo): EvidenceReportRelatesTo | this {
    if (evidenceReportRelatesTo !== undefined) {
      return this.addFieldValue('relatesTo', evidenceReportRelatesTo);
    }
    const createdEvidenceReportRelatesTo = new EvidenceReportRelatesTo();
    this.addFieldValue('relatesTo', createdEvidenceReportRelatesTo);
    return createdEvidenceReportRelatesTo;
  }

  /** The first EvidenceReportRelatesTo of `relatesTo`. One is added when the list is empty. */
  getRelatesToFirstRep(): EvidenceReportRelatesTo {
    const firstEvidenceReportRelatesTo = this.getRelatesTo()[0];
    return firstEvidenceReportRelatesTo === undefined
      ? this.addRelatesTo()
      : firstEvidenceReportRelatesTo;
  }

  /** Composition is broken into sections (0..*) Never undefined; an empty list is created when absent. */
  getSection(): EvidenceReportSection[] {
    if (this.section === undefined) {
      this.section = [];
    }
    return this.section;
  }

  setSection(section: EvidenceReportSection[] | undefined): this {
    return this.setFieldValue('section', section);
  }

  hasSection(): boolean {
    return this.hasFieldValue('section');
  }

  /** Appends a new, empty EvidenceReportSection to `section` and returns it so it can be filled in. */
  addSection(): EvidenceReportSection;
  /** Appends the given EvidenceReportSection to `section` and returns this object for chaining. */
  addSection(evidenceReportSection: EvidenceReportSection): this;
  addSection(evidenceReportSection?: EvidenceReportSection): EvidenceReportSection | this {
    if (evidenceReportSection !== undefined) {
      return this.addFieldValue('section', evidenceReportSection);
    }
    const createdEvidenceReportSection = new EvidenceReportSection();
    this.addFieldValue('section', createdEvidenceReportSection);
    return createdEvidenceReportSection;
  }

  /** The first EvidenceReportSection of `section`. One is added when the list is empty. */
  getSectionFirstRep(): EvidenceReportSection {
    const firstEvidenceReportSection = this.getSection()[0];
    return firstEvidenceReportSection === undefined
      ? this.addSection()
      : firstEvidenceReportSection;
  }
}

modelTypeRegistry.register('EvidenceReport', EvidenceReport, true);

/** True when the value is a EvidenceReport model instance. */
export function isEvidenceReport(candidate: unknown): candidate is EvidenceReport {
  return candidate instanceof EvidenceReport;
}

/**
 * Focus of the report
 */
export class EvidenceReportSubject extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'characteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'EvidenceReportSubjectCharacteristic' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  /** Characteristic (0..*) */
  characteristic?: EvidenceReportSubjectCharacteristic[];

  /** Footnotes and/or explanatory notes (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'EvidenceReport.subject';
  }

  /** FHIR JSON for this EvidenceReportSubject, typed as the plain `EvidenceReportSubject` data type. */
  override toJSON(): plainTypes.EvidenceReportSubject {
    return this.serialize() as plainTypes.EvidenceReportSubject;
  }

  /** Characteristic (0..*) Never undefined; an empty list is created when absent. */
  getCharacteristic(): EvidenceReportSubjectCharacteristic[] {
    if (this.characteristic === undefined) {
      this.characteristic = [];
    }
    return this.characteristic;
  }

  setCharacteristic(characteristic: EvidenceReportSubjectCharacteristic[] | undefined): this {
    return this.setFieldValue('characteristic', characteristic);
  }

  hasCharacteristic(): boolean {
    return this.hasFieldValue('characteristic');
  }

  /** Appends a new, empty EvidenceReportSubjectCharacteristic to `characteristic` and returns it so it can be filled in. */
  addCharacteristic(): EvidenceReportSubjectCharacteristic;
  /** Appends the given EvidenceReportSubjectCharacteristic to `characteristic` and returns this object for chaining. */
  addCharacteristic(evidenceReportSubjectCharacteristic: EvidenceReportSubjectCharacteristic): this;
  addCharacteristic(
    evidenceReportSubjectCharacteristic?: EvidenceReportSubjectCharacteristic
  ): EvidenceReportSubjectCharacteristic | this {
    if (evidenceReportSubjectCharacteristic !== undefined) {
      return this.addFieldValue('characteristic', evidenceReportSubjectCharacteristic);
    }
    const createdEvidenceReportSubjectCharacteristic = new EvidenceReportSubjectCharacteristic();
    this.addFieldValue('characteristic', createdEvidenceReportSubjectCharacteristic);
    return createdEvidenceReportSubjectCharacteristic;
  }

  /** The first EvidenceReportSubjectCharacteristic of `characteristic`. One is added when the list is empty. */
  getCharacteristicFirstRep(): EvidenceReportSubjectCharacteristic {
    const firstEvidenceReportSubjectCharacteristic = this.getCharacteristic()[0];
    return firstEvidenceReportSubjectCharacteristic === undefined
      ? this.addCharacteristic()
      : firstEvidenceReportSubjectCharacteristic;
  }

  /** Footnotes and/or explanatory notes (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('EvidenceReportSubject', EvidenceReportSubject, false);

/**
 * Characteristic
 */
export class EvidenceReportSubjectCharacteristic extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueReference', typeCode: 'Reference' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
      ],
    },
    {
      elementName: 'exclude',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'exclude', typeCode: 'boolean' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Characteristic code (1..1) */
  code?: CodeableConcept;

  /** Characteristic value (1..1) */
  valueReference?: Reference;
  /** Characteristic value (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Characteristic value (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Characteristic value (1..1) */
  valueQuantity?: Quantity;
  /** Characteristic value (1..1) */
  valueRange?: Range;

  /** Is used to express not the characteristic (0..1) */
  exclude?: boolean;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Element;

  /** Timeframe for the characteristic (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'EvidenceReport.subject.characteristic';
  }

  /** FHIR JSON for this EvidenceReportSubjectCharacteristic, typed as the plain `EvidenceReportCharacteristic` data type. */
  override toJSON(): plainTypes.EvidenceReportCharacteristic {
    return this.serialize() as plainTypes.EvidenceReportCharacteristic;
  }

  /** Characteristic code (1..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Characteristic value (1..1) Whichever type of `value[x]` is set. */
  getValue(): Reference | CodeableConcept | boolean | Quantity | Range | undefined {
    return this.getChoiceValue<Reference | CodeableConcept | boolean | Quantity | Range>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  /** Is used to express not the characteristic (0..1) */
  getExclude(): boolean | undefined {
    return this.exclude;
  }

  /** Sets `exclude`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExclude(exclude: boolean | undefined): this {
    return this.setFieldValue('exclude', exclude);
  }

  hasExclude(): boolean {
    return this.hasFieldValue('exclude');
  }

  /** The element carrying the id and extensions of `exclude`. Created when absent. */
  getExcludeElement(): Element {
    if (this._exclude === undefined) {
      this._exclude = new Element();
    }
    return this._exclude;
  }

  setExcludeElement(excludeElement: Element | undefined): this {
    this._exclude = excludeElement;
    return this;
  }

  /** Timeframe for the characteristic (0..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'EvidenceReportSubjectCharacteristic',
  EvidenceReportSubjectCharacteristic,
  false
);

/**
 * Relationships to other compositions/documents
 */
export class EvidenceReportRelatesTo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.ReportRelationshipType },
      ],
    },
    {
      elementName: 'target',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'target', typeCode: 'EvidenceReportRelatesToTarget' }],
    },
  ];

  /** replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith (1..1) */
  code?: valueSetCodes.ReportRelationshipType;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Target of the relationship (1..1) */
  target?: EvidenceReportRelatesToTarget;

  override fhirType(): string {
    return 'EvidenceReport.relatesTo';
  }

  /** FHIR JSON for this EvidenceReportRelatesTo, typed as the plain `EvidenceReportRelatesTo` data type. */
  override toJSON(): plainTypes.EvidenceReportRelatesTo {
    return this.serialize() as plainTypes.EvidenceReportRelatesTo;
  }

  /** replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith (1..1) */
  getCode(): valueSetCodes.ReportRelationshipType | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.ReportRelationshipType | undefined): this {
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
  getTarget(): EvidenceReportRelatesToTarget {
    if (this.target === undefined) {
      this.target = new EvidenceReportRelatesToTarget();
    }
    return this.target;
  }

  setTarget(target: EvidenceReportRelatesToTarget | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }
}

modelTypeRegistry.register('EvidenceReportRelatesTo', EvidenceReportRelatesTo, false);

/**
 * Target of the relationship
 */
export class EvidenceReportRelatesToTarget extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'markdown' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'Reference' }],
    },
  ];

  /** Target of the relationship URL (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Target of the relationship Identifier (0..1) */
  identifier?: Identifier;

  /** Target of the relationship Display (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Target of the relationship Resource reference (0..1) */
  resource?: Reference;

  override fhirType(): string {
    return 'EvidenceReport.relatesTo.target';
  }

  /** FHIR JSON for this EvidenceReportRelatesToTarget, typed as the plain `EvidenceReportTarget` data type. */
  override toJSON(): plainTypes.EvidenceReportTarget {
    return this.serialize() as plainTypes.EvidenceReportTarget;
  }

  /** Target of the relationship URL (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }

  /** Target of the relationship Identifier (0..1) Created when absent. */
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

  /** Target of the relationship Display (0..1) */
  getDisplay(): string | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDisplay(display: string | undefined): this {
    return this.setFieldValue('display', display);
  }

  hasDisplay(): boolean {
    return this.hasFieldValue('display');
  }

  /** The element carrying the id and extensions of `display`. Created when absent. */
  getDisplayElement(): Element {
    if (this._display === undefined) {
      this._display = new Element();
    }
    return this._display;
  }

  setDisplayElement(displayElement: Element | undefined): this {
    this._display = displayElement;
    return this;
  }

  /** Target of the relationship Resource reference (0..1) Created when absent. */
  getResource(): Reference {
    if (this.resource === undefined) {
      this.resource = new Reference();
    }
    return this.resource;
  }

  setResource(resource: Reference | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }
}

modelTypeRegistry.register('EvidenceReportRelatesToTarget', EvidenceReportRelatesToTarget, false);

/**
 * Composition is broken into sections
 */
export class EvidenceReportSection extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'focus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'focusReference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'focusReference', typeCode: 'Reference' }],
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
            'Group',
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
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'Narrative' }],
    },
    {
      elementName: 'mode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.ListMode }],
    },
    {
      elementName: 'orderedBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'orderedBy', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'entryClassifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'entryClassifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'entryReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'entryReference', typeCode: 'Reference' }],
    },
    {
      elementName: 'entryQuantity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'entryQuantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'emptyReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'emptyReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'section',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'section', typeCode: 'EvidenceReportSection' }],
    },
  ];

  /** Label for section (e.g. for ToC) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Classification of section (recommended) (0..1) */
  focus?: CodeableConcept;

  /** Classification of section by Resource (0..1) */
  focusReference?: Reference;

  /** Who and/or what authored the section (0..*) */
  author?: Reference[];

  /** Text summary of the section, for human interpretation (0..1) */
  text?: Narrative;

  /** working | snapshot | changes (0..1) */
  mode?: valueSetCodes.ListMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Order of section entries (0..1) */
  orderedBy?: CodeableConcept;

  /** Extensible classifiers as content (0..*) */
  entryClassifier?: CodeableConcept[];

  /** Reference to resources as content (0..*) */
  entryReference?: Reference[];

  /** Quantity as content (0..*) */
  entryQuantity?: Quantity[];

  /** Why the section is empty (0..1) */
  emptyReason?: CodeableConcept;

  /** Nested Section (0..*) */
  section?: EvidenceReportSection[];

  override fhirType(): string {
    return 'EvidenceReport.section';
  }

  /** FHIR JSON for this EvidenceReportSection, typed as the plain `EvidenceReportSection` data type. */
  override toJSON(): plainTypes.EvidenceReportSection {
    return this.serialize() as plainTypes.EvidenceReportSection;
  }

  /** Label for section (e.g. for ToC) (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }

  /** Classification of section (recommended) (0..1) Created when absent. */
  getFocus(): CodeableConcept {
    if (this.focus === undefined) {
      this.focus = new CodeableConcept();
    }
    return this.focus;
  }

  setFocus(focus: CodeableConcept | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Classification of section by Resource (0..1) Created when absent. */
  getFocusReference(): Reference {
    if (this.focusReference === undefined) {
      this.focusReference = new Reference();
    }
    return this.focusReference;
  }

  setFocusReference(focusReference: Reference | undefined): this {
    return this.setFieldValue('focusReference', focusReference);
  }

  hasFocusReference(): boolean {
    return this.hasFieldValue('focusReference');
  }

  /** Who and/or what authored the section (0..*) Never undefined; an empty list is created when absent. */
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

  /** Text summary of the section, for human interpretation (0..1) Created when absent. */
  getText(): Narrative {
    if (this.text === undefined) {
      this.text = new Narrative();
    }
    return this.text;
  }

  setText(text: Narrative | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** working | snapshot | changes (0..1) */
  getMode(): valueSetCodes.ListMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.ListMode | undefined): this {
    return this.setFieldValue('mode', mode);
  }

  hasMode(): boolean {
    return this.hasFieldValue('mode');
  }

  /** The element carrying the id and extensions of `mode`. Created when absent. */
  getModeElement(): Element {
    if (this._mode === undefined) {
      this._mode = new Element();
    }
    return this._mode;
  }

  setModeElement(modeElement: Element | undefined): this {
    this._mode = modeElement;
    return this;
  }

  /** Order of section entries (0..1) Created when absent. */
  getOrderedBy(): CodeableConcept {
    if (this.orderedBy === undefined) {
      this.orderedBy = new CodeableConcept();
    }
    return this.orderedBy;
  }

  setOrderedBy(orderedBy: CodeableConcept | undefined): this {
    return this.setFieldValue('orderedBy', orderedBy);
  }

  hasOrderedBy(): boolean {
    return this.hasFieldValue('orderedBy');
  }

  /** Extensible classifiers as content (0..*) Never undefined; an empty list is created when absent. */
  getEntryClassifier(): CodeableConcept[] {
    if (this.entryClassifier === undefined) {
      this.entryClassifier = [];
    }
    return this.entryClassifier;
  }

  setEntryClassifier(entryClassifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('entryClassifier', entryClassifier);
  }

  hasEntryClassifier(): boolean {
    return this.hasFieldValue('entryClassifier');
  }

  /** Appends a new, empty CodeableConcept to `entryClassifier` and returns it so it can be filled in. */
  addEntryClassifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `entryClassifier` and returns this object for chaining. */
  addEntryClassifier(codeableConcept: CodeableConcept): this;
  addEntryClassifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('entryClassifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('entryClassifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `entryClassifier`. One is added when the list is empty. */
  getEntryClassifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getEntryClassifier()[0];
    return firstCodeableConcept === undefined ? this.addEntryClassifier() : firstCodeableConcept;
  }

  /** Reference to resources as content (0..*) Never undefined; an empty list is created when absent. */
  getEntryReference(): Reference[] {
    if (this.entryReference === undefined) {
      this.entryReference = [];
    }
    return this.entryReference;
  }

  setEntryReference(entryReference: Reference[] | undefined): this {
    return this.setFieldValue('entryReference', entryReference);
  }

  hasEntryReference(): boolean {
    return this.hasFieldValue('entryReference');
  }

  /** Appends a new, empty Reference to `entryReference` and returns it so it can be filled in. */
  addEntryReference(): Reference;
  /** Appends the given Reference to `entryReference` and returns this object for chaining. */
  addEntryReference(reference: Reference): this;
  addEntryReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('entryReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('entryReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `entryReference`. One is added when the list is empty. */
  getEntryReferenceFirstRep(): Reference {
    const firstReference = this.getEntryReference()[0];
    return firstReference === undefined ? this.addEntryReference() : firstReference;
  }

  /** Quantity as content (0..*) Never undefined; an empty list is created when absent. */
  getEntryQuantity(): Quantity[] {
    if (this.entryQuantity === undefined) {
      this.entryQuantity = [];
    }
    return this.entryQuantity;
  }

  setEntryQuantity(entryQuantity: Quantity[] | undefined): this {
    return this.setFieldValue('entryQuantity', entryQuantity);
  }

  hasEntryQuantity(): boolean {
    return this.hasFieldValue('entryQuantity');
  }

  /** Appends a new, empty Quantity to `entryQuantity` and returns it so it can be filled in. */
  addEntryQuantity(): Quantity;
  /** Appends the given Quantity to `entryQuantity` and returns this object for chaining. */
  addEntryQuantity(quantity: Quantity): this;
  addEntryQuantity(quantity?: Quantity): Quantity | this {
    if (quantity !== undefined) {
      return this.addFieldValue('entryQuantity', quantity);
    }
    const createdQuantity = new Quantity();
    this.addFieldValue('entryQuantity', createdQuantity);
    return createdQuantity;
  }

  /** The first Quantity of `entryQuantity`. One is added when the list is empty. */
  getEntryQuantityFirstRep(): Quantity {
    const firstQuantity = this.getEntryQuantity()[0];
    return firstQuantity === undefined ? this.addEntryQuantity() : firstQuantity;
  }

  /** Why the section is empty (0..1) Created when absent. */
  getEmptyReason(): CodeableConcept {
    if (this.emptyReason === undefined) {
      this.emptyReason = new CodeableConcept();
    }
    return this.emptyReason;
  }

  setEmptyReason(emptyReason: CodeableConcept | undefined): this {
    return this.setFieldValue('emptyReason', emptyReason);
  }

  hasEmptyReason(): boolean {
    return this.hasFieldValue('emptyReason');
  }

  /** Nested Section (0..*) Never undefined; an empty list is created when absent. */
  getSection(): EvidenceReportSection[] {
    if (this.section === undefined) {
      this.section = [];
    }
    return this.section;
  }

  setSection(section: EvidenceReportSection[] | undefined): this {
    return this.setFieldValue('section', section);
  }

  hasSection(): boolean {
    return this.hasFieldValue('section');
  }

  /** Appends a new, empty EvidenceReportSection to `section` and returns it so it can be filled in. */
  addSection(): EvidenceReportSection;
  /** Appends the given EvidenceReportSection to `section` and returns this object for chaining. */
  addSection(evidenceReportSection: EvidenceReportSection): this;
  addSection(evidenceReportSection?: EvidenceReportSection): EvidenceReportSection | this {
    if (evidenceReportSection !== undefined) {
      return this.addFieldValue('section', evidenceReportSection);
    }
    const createdEvidenceReportSection = new EvidenceReportSection();
    this.addFieldValue('section', createdEvidenceReportSection);
    return createdEvidenceReportSection;
  }

  /** The first EvidenceReportSection of `section`. One is added when the list is empty. */
  getSectionFirstRep(): EvidenceReportSection {
    const firstEvidenceReportSection = this.getSection()[0];
    return firstEvidenceReportSection === undefined
      ? this.addSection()
      : firstEvidenceReportSection;
  }
}

modelTypeRegistry.register('EvidenceReportSection', EvidenceReportSection, false);
