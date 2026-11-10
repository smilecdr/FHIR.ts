/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
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
      elementName: 'measure',
      minimum: 1,
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
            'Device',
            'Group',
            'Location',
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
          targetResourceTypes: ['Location', 'Organization', 'Practitioner', 'PractitionerRole'],
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

  /** individual | subject-list | summary | data-collection (1..1) */
  type?: valueSetCodes.MeasureReportType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** What measure was calculated (1..1) */
  measure?: string;
  /** Id and extensions of the primitive `measure`. */
  _measure?: Element;

  /** What individual(s) the report is for (0..1) */
  subject?: Reference;

  /** When the report was generated (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who is reporting the data (0..1) */
  reporter?: Reference;

  /** What period the report covers (1..1) */
  period?: Period;

  /** increase | decrease (0..1) */
  improvementNotation?: CodeableConcept;

  /** Measure results for each group (0..*) */
  group?: MeasureReportGroup[];

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

  /** individual | subject-list | summary | data-collection (1..1) */
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

  /** What measure was calculated (1..1) */
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
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'measureScore', typeCode: 'Quantity' }],
    },
    {
      elementName: 'stratifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'stratifier', typeCode: 'MeasureReportGroupStratifier' }],
    },
  ];

  /** Meaning of the group (0..1) */
  code?: CodeableConcept;

  /** The populations in the group (0..*) */
  population?: MeasureReportGroupPopulation[];

  /** What score this group achieved (0..1) */
  measureScore?: Quantity;

  /** Stratification results (0..*) */
  stratifier?: MeasureReportGroupStratifier[];

  override fhirType(): string {
    return 'MeasureReport.group';
  }

  /** FHIR JSON for this MeasureReportGroup, typed as the plain `MeasureReportGroup` data type. */
  override toJSON(): plainTypes.MeasureReportGroup {
    return this.serialize() as plainTypes.MeasureReportGroup;
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

  /** What score this group achieved (0..1) Created when absent. */
  getMeasureScore(): Quantity {
    if (this.measureScore === undefined) {
      this.measureScore = new Quantity();
    }
    return this.measureScore;
  }

  setMeasureScore(measureScore: Quantity | undefined): this {
    return this.setFieldValue('measureScore', measureScore);
  }

  hasMeasureScore(): boolean {
    return this.hasFieldValue('measureScore');
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
  ];

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;

  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  /** For subject-list reports, the subject results in this population (0..1) */
  subjectResults?: Reference;

  override fhirType(): string {
    return 'MeasureReport.group.population';
  }

  /** FHIR JSON for this MeasureReportGroupPopulation, typed as the plain `MeasureReportPopulation` data type. */
  override toJSON(): plainTypes.MeasureReportPopulation {
    return this.serialize() as plainTypes.MeasureReportPopulation;
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
}

modelTypeRegistry.register('MeasureReportGroupPopulation', MeasureReportGroupPopulation, false);

/**
 * Stratification results
 */
export class MeasureReportGroupStratifier extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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

  /** What stratifier of the group (0..*) */
  code?: CodeableConcept[];

  /** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components (0..*) */
  stratum?: MeasureReportGroupStratifierStratum[];

  override fhirType(): string {
    return 'MeasureReport.group.stratifier';
  }

  /** FHIR JSON for this MeasureReportGroupStratifier, typed as the plain `MeasureReportStratifier` data type. */
  override toJSON(): plainTypes.MeasureReportStratifier {
    return this.serialize() as plainTypes.MeasureReportStratifier;
  }

  /** What stratifier of the group (0..*) Never undefined; an empty list is created when absent. */
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
      types: [{ jsonKey: 'value', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'measureScore', typeCode: 'Quantity' }],
    },
  ];

  /** The stratum value, e.g. male (0..1) */
  value?: CodeableConcept;

  /** Stratifier component values (0..*) */
  component?: MeasureReportGroupStratifierStratumComponent[];

  /** Population results in this stratum (0..*) */
  population?: MeasureReportGroupStratifierStratumPopulation[];

  /** What score this stratum achieved (0..1) */
  measureScore?: Quantity;

  override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum';
  }

  /** FHIR JSON for this MeasureReportGroupStratifierStratum, typed as the plain `MeasureReportStratum` data type. */
  override toJSON(): plainTypes.MeasureReportStratum {
    return this.serialize() as plainTypes.MeasureReportStratum;
  }

  /** The stratum value, e.g. male (0..1) Created when absent. */
  getValue(): CodeableConcept {
    if (this.value === undefined) {
      this.value = new CodeableConcept();
    }
    return this.value;
  }

  setValue(value: CodeableConcept | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
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

  /** What score this stratum achieved (0..1) Created when absent. */
  getMeasureScore(): Quantity {
    if (this.measureScore === undefined) {
      this.measureScore = new Quantity();
    }
    return this.measureScore;
  }

  setMeasureScore(measureScore: Quantity | undefined): this {
    return this.setFieldValue('measureScore', measureScore);
  }

  hasMeasureScore(): boolean {
    return this.hasFieldValue('measureScore');
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
      types: [{ jsonKey: 'value', typeCode: 'CodeableConcept' }],
    },
  ];

  /** What stratifier component of the group (1..1) */
  code?: CodeableConcept;

  /** The stratum component value, e.g. male (1..1) */
  value?: CodeableConcept;

  override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum.component';
  }

  /** FHIR JSON for this MeasureReportGroupStratifierStratumComponent, typed as the plain `MeasureReportComponent` data type. */
  override toJSON(): plainTypes.MeasureReportComponent {
    return this.serialize() as plainTypes.MeasureReportComponent;
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

  /** The stratum component value, e.g. male (1..1) Created when absent. */
  getValue(): CodeableConcept {
    if (this.value === undefined) {
      this.value = new CodeableConcept();
    }
    return this.value;
  }

  setValue(value: CodeableConcept | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
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
  ];

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;

  /** Size of the population (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  /** For subject-list reports, the subject results in this population (0..1) */
  subjectResults?: Reference;

  override fhirType(): string {
    return 'MeasureReport.group.stratifier.stratum.population';
  }

  /** FHIR JSON for this MeasureReportGroupStratifierStratumPopulation, typed as the plain `MeasureReportPopulation1` data type. */
  override toJSON(): plainTypes.MeasureReportPopulation1 {
    return this.serialize() as plainTypes.MeasureReportPopulation1;
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
}

modelTypeRegistry.register(
  'MeasureReportGroupStratifierStratumPopulation',
  MeasureReportGroupStratifierStratumPopulation,
  false
);
