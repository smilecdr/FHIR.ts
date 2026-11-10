/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export class ValueSet extends DomainResource {
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
      elementName: 'immutable',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'immutable', typeCode: 'boolean' }],
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
      elementName: 'compose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'compose', typeCode: 'ValueSetCompose' }],
    },
    {
      elementName: 'expansion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expansion', typeCode: 'ValueSetExpansion' }],
    },
    {
      elementName: 'scope',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scope', typeCode: 'ValueSetScope' }],
    },
  ];

  readonly resourceType = 'ValueSet';

  /** Canonical identifier for this value set, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the value set (business identifier) (0..*) */
  identifier?: Identifier[];

  /** Business version of the value set (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this value set (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this value set (human friendly) (0..1) */
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

  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the value set (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for value set (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Indicates whether or not any change to the content logical definition may occur (0..1) */
  immutable?: boolean;
  /** Id and extensions of the primitive `immutable`. */
  _immutable?: Element;

  /** Why this value set is defined (0..1) */
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

  /** When the ValueSet was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the ValueSet was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the ValueSet is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: CodeableConcept[];

  /** Who authored the ValueSet (0..*) */
  author?: ContactDetail[];

  /** Who edited the ValueSet (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the ValueSet (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the ValueSet (0..*) */
  endorser?: ContactDetail[];

  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Content logical definition of the value set (CLD) (0..1) */
  compose?: ValueSetCompose;

  /** Used when the value set is "expanded" (0..1) */
  expansion?: ValueSetExpansion;

  /** Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description (0..1) */
  scope?: ValueSetScope;

  override fhirType(): string {
    return 'ValueSet';
  }

  /** FHIR JSON for this ValueSet, typed as the plain `ValueSet` data type. */
  override toJSON(): plainTypes.ValueSet {
    return this.serialize() as plainTypes.ValueSet;
  }

  /** Canonical identifier for this value set, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the value set (business identifier) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the value set (0..1) */
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

  /** Name for this value set (computer friendly) (0..1) */
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

  /** Name for this value set (human friendly) (0..1) */
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

  /** Natural language description of the value set (0..1) */
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

  /** Intended jurisdiction for value set (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Indicates whether or not any change to the content logical definition may occur (0..1) */
  getImmutable(): boolean | undefined {
    return this.immutable;
  }

  /** Sets `immutable`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setImmutable(immutable: boolean | undefined): this {
    return this.setFieldValue('immutable', immutable);
  }

  hasImmutable(): boolean {
    return this.hasFieldValue('immutable');
  }

  /** The element carrying the id and extensions of `immutable`. Created when absent. */
  getImmutableElement(): Element {
    if (this._immutable === undefined) {
      this._immutable = new Element();
    }
    return this._immutable;
  }

  setImmutableElement(immutableElement: Element | undefined): this {
    this._immutable = immutableElement;
    return this;
  }

  /** Why this value set is defined (0..1) */
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

  /** When the ValueSet was approved by publisher (0..1) */
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

  /** When the ValueSet was last reviewed by the publisher (0..1) */
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

  /** When the ValueSet is expected to be used (0..1) Created when absent. */
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

  /** E.g. Education, Treatment, Assessment, etc (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who authored the ValueSet (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who edited the ValueSet (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who reviewed the ValueSet (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who endorsed the ValueSet (0..*) Never undefined; an empty list is created when absent. */
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

  /** Content logical definition of the value set (CLD) (0..1) Created when absent. */
  getCompose(): ValueSetCompose {
    if (this.compose === undefined) {
      this.compose = new ValueSetCompose();
    }
    return this.compose;
  }

  setCompose(compose: ValueSetCompose | undefined): this {
    return this.setFieldValue('compose', compose);
  }

  hasCompose(): boolean {
    return this.hasFieldValue('compose');
  }

  /** Used when the value set is "expanded" (0..1) Created when absent. */
  getExpansion(): ValueSetExpansion {
    if (this.expansion === undefined) {
      this.expansion = new ValueSetExpansion();
    }
    return this.expansion;
  }

  setExpansion(expansion: ValueSetExpansion | undefined): this {
    return this.setFieldValue('expansion', expansion);
  }

  hasExpansion(): boolean {
    return this.hasFieldValue('expansion');
  }

  /** Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description (0..1) Created when absent. */
  getScope(): ValueSetScope {
    if (this.scope === undefined) {
      this.scope = new ValueSetScope();
    }
    return this.scope;
  }

  setScope(scope: ValueSetScope | undefined): this {
    return this.setFieldValue('scope', scope);
  }

  hasScope(): boolean {
    return this.hasFieldValue('scope');
  }
}

modelTypeRegistry.register('ValueSet', ValueSet, true);

/** True when the value is a ValueSet model instance. */
export function isValueSet(candidate: unknown): candidate is ValueSet {
  return candidate instanceof ValueSet;
}

/**
 * Content logical definition of the value set (CLD)
 */
export class ValueSetCompose extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'lockedDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lockedDate', typeCode: 'date' }],
    },
    {
      elementName: 'inactive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'inactive', typeCode: 'boolean' }],
    },
    {
      elementName: 'include',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'include', typeCode: 'ValueSetComposeInclude' }],
    },
    {
      elementName: 'exclude',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'exclude', typeCode: 'ValueSetComposeInclude' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'string' }],
    },
  ];

  /** Fixed date for references with no specified version (transitive) (0..1) */
  lockedDate?: string;
  /** Id and extensions of the primitive `lockedDate`. */
  _lockedDate?: Element;

  /** Whether inactive codes are in the value set (0..1) */
  inactive?: boolean;
  /** Id and extensions of the primitive `inactive`. */
  _inactive?: Element;

  /** Include one or more codes from a code system or other value set(s) (1..*) */
  include?: ValueSetComposeInclude[];

  /** Explicitly exclude codes from a code system or other value sets (0..*) */
  exclude?: ValueSetComposeInclude[];

  /** Property to return if client doesn't override (0..*) */
  property?: string[];
  /** Id and extensions of the primitive `property`. */
  _property?: (Element | null)[];

  override fhirType(): string {
    return 'ValueSet.compose';
  }

  /** FHIR JSON for this ValueSetCompose, typed as the plain `ValueSetCompose` data type. */
  override toJSON(): plainTypes.ValueSetCompose {
    return this.serialize() as plainTypes.ValueSetCompose;
  }

  /** Fixed date for references with no specified version (transitive) (0..1) */
  getLockedDate(): string | undefined {
    return this.lockedDate;
  }

  /** Sets `lockedDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setLockedDate(lockedDate: string | undefined): this {
    return this.setFieldValue('lockedDate', lockedDate);
  }

  hasLockedDate(): boolean {
    return this.hasFieldValue('lockedDate');
  }

  /** The element carrying the id and extensions of `lockedDate`. Created when absent. */
  getLockedDateElement(): Element {
    if (this._lockedDate === undefined) {
      this._lockedDate = new Element();
    }
    return this._lockedDate;
  }

  setLockedDateElement(lockedDateElement: Element | undefined): this {
    this._lockedDate = lockedDateElement;
    return this;
  }

  /** Whether inactive codes are in the value set (0..1) */
  getInactive(): boolean | undefined {
    return this.inactive;
  }

  /** Sets `inactive`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setInactive(inactive: boolean | undefined): this {
    return this.setFieldValue('inactive', inactive);
  }

  hasInactive(): boolean {
    return this.hasFieldValue('inactive');
  }

  /** The element carrying the id and extensions of `inactive`. Created when absent. */
  getInactiveElement(): Element {
    if (this._inactive === undefined) {
      this._inactive = new Element();
    }
    return this._inactive;
  }

  setInactiveElement(inactiveElement: Element | undefined): this {
    this._inactive = inactiveElement;
    return this;
  }

  /** Include one or more codes from a code system or other value set(s) (1..*) Never undefined; an empty list is created when absent. */
  getInclude(): ValueSetComposeInclude[] {
    if (this.include === undefined) {
      this.include = [];
    }
    return this.include;
  }

  setInclude(include: ValueSetComposeInclude[] | undefined): this {
    return this.setFieldValue('include', include);
  }

  hasInclude(): boolean {
    return this.hasFieldValue('include');
  }

  /** Appends a new, empty ValueSetComposeInclude to `include` and returns it so it can be filled in. */
  addInclude(): ValueSetComposeInclude;
  /** Appends the given ValueSetComposeInclude to `include` and returns this object for chaining. */
  addInclude(valueSetComposeInclude: ValueSetComposeInclude): this;
  addInclude(valueSetComposeInclude?: ValueSetComposeInclude): ValueSetComposeInclude | this {
    if (valueSetComposeInclude !== undefined) {
      return this.addFieldValue('include', valueSetComposeInclude);
    }
    const createdValueSetComposeInclude = new ValueSetComposeInclude();
    this.addFieldValue('include', createdValueSetComposeInclude);
    return createdValueSetComposeInclude;
  }

  /** The first ValueSetComposeInclude of `include`. One is added when the list is empty. */
  getIncludeFirstRep(): ValueSetComposeInclude {
    const firstValueSetComposeInclude = this.getInclude()[0];
    return firstValueSetComposeInclude === undefined
      ? this.addInclude()
      : firstValueSetComposeInclude;
  }

  /** Explicitly exclude codes from a code system or other value sets (0..*) Never undefined; an empty list is created when absent. */
  getExclude(): ValueSetComposeInclude[] {
    if (this.exclude === undefined) {
      this.exclude = [];
    }
    return this.exclude;
  }

  setExclude(exclude: ValueSetComposeInclude[] | undefined): this {
    return this.setFieldValue('exclude', exclude);
  }

  hasExclude(): boolean {
    return this.hasFieldValue('exclude');
  }

  /** Appends a new, empty ValueSetComposeInclude to `exclude` and returns it so it can be filled in. */
  addExclude(): ValueSetComposeInclude;
  /** Appends the given ValueSetComposeInclude to `exclude` and returns this object for chaining. */
  addExclude(valueSetComposeInclude: ValueSetComposeInclude): this;
  addExclude(valueSetComposeInclude?: ValueSetComposeInclude): ValueSetComposeInclude | this {
    if (valueSetComposeInclude !== undefined) {
      return this.addFieldValue('exclude', valueSetComposeInclude);
    }
    const createdValueSetComposeInclude = new ValueSetComposeInclude();
    this.addFieldValue('exclude', createdValueSetComposeInclude);
    return createdValueSetComposeInclude;
  }

  /** The first ValueSetComposeInclude of `exclude`. One is added when the list is empty. */
  getExcludeFirstRep(): ValueSetComposeInclude {
    const firstValueSetComposeInclude = this.getExclude()[0];
    return firstValueSetComposeInclude === undefined
      ? this.addExclude()
      : firstValueSetComposeInclude;
  }

  /** Property to return if client doesn't override (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): string[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: string[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends one value to `property`. Throws a FhirModelError when it is not a valid FHIR string. */
  addProperty(property: string): this {
    return this.addFieldValue('property', property);
  }
}

modelTypeRegistry.register('ValueSetCompose', ValueSetCompose, false);

/**
 * Include one or more codes from a code system or other value set(s)
 */
export class ValueSetComposeInclude extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'system',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'uri' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'concept',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'concept', typeCode: 'ValueSetComposeIncludeConcept' }],
    },
    {
      elementName: 'filter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'filter', typeCode: 'ValueSetComposeIncludeFilter' }],
    },
    {
      elementName: 'valueSet',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueSet', typeCode: 'canonical' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'string' }],
    },
  ];

  /** The system the codes come from (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** Specific version of the code system referred to (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** A concept defined in the system (0..*) */
  concept?: ValueSetComposeIncludeConcept[];

  /** Select codes/concepts by their properties (including relationships) (0..*) */
  filter?: ValueSetComposeIncludeFilter[];

  /** Select the contents included in this value set (0..*) */
  valueSet?: string[];
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: (Element | null)[];

  /** A copyright statement for the specific code system included in the value set (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  override fhirType(): string {
    return 'ValueSet.compose.include';
  }

  /** FHIR JSON for this ValueSetComposeInclude, typed as the plain `ValueSetInclude` data type. */
  override toJSON(): plainTypes.ValueSetInclude {
    return this.serialize() as plainTypes.ValueSetInclude;
  }

  /** The system the codes come from (0..1) */
  getSystem(): string | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setSystem(system: string | undefined): this {
    return this.setFieldValue('system', system);
  }

  hasSystem(): boolean {
    return this.hasFieldValue('system');
  }

  /** The element carrying the id and extensions of `system`. Created when absent. */
  getSystemElement(): Element {
    if (this._system === undefined) {
      this._system = new Element();
    }
    return this._system;
  }

  setSystemElement(systemElement: Element | undefined): this {
    this._system = systemElement;
    return this;
  }

  /** Specific version of the code system referred to (0..1) */
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

  /** A concept defined in the system (0..*) Never undefined; an empty list is created when absent. */
  getConcept(): ValueSetComposeIncludeConcept[] {
    if (this.concept === undefined) {
      this.concept = [];
    }
    return this.concept;
  }

  setConcept(concept: ValueSetComposeIncludeConcept[] | undefined): this {
    return this.setFieldValue('concept', concept);
  }

  hasConcept(): boolean {
    return this.hasFieldValue('concept');
  }

  /** Appends a new, empty ValueSetComposeIncludeConcept to `concept` and returns it so it can be filled in. */
  addConcept(): ValueSetComposeIncludeConcept;
  /** Appends the given ValueSetComposeIncludeConcept to `concept` and returns this object for chaining. */
  addConcept(valueSetComposeIncludeConcept: ValueSetComposeIncludeConcept): this;
  addConcept(
    valueSetComposeIncludeConcept?: ValueSetComposeIncludeConcept
  ): ValueSetComposeIncludeConcept | this {
    if (valueSetComposeIncludeConcept !== undefined) {
      return this.addFieldValue('concept', valueSetComposeIncludeConcept);
    }
    const createdValueSetComposeIncludeConcept = new ValueSetComposeIncludeConcept();
    this.addFieldValue('concept', createdValueSetComposeIncludeConcept);
    return createdValueSetComposeIncludeConcept;
  }

  /** The first ValueSetComposeIncludeConcept of `concept`. One is added when the list is empty. */
  getConceptFirstRep(): ValueSetComposeIncludeConcept {
    const firstValueSetComposeIncludeConcept = this.getConcept()[0];
    return firstValueSetComposeIncludeConcept === undefined
      ? this.addConcept()
      : firstValueSetComposeIncludeConcept;
  }

  /** Select codes/concepts by their properties (including relationships) (0..*) Never undefined; an empty list is created when absent. */
  getFilter(): ValueSetComposeIncludeFilter[] {
    if (this.filter === undefined) {
      this.filter = [];
    }
    return this.filter;
  }

  setFilter(filter: ValueSetComposeIncludeFilter[] | undefined): this {
    return this.setFieldValue('filter', filter);
  }

  hasFilter(): boolean {
    return this.hasFieldValue('filter');
  }

  /** Appends a new, empty ValueSetComposeIncludeFilter to `filter` and returns it so it can be filled in. */
  addFilter(): ValueSetComposeIncludeFilter;
  /** Appends the given ValueSetComposeIncludeFilter to `filter` and returns this object for chaining. */
  addFilter(valueSetComposeIncludeFilter: ValueSetComposeIncludeFilter): this;
  addFilter(
    valueSetComposeIncludeFilter?: ValueSetComposeIncludeFilter
  ): ValueSetComposeIncludeFilter | this {
    if (valueSetComposeIncludeFilter !== undefined) {
      return this.addFieldValue('filter', valueSetComposeIncludeFilter);
    }
    const createdValueSetComposeIncludeFilter = new ValueSetComposeIncludeFilter();
    this.addFieldValue('filter', createdValueSetComposeIncludeFilter);
    return createdValueSetComposeIncludeFilter;
  }

  /** The first ValueSetComposeIncludeFilter of `filter`. One is added when the list is empty. */
  getFilterFirstRep(): ValueSetComposeIncludeFilter {
    const firstValueSetComposeIncludeFilter = this.getFilter()[0];
    return firstValueSetComposeIncludeFilter === undefined
      ? this.addFilter()
      : firstValueSetComposeIncludeFilter;
  }

  /** Select the contents included in this value set (0..*) Never undefined; an empty list is created when absent. */
  getValueSet(): string[] {
    if (this.valueSet === undefined) {
      this.valueSet = [];
    }
    return this.valueSet;
  }

  setValueSet(valueSet: string[] | undefined): this {
    return this.setFieldValue('valueSet', valueSet);
  }

  hasValueSet(): boolean {
    return this.hasFieldValue('valueSet');
  }

  /** Appends one value to `valueSet`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addValueSet(valueSet: string): this {
    return this.addFieldValue('valueSet', valueSet);
  }

  /** A copyright statement for the specific code system included in the value set (0..1) */
  getCopyright(): string | undefined {
    return this.copyright;
  }

  /** Sets `copyright`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

modelTypeRegistry.register('ValueSetComposeInclude', ValueSetComposeInclude, false);

/**
 * A concept defined in the system
 */
export class ValueSetComposeIncludeConcept extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
    {
      elementName: 'designation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'designation', typeCode: 'ValueSetComposeIncludeConceptDesignation' }],
    },
  ];

  /** Code or expression from system (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Text to display for this code for this value set in this valueset (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Additional representations for this concept (0..*) */
  designation?: ValueSetComposeIncludeConceptDesignation[];

  override fhirType(): string {
    return 'ValueSet.compose.include.concept';
  }

  /** FHIR JSON for this ValueSetComposeIncludeConcept, typed as the plain `ValueSetConcept` data type. */
  override toJSON(): plainTypes.ValueSetConcept {
    return this.serialize() as plainTypes.ValueSetConcept;
  }

  /** Code or expression from system (1..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setCode(code: string | undefined): this {
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

  /** Text to display for this code for this value set in this valueset (0..1) */
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

  /** Additional representations for this concept (0..*) Never undefined; an empty list is created when absent. */
  getDesignation(): ValueSetComposeIncludeConceptDesignation[] {
    if (this.designation === undefined) {
      this.designation = [];
    }
    return this.designation;
  }

  setDesignation(designation: ValueSetComposeIncludeConceptDesignation[] | undefined): this {
    return this.setFieldValue('designation', designation);
  }

  hasDesignation(): boolean {
    return this.hasFieldValue('designation');
  }

  /** Appends a new, empty ValueSetComposeIncludeConceptDesignation to `designation` and returns it so it can be filled in. */
  addDesignation(): ValueSetComposeIncludeConceptDesignation;
  /** Appends the given ValueSetComposeIncludeConceptDesignation to `designation` and returns this object for chaining. */
  addDesignation(
    valueSetComposeIncludeConceptDesignation: ValueSetComposeIncludeConceptDesignation
  ): this;
  addDesignation(
    valueSetComposeIncludeConceptDesignation?: ValueSetComposeIncludeConceptDesignation
  ): ValueSetComposeIncludeConceptDesignation | this {
    if (valueSetComposeIncludeConceptDesignation !== undefined) {
      return this.addFieldValue('designation', valueSetComposeIncludeConceptDesignation);
    }
    const createdValueSetComposeIncludeConceptDesignation =
      new ValueSetComposeIncludeConceptDesignation();
    this.addFieldValue('designation', createdValueSetComposeIncludeConceptDesignation);
    return createdValueSetComposeIncludeConceptDesignation;
  }

  /** The first ValueSetComposeIncludeConceptDesignation of `designation`. One is added when the list is empty. */
  getDesignationFirstRep(): ValueSetComposeIncludeConceptDesignation {
    const firstValueSetComposeIncludeConceptDesignation = this.getDesignation()[0];
    return firstValueSetComposeIncludeConceptDesignation === undefined
      ? this.addDesignation()
      : firstValueSetComposeIncludeConceptDesignation;
  }
}

modelTypeRegistry.register('ValueSetComposeIncludeConcept', ValueSetComposeIncludeConcept, false);

/**
 * Additional representations for this concept
 */
export class ValueSetComposeIncludeConceptDesignation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'code' }],
    },
    {
      elementName: 'use',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'use', typeCode: 'Coding' }],
    },
    {
      elementName: 'additionalUse',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additionalUse', typeCode: 'Coding' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** Human language of the designation (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  /** Types of uses of designations (0..1) */
  use?: Coding;

  /** Additional ways how this designation would be used (0..*) */
  additionalUse?: Coding[];

  /** The text value for this designation (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'ValueSet.compose.include.concept.designation';
  }

  /** FHIR JSON for this ValueSetComposeIncludeConceptDesignation, typed as the plain `ValueSetDesignation` data type. */
  override toJSON(): plainTypes.ValueSetDesignation {
    return this.serialize() as plainTypes.ValueSetDesignation;
  }

  /** Human language of the designation (0..1) */
  getLanguage(): string | undefined {
    return this.language;
  }

  /** Sets `language`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setLanguage(language: string | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The element carrying the id and extensions of `language`. Created when absent. */
  getLanguageElement(): Element {
    if (this._language === undefined) {
      this._language = new Element();
    }
    return this._language;
  }

  setLanguageElement(languageElement: Element | undefined): this {
    this._language = languageElement;
    return this;
  }

  /** Types of uses of designations (0..1) Created when absent. */
  getUse(): Coding {
    if (this.use === undefined) {
      this.use = new Coding();
    }
    return this.use;
  }

  setUse(use: Coding | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }

  /** Additional ways how this designation would be used (0..*) Never undefined; an empty list is created when absent. */
  getAdditionalUse(): Coding[] {
    if (this.additionalUse === undefined) {
      this.additionalUse = [];
    }
    return this.additionalUse;
  }

  setAdditionalUse(additionalUse: Coding[] | undefined): this {
    return this.setFieldValue('additionalUse', additionalUse);
  }

  hasAdditionalUse(): boolean {
    return this.hasFieldValue('additionalUse');
  }

  /** Appends a new, empty Coding to `additionalUse` and returns it so it can be filled in. */
  addAdditionalUse(): Coding;
  /** Appends the given Coding to `additionalUse` and returns this object for chaining. */
  addAdditionalUse(coding: Coding): this;
  addAdditionalUse(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('additionalUse', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('additionalUse', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `additionalUse`. One is added when the list is empty. */
  getAdditionalUseFirstRep(): Coding {
    const firstCoding = this.getAdditionalUse()[0];
    return firstCoding === undefined ? this.addAdditionalUse() : firstCoding;
  }

  /** The text value for this designation (1..1) */
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
}

modelTypeRegistry.register(
  'ValueSetComposeIncludeConceptDesignation',
  ValueSetComposeIncludeConceptDesignation,
  false
);

/**
 * Select codes/concepts by their properties (including relationships)
 */
export class ValueSetComposeIncludeFilter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'property',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'property', typeCode: 'code' }],
    },
    {
      elementName: 'op',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'op', typeCode: 'code', allowedCodes: valueSetCodes.FilterOperator }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** A property/filter defined by the code system (1..1) */
  property?: string;
  /** Id and extensions of the primitive `property`. */
  _property?: Element;

  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists (1..1) */
  op?: valueSetCodes.FilterOperator;
  /** Id and extensions of the primitive `op`. */
  _op?: Element;

  /** Code from the system, or regex criteria, or boolean value for exists (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'ValueSet.compose.include.filter';
  }

  /** FHIR JSON for this ValueSetComposeIncludeFilter, typed as the plain `ValueSetFilter` data type. */
  override toJSON(): plainTypes.ValueSetFilter {
    return this.serialize() as plainTypes.ValueSetFilter;
  }

  /** A property/filter defined by the code system (1..1) */
  getProperty(): string | undefined {
    return this.property;
  }

  /** Sets `property`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setProperty(property: string | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** The element carrying the id and extensions of `property`. Created when absent. */
  getPropertyElement(): Element {
    if (this._property === undefined) {
      this._property = new Element();
    }
    return this._property;
  }

  setPropertyElement(propertyElement: Element | undefined): this {
    this._property = propertyElement;
    return this;
  }

  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists (1..1) */
  getOp(): valueSetCodes.FilterOperator | undefined {
    return this.op;
  }

  /** Sets `op`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setOp(op: valueSetCodes.FilterOperator | undefined): this {
    return this.setFieldValue('op', op);
  }

  hasOp(): boolean {
    return this.hasFieldValue('op');
  }

  /** The element carrying the id and extensions of `op`. Created when absent. */
  getOpElement(): Element {
    if (this._op === undefined) {
      this._op = new Element();
    }
    return this._op;
  }

  setOpElement(opElement: Element | undefined): this {
    this._op = opElement;
    return this;
  }

  /** Code from the system, or regex criteria, or boolean value for exists (1..1) */
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
}

modelTypeRegistry.register('ValueSetComposeIncludeFilter', ValueSetComposeIncludeFilter, false);

/**
 * Used when the value set is "expanded"
 */
export class ValueSetExpansion extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'uri' }],
    },
    {
      elementName: 'next',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'next', typeCode: 'uri' }],
    },
    {
      elementName: 'timestamp',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'timestamp', typeCode: 'dateTime' }],
    },
    {
      elementName: 'total',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'total', typeCode: 'integer' }],
    },
    {
      elementName: 'offset',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'offset', typeCode: 'integer' }],
    },
    {
      elementName: 'parameter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'ValueSetExpansionParameter' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'ValueSetExpansionProperty' }],
    },
    {
      elementName: 'contains',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contains', typeCode: 'ValueSetExpansionContains' }],
    },
  ];

  /** Identifies the value set expansion (business identifier) (0..1) */
  identifier?: string;
  /** Id and extensions of the primitive `identifier`. */
  _identifier?: Element;

  /** Opaque urls for paging through expansion results (0..1) */
  next?: string;
  /** Id and extensions of the primitive `next`. */
  _next?: Element;

  /** Time ValueSet expansion happened (1..1) */
  timestamp?: string;
  /** Id and extensions of the primitive `timestamp`. */
  _timestamp?: Element;

  /** Total number of codes in the expansion (0..1) */
  total?: number;
  /** Id and extensions of the primitive `total`. */
  _total?: Element;

  /** Offset at which this resource starts (0..1) */
  offset?: number;
  /** Id and extensions of the primitive `offset`. */
  _offset?: Element;

  /** Parameter that controlled the expansion process (0..*) */
  parameter?: ValueSetExpansionParameter[];

  /** Additional information supplied about each concept (0..*) */
  property?: ValueSetExpansionProperty[];

  /** Codes in the value set (0..*) */
  contains?: ValueSetExpansionContains[];

  override fhirType(): string {
    return 'ValueSet.expansion';
  }

  /** FHIR JSON for this ValueSetExpansion, typed as the plain `ValueSetExpansion` data type. */
  override toJSON(): plainTypes.ValueSetExpansion {
    return this.serialize() as plainTypes.ValueSetExpansion;
  }

  /** Identifies the value set expansion (business identifier) (0..1) */
  getIdentifier(): string | undefined {
    return this.identifier;
  }

  /** Sets `identifier`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setIdentifier(identifier: string | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** The element carrying the id and extensions of `identifier`. Created when absent. */
  getIdentifierElement(): Element {
    if (this._identifier === undefined) {
      this._identifier = new Element();
    }
    return this._identifier;
  }

  setIdentifierElement(identifierElement: Element | undefined): this {
    this._identifier = identifierElement;
    return this;
  }

  /** Opaque urls for paging through expansion results (0..1) */
  getNext(): string | undefined {
    return this.next;
  }

  /** Sets `next`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setNext(next: string | undefined): this {
    return this.setFieldValue('next', next);
  }

  hasNext(): boolean {
    return this.hasFieldValue('next');
  }

  /** The element carrying the id and extensions of `next`. Created when absent. */
  getNextElement(): Element {
    if (this._next === undefined) {
      this._next = new Element();
    }
    return this._next;
  }

  setNextElement(nextElement: Element | undefined): this {
    this._next = nextElement;
    return this;
  }

  /** Time ValueSet expansion happened (1..1) */
  getTimestamp(): string | undefined {
    return this.timestamp;
  }

  /** Sets `timestamp`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setTimestamp(timestamp: string | undefined): this {
    return this.setFieldValue('timestamp', timestamp);
  }

  hasTimestamp(): boolean {
    return this.hasFieldValue('timestamp');
  }

  /** The element carrying the id and extensions of `timestamp`. Created when absent. */
  getTimestampElement(): Element {
    if (this._timestamp === undefined) {
      this._timestamp = new Element();
    }
    return this._timestamp;
  }

  setTimestampElement(timestampElement: Element | undefined): this {
    this._timestamp = timestampElement;
    return this;
  }

  /** Total number of codes in the expansion (0..1) */
  getTotal(): number | undefined {
    return this.total;
  }

  /** Sets `total`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setTotal(total: number | undefined): this {
    return this.setFieldValue('total', total);
  }

  hasTotal(): boolean {
    return this.hasFieldValue('total');
  }

  /** The element carrying the id and extensions of `total`. Created when absent. */
  getTotalElement(): Element {
    if (this._total === undefined) {
      this._total = new Element();
    }
    return this._total;
  }

  setTotalElement(totalElement: Element | undefined): this {
    this._total = totalElement;
    return this;
  }

  /** Offset at which this resource starts (0..1) */
  getOffset(): number | undefined {
    return this.offset;
  }

  /** Sets `offset`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setOffset(offset: number | undefined): this {
    return this.setFieldValue('offset', offset);
  }

  hasOffset(): boolean {
    return this.hasFieldValue('offset');
  }

  /** The element carrying the id and extensions of `offset`. Created when absent. */
  getOffsetElement(): Element {
    if (this._offset === undefined) {
      this._offset = new Element();
    }
    return this._offset;
  }

  setOffsetElement(offsetElement: Element | undefined): this {
    this._offset = offsetElement;
    return this;
  }

  /** Parameter that controlled the expansion process (0..*) Never undefined; an empty list is created when absent. */
  getParameter(): ValueSetExpansionParameter[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: ValueSetExpansionParameter[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty ValueSetExpansionParameter to `parameter` and returns it so it can be filled in. */
  addParameter(): ValueSetExpansionParameter;
  /** Appends the given ValueSetExpansionParameter to `parameter` and returns this object for chaining. */
  addParameter(valueSetExpansionParameter: ValueSetExpansionParameter): this;
  addParameter(
    valueSetExpansionParameter?: ValueSetExpansionParameter
  ): ValueSetExpansionParameter | this {
    if (valueSetExpansionParameter !== undefined) {
      return this.addFieldValue('parameter', valueSetExpansionParameter);
    }
    const createdValueSetExpansionParameter = new ValueSetExpansionParameter();
    this.addFieldValue('parameter', createdValueSetExpansionParameter);
    return createdValueSetExpansionParameter;
  }

  /** The first ValueSetExpansionParameter of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): ValueSetExpansionParameter {
    const firstValueSetExpansionParameter = this.getParameter()[0];
    return firstValueSetExpansionParameter === undefined
      ? this.addParameter()
      : firstValueSetExpansionParameter;
  }

  /** Additional information supplied about each concept (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): ValueSetExpansionProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: ValueSetExpansionProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty ValueSetExpansionProperty to `property` and returns it so it can be filled in. */
  addProperty(): ValueSetExpansionProperty;
  /** Appends the given ValueSetExpansionProperty to `property` and returns this object for chaining. */
  addProperty(valueSetExpansionProperty: ValueSetExpansionProperty): this;
  addProperty(
    valueSetExpansionProperty?: ValueSetExpansionProperty
  ): ValueSetExpansionProperty | this {
    if (valueSetExpansionProperty !== undefined) {
      return this.addFieldValue('property', valueSetExpansionProperty);
    }
    const createdValueSetExpansionProperty = new ValueSetExpansionProperty();
    this.addFieldValue('property', createdValueSetExpansionProperty);
    return createdValueSetExpansionProperty;
  }

  /** The first ValueSetExpansionProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): ValueSetExpansionProperty {
    const firstValueSetExpansionProperty = this.getProperty()[0];
    return firstValueSetExpansionProperty === undefined
      ? this.addProperty()
      : firstValueSetExpansionProperty;
  }

  /** Codes in the value set (0..*) Never undefined; an empty list is created when absent. */
  getContains(): ValueSetExpansionContains[] {
    if (this.contains === undefined) {
      this.contains = [];
    }
    return this.contains;
  }

  setContains(contains: ValueSetExpansionContains[] | undefined): this {
    return this.setFieldValue('contains', contains);
  }

  hasContains(): boolean {
    return this.hasFieldValue('contains');
  }

  /** Appends a new, empty ValueSetExpansionContains to `contains` and returns it so it can be filled in. */
  addContains(): ValueSetExpansionContains;
  /** Appends the given ValueSetExpansionContains to `contains` and returns this object for chaining. */
  addContains(valueSetExpansionContains: ValueSetExpansionContains): this;
  addContains(
    valueSetExpansionContains?: ValueSetExpansionContains
  ): ValueSetExpansionContains | this {
    if (valueSetExpansionContains !== undefined) {
      return this.addFieldValue('contains', valueSetExpansionContains);
    }
    const createdValueSetExpansionContains = new ValueSetExpansionContains();
    this.addFieldValue('contains', createdValueSetExpansionContains);
    return createdValueSetExpansionContains;
  }

  /** The first ValueSetExpansionContains of `contains`. One is added when the list is empty. */
  getContainsFirstRep(): ValueSetExpansionContains {
    const firstValueSetExpansionContains = this.getContains()[0];
    return firstValueSetExpansionContains === undefined
      ? this.addContains()
      : firstValueSetExpansionContains;
  }
}

modelTypeRegistry.register('ValueSetExpansion', ValueSetExpansion, false);

/**
 * Parameter that controlled the expansion process
 */
export class ValueSetExpansionParameter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
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
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueUri', typeCode: 'uri' },
        { jsonKey: 'valueCode', typeCode: 'code' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
      ],
    },
  ];

  /** Name as assigned by the client or server (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Value of the named parameter (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of the named parameter (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of the named parameter (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of the named parameter (0..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Value of the named parameter (0..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Value of the named parameter (0..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of the named parameter (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;

  override fhirType(): string {
    return 'ValueSet.expansion.parameter';
  }

  /** FHIR JSON for this ValueSetExpansionParameter, typed as the plain `ValueSetParameter` data type. */
  override toJSON(): plainTypes.ValueSetParameter {
    return this.serialize() as plainTypes.ValueSetParameter;
  }

  /** Name as assigned by the client or server (1..1) */
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

  /** Value of the named parameter (0..1) Whichever type of `value[x]` is set. */
  getValue(): string | boolean | number | undefined {
    return this.getChoiceValue<string | boolean | number>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
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

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
  }

  getValueDecimal(): number | undefined {
    return this.valueDecimal;
  }

  /** Sets `value[x]` as decimal and clears every other type of it. */
  setValueDecimal(valueDecimal: number | undefined): this {
    return this.setFieldValue('valueDecimal', valueDecimal);
  }

  hasValueDecimal(): boolean {
    return this.hasFieldValue('valueDecimal');
  }

  getValueUri(): string | undefined {
    return this.valueUri;
  }

  /** Sets `value[x]` as uri and clears every other type of it. */
  setValueUri(valueUri: string | undefined): this {
    return this.setFieldValue('valueUri', valueUri);
  }

  hasValueUri(): boolean {
    return this.hasFieldValue('valueUri');
  }

  getValueCode(): string | undefined {
    return this.valueCode;
  }

  /** Sets `value[x]` as code and clears every other type of it. */
  setValueCode(valueCode: string | undefined): this {
    return this.setFieldValue('valueCode', valueCode);
  }

  hasValueCode(): boolean {
    return this.hasFieldValue('valueCode');
  }

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }
}

modelTypeRegistry.register('ValueSetExpansionParameter', ValueSetExpansionParameter, false);

/**
 * Additional information supplied about each concept
 */
export class ValueSetExpansionProperty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'uri',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uri', typeCode: 'uri' }],
    },
  ];

  /** Identifies the property on the concepts, and when referred to in operations (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Formal identifier for the property (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;

  override fhirType(): string {
    return 'ValueSet.expansion.property';
  }

  /** FHIR JSON for this ValueSetExpansionProperty, typed as the plain `ValueSetProperty` data type. */
  override toJSON(): plainTypes.ValueSetProperty {
    return this.serialize() as plainTypes.ValueSetProperty;
  }

  /** Identifies the property on the concepts, and when referred to in operations (1..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setCode(code: string | undefined): this {
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

  /** Formal identifier for the property (0..1) */
  getUri(): string | undefined {
    return this.uri;
  }

  /** Sets `uri`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUri(uri: string | undefined): this {
    return this.setFieldValue('uri', uri);
  }

  hasUri(): boolean {
    return this.hasFieldValue('uri');
  }

  /** The element carrying the id and extensions of `uri`. Created when absent. */
  getUriElement(): Element {
    if (this._uri === undefined) {
      this._uri = new Element();
    }
    return this._uri;
  }

  setUriElement(uriElement: Element | undefined): this {
    this._uri = uriElement;
    return this;
  }
}

modelTypeRegistry.register('ValueSetExpansionProperty', ValueSetExpansionProperty, false);

/**
 * Codes in the value set
 */
export class ValueSetExpansionContains extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'system',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'uri' }],
    },
    {
      elementName: 'abstract',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'abstract', typeCode: 'boolean' }],
    },
    {
      elementName: 'inactive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'inactive', typeCode: 'boolean' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
    {
      elementName: 'designation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'designation', typeCode: 'ValueSetComposeIncludeConceptDesignation' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'ValueSetExpansionContainsProperty' }],
    },
    {
      elementName: 'contains',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contains', typeCode: 'ValueSetExpansionContains' }],
    },
  ];

  /** System value for the code (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** If user cannot select this entry (0..1) */
  abstract?: boolean;
  /** Id and extensions of the primitive `abstract`. */
  _abstract?: Element;

  /** If concept is inactive in the code system (0..1) */
  inactive?: boolean;
  /** Id and extensions of the primitive `inactive`. */
  _inactive?: Element;

  /** Version in which this code/display is defined (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Code - if blank, this is not a selectable code (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** User display for the concept (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Additional representations for this item (0..*) */
  designation?: ValueSetComposeIncludeConceptDesignation[];

  /** Property value for the concept (0..*) */
  property?: ValueSetExpansionContainsProperty[];

  /** Codes contained under this entry (0..*) */
  contains?: ValueSetExpansionContains[];

  override fhirType(): string {
    return 'ValueSet.expansion.contains';
  }

  /** FHIR JSON for this ValueSetExpansionContains, typed as the plain `ValueSetContains` data type. */
  override toJSON(): plainTypes.ValueSetContains {
    return this.serialize() as plainTypes.ValueSetContains;
  }

  /** System value for the code (0..1) */
  getSystem(): string | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setSystem(system: string | undefined): this {
    return this.setFieldValue('system', system);
  }

  hasSystem(): boolean {
    return this.hasFieldValue('system');
  }

  /** The element carrying the id and extensions of `system`. Created when absent. */
  getSystemElement(): Element {
    if (this._system === undefined) {
      this._system = new Element();
    }
    return this._system;
  }

  setSystemElement(systemElement: Element | undefined): this {
    this._system = systemElement;
    return this;
  }

  /** If user cannot select this entry (0..1) */
  getAbstract(): boolean | undefined {
    return this.abstract;
  }

  /** Sets `abstract`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAbstract(abstractValue: boolean | undefined): this {
    return this.setFieldValue('abstract', abstractValue);
  }

  hasAbstract(): boolean {
    return this.hasFieldValue('abstract');
  }

  /** The element carrying the id and extensions of `abstract`. Created when absent. */
  getAbstractElement(): Element {
    if (this._abstract === undefined) {
      this._abstract = new Element();
    }
    return this._abstract;
  }

  setAbstractElement(abstractElement: Element | undefined): this {
    this._abstract = abstractElement;
    return this;
  }

  /** If concept is inactive in the code system (0..1) */
  getInactive(): boolean | undefined {
    return this.inactive;
  }

  /** Sets `inactive`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setInactive(inactive: boolean | undefined): this {
    return this.setFieldValue('inactive', inactive);
  }

  hasInactive(): boolean {
    return this.hasFieldValue('inactive');
  }

  /** The element carrying the id and extensions of `inactive`. Created when absent. */
  getInactiveElement(): Element {
    if (this._inactive === undefined) {
      this._inactive = new Element();
    }
    return this._inactive;
  }

  setInactiveElement(inactiveElement: Element | undefined): this {
    this._inactive = inactiveElement;
    return this;
  }

  /** Version in which this code/display is defined (0..1) */
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

  /** Code - if blank, this is not a selectable code (0..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setCode(code: string | undefined): this {
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

  /** User display for the concept (0..1) */
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

  /** Additional representations for this item (0..*) Never undefined; an empty list is created when absent. */
  getDesignation(): ValueSetComposeIncludeConceptDesignation[] {
    if (this.designation === undefined) {
      this.designation = [];
    }
    return this.designation;
  }

  setDesignation(designation: ValueSetComposeIncludeConceptDesignation[] | undefined): this {
    return this.setFieldValue('designation', designation);
  }

  hasDesignation(): boolean {
    return this.hasFieldValue('designation');
  }

  /** Appends a new, empty ValueSetComposeIncludeConceptDesignation to `designation` and returns it so it can be filled in. */
  addDesignation(): ValueSetComposeIncludeConceptDesignation;
  /** Appends the given ValueSetComposeIncludeConceptDesignation to `designation` and returns this object for chaining. */
  addDesignation(
    valueSetComposeIncludeConceptDesignation: ValueSetComposeIncludeConceptDesignation
  ): this;
  addDesignation(
    valueSetComposeIncludeConceptDesignation?: ValueSetComposeIncludeConceptDesignation
  ): ValueSetComposeIncludeConceptDesignation | this {
    if (valueSetComposeIncludeConceptDesignation !== undefined) {
      return this.addFieldValue('designation', valueSetComposeIncludeConceptDesignation);
    }
    const createdValueSetComposeIncludeConceptDesignation =
      new ValueSetComposeIncludeConceptDesignation();
    this.addFieldValue('designation', createdValueSetComposeIncludeConceptDesignation);
    return createdValueSetComposeIncludeConceptDesignation;
  }

  /** The first ValueSetComposeIncludeConceptDesignation of `designation`. One is added when the list is empty. */
  getDesignationFirstRep(): ValueSetComposeIncludeConceptDesignation {
    const firstValueSetComposeIncludeConceptDesignation = this.getDesignation()[0];
    return firstValueSetComposeIncludeConceptDesignation === undefined
      ? this.addDesignation()
      : firstValueSetComposeIncludeConceptDesignation;
  }

  /** Property value for the concept (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): ValueSetExpansionContainsProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: ValueSetExpansionContainsProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty ValueSetExpansionContainsProperty to `property` and returns it so it can be filled in. */
  addProperty(): ValueSetExpansionContainsProperty;
  /** Appends the given ValueSetExpansionContainsProperty to `property` and returns this object for chaining. */
  addProperty(valueSetExpansionContainsProperty: ValueSetExpansionContainsProperty): this;
  addProperty(
    valueSetExpansionContainsProperty?: ValueSetExpansionContainsProperty
  ): ValueSetExpansionContainsProperty | this {
    if (valueSetExpansionContainsProperty !== undefined) {
      return this.addFieldValue('property', valueSetExpansionContainsProperty);
    }
    const createdValueSetExpansionContainsProperty = new ValueSetExpansionContainsProperty();
    this.addFieldValue('property', createdValueSetExpansionContainsProperty);
    return createdValueSetExpansionContainsProperty;
  }

  /** The first ValueSetExpansionContainsProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): ValueSetExpansionContainsProperty {
    const firstValueSetExpansionContainsProperty = this.getProperty()[0];
    return firstValueSetExpansionContainsProperty === undefined
      ? this.addProperty()
      : firstValueSetExpansionContainsProperty;
  }

  /** Codes contained under this entry (0..*) Never undefined; an empty list is created when absent. */
  getContains(): ValueSetExpansionContains[] {
    if (this.contains === undefined) {
      this.contains = [];
    }
    return this.contains;
  }

  setContains(contains: ValueSetExpansionContains[] | undefined): this {
    return this.setFieldValue('contains', contains);
  }

  hasContains(): boolean {
    return this.hasFieldValue('contains');
  }

  /** Appends a new, empty ValueSetExpansionContains to `contains` and returns it so it can be filled in. */
  addContains(): ValueSetExpansionContains;
  /** Appends the given ValueSetExpansionContains to `contains` and returns this object for chaining. */
  addContains(valueSetExpansionContains: ValueSetExpansionContains): this;
  addContains(
    valueSetExpansionContains?: ValueSetExpansionContains
  ): ValueSetExpansionContains | this {
    if (valueSetExpansionContains !== undefined) {
      return this.addFieldValue('contains', valueSetExpansionContains);
    }
    const createdValueSetExpansionContains = new ValueSetExpansionContains();
    this.addFieldValue('contains', createdValueSetExpansionContains);
    return createdValueSetExpansionContains;
  }

  /** The first ValueSetExpansionContains of `contains`. One is added when the list is empty. */
  getContainsFirstRep(): ValueSetExpansionContains {
    const firstValueSetExpansionContains = this.getContains()[0];
    return firstValueSetExpansionContains === undefined
      ? this.addContains()
      : firstValueSetExpansionContains;
  }
}

modelTypeRegistry.register('ValueSetExpansionContains', ValueSetExpansionContains, false);

/**
 * Property value for the concept
 */
export class ValueSetExpansionContainsProperty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCode', typeCode: 'code' },
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
      ],
    },
    {
      elementName: 'subProperty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subProperty', typeCode: 'ValueSetExpansionContainsPropertySubProperty' }],
    },
  ];

  /** Reference to ValueSet.expansion.property.code (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Value of the property for this concept (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of the property for this concept (1..1) */
  valueCoding?: Coding;
  /** Value of the property for this concept (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of the property for this concept (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of the property for this concept (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of the property for this concept (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Value of the property for this concept (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;

  /** SubProperty value for the concept (0..*) */
  subProperty?: ValueSetExpansionContainsPropertySubProperty[];

  override fhirType(): string {
    return 'ValueSet.expansion.contains.property';
  }

  /** FHIR JSON for this ValueSetExpansionContainsProperty, typed as the plain `ValueSetProperty1` data type. */
  override toJSON(): plainTypes.ValueSetProperty1 {
    return this.serialize() as plainTypes.ValueSetProperty1;
  }

  /** Reference to ValueSet.expansion.property.code (1..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setCode(code: string | undefined): this {
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

  /** Value of the property for this concept (1..1) Whichever type of `value[x]` is set. */
  getValue(): string | Coding | number | boolean | undefined {
    return this.getChoiceValue<string | Coding | number | boolean>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCode(): string | undefined {
    return this.valueCode;
  }

  /** Sets `value[x]` as code and clears every other type of it. */
  setValueCode(valueCode: string | undefined): this {
    return this.setFieldValue('valueCode', valueCode);
  }

  hasValueCode(): boolean {
    return this.hasFieldValue('valueCode');
  }

  getValueCoding(): Coding | undefined {
    return this.valueCoding;
  }

  /** Sets `value[x]` as Coding and clears every other type of it. */
  setValueCoding(valueCoding: Coding | undefined): this {
    return this.setFieldValue('valueCoding', valueCoding);
  }

  hasValueCoding(): boolean {
    return this.hasFieldValue('valueCoding');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
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

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }

  getValueDecimal(): number | undefined {
    return this.valueDecimal;
  }

  /** Sets `value[x]` as decimal and clears every other type of it. */
  setValueDecimal(valueDecimal: number | undefined): this {
    return this.setFieldValue('valueDecimal', valueDecimal);
  }

  hasValueDecimal(): boolean {
    return this.hasFieldValue('valueDecimal');
  }

  /** SubProperty value for the concept (0..*) Never undefined; an empty list is created when absent. */
  getSubProperty(): ValueSetExpansionContainsPropertySubProperty[] {
    if (this.subProperty === undefined) {
      this.subProperty = [];
    }
    return this.subProperty;
  }

  setSubProperty(subProperty: ValueSetExpansionContainsPropertySubProperty[] | undefined): this {
    return this.setFieldValue('subProperty', subProperty);
  }

  hasSubProperty(): boolean {
    return this.hasFieldValue('subProperty');
  }

  /** Appends a new, empty ValueSetExpansionContainsPropertySubProperty to `subProperty` and returns it so it can be filled in. */
  addSubProperty(): ValueSetExpansionContainsPropertySubProperty;
  /** Appends the given ValueSetExpansionContainsPropertySubProperty to `subProperty` and returns this object for chaining. */
  addSubProperty(
    valueSetExpansionContainsPropertySubProperty: ValueSetExpansionContainsPropertySubProperty
  ): this;
  addSubProperty(
    valueSetExpansionContainsPropertySubProperty?: ValueSetExpansionContainsPropertySubProperty
  ): ValueSetExpansionContainsPropertySubProperty | this {
    if (valueSetExpansionContainsPropertySubProperty !== undefined) {
      return this.addFieldValue('subProperty', valueSetExpansionContainsPropertySubProperty);
    }
    const createdValueSetExpansionContainsPropertySubProperty =
      new ValueSetExpansionContainsPropertySubProperty();
    this.addFieldValue('subProperty', createdValueSetExpansionContainsPropertySubProperty);
    return createdValueSetExpansionContainsPropertySubProperty;
  }

  /** The first ValueSetExpansionContainsPropertySubProperty of `subProperty`. One is added when the list is empty. */
  getSubPropertyFirstRep(): ValueSetExpansionContainsPropertySubProperty {
    const firstValueSetExpansionContainsPropertySubProperty = this.getSubProperty()[0];
    return firstValueSetExpansionContainsPropertySubProperty === undefined
      ? this.addSubProperty()
      : firstValueSetExpansionContainsPropertySubProperty;
  }
}

modelTypeRegistry.register(
  'ValueSetExpansionContainsProperty',
  ValueSetExpansionContainsProperty,
  false
);

/**
 * SubProperty value for the concept
 */
export class ValueSetExpansionContainsPropertySubProperty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCode', typeCode: 'code' },
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
      ],
    },
  ];

  /** Reference to ValueSet.expansion.property.code (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Value of the subproperty for this concept (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueCoding?: Coding;
  /** Value of the subproperty for this concept (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;

  override fhirType(): string {
    return 'ValueSet.expansion.contains.property.subProperty';
  }

  /** FHIR JSON for this ValueSetExpansionContainsPropertySubProperty, typed as the plain `ValueSetSubProperty` data type. */
  override toJSON(): plainTypes.ValueSetSubProperty {
    return this.serialize() as plainTypes.ValueSetSubProperty;
  }

  /** Reference to ValueSet.expansion.property.code (1..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setCode(code: string | undefined): this {
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

  /** Value of the subproperty for this concept (1..1) Whichever type of `value[x]` is set. */
  getValue(): string | Coding | number | boolean | undefined {
    return this.getChoiceValue<string | Coding | number | boolean>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCode(): string | undefined {
    return this.valueCode;
  }

  /** Sets `value[x]` as code and clears every other type of it. */
  setValueCode(valueCode: string | undefined): this {
    return this.setFieldValue('valueCode', valueCode);
  }

  hasValueCode(): boolean {
    return this.hasFieldValue('valueCode');
  }

  getValueCoding(): Coding | undefined {
    return this.valueCoding;
  }

  /** Sets `value[x]` as Coding and clears every other type of it. */
  setValueCoding(valueCoding: Coding | undefined): this {
    return this.setFieldValue('valueCoding', valueCoding);
  }

  hasValueCoding(): boolean {
    return this.hasFieldValue('valueCoding');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
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

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }

  getValueDecimal(): number | undefined {
    return this.valueDecimal;
  }

  /** Sets `value[x]` as decimal and clears every other type of it. */
  setValueDecimal(valueDecimal: number | undefined): this {
    return this.setFieldValue('valueDecimal', valueDecimal);
  }

  hasValueDecimal(): boolean {
    return this.hasFieldValue('valueDecimal');
  }
}

modelTypeRegistry.register(
  'ValueSetExpansionContainsPropertySubProperty',
  ValueSetExpansionContainsPropertySubProperty,
  false
);

/**
 * Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description
 */
export class ValueSetScope extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'inclusionCriteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'inclusionCriteria', typeCode: 'string' }],
    },
    {
      elementName: 'exclusionCriteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'exclusionCriteria', typeCode: 'string' }],
    },
  ];

  /** Criteria describing which concepts or codes should be included and why (0..1) */
  inclusionCriteria?: string;
  /** Id and extensions of the primitive `inclusionCriteria`. */
  _inclusionCriteria?: Element;

  /** Criteria describing which concepts or codes should be excluded and why (0..1) */
  exclusionCriteria?: string;
  /** Id and extensions of the primitive `exclusionCriteria`. */
  _exclusionCriteria?: Element;

  override fhirType(): string {
    return 'ValueSet.scope';
  }

  /** FHIR JSON for this ValueSetScope, typed as the plain `ValueSetScope` data type. */
  override toJSON(): plainTypes.ValueSetScope {
    return this.serialize() as plainTypes.ValueSetScope;
  }

  /** Criteria describing which concepts or codes should be included and why (0..1) */
  getInclusionCriteria(): string | undefined {
    return this.inclusionCriteria;
  }

  /** Sets `inclusionCriteria`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setInclusionCriteria(inclusionCriteria: string | undefined): this {
    return this.setFieldValue('inclusionCriteria', inclusionCriteria);
  }

  hasInclusionCriteria(): boolean {
    return this.hasFieldValue('inclusionCriteria');
  }

  /** The element carrying the id and extensions of `inclusionCriteria`. Created when absent. */
  getInclusionCriteriaElement(): Element {
    if (this._inclusionCriteria === undefined) {
      this._inclusionCriteria = new Element();
    }
    return this._inclusionCriteria;
  }

  setInclusionCriteriaElement(inclusionCriteriaElement: Element | undefined): this {
    this._inclusionCriteria = inclusionCriteriaElement;
    return this;
  }

  /** Criteria describing which concepts or codes should be excluded and why (0..1) */
  getExclusionCriteria(): string | undefined {
    return this.exclusionCriteria;
  }

  /** Sets `exclusionCriteria`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setExclusionCriteria(exclusionCriteria: string | undefined): this {
    return this.setFieldValue('exclusionCriteria', exclusionCriteria);
  }

  hasExclusionCriteria(): boolean {
    return this.hasFieldValue('exclusionCriteria');
  }

  /** The element carrying the id and extensions of `exclusionCriteria`. Created when absent. */
  getExclusionCriteriaElement(): Element {
    if (this._exclusionCriteria === undefined) {
      this._exclusionCriteria = new Element();
    }
    return this._exclusionCriteria;
  }

  setExclusionCriteriaElement(exclusionCriteriaElement: Element | undefined): this {
    this._exclusionCriteria = exclusionCriteriaElement;
    return this;
  }
}

modelTypeRegistry.register('ValueSetScope', ValueSetScope, false);
