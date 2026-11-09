/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Age } from './age';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactDetail } from './contactDetail';
import { DataRequirement } from './dataRequirement';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Expression } from './expression';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';
import { UsageContext } from './usageContext';

/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
export class PlanDefinition extends DomainResource {
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
      elementName: 'subtitle',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subtitle', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
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
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subjectCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'subjectReference', typeCode: 'Reference', targetResourceTypes: ['Group'] },
      ],
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
      elementName: 'usage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'usage', typeCode: 'string' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
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
      elementName: 'topic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'topic', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'author', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'editor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'editor', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'reviewer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reviewer', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'endorser',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endorser', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'library',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'library', typeCode: 'canonical' }],
    },
    {
      elementName: 'goal',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'goal', typeCode: 'PlanDefinitionGoal' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'PlanDefinitionAction' }],
    },
  ];

  readonly resourceType = 'PlanDefinition';

  /** Canonical identifier for this plan definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the plan definition (0..*) */
  identifier?: Identifier[];

  /** Business version of the plan definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this plan definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this plan definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Subordinate title of the plan definition (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;

  /** order-set | clinical-protocol | eca-rule | workflow-definition (0..1) */
  type?: CodeableConcept;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** Type of individual the plan definition is focused on (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the plan definition is focused on (0..1) */
  subjectReference?: Reference;

  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the plan definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for plan definition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this plan definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Describes the clinical usage of the plan (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** When the plan definition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the plan definition was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the plan definition is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** E.g. Education, Treatment, Assessment (0..*) */
  topic?: CodeableConcept[];

  /** Who authored the content (0..*) */
  author?: ContactDetail[];

  /** Who edited the content (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the content (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the content (0..*) */
  endorser?: ContactDetail[];

  /** Additional documentation, citations (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Logic used by the plan definition (0..*) */
  library?: string[];
  /** Id and extensions of the primitive `library`. */
  _library?: (Element | null)[];

  /** What the plan is trying to accomplish (0..*) */
  goal?: PlanDefinitionGoal[];

  /** Action defined by the plan (0..*) */
  action?: PlanDefinitionAction[];

  override fhirType(): string {
    return 'PlanDefinition';
  }

  /** FHIR JSON for this PlanDefinition, typed as the plain `PlanDefinition` data type. */
  override toJSON(): plainTypes.PlanDefinition {
    return this.serialize() as plainTypes.PlanDefinition;
  }

  /** Canonical identifier for this plan definition, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the plan definition (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the plan definition (0..1) */
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

  /** Name for this plan definition (computer friendly) (0..1) */
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

  /** Name for this plan definition (human friendly) (0..1) */
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

  /** Subordinate title of the plan definition (0..1) */
  getSubtitle(): string | undefined {
    return this.subtitle;
  }

  /** Sets `subtitle`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubtitle(subtitle: string | undefined): this {
    return this.setFieldValue('subtitle', subtitle);
  }

  hasSubtitle(): boolean {
    return this.hasFieldValue('subtitle');
  }

  /** The element carrying the id and extensions of `subtitle`. Created when absent. */
  getSubtitleElement(): Element {
    if (this._subtitle === undefined) {
      this._subtitle = new Element();
    }
    return this._subtitle;
  }

  setSubtitleElement(subtitleElement: Element | undefined): this {
    this._subtitle = subtitleElement;
    return this;
  }

  /** order-set | clinical-protocol | eca-rule | workflow-definition (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
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

  /** Type of individual the plan definition is focused on (0..1) Whichever type of `subject[x]` is set. */
  getSubject(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('subject');
  }

  /** True when any type of `subject[x]` is set. */
  hasSubject(): boolean {
    return this.hasChoiceValue('subject');
  }

  getSubjectCodeableConcept(): CodeableConcept | undefined {
    return this.subjectCodeableConcept;
  }

  /** Sets `subject[x]` as CodeableConcept and clears every other type of it. */
  setSubjectCodeableConcept(subjectCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('subjectCodeableConcept', subjectCodeableConcept);
  }

  hasSubjectCodeableConcept(): boolean {
    return this.hasFieldValue('subjectCodeableConcept');
  }

  getSubjectReference(): Reference | undefined {
    return this.subjectReference;
  }

  /** Sets `subject[x]` as Reference and clears every other type of it. */
  setSubjectReference(subjectReference: Reference | undefined): this {
    return this.setFieldValue('subjectReference', subjectReference);
  }

  hasSubjectReference(): boolean {
    return this.hasFieldValue('subjectReference');
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

  /** Natural language description of the plan definition (0..1) */
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

  /** Intended jurisdiction for plan definition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this plan definition is defined (0..1) */
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

  /** Describes the clinical usage of the plan (0..1) */
  getUsage(): string | undefined {
    return this.usage;
  }

  /** Sets `usage`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setUsage(usage: string | undefined): this {
    return this.setFieldValue('usage', usage);
  }

  hasUsage(): boolean {
    return this.hasFieldValue('usage');
  }

  /** The element carrying the id and extensions of `usage`. Created when absent. */
  getUsageElement(): Element {
    if (this._usage === undefined) {
      this._usage = new Element();
    }
    return this._usage;
  }

  setUsageElement(usageElement: Element | undefined): this {
    this._usage = usageElement;
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

  /** When the plan definition was approved by publisher (0..1) */
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

  /** When the plan definition was last reviewed (0..1) */
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

  /** When the plan definition is expected to be used (0..1) Created when absent. */
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

  /** E.g. Education, Treatment, Assessment (0..*) Never undefined; an empty list is created when absent. */
  getTopic(): CodeableConcept[] {
    if (this.topic === undefined) {
      this.topic = [];
    }
    return this.topic;
  }

  setTopic(topic: CodeableConcept[] | undefined): this {
    return this.setFieldValue('topic', topic);
  }

  hasTopic(): boolean {
    return this.hasFieldValue('topic');
  }

  /** Appends a new, empty CodeableConcept to `topic` and returns it so it can be filled in. */
  addTopic(): CodeableConcept;
  /** Appends the given CodeableConcept to `topic` and returns this object for chaining. */
  addTopic(codeableConcept: CodeableConcept): this;
  addTopic(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('topic', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('topic', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `topic`. One is added when the list is empty. */
  getTopicFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getTopic()[0];
    return firstCodeableConcept === undefined ? this.addTopic() : firstCodeableConcept;
  }

  /** Who authored the content (0..*) Never undefined; an empty list is created when absent. */
  getAuthor(): ContactDetail[] {
    if (this.author === undefined) {
      this.author = [];
    }
    return this.author;
  }

  setAuthor(author: ContactDetail[] | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Appends a new, empty ContactDetail to `author` and returns it so it can be filled in. */
  addAuthor(): ContactDetail;
  /** Appends the given ContactDetail to `author` and returns this object for chaining. */
  addAuthor(contactDetail: ContactDetail): this;
  addAuthor(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('author', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('author', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `author`. One is added when the list is empty. */
  getAuthorFirstRep(): ContactDetail {
    const firstContactDetail = this.getAuthor()[0];
    return firstContactDetail === undefined ? this.addAuthor() : firstContactDetail;
  }

  /** Who edited the content (0..*) Never undefined; an empty list is created when absent. */
  getEditor(): ContactDetail[] {
    if (this.editor === undefined) {
      this.editor = [];
    }
    return this.editor;
  }

  setEditor(editor: ContactDetail[] | undefined): this {
    return this.setFieldValue('editor', editor);
  }

  hasEditor(): boolean {
    return this.hasFieldValue('editor');
  }

  /** Appends a new, empty ContactDetail to `editor` and returns it so it can be filled in. */
  addEditor(): ContactDetail;
  /** Appends the given ContactDetail to `editor` and returns this object for chaining. */
  addEditor(contactDetail: ContactDetail): this;
  addEditor(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('editor', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('editor', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `editor`. One is added when the list is empty. */
  getEditorFirstRep(): ContactDetail {
    const firstContactDetail = this.getEditor()[0];
    return firstContactDetail === undefined ? this.addEditor() : firstContactDetail;
  }

  /** Who reviewed the content (0..*) Never undefined; an empty list is created when absent. */
  getReviewer(): ContactDetail[] {
    if (this.reviewer === undefined) {
      this.reviewer = [];
    }
    return this.reviewer;
  }

  setReviewer(reviewer: ContactDetail[] | undefined): this {
    return this.setFieldValue('reviewer', reviewer);
  }

  hasReviewer(): boolean {
    return this.hasFieldValue('reviewer');
  }

  /** Appends a new, empty ContactDetail to `reviewer` and returns it so it can be filled in. */
  addReviewer(): ContactDetail;
  /** Appends the given ContactDetail to `reviewer` and returns this object for chaining. */
  addReviewer(contactDetail: ContactDetail): this;
  addReviewer(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('reviewer', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('reviewer', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `reviewer`. One is added when the list is empty. */
  getReviewerFirstRep(): ContactDetail {
    const firstContactDetail = this.getReviewer()[0];
    return firstContactDetail === undefined ? this.addReviewer() : firstContactDetail;
  }

  /** Who endorsed the content (0..*) Never undefined; an empty list is created when absent. */
  getEndorser(): ContactDetail[] {
    if (this.endorser === undefined) {
      this.endorser = [];
    }
    return this.endorser;
  }

  setEndorser(endorser: ContactDetail[] | undefined): this {
    return this.setFieldValue('endorser', endorser);
  }

  hasEndorser(): boolean {
    return this.hasFieldValue('endorser');
  }

  /** Appends a new, empty ContactDetail to `endorser` and returns it so it can be filled in. */
  addEndorser(): ContactDetail;
  /** Appends the given ContactDetail to `endorser` and returns this object for chaining. */
  addEndorser(contactDetail: ContactDetail): this;
  addEndorser(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('endorser', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('endorser', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `endorser`. One is added when the list is empty. */
  getEndorserFirstRep(): ContactDetail {
    const firstContactDetail = this.getEndorser()[0];
    return firstContactDetail === undefined ? this.addEndorser() : firstContactDetail;
  }

  /** Additional documentation, citations (0..*) Never undefined; an empty list is created when absent. */
  getRelatedArtifact(): RelatedArtifact[] {
    if (this.relatedArtifact === undefined) {
      this.relatedArtifact = [];
    }
    return this.relatedArtifact;
  }

  setRelatedArtifact(relatedArtifact: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('relatedArtifact', relatedArtifact);
  }

  hasRelatedArtifact(): boolean {
    return this.hasFieldValue('relatedArtifact');
  }

  /** Appends a new, empty RelatedArtifact to `relatedArtifact` and returns it so it can be filled in. */
  addRelatedArtifact(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `relatedArtifact` and returns this object for chaining. */
  addRelatedArtifact(relatedArtifact: RelatedArtifact): this;
  addRelatedArtifact(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('relatedArtifact', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('relatedArtifact', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `relatedArtifact`. One is added when the list is empty. */
  getRelatedArtifactFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getRelatedArtifact()[0];
    return firstRelatedArtifact === undefined ? this.addRelatedArtifact() : firstRelatedArtifact;
  }

  /** Logic used by the plan definition (0..*) Never undefined; an empty list is created when absent. */
  getLibrary(): string[] {
    if (this.library === undefined) {
      this.library = [];
    }
    return this.library;
  }

  setLibrary(library: string[] | undefined): this {
    return this.setFieldValue('library', library);
  }

  hasLibrary(): boolean {
    return this.hasFieldValue('library');
  }

  /** Appends one value to `library`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addLibrary(library: string): this {
    return this.addFieldValue('library', library);
  }

  /** What the plan is trying to accomplish (0..*) Never undefined; an empty list is created when absent. */
  getGoal(): PlanDefinitionGoal[] {
    if (this.goal === undefined) {
      this.goal = [];
    }
    return this.goal;
  }

  setGoal(goal: PlanDefinitionGoal[] | undefined): this {
    return this.setFieldValue('goal', goal);
  }

  hasGoal(): boolean {
    return this.hasFieldValue('goal');
  }

  /** Appends a new, empty PlanDefinitionGoal to `goal` and returns it so it can be filled in. */
  addGoal(): PlanDefinitionGoal;
  /** Appends the given PlanDefinitionGoal to `goal` and returns this object for chaining. */
  addGoal(planDefinitionGoal: PlanDefinitionGoal): this;
  addGoal(planDefinitionGoal?: PlanDefinitionGoal): PlanDefinitionGoal | this {
    if (planDefinitionGoal !== undefined) {
      return this.addFieldValue('goal', planDefinitionGoal);
    }
    const createdPlanDefinitionGoal = new PlanDefinitionGoal();
    this.addFieldValue('goal', createdPlanDefinitionGoal);
    return createdPlanDefinitionGoal;
  }

  /** The first PlanDefinitionGoal of `goal`. One is added when the list is empty. */
  getGoalFirstRep(): PlanDefinitionGoal {
    const firstPlanDefinitionGoal = this.getGoal()[0];
    return firstPlanDefinitionGoal === undefined ? this.addGoal() : firstPlanDefinitionGoal;
  }

  /** Action defined by the plan (0..*) Never undefined; an empty list is created when absent. */
  getAction(): PlanDefinitionAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: PlanDefinitionAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty PlanDefinitionAction to `action` and returns it so it can be filled in. */
  addAction(): PlanDefinitionAction;
  /** Appends the given PlanDefinitionAction to `action` and returns this object for chaining. */
  addAction(planDefinitionAction: PlanDefinitionAction): this;
  addAction(planDefinitionAction?: PlanDefinitionAction): PlanDefinitionAction | this {
    if (planDefinitionAction !== undefined) {
      return this.addFieldValue('action', planDefinitionAction);
    }
    const createdPlanDefinitionAction = new PlanDefinitionAction();
    this.addFieldValue('action', createdPlanDefinitionAction);
    return createdPlanDefinitionAction;
  }

  /** The first PlanDefinitionAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): PlanDefinitionAction {
    const firstPlanDefinitionAction = this.getAction()[0];
    return firstPlanDefinitionAction === undefined ? this.addAction() : firstPlanDefinitionAction;
  }
}

modelTypeRegistry.register('PlanDefinition', PlanDefinition, true);

/** True when the value is a PlanDefinition model instance. */
export function isPlanDefinition(candidate: unknown): candidate is PlanDefinition {
  return candidate instanceof PlanDefinition;
}

/**
 * What the plan is trying to accomplish
 */
export class PlanDefinitionGoal extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'start',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'addresses',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'addresses', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'documentation', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'target', typeCode: 'PlanDefinitionGoalTarget' }],
    },
  ];

  /** E.g. Treatment, dietary, behavioral (0..1) */
  category?: CodeableConcept;

  /** Code or text describing the goal (1..1) */
  description?: CodeableConcept;

  /** high-priority | medium-priority | low-priority (0..1) */
  priority?: CodeableConcept;

  /** When goal pursuit begins (0..1) */
  start?: CodeableConcept;

  /** What does the goal address (0..*) */
  addresses?: CodeableConcept[];

  /** Supporting documentation for the goal (0..*) */
  documentation?: RelatedArtifact[];

  /** Target outcome for the goal (0..*) */
  target?: PlanDefinitionGoalTarget[];

  override fhirType(): string {
    return 'PlanDefinition.goal';
  }

  /** FHIR JSON for this PlanDefinitionGoal, typed as the plain `PlanDefinitionGoal` data type. */
  override toJSON(): plainTypes.PlanDefinitionGoal {
    return this.serialize() as plainTypes.PlanDefinitionGoal;
  }

  /** E.g. Treatment, dietary, behavioral (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Code or text describing the goal (1..1) Created when absent. */
  getDescription(): CodeableConcept {
    if (this.description === undefined) {
      this.description = new CodeableConcept();
    }
    return this.description;
  }

  setDescription(description: CodeableConcept | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** high-priority | medium-priority | low-priority (0..1) Created when absent. */
  getPriority(): CodeableConcept {
    if (this.priority === undefined) {
      this.priority = new CodeableConcept();
    }
    return this.priority;
  }

  setPriority(priority: CodeableConcept | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** When goal pursuit begins (0..1) Created when absent. */
  getStart(): CodeableConcept {
    if (this.start === undefined) {
      this.start = new CodeableConcept();
    }
    return this.start;
  }

  setStart(start: CodeableConcept | undefined): this {
    return this.setFieldValue('start', start);
  }

  hasStart(): boolean {
    return this.hasFieldValue('start');
  }

  /** What does the goal address (0..*) Never undefined; an empty list is created when absent. */
  getAddresses(): CodeableConcept[] {
    if (this.addresses === undefined) {
      this.addresses = [];
    }
    return this.addresses;
  }

  setAddresses(addresses: CodeableConcept[] | undefined): this {
    return this.setFieldValue('addresses', addresses);
  }

  hasAddresses(): boolean {
    return this.hasFieldValue('addresses');
  }

  /** Appends a new, empty CodeableConcept to `addresses` and returns it so it can be filled in. */
  addAddresses(): CodeableConcept;
  /** Appends the given CodeableConcept to `addresses` and returns this object for chaining. */
  addAddresses(codeableConcept: CodeableConcept): this;
  addAddresses(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('addresses', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('addresses', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `addresses`. One is added when the list is empty. */
  getAddressesFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAddresses()[0];
    return firstCodeableConcept === undefined ? this.addAddresses() : firstCodeableConcept;
  }

  /** Supporting documentation for the goal (0..*) Never undefined; an empty list is created when absent. */
  getDocumentation(): RelatedArtifact[] {
    if (this.documentation === undefined) {
      this.documentation = [];
    }
    return this.documentation;
  }

  setDocumentation(documentation: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** Appends a new, empty RelatedArtifact to `documentation` and returns it so it can be filled in. */
  addDocumentation(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `documentation` and returns this object for chaining. */
  addDocumentation(relatedArtifact: RelatedArtifact): this;
  addDocumentation(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('documentation', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('documentation', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `documentation`. One is added when the list is empty. */
  getDocumentationFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getDocumentation()[0];
    return firstRelatedArtifact === undefined ? this.addDocumentation() : firstRelatedArtifact;
  }

  /** Target outcome for the goal (0..*) Never undefined; an empty list is created when absent. */
  getTarget(): PlanDefinitionGoalTarget[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: PlanDefinitionGoalTarget[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends a new, empty PlanDefinitionGoalTarget to `target` and returns it so it can be filled in. */
  addTarget(): PlanDefinitionGoalTarget;
  /** Appends the given PlanDefinitionGoalTarget to `target` and returns this object for chaining. */
  addTarget(planDefinitionGoalTarget: PlanDefinitionGoalTarget): this;
  addTarget(planDefinitionGoalTarget?: PlanDefinitionGoalTarget): PlanDefinitionGoalTarget | this {
    if (planDefinitionGoalTarget !== undefined) {
      return this.addFieldValue('target', planDefinitionGoalTarget);
    }
    const createdPlanDefinitionGoalTarget = new PlanDefinitionGoalTarget();
    this.addFieldValue('target', createdPlanDefinitionGoalTarget);
    return createdPlanDefinitionGoalTarget;
  }

  /** The first PlanDefinitionGoalTarget of `target`. One is added when the list is empty. */
  getTargetFirstRep(): PlanDefinitionGoalTarget {
    const firstPlanDefinitionGoalTarget = this.getTarget()[0];
    return firstPlanDefinitionGoalTarget === undefined
      ? this.addTarget()
      : firstPlanDefinitionGoalTarget;
  }
}

modelTypeRegistry.register('PlanDefinitionGoal', PlanDefinitionGoal, false);

/**
 * Target outcome for the goal
 */
export class PlanDefinitionGoalTarget extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'measure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'measure', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'detailQuantity', typeCode: 'Quantity' },
        { jsonKey: 'detailRange', typeCode: 'Range' },
        { jsonKey: 'detailCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'due',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'due', typeCode: 'Duration' }],
    },
  ];

  /** The parameter whose value is to be tracked (0..1) */
  measure?: CodeableConcept;

  /** The target value to be achieved (0..1) */
  detailQuantity?: Quantity;
  /** The target value to be achieved (0..1) */
  detailRange?: Range;
  /** The target value to be achieved (0..1) */
  detailCodeableConcept?: CodeableConcept;

  /** Reach goal within (0..1) */
  due?: Duration;

  override fhirType(): string {
    return 'PlanDefinition.goal.target';
  }

  /** FHIR JSON for this PlanDefinitionGoalTarget, typed as the plain `PlanDefinitionTarget` data type. */
  override toJSON(): plainTypes.PlanDefinitionTarget {
    return this.serialize() as plainTypes.PlanDefinitionTarget;
  }

  /** The parameter whose value is to be tracked (0..1) Created when absent. */
  getMeasure(): CodeableConcept {
    if (this.measure === undefined) {
      this.measure = new CodeableConcept();
    }
    return this.measure;
  }

  setMeasure(measure: CodeableConcept | undefined): this {
    return this.setFieldValue('measure', measure);
  }

  hasMeasure(): boolean {
    return this.hasFieldValue('measure');
  }

  /** The target value to be achieved (0..1) Whichever type of `detail[x]` is set. */
  getDetail(): Quantity | Range | CodeableConcept | undefined {
    return this.getChoiceValue<Quantity | Range | CodeableConcept>('detail');
  }

  /** True when any type of `detail[x]` is set. */
  hasDetail(): boolean {
    return this.hasChoiceValue('detail');
  }

  getDetailQuantity(): Quantity | undefined {
    return this.detailQuantity;
  }

  /** Sets `detail[x]` as Quantity and clears every other type of it. */
  setDetailQuantity(detailQuantity: Quantity | undefined): this {
    return this.setFieldValue('detailQuantity', detailQuantity);
  }

  hasDetailQuantity(): boolean {
    return this.hasFieldValue('detailQuantity');
  }

  getDetailRange(): Range | undefined {
    return this.detailRange;
  }

  /** Sets `detail[x]` as Range and clears every other type of it. */
  setDetailRange(detailRange: Range | undefined): this {
    return this.setFieldValue('detailRange', detailRange);
  }

  hasDetailRange(): boolean {
    return this.hasFieldValue('detailRange');
  }

  getDetailCodeableConcept(): CodeableConcept | undefined {
    return this.detailCodeableConcept;
  }

  /** Sets `detail[x]` as CodeableConcept and clears every other type of it. */
  setDetailCodeableConcept(detailCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('detailCodeableConcept', detailCodeableConcept);
  }

  hasDetailCodeableConcept(): boolean {
    return this.hasFieldValue('detailCodeableConcept');
  }

  /** Reach goal within (0..1) Created when absent. */
  getDue(): Duration {
    if (this.due === undefined) {
      this.due = new Duration();
    }
    return this.due;
  }

  setDue(due: Duration | undefined): this {
    return this.setFieldValue('due', due);
  }

  hasDue(): boolean {
    return this.hasFieldValue('due');
  }
}

modelTypeRegistry.register('PlanDefinitionGoalTarget', PlanDefinitionGoalTarget, false);

/**
 * Action defined by the plan
 */
export class PlanDefinitionAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'prefix',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'prefix', typeCode: 'string' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'textEquivalent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'textEquivalent', typeCode: 'string' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'priority', typeCode: 'code', allowedCodes: valueSetCodes.RequestPriority },
      ],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'documentation', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'goalId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'goalId', typeCode: 'id' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subjectCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'subjectReference', typeCode: 'Reference', targetResourceTypes: ['Group'] },
      ],
    },
    {
      elementName: 'trigger',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'trigger', typeCode: 'TriggerDefinition' }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'condition', typeCode: 'PlanDefinitionActionCondition' }],
    },
    {
      elementName: 'input',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'input', typeCode: 'DataRequirement' }],
    },
    {
      elementName: 'output',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'output', typeCode: 'DataRequirement' }],
    },
    {
      elementName: 'relatedAction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedAction', typeCode: 'PlanDefinitionActionRelatedAction' }],
    },
    {
      elementName: 'timing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timingDateTime', typeCode: 'dateTime' },
        { jsonKey: 'timingAge', typeCode: 'Age' },
        { jsonKey: 'timingPeriod', typeCode: 'Period' },
        { jsonKey: 'timingDuration', typeCode: 'Duration' },
        { jsonKey: 'timingRange', typeCode: 'Range' },
        { jsonKey: 'timingTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'PlanDefinitionActionParticipant' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'groupingBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'groupingBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionGroupingBehavior,
        },
      ],
    },
    {
      elementName: 'selectionBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'selectionBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionSelectionBehavior,
        },
      ],
    },
    {
      elementName: 'requiredBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'requiredBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionRequiredBehavior,
        },
      ],
    },
    {
      elementName: 'precheckBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'precheckBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionPrecheckBehavior,
        },
      ],
    },
    {
      elementName: 'cardinalityBehavior',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'cardinalityBehavior',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionCardinalityBehavior,
        },
      ],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'definitionCanonical', typeCode: 'canonical' },
        { jsonKey: 'definitionUri', typeCode: 'uri' },
      ],
    },
    {
      elementName: 'transform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'transform', typeCode: 'canonical' }],
    },
    {
      elementName: 'dynamicValue',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dynamicValue', typeCode: 'PlanDefinitionActionDynamicValue' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'PlanDefinitionAction' }],
    },
  ];

  /** User-visible prefix for the action (e.g. 1. or A.) (0..1) */
  prefix?: string;
  /** Id and extensions of the primitive `prefix`. */
  _prefix?: Element;

  /** User-visible title (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Brief description of the action (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system (0..1) */
  textEquivalent?: string;
  /** Id and extensions of the primitive `textEquivalent`. */
  _textEquivalent?: Element;

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** Code representing the meaning of the action or sub-actions (0..*) */
  code?: CodeableConcept[];

  /** Why the action should be performed (0..*) */
  reason?: CodeableConcept[];

  /** Supporting documentation for the intended performer of the action (0..*) */
  documentation?: RelatedArtifact[];

  /** What goals this action supports (0..*) */
  goalId?: string[];
  /** Id and extensions of the primitive `goalId`. */
  _goalId?: (Element | null)[];

  /** Type of individual the action is focused on (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the action is focused on (0..1) */
  subjectReference?: Reference;

  /** When the action should be triggered (0..*) */
  trigger?: TriggerDefinition[];

  /** Whether or not the action is applicable (0..*) */
  condition?: PlanDefinitionActionCondition[];

  /** Input data requirements (0..*) */
  input?: DataRequirement[];

  /** Output data definition (0..*) */
  output?: DataRequirement[];

  /** Relationship to another action (0..*) */
  relatedAction?: PlanDefinitionActionRelatedAction[];

  /** When the action should take place (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** When the action should take place (0..1) */
  timingAge?: Age;
  /** When the action should take place (0..1) */
  timingPeriod?: Period;
  /** When the action should take place (0..1) */
  timingDuration?: Duration;
  /** When the action should take place (0..1) */
  timingRange?: Range;
  /** When the action should take place (0..1) */
  timingTiming?: Timing;

  /** Who should participate in the action (0..*) */
  participant?: PlanDefinitionActionParticipant[];

  /** create | update | remove | fire-event (0..1) */
  type?: CodeableConcept;

  /** visual-group | logical-group | sentence-group (0..1) */
  groupingBehavior?: valueSetCodes.ActionGroupingBehavior;
  /** Id and extensions of the primitive `groupingBehavior`. */
  _groupingBehavior?: Element;

  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more (0..1) */
  selectionBehavior?: valueSetCodes.ActionSelectionBehavior;
  /** Id and extensions of the primitive `selectionBehavior`. */
  _selectionBehavior?: Element;

  /** must | could | must-unless-documented (0..1) */
  requiredBehavior?: valueSetCodes.ActionRequiredBehavior;
  /** Id and extensions of the primitive `requiredBehavior`. */
  _requiredBehavior?: Element;

  /** yes | no (0..1) */
  precheckBehavior?: valueSetCodes.ActionPrecheckBehavior;
  /** Id and extensions of the primitive `precheckBehavior`. */
  _precheckBehavior?: Element;

  /** single | multiple (0..1) */
  cardinalityBehavior?: valueSetCodes.ActionCardinalityBehavior;
  /** Id and extensions of the primitive `cardinalityBehavior`. */
  _cardinalityBehavior?: Element;

  /** Description of the activity to be performed (0..1) */
  definitionCanonical?: string;
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: Element;
  /** Description of the activity to be performed (0..1) */
  definitionUri?: string;
  /** Id and extensions of the primitive `definitionUri`. */
  _definitionUri?: Element;

  /** Transform to apply the template (0..1) */
  transform?: string;
  /** Id and extensions of the primitive `transform`. */
  _transform?: Element;

  /** Dynamic aspects of the definition (0..*) */
  dynamicValue?: PlanDefinitionActionDynamicValue[];

  /** A sub-action (0..*) */
  action?: PlanDefinitionAction[];

  override fhirType(): string {
    return 'PlanDefinition.action';
  }

  /** FHIR JSON for this PlanDefinitionAction, typed as the plain `PlanDefinitionAction` data type. */
  override toJSON(): plainTypes.PlanDefinitionAction {
    return this.serialize() as plainTypes.PlanDefinitionAction;
  }

  /** User-visible prefix for the action (e.g. 1. or A.) (0..1) */
  getPrefix(): string | undefined {
    return this.prefix;
  }

  /** Sets `prefix`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPrefix(prefix: string | undefined): this {
    return this.setFieldValue('prefix', prefix);
  }

  hasPrefix(): boolean {
    return this.hasFieldValue('prefix');
  }

  /** The element carrying the id and extensions of `prefix`. Created when absent. */
  getPrefixElement(): Element {
    if (this._prefix === undefined) {
      this._prefix = new Element();
    }
    return this._prefix;
  }

  setPrefixElement(prefixElement: Element | undefined): this {
    this._prefix = prefixElement;
    return this;
  }

  /** User-visible title (0..1) */
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

  /** Brief description of the action (0..1) */
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

  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system (0..1) */
  getTextEquivalent(): string | undefined {
    return this.textEquivalent;
  }

  /** Sets `textEquivalent`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTextEquivalent(textEquivalent: string | undefined): this {
    return this.setFieldValue('textEquivalent', textEquivalent);
  }

  hasTextEquivalent(): boolean {
    return this.hasFieldValue('textEquivalent');
  }

  /** The element carrying the id and extensions of `textEquivalent`. Created when absent. */
  getTextEquivalentElement(): Element {
    if (this._textEquivalent === undefined) {
      this._textEquivalent = new Element();
    }
    return this._textEquivalent;
  }

  setTextEquivalentElement(textEquivalentElement: Element | undefined): this {
    this._textEquivalent = textEquivalentElement;
    return this;
  }

  /** routine | urgent | asap | stat (0..1) */
  getPriority(): valueSetCodes.RequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.RequestPriority | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The element carrying the id and extensions of `priority`. Created when absent. */
  getPriorityElement(): Element {
    if (this._priority === undefined) {
      this._priority = new Element();
    }
    return this._priority;
  }

  setPriorityElement(priorityElement: Element | undefined): this {
    this._priority = priorityElement;
    return this;
  }

  /** Code representing the meaning of the action or sub-actions (0..*) Never undefined; an empty list is created when absent. */
  getCode(): CodeableConcept[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: CodeableConcept[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty CodeableConcept to `code` and returns it so it can be filled in. */
  addCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `code` and returns this object for chaining. */
  addCode(codeableConcept: CodeableConcept): this;
  addCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('code', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('code', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `code`. One is added when the list is empty. */
  getCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCode()[0];
    return firstCodeableConcept === undefined ? this.addCode() : firstCodeableConcept;
  }

  /** Why the action should be performed (0..*) Never undefined; an empty list is created when absent. */
  getReason(): CodeableConcept[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty CodeableConcept to `reason` and returns it so it can be filled in. */
  addReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `reason` and returns this object for chaining. */
  addReason(codeableConcept: CodeableConcept): this;
  addReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReason()[0];
    return firstCodeableConcept === undefined ? this.addReason() : firstCodeableConcept;
  }

  /** Supporting documentation for the intended performer of the action (0..*) Never undefined; an empty list is created when absent. */
  getDocumentation(): RelatedArtifact[] {
    if (this.documentation === undefined) {
      this.documentation = [];
    }
    return this.documentation;
  }

  setDocumentation(documentation: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** Appends a new, empty RelatedArtifact to `documentation` and returns it so it can be filled in. */
  addDocumentation(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `documentation` and returns this object for chaining. */
  addDocumentation(relatedArtifact: RelatedArtifact): this;
  addDocumentation(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('documentation', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('documentation', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `documentation`. One is added when the list is empty. */
  getDocumentationFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getDocumentation()[0];
    return firstRelatedArtifact === undefined ? this.addDocumentation() : firstRelatedArtifact;
  }

  /** What goals this action supports (0..*) Never undefined; an empty list is created when absent. */
  getGoalId(): string[] {
    if (this.goalId === undefined) {
      this.goalId = [];
    }
    return this.goalId;
  }

  setGoalId(goalId: string[] | undefined): this {
    return this.setFieldValue('goalId', goalId);
  }

  hasGoalId(): boolean {
    return this.hasFieldValue('goalId');
  }

  /** Appends one value to `goalId`. Throws a FhirModelError when it is not a valid FHIR id. */
  addGoalId(goalId: string): this {
    return this.addFieldValue('goalId', goalId);
  }

  /** Type of individual the action is focused on (0..1) Whichever type of `subject[x]` is set. */
  getSubject(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('subject');
  }

  /** True when any type of `subject[x]` is set. */
  hasSubject(): boolean {
    return this.hasChoiceValue('subject');
  }

  getSubjectCodeableConcept(): CodeableConcept | undefined {
    return this.subjectCodeableConcept;
  }

  /** Sets `subject[x]` as CodeableConcept and clears every other type of it. */
  setSubjectCodeableConcept(subjectCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('subjectCodeableConcept', subjectCodeableConcept);
  }

  hasSubjectCodeableConcept(): boolean {
    return this.hasFieldValue('subjectCodeableConcept');
  }

  getSubjectReference(): Reference | undefined {
    return this.subjectReference;
  }

  /** Sets `subject[x]` as Reference and clears every other type of it. */
  setSubjectReference(subjectReference: Reference | undefined): this {
    return this.setFieldValue('subjectReference', subjectReference);
  }

  hasSubjectReference(): boolean {
    return this.hasFieldValue('subjectReference');
  }

  /** When the action should be triggered (0..*) Never undefined; an empty list is created when absent. */
  getTrigger(): TriggerDefinition[] {
    if (this.trigger === undefined) {
      this.trigger = [];
    }
    return this.trigger;
  }

  setTrigger(trigger: TriggerDefinition[] | undefined): this {
    return this.setFieldValue('trigger', trigger);
  }

  hasTrigger(): boolean {
    return this.hasFieldValue('trigger');
  }

  /** Appends a new, empty TriggerDefinition to `trigger` and returns it so it can be filled in. */
  addTrigger(): TriggerDefinition;
  /** Appends the given TriggerDefinition to `trigger` and returns this object for chaining. */
  addTrigger(triggerDefinition: TriggerDefinition): this;
  addTrigger(triggerDefinition?: TriggerDefinition): TriggerDefinition | this {
    if (triggerDefinition !== undefined) {
      return this.addFieldValue('trigger', triggerDefinition);
    }
    const createdTriggerDefinition = new TriggerDefinition();
    this.addFieldValue('trigger', createdTriggerDefinition);
    return createdTriggerDefinition;
  }

  /** The first TriggerDefinition of `trigger`. One is added when the list is empty. */
  getTriggerFirstRep(): TriggerDefinition {
    const firstTriggerDefinition = this.getTrigger()[0];
    return firstTriggerDefinition === undefined ? this.addTrigger() : firstTriggerDefinition;
  }

  /** Whether or not the action is applicable (0..*) Never undefined; an empty list is created when absent. */
  getCondition(): PlanDefinitionActionCondition[] {
    if (this.condition === undefined) {
      this.condition = [];
    }
    return this.condition;
  }

  setCondition(condition: PlanDefinitionActionCondition[] | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Appends a new, empty PlanDefinitionActionCondition to `condition` and returns it so it can be filled in. */
  addCondition(): PlanDefinitionActionCondition;
  /** Appends the given PlanDefinitionActionCondition to `condition` and returns this object for chaining. */
  addCondition(planDefinitionActionCondition: PlanDefinitionActionCondition): this;
  addCondition(
    planDefinitionActionCondition?: PlanDefinitionActionCondition
  ): PlanDefinitionActionCondition | this {
    if (planDefinitionActionCondition !== undefined) {
      return this.addFieldValue('condition', planDefinitionActionCondition);
    }
    const createdPlanDefinitionActionCondition = new PlanDefinitionActionCondition();
    this.addFieldValue('condition', createdPlanDefinitionActionCondition);
    return createdPlanDefinitionActionCondition;
  }

  /** The first PlanDefinitionActionCondition of `condition`. One is added when the list is empty. */
  getConditionFirstRep(): PlanDefinitionActionCondition {
    const firstPlanDefinitionActionCondition = this.getCondition()[0];
    return firstPlanDefinitionActionCondition === undefined
      ? this.addCondition()
      : firstPlanDefinitionActionCondition;
  }

  /** Input data requirements (0..*) Never undefined; an empty list is created when absent. */
  getInput(): DataRequirement[] {
    if (this.input === undefined) {
      this.input = [];
    }
    return this.input;
  }

  setInput(input: DataRequirement[] | undefined): this {
    return this.setFieldValue('input', input);
  }

  hasInput(): boolean {
    return this.hasFieldValue('input');
  }

  /** Appends a new, empty DataRequirement to `input` and returns it so it can be filled in. */
  addInput(): DataRequirement;
  /** Appends the given DataRequirement to `input` and returns this object for chaining. */
  addInput(dataRequirement: DataRequirement): this;
  addInput(dataRequirement?: DataRequirement): DataRequirement | this {
    if (dataRequirement !== undefined) {
      return this.addFieldValue('input', dataRequirement);
    }
    const createdDataRequirement = new DataRequirement();
    this.addFieldValue('input', createdDataRequirement);
    return createdDataRequirement;
  }

  /** The first DataRequirement of `input`. One is added when the list is empty. */
  getInputFirstRep(): DataRequirement {
    const firstDataRequirement = this.getInput()[0];
    return firstDataRequirement === undefined ? this.addInput() : firstDataRequirement;
  }

  /** Output data definition (0..*) Never undefined; an empty list is created when absent. */
  getOutput(): DataRequirement[] {
    if (this.output === undefined) {
      this.output = [];
    }
    return this.output;
  }

  setOutput(output: DataRequirement[] | undefined): this {
    return this.setFieldValue('output', output);
  }

  hasOutput(): boolean {
    return this.hasFieldValue('output');
  }

  /** Appends a new, empty DataRequirement to `output` and returns it so it can be filled in. */
  addOutput(): DataRequirement;
  /** Appends the given DataRequirement to `output` and returns this object for chaining. */
  addOutput(dataRequirement: DataRequirement): this;
  addOutput(dataRequirement?: DataRequirement): DataRequirement | this {
    if (dataRequirement !== undefined) {
      return this.addFieldValue('output', dataRequirement);
    }
    const createdDataRequirement = new DataRequirement();
    this.addFieldValue('output', createdDataRequirement);
    return createdDataRequirement;
  }

  /** The first DataRequirement of `output`. One is added when the list is empty. */
  getOutputFirstRep(): DataRequirement {
    const firstDataRequirement = this.getOutput()[0];
    return firstDataRequirement === undefined ? this.addOutput() : firstDataRequirement;
  }

  /** Relationship to another action (0..*) Never undefined; an empty list is created when absent. */
  getRelatedAction(): PlanDefinitionActionRelatedAction[] {
    if (this.relatedAction === undefined) {
      this.relatedAction = [];
    }
    return this.relatedAction;
  }

  setRelatedAction(relatedAction: PlanDefinitionActionRelatedAction[] | undefined): this {
    return this.setFieldValue('relatedAction', relatedAction);
  }

  hasRelatedAction(): boolean {
    return this.hasFieldValue('relatedAction');
  }

  /** Appends a new, empty PlanDefinitionActionRelatedAction to `relatedAction` and returns it so it can be filled in. */
  addRelatedAction(): PlanDefinitionActionRelatedAction;
  /** Appends the given PlanDefinitionActionRelatedAction to `relatedAction` and returns this object for chaining. */
  addRelatedAction(planDefinitionActionRelatedAction: PlanDefinitionActionRelatedAction): this;
  addRelatedAction(
    planDefinitionActionRelatedAction?: PlanDefinitionActionRelatedAction
  ): PlanDefinitionActionRelatedAction | this {
    if (planDefinitionActionRelatedAction !== undefined) {
      return this.addFieldValue('relatedAction', planDefinitionActionRelatedAction);
    }
    const createdPlanDefinitionActionRelatedAction = new PlanDefinitionActionRelatedAction();
    this.addFieldValue('relatedAction', createdPlanDefinitionActionRelatedAction);
    return createdPlanDefinitionActionRelatedAction;
  }

  /** The first PlanDefinitionActionRelatedAction of `relatedAction`. One is added when the list is empty. */
  getRelatedActionFirstRep(): PlanDefinitionActionRelatedAction {
    const firstPlanDefinitionActionRelatedAction = this.getRelatedAction()[0];
    return firstPlanDefinitionActionRelatedAction === undefined
      ? this.addRelatedAction()
      : firstPlanDefinitionActionRelatedAction;
  }

  /** When the action should take place (0..1) Whichever type of `timing[x]` is set. */
  getTiming(): string | Age | Period | Duration | Range | Timing | undefined {
    return this.getChoiceValue<string | Age | Period | Duration | Range | Timing>('timing');
  }

  /** True when any type of `timing[x]` is set. */
  hasTiming(): boolean {
    return this.hasChoiceValue('timing');
  }

  getTimingDateTime(): string | undefined {
    return this.timingDateTime;
  }

  /** Sets `timing[x]` as dateTime and clears every other type of it. */
  setTimingDateTime(timingDateTime: string | undefined): this {
    return this.setFieldValue('timingDateTime', timingDateTime);
  }

  hasTimingDateTime(): boolean {
    return this.hasFieldValue('timingDateTime');
  }

  getTimingAge(): Age | undefined {
    return this.timingAge;
  }

  /** Sets `timing[x]` as Age and clears every other type of it. */
  setTimingAge(timingAge: Age | undefined): this {
    return this.setFieldValue('timingAge', timingAge);
  }

  hasTimingAge(): boolean {
    return this.hasFieldValue('timingAge');
  }

  getTimingPeriod(): Period | undefined {
    return this.timingPeriod;
  }

  /** Sets `timing[x]` as Period and clears every other type of it. */
  setTimingPeriod(timingPeriod: Period | undefined): this {
    return this.setFieldValue('timingPeriod', timingPeriod);
  }

  hasTimingPeriod(): boolean {
    return this.hasFieldValue('timingPeriod');
  }

  getTimingDuration(): Duration | undefined {
    return this.timingDuration;
  }

  /** Sets `timing[x]` as Duration and clears every other type of it. */
  setTimingDuration(timingDuration: Duration | undefined): this {
    return this.setFieldValue('timingDuration', timingDuration);
  }

  hasTimingDuration(): boolean {
    return this.hasFieldValue('timingDuration');
  }

  getTimingRange(): Range | undefined {
    return this.timingRange;
  }

  /** Sets `timing[x]` as Range and clears every other type of it. */
  setTimingRange(timingRange: Range | undefined): this {
    return this.setFieldValue('timingRange', timingRange);
  }

  hasTimingRange(): boolean {
    return this.hasFieldValue('timingRange');
  }

  getTimingTiming(): Timing | undefined {
    return this.timingTiming;
  }

  /** Sets `timing[x]` as Timing and clears every other type of it. */
  setTimingTiming(timingTiming: Timing | undefined): this {
    return this.setFieldValue('timingTiming', timingTiming);
  }

  hasTimingTiming(): boolean {
    return this.hasFieldValue('timingTiming');
  }

  /** Who should participate in the action (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): PlanDefinitionActionParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: PlanDefinitionActionParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty PlanDefinitionActionParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): PlanDefinitionActionParticipant;
  /** Appends the given PlanDefinitionActionParticipant to `participant` and returns this object for chaining. */
  addParticipant(planDefinitionActionParticipant: PlanDefinitionActionParticipant): this;
  addParticipant(
    planDefinitionActionParticipant?: PlanDefinitionActionParticipant
  ): PlanDefinitionActionParticipant | this {
    if (planDefinitionActionParticipant !== undefined) {
      return this.addFieldValue('participant', planDefinitionActionParticipant);
    }
    const createdPlanDefinitionActionParticipant = new PlanDefinitionActionParticipant();
    this.addFieldValue('participant', createdPlanDefinitionActionParticipant);
    return createdPlanDefinitionActionParticipant;
  }

  /** The first PlanDefinitionActionParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): PlanDefinitionActionParticipant {
    const firstPlanDefinitionActionParticipant = this.getParticipant()[0];
    return firstPlanDefinitionActionParticipant === undefined
      ? this.addParticipant()
      : firstPlanDefinitionActionParticipant;
  }

  /** create | update | remove | fire-event (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** visual-group | logical-group | sentence-group (0..1) */
  getGroupingBehavior(): valueSetCodes.ActionGroupingBehavior | undefined {
    return this.groupingBehavior;
  }

  /** Sets `groupingBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setGroupingBehavior(groupingBehavior: valueSetCodes.ActionGroupingBehavior | undefined): this {
    return this.setFieldValue('groupingBehavior', groupingBehavior);
  }

  hasGroupingBehavior(): boolean {
    return this.hasFieldValue('groupingBehavior');
  }

  /** The element carrying the id and extensions of `groupingBehavior`. Created when absent. */
  getGroupingBehaviorElement(): Element {
    if (this._groupingBehavior === undefined) {
      this._groupingBehavior = new Element();
    }
    return this._groupingBehavior;
  }

  setGroupingBehaviorElement(groupingBehaviorElement: Element | undefined): this {
    this._groupingBehavior = groupingBehaviorElement;
    return this;
  }

  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more (0..1) */
  getSelectionBehavior(): valueSetCodes.ActionSelectionBehavior | undefined {
    return this.selectionBehavior;
  }

  /** Sets `selectionBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setSelectionBehavior(selectionBehavior: valueSetCodes.ActionSelectionBehavior | undefined): this {
    return this.setFieldValue('selectionBehavior', selectionBehavior);
  }

  hasSelectionBehavior(): boolean {
    return this.hasFieldValue('selectionBehavior');
  }

  /** The element carrying the id and extensions of `selectionBehavior`. Created when absent. */
  getSelectionBehaviorElement(): Element {
    if (this._selectionBehavior === undefined) {
      this._selectionBehavior = new Element();
    }
    return this._selectionBehavior;
  }

  setSelectionBehaviorElement(selectionBehaviorElement: Element | undefined): this {
    this._selectionBehavior = selectionBehaviorElement;
    return this;
  }

  /** must | could | must-unless-documented (0..1) */
  getRequiredBehavior(): valueSetCodes.ActionRequiredBehavior | undefined {
    return this.requiredBehavior;
  }

  /** Sets `requiredBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRequiredBehavior(requiredBehavior: valueSetCodes.ActionRequiredBehavior | undefined): this {
    return this.setFieldValue('requiredBehavior', requiredBehavior);
  }

  hasRequiredBehavior(): boolean {
    return this.hasFieldValue('requiredBehavior');
  }

  /** The element carrying the id and extensions of `requiredBehavior`. Created when absent. */
  getRequiredBehaviorElement(): Element {
    if (this._requiredBehavior === undefined) {
      this._requiredBehavior = new Element();
    }
    return this._requiredBehavior;
  }

  setRequiredBehaviorElement(requiredBehaviorElement: Element | undefined): this {
    this._requiredBehavior = requiredBehaviorElement;
    return this;
  }

  /** yes | no (0..1) */
  getPrecheckBehavior(): valueSetCodes.ActionPrecheckBehavior | undefined {
    return this.precheckBehavior;
  }

  /** Sets `precheckBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPrecheckBehavior(precheckBehavior: valueSetCodes.ActionPrecheckBehavior | undefined): this {
    return this.setFieldValue('precheckBehavior', precheckBehavior);
  }

  hasPrecheckBehavior(): boolean {
    return this.hasFieldValue('precheckBehavior');
  }

  /** The element carrying the id and extensions of `precheckBehavior`. Created when absent. */
  getPrecheckBehaviorElement(): Element {
    if (this._precheckBehavior === undefined) {
      this._precheckBehavior = new Element();
    }
    return this._precheckBehavior;
  }

  setPrecheckBehaviorElement(precheckBehaviorElement: Element | undefined): this {
    this._precheckBehavior = precheckBehaviorElement;
    return this;
  }

  /** single | multiple (0..1) */
  getCardinalityBehavior(): valueSetCodes.ActionCardinalityBehavior | undefined {
    return this.cardinalityBehavior;
  }

  /** Sets `cardinalityBehavior`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCardinalityBehavior(
    cardinalityBehavior: valueSetCodes.ActionCardinalityBehavior | undefined
  ): this {
    return this.setFieldValue('cardinalityBehavior', cardinalityBehavior);
  }

  hasCardinalityBehavior(): boolean {
    return this.hasFieldValue('cardinalityBehavior');
  }

  /** The element carrying the id and extensions of `cardinalityBehavior`. Created when absent. */
  getCardinalityBehaviorElement(): Element {
    if (this._cardinalityBehavior === undefined) {
      this._cardinalityBehavior = new Element();
    }
    return this._cardinalityBehavior;
  }

  setCardinalityBehaviorElement(cardinalityBehaviorElement: Element | undefined): this {
    this._cardinalityBehavior = cardinalityBehaviorElement;
    return this;
  }

  /** Description of the activity to be performed (0..1) Whichever type of `definition[x]` is set. */
  getDefinition(): string | undefined {
    return this.getChoiceValue<string>('definition');
  }

  /** True when any type of `definition[x]` is set. */
  hasDefinition(): boolean {
    return this.hasChoiceValue('definition');
  }

  getDefinitionCanonical(): string | undefined {
    return this.definitionCanonical;
  }

  /** Sets `definition[x]` as canonical and clears every other type of it. */
  setDefinitionCanonical(definitionCanonical: string | undefined): this {
    return this.setFieldValue('definitionCanonical', definitionCanonical);
  }

  hasDefinitionCanonical(): boolean {
    return this.hasFieldValue('definitionCanonical');
  }

  getDefinitionUri(): string | undefined {
    return this.definitionUri;
  }

  /** Sets `definition[x]` as uri and clears every other type of it. */
  setDefinitionUri(definitionUri: string | undefined): this {
    return this.setFieldValue('definitionUri', definitionUri);
  }

  hasDefinitionUri(): boolean {
    return this.hasFieldValue('definitionUri');
  }

  /** Transform to apply the template (0..1) */
  getTransform(): string | undefined {
    return this.transform;
  }

  /** Sets `transform`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setTransform(transform: string | undefined): this {
    return this.setFieldValue('transform', transform);
  }

  hasTransform(): boolean {
    return this.hasFieldValue('transform');
  }

  /** The element carrying the id and extensions of `transform`. Created when absent. */
  getTransformElement(): Element {
    if (this._transform === undefined) {
      this._transform = new Element();
    }
    return this._transform;
  }

  setTransformElement(transformElement: Element | undefined): this {
    this._transform = transformElement;
    return this;
  }

  /** Dynamic aspects of the definition (0..*) Never undefined; an empty list is created when absent. */
  getDynamicValue(): PlanDefinitionActionDynamicValue[] {
    if (this.dynamicValue === undefined) {
      this.dynamicValue = [];
    }
    return this.dynamicValue;
  }

  setDynamicValue(dynamicValue: PlanDefinitionActionDynamicValue[] | undefined): this {
    return this.setFieldValue('dynamicValue', dynamicValue);
  }

  hasDynamicValue(): boolean {
    return this.hasFieldValue('dynamicValue');
  }

  /** Appends a new, empty PlanDefinitionActionDynamicValue to `dynamicValue` and returns it so it can be filled in. */
  addDynamicValue(): PlanDefinitionActionDynamicValue;
  /** Appends the given PlanDefinitionActionDynamicValue to `dynamicValue` and returns this object for chaining. */
  addDynamicValue(planDefinitionActionDynamicValue: PlanDefinitionActionDynamicValue): this;
  addDynamicValue(
    planDefinitionActionDynamicValue?: PlanDefinitionActionDynamicValue
  ): PlanDefinitionActionDynamicValue | this {
    if (planDefinitionActionDynamicValue !== undefined) {
      return this.addFieldValue('dynamicValue', planDefinitionActionDynamicValue);
    }
    const createdPlanDefinitionActionDynamicValue = new PlanDefinitionActionDynamicValue();
    this.addFieldValue('dynamicValue', createdPlanDefinitionActionDynamicValue);
    return createdPlanDefinitionActionDynamicValue;
  }

  /** The first PlanDefinitionActionDynamicValue of `dynamicValue`. One is added when the list is empty. */
  getDynamicValueFirstRep(): PlanDefinitionActionDynamicValue {
    const firstPlanDefinitionActionDynamicValue = this.getDynamicValue()[0];
    return firstPlanDefinitionActionDynamicValue === undefined
      ? this.addDynamicValue()
      : firstPlanDefinitionActionDynamicValue;
  }

  /** A sub-action (0..*) Never undefined; an empty list is created when absent. */
  getAction(): PlanDefinitionAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: PlanDefinitionAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty PlanDefinitionAction to `action` and returns it so it can be filled in. */
  addAction(): PlanDefinitionAction;
  /** Appends the given PlanDefinitionAction to `action` and returns this object for chaining. */
  addAction(planDefinitionAction: PlanDefinitionAction): this;
  addAction(planDefinitionAction?: PlanDefinitionAction): PlanDefinitionAction | this {
    if (planDefinitionAction !== undefined) {
      return this.addFieldValue('action', planDefinitionAction);
    }
    const createdPlanDefinitionAction = new PlanDefinitionAction();
    this.addFieldValue('action', createdPlanDefinitionAction);
    return createdPlanDefinitionAction;
  }

  /** The first PlanDefinitionAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): PlanDefinitionAction {
    const firstPlanDefinitionAction = this.getAction()[0];
    return firstPlanDefinitionAction === undefined ? this.addAction() : firstPlanDefinitionAction;
  }
}

modelTypeRegistry.register('PlanDefinitionAction', PlanDefinitionAction, false);

/**
 * Whether or not the action is applicable
 */
export class PlanDefinitionActionCondition extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'kind',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.ActionConditionKind },
      ],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'Expression' }],
    },
  ];

  /** applicability | start | stop (1..1) */
  kind?: valueSetCodes.ActionConditionKind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Boolean-valued expression (0..1) */
  expression?: Expression;

  override fhirType(): string {
    return 'PlanDefinition.action.condition';
  }

  /** FHIR JSON for this PlanDefinitionActionCondition, typed as the plain `PlanDefinitionCondition` data type. */
  override toJSON(): plainTypes.PlanDefinitionCondition {
    return this.serialize() as plainTypes.PlanDefinitionCondition;
  }

  /** applicability | start | stop (1..1) */
  getKind(): valueSetCodes.ActionConditionKind | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.ActionConditionKind | undefined): this {
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

  /** Boolean-valued expression (0..1) Created when absent. */
  getExpression(): Expression {
    if (this.expression === undefined) {
      this.expression = new Expression();
    }
    return this.expression;
  }

  setExpression(expression: Expression | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }
}

modelTypeRegistry.register('PlanDefinitionActionCondition', PlanDefinitionActionCondition, false);

/**
 * Relationship to another action
 */
export class PlanDefinitionActionRelatedAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'actionId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actionId', typeCode: 'id' }],
    },
    {
      elementName: 'relationship',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'relationship',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ActionRelationshipType,
        },
      ],
    },
    {
      elementName: 'offset',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'offsetDuration', typeCode: 'Duration' },
        { jsonKey: 'offsetRange', typeCode: 'Range' },
      ],
    },
  ];

  /** What action is this related to (1..1) */
  actionId?: string;
  /** Id and extensions of the primitive `actionId`. */
  _actionId?: Element;

  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end (1..1) */
  relationship?: valueSetCodes.ActionRelationshipType;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;

  /** Time offset for the relationship (0..1) */
  offsetDuration?: Duration;
  /** Time offset for the relationship (0..1) */
  offsetRange?: Range;

  override fhirType(): string {
    return 'PlanDefinition.action.relatedAction';
  }

  /** FHIR JSON for this PlanDefinitionActionRelatedAction, typed as the plain `PlanDefinitionRelatedAction` data type. */
  override toJSON(): plainTypes.PlanDefinitionRelatedAction {
    return this.serialize() as plainTypes.PlanDefinitionRelatedAction;
  }

  /** What action is this related to (1..1) */
  getActionId(): string | undefined {
    return this.actionId;
  }

  /** Sets `actionId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setActionId(actionId: string | undefined): this {
    return this.setFieldValue('actionId', actionId);
  }

  hasActionId(): boolean {
    return this.hasFieldValue('actionId');
  }

  /** The element carrying the id and extensions of `actionId`. Created when absent. */
  getActionIdElement(): Element {
    if (this._actionId === undefined) {
      this._actionId = new Element();
    }
    return this._actionId;
  }

  setActionIdElement(actionIdElement: Element | undefined): this {
    this._actionId = actionIdElement;
    return this;
  }

  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end (1..1) */
  getRelationship(): valueSetCodes.ActionRelationshipType | undefined {
    return this.relationship;
  }

  /** Sets `relationship`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRelationship(relationship: valueSetCodes.ActionRelationshipType | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** The element carrying the id and extensions of `relationship`. Created when absent. */
  getRelationshipElement(): Element {
    if (this._relationship === undefined) {
      this._relationship = new Element();
    }
    return this._relationship;
  }

  setRelationshipElement(relationshipElement: Element | undefined): this {
    this._relationship = relationshipElement;
    return this;
  }

  /** Time offset for the relationship (0..1) Whichever type of `offset[x]` is set. */
  getOffset(): Duration | Range | undefined {
    return this.getChoiceValue<Duration | Range>('offset');
  }

  /** True when any type of `offset[x]` is set. */
  hasOffset(): boolean {
    return this.hasChoiceValue('offset');
  }

  getOffsetDuration(): Duration | undefined {
    return this.offsetDuration;
  }

  /** Sets `offset[x]` as Duration and clears every other type of it. */
  setOffsetDuration(offsetDuration: Duration | undefined): this {
    return this.setFieldValue('offsetDuration', offsetDuration);
  }

  hasOffsetDuration(): boolean {
    return this.hasFieldValue('offsetDuration');
  }

  getOffsetRange(): Range | undefined {
    return this.offsetRange;
  }

  /** Sets `offset[x]` as Range and clears every other type of it. */
  setOffsetRange(offsetRange: Range | undefined): this {
    return this.setFieldValue('offsetRange', offsetRange);
  }

  hasOffsetRange(): boolean {
    return this.hasFieldValue('offsetRange');
  }
}

modelTypeRegistry.register(
  'PlanDefinitionActionRelatedAction',
  PlanDefinitionActionRelatedAction,
  false
);

/**
 * Who should participate in the action
 */
export class PlanDefinitionActionParticipant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ActionParticipantType },
      ],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
  ];

  /** patient | practitioner | related-person | device (1..1) */
  type?: valueSetCodes.ActionParticipantType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** E.g. Nurse, Surgeon, Parent (0..1) */
  role?: CodeableConcept;

  override fhirType(): string {
    return 'PlanDefinition.action.participant';
  }

  /** FHIR JSON for this PlanDefinitionActionParticipant, typed as the plain `PlanDefinitionParticipant` data type. */
  override toJSON(): plainTypes.PlanDefinitionParticipant {
    return this.serialize() as plainTypes.PlanDefinitionParticipant;
  }

  /** patient | practitioner | related-person | device (1..1) */
  getType(): valueSetCodes.ActionParticipantType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ActionParticipantType | undefined): this {
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

  /** E.g. Nurse, Surgeon, Parent (0..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }
}

modelTypeRegistry.register(
  'PlanDefinitionActionParticipant',
  PlanDefinitionActionParticipant,
  false
);

/**
 * Dynamic aspects of the definition
 */
export class PlanDefinitionActionDynamicValue extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'path',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'Expression' }],
    },
  ];

  /** The path to the element to be set dynamically (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** An expression that provides the dynamic value for the customization (0..1) */
  expression?: Expression;

  override fhirType(): string {
    return 'PlanDefinition.action.dynamicValue';
  }

  /** FHIR JSON for this PlanDefinitionActionDynamicValue, typed as the plain `PlanDefinitionDynamicValue` data type. */
  override toJSON(): plainTypes.PlanDefinitionDynamicValue {
    return this.serialize() as plainTypes.PlanDefinitionDynamicValue;
  }

  /** The path to the element to be set dynamically (0..1) */
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

  /** An expression that provides the dynamic value for the customization (0..1) Created when absent. */
  getExpression(): Expression {
    if (this.expression === undefined) {
      this.expression = new Expression();
    }
    return this.expression;
  }

  setExpression(expression: Expression | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }
}

modelTypeRegistry.register(
  'PlanDefinitionActionDynamicValue',
  PlanDefinitionActionDynamicValue,
  false
);
