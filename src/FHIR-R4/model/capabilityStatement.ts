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
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export class CapabilityStatement extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
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
      elementName: 'experimental',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'experimental', typeCode: 'boolean' }],
    },
    {
      elementName: 'date',
      minimum: 1,
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
      elementName: 'kind',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.CapabilityStatementKind },
      ],
    },
    {
      elementName: 'instantiates',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiates', typeCode: 'canonical' }],
    },
    {
      elementName: 'imports',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'imports', typeCode: 'canonical' }],
    },
    {
      elementName: 'software',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'software', typeCode: 'CapabilityStatementSoftware' }],
    },
    {
      elementName: 'implementation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'implementation', typeCode: 'CapabilityStatementImplementation' }],
    },
    {
      elementName: 'fhirVersion',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'fhirVersion', typeCode: 'code', allowedCodes: valueSetCodes.FHIRVersion },
      ],
    },
    {
      elementName: 'format',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'format', typeCode: 'code' }],
    },
    {
      elementName: 'patchFormat',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'patchFormat', typeCode: 'code' }],
    },
    {
      elementName: 'implementationGuide',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'implementationGuide', typeCode: 'canonical' }],
    },
    {
      elementName: 'rest',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rest', typeCode: 'CapabilityStatementRest' }],
    },
    {
      elementName: 'messaging',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'messaging', typeCode: 'CapabilityStatementMessaging' }],
    },
    {
      elementName: 'document',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'document', typeCode: 'CapabilityStatementDocument' }],
    },
  ];

  readonly resourceType = 'CapabilityStatement';

  /** Canonical identifier for this capability statement, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Business version of the capability statement (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this capability statement (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this capability statement (human friendly) (0..1) */
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

  /** Date last changed (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the capability statement (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for capability statement (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this capability statement is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** instance | capability | requirements (1..1) */
  kind?: valueSetCodes.CapabilityStatementKind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Canonical URL of another capability statement this implements (0..*) */
  instantiates?: string[];
  /** Id and extensions of the primitive `instantiates`. */
  _instantiates?: (Element | null)[];

  /** Canonical URL of another capability statement this adds to (0..*) */
  imports?: string[];
  /** Id and extensions of the primitive `imports`. */
  _imports?: (Element | null)[];

  /** Software that is covered by this capability statement (0..1) */
  software?: CapabilityStatementSoftware;

  /** If this describes a specific instance (0..1) */
  implementation?: CapabilityStatementImplementation;

  /** FHIR Version the system supports (1..1) */
  fhirVersion?: valueSetCodes.FHIRVersion;
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: Element;

  /** formats supported (xml | json | ttl | mime type) (1..*) */
  format?: string[];
  /** Id and extensions of the primitive `format`. */
  _format?: (Element | null)[];

  /** Patch formats supported (0..*) */
  patchFormat?: string[];
  /** Id and extensions of the primitive `patchFormat`. */
  _patchFormat?: (Element | null)[];

  /** Implementation guides supported (0..*) */
  implementationGuide?: string[];
  /** Id and extensions of the primitive `implementationGuide`. */
  _implementationGuide?: (Element | null)[];

  /** If the endpoint is a RESTful one (0..*) */
  rest?: CapabilityStatementRest[];

  /** If messaging is supported (0..*) */
  messaging?: CapabilityStatementMessaging[];

  /** Document definition (0..*) */
  document?: CapabilityStatementDocument[];

  override fhirType(): string {
    return 'CapabilityStatement';
  }

  /** FHIR JSON for this CapabilityStatement, typed as the plain `CapabilityStatement` data type. */
  override toJSON(): plainTypes.CapabilityStatement {
    return this.serialize() as plainTypes.CapabilityStatement;
  }

  /** Canonical identifier for this capability statement, represented as a URI (globally unique) (0..1) */
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

  /** Business version of the capability statement (0..1) */
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

  /** Name for this capability statement (computer friendly) (0..1) */
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

  /** Name for this capability statement (human friendly) (0..1) */
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

  /** Date last changed (1..1) */
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

  /** Natural language description of the capability statement (0..1) */
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

  /** Intended jurisdiction for capability statement (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this capability statement is defined (0..1) */
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

  /** instance | capability | requirements (1..1) */
  getKind(): valueSetCodes.CapabilityStatementKind | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.CapabilityStatementKind | undefined): this {
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

  /** Canonical URL of another capability statement this implements (0..*) Never undefined; an empty list is created when absent. */
  getInstantiates(): string[] {
    if (this.instantiates === undefined) {
      this.instantiates = [];
    }
    return this.instantiates;
  }

  setInstantiates(instantiates: string[] | undefined): this {
    return this.setFieldValue('instantiates', instantiates);
  }

  hasInstantiates(): boolean {
    return this.hasFieldValue('instantiates');
  }

  /** Appends one value to `instantiates`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addInstantiates(instantiates: string): this {
    return this.addFieldValue('instantiates', instantiates);
  }

  /** Canonical URL of another capability statement this adds to (0..*) Never undefined; an empty list is created when absent. */
  getImports(): string[] {
    if (this.imports === undefined) {
      this.imports = [];
    }
    return this.imports;
  }

  setImports(imports: string[] | undefined): this {
    return this.setFieldValue('imports', imports);
  }

  hasImports(): boolean {
    return this.hasFieldValue('imports');
  }

  /** Appends one value to `imports`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addImports(imports: string): this {
    return this.addFieldValue('imports', imports);
  }

  /** Software that is covered by this capability statement (0..1) Created when absent. */
  getSoftware(): CapabilityStatementSoftware {
    if (this.software === undefined) {
      this.software = new CapabilityStatementSoftware();
    }
    return this.software;
  }

  setSoftware(software: CapabilityStatementSoftware | undefined): this {
    return this.setFieldValue('software', software);
  }

  hasSoftware(): boolean {
    return this.hasFieldValue('software');
  }

  /** If this describes a specific instance (0..1) Created when absent. */
  getImplementation(): CapabilityStatementImplementation {
    if (this.implementation === undefined) {
      this.implementation = new CapabilityStatementImplementation();
    }
    return this.implementation;
  }

  setImplementation(implementation: CapabilityStatementImplementation | undefined): this {
    return this.setFieldValue('implementation', implementation);
  }

  hasImplementation(): boolean {
    return this.hasFieldValue('implementation');
  }

  /** FHIR Version the system supports (1..1) */
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

  /** formats supported (xml | json | ttl | mime type) (1..*) Never undefined; an empty list is created when absent. */
  getFormat(): string[] {
    if (this.format === undefined) {
      this.format = [];
    }
    return this.format;
  }

  setFormat(format: string[] | undefined): this {
    return this.setFieldValue('format', format);
  }

  hasFormat(): boolean {
    return this.hasFieldValue('format');
  }

  /** Appends one value to `format`. Throws a FhirModelError when it is not a valid FHIR code. */
  addFormat(format: string): this {
    return this.addFieldValue('format', format);
  }

  /** Patch formats supported (0..*) Never undefined; an empty list is created when absent. */
  getPatchFormat(): string[] {
    if (this.patchFormat === undefined) {
      this.patchFormat = [];
    }
    return this.patchFormat;
  }

  setPatchFormat(patchFormat: string[] | undefined): this {
    return this.setFieldValue('patchFormat', patchFormat);
  }

  hasPatchFormat(): boolean {
    return this.hasFieldValue('patchFormat');
  }

  /** Appends one value to `patchFormat`. Throws a FhirModelError when it is not a valid FHIR code. */
  addPatchFormat(patchFormat: string): this {
    return this.addFieldValue('patchFormat', patchFormat);
  }

  /** Implementation guides supported (0..*) Never undefined; an empty list is created when absent. */
  getImplementationGuide(): string[] {
    if (this.implementationGuide === undefined) {
      this.implementationGuide = [];
    }
    return this.implementationGuide;
  }

  setImplementationGuide(implementationGuide: string[] | undefined): this {
    return this.setFieldValue('implementationGuide', implementationGuide);
  }

  hasImplementationGuide(): boolean {
    return this.hasFieldValue('implementationGuide');
  }

  /** Appends one value to `implementationGuide`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addImplementationGuide(implementationGuide: string): this {
    return this.addFieldValue('implementationGuide', implementationGuide);
  }

  /** If the endpoint is a RESTful one (0..*) Never undefined; an empty list is created when absent. */
  getRest(): CapabilityStatementRest[] {
    if (this.rest === undefined) {
      this.rest = [];
    }
    return this.rest;
  }

  setRest(rest: CapabilityStatementRest[] | undefined): this {
    return this.setFieldValue('rest', rest);
  }

  hasRest(): boolean {
    return this.hasFieldValue('rest');
  }

  /** Appends a new, empty CapabilityStatementRest to `rest` and returns it so it can be filled in. */
  addRest(): CapabilityStatementRest;
  /** Appends the given CapabilityStatementRest to `rest` and returns this object for chaining. */
  addRest(capabilityStatementRest: CapabilityStatementRest): this;
  addRest(capabilityStatementRest?: CapabilityStatementRest): CapabilityStatementRest | this {
    if (capabilityStatementRest !== undefined) {
      return this.addFieldValue('rest', capabilityStatementRest);
    }
    const createdCapabilityStatementRest = new CapabilityStatementRest();
    this.addFieldValue('rest', createdCapabilityStatementRest);
    return createdCapabilityStatementRest;
  }

  /** The first CapabilityStatementRest of `rest`. One is added when the list is empty. */
  getRestFirstRep(): CapabilityStatementRest {
    const firstCapabilityStatementRest = this.getRest()[0];
    return firstCapabilityStatementRest === undefined
      ? this.addRest()
      : firstCapabilityStatementRest;
  }

  /** If messaging is supported (0..*) Never undefined; an empty list is created when absent. */
  getMessaging(): CapabilityStatementMessaging[] {
    if (this.messaging === undefined) {
      this.messaging = [];
    }
    return this.messaging;
  }

  setMessaging(messaging: CapabilityStatementMessaging[] | undefined): this {
    return this.setFieldValue('messaging', messaging);
  }

  hasMessaging(): boolean {
    return this.hasFieldValue('messaging');
  }

  /** Appends a new, empty CapabilityStatementMessaging to `messaging` and returns it so it can be filled in. */
  addMessaging(): CapabilityStatementMessaging;
  /** Appends the given CapabilityStatementMessaging to `messaging` and returns this object for chaining. */
  addMessaging(capabilityStatementMessaging: CapabilityStatementMessaging): this;
  addMessaging(
    capabilityStatementMessaging?: CapabilityStatementMessaging
  ): CapabilityStatementMessaging | this {
    if (capabilityStatementMessaging !== undefined) {
      return this.addFieldValue('messaging', capabilityStatementMessaging);
    }
    const createdCapabilityStatementMessaging = new CapabilityStatementMessaging();
    this.addFieldValue('messaging', createdCapabilityStatementMessaging);
    return createdCapabilityStatementMessaging;
  }

  /** The first CapabilityStatementMessaging of `messaging`. One is added when the list is empty. */
  getMessagingFirstRep(): CapabilityStatementMessaging {
    const firstCapabilityStatementMessaging = this.getMessaging()[0];
    return firstCapabilityStatementMessaging === undefined
      ? this.addMessaging()
      : firstCapabilityStatementMessaging;
  }

  /** Document definition (0..*) Never undefined; an empty list is created when absent. */
  getDocument(): CapabilityStatementDocument[] {
    if (this.document === undefined) {
      this.document = [];
    }
    return this.document;
  }

  setDocument(document: CapabilityStatementDocument[] | undefined): this {
    return this.setFieldValue('document', document);
  }

  hasDocument(): boolean {
    return this.hasFieldValue('document');
  }

  /** Appends a new, empty CapabilityStatementDocument to `document` and returns it so it can be filled in. */
  addDocument(): CapabilityStatementDocument;
  /** Appends the given CapabilityStatementDocument to `document` and returns this object for chaining. */
  addDocument(capabilityStatementDocument: CapabilityStatementDocument): this;
  addDocument(
    capabilityStatementDocument?: CapabilityStatementDocument
  ): CapabilityStatementDocument | this {
    if (capabilityStatementDocument !== undefined) {
      return this.addFieldValue('document', capabilityStatementDocument);
    }
    const createdCapabilityStatementDocument = new CapabilityStatementDocument();
    this.addFieldValue('document', createdCapabilityStatementDocument);
    return createdCapabilityStatementDocument;
  }

  /** The first CapabilityStatementDocument of `document`. One is added when the list is empty. */
  getDocumentFirstRep(): CapabilityStatementDocument {
    const firstCapabilityStatementDocument = this.getDocument()[0];
    return firstCapabilityStatementDocument === undefined
      ? this.addDocument()
      : firstCapabilityStatementDocument;
  }
}

modelTypeRegistry.register('CapabilityStatement', CapabilityStatement, true);

/** True when the value is a CapabilityStatement model instance. */
export function isCapabilityStatement(candidate: unknown): candidate is CapabilityStatement {
  return candidate instanceof CapabilityStatement;
}

/**
 * Software that is covered by this capability statement
 */
export class CapabilityStatementSoftware extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'releaseDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'releaseDate', typeCode: 'dateTime' }],
    },
  ];

  /** A name the software is known by (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Version covered by this statement (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Date this version was released (0..1) */
  releaseDate?: string;
  /** Id and extensions of the primitive `releaseDate`. */
  _releaseDate?: Element;

  override fhirType(): string {
    return 'CapabilityStatement.software';
  }

  /** FHIR JSON for this CapabilityStatementSoftware, typed as the plain `CapabilityStatementSoftware` data type. */
  override toJSON(): plainTypes.CapabilityStatementSoftware {
    return this.serialize() as plainTypes.CapabilityStatementSoftware;
  }

  /** A name the software is known by (1..1) */
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

  /** Version covered by this statement (0..1) */
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

  /** Date this version was released (0..1) */
  getReleaseDate(): string | undefined {
    return this.releaseDate;
  }

  /** Sets `releaseDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setReleaseDate(releaseDate: string | undefined): this {
    return this.setFieldValue('releaseDate', releaseDate);
  }

  hasReleaseDate(): boolean {
    return this.hasFieldValue('releaseDate');
  }

  /** The element carrying the id and extensions of `releaseDate`. Created when absent. */
  getReleaseDateElement(): Element {
    if (this._releaseDate === undefined) {
      this._releaseDate = new Element();
    }
    return this._releaseDate;
  }

  setReleaseDateElement(releaseDateElement: Element | undefined): this {
    this._releaseDate = releaseDateElement;
    return this;
  }
}

modelTypeRegistry.register('CapabilityStatementSoftware', CapabilityStatementSoftware, false);

/**
 * If this describes a specific instance
 */
export class CapabilityStatementImplementation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'url' }],
    },
    {
      elementName: 'custodian',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'custodian', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
  ];

  /** Describes this specific instance (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Base URL for the installation (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Organization that manages the data (0..1) */
  custodian?: Reference;

  override fhirType(): string {
    return 'CapabilityStatement.implementation';
  }

  /** FHIR JSON for this CapabilityStatementImplementation, typed as the plain `CapabilityStatementImplementation` data type. */
  override toJSON(): plainTypes.CapabilityStatementImplementation {
    return this.serialize() as plainTypes.CapabilityStatementImplementation;
  }

  /** Describes this specific instance (1..1) */
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

  /** Base URL for the installation (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR url. */
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

  /** Organization that manages the data (0..1) Created when absent. */
  getCustodian(): Reference {
    if (this.custodian === undefined) {
      this.custodian = new Reference();
    }
    return this.custodian;
  }

  setCustodian(custodian: Reference | undefined): this {
    return this.setFieldValue('custodian', custodian);
  }

  hasCustodian(): boolean {
    return this.hasFieldValue('custodian');
  }
}

modelTypeRegistry.register(
  'CapabilityStatementImplementation',
  CapabilityStatementImplementation,
  false
);

/**
 * If the endpoint is a RESTful one
 */
export class CapabilityStatementRest extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.RestfulCapabilityMode },
      ],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'markdown' }],
    },
    {
      elementName: 'security',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'security', typeCode: 'CapabilityStatementRestSecurity' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'resource', typeCode: 'CapabilityStatementRestResource' }],
    },
    {
      elementName: 'interaction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'interaction', typeCode: 'CapabilityStatementRestInteraction' }],
    },
    {
      elementName: 'searchParam',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'searchParam', typeCode: 'CapabilityStatementRestResourceSearchParam' }],
    },
    {
      elementName: 'operation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'operation', typeCode: 'CapabilityStatementRestResourceOperation' }],
    },
    {
      elementName: 'compartment',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'compartment', typeCode: 'canonical' }],
    },
  ];

  /** client | server (1..1) */
  mode?: valueSetCodes.RestfulCapabilityMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** General description of implementation (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  /** Information about security of implementation (0..1) */
  security?: CapabilityStatementRestSecurity;

  /** Resource served on the REST interface (0..*) */
  resource?: CapabilityStatementRestResource[];

  /** What operations are supported? (0..*) */
  interaction?: CapabilityStatementRestInteraction[];

  /** Search parameters for searching all resources (0..*) */
  searchParam?: CapabilityStatementRestResourceSearchParam[];

  /** Definition of a system level operation (0..*) */
  operation?: CapabilityStatementRestResourceOperation[];

  /** Compartments served/used by system (0..*) */
  compartment?: string[];
  /** Id and extensions of the primitive `compartment`. */
  _compartment?: (Element | null)[];

  override fhirType(): string {
    return 'CapabilityStatement.rest';
  }

  /** FHIR JSON for this CapabilityStatementRest, typed as the plain `CapabilityStatementRest` data type. */
  override toJSON(): plainTypes.CapabilityStatementRest {
    return this.serialize() as plainTypes.CapabilityStatementRest;
  }

  /** client | server (1..1) */
  getMode(): valueSetCodes.RestfulCapabilityMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.RestfulCapabilityMode | undefined): this {
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

  /** General description of implementation (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }

  /** Information about security of implementation (0..1) Created when absent. */
  getSecurity(): CapabilityStatementRestSecurity {
    if (this.security === undefined) {
      this.security = new CapabilityStatementRestSecurity();
    }
    return this.security;
  }

  setSecurity(security: CapabilityStatementRestSecurity | undefined): this {
    return this.setFieldValue('security', security);
  }

  hasSecurity(): boolean {
    return this.hasFieldValue('security');
  }

  /** Resource served on the REST interface (0..*) Never undefined; an empty list is created when absent. */
  getResource(): CapabilityStatementRestResource[] {
    if (this.resource === undefined) {
      this.resource = [];
    }
    return this.resource;
  }

  setResource(resource: CapabilityStatementRestResource[] | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** Appends a new, empty CapabilityStatementRestResource to `resource` and returns it so it can be filled in. */
  addResource(): CapabilityStatementRestResource;
  /** Appends the given CapabilityStatementRestResource to `resource` and returns this object for chaining. */
  addResource(capabilityStatementRestResource: CapabilityStatementRestResource): this;
  addResource(
    capabilityStatementRestResource?: CapabilityStatementRestResource
  ): CapabilityStatementRestResource | this {
    if (capabilityStatementRestResource !== undefined) {
      return this.addFieldValue('resource', capabilityStatementRestResource);
    }
    const createdCapabilityStatementRestResource = new CapabilityStatementRestResource();
    this.addFieldValue('resource', createdCapabilityStatementRestResource);
    return createdCapabilityStatementRestResource;
  }

  /** The first CapabilityStatementRestResource of `resource`. One is added when the list is empty. */
  getResourceFirstRep(): CapabilityStatementRestResource {
    const firstCapabilityStatementRestResource = this.getResource()[0];
    return firstCapabilityStatementRestResource === undefined
      ? this.addResource()
      : firstCapabilityStatementRestResource;
  }

  /** What operations are supported? (0..*) Never undefined; an empty list is created when absent. */
  getInteraction(): CapabilityStatementRestInteraction[] {
    if (this.interaction === undefined) {
      this.interaction = [];
    }
    return this.interaction;
  }

  setInteraction(interaction: CapabilityStatementRestInteraction[] | undefined): this {
    return this.setFieldValue('interaction', interaction);
  }

  hasInteraction(): boolean {
    return this.hasFieldValue('interaction');
  }

  /** Appends a new, empty CapabilityStatementRestInteraction to `interaction` and returns it so it can be filled in. */
  addInteraction(): CapabilityStatementRestInteraction;
  /** Appends the given CapabilityStatementRestInteraction to `interaction` and returns this object for chaining. */
  addInteraction(capabilityStatementRestInteraction: CapabilityStatementRestInteraction): this;
  addInteraction(
    capabilityStatementRestInteraction?: CapabilityStatementRestInteraction
  ): CapabilityStatementRestInteraction | this {
    if (capabilityStatementRestInteraction !== undefined) {
      return this.addFieldValue('interaction', capabilityStatementRestInteraction);
    }
    const createdCapabilityStatementRestInteraction = new CapabilityStatementRestInteraction();
    this.addFieldValue('interaction', createdCapabilityStatementRestInteraction);
    return createdCapabilityStatementRestInteraction;
  }

  /** The first CapabilityStatementRestInteraction of `interaction`. One is added when the list is empty. */
  getInteractionFirstRep(): CapabilityStatementRestInteraction {
    const firstCapabilityStatementRestInteraction = this.getInteraction()[0];
    return firstCapabilityStatementRestInteraction === undefined
      ? this.addInteraction()
      : firstCapabilityStatementRestInteraction;
  }

  /** Search parameters for searching all resources (0..*) Never undefined; an empty list is created when absent. */
  getSearchParam(): CapabilityStatementRestResourceSearchParam[] {
    if (this.searchParam === undefined) {
      this.searchParam = [];
    }
    return this.searchParam;
  }

  setSearchParam(searchParam: CapabilityStatementRestResourceSearchParam[] | undefined): this {
    return this.setFieldValue('searchParam', searchParam);
  }

  hasSearchParam(): boolean {
    return this.hasFieldValue('searchParam');
  }

  /** Appends a new, empty CapabilityStatementRestResourceSearchParam to `searchParam` and returns it so it can be filled in. */
  addSearchParam(): CapabilityStatementRestResourceSearchParam;
  /** Appends the given CapabilityStatementRestResourceSearchParam to `searchParam` and returns this object for chaining. */
  addSearchParam(
    capabilityStatementRestResourceSearchParam: CapabilityStatementRestResourceSearchParam
  ): this;
  addSearchParam(
    capabilityStatementRestResourceSearchParam?: CapabilityStatementRestResourceSearchParam
  ): CapabilityStatementRestResourceSearchParam | this {
    if (capabilityStatementRestResourceSearchParam !== undefined) {
      return this.addFieldValue('searchParam', capabilityStatementRestResourceSearchParam);
    }
    const createdCapabilityStatementRestResourceSearchParam =
      new CapabilityStatementRestResourceSearchParam();
    this.addFieldValue('searchParam', createdCapabilityStatementRestResourceSearchParam);
    return createdCapabilityStatementRestResourceSearchParam;
  }

  /** The first CapabilityStatementRestResourceSearchParam of `searchParam`. One is added when the list is empty. */
  getSearchParamFirstRep(): CapabilityStatementRestResourceSearchParam {
    const firstCapabilityStatementRestResourceSearchParam = this.getSearchParam()[0];
    return firstCapabilityStatementRestResourceSearchParam === undefined
      ? this.addSearchParam()
      : firstCapabilityStatementRestResourceSearchParam;
  }

  /** Definition of a system level operation (0..*) Never undefined; an empty list is created when absent. */
  getOperation(): CapabilityStatementRestResourceOperation[] {
    if (this.operation === undefined) {
      this.operation = [];
    }
    return this.operation;
  }

  setOperation(operation: CapabilityStatementRestResourceOperation[] | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }

  /** Appends a new, empty CapabilityStatementRestResourceOperation to `operation` and returns it so it can be filled in. */
  addOperation(): CapabilityStatementRestResourceOperation;
  /** Appends the given CapabilityStatementRestResourceOperation to `operation` and returns this object for chaining. */
  addOperation(
    capabilityStatementRestResourceOperation: CapabilityStatementRestResourceOperation
  ): this;
  addOperation(
    capabilityStatementRestResourceOperation?: CapabilityStatementRestResourceOperation
  ): CapabilityStatementRestResourceOperation | this {
    if (capabilityStatementRestResourceOperation !== undefined) {
      return this.addFieldValue('operation', capabilityStatementRestResourceOperation);
    }
    const createdCapabilityStatementRestResourceOperation =
      new CapabilityStatementRestResourceOperation();
    this.addFieldValue('operation', createdCapabilityStatementRestResourceOperation);
    return createdCapabilityStatementRestResourceOperation;
  }

  /** The first CapabilityStatementRestResourceOperation of `operation`. One is added when the list is empty. */
  getOperationFirstRep(): CapabilityStatementRestResourceOperation {
    const firstCapabilityStatementRestResourceOperation = this.getOperation()[0];
    return firstCapabilityStatementRestResourceOperation === undefined
      ? this.addOperation()
      : firstCapabilityStatementRestResourceOperation;
  }

  /** Compartments served/used by system (0..*) Never undefined; an empty list is created when absent. */
  getCompartment(): string[] {
    if (this.compartment === undefined) {
      this.compartment = [];
    }
    return this.compartment;
  }

  setCompartment(compartment: string[] | undefined): this {
    return this.setFieldValue('compartment', compartment);
  }

  hasCompartment(): boolean {
    return this.hasFieldValue('compartment');
  }

  /** Appends one value to `compartment`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addCompartment(compartment: string): this {
    return this.addFieldValue('compartment', compartment);
  }
}

modelTypeRegistry.register('CapabilityStatementRest', CapabilityStatementRest, false);

/**
 * Information about security of implementation
 */
export class CapabilityStatementRestSecurity extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'cors',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cors', typeCode: 'boolean' }],
    },
    {
      elementName: 'service',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'service', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
  ];

  /** Adds CORS Headers (http://enable-cors.org/) (0..1) */
  cors?: boolean;
  /** Id and extensions of the primitive `cors`. */
  _cors?: Element;

  /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates (0..*) */
  service?: CodeableConcept[];

  /** General description of how security works (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'CapabilityStatement.rest.security';
  }

  /** FHIR JSON for this CapabilityStatementRestSecurity, typed as the plain `CapabilityStatementSecurity` data type. */
  override toJSON(): plainTypes.CapabilityStatementSecurity {
    return this.serialize() as plainTypes.CapabilityStatementSecurity;
  }

  /** Adds CORS Headers (http://enable-cors.org/) (0..1) */
  getCors(): boolean | undefined {
    return this.cors;
  }

  /** Sets `cors`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setCors(cors: boolean | undefined): this {
    return this.setFieldValue('cors', cors);
  }

  hasCors(): boolean {
    return this.hasFieldValue('cors');
  }

  /** The element carrying the id and extensions of `cors`. Created when absent. */
  getCorsElement(): Element {
    if (this._cors === undefined) {
      this._cors = new Element();
    }
    return this._cors;
  }

  setCorsElement(corsElement: Element | undefined): this {
    this._cors = corsElement;
    return this;
  }

  /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates (0..*) Never undefined; an empty list is created when absent. */
  getService(): CodeableConcept[] {
    if (this.service === undefined) {
      this.service = [];
    }
    return this.service;
  }

  setService(service: CodeableConcept[] | undefined): this {
    return this.setFieldValue('service', service);
  }

  hasService(): boolean {
    return this.hasFieldValue('service');
  }

  /** Appends a new, empty CodeableConcept to `service` and returns it so it can be filled in. */
  addService(): CodeableConcept;
  /** Appends the given CodeableConcept to `service` and returns this object for chaining. */
  addService(codeableConcept: CodeableConcept): this;
  addService(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('service', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('service', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `service`. One is added when the list is empty. */
  getServiceFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getService()[0];
    return firstCodeableConcept === undefined ? this.addService() : firstCodeableConcept;
  }

  /** General description of how security works (0..1) */
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
}

modelTypeRegistry.register(
  'CapabilityStatementRestSecurity',
  CapabilityStatementRestSecurity,
  false
);

/**
 * Resource served on the REST interface
 */
export class CapabilityStatementRestResource extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ResourceType }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
    {
      elementName: 'supportedProfile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportedProfile', typeCode: 'canonical' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'markdown' }],
    },
    {
      elementName: 'interaction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'interaction', typeCode: 'CapabilityStatementRestResourceInteraction' }],
    },
    {
      elementName: 'versioning',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'versioning',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ResourceVersionPolicy,
        },
      ],
    },
    {
      elementName: 'readHistory',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'readHistory', typeCode: 'boolean' }],
    },
    {
      elementName: 'updateCreate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'updateCreate', typeCode: 'boolean' }],
    },
    {
      elementName: 'conditionalCreate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'conditionalCreate', typeCode: 'boolean' }],
    },
    {
      elementName: 'conditionalRead',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'conditionalRead',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConditionalReadStatus,
        },
      ],
    },
    {
      elementName: 'conditionalUpdate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'conditionalUpdate', typeCode: 'boolean' }],
    },
    {
      elementName: 'conditionalDelete',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'conditionalDelete',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConditionalDeleteStatus,
        },
      ],
    },
    {
      elementName: 'referencePolicy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'referencePolicy',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ReferenceHandlingPolicy,
        },
      ],
    },
    {
      elementName: 'searchInclude',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'searchInclude', typeCode: 'string' }],
    },
    {
      elementName: 'searchRevInclude',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'searchRevInclude', typeCode: 'string' }],
    },
    {
      elementName: 'searchParam',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'searchParam', typeCode: 'CapabilityStatementRestResourceSearchParam' }],
    },
    {
      elementName: 'operation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'operation', typeCode: 'CapabilityStatementRestResourceOperation' }],
    },
  ];

  /** A resource type that is supported (1..1) */
  type?: valueSetCodes.ResourceType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Base System profile for all uses of resource (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;

  /** Profiles for use cases supported (0..*) */
  supportedProfile?: string[];
  /** Id and extensions of the primitive `supportedProfile`. */
  _supportedProfile?: (Element | null)[];

  /** Additional information about the use of the resource type (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  /** What operations are supported? (0..*) */
  interaction?: CapabilityStatementRestResourceInteraction[];

  /** no-version | versioned | versioned-update (0..1) */
  versioning?: valueSetCodes.ResourceVersionPolicy;
  /** Id and extensions of the primitive `versioning`. */
  _versioning?: Element;

  /** Whether vRead can return past versions (0..1) */
  readHistory?: boolean;
  /** Id and extensions of the primitive `readHistory`. */
  _readHistory?: Element;

  /** If update can commit to a new identity (0..1) */
  updateCreate?: boolean;
  /** Id and extensions of the primitive `updateCreate`. */
  _updateCreate?: Element;

  /** If allows/uses conditional create (0..1) */
  conditionalCreate?: boolean;
  /** Id and extensions of the primitive `conditionalCreate`. */
  _conditionalCreate?: Element;

  /** not-supported | modified-since | not-match | full-support (0..1) */
  conditionalRead?: valueSetCodes.ConditionalReadStatus;
  /** Id and extensions of the primitive `conditionalRead`. */
  _conditionalRead?: Element;

  /** If allows/uses conditional update (0..1) */
  conditionalUpdate?: boolean;
  /** Id and extensions of the primitive `conditionalUpdate`. */
  _conditionalUpdate?: Element;

  /** not-supported | single | multiple - how conditional delete is supported (0..1) */
  conditionalDelete?: valueSetCodes.ConditionalDeleteStatus;
  /** Id and extensions of the primitive `conditionalDelete`. */
  _conditionalDelete?: Element;

  /** literal | logical | resolves | enforced | local (0..*) */
  referencePolicy?: valueSetCodes.ReferenceHandlingPolicy[];
  /** Id and extensions of the primitive `referencePolicy`. */
  _referencePolicy?: (Element | null)[];

  /** _include values supported by the server (0..*) */
  searchInclude?: string[];
  /** Id and extensions of the primitive `searchInclude`. */
  _searchInclude?: (Element | null)[];

  /** _revinclude values supported by the server (0..*) */
  searchRevInclude?: string[];
  /** Id and extensions of the primitive `searchRevInclude`. */
  _searchRevInclude?: (Element | null)[];

  /** Search parameters supported by implementation (0..*) */
  searchParam?: CapabilityStatementRestResourceSearchParam[];

  /** Definition of a resource operation (0..*) */
  operation?: CapabilityStatementRestResourceOperation[];

  override fhirType(): string {
    return 'CapabilityStatement.rest.resource';
  }

  /** FHIR JSON for this CapabilityStatementRestResource, typed as the plain `CapabilityStatementResource` data type. */
  override toJSON(): plainTypes.CapabilityStatementResource {
    return this.serialize() as plainTypes.CapabilityStatementResource;
  }

  /** A resource type that is supported (1..1) */
  getType(): valueSetCodes.ResourceType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ResourceType | undefined): this {
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

  /** Base System profile for all uses of resource (0..1) */
  getProfile(): string | undefined {
    return this.profile;
  }

  /** Sets `profile`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setProfile(profile: string | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** The element carrying the id and extensions of `profile`. Created when absent. */
  getProfileElement(): Element {
    if (this._profile === undefined) {
      this._profile = new Element();
    }
    return this._profile;
  }

  setProfileElement(profileElement: Element | undefined): this {
    this._profile = profileElement;
    return this;
  }

  /** Profiles for use cases supported (0..*) Never undefined; an empty list is created when absent. */
  getSupportedProfile(): string[] {
    if (this.supportedProfile === undefined) {
      this.supportedProfile = [];
    }
    return this.supportedProfile;
  }

  setSupportedProfile(supportedProfile: string[] | undefined): this {
    return this.setFieldValue('supportedProfile', supportedProfile);
  }

  hasSupportedProfile(): boolean {
    return this.hasFieldValue('supportedProfile');
  }

  /** Appends one value to `supportedProfile`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addSupportedProfile(supportedProfile: string): this {
    return this.addFieldValue('supportedProfile', supportedProfile);
  }

  /** Additional information about the use of the resource type (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }

  /** What operations are supported? (0..*) Never undefined; an empty list is created when absent. */
  getInteraction(): CapabilityStatementRestResourceInteraction[] {
    if (this.interaction === undefined) {
      this.interaction = [];
    }
    return this.interaction;
  }

  setInteraction(interaction: CapabilityStatementRestResourceInteraction[] | undefined): this {
    return this.setFieldValue('interaction', interaction);
  }

  hasInteraction(): boolean {
    return this.hasFieldValue('interaction');
  }

  /** Appends a new, empty CapabilityStatementRestResourceInteraction to `interaction` and returns it so it can be filled in. */
  addInteraction(): CapabilityStatementRestResourceInteraction;
  /** Appends the given CapabilityStatementRestResourceInteraction to `interaction` and returns this object for chaining. */
  addInteraction(
    capabilityStatementRestResourceInteraction: CapabilityStatementRestResourceInteraction
  ): this;
  addInteraction(
    capabilityStatementRestResourceInteraction?: CapabilityStatementRestResourceInteraction
  ): CapabilityStatementRestResourceInteraction | this {
    if (capabilityStatementRestResourceInteraction !== undefined) {
      return this.addFieldValue('interaction', capabilityStatementRestResourceInteraction);
    }
    const createdCapabilityStatementRestResourceInteraction =
      new CapabilityStatementRestResourceInteraction();
    this.addFieldValue('interaction', createdCapabilityStatementRestResourceInteraction);
    return createdCapabilityStatementRestResourceInteraction;
  }

  /** The first CapabilityStatementRestResourceInteraction of `interaction`. One is added when the list is empty. */
  getInteractionFirstRep(): CapabilityStatementRestResourceInteraction {
    const firstCapabilityStatementRestResourceInteraction = this.getInteraction()[0];
    return firstCapabilityStatementRestResourceInteraction === undefined
      ? this.addInteraction()
      : firstCapabilityStatementRestResourceInteraction;
  }

  /** no-version | versioned | versioned-update (0..1) */
  getVersioning(): valueSetCodes.ResourceVersionPolicy | undefined {
    return this.versioning;
  }

  /** Sets `versioning`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setVersioning(versioning: valueSetCodes.ResourceVersionPolicy | undefined): this {
    return this.setFieldValue('versioning', versioning);
  }

  hasVersioning(): boolean {
    return this.hasFieldValue('versioning');
  }

  /** The element carrying the id and extensions of `versioning`. Created when absent. */
  getVersioningElement(): Element {
    if (this._versioning === undefined) {
      this._versioning = new Element();
    }
    return this._versioning;
  }

  setVersioningElement(versioningElement: Element | undefined): this {
    this._versioning = versioningElement;
    return this;
  }

  /** Whether vRead can return past versions (0..1) */
  getReadHistory(): boolean | undefined {
    return this.readHistory;
  }

  /** Sets `readHistory`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setReadHistory(readHistory: boolean | undefined): this {
    return this.setFieldValue('readHistory', readHistory);
  }

  hasReadHistory(): boolean {
    return this.hasFieldValue('readHistory');
  }

  /** The element carrying the id and extensions of `readHistory`. Created when absent. */
  getReadHistoryElement(): Element {
    if (this._readHistory === undefined) {
      this._readHistory = new Element();
    }
    return this._readHistory;
  }

  setReadHistoryElement(readHistoryElement: Element | undefined): this {
    this._readHistory = readHistoryElement;
    return this;
  }

  /** If update can commit to a new identity (0..1) */
  getUpdateCreate(): boolean | undefined {
    return this.updateCreate;
  }

  /** Sets `updateCreate`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setUpdateCreate(updateCreate: boolean | undefined): this {
    return this.setFieldValue('updateCreate', updateCreate);
  }

  hasUpdateCreate(): boolean {
    return this.hasFieldValue('updateCreate');
  }

  /** The element carrying the id and extensions of `updateCreate`. Created when absent. */
  getUpdateCreateElement(): Element {
    if (this._updateCreate === undefined) {
      this._updateCreate = new Element();
    }
    return this._updateCreate;
  }

  setUpdateCreateElement(updateCreateElement: Element | undefined): this {
    this._updateCreate = updateCreateElement;
    return this;
  }

  /** If allows/uses conditional create (0..1) */
  getConditionalCreate(): boolean | undefined {
    return this.conditionalCreate;
  }

  /** Sets `conditionalCreate`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setConditionalCreate(conditionalCreate: boolean | undefined): this {
    return this.setFieldValue('conditionalCreate', conditionalCreate);
  }

  hasConditionalCreate(): boolean {
    return this.hasFieldValue('conditionalCreate');
  }

  /** The element carrying the id and extensions of `conditionalCreate`. Created when absent. */
  getConditionalCreateElement(): Element {
    if (this._conditionalCreate === undefined) {
      this._conditionalCreate = new Element();
    }
    return this._conditionalCreate;
  }

  setConditionalCreateElement(conditionalCreateElement: Element | undefined): this {
    this._conditionalCreate = conditionalCreateElement;
    return this;
  }

  /** not-supported | modified-since | not-match | full-support (0..1) */
  getConditionalRead(): valueSetCodes.ConditionalReadStatus | undefined {
    return this.conditionalRead;
  }

  /** Sets `conditionalRead`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setConditionalRead(conditionalRead: valueSetCodes.ConditionalReadStatus | undefined): this {
    return this.setFieldValue('conditionalRead', conditionalRead);
  }

  hasConditionalRead(): boolean {
    return this.hasFieldValue('conditionalRead');
  }

  /** The element carrying the id and extensions of `conditionalRead`. Created when absent. */
  getConditionalReadElement(): Element {
    if (this._conditionalRead === undefined) {
      this._conditionalRead = new Element();
    }
    return this._conditionalRead;
  }

  setConditionalReadElement(conditionalReadElement: Element | undefined): this {
    this._conditionalRead = conditionalReadElement;
    return this;
  }

  /** If allows/uses conditional update (0..1) */
  getConditionalUpdate(): boolean | undefined {
    return this.conditionalUpdate;
  }

  /** Sets `conditionalUpdate`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setConditionalUpdate(conditionalUpdate: boolean | undefined): this {
    return this.setFieldValue('conditionalUpdate', conditionalUpdate);
  }

  hasConditionalUpdate(): boolean {
    return this.hasFieldValue('conditionalUpdate');
  }

  /** The element carrying the id and extensions of `conditionalUpdate`. Created when absent. */
  getConditionalUpdateElement(): Element {
    if (this._conditionalUpdate === undefined) {
      this._conditionalUpdate = new Element();
    }
    return this._conditionalUpdate;
  }

  setConditionalUpdateElement(conditionalUpdateElement: Element | undefined): this {
    this._conditionalUpdate = conditionalUpdateElement;
    return this;
  }

  /** not-supported | single | multiple - how conditional delete is supported (0..1) */
  getConditionalDelete(): valueSetCodes.ConditionalDeleteStatus | undefined {
    return this.conditionalDelete;
  }

  /** Sets `conditionalDelete`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setConditionalDelete(conditionalDelete: valueSetCodes.ConditionalDeleteStatus | undefined): this {
    return this.setFieldValue('conditionalDelete', conditionalDelete);
  }

  hasConditionalDelete(): boolean {
    return this.hasFieldValue('conditionalDelete');
  }

  /** The element carrying the id and extensions of `conditionalDelete`. Created when absent. */
  getConditionalDeleteElement(): Element {
    if (this._conditionalDelete === undefined) {
      this._conditionalDelete = new Element();
    }
    return this._conditionalDelete;
  }

  setConditionalDeleteElement(conditionalDeleteElement: Element | undefined): this {
    this._conditionalDelete = conditionalDeleteElement;
    return this;
  }

  /** literal | logical | resolves | enforced | local (0..*) Never undefined; an empty list is created when absent. */
  getReferencePolicy(): valueSetCodes.ReferenceHandlingPolicy[] {
    if (this.referencePolicy === undefined) {
      this.referencePolicy = [];
    }
    return this.referencePolicy;
  }

  setReferencePolicy(referencePolicy: valueSetCodes.ReferenceHandlingPolicy[] | undefined): this {
    return this.setFieldValue('referencePolicy', referencePolicy);
  }

  hasReferencePolicy(): boolean {
    return this.hasFieldValue('referencePolicy');
  }

  /** Appends one value to `referencePolicy`. Throws a FhirModelError when it is not a valid FHIR code. */
  addReferencePolicy(referencePolicy: valueSetCodes.ReferenceHandlingPolicy): this {
    return this.addFieldValue('referencePolicy', referencePolicy);
  }

  /** _include values supported by the server (0..*) Never undefined; an empty list is created when absent. */
  getSearchInclude(): string[] {
    if (this.searchInclude === undefined) {
      this.searchInclude = [];
    }
    return this.searchInclude;
  }

  setSearchInclude(searchInclude: string[] | undefined): this {
    return this.setFieldValue('searchInclude', searchInclude);
  }

  hasSearchInclude(): boolean {
    return this.hasFieldValue('searchInclude');
  }

  /** Appends one value to `searchInclude`. Throws a FhirModelError when it is not a valid FHIR string. */
  addSearchInclude(searchInclude: string): this {
    return this.addFieldValue('searchInclude', searchInclude);
  }

  /** _revinclude values supported by the server (0..*) Never undefined; an empty list is created when absent. */
  getSearchRevInclude(): string[] {
    if (this.searchRevInclude === undefined) {
      this.searchRevInclude = [];
    }
    return this.searchRevInclude;
  }

  setSearchRevInclude(searchRevInclude: string[] | undefined): this {
    return this.setFieldValue('searchRevInclude', searchRevInclude);
  }

  hasSearchRevInclude(): boolean {
    return this.hasFieldValue('searchRevInclude');
  }

  /** Appends one value to `searchRevInclude`. Throws a FhirModelError when it is not a valid FHIR string. */
  addSearchRevInclude(searchRevInclude: string): this {
    return this.addFieldValue('searchRevInclude', searchRevInclude);
  }

  /** Search parameters supported by implementation (0..*) Never undefined; an empty list is created when absent. */
  getSearchParam(): CapabilityStatementRestResourceSearchParam[] {
    if (this.searchParam === undefined) {
      this.searchParam = [];
    }
    return this.searchParam;
  }

  setSearchParam(searchParam: CapabilityStatementRestResourceSearchParam[] | undefined): this {
    return this.setFieldValue('searchParam', searchParam);
  }

  hasSearchParam(): boolean {
    return this.hasFieldValue('searchParam');
  }

  /** Appends a new, empty CapabilityStatementRestResourceSearchParam to `searchParam` and returns it so it can be filled in. */
  addSearchParam(): CapabilityStatementRestResourceSearchParam;
  /** Appends the given CapabilityStatementRestResourceSearchParam to `searchParam` and returns this object for chaining. */
  addSearchParam(
    capabilityStatementRestResourceSearchParam: CapabilityStatementRestResourceSearchParam
  ): this;
  addSearchParam(
    capabilityStatementRestResourceSearchParam?: CapabilityStatementRestResourceSearchParam
  ): CapabilityStatementRestResourceSearchParam | this {
    if (capabilityStatementRestResourceSearchParam !== undefined) {
      return this.addFieldValue('searchParam', capabilityStatementRestResourceSearchParam);
    }
    const createdCapabilityStatementRestResourceSearchParam =
      new CapabilityStatementRestResourceSearchParam();
    this.addFieldValue('searchParam', createdCapabilityStatementRestResourceSearchParam);
    return createdCapabilityStatementRestResourceSearchParam;
  }

  /** The first CapabilityStatementRestResourceSearchParam of `searchParam`. One is added when the list is empty. */
  getSearchParamFirstRep(): CapabilityStatementRestResourceSearchParam {
    const firstCapabilityStatementRestResourceSearchParam = this.getSearchParam()[0];
    return firstCapabilityStatementRestResourceSearchParam === undefined
      ? this.addSearchParam()
      : firstCapabilityStatementRestResourceSearchParam;
  }

  /** Definition of a resource operation (0..*) Never undefined; an empty list is created when absent. */
  getOperation(): CapabilityStatementRestResourceOperation[] {
    if (this.operation === undefined) {
      this.operation = [];
    }
    return this.operation;
  }

  setOperation(operation: CapabilityStatementRestResourceOperation[] | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }

  /** Appends a new, empty CapabilityStatementRestResourceOperation to `operation` and returns it so it can be filled in. */
  addOperation(): CapabilityStatementRestResourceOperation;
  /** Appends the given CapabilityStatementRestResourceOperation to `operation` and returns this object for chaining. */
  addOperation(
    capabilityStatementRestResourceOperation: CapabilityStatementRestResourceOperation
  ): this;
  addOperation(
    capabilityStatementRestResourceOperation?: CapabilityStatementRestResourceOperation
  ): CapabilityStatementRestResourceOperation | this {
    if (capabilityStatementRestResourceOperation !== undefined) {
      return this.addFieldValue('operation', capabilityStatementRestResourceOperation);
    }
    const createdCapabilityStatementRestResourceOperation =
      new CapabilityStatementRestResourceOperation();
    this.addFieldValue('operation', createdCapabilityStatementRestResourceOperation);
    return createdCapabilityStatementRestResourceOperation;
  }

  /** The first CapabilityStatementRestResourceOperation of `operation`. One is added when the list is empty. */
  getOperationFirstRep(): CapabilityStatementRestResourceOperation {
    const firstCapabilityStatementRestResourceOperation = this.getOperation()[0];
    return firstCapabilityStatementRestResourceOperation === undefined
      ? this.addOperation()
      : firstCapabilityStatementRestResourceOperation;
  }
}

modelTypeRegistry.register(
  'CapabilityStatementRestResource',
  CapabilityStatementRestResource,
  false
);

/**
 * What operations are supported?
 */
export class CapabilityStatementRestResourceInteraction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.TypeRestfulInteraction },
      ],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'markdown' }],
    },
  ];

  /** read | vread | update | patch | delete | history-instance | history-type | create | search-type (1..1) */
  code?: valueSetCodes.TypeRestfulInteraction;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Anything special about operation behavior (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  override fhirType(): string {
    return 'CapabilityStatement.rest.resource.interaction';
  }

  /** FHIR JSON for this CapabilityStatementRestResourceInteraction, typed as the plain `CapabilityStatementInteraction` data type. */
  override toJSON(): plainTypes.CapabilityStatementInteraction {
    return this.serialize() as plainTypes.CapabilityStatementInteraction;
  }

  /** read | vread | update | patch | delete | history-instance | history-type | create | search-type (1..1) */
  getCode(): valueSetCodes.TypeRestfulInteraction | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.TypeRestfulInteraction | undefined): this {
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

  /** Anything special about operation behavior (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CapabilityStatementRestResourceInteraction',
  CapabilityStatementRestResourceInteraction,
  false
);

/**
 * Search parameters supported by implementation
 */
export class CapabilityStatementRestResourceSearchParam extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'canonical' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.SearchParamType }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'markdown' }],
    },
  ];

  /** Name of search parameter (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Source of definition for parameter (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;

  /** number | date | string | token | reference | composite | quantity | uri | special (1..1) */
  type?: valueSetCodes.SearchParamType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Server-specific usage (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  override fhirType(): string {
    return 'CapabilityStatement.rest.resource.searchParam';
  }

  /** FHIR JSON for this CapabilityStatementRestResourceSearchParam, typed as the plain `CapabilityStatementSearchParam` data type. */
  override toJSON(): plainTypes.CapabilityStatementSearchParam {
    return this.serialize() as plainTypes.CapabilityStatementSearchParam;
  }

  /** Name of search parameter (1..1) */
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

  /** Source of definition for parameter (0..1) */
  getDefinition(): string | undefined {
    return this.definition;
  }

  /** Sets `definition`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
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

  /** number | date | string | token | reference | composite | quantity | uri | special (1..1) */
  getType(): valueSetCodes.SearchParamType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.SearchParamType | undefined): this {
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

  /** Server-specific usage (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CapabilityStatementRestResourceSearchParam',
  CapabilityStatementRestResourceSearchParam,
  false
);

/**
 * Definition of a resource operation
 */
export class CapabilityStatementRestResourceOperation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'definition',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'canonical' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'markdown' }],
    },
  ];

  /** Name by which the operation/query is invoked (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** The defined operation/query (1..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;

  /** Specific details about operation behavior (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  override fhirType(): string {
    return 'CapabilityStatement.rest.resource.operation';
  }

  /** FHIR JSON for this CapabilityStatementRestResourceOperation, typed as the plain `CapabilityStatementOperation` data type. */
  override toJSON(): plainTypes.CapabilityStatementOperation {
    return this.serialize() as plainTypes.CapabilityStatementOperation;
  }

  /** Name by which the operation/query is invoked (1..1) */
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

  /** The defined operation/query (1..1) */
  getDefinition(): string | undefined {
    return this.definition;
  }

  /** Sets `definition`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
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

  /** Specific details about operation behavior (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CapabilityStatementRestResourceOperation',
  CapabilityStatementRestResourceOperation,
  false
);

/**
 * What operations are supported?
 */
export class CapabilityStatementRestInteraction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.SystemRestfulInteraction },
      ],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'markdown' }],
    },
  ];

  /** transaction | batch | search-system | history-system (1..1) */
  code?: valueSetCodes.SystemRestfulInteraction;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Anything special about operation behavior (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  override fhirType(): string {
    return 'CapabilityStatement.rest.interaction';
  }

  /** FHIR JSON for this CapabilityStatementRestInteraction, typed as the plain `CapabilityStatementInteraction1` data type. */
  override toJSON(): plainTypes.CapabilityStatementInteraction1 {
    return this.serialize() as plainTypes.CapabilityStatementInteraction1;
  }

  /** transaction | batch | search-system | history-system (1..1) */
  getCode(): valueSetCodes.SystemRestfulInteraction | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.SystemRestfulInteraction | undefined): this {
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

  /** Anything special about operation behavior (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CapabilityStatementRestInteraction',
  CapabilityStatementRestInteraction,
  false
);

/**
 * If messaging is supported
 */
export class CapabilityStatementMessaging extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'CapabilityStatementMessagingEndpoint' }],
    },
    {
      elementName: 'reliableCache',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reliableCache', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'markdown' }],
    },
    {
      elementName: 'supportedMessage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'supportedMessage', typeCode: 'CapabilityStatementMessagingSupportedMessage' },
      ],
    },
  ];

  /** Where messages should be sent (0..*) */
  endpoint?: CapabilityStatementMessagingEndpoint[];

  /** Reliable Message Cache Length (min) (0..1) */
  reliableCache?: number;
  /** Id and extensions of the primitive `reliableCache`. */
  _reliableCache?: Element;

  /** Messaging interface behavior details (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  /** Messages supported by this system (0..*) */
  supportedMessage?: CapabilityStatementMessagingSupportedMessage[];

  override fhirType(): string {
    return 'CapabilityStatement.messaging';
  }

  /** FHIR JSON for this CapabilityStatementMessaging, typed as the plain `CapabilityStatementMessaging` data type. */
  override toJSON(): plainTypes.CapabilityStatementMessaging {
    return this.serialize() as plainTypes.CapabilityStatementMessaging;
  }

  /** Where messages should be sent (0..*) Never undefined; an empty list is created when absent. */
  getEndpoint(): CapabilityStatementMessagingEndpoint[] {
    if (this.endpoint === undefined) {
      this.endpoint = [];
    }
    return this.endpoint;
  }

  setEndpoint(endpoint: CapabilityStatementMessagingEndpoint[] | undefined): this {
    return this.setFieldValue('endpoint', endpoint);
  }

  hasEndpoint(): boolean {
    return this.hasFieldValue('endpoint');
  }

  /** Appends a new, empty CapabilityStatementMessagingEndpoint to `endpoint` and returns it so it can be filled in. */
  addEndpoint(): CapabilityStatementMessagingEndpoint;
  /** Appends the given CapabilityStatementMessagingEndpoint to `endpoint` and returns this object for chaining. */
  addEndpoint(capabilityStatementMessagingEndpoint: CapabilityStatementMessagingEndpoint): this;
  addEndpoint(
    capabilityStatementMessagingEndpoint?: CapabilityStatementMessagingEndpoint
  ): CapabilityStatementMessagingEndpoint | this {
    if (capabilityStatementMessagingEndpoint !== undefined) {
      return this.addFieldValue('endpoint', capabilityStatementMessagingEndpoint);
    }
    const createdCapabilityStatementMessagingEndpoint = new CapabilityStatementMessagingEndpoint();
    this.addFieldValue('endpoint', createdCapabilityStatementMessagingEndpoint);
    return createdCapabilityStatementMessagingEndpoint;
  }

  /** The first CapabilityStatementMessagingEndpoint of `endpoint`. One is added when the list is empty. */
  getEndpointFirstRep(): CapabilityStatementMessagingEndpoint {
    const firstCapabilityStatementMessagingEndpoint = this.getEndpoint()[0];
    return firstCapabilityStatementMessagingEndpoint === undefined
      ? this.addEndpoint()
      : firstCapabilityStatementMessagingEndpoint;
  }

  /** Reliable Message Cache Length (min) (0..1) */
  getReliableCache(): number | undefined {
    return this.reliableCache;
  }

  /** Sets `reliableCache`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setReliableCache(reliableCache: number | undefined): this {
    return this.setFieldValue('reliableCache', reliableCache);
  }

  hasReliableCache(): boolean {
    return this.hasFieldValue('reliableCache');
  }

  /** The element carrying the id and extensions of `reliableCache`. Created when absent. */
  getReliableCacheElement(): Element {
    if (this._reliableCache === undefined) {
      this._reliableCache = new Element();
    }
    return this._reliableCache;
  }

  setReliableCacheElement(reliableCacheElement: Element | undefined): this {
    this._reliableCache = reliableCacheElement;
    return this;
  }

  /** Messaging interface behavior details (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }

  /** Messages supported by this system (0..*) Never undefined; an empty list is created when absent. */
  getSupportedMessage(): CapabilityStatementMessagingSupportedMessage[] {
    if (this.supportedMessage === undefined) {
      this.supportedMessage = [];
    }
    return this.supportedMessage;
  }

  setSupportedMessage(
    supportedMessage: CapabilityStatementMessagingSupportedMessage[] | undefined
  ): this {
    return this.setFieldValue('supportedMessage', supportedMessage);
  }

  hasSupportedMessage(): boolean {
    return this.hasFieldValue('supportedMessage');
  }

  /** Appends a new, empty CapabilityStatementMessagingSupportedMessage to `supportedMessage` and returns it so it can be filled in. */
  addSupportedMessage(): CapabilityStatementMessagingSupportedMessage;
  /** Appends the given CapabilityStatementMessagingSupportedMessage to `supportedMessage` and returns this object for chaining. */
  addSupportedMessage(
    capabilityStatementMessagingSupportedMessage: CapabilityStatementMessagingSupportedMessage
  ): this;
  addSupportedMessage(
    capabilityStatementMessagingSupportedMessage?: CapabilityStatementMessagingSupportedMessage
  ): CapabilityStatementMessagingSupportedMessage | this {
    if (capabilityStatementMessagingSupportedMessage !== undefined) {
      return this.addFieldValue('supportedMessage', capabilityStatementMessagingSupportedMessage);
    }
    const createdCapabilityStatementMessagingSupportedMessage =
      new CapabilityStatementMessagingSupportedMessage();
    this.addFieldValue('supportedMessage', createdCapabilityStatementMessagingSupportedMessage);
    return createdCapabilityStatementMessagingSupportedMessage;
  }

  /** The first CapabilityStatementMessagingSupportedMessage of `supportedMessage`. One is added when the list is empty. */
  getSupportedMessageFirstRep(): CapabilityStatementMessagingSupportedMessage {
    const firstCapabilityStatementMessagingSupportedMessage = this.getSupportedMessage()[0];
    return firstCapabilityStatementMessagingSupportedMessage === undefined
      ? this.addSupportedMessage()
      : firstCapabilityStatementMessagingSupportedMessage;
  }
}

modelTypeRegistry.register('CapabilityStatementMessaging', CapabilityStatementMessaging, false);

/**
 * Where messages should be sent
 */
export class CapabilityStatementMessagingEndpoint extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'protocol',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'protocol', typeCode: 'Coding' }],
    },
    {
      elementName: 'address',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'address', typeCode: 'url' }],
    },
  ];

  /** http | ftp | mllp + (1..1) */
  protocol?: Coding;

  /** Network address or identifier of the end-point (1..1) */
  address?: string;
  /** Id and extensions of the primitive `address`. */
  _address?: Element;

  override fhirType(): string {
    return 'CapabilityStatement.messaging.endpoint';
  }

  /** FHIR JSON for this CapabilityStatementMessagingEndpoint, typed as the plain `CapabilityStatementEndpoint` data type. */
  override toJSON(): plainTypes.CapabilityStatementEndpoint {
    return this.serialize() as plainTypes.CapabilityStatementEndpoint;
  }

  /** http | ftp | mllp + (1..1) Created when absent. */
  getProtocol(): Coding {
    if (this.protocol === undefined) {
      this.protocol = new Coding();
    }
    return this.protocol;
  }

  setProtocol(protocol: Coding | undefined): this {
    return this.setFieldValue('protocol', protocol);
  }

  hasProtocol(): boolean {
    return this.hasFieldValue('protocol');
  }

  /** Network address or identifier of the end-point (1..1) */
  getAddress(): string | undefined {
    return this.address;
  }

  /** Sets `address`. Throws a FhirModelError when the value is not a valid FHIR url. */
  setAddress(address: string | undefined): this {
    return this.setFieldValue('address', address);
  }

  hasAddress(): boolean {
    return this.hasFieldValue('address');
  }

  /** The element carrying the id and extensions of `address`. Created when absent. */
  getAddressElement(): Element {
    if (this._address === undefined) {
      this._address = new Element();
    }
    return this._address;
  }

  setAddressElement(addressElement: Element | undefined): this {
    this._address = addressElement;
    return this;
  }
}

modelTypeRegistry.register(
  'CapabilityStatementMessagingEndpoint',
  CapabilityStatementMessagingEndpoint,
  false
);

/**
 * Messages supported by this system
 */
export class CapabilityStatementMessagingSupportedMessage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.EventCapabilityMode },
      ],
    },
    {
      elementName: 'definition',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'canonical' }],
    },
  ];

  /** sender | receiver (1..1) */
  mode?: valueSetCodes.EventCapabilityMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Message supported by this system (1..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;

  override fhirType(): string {
    return 'CapabilityStatement.messaging.supportedMessage';
  }

  /** FHIR JSON for this CapabilityStatementMessagingSupportedMessage, typed as the plain `CapabilityStatementSupportedMessage` data type. */
  override toJSON(): plainTypes.CapabilityStatementSupportedMessage {
    return this.serialize() as plainTypes.CapabilityStatementSupportedMessage;
  }

  /** sender | receiver (1..1) */
  getMode(): valueSetCodes.EventCapabilityMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.EventCapabilityMode | undefined): this {
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

  /** Message supported by this system (1..1) */
  getDefinition(): string | undefined {
    return this.definition;
  }

  /** Sets `definition`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
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
}

modelTypeRegistry.register(
  'CapabilityStatementMessagingSupportedMessage',
  CapabilityStatementMessagingSupportedMessage,
  false
);

/**
 * Document definition
 */
export class CapabilityStatementDocument extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.DocumentMode }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'markdown' }],
    },
    {
      elementName: 'profile',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
  ];

  /** producer | consumer (1..1) */
  mode?: valueSetCodes.DocumentMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Description of document support (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  /** Constraint on the resources used in the document (1..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;

  override fhirType(): string {
    return 'CapabilityStatement.document';
  }

  /** FHIR JSON for this CapabilityStatementDocument, typed as the plain `CapabilityStatementDocument` data type. */
  override toJSON(): plainTypes.CapabilityStatementDocument {
    return this.serialize() as plainTypes.CapabilityStatementDocument;
  }

  /** producer | consumer (1..1) */
  getMode(): valueSetCodes.DocumentMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.DocumentMode | undefined): this {
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

  /** Description of document support (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }

  /** Constraint on the resources used in the document (1..1) */
  getProfile(): string | undefined {
    return this.profile;
  }

  /** Sets `profile`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setProfile(profile: string | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** The element carrying the id and extensions of `profile`. Created when absent. */
  getProfileElement(): Element {
    if (this._profile === undefined) {
      this._profile = new Element();
    }
    return this._profile;
  }

  setProfileElement(profileElement: Element | undefined): this {
    this._profile = profileElement;
    return this;
  }
}

modelTypeRegistry.register('CapabilityStatementDocument', CapabilityStatementDocument, false);
