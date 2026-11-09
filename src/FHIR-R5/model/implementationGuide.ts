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
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
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
      elementName: 'copyrightLabel',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyrightLabel', typeCode: 'string' }],
    },
    {
      elementName: 'packageId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'packageId', typeCode: 'id' }],
    },
    {
      elementName: 'license',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'license', typeCode: 'code', allowedCodes: valueSetCodes.SPDXLicense }],
    },
    {
      elementName: 'fhirVersion',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'fhirVersion', typeCode: 'code', allowedCodes: valueSetCodes.FHIRVersion },
      ],
    },
    {
      elementName: 'dependsOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dependsOn', typeCode: 'ImplementationGuideDependsOn' }],
    },
    {
      elementName: 'global',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'global', typeCode: 'ImplementationGuideGlobal' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'ImplementationGuideDefinition' }],
    },
    {
      elementName: 'manifest',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'manifest', typeCode: 'ImplementationGuideManifest' }],
    },
  ];

  readonly resourceType = 'ImplementationGuide';

  /** Canonical identifier for this implementation guide, represented as a URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the implementation guide (business identifier) (0..*) */
  identifier?: Identifier[];

  /** Business version of the implementation guide (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this implementation guide (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this implementation guide (human friendly) (0..1) */
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

  /** Natural language description of the implementation guide (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for implementation guide (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this implementation guide is defined (0..1) */
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

  /** NPM Package name for IG (1..1) */
  packageId?: string;
  /** Id and extensions of the primitive `packageId`. */
  _packageId?: Element;

  /** SPDX license code for this IG (or not-open-source) (0..1) */
  license?: valueSetCodes.SPDXLicense;
  /** Id and extensions of the primitive `license`. */
  _license?: Element;

  /** FHIR Version(s) this Implementation Guide targets (1..*) */
  fhirVersion?: valueSetCodes.FHIRVersion[];
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: (Element | null)[];

  /** Another Implementation guide this depends on (0..*) */
  dependsOn?: ImplementationGuideDependsOn[];

  /** Profiles that apply globally (0..*) */
  global?: ImplementationGuideGlobal[];

  /** Information needed to build the IG (0..1) */
  definition?: ImplementationGuideDefinition;

  /** Information about an assembled IG (0..1) */
  manifest?: ImplementationGuideManifest;

  override fhirType(): string {
    return 'ImplementationGuide';
  }

  /** FHIR JSON for this ImplementationGuide, typed as the plain `ImplementationGuide` data type. */
  override toJSON(): plainTypes.ImplementationGuide {
    return this.serialize() as plainTypes.ImplementationGuide;
  }

  /** Canonical identifier for this implementation guide, represented as a URI (globally unique) (1..1) */
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

  /** Additional identifier for the implementation guide (business identifier) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Name for this implementation guide (human friendly) (0..1) */
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

  /** Why this implementation guide is defined (0..1) */
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

  /** NPM Package name for IG (1..1) */
  getPackageId(): string | undefined {
    return this.packageId;
  }

  /** Sets `packageId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setPackageId(packageId: string | undefined): this {
    return this.setFieldValue('packageId', packageId);
  }

  hasPackageId(): boolean {
    return this.hasFieldValue('packageId');
  }

  /** The element carrying the id and extensions of `packageId`. Created when absent. */
  getPackageIdElement(): Element {
    if (this._packageId === undefined) {
      this._packageId = new Element();
    }
    return this._packageId;
  }

  setPackageIdElement(packageIdElement: Element | undefined): this {
    this._packageId = packageIdElement;
    return this;
  }

  /** SPDX license code for this IG (or not-open-source) (0..1) */
  getLicense(): valueSetCodes.SPDXLicense | undefined {
    return this.license;
  }

  /** Sets `license`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setLicense(license: valueSetCodes.SPDXLicense | undefined): this {
    return this.setFieldValue('license', license);
  }

  hasLicense(): boolean {
    return this.hasFieldValue('license');
  }

  /** The element carrying the id and extensions of `license`. Created when absent. */
  getLicenseElement(): Element {
    if (this._license === undefined) {
      this._license = new Element();
    }
    return this._license;
  }

  setLicenseElement(licenseElement: Element | undefined): this {
    this._license = licenseElement;
    return this;
  }

  /** FHIR Version(s) this Implementation Guide targets (1..*) Never undefined; an empty list is created when absent. */
  getFhirVersion(): valueSetCodes.FHIRVersion[] {
    if (this.fhirVersion === undefined) {
      this.fhirVersion = [];
    }
    return this.fhirVersion;
  }

  setFhirVersion(fhirVersion: valueSetCodes.FHIRVersion[] | undefined): this {
    return this.setFieldValue('fhirVersion', fhirVersion);
  }

  hasFhirVersion(): boolean {
    return this.hasFieldValue('fhirVersion');
  }

  /** Appends one value to `fhirVersion`. Throws a FhirModelError when it is not a valid FHIR code. */
  addFhirVersion(fhirVersion: valueSetCodes.FHIRVersion): this {
    return this.addFieldValue('fhirVersion', fhirVersion);
  }

  /** Another Implementation guide this depends on (0..*) Never undefined; an empty list is created when absent. */
  getDependsOn(): ImplementationGuideDependsOn[] {
    if (this.dependsOn === undefined) {
      this.dependsOn = [];
    }
    return this.dependsOn;
  }

  setDependsOn(dependsOn: ImplementationGuideDependsOn[] | undefined): this {
    return this.setFieldValue('dependsOn', dependsOn);
  }

  hasDependsOn(): boolean {
    return this.hasFieldValue('dependsOn');
  }

  /** Appends a new, empty ImplementationGuideDependsOn to `dependsOn` and returns it so it can be filled in. */
  addDependsOn(): ImplementationGuideDependsOn;
  /** Appends the given ImplementationGuideDependsOn to `dependsOn` and returns this object for chaining. */
  addDependsOn(implementationGuideDependsOn: ImplementationGuideDependsOn): this;
  addDependsOn(
    implementationGuideDependsOn?: ImplementationGuideDependsOn
  ): ImplementationGuideDependsOn | this {
    if (implementationGuideDependsOn !== undefined) {
      return this.addFieldValue('dependsOn', implementationGuideDependsOn);
    }
    const createdImplementationGuideDependsOn = new ImplementationGuideDependsOn();
    this.addFieldValue('dependsOn', createdImplementationGuideDependsOn);
    return createdImplementationGuideDependsOn;
  }

  /** The first ImplementationGuideDependsOn of `dependsOn`. One is added when the list is empty. */
  getDependsOnFirstRep(): ImplementationGuideDependsOn {
    const firstImplementationGuideDependsOn = this.getDependsOn()[0];
    return firstImplementationGuideDependsOn === undefined
      ? this.addDependsOn()
      : firstImplementationGuideDependsOn;
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

  /** Information needed to build the IG (0..1) Created when absent. */
  getDefinition(): ImplementationGuideDefinition {
    if (this.definition === undefined) {
      this.definition = new ImplementationGuideDefinition();
    }
    return this.definition;
  }

  setDefinition(definition: ImplementationGuideDefinition | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** Information about an assembled IG (0..1) Created when absent. */
  getManifest(): ImplementationGuideManifest {
    if (this.manifest === undefined) {
      this.manifest = new ImplementationGuideManifest();
    }
    return this.manifest;
  }

  setManifest(manifest: ImplementationGuideManifest | undefined): this {
    return this.setFieldValue('manifest', manifest);
  }

  hasManifest(): boolean {
    return this.hasFieldValue('manifest');
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
export class ImplementationGuideDependsOn extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'uri',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uri', typeCode: 'canonical' }],
    },
    {
      elementName: 'packageId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'packageId', typeCode: 'id' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'markdown' }],
    },
  ];

  /** Identity of the IG that this depends on (1..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;

  /** NPM Package name for IG this depends on (0..1) */
  packageId?: string;
  /** Id and extensions of the primitive `packageId`. */
  _packageId?: Element;

  /** Version of the IG (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Why dependency exists (0..1) */
  reason?: string;
  /** Id and extensions of the primitive `reason`. */
  _reason?: Element;

  override fhirType(): string {
    return 'ImplementationGuide.dependsOn';
  }

  /** FHIR JSON for this ImplementationGuideDependsOn, typed as the plain `ImplementationGuideDependsOn` data type. */
  override toJSON(): plainTypes.ImplementationGuideDependsOn {
    return this.serialize() as plainTypes.ImplementationGuideDependsOn;
  }

  /** Identity of the IG that this depends on (1..1) */
  getUri(): string | undefined {
    return this.uri;
  }

  /** Sets `uri`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
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

  /** NPM Package name for IG this depends on (0..1) */
  getPackageId(): string | undefined {
    return this.packageId;
  }

  /** Sets `packageId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setPackageId(packageId: string | undefined): this {
    return this.setFieldValue('packageId', packageId);
  }

  hasPackageId(): boolean {
    return this.hasFieldValue('packageId');
  }

  /** The element carrying the id and extensions of `packageId`. Created when absent. */
  getPackageIdElement(): Element {
    if (this._packageId === undefined) {
      this._packageId = new Element();
    }
    return this._packageId;
  }

  setPackageIdElement(packageIdElement: Element | undefined): this {
    this._packageId = packageIdElement;
    return this;
  }

  /** Version of the IG (0..1) */
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

  /** Why dependency exists (0..1) */
  getReason(): string | undefined {
    return this.reason;
  }

  /** Sets `reason`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setReason(reason: string | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** The element carrying the id and extensions of `reason`. Created when absent. */
  getReasonElement(): Element {
    if (this._reason === undefined) {
      this._reason = new Element();
    }
    return this._reason;
  }

  setReasonElement(reasonElement: Element | undefined): this {
    this._reason = reasonElement;
    return this;
  }
}

modelTypeRegistry.register('ImplementationGuideDependsOn', ImplementationGuideDependsOn, false);

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
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
  ];

  /** Type this profile applies to (1..1) */
  type?: valueSetCodes.ResourceType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Profile that all resources must conform to (1..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;

  override fhirType(): string {
    return 'ImplementationGuide.global';
  }

  /** FHIR JSON for this ImplementationGuideGlobal, typed as the plain `ImplementationGuideGlobal` data type. */
  override toJSON(): plainTypes.ImplementationGuideGlobal {
    return this.serialize() as plainTypes.ImplementationGuideGlobal;
  }

  /** Type this profile applies to (1..1) */
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

  /** Profile that all resources must conform to (1..1) */
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

modelTypeRegistry.register('ImplementationGuideGlobal', ImplementationGuideGlobal, false);

/**
 * Information needed to build the IG
 */
export class ImplementationGuideDefinition extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'grouping',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'grouping', typeCode: 'ImplementationGuideDefinitionGrouping' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'resource', typeCode: 'ImplementationGuideDefinitionResource' }],
    },
    {
      elementName: 'page',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'page', typeCode: 'ImplementationGuideDefinitionPage' }],
    },
    {
      elementName: 'parameter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'ImplementationGuideDefinitionParameter' }],
    },
    {
      elementName: 'template',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'template', typeCode: 'ImplementationGuideDefinitionTemplate' }],
    },
  ];

  /** Grouping used to present related resources in the IG (0..*) */
  grouping?: ImplementationGuideDefinitionGrouping[];

  /** Resource in the implementation guide (0..*) */
  resource?: ImplementationGuideDefinitionResource[];

  /** Page/Section in the Guide (0..1) */
  page?: ImplementationGuideDefinitionPage;

  /** Defines how IG is built by tools (0..*) */
  parameter?: ImplementationGuideDefinitionParameter[];

  /** A template for building resources (0..*) */
  template?: ImplementationGuideDefinitionTemplate[];

  override fhirType(): string {
    return 'ImplementationGuide.definition';
  }

  /** FHIR JSON for this ImplementationGuideDefinition, typed as the plain `ImplementationGuideDefinition` data type. */
  override toJSON(): plainTypes.ImplementationGuideDefinition {
    return this.serialize() as plainTypes.ImplementationGuideDefinition;
  }

  /** Grouping used to present related resources in the IG (0..*) Never undefined; an empty list is created when absent. */
  getGrouping(): ImplementationGuideDefinitionGrouping[] {
    if (this.grouping === undefined) {
      this.grouping = [];
    }
    return this.grouping;
  }

  setGrouping(grouping: ImplementationGuideDefinitionGrouping[] | undefined): this {
    return this.setFieldValue('grouping', grouping);
  }

  hasGrouping(): boolean {
    return this.hasFieldValue('grouping');
  }

  /** Appends a new, empty ImplementationGuideDefinitionGrouping to `grouping` and returns it so it can be filled in. */
  addGrouping(): ImplementationGuideDefinitionGrouping;
  /** Appends the given ImplementationGuideDefinitionGrouping to `grouping` and returns this object for chaining. */
  addGrouping(implementationGuideDefinitionGrouping: ImplementationGuideDefinitionGrouping): this;
  addGrouping(
    implementationGuideDefinitionGrouping?: ImplementationGuideDefinitionGrouping
  ): ImplementationGuideDefinitionGrouping | this {
    if (implementationGuideDefinitionGrouping !== undefined) {
      return this.addFieldValue('grouping', implementationGuideDefinitionGrouping);
    }
    const createdImplementationGuideDefinitionGrouping =
      new ImplementationGuideDefinitionGrouping();
    this.addFieldValue('grouping', createdImplementationGuideDefinitionGrouping);
    return createdImplementationGuideDefinitionGrouping;
  }

  /** The first ImplementationGuideDefinitionGrouping of `grouping`. One is added when the list is empty. */
  getGroupingFirstRep(): ImplementationGuideDefinitionGrouping {
    const firstImplementationGuideDefinitionGrouping = this.getGrouping()[0];
    return firstImplementationGuideDefinitionGrouping === undefined
      ? this.addGrouping()
      : firstImplementationGuideDefinitionGrouping;
  }

  /** Resource in the implementation guide (0..*) Never undefined; an empty list is created when absent. */
  getResource(): ImplementationGuideDefinitionResource[] {
    if (this.resource === undefined) {
      this.resource = [];
    }
    return this.resource;
  }

  setResource(resource: ImplementationGuideDefinitionResource[] | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** Appends a new, empty ImplementationGuideDefinitionResource to `resource` and returns it so it can be filled in. */
  addResource(): ImplementationGuideDefinitionResource;
  /** Appends the given ImplementationGuideDefinitionResource to `resource` and returns this object for chaining. */
  addResource(implementationGuideDefinitionResource: ImplementationGuideDefinitionResource): this;
  addResource(
    implementationGuideDefinitionResource?: ImplementationGuideDefinitionResource
  ): ImplementationGuideDefinitionResource | this {
    if (implementationGuideDefinitionResource !== undefined) {
      return this.addFieldValue('resource', implementationGuideDefinitionResource);
    }
    const createdImplementationGuideDefinitionResource =
      new ImplementationGuideDefinitionResource();
    this.addFieldValue('resource', createdImplementationGuideDefinitionResource);
    return createdImplementationGuideDefinitionResource;
  }

  /** The first ImplementationGuideDefinitionResource of `resource`. One is added when the list is empty. */
  getResourceFirstRep(): ImplementationGuideDefinitionResource {
    const firstImplementationGuideDefinitionResource = this.getResource()[0];
    return firstImplementationGuideDefinitionResource === undefined
      ? this.addResource()
      : firstImplementationGuideDefinitionResource;
  }

  /** Page/Section in the Guide (0..1) Created when absent. */
  getPage(): ImplementationGuideDefinitionPage {
    if (this.page === undefined) {
      this.page = new ImplementationGuideDefinitionPage();
    }
    return this.page;
  }

  setPage(page: ImplementationGuideDefinitionPage | undefined): this {
    return this.setFieldValue('page', page);
  }

  hasPage(): boolean {
    return this.hasFieldValue('page');
  }

  /** Defines how IG is built by tools (0..*) Never undefined; an empty list is created when absent. */
  getParameter(): ImplementationGuideDefinitionParameter[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: ImplementationGuideDefinitionParameter[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty ImplementationGuideDefinitionParameter to `parameter` and returns it so it can be filled in. */
  addParameter(): ImplementationGuideDefinitionParameter;
  /** Appends the given ImplementationGuideDefinitionParameter to `parameter` and returns this object for chaining. */
  addParameter(
    implementationGuideDefinitionParameter: ImplementationGuideDefinitionParameter
  ): this;
  addParameter(
    implementationGuideDefinitionParameter?: ImplementationGuideDefinitionParameter
  ): ImplementationGuideDefinitionParameter | this {
    if (implementationGuideDefinitionParameter !== undefined) {
      return this.addFieldValue('parameter', implementationGuideDefinitionParameter);
    }
    const createdImplementationGuideDefinitionParameter =
      new ImplementationGuideDefinitionParameter();
    this.addFieldValue('parameter', createdImplementationGuideDefinitionParameter);
    return createdImplementationGuideDefinitionParameter;
  }

  /** The first ImplementationGuideDefinitionParameter of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): ImplementationGuideDefinitionParameter {
    const firstImplementationGuideDefinitionParameter = this.getParameter()[0];
    return firstImplementationGuideDefinitionParameter === undefined
      ? this.addParameter()
      : firstImplementationGuideDefinitionParameter;
  }

  /** A template for building resources (0..*) Never undefined; an empty list is created when absent. */
  getTemplate(): ImplementationGuideDefinitionTemplate[] {
    if (this.template === undefined) {
      this.template = [];
    }
    return this.template;
  }

  setTemplate(template: ImplementationGuideDefinitionTemplate[] | undefined): this {
    return this.setFieldValue('template', template);
  }

  hasTemplate(): boolean {
    return this.hasFieldValue('template');
  }

  /** Appends a new, empty ImplementationGuideDefinitionTemplate to `template` and returns it so it can be filled in. */
  addTemplate(): ImplementationGuideDefinitionTemplate;
  /** Appends the given ImplementationGuideDefinitionTemplate to `template` and returns this object for chaining. */
  addTemplate(implementationGuideDefinitionTemplate: ImplementationGuideDefinitionTemplate): this;
  addTemplate(
    implementationGuideDefinitionTemplate?: ImplementationGuideDefinitionTemplate
  ): ImplementationGuideDefinitionTemplate | this {
    if (implementationGuideDefinitionTemplate !== undefined) {
      return this.addFieldValue('template', implementationGuideDefinitionTemplate);
    }
    const createdImplementationGuideDefinitionTemplate =
      new ImplementationGuideDefinitionTemplate();
    this.addFieldValue('template', createdImplementationGuideDefinitionTemplate);
    return createdImplementationGuideDefinitionTemplate;
  }

  /** The first ImplementationGuideDefinitionTemplate of `template`. One is added when the list is empty. */
  getTemplateFirstRep(): ImplementationGuideDefinitionTemplate {
    const firstImplementationGuideDefinitionTemplate = this.getTemplate()[0];
    return firstImplementationGuideDefinitionTemplate === undefined
      ? this.addTemplate()
      : firstImplementationGuideDefinitionTemplate;
  }
}

modelTypeRegistry.register('ImplementationGuideDefinition', ImplementationGuideDefinition, false);

/**
 * Grouping used to present related resources in the IG
 */
export class ImplementationGuideDefinitionGrouping extends BackboneElement {
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
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
  ];

  /** Descriptive name for the package (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Human readable text describing the package (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'ImplementationGuide.definition.grouping';
  }

  /** FHIR JSON for this ImplementationGuideDefinitionGrouping, typed as the plain `ImplementationGuideGrouping` data type. */
  override toJSON(): plainTypes.ImplementationGuideGrouping {
    return this.serialize() as plainTypes.ImplementationGuideGrouping;
  }

  /** Descriptive name for the package (1..1) */
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
  'ImplementationGuideDefinitionGrouping',
  ImplementationGuideDefinitionGrouping,
  false
);

/**
 * Resource in the implementation guide
 */
export class ImplementationGuideDefinitionResource extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'Reference' }],
    },
    {
      elementName: 'fhirVersion',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'fhirVersion', typeCode: 'code', allowedCodes: valueSetCodes.FHIRVersion },
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
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'isExample',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isExample', typeCode: 'boolean' }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
    {
      elementName: 'groupingId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'groupingId', typeCode: 'id' }],
    },
  ];

  /** Location of the resource (1..1) */
  reference?: Reference;

  /** Versions this applies to (if different to IG) (0..*) */
  fhirVersion?: valueSetCodes.FHIRVersion[];
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: (Element | null)[];

  /** Human readable name for the resource (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Reason why included in guide (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Is this an example (0..1) */
  isExample?: boolean;
  /** Id and extensions of the primitive `isExample`. */
  _isExample?: Element;

  /** Profile(s) this is an example of (0..*) */
  profile?: string[];
  /** Id and extensions of the primitive `profile`. */
  _profile?: (Element | null)[];

  /** Grouping this is part of (0..1) */
  groupingId?: string;
  /** Id and extensions of the primitive `groupingId`. */
  _groupingId?: Element;

  override fhirType(): string {
    return 'ImplementationGuide.definition.resource';
  }

  /** FHIR JSON for this ImplementationGuideDefinitionResource, typed as the plain `ImplementationGuideResource` data type. */
  override toJSON(): plainTypes.ImplementationGuideResource {
    return this.serialize() as plainTypes.ImplementationGuideResource;
  }

  /** Location of the resource (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** Versions this applies to (if different to IG) (0..*) Never undefined; an empty list is created when absent. */
  getFhirVersion(): valueSetCodes.FHIRVersion[] {
    if (this.fhirVersion === undefined) {
      this.fhirVersion = [];
    }
    return this.fhirVersion;
  }

  setFhirVersion(fhirVersion: valueSetCodes.FHIRVersion[] | undefined): this {
    return this.setFieldValue('fhirVersion', fhirVersion);
  }

  hasFhirVersion(): boolean {
    return this.hasFieldValue('fhirVersion');
  }

  /** Appends one value to `fhirVersion`. Throws a FhirModelError when it is not a valid FHIR code. */
  addFhirVersion(fhirVersion: valueSetCodes.FHIRVersion): this {
    return this.addFieldValue('fhirVersion', fhirVersion);
  }

  /** Human readable name for the resource (0..1) */
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

  /** Is this an example (0..1) */
  getIsExample(): boolean | undefined {
    return this.isExample;
  }

  /** Sets `isExample`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsExample(isExample: boolean | undefined): this {
    return this.setFieldValue('isExample', isExample);
  }

  hasIsExample(): boolean {
    return this.hasFieldValue('isExample');
  }

  /** The element carrying the id and extensions of `isExample`. Created when absent. */
  getIsExampleElement(): Element {
    if (this._isExample === undefined) {
      this._isExample = new Element();
    }
    return this._isExample;
  }

  setIsExampleElement(isExampleElement: Element | undefined): this {
    this._isExample = isExampleElement;
    return this;
  }

  /** Profile(s) this is an example of (0..*) Never undefined; an empty list is created when absent. */
  getProfile(): string[] {
    if (this.profile === undefined) {
      this.profile = [];
    }
    return this.profile;
  }

  setProfile(profile: string[] | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** Appends one value to `profile`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addProfile(profile: string): this {
    return this.addFieldValue('profile', profile);
  }

  /** Grouping this is part of (0..1) */
  getGroupingId(): string | undefined {
    return this.groupingId;
  }

  /** Sets `groupingId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setGroupingId(groupingId: string | undefined): this {
    return this.setFieldValue('groupingId', groupingId);
  }

  hasGroupingId(): boolean {
    return this.hasFieldValue('groupingId');
  }

  /** The element carrying the id and extensions of `groupingId`. Created when absent. */
  getGroupingIdElement(): Element {
    if (this._groupingId === undefined) {
      this._groupingId = new Element();
    }
    return this._groupingId;
  }

  setGroupingIdElement(groupingIdElement: Element | undefined): this {
    this._groupingId = groupingIdElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ImplementationGuideDefinitionResource',
  ImplementationGuideDefinitionResource,
  false
);

/**
 * Page/Section in the Guide
 */
export class ImplementationGuideDefinitionPage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sourceUrl', typeCode: 'url' },
        { jsonKey: 'sourceString', typeCode: 'string' },
        { jsonKey: 'sourceMarkdown', typeCode: 'markdown' },
      ],
    },
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'url' }],
    },
    {
      elementName: 'title',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'generation',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'generation',
          typeCode: 'code',
          allowedCodes: valueSetCodes.GuidePageGeneration,
        },
      ],
    },
    {
      elementName: 'page',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'page', typeCode: 'ImplementationGuideDefinitionPage' }],
    },
  ];

  /** Source for page (0..1) */
  sourceUrl?: string;
  /** Id and extensions of the primitive `sourceUrl`. */
  _sourceUrl?: Element;
  /** Source for page (0..1) */
  sourceString?: string;
  /** Id and extensions of the primitive `sourceString`. */
  _sourceString?: Element;
  /** Source for page (0..1) */
  sourceMarkdown?: string;
  /** Id and extensions of the primitive `sourceMarkdown`. */
  _sourceMarkdown?: Element;

  /** Name of the page when published (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Short title shown for navigational assistance (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** html | markdown | xml | generated (1..1) */
  generation?: valueSetCodes.GuidePageGeneration;
  /** Id and extensions of the primitive `generation`. */
  _generation?: Element;

  /** Nested Pages / Sections (0..*) */
  page?: ImplementationGuideDefinitionPage[];

  override fhirType(): string {
    return 'ImplementationGuide.definition.page';
  }

  /** FHIR JSON for this ImplementationGuideDefinitionPage, typed as the plain `ImplementationGuidePage` data type. */
  override toJSON(): plainTypes.ImplementationGuidePage {
    return this.serialize() as plainTypes.ImplementationGuidePage;
  }

  /** Source for page (0..1) Whichever type of `source[x]` is set. */
  getSource(): string | undefined {
    return this.getChoiceValue<string>('source');
  }

  /** True when any type of `source[x]` is set. */
  hasSource(): boolean {
    return this.hasChoiceValue('source');
  }

  getSourceUrl(): string | undefined {
    return this.sourceUrl;
  }

  /** Sets `source[x]` as url and clears every other type of it. */
  setSourceUrl(sourceUrl: string | undefined): this {
    return this.setFieldValue('sourceUrl', sourceUrl);
  }

  hasSourceUrl(): boolean {
    return this.hasFieldValue('sourceUrl');
  }

  getSourceString(): string | undefined {
    return this.sourceString;
  }

  /** Sets `source[x]` as string and clears every other type of it. */
  setSourceString(sourceString: string | undefined): this {
    return this.setFieldValue('sourceString', sourceString);
  }

  hasSourceString(): boolean {
    return this.hasFieldValue('sourceString');
  }

  getSourceMarkdown(): string | undefined {
    return this.sourceMarkdown;
  }

  /** Sets `source[x]` as markdown and clears every other type of it. */
  setSourceMarkdown(sourceMarkdown: string | undefined): this {
    return this.setFieldValue('sourceMarkdown', sourceMarkdown);
  }

  hasSourceMarkdown(): boolean {
    return this.hasFieldValue('sourceMarkdown');
  }

  /** Name of the page when published (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR url. */
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

  /** html | markdown | xml | generated (1..1) */
  getGeneration(): valueSetCodes.GuidePageGeneration | undefined {
    return this.generation;
  }

  /** Sets `generation`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setGeneration(generation: valueSetCodes.GuidePageGeneration | undefined): this {
    return this.setFieldValue('generation', generation);
  }

  hasGeneration(): boolean {
    return this.hasFieldValue('generation');
  }

  /** The element carrying the id and extensions of `generation`. Created when absent. */
  getGenerationElement(): Element {
    if (this._generation === undefined) {
      this._generation = new Element();
    }
    return this._generation;
  }

  setGenerationElement(generationElement: Element | undefined): this {
    this._generation = generationElement;
    return this;
  }

  /** Nested Pages / Sections (0..*) Never undefined; an empty list is created when absent. */
  getPage(): ImplementationGuideDefinitionPage[] {
    if (this.page === undefined) {
      this.page = [];
    }
    return this.page;
  }

  setPage(page: ImplementationGuideDefinitionPage[] | undefined): this {
    return this.setFieldValue('page', page);
  }

  hasPage(): boolean {
    return this.hasFieldValue('page');
  }

  /** Appends a new, empty ImplementationGuideDefinitionPage to `page` and returns it so it can be filled in. */
  addPage(): ImplementationGuideDefinitionPage;
  /** Appends the given ImplementationGuideDefinitionPage to `page` and returns this object for chaining. */
  addPage(implementationGuideDefinitionPage: ImplementationGuideDefinitionPage): this;
  addPage(
    implementationGuideDefinitionPage?: ImplementationGuideDefinitionPage
  ): ImplementationGuideDefinitionPage | this {
    if (implementationGuideDefinitionPage !== undefined) {
      return this.addFieldValue('page', implementationGuideDefinitionPage);
    }
    const createdImplementationGuideDefinitionPage = new ImplementationGuideDefinitionPage();
    this.addFieldValue('page', createdImplementationGuideDefinitionPage);
    return createdImplementationGuideDefinitionPage;
  }

  /** The first ImplementationGuideDefinitionPage of `page`. One is added when the list is empty. */
  getPageFirstRep(): ImplementationGuideDefinitionPage {
    const firstImplementationGuideDefinitionPage = this.getPage()[0];
    return firstImplementationGuideDefinitionPage === undefined
      ? this.addPage()
      : firstImplementationGuideDefinitionPage;
  }
}

modelTypeRegistry.register(
  'ImplementationGuideDefinitionPage',
  ImplementationGuideDefinitionPage,
  false
);

/**
 * Defines how IG is built by tools
 */
export class ImplementationGuideDefinitionParameter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'Coding' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** Code that identifies parameter (1..1) */
  code?: Coding;

  /** Value for named type (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'ImplementationGuide.definition.parameter';
  }

  /** FHIR JSON for this ImplementationGuideDefinitionParameter, typed as the plain `ImplementationGuideParameter` data type. */
  override toJSON(): plainTypes.ImplementationGuideParameter {
    return this.serialize() as plainTypes.ImplementationGuideParameter;
  }

  /** Code that identifies parameter (1..1) Created when absent. */
  getCode(): Coding {
    if (this.code === undefined) {
      this.code = new Coding();
    }
    return this.code;
  }

  setCode(code: Coding | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Value for named type (1..1) */
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
  'ImplementationGuideDefinitionParameter',
  ImplementationGuideDefinitionParameter,
  false
);

/**
 * A template for building resources
 */
export class ImplementationGuideDefinitionTemplate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'source',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'string' }],
    },
    {
      elementName: 'scope',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scope', typeCode: 'string' }],
    },
  ];

  /** Type of template specified (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** The source location for the template (1..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;

  /** The scope in which the template applies (0..1) */
  scope?: string;
  /** Id and extensions of the primitive `scope`. */
  _scope?: Element;

  override fhirType(): string {
    return 'ImplementationGuide.definition.template';
  }

  /** FHIR JSON for this ImplementationGuideDefinitionTemplate, typed as the plain `ImplementationGuideTemplate` data type. */
  override toJSON(): plainTypes.ImplementationGuideTemplate {
    return this.serialize() as plainTypes.ImplementationGuideTemplate;
  }

  /** Type of template specified (1..1) */
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

  /** The source location for the template (1..1) */
  getSource(): string | undefined {
    return this.source;
  }

  /** Sets `source`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

  /** The scope in which the template applies (0..1) */
  getScope(): string | undefined {
    return this.scope;
  }

  /** Sets `scope`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setScope(scope: string | undefined): this {
    return this.setFieldValue('scope', scope);
  }

  hasScope(): boolean {
    return this.hasFieldValue('scope');
  }

  /** The element carrying the id and extensions of `scope`. Created when absent. */
  getScopeElement(): Element {
    if (this._scope === undefined) {
      this._scope = new Element();
    }
    return this._scope;
  }

  setScopeElement(scopeElement: Element | undefined): this {
    this._scope = scopeElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ImplementationGuideDefinitionTemplate',
  ImplementationGuideDefinitionTemplate,
  false
);

/**
 * Information about an assembled IG
 */
export class ImplementationGuideManifest extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'rendering',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rendering', typeCode: 'url' }],
    },
    {
      elementName: 'resource',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'resource', typeCode: 'ImplementationGuideManifestResource' }],
    },
    {
      elementName: 'page',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'page', typeCode: 'ImplementationGuideManifestPage' }],
    },
    {
      elementName: 'image',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'image', typeCode: 'string' }],
    },
    {
      elementName: 'other',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'other', typeCode: 'string' }],
    },
  ];

  /** Location of rendered implementation guide (0..1) */
  rendering?: string;
  /** Id and extensions of the primitive `rendering`. */
  _rendering?: Element;

  /** Resource in the implementation guide (1..*) */
  resource?: ImplementationGuideManifestResource[];

  /** HTML page within the parent IG (0..*) */
  page?: ImplementationGuideManifestPage[];

  /** Image within the IG (0..*) */
  image?: string[];
  /** Id and extensions of the primitive `image`. */
  _image?: (Element | null)[];

  /** Additional linkable file in IG (0..*) */
  other?: string[];
  /** Id and extensions of the primitive `other`. */
  _other?: (Element | null)[];

  override fhirType(): string {
    return 'ImplementationGuide.manifest';
  }

  /** FHIR JSON for this ImplementationGuideManifest, typed as the plain `ImplementationGuideManifest` data type. */
  override toJSON(): plainTypes.ImplementationGuideManifest {
    return this.serialize() as plainTypes.ImplementationGuideManifest;
  }

  /** Location of rendered implementation guide (0..1) */
  getRendering(): string | undefined {
    return this.rendering;
  }

  /** Sets `rendering`. Throws a FhirModelError when the value is not a valid FHIR url. */
  setRendering(rendering: string | undefined): this {
    return this.setFieldValue('rendering', rendering);
  }

  hasRendering(): boolean {
    return this.hasFieldValue('rendering');
  }

  /** The element carrying the id and extensions of `rendering`. Created when absent. */
  getRenderingElement(): Element {
    if (this._rendering === undefined) {
      this._rendering = new Element();
    }
    return this._rendering;
  }

  setRenderingElement(renderingElement: Element | undefined): this {
    this._rendering = renderingElement;
    return this;
  }

  /** Resource in the implementation guide (1..*) Never undefined; an empty list is created when absent. */
  getResource(): ImplementationGuideManifestResource[] {
    if (this.resource === undefined) {
      this.resource = [];
    }
    return this.resource;
  }

  setResource(resource: ImplementationGuideManifestResource[] | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** Appends a new, empty ImplementationGuideManifestResource to `resource` and returns it so it can be filled in. */
  addResource(): ImplementationGuideManifestResource;
  /** Appends the given ImplementationGuideManifestResource to `resource` and returns this object for chaining. */
  addResource(implementationGuideManifestResource: ImplementationGuideManifestResource): this;
  addResource(
    implementationGuideManifestResource?: ImplementationGuideManifestResource
  ): ImplementationGuideManifestResource | this {
    if (implementationGuideManifestResource !== undefined) {
      return this.addFieldValue('resource', implementationGuideManifestResource);
    }
    const createdImplementationGuideManifestResource = new ImplementationGuideManifestResource();
    this.addFieldValue('resource', createdImplementationGuideManifestResource);
    return createdImplementationGuideManifestResource;
  }

  /** The first ImplementationGuideManifestResource of `resource`. One is added when the list is empty. */
  getResourceFirstRep(): ImplementationGuideManifestResource {
    const firstImplementationGuideManifestResource = this.getResource()[0];
    return firstImplementationGuideManifestResource === undefined
      ? this.addResource()
      : firstImplementationGuideManifestResource;
  }

  /** HTML page within the parent IG (0..*) Never undefined; an empty list is created when absent. */
  getPage(): ImplementationGuideManifestPage[] {
    if (this.page === undefined) {
      this.page = [];
    }
    return this.page;
  }

  setPage(page: ImplementationGuideManifestPage[] | undefined): this {
    return this.setFieldValue('page', page);
  }

  hasPage(): boolean {
    return this.hasFieldValue('page');
  }

  /** Appends a new, empty ImplementationGuideManifestPage to `page` and returns it so it can be filled in. */
  addPage(): ImplementationGuideManifestPage;
  /** Appends the given ImplementationGuideManifestPage to `page` and returns this object for chaining. */
  addPage(implementationGuideManifestPage: ImplementationGuideManifestPage): this;
  addPage(
    implementationGuideManifestPage?: ImplementationGuideManifestPage
  ): ImplementationGuideManifestPage | this {
    if (implementationGuideManifestPage !== undefined) {
      return this.addFieldValue('page', implementationGuideManifestPage);
    }
    const createdImplementationGuideManifestPage = new ImplementationGuideManifestPage();
    this.addFieldValue('page', createdImplementationGuideManifestPage);
    return createdImplementationGuideManifestPage;
  }

  /** The first ImplementationGuideManifestPage of `page`. One is added when the list is empty. */
  getPageFirstRep(): ImplementationGuideManifestPage {
    const firstImplementationGuideManifestPage = this.getPage()[0];
    return firstImplementationGuideManifestPage === undefined
      ? this.addPage()
      : firstImplementationGuideManifestPage;
  }

  /** Image within the IG (0..*) Never undefined; an empty list is created when absent. */
  getImage(): string[] {
    if (this.image === undefined) {
      this.image = [];
    }
    return this.image;
  }

  setImage(image: string[] | undefined): this {
    return this.setFieldValue('image', image);
  }

  hasImage(): boolean {
    return this.hasFieldValue('image');
  }

  /** Appends one value to `image`. Throws a FhirModelError when it is not a valid FHIR string. */
  addImage(image: string): this {
    return this.addFieldValue('image', image);
  }

  /** Additional linkable file in IG (0..*) Never undefined; an empty list is created when absent. */
  getOther(): string[] {
    if (this.other === undefined) {
      this.other = [];
    }
    return this.other;
  }

  setOther(other: string[] | undefined): this {
    return this.setFieldValue('other', other);
  }

  hasOther(): boolean {
    return this.hasFieldValue('other');
  }

  /** Appends one value to `other`. Throws a FhirModelError when it is not a valid FHIR string. */
  addOther(other: string): this {
    return this.addFieldValue('other', other);
  }
}

modelTypeRegistry.register('ImplementationGuideManifest', ImplementationGuideManifest, false);

/**
 * Resource in the implementation guide
 */
export class ImplementationGuideManifestResource extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'Reference' }],
    },
    {
      elementName: 'isExample',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isExample', typeCode: 'boolean' }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
    {
      elementName: 'relativePath',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relativePath', typeCode: 'url' }],
    },
  ];

  /** Location of the resource (1..1) */
  reference?: Reference;

  /** Is this an example (0..1) */
  isExample?: boolean;
  /** Id and extensions of the primitive `isExample`. */
  _isExample?: Element;

  /** Profile(s) this is an example of (0..*) */
  profile?: string[];
  /** Id and extensions of the primitive `profile`. */
  _profile?: (Element | null)[];

  /** Relative path for page in IG (0..1) */
  relativePath?: string;
  /** Id and extensions of the primitive `relativePath`. */
  _relativePath?: Element;

  override fhirType(): string {
    return 'ImplementationGuide.manifest.resource';
  }

  /** FHIR JSON for this ImplementationGuideManifestResource, typed as the plain `ImplementationGuideResource1` data type. */
  override toJSON(): plainTypes.ImplementationGuideResource1 {
    return this.serialize() as plainTypes.ImplementationGuideResource1;
  }

  /** Location of the resource (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** Is this an example (0..1) */
  getIsExample(): boolean | undefined {
    return this.isExample;
  }

  /** Sets `isExample`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsExample(isExample: boolean | undefined): this {
    return this.setFieldValue('isExample', isExample);
  }

  hasIsExample(): boolean {
    return this.hasFieldValue('isExample');
  }

  /** The element carrying the id and extensions of `isExample`. Created when absent. */
  getIsExampleElement(): Element {
    if (this._isExample === undefined) {
      this._isExample = new Element();
    }
    return this._isExample;
  }

  setIsExampleElement(isExampleElement: Element | undefined): this {
    this._isExample = isExampleElement;
    return this;
  }

  /** Profile(s) this is an example of (0..*) Never undefined; an empty list is created when absent. */
  getProfile(): string[] {
    if (this.profile === undefined) {
      this.profile = [];
    }
    return this.profile;
  }

  setProfile(profile: string[] | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** Appends one value to `profile`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addProfile(profile: string): this {
    return this.addFieldValue('profile', profile);
  }

  /** Relative path for page in IG (0..1) */
  getRelativePath(): string | undefined {
    return this.relativePath;
  }

  /** Sets `relativePath`. Throws a FhirModelError when the value is not a valid FHIR url. */
  setRelativePath(relativePath: string | undefined): this {
    return this.setFieldValue('relativePath', relativePath);
  }

  hasRelativePath(): boolean {
    return this.hasFieldValue('relativePath');
  }

  /** The element carrying the id and extensions of `relativePath`. Created when absent. */
  getRelativePathElement(): Element {
    if (this._relativePath === undefined) {
      this._relativePath = new Element();
    }
    return this._relativePath;
  }

  setRelativePathElement(relativePathElement: Element | undefined): this {
    this._relativePath = relativePathElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ImplementationGuideManifestResource',
  ImplementationGuideManifestResource,
  false
);

/**
 * HTML page within the parent IG
 */
export class ImplementationGuideManifestPage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'anchor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'anchor', typeCode: 'string' }],
    },
  ];

  /** HTML page name (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Title of the page, for references (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Anchor available on the page (0..*) */
  anchor?: string[];
  /** Id and extensions of the primitive `anchor`. */
  _anchor?: (Element | null)[];

  override fhirType(): string {
    return 'ImplementationGuide.manifest.page';
  }

  /** FHIR JSON for this ImplementationGuideManifestPage, typed as the plain `ImplementationGuidePage1` data type. */
  override toJSON(): plainTypes.ImplementationGuidePage1 {
    return this.serialize() as plainTypes.ImplementationGuidePage1;
  }

  /** HTML page name (1..1) */
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

  /** Title of the page, for references (0..1) */
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

  /** Anchor available on the page (0..*) Never undefined; an empty list is created when absent. */
  getAnchor(): string[] {
    if (this.anchor === undefined) {
      this.anchor = [];
    }
    return this.anchor;
  }

  setAnchor(anchor: string[] | undefined): this {
    return this.setFieldValue('anchor', anchor);
  }

  hasAnchor(): boolean {
    return this.hasFieldValue('anchor');
  }

  /** Appends one value to `anchor`. Throws a FhirModelError when it is not a valid FHIR string. */
  addAnchor(anchor: string): this {
    return this.addFieldValue('anchor', anchor);
  }
}

modelTypeRegistry.register(
  'ImplementationGuideManifestPage',
  ImplementationGuideManifestPage,
  false
);
