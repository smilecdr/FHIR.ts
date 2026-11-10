/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for ImmunizationRecommendation Resource
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
      elementName: 'date',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'vaccineCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'vaccineCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'targetDisease',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'targetDisease', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'doseNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseNumber', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'forecastStatus',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'forecastStatus', typeCode: 'CodeableConcept' }],
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
      elementName: 'protocol',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'protocol', typeCode: 'ImmunizationRecommendationRecommendationProtocol' },
      ],
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
          targetResourceTypes: ['Immunization'],
        },
      ],
    },
    {
      elementName: 'supportingPatientInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'supportingPatientInformation',
          typeCode: 'Reference',
          targetResourceTypes: ['AllergyIntolerance', 'Observation'],
        },
      ],
    },
  ];

  /** Date recommendation created (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Vaccine recommendation applies to (0..1) */
  vaccineCode?: CodeableConcept;

  /** Disease to be immunized against (0..1) */
  targetDisease?: CodeableConcept;

  /** Recommended dose number (0..1) */
  doseNumber?: number;
  /** Id and extensions of the primitive `doseNumber`. */
  _doseNumber?: Element;

  /** Vaccine administration status (1..1) */
  forecastStatus?: CodeableConcept;

  /** Dates governing proposed immunization (0..*) */
  dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[];

  /** Protocol used by recommendation (0..1) */
  protocol?: ImmunizationRecommendationRecommendationProtocol;

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

  /** Date recommendation created (1..1) */
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

  /** Vaccine recommendation applies to (0..1) Created when absent. */
  getVaccineCode(): CodeableConcept {
    if (this.vaccineCode === undefined) {
      this.vaccineCode = new CodeableConcept();
    }
    return this.vaccineCode;
  }

  setVaccineCode(vaccineCode: CodeableConcept | undefined): this {
    return this.setFieldValue('vaccineCode', vaccineCode);
  }

  hasVaccineCode(): boolean {
    return this.hasFieldValue('vaccineCode');
  }

  /** Disease to be immunized against (0..1) Created when absent. */
  getTargetDisease(): CodeableConcept {
    if (this.targetDisease === undefined) {
      this.targetDisease = new CodeableConcept();
    }
    return this.targetDisease;
  }

  setTargetDisease(targetDisease: CodeableConcept | undefined): this {
    return this.setFieldValue('targetDisease', targetDisease);
  }

  hasTargetDisease(): boolean {
    return this.hasFieldValue('targetDisease');
  }

  /** Recommended dose number (0..1) */
  getDoseNumber(): number | undefined {
    return this.doseNumber;
  }

  /** Sets `doseNumber`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setDoseNumber(doseNumber: number | undefined): this {
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

  /** Vaccine administration status (1..1) Created when absent. */
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

  /** Protocol used by recommendation (0..1) Created when absent. */
  getProtocol(): ImmunizationRecommendationRecommendationProtocol {
    if (this.protocol === undefined) {
      this.protocol = new ImmunizationRecommendationRecommendationProtocol();
    }
    return this.protocol;
  }

  setProtocol(protocol: ImmunizationRecommendationRecommendationProtocol | undefined): this {
    return this.setFieldValue('protocol', protocol);
  }

  hasProtocol(): boolean {
    return this.hasFieldValue('protocol');
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

/**
 * Protocol used by recommendation
 */
export class ImmunizationRecommendationRecommendationProtocol extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'doseSequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseSequence', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
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
      elementName: 'series',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'series', typeCode: 'string' }],
    },
  ];

  /** Dose number within sequence (0..1) */
  doseSequence?: number;
  /** Id and extensions of the primitive `doseSequence`. */
  _doseSequence?: Element;

  /** Protocol details (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Who is responsible for protocol (0..1) */
  authority?: Reference;

  /** Name of vaccination series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;

  override fhirType(): string {
    return 'ImmunizationRecommendation.recommendation.protocol';
  }

  /** FHIR JSON for this ImmunizationRecommendationRecommendationProtocol, typed as the plain `ImmunizationRecommendationProtocol` data type. */
  override toJSON(): plainTypes.ImmunizationRecommendationProtocol {
    return this.serialize() as plainTypes.ImmunizationRecommendationProtocol;
  }

  /** Dose number within sequence (0..1) */
  getDoseSequence(): number | undefined {
    return this.doseSequence;
  }

  /** Sets `doseSequence`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setDoseSequence(doseSequence: number | undefined): this {
    return this.setFieldValue('doseSequence', doseSequence);
  }

  hasDoseSequence(): boolean {
    return this.hasFieldValue('doseSequence');
  }

  /** The element carrying the id and extensions of `doseSequence`. Created when absent. */
  getDoseSequenceElement(): Element {
    if (this._doseSequence === undefined) {
      this._doseSequence = new Element();
    }
    return this._doseSequence;
  }

  setDoseSequenceElement(doseSequenceElement: Element | undefined): this {
    this._doseSequence = doseSequenceElement;
    return this;
  }

  /** Protocol details (0..1) */
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
}

modelTypeRegistry.register(
  'ImmunizationRecommendationRecommendationProtocol',
  ImmunizationRecommendationRecommendationProtocol,
  false
);
