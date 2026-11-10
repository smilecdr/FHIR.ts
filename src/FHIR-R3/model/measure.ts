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
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for Measure Resource
 */
export class Measure extends DomainResource {
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
      elementName: 'disclaimer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'disclaimer', typeCode: 'markdown' }],
    },
    {
      elementName: 'scoring',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scoring', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'compositeScoring',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'compositeScoring', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'riskAdjustment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'riskAdjustment', typeCode: 'string' }],
    },
    {
      elementName: 'rateAggregation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rateAggregation', typeCode: 'string' }],
    },
    {
      elementName: 'rationale',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rationale', typeCode: 'markdown' }],
    },
    {
      elementName: 'clinicalRecommendationStatement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'clinicalRecommendationStatement', typeCode: 'markdown' }],
    },
    {
      elementName: 'improvementNotation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'improvementNotation', typeCode: 'string' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'definition', typeCode: 'markdown' }],
    },
    {
      elementName: 'guidance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'guidance', typeCode: 'markdown' }],
    },
    {
      elementName: 'set',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'set', typeCode: 'string' }],
    },
    {
      elementName: 'group',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'group', typeCode: 'MeasureGroup' }],
    },
    {
      elementName: 'supplementalData',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supplementalData', typeCode: 'MeasureSupplementalData' }],
    },
  ];

  readonly resourceType = 'Measure';

  /** Logical URI to reference this measure (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the measure (0..*) */
  identifier?: Identifier[];

  /** Business version of the measure (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this measure (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this measure (human friendly) (0..1) */
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

  /** Natural language description of the measure (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Why this measure is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Describes the clinical usage of the measure (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;

  /** When the measure was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the measure was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the measure is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** Context the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for measure (if applicable) (0..*) */
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

  /** Logic used by the measure (0..*) */
  library?: Reference[];

  /** Disclaimer for use of the measure or its referenced content (0..1) */
  disclaimer?: string;
  /** Id and extensions of the primitive `disclaimer`. */
  _disclaimer?: Element;

  /** proportion | ratio | continuous-variable | cohort (0..1) */
  scoring?: CodeableConcept;

  /** opportunity | all-or-nothing | linear | weighted (0..1) */
  compositeScoring?: CodeableConcept;

  /** process | outcome | structure | patient-reported-outcome | composite (0..*) */
  type?: CodeableConcept[];

  /** How is risk adjustment applied for this measure (0..1) */
  riskAdjustment?: string;
  /** Id and extensions of the primitive `riskAdjustment`. */
  _riskAdjustment?: Element;

  /** How is rate aggregation performed for this measure (0..1) */
  rateAggregation?: string;
  /** Id and extensions of the primitive `rateAggregation`. */
  _rateAggregation?: Element;

  /** Why does this measure exist (0..1) */
  rationale?: string;
  /** Id and extensions of the primitive `rationale`. */
  _rationale?: Element;

  /** Summary of clinical guidelines (0..1) */
  clinicalRecommendationStatement?: string;
  /** Id and extensions of the primitive `clinicalRecommendationStatement`. */
  _clinicalRecommendationStatement?: Element;

  /** Improvement notation for the measure, e.g. higher score indicates better quality (0..1) */
  improvementNotation?: string;
  /** Id and extensions of the primitive `improvementNotation`. */
  _improvementNotation?: Element;

  /** Defined terms used in the measure documentation (0..*) */
  definition?: string[];
  /** Id and extensions of the primitive `definition`. */
  _definition?: (Element | null)[];

  /** Additional guidance for implementers (0..1) */
  guidance?: string;
  /** Id and extensions of the primitive `guidance`. */
  _guidance?: Element;

  /** The measure set, e.g. Preventive Care and Screening (0..1) */
  set?: string;
  /** Id and extensions of the primitive `set`. */
  _set?: Element;

  /** Population criteria group (0..*) */
  group?: MeasureGroup[];

  /** What other data should be reported with the measure (0..*) */
  supplementalData?: MeasureSupplementalData[];

  override fhirType(): string {
    return 'Measure';
  }

  /** FHIR JSON for this Measure, typed as the plain `Measure` data type. */
  override toJSON(): plainTypes.Measure {
    return this.serialize() as plainTypes.Measure;
  }

  /** Logical URI to reference this measure (globally unique) (0..1) */
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

  /** Additional identifier for the measure (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the measure (0..1) */
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

  /** Name for this measure (computer friendly) (0..1) */
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

  /** Name for this measure (human friendly) (0..1) */
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

  /** Natural language description of the measure (0..1) */
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

  /** Why this measure is defined (0..1) */
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

  /** Describes the clinical usage of the measure (0..1) */
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

  /** When the measure was approved by publisher (0..1) */
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

  /** When the measure was last reviewed (0..1) */
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

  /** When the measure is expected to be used (0..1) Created when absent. */
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

  /** Intended jurisdiction for measure (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Logic used by the measure (0..*) Never undefined; an empty list is created when absent. */
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

  /** Disclaimer for use of the measure or its referenced content (0..1) */
  getDisclaimer(): string | undefined {
    return this.disclaimer;
  }

  /** Sets `disclaimer`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDisclaimer(disclaimer: string | undefined): this {
    return this.setFieldValue('disclaimer', disclaimer);
  }

  hasDisclaimer(): boolean {
    return this.hasFieldValue('disclaimer');
  }

  /** The element carrying the id and extensions of `disclaimer`. Created when absent. */
  getDisclaimerElement(): Element {
    if (this._disclaimer === undefined) {
      this._disclaimer = new Element();
    }
    return this._disclaimer;
  }

  setDisclaimerElement(disclaimerElement: Element | undefined): this {
    this._disclaimer = disclaimerElement;
    return this;
  }

  /** proportion | ratio | continuous-variable | cohort (0..1) Created when absent. */
  getScoring(): CodeableConcept {
    if (this.scoring === undefined) {
      this.scoring = new CodeableConcept();
    }
    return this.scoring;
  }

  setScoring(scoring: CodeableConcept | undefined): this {
    return this.setFieldValue('scoring', scoring);
  }

  hasScoring(): boolean {
    return this.hasFieldValue('scoring');
  }

  /** opportunity | all-or-nothing | linear | weighted (0..1) Created when absent. */
  getCompositeScoring(): CodeableConcept {
    if (this.compositeScoring === undefined) {
      this.compositeScoring = new CodeableConcept();
    }
    return this.compositeScoring;
  }

  setCompositeScoring(compositeScoring: CodeableConcept | undefined): this {
    return this.setFieldValue('compositeScoring', compositeScoring);
  }

  hasCompositeScoring(): boolean {
    return this.hasFieldValue('compositeScoring');
  }

  /** process | outcome | structure | patient-reported-outcome | composite (0..*) Never undefined; an empty list is created when absent. */
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

  /** How is risk adjustment applied for this measure (0..1) */
  getRiskAdjustment(): string | undefined {
    return this.riskAdjustment;
  }

  /** Sets `riskAdjustment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRiskAdjustment(riskAdjustment: string | undefined): this {
    return this.setFieldValue('riskAdjustment', riskAdjustment);
  }

  hasRiskAdjustment(): boolean {
    return this.hasFieldValue('riskAdjustment');
  }

  /** The element carrying the id and extensions of `riskAdjustment`. Created when absent. */
  getRiskAdjustmentElement(): Element {
    if (this._riskAdjustment === undefined) {
      this._riskAdjustment = new Element();
    }
    return this._riskAdjustment;
  }

  setRiskAdjustmentElement(riskAdjustmentElement: Element | undefined): this {
    this._riskAdjustment = riskAdjustmentElement;
    return this;
  }

  /** How is rate aggregation performed for this measure (0..1) */
  getRateAggregation(): string | undefined {
    return this.rateAggregation;
  }

  /** Sets `rateAggregation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRateAggregation(rateAggregation: string | undefined): this {
    return this.setFieldValue('rateAggregation', rateAggregation);
  }

  hasRateAggregation(): boolean {
    return this.hasFieldValue('rateAggregation');
  }

  /** The element carrying the id and extensions of `rateAggregation`. Created when absent. */
  getRateAggregationElement(): Element {
    if (this._rateAggregation === undefined) {
      this._rateAggregation = new Element();
    }
    return this._rateAggregation;
  }

  setRateAggregationElement(rateAggregationElement: Element | undefined): this {
    this._rateAggregation = rateAggregationElement;
    return this;
  }

  /** Why does this measure exist (0..1) */
  getRationale(): string | undefined {
    return this.rationale;
  }

  /** Sets `rationale`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setRationale(rationale: string | undefined): this {
    return this.setFieldValue('rationale', rationale);
  }

  hasRationale(): boolean {
    return this.hasFieldValue('rationale');
  }

  /** The element carrying the id and extensions of `rationale`. Created when absent. */
  getRationaleElement(): Element {
    if (this._rationale === undefined) {
      this._rationale = new Element();
    }
    return this._rationale;
  }

  setRationaleElement(rationaleElement: Element | undefined): this {
    this._rationale = rationaleElement;
    return this;
  }

  /** Summary of clinical guidelines (0..1) */
  getClinicalRecommendationStatement(): string | undefined {
    return this.clinicalRecommendationStatement;
  }

  /** Sets `clinicalRecommendationStatement`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setClinicalRecommendationStatement(clinicalRecommendationStatement: string | undefined): this {
    return this.setFieldValue('clinicalRecommendationStatement', clinicalRecommendationStatement);
  }

  hasClinicalRecommendationStatement(): boolean {
    return this.hasFieldValue('clinicalRecommendationStatement');
  }

  /** The element carrying the id and extensions of `clinicalRecommendationStatement`. Created when absent. */
  getClinicalRecommendationStatementElement(): Element {
    if (this._clinicalRecommendationStatement === undefined) {
      this._clinicalRecommendationStatement = new Element();
    }
    return this._clinicalRecommendationStatement;
  }

  setClinicalRecommendationStatementElement(
    clinicalRecommendationStatementElement: Element | undefined
  ): this {
    this._clinicalRecommendationStatement = clinicalRecommendationStatementElement;
    return this;
  }

  /** Improvement notation for the measure, e.g. higher score indicates better quality (0..1) */
  getImprovementNotation(): string | undefined {
    return this.improvementNotation;
  }

  /** Sets `improvementNotation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setImprovementNotation(improvementNotation: string | undefined): this {
    return this.setFieldValue('improvementNotation', improvementNotation);
  }

  hasImprovementNotation(): boolean {
    return this.hasFieldValue('improvementNotation');
  }

  /** The element carrying the id and extensions of `improvementNotation`. Created when absent. */
  getImprovementNotationElement(): Element {
    if (this._improvementNotation === undefined) {
      this._improvementNotation = new Element();
    }
    return this._improvementNotation;
  }

  setImprovementNotationElement(improvementNotationElement: Element | undefined): this {
    this._improvementNotation = improvementNotationElement;
    return this;
  }

  /** Defined terms used in the measure documentation (0..*) Never undefined; an empty list is created when absent. */
  getDefinition(): string[] {
    if (this.definition === undefined) {
      this.definition = [];
    }
    return this.definition;
  }

  setDefinition(definition: string[] | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** Appends one value to `definition`. Throws a FhirModelError when it is not a valid FHIR markdown. */
  addDefinition(definition: string): this {
    return this.addFieldValue('definition', definition);
  }

  /** Additional guidance for implementers (0..1) */
  getGuidance(): string | undefined {
    return this.guidance;
  }

  /** Sets `guidance`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setGuidance(guidance: string | undefined): this {
    return this.setFieldValue('guidance', guidance);
  }

  hasGuidance(): boolean {
    return this.hasFieldValue('guidance');
  }

  /** The element carrying the id and extensions of `guidance`. Created when absent. */
  getGuidanceElement(): Element {
    if (this._guidance === undefined) {
      this._guidance = new Element();
    }
    return this._guidance;
  }

  setGuidanceElement(guidanceElement: Element | undefined): this {
    this._guidance = guidanceElement;
    return this;
  }

  /** The measure set, e.g. Preventive Care and Screening (0..1) */
  getSet(): string | undefined {
    return this.set;
  }

  /** Sets `set`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSet(set: string | undefined): this {
    return this.setFieldValue('set', set);
  }

  hasSet(): boolean {
    return this.hasFieldValue('set');
  }

  /** The element carrying the id and extensions of `set`. Created when absent. */
  getSetElement(): Element {
    if (this._set === undefined) {
      this._set = new Element();
    }
    return this._set;
  }

  setSetElement(setElement: Element | undefined): this {
    this._set = setElement;
    return this;
  }

  /** Population criteria group (0..*) Never undefined; an empty list is created when absent. */
  getGroup(): MeasureGroup[] {
    if (this.group === undefined) {
      this.group = [];
    }
    return this.group;
  }

  setGroup(group: MeasureGroup[] | undefined): this {
    return this.setFieldValue('group', group);
  }

  hasGroup(): boolean {
    return this.hasFieldValue('group');
  }

  /** Appends a new, empty MeasureGroup to `group` and returns it so it can be filled in. */
  addGroup(): MeasureGroup;
  /** Appends the given MeasureGroup to `group` and returns this object for chaining. */
  addGroup(measureGroup: MeasureGroup): this;
  addGroup(measureGroup?: MeasureGroup): MeasureGroup | this {
    if (measureGroup !== undefined) {
      return this.addFieldValue('group', measureGroup);
    }
    const createdMeasureGroup = new MeasureGroup();
    this.addFieldValue('group', createdMeasureGroup);
    return createdMeasureGroup;
  }

  /** The first MeasureGroup of `group`. One is added when the list is empty. */
  getGroupFirstRep(): MeasureGroup {
    const firstMeasureGroup = this.getGroup()[0];
    return firstMeasureGroup === undefined ? this.addGroup() : firstMeasureGroup;
  }

  /** What other data should be reported with the measure (0..*) Never undefined; an empty list is created when absent. */
  getSupplementalData(): MeasureSupplementalData[] {
    if (this.supplementalData === undefined) {
      this.supplementalData = [];
    }
    return this.supplementalData;
  }

  setSupplementalData(supplementalData: MeasureSupplementalData[] | undefined): this {
    return this.setFieldValue('supplementalData', supplementalData);
  }

  hasSupplementalData(): boolean {
    return this.hasFieldValue('supplementalData');
  }

  /** Appends a new, empty MeasureSupplementalData to `supplementalData` and returns it so it can be filled in. */
  addSupplementalData(): MeasureSupplementalData;
  /** Appends the given MeasureSupplementalData to `supplementalData` and returns this object for chaining. */
  addSupplementalData(measureSupplementalData: MeasureSupplementalData): this;
  addSupplementalData(
    measureSupplementalData?: MeasureSupplementalData
  ): MeasureSupplementalData | this {
    if (measureSupplementalData !== undefined) {
      return this.addFieldValue('supplementalData', measureSupplementalData);
    }
    const createdMeasureSupplementalData = new MeasureSupplementalData();
    this.addFieldValue('supplementalData', createdMeasureSupplementalData);
    return createdMeasureSupplementalData;
  }

  /** The first MeasureSupplementalData of `supplementalData`. One is added when the list is empty. */
  getSupplementalDataFirstRep(): MeasureSupplementalData {
    const firstMeasureSupplementalData = this.getSupplementalData()[0];
    return firstMeasureSupplementalData === undefined
      ? this.addSupplementalData()
      : firstMeasureSupplementalData;
  }
}

modelTypeRegistry.register('Measure', Measure, true);

/** True when the value is a Measure model instance. */
export function isMeasure(candidate: unknown): candidate is Measure {
  return candidate instanceof Measure;
}

/**
 * Population criteria group
 */
export class MeasureGroup extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
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
      elementName: 'population',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'population', typeCode: 'MeasureGroupPopulation' }],
    },
    {
      elementName: 'stratifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'stratifier', typeCode: 'MeasureGroupStratifier' }],
    },
  ];

  /** Unique identifier (1..1) */
  identifier?: Identifier;

  /** Short name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Summary description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Population criteria (0..*) */
  population?: MeasureGroupPopulation[];

  /** Stratifier criteria for the measure (0..*) */
  stratifier?: MeasureGroupStratifier[];

  override fhirType(): string {
    return 'Measure.group';
  }

  /** FHIR JSON for this MeasureGroup, typed as the plain `MeasureGroup` data type. */
  override toJSON(): plainTypes.MeasureGroup {
    return this.serialize() as plainTypes.MeasureGroup;
  }

  /** Unique identifier (1..1) Created when absent. */
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

  /** Short name (0..1) */
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

  /** Summary description (0..1) */
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

  /** Population criteria (0..*) Never undefined; an empty list is created when absent. */
  getPopulation(): MeasureGroupPopulation[] {
    if (this.population === undefined) {
      this.population = [];
    }
    return this.population;
  }

  setPopulation(population: MeasureGroupPopulation[] | undefined): this {
    return this.setFieldValue('population', population);
  }

  hasPopulation(): boolean {
    return this.hasFieldValue('population');
  }

  /** Appends a new, empty MeasureGroupPopulation to `population` and returns it so it can be filled in. */
  addPopulation(): MeasureGroupPopulation;
  /** Appends the given MeasureGroupPopulation to `population` and returns this object for chaining. */
  addPopulation(measureGroupPopulation: MeasureGroupPopulation): this;
  addPopulation(measureGroupPopulation?: MeasureGroupPopulation): MeasureGroupPopulation | this {
    if (measureGroupPopulation !== undefined) {
      return this.addFieldValue('population', measureGroupPopulation);
    }
    const createdMeasureGroupPopulation = new MeasureGroupPopulation();
    this.addFieldValue('population', createdMeasureGroupPopulation);
    return createdMeasureGroupPopulation;
  }

  /** The first MeasureGroupPopulation of `population`. One is added when the list is empty. */
  getPopulationFirstRep(): MeasureGroupPopulation {
    const firstMeasureGroupPopulation = this.getPopulation()[0];
    return firstMeasureGroupPopulation === undefined
      ? this.addPopulation()
      : firstMeasureGroupPopulation;
  }

  /** Stratifier criteria for the measure (0..*) Never undefined; an empty list is created when absent. */
  getStratifier(): MeasureGroupStratifier[] {
    if (this.stratifier === undefined) {
      this.stratifier = [];
    }
    return this.stratifier;
  }

  setStratifier(stratifier: MeasureGroupStratifier[] | undefined): this {
    return this.setFieldValue('stratifier', stratifier);
  }

  hasStratifier(): boolean {
    return this.hasFieldValue('stratifier');
  }

  /** Appends a new, empty MeasureGroupStratifier to `stratifier` and returns it so it can be filled in. */
  addStratifier(): MeasureGroupStratifier;
  /** Appends the given MeasureGroupStratifier to `stratifier` and returns this object for chaining. */
  addStratifier(measureGroupStratifier: MeasureGroupStratifier): this;
  addStratifier(measureGroupStratifier?: MeasureGroupStratifier): MeasureGroupStratifier | this {
    if (measureGroupStratifier !== undefined) {
      return this.addFieldValue('stratifier', measureGroupStratifier);
    }
    const createdMeasureGroupStratifier = new MeasureGroupStratifier();
    this.addFieldValue('stratifier', createdMeasureGroupStratifier);
    return createdMeasureGroupStratifier;
  }

  /** The first MeasureGroupStratifier of `stratifier`. One is added when the list is empty. */
  getStratifierFirstRep(): MeasureGroupStratifier {
    const firstMeasureGroupStratifier = this.getStratifier()[0];
    return firstMeasureGroupStratifier === undefined
      ? this.addStratifier()
      : firstMeasureGroupStratifier;
  }
}

modelTypeRegistry.register('MeasureGroup', MeasureGroup, false);

/**
 * Population criteria
 */
export class MeasureGroupPopulation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
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
      elementName: 'criteria',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'criteria', typeCode: 'string' }],
    },
  ];

  /** Unique identifier (0..1) */
  identifier?: Identifier;

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;

  /** Short name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** The human readable description of this population criteria (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria (1..1) */
  criteria?: string;
  /** Id and extensions of the primitive `criteria`. */
  _criteria?: Element;

  override fhirType(): string {
    return 'Measure.group.population';
  }

  /** FHIR JSON for this MeasureGroupPopulation, typed as the plain `MeasurePopulation` data type. */
  override toJSON(): plainTypes.MeasurePopulation {
    return this.serialize() as plainTypes.MeasurePopulation;
  }

  /** Unique identifier (0..1) Created when absent. */
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

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) Created when absent. */
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

  /** Short name (0..1) */
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

  /** The human readable description of this population criteria (0..1) */
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

  /** The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria (1..1) */
  getCriteria(): string | undefined {
    return this.criteria;
  }

  /** Sets `criteria`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCriteria(criteria: string | undefined): this {
    return this.setFieldValue('criteria', criteria);
  }

  hasCriteria(): boolean {
    return this.hasFieldValue('criteria');
  }

  /** The element carrying the id and extensions of `criteria`. Created when absent. */
  getCriteriaElement(): Element {
    if (this._criteria === undefined) {
      this._criteria = new Element();
    }
    return this._criteria;
  }

  setCriteriaElement(criteriaElement: Element | undefined): this {
    this._criteria = criteriaElement;
    return this;
  }
}

modelTypeRegistry.register('MeasureGroupPopulation', MeasureGroupPopulation, false);

/**
 * Stratifier criteria for the measure
 */
export class MeasureGroupStratifier extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'criteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'criteria', typeCode: 'string' }],
    },
    {
      elementName: 'path',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
  ];

  /** The identifier for the stratifier used to coordinate the reported data back to this stratifier (0..1) */
  identifier?: Identifier;

  /** How the measure should be stratified (0..1) */
  criteria?: string;
  /** Id and extensions of the primitive `criteria`. */
  _criteria?: Element;

  /** Path to the stratifier (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  override fhirType(): string {
    return 'Measure.group.stratifier';
  }

  /** FHIR JSON for this MeasureGroupStratifier, typed as the plain `MeasureStratifier` data type. */
  override toJSON(): plainTypes.MeasureStratifier {
    return this.serialize() as plainTypes.MeasureStratifier;
  }

  /** The identifier for the stratifier used to coordinate the reported data back to this stratifier (0..1) Created when absent. */
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

  /** How the measure should be stratified (0..1) */
  getCriteria(): string | undefined {
    return this.criteria;
  }

  /** Sets `criteria`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCriteria(criteria: string | undefined): this {
    return this.setFieldValue('criteria', criteria);
  }

  hasCriteria(): boolean {
    return this.hasFieldValue('criteria');
  }

  /** The element carrying the id and extensions of `criteria`. Created when absent. */
  getCriteriaElement(): Element {
    if (this._criteria === undefined) {
      this._criteria = new Element();
    }
    return this._criteria;
  }

  setCriteriaElement(criteriaElement: Element | undefined): this {
    this._criteria = criteriaElement;
    return this;
  }

  /** Path to the stratifier (0..1) */
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
}

modelTypeRegistry.register('MeasureGroupStratifier', MeasureGroupStratifier, false);

/**
 * What other data should be reported with the measure
 */
export class MeasureSupplementalData extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'usage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'usage', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'criteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'criteria', typeCode: 'string' }],
    },
    {
      elementName: 'path',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
  ];

  /** Identifier, unique within the measure (0..1) */
  identifier?: Identifier;

  /** supplemental-data | risk-adjustment-factor (0..*) */
  usage?: CodeableConcept[];

  /** Expression describing additional data to be reported (0..1) */
  criteria?: string;
  /** Id and extensions of the primitive `criteria`. */
  _criteria?: Element;

  /** Path to the supplemental data element (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  override fhirType(): string {
    return 'Measure.supplementalData';
  }

  /** FHIR JSON for this MeasureSupplementalData, typed as the plain `MeasureSupplementalData` data type. */
  override toJSON(): plainTypes.MeasureSupplementalData {
    return this.serialize() as plainTypes.MeasureSupplementalData;
  }

  /** Identifier, unique within the measure (0..1) Created when absent. */
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

  /** supplemental-data | risk-adjustment-factor (0..*) Never undefined; an empty list is created when absent. */
  getUsage(): CodeableConcept[] {
    if (this.usage === undefined) {
      this.usage = [];
    }
    return this.usage;
  }

  setUsage(usage: CodeableConcept[] | undefined): this {
    return this.setFieldValue('usage', usage);
  }

  hasUsage(): boolean {
    return this.hasFieldValue('usage');
  }

  /** Appends a new, empty CodeableConcept to `usage` and returns it so it can be filled in. */
  addUsage(): CodeableConcept;
  /** Appends the given CodeableConcept to `usage` and returns this object for chaining. */
  addUsage(codeableConcept: CodeableConcept): this;
  addUsage(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('usage', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('usage', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `usage`. One is added when the list is empty. */
  getUsageFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getUsage()[0];
    return firstCodeableConcept === undefined ? this.addUsage() : firstCodeableConcept;
  }

  /** Expression describing additional data to be reported (0..1) */
  getCriteria(): string | undefined {
    return this.criteria;
  }

  /** Sets `criteria`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCriteria(criteria: string | undefined): this {
    return this.setFieldValue('criteria', criteria);
  }

  hasCriteria(): boolean {
    return this.hasFieldValue('criteria');
  }

  /** The element carrying the id and extensions of `criteria`. Created when absent. */
  getCriteriaElement(): Element {
    if (this._criteria === undefined) {
      this._criteria = new Element();
    }
    return this._criteria;
  }

  setCriteriaElement(criteriaElement: Element | undefined): this {
    this._criteria = criteriaElement;
    return this;
  }

  /** Path to the supplemental data element (0..1) */
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
}

modelTypeRegistry.register('MeasureSupplementalData', MeasureSupplementalData, false);
