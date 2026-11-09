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
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for MeasureReport Resource
 */
export class MeasureReport extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
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
      elementName: 'measure',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'measure', typeCode: 'Reference', targetResourceTypes: ['Measure'] }],
    },
    {
      elementName: 'patient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'reportingOrganization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'reportingOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'group',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'group', typeCode: 'MeasureReportGroup' }],
    },
    {
      elementName: 'evaluatedResources',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'evaluatedResources', typeCode: 'Reference', targetResourceTypes: ['Bundle'] },
      ],
    },
  ];

  readonly resourceType = 'MeasureReport';

  /** Additional identifier for the Report (0..1) */
  identifier?: Identifier;

  /** complete | pending | error (1..1) */
  status?: valueSetCodes.MeasureReportStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** individual | patient-list | summary (1..1) */
  type?: valueSetCodes.MeasureReportType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** What measure was evaluated (1..1) */
  measure?: Reference;

  /** What patient the report is for (0..1) */
  patient?: Reference;

  /** When the report was generated (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who is reporting the data (0..1) */
  reportingOrganization?: Reference;

  /** What period the report covers (1..1) */
  period?: Period;

  /** Measure results for each group (0..*) */
  group?: MeasureReportGroup[];

  /** What data was evaluated to produce the measure score (0..1) */
  evaluatedResources?: Reference;

  override fhirType(): string {
    return 'MeasureReport';
  }

  /** FHIR JSON for this MeasureReport, typed as the plain `MeasureReport` data type. */
  override toJSON(): plainTypes.MeasureReport {
    return this.serialize() as plainTypes.MeasureReport;
  }

  /** Additional identifier for the Report (0..1) Created when absent. */
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

  /** individual | patient-list | summary (1..1) */
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

  /** What measure was evaluated (1..1) Created when absent. */
  getMeasure(): Reference {
    if (this.measure === undefined) {
      this.measure = new Reference();
    }
    return this.measure;
  }

  setMeasure(measure: Reference | undefined): this {
    return this.setFieldValue('measure', measure);
  }

  hasMeasure(): boolean {
    return this.hasFieldValue('measure');
  }

  /** What patient the report is for (0..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** When the report was generated (0..1) */
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
  getReportingOrganization(): Reference {
    if (this.reportingOrganization === undefined) {
      this.reportingOrganization = new Reference();
    }
    return this.reportingOrganization;
  }

  setReportingOrganization(reportingOrganization: Reference | undefined): this {
    return this.setFieldValue('reportingOrganization', reportingOrganization);
  }

  hasReportingOrganization(): boolean {
    return this.hasFieldValue('reportingOrganization');
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

  /** What data was evaluated to produce the measure score (0..1) Created when absent. */
  getEvaluatedResources(): Reference {
    if (this.evaluatedResources === undefined) {
      this.evaluatedResources = new Reference();
    }
    return this.evaluatedResources;
  }

  setEvaluatedResources(evaluatedResources: Reference | undefined): this {
    return this.setFieldValue('evaluatedResources', evaluatedResources);
  }

  hasEvaluatedResources(): boolean {
    return this.hasFieldValue('evaluatedResources');
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
      elementName: 'identifier',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
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
      types: [{ jsonKey: 'measureScore', typeCode: 'decimal' }],
    },
    {
      elementName: 'stratifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'stratifier', typeCode: 'MeasureReportGroupStratifier' }],
    },
  ];

  /** What group of the measure (1..1) */
  identifier?: Identifier;

  /** The populations in the group (0..*) */
  population?: MeasureReportGroupPopulation[];

  /** What score this group achieved (0..1) */
  measureScore?: number;
  /** Id and extensions of the primitive `measureScore`. */
  _measureScore?: Element;

  /** Stratification results (0..*) */
  stratifier?: MeasureReportGroupStratifier[];

  override fhirType(): string {
    return 'MeasureReport.group';
  }

  /** FHIR JSON for this MeasureReportGroup, typed as the plain `MeasureReportGroup` data type. */
  override toJSON(): plainTypes.MeasureReportGroup {
    return this.serialize() as plainTypes.MeasureReportGroup;
  }

  /** What group of the measure (1..1) Created when absent. */
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

  /** What score this group achieved (0..1) */
  getMeasureScore(): number | undefined {
    return this.measureScore;
  }

  /** Sets `measureScore`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setMeasureScore(measureScore: number | undefined): this {
    return this.setFieldValue('measureScore', measureScore);
  }

  hasMeasureScore(): boolean {
    return this.hasFieldValue('measureScore');
  }

  /** The element carrying the id and extensions of `measureScore`. Created when absent. */
  getMeasureScoreElement(): Element {
    if (this._measureScore === undefined) {
      this._measureScore = new Element();
    }
    return this._measureScore;
  }

  setMeasureScoreElement(measureScoreElement: Element | undefined): this {
    this._measureScore = measureScoreElement;
    return this;
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
      elementName: 'count',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'count', typeCode: 'integer' }],
    },
    {
      elementName: 'patients',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patients', typeCode: 'Reference', targetResourceTypes: ['List'] }],
    },
  ];

  /** Population identifier as defined in the measure (0..1) */
  identifier?: Identifier;

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score (0..1) */
  code?: CodeableConcept;

  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  /** For patient-list reports, the patients in this population (0..1) */
  patients?: Reference;

  override fhirType(): string {
    return 'MeasureReport.group.population';
  }

  /** FHIR JSON for this MeasureReportGroupPopulation, typed as the plain `MeasureReportPopulation` data type. */
  override toJSON(): plainTypes.MeasureReportPopulation {
    return this.serialize() as plainTypes.MeasureReportPopulation;
  }

  /** Population identifier as defined in the measure (0..1) Created when absent. */
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

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score (0..1) Created when absent. */
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

  /** For patient-list reports, the patients in this population (0..1) Created when absent. */
  getPatients(): Reference {
    if (this.patients === undefined) {
      this.patients = new Reference();
    }
    return this.patients;
  }

  setPatients(patients: Reference | undefined): this {
    return this.setFieldValue('patients', patients);
  }

  hasPatients(): boolean {
    return this.hasFieldValue('patients');
  }
}

modelTypeRegistry.register('MeasureReportGroupPopulation', MeasureReportGroupPopulation, false);

/**
 * Stratification results
 */
export class MeasureReportGroupStratifier extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'stratum',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'stratum', typeCode: 'MeasureReportGroupStratifierStratum' }],
    },
  ];

  /** What stratifier of the group (0..1) */
  identifier?: Identifier;

  /** Stratum results, one for each unique value in the stratifier (0..*) */
  stratum?: MeasureReportGroupStratifierStratum[];

  override fhirType(): string {
    return 'MeasureReport.group.stratifier';
  }

  /** FHIR JSON for this MeasureReportGroupStratifier, typed as the plain `MeasureReportStratifier` data type. */
  override toJSON(): plainTypes.MeasureReportStratifier {
    return this.serialize() as plainTypes.MeasureReportStratifier;
  }

  /** What stratifier of the group (0..1) Created when absent. */
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

  /** Stratum results, one for each unique value in the stratifier (0..*) Never undefined; an empty list is created when absent. */
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
 * Stratum results, one for each unique value in the stratifier
 */
export class MeasureReportGroupStratifierStratum extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
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
      types: [{ jsonKey: 'measureScore', typeCode: 'decimal' }],
    },
  ];

  /** The stratum value, e.g. male (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** Population results in this stratum (0..*) */
  population?: MeasureReportGroupStratifierStratumPopulation[];

  /** What score this stratum achieved (0..1) */
  measureScore?: number;
  /** Id and extensions of the primitive `measureScore`. */
  _measureScore?: Element;

  override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum';
  }

  /** FHIR JSON for this MeasureReportGroupStratifierStratum, typed as the plain `MeasureReportStratum` data type. */
  override toJSON(): plainTypes.MeasureReportStratum {
    return this.serialize() as plainTypes.MeasureReportStratum;
  }

  /** The stratum value, e.g. male (1..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setValue(value: string | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** The element carrying the id and extensions of `value`. Created when absent. */
  getValueElement(): Element {
    if (this._value === undefined) {
      this._value = new Element();
    }
    return this._value;
  }

  setValueElement(valueElement: Element | undefined): this {
    this._value = valueElement;
    return this;
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

  /** What score this stratum achieved (0..1) */
  getMeasureScore(): number | undefined {
    return this.measureScore;
  }

  /** Sets `measureScore`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setMeasureScore(measureScore: number | undefined): this {
    return this.setFieldValue('measureScore', measureScore);
  }

  hasMeasureScore(): boolean {
    return this.hasFieldValue('measureScore');
  }

  /** The element carrying the id and extensions of `measureScore`. Created when absent. */
  getMeasureScoreElement(): Element {
    if (this._measureScore === undefined) {
      this._measureScore = new Element();
    }
    return this._measureScore;
  }

  setMeasureScoreElement(measureScoreElement: Element | undefined): this {
    this._measureScore = measureScoreElement;
    return this;
  }
}

modelTypeRegistry.register(
  'MeasureReportGroupStratifierStratum',
  MeasureReportGroupStratifierStratum,
  false
);

/**
 * Population results in this stratum
 */
export class MeasureReportGroupStratifierStratumPopulation extends BackboneElement {
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
      elementName: 'count',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'count', typeCode: 'integer' }],
    },
    {
      elementName: 'patients',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patients', typeCode: 'Reference', targetResourceTypes: ['List'] }],
    },
  ];

  /** Population identifier as defined in the measure (0..1) */
  identifier?: Identifier;

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score (0..1) */
  code?: CodeableConcept;

  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  /** For patient-list reports, the patients in this population (0..1) */
  patients?: Reference;

  override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum.population';
  }

  /** FHIR JSON for this MeasureReportGroupStratifierStratumPopulation, typed as the plain `MeasureReportPopulation1` data type. */
  override toJSON(): plainTypes.MeasureReportPopulation1 {
    return this.serialize() as plainTypes.MeasureReportPopulation1;
  }

  /** Population identifier as defined in the measure (0..1) Created when absent. */
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

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score (0..1) Created when absent. */
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

  /** For patient-list reports, the patients in this population (0..1) Created when absent. */
  getPatients(): Reference {
    if (this.patients === undefined) {
      this.patients = new Reference();
    }
    return this.patients;
  }

  setPatients(patients: Reference | undefined): this {
    return this.setFieldValue('patients', patients);
  }

  hasPatients(): boolean {
    return this.hasFieldValue('patients');
  }
}

modelTypeRegistry.register(
  'MeasureReportGroupStratifierStratumPopulation',
  MeasureReportGroupStratifierStratumPopulation,
  false
);
