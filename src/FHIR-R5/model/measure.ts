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
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * The Measure resource provides the definition of a quality measure.
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
      elementName: 'subtitle',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subtitle', typeCode: 'string' }],
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
      elementName: 'basis',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'basis', typeCode: 'code', allowedCodes: valueSetCodes.FHIRTypes }],
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
      types: [{ jsonKey: 'usage', typeCode: 'markdown' }],
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
      elementName: 'scoringUnit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scoringUnit', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'riskAdjustment', typeCode: 'markdown' }],
    },
    {
      elementName: 'rateAggregation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rateAggregation', typeCode: 'markdown' }],
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
      types: [{ jsonKey: 'improvementNotation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'term',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'term', typeCode: 'MeasureTerm' }],
    },
    {
      elementName: 'guidance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'guidance', typeCode: 'markdown' }],
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

  /** Canonical identifier for this measure, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the measure (0..*) */
  identifier?: Identifier[];

  /** Business version of the measure (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this measure (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this measure (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Subordinate title of the measure (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectReference?: Reference;

  /** Population basis (0..1) */
  basis?: valueSetCodes.FHIRTypes;
  /** Id and extensions of the primitive `basis`. */
  _basis?: Element;

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

  /** Natural language description of the measure (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for measure (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this measure is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Describes the clinical usage of the measure (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;

  /** When the measure was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the measure was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the measure is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** The category of the measure, such as Education, Treatment, Assessment, etc (0..*) */
  topic?: CodeableConcept[];

  /** Who authored the content (0..*) */
  author?: ContactDetail[];

  /** Who edited the content (0..*) */
  editor?: ContactDetail[];

  /** Who reviewed the content (0..*) */
  reviewer?: ContactDetail[];

  /** Who endorsed the content (0..*) */
  endorser?: ContactDetail[];

  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** Logic used by the measure (0..*) */
  library?: string[];
  /** Id and extensions of the primitive `library`. */
  _library?: (Element | null)[];

  /** Disclaimer for use of the measure or its referenced content (0..1) */
  disclaimer?: string;
  /** Id and extensions of the primitive `disclaimer`. */
  _disclaimer?: Element;

  /** proportion | ratio | continuous-variable | cohort (0..1) */
  scoring?: CodeableConcept;

  /** What units? (0..1) */
  scoringUnit?: CodeableConcept;

  /** opportunity | all-or-nothing | linear | weighted (0..1) */
  compositeScoring?: CodeableConcept;

  /** process | outcome | structure | patient-reported-outcome | composite (0..*) */
  type?: CodeableConcept[];

  /** How risk adjustment is applied for this measure (0..1) */
  riskAdjustment?: string;
  /** Id and extensions of the primitive `riskAdjustment`. */
  _riskAdjustment?: Element;

  /** How is rate aggregation performed for this measure (0..1) */
  rateAggregation?: string;
  /** Id and extensions of the primitive `rateAggregation`. */
  _rateAggregation?: Element;

  /** Detailed description of why the measure exists (0..1) */
  rationale?: string;
  /** Id and extensions of the primitive `rationale`. */
  _rationale?: Element;

  /** Summary of clinical guidelines (0..1) */
  clinicalRecommendationStatement?: string;
  /** Id and extensions of the primitive `clinicalRecommendationStatement`. */
  _clinicalRecommendationStatement?: Element;

  /** increase | decrease (0..1) */
  improvementNotation?: CodeableConcept;

  /** Defined terms used in the measure documentation (0..*) */
  term?: MeasureTerm[];

  /** Additional guidance for implementers (deprecated) (0..1) */
  guidance?: string;
  /** Id and extensions of the primitive `guidance`. */
  _guidance?: Element;

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

  /** Canonical identifier for this measure, represented as a URI (globally unique) (0..1) */
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

  /** Subordinate title of the measure (0..1) */
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

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) Whichever type of `subject[x]` is set. */
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

  /** Population basis (0..1) */
  getBasis(): valueSetCodes.FHIRTypes | undefined {
    return this.basis;
  }

  /** Sets `basis`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setBasis(basis: valueSetCodes.FHIRTypes | undefined): this {
    return this.setFieldValue('basis', basis);
  }

  hasBasis(): boolean {
    return this.hasFieldValue('basis');
  }

  /** The element carrying the id and extensions of `basis`. Created when absent. */
  getBasisElement(): Element {
    if (this._basis === undefined) {
      this._basis = new Element();
    }
    return this._basis;
  }

  setBasisElement(basisElement: Element | undefined): this {
    this._basis = basisElement;
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

  /** Sets `usage`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** When the measure was last reviewed by the publisher (0..1) */
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

  /** The category of the measure, such as Education, Treatment, Assessment, etc (0..*) Never undefined; an empty list is created when absent. */
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

  /** What units? (0..1) Created when absent. */
  getScoringUnit(): CodeableConcept {
    if (this.scoringUnit === undefined) {
      this.scoringUnit = new CodeableConcept();
    }
    return this.scoringUnit;
  }

  setScoringUnit(scoringUnit: CodeableConcept | undefined): this {
    return this.setFieldValue('scoringUnit', scoringUnit);
  }

  hasScoringUnit(): boolean {
    return this.hasFieldValue('scoringUnit');
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

  /** How risk adjustment is applied for this measure (0..1) */
  getRiskAdjustment(): string | undefined {
    return this.riskAdjustment;
  }

  /** Sets `riskAdjustment`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** Sets `rateAggregation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** Detailed description of why the measure exists (0..1) */
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

  /** increase | decrease (0..1) Created when absent. */
  getImprovementNotation(): CodeableConcept {
    if (this.improvementNotation === undefined) {
      this.improvementNotation = new CodeableConcept();
    }
    return this.improvementNotation;
  }

  setImprovementNotation(improvementNotation: CodeableConcept | undefined): this {
    return this.setFieldValue('improvementNotation', improvementNotation);
  }

  hasImprovementNotation(): boolean {
    return this.hasFieldValue('improvementNotation');
  }

  /** Defined terms used in the measure documentation (0..*) Never undefined; an empty list is created when absent. */
  getTerm(): MeasureTerm[] {
    if (this.term === undefined) {
      this.term = [];
    }
    return this.term;
  }

  setTerm(term: MeasureTerm[] | undefined): this {
    return this.setFieldValue('term', term);
  }

  hasTerm(): boolean {
    return this.hasFieldValue('term');
  }

  /** Appends a new, empty MeasureTerm to `term` and returns it so it can be filled in. */
  addTerm(): MeasureTerm;
  /** Appends the given MeasureTerm to `term` and returns this object for chaining. */
  addTerm(measureTerm: MeasureTerm): this;
  addTerm(measureTerm?: MeasureTerm): MeasureTerm | this {
    if (measureTerm !== undefined) {
      return this.addFieldValue('term', measureTerm);
    }
    const createdMeasureTerm = new MeasureTerm();
    this.addFieldValue('term', createdMeasureTerm);
    return createdMeasureTerm;
  }

  /** The first MeasureTerm of `term`. One is added when the list is empty. */
  getTermFirstRep(): MeasureTerm {
    const firstMeasureTerm = this.getTerm()[0];
    return firstMeasureTerm === undefined ? this.addTerm() : firstMeasureTerm;
  }

  /** Additional guidance for implementers (deprecated) (0..1) */
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
 * Defined terms used in the measure documentation
 */
export class MeasureTerm extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'markdown' }],
    },
  ];

  /** What term? (0..1) */
  code?: CodeableConcept;

  /** Meaning of the term (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;

  override fhirType(): string {
    return 'Measure.term';
  }

  /** FHIR JSON for this MeasureTerm, typed as the plain `MeasureTerm` data type. */
  override toJSON(): plainTypes.MeasureTerm {
    return this.serialize() as plainTypes.MeasureTerm;
  }

  /** What term? (0..1) Created when absent. */
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

  /** Meaning of the term (0..1) */
  getDefinition(): string | undefined {
    return this.definition;
  }

  /** Sets `definition`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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
}

modelTypeRegistry.register('MeasureTerm', MeasureTerm, false);

/**
 * Population criteria group
 */
export class MeasureGroup extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
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
      elementName: 'basis',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'basis', typeCode: 'code', allowedCodes: valueSetCodes.FHIRTypes }],
    },
    {
      elementName: 'scoring',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scoring', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'scoringUnit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scoringUnit', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'rateAggregation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rateAggregation', typeCode: 'markdown' }],
    },
    {
      elementName: 'improvementNotation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'improvementNotation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'library',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'library', typeCode: 'canonical' }],
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

  /** Unique id for group in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** Meaning of the group (0..1) */
  code?: CodeableConcept;

  /** Summary description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** process | outcome | structure | patient-reported-outcome | composite (0..*) */
  type?: CodeableConcept[];

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectReference?: Reference;

  /** Population basis (0..1) */
  basis?: valueSetCodes.FHIRTypes;
  /** Id and extensions of the primitive `basis`. */
  _basis?: Element;

  /** proportion | ratio | continuous-variable | cohort (0..1) */
  scoring?: CodeableConcept;

  /** What units? (0..1) */
  scoringUnit?: CodeableConcept;

  /** How is rate aggregation performed for this measure (0..1) */
  rateAggregation?: string;
  /** Id and extensions of the primitive `rateAggregation`. */
  _rateAggregation?: Element;

  /** increase | decrease (0..1) */
  improvementNotation?: CodeableConcept;

  /** Logic used by the measure group (0..*) */
  library?: string[];
  /** Id and extensions of the primitive `library`. */
  _library?: (Element | null)[];

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

  /** Unique id for group in measure (0..1) */
  getLinkId(): string | undefined {
    return this.linkId;
  }

  /** Sets `linkId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLinkId(linkId: string | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** The element carrying the id and extensions of `linkId`. Created when absent. */
  getLinkIdElement(): Element {
    if (this._linkId === undefined) {
      this._linkId = new Element();
    }
    return this._linkId;
  }

  setLinkIdElement(linkIdElement: Element | undefined): this {
    this._linkId = linkIdElement;
    return this;
  }

  /** Meaning of the group (0..1) Created when absent. */
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

  /** Summary description (0..1) */
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

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) Whichever type of `subject[x]` is set. */
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

  /** Population basis (0..1) */
  getBasis(): valueSetCodes.FHIRTypes | undefined {
    return this.basis;
  }

  /** Sets `basis`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setBasis(basis: valueSetCodes.FHIRTypes | undefined): this {
    return this.setFieldValue('basis', basis);
  }

  hasBasis(): boolean {
    return this.hasFieldValue('basis');
  }

  /** The element carrying the id and extensions of `basis`. Created when absent. */
  getBasisElement(): Element {
    if (this._basis === undefined) {
      this._basis = new Element();
    }
    return this._basis;
  }

  setBasisElement(basisElement: Element | undefined): this {
    this._basis = basisElement;
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

  /** What units? (0..1) Created when absent. */
  getScoringUnit(): CodeableConcept {
    if (this.scoringUnit === undefined) {
      this.scoringUnit = new CodeableConcept();
    }
    return this.scoringUnit;
  }

  setScoringUnit(scoringUnit: CodeableConcept | undefined): this {
    return this.setFieldValue('scoringUnit', scoringUnit);
  }

  hasScoringUnit(): boolean {
    return this.hasFieldValue('scoringUnit');
  }

  /** How is rate aggregation performed for this measure (0..1) */
  getRateAggregation(): string | undefined {
    return this.rateAggregation;
  }

  /** Sets `rateAggregation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** increase | decrease (0..1) Created when absent. */
  getImprovementNotation(): CodeableConcept {
    if (this.improvementNotation === undefined) {
      this.improvementNotation = new CodeableConcept();
    }
    return this.improvementNotation;
  }

  setImprovementNotation(improvementNotation: CodeableConcept | undefined): this {
    return this.setFieldValue('improvementNotation', improvementNotation);
  }

  hasImprovementNotation(): boolean {
    return this.hasFieldValue('improvementNotation');
  }

  /** Logic used by the measure group (0..*) Never undefined; an empty list is created when absent. */
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
      elementName: 'linkId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'criteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'criteria', typeCode: 'Expression' }],
    },
    {
      elementName: 'groupDefinition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'groupDefinition', typeCode: 'Reference', targetResourceTypes: ['Group'] },
      ],
    },
    {
      elementName: 'inputPopulationId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'inputPopulationId', typeCode: 'string' }],
    },
    {
      elementName: 'aggregateMethod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'aggregateMethod', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Unique id for population in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;

  /** The human readable description of this population criteria (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The criteria that defines this population (0..1) */
  criteria?: Expression;

  /** A group resource that defines this population (0..1) */
  groupDefinition?: Reference;

  /** Which population (0..1) */
  inputPopulationId?: string;
  /** Id and extensions of the primitive `inputPopulationId`. */
  _inputPopulationId?: Element;

  /** Aggregation method for a measure score (e.g. sum, average, median, minimum, maximum, count) (0..1) */
  aggregateMethod?: CodeableConcept;

  override fhirType(): string {
    return 'Measure.group.population';
  }

  /** FHIR JSON for this MeasureGroupPopulation, typed as the plain `MeasurePopulation` data type. */
  override toJSON(): plainTypes.MeasurePopulation {
    return this.serialize() as plainTypes.MeasurePopulation;
  }

  /** Unique id for population in measure (0..1) */
  getLinkId(): string | undefined {
    return this.linkId;
  }

  /** Sets `linkId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLinkId(linkId: string | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** The element carrying the id and extensions of `linkId`. Created when absent. */
  getLinkIdElement(): Element {
    if (this._linkId === undefined) {
      this._linkId = new Element();
    }
    return this._linkId;
  }

  setLinkIdElement(linkIdElement: Element | undefined): this {
    this._linkId = linkIdElement;
    return this;
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

  /** The human readable description of this population criteria (0..1) */
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

  /** The criteria that defines this population (0..1) Created when absent. */
  getCriteria(): Expression {
    if (this.criteria === undefined) {
      this.criteria = new Expression();
    }
    return this.criteria;
  }

  setCriteria(criteria: Expression | undefined): this {
    return this.setFieldValue('criteria', criteria);
  }

  hasCriteria(): boolean {
    return this.hasFieldValue('criteria');
  }

  /** A group resource that defines this population (0..1) Created when absent. */
  getGroupDefinition(): Reference {
    if (this.groupDefinition === undefined) {
      this.groupDefinition = new Reference();
    }
    return this.groupDefinition;
  }

  setGroupDefinition(groupDefinition: Reference | undefined): this {
    return this.setFieldValue('groupDefinition', groupDefinition);
  }

  hasGroupDefinition(): boolean {
    return this.hasFieldValue('groupDefinition');
  }

  /** Which population (0..1) */
  getInputPopulationId(): string | undefined {
    return this.inputPopulationId;
  }

  /** Sets `inputPopulationId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setInputPopulationId(inputPopulationId: string | undefined): this {
    return this.setFieldValue('inputPopulationId', inputPopulationId);
  }

  hasInputPopulationId(): boolean {
    return this.hasFieldValue('inputPopulationId');
  }

  /** The element carrying the id and extensions of `inputPopulationId`. Created when absent. */
  getInputPopulationIdElement(): Element {
    if (this._inputPopulationId === undefined) {
      this._inputPopulationId = new Element();
    }
    return this._inputPopulationId;
  }

  setInputPopulationIdElement(inputPopulationIdElement: Element | undefined): this {
    this._inputPopulationId = inputPopulationIdElement;
    return this;
  }

  /** Aggregation method for a measure score (e.g. sum, average, median, minimum, maximum, count) (0..1) Created when absent. */
  getAggregateMethod(): CodeableConcept {
    if (this.aggregateMethod === undefined) {
      this.aggregateMethod = new CodeableConcept();
    }
    return this.aggregateMethod;
  }

  setAggregateMethod(aggregateMethod: CodeableConcept | undefined): this {
    return this.setFieldValue('aggregateMethod', aggregateMethod);
  }

  hasAggregateMethod(): boolean {
    return this.hasFieldValue('aggregateMethod');
  }
}

modelTypeRegistry.register('MeasureGroupPopulation', MeasureGroupPopulation, false);

/**
 * Stratifier criteria for the measure
 */
export class MeasureGroupStratifier extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'criteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'criteria', typeCode: 'Expression' }],
    },
    {
      elementName: 'groupDefinition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'groupDefinition', typeCode: 'Reference', targetResourceTypes: ['Group'] },
      ],
    },
    {
      elementName: 'component',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'component', typeCode: 'MeasureGroupStratifierComponent' }],
    },
  ];

  /** Unique id for stratifier in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** Meaning of the stratifier (0..1) */
  code?: CodeableConcept;

  /** The human readable description of this stratifier (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** How the measure should be stratified (0..1) */
  criteria?: Expression;

  /** A group resource that defines this population (0..1) */
  groupDefinition?: Reference;

  /** Stratifier criteria component for the measure (0..*) */
  component?: MeasureGroupStratifierComponent[];

  override fhirType(): string {
    return 'Measure.group.stratifier';
  }

  /** FHIR JSON for this MeasureGroupStratifier, typed as the plain `MeasureStratifier` data type. */
  override toJSON(): plainTypes.MeasureStratifier {
    return this.serialize() as plainTypes.MeasureStratifier;
  }

  /** Unique id for stratifier in measure (0..1) */
  getLinkId(): string | undefined {
    return this.linkId;
  }

  /** Sets `linkId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLinkId(linkId: string | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** The element carrying the id and extensions of `linkId`. Created when absent. */
  getLinkIdElement(): Element {
    if (this._linkId === undefined) {
      this._linkId = new Element();
    }
    return this._linkId;
  }

  setLinkIdElement(linkIdElement: Element | undefined): this {
    this._linkId = linkIdElement;
    return this;
  }

  /** Meaning of the stratifier (0..1) Created when absent. */
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

  /** The human readable description of this stratifier (0..1) */
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

  /** How the measure should be stratified (0..1) Created when absent. */
  getCriteria(): Expression {
    if (this.criteria === undefined) {
      this.criteria = new Expression();
    }
    return this.criteria;
  }

  setCriteria(criteria: Expression | undefined): this {
    return this.setFieldValue('criteria', criteria);
  }

  hasCriteria(): boolean {
    return this.hasFieldValue('criteria');
  }

  /** A group resource that defines this population (0..1) Created when absent. */
  getGroupDefinition(): Reference {
    if (this.groupDefinition === undefined) {
      this.groupDefinition = new Reference();
    }
    return this.groupDefinition;
  }

  setGroupDefinition(groupDefinition: Reference | undefined): this {
    return this.setFieldValue('groupDefinition', groupDefinition);
  }

  hasGroupDefinition(): boolean {
    return this.hasFieldValue('groupDefinition');
  }

  /** Stratifier criteria component for the measure (0..*) Never undefined; an empty list is created when absent. */
  getComponent(): MeasureGroupStratifierComponent[] {
    if (this.component === undefined) {
      this.component = [];
    }
    return this.component;
  }

  setComponent(component: MeasureGroupStratifierComponent[] | undefined): this {
    return this.setFieldValue('component', component);
  }

  hasComponent(): boolean {
    return this.hasFieldValue('component');
  }

  /** Appends a new, empty MeasureGroupStratifierComponent to `component` and returns it so it can be filled in. */
  addComponent(): MeasureGroupStratifierComponent;
  /** Appends the given MeasureGroupStratifierComponent to `component` and returns this object for chaining. */
  addComponent(measureGroupStratifierComponent: MeasureGroupStratifierComponent): this;
  addComponent(
    measureGroupStratifierComponent?: MeasureGroupStratifierComponent
  ): MeasureGroupStratifierComponent | this {
    if (measureGroupStratifierComponent !== undefined) {
      return this.addFieldValue('component', measureGroupStratifierComponent);
    }
    const createdMeasureGroupStratifierComponent = new MeasureGroupStratifierComponent();
    this.addFieldValue('component', createdMeasureGroupStratifierComponent);
    return createdMeasureGroupStratifierComponent;
  }

  /** The first MeasureGroupStratifierComponent of `component`. One is added when the list is empty. */
  getComponentFirstRep(): MeasureGroupStratifierComponent {
    const firstMeasureGroupStratifierComponent = this.getComponent()[0];
    return firstMeasureGroupStratifierComponent === undefined
      ? this.addComponent()
      : firstMeasureGroupStratifierComponent;
  }
}

modelTypeRegistry.register('MeasureGroupStratifier', MeasureGroupStratifier, false);

/**
 * Stratifier criteria component for the measure
 */
export class MeasureGroupStratifierComponent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'criteria',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'criteria', typeCode: 'Expression' }],
    },
    {
      elementName: 'groupDefinition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'groupDefinition', typeCode: 'Reference', targetResourceTypes: ['Group'] },
      ],
    },
  ];

  /** Unique id for stratifier component in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** Meaning of the stratifier component (0..1) */
  code?: CodeableConcept;

  /** The human readable description of this stratifier component (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Component of how the measure should be stratified (0..1) */
  criteria?: Expression;

  /** A group resource that defines this population (0..1) */
  groupDefinition?: Reference;

  override fhirType(): string {
    return 'Measure.group.stratifier.component';
  }

  /** FHIR JSON for this MeasureGroupStratifierComponent, typed as the plain `MeasureComponent` data type. */
  override toJSON(): plainTypes.MeasureComponent {
    return this.serialize() as plainTypes.MeasureComponent;
  }

  /** Unique id for stratifier component in measure (0..1) */
  getLinkId(): string | undefined {
    return this.linkId;
  }

  /** Sets `linkId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLinkId(linkId: string | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** The element carrying the id and extensions of `linkId`. Created when absent. */
  getLinkIdElement(): Element {
    if (this._linkId === undefined) {
      this._linkId = new Element();
    }
    return this._linkId;
  }

  setLinkIdElement(linkIdElement: Element | undefined): this {
    this._linkId = linkIdElement;
    return this;
  }

  /** Meaning of the stratifier component (0..1) Created when absent. */
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

  /** The human readable description of this stratifier component (0..1) */
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

  /** Component of how the measure should be stratified (0..1) Created when absent. */
  getCriteria(): Expression {
    if (this.criteria === undefined) {
      this.criteria = new Expression();
    }
    return this.criteria;
  }

  setCriteria(criteria: Expression | undefined): this {
    return this.setFieldValue('criteria', criteria);
  }

  hasCriteria(): boolean {
    return this.hasFieldValue('criteria');
  }

  /** A group resource that defines this population (0..1) Created when absent. */
  getGroupDefinition(): Reference {
    if (this.groupDefinition === undefined) {
      this.groupDefinition = new Reference();
    }
    return this.groupDefinition;
  }

  setGroupDefinition(groupDefinition: Reference | undefined): this {
    return this.setFieldValue('groupDefinition', groupDefinition);
  }

  hasGroupDefinition(): boolean {
    return this.hasFieldValue('groupDefinition');
  }
}

modelTypeRegistry.register(
  'MeasureGroupStratifierComponent',
  MeasureGroupStratifierComponent,
  false
);

/**
 * What other data should be reported with the measure
 */
export class MeasureSupplementalData extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'usage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'usage', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'criteria',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'criteria', typeCode: 'Expression' }],
    },
  ];

  /** Unique id for supplementalData in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** Meaning of the supplemental data (0..1) */
  code?: CodeableConcept;

  /** supplemental-data | risk-adjustment-factor (0..*) */
  usage?: CodeableConcept[];

  /** The human readable description of this supplemental data (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Expression describing additional data to be reported (1..1) */
  criteria?: Expression;

  override fhirType(): string {
    return 'Measure.supplementalData';
  }

  /** FHIR JSON for this MeasureSupplementalData, typed as the plain `MeasureSupplementalData` data type. */
  override toJSON(): plainTypes.MeasureSupplementalData {
    return this.serialize() as plainTypes.MeasureSupplementalData;
  }

  /** Unique id for supplementalData in measure (0..1) */
  getLinkId(): string | undefined {
    return this.linkId;
  }

  /** Sets `linkId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLinkId(linkId: string | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** The element carrying the id and extensions of `linkId`. Created when absent. */
  getLinkIdElement(): Element {
    if (this._linkId === undefined) {
      this._linkId = new Element();
    }
    return this._linkId;
  }

  setLinkIdElement(linkIdElement: Element | undefined): this {
    this._linkId = linkIdElement;
    return this;
  }

  /** Meaning of the supplemental data (0..1) Created when absent. */
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

  /** The human readable description of this supplemental data (0..1) */
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

  /** Expression describing additional data to be reported (1..1) Created when absent. */
  getCriteria(): Expression {
    if (this.criteria === undefined) {
      this.criteria = new Expression();
    }
    return this.criteria;
  }

  setCriteria(criteria: Expression | undefined): this {
    return this.setFieldValue('criteria', criteria);
  }

  hasCriteria(): boolean {
    return this.hasFieldValue('criteria');
  }
}

modelTypeRegistry.register('MeasureSupplementalData', MeasureSupplementalData, false);
