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
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
export class CodeSystem extends DomainResource {
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
      elementName: 'caseSensitive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'caseSensitive', typeCode: 'boolean' }],
    },
    {
      elementName: 'valueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'valueSet', typeCode: 'canonical' }],
    },
    {
      elementName: 'hierarchyMeaning',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'hierarchyMeaning',
          typeCode: 'code',
          allowedCodes: valueSetCodes.CodeSystemHierarchyMeaning,
        },
      ],
    },
    {
      elementName: 'compositional',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'compositional', typeCode: 'boolean' }],
    },
    {
      elementName: 'versionNeeded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'versionNeeded', typeCode: 'boolean' }],
    },
    {
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'content', typeCode: 'code', allowedCodes: valueSetCodes.CodeSystemContentMode },
      ],
    },
    {
      elementName: 'supplements',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'supplements', typeCode: 'canonical' }],
    },
    {
      elementName: 'count',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'count', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'filter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'filter', typeCode: 'CodeSystemFilter' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'CodeSystemProperty' }],
    },
    {
      elementName: 'concept',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'concept', typeCode: 'CodeSystemConcept' }],
    },
  ];

  readonly resourceType = 'CodeSystem';

  /** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the code system (business identifier) (0..*) */
  identifier?: Identifier[];

  /** Business version of the code system (Coding.version) (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this code system (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this code system (human friendly) (0..1) */
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

  /** Natural language description of the code system (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for code system (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this code system is defined (0..1) */
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

  /** When the CodeSystem was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the CodeSystem was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the CodeSystem is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: CodeableConcept[];

  /** Who authored the CodeSystem (0..*) */
  author?: ContactDetail[];

  /** Who edited the CodeSystem (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the CodeSystem (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the CodeSystem (0..*) */
  endorser?: ContactDetail[];

  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** If code comparison is case sensitive (0..1) */
  caseSensitive?: boolean;
  /** Id and extensions of the primitive `caseSensitive`. */
  _caseSensitive?: Element;

  /** Canonical reference to the value set with entire code system (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;

  /** grouped-by | is-a | part-of | classified-with (0..1) */
  hierarchyMeaning?: valueSetCodes.CodeSystemHierarchyMeaning;
  /** Id and extensions of the primitive `hierarchyMeaning`. */
  _hierarchyMeaning?: Element;

  /** If code system defines a compositional grammar (0..1) */
  compositional?: boolean;
  /** Id and extensions of the primitive `compositional`. */
  _compositional?: Element;

  /** If definitions are not stable (0..1) */
  versionNeeded?: boolean;
  /** Id and extensions of the primitive `versionNeeded`. */
  _versionNeeded?: Element;

  /** not-present | example | fragment | complete | supplement (1..1) */
  content?: valueSetCodes.CodeSystemContentMode;
  /** Id and extensions of the primitive `content`. */
  _content?: Element;

  /** Canonical URL of Code System this adds designations and properties to (0..1) */
  supplements?: string;
  /** Id and extensions of the primitive `supplements`. */
  _supplements?: Element;

  /** Total concepts in the code system (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  /** Filter that can be used in a value set (0..*) */
  filter?: CodeSystemFilter[];

  /** Additional information supplied about each concept (0..*) */
  property?: CodeSystemProperty[];

  /** Concepts in the code system (0..*) */
  concept?: CodeSystemConcept[];

  override fhirType(): string {
    return 'CodeSystem';
  }

  /** FHIR JSON for this CodeSystem, typed as the plain `CodeSystem` data type. */
  override toJSON(): plainTypes.CodeSystem {
    return this.serialize() as plainTypes.CodeSystem;
  }

  /** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) (0..1) */
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

  /** Additional identifier for the code system (business identifier) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the code system (Coding.version) (0..1) */
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

  /** Name for this code system (computer friendly) (0..1) */
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

  /** Name for this code system (human friendly) (0..1) */
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

  /** Natural language description of the code system (0..1) */
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

  /** Intended jurisdiction for code system (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this code system is defined (0..1) */
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

  /** When the CodeSystem was approved by publisher (0..1) */
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

  /** When the CodeSystem was last reviewed by the publisher (0..1) */
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

  /** When the CodeSystem is expected to be used (0..1) Created when absent. */
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

  /** Who authored the CodeSystem (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who edited the CodeSystem (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who reviewed the CodeSystem (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who endorsed the CodeSystem (0..*) Never undefined; an empty list is created when absent. */
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

  /** If code comparison is case sensitive (0..1) */
  getCaseSensitive(): boolean | undefined {
    return this.caseSensitive;
  }

  /** Sets `caseSensitive`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setCaseSensitive(caseSensitive: boolean | undefined): this {
    return this.setFieldValue('caseSensitive', caseSensitive);
  }

  hasCaseSensitive(): boolean {
    return this.hasFieldValue('caseSensitive');
  }

  /** The element carrying the id and extensions of `caseSensitive`. Created when absent. */
  getCaseSensitiveElement(): Element {
    if (this._caseSensitive === undefined) {
      this._caseSensitive = new Element();
    }
    return this._caseSensitive;
  }

  setCaseSensitiveElement(caseSensitiveElement: Element | undefined): this {
    this._caseSensitive = caseSensitiveElement;
    return this;
  }

  /** Canonical reference to the value set with entire code system (0..1) */
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

  /** grouped-by | is-a | part-of | classified-with (0..1) */
  getHierarchyMeaning(): valueSetCodes.CodeSystemHierarchyMeaning | undefined {
    return this.hierarchyMeaning;
  }

  /** Sets `hierarchyMeaning`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setHierarchyMeaning(
    hierarchyMeaning: valueSetCodes.CodeSystemHierarchyMeaning | undefined
  ): this {
    return this.setFieldValue('hierarchyMeaning', hierarchyMeaning);
  }

  hasHierarchyMeaning(): boolean {
    return this.hasFieldValue('hierarchyMeaning');
  }

  /** The element carrying the id and extensions of `hierarchyMeaning`. Created when absent. */
  getHierarchyMeaningElement(): Element {
    if (this._hierarchyMeaning === undefined) {
      this._hierarchyMeaning = new Element();
    }
    return this._hierarchyMeaning;
  }

  setHierarchyMeaningElement(hierarchyMeaningElement: Element | undefined): this {
    this._hierarchyMeaning = hierarchyMeaningElement;
    return this;
  }

  /** If code system defines a compositional grammar (0..1) */
  getCompositional(): boolean | undefined {
    return this.compositional;
  }

  /** Sets `compositional`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setCompositional(compositional: boolean | undefined): this {
    return this.setFieldValue('compositional', compositional);
  }

  hasCompositional(): boolean {
    return this.hasFieldValue('compositional');
  }

  /** The element carrying the id and extensions of `compositional`. Created when absent. */
  getCompositionalElement(): Element {
    if (this._compositional === undefined) {
      this._compositional = new Element();
    }
    return this._compositional;
  }

  setCompositionalElement(compositionalElement: Element | undefined): this {
    this._compositional = compositionalElement;
    return this;
  }

  /** If definitions are not stable (0..1) */
  getVersionNeeded(): boolean | undefined {
    return this.versionNeeded;
  }

  /** Sets `versionNeeded`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setVersionNeeded(versionNeeded: boolean | undefined): this {
    return this.setFieldValue('versionNeeded', versionNeeded);
  }

  hasVersionNeeded(): boolean {
    return this.hasFieldValue('versionNeeded');
  }

  /** The element carrying the id and extensions of `versionNeeded`. Created when absent. */
  getVersionNeededElement(): Element {
    if (this._versionNeeded === undefined) {
      this._versionNeeded = new Element();
    }
    return this._versionNeeded;
  }

  setVersionNeededElement(versionNeededElement: Element | undefined): this {
    this._versionNeeded = versionNeededElement;
    return this;
  }

  /** not-present | example | fragment | complete | supplement (1..1) */
  getContent(): valueSetCodes.CodeSystemContentMode | undefined {
    return this.content;
  }

  /** Sets `content`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setContent(content: valueSetCodes.CodeSystemContentMode | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** The element carrying the id and extensions of `content`. Created when absent. */
  getContentElement(): Element {
    if (this._content === undefined) {
      this._content = new Element();
    }
    return this._content;
  }

  setContentElement(contentElement: Element | undefined): this {
    this._content = contentElement;
    return this;
  }

  /** Canonical URL of Code System this adds designations and properties to (0..1) */
  getSupplements(): string | undefined {
    return this.supplements;
  }

  /** Sets `supplements`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setSupplements(supplements: string | undefined): this {
    return this.setFieldValue('supplements', supplements);
  }

  hasSupplements(): boolean {
    return this.hasFieldValue('supplements');
  }

  /** The element carrying the id and extensions of `supplements`. Created when absent. */
  getSupplementsElement(): Element {
    if (this._supplements === undefined) {
      this._supplements = new Element();
    }
    return this._supplements;
  }

  setSupplementsElement(supplementsElement: Element | undefined): this {
    this._supplements = supplementsElement;
    return this;
  }

  /** Total concepts in the code system (0..1) */
  getCount(): number | undefined {
    return this.count;
  }

  /** Sets `count`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setCount(count: number | undefined): this {
    return this.setFieldValue('count', count);
  }

  hasCount(): boolean {
    return this.hasFieldValue('count');
  }

  /** The element carrying the id and extensions of `count`. Created when absent. */
  getCountElement(): Element {
    if (this._count === undefined) {
      this._count = new Element();
    }
    return this._count;
  }

  setCountElement(countElement: Element | undefined): this {
    this._count = countElement;
    return this;
  }

  /** Filter that can be used in a value set (0..*) Never undefined; an empty list is created when absent. */
  getFilter(): CodeSystemFilter[] {
    if (this.filter === undefined) {
      this.filter = [];
    }
    return this.filter;
  }

  setFilter(filter: CodeSystemFilter[] | undefined): this {
    return this.setFieldValue('filter', filter);
  }

  hasFilter(): boolean {
    return this.hasFieldValue('filter');
  }

  /** Appends a new, empty CodeSystemFilter to `filter` and returns it so it can be filled in. */
  addFilter(): CodeSystemFilter;
  /** Appends the given CodeSystemFilter to `filter` and returns this object for chaining. */
  addFilter(codeSystemFilter: CodeSystemFilter): this;
  addFilter(codeSystemFilter?: CodeSystemFilter): CodeSystemFilter | this {
    if (codeSystemFilter !== undefined) {
      return this.addFieldValue('filter', codeSystemFilter);
    }
    const createdCodeSystemFilter = new CodeSystemFilter();
    this.addFieldValue('filter', createdCodeSystemFilter);
    return createdCodeSystemFilter;
  }

  /** The first CodeSystemFilter of `filter`. One is added when the list is empty. */
  getFilterFirstRep(): CodeSystemFilter {
    const firstCodeSystemFilter = this.getFilter()[0];
    return firstCodeSystemFilter === undefined ? this.addFilter() : firstCodeSystemFilter;
  }

  /** Additional information supplied about each concept (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): CodeSystemProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: CodeSystemProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty CodeSystemProperty to `property` and returns it so it can be filled in. */
  addProperty(): CodeSystemProperty;
  /** Appends the given CodeSystemProperty to `property` and returns this object for chaining. */
  addProperty(codeSystemProperty: CodeSystemProperty): this;
  addProperty(codeSystemProperty?: CodeSystemProperty): CodeSystemProperty | this {
    if (codeSystemProperty !== undefined) {
      return this.addFieldValue('property', codeSystemProperty);
    }
    const createdCodeSystemProperty = new CodeSystemProperty();
    this.addFieldValue('property', createdCodeSystemProperty);
    return createdCodeSystemProperty;
  }

  /** The first CodeSystemProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): CodeSystemProperty {
    const firstCodeSystemProperty = this.getProperty()[0];
    return firstCodeSystemProperty === undefined ? this.addProperty() : firstCodeSystemProperty;
  }

  /** Concepts in the code system (0..*) Never undefined; an empty list is created when absent. */
  getConcept(): CodeSystemConcept[] {
    if (this.concept === undefined) {
      this.concept = [];
    }
    return this.concept;
  }

  setConcept(concept: CodeSystemConcept[] | undefined): this {
    return this.setFieldValue('concept', concept);
  }

  hasConcept(): boolean {
    return this.hasFieldValue('concept');
  }

  /** Appends a new, empty CodeSystemConcept to `concept` and returns it so it can be filled in. */
  addConcept(): CodeSystemConcept;
  /** Appends the given CodeSystemConcept to `concept` and returns this object for chaining. */
  addConcept(codeSystemConcept: CodeSystemConcept): this;
  addConcept(codeSystemConcept?: CodeSystemConcept): CodeSystemConcept | this {
    if (codeSystemConcept !== undefined) {
      return this.addFieldValue('concept', codeSystemConcept);
    }
    const createdCodeSystemConcept = new CodeSystemConcept();
    this.addFieldValue('concept', createdCodeSystemConcept);
    return createdCodeSystemConcept;
  }

  /** The first CodeSystemConcept of `concept`. One is added when the list is empty. */
  getConceptFirstRep(): CodeSystemConcept {
    const firstCodeSystemConcept = this.getConcept()[0];
    return firstCodeSystemConcept === undefined ? this.addConcept() : firstCodeSystemConcept;
  }
}

modelTypeRegistry.register('CodeSystem', CodeSystem, true);

/** True when the value is a CodeSystem model instance. */
export function isCodeSystem(candidate: unknown): candidate is CodeSystem {
  return candidate instanceof CodeSystem;
}

/**
 * Filter that can be used in a value set
 */
export class CodeSystemFilter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'operator',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'operator', typeCode: 'code', allowedCodes: valueSetCodes.FilterOperator },
      ],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** Code that identifies the filter (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** How or why the filter is used (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists (1..*) */
  operator?: valueSetCodes.FilterOperator[];
  /** Id and extensions of the primitive `operator`. */
  _operator?: (Element | null)[];

  /** What to use for the value (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'CodeSystem.filter';
  }

  /** FHIR JSON for this CodeSystemFilter, typed as the plain `CodeSystemFilter` data type. */
  override toJSON(): plainTypes.CodeSystemFilter {
    return this.serialize() as plainTypes.CodeSystemFilter;
  }

  /** Code that identifies the filter (1..1) */
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

  /** How or why the filter is used (0..1) */
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

  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists (1..*) Never undefined; an empty list is created when absent. */
  getOperator(): valueSetCodes.FilterOperator[] {
    if (this.operator === undefined) {
      this.operator = [];
    }
    return this.operator;
  }

  setOperator(operator: valueSetCodes.FilterOperator[] | undefined): this {
    return this.setFieldValue('operator', operator);
  }

  hasOperator(): boolean {
    return this.hasFieldValue('operator');
  }

  /** Appends one value to `operator`. Throws a FhirModelError when it is not a valid FHIR code. */
  addOperator(operator: valueSetCodes.FilterOperator): this {
    return this.addFieldValue('operator', operator);
  }

  /** What to use for the value (1..1) */
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

modelTypeRegistry.register('CodeSystemFilter', CodeSystemFilter, false);

/**
 * Additional information supplied about each concept
 */
export class CodeSystemProperty extends BackboneElement {
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
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.PropertyType }],
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

  /** Why the property is defined, and/or what it conveys (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** code | Coding | string | integer | boolean | dateTime | decimal (1..1) */
  type?: valueSetCodes.PropertyType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  override fhirType(): string {
    return 'CodeSystem.property';
  }

  /** FHIR JSON for this CodeSystemProperty, typed as the plain `CodeSystemProperty` data type. */
  override toJSON(): plainTypes.CodeSystemProperty {
    return this.serialize() as plainTypes.CodeSystemProperty;
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

  /** code | Coding | string | integer | boolean | dateTime | decimal (1..1) */
  getType(): valueSetCodes.PropertyType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.PropertyType | undefined): this {
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

modelTypeRegistry.register('CodeSystemProperty', CodeSystemProperty, false);

/**
 * Concepts in the code system
 */
export class CodeSystemConcept extends BackboneElement {
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
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'string' }],
    },
    {
      elementName: 'designation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'designation', typeCode: 'CodeSystemConceptDesignation' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'CodeSystemConceptProperty' }],
    },
    {
      elementName: 'concept',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'concept', typeCode: 'CodeSystemConcept' }],
    },
  ];

  /** Code that identifies concept (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Text to display to the user (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Formal definition (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;

  /** Additional representations for the concept (0..*) */
  designation?: CodeSystemConceptDesignation[];

  /** Property value for the concept (0..*) */
  property?: CodeSystemConceptProperty[];

  /** Child Concepts (is-a/contains/categorizes) (0..*) */
  concept?: CodeSystemConcept[];

  override fhirType(): string {
    return 'CodeSystem.concept';
  }

  /** FHIR JSON for this CodeSystemConcept, typed as the plain `CodeSystemConcept` data type. */
  override toJSON(): plainTypes.CodeSystemConcept {
    return this.serialize() as plainTypes.CodeSystemConcept;
  }

  /** Code that identifies concept (1..1) */
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

  /** Text to display to the user (0..1) */
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

  /** Formal definition (0..1) */
  getDefinition(): string | undefined {
    return this.definition;
  }

  /** Sets `definition`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDefinition(definition: string | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** The element carrying the id and extensions of `definition`. Created when absent. */
  getDefinitionElement(): Element {
    if (this._definition === undefined) {
      this._definition = new Element();
    }
    return this._definition;
  }

  setDefinitionElement(definitionElement: Element | undefined): this {
    this._definition = definitionElement;
    return this;
  }

  /** Additional representations for the concept (0..*) Never undefined; an empty list is created when absent. */
  getDesignation(): CodeSystemConceptDesignation[] {
    if (this.designation === undefined) {
      this.designation = [];
    }
    return this.designation;
  }

  setDesignation(designation: CodeSystemConceptDesignation[] | undefined): this {
    return this.setFieldValue('designation', designation);
  }

  hasDesignation(): boolean {
    return this.hasFieldValue('designation');
  }

  /** Appends a new, empty CodeSystemConceptDesignation to `designation` and returns it so it can be filled in. */
  addDesignation(): CodeSystemConceptDesignation;
  /** Appends the given CodeSystemConceptDesignation to `designation` and returns this object for chaining. */
  addDesignation(codeSystemConceptDesignation: CodeSystemConceptDesignation): this;
  addDesignation(
    codeSystemConceptDesignation?: CodeSystemConceptDesignation
  ): CodeSystemConceptDesignation | this {
    if (codeSystemConceptDesignation !== undefined) {
      return this.addFieldValue('designation', codeSystemConceptDesignation);
    }
    const createdCodeSystemConceptDesignation = new CodeSystemConceptDesignation();
    this.addFieldValue('designation', createdCodeSystemConceptDesignation);
    return createdCodeSystemConceptDesignation;
  }

  /** The first CodeSystemConceptDesignation of `designation`. One is added when the list is empty. */
  getDesignationFirstRep(): CodeSystemConceptDesignation {
    const firstCodeSystemConceptDesignation = this.getDesignation()[0];
    return firstCodeSystemConceptDesignation === undefined
      ? this.addDesignation()
      : firstCodeSystemConceptDesignation;
  }

  /** Property value for the concept (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): CodeSystemConceptProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: CodeSystemConceptProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty CodeSystemConceptProperty to `property` and returns it so it can be filled in. */
  addProperty(): CodeSystemConceptProperty;
  /** Appends the given CodeSystemConceptProperty to `property` and returns this object for chaining. */
  addProperty(codeSystemConceptProperty: CodeSystemConceptProperty): this;
  addProperty(
    codeSystemConceptProperty?: CodeSystemConceptProperty
  ): CodeSystemConceptProperty | this {
    if (codeSystemConceptProperty !== undefined) {
      return this.addFieldValue('property', codeSystemConceptProperty);
    }
    const createdCodeSystemConceptProperty = new CodeSystemConceptProperty();
    this.addFieldValue('property', createdCodeSystemConceptProperty);
    return createdCodeSystemConceptProperty;
  }

  /** The first CodeSystemConceptProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): CodeSystemConceptProperty {
    const firstCodeSystemConceptProperty = this.getProperty()[0];
    return firstCodeSystemConceptProperty === undefined
      ? this.addProperty()
      : firstCodeSystemConceptProperty;
  }

  /** Child Concepts (is-a/contains/categorizes) (0..*) Never undefined; an empty list is created when absent. */
  getConcept(): CodeSystemConcept[] {
    if (this.concept === undefined) {
      this.concept = [];
    }
    return this.concept;
  }

  setConcept(concept: CodeSystemConcept[] | undefined): this {
    return this.setFieldValue('concept', concept);
  }

  hasConcept(): boolean {
    return this.hasFieldValue('concept');
  }

  /** Appends a new, empty CodeSystemConcept to `concept` and returns it so it can be filled in. */
  addConcept(): CodeSystemConcept;
  /** Appends the given CodeSystemConcept to `concept` and returns this object for chaining. */
  addConcept(codeSystemConcept: CodeSystemConcept): this;
  addConcept(codeSystemConcept?: CodeSystemConcept): CodeSystemConcept | this {
    if (codeSystemConcept !== undefined) {
      return this.addFieldValue('concept', codeSystemConcept);
    }
    const createdCodeSystemConcept = new CodeSystemConcept();
    this.addFieldValue('concept', createdCodeSystemConcept);
    return createdCodeSystemConcept;
  }

  /** The first CodeSystemConcept of `concept`. One is added when the list is empty. */
  getConceptFirstRep(): CodeSystemConcept {
    const firstCodeSystemConcept = this.getConcept()[0];
    return firstCodeSystemConcept === undefined ? this.addConcept() : firstCodeSystemConcept;
  }
}

modelTypeRegistry.register('CodeSystemConcept', CodeSystemConcept, false);

/**
 * Additional representations for the concept
 */
export class CodeSystemConceptDesignation extends BackboneElement {
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

  /** Details how this designation would be used (0..1) */
  use?: Coding;

  /** Additional ways how this designation would be used (0..*) */
  additionalUse?: Coding[];

  /** The text value for this designation (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'CodeSystem.concept.designation';
  }

  /** FHIR JSON for this CodeSystemConceptDesignation, typed as the plain `CodeSystemDesignation` data type. */
  override toJSON(): plainTypes.CodeSystemDesignation {
    return this.serialize() as plainTypes.CodeSystemDesignation;
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

  /** Details how this designation would be used (0..1) Created when absent. */
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

modelTypeRegistry.register('CodeSystemConceptDesignation', CodeSystemConceptDesignation, false);

/**
 * Property value for the concept
 */
export class CodeSystemConceptProperty extends BackboneElement {
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

  /** Reference to CodeSystem.property.code (1..1) */
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

  override fhirType(): string {
    return 'CodeSystem.concept.property';
  }

  /** FHIR JSON for this CodeSystemConceptProperty, typed as the plain `CodeSystemProperty1` data type. */
  override toJSON(): plainTypes.CodeSystemProperty1 {
    return this.serialize() as plainTypes.CodeSystemProperty1;
  }

  /** Reference to CodeSystem.property.code (1..1) */
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
}

modelTypeRegistry.register('CodeSystemConceptProperty', CodeSystemConceptProperty, false);
