/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
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
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CarePlan',
            'ImmunizationRecommendation',
            'MedicationRequest',
            'ServiceRequest',
          ],
        },
      ],
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
      elementName: 'administeredProduct',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'administeredProduct', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'manufacturer', typeCode: 'CodeableReference' }],
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
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'Reference' }],
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
      elementName: 'primarySource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'primarySource', typeCode: 'boolean' }],
    },
    {
      elementName: 'informationSource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'informationSource', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
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
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
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
      elementName: 'programEligibility',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'programEligibility', typeCode: 'ImmunizationProgramEligibility' }],
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

  /** Authority that the immunization event is based on (0..*) */
  basedOn?: Reference[];

  /** completed | entered-in-error | not-done (1..1) */
  status?: valueSetCodes.ImmunizationStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;

  /** Vaccine administered (1..1) */
  vaccineCode?: CodeableConcept;

  /** Product that was administered (0..1) */
  administeredProduct?: CodeableReference;

  /** Vaccine manufacturer (0..1) */
  manufacturer?: CodeableReference;

  /** Vaccine lot number (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;

  /** Vaccine expiration date (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;

  /** Who was immunized (1..1) */
  patient?: Reference;

  /** Encounter immunization was part of (0..1) */
  encounter?: Reference;

  /** Additional information in support of the immunization (0..*) */
  supportingInformation?: Reference[];

  /** Vaccine administration date (1..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** Vaccine administration date (1..1) */
  occurrenceString?: string;
  /** Id and extensions of the primitive `occurrenceString`. */
  _occurrenceString?: Element;

  /** Indicates context the data was captured in (0..1) */
  primarySource?: boolean;
  /** Id and extensions of the primitive `primarySource`. */
  _primarySource?: Element;

  /** Indicates the source of a reported record (0..1) */
  informationSource?: CodeableReference;

  /** Where immunization occurred (0..1) */
  location?: Reference;

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
  reason?: CodeableReference[];

  /** Dose potency (0..1) */
  isSubpotent?: boolean;
  /** Id and extensions of the primitive `isSubpotent`. */
  _isSubpotent?: Element;

  /** Reason for being subpotent (0..*) */
  subpotentReason?: CodeableConcept[];

  /** Patient eligibility for a specific vaccination program (0..*) */
  programEligibility?: ImmunizationProgramEligibility[];

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

  /** Authority that the immunization event is based on (0..*) Never undefined; an empty list is created when absent. */
  getBasedOn(): Reference[] {
    if (this.basedOn === undefined) {
      this.basedOn = [];
    }
    return this.basedOn;
  }

  setBasedOn(basedOn: Reference[] | undefined): this {
    return this.setFieldValue('basedOn', basedOn);
  }

  hasBasedOn(): boolean {
    return this.hasFieldValue('basedOn');
  }

  /** Appends a new, empty Reference to `basedOn` and returns it so it can be filled in. */
  addBasedOn(): Reference;
  /** Appends the given Reference to `basedOn` and returns this object for chaining. */
  addBasedOn(reference: Reference): this;
  addBasedOn(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('basedOn', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('basedOn', createdReference);
    return createdReference;
  }

  /** The first Reference of `basedOn`. One is added when the list is empty. */
  getBasedOnFirstRep(): Reference {
    const firstReference = this.getBasedOn()[0];
    return firstReference === undefined ? this.addBasedOn() : firstReference;
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

  /** Reason for current status (0..1) Created when absent. */
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

  /** Vaccine administered (1..1) Created when absent. */
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

  /** Product that was administered (0..1) Created when absent. */
  getAdministeredProduct(): CodeableReference {
    if (this.administeredProduct === undefined) {
      this.administeredProduct = new CodeableReference();
    }
    return this.administeredProduct;
  }

  setAdministeredProduct(administeredProduct: CodeableReference | undefined): this {
    return this.setFieldValue('administeredProduct', administeredProduct);
  }

  hasAdministeredProduct(): boolean {
    return this.hasFieldValue('administeredProduct');
  }

  /** Vaccine manufacturer (0..1) Created when absent. */
  getManufacturer(): CodeableReference {
    if (this.manufacturer === undefined) {
      this.manufacturer = new CodeableReference();
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: CodeableReference | undefined): this {
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

  /** Additional information in support of the immunization (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInformation(): Reference[] {
    if (this.supportingInformation === undefined) {
      this.supportingInformation = [];
    }
    return this.supportingInformation;
  }

  setSupportingInformation(supportingInformation: Reference[] | undefined): this {
    return this.setFieldValue('supportingInformation', supportingInformation);
  }

  hasSupportingInformation(): boolean {
    return this.hasFieldValue('supportingInformation');
  }

  /** Appends a new, empty Reference to `supportingInformation` and returns it so it can be filled in. */
  addSupportingInformation(): Reference;
  /** Appends the given Reference to `supportingInformation` and returns this object for chaining. */
  addSupportingInformation(reference: Reference): this;
  addSupportingInformation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supportingInformation', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supportingInformation', createdReference);
    return createdReference;
  }

  /** The first Reference of `supportingInformation`. One is added when the list is empty. */
  getSupportingInformationFirstRep(): Reference {
    const firstReference = this.getSupportingInformation()[0];
    return firstReference === undefined ? this.addSupportingInformation() : firstReference;
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

  /** Indicates context the data was captured in (0..1) */
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

  /** Indicates the source of a reported record (0..1) Created when absent. */
  getInformationSource(): CodeableReference {
    if (this.informationSource === undefined) {
      this.informationSource = new CodeableReference();
    }
    return this.informationSource;
  }

  setInformationSource(informationSource: CodeableReference | undefined): this {
    return this.setFieldValue('informationSource', informationSource);
  }

  hasInformationSource(): boolean {
    return this.hasFieldValue('informationSource');
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
  getReason(): CodeableReference[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: CodeableReference[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty CodeableReference to `reason` and returns it so it can be filled in. */
  addReason(): CodeableReference;
  /** Appends the given CodeableReference to `reason` and returns this object for chaining. */
  addReason(codeableReference: CodeableReference): this;
  addReason(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('reason', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('reason', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): CodeableReference {
    const firstCodeableReference = this.getReason()[0];
    return firstCodeableReference === undefined ? this.addReason() : firstCodeableReference;
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

  /** Patient eligibility for a specific vaccination program (0..*) Never undefined; an empty list is created when absent. */
  getProgramEligibility(): ImmunizationProgramEligibility[] {
    if (this.programEligibility === undefined) {
      this.programEligibility = [];
    }
    return this.programEligibility;
  }

  setProgramEligibility(programEligibility: ImmunizationProgramEligibility[] | undefined): this {
    return this.setFieldValue('programEligibility', programEligibility);
  }

  hasProgramEligibility(): boolean {
    return this.hasFieldValue('programEligibility');
  }

  /** Appends a new, empty ImmunizationProgramEligibility to `programEligibility` and returns it so it can be filled in. */
  addProgramEligibility(): ImmunizationProgramEligibility;
  /** Appends the given ImmunizationProgramEligibility to `programEligibility` and returns this object for chaining. */
  addProgramEligibility(immunizationProgramEligibility: ImmunizationProgramEligibility): this;
  addProgramEligibility(
    immunizationProgramEligibility?: ImmunizationProgramEligibility
  ): ImmunizationProgramEligibility | this {
    if (immunizationProgramEligibility !== undefined) {
      return this.addFieldValue('programEligibility', immunizationProgramEligibility);
    }
    const createdImmunizationProgramEligibility = new ImmunizationProgramEligibility();
    this.addFieldValue('programEligibility', createdImmunizationProgramEligibility);
    return createdImmunizationProgramEligibility;
  }

  /** The first ImmunizationProgramEligibility of `programEligibility`. One is added when the list is empty. */
  getProgramEligibilityFirstRep(): ImmunizationProgramEligibility {
    const firstImmunizationProgramEligibility = this.getProgramEligibility()[0];
    return firstImmunizationProgramEligibility === undefined
      ? this.addProgramEligibility()
      : firstImmunizationProgramEligibility;
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
          targetResourceTypes: [
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
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
 * Patient eligibility for a specific vaccination program
 */
export class ImmunizationProgramEligibility extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'program',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'program', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'programStatus',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'programStatus', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The program that eligibility is declared for (1..1) */
  program?: CodeableConcept;

  /** The patient's eligibility status for the program (1..1) */
  programStatus?: CodeableConcept;

  override fhirType(): string {
    return 'Immunization.programEligibility';
  }

  /** FHIR JSON for this ImmunizationProgramEligibility, typed as the plain `ImmunizationProgramEligibility` data type. */
  override toJSON(): plainTypes.ImmunizationProgramEligibility {
    return this.serialize() as plainTypes.ImmunizationProgramEligibility;
  }

  /** The program that eligibility is declared for (1..1) Created when absent. */
  getProgram(): CodeableConcept {
    if (this.program === undefined) {
      this.program = new CodeableConcept();
    }
    return this.program;
  }

  setProgram(program: CodeableConcept | undefined): this {
    return this.setFieldValue('program', program);
  }

  hasProgram(): boolean {
    return this.hasFieldValue('program');
  }

  /** The patient's eligibility status for the program (1..1) Created when absent. */
  getProgramStatus(): CodeableConcept {
    if (this.programStatus === undefined) {
      this.programStatus = new CodeableConcept();
    }
    return this.programStatus;
  }

  setProgramStatus(programStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('programStatus', programStatus);
  }

  hasProgramStatus(): boolean {
    return this.hasFieldValue('programStatus');
  }
}

modelTypeRegistry.register('ImmunizationProgramEligibility', ImmunizationProgramEligibility, false);

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
      elementName: 'manifestation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'manifestation', typeCode: 'CodeableReference' }],
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
  manifestation?: CodeableReference;

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
  getManifestation(): CodeableReference {
    if (this.manifestation === undefined) {
      this.manifestation = new CodeableReference();
    }
    return this.manifestation;
  }

  setManifestation(manifestation: CodeableReference | undefined): this {
    return this.setFieldValue('manifestation', manifestation);
  }

  hasManifestation(): boolean {
    return this.hasFieldValue('manifestation');
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

  /** Name of vaccine series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;

  /** Who is responsible for publishing the recommendations (0..1) */
  authority?: Reference;

  /** Vaccine preventatable disease being targeted (0..*) */
  targetDisease?: CodeableConcept[];

  /** Dose number within series (1..1) */
  doseNumber?: string;
  /** Id and extensions of the primitive `doseNumber`. */
  _doseNumber?: Element;

  /** Recommended number of doses for immunity (0..1) */
  seriesDoses?: string;
  /** Id and extensions of the primitive `seriesDoses`. */
  _seriesDoses?: Element;

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

  /** Vaccine preventatable disease being targeted (0..*) Never undefined; an empty list is created when absent. */
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

  /** Dose number within series (1..1) */
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

modelTypeRegistry.register('ImmunizationProtocolApplied', ImmunizationProtocolApplied, false);
