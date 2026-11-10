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
import { Expression } from './expression';
import { Identifier } from './identifier';
import { MonetaryComponent } from './monetaryComponent';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
export class ChargeItemDefinition extends DomainResource {
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
      elementName: 'derivedFromUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'derivedFromUri', typeCode: 'uri' }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'canonical' }],
    },
    {
      elementName: 'replaces',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'replaces', typeCode: 'canonical' }],
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
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'instance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'instance',
          typeCode: 'Reference',
          targetResourceTypes: [
            'ActivityDefinition',
            'Device',
            'DeviceDefinition',
            'HealthcareService',
            'Medication',
            'PlanDefinition',
            'Substance',
          ],
        },
      ],
    },
    {
      elementName: 'applicability',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'applicability', typeCode: 'ChargeItemDefinitionApplicability' }],
    },
    {
      elementName: 'propertyGroup',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'propertyGroup', typeCode: 'ChargeItemDefinitionPropertyGroup' }],
    },
  ];

  readonly resourceType = 'ChargeItemDefinition';

  /** Canonical identifier for this charge item definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the charge item definition (0..*) */
  identifier?: Identifier[];

  /** Business version of the charge item definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this charge item definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this charge item definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Underlying externally-defined charge item definition (0..*) */
  derivedFromUri?: string[];
  /** Id and extensions of the primitive `derivedFromUri`. */
  _derivedFromUri?: (Element | null)[];

  /** A larger definition of which this particular definition is a component or step (0..*) */
  partOf?: string[];
  /** Id and extensions of the primitive `partOf`. */
  _partOf?: (Element | null)[];

  /** Completed or terminated request(s) whose function is taken by this new request (0..*) */
  replaces?: string[];
  /** Id and extensions of the primitive `replaces`. */
  _replaces?: (Element | null)[];

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

  /** Natural language description of the charge item definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for charge item definition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this charge item definition is defined (0..1) */
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

  /** When the charge item definition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the charge item definition was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** Billing code or product type this definition applies to (0..1) */
  code?: CodeableConcept;

  /** Instances this definition applies to (0..*) */
  instance?: Reference[];

  /** Whether or not the billing code is applicable (0..*) */
  applicability?: ChargeItemDefinitionApplicability[];

  /** Group of properties which are applicable under the same conditions (0..*) */
  propertyGroup?: ChargeItemDefinitionPropertyGroup[];

  override fhirType(): string {
    return 'ChargeItemDefinition';
  }

  /** FHIR JSON for this ChargeItemDefinition, typed as the plain `ChargeItemDefinition` data type. */
  override toJSON(): plainTypes.ChargeItemDefinition {
    return this.serialize() as plainTypes.ChargeItemDefinition;
  }

  /** Canonical identifier for this charge item definition, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the charge item definition (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the charge item definition (0..1) */
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

  /** Name for this charge item definition (computer friendly) (0..1) */
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

  /** Name for this charge item definition (human friendly) (0..1) */
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

  /** Underlying externally-defined charge item definition (0..*) Never undefined; an empty list is created when absent. */
  getDerivedFromUri(): string[] {
    if (this.derivedFromUri === undefined) {
      this.derivedFromUri = [];
    }
    return this.derivedFromUri;
  }

  setDerivedFromUri(derivedFromUri: string[] | undefined): this {
    return this.setFieldValue('derivedFromUri', derivedFromUri);
  }

  hasDerivedFromUri(): boolean {
    return this.hasFieldValue('derivedFromUri');
  }

  /** Appends one value to `derivedFromUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addDerivedFromUri(derivedFromUri: string): this {
    return this.addFieldValue('derivedFromUri', derivedFromUri);
  }

  /** A larger definition of which this particular definition is a component or step (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): string[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: string[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends one value to `partOf`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addPartOf(partOf: string): this {
    return this.addFieldValue('partOf', partOf);
  }

  /** Completed or terminated request(s) whose function is taken by this new request (0..*) Never undefined; an empty list is created when absent. */
  getReplaces(): string[] {
    if (this.replaces === undefined) {
      this.replaces = [];
    }
    return this.replaces;
  }

  setReplaces(replaces: string[] | undefined): this {
    return this.setFieldValue('replaces', replaces);
  }

  hasReplaces(): boolean {
    return this.hasFieldValue('replaces');
  }

  /** Appends one value to `replaces`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addReplaces(replaces: string): this {
    return this.addFieldValue('replaces', replaces);
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

  /** Natural language description of the charge item definition (0..1) */
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

  /** Intended jurisdiction for charge item definition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this charge item definition is defined (0..1) */
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

  /** When the charge item definition was approved by publisher (0..1) */
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

  /** When the charge item definition was last reviewed by the publisher (0..1) */
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

  /** Billing code or product type this definition applies to (0..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Instances this definition applies to (0..*) Never undefined; an empty list is created when absent. */
  getInstance(): Reference[] {
    if (this.instance === undefined) {
      this.instance = [];
    }
    return this.instance;
  }

  setInstance(instance: Reference[] | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** Appends a new, empty Reference to `instance` and returns it so it can be filled in. */
  addInstance(): Reference;
  /** Appends the given Reference to `instance` and returns this object for chaining. */
  addInstance(reference: Reference): this;
  addInstance(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('instance', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('instance', createdReference);
    return createdReference;
  }

  /** The first Reference of `instance`. One is added when the list is empty. */
  getInstanceFirstRep(): Reference {
    const firstReference = this.getInstance()[0];
    return firstReference === undefined ? this.addInstance() : firstReference;
  }

  /** Whether or not the billing code is applicable (0..*) Never undefined; an empty list is created when absent. */
  getApplicability(): ChargeItemDefinitionApplicability[] {
    if (this.applicability === undefined) {
      this.applicability = [];
    }
    return this.applicability;
  }

  setApplicability(applicability: ChargeItemDefinitionApplicability[] | undefined): this {
    return this.setFieldValue('applicability', applicability);
  }

  hasApplicability(): boolean {
    return this.hasFieldValue('applicability');
  }

  /** Appends a new, empty ChargeItemDefinitionApplicability to `applicability` and returns it so it can be filled in. */
  addApplicability(): ChargeItemDefinitionApplicability;
  /** Appends the given ChargeItemDefinitionApplicability to `applicability` and returns this object for chaining. */
  addApplicability(chargeItemDefinitionApplicability: ChargeItemDefinitionApplicability): this;
  addApplicability(
    chargeItemDefinitionApplicability?: ChargeItemDefinitionApplicability
  ): ChargeItemDefinitionApplicability | this {
    if (chargeItemDefinitionApplicability !== undefined) {
      return this.addFieldValue('applicability', chargeItemDefinitionApplicability);
    }
    const createdChargeItemDefinitionApplicability = new ChargeItemDefinitionApplicability();
    this.addFieldValue('applicability', createdChargeItemDefinitionApplicability);
    return createdChargeItemDefinitionApplicability;
  }

  /** The first ChargeItemDefinitionApplicability of `applicability`. One is added when the list is empty. */
  getApplicabilityFirstRep(): ChargeItemDefinitionApplicability {
    const firstChargeItemDefinitionApplicability = this.getApplicability()[0];
    return firstChargeItemDefinitionApplicability === undefined
      ? this.addApplicability()
      : firstChargeItemDefinitionApplicability;
  }

  /** Group of properties which are applicable under the same conditions (0..*) Never undefined; an empty list is created when absent. */
  getPropertyGroup(): ChargeItemDefinitionPropertyGroup[] {
    if (this.propertyGroup === undefined) {
      this.propertyGroup = [];
    }
    return this.propertyGroup;
  }

  setPropertyGroup(propertyGroup: ChargeItemDefinitionPropertyGroup[] | undefined): this {
    return this.setFieldValue('propertyGroup', propertyGroup);
  }

  hasPropertyGroup(): boolean {
    return this.hasFieldValue('propertyGroup');
  }

  /** Appends a new, empty ChargeItemDefinitionPropertyGroup to `propertyGroup` and returns it so it can be filled in. */
  addPropertyGroup(): ChargeItemDefinitionPropertyGroup;
  /** Appends the given ChargeItemDefinitionPropertyGroup to `propertyGroup` and returns this object for chaining. */
  addPropertyGroup(chargeItemDefinitionPropertyGroup: ChargeItemDefinitionPropertyGroup): this;
  addPropertyGroup(
    chargeItemDefinitionPropertyGroup?: ChargeItemDefinitionPropertyGroup
  ): ChargeItemDefinitionPropertyGroup | this {
    if (chargeItemDefinitionPropertyGroup !== undefined) {
      return this.addFieldValue('propertyGroup', chargeItemDefinitionPropertyGroup);
    }
    const createdChargeItemDefinitionPropertyGroup = new ChargeItemDefinitionPropertyGroup();
    this.addFieldValue('propertyGroup', createdChargeItemDefinitionPropertyGroup);
    return createdChargeItemDefinitionPropertyGroup;
  }

  /** The first ChargeItemDefinitionPropertyGroup of `propertyGroup`. One is added when the list is empty. */
  getPropertyGroupFirstRep(): ChargeItemDefinitionPropertyGroup {
    const firstChargeItemDefinitionPropertyGroup = this.getPropertyGroup()[0];
    return firstChargeItemDefinitionPropertyGroup === undefined
      ? this.addPropertyGroup()
      : firstChargeItemDefinitionPropertyGroup;
  }
}

modelTypeRegistry.register('ChargeItemDefinition', ChargeItemDefinition, true);

/** True when the value is a ChargeItemDefinition model instance. */
export function isChargeItemDefinition(candidate: unknown): candidate is ChargeItemDefinition {
  return candidate instanceof ChargeItemDefinition;
}

/**
 * Whether or not the billing code is applicable
 */
export class ChargeItemDefinitionApplicability extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'condition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'condition', typeCode: 'Expression' }],
    },
    {
      elementName: 'effectivePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectivePeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
  ];

  /** Boolean-valued expression (0..1) */
  condition?: Expression;

  /** When the charge item definition is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** Reference to / quotation of the external source of the group of properties (0..1) */
  relatedArtifact?: RelatedArtifact;

  override fhirType(): string {
    return 'ChargeItemDefinition.applicability';
  }

  /** FHIR JSON for this ChargeItemDefinitionApplicability, typed as the plain `ChargeItemDefinitionApplicability` data type. */
  override toJSON(): plainTypes.ChargeItemDefinitionApplicability {
    return this.serialize() as plainTypes.ChargeItemDefinitionApplicability;
  }

  /** Boolean-valued expression (0..1) Created when absent. */
  getCondition(): Expression {
    if (this.condition === undefined) {
      this.condition = new Expression();
    }
    return this.condition;
  }

  setCondition(condition: Expression | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** When the charge item definition is expected to be used (0..1) Created when absent. */
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

  /** Reference to / quotation of the external source of the group of properties (0..1) Created when absent. */
  getRelatedArtifact(): RelatedArtifact {
    if (this.relatedArtifact === undefined) {
      this.relatedArtifact = new RelatedArtifact();
    }
    return this.relatedArtifact;
  }

  setRelatedArtifact(relatedArtifact: RelatedArtifact | undefined): this {
    return this.setFieldValue('relatedArtifact', relatedArtifact);
  }

  hasRelatedArtifact(): boolean {
    return this.hasFieldValue('relatedArtifact');
  }
}

modelTypeRegistry.register(
  'ChargeItemDefinitionApplicability',
  ChargeItemDefinitionApplicability,
  false
);

/**
 * Group of properties which are applicable under the same conditions
 */
export class ChargeItemDefinitionPropertyGroup extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'applicability',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'applicability', typeCode: 'ChargeItemDefinitionApplicability' }],
    },
    {
      elementName: 'priceComponent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'priceComponent', typeCode: 'MonetaryComponent' }],
    },
  ];

  /** Conditions under which the priceComponent is applicable (0..*) */
  applicability?: ChargeItemDefinitionApplicability[];

  /** Components of total line item price (0..*) */
  priceComponent?: MonetaryComponent[];

  override fhirType(): string {
    return 'ChargeItemDefinition.propertyGroup';
  }

  /** FHIR JSON for this ChargeItemDefinitionPropertyGroup, typed as the plain `ChargeItemDefinitionPropertyGroup` data type. */
  override toJSON(): plainTypes.ChargeItemDefinitionPropertyGroup {
    return this.serialize() as plainTypes.ChargeItemDefinitionPropertyGroup;
  }

  /** Conditions under which the priceComponent is applicable (0..*) Never undefined; an empty list is created when absent. */
  getApplicability(): ChargeItemDefinitionApplicability[] {
    if (this.applicability === undefined) {
      this.applicability = [];
    }
    return this.applicability;
  }

  setApplicability(applicability: ChargeItemDefinitionApplicability[] | undefined): this {
    return this.setFieldValue('applicability', applicability);
  }

  hasApplicability(): boolean {
    return this.hasFieldValue('applicability');
  }

  /** Appends a new, empty ChargeItemDefinitionApplicability to `applicability` and returns it so it can be filled in. */
  addApplicability(): ChargeItemDefinitionApplicability;
  /** Appends the given ChargeItemDefinitionApplicability to `applicability` and returns this object for chaining. */
  addApplicability(chargeItemDefinitionApplicability: ChargeItemDefinitionApplicability): this;
  addApplicability(
    chargeItemDefinitionApplicability?: ChargeItemDefinitionApplicability
  ): ChargeItemDefinitionApplicability | this {
    if (chargeItemDefinitionApplicability !== undefined) {
      return this.addFieldValue('applicability', chargeItemDefinitionApplicability);
    }
    const createdChargeItemDefinitionApplicability = new ChargeItemDefinitionApplicability();
    this.addFieldValue('applicability', createdChargeItemDefinitionApplicability);
    return createdChargeItemDefinitionApplicability;
  }

  /** The first ChargeItemDefinitionApplicability of `applicability`. One is added when the list is empty. */
  getApplicabilityFirstRep(): ChargeItemDefinitionApplicability {
    const firstChargeItemDefinitionApplicability = this.getApplicability()[0];
    return firstChargeItemDefinitionApplicability === undefined
      ? this.addApplicability()
      : firstChargeItemDefinitionApplicability;
  }

  /** Components of total line item price (0..*) Never undefined; an empty list is created when absent. */
  getPriceComponent(): MonetaryComponent[] {
    if (this.priceComponent === undefined) {
      this.priceComponent = [];
    }
    return this.priceComponent;
  }

  setPriceComponent(priceComponent: MonetaryComponent[] | undefined): this {
    return this.setFieldValue('priceComponent', priceComponent);
  }

  hasPriceComponent(): boolean {
    return this.hasFieldValue('priceComponent');
  }

  /** Appends a new, empty MonetaryComponent to `priceComponent` and returns it so it can be filled in. */
  addPriceComponent(): MonetaryComponent;
  /** Appends the given MonetaryComponent to `priceComponent` and returns this object for chaining. */
  addPriceComponent(monetaryComponent: MonetaryComponent): this;
  addPriceComponent(monetaryComponent?: MonetaryComponent): MonetaryComponent | this {
    if (monetaryComponent !== undefined) {
      return this.addFieldValue('priceComponent', monetaryComponent);
    }
    const createdMonetaryComponent = new MonetaryComponent();
    this.addFieldValue('priceComponent', createdMonetaryComponent);
    return createdMonetaryComponent;
  }

  /** The first MonetaryComponent of `priceComponent`. One is added when the list is empty. */
  getPriceComponentFirstRep(): MonetaryComponent {
    const firstMonetaryComponent = this.getPriceComponent()[0];
    return firstMonetaryComponent === undefined ? this.addPriceComponent() : firstMonetaryComponent;
  }
}

modelTypeRegistry.register(
  'ChargeItemDefinitionPropertyGroup',
  ChargeItemDefinitionPropertyGroup,
  false
);
