/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Attachment } from './attachment';
import { CodeableConcept } from './codeableConcept';
import { ContactDetail } from './contactDetail';
import { DataRequirement } from './dataRequirement';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { ParameterDefinition } from './parameterDefinition';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export class Library extends DomainResource {
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
      elementName: 'experimental',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'experimental', typeCode: 'boolean' }],
    },
    {
      elementName: 'type',
      minimum: 1,
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
        { jsonKey: 'subjectCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'subjectReference', typeCode: 'Reference', targetResourceTypes: ['Group'] },
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
      elementName: 'usage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'usage', typeCode: 'string' }],
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
      elementName: 'parameter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'ParameterDefinition' }],
    },
    {
      elementName: 'dataRequirement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dataRequirement', typeCode: 'DataRequirement' }],
    },
    {
      elementName: 'content',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'content', typeCode: 'Attachment' }],
    },
  ];

  readonly resourceType = 'Library';

  /** Canonical identifier for this library, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the library (0..*) */
  identifier?: Identifier[];

  /** Business version of the library (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this library (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this library (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Subordinate title of the library (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** logic-library | model-definition | asset-collection | module-definition (1..1) */
  type?: CodeableConcept;

  /** Type of individual the library content is focused on (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the library content is focused on (0..1) */
  subjectReference?: Reference;

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

  /** Natural language description of the library (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for library (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this library is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Describes the clinical usage of the library (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** When the library was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the library was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the library is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** E.g. Education, Treatment, Assessment, etc. (0..*) */
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

  /** Parameters defined by the library (0..*) */
  parameter?: ParameterDefinition[];

  /** What data is referenced by this library (0..*) */
  dataRequirement?: DataRequirement[];

  /** Contents of the library, either embedded or referenced (0..*) */
  content?: Attachment[];

  override fhirType(): string {
    return 'Library';
  }

  /** FHIR JSON for this Library, typed as the plain `Library` data type. */
  override toJSON(): plainTypes.Library {
    return this.serialize() as plainTypes.Library;
  }

  /** Canonical identifier for this library, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the library (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the library (0..1) */
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

  /** Name for this library (computer friendly) (0..1) */
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

  /** Name for this library (human friendly) (0..1) */
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

  /** Subordinate title of the library (0..1) */
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

  /** logic-library | model-definition | asset-collection | module-definition (1..1) Created when absent. */
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

  /** Type of individual the library content is focused on (0..1) Whichever type of `subject[x]` is set. */
  getSubject(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('subject');
  }

  /** True when any type of `subject[x]` is set. */
  hasSubject(): boolean {
    return this.hasChoiceValue('subject');
  }

  getSubjectCodeableConcept(): CodeableConcept | undefined {
    return this.subjectCodeableConcept;
  }

  /** Sets `subject[x]` as CodeableConcept and clears every other type of it. */
  setSubjectCodeableConcept(subjectCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('subjectCodeableConcept', subjectCodeableConcept);
  }

  hasSubjectCodeableConcept(): boolean {
    return this.hasFieldValue('subjectCodeableConcept');
  }

  getSubjectReference(): Reference | undefined {
    return this.subjectReference;
  }

  /** Sets `subject[x]` as Reference and clears every other type of it. */
  setSubjectReference(subjectReference: Reference | undefined): this {
    return this.setFieldValue('subjectReference', subjectReference);
  }

  hasSubjectReference(): boolean {
    return this.hasFieldValue('subjectReference');
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

  /** Natural language description of the library (0..1) */
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

  /** Intended jurisdiction for library (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this library is defined (0..1) */
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

  /** Describes the clinical usage of the library (0..1) */
  getUsage(): string | undefined {
    return this.usage;
  }

  /** Sets `usage`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setUsage(usage: string | undefined): this {
    return this.setFieldValue('usage', usage);
  }

  hasUsage(): boolean {
    return this.hasFieldValue('usage');
  }

  /** The element carrying the id and extensions of `usage`. Created when absent. */
  getUsageElement(): Element {
    if (this._usage === undefined) {
      this._usage = new Element();
    }
    return this._usage;
  }

  setUsageElement(usageElement: Element | undefined): this {
    this._usage = usageElement;
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

  /** When the library was approved by publisher (0..1) */
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

  /** When the library was last reviewed (0..1) */
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

  /** When the library is expected to be used (0..1) Created when absent. */
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

  /** E.g. Education, Treatment, Assessment, etc. (0..*) Never undefined; an empty list is created when absent. */
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

  /** Parameters defined by the library (0..*) Never undefined; an empty list is created when absent. */
  getParameter(): ParameterDefinition[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: ParameterDefinition[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty ParameterDefinition to `parameter` and returns it so it can be filled in. */
  addParameter(): ParameterDefinition;
  /** Appends the given ParameterDefinition to `parameter` and returns this object for chaining. */
  addParameter(parameterDefinition: ParameterDefinition): this;
  addParameter(parameterDefinition?: ParameterDefinition): ParameterDefinition | this {
    if (parameterDefinition !== undefined) {
      return this.addFieldValue('parameter', parameterDefinition);
    }
    const createdParameterDefinition = new ParameterDefinition();
    this.addFieldValue('parameter', createdParameterDefinition);
    return createdParameterDefinition;
  }

  /** The first ParameterDefinition of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): ParameterDefinition {
    const firstParameterDefinition = this.getParameter()[0];
    return firstParameterDefinition === undefined ? this.addParameter() : firstParameterDefinition;
  }

  /** What data is referenced by this library (0..*) Never undefined; an empty list is created when absent. */
  getDataRequirement(): DataRequirement[] {
    if (this.dataRequirement === undefined) {
      this.dataRequirement = [];
    }
    return this.dataRequirement;
  }

  setDataRequirement(dataRequirement: DataRequirement[] | undefined): this {
    return this.setFieldValue('dataRequirement', dataRequirement);
  }

  hasDataRequirement(): boolean {
    return this.hasFieldValue('dataRequirement');
  }

  /** Appends a new, empty DataRequirement to `dataRequirement` and returns it so it can be filled in. */
  addDataRequirement(): DataRequirement;
  /** Appends the given DataRequirement to `dataRequirement` and returns this object for chaining. */
  addDataRequirement(dataRequirement: DataRequirement): this;
  addDataRequirement(dataRequirement?: DataRequirement): DataRequirement | this {
    if (dataRequirement !== undefined) {
      return this.addFieldValue('dataRequirement', dataRequirement);
    }
    const createdDataRequirement = new DataRequirement();
    this.addFieldValue('dataRequirement', createdDataRequirement);
    return createdDataRequirement;
  }

  /** The first DataRequirement of `dataRequirement`. One is added when the list is empty. */
  getDataRequirementFirstRep(): DataRequirement {
    const firstDataRequirement = this.getDataRequirement()[0];
    return firstDataRequirement === undefined ? this.addDataRequirement() : firstDataRequirement;
  }

  /** Contents of the library, either embedded or referenced (0..*) Never undefined; an empty list is created when absent. */
  getContent(): Attachment[] {
    if (this.content === undefined) {
      this.content = [];
    }
    return this.content;
  }

  setContent(content: Attachment[] | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** Appends a new, empty Attachment to `content` and returns it so it can be filled in. */
  addContent(): Attachment;
  /** Appends the given Attachment to `content` and returns this object for chaining. */
  addContent(attachment: Attachment): this;
  addContent(attachment?: Attachment): Attachment | this {
    if (attachment !== undefined) {
      return this.addFieldValue('content', attachment);
    }
    const createdAttachment = new Attachment();
    this.addFieldValue('content', createdAttachment);
    return createdAttachment;
  }

  /** The first Attachment of `content`. One is added when the list is empty. */
  getContentFirstRep(): Attachment {
    const firstAttachment = this.getContent()[0];
    return firstAttachment === undefined ? this.addContent() : firstAttachment;
  }
}

modelTypeRegistry.register('Library', Library, true);

/** True when the value is a Library model instance. */
export function isLibrary(candidate: unknown): candidate is Library {
  return candidate instanceof Library;
}
