/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export class ImmunizationRecommendation extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'date',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'authority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'authority', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'recommendation',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'recommendation', typeCode: 'ImmunizationRecommendationRecommendation' }],
    },
  ];

  readonly resourceType = 'ImmunizationRecommendation';

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** Who this profile is for (1..1) */
  patient?: Reference;

  /** Date recommendation(s) created (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who is responsible for protocol (0..1) */
  authority?: Reference;

  /** Vaccine administration recommendations (1..*) */
  recommendation?: ImmunizationRecommendationRecommendation[];

  override fhirType(): string {
    return 'ImmunizationRecommendation';
  }

  /** FHIR JSON for this ImmunizationRecommendation, typed as the plain `ImmunizationRecommendation` data type. */
  override toJSON(): plainTypes.ImmunizationRecommendation {
    return this.serialize() as plainTypes.ImmunizationRecommendation;
  }

  /** Business identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who this profile is for (1..1) Created when absent. */
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

  /** Date recommendation(s) created (1..1) */
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

  /** Who is responsible for protocol (0..1) Created when absent. */
  getAuthority(): Reference {
    if (this.authority === undefined) {
      this.authority = new Reference();
    }
    return this.authority;
  }

  setAuthority(authority: Reference | undefined): this {
    return this.setFieldValue('authority', authority);
  }

  hasAuthority(): boolean {
    return this.hasFieldValue('authority');
  }

  /** Vaccine administration recommendations (1..*) Never undefined; an empty list is created when absent. */
  getRecommendation(): ImmunizationRecommendationRecommendation[] {
    if (this.recommendation === undefined) {
      this.recommendation = [];
    }
    return this.recommendation;
  }

  setRecommendation(recommendation: ImmunizationRecommendationRecommendation[] | undefined): this {
    return this.setFieldValue('recommendation', recommendation);
  }

  hasRecommendation(): boolean {
    return this.hasFieldValue('recommendation');
  }

  /** Appends a new, empty ImmunizationRecommendationRecommendation to `recommendation` and returns it so it can be filled in. */
  addRecommendation(): ImmunizationRecommendationRecommendation;
  /** Appends the given ImmunizationRecommendationRecommendation to `recommendation` and returns this object for chaining. */
  addRecommendation(
    immunizationRecommendationRecommendation: ImmunizationRecommendationRecommendation
  ): this;
  addRecommendation(
    immunizationRecommendationRecommendation?: ImmunizationRecommendationRecommendation
  ): ImmunizationRecommendationRecommendation | this {
    if (immunizationRecommendationRecommendation !== undefined) {
      return this.addFieldValue('recommendation', immunizationRecommendationRecommendation);
    }
    const createdImmunizationRecommendationRecommendation =
      new ImmunizationRecommendationRecommendation();
    this.addFieldValue('recommendation', createdImmunizationRecommendationRecommendation);
    return createdImmunizationRecommendationRecommendation;
  }

  /** The first ImmunizationRecommendationRecommendation of `recommendation`. One is added when the list is empty. */
  getRecommendationFirstRep(): ImmunizationRecommendationRecommendation {
    const firstImmunizationRecommendationRecommendation = this.getRecommendation()[0];
    return firstImmunizationRecommendationRecommendation === undefined
      ? this.addRecommendation()
      : firstImmunizationRecommendationRecommendation;
  }
}

modelTypeRegistry.register('ImmunizationRecommendation', ImmunizationRecommendation, true);

/** True when the value is a ImmunizationRecommendation model instance. */
export function isImmunizationRecommendation(
  candidate: unknown
): candidate is ImmunizationRecommendation {
  return candidate instanceof ImmunizationRecommendation;
}

/**
 * Vaccine administration recommendations
 */
export class ImmunizationRecommendationRecommendation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'vaccineCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'vaccineCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'targetDisease',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'targetDisease', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contraindicatedVaccineCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contraindicatedVaccineCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'forecastStatus',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'forecastStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'forecastReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'forecastReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'dateCriterion',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'dateCriterion',
          typeCode: 'ImmunizationRecommendationRecommendationDateCriterion',
        },
      ],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'series',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'series', typeCode: 'string' }],
    },
    {
      elementName: 'doseNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseNumber', typeCode: 'string' }],
    },
    {
      elementName: 'seriesDoses',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'seriesDoses', typeCode: 'string' }],
    },
    {
      elementName: 'supportingImmunization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'supportingImmunization',
          typeCode: 'Reference',
          targetResourceTypes: ['Immunization', 'ImmunizationEvaluation'],
        },
      ],
    },
    {
      elementName: 'supportingPatientInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingPatientInformation', typeCode: 'Reference' }],
    },
  ];

  /** Vaccine or vaccine group recommendation applies to (0..*) */
  vaccineCode?: CodeableConcept[];

  /** Disease to be immunized against (0..*) */
  targetDisease?: CodeableConcept[];

  /** Vaccine which is contraindicated to fulfill the recommendation (0..*) */
  contraindicatedVaccineCode?: CodeableConcept[];

  /** Vaccine recommendation status (1..1) */
  forecastStatus?: CodeableConcept;

  /** Vaccine administration status reason (0..*) */
  forecastReason?: CodeableConcept[];

  /** Dates governing proposed immunization (0..*) */
  dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[];

  /** Protocol details (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Name of vaccination series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;

  /** Recommended dose number within series (0..1) */
  doseNumber?: string;
  /** Id and extensions of the primitive `doseNumber`. */
  _doseNumber?: Element;

  /** Recommended number of doses for immunity (0..1) */
  seriesDoses?: string;
  /** Id and extensions of the primitive `seriesDoses`. */
  _seriesDoses?: Element;

  /** Past immunizations supporting recommendation (0..*) */
  supportingImmunization?: Reference[];

  /** Patient observations supporting recommendation (0..*) */
  supportingPatientInformation?: Reference[];

  override fhirType(): string {
    return 'ImmunizationRecommendation.recommendation';
  }

  /** FHIR JSON for this ImmunizationRecommendationRecommendation, typed as the plain `ImmunizationRecommendationRecommendation` data type. */
  override toJSON(): plainTypes.ImmunizationRecommendationRecommendation {
    return this.serialize() as plainTypes.ImmunizationRecommendationRecommendation;
  }

  /** Vaccine or vaccine group recommendation applies to (0..*) Never undefined; an empty list is created when absent. */
  getVaccineCode(): CodeableConcept[] {
    if (this.vaccineCode === undefined) {
      this.vaccineCode = [];
    }
    return this.vaccineCode;
  }

  setVaccineCode(vaccineCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('vaccineCode', vaccineCode);
  }

  hasVaccineCode(): boolean {
    return this.hasFieldValue('vaccineCode');
  }

  /** Appends a new, empty CodeableConcept to `vaccineCode` and returns it so it can be filled in. */
  addVaccineCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `vaccineCode` and returns this object for chaining. */
  addVaccineCode(codeableConcept: CodeableConcept): this;
  addVaccineCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('vaccineCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('vaccineCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `vaccineCode`. One is added when the list is empty. */
  getVaccineCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getVaccineCode()[0];
    return firstCodeableConcept === undefined ? this.addVaccineCode() : firstCodeableConcept;
  }

  /** Disease to be immunized against (0..*) Never undefined; an empty list is created when absent. */
  getTargetDisease(): CodeableConcept[] {
    if (this.targetDisease === undefined) {
      this.targetDisease = [];
    }
    return this.targetDisease;
  }

  setTargetDisease(targetDisease: CodeableConcept[] | undefined): this {
    return this.setFieldValue('targetDisease', targetDisease);
  }

  hasTargetDisease(): boolean {
    return this.hasFieldValue('targetDisease');
  }

  /** Appends a new, empty CodeableConcept to `targetDisease` and returns it so it can be filled in. */
  addTargetDisease(): CodeableConcept;
  /** Appends the given CodeableConcept to `targetDisease` and returns this object for chaining. */
  addTargetDisease(codeableConcept: CodeableConcept): this;
  addTargetDisease(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('targetDisease', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('targetDisease', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `targetDisease`. One is added when the list is empty. */
  getTargetDiseaseFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getTargetDisease()[0];
    return firstCodeableConcept === undefined ? this.addTargetDisease() : firstCodeableConcept;
  }

  /** Vaccine which is contraindicated to fulfill the recommendation (0..*) Never undefined; an empty list is created when absent. */
  getContraindicatedVaccineCode(): CodeableConcept[] {
    if (this.contraindicatedVaccineCode === undefined) {
      this.contraindicatedVaccineCode = [];
    }
    return this.contraindicatedVaccineCode;
  }

  setContraindicatedVaccineCode(contraindicatedVaccineCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('contraindicatedVaccineCode', contraindicatedVaccineCode);
  }

  hasContraindicatedVaccineCode(): boolean {
    return this.hasFieldValue('contraindicatedVaccineCode');
  }

  /** Appends a new, empty CodeableConcept to `contraindicatedVaccineCode` and returns it so it can be filled in. */
  addContraindicatedVaccineCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `contraindicatedVaccineCode` and returns this object for chaining. */
  addContraindicatedVaccineCode(codeableConcept: CodeableConcept): this;
  addContraindicatedVaccineCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('contraindicatedVaccineCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('contraindicatedVaccineCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `contraindicatedVaccineCode`. One is added when the list is empty. */
  getContraindicatedVaccineCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getContraindicatedVaccineCode()[0];
    return firstCodeableConcept === undefined
      ? this.addContraindicatedVaccineCode()
      : firstCodeableConcept;
  }

  /** Vaccine recommendation status (1..1) Created when absent. */
  getForecastStatus(): CodeableConcept {
    if (this.forecastStatus === undefined) {
      this.forecastStatus = new CodeableConcept();
    }
    return this.forecastStatus;
  }

  setForecastStatus(forecastStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('forecastStatus', forecastStatus);
  }

  hasForecastStatus(): boolean {
    return this.hasFieldValue('forecastStatus');
  }

  /** Vaccine administration status reason (0..*) Never undefined; an empty list is created when absent. */
  getForecastReason(): CodeableConcept[] {
    if (this.forecastReason === undefined) {
      this.forecastReason = [];
    }
    return this.forecastReason;
  }

  setForecastReason(forecastReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('forecastReason', forecastReason);
  }

  hasForecastReason(): boolean {
    return this.hasFieldValue('forecastReason');
  }

  /** Appends a new, empty CodeableConcept to `forecastReason` and returns it so it can be filled in. */
  addForecastReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `forecastReason` and returns this object for chaining. */
  addForecastReason(codeableConcept: CodeableConcept): this;
  addForecastReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('forecastReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('forecastReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `forecastReason`. One is added when the list is empty. */
  getForecastReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getForecastReason()[0];
    return firstCodeableConcept === undefined ? this.addForecastReason() : firstCodeableConcept;
  }

  /** Dates governing proposed immunization (0..*) Never undefined; an empty list is created when absent. */
  getDateCriterion(): ImmunizationRecommendationRecommendationDateCriterion[] {
    if (this.dateCriterion === undefined) {
      this.dateCriterion = [];
    }
    return this.dateCriterion;
  }

  setDateCriterion(
    dateCriterion: ImmunizationRecommendationRecommendationDateCriterion[] | undefined
  ): this {
    return this.setFieldValue('dateCriterion', dateCriterion);
  }

  hasDateCriterion(): boolean {
    return this.hasFieldValue('dateCriterion');
  }

  /** Appends a new, empty ImmunizationRecommendationRecommendationDateCriterion to `dateCriterion` and returns it so it can be filled in. */
  addDateCriterion(): ImmunizationRecommendationRecommendationDateCriterion;
  /** Appends the given ImmunizationRecommendationRecommendationDateCriterion to `dateCriterion` and returns this object for chaining. */
  addDateCriterion(
    immunizationRecommendationRecommendationDateCriterion: ImmunizationRecommendationRecommendationDateCriterion
  ): this;
  addDateCriterion(
    immunizationRecommendationRecommendationDateCriterion?: ImmunizationRecommendationRecommendationDateCriterion
  ): ImmunizationRecommendationRecommendationDateCriterion | this {
    if (immunizationRecommendationRecommendationDateCriterion !== undefined) {
      return this.addFieldValue(
        'dateCriterion',
        immunizationRecommendationRecommendationDateCriterion
      );
    }
    const createdImmunizationRecommendationRecommendationDateCriterion =
      new ImmunizationRecommendationRecommendationDateCriterion();
    this.addFieldValue(
      'dateCriterion',
      createdImmunizationRecommendationRecommendationDateCriterion
    );
    return createdImmunizationRecommendationRecommendationDateCriterion;
  }

  /** The first ImmunizationRecommendationRecommendationDateCriterion of `dateCriterion`. One is added when the list is empty. */
  getDateCriterionFirstRep(): ImmunizationRecommendationRecommendationDateCriterion {
    const firstImmunizationRecommendationRecommendationDateCriterion = this.getDateCriterion()[0];
    return firstImmunizationRecommendationRecommendationDateCriterion === undefined
      ? this.addDateCriterion()
      : firstImmunizationRecommendationRecommendationDateCriterion;
  }

  /** Protocol details (0..1) */
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

  /** Name of vaccination series (0..1) */
  getSeries(): string | undefined {
    return this.series;
  }

  /** Sets `series`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSeries(series: string | undefined): this {
    return this.setFieldValue('series', series);
  }

  hasSeries(): boolean {
    return this.hasFieldValue('series');
  }

  /** The element carrying the id and extensions of `series`. Created when absent. */
  getSeriesElement(): Element {
    if (this._series === undefined) {
      this._series = new Element();
    }
    return this._series;
  }

  setSeriesElement(seriesElement: Element | undefined): this {
    this._series = seriesElement;
    return this;
  }

  /** Recommended dose number within series (0..1) */
  getDoseNumber(): string | undefined {
    return this.doseNumber;
  }

  /** Sets `doseNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDoseNumber(doseNumber: string | undefined): this {
    return this.setFieldValue('doseNumber', doseNumber);
  }

  hasDoseNumber(): boolean {
    return this.hasFieldValue('doseNumber');
  }

  /** The element carrying the id and extensions of `doseNumber`. Created when absent. */
  getDoseNumberElement(): Element {
    if (this._doseNumber === undefined) {
      this._doseNumber = new Element();
    }
    return this._doseNumber;
  }

  setDoseNumberElement(doseNumberElement: Element | undefined): this {
    this._doseNumber = doseNumberElement;
    return this;
  }

  /** Recommended number of doses for immunity (0..1) */
  getSeriesDoses(): string | undefined {
    return this.seriesDoses;
  }

  /** Sets `seriesDoses`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSeriesDoses(seriesDoses: string | undefined): this {
    return this.setFieldValue('seriesDoses', seriesDoses);
  }

  hasSeriesDoses(): boolean {
    return this.hasFieldValue('seriesDoses');
  }

  /** The element carrying the id and extensions of `seriesDoses`. Created when absent. */
  getSeriesDosesElement(): Element {
    if (this._seriesDoses === undefined) {
      this._seriesDoses = new Element();
    }
    return this._seriesDoses;
  }

  setSeriesDosesElement(seriesDosesElement: Element | undefined): this {
    this._seriesDoses = seriesDosesElement;
    return this;
  }

  /** Past immunizations supporting recommendation (0..*) Never undefined; an empty list is created when absent. */
  getSupportingImmunization(): Reference[] {
    if (this.supportingImmunization === undefined) {
      this.supportingImmunization = [];
    }
    return this.supportingImmunization;
  }

  setSupportingImmunization(supportingImmunization: Reference[] | undefined): this {
    return this.setFieldValue('supportingImmunization', supportingImmunization);
  }

  hasSupportingImmunization(): boolean {
    return this.hasFieldValue('supportingImmunization');
  }

  /** Appends a new, empty Reference to `supportingImmunization` and returns it so it can be filled in. */
  addSupportingImmunization(): Reference;
  /** Appends the given Reference to `supportingImmunization` and returns this object for chaining. */
  addSupportingImmunization(reference: Reference): this;
  addSupportingImmunization(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supportingImmunization', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supportingImmunization', createdReference);
    return createdReference;
  }

  /** The first Reference of `supportingImmunization`. One is added when the list is empty. */
  getSupportingImmunizationFirstRep(): Reference {
    const firstReference = this.getSupportingImmunization()[0];
    return firstReference === undefined ? this.addSupportingImmunization() : firstReference;
  }

  /** Patient observations supporting recommendation (0..*) Never undefined; an empty list is created when absent. */
  getSupportingPatientInformation(): Reference[] {
    if (this.supportingPatientInformation === undefined) {
      this.supportingPatientInformation = [];
    }
    return this.supportingPatientInformation;
  }

  setSupportingPatientInformation(supportingPatientInformation: Reference[] | undefined): this {
    return this.setFieldValue('supportingPatientInformation', supportingPatientInformation);
  }

  hasSupportingPatientInformation(): boolean {
    return this.hasFieldValue('supportingPatientInformation');
  }

  /** Appends a new, empty Reference to `supportingPatientInformation` and returns it so it can be filled in. */
  addSupportingPatientInformation(): Reference;
  /** Appends the given Reference to `supportingPatientInformation` and returns this object for chaining. */
  addSupportingPatientInformation(reference: Reference): this;
  addSupportingPatientInformation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supportingPatientInformation', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supportingPatientInformation', createdReference);
    return createdReference;
  }

  /** The first Reference of `supportingPatientInformation`. One is added when the list is empty. */
  getSupportingPatientInformationFirstRep(): Reference {
    const firstReference = this.getSupportingPatientInformation()[0];
    return firstReference === undefined ? this.addSupportingPatientInformation() : firstReference;
  }
}

modelTypeRegistry.register(
  'ImmunizationRecommendationRecommendation',
  ImmunizationRecommendationRecommendation,
  false
);

/**
 * Dates governing proposed immunization
 */
export class ImmunizationRecommendationRecommendationDateCriterion extends BackboneElement {
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
      types: [{ jsonKey: 'value', typeCode: 'dateTime' }],
    },
  ];

  /** Type of date (1..1) */
  code?: CodeableConcept;

  /** Recommended date (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'ImmunizationRecommendation.recommendation.dateCriterion';
  }

  /** FHIR JSON for this ImmunizationRecommendationRecommendationDateCriterion, typed as the plain `ImmunizationRecommendationDateCriterion` data type. */
  override toJSON(): plainTypes.ImmunizationRecommendationDateCriterion {
    return this.serialize() as plainTypes.ImmunizationRecommendationDateCriterion;
  }

  /** Type of date (1..1) Created when absent. */
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

  /** Recommended date (1..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
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
}

modelTypeRegistry.register(
  'ImmunizationRecommendationRecommendationDateCriterion',
  ImmunizationRecommendationRecommendationDateCriterion,
  false
);
