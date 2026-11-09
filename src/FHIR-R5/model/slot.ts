/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export class Slot extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'serviceCategory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'serviceCategory', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'serviceType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'serviceType', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'specialty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialty', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'appointmentType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'appointmentType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'schedule',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'schedule', typeCode: 'Reference', targetResourceTypes: ['Schedule'] }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.SlotStatus }],
    },
    {
      elementName: 'start',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'instant' }],
    },
    {
      elementName: 'end',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'end', typeCode: 'instant' }],
    },
    {
      elementName: 'overbooked',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'overbooked', typeCode: 'boolean' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
  ];

  readonly resourceType = 'Slot';

  /** External Ids for this item (0..*) */
  identifier?: Identifier[];

  /** A broad categorization of the service that is to be performed during this appointment (0..*) */
  serviceCategory?: CodeableConcept[];

  /** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the Schedule resource (0..*) */
  serviceType?: CodeableReference[];

  /** The specialty of a practitioner that would be required to perform the service requested in this appointment (0..*) */
  specialty?: CodeableConcept[];

  /** The style of appointment or patient that may be booked in the slot (not service type) (0..*) */
  appointmentType?: CodeableConcept[];

  /** The schedule resource that this slot defines an interval of status information (1..1) */
  schedule?: Reference;

  /** busy | free | busy-unavailable | busy-tentative | entered-in-error (1..1) */
  status?: valueSetCodes.SlotStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Date/Time that the slot is to begin (1..1) */
  start?: string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** Date/Time that the slot is to conclude (1..1) */
  end?: string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  /** This slot has already been overbooked, appointments are unlikely to be accepted for this time (0..1) */
  overbooked?: boolean;
  /** Id and extensions of the primitive `overbooked`. */
  _overbooked?: Element;

  /** Comments on the slot to describe any extended information. Such as custom constraints on the slot (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  override fhirType(): string {
    return 'Slot';
  }

  /** FHIR JSON for this Slot, typed as the plain `Slot` data type. */
  override toJSON(): plainTypes.Slot {
    return this.serialize() as plainTypes.Slot;
  }

  /** External Ids for this item (0..*) Never undefined; an empty list is created when absent. */
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

  /** A broad categorization of the service that is to be performed during this appointment (0..*) Never undefined; an empty list is created when absent. */
  getServiceCategory(): CodeableConcept[] {
    if (this.serviceCategory === undefined) {
      this.serviceCategory = [];
    }
    return this.serviceCategory;
  }

  setServiceCategory(serviceCategory: CodeableConcept[] | undefined): this {
    return this.setFieldValue('serviceCategory', serviceCategory);
  }

  hasServiceCategory(): boolean {
    return this.hasFieldValue('serviceCategory');
  }

  /** Appends a new, empty CodeableConcept to `serviceCategory` and returns it so it can be filled in. */
  addServiceCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `serviceCategory` and returns this object for chaining. */
  addServiceCategory(codeableConcept: CodeableConcept): this;
  addServiceCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('serviceCategory', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('serviceCategory', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `serviceCategory`. One is added when the list is empty. */
  getServiceCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getServiceCategory()[0];
    return firstCodeableConcept === undefined ? this.addServiceCategory() : firstCodeableConcept;
  }

  /** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the Schedule resource (0..*) Never undefined; an empty list is created when absent. */
  getServiceType(): CodeableReference[] {
    if (this.serviceType === undefined) {
      this.serviceType = [];
    }
    return this.serviceType;
  }

  setServiceType(serviceType: CodeableReference[] | undefined): this {
    return this.setFieldValue('serviceType', serviceType);
  }

  hasServiceType(): boolean {
    return this.hasFieldValue('serviceType');
  }

  /** Appends a new, empty CodeableReference to `serviceType` and returns it so it can be filled in. */
  addServiceType(): CodeableReference;
  /** Appends the given CodeableReference to `serviceType` and returns this object for chaining. */
  addServiceType(codeableReference: CodeableReference): this;
  addServiceType(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('serviceType', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('serviceType', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `serviceType`. One is added when the list is empty. */
  getServiceTypeFirstRep(): CodeableReference {
    const firstCodeableReference = this.getServiceType()[0];
    return firstCodeableReference === undefined ? this.addServiceType() : firstCodeableReference;
  }

  /** The specialty of a practitioner that would be required to perform the service requested in this appointment (0..*) Never undefined; an empty list is created when absent. */
  getSpecialty(): CodeableConcept[] {
    if (this.specialty === undefined) {
      this.specialty = [];
    }
    return this.specialty;
  }

  setSpecialty(specialty: CodeableConcept[] | undefined): this {
    return this.setFieldValue('specialty', specialty);
  }

  hasSpecialty(): boolean {
    return this.hasFieldValue('specialty');
  }

  /** Appends a new, empty CodeableConcept to `specialty` and returns it so it can be filled in. */
  addSpecialty(): CodeableConcept;
  /** Appends the given CodeableConcept to `specialty` and returns this object for chaining. */
  addSpecialty(codeableConcept: CodeableConcept): this;
  addSpecialty(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('specialty', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('specialty', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `specialty`. One is added when the list is empty. */
  getSpecialtyFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSpecialty()[0];
    return firstCodeableConcept === undefined ? this.addSpecialty() : firstCodeableConcept;
  }

  /** The style of appointment or patient that may be booked in the slot (not service type) (0..*) Never undefined; an empty list is created when absent. */
  getAppointmentType(): CodeableConcept[] {
    if (this.appointmentType === undefined) {
      this.appointmentType = [];
    }
    return this.appointmentType;
  }

  setAppointmentType(appointmentType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('appointmentType', appointmentType);
  }

  hasAppointmentType(): boolean {
    return this.hasFieldValue('appointmentType');
  }

  /** Appends a new, empty CodeableConcept to `appointmentType` and returns it so it can be filled in. */
  addAppointmentType(): CodeableConcept;
  /** Appends the given CodeableConcept to `appointmentType` and returns this object for chaining. */
  addAppointmentType(codeableConcept: CodeableConcept): this;
  addAppointmentType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('appointmentType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('appointmentType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `appointmentType`. One is added when the list is empty. */
  getAppointmentTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAppointmentType()[0];
    return firstCodeableConcept === undefined ? this.addAppointmentType() : firstCodeableConcept;
  }

  /** The schedule resource that this slot defines an interval of status information (1..1) Created when absent. */
  getSchedule(): Reference {
    if (this.schedule === undefined) {
      this.schedule = new Reference();
    }
    return this.schedule;
  }

  setSchedule(schedule: Reference | undefined): this {
    return this.setFieldValue('schedule', schedule);
  }

  hasSchedule(): boolean {
    return this.hasFieldValue('schedule');
  }

  /** busy | free | busy-unavailable | busy-tentative | entered-in-error (1..1) */
  getStatus(): valueSetCodes.SlotStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.SlotStatus | undefined): this {
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

  /** Date/Time that the slot is to begin (1..1) */
  getStart(): string | undefined {
    return this.start;
  }

  /** Sets `start`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setStart(start: string | undefined): this {
    return this.setFieldValue('start', start);
  }

  hasStart(): boolean {
    return this.hasFieldValue('start');
  }

  /** The element carrying the id and extensions of `start`. Created when absent. */
  getStartElement(): Element {
    if (this._start === undefined) {
      this._start = new Element();
    }
    return this._start;
  }

  setStartElement(startElement: Element | undefined): this {
    this._start = startElement;
    return this;
  }

  /** Date/Time that the slot is to conclude (1..1) */
  getEnd(): string | undefined {
    return this.end;
  }

  /** Sets `end`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setEnd(end: string | undefined): this {
    return this.setFieldValue('end', end);
  }

  hasEnd(): boolean {
    return this.hasFieldValue('end');
  }

  /** The element carrying the id and extensions of `end`. Created when absent. */
  getEndElement(): Element {
    if (this._end === undefined) {
      this._end = new Element();
    }
    return this._end;
  }

  setEndElement(endElement: Element | undefined): this {
    this._end = endElement;
    return this;
  }

  /** This slot has already been overbooked, appointments are unlikely to be accepted for this time (0..1) */
  getOverbooked(): boolean | undefined {
    return this.overbooked;
  }

  /** Sets `overbooked`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setOverbooked(overbooked: boolean | undefined): this {
    return this.setFieldValue('overbooked', overbooked);
  }

  hasOverbooked(): boolean {
    return this.hasFieldValue('overbooked');
  }

  /** The element carrying the id and extensions of `overbooked`. Created when absent. */
  getOverbookedElement(): Element {
    if (this._overbooked === undefined) {
      this._overbooked = new Element();
    }
    return this._overbooked;
  }

  setOverbookedElement(overbookedElement: Element | undefined): this {
    this._overbooked = overbookedElement;
    return this;
  }

  /** Comments on the slot to describe any extended information. Such as custom constraints on the slot (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }
}

modelTypeRegistry.register('Slot', Slot, true);

/** True when the value is a Slot model instance. */
export function isSlot(candidate: unknown): candidate is Slot {
  return candidate instanceof Slot;
}
