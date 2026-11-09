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
import { Dosage } from './dosage';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient. This includes a description of the medication product (supply) provided and the instructions for administering the medication. The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export class MedicationDispense extends DomainResource {
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
      types: [{ jsonKey: 'basedOn', typeCode: 'Reference', targetResourceTypes: ['CarePlan'] }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'partOf',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationAdministration', 'Procedure'],
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
          allowedCodes: valueSetCodes.MedicationDispenseStatusCodes,
        },
      ],
    },
    {
      elementName: 'notPerformedReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'notPerformedReason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'statusChanged',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusChanged', typeCode: 'dateTime' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'medication',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'medication', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
      ],
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
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'MedicationDispensePerformer' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'authorizingPrescription',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'authorizingPrescription',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationRequest'],
        },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'daysSupply',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'daysSupply', typeCode: 'Quantity' }],
    },
    {
      elementName: 'recorded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recorded', typeCode: 'dateTime' }],
    },
    {
      elementName: 'whenPrepared',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'whenPrepared', typeCode: 'dateTime' }],
    },
    {
      elementName: 'whenHandedOver',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'whenHandedOver', typeCode: 'dateTime' }],
    },
    {
      elementName: 'destination',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'destination', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'receiver',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'receiver',
          typeCode: 'Reference',
          targetResourceTypes: [
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
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'renderedDosageInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'renderedDosageInstruction', typeCode: 'markdown' }],
    },
    {
      elementName: 'dosageInstruction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dosageInstruction', typeCode: 'Dosage' }],
    },
    {
      elementName: 'substitution',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'substitution', typeCode: 'MedicationDispenseSubstitution' }],
    },
    {
      elementName: 'eventHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'eventHistory', typeCode: 'Reference', targetResourceTypes: ['Provenance'] },
      ],
    },
  ];

  readonly resourceType = 'MedicationDispense';

  /** External identifier (0..*) */
  identifier?: Identifier[];

  /** Plan that is fulfilled by this dispense (0..*) */
  basedOn?: Reference[];

  /** Event that dispense is part of (0..*) */
  partOf?: Reference[];

  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown (1..1) */
  status?: valueSetCodes.MedicationDispenseStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Why a dispense was not performed (0..1) */
  notPerformedReason?: CodeableReference;

  /** When the status changed (0..1) */
  statusChanged?: string;
  /** Id and extensions of the primitive `statusChanged`. */
  _statusChanged?: Element;

  /** Type of medication dispense (0..*) */
  category?: CodeableConcept[];

  /** What medication was supplied (1..1) */
  medication?: CodeableReference;

  /** Who the dispense is for (1..1) */
  subject?: Reference;

  /** Encounter associated with event (0..1) */
  encounter?: Reference;

  /** Information that supports the dispensing of the medication (0..*) */
  supportingInformation?: Reference[];

  /** Who performed event (0..*) */
  performer?: MedicationDispensePerformer[];

  /** Where the dispense occurred (0..1) */
  location?: Reference;

  /** Medication order that authorizes the dispense (0..*) */
  authorizingPrescription?: Reference[];

  /** Trial fill, partial fill, emergency fill, etc (0..1) */
  type?: CodeableConcept;

  /** Amount dispensed (0..1) */
  quantity?: Quantity;

  /** Amount of medication expressed as a timing amount (0..1) */
  daysSupply?: Quantity;

  /** When the recording of the dispense started (0..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;

  /** When product was packaged and reviewed (0..1) */
  whenPrepared?: string;
  /** Id and extensions of the primitive `whenPrepared`. */
  _whenPrepared?: Element;

  /** When product was given out (0..1) */
  whenHandedOver?: string;
  /** Id and extensions of the primitive `whenHandedOver`. */
  _whenHandedOver?: Element;

  /** Where the medication was/will be sent (0..1) */
  destination?: Reference;

  /** Who collected the medication or where the medication was delivered (0..*) */
  receiver?: Reference[];

  /** Information about the dispense (0..*) */
  note?: Annotation[];

  /** Full representation of the dosage instructions (0..1) */
  renderedDosageInstruction?: string;
  /** Id and extensions of the primitive `renderedDosageInstruction`. */
  _renderedDosageInstruction?: Element;

  /** How the medication is to be used by the patient or administered by the caregiver (0..*) */
  dosageInstruction?: Dosage[];

  /** Whether a substitution was performed on the dispense (0..1) */
  substitution?: MedicationDispenseSubstitution;

  /** A list of relevant lifecycle events (0..*) */
  eventHistory?: Reference[];

  override fhirType(): string {
    return 'MedicationDispense';
  }

  /** FHIR JSON for this MedicationDispense, typed as the plain `MedicationDispense` data type. */
  override toJSON(): plainTypes.MedicationDispense {
    return this.serialize() as plainTypes.MedicationDispense;
  }

  /** External identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Plan that is fulfilled by this dispense (0..*) Never undefined; an empty list is created when absent. */
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

  /** Event that dispense is part of (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): Reference[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends a new, empty Reference to `partOf` and returns it so it can be filled in. */
  addPartOf(): Reference;
  /** Appends the given Reference to `partOf` and returns this object for chaining. */
  addPartOf(reference: Reference): this;
  addPartOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('partOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('partOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `partOf`. One is added when the list is empty. */
  getPartOfFirstRep(): Reference {
    const firstReference = this.getPartOf()[0];
    return firstReference === undefined ? this.addPartOf() : firstReference;
  }

  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown (1..1) */
  getStatus(): valueSetCodes.MedicationDispenseStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationDispenseStatusCodes | undefined): this {
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

  /** Why a dispense was not performed (0..1) Created when absent. */
  getNotPerformedReason(): CodeableReference {
    if (this.notPerformedReason === undefined) {
      this.notPerformedReason = new CodeableReference();
    }
    return this.notPerformedReason;
  }

  setNotPerformedReason(notPerformedReason: CodeableReference | undefined): this {
    return this.setFieldValue('notPerformedReason', notPerformedReason);
  }

  hasNotPerformedReason(): boolean {
    return this.hasFieldValue('notPerformedReason');
  }

  /** When the status changed (0..1) */
  getStatusChanged(): string | undefined {
    return this.statusChanged;
  }

  /** Sets `statusChanged`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStatusChanged(statusChanged: string | undefined): this {
    return this.setFieldValue('statusChanged', statusChanged);
  }

  hasStatusChanged(): boolean {
    return this.hasFieldValue('statusChanged');
  }

  /** The element carrying the id and extensions of `statusChanged`. Created when absent. */
  getStatusChangedElement(): Element {
    if (this._statusChanged === undefined) {
      this._statusChanged = new Element();
    }
    return this._statusChanged;
  }

  setStatusChangedElement(statusChangedElement: Element | undefined): this {
    this._statusChanged = statusChangedElement;
    return this;
  }

  /** Type of medication dispense (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** What medication was supplied (1..1) Created when absent. */
  getMedication(): CodeableReference {
    if (this.medication === undefined) {
      this.medication = new CodeableReference();
    }
    return this.medication;
  }

  setMedication(medication: CodeableReference | undefined): this {
    return this.setFieldValue('medication', medication);
  }

  hasMedication(): boolean {
    return this.hasFieldValue('medication');
  }

  /** Who the dispense is for (1..1) Created when absent. */
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

  /** Encounter associated with event (0..1) Created when absent. */
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

  /** Information that supports the dispensing of the medication (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who performed event (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): MedicationDispensePerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: MedicationDispensePerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty MedicationDispensePerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): MedicationDispensePerformer;
  /** Appends the given MedicationDispensePerformer to `performer` and returns this object for chaining. */
  addPerformer(medicationDispensePerformer: MedicationDispensePerformer): this;
  addPerformer(
    medicationDispensePerformer?: MedicationDispensePerformer
  ): MedicationDispensePerformer | this {
    if (medicationDispensePerformer !== undefined) {
      return this.addFieldValue('performer', medicationDispensePerformer);
    }
    const createdMedicationDispensePerformer = new MedicationDispensePerformer();
    this.addFieldValue('performer', createdMedicationDispensePerformer);
    return createdMedicationDispensePerformer;
  }

  /** The first MedicationDispensePerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): MedicationDispensePerformer {
    const firstMedicationDispensePerformer = this.getPerformer()[0];
    return firstMedicationDispensePerformer === undefined
      ? this.addPerformer()
      : firstMedicationDispensePerformer;
  }

  /** Where the dispense occurred (0..1) Created when absent. */
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

  /** Medication order that authorizes the dispense (0..*) Never undefined; an empty list is created when absent. */
  getAuthorizingPrescription(): Reference[] {
    if (this.authorizingPrescription === undefined) {
      this.authorizingPrescription = [];
    }
    return this.authorizingPrescription;
  }

  setAuthorizingPrescription(authorizingPrescription: Reference[] | undefined): this {
    return this.setFieldValue('authorizingPrescription', authorizingPrescription);
  }

  hasAuthorizingPrescription(): boolean {
    return this.hasFieldValue('authorizingPrescription');
  }

  /** Appends a new, empty Reference to `authorizingPrescription` and returns it so it can be filled in. */
  addAuthorizingPrescription(): Reference;
  /** Appends the given Reference to `authorizingPrescription` and returns this object for chaining. */
  addAuthorizingPrescription(reference: Reference): this;
  addAuthorizingPrescription(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('authorizingPrescription', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('authorizingPrescription', createdReference);
    return createdReference;
  }

  /** The first Reference of `authorizingPrescription`. One is added when the list is empty. */
  getAuthorizingPrescriptionFirstRep(): Reference {
    const firstReference = this.getAuthorizingPrescription()[0];
    return firstReference === undefined ? this.addAuthorizingPrescription() : firstReference;
  }

  /** Trial fill, partial fill, emergency fill, etc (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Amount dispensed (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Amount of medication expressed as a timing amount (0..1) Created when absent. */
  getDaysSupply(): Quantity {
    if (this.daysSupply === undefined) {
      this.daysSupply = new Quantity();
    }
    return this.daysSupply;
  }

  setDaysSupply(daysSupply: Quantity | undefined): this {
    return this.setFieldValue('daysSupply', daysSupply);
  }

  hasDaysSupply(): boolean {
    return this.hasFieldValue('daysSupply');
  }

  /** When the recording of the dispense started (0..1) */
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

  /** When product was packaged and reviewed (0..1) */
  getWhenPrepared(): string | undefined {
    return this.whenPrepared;
  }

  /** Sets `whenPrepared`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setWhenPrepared(whenPrepared: string | undefined): this {
    return this.setFieldValue('whenPrepared', whenPrepared);
  }

  hasWhenPrepared(): boolean {
    return this.hasFieldValue('whenPrepared');
  }

  /** The element carrying the id and extensions of `whenPrepared`. Created when absent. */
  getWhenPreparedElement(): Element {
    if (this._whenPrepared === undefined) {
      this._whenPrepared = new Element();
    }
    return this._whenPrepared;
  }

  setWhenPreparedElement(whenPreparedElement: Element | undefined): this {
    this._whenPrepared = whenPreparedElement;
    return this;
  }

  /** When product was given out (0..1) */
  getWhenHandedOver(): string | undefined {
    return this.whenHandedOver;
  }

  /** Sets `whenHandedOver`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setWhenHandedOver(whenHandedOver: string | undefined): this {
    return this.setFieldValue('whenHandedOver', whenHandedOver);
  }

  hasWhenHandedOver(): boolean {
    return this.hasFieldValue('whenHandedOver');
  }

  /** The element carrying the id and extensions of `whenHandedOver`. Created when absent. */
  getWhenHandedOverElement(): Element {
    if (this._whenHandedOver === undefined) {
      this._whenHandedOver = new Element();
    }
    return this._whenHandedOver;
  }

  setWhenHandedOverElement(whenHandedOverElement: Element | undefined): this {
    this._whenHandedOver = whenHandedOverElement;
    return this;
  }

  /** Where the medication was/will be sent (0..1) Created when absent. */
  getDestination(): Reference {
    if (this.destination === undefined) {
      this.destination = new Reference();
    }
    return this.destination;
  }

  setDestination(destination: Reference | undefined): this {
    return this.setFieldValue('destination', destination);
  }

  hasDestination(): boolean {
    return this.hasFieldValue('destination');
  }

  /** Who collected the medication or where the medication was delivered (0..*) Never undefined; an empty list is created when absent. */
  getReceiver(): Reference[] {
    if (this.receiver === undefined) {
      this.receiver = [];
    }
    return this.receiver;
  }

  setReceiver(receiver: Reference[] | undefined): this {
    return this.setFieldValue('receiver', receiver);
  }

  hasReceiver(): boolean {
    return this.hasFieldValue('receiver');
  }

  /** Appends a new, empty Reference to `receiver` and returns it so it can be filled in. */
  addReceiver(): Reference;
  /** Appends the given Reference to `receiver` and returns this object for chaining. */
  addReceiver(reference: Reference): this;
  addReceiver(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('receiver', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('receiver', createdReference);
    return createdReference;
  }

  /** The first Reference of `receiver`. One is added when the list is empty. */
  getReceiverFirstRep(): Reference {
    const firstReference = this.getReceiver()[0];
    return firstReference === undefined ? this.addReceiver() : firstReference;
  }

  /** Information about the dispense (0..*) Never undefined; an empty list is created when absent. */
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

  /** Full representation of the dosage instructions (0..1) */
  getRenderedDosageInstruction(): string | undefined {
    return this.renderedDosageInstruction;
  }

  /** Sets `renderedDosageInstruction`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setRenderedDosageInstruction(renderedDosageInstruction: string | undefined): this {
    return this.setFieldValue('renderedDosageInstruction', renderedDosageInstruction);
  }

  hasRenderedDosageInstruction(): boolean {
    return this.hasFieldValue('renderedDosageInstruction');
  }

  /** The element carrying the id and extensions of `renderedDosageInstruction`. Created when absent. */
  getRenderedDosageInstructionElement(): Element {
    if (this._renderedDosageInstruction === undefined) {
      this._renderedDosageInstruction = new Element();
    }
    return this._renderedDosageInstruction;
  }

  setRenderedDosageInstructionElement(renderedDosageInstructionElement: Element | undefined): this {
    this._renderedDosageInstruction = renderedDosageInstructionElement;
    return this;
  }

  /** How the medication is to be used by the patient or administered by the caregiver (0..*) Never undefined; an empty list is created when absent. */
  getDosageInstruction(): Dosage[] {
    if (this.dosageInstruction === undefined) {
      this.dosageInstruction = [];
    }
    return this.dosageInstruction;
  }

  setDosageInstruction(dosageInstruction: Dosage[] | undefined): this {
    return this.setFieldValue('dosageInstruction', dosageInstruction);
  }

  hasDosageInstruction(): boolean {
    return this.hasFieldValue('dosageInstruction');
  }

  /** Appends a new, empty Dosage to `dosageInstruction` and returns it so it can be filled in. */
  addDosageInstruction(): Dosage;
  /** Appends the given Dosage to `dosageInstruction` and returns this object for chaining. */
  addDosageInstruction(dosage: Dosage): this;
  addDosageInstruction(dosage?: Dosage): Dosage | this {
    if (dosage !== undefined) {
      return this.addFieldValue('dosageInstruction', dosage);
    }
    const createdDosage = new Dosage();
    this.addFieldValue('dosageInstruction', createdDosage);
    return createdDosage;
  }

  /** The first Dosage of `dosageInstruction`. One is added when the list is empty. */
  getDosageInstructionFirstRep(): Dosage {
    const firstDosage = this.getDosageInstruction()[0];
    return firstDosage === undefined ? this.addDosageInstruction() : firstDosage;
  }

  /** Whether a substitution was performed on the dispense (0..1) Created when absent. */
  getSubstitution(): MedicationDispenseSubstitution {
    if (this.substitution === undefined) {
      this.substitution = new MedicationDispenseSubstitution();
    }
    return this.substitution;
  }

  setSubstitution(substitution: MedicationDispenseSubstitution | undefined): this {
    return this.setFieldValue('substitution', substitution);
  }

  hasSubstitution(): boolean {
    return this.hasFieldValue('substitution');
  }

  /** A list of relevant lifecycle events (0..*) Never undefined; an empty list is created when absent. */
  getEventHistory(): Reference[] {
    if (this.eventHistory === undefined) {
      this.eventHistory = [];
    }
    return this.eventHistory;
  }

  setEventHistory(eventHistory: Reference[] | undefined): this {
    return this.setFieldValue('eventHistory', eventHistory);
  }

  hasEventHistory(): boolean {
    return this.hasFieldValue('eventHistory');
  }

  /** Appends a new, empty Reference to `eventHistory` and returns it so it can be filled in. */
  addEventHistory(): Reference;
  /** Appends the given Reference to `eventHistory` and returns this object for chaining. */
  addEventHistory(reference: Reference): this;
  addEventHistory(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('eventHistory', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('eventHistory', createdReference);
    return createdReference;
  }

  /** The first Reference of `eventHistory`. One is added when the list is empty. */
  getEventHistoryFirstRep(): Reference {
    const firstReference = this.getEventHistory()[0];
    return firstReference === undefined ? this.addEventHistory() : firstReference;
  }
}

modelTypeRegistry.register('MedicationDispense', MedicationDispense, true);

/** True when the value is a MedicationDispense model instance. */
export function isMedicationDispense(candidate: unknown): candidate is MedicationDispense {
  return candidate instanceof MedicationDispense;
}

/**
 * Who performed event
 */
export class MedicationDispensePerformer extends BackboneElement {
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
            'CareTeam',
            'Device',
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

  /** Who performed the dispense and what they did (0..1) */
  function?: CodeableConcept;

  /** Individual who was performing (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'MedicationDispense.performer';
  }

  /** FHIR JSON for this MedicationDispensePerformer, typed as the plain `MedicationDispensePerformer` data type. */
  override toJSON(): plainTypes.MedicationDispensePerformer {
    return this.serialize() as plainTypes.MedicationDispensePerformer;
  }

  /** Who performed the dispense and what they did (0..1) Created when absent. */
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

modelTypeRegistry.register('MedicationDispensePerformer', MedicationDispensePerformer, false);

/**
 * Whether a substitution was performed on the dispense
 */
export class MedicationDispenseSubstitution extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'wasSubstituted',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'wasSubstituted', typeCode: 'boolean' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'responsibleParty',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'responsibleParty',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
  ];

  /** Whether a substitution was or was not performed on the dispense (1..1) */
  wasSubstituted?: boolean;
  /** Id and extensions of the primitive `wasSubstituted`. */
  _wasSubstituted?: Element;

  /** Code signifying whether a different drug was dispensed from what was prescribed (0..1) */
  type?: CodeableConcept;

  /** Why was substitution made (0..*) */
  reason?: CodeableConcept[];

  /** Who is responsible for the substitution (0..1) */
  responsibleParty?: Reference;

  override fhirType(): string {
    return 'MedicationDispense.substitution';
  }

  /** FHIR JSON for this MedicationDispenseSubstitution, typed as the plain `MedicationDispenseSubstitution` data type. */
  override toJSON(): plainTypes.MedicationDispenseSubstitution {
    return this.serialize() as plainTypes.MedicationDispenseSubstitution;
  }

  /** Whether a substitution was or was not performed on the dispense (1..1) */
  getWasSubstituted(): boolean | undefined {
    return this.wasSubstituted;
  }

  /** Sets `wasSubstituted`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setWasSubstituted(wasSubstituted: boolean | undefined): this {
    return this.setFieldValue('wasSubstituted', wasSubstituted);
  }

  hasWasSubstituted(): boolean {
    return this.hasFieldValue('wasSubstituted');
  }

  /** The element carrying the id and extensions of `wasSubstituted`. Created when absent. */
  getWasSubstitutedElement(): Element {
    if (this._wasSubstituted === undefined) {
      this._wasSubstituted = new Element();
    }
    return this._wasSubstituted;
  }

  setWasSubstitutedElement(wasSubstitutedElement: Element | undefined): this {
    this._wasSubstituted = wasSubstitutedElement;
    return this;
  }

  /** Code signifying whether a different drug was dispensed from what was prescribed (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Why was substitution made (0..*) Never undefined; an empty list is created when absent. */
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

  /** Who is responsible for the substitution (0..1) Created when absent. */
  getResponsibleParty(): Reference {
    if (this.responsibleParty === undefined) {
      this.responsibleParty = new Reference();
    }
    return this.responsibleParty;
  }

  setResponsibleParty(responsibleParty: Reference | undefined): this {
    return this.setFieldValue('responsibleParty', responsibleParty);
  }

  hasResponsibleParty(): boolean {
    return this.hasFieldValue('responsibleParty');
  }
}

modelTypeRegistry.register('MedicationDispenseSubstitution', MedicationDispenseSubstitution, false);
