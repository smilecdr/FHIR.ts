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
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
 */
export class Evidence extends DomainResource {
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
      elementName: 'versionAlgorithm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'versionAlgorithmString', typeCode: 'string' },
        { jsonKey: 'versionAlgorithmCoding', typeCode: 'Coding' },
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
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
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
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PublicationStatus },
      ],
    },
    {
      elementName: 'experimental',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'experimental', typeCode: 'boolean' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
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
      elementName: 'useContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'useContext', typeCode: 'UsageContext' }],
    },
    {
      elementName: 'purpose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'purpose', typeCode: 'markdown' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
    {
      elementName: 'copyrightLabel',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyrightLabel', typeCode: 'string' }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'assertion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assertion', typeCode: 'markdown' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'variableDefinition',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'variableDefinition', typeCode: 'EvidenceVariableDefinition' }],
    },
    {
      elementName: 'synthesisType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'synthesisType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'studyDesign',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'studyDesign', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'statistic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statistic', typeCode: 'EvidenceStatistic' }],
    },
    {
      elementName: 'certainty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'certainty', typeCode: 'EvidenceCertainty' }],
    },
  ];

  readonly resourceType = 'Evidence';

  /** Canonical identifier for this evidence, represented as a globally unique URI (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the summary (0..*) */
  identifier?: Identifier[];

  /** Business version of this summary (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this summary (machine friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this summary (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Citation for this evidence (0..1) */
  citeAsReference?: Reference;
  /** Citation for this evidence (0..1) */
  citeAsMarkdown?: string;
  /** Id and extensions of the primitive `citeAsMarkdown`. */
  _citeAsMarkdown?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** When the summary was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the summary was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

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

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Why this Evidence is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;

  /** Link or citation to artifact associated with the summary (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Description of the particular summary (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Declarative description of the Evidence (0..1) */
  assertion?: string;
  /** Id and extensions of the primitive `assertion`. */
  _assertion?: Element;

  /** Footnotes and/or explanatory notes (0..*) */
  note?: Annotation[];

  /** Evidence variable such as population, exposure, or outcome (1..*) */
  variableDefinition?: EvidenceVariableDefinition[];

  /** The method to combine studies (0..1) */
  synthesisType?: CodeableConcept;

  /** The design of the study that produced this evidence (0..*) */
  studyDesign?: CodeableConcept[];

  /** Values and parameters for a single statistic (0..*) */
  statistic?: EvidenceStatistic[];

  /** Certainty or quality of the evidence (0..*) */
  certainty?: EvidenceCertainty[];

  override fhirType(): string {
    return 'Evidence';
  }

  /** FHIR JSON for this Evidence, typed as the plain `Evidence` data type. */
  override toJSON(): plainTypes.Evidence {
    return this.serialize() as plainTypes.Evidence;
  }

  /** Canonical identifier for this evidence, represented as a globally unique URI (0..1) */
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

  /** Additional identifier for the summary (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of this summary (0..1) */
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

  /** How to compare versions (0..1) Whichever type of `versionAlgorithm[x]` is set. */
  getVersionAlgorithm(): string | Coding | undefined {
    return this.getChoiceValue<string | Coding>('versionAlgorithm');
  }

  /** True when any type of `versionAlgorithm[x]` is set. */
  hasVersionAlgorithm(): boolean {
    return this.hasChoiceValue('versionAlgorithm');
  }

  getVersionAlgorithmString(): string | undefined {
    return this.versionAlgorithmString;
  }

  /** Sets `versionAlgorithm[x]` as string and clears every other type of it. */
  setVersionAlgorithmString(versionAlgorithmString: string | undefined): this {
    return this.setFieldValue('versionAlgorithmString', versionAlgorithmString);
  }

  hasVersionAlgorithmString(): boolean {
    return this.hasFieldValue('versionAlgorithmString');
  }

  getVersionAlgorithmCoding(): Coding | undefined {
    return this.versionAlgorithmCoding;
  }

  /** Sets `versionAlgorithm[x]` as Coding and clears every other type of it. */
  setVersionAlgorithmCoding(versionAlgorithmCoding: Coding | undefined): this {
    return this.setFieldValue('versionAlgorithmCoding', versionAlgorithmCoding);
  }

  hasVersionAlgorithmCoding(): boolean {
    return this.hasFieldValue('versionAlgorithmCoding');
  }

  /** Name for this summary (machine friendly) (0..1) */
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

  /** Name for this summary (human friendly) (0..1) */
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

  /** Citation for this evidence (0..1) Whichever type of `citeAs[x]` is set. */
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

  /** For testing purposes, not real usage (0..1) */
  getExperimental(): boolean | undefined {
    return this.experimental;
  }

  /** Sets `experimental`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExperimental(experimental: boolean | undefined): this {
    return this.setFieldValue('experimental', experimental);
  }

  hasExperimental(): boolean {
    return this.hasFieldValue('experimental');
  }

  /** The element carrying the id and extensions of `experimental`. Created when absent. */
  getExperimentalElement(): Element {
    if (this._experimental === undefined) {
      this._experimental = new Element();
    }
    return this._experimental;
  }

  setExperimentalElement(experimentalElement: Element | undefined): this {
    this._experimental = experimentalElement;
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

  /** When the summary was approved by publisher (0..1) */
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

  /** When the summary was last reviewed by the publisher (0..1) */
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

  /** Why this Evidence is defined (0..1) */
  getPurpose(): string | undefined {
    return this.purpose;
  }

  /** Sets `purpose`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setPurpose(purpose: string | undefined): this {
    return this.setFieldValue('purpose', purpose);
  }

  hasPurpose(): boolean {
    return this.hasFieldValue('purpose');
  }

  /** The element carrying the id and extensions of `purpose`. Created when absent. */
  getPurposeElement(): Element {
    if (this._purpose === undefined) {
      this._purpose = new Element();
    }
    return this._purpose;
  }

  setPurposeElement(purposeElement: Element | undefined): this {
    this._purpose = purposeElement;
    return this;
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

  /** Copyright holder and year(s) (0..1) */
  getCopyrightLabel(): string | undefined {
    return this.copyrightLabel;
  }

  /** Sets `copyrightLabel`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCopyrightLabel(copyrightLabel: string | undefined): this {
    return this.setFieldValue('copyrightLabel', copyrightLabel);
  }

  hasCopyrightLabel(): boolean {
    return this.hasFieldValue('copyrightLabel');
  }

  /** The element carrying the id and extensions of `copyrightLabel`. Created when absent. */
  getCopyrightLabelElement(): Element {
    if (this._copyrightLabel === undefined) {
      this._copyrightLabel = new Element();
    }
    return this._copyrightLabel;
  }

  setCopyrightLabelElement(copyrightLabelElement: Element | undefined): this {
    this._copyrightLabel = copyrightLabelElement;
    return this;
  }

  /** Link or citation to artifact associated with the summary (0..*) Never undefined; an empty list is created when absent. */
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

  /** Description of the particular summary (0..1) */
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

  /** Declarative description of the Evidence (0..1) */
  getAssertion(): string | undefined {
    return this.assertion;
  }

  /** Sets `assertion`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setAssertion(assertion: string | undefined): this {
    return this.setFieldValue('assertion', assertion);
  }

  hasAssertion(): boolean {
    return this.hasFieldValue('assertion');
  }

  /** The element carrying the id and extensions of `assertion`. Created when absent. */
  getAssertionElement(): Element {
    if (this._assertion === undefined) {
      this._assertion = new Element();
    }
    return this._assertion;
  }

  setAssertionElement(assertionElement: Element | undefined): this {
    this._assertion = assertionElement;
    return this;
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

  /** Evidence variable such as population, exposure, or outcome (1..*) Never undefined; an empty list is created when absent. */
  getVariableDefinition(): EvidenceVariableDefinition[] {
    if (this.variableDefinition === undefined) {
      this.variableDefinition = [];
    }
    return this.variableDefinition;
  }

  setVariableDefinition(variableDefinition: EvidenceVariableDefinition[] | undefined): this {
    return this.setFieldValue('variableDefinition', variableDefinition);
  }

  hasVariableDefinition(): boolean {
    return this.hasFieldValue('variableDefinition');
  }

  /** Appends a new, empty EvidenceVariableDefinition to `variableDefinition` and returns it so it can be filled in. */
  addVariableDefinition(): EvidenceVariableDefinition;
  /** Appends the given EvidenceVariableDefinition to `variableDefinition` and returns this object for chaining. */
  addVariableDefinition(evidenceVariableDefinition: EvidenceVariableDefinition): this;
  addVariableDefinition(
    evidenceVariableDefinition?: EvidenceVariableDefinition
  ): EvidenceVariableDefinition | this {
    if (evidenceVariableDefinition !== undefined) {
      return this.addFieldValue('variableDefinition', evidenceVariableDefinition);
    }
    const createdEvidenceVariableDefinition = new EvidenceVariableDefinition();
    this.addFieldValue('variableDefinition', createdEvidenceVariableDefinition);
    return createdEvidenceVariableDefinition;
  }

  /** The first EvidenceVariableDefinition of `variableDefinition`. One is added when the list is empty. */
  getVariableDefinitionFirstRep(): EvidenceVariableDefinition {
    const firstEvidenceVariableDefinition = this.getVariableDefinition()[0];
    return firstEvidenceVariableDefinition === undefined
      ? this.addVariableDefinition()
      : firstEvidenceVariableDefinition;
  }

  /** The method to combine studies (0..1) Created when absent. */
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

  /** The design of the study that produced this evidence (0..*) Never undefined; an empty list is created when absent. */
  getStudyDesign(): CodeableConcept[] {
    if (this.studyDesign === undefined) {
      this.studyDesign = [];
    }
    return this.studyDesign;
  }

  setStudyDesign(studyDesign: CodeableConcept[] | undefined): this {
    return this.setFieldValue('studyDesign', studyDesign);
  }

  hasStudyDesign(): boolean {
    return this.hasFieldValue('studyDesign');
  }

  /** Appends a new, empty CodeableConcept to `studyDesign` and returns it so it can be filled in. */
  addStudyDesign(): CodeableConcept;
  /** Appends the given CodeableConcept to `studyDesign` and returns this object for chaining. */
  addStudyDesign(codeableConcept: CodeableConcept): this;
  addStudyDesign(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('studyDesign', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('studyDesign', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `studyDesign`. One is added when the list is empty. */
  getStudyDesignFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getStudyDesign()[0];
    return firstCodeableConcept === undefined ? this.addStudyDesign() : firstCodeableConcept;
  }

  /** Values and parameters for a single statistic (0..*) Never undefined; an empty list is created when absent. */
  getStatistic(): EvidenceStatistic[] {
    if (this.statistic === undefined) {
      this.statistic = [];
    }
    return this.statistic;
  }

  setStatistic(statistic: EvidenceStatistic[] | undefined): this {
    return this.setFieldValue('statistic', statistic);
  }

  hasStatistic(): boolean {
    return this.hasFieldValue('statistic');
  }

  /** Appends a new, empty EvidenceStatistic to `statistic` and returns it so it can be filled in. */
  addStatistic(): EvidenceStatistic;
  /** Appends the given EvidenceStatistic to `statistic` and returns this object for chaining. */
  addStatistic(evidenceStatistic: EvidenceStatistic): this;
  addStatistic(evidenceStatistic?: EvidenceStatistic): EvidenceStatistic | this {
    if (evidenceStatistic !== undefined) {
      return this.addFieldValue('statistic', evidenceStatistic);
    }
    const createdEvidenceStatistic = new EvidenceStatistic();
    this.addFieldValue('statistic', createdEvidenceStatistic);
    return createdEvidenceStatistic;
  }

  /** The first EvidenceStatistic of `statistic`. One is added when the list is empty. */
  getStatisticFirstRep(): EvidenceStatistic {
    const firstEvidenceStatistic = this.getStatistic()[0];
    return firstEvidenceStatistic === undefined ? this.addStatistic() : firstEvidenceStatistic;
  }

  /** Certainty or quality of the evidence (0..*) Never undefined; an empty list is created when absent. */
  getCertainty(): EvidenceCertainty[] {
    if (this.certainty === undefined) {
      this.certainty = [];
    }
    return this.certainty;
  }

  setCertainty(certainty: EvidenceCertainty[] | undefined): this {
    return this.setFieldValue('certainty', certainty);
  }

  hasCertainty(): boolean {
    return this.hasFieldValue('certainty');
  }

  /** Appends a new, empty EvidenceCertainty to `certainty` and returns it so it can be filled in. */
  addCertainty(): EvidenceCertainty;
  /** Appends the given EvidenceCertainty to `certainty` and returns this object for chaining. */
  addCertainty(evidenceCertainty: EvidenceCertainty): this;
  addCertainty(evidenceCertainty?: EvidenceCertainty): EvidenceCertainty | this {
    if (evidenceCertainty !== undefined) {
      return this.addFieldValue('certainty', evidenceCertainty);
    }
    const createdEvidenceCertainty = new EvidenceCertainty();
    this.addFieldValue('certainty', createdEvidenceCertainty);
    return createdEvidenceCertainty;
  }

  /** The first EvidenceCertainty of `certainty`. One is added when the list is empty. */
  getCertaintyFirstRep(): EvidenceCertainty {
    const firstEvidenceCertainty = this.getCertainty()[0];
    return firstEvidenceCertainty === undefined ? this.addCertainty() : firstEvidenceCertainty;
  }
}

modelTypeRegistry.register('Evidence', Evidence, true);

/** True when the value is a Evidence model instance. */
export function isEvidence(candidate: unknown): candidate is Evidence {
  return candidate instanceof Evidence;
}

/**
 * Evidence variable such as population, exposure, or outcome
 */
export class EvidenceVariableDefinition extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'variableRole',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'variableRole', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'observed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'observed',
          typeCode: 'Reference',
          targetResourceTypes: ['EvidenceVariable', 'Group'],
        },
      ],
    },
    {
      elementName: 'intended',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'intended',
          typeCode: 'Reference',
          targetResourceTypes: ['EvidenceVariable', 'Group'],
        },
      ],
    },
    {
      elementName: 'directnessMatch',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'directnessMatch', typeCode: 'CodeableConcept' }],
    },
  ];

  /** A text description or summary of the variable (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Footnotes and/or explanatory notes (0..*) */
  note?: Annotation[];

  /** population | subpopulation | exposure | referenceExposure | measuredVariable | confounder (1..1) */
  variableRole?: CodeableConcept;

  /** Definition of the actual variable related to the statistic(s) (0..1) */
  observed?: Reference;

  /** Definition of the intended variable related to the Evidence (0..1) */
  intended?: Reference;

  /** low | moderate | high | exact (0..1) */
  directnessMatch?: CodeableConcept;

  override fhirType(): string {
    return 'Evidence.variableDefinition';
  }

  /** FHIR JSON for this EvidenceVariableDefinition, typed as the plain `EvidenceVariableDefinition` data type. */
  override toJSON(): plainTypes.EvidenceVariableDefinition {
    return this.serialize() as plainTypes.EvidenceVariableDefinition;
  }

  /** A text description or summary of the variable (0..1) */
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

  /** population | subpopulation | exposure | referenceExposure | measuredVariable | confounder (1..1) Created when absent. */
  getVariableRole(): CodeableConcept {
    if (this.variableRole === undefined) {
      this.variableRole = new CodeableConcept();
    }
    return this.variableRole;
  }

  setVariableRole(variableRole: CodeableConcept | undefined): this {
    return this.setFieldValue('variableRole', variableRole);
  }

  hasVariableRole(): boolean {
    return this.hasFieldValue('variableRole');
  }

  /** Definition of the actual variable related to the statistic(s) (0..1) Created when absent. */
  getObserved(): Reference {
    if (this.observed === undefined) {
      this.observed = new Reference();
    }
    return this.observed;
  }

  setObserved(observed: Reference | undefined): this {
    return this.setFieldValue('observed', observed);
  }

  hasObserved(): boolean {
    return this.hasFieldValue('observed');
  }

  /** Definition of the intended variable related to the Evidence (0..1) Created when absent. */
  getIntended(): Reference {
    if (this.intended === undefined) {
      this.intended = new Reference();
    }
    return this.intended;
  }

  setIntended(intended: Reference | undefined): this {
    return this.setFieldValue('intended', intended);
  }

  hasIntended(): boolean {
    return this.hasFieldValue('intended');
  }

  /** low | moderate | high | exact (0..1) Created when absent. */
  getDirectnessMatch(): CodeableConcept {
    if (this.directnessMatch === undefined) {
      this.directnessMatch = new CodeableConcept();
    }
    return this.directnessMatch;
  }

  setDirectnessMatch(directnessMatch: CodeableConcept | undefined): this {
    return this.setFieldValue('directnessMatch', directnessMatch);
  }

  hasDirectnessMatch(): boolean {
    return this.hasFieldValue('directnessMatch');
  }
}

modelTypeRegistry.register('EvidenceVariableDefinition', EvidenceVariableDefinition, false);

/**
 * Values and parameters for a single statistic
 */
export class EvidenceStatistic extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'statisticType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statisticType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'numberOfEvents',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfEvents', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'numberAffected',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberAffected', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'sampleSize',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sampleSize', typeCode: 'EvidenceStatisticSampleSize' }],
    },
    {
      elementName: 'attributeEstimate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'attributeEstimate', typeCode: 'EvidenceStatisticAttributeEstimate' }],
    },
    {
      elementName: 'modelCharacteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'modelCharacteristic', typeCode: 'EvidenceStatisticModelCharacteristic' }],
    },
  ];

  /** Description of content (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Footnotes and/or explanatory notes (0..*) */
  note?: Annotation[];

  /** Type of statistic, e.g., relative risk (0..1) */
  statisticType?: CodeableConcept;

  /** Associated category for categorical variable (0..1) */
  category?: CodeableConcept;

  /** Statistic value (0..1) */
  quantity?: Quantity;

  /** The number of events associated with the statistic (0..1) */
  numberOfEvents?: number;
  /** Id and extensions of the primitive `numberOfEvents`. */
  _numberOfEvents?: Element;

  /** The number of participants affected (0..1) */
  numberAffected?: number;
  /** Id and extensions of the primitive `numberAffected`. */
  _numberAffected?: Element;

  /** Number of samples in the statistic (0..1) */
  sampleSize?: EvidenceStatisticSampleSize;

  /** An attribute of the Statistic (0..*) */
  attributeEstimate?: EvidenceStatisticAttributeEstimate[];

  /** An aspect of the statistical model (0..*) */
  modelCharacteristic?: EvidenceStatisticModelCharacteristic[];

  override fhirType(): string {
    return 'Evidence.statistic';
  }

  /** FHIR JSON for this EvidenceStatistic, typed as the plain `EvidenceStatistic` data type. */
  override toJSON(): plainTypes.EvidenceStatistic {
    return this.serialize() as plainTypes.EvidenceStatistic;
  }

  /** Description of content (0..1) */
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

  /** Type of statistic, e.g., relative risk (0..1) Created when absent. */
  getStatisticType(): CodeableConcept {
    if (this.statisticType === undefined) {
      this.statisticType = new CodeableConcept();
    }
    return this.statisticType;
  }

  setStatisticType(statisticType: CodeableConcept | undefined): this {
    return this.setFieldValue('statisticType', statisticType);
  }

  hasStatisticType(): boolean {
    return this.hasFieldValue('statisticType');
  }

  /** Associated category for categorical variable (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Statistic value (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** The number of events associated with the statistic (0..1) */
  getNumberOfEvents(): number | undefined {
    return this.numberOfEvents;
  }

  /** Sets `numberOfEvents`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setNumberOfEvents(numberOfEvents: number | undefined): this {
    return this.setFieldValue('numberOfEvents', numberOfEvents);
  }

  hasNumberOfEvents(): boolean {
    return this.hasFieldValue('numberOfEvents');
  }

  /** The element carrying the id and extensions of `numberOfEvents`. Created when absent. */
  getNumberOfEventsElement(): Element {
    if (this._numberOfEvents === undefined) {
      this._numberOfEvents = new Element();
    }
    return this._numberOfEvents;
  }

  setNumberOfEventsElement(numberOfEventsElement: Element | undefined): this {
    this._numberOfEvents = numberOfEventsElement;
    return this;
  }

  /** The number of participants affected (0..1) */
  getNumberAffected(): number | undefined {
    return this.numberAffected;
  }

  /** Sets `numberAffected`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setNumberAffected(numberAffected: number | undefined): this {
    return this.setFieldValue('numberAffected', numberAffected);
  }

  hasNumberAffected(): boolean {
    return this.hasFieldValue('numberAffected');
  }

  /** The element carrying the id and extensions of `numberAffected`. Created when absent. */
  getNumberAffectedElement(): Element {
    if (this._numberAffected === undefined) {
      this._numberAffected = new Element();
    }
    return this._numberAffected;
  }

  setNumberAffectedElement(numberAffectedElement: Element | undefined): this {
    this._numberAffected = numberAffectedElement;
    return this;
  }

  /** Number of samples in the statistic (0..1) Created when absent. */
  getSampleSize(): EvidenceStatisticSampleSize {
    if (this.sampleSize === undefined) {
      this.sampleSize = new EvidenceStatisticSampleSize();
    }
    return this.sampleSize;
  }

  setSampleSize(sampleSize: EvidenceStatisticSampleSize | undefined): this {
    return this.setFieldValue('sampleSize', sampleSize);
  }

  hasSampleSize(): boolean {
    return this.hasFieldValue('sampleSize');
  }

  /** An attribute of the Statistic (0..*) Never undefined; an empty list is created when absent. */
  getAttributeEstimate(): EvidenceStatisticAttributeEstimate[] {
    if (this.attributeEstimate === undefined) {
      this.attributeEstimate = [];
    }
    return this.attributeEstimate;
  }

  setAttributeEstimate(attributeEstimate: EvidenceStatisticAttributeEstimate[] | undefined): this {
    return this.setFieldValue('attributeEstimate', attributeEstimate);
  }

  hasAttributeEstimate(): boolean {
    return this.hasFieldValue('attributeEstimate');
  }

  /** Appends a new, empty EvidenceStatisticAttributeEstimate to `attributeEstimate` and returns it so it can be filled in. */
  addAttributeEstimate(): EvidenceStatisticAttributeEstimate;
  /** Appends the given EvidenceStatisticAttributeEstimate to `attributeEstimate` and returns this object for chaining. */
  addAttributeEstimate(
    evidenceStatisticAttributeEstimate: EvidenceStatisticAttributeEstimate
  ): this;
  addAttributeEstimate(
    evidenceStatisticAttributeEstimate?: EvidenceStatisticAttributeEstimate
  ): EvidenceStatisticAttributeEstimate | this {
    if (evidenceStatisticAttributeEstimate !== undefined) {
      return this.addFieldValue('attributeEstimate', evidenceStatisticAttributeEstimate);
    }
    const createdEvidenceStatisticAttributeEstimate = new EvidenceStatisticAttributeEstimate();
    this.addFieldValue('attributeEstimate', createdEvidenceStatisticAttributeEstimate);
    return createdEvidenceStatisticAttributeEstimate;
  }

  /** The first EvidenceStatisticAttributeEstimate of `attributeEstimate`. One is added when the list is empty. */
  getAttributeEstimateFirstRep(): EvidenceStatisticAttributeEstimate {
    const firstEvidenceStatisticAttributeEstimate = this.getAttributeEstimate()[0];
    return firstEvidenceStatisticAttributeEstimate === undefined
      ? this.addAttributeEstimate()
      : firstEvidenceStatisticAttributeEstimate;
  }

  /** An aspect of the statistical model (0..*) Never undefined; an empty list is created when absent. */
  getModelCharacteristic(): EvidenceStatisticModelCharacteristic[] {
    if (this.modelCharacteristic === undefined) {
      this.modelCharacteristic = [];
    }
    return this.modelCharacteristic;
  }

  setModelCharacteristic(
    modelCharacteristic: EvidenceStatisticModelCharacteristic[] | undefined
  ): this {
    return this.setFieldValue('modelCharacteristic', modelCharacteristic);
  }

  hasModelCharacteristic(): boolean {
    return this.hasFieldValue('modelCharacteristic');
  }

  /** Appends a new, empty EvidenceStatisticModelCharacteristic to `modelCharacteristic` and returns it so it can be filled in. */
  addModelCharacteristic(): EvidenceStatisticModelCharacteristic;
  /** Appends the given EvidenceStatisticModelCharacteristic to `modelCharacteristic` and returns this object for chaining. */
  addModelCharacteristic(
    evidenceStatisticModelCharacteristic: EvidenceStatisticModelCharacteristic
  ): this;
  addModelCharacteristic(
    evidenceStatisticModelCharacteristic?: EvidenceStatisticModelCharacteristic
  ): EvidenceStatisticModelCharacteristic | this {
    if (evidenceStatisticModelCharacteristic !== undefined) {
      return this.addFieldValue('modelCharacteristic', evidenceStatisticModelCharacteristic);
    }
    const createdEvidenceStatisticModelCharacteristic = new EvidenceStatisticModelCharacteristic();
    this.addFieldValue('modelCharacteristic', createdEvidenceStatisticModelCharacteristic);
    return createdEvidenceStatisticModelCharacteristic;
  }

  /** The first EvidenceStatisticModelCharacteristic of `modelCharacteristic`. One is added when the list is empty. */
  getModelCharacteristicFirstRep(): EvidenceStatisticModelCharacteristic {
    const firstEvidenceStatisticModelCharacteristic = this.getModelCharacteristic()[0];
    return firstEvidenceStatisticModelCharacteristic === undefined
      ? this.addModelCharacteristic()
      : firstEvidenceStatisticModelCharacteristic;
  }
}

modelTypeRegistry.register('EvidenceStatistic', EvidenceStatistic, false);

/**
 * Number of samples in the statistic
 */
export class EvidenceStatisticSampleSize extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'numberOfStudies',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfStudies', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'numberOfParticipants',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfParticipants', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'knownDataCount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'knownDataCount', typeCode: 'unsignedInt' }],
    },
  ];

  /** Textual description of sample size for statistic (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Footnote or explanatory note about the sample size (0..*) */
  note?: Annotation[];

  /** Number of contributing studies (0..1) */
  numberOfStudies?: number;
  /** Id and extensions of the primitive `numberOfStudies`. */
  _numberOfStudies?: Element;

  /** Cumulative number of participants (0..1) */
  numberOfParticipants?: number;
  /** Id and extensions of the primitive `numberOfParticipants`. */
  _numberOfParticipants?: Element;

  /** Number of participants with known results for measured variables (0..1) */
  knownDataCount?: number;
  /** Id and extensions of the primitive `knownDataCount`. */
  _knownDataCount?: Element;

  override fhirType(): string {
    return 'Evidence.statistic.sampleSize';
  }

  /** FHIR JSON for this EvidenceStatisticSampleSize, typed as the plain `EvidenceSampleSize` data type. */
  override toJSON(): plainTypes.EvidenceSampleSize {
    return this.serialize() as plainTypes.EvidenceSampleSize;
  }

  /** Textual description of sample size for statistic (0..1) */
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

  /** Footnote or explanatory note about the sample size (0..*) Never undefined; an empty list is created when absent. */
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

  /** Number of contributing studies (0..1) */
  getNumberOfStudies(): number | undefined {
    return this.numberOfStudies;
  }

  /** Sets `numberOfStudies`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
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

  /** Cumulative number of participants (0..1) */
  getNumberOfParticipants(): number | undefined {
    return this.numberOfParticipants;
  }

  /** Sets `numberOfParticipants`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
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

  /** Number of participants with known results for measured variables (0..1) */
  getKnownDataCount(): number | undefined {
    return this.knownDataCount;
  }

  /** Sets `knownDataCount`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setKnownDataCount(knownDataCount: number | undefined): this {
    return this.setFieldValue('knownDataCount', knownDataCount);
  }

  hasKnownDataCount(): boolean {
    return this.hasFieldValue('knownDataCount');
  }

  /** The element carrying the id and extensions of `knownDataCount`. Created when absent. */
  getKnownDataCountElement(): Element {
    if (this._knownDataCount === undefined) {
      this._knownDataCount = new Element();
    }
    return this._knownDataCount;
  }

  setKnownDataCountElement(knownDataCountElement: Element | undefined): this {
    this._knownDataCount = knownDataCountElement;
    return this;
  }
}

modelTypeRegistry.register('EvidenceStatisticSampleSize', EvidenceStatisticSampleSize, false);

/**
 * An attribute of the Statistic
 */
export class EvidenceStatisticAttributeEstimate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'level',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'level', typeCode: 'decimal' }],
    },
    {
      elementName: 'range',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'range', typeCode: 'Range' }],
    },
    {
      elementName: 'attributeEstimate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'attributeEstimate', typeCode: 'EvidenceStatisticAttributeEstimate' }],
    },
  ];

  /** Textual description of the attribute estimate (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Footnote or explanatory note about the estimate (0..*) */
  note?: Annotation[];

  /** The type of attribute estimate, e.g., confidence interval or p value (0..1) */
  type?: CodeableConcept;

  /** The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure (0..1) */
  quantity?: Quantity;

  /** Level of confidence interval, e.g., 0.95 for 95% confidence interval (0..1) */
  level?: number;
  /** Id and extensions of the primitive `level`. */
  _level?: Element;

  /** Lower and upper bound values of the attribute estimate (0..1) */
  range?: Range;

  /** A nested attribute estimate; which is the attribute estimate of an attribute estimate (0..*) */
  attributeEstimate?: EvidenceStatisticAttributeEstimate[];

  override fhirType(): string {
    return 'Evidence.statistic.attributeEstimate';
  }

  /** FHIR JSON for this EvidenceStatisticAttributeEstimate, typed as the plain `EvidenceAttributeEstimate` data type. */
  override toJSON(): plainTypes.EvidenceAttributeEstimate {
    return this.serialize() as plainTypes.EvidenceAttributeEstimate;
  }

  /** Textual description of the attribute estimate (0..1) */
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

  /** Footnote or explanatory note about the estimate (0..*) Never undefined; an empty list is created when absent. */
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

  /** The type of attribute estimate, e.g., confidence interval or p value (0..1) Created when absent. */
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

  /** The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Level of confidence interval, e.g., 0.95 for 95% confidence interval (0..1) */
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

  /** Lower and upper bound values of the attribute estimate (0..1) Created when absent. */
  getRange(): Range {
    if (this.range === undefined) {
      this.range = new Range();
    }
    return this.range;
  }

  setRange(range: Range | undefined): this {
    return this.setFieldValue('range', range);
  }

  hasRange(): boolean {
    return this.hasFieldValue('range');
  }

  /** A nested attribute estimate; which is the attribute estimate of an attribute estimate (0..*) Never undefined; an empty list is created when absent. */
  getAttributeEstimate(): EvidenceStatisticAttributeEstimate[] {
    if (this.attributeEstimate === undefined) {
      this.attributeEstimate = [];
    }
    return this.attributeEstimate;
  }

  setAttributeEstimate(attributeEstimate: EvidenceStatisticAttributeEstimate[] | undefined): this {
    return this.setFieldValue('attributeEstimate', attributeEstimate);
  }

  hasAttributeEstimate(): boolean {
    return this.hasFieldValue('attributeEstimate');
  }

  /** Appends a new, empty EvidenceStatisticAttributeEstimate to `attributeEstimate` and returns it so it can be filled in. */
  addAttributeEstimate(): EvidenceStatisticAttributeEstimate;
  /** Appends the given EvidenceStatisticAttributeEstimate to `attributeEstimate` and returns this object for chaining. */
  addAttributeEstimate(
    evidenceStatisticAttributeEstimate: EvidenceStatisticAttributeEstimate
  ): this;
  addAttributeEstimate(
    evidenceStatisticAttributeEstimate?: EvidenceStatisticAttributeEstimate
  ): EvidenceStatisticAttributeEstimate | this {
    if (evidenceStatisticAttributeEstimate !== undefined) {
      return this.addFieldValue('attributeEstimate', evidenceStatisticAttributeEstimate);
    }
    const createdEvidenceStatisticAttributeEstimate = new EvidenceStatisticAttributeEstimate();
    this.addFieldValue('attributeEstimate', createdEvidenceStatisticAttributeEstimate);
    return createdEvidenceStatisticAttributeEstimate;
  }

  /** The first EvidenceStatisticAttributeEstimate of `attributeEstimate`. One is added when the list is empty. */
  getAttributeEstimateFirstRep(): EvidenceStatisticAttributeEstimate {
    const firstEvidenceStatisticAttributeEstimate = this.getAttributeEstimate()[0];
    return firstEvidenceStatisticAttributeEstimate === undefined
      ? this.addAttributeEstimate()
      : firstEvidenceStatisticAttributeEstimate;
  }
}

modelTypeRegistry.register(
  'EvidenceStatisticAttributeEstimate',
  EvidenceStatisticAttributeEstimate,
  false
);

/**
 * An aspect of the statistical model
 */
export class EvidenceStatisticModelCharacteristic extends BackboneElement {
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'Quantity' }],
    },
    {
      elementName: 'variable',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'variable', typeCode: 'EvidenceStatisticModelCharacteristicVariable' }],
    },
    {
      elementName: 'attributeEstimate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'attributeEstimate', typeCode: 'EvidenceStatisticAttributeEstimate' }],
    },
  ];

  /** Model specification (1..1) */
  code?: CodeableConcept;

  /** Numerical value to complete model specification (0..1) */
  value?: Quantity;

  /** A variable adjusted for in the adjusted analysis (0..*) */
  variable?: EvidenceStatisticModelCharacteristicVariable[];

  /** An attribute of the statistic used as a model characteristic (0..*) */
  attributeEstimate?: EvidenceStatisticAttributeEstimate[];

  override fhirType(): string {
    return 'Evidence.statistic.modelCharacteristic';
  }

  /** FHIR JSON for this EvidenceStatisticModelCharacteristic, typed as the plain `EvidenceModelCharacteristic` data type. */
  override toJSON(): plainTypes.EvidenceModelCharacteristic {
    return this.serialize() as plainTypes.EvidenceModelCharacteristic;
  }

  /** Model specification (1..1) Created when absent. */
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

  /** Numerical value to complete model specification (0..1) Created when absent. */
  getValue(): Quantity {
    if (this.value === undefined) {
      this.value = new Quantity();
    }
    return this.value;
  }

  setValue(value: Quantity | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** A variable adjusted for in the adjusted analysis (0..*) Never undefined; an empty list is created when absent. */
  getVariable(): EvidenceStatisticModelCharacteristicVariable[] {
    if (this.variable === undefined) {
      this.variable = [];
    }
    return this.variable;
  }

  setVariable(variable: EvidenceStatisticModelCharacteristicVariable[] | undefined): this {
    return this.setFieldValue('variable', variable);
  }

  hasVariable(): boolean {
    return this.hasFieldValue('variable');
  }

  /** Appends a new, empty EvidenceStatisticModelCharacteristicVariable to `variable` and returns it so it can be filled in. */
  addVariable(): EvidenceStatisticModelCharacteristicVariable;
  /** Appends the given EvidenceStatisticModelCharacteristicVariable to `variable` and returns this object for chaining. */
  addVariable(
    evidenceStatisticModelCharacteristicVariable: EvidenceStatisticModelCharacteristicVariable
  ): this;
  addVariable(
    evidenceStatisticModelCharacteristicVariable?: EvidenceStatisticModelCharacteristicVariable
  ): EvidenceStatisticModelCharacteristicVariable | this {
    if (evidenceStatisticModelCharacteristicVariable !== undefined) {
      return this.addFieldValue('variable', evidenceStatisticModelCharacteristicVariable);
    }
    const createdEvidenceStatisticModelCharacteristicVariable =
      new EvidenceStatisticModelCharacteristicVariable();
    this.addFieldValue('variable', createdEvidenceStatisticModelCharacteristicVariable);
    return createdEvidenceStatisticModelCharacteristicVariable;
  }

  /** The first EvidenceStatisticModelCharacteristicVariable of `variable`. One is added when the list is empty. */
  getVariableFirstRep(): EvidenceStatisticModelCharacteristicVariable {
    const firstEvidenceStatisticModelCharacteristicVariable = this.getVariable()[0];
    return firstEvidenceStatisticModelCharacteristicVariable === undefined
      ? this.addVariable()
      : firstEvidenceStatisticModelCharacteristicVariable;
  }

  /** An attribute of the statistic used as a model characteristic (0..*) Never undefined; an empty list is created when absent. */
  getAttributeEstimate(): EvidenceStatisticAttributeEstimate[] {
    if (this.attributeEstimate === undefined) {
      this.attributeEstimate = [];
    }
    return this.attributeEstimate;
  }

  setAttributeEstimate(attributeEstimate: EvidenceStatisticAttributeEstimate[] | undefined): this {
    return this.setFieldValue('attributeEstimate', attributeEstimate);
  }

  hasAttributeEstimate(): boolean {
    return this.hasFieldValue('attributeEstimate');
  }

  /** Appends a new, empty EvidenceStatisticAttributeEstimate to `attributeEstimate` and returns it so it can be filled in. */
  addAttributeEstimate(): EvidenceStatisticAttributeEstimate;
  /** Appends the given EvidenceStatisticAttributeEstimate to `attributeEstimate` and returns this object for chaining. */
  addAttributeEstimate(
    evidenceStatisticAttributeEstimate: EvidenceStatisticAttributeEstimate
  ): this;
  addAttributeEstimate(
    evidenceStatisticAttributeEstimate?: EvidenceStatisticAttributeEstimate
  ): EvidenceStatisticAttributeEstimate | this {
    if (evidenceStatisticAttributeEstimate !== undefined) {
      return this.addFieldValue('attributeEstimate', evidenceStatisticAttributeEstimate);
    }
    const createdEvidenceStatisticAttributeEstimate = new EvidenceStatisticAttributeEstimate();
    this.addFieldValue('attributeEstimate', createdEvidenceStatisticAttributeEstimate);
    return createdEvidenceStatisticAttributeEstimate;
  }

  /** The first EvidenceStatisticAttributeEstimate of `attributeEstimate`. One is added when the list is empty. */
  getAttributeEstimateFirstRep(): EvidenceStatisticAttributeEstimate {
    const firstEvidenceStatisticAttributeEstimate = this.getAttributeEstimate()[0];
    return firstEvidenceStatisticAttributeEstimate === undefined
      ? this.addAttributeEstimate()
      : firstEvidenceStatisticAttributeEstimate;
  }
}

modelTypeRegistry.register(
  'EvidenceStatisticModelCharacteristic',
  EvidenceStatisticModelCharacteristic,
  false
);

/**
 * A variable adjusted for in the adjusted analysis
 */
export class EvidenceStatisticModelCharacteristicVariable extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'variableDefinition',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'variableDefinition',
          typeCode: 'Reference',
          targetResourceTypes: ['EvidenceVariable', 'Group'],
        },
      ],
    },
    {
      elementName: 'handling',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'handling',
          typeCode: 'code',
          allowedCodes: valueSetCodes.EvidenceVariableHandling,
        },
      ],
    },
    {
      elementName: 'valueCategory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueCategory', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'valueQuantity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueQuantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'valueRange',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueRange', typeCode: 'Range' }],
    },
  ];

  /** Description of the variable (1..1) */
  variableDefinition?: Reference;

  /** continuous | dichotomous | ordinal | polychotomous (0..1) */
  handling?: valueSetCodes.EvidenceVariableHandling;
  /** Id and extensions of the primitive `handling`. */
  _handling?: Element;

  /** Description for grouping of ordinal or polychotomous variables (0..*) */
  valueCategory?: CodeableConcept[];

  /** Discrete value for grouping of ordinal or polychotomous variables (0..*) */
  valueQuantity?: Quantity[];

  /** Range of values for grouping of ordinal or polychotomous variables (0..*) */
  valueRange?: Range[];

  override fhirType(): string {
    return 'Evidence.statistic.modelCharacteristic.variable';
  }

  /** FHIR JSON for this EvidenceStatisticModelCharacteristicVariable, typed as the plain `EvidenceVariable1` data type. */
  override toJSON(): plainTypes.EvidenceVariable1 {
    return this.serialize() as plainTypes.EvidenceVariable1;
  }

  /** Description of the variable (1..1) Created when absent. */
  getVariableDefinition(): Reference {
    if (this.variableDefinition === undefined) {
      this.variableDefinition = new Reference();
    }
    return this.variableDefinition;
  }

  setVariableDefinition(variableDefinition: Reference | undefined): this {
    return this.setFieldValue('variableDefinition', variableDefinition);
  }

  hasVariableDefinition(): boolean {
    return this.hasFieldValue('variableDefinition');
  }

  /** continuous | dichotomous | ordinal | polychotomous (0..1) */
  getHandling(): valueSetCodes.EvidenceVariableHandling | undefined {
    return this.handling;
  }

  /** Sets `handling`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setHandling(handling: valueSetCodes.EvidenceVariableHandling | undefined): this {
    return this.setFieldValue('handling', handling);
  }

  hasHandling(): boolean {
    return this.hasFieldValue('handling');
  }

  /** The element carrying the id and extensions of `handling`. Created when absent. */
  getHandlingElement(): Element {
    if (this._handling === undefined) {
      this._handling = new Element();
    }
    return this._handling;
  }

  setHandlingElement(handlingElement: Element | undefined): this {
    this._handling = handlingElement;
    return this;
  }

  /** Description for grouping of ordinal or polychotomous variables (0..*) Never undefined; an empty list is created when absent. */
  getValueCategory(): CodeableConcept[] {
    if (this.valueCategory === undefined) {
      this.valueCategory = [];
    }
    return this.valueCategory;
  }

  setValueCategory(valueCategory: CodeableConcept[] | undefined): this {
    return this.setFieldValue('valueCategory', valueCategory);
  }

  hasValueCategory(): boolean {
    return this.hasFieldValue('valueCategory');
  }

  /** Appends a new, empty CodeableConcept to `valueCategory` and returns it so it can be filled in. */
  addValueCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `valueCategory` and returns this object for chaining. */
  addValueCategory(codeableConcept: CodeableConcept): this;
  addValueCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('valueCategory', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('valueCategory', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `valueCategory`. One is added when the list is empty. */
  getValueCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getValueCategory()[0];
    return firstCodeableConcept === undefined ? this.addValueCategory() : firstCodeableConcept;
  }

  /** Discrete value for grouping of ordinal or polychotomous variables (0..*) Never undefined; an empty list is created when absent. */
  getValueQuantity(): Quantity[] {
    if (this.valueQuantity === undefined) {
      this.valueQuantity = [];
    }
    return this.valueQuantity;
  }

  setValueQuantity(valueQuantity: Quantity[] | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  /** Appends a new, empty Quantity to `valueQuantity` and returns it so it can be filled in. */
  addValueQuantity(): Quantity;
  /** Appends the given Quantity to `valueQuantity` and returns this object for chaining. */
  addValueQuantity(quantity: Quantity): this;
  addValueQuantity(quantity?: Quantity): Quantity | this {
    if (quantity !== undefined) {
      return this.addFieldValue('valueQuantity', quantity);
    }
    const createdQuantity = new Quantity();
    this.addFieldValue('valueQuantity', createdQuantity);
    return createdQuantity;
  }

  /** The first Quantity of `valueQuantity`. One is added when the list is empty. */
  getValueQuantityFirstRep(): Quantity {
    const firstQuantity = this.getValueQuantity()[0];
    return firstQuantity === undefined ? this.addValueQuantity() : firstQuantity;
  }

  /** Range of values for grouping of ordinal or polychotomous variables (0..*) Never undefined; an empty list is created when absent. */
  getValueRange(): Range[] {
    if (this.valueRange === undefined) {
      this.valueRange = [];
    }
    return this.valueRange;
  }

  setValueRange(valueRange: Range[] | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  /** Appends a new, empty Range to `valueRange` and returns it so it can be filled in. */
  addValueRange(): Range;
  /** Appends the given Range to `valueRange` and returns this object for chaining. */
  addValueRange(range: Range): this;
  addValueRange(range?: Range): Range | this {
    if (range !== undefined) {
      return this.addFieldValue('valueRange', range);
    }
    const createdRange = new Range();
    this.addFieldValue('valueRange', createdRange);
    return createdRange;
  }

  /** The first Range of `valueRange`. One is added when the list is empty. */
  getValueRangeFirstRep(): Range {
    const firstRange = this.getValueRange()[0];
    return firstRange === undefined ? this.addValueRange() : firstRange;
  }
}

modelTypeRegistry.register(
  'EvidenceStatisticModelCharacteristicVariable',
  EvidenceStatisticModelCharacteristicVariable,
  false
);

/**
 * Certainty or quality of the evidence
 */
export class EvidenceCertainty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'rating',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rating', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'rater',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rater', typeCode: 'string' }],
    },
    {
      elementName: 'subcomponent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subcomponent', typeCode: 'EvidenceCertainty' }],
    },
  ];

  /** Textual description of certainty (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Footnotes and/or explanatory notes (0..*) */
  note?: Annotation[];

  /** Aspect of certainty being rated (0..1) */
  type?: CodeableConcept;

  /** Assessment or judgement of the aspect (0..1) */
  rating?: CodeableConcept;

  /** Individual or group who did the rating (0..1) */
  rater?: string;
  /** Id and extensions of the primitive `rater`. */
  _rater?: Element;

  /** A domain or subdomain of certainty (0..*) */
  subcomponent?: EvidenceCertainty[];

  override fhirType(): string {
    return 'Evidence.certainty';
  }

  /** FHIR JSON for this EvidenceCertainty, typed as the plain `EvidenceCertainty` data type. */
  override toJSON(): plainTypes.EvidenceCertainty {
    return this.serialize() as plainTypes.EvidenceCertainty;
  }

  /** Textual description of certainty (0..1) */
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

  /** Aspect of certainty being rated (0..1) Created when absent. */
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

  /** Assessment or judgement of the aspect (0..1) Created when absent. */
  getRating(): CodeableConcept {
    if (this.rating === undefined) {
      this.rating = new CodeableConcept();
    }
    return this.rating;
  }

  setRating(rating: CodeableConcept | undefined): this {
    return this.setFieldValue('rating', rating);
  }

  hasRating(): boolean {
    return this.hasFieldValue('rating');
  }

  /** Individual or group who did the rating (0..1) */
  getRater(): string | undefined {
    return this.rater;
  }

  /** Sets `rater`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRater(rater: string | undefined): this {
    return this.setFieldValue('rater', rater);
  }

  hasRater(): boolean {
    return this.hasFieldValue('rater');
  }

  /** The element carrying the id and extensions of `rater`. Created when absent. */
  getRaterElement(): Element {
    if (this._rater === undefined) {
      this._rater = new Element();
    }
    return this._rater;
  }

  setRaterElement(raterElement: Element | undefined): this {
    this._rater = raterElement;
    return this;
  }

  /** A domain or subdomain of certainty (0..*) Never undefined; an empty list is created when absent. */
  getSubcomponent(): EvidenceCertainty[] {
    if (this.subcomponent === undefined) {
      this.subcomponent = [];
    }
    return this.subcomponent;
  }

  setSubcomponent(subcomponent: EvidenceCertainty[] | undefined): this {
    return this.setFieldValue('subcomponent', subcomponent);
  }

  hasSubcomponent(): boolean {
    return this.hasFieldValue('subcomponent');
  }

  /** Appends a new, empty EvidenceCertainty to `subcomponent` and returns it so it can be filled in. */
  addSubcomponent(): EvidenceCertainty;
  /** Appends the given EvidenceCertainty to `subcomponent` and returns this object for chaining. */
  addSubcomponent(evidenceCertainty: EvidenceCertainty): this;
  addSubcomponent(evidenceCertainty?: EvidenceCertainty): EvidenceCertainty | this {
    if (evidenceCertainty !== undefined) {
      return this.addFieldValue('subcomponent', evidenceCertainty);
    }
    const createdEvidenceCertainty = new EvidenceCertainty();
    this.addFieldValue('subcomponent', createdEvidenceCertainty);
    return createdEvidenceCertainty;
  }

  /** The first EvidenceCertainty of `subcomponent`. One is added when the list is empty. */
  getSubcomponentFirstRep(): EvidenceCertainty {
    const firstEvidenceCertainty = this.getSubcomponent()[0];
    return firstEvidenceCertainty === undefined ? this.addSubcomponent() : firstEvidenceCertainty;
  }
}

modelTypeRegistry.register('EvidenceCertainty', EvidenceCertainty, false);
