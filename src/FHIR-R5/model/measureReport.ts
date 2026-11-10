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
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export class MeasureReport extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.MeasureReportStatus },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.MeasureReportType }],
    },
    {
      elementName: 'dataUpdateType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'dataUpdateType',
          typeCode: 'code',
          allowedCodes: valueSetCodes.SubmitDataUpdateType,
        },
      ],
    },
    {
      elementName: 'measure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'measure', typeCode: 'canonical' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Group',
            'HealthcareService',
            'Location',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
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
      elementName: 'reporter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'reporter',
          typeCode: 'Reference',
          targetResourceTypes: ['Group', 'Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'reportingVendor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'reportingVendor',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
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
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'inputParameters',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'inputParameters', typeCode: 'Reference', targetResourceTypes: ['Parameters'] },
      ],
    },
    {
      elementName: 'scoring',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scoring', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'improvementNotation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'improvementNotation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'group',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'group', typeCode: 'MeasureReportGroup' }],
    },
    {
      elementName: 'supplementalData',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supplementalData', typeCode: 'Reference' }],
    },
    {
      elementName: 'evaluatedResource',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'evaluatedResource', typeCode: 'Reference' }],
    },
  ];

  readonly resourceType = 'MeasureReport';

  /** Additional identifier for the MeasureReport (0..*) */
  identifier?: Identifier[];

  /** complete | pending | error (1..1) */
  status?: valueSetCodes.MeasureReportStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** individual | subject-list | summary | data-exchange (1..1) */
  type?: valueSetCodes.MeasureReportType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** incremental | snapshot (0..1) */
  dataUpdateType?: valueSetCodes.SubmitDataUpdateType;
  /** Id and extensions of the primitive `dataUpdateType`. */
  _dataUpdateType?: Element;

  /** What measure was calculated (0..1) */
  measure?: string;
  /** Id and extensions of the primitive `measure`. */
  _measure?: Element;

  /** What individual(s) the report is for (0..1) */
  subject?: Reference;

  /** When the measure was calculated (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who is reporting the data (0..1) */
  reporter?: Reference;

  /** What vendor prepared the data (0..1) */
  reportingVendor?: Reference;

  /** Where the reported data is from (0..1) */
  location?: Reference;

  /** What period the report covers (1..1) */
  period?: Period;

  /** What parameters were provided to the report (0..1) */
  inputParameters?: Reference;

  /** What scoring method (e.g. proportion, ratio, continuous-variable) (0..1) */
  scoring?: CodeableConcept;

  /** increase | decrease (0..1) */
  improvementNotation?: CodeableConcept;

  /** Measure results for each group (0..*) */
  group?: MeasureReportGroup[];

  /** Additional information collected for the report (0..*) */
  supplementalData?: Reference[];

  /** What data was used to calculate the measure score (0..*) */
  evaluatedResource?: Reference[];

  override fhirType(): string {
    return 'MeasureReport';
  }

  /** FHIR JSON for this MeasureReport, typed as the plain `MeasureReport` data type. */
  override toJSON(): plainTypes.MeasureReport {
    return this.serialize() as plainTypes.MeasureReport;
  }

  /** Additional identifier for the MeasureReport (0..*) Never undefined; an empty list is created when absent. */
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

  /** complete | pending | error (1..1) */
  getStatus(): valueSetCodes.MeasureReportStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MeasureReportStatus | undefined): this {
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

  /** individual | subject-list | summary | data-exchange (1..1) */
  getType(): valueSetCodes.MeasureReportType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.MeasureReportType | undefined): this {
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

  /** incremental | snapshot (0..1) */
  getDataUpdateType(): valueSetCodes.SubmitDataUpdateType | undefined {
    return this.dataUpdateType;
  }

  /** Sets `dataUpdateType`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDataUpdateType(dataUpdateType: valueSetCodes.SubmitDataUpdateType | undefined): this {
    return this.setFieldValue('dataUpdateType', dataUpdateType);
  }

  hasDataUpdateType(): boolean {
    return this.hasFieldValue('dataUpdateType');
  }

  /** The element carrying the id and extensions of `dataUpdateType`. Created when absent. */
  getDataUpdateTypeElement(): Element {
    if (this._dataUpdateType === undefined) {
      this._dataUpdateType = new Element();
    }
    return this._dataUpdateType;
  }

  setDataUpdateTypeElement(dataUpdateTypeElement: Element | undefined): this {
    this._dataUpdateType = dataUpdateTypeElement;
    return this;
  }

  /** What measure was calculated (0..1) */
  getMeasure(): string | undefined {
    return this.measure;
  }

  /** Sets `measure`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setMeasure(measure: string | undefined): this {
    return this.setFieldValue('measure', measure);
  }

  hasMeasure(): boolean {
    return this.hasFieldValue('measure');
  }

  /** The element carrying the id and extensions of `measure`. Created when absent. */
  getMeasureElement(): Element {
    if (this._measure === undefined) {
      this._measure = new Element();
    }
    return this._measure;
  }

  setMeasureElement(measureElement: Element | undefined): this {
    this._measure = measureElement;
    return this;
  }

  /** What individual(s) the report is for (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** When the measure was calculated (0..1) */
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

  /** Who is reporting the data (0..1) Created when absent. */
  getReporter(): Reference {
    if (this.reporter === undefined) {
      this.reporter = new Reference();
    }
    return this.reporter;
  }

  setReporter(reporter: Reference | undefined): this {
    return this.setFieldValue('reporter', reporter);
  }

  hasReporter(): boolean {
    return this.hasFieldValue('reporter');
  }

  /** What vendor prepared the data (0..1) Created when absent. */
  getReportingVendor(): Reference {
    if (this.reportingVendor === undefined) {
      this.reportingVendor = new Reference();
    }
    return this.reportingVendor;
  }

  setReportingVendor(reportingVendor: Reference | undefined): this {
    return this.setFieldValue('reportingVendor', reportingVendor);
  }

  hasReportingVendor(): boolean {
    return this.hasFieldValue('reportingVendor');
  }

  /** Where the reported data is from (0..1) Created when absent. */
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

  /** What period the report covers (1..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** What parameters were provided to the report (0..1) Created when absent. */
  getInputParameters(): Reference {
    if (this.inputParameters === undefined) {
      this.inputParameters = new Reference();
    }
    return this.inputParameters;
  }

  setInputParameters(inputParameters: Reference | undefined): this {
    return this.setFieldValue('inputParameters', inputParameters);
  }

  hasInputParameters(): boolean {
    return this.hasFieldValue('inputParameters');
  }

  /** What scoring method (e.g. proportion, ratio, continuous-variable) (0..1) Created when absent. */
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

  /** Measure results for each group (0..*) Never undefined; an empty list is created when absent. */
  getGroup(): MeasureReportGroup[] {
    if (this.group === undefined) {
      this.group = [];
    }
    return this.group;
  }

  setGroup(group: MeasureReportGroup[] | undefined): this {
    return this.setFieldValue('group', group);
  }

  hasGroup(): boolean {
    return this.hasFieldValue('group');
  }

  /** Appends a new, empty MeasureReportGroup to `group` and returns it so it can be filled in. */
  addGroup(): MeasureReportGroup;
  /** Appends the given MeasureReportGroup to `group` and returns this object for chaining. */
  addGroup(measureReportGroup: MeasureReportGroup): this;
  addGroup(measureReportGroup?: MeasureReportGroup): MeasureReportGroup | this {
    if (measureReportGroup !== undefined) {
      return this.addFieldValue('group', measureReportGroup);
    }
    const createdMeasureReportGroup = new MeasureReportGroup();
    this.addFieldValue('group', createdMeasureReportGroup);
    return createdMeasureReportGroup;
  }

  /** The first MeasureReportGroup of `group`. One is added when the list is empty. */
  getGroupFirstRep(): MeasureReportGroup {
    const firstMeasureReportGroup = this.getGroup()[0];
    return firstMeasureReportGroup === undefined ? this.addGroup() : firstMeasureReportGroup;
  }

  /** Additional information collected for the report (0..*) Never undefined; an empty list is created when absent. */
  getSupplementalData(): Reference[] {
    if (this.supplementalData === undefined) {
      this.supplementalData = [];
    }
    return this.supplementalData;
  }

  setSupplementalData(supplementalData: Reference[] | undefined): this {
    return this.setFieldValue('supplementalData', supplementalData);
  }

  hasSupplementalData(): boolean {
    return this.hasFieldValue('supplementalData');
  }

  /** Appends a new, empty Reference to `supplementalData` and returns it so it can be filled in. */
  addSupplementalData(): Reference;
  /** Appends the given Reference to `supplementalData` and returns this object for chaining. */
  addSupplementalData(reference: Reference): this;
  addSupplementalData(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supplementalData', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supplementalData', createdReference);
    return createdReference;
  }

  /** The first Reference of `supplementalData`. One is added when the list is empty. */
  getSupplementalDataFirstRep(): Reference {
    const firstReference = this.getSupplementalData()[0];
    return firstReference === undefined ? this.addSupplementalData() : firstReference;
  }

  /** What data was used to calculate the measure score (0..*) Never undefined; an empty list is created when absent. */
  getEvaluatedResource(): Reference[] {
    if (this.evaluatedResource === undefined) {
      this.evaluatedResource = [];
    }
    return this.evaluatedResource;
  }

  setEvaluatedResource(evaluatedResource: Reference[] | undefined): this {
    return this.setFieldValue('evaluatedResource', evaluatedResource);
  }

  hasEvaluatedResource(): boolean {
    return this.hasFieldValue('evaluatedResource');
  }

  /** Appends a new, empty Reference to `evaluatedResource` and returns it so it can be filled in. */
  addEvaluatedResource(): Reference;
  /** Appends the given Reference to `evaluatedResource` and returns this object for chaining. */
  addEvaluatedResource(reference: Reference): this;
  addEvaluatedResource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('evaluatedResource', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('evaluatedResource', createdReference);
    return createdReference;
  }

  /** The first Reference of `evaluatedResource`. One is added when the list is empty. */
  getEvaluatedResourceFirstRep(): Reference {
    const firstReference = this.getEvaluatedResource()[0];
    return firstReference === undefined ? this.addEvaluatedResource() : firstReference;
  }
}

modelTypeRegistry.register('MeasureReport', MeasureReport, true);

/** True when the value is a MeasureReport model instance. */
export function isMeasureReport(candidate: unknown): candidate is MeasureReport {
  return candidate instanceof MeasureReport;
}

/**
 * Measure results for each group
 */
export class MeasureReportGroup extends BackboneElement {
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
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Group',
            'HealthcareService',
            'Location',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'population',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'population', typeCode: 'MeasureReportGroupPopulation' }],
    },
    {
      elementName: 'measureScore',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'measureScoreQuantity', typeCode: 'Quantity' },
        { jsonKey: 'measureScoreDateTime', typeCode: 'dateTime' },
        { jsonKey: 'measureScoreCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'measureScorePeriod', typeCode: 'Period' },
        { jsonKey: 'measureScoreRange', typeCode: 'Range' },
        { jsonKey: 'measureScoreDuration', typeCode: 'Duration' },
      ],
    },
    {
      elementName: 'stratifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'stratifier', typeCode: 'MeasureReportGroupStratifier' }],
    },
  ];

  /** Pointer to specific group from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** Meaning of the group (0..1) */
  code?: CodeableConcept;

  /** What individual(s) the report is for (0..1) */
  subject?: Reference;

  /** The populations in the group (0..*) */
  population?: MeasureReportGroupPopulation[];

  /** What score this group achieved (0..1) */
  measureScoreQuantity?: Quantity;
  /** What score this group achieved (0..1) */
  measureScoreDateTime?: string;
  /** Id and extensions of the primitive `measureScoreDateTime`. */
  _measureScoreDateTime?: Element;
  /** What score this group achieved (0..1) */
  measureScoreCodeableConcept?: CodeableConcept;
  /** What score this group achieved (0..1) */
  measureScorePeriod?: Period;
  /** What score this group achieved (0..1) */
  measureScoreRange?: Range;
  /** What score this group achieved (0..1) */
  measureScoreDuration?: Duration;

  /** Stratification results (0..*) */
  stratifier?: MeasureReportGroupStratifier[];

  override fhirType(): string {
    return 'MeasureReport.group';
  }

  /** FHIR JSON for this MeasureReportGroup, typed as the plain `MeasureReportGroup` data type. */
  override toJSON(): plainTypes.MeasureReportGroup {
    return this.serialize() as plainTypes.MeasureReportGroup;
  }

  /** Pointer to specific group from Measure (0..1) */
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

  /** What individual(s) the report is for (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** The populations in the group (0..*) Never undefined; an empty list is created when absent. */
  getPopulation(): MeasureReportGroupPopulation[] {
    if (this.population === undefined) {
      this.population = [];
    }
    return this.population;
  }

  setPopulation(population: MeasureReportGroupPopulation[] | undefined): this {
    return this.setFieldValue('population', population);
  }

  hasPopulation(): boolean {
    return this.hasFieldValue('population');
  }

  /** Appends a new, empty MeasureReportGroupPopulation to `population` and returns it so it can be filled in. */
  addPopulation(): MeasureReportGroupPopulation;
  /** Appends the given MeasureReportGroupPopulation to `population` and returns this object for chaining. */
  addPopulation(measureReportGroupPopulation: MeasureReportGroupPopulation): this;
  addPopulation(
    measureReportGroupPopulation?: MeasureReportGroupPopulation
  ): MeasureReportGroupPopulation | this {
    if (measureReportGroupPopulation !== undefined) {
      return this.addFieldValue('population', measureReportGroupPopulation);
    }
    const createdMeasureReportGroupPopulation = new MeasureReportGroupPopulation();
    this.addFieldValue('population', createdMeasureReportGroupPopulation);
    return createdMeasureReportGroupPopulation;
  }

  /** The first MeasureReportGroupPopulation of `population`. One is added when the list is empty. */
  getPopulationFirstRep(): MeasureReportGroupPopulation {
    const firstMeasureReportGroupPopulation = this.getPopulation()[0];
    return firstMeasureReportGroupPopulation === undefined
      ? this.addPopulation()
      : firstMeasureReportGroupPopulation;
  }

  /** What score this group achieved (0..1) Whichever type of `measureScore[x]` is set. */
  getMeasureScore(): Quantity | string | CodeableConcept | Period | Range | Duration | undefined {
    return this.getChoiceValue<Quantity | string | CodeableConcept | Period | Range | Duration>(
      'measureScore'
    );
  }

  /** True when any type of `measureScore[x]` is set. */
  hasMeasureScore(): boolean {
    return this.hasChoiceValue('measureScore');
  }

  getMeasureScoreQuantity(): Quantity | undefined {
    return this.measureScoreQuantity;
  }

  /** Sets `measureScore[x]` as Quantity and clears every other type of it. */
  setMeasureScoreQuantity(measureScoreQuantity: Quantity | undefined): this {
    return this.setFieldValue('measureScoreQuantity', measureScoreQuantity);
  }

  hasMeasureScoreQuantity(): boolean {
    return this.hasFieldValue('measureScoreQuantity');
  }

  getMeasureScoreDateTime(): string | undefined {
    return this.measureScoreDateTime;
  }

  /** Sets `measureScore[x]` as dateTime and clears every other type of it. */
  setMeasureScoreDateTime(measureScoreDateTime: string | undefined): this {
    return this.setFieldValue('measureScoreDateTime', measureScoreDateTime);
  }

  hasMeasureScoreDateTime(): boolean {
    return this.hasFieldValue('measureScoreDateTime');
  }

  getMeasureScoreCodeableConcept(): CodeableConcept | undefined {
    return this.measureScoreCodeableConcept;
  }

  /** Sets `measureScore[x]` as CodeableConcept and clears every other type of it. */
  setMeasureScoreCodeableConcept(measureScoreCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('measureScoreCodeableConcept', measureScoreCodeableConcept);
  }

  hasMeasureScoreCodeableConcept(): boolean {
    return this.hasFieldValue('measureScoreCodeableConcept');
  }

  getMeasureScorePeriod(): Period | undefined {
    return this.measureScorePeriod;
  }

  /** Sets `measureScore[x]` as Period and clears every other type of it. */
  setMeasureScorePeriod(measureScorePeriod: Period | undefined): this {
    return this.setFieldValue('measureScorePeriod', measureScorePeriod);
  }

  hasMeasureScorePeriod(): boolean {
    return this.hasFieldValue('measureScorePeriod');
  }

  getMeasureScoreRange(): Range | undefined {
    return this.measureScoreRange;
  }

  /** Sets `measureScore[x]` as Range and clears every other type of it. */
  setMeasureScoreRange(measureScoreRange: Range | undefined): this {
    return this.setFieldValue('measureScoreRange', measureScoreRange);
  }

  hasMeasureScoreRange(): boolean {
    return this.hasFieldValue('measureScoreRange');
  }

  getMeasureScoreDuration(): Duration | undefined {
    return this.measureScoreDuration;
  }

  /** Sets `measureScore[x]` as Duration and clears every other type of it. */
  setMeasureScoreDuration(measureScoreDuration: Duration | undefined): this {
    return this.setFieldValue('measureScoreDuration', measureScoreDuration);
  }

  hasMeasureScoreDuration(): boolean {
    return this.hasFieldValue('measureScoreDuration');
  }

  /** Stratification results (0..*) Never undefined; an empty list is created when absent. */
  getStratifier(): MeasureReportGroupStratifier[] {
    if (this.stratifier === undefined) {
      this.stratifier = [];
    }
    return this.stratifier;
  }

  setStratifier(stratifier: MeasureReportGroupStratifier[] | undefined): this {
    return this.setFieldValue('stratifier', stratifier);
  }

  hasStratifier(): boolean {
    return this.hasFieldValue('stratifier');
  }

  /** Appends a new, empty MeasureReportGroupStratifier to `stratifier` and returns it so it can be filled in. */
  addStratifier(): MeasureReportGroupStratifier;
  /** Appends the given MeasureReportGroupStratifier to `stratifier` and returns this object for chaining. */
  addStratifier(measureReportGroupStratifier: MeasureReportGroupStratifier): this;
  addStratifier(
    measureReportGroupStratifier?: MeasureReportGroupStratifier
  ): MeasureReportGroupStratifier | this {
    if (measureReportGroupStratifier !== undefined) {
      return this.addFieldValue('stratifier', measureReportGroupStratifier);
    }
    const createdMeasureReportGroupStratifier = new MeasureReportGroupStratifier();
    this.addFieldValue('stratifier', createdMeasureReportGroupStratifier);
    return createdMeasureReportGroupStratifier;
  }

  /** The first MeasureReportGroupStratifier of `stratifier`. One is added when the list is empty. */
  getStratifierFirstRep(): MeasureReportGroupStratifier {
    const firstMeasureReportGroupStratifier = this.getStratifier()[0];
    return firstMeasureReportGroupStratifier === undefined
      ? this.addStratifier()
      : firstMeasureReportGroupStratifier;
  }
}

modelTypeRegistry.register('MeasureReportGroup', MeasureReportGroup, false);

/**
 * The populations in the group
 */
export class MeasureReportGroupPopulation extends BackboneElement {
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
      elementName: 'count',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'count', typeCode: 'integer' }],
    },
    {
      elementName: 'subjectResults',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subjectResults', typeCode: 'Reference', targetResourceTypes: ['List'] }],
    },
    {
      elementName: 'subjectReport',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'subjectReport', typeCode: 'Reference', targetResourceTypes: ['MeasureReport'] },
      ],
    },
    {
      elementName: 'subjects',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subjects', typeCode: 'Reference', targetResourceTypes: ['Group'] }],
    },
  ];

  /** Pointer to specific population from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;

  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  /** For subject-list reports, the subject results in this population (0..1) */
  subjectResults?: Reference;

  /** For subject-list reports, a subject result in this population (0..*) */
  subjectReport?: Reference[];

  /** What individual(s) in the population (0..1) */
  subjects?: Reference;

  override fhirType(): string {
    return 'MeasureReport.group.population';
  }

  /** FHIR JSON for this MeasureReportGroupPopulation, typed as the plain `MeasureReportPopulation` data type. */
  override toJSON(): plainTypes.MeasureReportPopulation {
    return this.serialize() as plainTypes.MeasureReportPopulation;
  }

  /** Pointer to specific population from Measure (0..1) */
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

  /** Size of the population (0..1) */
  getCount(): number | undefined {
    return this.count;
  }

  /** Sets `count`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setCount(count: number | undefined): this {
    return this.setFieldValue('count', count);
  }

  hasCount(): boolean {
    return this.hasFieldValue('count');
  }

  /** The element carrying the id and extensions of `count`. Created when absent. */
  getCountElement(): Element {
    if (this._count === undefined) {
      this._count = new Element();
    }
    return this._count;
  }

  setCountElement(countElement: Element | undefined): this {
    this._count = countElement;
    return this;
  }

  /** For subject-list reports, the subject results in this population (0..1) Created when absent. */
  getSubjectResults(): Reference {
    if (this.subjectResults === undefined) {
      this.subjectResults = new Reference();
    }
    return this.subjectResults;
  }

  setSubjectResults(subjectResults: Reference | undefined): this {
    return this.setFieldValue('subjectResults', subjectResults);
  }

  hasSubjectResults(): boolean {
    return this.hasFieldValue('subjectResults');
  }

  /** For subject-list reports, a subject result in this population (0..*) Never undefined; an empty list is created when absent. */
  getSubjectReport(): Reference[] {
    if (this.subjectReport === undefined) {
      this.subjectReport = [];
    }
    return this.subjectReport;
  }

  setSubjectReport(subjectReport: Reference[] | undefined): this {
    return this.setFieldValue('subjectReport', subjectReport);
  }

  hasSubjectReport(): boolean {
    return this.hasFieldValue('subjectReport');
  }

  /** Appends a new, empty Reference to `subjectReport` and returns it so it can be filled in. */
  addSubjectReport(): Reference;
  /** Appends the given Reference to `subjectReport` and returns this object for chaining. */
  addSubjectReport(reference: Reference): this;
  addSubjectReport(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subjectReport', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subjectReport', createdReference);
    return createdReference;
  }

  /** The first Reference of `subjectReport`. One is added when the list is empty. */
  getSubjectReportFirstRep(): Reference {
    const firstReference = this.getSubjectReport()[0];
    return firstReference === undefined ? this.addSubjectReport() : firstReference;
  }

  /** What individual(s) in the population (0..1) Created when absent. */
  getSubjects(): Reference {
    if (this.subjects === undefined) {
      this.subjects = new Reference();
    }
    return this.subjects;
  }

  setSubjects(subjects: Reference | undefined): this {
    return this.setFieldValue('subjects', subjects);
  }

  hasSubjects(): boolean {
    return this.hasFieldValue('subjects');
  }
}

modelTypeRegistry.register('MeasureReportGroupPopulation', MeasureReportGroupPopulation, false);

/**
 * Stratification results
 */
export class MeasureReportGroupStratifier extends BackboneElement {
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
      elementName: 'stratum',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'stratum', typeCode: 'MeasureReportGroupStratifierStratum' }],
    },
  ];

  /** Pointer to specific stratifier from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** What stratifier of the group (0..1) */
  code?: CodeableConcept;

  /** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components (0..*) */
  stratum?: MeasureReportGroupStratifierStratum[];

  override fhirType(): string {
    return 'MeasureReport.group.stratifier';
  }

  /** FHIR JSON for this MeasureReportGroupStratifier, typed as the plain `MeasureReportStratifier` data type. */
  override toJSON(): plainTypes.MeasureReportStratifier {
    return this.serialize() as plainTypes.MeasureReportStratifier;
  }

  /** Pointer to specific stratifier from Measure (0..1) */
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

  /** What stratifier of the group (0..1) Created when absent. */
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

  /** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components (0..*) Never undefined; an empty list is created when absent. */
  getStratum(): MeasureReportGroupStratifierStratum[] {
    if (this.stratum === undefined) {
      this.stratum = [];
    }
    return this.stratum;
  }

  setStratum(stratum: MeasureReportGroupStratifierStratum[] | undefined): this {
    return this.setFieldValue('stratum', stratum);
  }

  hasStratum(): boolean {
    return this.hasFieldValue('stratum');
  }

  /** Appends a new, empty MeasureReportGroupStratifierStratum to `stratum` and returns it so it can be filled in. */
  addStratum(): MeasureReportGroupStratifierStratum;
  /** Appends the given MeasureReportGroupStratifierStratum to `stratum` and returns this object for chaining. */
  addStratum(measureReportGroupStratifierStratum: MeasureReportGroupStratifierStratum): this;
  addStratum(
    measureReportGroupStratifierStratum?: MeasureReportGroupStratifierStratum
  ): MeasureReportGroupStratifierStratum | this {
    if (measureReportGroupStratifierStratum !== undefined) {
      return this.addFieldValue('stratum', measureReportGroupStratifierStratum);
    }
    const createdMeasureReportGroupStratifierStratum = new MeasureReportGroupStratifierStratum();
    this.addFieldValue('stratum', createdMeasureReportGroupStratifierStratum);
    return createdMeasureReportGroupStratifierStratum;
  }

  /** The first MeasureReportGroupStratifierStratum of `stratum`. One is added when the list is empty. */
  getStratumFirstRep(): MeasureReportGroupStratifierStratum {
    const firstMeasureReportGroupStratifierStratum = this.getStratum()[0];
    return firstMeasureReportGroupStratifierStratum === undefined
      ? this.addStratum()
      : firstMeasureReportGroupStratifierStratum;
  }
}

modelTypeRegistry.register('MeasureReportGroupStratifier', MeasureReportGroupStratifier, false);

/**
 * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 */
export class MeasureReportGroupStratifierStratum extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'component',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'component', typeCode: 'MeasureReportGroupStratifierStratumComponent' }],
    },
    {
      elementName: 'population',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'population', typeCode: 'MeasureReportGroupStratifierStratumPopulation' }],
    },
    {
      elementName: 'measureScore',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'measureScoreQuantity', typeCode: 'Quantity' },
        { jsonKey: 'measureScoreDateTime', typeCode: 'dateTime' },
        { jsonKey: 'measureScoreCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'measureScorePeriod', typeCode: 'Period' },
        { jsonKey: 'measureScoreRange', typeCode: 'Range' },
        { jsonKey: 'measureScoreDuration', typeCode: 'Duration' },
      ],
    },
  ];

  /** The stratum value, e.g. male (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** The stratum value, e.g. male (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** The stratum value, e.g. male (0..1) */
  valueQuantity?: Quantity;
  /** The stratum value, e.g. male (0..1) */
  valueRange?: Range;
  /** The stratum value, e.g. male (0..1) */
  valueReference?: Reference;

  /** Stratifier component values (0..*) */
  component?: MeasureReportGroupStratifierStratumComponent[];

  /** Population results in this stratum (0..*) */
  population?: MeasureReportGroupStratifierStratumPopulation[];

  /** What score this stratum achieved (0..1) */
  measureScoreQuantity?: Quantity;
  /** What score this stratum achieved (0..1) */
  measureScoreDateTime?: string;
  /** Id and extensions of the primitive `measureScoreDateTime`. */
  _measureScoreDateTime?: Element;
  /** What score this stratum achieved (0..1) */
  measureScoreCodeableConcept?: CodeableConcept;
  /** What score this stratum achieved (0..1) */
  measureScorePeriod?: Period;
  /** What score this stratum achieved (0..1) */
  measureScoreRange?: Range;
  /** What score this stratum achieved (0..1) */
  measureScoreDuration?: Duration;

  override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum';
  }

  /** FHIR JSON for this MeasureReportGroupStratifierStratum, typed as the plain `MeasureReportStratum` data type. */
  override toJSON(): plainTypes.MeasureReportStratum {
    return this.serialize() as plainTypes.MeasureReportStratum;
  }

  /** The stratum value, e.g. male (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | boolean | Quantity | Range | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | boolean | Quantity | Range | Reference>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }

  /** Stratifier component values (0..*) Never undefined; an empty list is created when absent. */
  getComponent(): MeasureReportGroupStratifierStratumComponent[] {
    if (this.component === undefined) {
      this.component = [];
    }
    return this.component;
  }

  setComponent(component: MeasureReportGroupStratifierStratumComponent[] | undefined): this {
    return this.setFieldValue('component', component);
  }

  hasComponent(): boolean {
    return this.hasFieldValue('component');
  }

  /** Appends a new, empty MeasureReportGroupStratifierStratumComponent to `component` and returns it so it can be filled in. */
  addComponent(): MeasureReportGroupStratifierStratumComponent;
  /** Appends the given MeasureReportGroupStratifierStratumComponent to `component` and returns this object for chaining. */
  addComponent(
    measureReportGroupStratifierStratumComponent: MeasureReportGroupStratifierStratumComponent
  ): this;
  addComponent(
    measureReportGroupStratifierStratumComponent?: MeasureReportGroupStratifierStratumComponent
  ): MeasureReportGroupStratifierStratumComponent | this {
    if (measureReportGroupStratifierStratumComponent !== undefined) {
      return this.addFieldValue('component', measureReportGroupStratifierStratumComponent);
    }
    const createdMeasureReportGroupStratifierStratumComponent =
      new MeasureReportGroupStratifierStratumComponent();
    this.addFieldValue('component', createdMeasureReportGroupStratifierStratumComponent);
    return createdMeasureReportGroupStratifierStratumComponent;
  }

  /** The first MeasureReportGroupStratifierStratumComponent of `component`. One is added when the list is empty. */
  getComponentFirstRep(): MeasureReportGroupStratifierStratumComponent {
    const firstMeasureReportGroupStratifierStratumComponent = this.getComponent()[0];
    return firstMeasureReportGroupStratifierStratumComponent === undefined
      ? this.addComponent()
      : firstMeasureReportGroupStratifierStratumComponent;
  }

  /** Population results in this stratum (0..*) Never undefined; an empty list is created when absent. */
  getPopulation(): MeasureReportGroupStratifierStratumPopulation[] {
    if (this.population === undefined) {
      this.population = [];
    }
    return this.population;
  }

  setPopulation(population: MeasureReportGroupStratifierStratumPopulation[] | undefined): this {
    return this.setFieldValue('population', population);
  }

  hasPopulation(): boolean {
    return this.hasFieldValue('population');
  }

  /** Appends a new, empty MeasureReportGroupStratifierStratumPopulation to `population` and returns it so it can be filled in. */
  addPopulation(): MeasureReportGroupStratifierStratumPopulation;
  /** Appends the given MeasureReportGroupStratifierStratumPopulation to `population` and returns this object for chaining. */
  addPopulation(
    measureReportGroupStratifierStratumPopulation: MeasureReportGroupStratifierStratumPopulation
  ): this;
  addPopulation(
    measureReportGroupStratifierStratumPopulation?: MeasureReportGroupStratifierStratumPopulation
  ): MeasureReportGroupStratifierStratumPopulation | this {
    if (measureReportGroupStratifierStratumPopulation !== undefined) {
      return this.addFieldValue('population', measureReportGroupStratifierStratumPopulation);
    }
    const createdMeasureReportGroupStratifierStratumPopulation =
      new MeasureReportGroupStratifierStratumPopulation();
    this.addFieldValue('population', createdMeasureReportGroupStratifierStratumPopulation);
    return createdMeasureReportGroupStratifierStratumPopulation;
  }

  /** The first MeasureReportGroupStratifierStratumPopulation of `population`. One is added when the list is empty. */
  getPopulationFirstRep(): MeasureReportGroupStratifierStratumPopulation {
    const firstMeasureReportGroupStratifierStratumPopulation = this.getPopulation()[0];
    return firstMeasureReportGroupStratifierStratumPopulation === undefined
      ? this.addPopulation()
      : firstMeasureReportGroupStratifierStratumPopulation;
  }

  /** What score this stratum achieved (0..1) Whichever type of `measureScore[x]` is set. */
  getMeasureScore(): Quantity | string | CodeableConcept | Period | Range | Duration | undefined {
    return this.getChoiceValue<Quantity | string | CodeableConcept | Period | Range | Duration>(
      'measureScore'
    );
  }

  /** True when any type of `measureScore[x]` is set. */
  hasMeasureScore(): boolean {
    return this.hasChoiceValue('measureScore');
  }

  getMeasureScoreQuantity(): Quantity | undefined {
    return this.measureScoreQuantity;
  }

  /** Sets `measureScore[x]` as Quantity and clears every other type of it. */
  setMeasureScoreQuantity(measureScoreQuantity: Quantity | undefined): this {
    return this.setFieldValue('measureScoreQuantity', measureScoreQuantity);
  }

  hasMeasureScoreQuantity(): boolean {
    return this.hasFieldValue('measureScoreQuantity');
  }

  getMeasureScoreDateTime(): string | undefined {
    return this.measureScoreDateTime;
  }

  /** Sets `measureScore[x]` as dateTime and clears every other type of it. */
  setMeasureScoreDateTime(measureScoreDateTime: string | undefined): this {
    return this.setFieldValue('measureScoreDateTime', measureScoreDateTime);
  }

  hasMeasureScoreDateTime(): boolean {
    return this.hasFieldValue('measureScoreDateTime');
  }

  getMeasureScoreCodeableConcept(): CodeableConcept | undefined {
    return this.measureScoreCodeableConcept;
  }

  /** Sets `measureScore[x]` as CodeableConcept and clears every other type of it. */
  setMeasureScoreCodeableConcept(measureScoreCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('measureScoreCodeableConcept', measureScoreCodeableConcept);
  }

  hasMeasureScoreCodeableConcept(): boolean {
    return this.hasFieldValue('measureScoreCodeableConcept');
  }

  getMeasureScorePeriod(): Period | undefined {
    return this.measureScorePeriod;
  }

  /** Sets `measureScore[x]` as Period and clears every other type of it. */
  setMeasureScorePeriod(measureScorePeriod: Period | undefined): this {
    return this.setFieldValue('measureScorePeriod', measureScorePeriod);
  }

  hasMeasureScorePeriod(): boolean {
    return this.hasFieldValue('measureScorePeriod');
  }

  getMeasureScoreRange(): Range | undefined {
    return this.measureScoreRange;
  }

  /** Sets `measureScore[x]` as Range and clears every other type of it. */
  setMeasureScoreRange(measureScoreRange: Range | undefined): this {
    return this.setFieldValue('measureScoreRange', measureScoreRange);
  }

  hasMeasureScoreRange(): boolean {
    return this.hasFieldValue('measureScoreRange');
  }

  getMeasureScoreDuration(): Duration | undefined {
    return this.measureScoreDuration;
  }

  /** Sets `measureScore[x]` as Duration and clears every other type of it. */
  setMeasureScoreDuration(measureScoreDuration: Duration | undefined): this {
    return this.setFieldValue('measureScoreDuration', measureScoreDuration);
  }

  hasMeasureScoreDuration(): boolean {
    return this.hasFieldValue('measureScoreDuration');
  }
}

modelTypeRegistry.register(
  'MeasureReportGroupStratifierStratum',
  MeasureReportGroupStratifierStratum,
  false
);

/**
 * Stratifier component values
 */
export class MeasureReportGroupStratifierStratumComponent extends BackboneElement {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
      ],
    },
  ];

  /** Pointer to specific stratifier component from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** What stratifier component of the group (1..1) */
  code?: CodeableConcept;

  /** The stratum component value, e.g. male (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** The stratum component value, e.g. male (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** The stratum component value, e.g. male (1..1) */
  valueQuantity?: Quantity;
  /** The stratum component value, e.g. male (1..1) */
  valueRange?: Range;
  /** The stratum component value, e.g. male (1..1) */
  valueReference?: Reference;

  override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum.component';
  }

  /** FHIR JSON for this MeasureReportGroupStratifierStratumComponent, typed as the plain `MeasureReportComponent` data type. */
  override toJSON(): plainTypes.MeasureReportComponent {
    return this.serialize() as plainTypes.MeasureReportComponent;
  }

  /** Pointer to specific stratifier component from Measure (0..1) */
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

  /** What stratifier component of the group (1..1) Created when absent. */
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

  /** The stratum component value, e.g. male (1..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | boolean | Quantity | Range | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | boolean | Quantity | Range | Reference>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }
}

modelTypeRegistry.register(
  'MeasureReportGroupStratifierStratumComponent',
  MeasureReportGroupStratifierStratumComponent,
  false
);

/**
 * Population results in this stratum
 */
export class MeasureReportGroupStratifierStratumPopulation extends BackboneElement {
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
      elementName: 'count',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'count', typeCode: 'integer' }],
    },
    {
      elementName: 'subjectResults',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subjectResults', typeCode: 'Reference', targetResourceTypes: ['List'] }],
    },
    {
      elementName: 'subjectReport',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'subjectReport', typeCode: 'Reference', targetResourceTypes: ['MeasureReport'] },
      ],
    },
    {
      elementName: 'subjects',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subjects', typeCode: 'Reference', targetResourceTypes: ['Group'] }],
    },
  ];

  /** Pointer to specific population from Measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;

  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  /** For subject-list reports, the subject results in this population (0..1) */
  subjectResults?: Reference;

  /** For subject-list reports, a subject result in this population (0..*) */
  subjectReport?: Reference[];

  /** What individual(s) in the population (0..1) */
  subjects?: Reference;

  override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum.population';
  }

  /** FHIR JSON for this MeasureReportGroupStratifierStratumPopulation, typed as the plain `MeasureReportPopulation1` data type. */
  override toJSON(): plainTypes.MeasureReportPopulation1 {
    return this.serialize() as plainTypes.MeasureReportPopulation1;
  }

  /** Pointer to specific population from Measure (0..1) */
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

  /** Size of the population (0..1) */
  getCount(): number | undefined {
    return this.count;
  }

  /** Sets `count`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setCount(count: number | undefined): this {
    return this.setFieldValue('count', count);
  }

  hasCount(): boolean {
    return this.hasFieldValue('count');
  }

  /** The element carrying the id and extensions of `count`. Created when absent. */
  getCountElement(): Element {
    if (this._count === undefined) {
      this._count = new Element();
    }
    return this._count;
  }

  setCountElement(countElement: Element | undefined): this {
    this._count = countElement;
    return this;
  }

  /** For subject-list reports, the subject results in this population (0..1) Created when absent. */
  getSubjectResults(): Reference {
    if (this.subjectResults === undefined) {
      this.subjectResults = new Reference();
    }
    return this.subjectResults;
  }

  setSubjectResults(subjectResults: Reference | undefined): this {
    return this.setFieldValue('subjectResults', subjectResults);
  }

  hasSubjectResults(): boolean {
    return this.hasFieldValue('subjectResults');
  }

  /** For subject-list reports, a subject result in this population (0..*) Never undefined; an empty list is created when absent. */
  getSubjectReport(): Reference[] {
    if (this.subjectReport === undefined) {
      this.subjectReport = [];
    }
    return this.subjectReport;
  }

  setSubjectReport(subjectReport: Reference[] | undefined): this {
    return this.setFieldValue('subjectReport', subjectReport);
  }

  hasSubjectReport(): boolean {
    return this.hasFieldValue('subjectReport');
  }

  /** Appends a new, empty Reference to `subjectReport` and returns it so it can be filled in. */
  addSubjectReport(): Reference;
  /** Appends the given Reference to `subjectReport` and returns this object for chaining. */
  addSubjectReport(reference: Reference): this;
  addSubjectReport(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subjectReport', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subjectReport', createdReference);
    return createdReference;
  }

  /** The first Reference of `subjectReport`. One is added when the list is empty. */
  getSubjectReportFirstRep(): Reference {
    const firstReference = this.getSubjectReport()[0];
    return firstReference === undefined ? this.addSubjectReport() : firstReference;
  }

  /** What individual(s) in the population (0..1) Created when absent. */
  getSubjects(): Reference {
    if (this.subjects === undefined) {
      this.subjects = new Reference();
    }
    return this.subjects;
  }

  setSubjects(subjects: Reference | undefined): this {
    return this.setFieldValue('subjects', subjects);
  }

  hasSubjects(): boolean {
    return this.hasFieldValue('subjects');
  }
}

modelTypeRegistry.register(
  'MeasureReportGroupStratifierStratumPopulation',
  MeasureReportGroupStratifierStratumPopulation,
  false
);
