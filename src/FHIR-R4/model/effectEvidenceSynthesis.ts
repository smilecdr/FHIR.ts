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
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export class EffectEvidenceSynthesis extends DomainResource {
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
      elementName: 'synthesisType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'synthesisType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'studyType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'studyType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'population',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'population', typeCode: 'Reference', targetResourceTypes: ['EvidenceVariable'] },
      ],
    },
    {
      elementName: 'exposure',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'exposure', typeCode: 'Reference', targetResourceTypes: ['EvidenceVariable'] },
      ],
    },
    {
      elementName: 'exposureAlternative',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'exposureAlternative',
          typeCode: 'Reference',
          targetResourceTypes: ['EvidenceVariable'],
        },
      ],
    },
    {
      elementName: 'outcome',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'outcome', typeCode: 'Reference', targetResourceTypes: ['EvidenceVariable'] },
      ],
    },
    {
      elementName: 'sampleSize',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sampleSize', typeCode: 'EffectEvidenceSynthesisSampleSize' }],
    },
    {
      elementName: 'resultsByExposure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'resultsByExposure', typeCode: 'EffectEvidenceSynthesisResultsByExposure' },
      ],
    },
    {
      elementName: 'effectEstimate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'effectEstimate', typeCode: 'EffectEvidenceSynthesisEffectEstimate' }],
    },
    {
      elementName: 'certainty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'certainty', typeCode: 'EffectEvidenceSynthesisCertainty' }],
    },
  ];

  readonly resourceType = 'EffectEvidenceSynthesis';

  /** Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the effect evidence synthesis (0..*) */
  identifier?: Identifier[];

  /** Business version of the effect evidence synthesis (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this effect evidence synthesis (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this effect evidence synthesis (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

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

  /** Natural language description of the effect evidence synthesis (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Used for footnotes or explanatory notes (0..*) */
  note?: Annotation[];

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for effect evidence synthesis (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** When the effect evidence synthesis was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the effect evidence synthesis was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the effect evidence synthesis is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. (0..*) */
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

  /** Type of synthesis (0..1) */
  synthesisType?: CodeableConcept;

  /** Type of study (0..1) */
  studyType?: CodeableConcept;

  /** What population? (1..1) */
  population?: Reference;

  /** What exposure? (1..1) */
  exposure?: Reference;

  /** What comparison exposure? (1..1) */
  exposureAlternative?: Reference;

  /** What outcome? (1..1) */
  outcome?: Reference;

  /** What sample size was involved? (0..1) */
  sampleSize?: EffectEvidenceSynthesisSampleSize;

  /** What was the result per exposure? (0..*) */
  resultsByExposure?: EffectEvidenceSynthesisResultsByExposure[];

  /** What was the estimated effect (0..*) */
  effectEstimate?: EffectEvidenceSynthesisEffectEstimate[];

  /** How certain is the effect (0..*) */
  certainty?: EffectEvidenceSynthesisCertainty[];

  override fhirType(): string {
    return 'EffectEvidenceSynthesis';
  }

  /** FHIR JSON for this EffectEvidenceSynthesis, typed as the plain `EffectEvidenceSynthesis` data type. */
  override toJSON(): plainTypes.EffectEvidenceSynthesis {
    return this.serialize() as plainTypes.EffectEvidenceSynthesis;
  }

  /** Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the effect evidence synthesis (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the effect evidence synthesis (0..1) */
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

  /** Name for this effect evidence synthesis (computer friendly) (0..1) */
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

  /** Name for this effect evidence synthesis (human friendly) (0..1) */
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

  /** Natural language description of the effect evidence synthesis (0..1) */
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

  /** Intended jurisdiction for effect evidence synthesis (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** When the effect evidence synthesis was approved by publisher (0..1) */
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

  /** When the effect evidence synthesis was last reviewed (0..1) */
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

  /** When the effect evidence synthesis is expected to be used (0..1) Created when absent. */
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

  /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of synthesis (0..1) Created when absent. */
  getSynthesisType(): CodeableConcept {
    if (this.synthesisType === undefined) {
      this.synthesisType = new CodeableConcept();
    }
    return this.synthesisType;
  }

  setSynthesisType(synthesisType: CodeableConcept | undefined): this {
    return this.setFieldValue('synthesisType', synthesisType);
  }

  hasSynthesisType(): boolean {
    return this.hasFieldValue('synthesisType');
  }

  /** Type of study (0..1) Created when absent. */
  getStudyType(): CodeableConcept {
    if (this.studyType === undefined) {
      this.studyType = new CodeableConcept();
    }
    return this.studyType;
  }

  setStudyType(studyType: CodeableConcept | undefined): this {
    return this.setFieldValue('studyType', studyType);
  }

  hasStudyType(): boolean {
    return this.hasFieldValue('studyType');
  }

  /** What population? (1..1) Created when absent. */
  getPopulation(): Reference {
    if (this.population === undefined) {
      this.population = new Reference();
    }
    return this.population;
  }

  setPopulation(population: Reference | undefined): this {
    return this.setFieldValue('population', population);
  }

  hasPopulation(): boolean {
    return this.hasFieldValue('population');
  }

  /** What exposure? (1..1) Created when absent. */
  getExposure(): Reference {
    if (this.exposure === undefined) {
      this.exposure = new Reference();
    }
    return this.exposure;
  }

  setExposure(exposure: Reference | undefined): this {
    return this.setFieldValue('exposure', exposure);
  }

  hasExposure(): boolean {
    return this.hasFieldValue('exposure');
  }

  /** What comparison exposure? (1..1) Created when absent. */
  getExposureAlternative(): Reference {
    if (this.exposureAlternative === undefined) {
      this.exposureAlternative = new Reference();
    }
    return this.exposureAlternative;
  }

  setExposureAlternative(exposureAlternative: Reference | undefined): this {
    return this.setFieldValue('exposureAlternative', exposureAlternative);
  }

  hasExposureAlternative(): boolean {
    return this.hasFieldValue('exposureAlternative');
  }

  /** What outcome? (1..1) Created when absent. */
  getOutcome(): Reference {
    if (this.outcome === undefined) {
      this.outcome = new Reference();
    }
    return this.outcome;
  }

  setOutcome(outcome: Reference | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
  }

  /** What sample size was involved? (0..1) Created when absent. */
  getSampleSize(): EffectEvidenceSynthesisSampleSize {
    if (this.sampleSize === undefined) {
      this.sampleSize = new EffectEvidenceSynthesisSampleSize();
    }
    return this.sampleSize;
  }

  setSampleSize(sampleSize: EffectEvidenceSynthesisSampleSize | undefined): this {
    return this.setFieldValue('sampleSize', sampleSize);
  }

  hasSampleSize(): boolean {
    return this.hasFieldValue('sampleSize');
  }

  /** What was the result per exposure? (0..*) Never undefined; an empty list is created when absent. */
  getResultsByExposure(): EffectEvidenceSynthesisResultsByExposure[] {
    if (this.resultsByExposure === undefined) {
      this.resultsByExposure = [];
    }
    return this.resultsByExposure;
  }

  setResultsByExposure(
    resultsByExposure: EffectEvidenceSynthesisResultsByExposure[] | undefined
  ): this {
    return this.setFieldValue('resultsByExposure', resultsByExposure);
  }

  hasResultsByExposure(): boolean {
    return this.hasFieldValue('resultsByExposure');
  }

  /** Appends a new, empty EffectEvidenceSynthesisResultsByExposure to `resultsByExposure` and returns it so it can be filled in. */
  addResultsByExposure(): EffectEvidenceSynthesisResultsByExposure;
  /** Appends the given EffectEvidenceSynthesisResultsByExposure to `resultsByExposure` and returns this object for chaining. */
  addResultsByExposure(
    effectEvidenceSynthesisResultsByExposure: EffectEvidenceSynthesisResultsByExposure
  ): this;
  addResultsByExposure(
    effectEvidenceSynthesisResultsByExposure?: EffectEvidenceSynthesisResultsByExposure
  ): EffectEvidenceSynthesisResultsByExposure | this {
    if (effectEvidenceSynthesisResultsByExposure !== undefined) {
      return this.addFieldValue('resultsByExposure', effectEvidenceSynthesisResultsByExposure);
    }
    const createdEffectEvidenceSynthesisResultsByExposure =
      new EffectEvidenceSynthesisResultsByExposure();
    this.addFieldValue('resultsByExposure', createdEffectEvidenceSynthesisResultsByExposure);
    return createdEffectEvidenceSynthesisResultsByExposure;
  }

  /** The first EffectEvidenceSynthesisResultsByExposure of `resultsByExposure`. One is added when the list is empty. */
  getResultsByExposureFirstRep(): EffectEvidenceSynthesisResultsByExposure {
    const firstEffectEvidenceSynthesisResultsByExposure = this.getResultsByExposure()[0];
    return firstEffectEvidenceSynthesisResultsByExposure === undefined
      ? this.addResultsByExposure()
      : firstEffectEvidenceSynthesisResultsByExposure;
  }

  /** What was the estimated effect (0..*) Never undefined; an empty list is created when absent. */
  getEffectEstimate(): EffectEvidenceSynthesisEffectEstimate[] {
    if (this.effectEstimate === undefined) {
      this.effectEstimate = [];
    }
    return this.effectEstimate;
  }

  setEffectEstimate(effectEstimate: EffectEvidenceSynthesisEffectEstimate[] | undefined): this {
    return this.setFieldValue('effectEstimate', effectEstimate);
  }

  hasEffectEstimate(): boolean {
    return this.hasFieldValue('effectEstimate');
  }

  /** Appends a new, empty EffectEvidenceSynthesisEffectEstimate to `effectEstimate` and returns it so it can be filled in. */
  addEffectEstimate(): EffectEvidenceSynthesisEffectEstimate;
  /** Appends the given EffectEvidenceSynthesisEffectEstimate to `effectEstimate` and returns this object for chaining. */
  addEffectEstimate(
    effectEvidenceSynthesisEffectEstimate: EffectEvidenceSynthesisEffectEstimate
  ): this;
  addEffectEstimate(
    effectEvidenceSynthesisEffectEstimate?: EffectEvidenceSynthesisEffectEstimate
  ): EffectEvidenceSynthesisEffectEstimate | this {
    if (effectEvidenceSynthesisEffectEstimate !== undefined) {
      return this.addFieldValue('effectEstimate', effectEvidenceSynthesisEffectEstimate);
    }
    const createdEffectEvidenceSynthesisEffectEstimate =
      new EffectEvidenceSynthesisEffectEstimate();
    this.addFieldValue('effectEstimate', createdEffectEvidenceSynthesisEffectEstimate);
    return createdEffectEvidenceSynthesisEffectEstimate;
  }

  /** The first EffectEvidenceSynthesisEffectEstimate of `effectEstimate`. One is added when the list is empty. */
  getEffectEstimateFirstRep(): EffectEvidenceSynthesisEffectEstimate {
    const firstEffectEvidenceSynthesisEffectEstimate = this.getEffectEstimate()[0];
    return firstEffectEvidenceSynthesisEffectEstimate === undefined
      ? this.addEffectEstimate()
      : firstEffectEvidenceSynthesisEffectEstimate;
  }

  /** How certain is the effect (0..*) Never undefined; an empty list is created when absent. */
  getCertainty(): EffectEvidenceSynthesisCertainty[] {
    if (this.certainty === undefined) {
      this.certainty = [];
    }
    return this.certainty;
  }

  setCertainty(certainty: EffectEvidenceSynthesisCertainty[] | undefined): this {
    return this.setFieldValue('certainty', certainty);
  }

  hasCertainty(): boolean {
    return this.hasFieldValue('certainty');
  }

  /** Appends a new, empty EffectEvidenceSynthesisCertainty to `certainty` and returns it so it can be filled in. */
  addCertainty(): EffectEvidenceSynthesisCertainty;
  /** Appends the given EffectEvidenceSynthesisCertainty to `certainty` and returns this object for chaining. */
  addCertainty(effectEvidenceSynthesisCertainty: EffectEvidenceSynthesisCertainty): this;
  addCertainty(
    effectEvidenceSynthesisCertainty?: EffectEvidenceSynthesisCertainty
  ): EffectEvidenceSynthesisCertainty | this {
    if (effectEvidenceSynthesisCertainty !== undefined) {
      return this.addFieldValue('certainty', effectEvidenceSynthesisCertainty);
    }
    const createdEffectEvidenceSynthesisCertainty = new EffectEvidenceSynthesisCertainty();
    this.addFieldValue('certainty', createdEffectEvidenceSynthesisCertainty);
    return createdEffectEvidenceSynthesisCertainty;
  }

  /** The first EffectEvidenceSynthesisCertainty of `certainty`. One is added when the list is empty. */
  getCertaintyFirstRep(): EffectEvidenceSynthesisCertainty {
    const firstEffectEvidenceSynthesisCertainty = this.getCertainty()[0];
    return firstEffectEvidenceSynthesisCertainty === undefined
      ? this.addCertainty()
      : firstEffectEvidenceSynthesisCertainty;
  }
}

modelTypeRegistry.register('EffectEvidenceSynthesis', EffectEvidenceSynthesis, true);

/** True when the value is a EffectEvidenceSynthesis model instance. */
export function isEffectEvidenceSynthesis(
  candidate: unknown
): candidate is EffectEvidenceSynthesis {
  return candidate instanceof EffectEvidenceSynthesis;
}

/**
 * What sample size was involved?
 */
export class EffectEvidenceSynthesisSampleSize extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'numberOfStudies',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfStudies', typeCode: 'integer' }],
    },
    {
      elementName: 'numberOfParticipants',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfParticipants', typeCode: 'integer' }],
    },
  ];

  /** Description of sample size (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** How many studies? (0..1) */
  numberOfStudies?: number;
  /** Id and extensions of the primitive `numberOfStudies`. */
  _numberOfStudies?: Element;

  /** How many participants? (0..1) */
  numberOfParticipants?: number;
  /** Id and extensions of the primitive `numberOfParticipants`. */
  _numberOfParticipants?: Element;

  override fhirType(): string {
    return 'EffectEvidenceSynthesis.sampleSize';
  }

  /** FHIR JSON for this EffectEvidenceSynthesisSampleSize, typed as the plain `EffectEvidenceSynthesisSampleSize` data type. */
  override toJSON(): plainTypes.EffectEvidenceSynthesisSampleSize {
    return this.serialize() as plainTypes.EffectEvidenceSynthesisSampleSize;
  }

  /** Description of sample size (0..1) */
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

  /** How many studies? (0..1) */
  getNumberOfStudies(): number | undefined {
    return this.numberOfStudies;
  }

  /** Sets `numberOfStudies`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setNumberOfStudies(numberOfStudies: number | undefined): this {
    return this.setFieldValue('numberOfStudies', numberOfStudies);
  }

  hasNumberOfStudies(): boolean {
    return this.hasFieldValue('numberOfStudies');
  }

  /** The element carrying the id and extensions of `numberOfStudies`. Created when absent. */
  getNumberOfStudiesElement(): Element {
    if (this._numberOfStudies === undefined) {
      this._numberOfStudies = new Element();
    }
    return this._numberOfStudies;
  }

  setNumberOfStudiesElement(numberOfStudiesElement: Element | undefined): this {
    this._numberOfStudies = numberOfStudiesElement;
    return this;
  }

  /** How many participants? (0..1) */
  getNumberOfParticipants(): number | undefined {
    return this.numberOfParticipants;
  }

  /** Sets `numberOfParticipants`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setNumberOfParticipants(numberOfParticipants: number | undefined): this {
    return this.setFieldValue('numberOfParticipants', numberOfParticipants);
  }

  hasNumberOfParticipants(): boolean {
    return this.hasFieldValue('numberOfParticipants');
  }

  /** The element carrying the id and extensions of `numberOfParticipants`. Created when absent. */
  getNumberOfParticipantsElement(): Element {
    if (this._numberOfParticipants === undefined) {
      this._numberOfParticipants = new Element();
    }
    return this._numberOfParticipants;
  }

  setNumberOfParticipantsElement(numberOfParticipantsElement: Element | undefined): this {
    this._numberOfParticipants = numberOfParticipantsElement;
    return this;
  }
}

modelTypeRegistry.register(
  'EffectEvidenceSynthesisSampleSize',
  EffectEvidenceSynthesisSampleSize,
  false
);

/**
 * What was the result per exposure?
 */
export class EffectEvidenceSynthesisResultsByExposure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'exposureState',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'exposureState', typeCode: 'code', allowedCodes: valueSetCodes.ExposureState },
      ],
    },
    {
      elementName: 'variantState',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'variantState', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'riskEvidenceSynthesis',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'riskEvidenceSynthesis',
          typeCode: 'Reference',
          targetResourceTypes: ['RiskEvidenceSynthesis'],
        },
      ],
    },
  ];

  /** Description of results by exposure (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** exposure | exposure-alternative (0..1) */
  exposureState?: valueSetCodes.ExposureState;
  /** Id and extensions of the primitive `exposureState`. */
  _exposureState?: Element;

  /** Variant exposure states (0..1) */
  variantState?: CodeableConcept;

  /** Risk evidence synthesis (1..1) */
  riskEvidenceSynthesis?: Reference;

  override fhirType(): string {
    return 'EffectEvidenceSynthesis.resultsByExposure';
  }

  /** FHIR JSON for this EffectEvidenceSynthesisResultsByExposure, typed as the plain `EffectEvidenceSynthesisResultsByExposure` data type. */
  override toJSON(): plainTypes.EffectEvidenceSynthesisResultsByExposure {
    return this.serialize() as plainTypes.EffectEvidenceSynthesisResultsByExposure;
  }

  /** Description of results by exposure (0..1) */
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

  /** exposure | exposure-alternative (0..1) */
  getExposureState(): valueSetCodes.ExposureState | undefined {
    return this.exposureState;
  }

  /** Sets `exposureState`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setExposureState(exposureState: valueSetCodes.ExposureState | undefined): this {
    return this.setFieldValue('exposureState', exposureState);
  }

  hasExposureState(): boolean {
    return this.hasFieldValue('exposureState');
  }

  /** The element carrying the id and extensions of `exposureState`. Created when absent. */
  getExposureStateElement(): Element {
    if (this._exposureState === undefined) {
      this._exposureState = new Element();
    }
    return this._exposureState;
  }

  setExposureStateElement(exposureStateElement: Element | undefined): this {
    this._exposureState = exposureStateElement;
    return this;
  }

  /** Variant exposure states (0..1) Created when absent. */
  getVariantState(): CodeableConcept {
    if (this.variantState === undefined) {
      this.variantState = new CodeableConcept();
    }
    return this.variantState;
  }

  setVariantState(variantState: CodeableConcept | undefined): this {
    return this.setFieldValue('variantState', variantState);
  }

  hasVariantState(): boolean {
    return this.hasFieldValue('variantState');
  }

  /** Risk evidence synthesis (1..1) Created when absent. */
  getRiskEvidenceSynthesis(): Reference {
    if (this.riskEvidenceSynthesis === undefined) {
      this.riskEvidenceSynthesis = new Reference();
    }
    return this.riskEvidenceSynthesis;
  }

  setRiskEvidenceSynthesis(riskEvidenceSynthesis: Reference | undefined): this {
    return this.setFieldValue('riskEvidenceSynthesis', riskEvidenceSynthesis);
  }

  hasRiskEvidenceSynthesis(): boolean {
    return this.hasFieldValue('riskEvidenceSynthesis');
  }
}

modelTypeRegistry.register(
  'EffectEvidenceSynthesisResultsByExposure',
  EffectEvidenceSynthesisResultsByExposure,
  false
);

/**
 * What was the estimated effect
 */
export class EffectEvidenceSynthesisEffectEstimate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'variantState',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'variantState', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'decimal' }],
    },
    {
      elementName: 'unitOfMeasure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitOfMeasure', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'precisionEstimate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'precisionEstimate',
          typeCode: 'EffectEvidenceSynthesisEffectEstimatePrecisionEstimate',
        },
      ],
    },
  ];

  /** Description of effect estimate (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Type of efffect estimate (0..1) */
  type?: CodeableConcept;

  /** Variant exposure states (0..1) */
  variantState?: CodeableConcept;

  /** Point estimate (0..1) */
  value?: number;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** What unit is the outcome described in? (0..1) */
  unitOfMeasure?: CodeableConcept;

  /** How precise the estimate is (0..*) */
  precisionEstimate?: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[];

  override fhirType(): string {
    return 'EffectEvidenceSynthesis.effectEstimate';
  }

  /** FHIR JSON for this EffectEvidenceSynthesisEffectEstimate, typed as the plain `EffectEvidenceSynthesisEffectEstimate` data type. */
  override toJSON(): plainTypes.EffectEvidenceSynthesisEffectEstimate {
    return this.serialize() as plainTypes.EffectEvidenceSynthesisEffectEstimate;
  }

  /** Description of effect estimate (0..1) */
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

  /** Type of efffect estimate (0..1) Created when absent. */
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

  /** Variant exposure states (0..1) Created when absent. */
  getVariantState(): CodeableConcept {
    if (this.variantState === undefined) {
      this.variantState = new CodeableConcept();
    }
    return this.variantState;
  }

  setVariantState(variantState: CodeableConcept | undefined): this {
    return this.setFieldValue('variantState', variantState);
  }

  hasVariantState(): boolean {
    return this.hasFieldValue('variantState');
  }

  /** Point estimate (0..1) */
  getValue(): number | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setValue(value: number | undefined): this {
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

  /** What unit is the outcome described in? (0..1) Created when absent. */
  getUnitOfMeasure(): CodeableConcept {
    if (this.unitOfMeasure === undefined) {
      this.unitOfMeasure = new CodeableConcept();
    }
    return this.unitOfMeasure;
  }

  setUnitOfMeasure(unitOfMeasure: CodeableConcept | undefined): this {
    return this.setFieldValue('unitOfMeasure', unitOfMeasure);
  }

  hasUnitOfMeasure(): boolean {
    return this.hasFieldValue('unitOfMeasure');
  }

  /** How precise the estimate is (0..*) Never undefined; an empty list is created when absent. */
  getPrecisionEstimate(): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[] {
    if (this.precisionEstimate === undefined) {
      this.precisionEstimate = [];
    }
    return this.precisionEstimate;
  }

  setPrecisionEstimate(
    precisionEstimate: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[] | undefined
  ): this {
    return this.setFieldValue('precisionEstimate', precisionEstimate);
  }

  hasPrecisionEstimate(): boolean {
    return this.hasFieldValue('precisionEstimate');
  }

  /** Appends a new, empty EffectEvidenceSynthesisEffectEstimatePrecisionEstimate to `precisionEstimate` and returns it so it can be filled in. */
  addPrecisionEstimate(): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate;
  /** Appends the given EffectEvidenceSynthesisEffectEstimatePrecisionEstimate to `precisionEstimate` and returns this object for chaining. */
  addPrecisionEstimate(
    effectEvidenceSynthesisEffectEstimatePrecisionEstimate: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate
  ): this;
  addPrecisionEstimate(
    effectEvidenceSynthesisEffectEstimatePrecisionEstimate?: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate
  ): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate | this {
    if (effectEvidenceSynthesisEffectEstimatePrecisionEstimate !== undefined) {
      return this.addFieldValue(
        'precisionEstimate',
        effectEvidenceSynthesisEffectEstimatePrecisionEstimate
      );
    }
    const createdEffectEvidenceSynthesisEffectEstimatePrecisionEstimate =
      new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate();
    this.addFieldValue(
      'precisionEstimate',
      createdEffectEvidenceSynthesisEffectEstimatePrecisionEstimate
    );
    return createdEffectEvidenceSynthesisEffectEstimatePrecisionEstimate;
  }

  /** The first EffectEvidenceSynthesisEffectEstimatePrecisionEstimate of `precisionEstimate`. One is added when the list is empty. */
  getPrecisionEstimateFirstRep(): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    const firstEffectEvidenceSynthesisEffectEstimatePrecisionEstimate =
      this.getPrecisionEstimate()[0];
    return firstEffectEvidenceSynthesisEffectEstimatePrecisionEstimate === undefined
      ? this.addPrecisionEstimate()
      : firstEffectEvidenceSynthesisEffectEstimatePrecisionEstimate;
  }
}

modelTypeRegistry.register(
  'EffectEvidenceSynthesisEffectEstimate',
  EffectEvidenceSynthesisEffectEstimate,
  false
);

/**
 * How precise the estimate is
 */
export class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'level',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'level', typeCode: 'decimal' }],
    },
    {
      elementName: 'from',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'from', typeCode: 'decimal' }],
    },
    {
      elementName: 'to',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'to', typeCode: 'decimal' }],
    },
  ];

  /** Type of precision estimate (0..1) */
  type?: CodeableConcept;

  /** Level of confidence interval (0..1) */
  level?: number;
  /** Id and extensions of the primitive `level`. */
  _level?: Element;

  /** Lower bound (0..1) */
  from?: number;
  /** Id and extensions of the primitive `from`. */
  _from?: Element;

  /** Upper bound (0..1) */
  to?: number;
  /** Id and extensions of the primitive `to`. */
  _to?: Element;

  override fhirType(): string {
    return 'EffectEvidenceSynthesis.effectEstimate.precisionEstimate';
  }

  /** FHIR JSON for this EffectEvidenceSynthesisEffectEstimatePrecisionEstimate, typed as the plain `EffectEvidenceSynthesisPrecisionEstimate` data type. */
  override toJSON(): plainTypes.EffectEvidenceSynthesisPrecisionEstimate {
    return this.serialize() as plainTypes.EffectEvidenceSynthesisPrecisionEstimate;
  }

  /** Type of precision estimate (0..1) Created when absent. */
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

  /** Level of confidence interval (0..1) */
  getLevel(): number | undefined {
    return this.level;
  }

  /** Sets `level`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setLevel(level: number | undefined): this {
    return this.setFieldValue('level', level);
  }

  hasLevel(): boolean {
    return this.hasFieldValue('level');
  }

  /** The element carrying the id and extensions of `level`. Created when absent. */
  getLevelElement(): Element {
    if (this._level === undefined) {
      this._level = new Element();
    }
    return this._level;
  }

  setLevelElement(levelElement: Element | undefined): this {
    this._level = levelElement;
    return this;
  }

  /** Lower bound (0..1) */
  getFrom(): number | undefined {
    return this.from;
  }

  /** Sets `from`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFrom(from: number | undefined): this {
    return this.setFieldValue('from', from);
  }

  hasFrom(): boolean {
    return this.hasFieldValue('from');
  }

  /** The element carrying the id and extensions of `from`. Created when absent. */
  getFromElement(): Element {
    if (this._from === undefined) {
      this._from = new Element();
    }
    return this._from;
  }

  setFromElement(fromElement: Element | undefined): this {
    this._from = fromElement;
    return this;
  }

  /** Upper bound (0..1) */
  getTo(): number | undefined {
    return this.to;
  }

  /** Sets `to`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setTo(to: number | undefined): this {
    return this.setFieldValue('to', to);
  }

  hasTo(): boolean {
    return this.hasFieldValue('to');
  }

  /** The element carrying the id and extensions of `to`. Created when absent. */
  getToElement(): Element {
    if (this._to === undefined) {
      this._to = new Element();
    }
    return this._to;
  }

  setToElement(toElement: Element | undefined): this {
    this._to = toElement;
    return this;
  }
}

modelTypeRegistry.register(
  'EffectEvidenceSynthesisEffectEstimatePrecisionEstimate',
  EffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
  false
);

/**
 * How certain is the effect
 */
export class EffectEvidenceSynthesisCertainty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'rating',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rating', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'certaintySubcomponent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'certaintySubcomponent',
          typeCode: 'EffectEvidenceSynthesisCertaintyCertaintySubcomponent',
        },
      ],
    },
  ];

  /** Certainty rating (0..*) */
  rating?: CodeableConcept[];

  /** Used for footnotes or explanatory notes (0..*) */
  note?: Annotation[];

  /** A component that contributes to the overall certainty (0..*) */
  certaintySubcomponent?: EffectEvidenceSynthesisCertaintyCertaintySubcomponent[];

  override fhirType(): string {
    return 'EffectEvidenceSynthesis.certainty';
  }

  /** FHIR JSON for this EffectEvidenceSynthesisCertainty, typed as the plain `EffectEvidenceSynthesisCertainty` data type. */
  override toJSON(): plainTypes.EffectEvidenceSynthesisCertainty {
    return this.serialize() as plainTypes.EffectEvidenceSynthesisCertainty;
  }

  /** Certainty rating (0..*) Never undefined; an empty list is created when absent. */
  getRating(): CodeableConcept[] {
    if (this.rating === undefined) {
      this.rating = [];
    }
    return this.rating;
  }

  setRating(rating: CodeableConcept[] | undefined): this {
    return this.setFieldValue('rating', rating);
  }

  hasRating(): boolean {
    return this.hasFieldValue('rating');
  }

  /** Appends a new, empty CodeableConcept to `rating` and returns it so it can be filled in. */
  addRating(): CodeableConcept;
  /** Appends the given CodeableConcept to `rating` and returns this object for chaining. */
  addRating(codeableConcept: CodeableConcept): this;
  addRating(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('rating', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('rating', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `rating`. One is added when the list is empty. */
  getRatingFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRating()[0];
    return firstCodeableConcept === undefined ? this.addRating() : firstCodeableConcept;
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

  /** A component that contributes to the overall certainty (0..*) Never undefined; an empty list is created when absent. */
  getCertaintySubcomponent(): EffectEvidenceSynthesisCertaintyCertaintySubcomponent[] {
    if (this.certaintySubcomponent === undefined) {
      this.certaintySubcomponent = [];
    }
    return this.certaintySubcomponent;
  }

  setCertaintySubcomponent(
    certaintySubcomponent: EffectEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined
  ): this {
    return this.setFieldValue('certaintySubcomponent', certaintySubcomponent);
  }

  hasCertaintySubcomponent(): boolean {
    return this.hasFieldValue('certaintySubcomponent');
  }

  /** Appends a new, empty EffectEvidenceSynthesisCertaintyCertaintySubcomponent to `certaintySubcomponent` and returns it so it can be filled in. */
  addCertaintySubcomponent(): EffectEvidenceSynthesisCertaintyCertaintySubcomponent;
  /** Appends the given EffectEvidenceSynthesisCertaintyCertaintySubcomponent to `certaintySubcomponent` and returns this object for chaining. */
  addCertaintySubcomponent(
    effectEvidenceSynthesisCertaintyCertaintySubcomponent: EffectEvidenceSynthesisCertaintyCertaintySubcomponent
  ): this;
  addCertaintySubcomponent(
    effectEvidenceSynthesisCertaintyCertaintySubcomponent?: EffectEvidenceSynthesisCertaintyCertaintySubcomponent
  ): EffectEvidenceSynthesisCertaintyCertaintySubcomponent | this {
    if (effectEvidenceSynthesisCertaintyCertaintySubcomponent !== undefined) {
      return this.addFieldValue(
        'certaintySubcomponent',
        effectEvidenceSynthesisCertaintyCertaintySubcomponent
      );
    }
    const createdEffectEvidenceSynthesisCertaintyCertaintySubcomponent =
      new EffectEvidenceSynthesisCertaintyCertaintySubcomponent();
    this.addFieldValue(
      'certaintySubcomponent',
      createdEffectEvidenceSynthesisCertaintyCertaintySubcomponent
    );
    return createdEffectEvidenceSynthesisCertaintyCertaintySubcomponent;
  }

  /** The first EffectEvidenceSynthesisCertaintyCertaintySubcomponent of `certaintySubcomponent`. One is added when the list is empty. */
  getCertaintySubcomponentFirstRep(): EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    const firstEffectEvidenceSynthesisCertaintyCertaintySubcomponent =
      this.getCertaintySubcomponent()[0];
    return firstEffectEvidenceSynthesisCertaintyCertaintySubcomponent === undefined
      ? this.addCertaintySubcomponent()
      : firstEffectEvidenceSynthesisCertaintyCertaintySubcomponent;
  }
}

modelTypeRegistry.register(
  'EffectEvidenceSynthesisCertainty',
  EffectEvidenceSynthesisCertainty,
  false
);

/**
 * A component that contributes to the overall certainty
 */
export class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'rating',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rating', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  /** Type of subcomponent of certainty rating (0..1) */
  type?: CodeableConcept;

  /** Subcomponent certainty rating (0..*) */
  rating?: CodeableConcept[];

  /** Used for footnotes or explanatory notes (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'EffectEvidenceSynthesis.certainty.certaintySubcomponent';
  }

  /** FHIR JSON for this EffectEvidenceSynthesisCertaintyCertaintySubcomponent, typed as the plain `EffectEvidenceSynthesisCertaintySubcomponent` data type. */
  override toJSON(): plainTypes.EffectEvidenceSynthesisCertaintySubcomponent {
    return this.serialize() as plainTypes.EffectEvidenceSynthesisCertaintySubcomponent;
  }

  /** Type of subcomponent of certainty rating (0..1) Created when absent. */
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

  /** Subcomponent certainty rating (0..*) Never undefined; an empty list is created when absent. */
  getRating(): CodeableConcept[] {
    if (this.rating === undefined) {
      this.rating = [];
    }
    return this.rating;
  }

  setRating(rating: CodeableConcept[] | undefined): this {
    return this.setFieldValue('rating', rating);
  }

  hasRating(): boolean {
    return this.hasFieldValue('rating');
  }

  /** Appends a new, empty CodeableConcept to `rating` and returns it so it can be filled in. */
  addRating(): CodeableConcept;
  /** Appends the given CodeableConcept to `rating` and returns this object for chaining. */
  addRating(codeableConcept: CodeableConcept): this;
  addRating(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('rating', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('rating', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `rating`. One is added when the list is empty. */
  getRatingFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRating()[0];
    return firstCodeableConcept === undefined ? this.addRating() : firstCodeableConcept;
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
}

modelTypeRegistry.register(
  'EffectEvidenceSynthesisCertaintyCertaintySubcomponent',
  EffectEvidenceSynthesisCertaintyCertaintySubcomponent,
  false
);
