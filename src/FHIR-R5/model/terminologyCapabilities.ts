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
import { UsageContext } from './usageContext';

/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export class TerminologyCapabilities extends DomainResource {
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
      elementName: 'copyrightLabel',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyrightLabel', typeCode: 'string' }],
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
      elementName: 'software',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'software', typeCode: 'TerminologyCapabilitiesSoftware' }],
    },
    {
      elementName: 'implementation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'implementation', typeCode: 'TerminologyCapabilitiesImplementation' }],
    },
    {
      elementName: 'lockedDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lockedDate', typeCode: 'boolean' }],
    },
    {
      elementName: 'codeSystem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'codeSystem', typeCode: 'TerminologyCapabilitiesCodeSystem' }],
    },
    {
      elementName: 'expansion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expansion', typeCode: 'TerminologyCapabilitiesExpansion' }],
    },
    {
      elementName: 'codeSearch',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'codeSearch', typeCode: 'code', allowedCodes: valueSetCodes.CodeSearchSupport },
      ],
    },
    {
      elementName: 'validateCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validateCode', typeCode: 'TerminologyCapabilitiesValidateCode' }],
    },
    {
      elementName: 'translation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'translation', typeCode: 'TerminologyCapabilitiesTranslation' }],
    },
    {
      elementName: 'closure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'closure', typeCode: 'TerminologyCapabilitiesClosure' }],
    },
  ];

  readonly resourceType = 'TerminologyCapabilities';

  /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the terminology capabilities (0..*) */
  identifier?: Identifier[];

  /** Business version of the terminology capabilities (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this terminology capabilities (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this terminology capabilities (human friendly) (0..1) */
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

  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the terminology capabilities (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for terminology capabilities (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this terminology capabilities is defined (0..1) */
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

  /** instance | capability | requirements (1..1) */
  kind?: valueSetCodes.CapabilityStatementKind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Software that is covered by this terminology capability statement (0..1) */
  software?: TerminologyCapabilitiesSoftware;

  /** If this describes a specific instance (0..1) */
  implementation?: TerminologyCapabilitiesImplementation;

  /** Whether lockedDate is supported (0..1) */
  lockedDate?: boolean;
  /** Id and extensions of the primitive `lockedDate`. */
  _lockedDate?: Element;

  /** A code system supported by the server (0..*) */
  codeSystem?: TerminologyCapabilitiesCodeSystem[];

  /** Information about the [ValueSet/$expand](valueset-operation-expand.html) operation (0..1) */
  expansion?: TerminologyCapabilitiesExpansion;

  /** in-compose | in-expansion | in-compose-or-expansion (0..1) */
  codeSearch?: valueSetCodes.CodeSearchSupport;
  /** Id and extensions of the primitive `codeSearch`. */
  _codeSearch?: Element;

  /** Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation (0..1) */
  validateCode?: TerminologyCapabilitiesValidateCode;

  /** Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation (0..1) */
  translation?: TerminologyCapabilitiesTranslation;

  /** Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation (0..1) */
  closure?: TerminologyCapabilitiesClosure;

  override fhirType(): string {
    return 'TerminologyCapabilities';
  }

  /** FHIR JSON for this TerminologyCapabilities, typed as the plain `TerminologyCapabilities` data type. */
  override toJSON(): plainTypes.TerminologyCapabilities {
    return this.serialize() as plainTypes.TerminologyCapabilities;
  }

  /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the terminology capabilities (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the terminology capabilities (0..1) */
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

  /** Name for this terminology capabilities (computer friendly) (0..1) */
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

  /** Name for this terminology capabilities (human friendly) (0..1) */
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

  /** Natural language description of the terminology capabilities (0..1) */
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

  /** Intended jurisdiction for terminology capabilities (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this terminology capabilities is defined (0..1) */
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

  /** Software that is covered by this terminology capability statement (0..1) Created when absent. */
  getSoftware(): TerminologyCapabilitiesSoftware {
    if (this.software === undefined) {
      this.software = new TerminologyCapabilitiesSoftware();
    }
    return this.software;
  }

  setSoftware(software: TerminologyCapabilitiesSoftware | undefined): this {
    return this.setFieldValue('software', software);
  }

  hasSoftware(): boolean {
    return this.hasFieldValue('software');
  }

  /** If this describes a specific instance (0..1) Created when absent. */
  getImplementation(): TerminologyCapabilitiesImplementation {
    if (this.implementation === undefined) {
      this.implementation = new TerminologyCapabilitiesImplementation();
    }
    return this.implementation;
  }

  setImplementation(implementation: TerminologyCapabilitiesImplementation | undefined): this {
    return this.setFieldValue('implementation', implementation);
  }

  hasImplementation(): boolean {
    return this.hasFieldValue('implementation');
  }

  /** Whether lockedDate is supported (0..1) */
  getLockedDate(): boolean | undefined {
    return this.lockedDate;
  }

  /** Sets `lockedDate`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setLockedDate(lockedDate: boolean | undefined): this {
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

  /** A code system supported by the server (0..*) Never undefined; an empty list is created when absent. */
  getCodeSystem(): TerminologyCapabilitiesCodeSystem[] {
    if (this.codeSystem === undefined) {
      this.codeSystem = [];
    }
    return this.codeSystem;
  }

  setCodeSystem(codeSystem: TerminologyCapabilitiesCodeSystem[] | undefined): this {
    return this.setFieldValue('codeSystem', codeSystem);
  }

  hasCodeSystem(): boolean {
    return this.hasFieldValue('codeSystem');
  }

  /** Appends a new, empty TerminologyCapabilitiesCodeSystem to `codeSystem` and returns it so it can be filled in. */
  addCodeSystem(): TerminologyCapabilitiesCodeSystem;
  /** Appends the given TerminologyCapabilitiesCodeSystem to `codeSystem` and returns this object for chaining. */
  addCodeSystem(terminologyCapabilitiesCodeSystem: TerminologyCapabilitiesCodeSystem): this;
  addCodeSystem(
    terminologyCapabilitiesCodeSystem?: TerminologyCapabilitiesCodeSystem
  ): TerminologyCapabilitiesCodeSystem | this {
    if (terminologyCapabilitiesCodeSystem !== undefined) {
      return this.addFieldValue('codeSystem', terminologyCapabilitiesCodeSystem);
    }
    const createdTerminologyCapabilitiesCodeSystem = new TerminologyCapabilitiesCodeSystem();
    this.addFieldValue('codeSystem', createdTerminologyCapabilitiesCodeSystem);
    return createdTerminologyCapabilitiesCodeSystem;
  }

  /** The first TerminologyCapabilitiesCodeSystem of `codeSystem`. One is added when the list is empty. */
  getCodeSystemFirstRep(): TerminologyCapabilitiesCodeSystem {
    const firstTerminologyCapabilitiesCodeSystem = this.getCodeSystem()[0];
    return firstTerminologyCapabilitiesCodeSystem === undefined
      ? this.addCodeSystem()
      : firstTerminologyCapabilitiesCodeSystem;
  }

  /** Information about the [ValueSet/$expand](valueset-operation-expand.html) operation (0..1) Created when absent. */
  getExpansion(): TerminologyCapabilitiesExpansion {
    if (this.expansion === undefined) {
      this.expansion = new TerminologyCapabilitiesExpansion();
    }
    return this.expansion;
  }

  setExpansion(expansion: TerminologyCapabilitiesExpansion | undefined): this {
    return this.setFieldValue('expansion', expansion);
  }

  hasExpansion(): boolean {
    return this.hasFieldValue('expansion');
  }

  /** in-compose | in-expansion | in-compose-or-expansion (0..1) */
  getCodeSearch(): valueSetCodes.CodeSearchSupport | undefined {
    return this.codeSearch;
  }

  /** Sets `codeSearch`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCodeSearch(codeSearch: valueSetCodes.CodeSearchSupport | undefined): this {
    return this.setFieldValue('codeSearch', codeSearch);
  }

  hasCodeSearch(): boolean {
    return this.hasFieldValue('codeSearch');
  }

  /** The element carrying the id and extensions of `codeSearch`. Created when absent. */
  getCodeSearchElement(): Element {
    if (this._codeSearch === undefined) {
      this._codeSearch = new Element();
    }
    return this._codeSearch;
  }

  setCodeSearchElement(codeSearchElement: Element | undefined): this {
    this._codeSearch = codeSearchElement;
    return this;
  }

  /** Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation (0..1) Created when absent. */
  getValidateCode(): TerminologyCapabilitiesValidateCode {
    if (this.validateCode === undefined) {
      this.validateCode = new TerminologyCapabilitiesValidateCode();
    }
    return this.validateCode;
  }

  setValidateCode(validateCode: TerminologyCapabilitiesValidateCode | undefined): this {
    return this.setFieldValue('validateCode', validateCode);
  }

  hasValidateCode(): boolean {
    return this.hasFieldValue('validateCode');
  }

  /** Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation (0..1) Created when absent. */
  getTranslation(): TerminologyCapabilitiesTranslation {
    if (this.translation === undefined) {
      this.translation = new TerminologyCapabilitiesTranslation();
    }
    return this.translation;
  }

  setTranslation(translation: TerminologyCapabilitiesTranslation | undefined): this {
    return this.setFieldValue('translation', translation);
  }

  hasTranslation(): boolean {
    return this.hasFieldValue('translation');
  }

  /** Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation (0..1) Created when absent. */
  getClosure(): TerminologyCapabilitiesClosure {
    if (this.closure === undefined) {
      this.closure = new TerminologyCapabilitiesClosure();
    }
    return this.closure;
  }

  setClosure(closure: TerminologyCapabilitiesClosure | undefined): this {
    return this.setFieldValue('closure', closure);
  }

  hasClosure(): boolean {
    return this.hasFieldValue('closure');
  }
}

modelTypeRegistry.register('TerminologyCapabilities', TerminologyCapabilities, true);

/** True when the value is a TerminologyCapabilities model instance. */
export function isTerminologyCapabilities(
  candidate: unknown
): candidate is TerminologyCapabilities {
  return candidate instanceof TerminologyCapabilities;
}

/**
 * Software that is covered by this terminology capability statement
 */
export class TerminologyCapabilitiesSoftware extends BackboneElement {
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
  ];

  /** A name the software is known by (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Version covered by this statement (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  override fhirType(): string {
    return 'TerminologyCapabilities.software';
  }

  /** FHIR JSON for this TerminologyCapabilitiesSoftware, typed as the plain `TerminologyCapabilitiesSoftware` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesSoftware {
    return this.serialize() as plainTypes.TerminologyCapabilitiesSoftware;
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
}

modelTypeRegistry.register(
  'TerminologyCapabilitiesSoftware',
  TerminologyCapabilitiesSoftware,
  false
);

/**
 * If this describes a specific instance
 */
export class TerminologyCapabilitiesImplementation extends BackboneElement {
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
  ];

  /** Describes this specific instance (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Base URL for the implementation (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  override fhirType(): string {
    return 'TerminologyCapabilities.implementation';
  }

  /** FHIR JSON for this TerminologyCapabilitiesImplementation, typed as the plain `TerminologyCapabilitiesImplementation` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesImplementation {
    return this.serialize() as plainTypes.TerminologyCapabilitiesImplementation;
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

  /** Base URL for the implementation (0..1) */
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
}

modelTypeRegistry.register(
  'TerminologyCapabilitiesImplementation',
  TerminologyCapabilitiesImplementation,
  false
);

/**
 * A code system supported by the server
 */
export class TerminologyCapabilitiesCodeSystem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'uri',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uri', typeCode: 'canonical' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'version', typeCode: 'TerminologyCapabilitiesCodeSystemVersion' }],
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
      elementName: 'subsumption',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subsumption', typeCode: 'boolean' }],
    },
  ];

  /** Canonical identifier for the code system, represented as a URI (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;

  /** Version of Code System supported (0..*) */
  version?: TerminologyCapabilitiesCodeSystemVersion[];

  /** not-present | example | fragment | complete | supplement (1..1) */
  content?: valueSetCodes.CodeSystemContentMode;
  /** Id and extensions of the primitive `content`. */
  _content?: Element;

  /** Whether subsumption is supported (0..1) */
  subsumption?: boolean;
  /** Id and extensions of the primitive `subsumption`. */
  _subsumption?: Element;

  override fhirType(): string {
    return 'TerminologyCapabilities.codeSystem';
  }

  /** FHIR JSON for this TerminologyCapabilitiesCodeSystem, typed as the plain `TerminologyCapabilitiesCodeSystem` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesCodeSystem {
    return this.serialize() as plainTypes.TerminologyCapabilitiesCodeSystem;
  }

  /** Canonical identifier for the code system, represented as a URI (0..1) */
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

  /** Version of Code System supported (0..*) Never undefined; an empty list is created when absent. */
  getVersion(): TerminologyCapabilitiesCodeSystemVersion[] {
    if (this.version === undefined) {
      this.version = [];
    }
    return this.version;
  }

  setVersion(version: TerminologyCapabilitiesCodeSystemVersion[] | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** Appends a new, empty TerminologyCapabilitiesCodeSystemVersion to `version` and returns it so it can be filled in. */
  addVersion(): TerminologyCapabilitiesCodeSystemVersion;
  /** Appends the given TerminologyCapabilitiesCodeSystemVersion to `version` and returns this object for chaining. */
  addVersion(
    terminologyCapabilitiesCodeSystemVersion: TerminologyCapabilitiesCodeSystemVersion
  ): this;
  addVersion(
    terminologyCapabilitiesCodeSystemVersion?: TerminologyCapabilitiesCodeSystemVersion
  ): TerminologyCapabilitiesCodeSystemVersion | this {
    if (terminologyCapabilitiesCodeSystemVersion !== undefined) {
      return this.addFieldValue('version', terminologyCapabilitiesCodeSystemVersion);
    }
    const createdTerminologyCapabilitiesCodeSystemVersion =
      new TerminologyCapabilitiesCodeSystemVersion();
    this.addFieldValue('version', createdTerminologyCapabilitiesCodeSystemVersion);
    return createdTerminologyCapabilitiesCodeSystemVersion;
  }

  /** The first TerminologyCapabilitiesCodeSystemVersion of `version`. One is added when the list is empty. */
  getVersionFirstRep(): TerminologyCapabilitiesCodeSystemVersion {
    const firstTerminologyCapabilitiesCodeSystemVersion = this.getVersion()[0];
    return firstTerminologyCapabilitiesCodeSystemVersion === undefined
      ? this.addVersion()
      : firstTerminologyCapabilitiesCodeSystemVersion;
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

  /** Whether subsumption is supported (0..1) */
  getSubsumption(): boolean | undefined {
    return this.subsumption;
  }

  /** Sets `subsumption`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setSubsumption(subsumption: boolean | undefined): this {
    return this.setFieldValue('subsumption', subsumption);
  }

  hasSubsumption(): boolean {
    return this.hasFieldValue('subsumption');
  }

  /** The element carrying the id and extensions of `subsumption`. Created when absent. */
  getSubsumptionElement(): Element {
    if (this._subsumption === undefined) {
      this._subsumption = new Element();
    }
    return this._subsumption;
  }

  setSubsumptionElement(subsumptionElement: Element | undefined): this {
    this._subsumption = subsumptionElement;
    return this;
  }
}

modelTypeRegistry.register(
  'TerminologyCapabilitiesCodeSystem',
  TerminologyCapabilitiesCodeSystem,
  false
);

/**
 * Version of Code System supported
 */
export class TerminologyCapabilitiesCodeSystemVersion extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'string' }],
    },
    {
      elementName: 'isDefault',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isDefault', typeCode: 'boolean' }],
    },
    {
      elementName: 'compositional',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'compositional', typeCode: 'boolean' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'language', typeCode: 'code', allowedCodes: valueSetCodes.CommonLanguages },
      ],
    },
    {
      elementName: 'filter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'filter', typeCode: 'TerminologyCapabilitiesCodeSystemVersionFilter' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'code' }],
    },
  ];

  /** Version identifier for this version (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** If this is the default version for this code system (0..1) */
  isDefault?: boolean;
  /** Id and extensions of the primitive `isDefault`. */
  _isDefault?: Element;

  /** If compositional grammar is supported (0..1) */
  compositional?: boolean;
  /** Id and extensions of the primitive `compositional`. */
  _compositional?: Element;

  /** Language Displays supported (0..*) */
  language?: valueSetCodes.CommonLanguages[];
  /** Id and extensions of the primitive `language`. */
  _language?: (Element | null)[];

  /** Filter Properties supported (0..*) */
  filter?: TerminologyCapabilitiesCodeSystemVersionFilter[];

  /** Properties supported for $lookup (0..*) */
  property?: string[];
  /** Id and extensions of the primitive `property`. */
  _property?: (Element | null)[];

  override fhirType(): string {
    return 'TerminologyCapabilities.codeSystem.version';
  }

  /** FHIR JSON for this TerminologyCapabilitiesCodeSystemVersion, typed as the plain `TerminologyCapabilitiesVersion` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesVersion {
    return this.serialize() as plainTypes.TerminologyCapabilitiesVersion;
  }

  /** Version identifier for this version (0..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

  /** If this is the default version for this code system (0..1) */
  getIsDefault(): boolean | undefined {
    return this.isDefault;
  }

  /** Sets `isDefault`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsDefault(isDefault: boolean | undefined): this {
    return this.setFieldValue('isDefault', isDefault);
  }

  hasIsDefault(): boolean {
    return this.hasFieldValue('isDefault');
  }

  /** The element carrying the id and extensions of `isDefault`. Created when absent. */
  getIsDefaultElement(): Element {
    if (this._isDefault === undefined) {
      this._isDefault = new Element();
    }
    return this._isDefault;
  }

  setIsDefaultElement(isDefaultElement: Element | undefined): this {
    this._isDefault = isDefaultElement;
    return this;
  }

  /** If compositional grammar is supported (0..1) */
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

  /** Language Displays supported (0..*) Never undefined; an empty list is created when absent. */
  getLanguage(): valueSetCodes.CommonLanguages[] {
    if (this.language === undefined) {
      this.language = [];
    }
    return this.language;
  }

  setLanguage(language: valueSetCodes.CommonLanguages[] | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** Appends one value to `language`. Throws a FhirModelError when it is not a valid FHIR code. */
  addLanguage(language: valueSetCodes.CommonLanguages): this {
    return this.addFieldValue('language', language);
  }

  /** Filter Properties supported (0..*) Never undefined; an empty list is created when absent. */
  getFilter(): TerminologyCapabilitiesCodeSystemVersionFilter[] {
    if (this.filter === undefined) {
      this.filter = [];
    }
    return this.filter;
  }

  setFilter(filter: TerminologyCapabilitiesCodeSystemVersionFilter[] | undefined): this {
    return this.setFieldValue('filter', filter);
  }

  hasFilter(): boolean {
    return this.hasFieldValue('filter');
  }

  /** Appends a new, empty TerminologyCapabilitiesCodeSystemVersionFilter to `filter` and returns it so it can be filled in. */
  addFilter(): TerminologyCapabilitiesCodeSystemVersionFilter;
  /** Appends the given TerminologyCapabilitiesCodeSystemVersionFilter to `filter` and returns this object for chaining. */
  addFilter(
    terminologyCapabilitiesCodeSystemVersionFilter: TerminologyCapabilitiesCodeSystemVersionFilter
  ): this;
  addFilter(
    terminologyCapabilitiesCodeSystemVersionFilter?: TerminologyCapabilitiesCodeSystemVersionFilter
  ): TerminologyCapabilitiesCodeSystemVersionFilter | this {
    if (terminologyCapabilitiesCodeSystemVersionFilter !== undefined) {
      return this.addFieldValue('filter', terminologyCapabilitiesCodeSystemVersionFilter);
    }
    const createdTerminologyCapabilitiesCodeSystemVersionFilter =
      new TerminologyCapabilitiesCodeSystemVersionFilter();
    this.addFieldValue('filter', createdTerminologyCapabilitiesCodeSystemVersionFilter);
    return createdTerminologyCapabilitiesCodeSystemVersionFilter;
  }

  /** The first TerminologyCapabilitiesCodeSystemVersionFilter of `filter`. One is added when the list is empty. */
  getFilterFirstRep(): TerminologyCapabilitiesCodeSystemVersionFilter {
    const firstTerminologyCapabilitiesCodeSystemVersionFilter = this.getFilter()[0];
    return firstTerminologyCapabilitiesCodeSystemVersionFilter === undefined
      ? this.addFilter()
      : firstTerminologyCapabilitiesCodeSystemVersionFilter;
  }

  /** Properties supported for $lookup (0..*) Never undefined; an empty list is created when absent. */
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

  /** Appends one value to `property`. Throws a FhirModelError when it is not a valid FHIR code. */
  addProperty(property: string): this {
    return this.addFieldValue('property', property);
  }
}

modelTypeRegistry.register(
  'TerminologyCapabilitiesCodeSystemVersion',
  TerminologyCapabilitiesCodeSystemVersion,
  false
);

/**
 * Filter Properties supported
 */
export class TerminologyCapabilitiesCodeSystemVersionFilter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'op',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'op', typeCode: 'code' }],
    },
  ];

  /** Code of the property supported (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Operations supported for the property (1..*) */
  op?: string[];
  /** Id and extensions of the primitive `op`. */
  _op?: (Element | null)[];

  override fhirType(): string {
    return 'TerminologyCapabilities.codeSystem.version.filter';
  }

  /** FHIR JSON for this TerminologyCapabilitiesCodeSystemVersionFilter, typed as the plain `TerminologyCapabilitiesFilter` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesFilter {
    return this.serialize() as plainTypes.TerminologyCapabilitiesFilter;
  }

  /** Code of the property supported (1..1) */
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

  /** Operations supported for the property (1..*) Never undefined; an empty list is created when absent. */
  getOp(): string[] {
    if (this.op === undefined) {
      this.op = [];
    }
    return this.op;
  }

  setOp(op: string[] | undefined): this {
    return this.setFieldValue('op', op);
  }

  hasOp(): boolean {
    return this.hasFieldValue('op');
  }

  /** Appends one value to `op`. Throws a FhirModelError when it is not a valid FHIR code. */
  addOp(op: string): this {
    return this.addFieldValue('op', op);
  }
}

modelTypeRegistry.register(
  'TerminologyCapabilitiesCodeSystemVersionFilter',
  TerminologyCapabilitiesCodeSystemVersionFilter,
  false
);

/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
 */
export class TerminologyCapabilitiesExpansion extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'hierarchical',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hierarchical', typeCode: 'boolean' }],
    },
    {
      elementName: 'paging',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paging', typeCode: 'boolean' }],
    },
    {
      elementName: 'incomplete',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'incomplete', typeCode: 'boolean' }],
    },
    {
      elementName: 'parameter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'TerminologyCapabilitiesExpansionParameter' }],
    },
    {
      elementName: 'textFilter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'textFilter', typeCode: 'markdown' }],
    },
  ];

  /** Whether the server can return nested value sets (0..1) */
  hierarchical?: boolean;
  /** Id and extensions of the primitive `hierarchical`. */
  _hierarchical?: Element;

  /** Whether the server supports paging on expansion (0..1) */
  paging?: boolean;
  /** Id and extensions of the primitive `paging`. */
  _paging?: Element;

  /** Allow request for incomplete expansions? (0..1) */
  incomplete?: boolean;
  /** Id and extensions of the primitive `incomplete`. */
  _incomplete?: Element;

  /** Supported expansion parameter (0..*) */
  parameter?: TerminologyCapabilitiesExpansionParameter[];

  /** Documentation about text searching works (0..1) */
  textFilter?: string;
  /** Id and extensions of the primitive `textFilter`. */
  _textFilter?: Element;

  override fhirType(): string {
    return 'TerminologyCapabilities.expansion';
  }

  /** FHIR JSON for this TerminologyCapabilitiesExpansion, typed as the plain `TerminologyCapabilitiesExpansion` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesExpansion {
    return this.serialize() as plainTypes.TerminologyCapabilitiesExpansion;
  }

  /** Whether the server can return nested value sets (0..1) */
  getHierarchical(): boolean | undefined {
    return this.hierarchical;
  }

  /** Sets `hierarchical`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setHierarchical(hierarchical: boolean | undefined): this {
    return this.setFieldValue('hierarchical', hierarchical);
  }

  hasHierarchical(): boolean {
    return this.hasFieldValue('hierarchical');
  }

  /** The element carrying the id and extensions of `hierarchical`. Created when absent. */
  getHierarchicalElement(): Element {
    if (this._hierarchical === undefined) {
      this._hierarchical = new Element();
    }
    return this._hierarchical;
  }

  setHierarchicalElement(hierarchicalElement: Element | undefined): this {
    this._hierarchical = hierarchicalElement;
    return this;
  }

  /** Whether the server supports paging on expansion (0..1) */
  getPaging(): boolean | undefined {
    return this.paging;
  }

  /** Sets `paging`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setPaging(paging: boolean | undefined): this {
    return this.setFieldValue('paging', paging);
  }

  hasPaging(): boolean {
    return this.hasFieldValue('paging');
  }

  /** The element carrying the id and extensions of `paging`. Created when absent. */
  getPagingElement(): Element {
    if (this._paging === undefined) {
      this._paging = new Element();
    }
    return this._paging;
  }

  setPagingElement(pagingElement: Element | undefined): this {
    this._paging = pagingElement;
    return this;
  }

  /** Allow request for incomplete expansions? (0..1) */
  getIncomplete(): boolean | undefined {
    return this.incomplete;
  }

  /** Sets `incomplete`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIncomplete(incomplete: boolean | undefined): this {
    return this.setFieldValue('incomplete', incomplete);
  }

  hasIncomplete(): boolean {
    return this.hasFieldValue('incomplete');
  }

  /** The element carrying the id and extensions of `incomplete`. Created when absent. */
  getIncompleteElement(): Element {
    if (this._incomplete === undefined) {
      this._incomplete = new Element();
    }
    return this._incomplete;
  }

  setIncompleteElement(incompleteElement: Element | undefined): this {
    this._incomplete = incompleteElement;
    return this;
  }

  /** Supported expansion parameter (0..*) Never undefined; an empty list is created when absent. */
  getParameter(): TerminologyCapabilitiesExpansionParameter[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: TerminologyCapabilitiesExpansionParameter[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty TerminologyCapabilitiesExpansionParameter to `parameter` and returns it so it can be filled in. */
  addParameter(): TerminologyCapabilitiesExpansionParameter;
  /** Appends the given TerminologyCapabilitiesExpansionParameter to `parameter` and returns this object for chaining. */
  addParameter(
    terminologyCapabilitiesExpansionParameter: TerminologyCapabilitiesExpansionParameter
  ): this;
  addParameter(
    terminologyCapabilitiesExpansionParameter?: TerminologyCapabilitiesExpansionParameter
  ): TerminologyCapabilitiesExpansionParameter | this {
    if (terminologyCapabilitiesExpansionParameter !== undefined) {
      return this.addFieldValue('parameter', terminologyCapabilitiesExpansionParameter);
    }
    const createdTerminologyCapabilitiesExpansionParameter =
      new TerminologyCapabilitiesExpansionParameter();
    this.addFieldValue('parameter', createdTerminologyCapabilitiesExpansionParameter);
    return createdTerminologyCapabilitiesExpansionParameter;
  }

  /** The first TerminologyCapabilitiesExpansionParameter of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): TerminologyCapabilitiesExpansionParameter {
    const firstTerminologyCapabilitiesExpansionParameter = this.getParameter()[0];
    return firstTerminologyCapabilitiesExpansionParameter === undefined
      ? this.addParameter()
      : firstTerminologyCapabilitiesExpansionParameter;
  }

  /** Documentation about text searching works (0..1) */
  getTextFilter(): string | undefined {
    return this.textFilter;
  }

  /** Sets `textFilter`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setTextFilter(textFilter: string | undefined): this {
    return this.setFieldValue('textFilter', textFilter);
  }

  hasTextFilter(): boolean {
    return this.hasFieldValue('textFilter');
  }

  /** The element carrying the id and extensions of `textFilter`. Created when absent. */
  getTextFilterElement(): Element {
    if (this._textFilter === undefined) {
      this._textFilter = new Element();
    }
    return this._textFilter;
  }

  setTextFilterElement(textFilterElement: Element | undefined): this {
    this._textFilter = textFilterElement;
    return this;
  }
}

modelTypeRegistry.register(
  'TerminologyCapabilitiesExpansion',
  TerminologyCapabilitiesExpansion,
  false
);

/**
 * Supported expansion parameter
 */
export class TerminologyCapabilitiesExpansionParameter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'code' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'string' }],
    },
  ];

  /** Name of the supported expansion parameter (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Description of support for parameter (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  override fhirType(): string {
    return 'TerminologyCapabilities.expansion.parameter';
  }

  /** FHIR JSON for this TerminologyCapabilitiesExpansionParameter, typed as the plain `TerminologyCapabilitiesParameter` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesParameter {
    return this.serialize() as plainTypes.TerminologyCapabilitiesParameter;
  }

  /** Name of the supported expansion parameter (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR code. */
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

  /** Description of support for parameter (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR string. */
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
  'TerminologyCapabilitiesExpansionParameter',
  TerminologyCapabilitiesExpansionParameter,
  false
);

/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
 */
export class TerminologyCapabilitiesValidateCode extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'translations',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'translations', typeCode: 'boolean' }],
    },
  ];

  /** Whether translations are validated (1..1) */
  translations?: boolean;
  /** Id and extensions of the primitive `translations`. */
  _translations?: Element;

  override fhirType(): string {
    return 'TerminologyCapabilities.validateCode';
  }

  /** FHIR JSON for this TerminologyCapabilitiesValidateCode, typed as the plain `TerminologyCapabilitiesValidateCode` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesValidateCode {
    return this.serialize() as plainTypes.TerminologyCapabilitiesValidateCode;
  }

  /** Whether translations are validated (1..1) */
  getTranslations(): boolean | undefined {
    return this.translations;
  }

  /** Sets `translations`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setTranslations(translations: boolean | undefined): this {
    return this.setFieldValue('translations', translations);
  }

  hasTranslations(): boolean {
    return this.hasFieldValue('translations');
  }

  /** The element carrying the id and extensions of `translations`. Created when absent. */
  getTranslationsElement(): Element {
    if (this._translations === undefined) {
      this._translations = new Element();
    }
    return this._translations;
  }

  setTranslationsElement(translationsElement: Element | undefined): this {
    this._translations = translationsElement;
    return this;
  }
}

modelTypeRegistry.register(
  'TerminologyCapabilitiesValidateCode',
  TerminologyCapabilitiesValidateCode,
  false
);

/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
 */
export class TerminologyCapabilitiesTranslation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'needsMap',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'needsMap', typeCode: 'boolean' }],
    },
  ];

  /** Whether the client must identify the map (1..1) */
  needsMap?: boolean;
  /** Id and extensions of the primitive `needsMap`. */
  _needsMap?: Element;

  override fhirType(): string {
    return 'TerminologyCapabilities.translation';
  }

  /** FHIR JSON for this TerminologyCapabilitiesTranslation, typed as the plain `TerminologyCapabilitiesTranslation` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesTranslation {
    return this.serialize() as plainTypes.TerminologyCapabilitiesTranslation;
  }

  /** Whether the client must identify the map (1..1) */
  getNeedsMap(): boolean | undefined {
    return this.needsMap;
  }

  /** Sets `needsMap`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setNeedsMap(needsMap: boolean | undefined): this {
    return this.setFieldValue('needsMap', needsMap);
  }

  hasNeedsMap(): boolean {
    return this.hasFieldValue('needsMap');
  }

  /** The element carrying the id and extensions of `needsMap`. Created when absent. */
  getNeedsMapElement(): Element {
    if (this._needsMap === undefined) {
      this._needsMap = new Element();
    }
    return this._needsMap;
  }

  setNeedsMapElement(needsMapElement: Element | undefined): this {
    this._needsMap = needsMapElement;
    return this;
  }
}

modelTypeRegistry.register(
  'TerminologyCapabilitiesTranslation',
  TerminologyCapabilitiesTranslation,
  false
);

/**
 * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
 */
export class TerminologyCapabilitiesClosure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'translation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'translation', typeCode: 'boolean' }],
    },
  ];

  /** If cross-system closure is supported (0..1) */
  translation?: boolean;
  /** Id and extensions of the primitive `translation`. */
  _translation?: Element;

  override fhirType(): string {
    return 'TerminologyCapabilities.closure';
  }

  /** FHIR JSON for this TerminologyCapabilitiesClosure, typed as the plain `TerminologyCapabilitiesClosure` data type. */
  override toJSON(): plainTypes.TerminologyCapabilitiesClosure {
    return this.serialize() as plainTypes.TerminologyCapabilitiesClosure;
  }

  /** If cross-system closure is supported (0..1) */
  getTranslation(): boolean | undefined {
    return this.translation;
  }

  /** Sets `translation`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setTranslation(translation: boolean | undefined): this {
    return this.setFieldValue('translation', translation);
  }

  hasTranslation(): boolean {
    return this.hasFieldValue('translation');
  }

  /** The element carrying the id and extensions of `translation`. Created when absent. */
  getTranslationElement(): Element {
    if (this._translation === undefined) {
      this._translation = new Element();
    }
    return this._translation;
  }

  setTranslationElement(translationElement: Element | undefined): this {
    this._translation = translationElement;
    return this;
  }
}

modelTypeRegistry.register('TerminologyCapabilitiesClosure', TerminologyCapabilitiesClosure, false);
