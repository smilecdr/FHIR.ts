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
 * Indicates that a device is to be or has been dispensed for a named person/patient. This includes a description of the product (supply) provided and the instructions for using the device.
 */
export class DeviceDispense extends DomainResource {
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
          targetResourceTypes: ['CarePlan', 'DeviceRequest'],
        },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Procedure'] }],
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
          allowedCodes: valueSetCodes.DeviceDispenseStatusCodes,
        },
      ],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'device',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'device', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Practitioner'],
        },
      ],
    },
    {
      elementName: 'receiver',
      minimum: 0,
      maximum: 1,
      isList: false,
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
      types: [{ jsonKey: 'performer', typeCode: 'DeviceDispensePerformer' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
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
      elementName: 'preparedDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preparedDate', typeCode: 'dateTime' }],
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
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'usageInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'usageInstruction', typeCode: 'markdown' }],
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

  readonly resourceType = 'DeviceDispense';

  /** Business identifier for this dispensation (0..*) */
  identifier?: Identifier[];

  /** The order or request that this dispense is fulfilling (0..*) */
  basedOn?: Reference[];

  /** The bigger event that this dispense is a part of (0..*) */
  partOf?: Reference[];

  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown (1..1) */
  status?: valueSetCodes.DeviceDispenseStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Why a dispense was or was not performed (0..1) */
  statusReason?: CodeableReference;

  /** Type of device dispense (0..*) */
  category?: CodeableConcept[];

  /** What device was supplied (1..1) */
  device?: CodeableReference;

  /** Who the dispense is for (1..1) */
  subject?: Reference;

  /** Who collected the device or where the medication was delivered (0..1) */
  receiver?: Reference;

  /** Encounter associated with event (0..1) */
  encounter?: Reference;

  /** Information that supports the dispensing of the device (0..*) */
  supportingInformation?: Reference[];

  /** Who performed event (0..*) */
  performer?: DeviceDispensePerformer[];

  /** Where the dispense occurred (0..1) */
  location?: Reference;

  /** Trial fill, partial fill, emergency fill, etc (0..1) */
  type?: CodeableConcept;

  /** Amount dispensed (0..1) */
  quantity?: Quantity;

  /** When product was packaged and reviewed (0..1) */
  preparedDate?: string;
  /** Id and extensions of the primitive `preparedDate`. */
  _preparedDate?: Element;

  /** When product was given out (0..1) */
  whenHandedOver?: string;
  /** Id and extensions of the primitive `whenHandedOver`. */
  _whenHandedOver?: Element;

  /** Where the device was sent or should be sent (0..1) */
  destination?: Reference;

  /** Information about the dispense (0..*) */
  note?: Annotation[];

  /** Full representation of the usage instructions (0..1) */
  usageInstruction?: string;
  /** Id and extensions of the primitive `usageInstruction`. */
  _usageInstruction?: Element;

  /** A list of relevant lifecycle events (0..*) */
  eventHistory?: Reference[];

  override fhirType(): string {
    return 'DeviceDispense';
  }

  /** FHIR JSON for this DeviceDispense, typed as the plain `DeviceDispense` data type. */
  override toJSON(): plainTypes.DeviceDispense {
    return this.serialize() as plainTypes.DeviceDispense;
  }

  /** Business identifier for this dispensation (0..*) Never undefined; an empty list is created when absent. */
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

  /** The order or request that this dispense is fulfilling (0..*) Never undefined; an empty list is created when absent. */
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

  /** The bigger event that this dispense is a part of (0..*) Never undefined; an empty list is created when absent. */
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
  getStatus(): valueSetCodes.DeviceDispenseStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.DeviceDispenseStatusCodes | undefined): this {
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

  /** Why a dispense was or was not performed (0..1) Created when absent. */
  getStatusReason(): CodeableReference {
    if (this.statusReason === undefined) {
      this.statusReason = new CodeableReference();
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableReference | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
  }

  /** Type of device dispense (0..*) Never undefined; an empty list is created when absent. */
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

  /** What device was supplied (1..1) Created when absent. */
  getDevice(): CodeableReference {
    if (this.device === undefined) {
      this.device = new CodeableReference();
    }
    return this.device;
  }

  setDevice(device: CodeableReference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
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

  /** Who collected the device or where the medication was delivered (0..1) Created when absent. */
  getReceiver(): Reference {
    if (this.receiver === undefined) {
      this.receiver = new Reference();
    }
    return this.receiver;
  }

  setReceiver(receiver: Reference | undefined): this {
    return this.setFieldValue('receiver', receiver);
  }

  hasReceiver(): boolean {
    return this.hasFieldValue('receiver');
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

  /** Information that supports the dispensing of the device (0..*) Never undefined; an empty list is created when absent. */
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
  getPerformer(): DeviceDispensePerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: DeviceDispensePerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty DeviceDispensePerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): DeviceDispensePerformer;
  /** Appends the given DeviceDispensePerformer to `performer` and returns this object for chaining. */
  addPerformer(deviceDispensePerformer: DeviceDispensePerformer): this;
  addPerformer(deviceDispensePerformer?: DeviceDispensePerformer): DeviceDispensePerformer | this {
    if (deviceDispensePerformer !== undefined) {
      return this.addFieldValue('performer', deviceDispensePerformer);
    }
    const createdDeviceDispensePerformer = new DeviceDispensePerformer();
    this.addFieldValue('performer', createdDeviceDispensePerformer);
    return createdDeviceDispensePerformer;
  }

  /** The first DeviceDispensePerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): DeviceDispensePerformer {
    const firstDeviceDispensePerformer = this.getPerformer()[0];
    return firstDeviceDispensePerformer === undefined
      ? this.addPerformer()
      : firstDeviceDispensePerformer;
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

  /** When product was packaged and reviewed (0..1) */
  getPreparedDate(): string | undefined {
    return this.preparedDate;
  }

  /** Sets `preparedDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPreparedDate(preparedDate: string | undefined): this {
    return this.setFieldValue('preparedDate', preparedDate);
  }

  hasPreparedDate(): boolean {
    return this.hasFieldValue('preparedDate');
  }

  /** The element carrying the id and extensions of `preparedDate`. Created when absent. */
  getPreparedDateElement(): Element {
    if (this._preparedDate === undefined) {
      this._preparedDate = new Element();
    }
    return this._preparedDate;
  }

  setPreparedDateElement(preparedDateElement: Element | undefined): this {
    this._preparedDate = preparedDateElement;
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

  /** Where the device was sent or should be sent (0..1) Created when absent. */
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

  /** Full representation of the usage instructions (0..1) */
  getUsageInstruction(): string | undefined {
    return this.usageInstruction;
  }

  /** Sets `usageInstruction`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setUsageInstruction(usageInstruction: string | undefined): this {
    return this.setFieldValue('usageInstruction', usageInstruction);
  }

  hasUsageInstruction(): boolean {
    return this.hasFieldValue('usageInstruction');
  }

  /** The element carrying the id and extensions of `usageInstruction`. Created when absent. */
  getUsageInstructionElement(): Element {
    if (this._usageInstruction === undefined) {
      this._usageInstruction = new Element();
    }
    return this._usageInstruction;
  }

  setUsageInstructionElement(usageInstructionElement: Element | undefined): this {
    this._usageInstruction = usageInstructionElement;
    return this;
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

modelTypeRegistry.register('DeviceDispense', DeviceDispense, true);

/** True when the value is a DeviceDispense model instance. */
export function isDeviceDispense(candidate: unknown): candidate is DeviceDispense {
  return candidate instanceof DeviceDispense;
}

/**
 * Who performed event
 */
export class DeviceDispensePerformer extends BackboneElement {
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
    return 'DeviceDispense.performer';
  }

  /** FHIR JSON for this DeviceDispensePerformer, typed as the plain `DeviceDispensePerformer` data type. */
  override toJSON(): plainTypes.DeviceDispensePerformer {
    return this.serialize() as plainTypes.DeviceDispensePerformer;
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

modelTypeRegistry.register('DeviceDispensePerformer', DeviceDispensePerformer, false);
