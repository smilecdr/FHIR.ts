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
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export class SearchParameter extends DomainResource {
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
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'derivedFrom', typeCode: 'canonical' }],
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
      minimum: 1,
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
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'base',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'base',
          typeCode: 'code',
          allowedCodes: valueSetCodes.VersionIndependentResourceTypesAll,
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.SearchParamType }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
    {
      elementName: 'processingMode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'processingMode',
          typeCode: 'code',
          allowedCodes: valueSetCodes.SearchProcessingModeType,
        },
      ],
    },
    {
      elementName: 'constraint',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'constraint', typeCode: 'string' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'target',
          typeCode: 'code',
          allowedCodes: valueSetCodes.VersionIndependentResourceTypesAll,
        },
      ],
    },
    {
      elementName: 'multipleOr',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'multipleOr', typeCode: 'boolean' }],
    },
    {
      elementName: 'multipleAnd',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'multipleAnd', typeCode: 'boolean' }],
    },
    {
      elementName: 'comparator',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'comparator', typeCode: 'code', allowedCodes: valueSetCodes.SearchComparator },
      ],
    },
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'modifier', typeCode: 'code', allowedCodes: valueSetCodes.SearchModifierCode },
      ],
    },
    {
      elementName: 'chain',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'chain', typeCode: 'string' }],
    },
    {
      elementName: 'component',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'component', typeCode: 'SearchParameterComponent' }],
    },
  ];

  readonly resourceType = 'SearchParameter';

  /** Canonical identifier for this search parameter, represented as a URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the search parameter (business identifier) (0..*) */
  identifier?: Identifier[];

  /** Business version of the search parameter (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this search parameter (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this search parameter (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Original definition for the search parameter (0..1) */
  derivedFrom?: string;
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: Element;

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

  /** Natural language description of the search parameter (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for search parameter (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this search parameter is defined (0..1) */
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

  /** Recommended name for parameter in search url (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** The resource type(s) this search parameter applies to (1..*) */
  base?: valueSetCodes.VersionIndependentResourceTypesAll[];
  /** Id and extensions of the primitive `base`. */
  _base?: (Element | null)[];

  /** number | date | string | token | reference | composite | quantity | uri | special (1..1) */
  type?: valueSetCodes.SearchParamType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** FHIRPath expression that extracts the values (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  /** normal | phonetic | other (0..1) */
  processingMode?: valueSetCodes.SearchProcessingModeType;
  /** Id and extensions of the primitive `processingMode`. */
  _processingMode?: Element;

  /** FHIRPath expression that constraints the usage of this SearchParamete (0..1) */
  constraint?: string;
  /** Id and extensions of the primitive `constraint`. */
  _constraint?: Element;

  /** Types of resource (if a resource reference) (0..*) */
  target?: valueSetCodes.VersionIndependentResourceTypesAll[];
  /** Id and extensions of the primitive `target`. */
  _target?: (Element | null)[];

  /** Allow multiple values per parameter (or) (0..1) */
  multipleOr?: boolean;
  /** Id and extensions of the primitive `multipleOr`. */
  _multipleOr?: Element;

  /** Allow multiple parameters (and) (0..1) */
  multipleAnd?: boolean;
  /** Id and extensions of the primitive `multipleAnd`. */
  _multipleAnd?: Element;

  /** eq | ne | gt | lt | ge | le | sa | eb | ap (0..*) */
  comparator?: valueSetCodes.SearchComparator[];
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: (Element | null)[];

  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate (0..*) */
  modifier?: valueSetCodes.SearchModifierCode[];
  /** Id and extensions of the primitive `modifier`. */
  _modifier?: (Element | null)[];

  /** Chained names supported (0..*) */
  chain?: string[];
  /** Id and extensions of the primitive `chain`. */
  _chain?: (Element | null)[];

  /** For Composite resources to define the parts (0..*) */
  component?: SearchParameterComponent[];

  override fhirType(): string {
    return 'SearchParameter';
  }

  /** FHIR JSON for this SearchParameter, typed as the plain `SearchParameter` data type. */
  override toJSON(): plainTypes.SearchParameter {
    return this.serialize() as plainTypes.SearchParameter;
  }

  /** Canonical identifier for this search parameter, represented as a URI (globally unique) (1..1) */
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

  /** Additional identifier for the search parameter (business identifier) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the search parameter (0..1) */
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

  /** Name for this search parameter (computer friendly) (1..1) */
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

  /** Name for this search parameter (human friendly) (0..1) */
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

  /** Original definition for the search parameter (0..1) */
  getDerivedFrom(): string | undefined {
    return this.derivedFrom;
  }

  /** Sets `derivedFrom`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
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

  /** Natural language description of the search parameter (1..1) */
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

  /** Intended jurisdiction for search parameter (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this search parameter is defined (0..1) */
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

  /** Recommended name for parameter in search url (1..1) */
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

  /** The resource type(s) this search parameter applies to (1..*) Never undefined; an empty list is created when absent. */
  getBase(): valueSetCodes.VersionIndependentResourceTypesAll[] {
    if (this.base === undefined) {
      this.base = [];
    }
    return this.base;
  }

  setBase(base: valueSetCodes.VersionIndependentResourceTypesAll[] | undefined): this {
    return this.setFieldValue('base', base);
  }

  hasBase(): boolean {
    return this.hasFieldValue('base');
  }

  /** Appends one value to `base`. Throws a FhirModelError when it is not a valid FHIR code. */
  addBase(base: valueSetCodes.VersionIndependentResourceTypesAll): this {
    return this.addFieldValue('base', base);
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

  /** FHIRPath expression that extracts the values (0..1) */
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

  /** normal | phonetic | other (0..1) */
  getProcessingMode(): valueSetCodes.SearchProcessingModeType | undefined {
    return this.processingMode;
  }

  /** Sets `processingMode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setProcessingMode(processingMode: valueSetCodes.SearchProcessingModeType | undefined): this {
    return this.setFieldValue('processingMode', processingMode);
  }

  hasProcessingMode(): boolean {
    return this.hasFieldValue('processingMode');
  }

  /** The element carrying the id and extensions of `processingMode`. Created when absent. */
  getProcessingModeElement(): Element {
    if (this._processingMode === undefined) {
      this._processingMode = new Element();
    }
    return this._processingMode;
  }

  setProcessingModeElement(processingModeElement: Element | undefined): this {
    this._processingMode = processingModeElement;
    return this;
  }

  /** FHIRPath expression that constraints the usage of this SearchParamete (0..1) */
  getConstraint(): string | undefined {
    return this.constraint;
  }

  /** Sets `constraint`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setConstraint(constraint: string | undefined): this {
    return this.setFieldValue('constraint', constraint);
  }

  hasConstraint(): boolean {
    return this.hasFieldValue('constraint');
  }

  /** The element carrying the id and extensions of `constraint`. Created when absent. */
  getConstraintElement(): Element {
    if (this._constraint === undefined) {
      this._constraint = new Element();
    }
    return this._constraint;
  }

  setConstraintElement(constraintElement: Element | undefined): this {
    this._constraint = constraintElement;
    return this;
  }

  /** Types of resource (if a resource reference) (0..*) Never undefined; an empty list is created when absent. */
  getTarget(): valueSetCodes.VersionIndependentResourceTypesAll[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: valueSetCodes.VersionIndependentResourceTypesAll[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends one value to `target`. Throws a FhirModelError when it is not a valid FHIR code. */
  addTarget(target: valueSetCodes.VersionIndependentResourceTypesAll): this {
    return this.addFieldValue('target', target);
  }

  /** Allow multiple values per parameter (or) (0..1) */
  getMultipleOr(): boolean | undefined {
    return this.multipleOr;
  }

  /** Sets `multipleOr`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setMultipleOr(multipleOr: boolean | undefined): this {
    return this.setFieldValue('multipleOr', multipleOr);
  }

  hasMultipleOr(): boolean {
    return this.hasFieldValue('multipleOr');
  }

  /** The element carrying the id and extensions of `multipleOr`. Created when absent. */
  getMultipleOrElement(): Element {
    if (this._multipleOr === undefined) {
      this._multipleOr = new Element();
    }
    return this._multipleOr;
  }

  setMultipleOrElement(multipleOrElement: Element | undefined): this {
    this._multipleOr = multipleOrElement;
    return this;
  }

  /** Allow multiple parameters (and) (0..1) */
  getMultipleAnd(): boolean | undefined {
    return this.multipleAnd;
  }

  /** Sets `multipleAnd`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setMultipleAnd(multipleAnd: boolean | undefined): this {
    return this.setFieldValue('multipleAnd', multipleAnd);
  }

  hasMultipleAnd(): boolean {
    return this.hasFieldValue('multipleAnd');
  }

  /** The element carrying the id and extensions of `multipleAnd`. Created when absent. */
  getMultipleAndElement(): Element {
    if (this._multipleAnd === undefined) {
      this._multipleAnd = new Element();
    }
    return this._multipleAnd;
  }

  setMultipleAndElement(multipleAndElement: Element | undefined): this {
    this._multipleAnd = multipleAndElement;
    return this;
  }

  /** eq | ne | gt | lt | ge | le | sa | eb | ap (0..*) Never undefined; an empty list is created when absent. */
  getComparator(): valueSetCodes.SearchComparator[] {
    if (this.comparator === undefined) {
      this.comparator = [];
    }
    return this.comparator;
  }

  setComparator(comparator: valueSetCodes.SearchComparator[] | undefined): this {
    return this.setFieldValue('comparator', comparator);
  }

  hasComparator(): boolean {
    return this.hasFieldValue('comparator');
  }

  /** Appends one value to `comparator`. Throws a FhirModelError when it is not a valid FHIR code. */
  addComparator(comparator: valueSetCodes.SearchComparator): this {
    return this.addFieldValue('comparator', comparator);
  }

  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate (0..*) Never undefined; an empty list is created when absent. */
  getModifier(): valueSetCodes.SearchModifierCode[] {
    if (this.modifier === undefined) {
      this.modifier = [];
    }
    return this.modifier;
  }

  setModifier(modifier: valueSetCodes.SearchModifierCode[] | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Appends one value to `modifier`. Throws a FhirModelError when it is not a valid FHIR code. */
  addModifier(modifier: valueSetCodes.SearchModifierCode): this {
    return this.addFieldValue('modifier', modifier);
  }

  /** Chained names supported (0..*) Never undefined; an empty list is created when absent. */
  getChain(): string[] {
    if (this.chain === undefined) {
      this.chain = [];
    }
    return this.chain;
  }

  setChain(chain: string[] | undefined): this {
    return this.setFieldValue('chain', chain);
  }

  hasChain(): boolean {
    return this.hasFieldValue('chain');
  }

  /** Appends one value to `chain`. Throws a FhirModelError when it is not a valid FHIR string. */
  addChain(chain: string): this {
    return this.addFieldValue('chain', chain);
  }

  /** For Composite resources to define the parts (0..*) Never undefined; an empty list is created when absent. */
  getComponent(): SearchParameterComponent[] {
    if (this.component === undefined) {
      this.component = [];
    }
    return this.component;
  }

  setComponent(component: SearchParameterComponent[] | undefined): this {
    return this.setFieldValue('component', component);
  }

  hasComponent(): boolean {
    return this.hasFieldValue('component');
  }

  /** Appends a new, empty SearchParameterComponent to `component` and returns it so it can be filled in. */
  addComponent(): SearchParameterComponent;
  /** Appends the given SearchParameterComponent to `component` and returns this object for chaining. */
  addComponent(searchParameterComponent: SearchParameterComponent): this;
  addComponent(
    searchParameterComponent?: SearchParameterComponent
  ): SearchParameterComponent | this {
    if (searchParameterComponent !== undefined) {
      return this.addFieldValue('component', searchParameterComponent);
    }
    const createdSearchParameterComponent = new SearchParameterComponent();
    this.addFieldValue('component', createdSearchParameterComponent);
    return createdSearchParameterComponent;
  }

  /** The first SearchParameterComponent of `component`. One is added when the list is empty. */
  getComponentFirstRep(): SearchParameterComponent {
    const firstSearchParameterComponent = this.getComponent()[0];
    return firstSearchParameterComponent === undefined
      ? this.addComponent()
      : firstSearchParameterComponent;
  }
}

modelTypeRegistry.register('SearchParameter', SearchParameter, true);

/** True when the value is a SearchParameter model instance. */
export function isSearchParameter(candidate: unknown): candidate is SearchParameter {
  return candidate instanceof SearchParameter;
}

/**
 * For Composite resources to define the parts
 */
export class SearchParameterComponent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'definition',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'canonical' }],
    },
    {
      elementName: 'expression',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
  ];

  /** Defines how the part works (1..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;

  /** Subexpression relative to main expression (1..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  override fhirType(): string {
    return 'SearchParameter.component';
  }

  /** FHIR JSON for this SearchParameterComponent, typed as the plain `SearchParameterComponent` data type. */
  override toJSON(): plainTypes.SearchParameterComponent {
    return this.serialize() as plainTypes.SearchParameterComponent;
  }

  /** Defines how the part works (1..1) */
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

  /** Subexpression relative to main expression (1..1) */
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

modelTypeRegistry.register('SearchParameterComponent', SearchParameterComponent, false);
