/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
 */
export class Citation extends DomainResource {
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
      elementName: 'summary',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'summary', typeCode: 'CitationSummary' }],
    },
    {
      elementName: 'classification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classification', typeCode: 'CitationClassification' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'currentState',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'currentState', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'statusDate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statusDate', typeCode: 'CitationStatusDate' }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'citedArtifact',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'citedArtifact', typeCode: 'CitationCitedArtifact' }],
    },
  ];

  readonly resourceType = 'Citation';

  /** Canonical identifier for this citation record, represented as a globally unique URI (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Identifier for the citation record itself (0..*) */
  identifier?: Identifier[];

  /** Business version of the citation record (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this citation record (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this citation record (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

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

  /** The publisher of the citation record, not the publisher of the article or artifact being cited (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher of the citation record (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the citation (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the citation record content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for citation record (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this citation is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Use and/or publishing restrictions for the citation record, not for the cited artifact (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** Copyright holder and year(s) for the ciation record, not for the cited artifact (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;

  /** When the citation record was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the citation record was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the citation record is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** Who authored the citation record (0..*) */
  author?: ContactDetail[];

  /** Who edited the citation record (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the citation record (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the citation record (0..*) */
  endorser?: ContactDetail[];

  /** A human-readable display of key concepts to represent the citation (0..*) */
  summary?: CitationSummary[];

  /** The assignment to an organizing scheme (0..*) */
  classification?: CitationClassification[];

  /** Used for general notes and annotations not coded elsewhere (0..*) */
  note?: Annotation[];

  /** The status of the citation record (0..*) */
  currentState?: CodeableConcept[];

  /** An effective date or period for a status of the citation record (0..*) */
  statusDate?: CitationStatusDate[];

  /** Artifact related to the citation record (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** The article or artifact being described (0..1) */
  citedArtifact?: CitationCitedArtifact;

  override fhirType(): string {
    return 'Citation';
  }

  /** FHIR JSON for this Citation, typed as the plain `Citation` data type. */
  override toJSON(): plainTypes.Citation {
    return this.serialize() as plainTypes.Citation;
  }

  /** Canonical identifier for this citation record, represented as a globally unique URI (0..1) */
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

  /** Identifier for the citation record itself (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the citation record (0..1) */
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

  /** Name for this citation record (computer friendly) (0..1) */
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

  /** Name for this citation record (human friendly) (0..1) */
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

  /** The publisher of the citation record, not the publisher of the article or artifact being cited (0..1) */
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

  /** Contact details for the publisher of the citation record (0..*) Never undefined; an empty list is created when absent. */
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

  /** Natural language description of the citation (0..1) */
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

  /** The context that the citation record content is intended to support (0..*) Never undefined; an empty list is created when absent. */
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

  /** Intended jurisdiction for citation record (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this citation is defined (0..1) */
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

  /** Use and/or publishing restrictions for the citation record, not for the cited artifact (0..1) */
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

  /** Copyright holder and year(s) for the ciation record, not for the cited artifact (0..1) */
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

  /** When the citation record was approved by publisher (0..1) */
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

  /** When the citation record was last reviewed by the publisher (0..1) */
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

  /** When the citation record is expected to be used (0..1) Created when absent. */
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

  /** Who authored the citation record (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who edited the citation record (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who reviewed the citation record (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who endorsed the citation record (0..*) Never undefined; an empty list is created when absent. */
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

  /** A human-readable display of key concepts to represent the citation (0..*) Never undefined; an empty list is created when absent. */
  getSummary(): CitationSummary[] {
    if (this.summary === undefined) {
      this.summary = [];
    }
    return this.summary;
  }

  setSummary(summary: CitationSummary[] | undefined): this {
    return this.setFieldValue('summary', summary);
  }

  hasSummary(): boolean {
    return this.hasFieldValue('summary');
  }

  /** Appends a new, empty CitationSummary to `summary` and returns it so it can be filled in. */
  addSummary(): CitationSummary;
  /** Appends the given CitationSummary to `summary` and returns this object for chaining. */
  addSummary(citationSummary: CitationSummary): this;
  addSummary(citationSummary?: CitationSummary): CitationSummary | this {
    if (citationSummary !== undefined) {
      return this.addFieldValue('summary', citationSummary);
    }
    const createdCitationSummary = new CitationSummary();
    this.addFieldValue('summary', createdCitationSummary);
    return createdCitationSummary;
  }

  /** The first CitationSummary of `summary`. One is added when the list is empty. */
  getSummaryFirstRep(): CitationSummary {
    const firstCitationSummary = this.getSummary()[0];
    return firstCitationSummary === undefined ? this.addSummary() : firstCitationSummary;
  }

  /** The assignment to an organizing scheme (0..*) Never undefined; an empty list is created when absent. */
  getClassification(): CitationClassification[] {
    if (this.classification === undefined) {
      this.classification = [];
    }
    return this.classification;
  }

  setClassification(classification: CitationClassification[] | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** Appends a new, empty CitationClassification to `classification` and returns it so it can be filled in. */
  addClassification(): CitationClassification;
  /** Appends the given CitationClassification to `classification` and returns this object for chaining. */
  addClassification(citationClassification: CitationClassification): this;
  addClassification(
    citationClassification?: CitationClassification
  ): CitationClassification | this {
    if (citationClassification !== undefined) {
      return this.addFieldValue('classification', citationClassification);
    }
    const createdCitationClassification = new CitationClassification();
    this.addFieldValue('classification', createdCitationClassification);
    return createdCitationClassification;
  }

  /** The first CitationClassification of `classification`. One is added when the list is empty. */
  getClassificationFirstRep(): CitationClassification {
    const firstCitationClassification = this.getClassification()[0];
    return firstCitationClassification === undefined
      ? this.addClassification()
      : firstCitationClassification;
  }

  /** Used for general notes and annotations not coded elsewhere (0..*) Never undefined; an empty list is created when absent. */
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

  /** The status of the citation record (0..*) Never undefined; an empty list is created when absent. */
  getCurrentState(): CodeableConcept[] {
    if (this.currentState === undefined) {
      this.currentState = [];
    }
    return this.currentState;
  }

  setCurrentState(currentState: CodeableConcept[] | undefined): this {
    return this.setFieldValue('currentState', currentState);
  }

  hasCurrentState(): boolean {
    return this.hasFieldValue('currentState');
  }

  /** Appends a new, empty CodeableConcept to `currentState` and returns it so it can be filled in. */
  addCurrentState(): CodeableConcept;
  /** Appends the given CodeableConcept to `currentState` and returns this object for chaining. */
  addCurrentState(codeableConcept: CodeableConcept): this;
  addCurrentState(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('currentState', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('currentState', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `currentState`. One is added when the list is empty. */
  getCurrentStateFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCurrentState()[0];
    return firstCodeableConcept === undefined ? this.addCurrentState() : firstCodeableConcept;
  }

  /** An effective date or period for a status of the citation record (0..*) Never undefined; an empty list is created when absent. */
  getStatusDate(): CitationStatusDate[] {
    if (this.statusDate === undefined) {
      this.statusDate = [];
    }
    return this.statusDate;
  }

  setStatusDate(statusDate: CitationStatusDate[] | undefined): this {
    return this.setFieldValue('statusDate', statusDate);
  }

  hasStatusDate(): boolean {
    return this.hasFieldValue('statusDate');
  }

  /** Appends a new, empty CitationStatusDate to `statusDate` and returns it so it can be filled in. */
  addStatusDate(): CitationStatusDate;
  /** Appends the given CitationStatusDate to `statusDate` and returns this object for chaining. */
  addStatusDate(citationStatusDate: CitationStatusDate): this;
  addStatusDate(citationStatusDate?: CitationStatusDate): CitationStatusDate | this {
    if (citationStatusDate !== undefined) {
      return this.addFieldValue('statusDate', citationStatusDate);
    }
    const createdCitationStatusDate = new CitationStatusDate();
    this.addFieldValue('statusDate', createdCitationStatusDate);
    return createdCitationStatusDate;
  }

  /** The first CitationStatusDate of `statusDate`. One is added when the list is empty. */
  getStatusDateFirstRep(): CitationStatusDate {
    const firstCitationStatusDate = this.getStatusDate()[0];
    return firstCitationStatusDate === undefined ? this.addStatusDate() : firstCitationStatusDate;
  }

  /** Artifact related to the citation record (0..*) Never undefined; an empty list is created when absent. */
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

  /** The article or artifact being described (0..1) Created when absent. */
  getCitedArtifact(): CitationCitedArtifact {
    if (this.citedArtifact === undefined) {
      this.citedArtifact = new CitationCitedArtifact();
    }
    return this.citedArtifact;
  }

  setCitedArtifact(citedArtifact: CitationCitedArtifact | undefined): this {
    return this.setFieldValue('citedArtifact', citedArtifact);
  }

  hasCitedArtifact(): boolean {
    return this.hasFieldValue('citedArtifact');
  }
}

modelTypeRegistry.register('Citation', Citation, true);

/** True when the value is a Citation model instance. */
export function isCitation(candidate: unknown): candidate is Citation {
  return candidate instanceof Citation;
}

/**
 * A human-readable display of key concepts to represent the citation
 */
export class CitationSummary extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'style',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'style', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'text',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'markdown' }],
    },
  ];

  /** Format for display of the citation summary (0..1) */
  style?: CodeableConcept;

  /** The human-readable display of the citation summary (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  override fhirType(): string {
    return 'Citation.summary';
  }

  /** FHIR JSON for this CitationSummary, typed as the plain `CitationSummary` data type. */
  override toJSON(): plainTypes.CitationSummary {
    return this.serialize() as plainTypes.CitationSummary;
  }

  /** Format for display of the citation summary (0..1) Created when absent. */
  getStyle(): CodeableConcept {
    if (this.style === undefined) {
      this.style = new CodeableConcept();
    }
    return this.style;
  }

  setStyle(style: CodeableConcept | undefined): this {
    return this.setFieldValue('style', style);
  }

  hasStyle(): boolean {
    return this.hasFieldValue('style');
  }

  /** The human-readable display of the citation summary (1..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }
}

modelTypeRegistry.register('CitationSummary', CitationSummary, false);

/**
 * The assignment to an organizing scheme
 */
export class CitationClassification extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'classifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classifier', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The kind of classifier (e.g. publication type, keyword) (0..1) */
  type?: CodeableConcept;

  /** The specific classification value (0..*) */
  classifier?: CodeableConcept[];

  override fhirType(): string {
    return 'Citation.classification';
  }

  /** FHIR JSON for this CitationClassification, typed as the plain `CitationClassification` data type. */
  override toJSON(): plainTypes.CitationClassification {
    return this.serialize() as plainTypes.CitationClassification;
  }

  /** The kind of classifier (e.g. publication type, keyword) (0..1) Created when absent. */
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

  /** The specific classification value (0..*) Never undefined; an empty list is created when absent. */
  getClassifier(): CodeableConcept[] {
    if (this.classifier === undefined) {
      this.classifier = [];
    }
    return this.classifier;
  }

  setClassifier(classifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classifier', classifier);
  }

  hasClassifier(): boolean {
    return this.hasFieldValue('classifier');
  }

  /** Appends a new, empty CodeableConcept to `classifier` and returns it so it can be filled in. */
  addClassifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `classifier` and returns this object for chaining. */
  addClassifier(codeableConcept: CodeableConcept): this;
  addClassifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classifier`. One is added when the list is empty. */
  getClassifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassifier()[0];
    return firstCodeableConcept === undefined ? this.addClassifier() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('CitationClassification', CitationClassification, false);

/**
 * An effective date or period for a status of the citation record
 */
export class CitationStatusDate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'activity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'activity', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actual',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actual', typeCode: 'boolean' }],
    },
    {
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Classification of the status (1..1) */
  activity?: CodeableConcept;

  /** Either occurred or expected (0..1) */
  actual?: boolean;
  /** Id and extensions of the primitive `actual`. */
  _actual?: Element;

  /** When the status started and/or ended (1..1) */
  period?: Period;

  override fhirType(): string {
    return 'Citation.statusDate';
  }

  /** FHIR JSON for this CitationStatusDate, typed as the plain `CitationStatusDate` data type. */
  override toJSON(): plainTypes.CitationStatusDate {
    return this.serialize() as plainTypes.CitationStatusDate;
  }

  /** Classification of the status (1..1) Created when absent. */
  getActivity(): CodeableConcept {
    if (this.activity === undefined) {
      this.activity = new CodeableConcept();
    }
    return this.activity;
  }

  setActivity(activity: CodeableConcept | undefined): this {
    return this.setFieldValue('activity', activity);
  }

  hasActivity(): boolean {
    return this.hasFieldValue('activity');
  }

  /** Either occurred or expected (0..1) */
  getActual(): boolean | undefined {
    return this.actual;
  }

  /** Sets `actual`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActual(actual: boolean | undefined): this {
    return this.setFieldValue('actual', actual);
  }

  hasActual(): boolean {
    return this.hasFieldValue('actual');
  }

  /** The element carrying the id and extensions of `actual`. Created when absent. */
  getActualElement(): Element {
    if (this._actual === undefined) {
      this._actual = new Element();
    }
    return this._actual;
  }

  setActualElement(actualElement: Element | undefined): this {
    this._actual = actualElement;
    return this;
  }

  /** When the status started and/or ended (1..1) Created when absent. */
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

modelTypeRegistry.register('CitationStatusDate', CitationStatusDate, false);

/**
 * The article or artifact being described
 */
export class CitationCitedArtifact extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'dateAccessed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateAccessed', typeCode: 'dateTime' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'CitationCitedArtifactVersion' }],
    },
    {
      elementName: 'currentState',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'currentState', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'statusDate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statusDate', typeCode: 'CitationCitedArtifactStatusDate' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'title', typeCode: 'CitationCitedArtifactTitle' }],
    },
    {
      elementName: 'abstract',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'abstract', typeCode: 'CitationCitedArtifactAbstract' }],
    },
    {
      elementName: 'part',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'part', typeCode: 'CitationCitedArtifactPart' }],
    },
    {
      elementName: 'relatesTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatesTo', typeCode: 'CitationCitedArtifactRelatesTo' }],
    },
    {
      elementName: 'publicationForm',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'publicationForm', typeCode: 'CitationCitedArtifactPublicationForm' }],
    },
    {
      elementName: 'webLocation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'webLocation', typeCode: 'CitationCitedArtifactWebLocation' }],
    },
    {
      elementName: 'classification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classification', typeCode: 'CitationCitedArtifactClassification' }],
    },
    {
      elementName: 'contributorship',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contributorship', typeCode: 'CitationCitedArtifactContributorship' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  /** Unique identifier. May include DOI, PMID, PMCID, etc (0..*) */
  identifier?: Identifier[];

  /** Identifier not unique to the cited artifact. May include trial registry identifiers (0..*) */
  relatedIdentifier?: Identifier[];

  /** When the cited artifact was accessed (0..1) */
  dateAccessed?: string;
  /** Id and extensions of the primitive `dateAccessed`. */
  _dateAccessed?: Element;

  /** The defined version of the cited artifact (0..1) */
  version?: CitationCitedArtifactVersion;

  /** The status of the cited artifact (0..*) */
  currentState?: CodeableConcept[];

  /** An effective date or period for a status of the cited artifact (0..*) */
  statusDate?: CitationCitedArtifactStatusDate[];

  /** The title details of the article or artifact (0..*) */
  title?: CitationCitedArtifactTitle[];

  /** Summary of the article or artifact (0..*) */
  abstract?: CitationCitedArtifactAbstract[];

  /** The component of the article or artifact (0..1) */
  part?: CitationCitedArtifactPart;

  /** The artifact related to the cited artifact (0..*) */
  relatesTo?: CitationCitedArtifactRelatesTo[];

  /** If multiple, used to represent alternative forms of the article that are not separate citations (0..*) */
  publicationForm?: CitationCitedArtifactPublicationForm[];

  /** Used for any URL for the article or artifact cited (0..*) */
  webLocation?: CitationCitedArtifactWebLocation[];

  /** The assignment to an organizing scheme (0..*) */
  classification?: CitationCitedArtifactClassification[];

  /** Attribution of authors and other contributors (0..1) */
  contributorship?: CitationCitedArtifactContributorship;

  /** Any additional information or content for the article or artifact (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'Citation.citedArtifact';
  }

  /** FHIR JSON for this CitationCitedArtifact, typed as the plain `CitationCitedArtifact` data type. */
  override toJSON(): plainTypes.CitationCitedArtifact {
    return this.serialize() as plainTypes.CitationCitedArtifact;
  }

  /** Unique identifier. May include DOI, PMID, PMCID, etc (0..*) Never undefined; an empty list is created when absent. */
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

  /** Identifier not unique to the cited artifact. May include trial registry identifiers (0..*) Never undefined; an empty list is created when absent. */
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

  /** When the cited artifact was accessed (0..1) */
  getDateAccessed(): string | undefined {
    return this.dateAccessed;
  }

  /** Sets `dateAccessed`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDateAccessed(dateAccessed: string | undefined): this {
    return this.setFieldValue('dateAccessed', dateAccessed);
  }

  hasDateAccessed(): boolean {
    return this.hasFieldValue('dateAccessed');
  }

  /** The element carrying the id and extensions of `dateAccessed`. Created when absent. */
  getDateAccessedElement(): Element {
    if (this._dateAccessed === undefined) {
      this._dateAccessed = new Element();
    }
    return this._dateAccessed;
  }

  setDateAccessedElement(dateAccessedElement: Element | undefined): this {
    this._dateAccessed = dateAccessedElement;
    return this;
  }

  /** The defined version of the cited artifact (0..1) Created when absent. */
  getVersion(): CitationCitedArtifactVersion {
    if (this.version === undefined) {
      this.version = new CitationCitedArtifactVersion();
    }
    return this.version;
  }

  setVersion(version: CitationCitedArtifactVersion | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** The status of the cited artifact (0..*) Never undefined; an empty list is created when absent. */
  getCurrentState(): CodeableConcept[] {
    if (this.currentState === undefined) {
      this.currentState = [];
    }
    return this.currentState;
  }

  setCurrentState(currentState: CodeableConcept[] | undefined): this {
    return this.setFieldValue('currentState', currentState);
  }

  hasCurrentState(): boolean {
    return this.hasFieldValue('currentState');
  }

  /** Appends a new, empty CodeableConcept to `currentState` and returns it so it can be filled in. */
  addCurrentState(): CodeableConcept;
  /** Appends the given CodeableConcept to `currentState` and returns this object for chaining. */
  addCurrentState(codeableConcept: CodeableConcept): this;
  addCurrentState(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('currentState', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('currentState', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `currentState`. One is added when the list is empty. */
  getCurrentStateFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCurrentState()[0];
    return firstCodeableConcept === undefined ? this.addCurrentState() : firstCodeableConcept;
  }

  /** An effective date or period for a status of the cited artifact (0..*) Never undefined; an empty list is created when absent. */
  getStatusDate(): CitationCitedArtifactStatusDate[] {
    if (this.statusDate === undefined) {
      this.statusDate = [];
    }
    return this.statusDate;
  }

  setStatusDate(statusDate: CitationCitedArtifactStatusDate[] | undefined): this {
    return this.setFieldValue('statusDate', statusDate);
  }

  hasStatusDate(): boolean {
    return this.hasFieldValue('statusDate');
  }

  /** Appends a new, empty CitationCitedArtifactStatusDate to `statusDate` and returns it so it can be filled in. */
  addStatusDate(): CitationCitedArtifactStatusDate;
  /** Appends the given CitationCitedArtifactStatusDate to `statusDate` and returns this object for chaining. */
  addStatusDate(citationCitedArtifactStatusDate: CitationCitedArtifactStatusDate): this;
  addStatusDate(
    citationCitedArtifactStatusDate?: CitationCitedArtifactStatusDate
  ): CitationCitedArtifactStatusDate | this {
    if (citationCitedArtifactStatusDate !== undefined) {
      return this.addFieldValue('statusDate', citationCitedArtifactStatusDate);
    }
    const createdCitationCitedArtifactStatusDate = new CitationCitedArtifactStatusDate();
    this.addFieldValue('statusDate', createdCitationCitedArtifactStatusDate);
    return createdCitationCitedArtifactStatusDate;
  }

  /** The first CitationCitedArtifactStatusDate of `statusDate`. One is added when the list is empty. */
  getStatusDateFirstRep(): CitationCitedArtifactStatusDate {
    const firstCitationCitedArtifactStatusDate = this.getStatusDate()[0];
    return firstCitationCitedArtifactStatusDate === undefined
      ? this.addStatusDate()
      : firstCitationCitedArtifactStatusDate;
  }

  /** The title details of the article or artifact (0..*) Never undefined; an empty list is created when absent. */
  getTitle(): CitationCitedArtifactTitle[] {
    if (this.title === undefined) {
      this.title = [];
    }
    return this.title;
  }

  setTitle(title: CitationCitedArtifactTitle[] | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** Appends a new, empty CitationCitedArtifactTitle to `title` and returns it so it can be filled in. */
  addTitle(): CitationCitedArtifactTitle;
  /** Appends the given CitationCitedArtifactTitle to `title` and returns this object for chaining. */
  addTitle(citationCitedArtifactTitle: CitationCitedArtifactTitle): this;
  addTitle(
    citationCitedArtifactTitle?: CitationCitedArtifactTitle
  ): CitationCitedArtifactTitle | this {
    if (citationCitedArtifactTitle !== undefined) {
      return this.addFieldValue('title', citationCitedArtifactTitle);
    }
    const createdCitationCitedArtifactTitle = new CitationCitedArtifactTitle();
    this.addFieldValue('title', createdCitationCitedArtifactTitle);
    return createdCitationCitedArtifactTitle;
  }

  /** The first CitationCitedArtifactTitle of `title`. One is added when the list is empty. */
  getTitleFirstRep(): CitationCitedArtifactTitle {
    const firstCitationCitedArtifactTitle = this.getTitle()[0];
    return firstCitationCitedArtifactTitle === undefined
      ? this.addTitle()
      : firstCitationCitedArtifactTitle;
  }

  /** Summary of the article or artifact (0..*) Never undefined; an empty list is created when absent. */
  getAbstract(): CitationCitedArtifactAbstract[] {
    if (this.abstract === undefined) {
      this.abstract = [];
    }
    return this.abstract;
  }

  setAbstract(abstractValue: CitationCitedArtifactAbstract[] | undefined): this {
    return this.setFieldValue('abstract', abstractValue);
  }

  hasAbstract(): boolean {
    return this.hasFieldValue('abstract');
  }

  /** Appends a new, empty CitationCitedArtifactAbstract to `abstract` and returns it so it can be filled in. */
  addAbstract(): CitationCitedArtifactAbstract;
  /** Appends the given CitationCitedArtifactAbstract to `abstract` and returns this object for chaining. */
  addAbstract(citationCitedArtifactAbstract: CitationCitedArtifactAbstract): this;
  addAbstract(
    citationCitedArtifactAbstract?: CitationCitedArtifactAbstract
  ): CitationCitedArtifactAbstract | this {
    if (citationCitedArtifactAbstract !== undefined) {
      return this.addFieldValue('abstract', citationCitedArtifactAbstract);
    }
    const createdCitationCitedArtifactAbstract = new CitationCitedArtifactAbstract();
    this.addFieldValue('abstract', createdCitationCitedArtifactAbstract);
    return createdCitationCitedArtifactAbstract;
  }

  /** The first CitationCitedArtifactAbstract of `abstract`. One is added when the list is empty. */
  getAbstractFirstRep(): CitationCitedArtifactAbstract {
    const firstCitationCitedArtifactAbstract = this.getAbstract()[0];
    return firstCitationCitedArtifactAbstract === undefined
      ? this.addAbstract()
      : firstCitationCitedArtifactAbstract;
  }

  /** The component of the article or artifact (0..1) Created when absent. */
  getPart(): CitationCitedArtifactPart {
    if (this.part === undefined) {
      this.part = new CitationCitedArtifactPart();
    }
    return this.part;
  }

  setPart(part: CitationCitedArtifactPart | undefined): this {
    return this.setFieldValue('part', part);
  }

  hasPart(): boolean {
    return this.hasFieldValue('part');
  }

  /** The artifact related to the cited artifact (0..*) Never undefined; an empty list is created when absent. */
  getRelatesTo(): CitationCitedArtifactRelatesTo[] {
    if (this.relatesTo === undefined) {
      this.relatesTo = [];
    }
    return this.relatesTo;
  }

  setRelatesTo(relatesTo: CitationCitedArtifactRelatesTo[] | undefined): this {
    return this.setFieldValue('relatesTo', relatesTo);
  }

  hasRelatesTo(): boolean {
    return this.hasFieldValue('relatesTo');
  }

  /** Appends a new, empty CitationCitedArtifactRelatesTo to `relatesTo` and returns it so it can be filled in. */
  addRelatesTo(): CitationCitedArtifactRelatesTo;
  /** Appends the given CitationCitedArtifactRelatesTo to `relatesTo` and returns this object for chaining. */
  addRelatesTo(citationCitedArtifactRelatesTo: CitationCitedArtifactRelatesTo): this;
  addRelatesTo(
    citationCitedArtifactRelatesTo?: CitationCitedArtifactRelatesTo
  ): CitationCitedArtifactRelatesTo | this {
    if (citationCitedArtifactRelatesTo !== undefined) {
      return this.addFieldValue('relatesTo', citationCitedArtifactRelatesTo);
    }
    const createdCitationCitedArtifactRelatesTo = new CitationCitedArtifactRelatesTo();
    this.addFieldValue('relatesTo', createdCitationCitedArtifactRelatesTo);
    return createdCitationCitedArtifactRelatesTo;
  }

  /** The first CitationCitedArtifactRelatesTo of `relatesTo`. One is added when the list is empty. */
  getRelatesToFirstRep(): CitationCitedArtifactRelatesTo {
    const firstCitationCitedArtifactRelatesTo = this.getRelatesTo()[0];
    return firstCitationCitedArtifactRelatesTo === undefined
      ? this.addRelatesTo()
      : firstCitationCitedArtifactRelatesTo;
  }

  /** If multiple, used to represent alternative forms of the article that are not separate citations (0..*) Never undefined; an empty list is created when absent. */
  getPublicationForm(): CitationCitedArtifactPublicationForm[] {
    if (this.publicationForm === undefined) {
      this.publicationForm = [];
    }
    return this.publicationForm;
  }

  setPublicationForm(publicationForm: CitationCitedArtifactPublicationForm[] | undefined): this {
    return this.setFieldValue('publicationForm', publicationForm);
  }

  hasPublicationForm(): boolean {
    return this.hasFieldValue('publicationForm');
  }

  /** Appends a new, empty CitationCitedArtifactPublicationForm to `publicationForm` and returns it so it can be filled in. */
  addPublicationForm(): CitationCitedArtifactPublicationForm;
  /** Appends the given CitationCitedArtifactPublicationForm to `publicationForm` and returns this object for chaining. */
  addPublicationForm(
    citationCitedArtifactPublicationForm: CitationCitedArtifactPublicationForm
  ): this;
  addPublicationForm(
    citationCitedArtifactPublicationForm?: CitationCitedArtifactPublicationForm
  ): CitationCitedArtifactPublicationForm | this {
    if (citationCitedArtifactPublicationForm !== undefined) {
      return this.addFieldValue('publicationForm', citationCitedArtifactPublicationForm);
    }
    const createdCitationCitedArtifactPublicationForm = new CitationCitedArtifactPublicationForm();
    this.addFieldValue('publicationForm', createdCitationCitedArtifactPublicationForm);
    return createdCitationCitedArtifactPublicationForm;
  }

  /** The first CitationCitedArtifactPublicationForm of `publicationForm`. One is added when the list is empty. */
  getPublicationFormFirstRep(): CitationCitedArtifactPublicationForm {
    const firstCitationCitedArtifactPublicationForm = this.getPublicationForm()[0];
    return firstCitationCitedArtifactPublicationForm === undefined
      ? this.addPublicationForm()
      : firstCitationCitedArtifactPublicationForm;
  }

  /** Used for any URL for the article or artifact cited (0..*) Never undefined; an empty list is created when absent. */
  getWebLocation(): CitationCitedArtifactWebLocation[] {
    if (this.webLocation === undefined) {
      this.webLocation = [];
    }
    return this.webLocation;
  }

  setWebLocation(webLocation: CitationCitedArtifactWebLocation[] | undefined): this {
    return this.setFieldValue('webLocation', webLocation);
  }

  hasWebLocation(): boolean {
    return this.hasFieldValue('webLocation');
  }

  /** Appends a new, empty CitationCitedArtifactWebLocation to `webLocation` and returns it so it can be filled in. */
  addWebLocation(): CitationCitedArtifactWebLocation;
  /** Appends the given CitationCitedArtifactWebLocation to `webLocation` and returns this object for chaining. */
  addWebLocation(citationCitedArtifactWebLocation: CitationCitedArtifactWebLocation): this;
  addWebLocation(
    citationCitedArtifactWebLocation?: CitationCitedArtifactWebLocation
  ): CitationCitedArtifactWebLocation | this {
    if (citationCitedArtifactWebLocation !== undefined) {
      return this.addFieldValue('webLocation', citationCitedArtifactWebLocation);
    }
    const createdCitationCitedArtifactWebLocation = new CitationCitedArtifactWebLocation();
    this.addFieldValue('webLocation', createdCitationCitedArtifactWebLocation);
    return createdCitationCitedArtifactWebLocation;
  }

  /** The first CitationCitedArtifactWebLocation of `webLocation`. One is added when the list is empty. */
  getWebLocationFirstRep(): CitationCitedArtifactWebLocation {
    const firstCitationCitedArtifactWebLocation = this.getWebLocation()[0];
    return firstCitationCitedArtifactWebLocation === undefined
      ? this.addWebLocation()
      : firstCitationCitedArtifactWebLocation;
  }

  /** The assignment to an organizing scheme (0..*) Never undefined; an empty list is created when absent. */
  getClassification(): CitationCitedArtifactClassification[] {
    if (this.classification === undefined) {
      this.classification = [];
    }
    return this.classification;
  }

  setClassification(classification: CitationCitedArtifactClassification[] | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** Appends a new, empty CitationCitedArtifactClassification to `classification` and returns it so it can be filled in. */
  addClassification(): CitationCitedArtifactClassification;
  /** Appends the given CitationCitedArtifactClassification to `classification` and returns this object for chaining. */
  addClassification(citationCitedArtifactClassification: CitationCitedArtifactClassification): this;
  addClassification(
    citationCitedArtifactClassification?: CitationCitedArtifactClassification
  ): CitationCitedArtifactClassification | this {
    if (citationCitedArtifactClassification !== undefined) {
      return this.addFieldValue('classification', citationCitedArtifactClassification);
    }
    const createdCitationCitedArtifactClassification = new CitationCitedArtifactClassification();
    this.addFieldValue('classification', createdCitationCitedArtifactClassification);
    return createdCitationCitedArtifactClassification;
  }

  /** The first CitationCitedArtifactClassification of `classification`. One is added when the list is empty. */
  getClassificationFirstRep(): CitationCitedArtifactClassification {
    const firstCitationCitedArtifactClassification = this.getClassification()[0];
    return firstCitationCitedArtifactClassification === undefined
      ? this.addClassification()
      : firstCitationCitedArtifactClassification;
  }

  /** Attribution of authors and other contributors (0..1) Created when absent. */
  getContributorship(): CitationCitedArtifactContributorship {
    if (this.contributorship === undefined) {
      this.contributorship = new CitationCitedArtifactContributorship();
    }
    return this.contributorship;
  }

  setContributorship(contributorship: CitationCitedArtifactContributorship | undefined): this {
    return this.setFieldValue('contributorship', contributorship);
  }

  hasContributorship(): boolean {
    return this.hasFieldValue('contributorship');
  }

  /** Any additional information or content for the article or artifact (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('CitationCitedArtifact', CitationCitedArtifact, false);

/**
 * The defined version of the cited artifact
 */
export class CitationCitedArtifactVersion extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
    {
      elementName: 'baseCitation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'baseCitation', typeCode: 'Reference', targetResourceTypes: ['Citation'] },
      ],
    },
  ];

  /** The version number or other version identifier (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** Citation for the main version of the cited artifact (0..1) */
  baseCitation?: Reference;

  override fhirType(): string {
    return 'Citation.citedArtifact.version';
  }

  /** FHIR JSON for this CitationCitedArtifactVersion, typed as the plain `CitationVersion` data type. */
  override toJSON(): plainTypes.CitationVersion {
    return this.serialize() as plainTypes.CitationVersion;
  }

  /** The version number or other version identifier (1..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setValue(value: string | undefined): this {
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

  /** Citation for the main version of the cited artifact (0..1) Created when absent. */
  getBaseCitation(): Reference {
    if (this.baseCitation === undefined) {
      this.baseCitation = new Reference();
    }
    return this.baseCitation;
  }

  setBaseCitation(baseCitation: Reference | undefined): this {
    return this.setFieldValue('baseCitation', baseCitation);
  }

  hasBaseCitation(): boolean {
    return this.hasFieldValue('baseCitation');
  }
}

modelTypeRegistry.register('CitationCitedArtifactVersion', CitationCitedArtifactVersion, false);

/**
 * An effective date or period for a status of the cited artifact
 */
export class CitationCitedArtifactStatusDate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'activity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'activity', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actual',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actual', typeCode: 'boolean' }],
    },
    {
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Classification of the status (1..1) */
  activity?: CodeableConcept;

  /** Either occurred or expected (0..1) */
  actual?: boolean;
  /** Id and extensions of the primitive `actual`. */
  _actual?: Element;

  /** When the status started and/or ended (1..1) */
  period?: Period;

  override fhirType(): string {
    return 'Citation.citedArtifact.statusDate';
  }

  /** FHIR JSON for this CitationCitedArtifactStatusDate, typed as the plain `CitationStatusDate1` data type. */
  override toJSON(): plainTypes.CitationStatusDate1 {
    return this.serialize() as plainTypes.CitationStatusDate1;
  }

  /** Classification of the status (1..1) Created when absent. */
  getActivity(): CodeableConcept {
    if (this.activity === undefined) {
      this.activity = new CodeableConcept();
    }
    return this.activity;
  }

  setActivity(activity: CodeableConcept | undefined): this {
    return this.setFieldValue('activity', activity);
  }

  hasActivity(): boolean {
    return this.hasFieldValue('activity');
  }

  /** Either occurred or expected (0..1) */
  getActual(): boolean | undefined {
    return this.actual;
  }

  /** Sets `actual`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActual(actual: boolean | undefined): this {
    return this.setFieldValue('actual', actual);
  }

  hasActual(): boolean {
    return this.hasFieldValue('actual');
  }

  /** The element carrying the id and extensions of `actual`. Created when absent. */
  getActualElement(): Element {
    if (this._actual === undefined) {
      this._actual = new Element();
    }
    return this._actual;
  }

  setActualElement(actualElement: Element | undefined): this {
    this._actual = actualElement;
    return this;
  }

  /** When the status started and/or ended (1..1) Created when absent. */
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
  'CitationCitedArtifactStatusDate',
  CitationCitedArtifactStatusDate,
  false
);

/**
 * The title details of the article or artifact
 */
export class CitationCitedArtifactTitle extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'text',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'markdown' }],
    },
  ];

  /** The kind of title (0..*) */
  type?: CodeableConcept[];

  /** Used to express the specific language (0..1) */
  language?: CodeableConcept;

  /** The title of the article or artifact (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  override fhirType(): string {
    return 'Citation.citedArtifact.title';
  }

  /** FHIR JSON for this CitationCitedArtifactTitle, typed as the plain `CitationTitle` data type. */
  override toJSON(): plainTypes.CitationTitle {
    return this.serialize() as plainTypes.CitationTitle;
  }

  /** The kind of title (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** Used to express the specific language (0..1) Created when absent. */
  getLanguage(): CodeableConcept {
    if (this.language === undefined) {
      this.language = new CodeableConcept();
    }
    return this.language;
  }

  setLanguage(language: CodeableConcept | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The title of the article or artifact (1..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }
}

modelTypeRegistry.register('CitationCitedArtifactTitle', CitationCitedArtifactTitle, false);

/**
 * Summary of the article or artifact
 */
export class CitationCitedArtifactAbstract extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'text',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'markdown' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
  ];

  /** The kind of abstract (0..1) */
  type?: CodeableConcept;

  /** Used to express the specific language (0..1) */
  language?: CodeableConcept;

  /** Abstract content (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Copyright notice for the abstract (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  override fhirType(): string {
    return 'Citation.citedArtifact.abstract';
  }

  /** FHIR JSON for this CitationCitedArtifactAbstract, typed as the plain `CitationAbstract` data type. */
  override toJSON(): plainTypes.CitationAbstract {
    return this.serialize() as plainTypes.CitationAbstract;
  }

  /** The kind of abstract (0..1) Created when absent. */
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

  /** Used to express the specific language (0..1) Created when absent. */
  getLanguage(): CodeableConcept {
    if (this.language === undefined) {
      this.language = new CodeableConcept();
    }
    return this.language;
  }

  setLanguage(language: CodeableConcept | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** Abstract content (1..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }

  /** Copyright notice for the abstract (0..1) */
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
}

modelTypeRegistry.register('CitationCitedArtifactAbstract', CitationCitedArtifactAbstract, false);

/**
 * The component of the article or artifact
 */
export class CitationCitedArtifactPart extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
    {
      elementName: 'baseCitation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'baseCitation', typeCode: 'Reference', targetResourceTypes: ['Citation'] },
      ],
    },
  ];

  /** The kind of component (0..1) */
  type?: CodeableConcept;

  /** The specification of the component (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** The citation for the full article or artifact (0..1) */
  baseCitation?: Reference;

  override fhirType(): string {
    return 'Citation.citedArtifact.part';
  }

  /** FHIR JSON for this CitationCitedArtifactPart, typed as the plain `CitationPart` data type. */
  override toJSON(): plainTypes.CitationPart {
    return this.serialize() as plainTypes.CitationPart;
  }

  /** The kind of component (0..1) Created when absent. */
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

  /** The specification of the component (0..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setValue(value: string | undefined): this {
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

  /** The citation for the full article or artifact (0..1) Created when absent. */
  getBaseCitation(): Reference {
    if (this.baseCitation === undefined) {
      this.baseCitation = new Reference();
    }
    return this.baseCitation;
  }

  setBaseCitation(baseCitation: Reference | undefined): this {
    return this.setFieldValue('baseCitation', baseCitation);
  }

  hasBaseCitation(): boolean {
    return this.hasFieldValue('baseCitation');
  }
}

modelTypeRegistry.register('CitationCitedArtifactPart', CitationCitedArtifactPart, false);

/**
 * The artifact related to the cited artifact
 */
export class CitationCitedArtifactRelatesTo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.RelatedArtifactTypeExpanded,
        },
      ],
    },
    {
      elementName: 'classifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'label',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'label', typeCode: 'string' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
    {
      elementName: 'citation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'citation', typeCode: 'markdown' }],
    },
    {
      elementName: 'document',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'document', typeCode: 'Attachment' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'canonical' }],
    },
    {
      elementName: 'resourceReference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resourceReference', typeCode: 'Reference' }],
    },
  ];

  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as | reprint | reprint-of (1..1) */
  type?: valueSetCodes.RelatedArtifactTypeExpanded;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Additional classifiers (0..*) */
  classifier?: CodeableConcept[];

  /** Short label (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;

  /** Brief description of the related artifact (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Bibliographic citation for the artifact (0..1) */
  citation?: string;
  /** Id and extensions of the primitive `citation`. */
  _citation?: Element;

  /** What document is being referenced (0..1) */
  document?: Attachment;

  /** What artifact is being referenced (0..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;

  /** What artifact, if not a conformance resource (0..1) */
  resourceReference?: Reference;

  override fhirType(): string {
    return 'Citation.citedArtifact.relatesTo';
  }

  /** FHIR JSON for this CitationCitedArtifactRelatesTo, typed as the plain `CitationRelatesTo` data type. */
  override toJSON(): plainTypes.CitationRelatesTo {
    return this.serialize() as plainTypes.CitationRelatesTo;
  }

  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as | reprint | reprint-of (1..1) */
  getType(): valueSetCodes.RelatedArtifactTypeExpanded | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.RelatedArtifactTypeExpanded | undefined): this {
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

  /** Additional classifiers (0..*) Never undefined; an empty list is created when absent. */
  getClassifier(): CodeableConcept[] {
    if (this.classifier === undefined) {
      this.classifier = [];
    }
    return this.classifier;
  }

  setClassifier(classifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classifier', classifier);
  }

  hasClassifier(): boolean {
    return this.hasFieldValue('classifier');
  }

  /** Appends a new, empty CodeableConcept to `classifier` and returns it so it can be filled in. */
  addClassifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `classifier` and returns this object for chaining. */
  addClassifier(codeableConcept: CodeableConcept): this;
  addClassifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classifier`. One is added when the list is empty. */
  getClassifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassifier()[0];
    return firstCodeableConcept === undefined ? this.addClassifier() : firstCodeableConcept;
  }

  /** Short label (0..1) */
  getLabel(): string | undefined {
    return this.label;
  }

  /** Sets `label`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLabel(label: string | undefined): this {
    return this.setFieldValue('label', label);
  }

  hasLabel(): boolean {
    return this.hasFieldValue('label');
  }

  /** The element carrying the id and extensions of `label`. Created when absent. */
  getLabelElement(): Element {
    if (this._label === undefined) {
      this._label = new Element();
    }
    return this._label;
  }

  setLabelElement(labelElement: Element | undefined): this {
    this._label = labelElement;
    return this;
  }

  /** Brief description of the related artifact (0..1) */
  getDisplay(): string | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

  /** Bibliographic citation for the artifact (0..1) */
  getCitation(): string | undefined {
    return this.citation;
  }

  /** Sets `citation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setCitation(citation: string | undefined): this {
    return this.setFieldValue('citation', citation);
  }

  hasCitation(): boolean {
    return this.hasFieldValue('citation');
  }

  /** The element carrying the id and extensions of `citation`. Created when absent. */
  getCitationElement(): Element {
    if (this._citation === undefined) {
      this._citation = new Element();
    }
    return this._citation;
  }

  setCitationElement(citationElement: Element | undefined): this {
    this._citation = citationElement;
    return this;
  }

  /** What document is being referenced (0..1) Created when absent. */
  getDocument(): Attachment {
    if (this.document === undefined) {
      this.document = new Attachment();
    }
    return this.document;
  }

  setDocument(document: Attachment | undefined): this {
    return this.setFieldValue('document', document);
  }

  hasDocument(): boolean {
    return this.hasFieldValue('document');
  }

  /** What artifact is being referenced (0..1) */
  getResource(): string | undefined {
    return this.resource;
  }

  /** Sets `resource`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setResource(resource: string | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** The element carrying the id and extensions of `resource`. Created when absent. */
  getResourceElement(): Element {
    if (this._resource === undefined) {
      this._resource = new Element();
    }
    return this._resource;
  }

  setResourceElement(resourceElement: Element | undefined): this {
    this._resource = resourceElement;
    return this;
  }

  /** What artifact, if not a conformance resource (0..1) Created when absent. */
  getResourceReference(): Reference {
    if (this.resourceReference === undefined) {
      this.resourceReference = new Reference();
    }
    return this.resourceReference;
  }

  setResourceReference(resourceReference: Reference | undefined): this {
    return this.setFieldValue('resourceReference', resourceReference);
  }

  hasResourceReference(): boolean {
    return this.hasFieldValue('resourceReference');
  }
}

modelTypeRegistry.register('CitationCitedArtifactRelatesTo', CitationCitedArtifactRelatesTo, false);

/**
 * If multiple, used to represent alternative forms of the article that are not separate citations
 */
export class CitationCitedArtifactPublicationForm extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'publishedIn',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'publishedIn', typeCode: 'CitationCitedArtifactPublicationFormPublishedIn' },
      ],
    },
    {
      elementName: 'citedMedium',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'citedMedium', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'volume',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'volume', typeCode: 'string' }],
    },
    {
      elementName: 'issue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issue', typeCode: 'string' }],
    },
    {
      elementName: 'articleDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'articleDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'publicationDateText',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'publicationDateText', typeCode: 'string' }],
    },
    {
      elementName: 'publicationDateSeason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'publicationDateSeason', typeCode: 'string' }],
    },
    {
      elementName: 'lastRevisionDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastRevisionDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'language', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'accessionNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'accessionNumber', typeCode: 'string' }],
    },
    {
      elementName: 'pageString',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'pageString', typeCode: 'string' }],
    },
    {
      elementName: 'firstPage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'firstPage', typeCode: 'string' }],
    },
    {
      elementName: 'lastPage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastPage', typeCode: 'string' }],
    },
    {
      elementName: 'pageCount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'pageCount', typeCode: 'string' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
  ];

  /** The collection the cited article or artifact is published in (0..1) */
  publishedIn?: CitationCitedArtifactPublicationFormPublishedIn;

  /** Internet or Print (0..1) */
  citedMedium?: CodeableConcept;

  /** Volume number of journal or other collection in which the article is published (0..1) */
  volume?: string;
  /** Id and extensions of the primitive `volume`. */
  _volume?: Element;

  /** Issue, part or supplement of journal or other collection in which the article is published (0..1) */
  issue?: string;
  /** Id and extensions of the primitive `issue`. */
  _issue?: Element;

  /** The date the article was added to the database, or the date the article was released (0..1) */
  articleDate?: string;
  /** Id and extensions of the primitive `articleDate`. */
  _articleDate?: Element;

  /** Text representation of the date on which the issue of the cited artifact was published (0..1) */
  publicationDateText?: string;
  /** Id and extensions of the primitive `publicationDateText`. */
  _publicationDateText?: Element;

  /** Season in which the cited artifact was published (0..1) */
  publicationDateSeason?: string;
  /** Id and extensions of the primitive `publicationDateSeason`. */
  _publicationDateSeason?: Element;

  /** The date the article was last revised or updated in the database (0..1) */
  lastRevisionDate?: string;
  /** Id and extensions of the primitive `lastRevisionDate`. */
  _lastRevisionDate?: Element;

  /** Language(s) in which this form of the article is published (0..*) */
  language?: CodeableConcept[];

  /** Entry number or identifier for inclusion in a database (0..1) */
  accessionNumber?: string;
  /** Id and extensions of the primitive `accessionNumber`. */
  _accessionNumber?: Element;

  /** Used for full display of pagination (0..1) */
  pageString?: string;
  /** Id and extensions of the primitive `pageString`. */
  _pageString?: Element;

  /** Used for isolated representation of first page (0..1) */
  firstPage?: string;
  /** Id and extensions of the primitive `firstPage`. */
  _firstPage?: Element;

  /** Used for isolated representation of last page (0..1) */
  lastPage?: string;
  /** Id and extensions of the primitive `lastPage`. */
  _lastPage?: Element;

  /** Number of pages or screens (0..1) */
  pageCount?: string;
  /** Id and extensions of the primitive `pageCount`. */
  _pageCount?: Element;

  /** Copyright notice for the full article or artifact (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  override fhirType(): string {
    return 'Citation.citedArtifact.publicationForm';
  }

  /** FHIR JSON for this CitationCitedArtifactPublicationForm, typed as the plain `CitationPublicationForm` data type. */
  override toJSON(): plainTypes.CitationPublicationForm {
    return this.serialize() as plainTypes.CitationPublicationForm;
  }

  /** The collection the cited article or artifact is published in (0..1) Created when absent. */
  getPublishedIn(): CitationCitedArtifactPublicationFormPublishedIn {
    if (this.publishedIn === undefined) {
      this.publishedIn = new CitationCitedArtifactPublicationFormPublishedIn();
    }
    return this.publishedIn;
  }

  setPublishedIn(publishedIn: CitationCitedArtifactPublicationFormPublishedIn | undefined): this {
    return this.setFieldValue('publishedIn', publishedIn);
  }

  hasPublishedIn(): boolean {
    return this.hasFieldValue('publishedIn');
  }

  /** Internet or Print (0..1) Created when absent. */
  getCitedMedium(): CodeableConcept {
    if (this.citedMedium === undefined) {
      this.citedMedium = new CodeableConcept();
    }
    return this.citedMedium;
  }

  setCitedMedium(citedMedium: CodeableConcept | undefined): this {
    return this.setFieldValue('citedMedium', citedMedium);
  }

  hasCitedMedium(): boolean {
    return this.hasFieldValue('citedMedium');
  }

  /** Volume number of journal or other collection in which the article is published (0..1) */
  getVolume(): string | undefined {
    return this.volume;
  }

  /** Sets `volume`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVolume(volume: string | undefined): this {
    return this.setFieldValue('volume', volume);
  }

  hasVolume(): boolean {
    return this.hasFieldValue('volume');
  }

  /** The element carrying the id and extensions of `volume`. Created when absent. */
  getVolumeElement(): Element {
    if (this._volume === undefined) {
      this._volume = new Element();
    }
    return this._volume;
  }

  setVolumeElement(volumeElement: Element | undefined): this {
    this._volume = volumeElement;
    return this;
  }

  /** Issue, part or supplement of journal or other collection in which the article is published (0..1) */
  getIssue(): string | undefined {
    return this.issue;
  }

  /** Sets `issue`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setIssue(issue: string | undefined): this {
    return this.setFieldValue('issue', issue);
  }

  hasIssue(): boolean {
    return this.hasFieldValue('issue');
  }

  /** The element carrying the id and extensions of `issue`. Created when absent. */
  getIssueElement(): Element {
    if (this._issue === undefined) {
      this._issue = new Element();
    }
    return this._issue;
  }

  setIssueElement(issueElement: Element | undefined): this {
    this._issue = issueElement;
    return this;
  }

  /** The date the article was added to the database, or the date the article was released (0..1) */
  getArticleDate(): string | undefined {
    return this.articleDate;
  }

  /** Sets `articleDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setArticleDate(articleDate: string | undefined): this {
    return this.setFieldValue('articleDate', articleDate);
  }

  hasArticleDate(): boolean {
    return this.hasFieldValue('articleDate');
  }

  /** The element carrying the id and extensions of `articleDate`. Created when absent. */
  getArticleDateElement(): Element {
    if (this._articleDate === undefined) {
      this._articleDate = new Element();
    }
    return this._articleDate;
  }

  setArticleDateElement(articleDateElement: Element | undefined): this {
    this._articleDate = articleDateElement;
    return this;
  }

  /** Text representation of the date on which the issue of the cited artifact was published (0..1) */
  getPublicationDateText(): string | undefined {
    return this.publicationDateText;
  }

  /** Sets `publicationDateText`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPublicationDateText(publicationDateText: string | undefined): this {
    return this.setFieldValue('publicationDateText', publicationDateText);
  }

  hasPublicationDateText(): boolean {
    return this.hasFieldValue('publicationDateText');
  }

  /** The element carrying the id and extensions of `publicationDateText`. Created when absent. */
  getPublicationDateTextElement(): Element {
    if (this._publicationDateText === undefined) {
      this._publicationDateText = new Element();
    }
    return this._publicationDateText;
  }

  setPublicationDateTextElement(publicationDateTextElement: Element | undefined): this {
    this._publicationDateText = publicationDateTextElement;
    return this;
  }

  /** Season in which the cited artifact was published (0..1) */
  getPublicationDateSeason(): string | undefined {
    return this.publicationDateSeason;
  }

  /** Sets `publicationDateSeason`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPublicationDateSeason(publicationDateSeason: string | undefined): this {
    return this.setFieldValue('publicationDateSeason', publicationDateSeason);
  }

  hasPublicationDateSeason(): boolean {
    return this.hasFieldValue('publicationDateSeason');
  }

  /** The element carrying the id and extensions of `publicationDateSeason`. Created when absent. */
  getPublicationDateSeasonElement(): Element {
    if (this._publicationDateSeason === undefined) {
      this._publicationDateSeason = new Element();
    }
    return this._publicationDateSeason;
  }

  setPublicationDateSeasonElement(publicationDateSeasonElement: Element | undefined): this {
    this._publicationDateSeason = publicationDateSeasonElement;
    return this;
  }

  /** The date the article was last revised or updated in the database (0..1) */
  getLastRevisionDate(): string | undefined {
    return this.lastRevisionDate;
  }

  /** Sets `lastRevisionDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setLastRevisionDate(lastRevisionDate: string | undefined): this {
    return this.setFieldValue('lastRevisionDate', lastRevisionDate);
  }

  hasLastRevisionDate(): boolean {
    return this.hasFieldValue('lastRevisionDate');
  }

  /** The element carrying the id and extensions of `lastRevisionDate`. Created when absent. */
  getLastRevisionDateElement(): Element {
    if (this._lastRevisionDate === undefined) {
      this._lastRevisionDate = new Element();
    }
    return this._lastRevisionDate;
  }

  setLastRevisionDateElement(lastRevisionDateElement: Element | undefined): this {
    this._lastRevisionDate = lastRevisionDateElement;
    return this;
  }

  /** Language(s) in which this form of the article is published (0..*) Never undefined; an empty list is created when absent. */
  getLanguage(): CodeableConcept[] {
    if (this.language === undefined) {
      this.language = [];
    }
    return this.language;
  }

  setLanguage(language: CodeableConcept[] | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** Appends a new, empty CodeableConcept to `language` and returns it so it can be filled in. */
  addLanguage(): CodeableConcept;
  /** Appends the given CodeableConcept to `language` and returns this object for chaining. */
  addLanguage(codeableConcept: CodeableConcept): this;
  addLanguage(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('language', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('language', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `language`. One is added when the list is empty. */
  getLanguageFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getLanguage()[0];
    return firstCodeableConcept === undefined ? this.addLanguage() : firstCodeableConcept;
  }

  /** Entry number or identifier for inclusion in a database (0..1) */
  getAccessionNumber(): string | undefined {
    return this.accessionNumber;
  }

  /** Sets `accessionNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAccessionNumber(accessionNumber: string | undefined): this {
    return this.setFieldValue('accessionNumber', accessionNumber);
  }

  hasAccessionNumber(): boolean {
    return this.hasFieldValue('accessionNumber');
  }

  /** The element carrying the id and extensions of `accessionNumber`. Created when absent. */
  getAccessionNumberElement(): Element {
    if (this._accessionNumber === undefined) {
      this._accessionNumber = new Element();
    }
    return this._accessionNumber;
  }

  setAccessionNumberElement(accessionNumberElement: Element | undefined): this {
    this._accessionNumber = accessionNumberElement;
    return this;
  }

  /** Used for full display of pagination (0..1) */
  getPageString(): string | undefined {
    return this.pageString;
  }

  /** Sets `pageString`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPageString(pageString: string | undefined): this {
    return this.setFieldValue('pageString', pageString);
  }

  hasPageString(): boolean {
    return this.hasFieldValue('pageString');
  }

  /** The element carrying the id and extensions of `pageString`. Created when absent. */
  getPageStringElement(): Element {
    if (this._pageString === undefined) {
      this._pageString = new Element();
    }
    return this._pageString;
  }

  setPageStringElement(pageStringElement: Element | undefined): this {
    this._pageString = pageStringElement;
    return this;
  }

  /** Used for isolated representation of first page (0..1) */
  getFirstPage(): string | undefined {
    return this.firstPage;
  }

  /** Sets `firstPage`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setFirstPage(firstPage: string | undefined): this {
    return this.setFieldValue('firstPage', firstPage);
  }

  hasFirstPage(): boolean {
    return this.hasFieldValue('firstPage');
  }

  /** The element carrying the id and extensions of `firstPage`. Created when absent. */
  getFirstPageElement(): Element {
    if (this._firstPage === undefined) {
      this._firstPage = new Element();
    }
    return this._firstPage;
  }

  setFirstPageElement(firstPageElement: Element | undefined): this {
    this._firstPage = firstPageElement;
    return this;
  }

  /** Used for isolated representation of last page (0..1) */
  getLastPage(): string | undefined {
    return this.lastPage;
  }

  /** Sets `lastPage`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLastPage(lastPage: string | undefined): this {
    return this.setFieldValue('lastPage', lastPage);
  }

  hasLastPage(): boolean {
    return this.hasFieldValue('lastPage');
  }

  /** The element carrying the id and extensions of `lastPage`. Created when absent. */
  getLastPageElement(): Element {
    if (this._lastPage === undefined) {
      this._lastPage = new Element();
    }
    return this._lastPage;
  }

  setLastPageElement(lastPageElement: Element | undefined): this {
    this._lastPage = lastPageElement;
    return this;
  }

  /** Number of pages or screens (0..1) */
  getPageCount(): string | undefined {
    return this.pageCount;
  }

  /** Sets `pageCount`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPageCount(pageCount: string | undefined): this {
    return this.setFieldValue('pageCount', pageCount);
  }

  hasPageCount(): boolean {
    return this.hasFieldValue('pageCount');
  }

  /** The element carrying the id and extensions of `pageCount`. Created when absent. */
  getPageCountElement(): Element {
    if (this._pageCount === undefined) {
      this._pageCount = new Element();
    }
    return this._pageCount;
  }

  setPageCountElement(pageCountElement: Element | undefined): this {
    this._pageCount = pageCountElement;
    return this;
  }

  /** Copyright notice for the full article or artifact (0..1) */
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
}

modelTypeRegistry.register(
  'CitationCitedArtifactPublicationForm',
  CitationCitedArtifactPublicationForm,
  false
);

/**
 * The collection the cited article or artifact is published in
 */
export class CitationCitedArtifactPublicationFormPublishedIn extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'publisher',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'publisher', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'publisherLocation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'publisherLocation', typeCode: 'string' }],
    },
  ];

  /** Kind of container (e.g. Periodical, database, or book) (0..1) */
  type?: CodeableConcept;

  /** Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN (0..*) */
  identifier?: Identifier[];

  /** Name of the database or title of the book or journal (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Name of or resource describing the publisher (0..1) */
  publisher?: Reference;

  /** Geographic location of the publisher (0..1) */
  publisherLocation?: string;
  /** Id and extensions of the primitive `publisherLocation`. */
  _publisherLocation?: Element;

  override fhirType(): string {
    return 'Citation.citedArtifact.publicationForm.publishedIn';
  }

  /** FHIR JSON for this CitationCitedArtifactPublicationFormPublishedIn, typed as the plain `CitationPublishedIn` data type. */
  override toJSON(): plainTypes.CitationPublishedIn {
    return this.serialize() as plainTypes.CitationPublishedIn;
  }

  /** Kind of container (e.g. Periodical, database, or book) (0..1) Created when absent. */
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

  /** Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN (0..*) Never undefined; an empty list is created when absent. */
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

  /** Name of the database or title of the book or journal (0..1) */
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

  /** Name of or resource describing the publisher (0..1) Created when absent. */
  getPublisher(): Reference {
    if (this.publisher === undefined) {
      this.publisher = new Reference();
    }
    return this.publisher;
  }

  setPublisher(publisher: Reference | undefined): this {
    return this.setFieldValue('publisher', publisher);
  }

  hasPublisher(): boolean {
    return this.hasFieldValue('publisher');
  }

  /** Geographic location of the publisher (0..1) */
  getPublisherLocation(): string | undefined {
    return this.publisherLocation;
  }

  /** Sets `publisherLocation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPublisherLocation(publisherLocation: string | undefined): this {
    return this.setFieldValue('publisherLocation', publisherLocation);
  }

  hasPublisherLocation(): boolean {
    return this.hasFieldValue('publisherLocation');
  }

  /** The element carrying the id and extensions of `publisherLocation`. Created when absent. */
  getPublisherLocationElement(): Element {
    if (this._publisherLocation === undefined) {
      this._publisherLocation = new Element();
    }
    return this._publisherLocation;
  }

  setPublisherLocationElement(publisherLocationElement: Element | undefined): this {
    this._publisherLocation = publisherLocationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CitationCitedArtifactPublicationFormPublishedIn',
  CitationCitedArtifactPublicationFormPublishedIn,
  false
);

/**
 * Used for any URL for the article or artifact cited
 */
export class CitationCitedArtifactWebLocation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'classifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
  ];

  /** Code the reason for different URLs, e.g. abstract and full-text (0..*) */
  classifier?: CodeableConcept[];

  /** The specific URL (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  override fhirType(): string {
    return 'Citation.citedArtifact.webLocation';
  }

  /** FHIR JSON for this CitationCitedArtifactWebLocation, typed as the plain `CitationWebLocation` data type. */
  override toJSON(): plainTypes.CitationWebLocation {
    return this.serialize() as plainTypes.CitationWebLocation;
  }

  /** Code the reason for different URLs, e.g. abstract and full-text (0..*) Never undefined; an empty list is created when absent. */
  getClassifier(): CodeableConcept[] {
    if (this.classifier === undefined) {
      this.classifier = [];
    }
    return this.classifier;
  }

  setClassifier(classifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classifier', classifier);
  }

  hasClassifier(): boolean {
    return this.hasFieldValue('classifier');
  }

  /** Appends a new, empty CodeableConcept to `classifier` and returns it so it can be filled in. */
  addClassifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `classifier` and returns this object for chaining. */
  addClassifier(codeableConcept: CodeableConcept): this;
  addClassifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classifier`. One is added when the list is empty. */
  getClassifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassifier()[0];
    return firstCodeableConcept === undefined ? this.addClassifier() : firstCodeableConcept;
  }

  /** The specific URL (0..1) */
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
}

modelTypeRegistry.register(
  'CitationCitedArtifactWebLocation',
  CitationCitedArtifactWebLocation,
  false
);

/**
 * The assignment to an organizing scheme
 */
export class CitationCitedArtifactClassification extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'classifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'artifactAssessment',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'artifactAssessment',
          typeCode: 'Reference',
          targetResourceTypes: ['ArtifactAssessment'],
        },
      ],
    },
  ];

  /** The kind of classifier (e.g. publication type, keyword) (0..1) */
  type?: CodeableConcept;

  /** The specific classification value (0..*) */
  classifier?: CodeableConcept[];

  /** Complex or externally created classification (0..*) */
  artifactAssessment?: Reference[];

  override fhirType(): string {
    return 'Citation.citedArtifact.classification';
  }

  /** FHIR JSON for this CitationCitedArtifactClassification, typed as the plain `CitationClassification1` data type. */
  override toJSON(): plainTypes.CitationClassification1 {
    return this.serialize() as plainTypes.CitationClassification1;
  }

  /** The kind of classifier (e.g. publication type, keyword) (0..1) Created when absent. */
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

  /** The specific classification value (0..*) Never undefined; an empty list is created when absent. */
  getClassifier(): CodeableConcept[] {
    if (this.classifier === undefined) {
      this.classifier = [];
    }
    return this.classifier;
  }

  setClassifier(classifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classifier', classifier);
  }

  hasClassifier(): boolean {
    return this.hasFieldValue('classifier');
  }

  /** Appends a new, empty CodeableConcept to `classifier` and returns it so it can be filled in. */
  addClassifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `classifier` and returns this object for chaining. */
  addClassifier(codeableConcept: CodeableConcept): this;
  addClassifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classifier`. One is added when the list is empty. */
  getClassifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassifier()[0];
    return firstCodeableConcept === undefined ? this.addClassifier() : firstCodeableConcept;
  }

  /** Complex or externally created classification (0..*) Never undefined; an empty list is created when absent. */
  getArtifactAssessment(): Reference[] {
    if (this.artifactAssessment === undefined) {
      this.artifactAssessment = [];
    }
    return this.artifactAssessment;
  }

  setArtifactAssessment(artifactAssessment: Reference[] | undefined): this {
    return this.setFieldValue('artifactAssessment', artifactAssessment);
  }

  hasArtifactAssessment(): boolean {
    return this.hasFieldValue('artifactAssessment');
  }

  /** Appends a new, empty Reference to `artifactAssessment` and returns it so it can be filled in. */
  addArtifactAssessment(): Reference;
  /** Appends the given Reference to `artifactAssessment` and returns this object for chaining. */
  addArtifactAssessment(reference: Reference): this;
  addArtifactAssessment(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('artifactAssessment', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('artifactAssessment', createdReference);
    return createdReference;
  }

  /** The first Reference of `artifactAssessment`. One is added when the list is empty. */
  getArtifactAssessmentFirstRep(): Reference {
    const firstReference = this.getArtifactAssessment()[0];
    return firstReference === undefined ? this.addArtifactAssessment() : firstReference;
  }
}

modelTypeRegistry.register(
  'CitationCitedArtifactClassification',
  CitationCitedArtifactClassification,
  false
);

/**
 * Attribution of authors and other contributors
 */
export class CitationCitedArtifactContributorship extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'complete',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'complete', typeCode: 'boolean' }],
    },
    {
      elementName: 'entry',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'entry', typeCode: 'CitationCitedArtifactContributorshipEntry' }],
    },
    {
      elementName: 'summary',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'summary', typeCode: 'CitationCitedArtifactContributorshipSummary' }],
    },
  ];

  /** Indicates if the list includes all authors and/or contributors (0..1) */
  complete?: boolean;
  /** Id and extensions of the primitive `complete`. */
  _complete?: Element;

  /** An individual entity named as a contributor (0..*) */
  entry?: CitationCitedArtifactContributorshipEntry[];

  /** Used to record a display of the author/contributor list without separate data element for each list member (0..*) */
  summary?: CitationCitedArtifactContributorshipSummary[];

  override fhirType(): string {
    return 'Citation.citedArtifact.contributorship';
  }

  /** FHIR JSON for this CitationCitedArtifactContributorship, typed as the plain `CitationContributorship` data type. */
  override toJSON(): plainTypes.CitationContributorship {
    return this.serialize() as plainTypes.CitationContributorship;
  }

  /** Indicates if the list includes all authors and/or contributors (0..1) */
  getComplete(): boolean | undefined {
    return this.complete;
  }

  /** Sets `complete`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setComplete(complete: boolean | undefined): this {
    return this.setFieldValue('complete', complete);
  }

  hasComplete(): boolean {
    return this.hasFieldValue('complete');
  }

  /** The element carrying the id and extensions of `complete`. Created when absent. */
  getCompleteElement(): Element {
    if (this._complete === undefined) {
      this._complete = new Element();
    }
    return this._complete;
  }

  setCompleteElement(completeElement: Element | undefined): this {
    this._complete = completeElement;
    return this;
  }

  /** An individual entity named as a contributor (0..*) Never undefined; an empty list is created when absent. */
  getEntry(): CitationCitedArtifactContributorshipEntry[] {
    if (this.entry === undefined) {
      this.entry = [];
    }
    return this.entry;
  }

  setEntry(entry: CitationCitedArtifactContributorshipEntry[] | undefined): this {
    return this.setFieldValue('entry', entry);
  }

  hasEntry(): boolean {
    return this.hasFieldValue('entry');
  }

  /** Appends a new, empty CitationCitedArtifactContributorshipEntry to `entry` and returns it so it can be filled in. */
  addEntry(): CitationCitedArtifactContributorshipEntry;
  /** Appends the given CitationCitedArtifactContributorshipEntry to `entry` and returns this object for chaining. */
  addEntry(
    citationCitedArtifactContributorshipEntry: CitationCitedArtifactContributorshipEntry
  ): this;
  addEntry(
    citationCitedArtifactContributorshipEntry?: CitationCitedArtifactContributorshipEntry
  ): CitationCitedArtifactContributorshipEntry | this {
    if (citationCitedArtifactContributorshipEntry !== undefined) {
      return this.addFieldValue('entry', citationCitedArtifactContributorshipEntry);
    }
    const createdCitationCitedArtifactContributorshipEntry =
      new CitationCitedArtifactContributorshipEntry();
    this.addFieldValue('entry', createdCitationCitedArtifactContributorshipEntry);
    return createdCitationCitedArtifactContributorshipEntry;
  }

  /** The first CitationCitedArtifactContributorshipEntry of `entry`. One is added when the list is empty. */
  getEntryFirstRep(): CitationCitedArtifactContributorshipEntry {
    const firstCitationCitedArtifactContributorshipEntry = this.getEntry()[0];
    return firstCitationCitedArtifactContributorshipEntry === undefined
      ? this.addEntry()
      : firstCitationCitedArtifactContributorshipEntry;
  }

  /** Used to record a display of the author/contributor list without separate data element for each list member (0..*) Never undefined; an empty list is created when absent. */
  getSummary(): CitationCitedArtifactContributorshipSummary[] {
    if (this.summary === undefined) {
      this.summary = [];
    }
    return this.summary;
  }

  setSummary(summary: CitationCitedArtifactContributorshipSummary[] | undefined): this {
    return this.setFieldValue('summary', summary);
  }

  hasSummary(): boolean {
    return this.hasFieldValue('summary');
  }

  /** Appends a new, empty CitationCitedArtifactContributorshipSummary to `summary` and returns it so it can be filled in. */
  addSummary(): CitationCitedArtifactContributorshipSummary;
  /** Appends the given CitationCitedArtifactContributorshipSummary to `summary` and returns this object for chaining. */
  addSummary(
    citationCitedArtifactContributorshipSummary: CitationCitedArtifactContributorshipSummary
  ): this;
  addSummary(
    citationCitedArtifactContributorshipSummary?: CitationCitedArtifactContributorshipSummary
  ): CitationCitedArtifactContributorshipSummary | this {
    if (citationCitedArtifactContributorshipSummary !== undefined) {
      return this.addFieldValue('summary', citationCitedArtifactContributorshipSummary);
    }
    const createdCitationCitedArtifactContributorshipSummary =
      new CitationCitedArtifactContributorshipSummary();
    this.addFieldValue('summary', createdCitationCitedArtifactContributorshipSummary);
    return createdCitationCitedArtifactContributorshipSummary;
  }

  /** The first CitationCitedArtifactContributorshipSummary of `summary`. One is added when the list is empty. */
  getSummaryFirstRep(): CitationCitedArtifactContributorshipSummary {
    const firstCitationCitedArtifactContributorshipSummary = this.getSummary()[0];
    return firstCitationCitedArtifactContributorshipSummary === undefined
      ? this.addSummary()
      : firstCitationCitedArtifactContributorshipSummary;
  }
}

modelTypeRegistry.register(
  'CitationCitedArtifactContributorship',
  CitationCitedArtifactContributorship,
  false
);

/**
 * An individual entity named as a contributor
 */
export class CitationCitedArtifactContributorshipEntry extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'contributor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'contributor',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'forenameInitials',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'forenameInitials', typeCode: 'string' }],
    },
    {
      elementName: 'affiliation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'affiliation',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'contributionType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contributionType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contributionInstance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'contributionInstance',
          typeCode: 'CitationCitedArtifactContributorshipEntryContributionInstance',
        },
      ],
    },
    {
      elementName: 'correspondingContact',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'correspondingContact', typeCode: 'boolean' }],
    },
    {
      elementName: 'rankingOrder',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rankingOrder', typeCode: 'positiveInt' }],
    },
  ];

  /** The identity of the individual contributor (1..1) */
  contributor?: Reference;

  /** For citation styles that use initials (0..1) */
  forenameInitials?: string;
  /** Id and extensions of the primitive `forenameInitials`. */
  _forenameInitials?: Element;

  /** Organizational affiliation (0..*) */
  affiliation?: Reference[];

  /** The specific contribution (0..*) */
  contributionType?: CodeableConcept[];

  /** The role of the contributor (e.g. author, editor, reviewer, funder) (0..1) */
  role?: CodeableConcept;

  /** Contributions with accounting for time or number (0..*) */
  contributionInstance?: CitationCitedArtifactContributorshipEntryContributionInstance[];

  /** Whether the contributor is the corresponding contributor for the role (0..1) */
  correspondingContact?: boolean;
  /** Id and extensions of the primitive `correspondingContact`. */
  _correspondingContact?: Element;

  /** Ranked order of contribution (0..1) */
  rankingOrder?: number;
  /** Id and extensions of the primitive `rankingOrder`. */
  _rankingOrder?: Element;

  override fhirType(): string {
    return 'Citation.citedArtifact.contributorship.entry';
  }

  /** FHIR JSON for this CitationCitedArtifactContributorshipEntry, typed as the plain `CitationEntry` data type. */
  override toJSON(): plainTypes.CitationEntry {
    return this.serialize() as plainTypes.CitationEntry;
  }

  /** The identity of the individual contributor (1..1) Created when absent. */
  getContributor(): Reference {
    if (this.contributor === undefined) {
      this.contributor = new Reference();
    }
    return this.contributor;
  }

  setContributor(contributor: Reference | undefined): this {
    return this.setFieldValue('contributor', contributor);
  }

  hasContributor(): boolean {
    return this.hasFieldValue('contributor');
  }

  /** For citation styles that use initials (0..1) */
  getForenameInitials(): string | undefined {
    return this.forenameInitials;
  }

  /** Sets `forenameInitials`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setForenameInitials(forenameInitials: string | undefined): this {
    return this.setFieldValue('forenameInitials', forenameInitials);
  }

  hasForenameInitials(): boolean {
    return this.hasFieldValue('forenameInitials');
  }

  /** The element carrying the id and extensions of `forenameInitials`. Created when absent. */
  getForenameInitialsElement(): Element {
    if (this._forenameInitials === undefined) {
      this._forenameInitials = new Element();
    }
    return this._forenameInitials;
  }

  setForenameInitialsElement(forenameInitialsElement: Element | undefined): this {
    this._forenameInitials = forenameInitialsElement;
    return this;
  }

  /** Organizational affiliation (0..*) Never undefined; an empty list is created when absent. */
  getAffiliation(): Reference[] {
    if (this.affiliation === undefined) {
      this.affiliation = [];
    }
    return this.affiliation;
  }

  setAffiliation(affiliation: Reference[] | undefined): this {
    return this.setFieldValue('affiliation', affiliation);
  }

  hasAffiliation(): boolean {
    return this.hasFieldValue('affiliation');
  }

  /** Appends a new, empty Reference to `affiliation` and returns it so it can be filled in. */
  addAffiliation(): Reference;
  /** Appends the given Reference to `affiliation` and returns this object for chaining. */
  addAffiliation(reference: Reference): this;
  addAffiliation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('affiliation', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('affiliation', createdReference);
    return createdReference;
  }

  /** The first Reference of `affiliation`. One is added when the list is empty. */
  getAffiliationFirstRep(): Reference {
    const firstReference = this.getAffiliation()[0];
    return firstReference === undefined ? this.addAffiliation() : firstReference;
  }

  /** The specific contribution (0..*) Never undefined; an empty list is created when absent. */
  getContributionType(): CodeableConcept[] {
    if (this.contributionType === undefined) {
      this.contributionType = [];
    }
    return this.contributionType;
  }

  setContributionType(contributionType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('contributionType', contributionType);
  }

  hasContributionType(): boolean {
    return this.hasFieldValue('contributionType');
  }

  /** Appends a new, empty CodeableConcept to `contributionType` and returns it so it can be filled in. */
  addContributionType(): CodeableConcept;
  /** Appends the given CodeableConcept to `contributionType` and returns this object for chaining. */
  addContributionType(codeableConcept: CodeableConcept): this;
  addContributionType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('contributionType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('contributionType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `contributionType`. One is added when the list is empty. */
  getContributionTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getContributionType()[0];
    return firstCodeableConcept === undefined ? this.addContributionType() : firstCodeableConcept;
  }

  /** The role of the contributor (e.g. author, editor, reviewer, funder) (0..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** Contributions with accounting for time or number (0..*) Never undefined; an empty list is created when absent. */
  getContributionInstance(): CitationCitedArtifactContributorshipEntryContributionInstance[] {
    if (this.contributionInstance === undefined) {
      this.contributionInstance = [];
    }
    return this.contributionInstance;
  }

  setContributionInstance(
    contributionInstance:
      CitationCitedArtifactContributorshipEntryContributionInstance[] | undefined
  ): this {
    return this.setFieldValue('contributionInstance', contributionInstance);
  }

  hasContributionInstance(): boolean {
    return this.hasFieldValue('contributionInstance');
  }

  /** Appends a new, empty CitationCitedArtifactContributorshipEntryContributionInstance to `contributionInstance` and returns it so it can be filled in. */
  addContributionInstance(): CitationCitedArtifactContributorshipEntryContributionInstance;
  /** Appends the given CitationCitedArtifactContributorshipEntryContributionInstance to `contributionInstance` and returns this object for chaining. */
  addContributionInstance(
    citationCitedArtifactContributorshipEntryContributionInstance: CitationCitedArtifactContributorshipEntryContributionInstance
  ): this;
  addContributionInstance(
    citationCitedArtifactContributorshipEntryContributionInstance?: CitationCitedArtifactContributorshipEntryContributionInstance
  ): CitationCitedArtifactContributorshipEntryContributionInstance | this {
    if (citationCitedArtifactContributorshipEntryContributionInstance !== undefined) {
      return this.addFieldValue(
        'contributionInstance',
        citationCitedArtifactContributorshipEntryContributionInstance
      );
    }
    const createdCitationCitedArtifactContributorshipEntryContributionInstance =
      new CitationCitedArtifactContributorshipEntryContributionInstance();
    this.addFieldValue(
      'contributionInstance',
      createdCitationCitedArtifactContributorshipEntryContributionInstance
    );
    return createdCitationCitedArtifactContributorshipEntryContributionInstance;
  }

  /** The first CitationCitedArtifactContributorshipEntryContributionInstance of `contributionInstance`. One is added when the list is empty. */
  getContributionInstanceFirstRep(): CitationCitedArtifactContributorshipEntryContributionInstance {
    const firstCitationCitedArtifactContributorshipEntryContributionInstance =
      this.getContributionInstance()[0];
    return firstCitationCitedArtifactContributorshipEntryContributionInstance === undefined
      ? this.addContributionInstance()
      : firstCitationCitedArtifactContributorshipEntryContributionInstance;
  }

  /** Whether the contributor is the corresponding contributor for the role (0..1) */
  getCorrespondingContact(): boolean | undefined {
    return this.correspondingContact;
  }

  /** Sets `correspondingContact`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setCorrespondingContact(correspondingContact: boolean | undefined): this {
    return this.setFieldValue('correspondingContact', correspondingContact);
  }

  hasCorrespondingContact(): boolean {
    return this.hasFieldValue('correspondingContact');
  }

  /** The element carrying the id and extensions of `correspondingContact`. Created when absent. */
  getCorrespondingContactElement(): Element {
    if (this._correspondingContact === undefined) {
      this._correspondingContact = new Element();
    }
    return this._correspondingContact;
  }

  setCorrespondingContactElement(correspondingContactElement: Element | undefined): this {
    this._correspondingContact = correspondingContactElement;
    return this;
  }

  /** Ranked order of contribution (0..1) */
  getRankingOrder(): number | undefined {
    return this.rankingOrder;
  }

  /** Sets `rankingOrder`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setRankingOrder(rankingOrder: number | undefined): this {
    return this.setFieldValue('rankingOrder', rankingOrder);
  }

  hasRankingOrder(): boolean {
    return this.hasFieldValue('rankingOrder');
  }

  /** The element carrying the id and extensions of `rankingOrder`. Created when absent. */
  getRankingOrderElement(): Element {
    if (this._rankingOrder === undefined) {
      this._rankingOrder = new Element();
    }
    return this._rankingOrder;
  }

  setRankingOrderElement(rankingOrderElement: Element | undefined): this {
    this._rankingOrder = rankingOrderElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CitationCitedArtifactContributorshipEntry',
  CitationCitedArtifactContributorshipEntry,
  false
);

/**
 * Contributions with accounting for time or number
 */
export class CitationCitedArtifactContributorshipEntryContributionInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'time',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'time', typeCode: 'dateTime' }],
    },
  ];

  /** The specific contribution (1..1) */
  type?: CodeableConcept;

  /** The time that the contribution was made (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;

  override fhirType(): string {
    return 'Citation.citedArtifact.contributorship.entry.contributionInstance';
  }

  /** FHIR JSON for this CitationCitedArtifactContributorshipEntryContributionInstance, typed as the plain `CitationContributionInstance` data type. */
  override toJSON(): plainTypes.CitationContributionInstance {
    return this.serialize() as plainTypes.CitationContributionInstance;
  }

  /** The specific contribution (1..1) Created when absent. */
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

  /** The time that the contribution was made (0..1) */
  getTime(): string | undefined {
    return this.time;
  }

  /** Sets `time`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setTime(time: string | undefined): this {
    return this.setFieldValue('time', time);
  }

  hasTime(): boolean {
    return this.hasFieldValue('time');
  }

  /** The element carrying the id and extensions of `time`. Created when absent. */
  getTimeElement(): Element {
    if (this._time === undefined) {
      this._time = new Element();
    }
    return this._time;
  }

  setTimeElement(timeElement: Element | undefined): this {
    this._time = timeElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CitationCitedArtifactContributorshipEntryContributionInstance',
  CitationCitedArtifactContributorshipEntryContributionInstance,
  false
);

/**
 * Used to record a display of the author/contributor list without separate data element for each list member
 */
export class CitationCitedArtifactContributorshipSummary extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'style',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'style', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'markdown' }],
    },
  ];

  /** Such as author list, contributorship statement, funding statement, acknowledgements statement, or conflicts of interest statement (0..1) */
  type?: CodeableConcept;

  /** The format for the display string (0..1) */
  style?: CodeableConcept;

  /** Used to code the producer or rule for creating the display string (0..1) */
  source?: CodeableConcept;

  /** The display string for the author list, contributor list, or contributorship statement (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'Citation.citedArtifact.contributorship.summary';
  }

  /** FHIR JSON for this CitationCitedArtifactContributorshipSummary, typed as the plain `CitationSummary1` data type. */
  override toJSON(): plainTypes.CitationSummary1 {
    return this.serialize() as plainTypes.CitationSummary1;
  }

  /** Such as author list, contributorship statement, funding statement, acknowledgements statement, or conflicts of interest statement (0..1) Created when absent. */
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

  /** The format for the display string (0..1) Created when absent. */
  getStyle(): CodeableConcept {
    if (this.style === undefined) {
      this.style = new CodeableConcept();
    }
    return this.style;
  }

  setStyle(style: CodeableConcept | undefined): this {
    return this.setFieldValue('style', style);
  }

  hasStyle(): boolean {
    return this.hasFieldValue('style');
  }

  /** Used to code the producer or rule for creating the display string (0..1) Created when absent. */
  getSource(): CodeableConcept {
    if (this.source === undefined) {
      this.source = new CodeableConcept();
    }
    return this.source;
  }

  setSource(source: CodeableConcept | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** The display string for the author list, contributor list, or contributorship statement (1..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setValue(value: string | undefined): this {
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
}

modelTypeRegistry.register(
  'CitationCitedArtifactContributorshipSummary',
  CitationCitedArtifactContributorshipSummary,
  false
);
