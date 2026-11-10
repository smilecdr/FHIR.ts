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
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export class TestScript extends DomainResource {
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
      elementName: 'origin',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'origin', typeCode: 'TestScriptOrigin' }],
    },
    {
      elementName: 'destination',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'destination', typeCode: 'TestScriptDestination' }],
    },
    {
      elementName: 'metadata',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'metadata', typeCode: 'TestScriptMetadata' }],
    },
    {
      elementName: 'scope',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'scope', typeCode: 'TestScriptScope' }],
    },
    {
      elementName: 'fixture',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'fixture', typeCode: 'TestScriptFixture' }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
    {
      elementName: 'variable',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'variable', typeCode: 'TestScriptVariable' }],
    },
    {
      elementName: 'setup',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'setup', typeCode: 'TestScriptSetup' }],
    },
    {
      elementName: 'test',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'test', typeCode: 'TestScriptTest' }],
    },
    {
      elementName: 'teardown',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'teardown', typeCode: 'TestScriptTeardown' }],
    },
  ];

  readonly resourceType = 'TestScript';

  /** Canonical identifier for this test script, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the test script (0..*) */
  identifier?: Identifier[];

  /** Business version of the test script (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this test script (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this test script (human friendly) (0..1) */
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

  /** Natural language description of the test script (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for test script (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this test script is defined (0..1) */
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

  /** An abstract server representing a client or sender in a message exchange (0..*) */
  origin?: TestScriptOrigin[];

  /** An abstract server representing a destination or receiver in a message exchange (0..*) */
  destination?: TestScriptDestination[];

  /** Required capability that is assumed to function correctly on the FHIR server being tested (0..1) */
  metadata?: TestScriptMetadata;

  /** Indication of the artifact(s) that are tested by this test case (0..*) */
  scope?: TestScriptScope[];

  /** Fixture in the test script - by reference (uri) (0..*) */
  fixture?: TestScriptFixture[];

  /** Reference of the validation profile (0..*) */
  profile?: string[];
  /** Id and extensions of the primitive `profile`. */
  _profile?: (Element | null)[];

  /** Placeholder for evaluated elements (0..*) */
  variable?: TestScriptVariable[];

  /** A series of required setup operations before tests are executed (0..1) */
  setup?: TestScriptSetup;

  /** A test in this script (0..*) */
  test?: TestScriptTest[];

  /** A series of required clean up steps (0..1) */
  teardown?: TestScriptTeardown;

  override fhirType(): string {
    return 'TestScript';
  }

  /** FHIR JSON for this TestScript, typed as the plain `TestScript` data type. */
  override toJSON(): plainTypes.TestScript {
    return this.serialize() as plainTypes.TestScript;
  }

  /** Canonical identifier for this test script, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the test script (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the test script (0..1) */
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

  /** Name for this test script (computer friendly) (1..1) */
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

  /** Name for this test script (human friendly) (0..1) */
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

  /** Natural language description of the test script (0..1) */
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

  /** Intended jurisdiction for test script (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this test script is defined (0..1) */
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

  /** An abstract server representing a client or sender in a message exchange (0..*) Never undefined; an empty list is created when absent. */
  getOrigin(): TestScriptOrigin[] {
    if (this.origin === undefined) {
      this.origin = [];
    }
    return this.origin;
  }

  setOrigin(origin: TestScriptOrigin[] | undefined): this {
    return this.setFieldValue('origin', origin);
  }

  hasOrigin(): boolean {
    return this.hasFieldValue('origin');
  }

  /** Appends a new, empty TestScriptOrigin to `origin` and returns it so it can be filled in. */
  addOrigin(): TestScriptOrigin;
  /** Appends the given TestScriptOrigin to `origin` and returns this object for chaining. */
  addOrigin(testScriptOrigin: TestScriptOrigin): this;
  addOrigin(testScriptOrigin?: TestScriptOrigin): TestScriptOrigin | this {
    if (testScriptOrigin !== undefined) {
      return this.addFieldValue('origin', testScriptOrigin);
    }
    const createdTestScriptOrigin = new TestScriptOrigin();
    this.addFieldValue('origin', createdTestScriptOrigin);
    return createdTestScriptOrigin;
  }

  /** The first TestScriptOrigin of `origin`. One is added when the list is empty. */
  getOriginFirstRep(): TestScriptOrigin {
    const firstTestScriptOrigin = this.getOrigin()[0];
    return firstTestScriptOrigin === undefined ? this.addOrigin() : firstTestScriptOrigin;
  }

  /** An abstract server representing a destination or receiver in a message exchange (0..*) Never undefined; an empty list is created when absent. */
  getDestination(): TestScriptDestination[] {
    if (this.destination === undefined) {
      this.destination = [];
    }
    return this.destination;
  }

  setDestination(destination: TestScriptDestination[] | undefined): this {
    return this.setFieldValue('destination', destination);
  }

  hasDestination(): boolean {
    return this.hasFieldValue('destination');
  }

  /** Appends a new, empty TestScriptDestination to `destination` and returns it so it can be filled in. */
  addDestination(): TestScriptDestination;
  /** Appends the given TestScriptDestination to `destination` and returns this object for chaining. */
  addDestination(testScriptDestination: TestScriptDestination): this;
  addDestination(testScriptDestination?: TestScriptDestination): TestScriptDestination | this {
    if (testScriptDestination !== undefined) {
      return this.addFieldValue('destination', testScriptDestination);
    }
    const createdTestScriptDestination = new TestScriptDestination();
    this.addFieldValue('destination', createdTestScriptDestination);
    return createdTestScriptDestination;
  }

  /** The first TestScriptDestination of `destination`. One is added when the list is empty. */
  getDestinationFirstRep(): TestScriptDestination {
    const firstTestScriptDestination = this.getDestination()[0];
    return firstTestScriptDestination === undefined
      ? this.addDestination()
      : firstTestScriptDestination;
  }

  /** Required capability that is assumed to function correctly on the FHIR server being tested (0..1) Created when absent. */
  getMetadata(): TestScriptMetadata {
    if (this.metadata === undefined) {
      this.metadata = new TestScriptMetadata();
    }
    return this.metadata;
  }

  setMetadata(metadata: TestScriptMetadata | undefined): this {
    return this.setFieldValue('metadata', metadata);
  }

  hasMetadata(): boolean {
    return this.hasFieldValue('metadata');
  }

  /** Indication of the artifact(s) that are tested by this test case (0..*) Never undefined; an empty list is created when absent. */
  getScope(): TestScriptScope[] {
    if (this.scope === undefined) {
      this.scope = [];
    }
    return this.scope;
  }

  setScope(scope: TestScriptScope[] | undefined): this {
    return this.setFieldValue('scope', scope);
  }

  hasScope(): boolean {
    return this.hasFieldValue('scope');
  }

  /** Appends a new, empty TestScriptScope to `scope` and returns it so it can be filled in. */
  addScope(): TestScriptScope;
  /** Appends the given TestScriptScope to `scope` and returns this object for chaining. */
  addScope(testScriptScope: TestScriptScope): this;
  addScope(testScriptScope?: TestScriptScope): TestScriptScope | this {
    if (testScriptScope !== undefined) {
      return this.addFieldValue('scope', testScriptScope);
    }
    const createdTestScriptScope = new TestScriptScope();
    this.addFieldValue('scope', createdTestScriptScope);
    return createdTestScriptScope;
  }

  /** The first TestScriptScope of `scope`. One is added when the list is empty. */
  getScopeFirstRep(): TestScriptScope {
    const firstTestScriptScope = this.getScope()[0];
    return firstTestScriptScope === undefined ? this.addScope() : firstTestScriptScope;
  }

  /** Fixture in the test script - by reference (uri) (0..*) Never undefined; an empty list is created when absent. */
  getFixture(): TestScriptFixture[] {
    if (this.fixture === undefined) {
      this.fixture = [];
    }
    return this.fixture;
  }

  setFixture(fixture: TestScriptFixture[] | undefined): this {
    return this.setFieldValue('fixture', fixture);
  }

  hasFixture(): boolean {
    return this.hasFieldValue('fixture');
  }

  /** Appends a new, empty TestScriptFixture to `fixture` and returns it so it can be filled in. */
  addFixture(): TestScriptFixture;
  /** Appends the given TestScriptFixture to `fixture` and returns this object for chaining. */
  addFixture(testScriptFixture: TestScriptFixture): this;
  addFixture(testScriptFixture?: TestScriptFixture): TestScriptFixture | this {
    if (testScriptFixture !== undefined) {
      return this.addFieldValue('fixture', testScriptFixture);
    }
    const createdTestScriptFixture = new TestScriptFixture();
    this.addFieldValue('fixture', createdTestScriptFixture);
    return createdTestScriptFixture;
  }

  /** The first TestScriptFixture of `fixture`. One is added when the list is empty. */
  getFixtureFirstRep(): TestScriptFixture {
    const firstTestScriptFixture = this.getFixture()[0];
    return firstTestScriptFixture === undefined ? this.addFixture() : firstTestScriptFixture;
  }

  /** Reference of the validation profile (0..*) Never undefined; an empty list is created when absent. */
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

  /** Placeholder for evaluated elements (0..*) Never undefined; an empty list is created when absent. */
  getVariable(): TestScriptVariable[] {
    if (this.variable === undefined) {
      this.variable = [];
    }
    return this.variable;
  }

  setVariable(variable: TestScriptVariable[] | undefined): this {
    return this.setFieldValue('variable', variable);
  }

  hasVariable(): boolean {
    return this.hasFieldValue('variable');
  }

  /** Appends a new, empty TestScriptVariable to `variable` and returns it so it can be filled in. */
  addVariable(): TestScriptVariable;
  /** Appends the given TestScriptVariable to `variable` and returns this object for chaining. */
  addVariable(testScriptVariable: TestScriptVariable): this;
  addVariable(testScriptVariable?: TestScriptVariable): TestScriptVariable | this {
    if (testScriptVariable !== undefined) {
      return this.addFieldValue('variable', testScriptVariable);
    }
    const createdTestScriptVariable = new TestScriptVariable();
    this.addFieldValue('variable', createdTestScriptVariable);
    return createdTestScriptVariable;
  }

  /** The first TestScriptVariable of `variable`. One is added when the list is empty. */
  getVariableFirstRep(): TestScriptVariable {
    const firstTestScriptVariable = this.getVariable()[0];
    return firstTestScriptVariable === undefined ? this.addVariable() : firstTestScriptVariable;
  }

  /** A series of required setup operations before tests are executed (0..1) Created when absent. */
  getSetup(): TestScriptSetup {
    if (this.setup === undefined) {
      this.setup = new TestScriptSetup();
    }
    return this.setup;
  }

  setSetup(setup: TestScriptSetup | undefined): this {
    return this.setFieldValue('setup', setup);
  }

  hasSetup(): boolean {
    return this.hasFieldValue('setup');
  }

  /** A test in this script (0..*) Never undefined; an empty list is created when absent. */
  getTest(): TestScriptTest[] {
    if (this.test === undefined) {
      this.test = [];
    }
    return this.test;
  }

  setTest(test: TestScriptTest[] | undefined): this {
    return this.setFieldValue('test', test);
  }

  hasTest(): boolean {
    return this.hasFieldValue('test');
  }

  /** Appends a new, empty TestScriptTest to `test` and returns it so it can be filled in. */
  addTest(): TestScriptTest;
  /** Appends the given TestScriptTest to `test` and returns this object for chaining. */
  addTest(testScriptTest: TestScriptTest): this;
  addTest(testScriptTest?: TestScriptTest): TestScriptTest | this {
    if (testScriptTest !== undefined) {
      return this.addFieldValue('test', testScriptTest);
    }
    const createdTestScriptTest = new TestScriptTest();
    this.addFieldValue('test', createdTestScriptTest);
    return createdTestScriptTest;
  }

  /** The first TestScriptTest of `test`. One is added when the list is empty. */
  getTestFirstRep(): TestScriptTest {
    const firstTestScriptTest = this.getTest()[0];
    return firstTestScriptTest === undefined ? this.addTest() : firstTestScriptTest;
  }

  /** A series of required clean up steps (0..1) Created when absent. */
  getTeardown(): TestScriptTeardown {
    if (this.teardown === undefined) {
      this.teardown = new TestScriptTeardown();
    }
    return this.teardown;
  }

  setTeardown(teardown: TestScriptTeardown | undefined): this {
    return this.setFieldValue('teardown', teardown);
  }

  hasTeardown(): boolean {
    return this.hasFieldValue('teardown');
  }
}

modelTypeRegistry.register('TestScript', TestScript, true);

/** True when the value is a TestScript model instance. */
export function isTestScript(candidate: unknown): candidate is TestScript {
  return candidate instanceof TestScript;
}

/**
 * An abstract server representing a client or sender in a message exchange
 */
export class TestScriptOrigin extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'index',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'index', typeCode: 'integer' }],
    },
    {
      elementName: 'profile',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'profile', typeCode: 'Coding' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'url' }],
    },
  ];

  /** The index of the abstract origin server starting at 1 (1..1) */
  index?: number;
  /** Id and extensions of the primitive `index`. */
  _index?: Element;

  /** FHIR-Client | FHIR-SDC-FormFiller (1..1) */
  profile?: Coding;

  /** The url path of the origin server (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  override fhirType(): string {
    return 'TestScript.origin';
  }

  /** FHIR JSON for this TestScriptOrigin, typed as the plain `TestScriptOrigin` data type. */
  override toJSON(): plainTypes.TestScriptOrigin {
    return this.serialize() as plainTypes.TestScriptOrigin;
  }

  /** The index of the abstract origin server starting at 1 (1..1) */
  getIndex(): number | undefined {
    return this.index;
  }

  /** Sets `index`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setIndex(index: number | undefined): this {
    return this.setFieldValue('index', index);
  }

  hasIndex(): boolean {
    return this.hasFieldValue('index');
  }

  /** The element carrying the id and extensions of `index`. Created when absent. */
  getIndexElement(): Element {
    if (this._index === undefined) {
      this._index = new Element();
    }
    return this._index;
  }

  setIndexElement(indexElement: Element | undefined): this {
    this._index = indexElement;
    return this;
  }

  /** FHIR-Client | FHIR-SDC-FormFiller (1..1) Created when absent. */
  getProfile(): Coding {
    if (this.profile === undefined) {
      this.profile = new Coding();
    }
    return this.profile;
  }

  setProfile(profile: Coding | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** The url path of the origin server (0..1) */
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

modelTypeRegistry.register('TestScriptOrigin', TestScriptOrigin, false);

/**
 * An abstract server representing a destination or receiver in a message exchange
 */
export class TestScriptDestination extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'index',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'index', typeCode: 'integer' }],
    },
    {
      elementName: 'profile',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'profile', typeCode: 'Coding' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'url' }],
    },
  ];

  /** The index of the abstract destination server starting at 1 (1..1) */
  index?: number;
  /** Id and extensions of the primitive `index`. */
  _index?: Element;

  /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor (1..1) */
  profile?: Coding;

  /** The url path of the destination server (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  override fhirType(): string {
    return 'TestScript.destination';
  }

  /** FHIR JSON for this TestScriptDestination, typed as the plain `TestScriptDestination` data type. */
  override toJSON(): plainTypes.TestScriptDestination {
    return this.serialize() as plainTypes.TestScriptDestination;
  }

  /** The index of the abstract destination server starting at 1 (1..1) */
  getIndex(): number | undefined {
    return this.index;
  }

  /** Sets `index`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setIndex(index: number | undefined): this {
    return this.setFieldValue('index', index);
  }

  hasIndex(): boolean {
    return this.hasFieldValue('index');
  }

  /** The element carrying the id and extensions of `index`. Created when absent. */
  getIndexElement(): Element {
    if (this._index === undefined) {
      this._index = new Element();
    }
    return this._index;
  }

  setIndexElement(indexElement: Element | undefined): this {
    this._index = indexElement;
    return this;
  }

  /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor (1..1) Created when absent. */
  getProfile(): Coding {
    if (this.profile === undefined) {
      this.profile = new Coding();
    }
    return this.profile;
  }

  setProfile(profile: Coding | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** The url path of the destination server (0..1) */
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

modelTypeRegistry.register('TestScriptDestination', TestScriptDestination, false);

/**
 * Required capability that is assumed to function correctly on the FHIR server being tested
 */
export class TestScriptMetadata extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'link',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'link', typeCode: 'TestScriptMetadataLink' }],
    },
    {
      elementName: 'capability',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'capability', typeCode: 'TestScriptMetadataCapability' }],
    },
  ];

  /** Links to the FHIR specification (0..*) */
  link?: TestScriptMetadataLink[];

  /** Capabilities that are assumed to function correctly on the FHIR server being tested (1..*) */
  capability?: TestScriptMetadataCapability[];

  override fhirType(): string {
    return 'TestScript.metadata';
  }

  /** FHIR JSON for this TestScriptMetadata, typed as the plain `TestScriptMetadata` data type. */
  override toJSON(): plainTypes.TestScriptMetadata {
    return this.serialize() as plainTypes.TestScriptMetadata;
  }

  /** Links to the FHIR specification (0..*) Never undefined; an empty list is created when absent. */
  getLink(): TestScriptMetadataLink[] {
    if (this.link === undefined) {
      this.link = [];
    }
    return this.link;
  }

  setLink(link: TestScriptMetadataLink[] | undefined): this {
    return this.setFieldValue('link', link);
  }

  hasLink(): boolean {
    return this.hasFieldValue('link');
  }

  /** Appends a new, empty TestScriptMetadataLink to `link` and returns it so it can be filled in. */
  addLink(): TestScriptMetadataLink;
  /** Appends the given TestScriptMetadataLink to `link` and returns this object for chaining. */
  addLink(testScriptMetadataLink: TestScriptMetadataLink): this;
  addLink(testScriptMetadataLink?: TestScriptMetadataLink): TestScriptMetadataLink | this {
    if (testScriptMetadataLink !== undefined) {
      return this.addFieldValue('link', testScriptMetadataLink);
    }
    const createdTestScriptMetadataLink = new TestScriptMetadataLink();
    this.addFieldValue('link', createdTestScriptMetadataLink);
    return createdTestScriptMetadataLink;
  }

  /** The first TestScriptMetadataLink of `link`. One is added when the list is empty. */
  getLinkFirstRep(): TestScriptMetadataLink {
    const firstTestScriptMetadataLink = this.getLink()[0];
    return firstTestScriptMetadataLink === undefined ? this.addLink() : firstTestScriptMetadataLink;
  }

  /** Capabilities that are assumed to function correctly on the FHIR server being tested (1..*) Never undefined; an empty list is created when absent. */
  getCapability(): TestScriptMetadataCapability[] {
    if (this.capability === undefined) {
      this.capability = [];
    }
    return this.capability;
  }

  setCapability(capability: TestScriptMetadataCapability[] | undefined): this {
    return this.setFieldValue('capability', capability);
  }

  hasCapability(): boolean {
    return this.hasFieldValue('capability');
  }

  /** Appends a new, empty TestScriptMetadataCapability to `capability` and returns it so it can be filled in. */
  addCapability(): TestScriptMetadataCapability;
  /** Appends the given TestScriptMetadataCapability to `capability` and returns this object for chaining. */
  addCapability(testScriptMetadataCapability: TestScriptMetadataCapability): this;
  addCapability(
    testScriptMetadataCapability?: TestScriptMetadataCapability
  ): TestScriptMetadataCapability | this {
    if (testScriptMetadataCapability !== undefined) {
      return this.addFieldValue('capability', testScriptMetadataCapability);
    }
    const createdTestScriptMetadataCapability = new TestScriptMetadataCapability();
    this.addFieldValue('capability', createdTestScriptMetadataCapability);
    return createdTestScriptMetadataCapability;
  }

  /** The first TestScriptMetadataCapability of `capability`. One is added when the list is empty. */
  getCapabilityFirstRep(): TestScriptMetadataCapability {
    const firstTestScriptMetadataCapability = this.getCapability()[0];
    return firstTestScriptMetadataCapability === undefined
      ? this.addCapability()
      : firstTestScriptMetadataCapability;
  }
}

modelTypeRegistry.register('TestScriptMetadata', TestScriptMetadata, false);

/**
 * Links to the FHIR specification
 */
export class TestScriptMetadataLink extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
  ];

  /** URL to the specification (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Short description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'TestScript.metadata.link';
  }

  /** FHIR JSON for this TestScriptMetadataLink, typed as the plain `TestScriptLink` data type. */
  override toJSON(): plainTypes.TestScriptLink {
    return this.serialize() as plainTypes.TestScriptLink;
  }

  /** URL to the specification (1..1) */
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

  /** Short description (0..1) */
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
}

modelTypeRegistry.register('TestScriptMetadataLink', TestScriptMetadataLink, false);

/**
 * Capabilities that are assumed to function correctly on the FHIR server being tested
 */
export class TestScriptMetadataCapability extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'required',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'required', typeCode: 'boolean' }],
    },
    {
      elementName: 'validated',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validated', typeCode: 'boolean' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'origin',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'origin', typeCode: 'integer' }],
    },
    {
      elementName: 'destination',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'destination', typeCode: 'integer' }],
    },
    {
      elementName: 'link',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'link', typeCode: 'uri' }],
    },
    {
      elementName: 'capabilities',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'capabilities', typeCode: 'canonical' }],
    },
  ];

  /** Are the capabilities required? (1..1) */
  required?: boolean;
  /** Id and extensions of the primitive `required`. */
  _required?: Element;

  /** Are the capabilities validated? (1..1) */
  validated?: boolean;
  /** Id and extensions of the primitive `validated`. */
  _validated?: Element;

  /** The expected capabilities of the server (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Which origin server these requirements apply to (0..*) */
  origin?: number[];
  /** Id and extensions of the primitive `origin`. */
  _origin?: (Element | null)[];

  /** Which server these requirements apply to (0..1) */
  destination?: number;
  /** Id and extensions of the primitive `destination`. */
  _destination?: Element;

  /** Links to the FHIR specification (0..*) */
  link?: string[];
  /** Id and extensions of the primitive `link`. */
  _link?: (Element | null)[];

  /** Required Capability Statement (1..1) */
  capabilities?: string;
  /** Id and extensions of the primitive `capabilities`. */
  _capabilities?: Element;

  override fhirType(): string {
    return 'TestScript.metadata.capability';
  }

  /** FHIR JSON for this TestScriptMetadataCapability, typed as the plain `TestScriptCapability` data type. */
  override toJSON(): plainTypes.TestScriptCapability {
    return this.serialize() as plainTypes.TestScriptCapability;
  }

  /** Are the capabilities required? (1..1) */
  getRequired(): boolean | undefined {
    return this.required;
  }

  /** Sets `required`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setRequired(required: boolean | undefined): this {
    return this.setFieldValue('required', required);
  }

  hasRequired(): boolean {
    return this.hasFieldValue('required');
  }

  /** The element carrying the id and extensions of `required`. Created when absent. */
  getRequiredElement(): Element {
    if (this._required === undefined) {
      this._required = new Element();
    }
    return this._required;
  }

  setRequiredElement(requiredElement: Element | undefined): this {
    this._required = requiredElement;
    return this;
  }

  /** Are the capabilities validated? (1..1) */
  getValidated(): boolean | undefined {
    return this.validated;
  }

  /** Sets `validated`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setValidated(validated: boolean | undefined): this {
    return this.setFieldValue('validated', validated);
  }

  hasValidated(): boolean {
    return this.hasFieldValue('validated');
  }

  /** The element carrying the id and extensions of `validated`. Created when absent. */
  getValidatedElement(): Element {
    if (this._validated === undefined) {
      this._validated = new Element();
    }
    return this._validated;
  }

  setValidatedElement(validatedElement: Element | undefined): this {
    this._validated = validatedElement;
    return this;
  }

  /** The expected capabilities of the server (0..1) */
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

  /** Which origin server these requirements apply to (0..*) Never undefined; an empty list is created when absent. */
  getOrigin(): number[] {
    if (this.origin === undefined) {
      this.origin = [];
    }
    return this.origin;
  }

  setOrigin(origin: number[] | undefined): this {
    return this.setFieldValue('origin', origin);
  }

  hasOrigin(): boolean {
    return this.hasFieldValue('origin');
  }

  /** Appends one value to `origin`. Throws a FhirModelError when it is not a valid FHIR integer. */
  addOrigin(origin: number): this {
    return this.addFieldValue('origin', origin);
  }

  /** Which server these requirements apply to (0..1) */
  getDestination(): number | undefined {
    return this.destination;
  }

  /** Sets `destination`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setDestination(destination: number | undefined): this {
    return this.setFieldValue('destination', destination);
  }

  hasDestination(): boolean {
    return this.hasFieldValue('destination');
  }

  /** The element carrying the id and extensions of `destination`. Created when absent. */
  getDestinationElement(): Element {
    if (this._destination === undefined) {
      this._destination = new Element();
    }
    return this._destination;
  }

  setDestinationElement(destinationElement: Element | undefined): this {
    this._destination = destinationElement;
    return this;
  }

  /** Links to the FHIR specification (0..*) Never undefined; an empty list is created when absent. */
  getLink(): string[] {
    if (this.link === undefined) {
      this.link = [];
    }
    return this.link;
  }

  setLink(link: string[] | undefined): this {
    return this.setFieldValue('link', link);
  }

  hasLink(): boolean {
    return this.hasFieldValue('link');
  }

  /** Appends one value to `link`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addLink(link: string): this {
    return this.addFieldValue('link', link);
  }

  /** Required Capability Statement (1..1) */
  getCapabilities(): string | undefined {
    return this.capabilities;
  }

  /** Sets `capabilities`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setCapabilities(capabilities: string | undefined): this {
    return this.setFieldValue('capabilities', capabilities);
  }

  hasCapabilities(): boolean {
    return this.hasFieldValue('capabilities');
  }

  /** The element carrying the id and extensions of `capabilities`. Created when absent. */
  getCapabilitiesElement(): Element {
    if (this._capabilities === undefined) {
      this._capabilities = new Element();
    }
    return this._capabilities;
  }

  setCapabilitiesElement(capabilitiesElement: Element | undefined): this {
    this._capabilities = capabilitiesElement;
    return this;
  }
}

modelTypeRegistry.register('TestScriptMetadataCapability', TestScriptMetadataCapability, false);

/**
 * Indication of the artifact(s) that are tested by this test case
 */
export class TestScriptScope extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'artifact',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'artifact', typeCode: 'canonical' }],
    },
    {
      elementName: 'conformance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'conformance', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'phase',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'phase', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The specific conformance artifact being tested (1..1) */
  artifact?: string;
  /** Id and extensions of the primitive `artifact`. */
  _artifact?: Element;

  /** required | optional | strict (0..1) */
  conformance?: CodeableConcept;

  /** unit | integration | production (0..1) */
  phase?: CodeableConcept;

  override fhirType(): string {
    return 'TestScript.scope';
  }

  /** FHIR JSON for this TestScriptScope, typed as the plain `TestScriptScope` data type. */
  override toJSON(): plainTypes.TestScriptScope {
    return this.serialize() as plainTypes.TestScriptScope;
  }

  /** The specific conformance artifact being tested (1..1) */
  getArtifact(): string | undefined {
    return this.artifact;
  }

  /** Sets `artifact`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setArtifact(artifact: string | undefined): this {
    return this.setFieldValue('artifact', artifact);
  }

  hasArtifact(): boolean {
    return this.hasFieldValue('artifact');
  }

  /** The element carrying the id and extensions of `artifact`. Created when absent. */
  getArtifactElement(): Element {
    if (this._artifact === undefined) {
      this._artifact = new Element();
    }
    return this._artifact;
  }

  setArtifactElement(artifactElement: Element | undefined): this {
    this._artifact = artifactElement;
    return this;
  }

  /** required | optional | strict (0..1) Created when absent. */
  getConformance(): CodeableConcept {
    if (this.conformance === undefined) {
      this.conformance = new CodeableConcept();
    }
    return this.conformance;
  }

  setConformance(conformance: CodeableConcept | undefined): this {
    return this.setFieldValue('conformance', conformance);
  }

  hasConformance(): boolean {
    return this.hasFieldValue('conformance');
  }

  /** unit | integration | production (0..1) Created when absent. */
  getPhase(): CodeableConcept {
    if (this.phase === undefined) {
      this.phase = new CodeableConcept();
    }
    return this.phase;
  }

  setPhase(phase: CodeableConcept | undefined): this {
    return this.setFieldValue('phase', phase);
  }

  hasPhase(): boolean {
    return this.hasFieldValue('phase');
  }
}

modelTypeRegistry.register('TestScriptScope', TestScriptScope, false);

/**
 * Fixture in the test script - by reference (uri)
 */
export class TestScriptFixture extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'autocreate',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'autocreate', typeCode: 'boolean' }],
    },
    {
      elementName: 'autodelete',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'autodelete', typeCode: 'boolean' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'Reference' }],
    },
  ];

  /** Whether or not to implicitly create the fixture during setup (1..1) */
  autocreate?: boolean;
  /** Id and extensions of the primitive `autocreate`. */
  _autocreate?: Element;

  /** Whether or not to implicitly delete the fixture during teardown (1..1) */
  autodelete?: boolean;
  /** Id and extensions of the primitive `autodelete`. */
  _autodelete?: Element;

  /** Reference of the resource (0..1) */
  resource?: Reference;

  override fhirType(): string {
    return 'TestScript.fixture';
  }

  /** FHIR JSON for this TestScriptFixture, typed as the plain `TestScriptFixture` data type. */
  override toJSON(): plainTypes.TestScriptFixture {
    return this.serialize() as plainTypes.TestScriptFixture;
  }

  /** Whether or not to implicitly create the fixture during setup (1..1) */
  getAutocreate(): boolean | undefined {
    return this.autocreate;
  }

  /** Sets `autocreate`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAutocreate(autocreate: boolean | undefined): this {
    return this.setFieldValue('autocreate', autocreate);
  }

  hasAutocreate(): boolean {
    return this.hasFieldValue('autocreate');
  }

  /** The element carrying the id and extensions of `autocreate`. Created when absent. */
  getAutocreateElement(): Element {
    if (this._autocreate === undefined) {
      this._autocreate = new Element();
    }
    return this._autocreate;
  }

  setAutocreateElement(autocreateElement: Element | undefined): this {
    this._autocreate = autocreateElement;
    return this;
  }

  /** Whether or not to implicitly delete the fixture during teardown (1..1) */
  getAutodelete(): boolean | undefined {
    return this.autodelete;
  }

  /** Sets `autodelete`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAutodelete(autodelete: boolean | undefined): this {
    return this.setFieldValue('autodelete', autodelete);
  }

  hasAutodelete(): boolean {
    return this.hasFieldValue('autodelete');
  }

  /** The element carrying the id and extensions of `autodelete`. Created when absent. */
  getAutodeleteElement(): Element {
    if (this._autodelete === undefined) {
      this._autodelete = new Element();
    }
    return this._autodelete;
  }

  setAutodeleteElement(autodeleteElement: Element | undefined): this {
    this._autodelete = autodeleteElement;
    return this;
  }

  /** Reference of the resource (0..1) Created when absent. */
  getResource(): Reference {
    if (this.resource === undefined) {
      this.resource = new Reference();
    }
    return this.resource;
  }

  setResource(resource: Reference | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }
}

modelTypeRegistry.register('TestScriptFixture', TestScriptFixture, false);

/**
 * Placeholder for evaluated elements
 */
export class TestScriptVariable extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'defaultValue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'defaultValue', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
    {
      elementName: 'headerField',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'headerField', typeCode: 'string' }],
    },
    {
      elementName: 'hint',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hint', typeCode: 'string' }],
    },
    {
      elementName: 'path',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'sourceId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceId', typeCode: 'id' }],
    },
  ];

  /** Descriptive name for this variable (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Default, hard-coded, or user-defined value for this variable (0..1) */
  defaultValue?: string;
  /** Id and extensions of the primitive `defaultValue`. */
  _defaultValue?: Element;

  /** Natural language description of the variable (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The FHIRPath expression against the fixture body (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  /** HTTP header field name for source (0..1) */
  headerField?: string;
  /** Id and extensions of the primitive `headerField`. */
  _headerField?: Element;

  /** Hint help text for default value to enter (0..1) */
  hint?: string;
  /** Id and extensions of the primitive `hint`. */
  _hint?: Element;

  /** XPath or JSONPath against the fixture body (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** Fixture Id of source expression or headerField within this variable (0..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;

  override fhirType(): string {
    return 'TestScript.variable';
  }

  /** FHIR JSON for this TestScriptVariable, typed as the plain `TestScriptVariable` data type. */
  override toJSON(): plainTypes.TestScriptVariable {
    return this.serialize() as plainTypes.TestScriptVariable;
  }

  /** Descriptive name for this variable (1..1) */
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

  /** Default, hard-coded, or user-defined value for this variable (0..1) */
  getDefaultValue(): string | undefined {
    return this.defaultValue;
  }

  /** Sets `defaultValue`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDefaultValue(defaultValue: string | undefined): this {
    return this.setFieldValue('defaultValue', defaultValue);
  }

  hasDefaultValue(): boolean {
    return this.hasFieldValue('defaultValue');
  }

  /** The element carrying the id and extensions of `defaultValue`. Created when absent. */
  getDefaultValueElement(): Element {
    if (this._defaultValue === undefined) {
      this._defaultValue = new Element();
    }
    return this._defaultValue;
  }

  setDefaultValueElement(defaultValueElement: Element | undefined): this {
    this._defaultValue = defaultValueElement;
    return this;
  }

  /** Natural language description of the variable (0..1) */
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

  /** The FHIRPath expression against the fixture body (0..1) */
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

  /** HTTP header field name for source (0..1) */
  getHeaderField(): string | undefined {
    return this.headerField;
  }

  /** Sets `headerField`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setHeaderField(headerField: string | undefined): this {
    return this.setFieldValue('headerField', headerField);
  }

  hasHeaderField(): boolean {
    return this.hasFieldValue('headerField');
  }

  /** The element carrying the id and extensions of `headerField`. Created when absent. */
  getHeaderFieldElement(): Element {
    if (this._headerField === undefined) {
      this._headerField = new Element();
    }
    return this._headerField;
  }

  setHeaderFieldElement(headerFieldElement: Element | undefined): this {
    this._headerField = headerFieldElement;
    return this;
  }

  /** Hint help text for default value to enter (0..1) */
  getHint(): string | undefined {
    return this.hint;
  }

  /** Sets `hint`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setHint(hint: string | undefined): this {
    return this.setFieldValue('hint', hint);
  }

  hasHint(): boolean {
    return this.hasFieldValue('hint');
  }

  /** The element carrying the id and extensions of `hint`. Created when absent. */
  getHintElement(): Element {
    if (this._hint === undefined) {
      this._hint = new Element();
    }
    return this._hint;
  }

  setHintElement(hintElement: Element | undefined): this {
    this._hint = hintElement;
    return this;
  }

  /** XPath or JSONPath against the fixture body (0..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }

  /** Fixture Id of source expression or headerField within this variable (0..1) */
  getSourceId(): string | undefined {
    return this.sourceId;
  }

  /** Sets `sourceId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setSourceId(sourceId: string | undefined): this {
    return this.setFieldValue('sourceId', sourceId);
  }

  hasSourceId(): boolean {
    return this.hasFieldValue('sourceId');
  }

  /** The element carrying the id and extensions of `sourceId`. Created when absent. */
  getSourceIdElement(): Element {
    if (this._sourceId === undefined) {
      this._sourceId = new Element();
    }
    return this._sourceId;
  }

  setSourceIdElement(sourceIdElement: Element | undefined): this {
    this._sourceId = sourceIdElement;
    return this;
  }
}

modelTypeRegistry.register('TestScriptVariable', TestScriptVariable, false);

/**
 * A series of required setup operations before tests are executed
 */
export class TestScriptSetup extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'action',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'TestScriptSetupAction' }],
    },
  ];

  /** A setup operation or assert to perform (1..*) */
  action?: TestScriptSetupAction[];

  override fhirType(): string {
    return 'TestScript.setup';
  }

  /** FHIR JSON for this TestScriptSetup, typed as the plain `TestScriptSetup` data type. */
  override toJSON(): plainTypes.TestScriptSetup {
    return this.serialize() as plainTypes.TestScriptSetup;
  }

  /** A setup operation or assert to perform (1..*) Never undefined; an empty list is created when absent. */
  getAction(): TestScriptSetupAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: TestScriptSetupAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty TestScriptSetupAction to `action` and returns it so it can be filled in. */
  addAction(): TestScriptSetupAction;
  /** Appends the given TestScriptSetupAction to `action` and returns this object for chaining. */
  addAction(testScriptSetupAction: TestScriptSetupAction): this;
  addAction(testScriptSetupAction?: TestScriptSetupAction): TestScriptSetupAction | this {
    if (testScriptSetupAction !== undefined) {
      return this.addFieldValue('action', testScriptSetupAction);
    }
    const createdTestScriptSetupAction = new TestScriptSetupAction();
    this.addFieldValue('action', createdTestScriptSetupAction);
    return createdTestScriptSetupAction;
  }

  /** The first TestScriptSetupAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): TestScriptSetupAction {
    const firstTestScriptSetupAction = this.getAction()[0];
    return firstTestScriptSetupAction === undefined ? this.addAction() : firstTestScriptSetupAction;
  }
}

modelTypeRegistry.register('TestScriptSetup', TestScriptSetup, false);

/**
 * A setup operation or assert to perform
 */
export class TestScriptSetupAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'operation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operation', typeCode: 'TestScriptSetupActionOperation' }],
    },
    {
      elementName: 'assert',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assert', typeCode: 'TestScriptSetupActionAssert' }],
    },
  ];

  /** The setup operation to perform (0..1) */
  operation?: TestScriptSetupActionOperation;

  /** The assertion to perform (0..1) */
  assert?: TestScriptSetupActionAssert;

  override fhirType(): string {
    return 'TestScript.setup.action';
  }

  /** FHIR JSON for this TestScriptSetupAction, typed as the plain `TestScriptAction` data type. */
  override toJSON(): plainTypes.TestScriptAction {
    return this.serialize() as plainTypes.TestScriptAction;
  }

  /** The setup operation to perform (0..1) Created when absent. */
  getOperation(): TestScriptSetupActionOperation {
    if (this.operation === undefined) {
      this.operation = new TestScriptSetupActionOperation();
    }
    return this.operation;
  }

  setOperation(operation: TestScriptSetupActionOperation | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }

  /** The assertion to perform (0..1) Created when absent. */
  getAssert(): TestScriptSetupActionAssert {
    if (this.assert === undefined) {
      this.assert = new TestScriptSetupActionAssert();
    }
    return this.assert;
  }

  setAssert(assert: TestScriptSetupActionAssert | undefined): this {
    return this.setFieldValue('assert', assert);
  }

  hasAssert(): boolean {
    return this.hasFieldValue('assert');
  }
}

modelTypeRegistry.register('TestScriptSetupAction', TestScriptSetupAction, false);

/**
 * The setup operation to perform
 */
export class TestScriptSetupActionOperation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'uri' }],
    },
    {
      elementName: 'label',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'label', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'accept',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'accept', typeCode: 'code' }],
    },
    {
      elementName: 'contentType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentType', typeCode: 'code' }],
    },
    {
      elementName: 'destination',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'destination', typeCode: 'integer' }],
    },
    {
      elementName: 'encodeRequestUrl',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encodeRequestUrl', typeCode: 'boolean' }],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'method',
          typeCode: 'code',
          allowedCodes: valueSetCodes.TestScriptRequestMethodCode,
        },
      ],
    },
    {
      elementName: 'origin',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'origin', typeCode: 'integer' }],
    },
    {
      elementName: 'params',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'params', typeCode: 'string' }],
    },
    {
      elementName: 'requestHeader',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'requestHeader', typeCode: 'TestScriptSetupActionOperationRequestHeader' },
      ],
    },
    {
      elementName: 'requestId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requestId', typeCode: 'id' }],
    },
    {
      elementName: 'responseId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'responseId', typeCode: 'id' }],
    },
    {
      elementName: 'sourceId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceId', typeCode: 'id' }],
    },
    {
      elementName: 'targetId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'targetId', typeCode: 'id' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'string' }],
    },
  ];

  /** The operation code type that will be executed (0..1) */
  type?: Coding;

  /** Resource type (0..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;

  /** Tracking/logging operation label (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;

  /** Tracking/reporting operation description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Mime type to accept in the payload of the response, with charset etc (0..1) */
  accept?: string;
  /** Id and extensions of the primitive `accept`. */
  _accept?: Element;

  /** Mime type of the request payload contents, with charset etc (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;

  /** Server responding to the request (0..1) */
  destination?: number;
  /** Id and extensions of the primitive `destination`. */
  _destination?: Element;

  /** Whether or not to send the request url in encoded format (1..1) */
  encodeRequestUrl?: boolean;
  /** Id and extensions of the primitive `encodeRequestUrl`. */
  _encodeRequestUrl?: Element;

  /** delete | get | options | patch | post | put | head (0..1) */
  method?: valueSetCodes.TestScriptRequestMethodCode;
  /** Id and extensions of the primitive `method`. */
  _method?: Element;

  /** Server initiating the request (0..1) */
  origin?: number;
  /** Id and extensions of the primitive `origin`. */
  _origin?: Element;

  /** Explicitly defined path parameters (0..1) */
  params?: string;
  /** Id and extensions of the primitive `params`. */
  _params?: Element;

  /** Each operation can have one or more header elements (0..*) */
  requestHeader?: TestScriptSetupActionOperationRequestHeader[];

  /** Fixture Id of mapped request (0..1) */
  requestId?: string;
  /** Id and extensions of the primitive `requestId`. */
  _requestId?: Element;

  /** Fixture Id of mapped response (0..1) */
  responseId?: string;
  /** Id and extensions of the primitive `responseId`. */
  _responseId?: Element;

  /** Fixture Id of body for PUT and POST requests (0..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;

  /** Id of fixture used for extracting the [id], [type], and [vid] for GET requests (0..1) */
  targetId?: string;
  /** Id and extensions of the primitive `targetId`. */
  _targetId?: Element;

  /** Request URL (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  override fhirType(): string {
    return 'TestScript.setup.action.operation';
  }

  /** FHIR JSON for this TestScriptSetupActionOperation, typed as the plain `TestScriptOperation` data type. */
  override toJSON(): plainTypes.TestScriptOperation {
    return this.serialize() as plainTypes.TestScriptOperation;
  }

  /** The operation code type that will be executed (0..1) Created when absent. */
  getType(): Coding {
    if (this.type === undefined) {
      this.type = new Coding();
    }
    return this.type;
  }

  setType(type: Coding | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Resource type (0..1) */
  getResource(): string | undefined {
    return this.resource;
  }

  /** Sets `resource`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setResource(resource: string | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** The element carrying the id and extensions of `resource`. Created when absent. */
  getResourceElement(): Element {
    if (this._resource === undefined) {
      this._resource = new Element();
    }
    return this._resource;
  }

  setResourceElement(resourceElement: Element | undefined): this {
    this._resource = resourceElement;
    return this;
  }

  /** Tracking/logging operation label (0..1) */
  getLabel(): string | undefined {
    return this.label;
  }

  /** Sets `label`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLabel(label: string | undefined): this {
    return this.setFieldValue('label', label);
  }

  hasLabel(): boolean {
    return this.hasFieldValue('label');
  }

  /** The element carrying the id and extensions of `label`. Created when absent. */
  getLabelElement(): Element {
    if (this._label === undefined) {
      this._label = new Element();
    }
    return this._label;
  }

  setLabelElement(labelElement: Element | undefined): this {
    this._label = labelElement;
    return this;
  }

  /** Tracking/reporting operation description (0..1) */
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

  /** Mime type to accept in the payload of the response, with charset etc (0..1) */
  getAccept(): string | undefined {
    return this.accept;
  }

  /** Sets `accept`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setAccept(accept: string | undefined): this {
    return this.setFieldValue('accept', accept);
  }

  hasAccept(): boolean {
    return this.hasFieldValue('accept');
  }

  /** The element carrying the id and extensions of `accept`. Created when absent. */
  getAcceptElement(): Element {
    if (this._accept === undefined) {
      this._accept = new Element();
    }
    return this._accept;
  }

  setAcceptElement(acceptElement: Element | undefined): this {
    this._accept = acceptElement;
    return this;
  }

  /** Mime type of the request payload contents, with charset etc (0..1) */
  getContentType(): string | undefined {
    return this.contentType;
  }

  /** Sets `contentType`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setContentType(contentType: string | undefined): this {
    return this.setFieldValue('contentType', contentType);
  }

  hasContentType(): boolean {
    return this.hasFieldValue('contentType');
  }

  /** The element carrying the id and extensions of `contentType`. Created when absent. */
  getContentTypeElement(): Element {
    if (this._contentType === undefined) {
      this._contentType = new Element();
    }
    return this._contentType;
  }

  setContentTypeElement(contentTypeElement: Element | undefined): this {
    this._contentType = contentTypeElement;
    return this;
  }

  /** Server responding to the request (0..1) */
  getDestination(): number | undefined {
    return this.destination;
  }

  /** Sets `destination`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setDestination(destination: number | undefined): this {
    return this.setFieldValue('destination', destination);
  }

  hasDestination(): boolean {
    return this.hasFieldValue('destination');
  }

  /** The element carrying the id and extensions of `destination`. Created when absent. */
  getDestinationElement(): Element {
    if (this._destination === undefined) {
      this._destination = new Element();
    }
    return this._destination;
  }

  setDestinationElement(destinationElement: Element | undefined): this {
    this._destination = destinationElement;
    return this;
  }

  /** Whether or not to send the request url in encoded format (1..1) */
  getEncodeRequestUrl(): boolean | undefined {
    return this.encodeRequestUrl;
  }

  /** Sets `encodeRequestUrl`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setEncodeRequestUrl(encodeRequestUrl: boolean | undefined): this {
    return this.setFieldValue('encodeRequestUrl', encodeRequestUrl);
  }

  hasEncodeRequestUrl(): boolean {
    return this.hasFieldValue('encodeRequestUrl');
  }

  /** The element carrying the id and extensions of `encodeRequestUrl`. Created when absent. */
  getEncodeRequestUrlElement(): Element {
    if (this._encodeRequestUrl === undefined) {
      this._encodeRequestUrl = new Element();
    }
    return this._encodeRequestUrl;
  }

  setEncodeRequestUrlElement(encodeRequestUrlElement: Element | undefined): this {
    this._encodeRequestUrl = encodeRequestUrlElement;
    return this;
  }

  /** delete | get | options | patch | post | put | head (0..1) */
  getMethod(): valueSetCodes.TestScriptRequestMethodCode | undefined {
    return this.method;
  }

  /** Sets `method`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMethod(method: valueSetCodes.TestScriptRequestMethodCode | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }

  /** The element carrying the id and extensions of `method`. Created when absent. */
  getMethodElement(): Element {
    if (this._method === undefined) {
      this._method = new Element();
    }
    return this._method;
  }

  setMethodElement(methodElement: Element | undefined): this {
    this._method = methodElement;
    return this;
  }

  /** Server initiating the request (0..1) */
  getOrigin(): number | undefined {
    return this.origin;
  }

  /** Sets `origin`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setOrigin(origin: number | undefined): this {
    return this.setFieldValue('origin', origin);
  }

  hasOrigin(): boolean {
    return this.hasFieldValue('origin');
  }

  /** The element carrying the id and extensions of `origin`. Created when absent. */
  getOriginElement(): Element {
    if (this._origin === undefined) {
      this._origin = new Element();
    }
    return this._origin;
  }

  setOriginElement(originElement: Element | undefined): this {
    this._origin = originElement;
    return this;
  }

  /** Explicitly defined path parameters (0..1) */
  getParams(): string | undefined {
    return this.params;
  }

  /** Sets `params`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setParams(params: string | undefined): this {
    return this.setFieldValue('params', params);
  }

  hasParams(): boolean {
    return this.hasFieldValue('params');
  }

  /** The element carrying the id and extensions of `params`. Created when absent. */
  getParamsElement(): Element {
    if (this._params === undefined) {
      this._params = new Element();
    }
    return this._params;
  }

  setParamsElement(paramsElement: Element | undefined): this {
    this._params = paramsElement;
    return this;
  }

  /** Each operation can have one or more header elements (0..*) Never undefined; an empty list is created when absent. */
  getRequestHeader(): TestScriptSetupActionOperationRequestHeader[] {
    if (this.requestHeader === undefined) {
      this.requestHeader = [];
    }
    return this.requestHeader;
  }

  setRequestHeader(requestHeader: TestScriptSetupActionOperationRequestHeader[] | undefined): this {
    return this.setFieldValue('requestHeader', requestHeader);
  }

  hasRequestHeader(): boolean {
    return this.hasFieldValue('requestHeader');
  }

  /** Appends a new, empty TestScriptSetupActionOperationRequestHeader to `requestHeader` and returns it so it can be filled in. */
  addRequestHeader(): TestScriptSetupActionOperationRequestHeader;
  /** Appends the given TestScriptSetupActionOperationRequestHeader to `requestHeader` and returns this object for chaining. */
  addRequestHeader(
    testScriptSetupActionOperationRequestHeader: TestScriptSetupActionOperationRequestHeader
  ): this;
  addRequestHeader(
    testScriptSetupActionOperationRequestHeader?: TestScriptSetupActionOperationRequestHeader
  ): TestScriptSetupActionOperationRequestHeader | this {
    if (testScriptSetupActionOperationRequestHeader !== undefined) {
      return this.addFieldValue('requestHeader', testScriptSetupActionOperationRequestHeader);
    }
    const createdTestScriptSetupActionOperationRequestHeader =
      new TestScriptSetupActionOperationRequestHeader();
    this.addFieldValue('requestHeader', createdTestScriptSetupActionOperationRequestHeader);
    return createdTestScriptSetupActionOperationRequestHeader;
  }

  /** The first TestScriptSetupActionOperationRequestHeader of `requestHeader`. One is added when the list is empty. */
  getRequestHeaderFirstRep(): TestScriptSetupActionOperationRequestHeader {
    const firstTestScriptSetupActionOperationRequestHeader = this.getRequestHeader()[0];
    return firstTestScriptSetupActionOperationRequestHeader === undefined
      ? this.addRequestHeader()
      : firstTestScriptSetupActionOperationRequestHeader;
  }

  /** Fixture Id of mapped request (0..1) */
  getRequestId(): string | undefined {
    return this.requestId;
  }

  /** Sets `requestId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setRequestId(requestId: string | undefined): this {
    return this.setFieldValue('requestId', requestId);
  }

  hasRequestId(): boolean {
    return this.hasFieldValue('requestId');
  }

  /** The element carrying the id and extensions of `requestId`. Created when absent. */
  getRequestIdElement(): Element {
    if (this._requestId === undefined) {
      this._requestId = new Element();
    }
    return this._requestId;
  }

  setRequestIdElement(requestIdElement: Element | undefined): this {
    this._requestId = requestIdElement;
    return this;
  }

  /** Fixture Id of mapped response (0..1) */
  getResponseId(): string | undefined {
    return this.responseId;
  }

  /** Sets `responseId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setResponseId(responseId: string | undefined): this {
    return this.setFieldValue('responseId', responseId);
  }

  hasResponseId(): boolean {
    return this.hasFieldValue('responseId');
  }

  /** The element carrying the id and extensions of `responseId`. Created when absent. */
  getResponseIdElement(): Element {
    if (this._responseId === undefined) {
      this._responseId = new Element();
    }
    return this._responseId;
  }

  setResponseIdElement(responseIdElement: Element | undefined): this {
    this._responseId = responseIdElement;
    return this;
  }

  /** Fixture Id of body for PUT and POST requests (0..1) */
  getSourceId(): string | undefined {
    return this.sourceId;
  }

  /** Sets `sourceId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setSourceId(sourceId: string | undefined): this {
    return this.setFieldValue('sourceId', sourceId);
  }

  hasSourceId(): boolean {
    return this.hasFieldValue('sourceId');
  }

  /** The element carrying the id and extensions of `sourceId`. Created when absent. */
  getSourceIdElement(): Element {
    if (this._sourceId === undefined) {
      this._sourceId = new Element();
    }
    return this._sourceId;
  }

  setSourceIdElement(sourceIdElement: Element | undefined): this {
    this._sourceId = sourceIdElement;
    return this;
  }

  /** Id of fixture used for extracting the [id], [type], and [vid] for GET requests (0..1) */
  getTargetId(): string | undefined {
    return this.targetId;
  }

  /** Sets `targetId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setTargetId(targetId: string | undefined): this {
    return this.setFieldValue('targetId', targetId);
  }

  hasTargetId(): boolean {
    return this.hasFieldValue('targetId');
  }

  /** The element carrying the id and extensions of `targetId`. Created when absent. */
  getTargetIdElement(): Element {
    if (this._targetId === undefined) {
      this._targetId = new Element();
    }
    return this._targetId;
  }

  setTargetIdElement(targetIdElement: Element | undefined): this {
    this._targetId = targetIdElement;
    return this;
  }

  /** Request URL (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

modelTypeRegistry.register('TestScriptSetupActionOperation', TestScriptSetupActionOperation, false);

/**
 * Each operation can have one or more header elements
 */
export class TestScriptSetupActionOperationRequestHeader extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'field',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'field', typeCode: 'string' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** HTTP header field name (1..1) */
  field?: string;
  /** Id and extensions of the primitive `field`. */
  _field?: Element;

  /** HTTP headerfield value (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'TestScript.setup.action.operation.requestHeader';
  }

  /** FHIR JSON for this TestScriptSetupActionOperationRequestHeader, typed as the plain `TestScriptRequestHeader` data type. */
  override toJSON(): plainTypes.TestScriptRequestHeader {
    return this.serialize() as plainTypes.TestScriptRequestHeader;
  }

  /** HTTP header field name (1..1) */
  getField(): string | undefined {
    return this.field;
  }

  /** Sets `field`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setField(field: string | undefined): this {
    return this.setFieldValue('field', field);
  }

  hasField(): boolean {
    return this.hasFieldValue('field');
  }

  /** The element carrying the id and extensions of `field`. Created when absent. */
  getFieldElement(): Element {
    if (this._field === undefined) {
      this._field = new Element();
    }
    return this._field;
  }

  setFieldElement(fieldElement: Element | undefined): this {
    this._field = fieldElement;
    return this;
  }

  /** HTTP headerfield value (1..1) */
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
  'TestScriptSetupActionOperationRequestHeader',
  TestScriptSetupActionOperationRequestHeader,
  false
);

/**
 * The assertion to perform
 */
export class TestScriptSetupActionAssert extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'label',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'label', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'direction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'direction',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AssertionDirectionType,
        },
      ],
    },
    {
      elementName: 'compareToSourceId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'compareToSourceId', typeCode: 'string' }],
    },
    {
      elementName: 'compareToSourceExpression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'compareToSourceExpression', typeCode: 'string' }],
    },
    {
      elementName: 'compareToSourcePath',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'compareToSourcePath', typeCode: 'string' }],
    },
    {
      elementName: 'contentType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentType', typeCode: 'code' }],
    },
    {
      elementName: 'defaultManualCompletion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'defaultManualCompletion',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AssertionManualCompletionType,
        },
      ],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
    {
      elementName: 'headerField',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'headerField', typeCode: 'string' }],
    },
    {
      elementName: 'minimumId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'minimumId', typeCode: 'string' }],
    },
    {
      elementName: 'navigationLinks',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'navigationLinks', typeCode: 'boolean' }],
    },
    {
      elementName: 'operator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'operator',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AssertionOperatorType,
        },
      ],
    },
    {
      elementName: 'path',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'requestMethod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requestMethod',
          typeCode: 'code',
          allowedCodes: valueSetCodes.TestScriptRequestMethodCode,
        },
      ],
    },
    {
      elementName: 'requestURL',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requestURL', typeCode: 'string' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'uri' }],
    },
    {
      elementName: 'response',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'response',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AssertionResponseTypes,
        },
      ],
    },
    {
      elementName: 'responseCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'responseCode', typeCode: 'string' }],
    },
    {
      elementName: 'sourceId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceId', typeCode: 'id' }],
    },
    {
      elementName: 'stopTestOnFail',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'stopTestOnFail', typeCode: 'boolean' }],
    },
    {
      elementName: 'validateProfileId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validateProfileId', typeCode: 'id' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
    {
      elementName: 'warningOnly',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'warningOnly', typeCode: 'boolean' }],
    },
    {
      elementName: 'requirement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'requirement', typeCode: 'TestScriptSetupActionAssertRequirement' }],
    },
  ];

  /** Tracking/logging assertion label (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;

  /** Tracking/reporting assertion description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** response | request (0..1) */
  direction?: valueSetCodes.AssertionDirectionType;
  /** Id and extensions of the primitive `direction`. */
  _direction?: Element;

  /** Id of the source fixture to be evaluated (0..1) */
  compareToSourceId?: string;
  /** Id and extensions of the primitive `compareToSourceId`. */
  _compareToSourceId?: Element;

  /** The FHIRPath expression to evaluate against the source fixture (0..1) */
  compareToSourceExpression?: string;
  /** Id and extensions of the primitive `compareToSourceExpression`. */
  _compareToSourceExpression?: Element;

  /** XPath or JSONPath expression to evaluate against the source fixture (0..1) */
  compareToSourcePath?: string;
  /** Id and extensions of the primitive `compareToSourcePath`. */
  _compareToSourcePath?: Element;

  /** Mime type to compare against the 'Content-Type' header (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;

  /** fail | pass | skip | stop (0..1) */
  defaultManualCompletion?: valueSetCodes.AssertionManualCompletionType;
  /** Id and extensions of the primitive `defaultManualCompletion`. */
  _defaultManualCompletion?: Element;

  /** The FHIRPath expression to be evaluated (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  /** HTTP header field name (0..1) */
  headerField?: string;
  /** Id and extensions of the primitive `headerField`. */
  _headerField?: Element;

  /** Fixture Id of minimum content resource (0..1) */
  minimumId?: string;
  /** Id and extensions of the primitive `minimumId`. */
  _minimumId?: Element;

  /** Perform validation on navigation links? (0..1) */
  navigationLinks?: boolean;
  /** Id and extensions of the primitive `navigationLinks`. */
  _navigationLinks?: Element;

  /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval | manualEval (0..1) */
  operator?: valueSetCodes.AssertionOperatorType;
  /** Id and extensions of the primitive `operator`. */
  _operator?: Element;

  /** XPath or JSONPath expression (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** delete | get | options | patch | post | put | head (0..1) */
  requestMethod?: valueSetCodes.TestScriptRequestMethodCode;
  /** Id and extensions of the primitive `requestMethod`. */
  _requestMethod?: Element;

  /** Request URL comparison value (0..1) */
  requestURL?: string;
  /** Id and extensions of the primitive `requestURL`. */
  _requestURL?: Element;

  /** Resource type (0..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;

  /** continue | switchingProtocols | okay | created | accepted | nonAuthoritativeInformation | noContent | resetContent | partialContent | multipleChoices | movedPermanently | found | seeOther | notModified | useProxy | temporaryRedirect | permanentRedirect | badRequest | unauthorized | paymentRequired | forbidden | notFound | methodNotAllowed | notAcceptable | proxyAuthenticationRequired | requestTimeout | conflict | gone | lengthRequired | preconditionFailed | contentTooLarge | uriTooLong | unsupportedMediaType | rangeNotSatisfiable | expectationFailed | misdirectedRequest | unprocessableContent | upgradeRequired | internalServerError | notImplemented | badGateway | serviceUnavailable | gatewayTimeout | httpVersionNotSupported (0..1) */
  response?: valueSetCodes.AssertionResponseTypes;
  /** Id and extensions of the primitive `response`. */
  _response?: Element;

  /** HTTP response code to test (0..1) */
  responseCode?: string;
  /** Id and extensions of the primitive `responseCode`. */
  _responseCode?: Element;

  /** Fixture Id of source expression or headerField (0..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;

  /** If this assert fails, will the current test execution stop? (1..1) */
  stopTestOnFail?: boolean;
  /** Id and extensions of the primitive `stopTestOnFail`. */
  _stopTestOnFail?: Element;

  /** Profile Id of validation profile reference (0..1) */
  validateProfileId?: string;
  /** Id and extensions of the primitive `validateProfileId`. */
  _validateProfileId?: Element;

  /** The value to compare to (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** Will this assert produce a warning only on error? (1..1) */
  warningOnly?: boolean;
  /** Id and extensions of the primitive `warningOnly`. */
  _warningOnly?: Element;

  /** Links or references to the testing requirements (0..*) */
  requirement?: TestScriptSetupActionAssertRequirement[];

  override fhirType(): string {
    return 'TestScript.setup.action.assert';
  }

  /** FHIR JSON for this TestScriptSetupActionAssert, typed as the plain `TestScriptAssert` data type. */
  override toJSON(): plainTypes.TestScriptAssert {
    return this.serialize() as plainTypes.TestScriptAssert;
  }

  /** Tracking/logging assertion label (0..1) */
  getLabel(): string | undefined {
    return this.label;
  }

  /** Sets `label`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLabel(label: string | undefined): this {
    return this.setFieldValue('label', label);
  }

  hasLabel(): boolean {
    return this.hasFieldValue('label');
  }

  /** The element carrying the id and extensions of `label`. Created when absent. */
  getLabelElement(): Element {
    if (this._label === undefined) {
      this._label = new Element();
    }
    return this._label;
  }

  setLabelElement(labelElement: Element | undefined): this {
    this._label = labelElement;
    return this;
  }

  /** Tracking/reporting assertion description (0..1) */
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

  /** response | request (0..1) */
  getDirection(): valueSetCodes.AssertionDirectionType | undefined {
    return this.direction;
  }

  /** Sets `direction`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDirection(direction: valueSetCodes.AssertionDirectionType | undefined): this {
    return this.setFieldValue('direction', direction);
  }

  hasDirection(): boolean {
    return this.hasFieldValue('direction');
  }

  /** The element carrying the id and extensions of `direction`. Created when absent. */
  getDirectionElement(): Element {
    if (this._direction === undefined) {
      this._direction = new Element();
    }
    return this._direction;
  }

  setDirectionElement(directionElement: Element | undefined): this {
    this._direction = directionElement;
    return this;
  }

  /** Id of the source fixture to be evaluated (0..1) */
  getCompareToSourceId(): string | undefined {
    return this.compareToSourceId;
  }

  /** Sets `compareToSourceId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCompareToSourceId(compareToSourceId: string | undefined): this {
    return this.setFieldValue('compareToSourceId', compareToSourceId);
  }

  hasCompareToSourceId(): boolean {
    return this.hasFieldValue('compareToSourceId');
  }

  /** The element carrying the id and extensions of `compareToSourceId`. Created when absent. */
  getCompareToSourceIdElement(): Element {
    if (this._compareToSourceId === undefined) {
      this._compareToSourceId = new Element();
    }
    return this._compareToSourceId;
  }

  setCompareToSourceIdElement(compareToSourceIdElement: Element | undefined): this {
    this._compareToSourceId = compareToSourceIdElement;
    return this;
  }

  /** The FHIRPath expression to evaluate against the source fixture (0..1) */
  getCompareToSourceExpression(): string | undefined {
    return this.compareToSourceExpression;
  }

  /** Sets `compareToSourceExpression`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCompareToSourceExpression(compareToSourceExpression: string | undefined): this {
    return this.setFieldValue('compareToSourceExpression', compareToSourceExpression);
  }

  hasCompareToSourceExpression(): boolean {
    return this.hasFieldValue('compareToSourceExpression');
  }

  /** The element carrying the id and extensions of `compareToSourceExpression`. Created when absent. */
  getCompareToSourceExpressionElement(): Element {
    if (this._compareToSourceExpression === undefined) {
      this._compareToSourceExpression = new Element();
    }
    return this._compareToSourceExpression;
  }

  setCompareToSourceExpressionElement(compareToSourceExpressionElement: Element | undefined): this {
    this._compareToSourceExpression = compareToSourceExpressionElement;
    return this;
  }

  /** XPath or JSONPath expression to evaluate against the source fixture (0..1) */
  getCompareToSourcePath(): string | undefined {
    return this.compareToSourcePath;
  }

  /** Sets `compareToSourcePath`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCompareToSourcePath(compareToSourcePath: string | undefined): this {
    return this.setFieldValue('compareToSourcePath', compareToSourcePath);
  }

  hasCompareToSourcePath(): boolean {
    return this.hasFieldValue('compareToSourcePath');
  }

  /** The element carrying the id and extensions of `compareToSourcePath`. Created when absent. */
  getCompareToSourcePathElement(): Element {
    if (this._compareToSourcePath === undefined) {
      this._compareToSourcePath = new Element();
    }
    return this._compareToSourcePath;
  }

  setCompareToSourcePathElement(compareToSourcePathElement: Element | undefined): this {
    this._compareToSourcePath = compareToSourcePathElement;
    return this;
  }

  /** Mime type to compare against the 'Content-Type' header (0..1) */
  getContentType(): string | undefined {
    return this.contentType;
  }

  /** Sets `contentType`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setContentType(contentType: string | undefined): this {
    return this.setFieldValue('contentType', contentType);
  }

  hasContentType(): boolean {
    return this.hasFieldValue('contentType');
  }

  /** The element carrying the id and extensions of `contentType`. Created when absent. */
  getContentTypeElement(): Element {
    if (this._contentType === undefined) {
      this._contentType = new Element();
    }
    return this._contentType;
  }

  setContentTypeElement(contentTypeElement: Element | undefined): this {
    this._contentType = contentTypeElement;
    return this;
  }

  /** fail | pass | skip | stop (0..1) */
  getDefaultManualCompletion(): valueSetCodes.AssertionManualCompletionType | undefined {
    return this.defaultManualCompletion;
  }

  /** Sets `defaultManualCompletion`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDefaultManualCompletion(
    defaultManualCompletion: valueSetCodes.AssertionManualCompletionType | undefined
  ): this {
    return this.setFieldValue('defaultManualCompletion', defaultManualCompletion);
  }

  hasDefaultManualCompletion(): boolean {
    return this.hasFieldValue('defaultManualCompletion');
  }

  /** The element carrying the id and extensions of `defaultManualCompletion`. Created when absent. */
  getDefaultManualCompletionElement(): Element {
    if (this._defaultManualCompletion === undefined) {
      this._defaultManualCompletion = new Element();
    }
    return this._defaultManualCompletion;
  }

  setDefaultManualCompletionElement(defaultManualCompletionElement: Element | undefined): this {
    this._defaultManualCompletion = defaultManualCompletionElement;
    return this;
  }

  /** The FHIRPath expression to be evaluated (0..1) */
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

  /** HTTP header field name (0..1) */
  getHeaderField(): string | undefined {
    return this.headerField;
  }

  /** Sets `headerField`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setHeaderField(headerField: string | undefined): this {
    return this.setFieldValue('headerField', headerField);
  }

  hasHeaderField(): boolean {
    return this.hasFieldValue('headerField');
  }

  /** The element carrying the id and extensions of `headerField`. Created when absent. */
  getHeaderFieldElement(): Element {
    if (this._headerField === undefined) {
      this._headerField = new Element();
    }
    return this._headerField;
  }

  setHeaderFieldElement(headerFieldElement: Element | undefined): this {
    this._headerField = headerFieldElement;
    return this;
  }

  /** Fixture Id of minimum content resource (0..1) */
  getMinimumId(): string | undefined {
    return this.minimumId;
  }

  /** Sets `minimumId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMinimumId(minimumId: string | undefined): this {
    return this.setFieldValue('minimumId', minimumId);
  }

  hasMinimumId(): boolean {
    return this.hasFieldValue('minimumId');
  }

  /** The element carrying the id and extensions of `minimumId`. Created when absent. */
  getMinimumIdElement(): Element {
    if (this._minimumId === undefined) {
      this._minimumId = new Element();
    }
    return this._minimumId;
  }

  setMinimumIdElement(minimumIdElement: Element | undefined): this {
    this._minimumId = minimumIdElement;
    return this;
  }

  /** Perform validation on navigation links? (0..1) */
  getNavigationLinks(): boolean | undefined {
    return this.navigationLinks;
  }

  /** Sets `navigationLinks`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setNavigationLinks(navigationLinks: boolean | undefined): this {
    return this.setFieldValue('navigationLinks', navigationLinks);
  }

  hasNavigationLinks(): boolean {
    return this.hasFieldValue('navigationLinks');
  }

  /** The element carrying the id and extensions of `navigationLinks`. Created when absent. */
  getNavigationLinksElement(): Element {
    if (this._navigationLinks === undefined) {
      this._navigationLinks = new Element();
    }
    return this._navigationLinks;
  }

  setNavigationLinksElement(navigationLinksElement: Element | undefined): this {
    this._navigationLinks = navigationLinksElement;
    return this;
  }

  /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval | manualEval (0..1) */
  getOperator(): valueSetCodes.AssertionOperatorType | undefined {
    return this.operator;
  }

  /** Sets `operator`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setOperator(operator: valueSetCodes.AssertionOperatorType | undefined): this {
    return this.setFieldValue('operator', operator);
  }

  hasOperator(): boolean {
    return this.hasFieldValue('operator');
  }

  /** The element carrying the id and extensions of `operator`. Created when absent. */
  getOperatorElement(): Element {
    if (this._operator === undefined) {
      this._operator = new Element();
    }
    return this._operator;
  }

  setOperatorElement(operatorElement: Element | undefined): this {
    this._operator = operatorElement;
    return this;
  }

  /** XPath or JSONPath expression (0..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }

  /** delete | get | options | patch | post | put | head (0..1) */
  getRequestMethod(): valueSetCodes.TestScriptRequestMethodCode | undefined {
    return this.requestMethod;
  }

  /** Sets `requestMethod`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRequestMethod(requestMethod: valueSetCodes.TestScriptRequestMethodCode | undefined): this {
    return this.setFieldValue('requestMethod', requestMethod);
  }

  hasRequestMethod(): boolean {
    return this.hasFieldValue('requestMethod');
  }

  /** The element carrying the id and extensions of `requestMethod`. Created when absent. */
  getRequestMethodElement(): Element {
    if (this._requestMethod === undefined) {
      this._requestMethod = new Element();
    }
    return this._requestMethod;
  }

  setRequestMethodElement(requestMethodElement: Element | undefined): this {
    this._requestMethod = requestMethodElement;
    return this;
  }

  /** Request URL comparison value (0..1) */
  getRequestURL(): string | undefined {
    return this.requestURL;
  }

  /** Sets `requestURL`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRequestURL(requestURL: string | undefined): this {
    return this.setFieldValue('requestURL', requestURL);
  }

  hasRequestURL(): boolean {
    return this.hasFieldValue('requestURL');
  }

  /** The element carrying the id and extensions of `requestURL`. Created when absent. */
  getRequestURLElement(): Element {
    if (this._requestURL === undefined) {
      this._requestURL = new Element();
    }
    return this._requestURL;
  }

  setRequestURLElement(requestURLElement: Element | undefined): this {
    this._requestURL = requestURLElement;
    return this;
  }

  /** Resource type (0..1) */
  getResource(): string | undefined {
    return this.resource;
  }

  /** Sets `resource`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setResource(resource: string | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** The element carrying the id and extensions of `resource`. Created when absent. */
  getResourceElement(): Element {
    if (this._resource === undefined) {
      this._resource = new Element();
    }
    return this._resource;
  }

  setResourceElement(resourceElement: Element | undefined): this {
    this._resource = resourceElement;
    return this;
  }

  /** continue | switchingProtocols | okay | created | accepted | nonAuthoritativeInformation | noContent | resetContent | partialContent | multipleChoices | movedPermanently | found | seeOther | notModified | useProxy | temporaryRedirect | permanentRedirect | badRequest | unauthorized | paymentRequired | forbidden | notFound | methodNotAllowed | notAcceptable | proxyAuthenticationRequired | requestTimeout | conflict | gone | lengthRequired | preconditionFailed | contentTooLarge | uriTooLong | unsupportedMediaType | rangeNotSatisfiable | expectationFailed | misdirectedRequest | unprocessableContent | upgradeRequired | internalServerError | notImplemented | badGateway | serviceUnavailable | gatewayTimeout | httpVersionNotSupported (0..1) */
  getResponse(): valueSetCodes.AssertionResponseTypes | undefined {
    return this.response;
  }

  /** Sets `response`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setResponse(response: valueSetCodes.AssertionResponseTypes | undefined): this {
    return this.setFieldValue('response', response);
  }

  hasResponse(): boolean {
    return this.hasFieldValue('response');
  }

  /** The element carrying the id and extensions of `response`. Created when absent. */
  getResponseElement(): Element {
    if (this._response === undefined) {
      this._response = new Element();
    }
    return this._response;
  }

  setResponseElement(responseElement: Element | undefined): this {
    this._response = responseElement;
    return this;
  }

  /** HTTP response code to test (0..1) */
  getResponseCode(): string | undefined {
    return this.responseCode;
  }

  /** Sets `responseCode`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setResponseCode(responseCode: string | undefined): this {
    return this.setFieldValue('responseCode', responseCode);
  }

  hasResponseCode(): boolean {
    return this.hasFieldValue('responseCode');
  }

  /** The element carrying the id and extensions of `responseCode`. Created when absent. */
  getResponseCodeElement(): Element {
    if (this._responseCode === undefined) {
      this._responseCode = new Element();
    }
    return this._responseCode;
  }

  setResponseCodeElement(responseCodeElement: Element | undefined): this {
    this._responseCode = responseCodeElement;
    return this;
  }

  /** Fixture Id of source expression or headerField (0..1) */
  getSourceId(): string | undefined {
    return this.sourceId;
  }

  /** Sets `sourceId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setSourceId(sourceId: string | undefined): this {
    return this.setFieldValue('sourceId', sourceId);
  }

  hasSourceId(): boolean {
    return this.hasFieldValue('sourceId');
  }

  /** The element carrying the id and extensions of `sourceId`. Created when absent. */
  getSourceIdElement(): Element {
    if (this._sourceId === undefined) {
      this._sourceId = new Element();
    }
    return this._sourceId;
  }

  setSourceIdElement(sourceIdElement: Element | undefined): this {
    this._sourceId = sourceIdElement;
    return this;
  }

  /** If this assert fails, will the current test execution stop? (1..1) */
  getStopTestOnFail(): boolean | undefined {
    return this.stopTestOnFail;
  }

  /** Sets `stopTestOnFail`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setStopTestOnFail(stopTestOnFail: boolean | undefined): this {
    return this.setFieldValue('stopTestOnFail', stopTestOnFail);
  }

  hasStopTestOnFail(): boolean {
    return this.hasFieldValue('stopTestOnFail');
  }

  /** The element carrying the id and extensions of `stopTestOnFail`. Created when absent. */
  getStopTestOnFailElement(): Element {
    if (this._stopTestOnFail === undefined) {
      this._stopTestOnFail = new Element();
    }
    return this._stopTestOnFail;
  }

  setStopTestOnFailElement(stopTestOnFailElement: Element | undefined): this {
    this._stopTestOnFail = stopTestOnFailElement;
    return this;
  }

  /** Profile Id of validation profile reference (0..1) */
  getValidateProfileId(): string | undefined {
    return this.validateProfileId;
  }

  /** Sets `validateProfileId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setValidateProfileId(validateProfileId: string | undefined): this {
    return this.setFieldValue('validateProfileId', validateProfileId);
  }

  hasValidateProfileId(): boolean {
    return this.hasFieldValue('validateProfileId');
  }

  /** The element carrying the id and extensions of `validateProfileId`. Created when absent. */
  getValidateProfileIdElement(): Element {
    if (this._validateProfileId === undefined) {
      this._validateProfileId = new Element();
    }
    return this._validateProfileId;
  }

  setValidateProfileIdElement(validateProfileIdElement: Element | undefined): this {
    this._validateProfileId = validateProfileIdElement;
    return this;
  }

  /** The value to compare to (0..1) */
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

  /** Will this assert produce a warning only on error? (1..1) */
  getWarningOnly(): boolean | undefined {
    return this.warningOnly;
  }

  /** Sets `warningOnly`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setWarningOnly(warningOnly: boolean | undefined): this {
    return this.setFieldValue('warningOnly', warningOnly);
  }

  hasWarningOnly(): boolean {
    return this.hasFieldValue('warningOnly');
  }

  /** The element carrying the id and extensions of `warningOnly`. Created when absent. */
  getWarningOnlyElement(): Element {
    if (this._warningOnly === undefined) {
      this._warningOnly = new Element();
    }
    return this._warningOnly;
  }

  setWarningOnlyElement(warningOnlyElement: Element | undefined): this {
    this._warningOnly = warningOnlyElement;
    return this;
  }

  /** Links or references to the testing requirements (0..*) Never undefined; an empty list is created when absent. */
  getRequirement(): TestScriptSetupActionAssertRequirement[] {
    if (this.requirement === undefined) {
      this.requirement = [];
    }
    return this.requirement;
  }

  setRequirement(requirement: TestScriptSetupActionAssertRequirement[] | undefined): this {
    return this.setFieldValue('requirement', requirement);
  }

  hasRequirement(): boolean {
    return this.hasFieldValue('requirement');
  }

  /** Appends a new, empty TestScriptSetupActionAssertRequirement to `requirement` and returns it so it can be filled in. */
  addRequirement(): TestScriptSetupActionAssertRequirement;
  /** Appends the given TestScriptSetupActionAssertRequirement to `requirement` and returns this object for chaining. */
  addRequirement(
    testScriptSetupActionAssertRequirement: TestScriptSetupActionAssertRequirement
  ): this;
  addRequirement(
    testScriptSetupActionAssertRequirement?: TestScriptSetupActionAssertRequirement
  ): TestScriptSetupActionAssertRequirement | this {
    if (testScriptSetupActionAssertRequirement !== undefined) {
      return this.addFieldValue('requirement', testScriptSetupActionAssertRequirement);
    }
    const createdTestScriptSetupActionAssertRequirement =
      new TestScriptSetupActionAssertRequirement();
    this.addFieldValue('requirement', createdTestScriptSetupActionAssertRequirement);
    return createdTestScriptSetupActionAssertRequirement;
  }

  /** The first TestScriptSetupActionAssertRequirement of `requirement`. One is added when the list is empty. */
  getRequirementFirstRep(): TestScriptSetupActionAssertRequirement {
    const firstTestScriptSetupActionAssertRequirement = this.getRequirement()[0];
    return firstTestScriptSetupActionAssertRequirement === undefined
      ? this.addRequirement()
      : firstTestScriptSetupActionAssertRequirement;
  }
}

modelTypeRegistry.register('TestScriptSetupActionAssert', TestScriptSetupActionAssert, false);

/**
 * Links or references to the testing requirements
 */
export class TestScriptSetupActionAssertRequirement extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'link',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'linkUri', typeCode: 'uri' },
        { jsonKey: 'linkCanonical', typeCode: 'canonical' },
      ],
    },
  ];

  /** Link or reference to the testing requirement (0..1) */
  linkUri?: string;
  /** Id and extensions of the primitive `linkUri`. */
  _linkUri?: Element;
  /** Link or reference to the testing requirement (0..1) */
  linkCanonical?: string;
  /** Id and extensions of the primitive `linkCanonical`. */
  _linkCanonical?: Element;

  override fhirType(): string {
    return 'TestScript.setup.action.assert.requirement';
  }

  /** FHIR JSON for this TestScriptSetupActionAssertRequirement, typed as the plain `TestScriptRequirement` data type. */
  override toJSON(): plainTypes.TestScriptRequirement {
    return this.serialize() as plainTypes.TestScriptRequirement;
  }

  /** Link or reference to the testing requirement (0..1) Whichever type of `link[x]` is set. */
  getLink(): string | undefined {
    return this.getChoiceValue<string>('link');
  }

  /** True when any type of `link[x]` is set. */
  hasLink(): boolean {
    return this.hasChoiceValue('link');
  }

  getLinkUri(): string | undefined {
    return this.linkUri;
  }

  /** Sets `link[x]` as uri and clears every other type of it. */
  setLinkUri(linkUri: string | undefined): this {
    return this.setFieldValue('linkUri', linkUri);
  }

  hasLinkUri(): boolean {
    return this.hasFieldValue('linkUri');
  }

  getLinkCanonical(): string | undefined {
    return this.linkCanonical;
  }

  /** Sets `link[x]` as canonical and clears every other type of it. */
  setLinkCanonical(linkCanonical: string | undefined): this {
    return this.setFieldValue('linkCanonical', linkCanonical);
  }

  hasLinkCanonical(): boolean {
    return this.hasFieldValue('linkCanonical');
  }
}

modelTypeRegistry.register(
  'TestScriptSetupActionAssertRequirement',
  TestScriptSetupActionAssertRequirement,
  false
);

/**
 * A test in this script
 */
export class TestScriptTest extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'action',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'TestScriptTestAction' }],
    },
  ];

  /** Tracking/logging name of this test (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Tracking/reporting short description of the test (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** A test operation or assert to perform (1..*) */
  action?: TestScriptTestAction[];

  override fhirType(): string {
    return 'TestScript.test';
  }

  /** FHIR JSON for this TestScriptTest, typed as the plain `TestScriptTest` data type. */
  override toJSON(): plainTypes.TestScriptTest {
    return this.serialize() as plainTypes.TestScriptTest;
  }

  /** Tracking/logging name of this test (0..1) */
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

  /** Tracking/reporting short description of the test (0..1) */
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

  /** A test operation or assert to perform (1..*) Never undefined; an empty list is created when absent. */
  getAction(): TestScriptTestAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: TestScriptTestAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty TestScriptTestAction to `action` and returns it so it can be filled in. */
  addAction(): TestScriptTestAction;
  /** Appends the given TestScriptTestAction to `action` and returns this object for chaining. */
  addAction(testScriptTestAction: TestScriptTestAction): this;
  addAction(testScriptTestAction?: TestScriptTestAction): TestScriptTestAction | this {
    if (testScriptTestAction !== undefined) {
      return this.addFieldValue('action', testScriptTestAction);
    }
    const createdTestScriptTestAction = new TestScriptTestAction();
    this.addFieldValue('action', createdTestScriptTestAction);
    return createdTestScriptTestAction;
  }

  /** The first TestScriptTestAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): TestScriptTestAction {
    const firstTestScriptTestAction = this.getAction()[0];
    return firstTestScriptTestAction === undefined ? this.addAction() : firstTestScriptTestAction;
  }
}

modelTypeRegistry.register('TestScriptTest', TestScriptTest, false);

/**
 * A test operation or assert to perform
 */
export class TestScriptTestAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'operation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operation', typeCode: 'TestScriptSetupActionOperation' }],
    },
    {
      elementName: 'assert',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assert', typeCode: 'TestScriptSetupActionAssert' }],
    },
  ];

  /** The setup operation to perform (0..1) */
  operation?: TestScriptSetupActionOperation;

  /** The setup assertion to perform (0..1) */
  assert?: TestScriptSetupActionAssert;

  override fhirType(): string {
    return 'TestScript.test.action';
  }

  /** FHIR JSON for this TestScriptTestAction, typed as the plain `TestScriptAction1` data type. */
  override toJSON(): plainTypes.TestScriptAction1 {
    return this.serialize() as plainTypes.TestScriptAction1;
  }

  /** The setup operation to perform (0..1) Created when absent. */
  getOperation(): TestScriptSetupActionOperation {
    if (this.operation === undefined) {
      this.operation = new TestScriptSetupActionOperation();
    }
    return this.operation;
  }

  setOperation(operation: TestScriptSetupActionOperation | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }

  /** The setup assertion to perform (0..1) Created when absent. */
  getAssert(): TestScriptSetupActionAssert {
    if (this.assert === undefined) {
      this.assert = new TestScriptSetupActionAssert();
    }
    return this.assert;
  }

  setAssert(assert: TestScriptSetupActionAssert | undefined): this {
    return this.setFieldValue('assert', assert);
  }

  hasAssert(): boolean {
    return this.hasFieldValue('assert');
  }
}

modelTypeRegistry.register('TestScriptTestAction', TestScriptTestAction, false);

/**
 * A series of required clean up steps
 */
export class TestScriptTeardown extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'action',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'TestScriptTeardownAction' }],
    },
  ];

  /** One or more teardown operations to perform (1..*) */
  action?: TestScriptTeardownAction[];

  override fhirType(): string {
    return 'TestScript.teardown';
  }

  /** FHIR JSON for this TestScriptTeardown, typed as the plain `TestScriptTeardown` data type. */
  override toJSON(): plainTypes.TestScriptTeardown {
    return this.serialize() as plainTypes.TestScriptTeardown;
  }

  /** One or more teardown operations to perform (1..*) Never undefined; an empty list is created when absent. */
  getAction(): TestScriptTeardownAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: TestScriptTeardownAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty TestScriptTeardownAction to `action` and returns it so it can be filled in. */
  addAction(): TestScriptTeardownAction;
  /** Appends the given TestScriptTeardownAction to `action` and returns this object for chaining. */
  addAction(testScriptTeardownAction: TestScriptTeardownAction): this;
  addAction(testScriptTeardownAction?: TestScriptTeardownAction): TestScriptTeardownAction | this {
    if (testScriptTeardownAction !== undefined) {
      return this.addFieldValue('action', testScriptTeardownAction);
    }
    const createdTestScriptTeardownAction = new TestScriptTeardownAction();
    this.addFieldValue('action', createdTestScriptTeardownAction);
    return createdTestScriptTeardownAction;
  }

  /** The first TestScriptTeardownAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): TestScriptTeardownAction {
    const firstTestScriptTeardownAction = this.getAction()[0];
    return firstTestScriptTeardownAction === undefined
      ? this.addAction()
      : firstTestScriptTeardownAction;
  }
}

modelTypeRegistry.register('TestScriptTeardown', TestScriptTeardown, false);

/**
 * One or more teardown operations to perform
 */
export class TestScriptTeardownAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'operation',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operation', typeCode: 'TestScriptSetupActionOperation' }],
    },
  ];

  /** The teardown operation to perform (1..1) */
  operation?: TestScriptSetupActionOperation;

  override fhirType(): string {
    return 'TestScript.teardown.action';
  }

  /** FHIR JSON for this TestScriptTeardownAction, typed as the plain `TestScriptAction2` data type. */
  override toJSON(): plainTypes.TestScriptAction2 {
    return this.serialize() as plainTypes.TestScriptAction2;
  }

  /** The teardown operation to perform (1..1) Created when absent. */
  getOperation(): TestScriptSetupActionOperation {
    if (this.operation === undefined) {
      this.operation = new TestScriptSetupActionOperation();
    }
    return this.operation;
  }

  setOperation(operation: TestScriptSetupActionOperation | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }
}

modelTypeRegistry.register('TestScriptTeardownAction', TestScriptTeardownAction, false);
