/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactDetail } from './contactDetail';
import { DataRequirement } from './dataRequirement';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Expression } from './expression';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';
import { UsageContext } from './usageContext';

/**
 * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export class EvidenceVariable extends DomainResource {
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
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'shortTitle',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'shortTitle', typeCode: 'string' }],
    },
    {
      elementName: 'subtitle',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subtitle', typeCode: 'string' }],
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
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
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
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'useContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'useContext', typeCode: 'UsageContext' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
    {
      elementName: 'approvalDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'approvalDate', typeCode: 'date' }],
    },
    {
      elementName: 'lastReviewDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastReviewDate', typeCode: 'date' }],
    },
    {
      elementName: 'effectivePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectivePeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'topic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'topic', typeCode: 'CodeableConcept' }],
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
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.EvidenceVariableType },
      ],
    },
    {
      elementName: 'characteristic',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'EvidenceVariableCharacteristic' }],
    },
  ];

  readonly resourceType = 'EvidenceVariable';

  /** Canonical identifier for this evidence variable, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the evidence variable (0..*) */
  identifier?: Identifier[];

  /** Business version of the evidence variable (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this evidence variable (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this evidence variable (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Title for use in informal contexts (0..1) */
  shortTitle?: string;
  /** Id and extensions of the primitive `shortTitle`. */
  _shortTitle?: Element;

  /** Subordinate title of the EvidenceVariable (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the evidence variable (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Used for footnotes or explanatory notes (0..*) */
  note?: Annotation[];

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for evidence variable (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** When the evidence variable was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the evidence variable was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the evidence variable is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** The category of the EvidenceVariable, such as Education, Treatment, Assessment, etc. (0..*) */
  topic?: CodeableConcept[];

  /** Who authored the content (0..*) */
  author?: ContactDetail[];

  /** Who edited the content (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the content (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the content (0..*) */
  endorser?: ContactDetail[];

  /** Additional documentation, citations, etc. (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** dichotomous | continuous | descriptive (0..1) */
  type?: valueSetCodes.EvidenceVariableType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** What defines the members of the evidence element (1..*) */
  characteristic?: EvidenceVariableCharacteristic[];

  override fhirType(): string {
    return 'EvidenceVariable';
  }

  /** FHIR JSON for this EvidenceVariable, typed as the plain `EvidenceVariable` data type. */
  override toJSON(): plainTypes.EvidenceVariable {
    return this.serialize() as plainTypes.EvidenceVariable;
  }

  /** Canonical identifier for this evidence variable, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the evidence variable (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the evidence variable (0..1) */
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

  /** Name for this evidence variable (computer friendly) (0..1) */
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

  /** Name for this evidence variable (human friendly) (0..1) */
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

  /** Title for use in informal contexts (0..1) */
  getShortTitle(): string | undefined {
    return this.shortTitle;
  }

  /** Sets `shortTitle`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setShortTitle(shortTitle: string | undefined): this {
    return this.setFieldValue('shortTitle', shortTitle);
  }

  hasShortTitle(): boolean {
    return this.hasFieldValue('shortTitle');
  }

  /** The element carrying the id and extensions of `shortTitle`. Created when absent. */
  getShortTitleElement(): Element {
    if (this._shortTitle === undefined) {
      this._shortTitle = new Element();
    }
    return this._shortTitle;
  }

  setShortTitleElement(shortTitleElement: Element | undefined): this {
    this._shortTitle = shortTitleElement;
    return this;
  }

  /** Subordinate title of the EvidenceVariable (0..1) */
  getSubtitle(): string | undefined {
    return this.subtitle;
  }

  /** Sets `subtitle`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubtitle(subtitle: string | undefined): this {
    return this.setFieldValue('subtitle', subtitle);
  }

  hasSubtitle(): boolean {
    return this.hasFieldValue('subtitle');
  }

  /** The element carrying the id and extensions of `subtitle`. Created when absent. */
  getSubtitleElement(): Element {
    if (this._subtitle === undefined) {
      this._subtitle = new Element();
    }
    return this._subtitle;
  }

  setSubtitleElement(subtitleElement: Element | undefined): this {
    this._subtitle = subtitleElement;
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

  /** Date last changed (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
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

  /** Name of the publisher (organization or individual) (0..1) */
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

  /** Natural language description of the evidence variable (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** Used for footnotes or explanatory notes (0..*) Never undefined; an empty list is created when absent. */
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

  /** Intended jurisdiction for evidence variable (if applicable) (0..*) Never undefined; an empty list is created when absent. */
  getJurisdiction(): CodeableConcept[] {
    if (this.jurisdiction === undefined) {
      this.jurisdiction = [];
    }
    return this.jurisdiction;
  }

  setJurisdiction(jurisdiction: CodeableConcept[] | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }

  /** Appends a new, empty CodeableConcept to `jurisdiction` and returns it so it can be filled in. */
  addJurisdiction(): CodeableConcept;
  /** Appends the given CodeableConcept to `jurisdiction` and returns this object for chaining. */
  addJurisdiction(codeableConcept: CodeableConcept): this;
  addJurisdiction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('jurisdiction', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('jurisdiction', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `jurisdiction`. One is added when the list is empty. */
  getJurisdictionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getJurisdiction()[0];
    return firstCodeableConcept === undefined ? this.addJurisdiction() : firstCodeableConcept;
  }

  /** Use and/or publishing restrictions (0..1) */
  getCopyright(): string | undefined {
    return this.copyright;
  }

  /** Sets `copyright`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setCopyright(copyright: string | undefined): this {
    return this.setFieldValue('copyright', copyright);
  }

  hasCopyright(): boolean {
    return this.hasFieldValue('copyright');
  }

  /** The element carrying the id and extensions of `copyright`. Created when absent. */
  getCopyrightElement(): Element {
    if (this._copyright === undefined) {
      this._copyright = new Element();
    }
    return this._copyright;
  }

  setCopyrightElement(copyrightElement: Element | undefined): this {
    this._copyright = copyrightElement;
    return this;
  }

  /** When the evidence variable was approved by publisher (0..1) */
  getApprovalDate(): string | undefined {
    return this.approvalDate;
  }

  /** Sets `approvalDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setApprovalDate(approvalDate: string | undefined): this {
    return this.setFieldValue('approvalDate', approvalDate);
  }

  hasApprovalDate(): boolean {
    return this.hasFieldValue('approvalDate');
  }

  /** The element carrying the id and extensions of `approvalDate`. Created when absent. */
  getApprovalDateElement(): Element {
    if (this._approvalDate === undefined) {
      this._approvalDate = new Element();
    }
    return this._approvalDate;
  }

  setApprovalDateElement(approvalDateElement: Element | undefined): this {
    this._approvalDate = approvalDateElement;
    return this;
  }

  /** When the evidence variable was last reviewed (0..1) */
  getLastReviewDate(): string | undefined {
    return this.lastReviewDate;
  }

  /** Sets `lastReviewDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setLastReviewDate(lastReviewDate: string | undefined): this {
    return this.setFieldValue('lastReviewDate', lastReviewDate);
  }

  hasLastReviewDate(): boolean {
    return this.hasFieldValue('lastReviewDate');
  }

  /** The element carrying the id and extensions of `lastReviewDate`. Created when absent. */
  getLastReviewDateElement(): Element {
    if (this._lastReviewDate === undefined) {
      this._lastReviewDate = new Element();
    }
    return this._lastReviewDate;
  }

  setLastReviewDateElement(lastReviewDateElement: Element | undefined): this {
    this._lastReviewDate = lastReviewDateElement;
    return this;
  }

  /** When the evidence variable is expected to be used (0..1) Created when absent. */
  getEffectivePeriod(): Period {
    if (this.effectivePeriod === undefined) {
      this.effectivePeriod = new Period();
    }
    return this.effectivePeriod;
  }

  setEffectivePeriod(effectivePeriod: Period | undefined): this {
    return this.setFieldValue('effectivePeriod', effectivePeriod);
  }

  hasEffectivePeriod(): boolean {
    return this.hasFieldValue('effectivePeriod');
  }

  /** The category of the EvidenceVariable, such as Education, Treatment, Assessment, etc. (0..*) Never undefined; an empty list is created when absent. */
  getTopic(): CodeableConcept[] {
    if (this.topic === undefined) {
      this.topic = [];
    }
    return this.topic;
  }

  setTopic(topic: CodeableConcept[] | undefined): this {
    return this.setFieldValue('topic', topic);
  }

  hasTopic(): boolean {
    return this.hasFieldValue('topic');
  }

  /** Appends a new, empty CodeableConcept to `topic` and returns it so it can be filled in. */
  addTopic(): CodeableConcept;
  /** Appends the given CodeableConcept to `topic` and returns this object for chaining. */
  addTopic(codeableConcept: CodeableConcept): this;
  addTopic(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('topic', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('topic', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `topic`. One is added when the list is empty. */
  getTopicFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getTopic()[0];
    return firstCodeableConcept === undefined ? this.addTopic() : firstCodeableConcept;
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

  /** Additional documentation, citations, etc. (0..*) Never undefined; an empty list is created when absent. */
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

  /** dichotomous | continuous | descriptive (0..1) */
  getType(): valueSetCodes.EvidenceVariableType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.EvidenceVariableType | undefined): this {
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

  /** What defines the members of the evidence element (1..*) Never undefined; an empty list is created when absent. */
  getCharacteristic(): EvidenceVariableCharacteristic[] {
    if (this.characteristic === undefined) {
      this.characteristic = [];
    }
    return this.characteristic;
  }

  setCharacteristic(characteristic: EvidenceVariableCharacteristic[] | undefined): this {
    return this.setFieldValue('characteristic', characteristic);
  }

  hasCharacteristic(): boolean {
    return this.hasFieldValue('characteristic');
  }

  /** Appends a new, empty EvidenceVariableCharacteristic to `characteristic` and returns it so it can be filled in. */
  addCharacteristic(): EvidenceVariableCharacteristic;
  /** Appends the given EvidenceVariableCharacteristic to `characteristic` and returns this object for chaining. */
  addCharacteristic(evidenceVariableCharacteristic: EvidenceVariableCharacteristic): this;
  addCharacteristic(
    evidenceVariableCharacteristic?: EvidenceVariableCharacteristic
  ): EvidenceVariableCharacteristic | this {
    if (evidenceVariableCharacteristic !== undefined) {
      return this.addFieldValue('characteristic', evidenceVariableCharacteristic);
    }
    const createdEvidenceVariableCharacteristic = new EvidenceVariableCharacteristic();
    this.addFieldValue('characteristic', createdEvidenceVariableCharacteristic);
    return createdEvidenceVariableCharacteristic;
  }

  /** The first EvidenceVariableCharacteristic of `characteristic`. One is added when the list is empty. */
  getCharacteristicFirstRep(): EvidenceVariableCharacteristic {
    const firstEvidenceVariableCharacteristic = this.getCharacteristic()[0];
    return firstEvidenceVariableCharacteristic === undefined
      ? this.addCharacteristic()
      : firstEvidenceVariableCharacteristic;
  }
}

modelTypeRegistry.register('EvidenceVariable', EvidenceVariable, true);

/** True when the value is a EvidenceVariable model instance. */
export function isEvidenceVariable(candidate: unknown): candidate is EvidenceVariable {
  return candidate instanceof EvidenceVariable;
}

/**
 * What defines the members of the evidence element
 */
export class EvidenceVariableCharacteristic extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'definition',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'definitionReference', typeCode: 'Reference', targetResourceTypes: ['Group'] },
        { jsonKey: 'definitionCanonical', typeCode: 'canonical' },
        { jsonKey: 'definitionCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'definitionExpression', typeCode: 'Expression' },
        { jsonKey: 'definitionDataRequirement', typeCode: 'DataRequirement' },
        { jsonKey: 'definitionTriggerDefinition', typeCode: 'TriggerDefinition' },
      ],
    },
    {
      elementName: 'usageContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'usageContext', typeCode: 'UsageContext' }],
    },
    {
      elementName: 'exclude',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'exclude', typeCode: 'boolean' }],
    },
    {
      elementName: 'participantEffective',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'participantEffectiveDateTime', typeCode: 'dateTime' },
        { jsonKey: 'participantEffectivePeriod', typeCode: 'Period' },
        { jsonKey: 'participantEffectiveDuration', typeCode: 'Duration' },
        { jsonKey: 'participantEffectiveTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'timeFromStart',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'timeFromStart', typeCode: 'Duration' }],
    },
    {
      elementName: 'groupMeasure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'groupMeasure', typeCode: 'code', allowedCodes: valueSetCodes.GroupMeasure },
      ],
    },
  ];

  /** Natural language description of the characteristic (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** What code or expression defines members? (1..1) */
  definitionReference?: Reference;
  /** What code or expression defines members? (1..1) */
  definitionCanonical?: string;
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: Element;
  /** What code or expression defines members? (1..1) */
  definitionCodeableConcept?: CodeableConcept;
  /** What code or expression defines members? (1..1) */
  definitionExpression?: Expression;
  /** What code or expression defines members? (1..1) */
  definitionDataRequirement?: DataRequirement;
  /** What code or expression defines members? (1..1) */
  definitionTriggerDefinition?: TriggerDefinition;

  /** What code/value pairs define members? (0..*) */
  usageContext?: UsageContext[];

  /** Whether the characteristic includes or excludes members (0..1) */
  exclude?: boolean;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Element;

  /** What time period do participants cover (0..1) */
  participantEffectiveDateTime?: string;
  /** Id and extensions of the primitive `participantEffectiveDateTime`. */
  _participantEffectiveDateTime?: Element;
  /** What time period do participants cover (0..1) */
  participantEffectivePeriod?: Period;
  /** What time period do participants cover (0..1) */
  participantEffectiveDuration?: Duration;
  /** What time period do participants cover (0..1) */
  participantEffectiveTiming?: Timing;

  /** Observation time from study start (0..1) */
  timeFromStart?: Duration;

  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median (0..1) */
  groupMeasure?: valueSetCodes.GroupMeasure;
  /** Id and extensions of the primitive `groupMeasure`. */
  _groupMeasure?: Element;

  override fhirType(): string {
    return 'EvidenceVariable.characteristic';
  }

  /** FHIR JSON for this EvidenceVariableCharacteristic, typed as the plain `EvidenceVariableCharacteristic` data type. */
  override toJSON(): plainTypes.EvidenceVariableCharacteristic {
    return this.serialize() as plainTypes.EvidenceVariableCharacteristic;
  }

  /** Natural language description of the characteristic (0..1) */
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

  /** What code or expression defines members? (1..1) Whichever type of `definition[x]` is set. */
  getDefinition():
    | Reference
    | string
    | CodeableConcept
    | Expression
    | DataRequirement
    | TriggerDefinition
    | undefined {
    return this.getChoiceValue<
      Reference | string | CodeableConcept | Expression | DataRequirement | TriggerDefinition
    >('definition');
  }

  /** True when any type of `definition[x]` is set. */
  hasDefinition(): boolean {
    return this.hasChoiceValue('definition');
  }

  getDefinitionReference(): Reference | undefined {
    return this.definitionReference;
  }

  /** Sets `definition[x]` as Reference and clears every other type of it. */
  setDefinitionReference(definitionReference: Reference | undefined): this {
    return this.setFieldValue('definitionReference', definitionReference);
  }

  hasDefinitionReference(): boolean {
    return this.hasFieldValue('definitionReference');
  }

  getDefinitionCanonical(): string | undefined {
    return this.definitionCanonical;
  }

  /** Sets `definition[x]` as canonical and clears every other type of it. */
  setDefinitionCanonical(definitionCanonical: string | undefined): this {
    return this.setFieldValue('definitionCanonical', definitionCanonical);
  }

  hasDefinitionCanonical(): boolean {
    return this.hasFieldValue('definitionCanonical');
  }

  getDefinitionCodeableConcept(): CodeableConcept | undefined {
    return this.definitionCodeableConcept;
  }

  /** Sets `definition[x]` as CodeableConcept and clears every other type of it. */
  setDefinitionCodeableConcept(definitionCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('definitionCodeableConcept', definitionCodeableConcept);
  }

  hasDefinitionCodeableConcept(): boolean {
    return this.hasFieldValue('definitionCodeableConcept');
  }

  getDefinitionExpression(): Expression | undefined {
    return this.definitionExpression;
  }

  /** Sets `definition[x]` as Expression and clears every other type of it. */
  setDefinitionExpression(definitionExpression: Expression | undefined): this {
    return this.setFieldValue('definitionExpression', definitionExpression);
  }

  hasDefinitionExpression(): boolean {
    return this.hasFieldValue('definitionExpression');
  }

  getDefinitionDataRequirement(): DataRequirement | undefined {
    return this.definitionDataRequirement;
  }

  /** Sets `definition[x]` as DataRequirement and clears every other type of it. */
  setDefinitionDataRequirement(definitionDataRequirement: DataRequirement | undefined): this {
    return this.setFieldValue('definitionDataRequirement', definitionDataRequirement);
  }

  hasDefinitionDataRequirement(): boolean {
    return this.hasFieldValue('definitionDataRequirement');
  }

  getDefinitionTriggerDefinition(): TriggerDefinition | undefined {
    return this.definitionTriggerDefinition;
  }

  /** Sets `definition[x]` as TriggerDefinition and clears every other type of it. */
  setDefinitionTriggerDefinition(definitionTriggerDefinition: TriggerDefinition | undefined): this {
    return this.setFieldValue('definitionTriggerDefinition', definitionTriggerDefinition);
  }

  hasDefinitionTriggerDefinition(): boolean {
    return this.hasFieldValue('definitionTriggerDefinition');
  }

  /** What code/value pairs define members? (0..*) Never undefined; an empty list is created when absent. */
  getUsageContext(): UsageContext[] {
    if (this.usageContext === undefined) {
      this.usageContext = [];
    }
    return this.usageContext;
  }

  setUsageContext(usageContext: UsageContext[] | undefined): this {
    return this.setFieldValue('usageContext', usageContext);
  }

  hasUsageContext(): boolean {
    return this.hasFieldValue('usageContext');
  }

  /** Appends a new, empty UsageContext to `usageContext` and returns it so it can be filled in. */
  addUsageContext(): UsageContext;
  /** Appends the given UsageContext to `usageContext` and returns this object for chaining. */
  addUsageContext(usageContext: UsageContext): this;
  addUsageContext(usageContext?: UsageContext): UsageContext | this {
    if (usageContext !== undefined) {
      return this.addFieldValue('usageContext', usageContext);
    }
    const createdUsageContext = new UsageContext();
    this.addFieldValue('usageContext', createdUsageContext);
    return createdUsageContext;
  }

  /** The first UsageContext of `usageContext`. One is added when the list is empty. */
  getUsageContextFirstRep(): UsageContext {
    const firstUsageContext = this.getUsageContext()[0];
    return firstUsageContext === undefined ? this.addUsageContext() : firstUsageContext;
  }

  /** Whether the characteristic includes or excludes members (0..1) */
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

  /** What time period do participants cover (0..1) Whichever type of `participantEffective[x]` is set. */
  getParticipantEffective(): string | Period | Duration | Timing | undefined {
    return this.getChoiceValue<string | Period | Duration | Timing>('participantEffective');
  }

  /** True when any type of `participantEffective[x]` is set. */
  hasParticipantEffective(): boolean {
    return this.hasChoiceValue('participantEffective');
  }

  getParticipantEffectiveDateTime(): string | undefined {
    return this.participantEffectiveDateTime;
  }

  /** Sets `participantEffective[x]` as dateTime and clears every other type of it. */
  setParticipantEffectiveDateTime(participantEffectiveDateTime: string | undefined): this {
    return this.setFieldValue('participantEffectiveDateTime', participantEffectiveDateTime);
  }

  hasParticipantEffectiveDateTime(): boolean {
    return this.hasFieldValue('participantEffectiveDateTime');
  }

  getParticipantEffectivePeriod(): Period | undefined {
    return this.participantEffectivePeriod;
  }

  /** Sets `participantEffective[x]` as Period and clears every other type of it. */
  setParticipantEffectivePeriod(participantEffectivePeriod: Period | undefined): this {
    return this.setFieldValue('participantEffectivePeriod', participantEffectivePeriod);
  }

  hasParticipantEffectivePeriod(): boolean {
    return this.hasFieldValue('participantEffectivePeriod');
  }

  getParticipantEffectiveDuration(): Duration | undefined {
    return this.participantEffectiveDuration;
  }

  /** Sets `participantEffective[x]` as Duration and clears every other type of it. */
  setParticipantEffectiveDuration(participantEffectiveDuration: Duration | undefined): this {
    return this.setFieldValue('participantEffectiveDuration', participantEffectiveDuration);
  }

  hasParticipantEffectiveDuration(): boolean {
    return this.hasFieldValue('participantEffectiveDuration');
  }

  getParticipantEffectiveTiming(): Timing | undefined {
    return this.participantEffectiveTiming;
  }

  /** Sets `participantEffective[x]` as Timing and clears every other type of it. */
  setParticipantEffectiveTiming(participantEffectiveTiming: Timing | undefined): this {
    return this.setFieldValue('participantEffectiveTiming', participantEffectiveTiming);
  }

  hasParticipantEffectiveTiming(): boolean {
    return this.hasFieldValue('participantEffectiveTiming');
  }

  /** Observation time from study start (0..1) Created when absent. */
  getTimeFromStart(): Duration {
    if (this.timeFromStart === undefined) {
      this.timeFromStart = new Duration();
    }
    return this.timeFromStart;
  }

  setTimeFromStart(timeFromStart: Duration | undefined): this {
    return this.setFieldValue('timeFromStart', timeFromStart);
  }

  hasTimeFromStart(): boolean {
    return this.hasFieldValue('timeFromStart');
  }

  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median (0..1) */
  getGroupMeasure(): valueSetCodes.GroupMeasure | undefined {
    return this.groupMeasure;
  }

  /** Sets `groupMeasure`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setGroupMeasure(groupMeasure: valueSetCodes.GroupMeasure | undefined): this {
    return this.setFieldValue('groupMeasure', groupMeasure);
  }

  hasGroupMeasure(): boolean {
    return this.hasFieldValue('groupMeasure');
  }

  /** The element carrying the id and extensions of `groupMeasure`. Created when absent. */
  getGroupMeasureElement(): Element {
    if (this._groupMeasure === undefined) {
      this._groupMeasure = new Element();
    }
    return this._groupMeasure;
  }

  setGroupMeasureElement(groupMeasureElement: Element | undefined): this {
    this._groupMeasure = groupMeasureElement;
    return this;
  }
}

modelTypeRegistry.register('EvidenceVariableCharacteristic', EvidenceVariableCharacteristic, false);
