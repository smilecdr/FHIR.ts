/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { ElementDefinition } from './elementDefinition';
import { Identifier } from './identifier';
import { UsageContext } from './usageContext';

/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 */
export class StructureDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 1,
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
      minimum: 1,
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
      elementName: 'keyword',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'keyword', typeCode: 'Coding' }],
    },
    {
      elementName: 'fhirVersion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'fhirVersion', typeCode: 'code', allowedCodes: valueSetCodes.FHIRVersion },
      ],
    },
    {
      elementName: 'mapping',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'mapping', typeCode: 'StructureDefinitionMapping' }],
    },
    {
      elementName: 'kind',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.StructureDefinitionKind },
      ],
    },
    {
      elementName: 'abstract',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'abstract', typeCode: 'boolean' }],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'context', typeCode: 'StructureDefinitionContext' }],
    },
    {
      elementName: 'contextInvariant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contextInvariant', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'uri' }],
    },
    {
      elementName: 'baseDefinition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'baseDefinition', typeCode: 'canonical' }],
    },
    {
      elementName: 'derivation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'derivation', typeCode: 'code', allowedCodes: valueSetCodes.TypeDerivationRule },
      ],
    },
    {
      elementName: 'snapshot',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'snapshot', typeCode: 'StructureDefinitionSnapshot' }],
    },
    {
      elementName: 'differential',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'differential', typeCode: 'StructureDefinitionDifferential' }],
    },
  ];

  readonly resourceType = 'StructureDefinition';

  /** Canonical identifier for this structure definition, represented as a URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the structure definition (0..*) */
  identifier?: Identifier[];

  /** Business version of the structure definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this structure definition (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this structure definition (human friendly) (0..1) */
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

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the structure definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for structure definition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this structure definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** Assist with indexing and finding (0..*) */
  keyword?: Coding[];

  /** FHIR Version this StructureDefinition targets (0..1) */
  fhirVersion?: valueSetCodes.FHIRVersion;
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: Element;

  /** External specification that the content is mapped to (0..*) */
  mapping?: StructureDefinitionMapping[];

  /** primitive-type | complex-type | resource | logical (1..1) */
  kind?: valueSetCodes.StructureDefinitionKind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Whether the structure is abstract (1..1) */
  abstract?: boolean;
  /** Id and extensions of the primitive `abstract`. */
  _abstract?: Element;

  /** If an extension, where it can be used in instances (0..*) */
  context?: StructureDefinitionContext[];

  /** FHIRPath invariants - when the extension can be used (0..*) */
  contextInvariant?: string[];
  /** Id and extensions of the primitive `contextInvariant`. */
  _contextInvariant?: (Element | null)[];

  /** Type defined or constrained by this structure (1..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Definition that this type is constrained/specialized from (0..1) */
  baseDefinition?: string;
  /** Id and extensions of the primitive `baseDefinition`. */
  _baseDefinition?: Element;

  /** specialization | constraint - How relates to base definition (0..1) */
  derivation?: valueSetCodes.TypeDerivationRule;
  /** Id and extensions of the primitive `derivation`. */
  _derivation?: Element;

  /** Snapshot view of the structure (0..1) */
  snapshot?: StructureDefinitionSnapshot;

  /** Differential view of the structure (0..1) */
  differential?: StructureDefinitionDifferential;

  override fhirType(): string {
    return 'StructureDefinition';
  }

  /** FHIR JSON for this StructureDefinition, typed as the plain `StructureDefinition` data type. */
  override toJSON(): plainTypes.StructureDefinition {
    return this.serialize() as plainTypes.StructureDefinition;
  }

  /** Canonical identifier for this structure definition, represented as a URI (globally unique) (1..1) */
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

  /** Additional identifier for the structure definition (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the structure definition (0..1) */
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

  /** Name for this structure definition (computer friendly) (1..1) */
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

  /** Name for this structure definition (human friendly) (0..1) */
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

  /** Natural language description of the structure definition (0..1) */
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

  /** Intended jurisdiction for structure definition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this structure definition is defined (0..1) */
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

  /** Assist with indexing and finding (0..*) Never undefined; an empty list is created when absent. */
  getKeyword(): Coding[] {
    if (this.keyword === undefined) {
      this.keyword = [];
    }
    return this.keyword;
  }

  setKeyword(keyword: Coding[] | undefined): this {
    return this.setFieldValue('keyword', keyword);
  }

  hasKeyword(): boolean {
    return this.hasFieldValue('keyword');
  }

  /** Appends a new, empty Coding to `keyword` and returns it so it can be filled in. */
  addKeyword(): Coding;
  /** Appends the given Coding to `keyword` and returns this object for chaining. */
  addKeyword(coding: Coding): this;
  addKeyword(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('keyword', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('keyword', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `keyword`. One is added when the list is empty. */
  getKeywordFirstRep(): Coding {
    const firstCoding = this.getKeyword()[0];
    return firstCoding === undefined ? this.addKeyword() : firstCoding;
  }

  /** FHIR Version this StructureDefinition targets (0..1) */
  getFhirVersion(): valueSetCodes.FHIRVersion | undefined {
    return this.fhirVersion;
  }

  /** Sets `fhirVersion`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setFhirVersion(fhirVersion: valueSetCodes.FHIRVersion | undefined): this {
    return this.setFieldValue('fhirVersion', fhirVersion);
  }

  hasFhirVersion(): boolean {
    return this.hasFieldValue('fhirVersion');
  }

  /** The element carrying the id and extensions of `fhirVersion`. Created when absent. */
  getFhirVersionElement(): Element {
    if (this._fhirVersion === undefined) {
      this._fhirVersion = new Element();
    }
    return this._fhirVersion;
  }

  setFhirVersionElement(fhirVersionElement: Element | undefined): this {
    this._fhirVersion = fhirVersionElement;
    return this;
  }

  /** External specification that the content is mapped to (0..*) Never undefined; an empty list is created when absent. */
  getMapping(): StructureDefinitionMapping[] {
    if (this.mapping === undefined) {
      this.mapping = [];
    }
    return this.mapping;
  }

  setMapping(mapping: StructureDefinitionMapping[] | undefined): this {
    return this.setFieldValue('mapping', mapping);
  }

  hasMapping(): boolean {
    return this.hasFieldValue('mapping');
  }

  /** Appends a new, empty StructureDefinitionMapping to `mapping` and returns it so it can be filled in. */
  addMapping(): StructureDefinitionMapping;
  /** Appends the given StructureDefinitionMapping to `mapping` and returns this object for chaining. */
  addMapping(structureDefinitionMapping: StructureDefinitionMapping): this;
  addMapping(
    structureDefinitionMapping?: StructureDefinitionMapping
  ): StructureDefinitionMapping | this {
    if (structureDefinitionMapping !== undefined) {
      return this.addFieldValue('mapping', structureDefinitionMapping);
    }
    const createdStructureDefinitionMapping = new StructureDefinitionMapping();
    this.addFieldValue('mapping', createdStructureDefinitionMapping);
    return createdStructureDefinitionMapping;
  }

  /** The first StructureDefinitionMapping of `mapping`. One is added when the list is empty. */
  getMappingFirstRep(): StructureDefinitionMapping {
    const firstStructureDefinitionMapping = this.getMapping()[0];
    return firstStructureDefinitionMapping === undefined
      ? this.addMapping()
      : firstStructureDefinitionMapping;
  }

  /** primitive-type | complex-type | resource | logical (1..1) */
  getKind(): valueSetCodes.StructureDefinitionKind | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.StructureDefinitionKind | undefined): this {
    return this.setFieldValue('kind', kind);
  }

  hasKind(): boolean {
    return this.hasFieldValue('kind');
  }

  /** The element carrying the id and extensions of `kind`. Created when absent. */
  getKindElement(): Element {
    if (this._kind === undefined) {
      this._kind = new Element();
    }
    return this._kind;
  }

  setKindElement(kindElement: Element | undefined): this {
    this._kind = kindElement;
    return this;
  }

  /** Whether the structure is abstract (1..1) */
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

  /** If an extension, where it can be used in instances (0..*) Never undefined; an empty list is created when absent. */
  getContext(): StructureDefinitionContext[] {
    if (this.context === undefined) {
      this.context = [];
    }
    return this.context;
  }

  setContext(context: StructureDefinitionContext[] | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** Appends a new, empty StructureDefinitionContext to `context` and returns it so it can be filled in. */
  addContext(): StructureDefinitionContext;
  /** Appends the given StructureDefinitionContext to `context` and returns this object for chaining. */
  addContext(structureDefinitionContext: StructureDefinitionContext): this;
  addContext(
    structureDefinitionContext?: StructureDefinitionContext
  ): StructureDefinitionContext | this {
    if (structureDefinitionContext !== undefined) {
      return this.addFieldValue('context', structureDefinitionContext);
    }
    const createdStructureDefinitionContext = new StructureDefinitionContext();
    this.addFieldValue('context', createdStructureDefinitionContext);
    return createdStructureDefinitionContext;
  }

  /** The first StructureDefinitionContext of `context`. One is added when the list is empty. */
  getContextFirstRep(): StructureDefinitionContext {
    const firstStructureDefinitionContext = this.getContext()[0];
    return firstStructureDefinitionContext === undefined
      ? this.addContext()
      : firstStructureDefinitionContext;
  }

  /** FHIRPath invariants - when the extension can be used (0..*) Never undefined; an empty list is created when absent. */
  getContextInvariant(): string[] {
    if (this.contextInvariant === undefined) {
      this.contextInvariant = [];
    }
    return this.contextInvariant;
  }

  setContextInvariant(contextInvariant: string[] | undefined): this {
    return this.setFieldValue('contextInvariant', contextInvariant);
  }

  hasContextInvariant(): boolean {
    return this.hasFieldValue('contextInvariant');
  }

  /** Appends one value to `contextInvariant`. Throws a FhirModelError when it is not a valid FHIR string. */
  addContextInvariant(contextInvariant: string): this {
    return this.addFieldValue('contextInvariant', contextInvariant);
  }

  /** Type defined or constrained by this structure (1..1) */
  getType(): string | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setType(type: string | undefined): this {
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

  /** Definition that this type is constrained/specialized from (0..1) */
  getBaseDefinition(): string | undefined {
    return this.baseDefinition;
  }

  /** Sets `baseDefinition`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setBaseDefinition(baseDefinition: string | undefined): this {
    return this.setFieldValue('baseDefinition', baseDefinition);
  }

  hasBaseDefinition(): boolean {
    return this.hasFieldValue('baseDefinition');
  }

  /** The element carrying the id and extensions of `baseDefinition`. Created when absent. */
  getBaseDefinitionElement(): Element {
    if (this._baseDefinition === undefined) {
      this._baseDefinition = new Element();
    }
    return this._baseDefinition;
  }

  setBaseDefinitionElement(baseDefinitionElement: Element | undefined): this {
    this._baseDefinition = baseDefinitionElement;
    return this;
  }

  /** specialization | constraint - How relates to base definition (0..1) */
  getDerivation(): valueSetCodes.TypeDerivationRule | undefined {
    return this.derivation;
  }

  /** Sets `derivation`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDerivation(derivation: valueSetCodes.TypeDerivationRule | undefined): this {
    return this.setFieldValue('derivation', derivation);
  }

  hasDerivation(): boolean {
    return this.hasFieldValue('derivation');
  }

  /** The element carrying the id and extensions of `derivation`. Created when absent. */
  getDerivationElement(): Element {
    if (this._derivation === undefined) {
      this._derivation = new Element();
    }
    return this._derivation;
  }

  setDerivationElement(derivationElement: Element | undefined): this {
    this._derivation = derivationElement;
    return this;
  }

  /** Snapshot view of the structure (0..1) Created when absent. */
  getSnapshot(): StructureDefinitionSnapshot {
    if (this.snapshot === undefined) {
      this.snapshot = new StructureDefinitionSnapshot();
    }
    return this.snapshot;
  }

  setSnapshot(snapshot: StructureDefinitionSnapshot | undefined): this {
    return this.setFieldValue('snapshot', snapshot);
  }

  hasSnapshot(): boolean {
    return this.hasFieldValue('snapshot');
  }

  /** Differential view of the structure (0..1) Created when absent. */
  getDifferential(): StructureDefinitionDifferential {
    if (this.differential === undefined) {
      this.differential = new StructureDefinitionDifferential();
    }
    return this.differential;
  }

  setDifferential(differential: StructureDefinitionDifferential | undefined): this {
    return this.setFieldValue('differential', differential);
  }

  hasDifferential(): boolean {
    return this.hasFieldValue('differential');
  }
}

modelTypeRegistry.register('StructureDefinition', StructureDefinition, true);

/** True when the value is a StructureDefinition model instance. */
export function isStructureDefinition(candidate: unknown): candidate is StructureDefinition {
  return candidate instanceof StructureDefinition;
}

/**
 * External specification that the content is mapped to
 */
export class StructureDefinitionMapping extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identity', typeCode: 'id' }],
    },
    {
      elementName: 'uri',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uri', typeCode: 'uri' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
  ];

  /** Internal id when this mapping is used (1..1) */
  identity?: string;
  /** Id and extensions of the primitive `identity`. */
  _identity?: Element;

  /** Identifies what this mapping refers to (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;

  /** Names what this mapping refers to (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Versions, Issues, Scope limitations etc. (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  override fhirType(): string {
    return 'StructureDefinition.mapping';
  }

  /** FHIR JSON for this StructureDefinitionMapping, typed as the plain `StructureDefinitionMapping` data type. */
  override toJSON(): plainTypes.StructureDefinitionMapping {
    return this.serialize() as plainTypes.StructureDefinitionMapping;
  }

  /** Internal id when this mapping is used (1..1) */
  getIdentity(): string | undefined {
    return this.identity;
  }

  /** Sets `identity`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setIdentity(identity: string | undefined): this {
    return this.setFieldValue('identity', identity);
  }

  hasIdentity(): boolean {
    return this.hasFieldValue('identity');
  }

  /** The element carrying the id and extensions of `identity`. Created when absent. */
  getIdentityElement(): Element {
    if (this._identity === undefined) {
      this._identity = new Element();
    }
    return this._identity;
  }

  setIdentityElement(identityElement: Element | undefined): this {
    this._identity = identityElement;
    return this;
  }

  /** Identifies what this mapping refers to (0..1) */
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

  /** Names what this mapping refers to (0..1) */
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

  /** Versions, Issues, Scope limitations etc. (0..1) */
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
}

modelTypeRegistry.register('StructureDefinitionMapping', StructureDefinitionMapping, false);

/**
 * If an extension, where it can be used in instances
 */
export class StructureDefinitionContext extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ExtensionContextType },
      ],
    },
    {
      elementName: 'expression',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
  ];

  /** fhirpath | element | extension (1..1) */
  type?: valueSetCodes.ExtensionContextType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Where the extension can be used in instances (1..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  override fhirType(): string {
    return 'StructureDefinition.context';
  }

  /** FHIR JSON for this StructureDefinitionContext, typed as the plain `StructureDefinitionContext` data type. */
  override toJSON(): plainTypes.StructureDefinitionContext {
    return this.serialize() as plainTypes.StructureDefinitionContext;
  }

  /** fhirpath | element | extension (1..1) */
  getType(): valueSetCodes.ExtensionContextType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ExtensionContextType | undefined): this {
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

  /** Where the extension can be used in instances (1..1) */
  getExpression(): string | undefined {
    return this.expression;
  }

  /** Sets `expression`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setExpression(expression: string | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }

  /** The element carrying the id and extensions of `expression`. Created when absent. */
  getExpressionElement(): Element {
    if (this._expression === undefined) {
      this._expression = new Element();
    }
    return this._expression;
  }

  setExpressionElement(expressionElement: Element | undefined): this {
    this._expression = expressionElement;
    return this;
  }
}

modelTypeRegistry.register('StructureDefinitionContext', StructureDefinitionContext, false);

/**
 * Snapshot view of the structure
 */
export class StructureDefinitionSnapshot extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'element',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'element', typeCode: 'ElementDefinition' }],
    },
  ];

  /** Definition of elements in the resource (if no StructureDefinition) (1..*) */
  element?: ElementDefinition[];

  override fhirType(): string {
    return 'StructureDefinition.snapshot';
  }

  /** FHIR JSON for this StructureDefinitionSnapshot, typed as the plain `StructureDefinitionSnapshot` data type. */
  override toJSON(): plainTypes.StructureDefinitionSnapshot {
    return this.serialize() as plainTypes.StructureDefinitionSnapshot;
  }

  /** Definition of elements in the resource (if no StructureDefinition) (1..*) Never undefined; an empty list is created when absent. */
  getElement(): ElementDefinition[] {
    if (this.element === undefined) {
      this.element = [];
    }
    return this.element;
  }

  setElement(element: ElementDefinition[] | undefined): this {
    return this.setFieldValue('element', element);
  }

  hasElement(): boolean {
    return this.hasFieldValue('element');
  }

  /** Appends a new, empty ElementDefinition to `element` and returns it so it can be filled in. */
  addElement(): ElementDefinition;
  /** Appends the given ElementDefinition to `element` and returns this object for chaining. */
  addElement(elementDefinition: ElementDefinition): this;
  addElement(elementDefinition?: ElementDefinition): ElementDefinition | this {
    if (elementDefinition !== undefined) {
      return this.addFieldValue('element', elementDefinition);
    }
    const createdElementDefinition = new ElementDefinition();
    this.addFieldValue('element', createdElementDefinition);
    return createdElementDefinition;
  }

  /** The first ElementDefinition of `element`. One is added when the list is empty. */
  getElementFirstRep(): ElementDefinition {
    const firstElementDefinition = this.getElement()[0];
    return firstElementDefinition === undefined ? this.addElement() : firstElementDefinition;
  }
}

modelTypeRegistry.register('StructureDefinitionSnapshot', StructureDefinitionSnapshot, false);

/**
 * Differential view of the structure
 */
export class StructureDefinitionDifferential extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'element',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'element', typeCode: 'ElementDefinition' }],
    },
  ];

  /** Definition of elements in the resource (if no StructureDefinition) (1..*) */
  element?: ElementDefinition[];

  override fhirType(): string {
    return 'StructureDefinition.differential';
  }

  /** FHIR JSON for this StructureDefinitionDifferential, typed as the plain `StructureDefinitionDifferential` data type. */
  override toJSON(): plainTypes.StructureDefinitionDifferential {
    return this.serialize() as plainTypes.StructureDefinitionDifferential;
  }

  /** Definition of elements in the resource (if no StructureDefinition) (1..*) Never undefined; an empty list is created when absent. */
  getElement(): ElementDefinition[] {
    if (this.element === undefined) {
      this.element = [];
    }
    return this.element;
  }

  setElement(element: ElementDefinition[] | undefined): this {
    return this.setFieldValue('element', element);
  }

  hasElement(): boolean {
    return this.hasFieldValue('element');
  }

  /** Appends a new, empty ElementDefinition to `element` and returns it so it can be filled in. */
  addElement(): ElementDefinition;
  /** Appends the given ElementDefinition to `element` and returns this object for chaining. */
  addElement(elementDefinition: ElementDefinition): this;
  addElement(elementDefinition?: ElementDefinition): ElementDefinition | this {
    if (elementDefinition !== undefined) {
      return this.addFieldValue('element', elementDefinition);
    }
    const createdElementDefinition = new ElementDefinition();
    this.addFieldValue('element', createdElementDefinition);
    return createdElementDefinition;
  }

  /** The first ElementDefinition of `element`. One is added when the list is empty. */
  getElementFirstRep(): ElementDefinition {
    const firstElementDefinition = this.getElement()[0];
    return firstElementDefinition === undefined ? this.addElement() : firstElementDefinition;
  }
}

modelTypeRegistry.register(
  'StructureDefinitionDifferential',
  StructureDefinitionDifferential,
  false
);
