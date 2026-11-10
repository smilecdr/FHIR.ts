/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
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
      elementName: 'statusReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
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
      elementName: 'occurrence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrenceString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'recorded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recorded', typeCode: 'dateTime' }],
    },
    {
      elementName: 'primarySource',
      minimum: 0,
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
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'ImmunizationPerformer' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'reasonCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reasonReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reasonReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition', 'DiagnosticReport', 'Observation'],
        },
      ],
    },
    {
      elementName: 'isSubpotent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isSubpotent', typeCode: 'boolean' }],
    },
    {
      elementName: 'subpotentReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subpotentReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'education',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'education', typeCode: 'ImmunizationEducation' }],
    },
    {
      elementName: 'programEligibility',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'programEligibility', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'fundingSource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fundingSource', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reaction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reaction', typeCode: 'ImmunizationReaction' }],
    },
    {
      elementName: 'protocolApplied',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'protocolApplied', typeCode: 'ImmunizationProtocolApplied' }],
    },
  ];

  readonly resourceType = 'Immunization';

  /** Business identifier (0..*) */
  identifier?: Identifier[];

  /** completed | entered-in-error | not-done (1..1) */
  status?: valueSetCodes.ImmunizationStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason not done (0..1) */
  statusReason?: CodeableConcept;

  /** Vaccine product administered (1..1) */
  vaccineCode?: CodeableConcept;

  /** Who was immunized (1..1) */
  patient?: Reference;

  /** Encounter immunization was part of (0..1) */
  encounter?: Reference;

  /** Vaccine administration date (1..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** Vaccine administration date (1..1) */
  occurrenceString?: string;
  /** Id and extensions of the primitive `occurrenceString`. */
  _occurrenceString?: Element;

  /** When the immunization was first captured in the subject's record (0..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;

  /** Indicates context the data was recorded in (0..1) */
  primarySource?: boolean;
  /** Id and extensions of the primitive `primarySource`. */
  _primarySource?: Element;

  /** Indicates the source of a secondarily reported record (0..1) */
  reportOrigin?: CodeableConcept;

  /** Where immunization occurred (0..1) */
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
  performer?: ImmunizationPerformer[];

  /** Additional immunization notes (0..*) */
  note?: Annotation[];

  /** Why immunization occurred (0..*) */
  reasonCode?: CodeableConcept[];

  /** Why immunization occurred (0..*) */
  reasonReference?: Reference[];

  /** Dose potency (0..1) */
  isSubpotent?: boolean;
  /** Id and extensions of the primitive `isSubpotent`. */
  _isSubpotent?: Element;

  /** Reason for being subpotent (0..*) */
  subpotentReason?: CodeableConcept[];

  /** Educational material presented to patient (0..*) */
  education?: ImmunizationEducation[];

  /** Patient eligibility for a vaccination program (0..*) */
  programEligibility?: CodeableConcept[];

  /** Funding source for the vaccine (0..1) */
  fundingSource?: CodeableConcept;

  /** Details of a reaction that follows immunization (0..*) */
  reaction?: ImmunizationReaction[];

  /** Protocol followed by the provider (0..*) */
  protocolApplied?: ImmunizationProtocolApplied[];

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

  /** completed | entered-in-error | not-done (1..1) */
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

  /** Reason not done (0..1) Created when absent. */
  getStatusReason(): CodeableConcept {
    if (this.statusReason === undefined) {
      this.statusReason = new CodeableConcept();
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableConcept | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
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

  /** Encounter immunization was part of (0..1) Created when absent. */
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

  /** Vaccine administration date (1..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | undefined {
    return this.getChoiceValue<string>('occurrence');
  }

  /** True when any type of `occurrence[x]` is set. */
  hasOccurrence(): boolean {
    return this.hasChoiceValue('occurrence');
  }

  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrence[x]` as dateTime and clears every other type of it. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  getOccurrenceString(): string | undefined {
    return this.occurrenceString;
  }

  /** Sets `occurrence[x]` as string and clears every other type of it. */
  setOccurrenceString(occurrenceString: string | undefined): this {
    return this.setFieldValue('occurrenceString', occurrenceString);
  }

  hasOccurrenceString(): boolean {
    return this.hasFieldValue('occurrenceString');
  }

  /** When the immunization was first captured in the subject's record (0..1) */
  getRecorded(): string | undefined {
    return this.recorded;
  }

  /** Sets `recorded`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setRecorded(recorded: string | undefined): this {
    return this.setFieldValue('recorded', recorded);
  }

  hasRecorded(): boolean {
    return this.hasFieldValue('recorded');
  }

  /** The element carrying the id and extensions of `recorded`. Created when absent. */
  getRecordedElement(): Element {
    if (this._recorded === undefined) {
      this._recorded = new Element();
    }
    return this._recorded;
  }

  setRecordedElement(recordedElement: Element | undefined): this {
    this._recorded = recordedElement;
    return this;
  }

  /** Indicates context the data was recorded in (0..1) */
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

  /** Where immunization occurred (0..1) Created when absent. */
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
  getPerformer(): ImmunizationPerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: ImmunizationPerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty ImmunizationPerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): ImmunizationPerformer;
  /** Appends the given ImmunizationPerformer to `performer` and returns this object for chaining. */
  addPerformer(immunizationPerformer: ImmunizationPerformer): this;
  addPerformer(immunizationPerformer?: ImmunizationPerformer): ImmunizationPerformer | this {
    if (immunizationPerformer !== undefined) {
      return this.addFieldValue('performer', immunizationPerformer);
    }
    const createdImmunizationPerformer = new ImmunizationPerformer();
    this.addFieldValue('performer', createdImmunizationPerformer);
    return createdImmunizationPerformer;
  }

  /** The first ImmunizationPerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): ImmunizationPerformer {
    const firstImmunizationPerformer = this.getPerformer()[0];
    return firstImmunizationPerformer === undefined
      ? this.addPerformer()
      : firstImmunizationPerformer;
  }

  /** Additional immunization notes (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why immunization occurred (0..*) Never undefined; an empty list is created when absent. */
  getReasonCode(): CodeableConcept[] {
    if (this.reasonCode === undefined) {
      this.reasonCode = [];
    }
    return this.reasonCode;
  }

  setReasonCode(reasonCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonCode', reasonCode);
  }

  hasReasonCode(): boolean {
    return this.hasFieldValue('reasonCode');
  }

  /** Appends a new, empty CodeableConcept to `reasonCode` and returns it so it can be filled in. */
  addReasonCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonCode` and returns this object for chaining. */
  addReasonCode(codeableConcept: CodeableConcept): this;
  addReasonCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonCode`. One is added when the list is empty. */
  getReasonCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonCode()[0];
    return firstCodeableConcept === undefined ? this.addReasonCode() : firstCodeableConcept;
  }

  /** Why immunization occurred (0..*) Never undefined; an empty list is created when absent. */
  getReasonReference(): Reference[] {
    if (this.reasonReference === undefined) {
      this.reasonReference = [];
    }
    return this.reasonReference;
  }

  setReasonReference(reasonReference: Reference[] | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** Appends a new, empty Reference to `reasonReference` and returns it so it can be filled in. */
  addReasonReference(): Reference;
  /** Appends the given Reference to `reasonReference` and returns this object for chaining. */
  addReasonReference(reference: Reference): this;
  addReasonReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reasonReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reasonReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reasonReference`. One is added when the list is empty. */
  getReasonReferenceFirstRep(): Reference {
    const firstReference = this.getReasonReference()[0];
    return firstReference === undefined ? this.addReasonReference() : firstReference;
  }

  /** Dose potency (0..1) */
  getIsSubpotent(): boolean | undefined {
    return this.isSubpotent;
  }

  /** Sets `isSubpotent`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsSubpotent(isSubpotent: boolean | undefined): this {
    return this.setFieldValue('isSubpotent', isSubpotent);
  }

  hasIsSubpotent(): boolean {
    return this.hasFieldValue('isSubpotent');
  }

  /** The element carrying the id and extensions of `isSubpotent`. Created when absent. */
  getIsSubpotentElement(): Element {
    if (this._isSubpotent === undefined) {
      this._isSubpotent = new Element();
    }
    return this._isSubpotent;
  }

  setIsSubpotentElement(isSubpotentElement: Element | undefined): this {
    this._isSubpotent = isSubpotentElement;
    return this;
  }

  /** Reason for being subpotent (0..*) Never undefined; an empty list is created when absent. */
  getSubpotentReason(): CodeableConcept[] {
    if (this.subpotentReason === undefined) {
      this.subpotentReason = [];
    }
    return this.subpotentReason;
  }

  setSubpotentReason(subpotentReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('subpotentReason', subpotentReason);
  }

  hasSubpotentReason(): boolean {
    return this.hasFieldValue('subpotentReason');
  }

  /** Appends a new, empty CodeableConcept to `subpotentReason` and returns it so it can be filled in. */
  addSubpotentReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `subpotentReason` and returns this object for chaining. */
  addSubpotentReason(codeableConcept: CodeableConcept): this;
  addSubpotentReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('subpotentReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('subpotentReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `subpotentReason`. One is added when the list is empty. */
  getSubpotentReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSubpotentReason()[0];
    return firstCodeableConcept === undefined ? this.addSubpotentReason() : firstCodeableConcept;
  }

  /** Educational material presented to patient (0..*) Never undefined; an empty list is created when absent. */
  getEducation(): ImmunizationEducation[] {
    if (this.education === undefined) {
      this.education = [];
    }
    return this.education;
  }

  setEducation(education: ImmunizationEducation[] | undefined): this {
    return this.setFieldValue('education', education);
  }

  hasEducation(): boolean {
    return this.hasFieldValue('education');
  }

  /** Appends a new, empty ImmunizationEducation to `education` and returns it so it can be filled in. */
  addEducation(): ImmunizationEducation;
  /** Appends the given ImmunizationEducation to `education` and returns this object for chaining. */
  addEducation(immunizationEducation: ImmunizationEducation): this;
  addEducation(immunizationEducation?: ImmunizationEducation): ImmunizationEducation | this {
    if (immunizationEducation !== undefined) {
      return this.addFieldValue('education', immunizationEducation);
    }
    const createdImmunizationEducation = new ImmunizationEducation();
    this.addFieldValue('education', createdImmunizationEducation);
    return createdImmunizationEducation;
  }

  /** The first ImmunizationEducation of `education`. One is added when the list is empty. */
  getEducationFirstRep(): ImmunizationEducation {
    const firstImmunizationEducation = this.getEducation()[0];
    return firstImmunizationEducation === undefined
      ? this.addEducation()
      : firstImmunizationEducation;
  }

  /** Patient eligibility for a vaccination program (0..*) Never undefined; an empty list is created when absent. */
  getProgramEligibility(): CodeableConcept[] {
    if (this.programEligibility === undefined) {
      this.programEligibility = [];
    }
    return this.programEligibility;
  }

  setProgramEligibility(programEligibility: CodeableConcept[] | undefined): this {
    return this.setFieldValue('programEligibility', programEligibility);
  }

  hasProgramEligibility(): boolean {
    return this.hasFieldValue('programEligibility');
  }

  /** Appends a new, empty CodeableConcept to `programEligibility` and returns it so it can be filled in. */
  addProgramEligibility(): CodeableConcept;
  /** Appends the given CodeableConcept to `programEligibility` and returns this object for chaining. */
  addProgramEligibility(codeableConcept: CodeableConcept): this;
  addProgramEligibility(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('programEligibility', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('programEligibility', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `programEligibility`. One is added when the list is empty. */
  getProgramEligibilityFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProgramEligibility()[0];
    return firstCodeableConcept === undefined ? this.addProgramEligibility() : firstCodeableConcept;
  }

  /** Funding source for the vaccine (0..1) Created when absent. */
  getFundingSource(): CodeableConcept {
    if (this.fundingSource === undefined) {
      this.fundingSource = new CodeableConcept();
    }
    return this.fundingSource;
  }

  setFundingSource(fundingSource: CodeableConcept | undefined): this {
    return this.setFieldValue('fundingSource', fundingSource);
  }

  hasFundingSource(): boolean {
    return this.hasFieldValue('fundingSource');
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

  /** Protocol followed by the provider (0..*) Never undefined; an empty list is created when absent. */
  getProtocolApplied(): ImmunizationProtocolApplied[] {
    if (this.protocolApplied === undefined) {
      this.protocolApplied = [];
    }
    return this.protocolApplied;
  }

  setProtocolApplied(protocolApplied: ImmunizationProtocolApplied[] | undefined): this {
    return this.setFieldValue('protocolApplied', protocolApplied);
  }

  hasProtocolApplied(): boolean {
    return this.hasFieldValue('protocolApplied');
  }

  /** Appends a new, empty ImmunizationProtocolApplied to `protocolApplied` and returns it so it can be filled in. */
  addProtocolApplied(): ImmunizationProtocolApplied;
  /** Appends the given ImmunizationProtocolApplied to `protocolApplied` and returns this object for chaining. */
  addProtocolApplied(immunizationProtocolApplied: ImmunizationProtocolApplied): this;
  addProtocolApplied(
    immunizationProtocolApplied?: ImmunizationProtocolApplied
  ): ImmunizationProtocolApplied | this {
    if (immunizationProtocolApplied !== undefined) {
      return this.addFieldValue('protocolApplied', immunizationProtocolApplied);
    }
    const createdImmunizationProtocolApplied = new ImmunizationProtocolApplied();
    this.addFieldValue('protocolApplied', createdImmunizationProtocolApplied);
    return createdImmunizationProtocolApplied;
  }

  /** The first ImmunizationProtocolApplied of `protocolApplied`. One is added when the list is empty. */
  getProtocolAppliedFirstRep(): ImmunizationProtocolApplied {
    const firstImmunizationProtocolApplied = this.getProtocolApplied()[0];
    return firstImmunizationProtocolApplied === undefined
      ? this.addProtocolApplied()
      : firstImmunizationProtocolApplied;
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
export class ImmunizationPerformer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'function',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
  ];

  /** What type of performance was done (0..1) */
  function?: CodeableConcept;

  /** Individual or organization who was performing (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'Immunization.performer';
  }

  /** FHIR JSON for this ImmunizationPerformer, typed as the plain `ImmunizationPerformer` data type. */
  override toJSON(): plainTypes.ImmunizationPerformer {
    return this.serialize() as plainTypes.ImmunizationPerformer;
  }

  /** What type of performance was done (0..1) Created when absent. */
  getFunction(): CodeableConcept {
    if (this.function === undefined) {
      this.function = new CodeableConcept();
    }
    return this.function;
  }

  setFunction(functionValue: CodeableConcept | undefined): this {
    return this.setFieldValue('function', functionValue);
  }

  hasFunction(): boolean {
    return this.hasFieldValue('function');
  }

  /** Individual or organization who was performing (1..1) Created when absent. */
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

modelTypeRegistry.register('ImmunizationPerformer', ImmunizationPerformer, false);

/**
 * Educational material presented to patient
 */
export class ImmunizationEducation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'documentType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentType', typeCode: 'string' }],
    },
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'uri' }],
    },
    {
      elementName: 'publicationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'publicationDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'presentationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'presentationDate', typeCode: 'dateTime' }],
    },
  ];

  /** Educational material document identifier (0..1) */
  documentType?: string;
  /** Id and extensions of the primitive `documentType`. */
  _documentType?: Element;

  /** Educational material reference pointer (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;

  /** Educational material publication date (0..1) */
  publicationDate?: string;
  /** Id and extensions of the primitive `publicationDate`. */
  _publicationDate?: Element;

  /** Educational material presentation date (0..1) */
  presentationDate?: string;
  /** Id and extensions of the primitive `presentationDate`. */
  _presentationDate?: Element;

  override fhirType(): string {
    return 'Immunization.education';
  }

  /** FHIR JSON for this ImmunizationEducation, typed as the plain `ImmunizationEducation` data type. */
  override toJSON(): plainTypes.ImmunizationEducation {
    return this.serialize() as plainTypes.ImmunizationEducation;
  }

  /** Educational material document identifier (0..1) */
  getDocumentType(): string | undefined {
    return this.documentType;
  }

  /** Sets `documentType`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDocumentType(documentType: string | undefined): this {
    return this.setFieldValue('documentType', documentType);
  }

  hasDocumentType(): boolean {
    return this.hasFieldValue('documentType');
  }

  /** The element carrying the id and extensions of `documentType`. Created when absent. */
  getDocumentTypeElement(): Element {
    if (this._documentType === undefined) {
      this._documentType = new Element();
    }
    return this._documentType;
  }

  setDocumentTypeElement(documentTypeElement: Element | undefined): this {
    this._documentType = documentTypeElement;
    return this;
  }

  /** Educational material reference pointer (0..1) */
  getReference(): string | undefined {
    return this.reference;
  }

  /** Sets `reference`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setReference(reference: string | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** The element carrying the id and extensions of `reference`. Created when absent. */
  getReferenceElement(): Element {
    if (this._reference === undefined) {
      this._reference = new Element();
    }
    return this._reference;
  }

  setReferenceElement(referenceElement: Element | undefined): this {
    this._reference = referenceElement;
    return this;
  }

  /** Educational material publication date (0..1) */
  getPublicationDate(): string | undefined {
    return this.publicationDate;
  }

  /** Sets `publicationDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPublicationDate(publicationDate: string | undefined): this {
    return this.setFieldValue('publicationDate', publicationDate);
  }

  hasPublicationDate(): boolean {
    return this.hasFieldValue('publicationDate');
  }

  /** The element carrying the id and extensions of `publicationDate`. Created when absent. */
  getPublicationDateElement(): Element {
    if (this._publicationDate === undefined) {
      this._publicationDate = new Element();
    }
    return this._publicationDate;
  }

  setPublicationDateElement(publicationDateElement: Element | undefined): this {
    this._publicationDate = publicationDateElement;
    return this;
  }

  /** Educational material presentation date (0..1) */
  getPresentationDate(): string | undefined {
    return this.presentationDate;
  }

  /** Sets `presentationDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPresentationDate(presentationDate: string | undefined): this {
    return this.setFieldValue('presentationDate', presentationDate);
  }

  hasPresentationDate(): boolean {
    return this.hasFieldValue('presentationDate');
  }

  /** The element carrying the id and extensions of `presentationDate`. Created when absent. */
  getPresentationDateElement(): Element {
    if (this._presentationDate === undefined) {
      this._presentationDate = new Element();
    }
    return this._presentationDate;
  }

  setPresentationDateElement(presentationDateElement: Element | undefined): this {
    this._presentationDate = presentationDateElement;
    return this;
  }
}

modelTypeRegistry.register('ImmunizationEducation', ImmunizationEducation, false);

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
 * Protocol followed by the provider
 */
export class ImmunizationProtocolApplied extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'series',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'series', typeCode: 'string' }],
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
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'targetDisease', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'doseNumber',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'doseNumberPositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'doseNumberString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'seriesDoses',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'seriesDosesPositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'seriesDosesString', typeCode: 'string' },
      ],
    },
  ];

  /** Name of vaccine series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;

  /** Who is responsible for publishing the recommendations (0..1) */
  authority?: Reference;

  /** Vaccine preventatable disease being targetted (0..*) */
  targetDisease?: CodeableConcept[];

  /** Dose number within series (1..1) */
  doseNumberPositiveInt?: number;
  /** Id and extensions of the primitive `doseNumberPositiveInt`. */
  _doseNumberPositiveInt?: Element;
  /** Dose number within series (1..1) */
  doseNumberString?: string;
  /** Id and extensions of the primitive `doseNumberString`. */
  _doseNumberString?: Element;

  /** Recommended number of doses for immunity (0..1) */
  seriesDosesPositiveInt?: number;
  /** Id and extensions of the primitive `seriesDosesPositiveInt`. */
  _seriesDosesPositiveInt?: Element;
  /** Recommended number of doses for immunity (0..1) */
  seriesDosesString?: string;
  /** Id and extensions of the primitive `seriesDosesString`. */
  _seriesDosesString?: Element;

  override fhirType(): string {
    return 'Immunization.protocolApplied';
  }

  /** FHIR JSON for this ImmunizationProtocolApplied, typed as the plain `ImmunizationProtocolApplied` data type. */
  override toJSON(): plainTypes.ImmunizationProtocolApplied {
    return this.serialize() as plainTypes.ImmunizationProtocolApplied;
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

  /** Vaccine preventatable disease being targetted (0..*) Never undefined; an empty list is created when absent. */
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

  /** Dose number within series (1..1) Whichever type of `doseNumber[x]` is set. */
  getDoseNumber(): number | string | undefined {
    return this.getChoiceValue<number | string>('doseNumber');
  }

  /** True when any type of `doseNumber[x]` is set. */
  hasDoseNumber(): boolean {
    return this.hasChoiceValue('doseNumber');
  }

  getDoseNumberPositiveInt(): number | undefined {
    return this.doseNumberPositiveInt;
  }

  /** Sets `doseNumber[x]` as positiveInt and clears every other type of it. */
  setDoseNumberPositiveInt(doseNumberPositiveInt: number | undefined): this {
    return this.setFieldValue('doseNumberPositiveInt', doseNumberPositiveInt);
  }

  hasDoseNumberPositiveInt(): boolean {
    return this.hasFieldValue('doseNumberPositiveInt');
  }

  getDoseNumberString(): string | undefined {
    return this.doseNumberString;
  }

  /** Sets `doseNumber[x]` as string and clears every other type of it. */
  setDoseNumberString(doseNumberString: string | undefined): this {
    return this.setFieldValue('doseNumberString', doseNumberString);
  }

  hasDoseNumberString(): boolean {
    return this.hasFieldValue('doseNumberString');
  }

  /** Recommended number of doses for immunity (0..1) Whichever type of `seriesDoses[x]` is set. */
  getSeriesDoses(): number | string | undefined {
    return this.getChoiceValue<number | string>('seriesDoses');
  }

  /** True when any type of `seriesDoses[x]` is set. */
  hasSeriesDoses(): boolean {
    return this.hasChoiceValue('seriesDoses');
  }

  getSeriesDosesPositiveInt(): number | undefined {
    return this.seriesDosesPositiveInt;
  }

  /** Sets `seriesDoses[x]` as positiveInt and clears every other type of it. */
  setSeriesDosesPositiveInt(seriesDosesPositiveInt: number | undefined): this {
    return this.setFieldValue('seriesDosesPositiveInt', seriesDosesPositiveInt);
  }

  hasSeriesDosesPositiveInt(): boolean {
    return this.hasFieldValue('seriesDosesPositiveInt');
  }

  getSeriesDosesString(): string | undefined {
    return this.seriesDosesString;
  }

  /** Sets `seriesDoses[x]` as string and clears every other type of it. */
  setSeriesDosesString(seriesDosesString: string | undefined): this {
    return this.setFieldValue('seriesDosesString', seriesDosesString);
  }

  hasSeriesDosesString(): boolean {
    return this.hasFieldValue('seriesDosesString');
  }
}

modelTypeRegistry.register('ImmunizationProtocolApplied', ImmunizationProtocolApplied, false);
