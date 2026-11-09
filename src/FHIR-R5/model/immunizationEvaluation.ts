/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those recommendations.
 */
export class ImmunizationEvaluation extends DomainResource {
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
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ImmunizationEvaluationStatusCodes,
        },
      ],
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
      minimum: 0,
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
      elementName: 'targetDisease',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'targetDisease', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'immunizationEvent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'immunizationEvent',
          typeCode: 'Reference',
          targetResourceTypes: ['Immunization'],
        },
      ],
    },
    {
      elementName: 'doseStatus',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'doseStatusReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'doseStatusReason', typeCode: 'CodeableConcept' }],
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
  ];

  readonly resourceType = 'ImmunizationEvaluation';

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** completed | entered-in-error (1..1) */
  status?: valueSetCodes.ImmunizationEvaluationStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Who this evaluation is for (1..1) */
  patient?: Reference;

  /** Date evaluation was performed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who is responsible for publishing the recommendations (0..1) */
  authority?: Reference;

  /** The vaccine preventable disease schedule being evaluated (1..1) */
  targetDisease?: CodeableConcept;

  /** Immunization being evaluated (1..1) */
  immunizationEvent?: Reference;

  /** Status of the dose relative to published recommendations (1..1) */
  doseStatus?: CodeableConcept;

  /** Reason why the doese is considered valid, invalid or some other status (0..*) */
  doseStatusReason?: CodeableConcept[];

  /** Evaluation notes (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Name of vaccine series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;

  /** Dose number within series (0..1) */
  doseNumber?: string;
  /** Id and extensions of the primitive `doseNumber`. */
  _doseNumber?: Element;

  /** Recommended number of doses for immunity (0..1) */
  seriesDoses?: string;
  /** Id and extensions of the primitive `seriesDoses`. */
  _seriesDoses?: Element;

  override fhirType(): string {
    return 'ImmunizationEvaluation';
  }

  /** FHIR JSON for this ImmunizationEvaluation, typed as the plain `ImmunizationEvaluation` data type. */
  override toJSON(): plainTypes.ImmunizationEvaluation {
    return this.serialize() as plainTypes.ImmunizationEvaluation;
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

  /** completed | entered-in-error (1..1) */
  getStatus(): valueSetCodes.ImmunizationEvaluationStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ImmunizationEvaluationStatusCodes | undefined): this {
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

  /** Who this evaluation is for (1..1) Created when absent. */
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

  /** Date evaluation was performed (0..1) */
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

  /** Who is responsible for publishing the recommendations (0..1) Created when absent. */
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

  /** The vaccine preventable disease schedule being evaluated (1..1) Created when absent. */
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

  /** Immunization being evaluated (1..1) Created when absent. */
  getImmunizationEvent(): Reference {
    if (this.immunizationEvent === undefined) {
      this.immunizationEvent = new Reference();
    }
    return this.immunizationEvent;
  }

  setImmunizationEvent(immunizationEvent: Reference | undefined): this {
    return this.setFieldValue('immunizationEvent', immunizationEvent);
  }

  hasImmunizationEvent(): boolean {
    return this.hasFieldValue('immunizationEvent');
  }

  /** Status of the dose relative to published recommendations (1..1) Created when absent. */
  getDoseStatus(): CodeableConcept {
    if (this.doseStatus === undefined) {
      this.doseStatus = new CodeableConcept();
    }
    return this.doseStatus;
  }

  setDoseStatus(doseStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('doseStatus', doseStatus);
  }

  hasDoseStatus(): boolean {
    return this.hasFieldValue('doseStatus');
  }

  /** Reason why the doese is considered valid, invalid or some other status (0..*) Never undefined; an empty list is created when absent. */
  getDoseStatusReason(): CodeableConcept[] {
    if (this.doseStatusReason === undefined) {
      this.doseStatusReason = [];
    }
    return this.doseStatusReason;
  }

  setDoseStatusReason(doseStatusReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('doseStatusReason', doseStatusReason);
  }

  hasDoseStatusReason(): boolean {
    return this.hasFieldValue('doseStatusReason');
  }

  /** Appends a new, empty CodeableConcept to `doseStatusReason` and returns it so it can be filled in. */
  addDoseStatusReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `doseStatusReason` and returns this object for chaining. */
  addDoseStatusReason(codeableConcept: CodeableConcept): this;
  addDoseStatusReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('doseStatusReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('doseStatusReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `doseStatusReason`. One is added when the list is empty. */
  getDoseStatusReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getDoseStatusReason()[0];
    return firstCodeableConcept === undefined ? this.addDoseStatusReason() : firstCodeableConcept;
  }

  /** Evaluation notes (0..1) */
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

  /** Name of vaccine series (0..1) */
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

  /** Dose number within series (0..1) */
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
}

modelTypeRegistry.register('ImmunizationEvaluation', ImmunizationEvaluation, true);

/** True when the value is a ImmunizationEvaluation model instance. */
export function isImmunizationEvaluation(candidate: unknown): candidate is ImmunizationEvaluation {
  return candidate instanceof ImmunizationEvaluation;
}
