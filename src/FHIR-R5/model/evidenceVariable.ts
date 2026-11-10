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
import { Expression } from './expression';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
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
      elementName: 'shortTitle',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'shortTitle', typeCode: 'string' }],
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
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'actual',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actual', typeCode: 'boolean' }],
    },
    {
      elementName: 'characteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'EvidenceVariableCharacteristic' }],
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
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'EvidenceVariableCategory' }],
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

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

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

  /** Name of the publisher/steward (organization or individual) (0..1) */
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

  /** Why this EvidenceVariable is defined (0..1) */
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

  /** When the resource was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the resource was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the resource is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** Who authored the content (0..*) */
  author?: ContactDetail[];

  /** Who edited the content (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the content (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the content (0..*) */
  endorser?: ContactDetail[];

  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Actual or conceptual (0..1) */
  actual?: boolean;
  /** Id and extensions of the primitive `actual`. */
  _actual?: Element;

  /** A defining factor of the EvidenceVariable (0..*) */
  characteristic?: EvidenceVariableCharacteristic[];

  /** continuous | dichotomous | ordinal | polychotomous (0..1) */
  handling?: valueSetCodes.EvidenceVariableHandling;
  /** Id and extensions of the primitive `handling`. */
  _handling?: Element;

  /** A grouping for ordinal or polychotomous variables (0..*) */
  category?: EvidenceVariableCategory[];

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

  /** Why this EvidenceVariable is defined (0..1) */
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

  /** When the resource was approved by publisher (0..1) */
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

  /** When the resource was last reviewed by the publisher (0..1) */
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

  /** When the resource is expected to be used (0..1) Created when absent. */
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

  /** Additional documentation, citations, etc (0..*) Never undefined; an empty list is created when absent. */
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

  /** Actual or conceptual (0..1) */
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

  /** A defining factor of the EvidenceVariable (0..*) Never undefined; an empty list is created when absent. */
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

  /** A grouping for ordinal or polychotomous variables (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): EvidenceVariableCategory[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: EvidenceVariableCategory[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty EvidenceVariableCategory to `category` and returns it so it can be filled in. */
  addCategory(): EvidenceVariableCategory;
  /** Appends the given EvidenceVariableCategory to `category` and returns this object for chaining. */
  addCategory(evidenceVariableCategory: EvidenceVariableCategory): this;
  addCategory(
    evidenceVariableCategory?: EvidenceVariableCategory
  ): EvidenceVariableCategory | this {
    if (evidenceVariableCategory !== undefined) {
      return this.addFieldValue('category', evidenceVariableCategory);
    }
    const createdEvidenceVariableCategory = new EvidenceVariableCategory();
    this.addFieldValue('category', createdEvidenceVariableCategory);
    return createdEvidenceVariableCategory;
  }

  /** The first EvidenceVariableCategory of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): EvidenceVariableCategory {
    const firstEvidenceVariableCategory = this.getCategory()[0];
    return firstEvidenceVariableCategory === undefined
      ? this.addCategory()
      : firstEvidenceVariableCategory;
  }
}

modelTypeRegistry.register('EvidenceVariable', EvidenceVariable, true);

/** True when the value is a EvidenceVariable model instance. */
export function isEvidenceVariable(candidate: unknown): candidate is EvidenceVariable {
  return candidate instanceof EvidenceVariable;
}

/**
 * A defining factor of the EvidenceVariable
 */
export class EvidenceVariableCharacteristic extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'linkId', typeCode: 'id' }],
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
      elementName: 'exclude',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'exclude', typeCode: 'boolean' }],
    },
    {
      elementName: 'definitionReference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'definitionReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Evidence', 'EvidenceVariable', 'Group'],
        },
      ],
    },
    {
      elementName: 'definitionCanonical',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definitionCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'definitionCodeableConcept',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definitionCodeableConcept', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'definitionExpression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definitionExpression', typeCode: 'Expression' }],
    },
    {
      elementName: 'definitionId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definitionId', typeCode: 'id' }],
    },
    {
      elementName: 'definitionByTypeAndValue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'definitionByTypeAndValue',
          typeCode: 'EvidenceVariableCharacteristicDefinitionByTypeAndValue',
        },
      ],
    },
    {
      elementName: 'definitionByCombination',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'definitionByCombination',
          typeCode: 'EvidenceVariableCharacteristicDefinitionByCombination',
        },
      ],
    },
    {
      elementName: 'instances',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'instancesQuantity', typeCode: 'Quantity' },
        { jsonKey: 'instancesRange', typeCode: 'Range' },
      ],
    },
    {
      elementName: 'duration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'durationQuantity', typeCode: 'Quantity' },
        { jsonKey: 'durationRange', typeCode: 'Range' },
      ],
    },
    {
      elementName: 'timeFromEvent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'timeFromEvent', typeCode: 'EvidenceVariableCharacteristicTimeFromEvent' },
      ],
    },
  ];

  /** Label for internal linking (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** Natural language description of the characteristic (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Used for footnotes or explanatory notes (0..*) */
  note?: Annotation[];

  /** Whether the characteristic is an inclusion criterion or exclusion criterion (0..1) */
  exclude?: boolean;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Element;

  /** Defines the characteristic (without using type and value) by a Reference (0..1) */
  definitionReference?: Reference;

  /** Defines the characteristic (without using type and value) by a Canonical (0..1) */
  definitionCanonical?: string;
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: Element;

  /** Defines the characteristic (without using type and value) by a CodeableConcept (0..1) */
  definitionCodeableConcept?: CodeableConcept;

  /** Defines the characteristic (without using type and value) by an expression (0..1) */
  definitionExpression?: Expression;

  /** Defines the characteristic (without using type and value) by an id (0..1) */
  definitionId?: string;
  /** Id and extensions of the primitive `definitionId`. */
  _definitionId?: Element;

  /** Defines the characteristic using type and value (0..1) */
  definitionByTypeAndValue?: EvidenceVariableCharacteristicDefinitionByTypeAndValue;

  /** Used to specify how two or more characteristics are combined (0..1) */
  definitionByCombination?: EvidenceVariableCharacteristicDefinitionByCombination;

  /** Number of occurrences meeting the characteristic (0..1) */
  instancesQuantity?: Quantity;
  /** Number of occurrences meeting the characteristic (0..1) */
  instancesRange?: Range;

  /** Length of time in which the characteristic is met (0..1) */
  durationQuantity?: Quantity;
  /** Length of time in which the characteristic is met (0..1) */
  durationRange?: Range;

  /** Timing in which the characteristic is determined (0..*) */
  timeFromEvent?: EvidenceVariableCharacteristicTimeFromEvent[];

  override fhirType(): string {
    return 'EvidenceVariable.characteristic';
  }

  /** FHIR JSON for this EvidenceVariableCharacteristic, typed as the plain `EvidenceVariableCharacteristic` data type. */
  override toJSON(): plainTypes.EvidenceVariableCharacteristic {
    return this.serialize() as plainTypes.EvidenceVariableCharacteristic;
  }

  /** Label for internal linking (0..1) */
  getLinkId(): string | undefined {
    return this.linkId;
  }

  /** Sets `linkId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setLinkId(linkId: string | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** The element carrying the id and extensions of `linkId`. Created when absent. */
  getLinkIdElement(): Element {
    if (this._linkId === undefined) {
      this._linkId = new Element();
    }
    return this._linkId;
  }

  setLinkIdElement(linkIdElement: Element | undefined): this {
    this._linkId = linkIdElement;
    return this;
  }

  /** Natural language description of the characteristic (0..1) */
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

  /** Whether the characteristic is an inclusion criterion or exclusion criterion (0..1) */
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

  /** Defines the characteristic (without using type and value) by a Reference (0..1) Created when absent. */
  getDefinitionReference(): Reference {
    if (this.definitionReference === undefined) {
      this.definitionReference = new Reference();
    }
    return this.definitionReference;
  }

  setDefinitionReference(definitionReference: Reference | undefined): this {
    return this.setFieldValue('definitionReference', definitionReference);
  }

  hasDefinitionReference(): boolean {
    return this.hasFieldValue('definitionReference');
  }

  /** Defines the characteristic (without using type and value) by a Canonical (0..1) */
  getDefinitionCanonical(): string | undefined {
    return this.definitionCanonical;
  }

  /** Sets `definitionCanonical`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setDefinitionCanonical(definitionCanonical: string | undefined): this {
    return this.setFieldValue('definitionCanonical', definitionCanonical);
  }

  hasDefinitionCanonical(): boolean {
    return this.hasFieldValue('definitionCanonical');
  }

  /** The element carrying the id and extensions of `definitionCanonical`. Created when absent. */
  getDefinitionCanonicalElement(): Element {
    if (this._definitionCanonical === undefined) {
      this._definitionCanonical = new Element();
    }
    return this._definitionCanonical;
  }

  setDefinitionCanonicalElement(definitionCanonicalElement: Element | undefined): this {
    this._definitionCanonical = definitionCanonicalElement;
    return this;
  }

  /** Defines the characteristic (without using type and value) by a CodeableConcept (0..1) Created when absent. */
  getDefinitionCodeableConcept(): CodeableConcept {
    if (this.definitionCodeableConcept === undefined) {
      this.definitionCodeableConcept = new CodeableConcept();
    }
    return this.definitionCodeableConcept;
  }

  setDefinitionCodeableConcept(definitionCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('definitionCodeableConcept', definitionCodeableConcept);
  }

  hasDefinitionCodeableConcept(): boolean {
    return this.hasFieldValue('definitionCodeableConcept');
  }

  /** Defines the characteristic (without using type and value) by an expression (0..1) Created when absent. */
  getDefinitionExpression(): Expression {
    if (this.definitionExpression === undefined) {
      this.definitionExpression = new Expression();
    }
    return this.definitionExpression;
  }

  setDefinitionExpression(definitionExpression: Expression | undefined): this {
    return this.setFieldValue('definitionExpression', definitionExpression);
  }

  hasDefinitionExpression(): boolean {
    return this.hasFieldValue('definitionExpression');
  }

  /** Defines the characteristic (without using type and value) by an id (0..1) */
  getDefinitionId(): string | undefined {
    return this.definitionId;
  }

  /** Sets `definitionId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setDefinitionId(definitionId: string | undefined): this {
    return this.setFieldValue('definitionId', definitionId);
  }

  hasDefinitionId(): boolean {
    return this.hasFieldValue('definitionId');
  }

  /** The element carrying the id and extensions of `definitionId`. Created when absent. */
  getDefinitionIdElement(): Element {
    if (this._definitionId === undefined) {
      this._definitionId = new Element();
    }
    return this._definitionId;
  }

  setDefinitionIdElement(definitionIdElement: Element | undefined): this {
    this._definitionId = definitionIdElement;
    return this;
  }

  /** Defines the characteristic using type and value (0..1) Created when absent. */
  getDefinitionByTypeAndValue(): EvidenceVariableCharacteristicDefinitionByTypeAndValue {
    if (this.definitionByTypeAndValue === undefined) {
      this.definitionByTypeAndValue = new EvidenceVariableCharacteristicDefinitionByTypeAndValue();
    }
    return this.definitionByTypeAndValue;
  }

  setDefinitionByTypeAndValue(
    definitionByTypeAndValue: EvidenceVariableCharacteristicDefinitionByTypeAndValue | undefined
  ): this {
    return this.setFieldValue('definitionByTypeAndValue', definitionByTypeAndValue);
  }

  hasDefinitionByTypeAndValue(): boolean {
    return this.hasFieldValue('definitionByTypeAndValue');
  }

  /** Used to specify how two or more characteristics are combined (0..1) Created when absent. */
  getDefinitionByCombination(): EvidenceVariableCharacteristicDefinitionByCombination {
    if (this.definitionByCombination === undefined) {
      this.definitionByCombination = new EvidenceVariableCharacteristicDefinitionByCombination();
    }
    return this.definitionByCombination;
  }

  setDefinitionByCombination(
    definitionByCombination: EvidenceVariableCharacteristicDefinitionByCombination | undefined
  ): this {
    return this.setFieldValue('definitionByCombination', definitionByCombination);
  }

  hasDefinitionByCombination(): boolean {
    return this.hasFieldValue('definitionByCombination');
  }

  /** Number of occurrences meeting the characteristic (0..1) Whichever type of `instances[x]` is set. */
  getInstances(): Quantity | Range | undefined {
    return this.getChoiceValue<Quantity | Range>('instances');
  }

  /** True when any type of `instances[x]` is set. */
  hasInstances(): boolean {
    return this.hasChoiceValue('instances');
  }

  getInstancesQuantity(): Quantity | undefined {
    return this.instancesQuantity;
  }

  /** Sets `instances[x]` as Quantity and clears every other type of it. */
  setInstancesQuantity(instancesQuantity: Quantity | undefined): this {
    return this.setFieldValue('instancesQuantity', instancesQuantity);
  }

  hasInstancesQuantity(): boolean {
    return this.hasFieldValue('instancesQuantity');
  }

  getInstancesRange(): Range | undefined {
    return this.instancesRange;
  }

  /** Sets `instances[x]` as Range and clears every other type of it. */
  setInstancesRange(instancesRange: Range | undefined): this {
    return this.setFieldValue('instancesRange', instancesRange);
  }

  hasInstancesRange(): boolean {
    return this.hasFieldValue('instancesRange');
  }

  /** Length of time in which the characteristic is met (0..1) Whichever type of `duration[x]` is set. */
  getDuration(): Quantity | Range | undefined {
    return this.getChoiceValue<Quantity | Range>('duration');
  }

  /** True when any type of `duration[x]` is set. */
  hasDuration(): boolean {
    return this.hasChoiceValue('duration');
  }

  getDurationQuantity(): Quantity | undefined {
    return this.durationQuantity;
  }

  /** Sets `duration[x]` as Quantity and clears every other type of it. */
  setDurationQuantity(durationQuantity: Quantity | undefined): this {
    return this.setFieldValue('durationQuantity', durationQuantity);
  }

  hasDurationQuantity(): boolean {
    return this.hasFieldValue('durationQuantity');
  }

  getDurationRange(): Range | undefined {
    return this.durationRange;
  }

  /** Sets `duration[x]` as Range and clears every other type of it. */
  setDurationRange(durationRange: Range | undefined): this {
    return this.setFieldValue('durationRange', durationRange);
  }

  hasDurationRange(): boolean {
    return this.hasFieldValue('durationRange');
  }

  /** Timing in which the characteristic is determined (0..*) Never undefined; an empty list is created when absent. */
  getTimeFromEvent(): EvidenceVariableCharacteristicTimeFromEvent[] {
    if (this.timeFromEvent === undefined) {
      this.timeFromEvent = [];
    }
    return this.timeFromEvent;
  }

  setTimeFromEvent(timeFromEvent: EvidenceVariableCharacteristicTimeFromEvent[] | undefined): this {
    return this.setFieldValue('timeFromEvent', timeFromEvent);
  }

  hasTimeFromEvent(): boolean {
    return this.hasFieldValue('timeFromEvent');
  }

  /** Appends a new, empty EvidenceVariableCharacteristicTimeFromEvent to `timeFromEvent` and returns it so it can be filled in. */
  addTimeFromEvent(): EvidenceVariableCharacteristicTimeFromEvent;
  /** Appends the given EvidenceVariableCharacteristicTimeFromEvent to `timeFromEvent` and returns this object for chaining. */
  addTimeFromEvent(
    evidenceVariableCharacteristicTimeFromEvent: EvidenceVariableCharacteristicTimeFromEvent
  ): this;
  addTimeFromEvent(
    evidenceVariableCharacteristicTimeFromEvent?: EvidenceVariableCharacteristicTimeFromEvent
  ): EvidenceVariableCharacteristicTimeFromEvent | this {
    if (evidenceVariableCharacteristicTimeFromEvent !== undefined) {
      return this.addFieldValue('timeFromEvent', evidenceVariableCharacteristicTimeFromEvent);
    }
    const createdEvidenceVariableCharacteristicTimeFromEvent =
      new EvidenceVariableCharacteristicTimeFromEvent();
    this.addFieldValue('timeFromEvent', createdEvidenceVariableCharacteristicTimeFromEvent);
    return createdEvidenceVariableCharacteristicTimeFromEvent;
  }

  /** The first EvidenceVariableCharacteristicTimeFromEvent of `timeFromEvent`. One is added when the list is empty. */
  getTimeFromEventFirstRep(): EvidenceVariableCharacteristicTimeFromEvent {
    const firstEvidenceVariableCharacteristicTimeFromEvent = this.getTimeFromEvent()[0];
    return firstEvidenceVariableCharacteristicTimeFromEvent === undefined
      ? this.addTimeFromEvent()
      : firstEvidenceVariableCharacteristicTimeFromEvent;
  }
}

modelTypeRegistry.register('EvidenceVariableCharacteristic', EvidenceVariableCharacteristic, false);

/**
 * Defines the characteristic using type and value
 */
export class EvidenceVariableCharacteristicDefinitionByTypeAndValue extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'device',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'DeviceMetric'],
        },
      ],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
        { jsonKey: 'valueId', typeCode: 'id' },
      ],
    },
    {
      elementName: 'offset',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'offset', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Expresses the type of characteristic (1..1) */
  type?: CodeableConcept;

  /** Method for how the characteristic value was determined (0..*) */
  method?: CodeableConcept[];

  /** Device used for determining characteristic (0..1) */
  device?: Reference;

  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueQuantity?: Quantity;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueRange?: Range;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueReference?: Reference;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;

  /** Reference point for valueQuantity or valueRange (0..1) */
  offset?: CodeableConcept;

  override fhirType(): string {
    return 'EvidenceVariable.characteristic.definitionByTypeAndValue';
  }

  /** FHIR JSON for this EvidenceVariableCharacteristicDefinitionByTypeAndValue, typed as the plain `EvidenceVariableDefinitionByTypeAndValue` data type. */
  override toJSON(): plainTypes.EvidenceVariableDefinitionByTypeAndValue {
    return this.serialize() as plainTypes.EvidenceVariableDefinitionByTypeAndValue;
  }

  /** Expresses the type of characteristic (1..1) Created when absent. */
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

  /** Method for how the characteristic value was determined (0..*) Never undefined; an empty list is created when absent. */
  getMethod(): CodeableConcept[] {
    if (this.method === undefined) {
      this.method = [];
    }
    return this.method;
  }

  setMethod(method: CodeableConcept[] | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }

  /** Appends a new, empty CodeableConcept to `method` and returns it so it can be filled in. */
  addMethod(): CodeableConcept;
  /** Appends the given CodeableConcept to `method` and returns this object for chaining. */
  addMethod(codeableConcept: CodeableConcept): this;
  addMethod(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('method', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('method', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `method`. One is added when the list is empty. */
  getMethodFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getMethod()[0];
    return firstCodeableConcept === undefined ? this.addMethod() : firstCodeableConcept;
  }

  /** Device used for determining characteristic (0..1) Created when absent. */
  getDevice(): Reference {
    if (this.device === undefined) {
      this.device = new Reference();
    }
    return this.device;
  }

  setDevice(device: Reference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Defines the characteristic when coupled with characteristic.type (1..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | boolean | Quantity | Range | Reference | string | undefined {
    return this.getChoiceValue<CodeableConcept | boolean | Quantity | Range | Reference | string>(
      'value'
    );
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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

  getValueId(): string | undefined {
    return this.valueId;
  }

  /** Sets `value[x]` as id and clears every other type of it. */
  setValueId(valueId: string | undefined): this {
    return this.setFieldValue('valueId', valueId);
  }

  hasValueId(): boolean {
    return this.hasFieldValue('valueId');
  }

  /** Reference point for valueQuantity or valueRange (0..1) Created when absent. */
  getOffset(): CodeableConcept {
    if (this.offset === undefined) {
      this.offset = new CodeableConcept();
    }
    return this.offset;
  }

  setOffset(offset: CodeableConcept | undefined): this {
    return this.setFieldValue('offset', offset);
  }

  hasOffset(): boolean {
    return this.hasFieldValue('offset');
  }
}

modelTypeRegistry.register(
  'EvidenceVariableCharacteristicDefinitionByTypeAndValue',
  EvidenceVariableCharacteristicDefinitionByTypeAndValue,
  false
);

/**
 * Used to specify how two or more characteristics are combined
 */
export class EvidenceVariableCharacteristicDefinitionByCombination extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'code',
          typeCode: 'code',
          allowedCodes: valueSetCodes.CharacteristicCombination,
        },
      ],
    },
    {
      elementName: 'threshold',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'threshold', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'characteristic',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'EvidenceVariableCharacteristic' }],
    },
  ];

  /** all-of | any-of | at-least | at-most | statistical | net-effect | dataset (1..1) */
  code?: valueSetCodes.CharacteristicCombination;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Provides the value of "n" when "at-least" or "at-most" codes are used (0..1) */
  threshold?: number;
  /** Id and extensions of the primitive `threshold`. */
  _threshold?: Element;

  /** A defining factor of the characteristic (1..*) */
  characteristic?: EvidenceVariableCharacteristic[];

  override fhirType(): string {
    return 'EvidenceVariable.characteristic.definitionByCombination';
  }

  /** FHIR JSON for this EvidenceVariableCharacteristicDefinitionByCombination, typed as the plain `EvidenceVariableDefinitionByCombination` data type. */
  override toJSON(): plainTypes.EvidenceVariableDefinitionByCombination {
    return this.serialize() as plainTypes.EvidenceVariableDefinitionByCombination;
  }

  /** all-of | any-of | at-least | at-most | statistical | net-effect | dataset (1..1) */
  getCode(): valueSetCodes.CharacteristicCombination | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.CharacteristicCombination | undefined): this {
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

  /** Provides the value of "n" when "at-least" or "at-most" codes are used (0..1) */
  getThreshold(): number | undefined {
    return this.threshold;
  }

  /** Sets `threshold`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setThreshold(threshold: number | undefined): this {
    return this.setFieldValue('threshold', threshold);
  }

  hasThreshold(): boolean {
    return this.hasFieldValue('threshold');
  }

  /** The element carrying the id and extensions of `threshold`. Created when absent. */
  getThresholdElement(): Element {
    if (this._threshold === undefined) {
      this._threshold = new Element();
    }
    return this._threshold;
  }

  setThresholdElement(thresholdElement: Element | undefined): this {
    this._threshold = thresholdElement;
    return this;
  }

  /** A defining factor of the characteristic (1..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register(
  'EvidenceVariableCharacteristicDefinitionByCombination',
  EvidenceVariableCharacteristicDefinitionByCombination,
  false
);

/**
 * Timing in which the characteristic is determined
 */
export class EvidenceVariableCharacteristicTimeFromEvent extends BackboneElement {
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
      elementName: 'event',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'eventCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'eventReference', typeCode: 'Reference' },
        { jsonKey: 'eventDateTime', typeCode: 'dateTime' },
        { jsonKey: 'eventId', typeCode: 'id' },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'range',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'range', typeCode: 'Range' }],
    },
  ];

  /** Human readable description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Used for footnotes or explanatory notes (0..*) */
  note?: Annotation[];

  /** The event used as a base point (reference point) in time (0..1) */
  eventCodeableConcept?: CodeableConcept;
  /** The event used as a base point (reference point) in time (0..1) */
  eventReference?: Reference;
  /** The event used as a base point (reference point) in time (0..1) */
  eventDateTime?: string;
  /** Id and extensions of the primitive `eventDateTime`. */
  _eventDateTime?: Element;
  /** The event used as a base point (reference point) in time (0..1) */
  eventId?: string;
  /** Id and extensions of the primitive `eventId`. */
  _eventId?: Element;

  /** Used to express the observation at a defined amount of time before or after the event (0..1) */
  quantity?: Quantity;

  /** Used to express the observation within a period before and/or after the event (0..1) */
  range?: Range;

  override fhirType(): string {
    return 'EvidenceVariable.characteristic.timeFromEvent';
  }

  /** FHIR JSON for this EvidenceVariableCharacteristicTimeFromEvent, typed as the plain `EvidenceVariableTimeFromEvent` data type. */
  override toJSON(): plainTypes.EvidenceVariableTimeFromEvent {
    return this.serialize() as plainTypes.EvidenceVariableTimeFromEvent;
  }

  /** Human readable description (0..1) */
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

  /** The event used as a base point (reference point) in time (0..1) Whichever type of `event[x]` is set. */
  getEvent(): CodeableConcept | Reference | string | undefined {
    return this.getChoiceValue<CodeableConcept | Reference | string>('event');
  }

  /** True when any type of `event[x]` is set. */
  hasEvent(): boolean {
    return this.hasChoiceValue('event');
  }

  getEventCodeableConcept(): CodeableConcept | undefined {
    return this.eventCodeableConcept;
  }

  /** Sets `event[x]` as CodeableConcept and clears every other type of it. */
  setEventCodeableConcept(eventCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('eventCodeableConcept', eventCodeableConcept);
  }

  hasEventCodeableConcept(): boolean {
    return this.hasFieldValue('eventCodeableConcept');
  }

  getEventReference(): Reference | undefined {
    return this.eventReference;
  }

  /** Sets `event[x]` as Reference and clears every other type of it. */
  setEventReference(eventReference: Reference | undefined): this {
    return this.setFieldValue('eventReference', eventReference);
  }

  hasEventReference(): boolean {
    return this.hasFieldValue('eventReference');
  }

  getEventDateTime(): string | undefined {
    return this.eventDateTime;
  }

  /** Sets `event[x]` as dateTime and clears every other type of it. */
  setEventDateTime(eventDateTime: string | undefined): this {
    return this.setFieldValue('eventDateTime', eventDateTime);
  }

  hasEventDateTime(): boolean {
    return this.hasFieldValue('eventDateTime');
  }

  getEventId(): string | undefined {
    return this.eventId;
  }

  /** Sets `event[x]` as id and clears every other type of it. */
  setEventId(eventId: string | undefined): this {
    return this.setFieldValue('eventId', eventId);
  }

  hasEventId(): boolean {
    return this.hasFieldValue('eventId');
  }

  /** Used to express the observation at a defined amount of time before or after the event (0..1) Created when absent. */
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

  /** Used to express the observation within a period before and/or after the event (0..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'EvidenceVariableCharacteristicTimeFromEvent',
  EvidenceVariableCharacteristicTimeFromEvent,
  false
);

/**
 * A grouping for ordinal or polychotomous variables
 */
export class EvidenceVariableCategory extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
      ],
    },
  ];

  /** Description of the grouping (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Definition of the grouping (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Definition of the grouping (0..1) */
  valueQuantity?: Quantity;
  /** Definition of the grouping (0..1) */
  valueRange?: Range;

  override fhirType(): string {
    return 'EvidenceVariable.category';
  }

  /** FHIR JSON for this EvidenceVariableCategory, typed as the plain `EvidenceVariableCategory` data type. */
  override toJSON(): plainTypes.EvidenceVariableCategory {
    return this.serialize() as plainTypes.EvidenceVariableCategory;
  }

  /** Description of the grouping (0..1) */
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

  /** Definition of the grouping (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | Quantity | Range | undefined {
    return this.getChoiceValue<CodeableConcept | Quantity | Range>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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
}

modelTypeRegistry.register('EvidenceVariableCategory', EvidenceVariableCategory, false);
