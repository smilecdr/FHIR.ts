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
import { CodeableReference } from './codeableReference';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * A plan for executing testing on an artifact or specifications
 */
export class TestPlan extends DomainResource {
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
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'scope',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'scope', typeCode: 'Reference' }],
    },
    {
      elementName: 'testTools',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'testTools', typeCode: 'markdown' }],
    },
    {
      elementName: 'dependency',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dependency', typeCode: 'TestPlanDependency' }],
    },
    {
      elementName: 'exitCriteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'exitCriteria', typeCode: 'markdown' }],
    },
    {
      elementName: 'testCase',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'testCase', typeCode: 'TestPlanTestCase' }],
    },
  ];

  readonly resourceType = 'TestPlan';

  /** Canonical identifier for this test plan, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Business identifier identifier for the test plan (0..*) */
  identifier?: Identifier[];

  /** Business version of the test plan (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this test plan (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this test plan (human friendly) (0..1) */
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

  /** Natural language description of the test plan (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction where the test plan applies (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this test plan is defined (0..1) */
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

  /** The category of the Test Plan - can be acceptance, unit, performance (0..*) */
  category?: CodeableConcept[];

  /** What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference (0..*) */
  scope?: Reference[];

  /** A description of test tools to be used in the test plan - narrative for now (0..1) */
  testTools?: string;
  /** Id and extensions of the primitive `testTools`. */
  _testTools?: Element;

  /** The required criteria to execute the test plan - e.g. preconditions, previous tests (0..*) */
  dependency?: TestPlanDependency[];

  /** The threshold or criteria for the test plan to be considered successfully executed - narrative (0..1) */
  exitCriteria?: string;
  /** Id and extensions of the primitive `exitCriteria`. */
  _exitCriteria?: Element;

  /** The test cases that constitute this plan (0..*) */
  testCase?: TestPlanTestCase[];

  override fhirType(): string {
    return 'TestPlan';
  }

  /** FHIR JSON for this TestPlan, typed as the plain `TestPlan` data type. */
  override toJSON(): plainTypes.TestPlan {
    return this.serialize() as plainTypes.TestPlan;
  }

  /** Canonical identifier for this test plan, represented as a URI (globally unique) (0..1) */
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

  /** Business identifier identifier for the test plan (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the test plan (0..1) */
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

  /** Name for this test plan (computer friendly) (0..1) */
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

  /** Name for this test plan (human friendly) (0..1) */
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

  /** Natural language description of the test plan (0..1) */
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

  /** Intended jurisdiction where the test plan applies (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this test plan is defined (0..1) */
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

  /** The category of the Test Plan - can be acceptance, unit, performance (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference (0..*) Never undefined; an empty list is created when absent. */
  getScope(): Reference[] {
    if (this.scope === undefined) {
      this.scope = [];
    }
    return this.scope;
  }

  setScope(scope: Reference[] | undefined): this {
    return this.setFieldValue('scope', scope);
  }

  hasScope(): boolean {
    return this.hasFieldValue('scope');
  }

  /** Appends a new, empty Reference to `scope` and returns it so it can be filled in. */
  addScope(): Reference;
  /** Appends the given Reference to `scope` and returns this object for chaining. */
  addScope(reference: Reference): this;
  addScope(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('scope', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('scope', createdReference);
    return createdReference;
  }

  /** The first Reference of `scope`. One is added when the list is empty. */
  getScopeFirstRep(): Reference {
    const firstReference = this.getScope()[0];
    return firstReference === undefined ? this.addScope() : firstReference;
  }

  /** A description of test tools to be used in the test plan - narrative for now (0..1) */
  getTestTools(): string | undefined {
    return this.testTools;
  }

  /** Sets `testTools`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setTestTools(testTools: string | undefined): this {
    return this.setFieldValue('testTools', testTools);
  }

  hasTestTools(): boolean {
    return this.hasFieldValue('testTools');
  }

  /** The element carrying the id and extensions of `testTools`. Created when absent. */
  getTestToolsElement(): Element {
    if (this._testTools === undefined) {
      this._testTools = new Element();
    }
    return this._testTools;
  }

  setTestToolsElement(testToolsElement: Element | undefined): this {
    this._testTools = testToolsElement;
    return this;
  }

  /** The required criteria to execute the test plan - e.g. preconditions, previous tests (0..*) Never undefined; an empty list is created when absent. */
  getDependency(): TestPlanDependency[] {
    if (this.dependency === undefined) {
      this.dependency = [];
    }
    return this.dependency;
  }

  setDependency(dependency: TestPlanDependency[] | undefined): this {
    return this.setFieldValue('dependency', dependency);
  }

  hasDependency(): boolean {
    return this.hasFieldValue('dependency');
  }

  /** Appends a new, empty TestPlanDependency to `dependency` and returns it so it can be filled in. */
  addDependency(): TestPlanDependency;
  /** Appends the given TestPlanDependency to `dependency` and returns this object for chaining. */
  addDependency(testPlanDependency: TestPlanDependency): this;
  addDependency(testPlanDependency?: TestPlanDependency): TestPlanDependency | this {
    if (testPlanDependency !== undefined) {
      return this.addFieldValue('dependency', testPlanDependency);
    }
    const createdTestPlanDependency = new TestPlanDependency();
    this.addFieldValue('dependency', createdTestPlanDependency);
    return createdTestPlanDependency;
  }

  /** The first TestPlanDependency of `dependency`. One is added when the list is empty. */
  getDependencyFirstRep(): TestPlanDependency {
    const firstTestPlanDependency = this.getDependency()[0];
    return firstTestPlanDependency === undefined ? this.addDependency() : firstTestPlanDependency;
  }

  /** The threshold or criteria for the test plan to be considered successfully executed - narrative (0..1) */
  getExitCriteria(): string | undefined {
    return this.exitCriteria;
  }

  /** Sets `exitCriteria`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setExitCriteria(exitCriteria: string | undefined): this {
    return this.setFieldValue('exitCriteria', exitCriteria);
  }

  hasExitCriteria(): boolean {
    return this.hasFieldValue('exitCriteria');
  }

  /** The element carrying the id and extensions of `exitCriteria`. Created when absent. */
  getExitCriteriaElement(): Element {
    if (this._exitCriteria === undefined) {
      this._exitCriteria = new Element();
    }
    return this._exitCriteria;
  }

  setExitCriteriaElement(exitCriteriaElement: Element | undefined): this {
    this._exitCriteria = exitCriteriaElement;
    return this;
  }

  /** The test cases that constitute this plan (0..*) Never undefined; an empty list is created when absent. */
  getTestCase(): TestPlanTestCase[] {
    if (this.testCase === undefined) {
      this.testCase = [];
    }
    return this.testCase;
  }

  setTestCase(testCase: TestPlanTestCase[] | undefined): this {
    return this.setFieldValue('testCase', testCase);
  }

  hasTestCase(): boolean {
    return this.hasFieldValue('testCase');
  }

  /** Appends a new, empty TestPlanTestCase to `testCase` and returns it so it can be filled in. */
  addTestCase(): TestPlanTestCase;
  /** Appends the given TestPlanTestCase to `testCase` and returns this object for chaining. */
  addTestCase(testPlanTestCase: TestPlanTestCase): this;
  addTestCase(testPlanTestCase?: TestPlanTestCase): TestPlanTestCase | this {
    if (testPlanTestCase !== undefined) {
      return this.addFieldValue('testCase', testPlanTestCase);
    }
    const createdTestPlanTestCase = new TestPlanTestCase();
    this.addFieldValue('testCase', createdTestPlanTestCase);
    return createdTestPlanTestCase;
  }

  /** The first TestPlanTestCase of `testCase`. One is added when the list is empty. */
  getTestCaseFirstRep(): TestPlanTestCase {
    const firstTestPlanTestCase = this.getTestCase()[0];
    return firstTestPlanTestCase === undefined ? this.addTestCase() : firstTestPlanTestCase;
  }
}

modelTypeRegistry.register('TestPlan', TestPlan, true);

/** True when the value is a TestPlan model instance. */
export function isTestPlan(candidate: unknown): candidate is TestPlan {
  return candidate instanceof TestPlan;
}

/**
 * The required criteria to execute the test plan - e.g. preconditions, previous tests
 */
export class TestPlanDependency extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'predecessor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'predecessor', typeCode: 'Reference' }],
    },
  ];

  /** Description of the dependency criterium (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Link to predecessor test plans (0..1) */
  predecessor?: Reference;

  override fhirType(): string {
    return 'TestPlan.dependency';
  }

  /** FHIR JSON for this TestPlanDependency, typed as the plain `TestPlanDependency` data type. */
  override toJSON(): plainTypes.TestPlanDependency {
    return this.serialize() as plainTypes.TestPlanDependency;
  }

  /** Description of the dependency criterium (0..1) */
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

  /** Link to predecessor test plans (0..1) Created when absent. */
  getPredecessor(): Reference {
    if (this.predecessor === undefined) {
      this.predecessor = new Reference();
    }
    return this.predecessor;
  }

  setPredecessor(predecessor: Reference | undefined): this {
    return this.setFieldValue('predecessor', predecessor);
  }

  hasPredecessor(): boolean {
    return this.hasFieldValue('predecessor');
  }
}

modelTypeRegistry.register('TestPlanDependency', TestPlanDependency, false);

/**
 * The test cases that constitute this plan
 */
export class TestPlanTestCase extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'integer' }],
    },
    {
      elementName: 'scope',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'scope', typeCode: 'Reference' }],
    },
    {
      elementName: 'dependency',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dependency', typeCode: 'TestPlanTestCaseDependency' }],
    },
    {
      elementName: 'testRun',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'testRun', typeCode: 'TestPlanTestCaseTestRun' }],
    },
    {
      elementName: 'testData',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'testData', typeCode: 'TestPlanTestCaseTestData' }],
    },
    {
      elementName: 'assertion',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'assertion', typeCode: 'TestPlanTestCaseAssertion' }],
    },
  ];

  /** Sequence of test case in the test plan (0..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** The scope or artifact covered by the case (0..*) */
  scope?: Reference[];

  /** Required criteria to execute the test case (0..*) */
  dependency?: TestPlanTestCaseDependency[];

  /** The actual test to be executed (0..*) */
  testRun?: TestPlanTestCaseTestRun[];

  /** The test data used in the test case (0..*) */
  testData?: TestPlanTestCaseTestData[];

  /** Test assertions or expectations (0..*) */
  assertion?: TestPlanTestCaseAssertion[];

  override fhirType(): string {
    return 'TestPlan.testCase';
  }

  /** FHIR JSON for this TestPlanTestCase, typed as the plain `TestPlanTestCase` data type. */
  override toJSON(): plainTypes.TestPlanTestCase {
    return this.serialize() as plainTypes.TestPlanTestCase;
  }

  /** Sequence of test case in the test plan (0..1) */
  getSequence(): number | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setSequence(sequence: number | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** The scope or artifact covered by the case (0..*) Never undefined; an empty list is created when absent. */
  getScope(): Reference[] {
    if (this.scope === undefined) {
      this.scope = [];
    }
    return this.scope;
  }

  setScope(scope: Reference[] | undefined): this {
    return this.setFieldValue('scope', scope);
  }

  hasScope(): boolean {
    return this.hasFieldValue('scope');
  }

  /** Appends a new, empty Reference to `scope` and returns it so it can be filled in. */
  addScope(): Reference;
  /** Appends the given Reference to `scope` and returns this object for chaining. */
  addScope(reference: Reference): this;
  addScope(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('scope', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('scope', createdReference);
    return createdReference;
  }

  /** The first Reference of `scope`. One is added when the list is empty. */
  getScopeFirstRep(): Reference {
    const firstReference = this.getScope()[0];
    return firstReference === undefined ? this.addScope() : firstReference;
  }

  /** Required criteria to execute the test case (0..*) Never undefined; an empty list is created when absent. */
  getDependency(): TestPlanTestCaseDependency[] {
    if (this.dependency === undefined) {
      this.dependency = [];
    }
    return this.dependency;
  }

  setDependency(dependency: TestPlanTestCaseDependency[] | undefined): this {
    return this.setFieldValue('dependency', dependency);
  }

  hasDependency(): boolean {
    return this.hasFieldValue('dependency');
  }

  /** Appends a new, empty TestPlanTestCaseDependency to `dependency` and returns it so it can be filled in. */
  addDependency(): TestPlanTestCaseDependency;
  /** Appends the given TestPlanTestCaseDependency to `dependency` and returns this object for chaining. */
  addDependency(testPlanTestCaseDependency: TestPlanTestCaseDependency): this;
  addDependency(
    testPlanTestCaseDependency?: TestPlanTestCaseDependency
  ): TestPlanTestCaseDependency | this {
    if (testPlanTestCaseDependency !== undefined) {
      return this.addFieldValue('dependency', testPlanTestCaseDependency);
    }
    const createdTestPlanTestCaseDependency = new TestPlanTestCaseDependency();
    this.addFieldValue('dependency', createdTestPlanTestCaseDependency);
    return createdTestPlanTestCaseDependency;
  }

  /** The first TestPlanTestCaseDependency of `dependency`. One is added when the list is empty. */
  getDependencyFirstRep(): TestPlanTestCaseDependency {
    const firstTestPlanTestCaseDependency = this.getDependency()[0];
    return firstTestPlanTestCaseDependency === undefined
      ? this.addDependency()
      : firstTestPlanTestCaseDependency;
  }

  /** The actual test to be executed (0..*) Never undefined; an empty list is created when absent. */
  getTestRun(): TestPlanTestCaseTestRun[] {
    if (this.testRun === undefined) {
      this.testRun = [];
    }
    return this.testRun;
  }

  setTestRun(testRun: TestPlanTestCaseTestRun[] | undefined): this {
    return this.setFieldValue('testRun', testRun);
  }

  hasTestRun(): boolean {
    return this.hasFieldValue('testRun');
  }

  /** Appends a new, empty TestPlanTestCaseTestRun to `testRun` and returns it so it can be filled in. */
  addTestRun(): TestPlanTestCaseTestRun;
  /** Appends the given TestPlanTestCaseTestRun to `testRun` and returns this object for chaining. */
  addTestRun(testPlanTestCaseTestRun: TestPlanTestCaseTestRun): this;
  addTestRun(testPlanTestCaseTestRun?: TestPlanTestCaseTestRun): TestPlanTestCaseTestRun | this {
    if (testPlanTestCaseTestRun !== undefined) {
      return this.addFieldValue('testRun', testPlanTestCaseTestRun);
    }
    const createdTestPlanTestCaseTestRun = new TestPlanTestCaseTestRun();
    this.addFieldValue('testRun', createdTestPlanTestCaseTestRun);
    return createdTestPlanTestCaseTestRun;
  }

  /** The first TestPlanTestCaseTestRun of `testRun`. One is added when the list is empty. */
  getTestRunFirstRep(): TestPlanTestCaseTestRun {
    const firstTestPlanTestCaseTestRun = this.getTestRun()[0];
    return firstTestPlanTestCaseTestRun === undefined
      ? this.addTestRun()
      : firstTestPlanTestCaseTestRun;
  }

  /** The test data used in the test case (0..*) Never undefined; an empty list is created when absent. */
  getTestData(): TestPlanTestCaseTestData[] {
    if (this.testData === undefined) {
      this.testData = [];
    }
    return this.testData;
  }

  setTestData(testData: TestPlanTestCaseTestData[] | undefined): this {
    return this.setFieldValue('testData', testData);
  }

  hasTestData(): boolean {
    return this.hasFieldValue('testData');
  }

  /** Appends a new, empty TestPlanTestCaseTestData to `testData` and returns it so it can be filled in. */
  addTestData(): TestPlanTestCaseTestData;
  /** Appends the given TestPlanTestCaseTestData to `testData` and returns this object for chaining. */
  addTestData(testPlanTestCaseTestData: TestPlanTestCaseTestData): this;
  addTestData(
    testPlanTestCaseTestData?: TestPlanTestCaseTestData
  ): TestPlanTestCaseTestData | this {
    if (testPlanTestCaseTestData !== undefined) {
      return this.addFieldValue('testData', testPlanTestCaseTestData);
    }
    const createdTestPlanTestCaseTestData = new TestPlanTestCaseTestData();
    this.addFieldValue('testData', createdTestPlanTestCaseTestData);
    return createdTestPlanTestCaseTestData;
  }

  /** The first TestPlanTestCaseTestData of `testData`. One is added when the list is empty. */
  getTestDataFirstRep(): TestPlanTestCaseTestData {
    const firstTestPlanTestCaseTestData = this.getTestData()[0];
    return firstTestPlanTestCaseTestData === undefined
      ? this.addTestData()
      : firstTestPlanTestCaseTestData;
  }

  /** Test assertions or expectations (0..*) Never undefined; an empty list is created when absent. */
  getAssertion(): TestPlanTestCaseAssertion[] {
    if (this.assertion === undefined) {
      this.assertion = [];
    }
    return this.assertion;
  }

  setAssertion(assertion: TestPlanTestCaseAssertion[] | undefined): this {
    return this.setFieldValue('assertion', assertion);
  }

  hasAssertion(): boolean {
    return this.hasFieldValue('assertion');
  }

  /** Appends a new, empty TestPlanTestCaseAssertion to `assertion` and returns it so it can be filled in. */
  addAssertion(): TestPlanTestCaseAssertion;
  /** Appends the given TestPlanTestCaseAssertion to `assertion` and returns this object for chaining. */
  addAssertion(testPlanTestCaseAssertion: TestPlanTestCaseAssertion): this;
  addAssertion(
    testPlanTestCaseAssertion?: TestPlanTestCaseAssertion
  ): TestPlanTestCaseAssertion | this {
    if (testPlanTestCaseAssertion !== undefined) {
      return this.addFieldValue('assertion', testPlanTestCaseAssertion);
    }
    const createdTestPlanTestCaseAssertion = new TestPlanTestCaseAssertion();
    this.addFieldValue('assertion', createdTestPlanTestCaseAssertion);
    return createdTestPlanTestCaseAssertion;
  }

  /** The first TestPlanTestCaseAssertion of `assertion`. One is added when the list is empty. */
  getAssertionFirstRep(): TestPlanTestCaseAssertion {
    const firstTestPlanTestCaseAssertion = this.getAssertion()[0];
    return firstTestPlanTestCaseAssertion === undefined
      ? this.addAssertion()
      : firstTestPlanTestCaseAssertion;
  }
}

modelTypeRegistry.register('TestPlanTestCase', TestPlanTestCase, false);

/**
 * Required criteria to execute the test case
 */
export class TestPlanTestCaseDependency extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'predecessor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'predecessor', typeCode: 'Reference' }],
    },
  ];

  /** Description of the criteria (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Link to predecessor test plans (0..1) */
  predecessor?: Reference;

  override fhirType(): string {
    return 'TestPlan.testCase.dependency';
  }

  /** FHIR JSON for this TestPlanTestCaseDependency, typed as the plain `TestPlanDependency1` data type. */
  override toJSON(): plainTypes.TestPlanDependency1 {
    return this.serialize() as plainTypes.TestPlanDependency1;
  }

  /** Description of the criteria (0..1) */
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

  /** Link to predecessor test plans (0..1) Created when absent. */
  getPredecessor(): Reference {
    if (this.predecessor === undefined) {
      this.predecessor = new Reference();
    }
    return this.predecessor;
  }

  setPredecessor(predecessor: Reference | undefined): this {
    return this.setFieldValue('predecessor', predecessor);
  }

  hasPredecessor(): boolean {
    return this.hasFieldValue('predecessor');
  }
}

modelTypeRegistry.register('TestPlanTestCaseDependency', TestPlanTestCaseDependency, false);

/**
 * The actual test to be executed
 */
export class TestPlanTestCaseTestRun extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'narrative',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'narrative', typeCode: 'markdown' }],
    },
    {
      elementName: 'script',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'script', typeCode: 'TestPlanTestCaseTestRunScript' }],
    },
  ];

  /** The narrative description of the tests (0..1) */
  narrative?: string;
  /** Id and extensions of the primitive `narrative`. */
  _narrative?: Element;

  /** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript (0..1) */
  script?: TestPlanTestCaseTestRunScript;

  override fhirType(): string {
    return 'TestPlan.testCase.testRun';
  }

  /** FHIR JSON for this TestPlanTestCaseTestRun, typed as the plain `TestPlanTestRun` data type. */
  override toJSON(): plainTypes.TestPlanTestRun {
    return this.serialize() as plainTypes.TestPlanTestRun;
  }

  /** The narrative description of the tests (0..1) */
  getNarrative(): string | undefined {
    return this.narrative;
  }

  /** Sets `narrative`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setNarrative(narrative: string | undefined): this {
    return this.setFieldValue('narrative', narrative);
  }

  hasNarrative(): boolean {
    return this.hasFieldValue('narrative');
  }

  /** The element carrying the id and extensions of `narrative`. Created when absent. */
  getNarrativeElement(): Element {
    if (this._narrative === undefined) {
      this._narrative = new Element();
    }
    return this._narrative;
  }

  setNarrativeElement(narrativeElement: Element | undefined): this {
    this._narrative = narrativeElement;
    return this;
  }

  /** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript (0..1) Created when absent. */
  getScript(): TestPlanTestCaseTestRunScript {
    if (this.script === undefined) {
      this.script = new TestPlanTestCaseTestRunScript();
    }
    return this.script;
  }

  setScript(script: TestPlanTestCaseTestRunScript | undefined): this {
    return this.setFieldValue('script', script);
  }

  hasScript(): boolean {
    return this.hasFieldValue('script');
  }
}

modelTypeRegistry.register('TestPlanTestCaseTestRun', TestPlanTestCaseTestRun, false);

/**
 * The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript
 */
export class TestPlanTestCaseTestRunScript extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sourceString', typeCode: 'string' },
        { jsonKey: 'sourceReference', typeCode: 'Reference' },
      ],
    },
  ];

  /** The language for the test cases e.g. 'gherkin', 'testscript' (0..1) */
  language?: CodeableConcept;

  /** The actual content of the cases - references to TestScripts or externally defined content (0..1) */
  sourceString?: string;
  /** Id and extensions of the primitive `sourceString`. */
  _sourceString?: Element;
  /** The actual content of the cases - references to TestScripts or externally defined content (0..1) */
  sourceReference?: Reference;

  override fhirType(): string {
    return 'TestPlan.testCase.testRun.script';
  }

  /** FHIR JSON for this TestPlanTestCaseTestRunScript, typed as the plain `TestPlanScript` data type. */
  override toJSON(): plainTypes.TestPlanScript {
    return this.serialize() as plainTypes.TestPlanScript;
  }

  /** The language for the test cases e.g. 'gherkin', 'testscript' (0..1) Created when absent. */
  getLanguage(): CodeableConcept {
    if (this.language === undefined) {
      this.language = new CodeableConcept();
    }
    return this.language;
  }

  setLanguage(language: CodeableConcept | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The actual content of the cases - references to TestScripts or externally defined content (0..1) Whichever type of `source[x]` is set. */
  getSource(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('source');
  }

  /** True when any type of `source[x]` is set. */
  hasSource(): boolean {
    return this.hasChoiceValue('source');
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
}

modelTypeRegistry.register('TestPlanTestCaseTestRunScript', TestPlanTestCaseTestRunScript, false);

/**
 * The test data used in the test case
 */
export class TestPlanTestCaseTestData extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
    {
      elementName: 'content',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'content', typeCode: 'Reference' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sourceString', typeCode: 'string' },
        { jsonKey: 'sourceReference', typeCode: 'Reference' },
      ],
    },
  ];

  /** The type of test data description, e.g. 'synthea' (1..1) */
  type?: Coding;

  /** The actual test resources when they exist (0..1) */
  content?: Reference;

  /** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc (0..1) */
  sourceString?: string;
  /** Id and extensions of the primitive `sourceString`. */
  _sourceString?: Element;
  /** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc (0..1) */
  sourceReference?: Reference;

  override fhirType(): string {
    return 'TestPlan.testCase.testData';
  }

  /** FHIR JSON for this TestPlanTestCaseTestData, typed as the plain `TestPlanTestData` data type. */
  override toJSON(): plainTypes.TestPlanTestData {
    return this.serialize() as plainTypes.TestPlanTestData;
  }

  /** The type of test data description, e.g. 'synthea' (1..1) Created when absent. */
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

  /** The actual test resources when they exist (0..1) Created when absent. */
  getContent(): Reference {
    if (this.content === undefined) {
      this.content = new Reference();
    }
    return this.content;
  }

  setContent(content: Reference | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc (0..1) Whichever type of `source[x]` is set. */
  getSource(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('source');
  }

  /** True when any type of `source[x]` is set. */
  hasSource(): boolean {
    return this.hasChoiceValue('source');
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
}

modelTypeRegistry.register('TestPlanTestCaseTestData', TestPlanTestCaseTestData, false);

/**
 * Test assertions or expectations
 */
export class TestPlanTestCaseAssertion extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'object',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'object', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'result',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'result', typeCode: 'CodeableReference' }],
    },
  ];

  /** Assertion type - for example 'informative' or 'required' (0..*) */
  type?: CodeableConcept[];

  /** The focus or object of the assertion (0..*) */
  object?: CodeableReference[];

  /** The actual result assertion (0..*) */
  result?: CodeableReference[];

  override fhirType(): string {
    return 'TestPlan.testCase.assertion';
  }

  /** FHIR JSON for this TestPlanTestCaseAssertion, typed as the plain `TestPlanAssertion` data type. */
  override toJSON(): plainTypes.TestPlanAssertion {
    return this.serialize() as plainTypes.TestPlanAssertion;
  }

  /** Assertion type - for example 'informative' or 'required' (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** The focus or object of the assertion (0..*) Never undefined; an empty list is created when absent. */
  getObject(): CodeableReference[] {
    if (this.object === undefined) {
      this.object = [];
    }
    return this.object;
  }

  setObject(object: CodeableReference[] | undefined): this {
    return this.setFieldValue('object', object);
  }

  hasObject(): boolean {
    return this.hasFieldValue('object');
  }

  /** Appends a new, empty CodeableReference to `object` and returns it so it can be filled in. */
  addObject(): CodeableReference;
  /** Appends the given CodeableReference to `object` and returns this object for chaining. */
  addObject(codeableReference: CodeableReference): this;
  addObject(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('object', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('object', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `object`. One is added when the list is empty. */
  getObjectFirstRep(): CodeableReference {
    const firstCodeableReference = this.getObject()[0];
    return firstCodeableReference === undefined ? this.addObject() : firstCodeableReference;
  }

  /** The actual result assertion (0..*) Never undefined; an empty list is created when absent. */
  getResult(): CodeableReference[] {
    if (this.result === undefined) {
      this.result = [];
    }
    return this.result;
  }

  setResult(result: CodeableReference[] | undefined): this {
    return this.setFieldValue('result', result);
  }

  hasResult(): boolean {
    return this.hasFieldValue('result');
  }

  /** Appends a new, empty CodeableReference to `result` and returns it so it can be filled in. */
  addResult(): CodeableReference;
  /** Appends the given CodeableReference to `result` and returns this object for chaining. */
  addResult(codeableReference: CodeableReference): this;
  addResult(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('result', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('result', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `result`. One is added when the list is empty. */
  getResultFirstRep(): CodeableReference {
    const firstCodeableReference = this.getResult()[0];
    return firstCodeableReference === undefined ? this.addResult() : firstCodeableReference;
  }
}

modelTypeRegistry.register('TestPlanTestCaseAssertion', TestPlanTestCaseAssertion, false);
