/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for ImplementationGuide Resource
 */
export class ImplementationGuide extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 1,
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
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
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
    {
      elementName: 'fhirVersion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fhirVersion', typeCode: 'id' }],
    },
    {
      elementName: 'dependency',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dependency', typeCode: 'ImplementationGuideDependency' }],
    },
    {
      elementName: 'package',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'package', typeCode: 'ImplementationGuidePackage' }],
    },
    {
      elementName: 'global',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'global', typeCode: 'ImplementationGuideGlobal' }],
    },
    {
      elementName: 'binary',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'binary', typeCode: 'uri' }],
    },
    {
      elementName: 'page',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'page', typeCode: 'ImplementationGuidePage' }],
    },
  ];

  readonly resourceType = 'ImplementationGuide';

  /** Logical URI to reference this implementation guide (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Business version of the implementation guide (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this implementation guide (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** Date this was last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the implementation guide (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Context the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for implementation guide (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** FHIR Version this Implementation Guide targets (0..1) */
  fhirVersion?: string;
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: Element;

  /** Another Implementation guide this depends on (0..*) */
  dependency?: ImplementationGuideDependency[];

  /** Group of resources as used in .page.package (0..*) */
  package?: ImplementationGuidePackage[];

  /** Profiles that apply globally (0..*) */
  global?: ImplementationGuideGlobal[];

  /** Image, css, script, etc. (0..*) */
  binary?: string[];
  /** Id and extensions of the primitive `binary`. */
  _binary?: (Element | null)[];

  /** Page/Section in the Guide (0..1) */
  page?: ImplementationGuidePage;

  override fhirType(): string {
    return 'ImplementationGuide';
  }

  /** FHIR JSON for this ImplementationGuide, typed as the plain `ImplementationGuide` data type. */
  override toJSON(): plainTypes.ImplementationGuide {
    return this.serialize() as plainTypes.ImplementationGuide;
  }

  /** Logical URI to reference this implementation guide (globally unique) (1..1) */
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

  /** Business version of the implementation guide (0..1) */
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

  /** Name for this implementation guide (computer friendly) (1..1) */
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

  /** Date this was last changed (0..1) */
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

  /** Natural language description of the implementation guide (0..1) */
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

  /** Context the content is intended to support (0..*) Never undefined; an empty list is created when absent. */
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

  /** Intended jurisdiction for implementation guide (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** FHIR Version this Implementation Guide targets (0..1) */
  getFhirVersion(): string | undefined {
    return this.fhirVersion;
  }

  /** Sets `fhirVersion`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setFhirVersion(fhirVersion: string | undefined): this {
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

  /** Another Implementation guide this depends on (0..*) Never undefined; an empty list is created when absent. */
  getDependency(): ImplementationGuideDependency[] {
    if (this.dependency === undefined) {
      this.dependency = [];
    }
    return this.dependency;
  }

  setDependency(dependency: ImplementationGuideDependency[] | undefined): this {
    return this.setFieldValue('dependency', dependency);
  }

  hasDependency(): boolean {
    return this.hasFieldValue('dependency');
  }

  /** Appends a new, empty ImplementationGuideDependency to `dependency` and returns it so it can be filled in. */
  addDependency(): ImplementationGuideDependency;
  /** Appends the given ImplementationGuideDependency to `dependency` and returns this object for chaining. */
  addDependency(implementationGuideDependency: ImplementationGuideDependency): this;
  addDependency(
    implementationGuideDependency?: ImplementationGuideDependency
  ): ImplementationGuideDependency | this {
    if (implementationGuideDependency !== undefined) {
      return this.addFieldValue('dependency', implementationGuideDependency);
    }
    const createdImplementationGuideDependency = new ImplementationGuideDependency();
    this.addFieldValue('dependency', createdImplementationGuideDependency);
    return createdImplementationGuideDependency;
  }

  /** The first ImplementationGuideDependency of `dependency`. One is added when the list is empty. */
  getDependencyFirstRep(): ImplementationGuideDependency {
    const firstImplementationGuideDependency = this.getDependency()[0];
    return firstImplementationGuideDependency === undefined
      ? this.addDependency()
      : firstImplementationGuideDependency;
  }

  /** Group of resources as used in .page.package (0..*) Never undefined; an empty list is created when absent. */
  getPackage(): ImplementationGuidePackage[] {
    if (this.package === undefined) {
      this.package = [];
    }
    return this.package;
  }

  setPackage(packageValue: ImplementationGuidePackage[] | undefined): this {
    return this.setFieldValue('package', packageValue);
  }

  hasPackage(): boolean {
    return this.hasFieldValue('package');
  }

  /** Appends a new, empty ImplementationGuidePackage to `package` and returns it so it can be filled in. */
  addPackage(): ImplementationGuidePackage;
  /** Appends the given ImplementationGuidePackage to `package` and returns this object for chaining. */
  addPackage(implementationGuidePackage: ImplementationGuidePackage): this;
  addPackage(
    implementationGuidePackage?: ImplementationGuidePackage
  ): ImplementationGuidePackage | this {
    if (implementationGuidePackage !== undefined) {
      return this.addFieldValue('package', implementationGuidePackage);
    }
    const createdImplementationGuidePackage = new ImplementationGuidePackage();
    this.addFieldValue('package', createdImplementationGuidePackage);
    return createdImplementationGuidePackage;
  }

  /** The first ImplementationGuidePackage of `package`. One is added when the list is empty. */
  getPackageFirstRep(): ImplementationGuidePackage {
    const firstImplementationGuidePackage = this.getPackage()[0];
    return firstImplementationGuidePackage === undefined
      ? this.addPackage()
      : firstImplementationGuidePackage;
  }

  /** Profiles that apply globally (0..*) Never undefined; an empty list is created when absent. */
  getGlobal(): ImplementationGuideGlobal[] {
    if (this.global === undefined) {
      this.global = [];
    }
    return this.global;
  }

  setGlobal(global: ImplementationGuideGlobal[] | undefined): this {
    return this.setFieldValue('global', global);
  }

  hasGlobal(): boolean {
    return this.hasFieldValue('global');
  }

  /** Appends a new, empty ImplementationGuideGlobal to `global` and returns it so it can be filled in. */
  addGlobal(): ImplementationGuideGlobal;
  /** Appends the given ImplementationGuideGlobal to `global` and returns this object for chaining. */
  addGlobal(implementationGuideGlobal: ImplementationGuideGlobal): this;
  addGlobal(
    implementationGuideGlobal?: ImplementationGuideGlobal
  ): ImplementationGuideGlobal | this {
    if (implementationGuideGlobal !== undefined) {
      return this.addFieldValue('global', implementationGuideGlobal);
    }
    const createdImplementationGuideGlobal = new ImplementationGuideGlobal();
    this.addFieldValue('global', createdImplementationGuideGlobal);
    return createdImplementationGuideGlobal;
  }

  /** The first ImplementationGuideGlobal of `global`. One is added when the list is empty. */
  getGlobalFirstRep(): ImplementationGuideGlobal {
    const firstImplementationGuideGlobal = this.getGlobal()[0];
    return firstImplementationGuideGlobal === undefined
      ? this.addGlobal()
      : firstImplementationGuideGlobal;
  }

  /** Image, css, script, etc. (0..*) Never undefined; an empty list is created when absent. */
  getBinary(): string[] {
    if (this.binary === undefined) {
      this.binary = [];
    }
    return this.binary;
  }

  setBinary(binary: string[] | undefined): this {
    return this.setFieldValue('binary', binary);
  }

  hasBinary(): boolean {
    return this.hasFieldValue('binary');
  }

  /** Appends one value to `binary`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addBinary(binary: string): this {
    return this.addFieldValue('binary', binary);
  }

  /** Page/Section in the Guide (0..1) Created when absent. */
  getPage(): ImplementationGuidePage {
    if (this.page === undefined) {
      this.page = new ImplementationGuidePage();
    }
    return this.page;
  }

  setPage(page: ImplementationGuidePage | undefined): this {
    return this.setFieldValue('page', page);
  }

  hasPage(): boolean {
    return this.hasFieldValue('page');
  }
}

modelTypeRegistry.register('ImplementationGuide', ImplementationGuide, true);

/** True when the value is a ImplementationGuide model instance. */
export function isImplementationGuide(candidate: unknown): candidate is ImplementationGuide {
  return candidate instanceof ImplementationGuide;
}

/**
 * Another Implementation guide this depends on
 */
export class ImplementationGuideDependency extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.GuideDependencyType },
      ],
    },
    {
      elementName: 'uri',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uri', typeCode: 'uri' }],
    },
  ];

  /** reference | inclusion (1..1) */
  type?: valueSetCodes.GuideDependencyType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Where to find dependency (1..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;

  override fhirType(): string {
    return 'ImplementationGuide.dependency';
  }

  /** FHIR JSON for this ImplementationGuideDependency, typed as the plain `ImplementationGuideDependency` data type. */
  override toJSON(): plainTypes.ImplementationGuideDependency {
    return this.serialize() as plainTypes.ImplementationGuideDependency;
  }

  /** reference | inclusion (1..1) */
  getType(): valueSetCodes.GuideDependencyType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.GuideDependencyType | undefined): this {
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

  /** Where to find dependency (1..1) */
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

modelTypeRegistry.register('ImplementationGuideDependency', ImplementationGuideDependency, false);

/**
 * Group of resources as used in .page.package
 */
export class ImplementationGuidePackage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'resource',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'resource', typeCode: 'ImplementationGuidePackageResource' }],
    },
  ];

  /** Name used .page.package (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Human readable text describing the package (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Resource in the implementation guide (1..*) */
  resource?: ImplementationGuidePackageResource[];

  override fhirType(): string {
    return 'ImplementationGuide.package';
  }

  /** FHIR JSON for this ImplementationGuidePackage, typed as the plain `ImplementationGuidePackage` data type. */
  override toJSON(): plainTypes.ImplementationGuidePackage {
    return this.serialize() as plainTypes.ImplementationGuidePackage;
  }

  /** Name used .page.package (1..1) */
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

  /** Human readable text describing the package (0..1) */
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

  /** Resource in the implementation guide (1..*) Never undefined; an empty list is created when absent. */
  getResource(): ImplementationGuidePackageResource[] {
    if (this.resource === undefined) {
      this.resource = [];
    }
    return this.resource;
  }

  setResource(resource: ImplementationGuidePackageResource[] | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** Appends a new, empty ImplementationGuidePackageResource to `resource` and returns it so it can be filled in. */
  addResource(): ImplementationGuidePackageResource;
  /** Appends the given ImplementationGuidePackageResource to `resource` and returns this object for chaining. */
  addResource(implementationGuidePackageResource: ImplementationGuidePackageResource): this;
  addResource(
    implementationGuidePackageResource?: ImplementationGuidePackageResource
  ): ImplementationGuidePackageResource | this {
    if (implementationGuidePackageResource !== undefined) {
      return this.addFieldValue('resource', implementationGuidePackageResource);
    }
    const createdImplementationGuidePackageResource = new ImplementationGuidePackageResource();
    this.addFieldValue('resource', createdImplementationGuidePackageResource);
    return createdImplementationGuidePackageResource;
  }

  /** The first ImplementationGuidePackageResource of `resource`. One is added when the list is empty. */
  getResourceFirstRep(): ImplementationGuidePackageResource {
    const firstImplementationGuidePackageResource = this.getResource()[0];
    return firstImplementationGuidePackageResource === undefined
      ? this.addResource()
      : firstImplementationGuidePackageResource;
  }
}

modelTypeRegistry.register('ImplementationGuidePackage', ImplementationGuidePackage, false);

/**
 * Resource in the implementation guide
 */
export class ImplementationGuidePackageResource extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'example',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'example', typeCode: 'boolean' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'acronym',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'acronym', typeCode: 'string' }],
    },
    {
      elementName: 'source',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sourceUri', typeCode: 'uri' },
        { jsonKey: 'sourceReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'exampleFor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'exampleFor',
          typeCode: 'Reference',
          targetResourceTypes: ['StructureDefinition'],
        },
      ],
    },
  ];

  /** If not an example, has its normal meaning (1..1) */
  example?: boolean;
  /** Id and extensions of the primitive `example`. */
  _example?: Element;

  /** Human Name for the resource (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Reason why included in guide (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Short code to identify the resource (0..1) */
  acronym?: string;
  /** Id and extensions of the primitive `acronym`. */
  _acronym?: Element;

  /** Location of the resource (1..1) */
  sourceUri?: string;
  /** Id and extensions of the primitive `sourceUri`. */
  _sourceUri?: Element;
  /** Location of the resource (1..1) */
  sourceReference?: Reference;

  /** Resource this is an example of (if applicable) (0..1) */
  exampleFor?: Reference;

  override fhirType(): string {
    return 'ImplementationGuide.package.resource';
  }

  /** FHIR JSON for this ImplementationGuidePackageResource, typed as the plain `ImplementationGuideResource` data type. */
  override toJSON(): plainTypes.ImplementationGuideResource {
    return this.serialize() as plainTypes.ImplementationGuideResource;
  }

  /** If not an example, has its normal meaning (1..1) */
  getExample(): boolean | undefined {
    return this.example;
  }

  /** Sets `example`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExample(example: boolean | undefined): this {
    return this.setFieldValue('example', example);
  }

  hasExample(): boolean {
    return this.hasFieldValue('example');
  }

  /** The element carrying the id and extensions of `example`. Created when absent. */
  getExampleElement(): Element {
    if (this._example === undefined) {
      this._example = new Element();
    }
    return this._example;
  }

  setExampleElement(exampleElement: Element | undefined): this {
    this._example = exampleElement;
    return this;
  }

  /** Human Name for the resource (0..1) */
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

  /** Reason why included in guide (0..1) */
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

  /** Short code to identify the resource (0..1) */
  getAcronym(): string | undefined {
    return this.acronym;
  }

  /** Sets `acronym`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAcronym(acronym: string | undefined): this {
    return this.setFieldValue('acronym', acronym);
  }

  hasAcronym(): boolean {
    return this.hasFieldValue('acronym');
  }

  /** The element carrying the id and extensions of `acronym`. Created when absent. */
  getAcronymElement(): Element {
    if (this._acronym === undefined) {
      this._acronym = new Element();
    }
    return this._acronym;
  }

  setAcronymElement(acronymElement: Element | undefined): this {
    this._acronym = acronymElement;
    return this;
  }

  /** Location of the resource (1..1) Whichever type of `source[x]` is set. */
  getSource(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('source');
  }

  /** True when any type of `source[x]` is set. */
  hasSource(): boolean {
    return this.hasChoiceValue('source');
  }

  getSourceUri(): string | undefined {
    return this.sourceUri;
  }

  /** Sets `source[x]` as uri and clears every other type of it. */
  setSourceUri(sourceUri: string | undefined): this {
    return this.setFieldValue('sourceUri', sourceUri);
  }

  hasSourceUri(): boolean {
    return this.hasFieldValue('sourceUri');
  }

  getSourceReference(): Reference | undefined {
    return this.sourceReference;
  }

  /** Sets `source[x]` as Reference and clears every other type of it. */
  setSourceReference(sourceReference: Reference | undefined): this {
    return this.setFieldValue('sourceReference', sourceReference);
  }

  hasSourceReference(): boolean {
    return this.hasFieldValue('sourceReference');
  }

  /** Resource this is an example of (if applicable) (0..1) Created when absent. */
  getExampleFor(): Reference {
    if (this.exampleFor === undefined) {
      this.exampleFor = new Reference();
    }
    return this.exampleFor;
  }

  setExampleFor(exampleFor: Reference | undefined): this {
    return this.setFieldValue('exampleFor', exampleFor);
  }

  hasExampleFor(): boolean {
    return this.hasFieldValue('exampleFor');
  }
}

modelTypeRegistry.register(
  'ImplementationGuidePackageResource',
  ImplementationGuidePackageResource,
  false
);

/**
 * Profiles that apply globally
 */
export class ImplementationGuideGlobal extends BackboneElement {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'profile', typeCode: 'Reference', targetResourceTypes: ['StructureDefinition'] },
      ],
    },
  ];

  /** Type this profiles applies to (1..1) */
  type?: valueSetCodes.ResourceType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Profile that all resources must conform to (1..1) */
  profile?: Reference;

  override fhirType(): string {
    return 'ImplementationGuide.global';
  }

  /** FHIR JSON for this ImplementationGuideGlobal, typed as the plain `ImplementationGuideGlobal` data type. */
  override toJSON(): plainTypes.ImplementationGuideGlobal {
    return this.serialize() as plainTypes.ImplementationGuideGlobal;
  }

  /** Type this profiles applies to (1..1) */
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

  /** Profile that all resources must conform to (1..1) Created when absent. */
  getProfile(): Reference {
    if (this.profile === undefined) {
      this.profile = new Reference();
    }
    return this.profile;
  }

  setProfile(profile: Reference | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }
}

modelTypeRegistry.register('ImplementationGuideGlobal', ImplementationGuideGlobal, false);

/**
 * Page/Section in the Guide
 */
export class ImplementationGuidePage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'source',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'uri' }],
    },
    {
      elementName: 'title',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'kind',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.GuidePageKind }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ResourceType }],
    },
    {
      elementName: 'package',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'package', typeCode: 'string' }],
    },
    {
      elementName: 'format',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'format', typeCode: 'code' }],
    },
    {
      elementName: 'page',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'page', typeCode: 'ImplementationGuidePage' }],
    },
  ];

  /** Where to find that page (1..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;

  /** Short title shown for navigational assistance (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** page | example | list | include | directory | dictionary | toc | resource (1..1) */
  kind?: valueSetCodes.GuidePageKind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Kind of resource to include in the list (0..*) */
  type?: valueSetCodes.ResourceType[];
  /** Id and extensions of the primitive `type`. */
  _type?: (Element | null)[];

  /** Name of package to include (0..*) */
  package?: string[];
  /** Id and extensions of the primitive `package`. */
  _package?: (Element | null)[];

  /** Format of the page (e.g. html, markdown, etc.) (0..1) */
  format?: string;
  /** Id and extensions of the primitive `format`. */
  _format?: Element;

  /** Nested Pages / Sections (0..*) */
  page?: ImplementationGuidePage[];

  override fhirType(): string {
    return 'ImplementationGuide.page';
  }

  /** FHIR JSON for this ImplementationGuidePage, typed as the plain `ImplementationGuidePage` data type. */
  override toJSON(): plainTypes.ImplementationGuidePage {
    return this.serialize() as plainTypes.ImplementationGuidePage;
  }

  /** Where to find that page (1..1) */
  getSource(): string | undefined {
    return this.source;
  }

  /** Sets `source`. Throws a FhirModelError when the value is not a valid FHIR uri. */
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

  /** Short title shown for navigational assistance (1..1) */
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

  /** page | example | list | include | directory | dictionary | toc | resource (1..1) */
  getKind(): valueSetCodes.GuidePageKind | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.GuidePageKind | undefined): this {
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

  /** Kind of resource to include in the list (0..*) Never undefined; an empty list is created when absent. */
  getType(): valueSetCodes.ResourceType[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: valueSetCodes.ResourceType[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends one value to `type`. Throws a FhirModelError when it is not a valid FHIR code. */
  addType(type: valueSetCodes.ResourceType): this {
    return this.addFieldValue('type', type);
  }

  /** Name of package to include (0..*) Never undefined; an empty list is created when absent. */
  getPackage(): string[] {
    if (this.package === undefined) {
      this.package = [];
    }
    return this.package;
  }

  setPackage(packageValue: string[] | undefined): this {
    return this.setFieldValue('package', packageValue);
  }

  hasPackage(): boolean {
    return this.hasFieldValue('package');
  }

  /** Appends one value to `package`. Throws a FhirModelError when it is not a valid FHIR string. */
  addPackage(packageValue: string): this {
    return this.addFieldValue('package', packageValue);
  }

  /** Format of the page (e.g. html, markdown, etc.) (0..1) */
  getFormat(): string | undefined {
    return this.format;
  }

  /** Sets `format`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setFormat(format: string | undefined): this {
    return this.setFieldValue('format', format);
  }

  hasFormat(): boolean {
    return this.hasFieldValue('format');
  }

  /** The element carrying the id and extensions of `format`. Created when absent. */
  getFormatElement(): Element {
    if (this._format === undefined) {
      this._format = new Element();
    }
    return this._format;
  }

  setFormatElement(formatElement: Element | undefined): this {
    this._format = formatElement;
    return this;
  }

  /** Nested Pages / Sections (0..*) Never undefined; an empty list is created when absent. */
  getPage(): ImplementationGuidePage[] {
    if (this.page === undefined) {
      this.page = [];
    }
    return this.page;
  }

  setPage(page: ImplementationGuidePage[] | undefined): this {
    return this.setFieldValue('page', page);
  }

  hasPage(): boolean {
    return this.hasFieldValue('page');
  }

  /** Appends a new, empty ImplementationGuidePage to `page` and returns it so it can be filled in. */
  addPage(): ImplementationGuidePage;
  /** Appends the given ImplementationGuidePage to `page` and returns this object for chaining. */
  addPage(implementationGuidePage: ImplementationGuidePage): this;
  addPage(implementationGuidePage?: ImplementationGuidePage): ImplementationGuidePage | this {
    if (implementationGuidePage !== undefined) {
      return this.addFieldValue('page', implementationGuidePage);
    }
    const createdImplementationGuidePage = new ImplementationGuidePage();
    this.addFieldValue('page', createdImplementationGuidePage);
    return createdImplementationGuidePage;
  }

  /** The first ImplementationGuidePage of `page`. One is added when the list is empty. */
  getPageFirstRep(): ImplementationGuidePage {
    const firstImplementationGuidePage = this.getPage()[0];
    return firstImplementationGuidePage === undefined
      ? this.addPage()
      : firstImplementationGuidePage;
  }
}

modelTypeRegistry.register('ImplementationGuidePage', ImplementationGuidePage, false);
