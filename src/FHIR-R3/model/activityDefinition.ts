/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactDetail } from './contactDetail';
import { Contributor } from './contributor';
import { DomainResource } from './domainResource';
import { Dosage } from './dosage';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { Timing } from './timing';
import { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for ActivityDefinition Resource
 */
export class ActivityDefinition extends DomainResource {
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
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
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
      elementName: 'topic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'topic', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contributor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contributor', typeCode: 'Contributor' }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
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
      types: [{ jsonKey: 'library', typeCode: 'Reference', targetResourceTypes: ['Library'] }],
    },
    {
      elementName: 'kind',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.ResourceType }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'timing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timingTiming', typeCode: 'Timing' },
        { jsonKey: 'timingDateTime', typeCode: 'dateTime' },
        { jsonKey: 'timingPeriod', typeCode: 'Period' },
        { jsonKey: 'timingRange', typeCode: 'Range' },
      ],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'ActivityDefinitionParticipant' }],
    },
    {
      elementName: 'product',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'productReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Medication', 'Substance'],
        },
        { jsonKey: 'productCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'dosage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dosage', typeCode: 'Dosage' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'transform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'transform', typeCode: 'Reference', targetResourceTypes: ['StructureMap'] },
      ],
    },
    {
      elementName: 'dynamicValue',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dynamicValue', typeCode: 'ActivityDefinitionDynamicValue' }],
    },
  ];

  readonly resourceType = 'ActivityDefinition';

  /** Logical URI to reference this activity definition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the activity definition (0..*) */
  identifier?: Identifier[];

  /** Business version of the activity definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this activity definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this activity definition (human friendly) (0..1) */
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

  /** Date this was last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Natural language description of the activity definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Why this activity definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Describes the clinical usage of the asset (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;

  /** When the activity definition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the activity definition was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the activity definition is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** Context the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for activity definition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: CodeableConcept[];

  /** A content contributor (0..*) */
  contributor?: Contributor[];

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Logic used by the asset (0..*) */
  library?: Reference[];

  /** Kind of resource (0..1) */
  kind?: valueSetCodes.ResourceType;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Detail type of activity (0..1) */
  code?: CodeableConcept;

  /** When activity is to occur (0..1) */
  timingTiming?: Timing;
  /** When activity is to occur (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** When activity is to occur (0..1) */
  timingPeriod?: Period;
  /** When activity is to occur (0..1) */
  timingRange?: Range;

  /** Where it should happen (0..1) */
  location?: Reference;

  /** Who should participate in the action (0..*) */
  participant?: ActivityDefinitionParticipant[];

  /** What's administered/supplied (0..1) */
  productReference?: Reference;
  /** What's administered/supplied (0..1) */
  productCodeableConcept?: CodeableConcept;

  /** How much is administered/consumed/supplied (0..1) */
  quantity?: Quantity;

  /** Detailed dosage instructions (0..*) */
  dosage?: Dosage[];

  /** What part of body to perform on (0..*) */
  bodySite?: CodeableConcept[];

  /** Transform to apply the template (0..1) */
  transform?: Reference;

  /** Dynamic aspects of the definition (0..*) */
  dynamicValue?: ActivityDefinitionDynamicValue[];

  override fhirType(): string {
    return 'ActivityDefinition';
  }

  /** FHIR JSON for this ActivityDefinition, typed as the plain `ActivityDefinition` data type. */
  override toJSON(): plainTypes.ActivityDefinition {
    return this.serialize() as plainTypes.ActivityDefinition;
  }

  /** Logical URI to reference this activity definition (globally unique) (0..1) */
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

  /** Additional identifier for the activity definition (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the activity definition (0..1) */
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

  /** Name for this activity definition (computer friendly) (0..1) */
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

  /** Name for this activity definition (human friendly) (0..1) */
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

  /** Date this was last changed (0..1) */
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

  /** Natural language description of the activity definition (0..1) */
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

  /** Why this activity definition is defined (0..1) */
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

  /** Describes the clinical usage of the asset (0..1) */
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

  /** When the activity definition was approved by publisher (0..1) */
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

  /** When the activity definition was last reviewed (0..1) */
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

  /** When the activity definition is expected to be used (0..1) Created when absent. */
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

  /** Context the content is intended to support (0..*) Never undefined; an empty list is created when absent. */
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

  /** Intended jurisdiction for activity definition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** E.g. Education, Treatment, Assessment, etc (0..*) Never undefined; an empty list is created when absent. */
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

  /** A content contributor (0..*) Never undefined; an empty list is created when absent. */
  getContributor(): Contributor[] {
    if (this.contributor === undefined) {
      this.contributor = [];
    }
    return this.contributor;
  }

  setContributor(contributor: Contributor[] | undefined): this {
    return this.setFieldValue('contributor', contributor);
  }

  hasContributor(): boolean {
    return this.hasFieldValue('contributor');
  }

  /** Appends a new, empty Contributor to `contributor` and returns it so it can be filled in. */
  addContributor(): Contributor;
  /** Appends the given Contributor to `contributor` and returns this object for chaining. */
  addContributor(contributor: Contributor): this;
  addContributor(contributor?: Contributor): Contributor | this {
    if (contributor !== undefined) {
      return this.addFieldValue('contributor', contributor);
    }
    const createdContributor = new Contributor();
    this.addFieldValue('contributor', createdContributor);
    return createdContributor;
  }

  /** The first Contributor of `contributor`. One is added when the list is empty. */
  getContributorFirstRep(): Contributor {
    const firstContributor = this.getContributor()[0];
    return firstContributor === undefined ? this.addContributor() : firstContributor;
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

  /** Additional documentation, citations, etc (0..*) Never undefined; an empty list is created when absent. */
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

  /** Logic used by the asset (0..*) Never undefined; an empty list is created when absent. */
  getLibrary(): Reference[] {
    if (this.library === undefined) {
      this.library = [];
    }
    return this.library;
  }

  setLibrary(library: Reference[] | undefined): this {
    return this.setFieldValue('library', library);
  }

  hasLibrary(): boolean {
    return this.hasFieldValue('library');
  }

  /** Appends a new, empty Reference to `library` and returns it so it can be filled in. */
  addLibrary(): Reference;
  /** Appends the given Reference to `library` and returns this object for chaining. */
  addLibrary(reference: Reference): this;
  addLibrary(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('library', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('library', createdReference);
    return createdReference;
  }

  /** The first Reference of `library`. One is added when the list is empty. */
  getLibraryFirstRep(): Reference {
    const firstReference = this.getLibrary()[0];
    return firstReference === undefined ? this.addLibrary() : firstReference;
  }

  /** Kind of resource (0..1) */
  getKind(): valueSetCodes.ResourceType | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.ResourceType | undefined): this {
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

  /** Detail type of activity (0..1) Created when absent. */
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

  /** When activity is to occur (0..1) Whichever type of `timing[x]` is set. */
  getTiming(): Timing | string | Period | Range | undefined {
    return this.getChoiceValue<Timing | string | Period | Range>('timing');
  }

  /** True when any type of `timing[x]` is set. */
  hasTiming(): boolean {
    return this.hasChoiceValue('timing');
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

  /** Where it should happen (0..1) Created when absent. */
  getLocation(): Reference {
    if (this.location === undefined) {
      this.location = new Reference();
    }
    return this.location;
  }

  setLocation(location: Reference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Who should participate in the action (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): ActivityDefinitionParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: ActivityDefinitionParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty ActivityDefinitionParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): ActivityDefinitionParticipant;
  /** Appends the given ActivityDefinitionParticipant to `participant` and returns this object for chaining. */
  addParticipant(activityDefinitionParticipant: ActivityDefinitionParticipant): this;
  addParticipant(
    activityDefinitionParticipant?: ActivityDefinitionParticipant
  ): ActivityDefinitionParticipant | this {
    if (activityDefinitionParticipant !== undefined) {
      return this.addFieldValue('participant', activityDefinitionParticipant);
    }
    const createdActivityDefinitionParticipant = new ActivityDefinitionParticipant();
    this.addFieldValue('participant', createdActivityDefinitionParticipant);
    return createdActivityDefinitionParticipant;
  }

  /** The first ActivityDefinitionParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): ActivityDefinitionParticipant {
    const firstActivityDefinitionParticipant = this.getParticipant()[0];
    return firstActivityDefinitionParticipant === undefined
      ? this.addParticipant()
      : firstActivityDefinitionParticipant;
  }

  /** What's administered/supplied (0..1) Whichever type of `product[x]` is set. */
  getProduct(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('product');
  }

  /** True when any type of `product[x]` is set. */
  hasProduct(): boolean {
    return this.hasChoiceValue('product');
  }

  getProductReference(): Reference | undefined {
    return this.productReference;
  }

  /** Sets `product[x]` as Reference and clears every other type of it. */
  setProductReference(productReference: Reference | undefined): this {
    return this.setFieldValue('productReference', productReference);
  }

  hasProductReference(): boolean {
    return this.hasFieldValue('productReference');
  }

  getProductCodeableConcept(): CodeableConcept | undefined {
    return this.productCodeableConcept;
  }

  /** Sets `product[x]` as CodeableConcept and clears every other type of it. */
  setProductCodeableConcept(productCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('productCodeableConcept', productCodeableConcept);
  }

  hasProductCodeableConcept(): boolean {
    return this.hasFieldValue('productCodeableConcept');
  }

  /** How much is administered/consumed/supplied (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Detailed dosage instructions (0..*) Never undefined; an empty list is created when absent. */
  getDosage(): Dosage[] {
    if (this.dosage === undefined) {
      this.dosage = [];
    }
    return this.dosage;
  }

  setDosage(dosage: Dosage[] | undefined): this {
    return this.setFieldValue('dosage', dosage);
  }

  hasDosage(): boolean {
    return this.hasFieldValue('dosage');
  }

  /** Appends a new, empty Dosage to `dosage` and returns it so it can be filled in. */
  addDosage(): Dosage;
  /** Appends the given Dosage to `dosage` and returns this object for chaining. */
  addDosage(dosage: Dosage): this;
  addDosage(dosage?: Dosage): Dosage | this {
    if (dosage !== undefined) {
      return this.addFieldValue('dosage', dosage);
    }
    const createdDosage = new Dosage();
    this.addFieldValue('dosage', createdDosage);
    return createdDosage;
  }

  /** The first Dosage of `dosage`. One is added when the list is empty. */
  getDosageFirstRep(): Dosage {
    const firstDosage = this.getDosage()[0];
    return firstDosage === undefined ? this.addDosage() : firstDosage;
  }

  /** What part of body to perform on (0..*) Never undefined; an empty list is created when absent. */
  getBodySite(): CodeableConcept[] {
    if (this.bodySite === undefined) {
      this.bodySite = [];
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept[] | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Appends a new, empty CodeableConcept to `bodySite` and returns it so it can be filled in. */
  addBodySite(): CodeableConcept;
  /** Appends the given CodeableConcept to `bodySite` and returns this object for chaining. */
  addBodySite(codeableConcept: CodeableConcept): this;
  addBodySite(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('bodySite', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('bodySite', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `bodySite`. One is added when the list is empty. */
  getBodySiteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getBodySite()[0];
    return firstCodeableConcept === undefined ? this.addBodySite() : firstCodeableConcept;
  }

  /** Transform to apply the template (0..1) Created when absent. */
  getTransform(): Reference {
    if (this.transform === undefined) {
      this.transform = new Reference();
    }
    return this.transform;
  }

  setTransform(transform: Reference | undefined): this {
    return this.setFieldValue('transform', transform);
  }

  hasTransform(): boolean {
    return this.hasFieldValue('transform');
  }

  /** Dynamic aspects of the definition (0..*) Never undefined; an empty list is created when absent. */
  getDynamicValue(): ActivityDefinitionDynamicValue[] {
    if (this.dynamicValue === undefined) {
      this.dynamicValue = [];
    }
    return this.dynamicValue;
  }

  setDynamicValue(dynamicValue: ActivityDefinitionDynamicValue[] | undefined): this {
    return this.setFieldValue('dynamicValue', dynamicValue);
  }

  hasDynamicValue(): boolean {
    return this.hasFieldValue('dynamicValue');
  }

  /** Appends a new, empty ActivityDefinitionDynamicValue to `dynamicValue` and returns it so it can be filled in. */
  addDynamicValue(): ActivityDefinitionDynamicValue;
  /** Appends the given ActivityDefinitionDynamicValue to `dynamicValue` and returns this object for chaining. */
  addDynamicValue(activityDefinitionDynamicValue: ActivityDefinitionDynamicValue): this;
  addDynamicValue(
    activityDefinitionDynamicValue?: ActivityDefinitionDynamicValue
  ): ActivityDefinitionDynamicValue | this {
    if (activityDefinitionDynamicValue !== undefined) {
      return this.addFieldValue('dynamicValue', activityDefinitionDynamicValue);
    }
    const createdActivityDefinitionDynamicValue = new ActivityDefinitionDynamicValue();
    this.addFieldValue('dynamicValue', createdActivityDefinitionDynamicValue);
    return createdActivityDefinitionDynamicValue;
  }

  /** The first ActivityDefinitionDynamicValue of `dynamicValue`. One is added when the list is empty. */
  getDynamicValueFirstRep(): ActivityDefinitionDynamicValue {
    const firstActivityDefinitionDynamicValue = this.getDynamicValue()[0];
    return firstActivityDefinitionDynamicValue === undefined
      ? this.addDynamicValue()
      : firstActivityDefinitionDynamicValue;
  }
}

modelTypeRegistry.register('ActivityDefinition', ActivityDefinition, true);

/** True when the value is a ActivityDefinition model instance. */
export function isActivityDefinition(candidate: unknown): candidate is ActivityDefinition {
  return candidate instanceof ActivityDefinition;
}

/**
 * Who should participate in the action
 */
export class ActivityDefinitionParticipant extends BackboneElement {
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

  /** patient | practitioner | related-person (1..1) */
  type?: valueSetCodes.ActionParticipantType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** E.g. Nurse, Surgeon, Parent, etc (0..1) */
  role?: CodeableConcept;

  override fhirType(): string {
    return 'ActivityDefinition.participant';
  }

  /** FHIR JSON for this ActivityDefinitionParticipant, typed as the plain `ActivityDefinitionParticipant` data type. */
  override toJSON(): plainTypes.ActivityDefinitionParticipant {
    return this.serialize() as plainTypes.ActivityDefinitionParticipant;
  }

  /** patient | practitioner | related-person (1..1) */
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

  /** E.g. Nurse, Surgeon, Parent, etc (0..1) Created when absent. */
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

modelTypeRegistry.register('ActivityDefinitionParticipant', ActivityDefinitionParticipant, false);

/**
 * Dynamic aspects of the definition
 */
export class ActivityDefinitionDynamicValue extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'path',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'string' }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
  ];

  /** Natural language description of the dynamic value (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The path to the element to be set dynamically (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** Language of the expression (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  /** An expression that provides the dynamic value for the customization (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  override fhirType(): string {
    return 'ActivityDefinition.dynamicValue';
  }

  /** FHIR JSON for this ActivityDefinitionDynamicValue, typed as the plain `ActivityDefinitionDynamicValue` data type. */
  override toJSON(): plainTypes.ActivityDefinitionDynamicValue {
    return this.serialize() as plainTypes.ActivityDefinitionDynamicValue;
  }

  /** Natural language description of the dynamic value (0..1) */
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

  /** Language of the expression (0..1) */
  getLanguage(): string | undefined {
    return this.language;
  }

  /** Sets `language`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLanguage(language: string | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The element carrying the id and extensions of `language`. Created when absent. */
  getLanguageElement(): Element {
    if (this._language === undefined) {
      this._language = new Element();
    }
    return this._language;
  }

  setLanguageElement(languageElement: Element | undefined): this {
    this._language = languageElement;
    return this;
  }

  /** An expression that provides the dynamic value for the customization (0..1) */
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

modelTypeRegistry.register('ActivityDefinitionDynamicValue', ActivityDefinitionDynamicValue, false);
