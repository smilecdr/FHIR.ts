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
 * The Requirements resource is used to describe an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays.
 */
export class Requirements extends DomainResource {
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
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'derivedFrom', typeCode: 'canonical' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reference', typeCode: 'url' }],
    },
    {
      elementName: 'actor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'actor', typeCode: 'canonical' }],
    },
    {
      elementName: 'statement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statement', typeCode: 'RequirementsStatement' }],
    },
  ];

  readonly resourceType = 'Requirements';

  /** Canonical identifier for this Requirements, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the Requirements (business identifier) (0..*) */
  identifier?: Identifier[];

  /** Business version of the Requirements (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this Requirements (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this Requirements (human friendly) (0..1) */
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

  /** Natural language description of the requirements (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for Requirements (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this Requirements is defined (0..1) */
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

  /** Other set of Requirements this builds on (0..*) */
  derivedFrom?: string[];
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: (Element | null)[];

  /** External artifact (rule/document etc. that) created this set of requirements (0..*) */
  reference?: string[];
  /** Id and extensions of the primitive `reference`. */
  _reference?: (Element | null)[];

  /** Actor for these requirements (0..*) */
  actor?: string[];
  /** Id and extensions of the primitive `actor`. */
  _actor?: (Element | null)[];

  /** Actual statement as markdown (0..*) */
  statement?: RequirementsStatement[];

  override fhirType(): string {
    return 'Requirements';
  }

  /** FHIR JSON for this Requirements, typed as the plain `Requirements` data type. */
  override toJSON(): plainTypes.Requirements {
    return this.serialize() as plainTypes.Requirements;
  }

  /** Canonical identifier for this Requirements, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the Requirements (business identifier) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the Requirements (0..1) */
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

  /** Name for this Requirements (computer friendly) (0..1) */
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

  /** Name for this Requirements (human friendly) (0..1) */
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

  /** Natural language description of the requirements (0..1) */
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

  /** Intended jurisdiction for Requirements (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this Requirements is defined (0..1) */
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

  /** Other set of Requirements this builds on (0..*) Never undefined; an empty list is created when absent. */
  getDerivedFrom(): string[] {
    if (this.derivedFrom === undefined) {
      this.derivedFrom = [];
    }
    return this.derivedFrom;
  }

  setDerivedFrom(derivedFrom: string[] | undefined): this {
    return this.setFieldValue('derivedFrom', derivedFrom);
  }

  hasDerivedFrom(): boolean {
    return this.hasFieldValue('derivedFrom');
  }

  /** Appends one value to `derivedFrom`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addDerivedFrom(derivedFrom: string): this {
    return this.addFieldValue('derivedFrom', derivedFrom);
  }

  /** External artifact (rule/document etc. that) created this set of requirements (0..*) Never undefined; an empty list is created when absent. */
  getReference(): string[] {
    if (this.reference === undefined) {
      this.reference = [];
    }
    return this.reference;
  }

  setReference(reference: string[] | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** Appends one value to `reference`. Throws a FhirModelError when it is not a valid FHIR url. */
  addReference(reference: string): this {
    return this.addFieldValue('reference', reference);
  }

  /** Actor for these requirements (0..*) Never undefined; an empty list is created when absent. */
  getActor(): string[] {
    if (this.actor === undefined) {
      this.actor = [];
    }
    return this.actor;
  }

  setActor(actor: string[] | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }

  /** Appends one value to `actor`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addActor(actor: string): this {
    return this.addFieldValue('actor', actor);
  }

  /** Actual statement as markdown (0..*) Never undefined; an empty list is created when absent. */
  getStatement(): RequirementsStatement[] {
    if (this.statement === undefined) {
      this.statement = [];
    }
    return this.statement;
  }

  setStatement(statement: RequirementsStatement[] | undefined): this {
    return this.setFieldValue('statement', statement);
  }

  hasStatement(): boolean {
    return this.hasFieldValue('statement');
  }

  /** Appends a new, empty RequirementsStatement to `statement` and returns it so it can be filled in. */
  addStatement(): RequirementsStatement;
  /** Appends the given RequirementsStatement to `statement` and returns this object for chaining. */
  addStatement(requirementsStatement: RequirementsStatement): this;
  addStatement(requirementsStatement?: RequirementsStatement): RequirementsStatement | this {
    if (requirementsStatement !== undefined) {
      return this.addFieldValue('statement', requirementsStatement);
    }
    const createdRequirementsStatement = new RequirementsStatement();
    this.addFieldValue('statement', createdRequirementsStatement);
    return createdRequirementsStatement;
  }

  /** The first RequirementsStatement of `statement`. One is added when the list is empty. */
  getStatementFirstRep(): RequirementsStatement {
    const firstRequirementsStatement = this.getStatement()[0];
    return firstRequirementsStatement === undefined
      ? this.addStatement()
      : firstRequirementsStatement;
  }
}

modelTypeRegistry.register('Requirements', Requirements, true);

/** True when the value is a Requirements model instance. */
export function isRequirements(candidate: unknown): candidate is Requirements {
  return candidate instanceof Requirements;
}

/**
 * Actual statement as markdown
 */
export class RequirementsStatement extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'key',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'key', typeCode: 'id' }],
    },
    {
      elementName: 'label',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'label', typeCode: 'string' }],
    },
    {
      elementName: 'conformance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'conformance',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConformanceExpectation,
        },
      ],
    },
    {
      elementName: 'conditionality',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'conditionality', typeCode: 'boolean' }],
    },
    {
      elementName: 'requirement',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requirement', typeCode: 'markdown' }],
    },
    {
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'derivedFrom', typeCode: 'string' }],
    },
    {
      elementName: 'parent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'parent', typeCode: 'string' }],
    },
    {
      elementName: 'satisfiedBy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'satisfiedBy', typeCode: 'url' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reference', typeCode: 'url' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'source',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Group',
            'HealthcareService',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
  ];

  /** Key that identifies this statement (1..1) */
  key?: string;
  /** Id and extensions of the primitive `key`. */
  _key?: Element;

  /** Short Human label for this statement (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;

  /** SHALL | SHOULD | MAY | SHOULD-NOT (0..*) */
  conformance?: valueSetCodes.ConformanceExpectation[];
  /** Id and extensions of the primitive `conformance`. */
  _conformance?: (Element | null)[];

  /** Set to true if requirements statement is conditional (0..1) */
  conditionality?: boolean;
  /** Id and extensions of the primitive `conditionality`. */
  _conditionality?: Element;

  /** The actual requirement (1..1) */
  requirement?: string;
  /** Id and extensions of the primitive `requirement`. */
  _requirement?: Element;

  /** Another statement this clarifies/restricts ([url#]key) (0..1) */
  derivedFrom?: string;
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: Element;

  /** A larger requirement that this requirement helps to refine and enable (0..1) */
  parent?: string;
  /** Id and extensions of the primitive `parent`. */
  _parent?: Element;

  /** Design artifact that satisfies this requirement (0..*) */
  satisfiedBy?: string[];
  /** Id and extensions of the primitive `satisfiedBy`. */
  _satisfiedBy?: (Element | null)[];

  /** External artifact (rule/document etc. that) created this requirement (0..*) */
  reference?: string[];
  /** Id and extensions of the primitive `reference`. */
  _reference?: (Element | null)[];

  /** Who asked for this statement (0..*) */
  source?: Reference[];

  override fhirType(): string {
    return 'Requirements.statement';
  }

  /** FHIR JSON for this RequirementsStatement, typed as the plain `RequirementsStatement` data type. */
  override toJSON(): plainTypes.RequirementsStatement {
    return this.serialize() as plainTypes.RequirementsStatement;
  }

  /** Key that identifies this statement (1..1) */
  getKey(): string | undefined {
    return this.key;
  }

  /** Sets `key`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setKey(key: string | undefined): this {
    return this.setFieldValue('key', key);
  }

  hasKey(): boolean {
    return this.hasFieldValue('key');
  }

  /** The element carrying the id and extensions of `key`. Created when absent. */
  getKeyElement(): Element {
    if (this._key === undefined) {
      this._key = new Element();
    }
    return this._key;
  }

  setKeyElement(keyElement: Element | undefined): this {
    this._key = keyElement;
    return this;
  }

  /** Short Human label for this statement (0..1) */
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

  /** SHALL | SHOULD | MAY | SHOULD-NOT (0..*) Never undefined; an empty list is created when absent. */
  getConformance(): valueSetCodes.ConformanceExpectation[] {
    if (this.conformance === undefined) {
      this.conformance = [];
    }
    return this.conformance;
  }

  setConformance(conformance: valueSetCodes.ConformanceExpectation[] | undefined): this {
    return this.setFieldValue('conformance', conformance);
  }

  hasConformance(): boolean {
    return this.hasFieldValue('conformance');
  }

  /** Appends one value to `conformance`. Throws a FhirModelError when it is not a valid FHIR code. */
  addConformance(conformance: valueSetCodes.ConformanceExpectation): this {
    return this.addFieldValue('conformance', conformance);
  }

  /** Set to true if requirements statement is conditional (0..1) */
  getConditionality(): boolean | undefined {
    return this.conditionality;
  }

  /** Sets `conditionality`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setConditionality(conditionality: boolean | undefined): this {
    return this.setFieldValue('conditionality', conditionality);
  }

  hasConditionality(): boolean {
    return this.hasFieldValue('conditionality');
  }

  /** The element carrying the id and extensions of `conditionality`. Created when absent. */
  getConditionalityElement(): Element {
    if (this._conditionality === undefined) {
      this._conditionality = new Element();
    }
    return this._conditionality;
  }

  setConditionalityElement(conditionalityElement: Element | undefined): this {
    this._conditionality = conditionalityElement;
    return this;
  }

  /** The actual requirement (1..1) */
  getRequirement(): string | undefined {
    return this.requirement;
  }

  /** Sets `requirement`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setRequirement(requirement: string | undefined): this {
    return this.setFieldValue('requirement', requirement);
  }

  hasRequirement(): boolean {
    return this.hasFieldValue('requirement');
  }

  /** The element carrying the id and extensions of `requirement`. Created when absent. */
  getRequirementElement(): Element {
    if (this._requirement === undefined) {
      this._requirement = new Element();
    }
    return this._requirement;
  }

  setRequirementElement(requirementElement: Element | undefined): this {
    this._requirement = requirementElement;
    return this;
  }

  /** Another statement this clarifies/restricts ([url#]key) (0..1) */
  getDerivedFrom(): string | undefined {
    return this.derivedFrom;
  }

  /** Sets `derivedFrom`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDerivedFrom(derivedFrom: string | undefined): this {
    return this.setFieldValue('derivedFrom', derivedFrom);
  }

  hasDerivedFrom(): boolean {
    return this.hasFieldValue('derivedFrom');
  }

  /** The element carrying the id and extensions of `derivedFrom`. Created when absent. */
  getDerivedFromElement(): Element {
    if (this._derivedFrom === undefined) {
      this._derivedFrom = new Element();
    }
    return this._derivedFrom;
  }

  setDerivedFromElement(derivedFromElement: Element | undefined): this {
    this._derivedFrom = derivedFromElement;
    return this;
  }

  /** A larger requirement that this requirement helps to refine and enable (0..1) */
  getParent(): string | undefined {
    return this.parent;
  }

  /** Sets `parent`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setParent(parent: string | undefined): this {
    return this.setFieldValue('parent', parent);
  }

  hasParent(): boolean {
    return this.hasFieldValue('parent');
  }

  /** The element carrying the id and extensions of `parent`. Created when absent. */
  getParentElement(): Element {
    if (this._parent === undefined) {
      this._parent = new Element();
    }
    return this._parent;
  }

  setParentElement(parentElement: Element | undefined): this {
    this._parent = parentElement;
    return this;
  }

  /** Design artifact that satisfies this requirement (0..*) Never undefined; an empty list is created when absent. */
  getSatisfiedBy(): string[] {
    if (this.satisfiedBy === undefined) {
      this.satisfiedBy = [];
    }
    return this.satisfiedBy;
  }

  setSatisfiedBy(satisfiedBy: string[] | undefined): this {
    return this.setFieldValue('satisfiedBy', satisfiedBy);
  }

  hasSatisfiedBy(): boolean {
    return this.hasFieldValue('satisfiedBy');
  }

  /** Appends one value to `satisfiedBy`. Throws a FhirModelError when it is not a valid FHIR url. */
  addSatisfiedBy(satisfiedBy: string): this {
    return this.addFieldValue('satisfiedBy', satisfiedBy);
  }

  /** External artifact (rule/document etc. that) created this requirement (0..*) Never undefined; an empty list is created when absent. */
  getReference(): string[] {
    if (this.reference === undefined) {
      this.reference = [];
    }
    return this.reference;
  }

  setReference(reference: string[] | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** Appends one value to `reference`. Throws a FhirModelError when it is not a valid FHIR url. */
  addReference(reference: string): this {
    return this.addFieldValue('reference', reference);
  }

  /** Who asked for this statement (0..*) Never undefined; an empty list is created when absent. */
  getSource(): Reference[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: Reference[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty Reference to `source` and returns it so it can be filled in. */
  addSource(): Reference;
  /** Appends the given Reference to `source` and returns this object for chaining. */
  addSource(reference: Reference): this;
  addSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('source', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('source', createdReference);
    return createdReference;
  }

  /** The first Reference of `source`. One is added when the list is empty. */
  getSourceFirstRep(): Reference {
    const firstReference = this.getSource()[0];
    return firstReference === undefined ? this.addSource() : firstReference;
  }
}

modelTypeRegistry.register('RequirementsStatement', RequirementsStatement, false);
