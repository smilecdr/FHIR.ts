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
import { Quantity } from './quantity';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export class ConceptMap extends DomainResource {
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
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'ConceptMapProperty' }],
    },
    {
      elementName: 'additionalAttribute',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additionalAttribute', typeCode: 'ConceptMapAdditionalAttribute' }],
    },
    {
      elementName: 'sourceScope',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sourceScopeUri', typeCode: 'uri' },
        { jsonKey: 'sourceScopeCanonical', typeCode: 'canonical' },
      ],
    },
    {
      elementName: 'targetScope',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'targetScopeUri', typeCode: 'uri' },
        { jsonKey: 'targetScopeCanonical', typeCode: 'canonical' },
      ],
    },
    {
      elementName: 'group',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'group', typeCode: 'ConceptMapGroup' }],
    },
  ];

  readonly resourceType = 'ConceptMap';

  /** Canonical identifier for this concept map, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the concept map (0..*) */
  identifier?: Identifier[];

  /** Business version of the concept map (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this concept map (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this concept map (human friendly) (0..1) */
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

  /** Natural language description of the concept map (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for concept map (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this concept map is defined (0..1) */
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

  /** When the ConceptMap was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the ConceptMap was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the ConceptMap is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: CodeableConcept[];

  /** Who authored the ConceptMap (0..*) */
  author?: ContactDetail[];

  /** Who edited the ConceptMap (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the ConceptMap (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the ConceptMap (0..*) */
  endorser?: ContactDetail[];

  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Additional properties of the mapping (0..*) */
  property?: ConceptMapProperty[];

  /** Definition of an additional attribute to act as a data source or target (0..*) */
  additionalAttribute?: ConceptMapAdditionalAttribute[];

  /** The source value set that contains the concepts that are being mapped (0..1) */
  sourceScopeUri?: string;
  /** Id and extensions of the primitive `sourceScopeUri`. */
  _sourceScopeUri?: Element;
  /** The source value set that contains the concepts that are being mapped (0..1) */
  sourceScopeCanonical?: string;
  /** Id and extensions of the primitive `sourceScopeCanonical`. */
  _sourceScopeCanonical?: Element;

  /** The target value set which provides context for the mappings (0..1) */
  targetScopeUri?: string;
  /** Id and extensions of the primitive `targetScopeUri`. */
  _targetScopeUri?: Element;
  /** The target value set which provides context for the mappings (0..1) */
  targetScopeCanonical?: string;
  /** Id and extensions of the primitive `targetScopeCanonical`. */
  _targetScopeCanonical?: Element;

  /** Same source and target systems (0..*) */
  group?: ConceptMapGroup[];

  override fhirType(): string {
    return 'ConceptMap';
  }

  /** FHIR JSON for this ConceptMap, typed as the plain `ConceptMap` data type. */
  override toJSON(): plainTypes.ConceptMap {
    return this.serialize() as plainTypes.ConceptMap;
  }

  /** Canonical identifier for this concept map, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the concept map (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the concept map (0..1) */
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

  /** Name for this concept map (computer friendly) (0..1) */
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

  /** Name for this concept map (human friendly) (0..1) */
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

  /** Natural language description of the concept map (0..1) */
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

  /** Intended jurisdiction for concept map (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this concept map is defined (0..1) */
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

  /** When the ConceptMap was approved by publisher (0..1) */
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

  /** When the ConceptMap was last reviewed by the publisher (0..1) */
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

  /** When the ConceptMap is expected to be used (0..1) Created when absent. */
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

  /** Who authored the ConceptMap (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who edited the ConceptMap (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who reviewed the ConceptMap (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who endorsed the ConceptMap (0..*) Never undefined; an empty list is created when absent. */
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

  /** Additional properties of the mapping (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): ConceptMapProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: ConceptMapProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty ConceptMapProperty to `property` and returns it so it can be filled in. */
  addProperty(): ConceptMapProperty;
  /** Appends the given ConceptMapProperty to `property` and returns this object for chaining. */
  addProperty(conceptMapProperty: ConceptMapProperty): this;
  addProperty(conceptMapProperty?: ConceptMapProperty): ConceptMapProperty | this {
    if (conceptMapProperty !== undefined) {
      return this.addFieldValue('property', conceptMapProperty);
    }
    const createdConceptMapProperty = new ConceptMapProperty();
    this.addFieldValue('property', createdConceptMapProperty);
    return createdConceptMapProperty;
  }

  /** The first ConceptMapProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): ConceptMapProperty {
    const firstConceptMapProperty = this.getProperty()[0];
    return firstConceptMapProperty === undefined ? this.addProperty() : firstConceptMapProperty;
  }

  /** Definition of an additional attribute to act as a data source or target (0..*) Never undefined; an empty list is created when absent. */
  getAdditionalAttribute(): ConceptMapAdditionalAttribute[] {
    if (this.additionalAttribute === undefined) {
      this.additionalAttribute = [];
    }
    return this.additionalAttribute;
  }

  setAdditionalAttribute(additionalAttribute: ConceptMapAdditionalAttribute[] | undefined): this {
    return this.setFieldValue('additionalAttribute', additionalAttribute);
  }

  hasAdditionalAttribute(): boolean {
    return this.hasFieldValue('additionalAttribute');
  }

  /** Appends a new, empty ConceptMapAdditionalAttribute to `additionalAttribute` and returns it so it can be filled in. */
  addAdditionalAttribute(): ConceptMapAdditionalAttribute;
  /** Appends the given ConceptMapAdditionalAttribute to `additionalAttribute` and returns this object for chaining. */
  addAdditionalAttribute(conceptMapAdditionalAttribute: ConceptMapAdditionalAttribute): this;
  addAdditionalAttribute(
    conceptMapAdditionalAttribute?: ConceptMapAdditionalAttribute
  ): ConceptMapAdditionalAttribute | this {
    if (conceptMapAdditionalAttribute !== undefined) {
      return this.addFieldValue('additionalAttribute', conceptMapAdditionalAttribute);
    }
    const createdConceptMapAdditionalAttribute = new ConceptMapAdditionalAttribute();
    this.addFieldValue('additionalAttribute', createdConceptMapAdditionalAttribute);
    return createdConceptMapAdditionalAttribute;
  }

  /** The first ConceptMapAdditionalAttribute of `additionalAttribute`. One is added when the list is empty. */
  getAdditionalAttributeFirstRep(): ConceptMapAdditionalAttribute {
    const firstConceptMapAdditionalAttribute = this.getAdditionalAttribute()[0];
    return firstConceptMapAdditionalAttribute === undefined
      ? this.addAdditionalAttribute()
      : firstConceptMapAdditionalAttribute;
  }

  /** The source value set that contains the concepts that are being mapped (0..1) Whichever type of `sourceScope[x]` is set. */
  getSourceScope(): string | undefined {
    return this.getChoiceValue<string>('sourceScope');
  }

  /** True when any type of `sourceScope[x]` is set. */
  hasSourceScope(): boolean {
    return this.hasChoiceValue('sourceScope');
  }

  getSourceScopeUri(): string | undefined {
    return this.sourceScopeUri;
  }

  /** Sets `sourceScope[x]` as uri and clears every other type of it. */
  setSourceScopeUri(sourceScopeUri: string | undefined): this {
    return this.setFieldValue('sourceScopeUri', sourceScopeUri);
  }

  hasSourceScopeUri(): boolean {
    return this.hasFieldValue('sourceScopeUri');
  }

  getSourceScopeCanonical(): string | undefined {
    return this.sourceScopeCanonical;
  }

  /** Sets `sourceScope[x]` as canonical and clears every other type of it. */
  setSourceScopeCanonical(sourceScopeCanonical: string | undefined): this {
    return this.setFieldValue('sourceScopeCanonical', sourceScopeCanonical);
  }

  hasSourceScopeCanonical(): boolean {
    return this.hasFieldValue('sourceScopeCanonical');
  }

  /** The target value set which provides context for the mappings (0..1) Whichever type of `targetScope[x]` is set. */
  getTargetScope(): string | undefined {
    return this.getChoiceValue<string>('targetScope');
  }

  /** True when any type of `targetScope[x]` is set. */
  hasTargetScope(): boolean {
    return this.hasChoiceValue('targetScope');
  }

  getTargetScopeUri(): string | undefined {
    return this.targetScopeUri;
  }

  /** Sets `targetScope[x]` as uri and clears every other type of it. */
  setTargetScopeUri(targetScopeUri: string | undefined): this {
    return this.setFieldValue('targetScopeUri', targetScopeUri);
  }

  hasTargetScopeUri(): boolean {
    return this.hasFieldValue('targetScopeUri');
  }

  getTargetScopeCanonical(): string | undefined {
    return this.targetScopeCanonical;
  }

  /** Sets `targetScope[x]` as canonical and clears every other type of it. */
  setTargetScopeCanonical(targetScopeCanonical: string | undefined): this {
    return this.setFieldValue('targetScopeCanonical', targetScopeCanonical);
  }

  hasTargetScopeCanonical(): boolean {
    return this.hasFieldValue('targetScopeCanonical');
  }

  /** Same source and target systems (0..*) Never undefined; an empty list is created when absent. */
  getGroup(): ConceptMapGroup[] {
    if (this.group === undefined) {
      this.group = [];
    }
    return this.group;
  }

  setGroup(group: ConceptMapGroup[] | undefined): this {
    return this.setFieldValue('group', group);
  }

  hasGroup(): boolean {
    return this.hasFieldValue('group');
  }

  /** Appends a new, empty ConceptMapGroup to `group` and returns it so it can be filled in. */
  addGroup(): ConceptMapGroup;
  /** Appends the given ConceptMapGroup to `group` and returns this object for chaining. */
  addGroup(conceptMapGroup: ConceptMapGroup): this;
  addGroup(conceptMapGroup?: ConceptMapGroup): ConceptMapGroup | this {
    if (conceptMapGroup !== undefined) {
      return this.addFieldValue('group', conceptMapGroup);
    }
    const createdConceptMapGroup = new ConceptMapGroup();
    this.addFieldValue('group', createdConceptMapGroup);
    return createdConceptMapGroup;
  }

  /** The first ConceptMapGroup of `group`. One is added when the list is empty. */
  getGroupFirstRep(): ConceptMapGroup {
    const firstConceptMapGroup = this.getGroup()[0];
    return firstConceptMapGroup === undefined ? this.addGroup() : firstConceptMapGroup;
  }
}

modelTypeRegistry.register('ConceptMap', ConceptMap, true);

/** True when the value is a ConceptMap model instance. */
export function isConceptMap(candidate: unknown): candidate is ConceptMap {
  return candidate instanceof ConceptMap;
}

/**
 * Additional properties of the mapping
 */
export class ConceptMapProperty extends BackboneElement {
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
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ConceptMapPropertyType },
      ],
    },
    {
      elementName: 'system',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'canonical' }],
    },
  ];

  /** Identifies the property on the mappings, and when referred to in the $translate operation (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Formal identifier for the property (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;

  /** Why the property is defined, and/or what it conveys (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Coding | string | integer | boolean | dateTime | decimal | code (1..1) */
  type?: valueSetCodes.ConceptMapPropertyType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The CodeSystem from which code values come (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  override fhirType(): string {
    return 'ConceptMap.property';
  }

  /** FHIR JSON for this ConceptMapProperty, typed as the plain `ConceptMapProperty` data type. */
  override toJSON(): plainTypes.ConceptMapProperty {
    return this.serialize() as plainTypes.ConceptMapProperty;
  }

  /** Identifies the property on the mappings, and when referred to in the $translate operation (1..1) */
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

  /** Why the property is defined, and/or what it conveys (0..1) */
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

  /** Coding | string | integer | boolean | dateTime | decimal | code (1..1) */
  getType(): valueSetCodes.ConceptMapPropertyType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ConceptMapPropertyType | undefined): this {
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

  /** The CodeSystem from which code values come (0..1) */
  getSystem(): string | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
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
}

modelTypeRegistry.register('ConceptMapProperty', ConceptMapProperty, false);

/**
 * Definition of an additional attribute to act as a data source or target
 */
export class ConceptMapAdditionalAttribute extends BackboneElement {
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
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ConceptMapAttributeType },
      ],
    },
  ];

  /** Identifies this additional attribute through this resource (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Formal identifier for the data element referred to in this attribte (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;

  /** Why the additional attribute is defined, and/or what the data element it refers to is (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** code | Coding | string | boolean | Quantity (1..1) */
  type?: valueSetCodes.ConceptMapAttributeType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  override fhirType(): string {
    return 'ConceptMap.additionalAttribute';
  }

  /** FHIR JSON for this ConceptMapAdditionalAttribute, typed as the plain `ConceptMapAdditionalAttribute` data type. */
  override toJSON(): plainTypes.ConceptMapAdditionalAttribute {
    return this.serialize() as plainTypes.ConceptMapAdditionalAttribute;
  }

  /** Identifies this additional attribute through this resource (1..1) */
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

  /** Formal identifier for the data element referred to in this attribte (0..1) */
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

  /** Why the additional attribute is defined, and/or what the data element it refers to is (0..1) */
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

  /** code | Coding | string | boolean | Quantity (1..1) */
  getType(): valueSetCodes.ConceptMapAttributeType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ConceptMapAttributeType | undefined): this {
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
}

modelTypeRegistry.register('ConceptMapAdditionalAttribute', ConceptMapAdditionalAttribute, false);

/**
 * Same source and target systems
 */
export class ConceptMapGroup extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'canonical' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'target', typeCode: 'canonical' }],
    },
    {
      elementName: 'element',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'element', typeCode: 'ConceptMapGroupElement' }],
    },
    {
      elementName: 'unmapped',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unmapped', typeCode: 'ConceptMapGroupUnmapped' }],
    },
  ];

  /** Source system where concepts to be mapped are defined (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;

  /** Target system that the concepts are to be mapped to (0..1) */
  target?: string;
  /** Id and extensions of the primitive `target`. */
  _target?: Element;

  /** Mappings for a concept from the source set (1..*) */
  element?: ConceptMapGroupElement[];

  /** What to do when there is no mapping target for the source concept and ConceptMap.group.element.noMap is not true (0..1) */
  unmapped?: ConceptMapGroupUnmapped;

  override fhirType(): string {
    return 'ConceptMap.group';
  }

  /** FHIR JSON for this ConceptMapGroup, typed as the plain `ConceptMapGroup` data type. */
  override toJSON(): plainTypes.ConceptMapGroup {
    return this.serialize() as plainTypes.ConceptMapGroup;
  }

  /** Source system where concepts to be mapped are defined (0..1) */
  getSource(): string | undefined {
    return this.source;
  }

  /** Sets `source`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
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

  /** Target system that the concepts are to be mapped to (0..1) */
  getTarget(): string | undefined {
    return this.target;
  }

  /** Sets `target`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setTarget(target: string | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** The element carrying the id and extensions of `target`. Created when absent. */
  getTargetElement(): Element {
    if (this._target === undefined) {
      this._target = new Element();
    }
    return this._target;
  }

  setTargetElement(targetElement: Element | undefined): this {
    this._target = targetElement;
    return this;
  }

  /** Mappings for a concept from the source set (1..*) Never undefined; an empty list is created when absent. */
  getElement(): ConceptMapGroupElement[] {
    if (this.element === undefined) {
      this.element = [];
    }
    return this.element;
  }

  setElement(element: ConceptMapGroupElement[] | undefined): this {
    return this.setFieldValue('element', element);
  }

  hasElement(): boolean {
    return this.hasFieldValue('element');
  }

  /** Appends a new, empty ConceptMapGroupElement to `element` and returns it so it can be filled in. */
  addElement(): ConceptMapGroupElement;
  /** Appends the given ConceptMapGroupElement to `element` and returns this object for chaining. */
  addElement(conceptMapGroupElement: ConceptMapGroupElement): this;
  addElement(conceptMapGroupElement?: ConceptMapGroupElement): ConceptMapGroupElement | this {
    if (conceptMapGroupElement !== undefined) {
      return this.addFieldValue('element', conceptMapGroupElement);
    }
    const createdConceptMapGroupElement = new ConceptMapGroupElement();
    this.addFieldValue('element', createdConceptMapGroupElement);
    return createdConceptMapGroupElement;
  }

  /** The first ConceptMapGroupElement of `element`. One is added when the list is empty. */
  getElementFirstRep(): ConceptMapGroupElement {
    const firstConceptMapGroupElement = this.getElement()[0];
    return firstConceptMapGroupElement === undefined
      ? this.addElement()
      : firstConceptMapGroupElement;
  }

  /** What to do when there is no mapping target for the source concept and ConceptMap.group.element.noMap is not true (0..1) Created when absent. */
  getUnmapped(): ConceptMapGroupUnmapped {
    if (this.unmapped === undefined) {
      this.unmapped = new ConceptMapGroupUnmapped();
    }
    return this.unmapped;
  }

  setUnmapped(unmapped: ConceptMapGroupUnmapped | undefined): this {
    return this.setFieldValue('unmapped', unmapped);
  }

  hasUnmapped(): boolean {
    return this.hasFieldValue('unmapped');
  }
}

modelTypeRegistry.register('ConceptMapGroup', ConceptMapGroup, false);

/**
 * Mappings for a concept from the source set
 */
export class ConceptMapGroupElement extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'valueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'valueSet', typeCode: 'canonical' }],
    },
    {
      elementName: 'noMap',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'noMap', typeCode: 'boolean' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'target', typeCode: 'ConceptMapGroupElementTarget' }],
    },
  ];

  /** Identifies element being mapped (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Display for the code (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Identifies the set of concepts being mapped (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;

  /** No mapping to a target concept for this source concept (0..1) */
  noMap?: boolean;
  /** Id and extensions of the primitive `noMap`. */
  _noMap?: Element;

  /** Concept in target system for element (0..*) */
  target?: ConceptMapGroupElementTarget[];

  override fhirType(): string {
    return 'ConceptMap.group.element';
  }

  /** FHIR JSON for this ConceptMapGroupElement, typed as the plain `ConceptMapElement` data type. */
  override toJSON(): plainTypes.ConceptMapElement {
    return this.serialize() as plainTypes.ConceptMapElement;
  }

  /** Identifies element being mapped (0..1) */
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

  /** Display for the code (0..1) */
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

  /** Identifies the set of concepts being mapped (0..1) */
  getValueSet(): string | undefined {
    return this.valueSet;
  }

  /** Sets `valueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setValueSet(valueSet: string | undefined): this {
    return this.setFieldValue('valueSet', valueSet);
  }

  hasValueSet(): boolean {
    return this.hasFieldValue('valueSet');
  }

  /** The element carrying the id and extensions of `valueSet`. Created when absent. */
  getValueSetElement(): Element {
    if (this._valueSet === undefined) {
      this._valueSet = new Element();
    }
    return this._valueSet;
  }

  setValueSetElement(valueSetElement: Element | undefined): this {
    this._valueSet = valueSetElement;
    return this;
  }

  /** No mapping to a target concept for this source concept (0..1) */
  getNoMap(): boolean | undefined {
    return this.noMap;
  }

  /** Sets `noMap`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setNoMap(noMap: boolean | undefined): this {
    return this.setFieldValue('noMap', noMap);
  }

  hasNoMap(): boolean {
    return this.hasFieldValue('noMap');
  }

  /** The element carrying the id and extensions of `noMap`. Created when absent. */
  getNoMapElement(): Element {
    if (this._noMap === undefined) {
      this._noMap = new Element();
    }
    return this._noMap;
  }

  setNoMapElement(noMapElement: Element | undefined): this {
    this._noMap = noMapElement;
    return this;
  }

  /** Concept in target system for element (0..*) Never undefined; an empty list is created when absent. */
  getTarget(): ConceptMapGroupElementTarget[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: ConceptMapGroupElementTarget[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends a new, empty ConceptMapGroupElementTarget to `target` and returns it so it can be filled in. */
  addTarget(): ConceptMapGroupElementTarget;
  /** Appends the given ConceptMapGroupElementTarget to `target` and returns this object for chaining. */
  addTarget(conceptMapGroupElementTarget: ConceptMapGroupElementTarget): this;
  addTarget(
    conceptMapGroupElementTarget?: ConceptMapGroupElementTarget
  ): ConceptMapGroupElementTarget | this {
    if (conceptMapGroupElementTarget !== undefined) {
      return this.addFieldValue('target', conceptMapGroupElementTarget);
    }
    const createdConceptMapGroupElementTarget = new ConceptMapGroupElementTarget();
    this.addFieldValue('target', createdConceptMapGroupElementTarget);
    return createdConceptMapGroupElementTarget;
  }

  /** The first ConceptMapGroupElementTarget of `target`. One is added when the list is empty. */
  getTargetFirstRep(): ConceptMapGroupElementTarget {
    const firstConceptMapGroupElementTarget = this.getTarget()[0];
    return firstConceptMapGroupElementTarget === undefined
      ? this.addTarget()
      : firstConceptMapGroupElementTarget;
  }
}

modelTypeRegistry.register('ConceptMapGroupElement', ConceptMapGroupElement, false);

/**
 * Concept in target system for element
 */
export class ConceptMapGroupElementTarget extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'valueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'valueSet', typeCode: 'canonical' }],
    },
    {
      elementName: 'relationship',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'relationship',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConceptMapRelationship,
        },
      ],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'ConceptMapGroupElementTargetProperty' }],
    },
    {
      elementName: 'dependsOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dependsOn', typeCode: 'ConceptMapGroupElementTargetDependsOn' }],
    },
    {
      elementName: 'product',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'product', typeCode: 'ConceptMapGroupElementTargetDependsOn' }],
    },
  ];

  /** Code that identifies the target element (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Display for the code (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Identifies the set of target concepts (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;

  /** related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to (1..1) */
  relationship?: valueSetCodes.ConceptMapRelationship;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;

  /** Description of status/issues in mapping (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Property value for the source -> target mapping (0..*) */
  property?: ConceptMapGroupElementTargetProperty[];

  /** Other properties required for this mapping (0..*) */
  dependsOn?: ConceptMapGroupElementTargetDependsOn[];

  /** Other data elements that this mapping also produces (0..*) */
  product?: ConceptMapGroupElementTargetDependsOn[];

  override fhirType(): string {
    return 'ConceptMap.group.element.target';
  }

  /** FHIR JSON for this ConceptMapGroupElementTarget, typed as the plain `ConceptMapTarget` data type. */
  override toJSON(): plainTypes.ConceptMapTarget {
    return this.serialize() as plainTypes.ConceptMapTarget;
  }

  /** Code that identifies the target element (0..1) */
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

  /** Display for the code (0..1) */
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

  /** Identifies the set of target concepts (0..1) */
  getValueSet(): string | undefined {
    return this.valueSet;
  }

  /** Sets `valueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setValueSet(valueSet: string | undefined): this {
    return this.setFieldValue('valueSet', valueSet);
  }

  hasValueSet(): boolean {
    return this.hasFieldValue('valueSet');
  }

  /** The element carrying the id and extensions of `valueSet`. Created when absent. */
  getValueSetElement(): Element {
    if (this._valueSet === undefined) {
      this._valueSet = new Element();
    }
    return this._valueSet;
  }

  setValueSetElement(valueSetElement: Element | undefined): this {
    this._valueSet = valueSetElement;
    return this;
  }

  /** related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to (1..1) */
  getRelationship(): valueSetCodes.ConceptMapRelationship | undefined {
    return this.relationship;
  }

  /** Sets `relationship`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRelationship(relationship: valueSetCodes.ConceptMapRelationship | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** The element carrying the id and extensions of `relationship`. Created when absent. */
  getRelationshipElement(): Element {
    if (this._relationship === undefined) {
      this._relationship = new Element();
    }
    return this._relationship;
  }

  setRelationshipElement(relationshipElement: Element | undefined): this {
    this._relationship = relationshipElement;
    return this;
  }

  /** Description of status/issues in mapping (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }

  /** Property value for the source -> target mapping (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): ConceptMapGroupElementTargetProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: ConceptMapGroupElementTargetProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty ConceptMapGroupElementTargetProperty to `property` and returns it so it can be filled in. */
  addProperty(): ConceptMapGroupElementTargetProperty;
  /** Appends the given ConceptMapGroupElementTargetProperty to `property` and returns this object for chaining. */
  addProperty(conceptMapGroupElementTargetProperty: ConceptMapGroupElementTargetProperty): this;
  addProperty(
    conceptMapGroupElementTargetProperty?: ConceptMapGroupElementTargetProperty
  ): ConceptMapGroupElementTargetProperty | this {
    if (conceptMapGroupElementTargetProperty !== undefined) {
      return this.addFieldValue('property', conceptMapGroupElementTargetProperty);
    }
    const createdConceptMapGroupElementTargetProperty = new ConceptMapGroupElementTargetProperty();
    this.addFieldValue('property', createdConceptMapGroupElementTargetProperty);
    return createdConceptMapGroupElementTargetProperty;
  }

  /** The first ConceptMapGroupElementTargetProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): ConceptMapGroupElementTargetProperty {
    const firstConceptMapGroupElementTargetProperty = this.getProperty()[0];
    return firstConceptMapGroupElementTargetProperty === undefined
      ? this.addProperty()
      : firstConceptMapGroupElementTargetProperty;
  }

  /** Other properties required for this mapping (0..*) Never undefined; an empty list is created when absent. */
  getDependsOn(): ConceptMapGroupElementTargetDependsOn[] {
    if (this.dependsOn === undefined) {
      this.dependsOn = [];
    }
    return this.dependsOn;
  }

  setDependsOn(dependsOn: ConceptMapGroupElementTargetDependsOn[] | undefined): this {
    return this.setFieldValue('dependsOn', dependsOn);
  }

  hasDependsOn(): boolean {
    return this.hasFieldValue('dependsOn');
  }

  /** Appends a new, empty ConceptMapGroupElementTargetDependsOn to `dependsOn` and returns it so it can be filled in. */
  addDependsOn(): ConceptMapGroupElementTargetDependsOn;
  /** Appends the given ConceptMapGroupElementTargetDependsOn to `dependsOn` and returns this object for chaining. */
  addDependsOn(conceptMapGroupElementTargetDependsOn: ConceptMapGroupElementTargetDependsOn): this;
  addDependsOn(
    conceptMapGroupElementTargetDependsOn?: ConceptMapGroupElementTargetDependsOn
  ): ConceptMapGroupElementTargetDependsOn | this {
    if (conceptMapGroupElementTargetDependsOn !== undefined) {
      return this.addFieldValue('dependsOn', conceptMapGroupElementTargetDependsOn);
    }
    const createdConceptMapGroupElementTargetDependsOn =
      new ConceptMapGroupElementTargetDependsOn();
    this.addFieldValue('dependsOn', createdConceptMapGroupElementTargetDependsOn);
    return createdConceptMapGroupElementTargetDependsOn;
  }

  /** The first ConceptMapGroupElementTargetDependsOn of `dependsOn`. One is added when the list is empty. */
  getDependsOnFirstRep(): ConceptMapGroupElementTargetDependsOn {
    const firstConceptMapGroupElementTargetDependsOn = this.getDependsOn()[0];
    return firstConceptMapGroupElementTargetDependsOn === undefined
      ? this.addDependsOn()
      : firstConceptMapGroupElementTargetDependsOn;
  }

  /** Other data elements that this mapping also produces (0..*) Never undefined; an empty list is created when absent. */
  getProduct(): ConceptMapGroupElementTargetDependsOn[] {
    if (this.product === undefined) {
      this.product = [];
    }
    return this.product;
  }

  setProduct(product: ConceptMapGroupElementTargetDependsOn[] | undefined): this {
    return this.setFieldValue('product', product);
  }

  hasProduct(): boolean {
    return this.hasFieldValue('product');
  }

  /** Appends a new, empty ConceptMapGroupElementTargetDependsOn to `product` and returns it so it can be filled in. */
  addProduct(): ConceptMapGroupElementTargetDependsOn;
  /** Appends the given ConceptMapGroupElementTargetDependsOn to `product` and returns this object for chaining. */
  addProduct(conceptMapGroupElementTargetDependsOn: ConceptMapGroupElementTargetDependsOn): this;
  addProduct(
    conceptMapGroupElementTargetDependsOn?: ConceptMapGroupElementTargetDependsOn
  ): ConceptMapGroupElementTargetDependsOn | this {
    if (conceptMapGroupElementTargetDependsOn !== undefined) {
      return this.addFieldValue('product', conceptMapGroupElementTargetDependsOn);
    }
    const createdConceptMapGroupElementTargetDependsOn =
      new ConceptMapGroupElementTargetDependsOn();
    this.addFieldValue('product', createdConceptMapGroupElementTargetDependsOn);
    return createdConceptMapGroupElementTargetDependsOn;
  }

  /** The first ConceptMapGroupElementTargetDependsOn of `product`. One is added when the list is empty. */
  getProductFirstRep(): ConceptMapGroupElementTargetDependsOn {
    const firstConceptMapGroupElementTargetDependsOn = this.getProduct()[0];
    return firstConceptMapGroupElementTargetDependsOn === undefined
      ? this.addProduct()
      : firstConceptMapGroupElementTargetDependsOn;
  }
}

modelTypeRegistry.register('ConceptMapGroupElementTarget', ConceptMapGroupElementTarget, false);

/**
 * Property value for the source -> target mapping
 */
export class ConceptMapGroupElementTargetProperty extends BackboneElement {
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
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueCode', typeCode: 'code' },
      ],
    },
  ];

  /** Reference to ConceptMap.property.code (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

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
  /** Value of the property for this concept (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;

  override fhirType(): string {
    return 'ConceptMap.group.element.target.property';
  }

  /** FHIR JSON for this ConceptMapGroupElementTargetProperty, typed as the plain `ConceptMapProperty1` data type. */
  override toJSON(): plainTypes.ConceptMapProperty1 {
    return this.serialize() as plainTypes.ConceptMapProperty1;
  }

  /** Reference to ConceptMap.property.code (1..1) */
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
  getValue(): Coding | string | number | boolean | undefined {
    return this.getChoiceValue<Coding | string | number | boolean>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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
}

modelTypeRegistry.register(
  'ConceptMapGroupElementTargetProperty',
  ConceptMapGroupElementTargetProperty,
  false
);

/**
 * Other properties required for this mapping
 */
export class ConceptMapGroupElementTargetDependsOn extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'attribute',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'attribute', typeCode: 'code' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCode', typeCode: 'code' },
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
      ],
    },
    {
      elementName: 'valueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'valueSet', typeCode: 'canonical' }],
    },
  ];

  /** A reference to a mapping attribute defined in ConceptMap.additionalAttribute (1..1) */
  attribute?: string;
  /** Id and extensions of the primitive `attribute`. */
  _attribute?: Element;

  /** Value of the referenced data element (0..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of the referenced data element (0..1) */
  valueCoding?: Coding;
  /** Value of the referenced data element (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of the referenced data element (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of the referenced data element (0..1) */
  valueQuantity?: Quantity;

  /** The mapping depends on a data element with a value from this value set (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;

  override fhirType(): string {
    return 'ConceptMap.group.element.target.dependsOn';
  }

  /** FHIR JSON for this ConceptMapGroupElementTargetDependsOn, typed as the plain `ConceptMapDependsOn` data type. */
  override toJSON(): plainTypes.ConceptMapDependsOn {
    return this.serialize() as plainTypes.ConceptMapDependsOn;
  }

  /** A reference to a mapping attribute defined in ConceptMap.additionalAttribute (1..1) */
  getAttribute(): string | undefined {
    return this.attribute;
  }

  /** Sets `attribute`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setAttribute(attribute: string | undefined): this {
    return this.setFieldValue('attribute', attribute);
  }

  hasAttribute(): boolean {
    return this.hasFieldValue('attribute');
  }

  /** The element carrying the id and extensions of `attribute`. Created when absent. */
  getAttributeElement(): Element {
    if (this._attribute === undefined) {
      this._attribute = new Element();
    }
    return this._attribute;
  }

  setAttributeElement(attributeElement: Element | undefined): this {
    this._attribute = attributeElement;
    return this;
  }

  /** Value of the referenced data element (0..1) Whichever type of `value[x]` is set. */
  getValue(): string | Coding | boolean | Quantity | undefined {
    return this.getChoiceValue<string | Coding | boolean | Quantity>('value');
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

  /** The mapping depends on a data element with a value from this value set (0..1) */
  getValueSet(): string | undefined {
    return this.valueSet;
  }

  /** Sets `valueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setValueSet(valueSet: string | undefined): this {
    return this.setFieldValue('valueSet', valueSet);
  }

  hasValueSet(): boolean {
    return this.hasFieldValue('valueSet');
  }

  /** The element carrying the id and extensions of `valueSet`. Created when absent. */
  getValueSetElement(): Element {
    if (this._valueSet === undefined) {
      this._valueSet = new Element();
    }
    return this._valueSet;
  }

  setValueSetElement(valueSetElement: Element | undefined): this {
    this._valueSet = valueSetElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ConceptMapGroupElementTargetDependsOn',
  ConceptMapGroupElementTargetDependsOn,
  false
);

/**
 * What to do when there is no mapping target for the source concept and ConceptMap.group.element.noMap is not true
 */
export class ConceptMapGroupUnmapped extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'mode',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConceptMapGroupUnmappedMode,
        },
      ],
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
      elementName: 'valueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'valueSet', typeCode: 'canonical' }],
    },
    {
      elementName: 'relationship',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'relationship',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConceptMapRelationship,
        },
      ],
    },
    {
      elementName: 'otherMap',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'otherMap', typeCode: 'canonical' }],
    },
  ];

  /** use-source-code | fixed | other-map (1..1) */
  mode?: valueSetCodes.ConceptMapGroupUnmappedMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Fixed code when mode = fixed (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Display for the code (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Fixed code set when mode = fixed (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;

  /** related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to (0..1) */
  relationship?: valueSetCodes.ConceptMapRelationship;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;

  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped (0..1) */
  otherMap?: string;
  /** Id and extensions of the primitive `otherMap`. */
  _otherMap?: Element;

  override fhirType(): string {
    return 'ConceptMap.group.unmapped';
  }

  /** FHIR JSON for this ConceptMapGroupUnmapped, typed as the plain `ConceptMapUnmapped` data type. */
  override toJSON(): plainTypes.ConceptMapUnmapped {
    return this.serialize() as plainTypes.ConceptMapUnmapped;
  }

  /** use-source-code | fixed | other-map (1..1) */
  getMode(): valueSetCodes.ConceptMapGroupUnmappedMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.ConceptMapGroupUnmappedMode | undefined): this {
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

  /** Fixed code when mode = fixed (0..1) */
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

  /** Display for the code (0..1) */
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

  /** Fixed code set when mode = fixed (0..1) */
  getValueSet(): string | undefined {
    return this.valueSet;
  }

  /** Sets `valueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setValueSet(valueSet: string | undefined): this {
    return this.setFieldValue('valueSet', valueSet);
  }

  hasValueSet(): boolean {
    return this.hasFieldValue('valueSet');
  }

  /** The element carrying the id and extensions of `valueSet`. Created when absent. */
  getValueSetElement(): Element {
    if (this._valueSet === undefined) {
      this._valueSet = new Element();
    }
    return this._valueSet;
  }

  setValueSetElement(valueSetElement: Element | undefined): this {
    this._valueSet = valueSetElement;
    return this;
  }

  /** related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to (0..1) */
  getRelationship(): valueSetCodes.ConceptMapRelationship | undefined {
    return this.relationship;
  }

  /** Sets `relationship`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRelationship(relationship: valueSetCodes.ConceptMapRelationship | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** The element carrying the id and extensions of `relationship`. Created when absent. */
  getRelationshipElement(): Element {
    if (this._relationship === undefined) {
      this._relationship = new Element();
    }
    return this._relationship;
  }

  setRelationshipElement(relationshipElement: Element | undefined): this {
    this._relationship = relationshipElement;
    return this;
  }

  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped (0..1) */
  getOtherMap(): string | undefined {
    return this.otherMap;
  }

  /** Sets `otherMap`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setOtherMap(otherMap: string | undefined): this {
    return this.setFieldValue('otherMap', otherMap);
  }

  hasOtherMap(): boolean {
    return this.hasFieldValue('otherMap');
  }

  /** The element carrying the id and extensions of `otherMap`. Created when absent. */
  getOtherMapElement(): Element {
    if (this._otherMap === undefined) {
      this._otherMap = new Element();
    }
    return this._otherMap;
  }

  setOtherMapElement(otherMapElement: Element | undefined): this {
    this._otherMap = otherMapElement;
    return this;
  }
}

modelTypeRegistry.register('ConceptMapGroupUnmapped', ConceptMapGroupUnmapped, false);
