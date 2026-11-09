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
import { UsageContext } from './usageContext';

/**
 * Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.
 */
export class SubscriptionTopic extends DomainResource {
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
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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
      elementName: 'resourceTrigger',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'resourceTrigger', typeCode: 'SubscriptionTopicResourceTrigger' }],
    },
    {
      elementName: 'eventTrigger',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'eventTrigger', typeCode: 'SubscriptionTopicEventTrigger' }],
    },
    {
      elementName: 'canFilterBy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'canFilterBy', typeCode: 'SubscriptionTopicCanFilterBy' }],
    },
    {
      elementName: 'notificationShape',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'notificationShape', typeCode: 'SubscriptionTopicNotificationShape' }],
    },
  ];

  readonly resourceType = 'SubscriptionTopic';

  /** Canonical identifier for this subscription topic, represented as an absolute URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Business identifier for subscription topic (0..*) */
  identifier?: Identifier[];

  /** Business version of the subscription topic (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this subscription topic (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this subscription topic (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Based on FHIR protocol or definition (0..*) */
  derivedFrom?: string[];
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: (Element | null)[];

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** If for testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** Date status first applied (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** The name of the individual or organization that published the SubscriptionTopic (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the SubscriptionTopic (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Content intends to support these contexts (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction of the SubscriptionTopic (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this SubscriptionTopic is defined (0..1) */
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

  /** When SubscriptionTopic is/was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** Date the Subscription Topic was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** The effective date range for the SubscriptionTopic (0..1) */
  effectivePeriod?: Period;

  /** Definition of a resource-based trigger for the subscription topic (0..*) */
  resourceTrigger?: SubscriptionTopicResourceTrigger[];

  /** Event definitions the SubscriptionTopic (0..*) */
  eventTrigger?: SubscriptionTopicEventTrigger[];

  /** Properties by which a Subscription can filter notifications from the SubscriptionTopic (0..*) */
  canFilterBy?: SubscriptionTopicCanFilterBy[];

  /** Properties for describing the shape of notifications generated by this topic (0..*) */
  notificationShape?: SubscriptionTopicNotificationShape[];

  override fhirType(): string {
    return 'SubscriptionTopic';
  }

  /** FHIR JSON for this SubscriptionTopic, typed as the plain `SubscriptionTopic` data type. */
  override toJSON(): plainTypes.SubscriptionTopic {
    return this.serialize() as plainTypes.SubscriptionTopic;
  }

  /** Canonical identifier for this subscription topic, represented as an absolute URI (globally unique) (1..1) */
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

  /** Business identifier for subscription topic (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the subscription topic (0..1) */
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

  /** Name for this subscription topic (computer friendly) (0..1) */
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

  /** Name for this subscription topic (human friendly) (0..1) */
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

  /** Based on FHIR protocol or definition (0..*) Never undefined; an empty list is created when absent. */
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

  /** Date status first applied (0..1) */
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

  /** The name of the individual or organization that published the SubscriptionTopic (0..1) */
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

  /** Natural language description of the SubscriptionTopic (0..1) */
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

  /** Intended jurisdiction of the SubscriptionTopic (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this SubscriptionTopic is defined (0..1) */
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

  /** When SubscriptionTopic is/was approved by publisher (0..1) */
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

  /** Date the Subscription Topic was last reviewed by the publisher (0..1) */
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

  /** The effective date range for the SubscriptionTopic (0..1) Created when absent. */
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

  /** Definition of a resource-based trigger for the subscription topic (0..*) Never undefined; an empty list is created when absent. */
  getResourceTrigger(): SubscriptionTopicResourceTrigger[] {
    if (this.resourceTrigger === undefined) {
      this.resourceTrigger = [];
    }
    return this.resourceTrigger;
  }

  setResourceTrigger(resourceTrigger: SubscriptionTopicResourceTrigger[] | undefined): this {
    return this.setFieldValue('resourceTrigger', resourceTrigger);
  }

  hasResourceTrigger(): boolean {
    return this.hasFieldValue('resourceTrigger');
  }

  /** Appends a new, empty SubscriptionTopicResourceTrigger to `resourceTrigger` and returns it so it can be filled in. */
  addResourceTrigger(): SubscriptionTopicResourceTrigger;
  /** Appends the given SubscriptionTopicResourceTrigger to `resourceTrigger` and returns this object for chaining. */
  addResourceTrigger(subscriptionTopicResourceTrigger: SubscriptionTopicResourceTrigger): this;
  addResourceTrigger(
    subscriptionTopicResourceTrigger?: SubscriptionTopicResourceTrigger
  ): SubscriptionTopicResourceTrigger | this {
    if (subscriptionTopicResourceTrigger !== undefined) {
      return this.addFieldValue('resourceTrigger', subscriptionTopicResourceTrigger);
    }
    const createdSubscriptionTopicResourceTrigger = new SubscriptionTopicResourceTrigger();
    this.addFieldValue('resourceTrigger', createdSubscriptionTopicResourceTrigger);
    return createdSubscriptionTopicResourceTrigger;
  }

  /** The first SubscriptionTopicResourceTrigger of `resourceTrigger`. One is added when the list is empty. */
  getResourceTriggerFirstRep(): SubscriptionTopicResourceTrigger {
    const firstSubscriptionTopicResourceTrigger = this.getResourceTrigger()[0];
    return firstSubscriptionTopicResourceTrigger === undefined
      ? this.addResourceTrigger()
      : firstSubscriptionTopicResourceTrigger;
  }

  /** Event definitions the SubscriptionTopic (0..*) Never undefined; an empty list is created when absent. */
  getEventTrigger(): SubscriptionTopicEventTrigger[] {
    if (this.eventTrigger === undefined) {
      this.eventTrigger = [];
    }
    return this.eventTrigger;
  }

  setEventTrigger(eventTrigger: SubscriptionTopicEventTrigger[] | undefined): this {
    return this.setFieldValue('eventTrigger', eventTrigger);
  }

  hasEventTrigger(): boolean {
    return this.hasFieldValue('eventTrigger');
  }

  /** Appends a new, empty SubscriptionTopicEventTrigger to `eventTrigger` and returns it so it can be filled in. */
  addEventTrigger(): SubscriptionTopicEventTrigger;
  /** Appends the given SubscriptionTopicEventTrigger to `eventTrigger` and returns this object for chaining. */
  addEventTrigger(subscriptionTopicEventTrigger: SubscriptionTopicEventTrigger): this;
  addEventTrigger(
    subscriptionTopicEventTrigger?: SubscriptionTopicEventTrigger
  ): SubscriptionTopicEventTrigger | this {
    if (subscriptionTopicEventTrigger !== undefined) {
      return this.addFieldValue('eventTrigger', subscriptionTopicEventTrigger);
    }
    const createdSubscriptionTopicEventTrigger = new SubscriptionTopicEventTrigger();
    this.addFieldValue('eventTrigger', createdSubscriptionTopicEventTrigger);
    return createdSubscriptionTopicEventTrigger;
  }

  /** The first SubscriptionTopicEventTrigger of `eventTrigger`. One is added when the list is empty. */
  getEventTriggerFirstRep(): SubscriptionTopicEventTrigger {
    const firstSubscriptionTopicEventTrigger = this.getEventTrigger()[0];
    return firstSubscriptionTopicEventTrigger === undefined
      ? this.addEventTrigger()
      : firstSubscriptionTopicEventTrigger;
  }

  /** Properties by which a Subscription can filter notifications from the SubscriptionTopic (0..*) Never undefined; an empty list is created when absent. */
  getCanFilterBy(): SubscriptionTopicCanFilterBy[] {
    if (this.canFilterBy === undefined) {
      this.canFilterBy = [];
    }
    return this.canFilterBy;
  }

  setCanFilterBy(canFilterBy: SubscriptionTopicCanFilterBy[] | undefined): this {
    return this.setFieldValue('canFilterBy', canFilterBy);
  }

  hasCanFilterBy(): boolean {
    return this.hasFieldValue('canFilterBy');
  }

  /** Appends a new, empty SubscriptionTopicCanFilterBy to `canFilterBy` and returns it so it can be filled in. */
  addCanFilterBy(): SubscriptionTopicCanFilterBy;
  /** Appends the given SubscriptionTopicCanFilterBy to `canFilterBy` and returns this object for chaining. */
  addCanFilterBy(subscriptionTopicCanFilterBy: SubscriptionTopicCanFilterBy): this;
  addCanFilterBy(
    subscriptionTopicCanFilterBy?: SubscriptionTopicCanFilterBy
  ): SubscriptionTopicCanFilterBy | this {
    if (subscriptionTopicCanFilterBy !== undefined) {
      return this.addFieldValue('canFilterBy', subscriptionTopicCanFilterBy);
    }
    const createdSubscriptionTopicCanFilterBy = new SubscriptionTopicCanFilterBy();
    this.addFieldValue('canFilterBy', createdSubscriptionTopicCanFilterBy);
    return createdSubscriptionTopicCanFilterBy;
  }

  /** The first SubscriptionTopicCanFilterBy of `canFilterBy`. One is added when the list is empty. */
  getCanFilterByFirstRep(): SubscriptionTopicCanFilterBy {
    const firstSubscriptionTopicCanFilterBy = this.getCanFilterBy()[0];
    return firstSubscriptionTopicCanFilterBy === undefined
      ? this.addCanFilterBy()
      : firstSubscriptionTopicCanFilterBy;
  }

  /** Properties for describing the shape of notifications generated by this topic (0..*) Never undefined; an empty list is created when absent. */
  getNotificationShape(): SubscriptionTopicNotificationShape[] {
    if (this.notificationShape === undefined) {
      this.notificationShape = [];
    }
    return this.notificationShape;
  }

  setNotificationShape(notificationShape: SubscriptionTopicNotificationShape[] | undefined): this {
    return this.setFieldValue('notificationShape', notificationShape);
  }

  hasNotificationShape(): boolean {
    return this.hasFieldValue('notificationShape');
  }

  /** Appends a new, empty SubscriptionTopicNotificationShape to `notificationShape` and returns it so it can be filled in. */
  addNotificationShape(): SubscriptionTopicNotificationShape;
  /** Appends the given SubscriptionTopicNotificationShape to `notificationShape` and returns this object for chaining. */
  addNotificationShape(
    subscriptionTopicNotificationShape: SubscriptionTopicNotificationShape
  ): this;
  addNotificationShape(
    subscriptionTopicNotificationShape?: SubscriptionTopicNotificationShape
  ): SubscriptionTopicNotificationShape | this {
    if (subscriptionTopicNotificationShape !== undefined) {
      return this.addFieldValue('notificationShape', subscriptionTopicNotificationShape);
    }
    const createdSubscriptionTopicNotificationShape = new SubscriptionTopicNotificationShape();
    this.addFieldValue('notificationShape', createdSubscriptionTopicNotificationShape);
    return createdSubscriptionTopicNotificationShape;
  }

  /** The first SubscriptionTopicNotificationShape of `notificationShape`. One is added when the list is empty. */
  getNotificationShapeFirstRep(): SubscriptionTopicNotificationShape {
    const firstSubscriptionTopicNotificationShape = this.getNotificationShape()[0];
    return firstSubscriptionTopicNotificationShape === undefined
      ? this.addNotificationShape()
      : firstSubscriptionTopicNotificationShape;
  }
}

modelTypeRegistry.register('SubscriptionTopic', SubscriptionTopic, true);

/** True when the value is a SubscriptionTopic model instance. */
export function isSubscriptionTopic(candidate: unknown): candidate is SubscriptionTopic {
  return candidate instanceof SubscriptionTopic;
}

/**
 * Definition of a resource-based trigger for the subscription topic
 */
export class SubscriptionTopicResourceTrigger extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'resource',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'uri' }],
    },
    {
      elementName: 'supportedInteraction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'supportedInteraction',
          typeCode: 'code',
          allowedCodes: valueSetCodes.InteractionTrigger,
        },
      ],
    },
    {
      elementName: 'queryCriteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'queryCriteria', typeCode: 'SubscriptionTopicResourceTriggerQueryCriteria' },
      ],
    },
    {
      elementName: 'fhirPathCriteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fhirPathCriteria', typeCode: 'string' }],
    },
  ];

  /** Text representation of the resource trigger (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Data Type or Resource (reference to definition) for this trigger definition (1..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;

  /** create | update | delete (0..*) */
  supportedInteraction?: valueSetCodes.InteractionTrigger[];
  /** Id and extensions of the primitive `supportedInteraction`. */
  _supportedInteraction?: (Element | null)[];

  /** Query based trigger rule (0..1) */
  queryCriteria?: SubscriptionTopicResourceTriggerQueryCriteria;

  /** FHIRPath based trigger rule (0..1) */
  fhirPathCriteria?: string;
  /** Id and extensions of the primitive `fhirPathCriteria`. */
  _fhirPathCriteria?: Element;

  override fhirType(): string {
    return 'SubscriptionTopic.resourceTrigger';
  }

  /** FHIR JSON for this SubscriptionTopicResourceTrigger, typed as the plain `SubscriptionTopicResourceTrigger` data type. */
  override toJSON(): plainTypes.SubscriptionTopicResourceTrigger {
    return this.serialize() as plainTypes.SubscriptionTopicResourceTrigger;
  }

  /** Text representation of the resource trigger (0..1) */
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

  /** Data Type or Resource (reference to definition) for this trigger definition (1..1) */
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

  /** create | update | delete (0..*) Never undefined; an empty list is created when absent. */
  getSupportedInteraction(): valueSetCodes.InteractionTrigger[] {
    if (this.supportedInteraction === undefined) {
      this.supportedInteraction = [];
    }
    return this.supportedInteraction;
  }

  setSupportedInteraction(
    supportedInteraction: valueSetCodes.InteractionTrigger[] | undefined
  ): this {
    return this.setFieldValue('supportedInteraction', supportedInteraction);
  }

  hasSupportedInteraction(): boolean {
    return this.hasFieldValue('supportedInteraction');
  }

  /** Appends one value to `supportedInteraction`. Throws a FhirModelError when it is not a valid FHIR code. */
  addSupportedInteraction(supportedInteraction: valueSetCodes.InteractionTrigger): this {
    return this.addFieldValue('supportedInteraction', supportedInteraction);
  }

  /** Query based trigger rule (0..1) Created when absent. */
  getQueryCriteria(): SubscriptionTopicResourceTriggerQueryCriteria {
    if (this.queryCriteria === undefined) {
      this.queryCriteria = new SubscriptionTopicResourceTriggerQueryCriteria();
    }
    return this.queryCriteria;
  }

  setQueryCriteria(queryCriteria: SubscriptionTopicResourceTriggerQueryCriteria | undefined): this {
    return this.setFieldValue('queryCriteria', queryCriteria);
  }

  hasQueryCriteria(): boolean {
    return this.hasFieldValue('queryCriteria');
  }

  /** FHIRPath based trigger rule (0..1) */
  getFhirPathCriteria(): string | undefined {
    return this.fhirPathCriteria;
  }

  /** Sets `fhirPathCriteria`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setFhirPathCriteria(fhirPathCriteria: string | undefined): this {
    return this.setFieldValue('fhirPathCriteria', fhirPathCriteria);
  }

  hasFhirPathCriteria(): boolean {
    return this.hasFieldValue('fhirPathCriteria');
  }

  /** The element carrying the id and extensions of `fhirPathCriteria`. Created when absent. */
  getFhirPathCriteriaElement(): Element {
    if (this._fhirPathCriteria === undefined) {
      this._fhirPathCriteria = new Element();
    }
    return this._fhirPathCriteria;
  }

  setFhirPathCriteriaElement(fhirPathCriteriaElement: Element | undefined): this {
    this._fhirPathCriteria = fhirPathCriteriaElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SubscriptionTopicResourceTrigger',
  SubscriptionTopicResourceTrigger,
  false
);

/**
 * Query based trigger rule
 */
export class SubscriptionTopicResourceTriggerQueryCriteria extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'previous',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'previous', typeCode: 'string' }],
    },
    {
      elementName: 'resultForCreate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'resultForCreate',
          typeCode: 'code',
          allowedCodes: valueSetCodes.CriteriaNotExistsBehavior,
        },
      ],
    },
    {
      elementName: 'current',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'current', typeCode: 'string' }],
    },
    {
      elementName: 'resultForDelete',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'resultForDelete',
          typeCode: 'code',
          allowedCodes: valueSetCodes.CriteriaNotExistsBehavior,
        },
      ],
    },
    {
      elementName: 'requireBoth',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requireBoth', typeCode: 'boolean' }],
    },
  ];

  /** Rule applied to previous resource state (0..1) */
  previous?: string;
  /** Id and extensions of the primitive `previous`. */
  _previous?: Element;

  /** test-passes | test-fails (0..1) */
  resultForCreate?: valueSetCodes.CriteriaNotExistsBehavior;
  /** Id and extensions of the primitive `resultForCreate`. */
  _resultForCreate?: Element;

  /** Rule applied to current resource state (0..1) */
  current?: string;
  /** Id and extensions of the primitive `current`. */
  _current?: Element;

  /** test-passes | test-fails (0..1) */
  resultForDelete?: valueSetCodes.CriteriaNotExistsBehavior;
  /** Id and extensions of the primitive `resultForDelete`. */
  _resultForDelete?: Element;

  /** Both must be true flag (0..1) */
  requireBoth?: boolean;
  /** Id and extensions of the primitive `requireBoth`. */
  _requireBoth?: Element;

  override fhirType(): string {
    return 'SubscriptionTopic.resourceTrigger.queryCriteria';
  }

  /** FHIR JSON for this SubscriptionTopicResourceTriggerQueryCriteria, typed as the plain `SubscriptionTopicQueryCriteria` data type. */
  override toJSON(): plainTypes.SubscriptionTopicQueryCriteria {
    return this.serialize() as plainTypes.SubscriptionTopicQueryCriteria;
  }

  /** Rule applied to previous resource state (0..1) */
  getPrevious(): string | undefined {
    return this.previous;
  }

  /** Sets `previous`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPrevious(previous: string | undefined): this {
    return this.setFieldValue('previous', previous);
  }

  hasPrevious(): boolean {
    return this.hasFieldValue('previous');
  }

  /** The element carrying the id and extensions of `previous`. Created when absent. */
  getPreviousElement(): Element {
    if (this._previous === undefined) {
      this._previous = new Element();
    }
    return this._previous;
  }

  setPreviousElement(previousElement: Element | undefined): this {
    this._previous = previousElement;
    return this;
  }

  /** test-passes | test-fails (0..1) */
  getResultForCreate(): valueSetCodes.CriteriaNotExistsBehavior | undefined {
    return this.resultForCreate;
  }

  /** Sets `resultForCreate`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setResultForCreate(resultForCreate: valueSetCodes.CriteriaNotExistsBehavior | undefined): this {
    return this.setFieldValue('resultForCreate', resultForCreate);
  }

  hasResultForCreate(): boolean {
    return this.hasFieldValue('resultForCreate');
  }

  /** The element carrying the id and extensions of `resultForCreate`. Created when absent. */
  getResultForCreateElement(): Element {
    if (this._resultForCreate === undefined) {
      this._resultForCreate = new Element();
    }
    return this._resultForCreate;
  }

  setResultForCreateElement(resultForCreateElement: Element | undefined): this {
    this._resultForCreate = resultForCreateElement;
    return this;
  }

  /** Rule applied to current resource state (0..1) */
  getCurrent(): string | undefined {
    return this.current;
  }

  /** Sets `current`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCurrent(current: string | undefined): this {
    return this.setFieldValue('current', current);
  }

  hasCurrent(): boolean {
    return this.hasFieldValue('current');
  }

  /** The element carrying the id and extensions of `current`. Created when absent. */
  getCurrentElement(): Element {
    if (this._current === undefined) {
      this._current = new Element();
    }
    return this._current;
  }

  setCurrentElement(currentElement: Element | undefined): this {
    this._current = currentElement;
    return this;
  }

  /** test-passes | test-fails (0..1) */
  getResultForDelete(): valueSetCodes.CriteriaNotExistsBehavior | undefined {
    return this.resultForDelete;
  }

  /** Sets `resultForDelete`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setResultForDelete(resultForDelete: valueSetCodes.CriteriaNotExistsBehavior | undefined): this {
    return this.setFieldValue('resultForDelete', resultForDelete);
  }

  hasResultForDelete(): boolean {
    return this.hasFieldValue('resultForDelete');
  }

  /** The element carrying the id and extensions of `resultForDelete`. Created when absent. */
  getResultForDeleteElement(): Element {
    if (this._resultForDelete === undefined) {
      this._resultForDelete = new Element();
    }
    return this._resultForDelete;
  }

  setResultForDeleteElement(resultForDeleteElement: Element | undefined): this {
    this._resultForDelete = resultForDeleteElement;
    return this;
  }

  /** Both must be true flag (0..1) */
  getRequireBoth(): boolean | undefined {
    return this.requireBoth;
  }

  /** Sets `requireBoth`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setRequireBoth(requireBoth: boolean | undefined): this {
    return this.setFieldValue('requireBoth', requireBoth);
  }

  hasRequireBoth(): boolean {
    return this.hasFieldValue('requireBoth');
  }

  /** The element carrying the id and extensions of `requireBoth`. Created when absent. */
  getRequireBothElement(): Element {
    if (this._requireBoth === undefined) {
      this._requireBoth = new Element();
    }
    return this._requireBoth;
  }

  setRequireBothElement(requireBothElement: Element | undefined): this {
    this._requireBoth = requireBothElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SubscriptionTopicResourceTriggerQueryCriteria',
  SubscriptionTopicResourceTriggerQueryCriteria,
  false
);

/**
 * Event definitions the SubscriptionTopic
 */
export class SubscriptionTopicEventTrigger extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'event',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'event', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'resource',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'uri' }],
    },
  ];

  /** Text representation of the event trigger (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Event which can trigger a notification from the SubscriptionTopic (1..1) */
  event?: CodeableConcept;

  /** Data Type or Resource (reference to definition) for this trigger definition (1..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;

  override fhirType(): string {
    return 'SubscriptionTopic.eventTrigger';
  }

  /** FHIR JSON for this SubscriptionTopicEventTrigger, typed as the plain `SubscriptionTopicEventTrigger` data type. */
  override toJSON(): plainTypes.SubscriptionTopicEventTrigger {
    return this.serialize() as plainTypes.SubscriptionTopicEventTrigger;
  }

  /** Text representation of the event trigger (0..1) */
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

  /** Event which can trigger a notification from the SubscriptionTopic (1..1) Created when absent. */
  getEvent(): CodeableConcept {
    if (this.event === undefined) {
      this.event = new CodeableConcept();
    }
    return this.event;
  }

  setEvent(event: CodeableConcept | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
  }

  /** Data Type or Resource (reference to definition) for this trigger definition (1..1) */
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
}

modelTypeRegistry.register('SubscriptionTopicEventTrigger', SubscriptionTopicEventTrigger, false);

/**
 * Properties by which a Subscription can filter notifications from the SubscriptionTopic
 */
export class SubscriptionTopicCanFilterBy extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'uri' }],
    },
    {
      elementName: 'filterParameter',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'filterParameter', typeCode: 'string' }],
    },
    {
      elementName: 'filterDefinition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'filterDefinition', typeCode: 'uri' }],
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
  ];

  /** Description of this filter parameter (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** URL of the triggering Resource that this filter applies to (0..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;

  /** Human-readable and computation-friendly name for a filter parameter usable by subscriptions on this topic, via Subscription.filterBy.filterParameter (1..1) */
  filterParameter?: string;
  /** Id and extensions of the primitive `filterParameter`. */
  _filterParameter?: Element;

  /** Canonical URL for a filterParameter definition (0..1) */
  filterDefinition?: string;
  /** Id and extensions of the primitive `filterDefinition`. */
  _filterDefinition?: Element;

  /** eq | ne | gt | lt | ge | le | sa | eb | ap (0..*) */
  comparator?: valueSetCodes.SearchComparator[];
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: (Element | null)[];

  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate (0..*) */
  modifier?: valueSetCodes.SearchModifierCode[];
  /** Id and extensions of the primitive `modifier`. */
  _modifier?: (Element | null)[];

  override fhirType(): string {
    return 'SubscriptionTopic.canFilterBy';
  }

  /** FHIR JSON for this SubscriptionTopicCanFilterBy, typed as the plain `SubscriptionTopicCanFilterBy` data type. */
  override toJSON(): plainTypes.SubscriptionTopicCanFilterBy {
    return this.serialize() as plainTypes.SubscriptionTopicCanFilterBy;
  }

  /** Description of this filter parameter (0..1) */
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

  /** URL of the triggering Resource that this filter applies to (0..1) */
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

  /** Human-readable and computation-friendly name for a filter parameter usable by subscriptions on this topic, via Subscription.filterBy.filterParameter (1..1) */
  getFilterParameter(): string | undefined {
    return this.filterParameter;
  }

  /** Sets `filterParameter`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setFilterParameter(filterParameter: string | undefined): this {
    return this.setFieldValue('filterParameter', filterParameter);
  }

  hasFilterParameter(): boolean {
    return this.hasFieldValue('filterParameter');
  }

  /** The element carrying the id and extensions of `filterParameter`. Created when absent. */
  getFilterParameterElement(): Element {
    if (this._filterParameter === undefined) {
      this._filterParameter = new Element();
    }
    return this._filterParameter;
  }

  setFilterParameterElement(filterParameterElement: Element | undefined): this {
    this._filterParameter = filterParameterElement;
    return this;
  }

  /** Canonical URL for a filterParameter definition (0..1) */
  getFilterDefinition(): string | undefined {
    return this.filterDefinition;
  }

  /** Sets `filterDefinition`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setFilterDefinition(filterDefinition: string | undefined): this {
    return this.setFieldValue('filterDefinition', filterDefinition);
  }

  hasFilterDefinition(): boolean {
    return this.hasFieldValue('filterDefinition');
  }

  /** The element carrying the id and extensions of `filterDefinition`. Created when absent. */
  getFilterDefinitionElement(): Element {
    if (this._filterDefinition === undefined) {
      this._filterDefinition = new Element();
    }
    return this._filterDefinition;
  }

  setFilterDefinitionElement(filterDefinitionElement: Element | undefined): this {
    this._filterDefinition = filterDefinitionElement;
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
}

modelTypeRegistry.register('SubscriptionTopicCanFilterBy', SubscriptionTopicCanFilterBy, false);

/**
 * Properties for describing the shape of notifications generated by this topic
 */
export class SubscriptionTopicNotificationShape extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'resource',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'uri' }],
    },
    {
      elementName: 'include',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'include', typeCode: 'string' }],
    },
    {
      elementName: 'revInclude',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'revInclude', typeCode: 'string' }],
    },
  ];

  /** URL of the Resource that is the focus (main) resource in a notification shape (1..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;

  /** Include directives, rooted in the resource for this shape (0..*) */
  include?: string[];
  /** Id and extensions of the primitive `include`. */
  _include?: (Element | null)[];

  /** Reverse include directives, rooted in the resource for this shape (0..*) */
  revInclude?: string[];
  /** Id and extensions of the primitive `revInclude`. */
  _revInclude?: (Element | null)[];

  override fhirType(): string {
    return 'SubscriptionTopic.notificationShape';
  }

  /** FHIR JSON for this SubscriptionTopicNotificationShape, typed as the plain `SubscriptionTopicNotificationShape` data type. */
  override toJSON(): plainTypes.SubscriptionTopicNotificationShape {
    return this.serialize() as plainTypes.SubscriptionTopicNotificationShape;
  }

  /** URL of the Resource that is the focus (main) resource in a notification shape (1..1) */
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

  /** Include directives, rooted in the resource for this shape (0..*) Never undefined; an empty list is created when absent. */
  getInclude(): string[] {
    if (this.include === undefined) {
      this.include = [];
    }
    return this.include;
  }

  setInclude(include: string[] | undefined): this {
    return this.setFieldValue('include', include);
  }

  hasInclude(): boolean {
    return this.hasFieldValue('include');
  }

  /** Appends one value to `include`. Throws a FhirModelError when it is not a valid FHIR string. */
  addInclude(include: string): this {
    return this.addFieldValue('include', include);
  }

  /** Reverse include directives, rooted in the resource for this shape (0..*) Never undefined; an empty list is created when absent. */
  getRevInclude(): string[] {
    if (this.revInclude === undefined) {
      this.revInclude = [];
    }
    return this.revInclude;
  }

  setRevInclude(revInclude: string[] | undefined): this {
    return this.setFieldValue('revInclude', revInclude);
  }

  hasRevInclude(): boolean {
    return this.hasFieldValue('revInclude');
  }

  /** Appends one value to `revInclude`. Throws a FhirModelError when it is not a valid FHIR string. */
  addRevInclude(revInclude: string): this {
    return this.addFieldValue('revInclude', revInclude);
  }
}

modelTypeRegistry.register(
  'SubscriptionTopicNotificationShape',
  SubscriptionTopicNotificationShape,
  false
);
