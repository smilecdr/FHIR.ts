/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Immunization Resource
 */
export class Immunization extends DomainResource {
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
          allowedCodes: valueSetCodes.ImmunizationStatusCodes,
        },
      ],
    },
    {
      elementName: 'notGiven',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'notGiven', typeCode: 'boolean' }],
    },
    {
      elementName: 'vaccineCode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'vaccineCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'primarySource',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'primarySource', typeCode: 'boolean' }],
    },
    {
      elementName: 'reportOrigin',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reportOrigin', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'manufacturer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'lotNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lotNumber', typeCode: 'string' }],
    },
    {
      elementName: 'expirationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expirationDate', typeCode: 'date' }],
    },
    {
      elementName: 'site',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'site', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'route',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'route', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'doseQuantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseQuantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'practitioner',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'practitioner', typeCode: 'ImmunizationPractitioner' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'explanation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'explanation', typeCode: 'ImmunizationExplanation' }],
    },
    {
      elementName: 'reaction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reaction', typeCode: 'ImmunizationReaction' }],
    },
    {
      elementName: 'vaccinationProtocol',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'vaccinationProtocol', typeCode: 'ImmunizationVaccinationProtocol' }],
    },
  ];

  readonly resourceType = 'Immunization';

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** completed | entered-in-error (1..1) */
  status?: valueSetCodes.ImmunizationStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Flag for whether immunization was given (1..1) */
  notGiven?: boolean;
  /** Id and extensions of the primitive `notGiven`. */
  _notGiven?: Element;

  /** Vaccine product administered (1..1) */
  vaccineCode?: CodeableConcept;

  /** Who was immunized (1..1) */
  patient?: Reference;

  /** Encounter administered as part of (0..1) */
  encounter?: Reference;

  /** Vaccination administration date (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Indicates context the data was recorded in (1..1) */
  primarySource?: boolean;
  /** Id and extensions of the primitive `primarySource`. */
  _primarySource?: Element;

  /** Indicates the source of a secondarily reported record (0..1) */
  reportOrigin?: CodeableConcept;

  /** Where vaccination occurred (0..1) */
  location?: Reference;

  /** Vaccine manufacturer (0..1) */
  manufacturer?: Reference;

  /** Vaccine lot number (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;

  /** Vaccine expiration date (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;

  /** Body site vaccine was administered (0..1) */
  site?: CodeableConcept;

  /** How vaccine entered body (0..1) */
  route?: CodeableConcept;

  /** Amount of vaccine administered (0..1) */
  doseQuantity?: Quantity;

  /** Who performed event (0..*) */
  practitioner?: ImmunizationPractitioner[];

  /** Vaccination notes (0..*) */
  note?: Annotation[];

  /** Administration/non-administration reasons (0..1) */
  explanation?: ImmunizationExplanation;

  /** Details of a reaction that follows immunization (0..*) */
  reaction?: ImmunizationReaction[];

  /** What protocol was followed (0..*) */
  vaccinationProtocol?: ImmunizationVaccinationProtocol[];

  override fhirType(): string {
    return 'Immunization';
  }

  /** FHIR JSON for this Immunization, typed as the plain `Immunization` data type. */
  override toJSON(): plainTypes.Immunization {
    return this.serialize() as plainTypes.Immunization;
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
  getStatus(): valueSetCodes.ImmunizationStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ImmunizationStatusCodes | undefined): this {
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

  /** Flag for whether immunization was given (1..1) */
  getNotGiven(): boolean | undefined {
    return this.notGiven;
  }

  /** Sets `notGiven`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setNotGiven(notGiven: boolean | undefined): this {
    return this.setFieldValue('notGiven', notGiven);
  }

  hasNotGiven(): boolean {
    return this.hasFieldValue('notGiven');
  }

  /** The element carrying the id and extensions of `notGiven`. Created when absent. */
  getNotGivenElement(): Element {
    if (this._notGiven === undefined) {
      this._notGiven = new Element();
    }
    return this._notGiven;
  }

  setNotGivenElement(notGivenElement: Element | undefined): this {
    this._notGiven = notGivenElement;
    return this;
  }

  /** Vaccine product administered (1..1) Created when absent. */
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

  /** Who was immunized (1..1) Created when absent. */
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

  /** Encounter administered as part of (0..1) Created when absent. */
  getEncounter(): Reference {
    if (this.encounter === undefined) {
      this.encounter = new Reference();
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
  }

  /** Vaccination administration date (0..1) */
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

  /** Indicates context the data was recorded in (1..1) */
  getPrimarySource(): boolean | undefined {
    return this.primarySource;
  }

  /** Sets `primarySource`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setPrimarySource(primarySource: boolean | undefined): this {
    return this.setFieldValue('primarySource', primarySource);
  }

  hasPrimarySource(): boolean {
    return this.hasFieldValue('primarySource');
  }

  /** The element carrying the id and extensions of `primarySource`. Created when absent. */
  getPrimarySourceElement(): Element {
    if (this._primarySource === undefined) {
      this._primarySource = new Element();
    }
    return this._primarySource;
  }

  setPrimarySourceElement(primarySourceElement: Element | undefined): this {
    this._primarySource = primarySourceElement;
    return this;
  }

  /** Indicates the source of a secondarily reported record (0..1) Created when absent. */
  getReportOrigin(): CodeableConcept {
    if (this.reportOrigin === undefined) {
      this.reportOrigin = new CodeableConcept();
    }
    return this.reportOrigin;
  }

  setReportOrigin(reportOrigin: CodeableConcept | undefined): this {
    return this.setFieldValue('reportOrigin', reportOrigin);
  }

  hasReportOrigin(): boolean {
    return this.hasFieldValue('reportOrigin');
  }

  /** Where vaccination occurred (0..1) Created when absent. */
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

  /** Vaccine manufacturer (0..1) Created when absent. */
  getManufacturer(): Reference {
    if (this.manufacturer === undefined) {
      this.manufacturer = new Reference();
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Reference | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }

  /** Vaccine lot number (0..1) */
  getLotNumber(): string | undefined {
    return this.lotNumber;
  }

  /** Sets `lotNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLotNumber(lotNumber: string | undefined): this {
    return this.setFieldValue('lotNumber', lotNumber);
  }

  hasLotNumber(): boolean {
    return this.hasFieldValue('lotNumber');
  }

  /** The element carrying the id and extensions of `lotNumber`. Created when absent. */
  getLotNumberElement(): Element {
    if (this._lotNumber === undefined) {
      this._lotNumber = new Element();
    }
    return this._lotNumber;
  }

  setLotNumberElement(lotNumberElement: Element | undefined): this {
    this._lotNumber = lotNumberElement;
    return this;
  }

  /** Vaccine expiration date (0..1) */
  getExpirationDate(): string | undefined {
    return this.expirationDate;
  }

  /** Sets `expirationDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setExpirationDate(expirationDate: string | undefined): this {
    return this.setFieldValue('expirationDate', expirationDate);
  }

  hasExpirationDate(): boolean {
    return this.hasFieldValue('expirationDate');
  }

  /** The element carrying the id and extensions of `expirationDate`. Created when absent. */
  getExpirationDateElement(): Element {
    if (this._expirationDate === undefined) {
      this._expirationDate = new Element();
    }
    return this._expirationDate;
  }

  setExpirationDateElement(expirationDateElement: Element | undefined): this {
    this._expirationDate = expirationDateElement;
    return this;
  }

  /** Body site vaccine was administered (0..1) Created when absent. */
  getSite(): CodeableConcept {
    if (this.site === undefined) {
      this.site = new CodeableConcept();
    }
    return this.site;
  }

  setSite(site: CodeableConcept | undefined): this {
    return this.setFieldValue('site', site);
  }

  hasSite(): boolean {
    return this.hasFieldValue('site');
  }

  /** How vaccine entered body (0..1) Created when absent. */
  getRoute(): CodeableConcept {
    if (this.route === undefined) {
      this.route = new CodeableConcept();
    }
    return this.route;
  }

  setRoute(route: CodeableConcept | undefined): this {
    return this.setFieldValue('route', route);
  }

  hasRoute(): boolean {
    return this.hasFieldValue('route');
  }

  /** Amount of vaccine administered (0..1) Created when absent. */
  getDoseQuantity(): Quantity {
    if (this.doseQuantity === undefined) {
      this.doseQuantity = new Quantity();
    }
    return this.doseQuantity;
  }

  setDoseQuantity(doseQuantity: Quantity | undefined): this {
    return this.setFieldValue('doseQuantity', doseQuantity);
  }

  hasDoseQuantity(): boolean {
    return this.hasFieldValue('doseQuantity');
  }

  /** Who performed event (0..*) Never undefined; an empty list is created when absent. */
  getPractitioner(): ImmunizationPractitioner[] {
    if (this.practitioner === undefined) {
      this.practitioner = [];
    }
    return this.practitioner;
  }

  setPractitioner(practitioner: ImmunizationPractitioner[] | undefined): this {
    return this.setFieldValue('practitioner', practitioner);
  }

  hasPractitioner(): boolean {
    return this.hasFieldValue('practitioner');
  }

  /** Appends a new, empty ImmunizationPractitioner to `practitioner` and returns it so it can be filled in. */
  addPractitioner(): ImmunizationPractitioner;
  /** Appends the given ImmunizationPractitioner to `practitioner` and returns this object for chaining. */
  addPractitioner(immunizationPractitioner: ImmunizationPractitioner): this;
  addPractitioner(
    immunizationPractitioner?: ImmunizationPractitioner
  ): ImmunizationPractitioner | this {
    if (immunizationPractitioner !== undefined) {
      return this.addFieldValue('practitioner', immunizationPractitioner);
    }
    const createdImmunizationPractitioner = new ImmunizationPractitioner();
    this.addFieldValue('practitioner', createdImmunizationPractitioner);
    return createdImmunizationPractitioner;
  }

  /** The first ImmunizationPractitioner of `practitioner`. One is added when the list is empty. */
  getPractitionerFirstRep(): ImmunizationPractitioner {
    const firstImmunizationPractitioner = this.getPractitioner()[0];
    return firstImmunizationPractitioner === undefined
      ? this.addPractitioner()
      : firstImmunizationPractitioner;
  }

  /** Vaccination notes (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }

  /** Administration/non-administration reasons (0..1) Created when absent. */
  getExplanation(): ImmunizationExplanation {
    if (this.explanation === undefined) {
      this.explanation = new ImmunizationExplanation();
    }
    return this.explanation;
  }

  setExplanation(explanation: ImmunizationExplanation | undefined): this {
    return this.setFieldValue('explanation', explanation);
  }

  hasExplanation(): boolean {
    return this.hasFieldValue('explanation');
  }

  /** Details of a reaction that follows immunization (0..*) Never undefined; an empty list is created when absent. */
  getReaction(): ImmunizationReaction[] {
    if (this.reaction === undefined) {
      this.reaction = [];
    }
    return this.reaction;
  }

  setReaction(reaction: ImmunizationReaction[] | undefined): this {
    return this.setFieldValue('reaction', reaction);
  }

  hasReaction(): boolean {
    return this.hasFieldValue('reaction');
  }

  /** Appends a new, empty ImmunizationReaction to `reaction` and returns it so it can be filled in. */
  addReaction(): ImmunizationReaction;
  /** Appends the given ImmunizationReaction to `reaction` and returns this object for chaining. */
  addReaction(immunizationReaction: ImmunizationReaction): this;
  addReaction(immunizationReaction?: ImmunizationReaction): ImmunizationReaction | this {
    if (immunizationReaction !== undefined) {
      return this.addFieldValue('reaction', immunizationReaction);
    }
    const createdImmunizationReaction = new ImmunizationReaction();
    this.addFieldValue('reaction', createdImmunizationReaction);
    return createdImmunizationReaction;
  }

  /** The first ImmunizationReaction of `reaction`. One is added when the list is empty. */
  getReactionFirstRep(): ImmunizationReaction {
    const firstImmunizationReaction = this.getReaction()[0];
    return firstImmunizationReaction === undefined ? this.addReaction() : firstImmunizationReaction;
  }

  /** What protocol was followed (0..*) Never undefined; an empty list is created when absent. */
  getVaccinationProtocol(): ImmunizationVaccinationProtocol[] {
    if (this.vaccinationProtocol === undefined) {
      this.vaccinationProtocol = [];
    }
    return this.vaccinationProtocol;
  }

  setVaccinationProtocol(vaccinationProtocol: ImmunizationVaccinationProtocol[] | undefined): this {
    return this.setFieldValue('vaccinationProtocol', vaccinationProtocol);
  }

  hasVaccinationProtocol(): boolean {
    return this.hasFieldValue('vaccinationProtocol');
  }

  /** Appends a new, empty ImmunizationVaccinationProtocol to `vaccinationProtocol` and returns it so it can be filled in. */
  addVaccinationProtocol(): ImmunizationVaccinationProtocol;
  /** Appends the given ImmunizationVaccinationProtocol to `vaccinationProtocol` and returns this object for chaining. */
  addVaccinationProtocol(immunizationVaccinationProtocol: ImmunizationVaccinationProtocol): this;
  addVaccinationProtocol(
    immunizationVaccinationProtocol?: ImmunizationVaccinationProtocol
  ): ImmunizationVaccinationProtocol | this {
    if (immunizationVaccinationProtocol !== undefined) {
      return this.addFieldValue('vaccinationProtocol', immunizationVaccinationProtocol);
    }
    const createdImmunizationVaccinationProtocol = new ImmunizationVaccinationProtocol();
    this.addFieldValue('vaccinationProtocol', createdImmunizationVaccinationProtocol);
    return createdImmunizationVaccinationProtocol;
  }

  /** The first ImmunizationVaccinationProtocol of `vaccinationProtocol`. One is added when the list is empty. */
  getVaccinationProtocolFirstRep(): ImmunizationVaccinationProtocol {
    const firstImmunizationVaccinationProtocol = this.getVaccinationProtocol()[0];
    return firstImmunizationVaccinationProtocol === undefined
      ? this.addVaccinationProtocol()
      : firstImmunizationVaccinationProtocol;
  }
}

modelTypeRegistry.register('Immunization', Immunization, true);

/** True when the value is a Immunization model instance. */
export function isImmunization(candidate: unknown): candidate is Immunization {
  return candidate instanceof Immunization;
}

/**
 * Who performed event
 */
export class ImmunizationPractitioner extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actor', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] }],
    },
  ];

  /** What type of performance was done (0..1) */
  role?: CodeableConcept;

  /** Individual who was performing (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'Immunization.practitioner';
  }

  /** FHIR JSON for this ImmunizationPractitioner, typed as the plain `ImmunizationPractitioner` data type. */
  override toJSON(): plainTypes.ImmunizationPractitioner {
    return this.serialize() as plainTypes.ImmunizationPractitioner;
  }

  /** What type of performance was done (0..1) Created when absent. */
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

  /** Individual who was performing (1..1) Created when absent. */
  getActor(): Reference {
    if (this.actor === undefined) {
      this.actor = new Reference();
    }
    return this.actor;
  }

  setActor(actor: Reference | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }
}

modelTypeRegistry.register('ImmunizationPractitioner', ImmunizationPractitioner, false);

/**
 * Administration/non-administration reasons
 */
export class ImmunizationExplanation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reasonNotGiven',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonNotGiven', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Why immunization occurred (0..*) */
  reason?: CodeableConcept[];

  /** Why immunization did not occur (0..*) */
  reasonNotGiven?: CodeableConcept[];

  override fhirType(): string {
    return 'Immunization.explanation';
  }

  /** FHIR JSON for this ImmunizationExplanation, typed as the plain `ImmunizationExplanation` data type. */
  override toJSON(): plainTypes.ImmunizationExplanation {
    return this.serialize() as plainTypes.ImmunizationExplanation;
  }

  /** Why immunization occurred (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why immunization did not occur (0..*) Never undefined; an empty list is created when absent. */
  getReasonNotGiven(): CodeableConcept[] {
    if (this.reasonNotGiven === undefined) {
      this.reasonNotGiven = [];
    }
    return this.reasonNotGiven;
  }

  setReasonNotGiven(reasonNotGiven: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonNotGiven', reasonNotGiven);
  }

  hasReasonNotGiven(): boolean {
    return this.hasFieldValue('reasonNotGiven');
  }

  /** Appends a new, empty CodeableConcept to `reasonNotGiven` and returns it so it can be filled in. */
  addReasonNotGiven(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonNotGiven` and returns this object for chaining. */
  addReasonNotGiven(codeableConcept: CodeableConcept): this;
  addReasonNotGiven(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonNotGiven', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonNotGiven', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonNotGiven`. One is added when the list is empty. */
  getReasonNotGivenFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonNotGiven()[0];
    return firstCodeableConcept === undefined ? this.addReasonNotGiven() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('ImmunizationExplanation', ImmunizationExplanation, false);

/**
 * Details of a reaction that follows immunization
 */
export class ImmunizationReaction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'detail', typeCode: 'Reference', targetResourceTypes: ['Observation'] }],
    },
    {
      elementName: 'reported',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reported', typeCode: 'boolean' }],
    },
  ];

  /** When reaction started (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Additional information on reaction (0..1) */
  detail?: Reference;

  /** Indicates self-reported reaction (0..1) */
  reported?: boolean;
  /** Id and extensions of the primitive `reported`. */
  _reported?: Element;

  override fhirType(): string {
    return 'Immunization.reaction';
  }

  /** FHIR JSON for this ImmunizationReaction, typed as the plain `ImmunizationReaction` data type. */
  override toJSON(): plainTypes.ImmunizationReaction {
    return this.serialize() as plainTypes.ImmunizationReaction;
  }

  /** When reaction started (0..1) */
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

  /** Additional information on reaction (0..1) Created when absent. */
  getDetail(): Reference {
    if (this.detail === undefined) {
      this.detail = new Reference();
    }
    return this.detail;
  }

  setDetail(detail: Reference | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** Indicates self-reported reaction (0..1) */
  getReported(): boolean | undefined {
    return this.reported;
  }

  /** Sets `reported`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setReported(reported: boolean | undefined): this {
    return this.setFieldValue('reported', reported);
  }

  hasReported(): boolean {
    return this.hasFieldValue('reported');
  }

  /** The element carrying the id and extensions of `reported`. Created when absent. */
  getReportedElement(): Element {
    if (this._reported === undefined) {
      this._reported = new Element();
    }
    return this._reported;
  }

  setReportedElement(reportedElement: Element | undefined): this {
    this._reported = reportedElement;
    return this;
  }
}

modelTypeRegistry.register('ImmunizationReaction', ImmunizationReaction, false);

/**
 * What protocol was followed
 */
export class ImmunizationVaccinationProtocol extends BackboneElement {
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
    {
      elementName: 'seriesDoses',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'seriesDoses', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'targetDisease',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'targetDisease', typeCode: 'CodeableConcept' }],
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseStatusReason', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Dose number within series (0..1) */
  doseSequence?: number;
  /** Id and extensions of the primitive `doseSequence`. */
  _doseSequence?: Element;

  /** Details of vaccine protocol (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Who is responsible for protocol (0..1) */
  authority?: Reference;

  /** Name of vaccine series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;

  /** Recommended number of doses for immunity (0..1) */
  seriesDoses?: number;
  /** Id and extensions of the primitive `seriesDoses`. */
  _seriesDoses?: Element;

  /** Disease immunized against (1..*) */
  targetDisease?: CodeableConcept[];

  /** Indicates if dose counts towards immunity (1..1) */
  doseStatus?: CodeableConcept;

  /** Why dose does (not) count (0..1) */
  doseStatusReason?: CodeableConcept;

  override fhirType(): string {
    return 'Immunization.vaccinationProtocol';
  }

  /** FHIR JSON for this ImmunizationVaccinationProtocol, typed as the plain `ImmunizationVaccinationProtocol` data type. */
  override toJSON(): plainTypes.ImmunizationVaccinationProtocol {
    return this.serialize() as plainTypes.ImmunizationVaccinationProtocol;
  }

  /** Dose number within series (0..1) */
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

  /** Details of vaccine protocol (0..1) */
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

  /** Recommended number of doses for immunity (0..1) */
  getSeriesDoses(): number | undefined {
    return this.seriesDoses;
  }

  /** Sets `seriesDoses`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setSeriesDoses(seriesDoses: number | undefined): this {
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

  /** Disease immunized against (1..*) Never undefined; an empty list is created when absent. */
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

  /** Indicates if dose counts towards immunity (1..1) Created when absent. */
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

  /** Why dose does (not) count (0..1) Created when absent. */
  getDoseStatusReason(): CodeableConcept {
    if (this.doseStatusReason === undefined) {
      this.doseStatusReason = new CodeableConcept();
    }
    return this.doseStatusReason;
  }

  setDoseStatusReason(doseStatusReason: CodeableConcept | undefined): this {
    return this.setFieldValue('doseStatusReason', doseStatusReason);
  }

  hasDoseStatusReason(): boolean {
    return this.hasFieldValue('doseStatusReason');
  }
}

modelTypeRegistry.register(
  'ImmunizationVaccinationProtocol',
  ImmunizationVaccinationProtocol,
  false
);
