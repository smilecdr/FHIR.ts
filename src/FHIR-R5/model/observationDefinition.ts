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
import { Period } from './period';
import { Range } from './range';
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export class ObservationDefinition extends DomainResource {
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
      maximum: 1,
      isList: false,
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
      elementName: 'effectivePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectivePeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'derivedFromCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'derivedFromCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'derivedFromUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'derivedFromUri', typeCode: 'uri' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subject', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'performerType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'performerType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'permittedDataType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'permittedDataType',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ObservationDataType,
        },
      ],
    },
    {
      elementName: 'multipleResultsAllowed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'multipleResultsAllowed', typeCode: 'boolean' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specimen',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'specimen', typeCode: 'Reference', targetResourceTypes: ['SpecimenDefinition'] },
      ],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'device',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'DeviceDefinition'],
        },
      ],
    },
    {
      elementName: 'preferredReportName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preferredReportName', typeCode: 'string' }],
    },
    {
      elementName: 'permittedUnit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'permittedUnit', typeCode: 'Coding' }],
    },
    {
      elementName: 'qualifiedValue',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'qualifiedValue', typeCode: 'ObservationDefinitionQualifiedValue' }],
    },
    {
      elementName: 'hasMember',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'hasMember',
          typeCode: 'Reference',
          targetResourceTypes: ['ObservationDefinition', 'Questionnaire'],
        },
      ],
    },
    {
      elementName: 'component',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'component', typeCode: 'ObservationDefinitionComponent' }],
    },
  ];

  readonly resourceType = 'ObservationDefinition';

  /** Logical canonical URL to reference this ObservationDefinition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Business identifier of the ObservationDefinition (0..1) */
  identifier?: Identifier;

  /** Business version of the ObservationDefinition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this ObservationDefinition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this ObservationDefinition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** If for testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** The name of the individual or organization that published the ObservationDefinition (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the ObservationDefinition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Content intends to support these contexts (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for this ObservationDefinition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this ObservationDefinition is defined (0..1) */
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

  /** When ObservationDefinition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** Date on which the asset content was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** The effective date range for the ObservationDefinition (0..1) */
  effectivePeriod?: Period;

  /** Based on FHIR definition of another observation (0..*) */
  derivedFromCanonical?: string[];
  /** Id and extensions of the primitive `derivedFromCanonical`. */
  _derivedFromCanonical?: (Element | null)[];

  /** Based on external definition (0..*) */
  derivedFromUri?: string[];
  /** Id and extensions of the primitive `derivedFromUri`. */
  _derivedFromUri?: (Element | null)[];

  /** Type of subject for the defined observation (0..*) */
  subject?: CodeableConcept[];

  /** Desired kind of performer for such kind of observation (0..1) */
  performerType?: CodeableConcept;

  /** General type of observation (0..*) */
  category?: CodeableConcept[];

  /** Type of observation (1..1) */
  code?: CodeableConcept;

  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period (0..*) */
  permittedDataType?: valueSetCodes.ObservationDataType[];
  /** Id and extensions of the primitive `permittedDataType`. */
  _permittedDataType?: (Element | null)[];

  /** Multiple results allowed for conforming observations (0..1) */
  multipleResultsAllowed?: boolean;
  /** Id and extensions of the primitive `multipleResultsAllowed`. */
  _multipleResultsAllowed?: Element;

  /** Body part to be observed (0..1) */
  bodySite?: CodeableConcept;

  /** Method used to produce the observation (0..1) */
  method?: CodeableConcept;

  /** Kind of specimen used by this type of observation (0..*) */
  specimen?: Reference[];

  /** Measurement device or model of device (0..*) */
  device?: Reference[];

  /** The preferred name to be used when reporting the observation results (0..1) */
  preferredReportName?: string;
  /** Id and extensions of the primitive `preferredReportName`. */
  _preferredReportName?: Element;

  /** Unit for quantitative results (0..*) */
  permittedUnit?: Coding[];

  /** Set of qualified values for observation results (0..*) */
  qualifiedValue?: ObservationDefinitionQualifiedValue[];

  /** Definitions of related resources belonging to this kind of observation group (0..*) */
  hasMember?: Reference[];

  /** Component results (0..*) */
  component?: ObservationDefinitionComponent[];

  override fhirType(): string {
    return 'ObservationDefinition';
  }

  /** FHIR JSON for this ObservationDefinition, typed as the plain `ObservationDefinition` data type. */
  override toJSON(): plainTypes.ObservationDefinition {
    return this.serialize() as plainTypes.ObservationDefinition;
  }

  /** Logical canonical URL to reference this ObservationDefinition (globally unique) (0..1) */
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

  /** Business identifier of the ObservationDefinition (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Business version of the ObservationDefinition (0..1) */
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

  /** Name for this ObservationDefinition (computer friendly) (0..1) */
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

  /** Name for this ObservationDefinition (human friendly) (0..1) */
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

  /** If for testing purposes, not real usage (0..1) */
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

  /** The name of the individual or organization that published the ObservationDefinition (0..1) */
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

  /** Natural language description of the ObservationDefinition (0..1) */
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

  /** Content intends to support these contexts (0..*) Never undefined; an empty list is created when absent. */
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

  /** Intended jurisdiction for this ObservationDefinition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this ObservationDefinition is defined (0..1) */
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

  /** When ObservationDefinition was approved by publisher (0..1) */
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

  /** Date on which the asset content was last reviewed by the publisher (0..1) */
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

  /** The effective date range for the ObservationDefinition (0..1) Created when absent. */
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

  /** Based on FHIR definition of another observation (0..*) Never undefined; an empty list is created when absent. */
  getDerivedFromCanonical(): string[] {
    if (this.derivedFromCanonical === undefined) {
      this.derivedFromCanonical = [];
    }
    return this.derivedFromCanonical;
  }

  setDerivedFromCanonical(derivedFromCanonical: string[] | undefined): this {
    return this.setFieldValue('derivedFromCanonical', derivedFromCanonical);
  }

  hasDerivedFromCanonical(): boolean {
    return this.hasFieldValue('derivedFromCanonical');
  }

  /** Appends one value to `derivedFromCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addDerivedFromCanonical(derivedFromCanonical: string): this {
    return this.addFieldValue('derivedFromCanonical', derivedFromCanonical);
  }

  /** Based on external definition (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of subject for the defined observation (0..*) Never undefined; an empty list is created when absent. */
  getSubject(): CodeableConcept[] {
    if (this.subject === undefined) {
      this.subject = [];
    }
    return this.subject;
  }

  setSubject(subject: CodeableConcept[] | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Appends a new, empty CodeableConcept to `subject` and returns it so it can be filled in. */
  addSubject(): CodeableConcept;
  /** Appends the given CodeableConcept to `subject` and returns this object for chaining. */
  addSubject(codeableConcept: CodeableConcept): this;
  addSubject(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('subject', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('subject', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `subject`. One is added when the list is empty. */
  getSubjectFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSubject()[0];
    return firstCodeableConcept === undefined ? this.addSubject() : firstCodeableConcept;
  }

  /** Desired kind of performer for such kind of observation (0..1) Created when absent. */
  getPerformerType(): CodeableConcept {
    if (this.performerType === undefined) {
      this.performerType = new CodeableConcept();
    }
    return this.performerType;
  }

  setPerformerType(performerType: CodeableConcept | undefined): this {
    return this.setFieldValue('performerType', performerType);
  }

  hasPerformerType(): boolean {
    return this.hasFieldValue('performerType');
  }

  /** General type of observation (0..*) Never undefined; an empty list is created when absent. */
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

  /** Type of observation (1..1) Created when absent. */
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

  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period (0..*) Never undefined; an empty list is created when absent. */
  getPermittedDataType(): valueSetCodes.ObservationDataType[] {
    if (this.permittedDataType === undefined) {
      this.permittedDataType = [];
    }
    return this.permittedDataType;
  }

  setPermittedDataType(permittedDataType: valueSetCodes.ObservationDataType[] | undefined): this {
    return this.setFieldValue('permittedDataType', permittedDataType);
  }

  hasPermittedDataType(): boolean {
    return this.hasFieldValue('permittedDataType');
  }

  /** Appends one value to `permittedDataType`. Throws a FhirModelError when it is not a valid FHIR code. */
  addPermittedDataType(permittedDataType: valueSetCodes.ObservationDataType): this {
    return this.addFieldValue('permittedDataType', permittedDataType);
  }

  /** Multiple results allowed for conforming observations (0..1) */
  getMultipleResultsAllowed(): boolean | undefined {
    return this.multipleResultsAllowed;
  }

  /** Sets `multipleResultsAllowed`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setMultipleResultsAllowed(multipleResultsAllowed: boolean | undefined): this {
    return this.setFieldValue('multipleResultsAllowed', multipleResultsAllowed);
  }

  hasMultipleResultsAllowed(): boolean {
    return this.hasFieldValue('multipleResultsAllowed');
  }

  /** The element carrying the id and extensions of `multipleResultsAllowed`. Created when absent. */
  getMultipleResultsAllowedElement(): Element {
    if (this._multipleResultsAllowed === undefined) {
      this._multipleResultsAllowed = new Element();
    }
    return this._multipleResultsAllowed;
  }

  setMultipleResultsAllowedElement(multipleResultsAllowedElement: Element | undefined): this {
    this._multipleResultsAllowed = multipleResultsAllowedElement;
    return this;
  }

  /** Body part to be observed (0..1) Created when absent. */
  getBodySite(): CodeableConcept {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableConcept();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Method used to produce the observation (0..1) Created when absent. */
  getMethod(): CodeableConcept {
    if (this.method === undefined) {
      this.method = new CodeableConcept();
    }
    return this.method;
  }

  setMethod(method: CodeableConcept | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }

  /** Kind of specimen used by this type of observation (0..*) Never undefined; an empty list is created when absent. */
  getSpecimen(): Reference[] {
    if (this.specimen === undefined) {
      this.specimen = [];
    }
    return this.specimen;
  }

  setSpecimen(specimen: Reference[] | undefined): this {
    return this.setFieldValue('specimen', specimen);
  }

  hasSpecimen(): boolean {
    return this.hasFieldValue('specimen');
  }

  /** Appends a new, empty Reference to `specimen` and returns it so it can be filled in. */
  addSpecimen(): Reference;
  /** Appends the given Reference to `specimen` and returns this object for chaining. */
  addSpecimen(reference: Reference): this;
  addSpecimen(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('specimen', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('specimen', createdReference);
    return createdReference;
  }

  /** The first Reference of `specimen`. One is added when the list is empty. */
  getSpecimenFirstRep(): Reference {
    const firstReference = this.getSpecimen()[0];
    return firstReference === undefined ? this.addSpecimen() : firstReference;
  }

  /** Measurement device or model of device (0..*) Never undefined; an empty list is created when absent. */
  getDevice(): Reference[] {
    if (this.device === undefined) {
      this.device = [];
    }
    return this.device;
  }

  setDevice(device: Reference[] | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Appends a new, empty Reference to `device` and returns it so it can be filled in. */
  addDevice(): Reference;
  /** Appends the given Reference to `device` and returns this object for chaining. */
  addDevice(reference: Reference): this;
  addDevice(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('device', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('device', createdReference);
    return createdReference;
  }

  /** The first Reference of `device`. One is added when the list is empty. */
  getDeviceFirstRep(): Reference {
    const firstReference = this.getDevice()[0];
    return firstReference === undefined ? this.addDevice() : firstReference;
  }

  /** The preferred name to be used when reporting the observation results (0..1) */
  getPreferredReportName(): string | undefined {
    return this.preferredReportName;
  }

  /** Sets `preferredReportName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPreferredReportName(preferredReportName: string | undefined): this {
    return this.setFieldValue('preferredReportName', preferredReportName);
  }

  hasPreferredReportName(): boolean {
    return this.hasFieldValue('preferredReportName');
  }

  /** The element carrying the id and extensions of `preferredReportName`. Created when absent. */
  getPreferredReportNameElement(): Element {
    if (this._preferredReportName === undefined) {
      this._preferredReportName = new Element();
    }
    return this._preferredReportName;
  }

  setPreferredReportNameElement(preferredReportNameElement: Element | undefined): this {
    this._preferredReportName = preferredReportNameElement;
    return this;
  }

  /** Unit for quantitative results (0..*) Never undefined; an empty list is created when absent. */
  getPermittedUnit(): Coding[] {
    if (this.permittedUnit === undefined) {
      this.permittedUnit = [];
    }
    return this.permittedUnit;
  }

  setPermittedUnit(permittedUnit: Coding[] | undefined): this {
    return this.setFieldValue('permittedUnit', permittedUnit);
  }

  hasPermittedUnit(): boolean {
    return this.hasFieldValue('permittedUnit');
  }

  /** Appends a new, empty Coding to `permittedUnit` and returns it so it can be filled in. */
  addPermittedUnit(): Coding;
  /** Appends the given Coding to `permittedUnit` and returns this object for chaining. */
  addPermittedUnit(coding: Coding): this;
  addPermittedUnit(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('permittedUnit', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('permittedUnit', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `permittedUnit`. One is added when the list is empty. */
  getPermittedUnitFirstRep(): Coding {
    const firstCoding = this.getPermittedUnit()[0];
    return firstCoding === undefined ? this.addPermittedUnit() : firstCoding;
  }

  /** Set of qualified values for observation results (0..*) Never undefined; an empty list is created when absent. */
  getQualifiedValue(): ObservationDefinitionQualifiedValue[] {
    if (this.qualifiedValue === undefined) {
      this.qualifiedValue = [];
    }
    return this.qualifiedValue;
  }

  setQualifiedValue(qualifiedValue: ObservationDefinitionQualifiedValue[] | undefined): this {
    return this.setFieldValue('qualifiedValue', qualifiedValue);
  }

  hasQualifiedValue(): boolean {
    return this.hasFieldValue('qualifiedValue');
  }

  /** Appends a new, empty ObservationDefinitionQualifiedValue to `qualifiedValue` and returns it so it can be filled in. */
  addQualifiedValue(): ObservationDefinitionQualifiedValue;
  /** Appends the given ObservationDefinitionQualifiedValue to `qualifiedValue` and returns this object for chaining. */
  addQualifiedValue(observationDefinitionQualifiedValue: ObservationDefinitionQualifiedValue): this;
  addQualifiedValue(
    observationDefinitionQualifiedValue?: ObservationDefinitionQualifiedValue
  ): ObservationDefinitionQualifiedValue | this {
    if (observationDefinitionQualifiedValue !== undefined) {
      return this.addFieldValue('qualifiedValue', observationDefinitionQualifiedValue);
    }
    const createdObservationDefinitionQualifiedValue = new ObservationDefinitionQualifiedValue();
    this.addFieldValue('qualifiedValue', createdObservationDefinitionQualifiedValue);
    return createdObservationDefinitionQualifiedValue;
  }

  /** The first ObservationDefinitionQualifiedValue of `qualifiedValue`. One is added when the list is empty. */
  getQualifiedValueFirstRep(): ObservationDefinitionQualifiedValue {
    const firstObservationDefinitionQualifiedValue = this.getQualifiedValue()[0];
    return firstObservationDefinitionQualifiedValue === undefined
      ? this.addQualifiedValue()
      : firstObservationDefinitionQualifiedValue;
  }

  /** Definitions of related resources belonging to this kind of observation group (0..*) Never undefined; an empty list is created when absent. */
  getHasMember(): Reference[] {
    if (this.hasMember === undefined) {
      this.hasMember = [];
    }
    return this.hasMember;
  }

  setHasMember(hasMember: Reference[] | undefined): this {
    return this.setFieldValue('hasMember', hasMember);
  }

  hasHasMember(): boolean {
    return this.hasFieldValue('hasMember');
  }

  /** Appends a new, empty Reference to `hasMember` and returns it so it can be filled in. */
  addHasMember(): Reference;
  /** Appends the given Reference to `hasMember` and returns this object for chaining. */
  addHasMember(reference: Reference): this;
  addHasMember(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('hasMember', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('hasMember', createdReference);
    return createdReference;
  }

  /** The first Reference of `hasMember`. One is added when the list is empty. */
  getHasMemberFirstRep(): Reference {
    const firstReference = this.getHasMember()[0];
    return firstReference === undefined ? this.addHasMember() : firstReference;
  }

  /** Component results (0..*) Never undefined; an empty list is created when absent. */
  getComponent(): ObservationDefinitionComponent[] {
    if (this.component === undefined) {
      this.component = [];
    }
    return this.component;
  }

  setComponent(component: ObservationDefinitionComponent[] | undefined): this {
    return this.setFieldValue('component', component);
  }

  hasComponent(): boolean {
    return this.hasFieldValue('component');
  }

  /** Appends a new, empty ObservationDefinitionComponent to `component` and returns it so it can be filled in. */
  addComponent(): ObservationDefinitionComponent;
  /** Appends the given ObservationDefinitionComponent to `component` and returns this object for chaining. */
  addComponent(observationDefinitionComponent: ObservationDefinitionComponent): this;
  addComponent(
    observationDefinitionComponent?: ObservationDefinitionComponent
  ): ObservationDefinitionComponent | this {
    if (observationDefinitionComponent !== undefined) {
      return this.addFieldValue('component', observationDefinitionComponent);
    }
    const createdObservationDefinitionComponent = new ObservationDefinitionComponent();
    this.addFieldValue('component', createdObservationDefinitionComponent);
    return createdObservationDefinitionComponent;
  }

  /** The first ObservationDefinitionComponent of `component`. One is added when the list is empty. */
  getComponentFirstRep(): ObservationDefinitionComponent {
    const firstObservationDefinitionComponent = this.getComponent()[0];
    return firstObservationDefinitionComponent === undefined
      ? this.addComponent()
      : firstObservationDefinitionComponent;
  }
}

modelTypeRegistry.register('ObservationDefinition', ObservationDefinition, true);

/** True when the value is a ObservationDefinition model instance. */
export function isObservationDefinition(candidate: unknown): candidate is ObservationDefinition {
  return candidate instanceof ObservationDefinition;
}

/**
 * Set of qualified values for observation results
 */
export class ObservationDefinitionQualifiedValue extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'context', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'appliesTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'appliesTo', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'gender',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'gender', typeCode: 'code', allowedCodes: valueSetCodes.AdministrativeGender },
      ],
    },
    {
      elementName: 'age',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'age', typeCode: 'Range' }],
    },
    {
      elementName: 'gestationalAge',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'gestationalAge', typeCode: 'Range' }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'condition', typeCode: 'string' }],
    },
    {
      elementName: 'rangeCategory',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'rangeCategory',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ObservationRangeCategory,
        },
      ],
    },
    {
      elementName: 'range',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'range', typeCode: 'Range' }],
    },
    {
      elementName: 'validCodedValueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'validCodedValueSet', typeCode: 'canonical' }],
    },
    {
      elementName: 'normalCodedValueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'normalCodedValueSet', typeCode: 'canonical' }],
    },
    {
      elementName: 'abnormalCodedValueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'abnormalCodedValueSet', typeCode: 'canonical' }],
    },
    {
      elementName: 'criticalCodedValueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'criticalCodedValueSet', typeCode: 'canonical' }],
    },
  ];

  /** Context qualifier for the set of qualified values (0..1) */
  context?: CodeableConcept;

  /** Targetted population for the set of qualified values (0..*) */
  appliesTo?: CodeableConcept[];

  /** male | female | other | unknown (0..1) */
  gender?: valueSetCodes.AdministrativeGender;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;

  /** Applicable age range for the set of qualified values (0..1) */
  age?: Range;

  /** Applicable gestational age range for the set of qualified values (0..1) */
  gestationalAge?: Range;

  /** Condition associated with the set of qualified values (0..1) */
  condition?: string;
  /** Id and extensions of the primitive `condition`. */
  _condition?: Element;

  /** reference | critical | absolute (0..1) */
  rangeCategory?: valueSetCodes.ObservationRangeCategory;
  /** Id and extensions of the primitive `rangeCategory`. */
  _rangeCategory?: Element;

  /** The range for continuous or ordinal observations (0..1) */
  range?: Range;

  /** Value set of valid coded values as part of this set of qualified values (0..1) */
  validCodedValueSet?: string;
  /** Id and extensions of the primitive `validCodedValueSet`. */
  _validCodedValueSet?: Element;

  /** Value set of normal coded values as part of this set of qualified values (0..1) */
  normalCodedValueSet?: string;
  /** Id and extensions of the primitive `normalCodedValueSet`. */
  _normalCodedValueSet?: Element;

  /** Value set of abnormal coded values as part of this set of qualified values (0..1) */
  abnormalCodedValueSet?: string;
  /** Id and extensions of the primitive `abnormalCodedValueSet`. */
  _abnormalCodedValueSet?: Element;

  /** Value set of critical coded values as part of this set of qualified values (0..1) */
  criticalCodedValueSet?: string;
  /** Id and extensions of the primitive `criticalCodedValueSet`. */
  _criticalCodedValueSet?: Element;

  override fhirType(): string {
    return 'ObservationDefinition.qualifiedValue';
  }

  /** FHIR JSON for this ObservationDefinitionQualifiedValue, typed as the plain `ObservationDefinitionQualifiedValue` data type. */
  override toJSON(): plainTypes.ObservationDefinitionQualifiedValue {
    return this.serialize() as plainTypes.ObservationDefinitionQualifiedValue;
  }

  /** Context qualifier for the set of qualified values (0..1) Created when absent. */
  getContext(): CodeableConcept {
    if (this.context === undefined) {
      this.context = new CodeableConcept();
    }
    return this.context;
  }

  setContext(context: CodeableConcept | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** Targetted population for the set of qualified values (0..*) Never undefined; an empty list is created when absent. */
  getAppliesTo(): CodeableConcept[] {
    if (this.appliesTo === undefined) {
      this.appliesTo = [];
    }
    return this.appliesTo;
  }

  setAppliesTo(appliesTo: CodeableConcept[] | undefined): this {
    return this.setFieldValue('appliesTo', appliesTo);
  }

  hasAppliesTo(): boolean {
    return this.hasFieldValue('appliesTo');
  }

  /** Appends a new, empty CodeableConcept to `appliesTo` and returns it so it can be filled in. */
  addAppliesTo(): CodeableConcept;
  /** Appends the given CodeableConcept to `appliesTo` and returns this object for chaining. */
  addAppliesTo(codeableConcept: CodeableConcept): this;
  addAppliesTo(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('appliesTo', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('appliesTo', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `appliesTo`. One is added when the list is empty. */
  getAppliesToFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAppliesTo()[0];
    return firstCodeableConcept === undefined ? this.addAppliesTo() : firstCodeableConcept;
  }

  /** male | female | other | unknown (0..1) */
  getGender(): valueSetCodes.AdministrativeGender | undefined {
    return this.gender;
  }

  /** Sets `gender`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setGender(gender: valueSetCodes.AdministrativeGender | undefined): this {
    return this.setFieldValue('gender', gender);
  }

  hasGender(): boolean {
    return this.hasFieldValue('gender');
  }

  /** The element carrying the id and extensions of `gender`. Created when absent. */
  getGenderElement(): Element {
    if (this._gender === undefined) {
      this._gender = new Element();
    }
    return this._gender;
  }

  setGenderElement(genderElement: Element | undefined): this {
    this._gender = genderElement;
    return this;
  }

  /** Applicable age range for the set of qualified values (0..1) Created when absent. */
  getAge(): Range {
    if (this.age === undefined) {
      this.age = new Range();
    }
    return this.age;
  }

  setAge(age: Range | undefined): this {
    return this.setFieldValue('age', age);
  }

  hasAge(): boolean {
    return this.hasFieldValue('age');
  }

  /** Applicable gestational age range for the set of qualified values (0..1) Created when absent. */
  getGestationalAge(): Range {
    if (this.gestationalAge === undefined) {
      this.gestationalAge = new Range();
    }
    return this.gestationalAge;
  }

  setGestationalAge(gestationalAge: Range | undefined): this {
    return this.setFieldValue('gestationalAge', gestationalAge);
  }

  hasGestationalAge(): boolean {
    return this.hasFieldValue('gestationalAge');
  }

  /** Condition associated with the set of qualified values (0..1) */
  getCondition(): string | undefined {
    return this.condition;
  }

  /** Sets `condition`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCondition(condition: string | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** The element carrying the id and extensions of `condition`. Created when absent. */
  getConditionElement(): Element {
    if (this._condition === undefined) {
      this._condition = new Element();
    }
    return this._condition;
  }

  setConditionElement(conditionElement: Element | undefined): this {
    this._condition = conditionElement;
    return this;
  }

  /** reference | critical | absolute (0..1) */
  getRangeCategory(): valueSetCodes.ObservationRangeCategory | undefined {
    return this.rangeCategory;
  }

  /** Sets `rangeCategory`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRangeCategory(rangeCategory: valueSetCodes.ObservationRangeCategory | undefined): this {
    return this.setFieldValue('rangeCategory', rangeCategory);
  }

  hasRangeCategory(): boolean {
    return this.hasFieldValue('rangeCategory');
  }

  /** The element carrying the id and extensions of `rangeCategory`. Created when absent. */
  getRangeCategoryElement(): Element {
    if (this._rangeCategory === undefined) {
      this._rangeCategory = new Element();
    }
    return this._rangeCategory;
  }

  setRangeCategoryElement(rangeCategoryElement: Element | undefined): this {
    this._rangeCategory = rangeCategoryElement;
    return this;
  }

  /** The range for continuous or ordinal observations (0..1) Created when absent. */
  getRange(): Range {
    if (this.range === undefined) {
      this.range = new Range();
    }
    return this.range;
  }

  setRange(range: Range | undefined): this {
    return this.setFieldValue('range', range);
  }

  hasRange(): boolean {
    return this.hasFieldValue('range');
  }

  /** Value set of valid coded values as part of this set of qualified values (0..1) */
  getValidCodedValueSet(): string | undefined {
    return this.validCodedValueSet;
  }

  /** Sets `validCodedValueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setValidCodedValueSet(validCodedValueSet: string | undefined): this {
    return this.setFieldValue('validCodedValueSet', validCodedValueSet);
  }

  hasValidCodedValueSet(): boolean {
    return this.hasFieldValue('validCodedValueSet');
  }

  /** The element carrying the id and extensions of `validCodedValueSet`. Created when absent. */
  getValidCodedValueSetElement(): Element {
    if (this._validCodedValueSet === undefined) {
      this._validCodedValueSet = new Element();
    }
    return this._validCodedValueSet;
  }

  setValidCodedValueSetElement(validCodedValueSetElement: Element | undefined): this {
    this._validCodedValueSet = validCodedValueSetElement;
    return this;
  }

  /** Value set of normal coded values as part of this set of qualified values (0..1) */
  getNormalCodedValueSet(): string | undefined {
    return this.normalCodedValueSet;
  }

  /** Sets `normalCodedValueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setNormalCodedValueSet(normalCodedValueSet: string | undefined): this {
    return this.setFieldValue('normalCodedValueSet', normalCodedValueSet);
  }

  hasNormalCodedValueSet(): boolean {
    return this.hasFieldValue('normalCodedValueSet');
  }

  /** The element carrying the id and extensions of `normalCodedValueSet`. Created when absent. */
  getNormalCodedValueSetElement(): Element {
    if (this._normalCodedValueSet === undefined) {
      this._normalCodedValueSet = new Element();
    }
    return this._normalCodedValueSet;
  }

  setNormalCodedValueSetElement(normalCodedValueSetElement: Element | undefined): this {
    this._normalCodedValueSet = normalCodedValueSetElement;
    return this;
  }

  /** Value set of abnormal coded values as part of this set of qualified values (0..1) */
  getAbnormalCodedValueSet(): string | undefined {
    return this.abnormalCodedValueSet;
  }

  /** Sets `abnormalCodedValueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setAbnormalCodedValueSet(abnormalCodedValueSet: string | undefined): this {
    return this.setFieldValue('abnormalCodedValueSet', abnormalCodedValueSet);
  }

  hasAbnormalCodedValueSet(): boolean {
    return this.hasFieldValue('abnormalCodedValueSet');
  }

  /** The element carrying the id and extensions of `abnormalCodedValueSet`. Created when absent. */
  getAbnormalCodedValueSetElement(): Element {
    if (this._abnormalCodedValueSet === undefined) {
      this._abnormalCodedValueSet = new Element();
    }
    return this._abnormalCodedValueSet;
  }

  setAbnormalCodedValueSetElement(abnormalCodedValueSetElement: Element | undefined): this {
    this._abnormalCodedValueSet = abnormalCodedValueSetElement;
    return this;
  }

  /** Value set of critical coded values as part of this set of qualified values (0..1) */
  getCriticalCodedValueSet(): string | undefined {
    return this.criticalCodedValueSet;
  }

  /** Sets `criticalCodedValueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setCriticalCodedValueSet(criticalCodedValueSet: string | undefined): this {
    return this.setFieldValue('criticalCodedValueSet', criticalCodedValueSet);
  }

  hasCriticalCodedValueSet(): boolean {
    return this.hasFieldValue('criticalCodedValueSet');
  }

  /** The element carrying the id and extensions of `criticalCodedValueSet`. Created when absent. */
  getCriticalCodedValueSetElement(): Element {
    if (this._criticalCodedValueSet === undefined) {
      this._criticalCodedValueSet = new Element();
    }
    return this._criticalCodedValueSet;
  }

  setCriticalCodedValueSetElement(criticalCodedValueSetElement: Element | undefined): this {
    this._criticalCodedValueSet = criticalCodedValueSetElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ObservationDefinitionQualifiedValue',
  ObservationDefinitionQualifiedValue,
  false
);

/**
 * Component results
 */
export class ObservationDefinitionComponent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'permittedDataType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'permittedDataType',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ObservationDataType,
        },
      ],
    },
    {
      elementName: 'permittedUnit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'permittedUnit', typeCode: 'Coding' }],
    },
    {
      elementName: 'qualifiedValue',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'qualifiedValue', typeCode: 'ObservationDefinitionQualifiedValue' }],
    },
  ];

  /** Type of observation (1..1) */
  code?: CodeableConcept;

  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period (0..*) */
  permittedDataType?: valueSetCodes.ObservationDataType[];
  /** Id and extensions of the primitive `permittedDataType`. */
  _permittedDataType?: (Element | null)[];

  /** Unit for quantitative results (0..*) */
  permittedUnit?: Coding[];

  /** Set of qualified values for observation results (0..*) */
  qualifiedValue?: ObservationDefinitionQualifiedValue[];

  override fhirType(): string {
    return 'ObservationDefinition.component';
  }

  /** FHIR JSON for this ObservationDefinitionComponent, typed as the plain `ObservationDefinitionComponent` data type. */
  override toJSON(): plainTypes.ObservationDefinitionComponent {
    return this.serialize() as plainTypes.ObservationDefinitionComponent;
  }

  /** Type of observation (1..1) Created when absent. */
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

  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period (0..*) Never undefined; an empty list is created when absent. */
  getPermittedDataType(): valueSetCodes.ObservationDataType[] {
    if (this.permittedDataType === undefined) {
      this.permittedDataType = [];
    }
    return this.permittedDataType;
  }

  setPermittedDataType(permittedDataType: valueSetCodes.ObservationDataType[] | undefined): this {
    return this.setFieldValue('permittedDataType', permittedDataType);
  }

  hasPermittedDataType(): boolean {
    return this.hasFieldValue('permittedDataType');
  }

  /** Appends one value to `permittedDataType`. Throws a FhirModelError when it is not a valid FHIR code. */
  addPermittedDataType(permittedDataType: valueSetCodes.ObservationDataType): this {
    return this.addFieldValue('permittedDataType', permittedDataType);
  }

  /** Unit for quantitative results (0..*) Never undefined; an empty list is created when absent. */
  getPermittedUnit(): Coding[] {
    if (this.permittedUnit === undefined) {
      this.permittedUnit = [];
    }
    return this.permittedUnit;
  }

  setPermittedUnit(permittedUnit: Coding[] | undefined): this {
    return this.setFieldValue('permittedUnit', permittedUnit);
  }

  hasPermittedUnit(): boolean {
    return this.hasFieldValue('permittedUnit');
  }

  /** Appends a new, empty Coding to `permittedUnit` and returns it so it can be filled in. */
  addPermittedUnit(): Coding;
  /** Appends the given Coding to `permittedUnit` and returns this object for chaining. */
  addPermittedUnit(coding: Coding): this;
  addPermittedUnit(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('permittedUnit', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('permittedUnit', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `permittedUnit`. One is added when the list is empty. */
  getPermittedUnitFirstRep(): Coding {
    const firstCoding = this.getPermittedUnit()[0];
    return firstCoding === undefined ? this.addPermittedUnit() : firstCoding;
  }

  /** Set of qualified values for observation results (0..*) Never undefined; an empty list is created when absent. */
  getQualifiedValue(): ObservationDefinitionQualifiedValue[] {
    if (this.qualifiedValue === undefined) {
      this.qualifiedValue = [];
    }
    return this.qualifiedValue;
  }

  setQualifiedValue(qualifiedValue: ObservationDefinitionQualifiedValue[] | undefined): this {
    return this.setFieldValue('qualifiedValue', qualifiedValue);
  }

  hasQualifiedValue(): boolean {
    return this.hasFieldValue('qualifiedValue');
  }

  /** Appends a new, empty ObservationDefinitionQualifiedValue to `qualifiedValue` and returns it so it can be filled in. */
  addQualifiedValue(): ObservationDefinitionQualifiedValue;
  /** Appends the given ObservationDefinitionQualifiedValue to `qualifiedValue` and returns this object for chaining. */
  addQualifiedValue(observationDefinitionQualifiedValue: ObservationDefinitionQualifiedValue): this;
  addQualifiedValue(
    observationDefinitionQualifiedValue?: ObservationDefinitionQualifiedValue
  ): ObservationDefinitionQualifiedValue | this {
    if (observationDefinitionQualifiedValue !== undefined) {
      return this.addFieldValue('qualifiedValue', observationDefinitionQualifiedValue);
    }
    const createdObservationDefinitionQualifiedValue = new ObservationDefinitionQualifiedValue();
    this.addFieldValue('qualifiedValue', createdObservationDefinitionQualifiedValue);
    return createdObservationDefinitionQualifiedValue;
  }

  /** The first ObservationDefinitionQualifiedValue of `qualifiedValue`. One is added when the list is empty. */
  getQualifiedValueFirstRep(): ObservationDefinitionQualifiedValue {
    const firstObservationDefinitionQualifiedValue = this.getQualifiedValue()[0];
    return firstObservationDefinitionQualifiedValue === undefined
      ? this.addQualifiedValue()
      : firstObservationDefinitionQualifiedValue;
  }
}

modelTypeRegistry.register('ObservationDefinitionComponent', ObservationDefinitionComponent, false);
