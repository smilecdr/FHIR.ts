/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Appointment Resource
 */
export class Appointment extends DomainResource {
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
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.AppointmentStatus },
      ],
    },
    {
      elementName: 'serviceCategory',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'serviceCategory', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'serviceType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'serviceType', typeCode: 'CodeableConcept' }],
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'appointmentType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'indication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'indication',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition', 'Procedure'],
        },
      ],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'Reference' }],
    },
    {
      elementName: 'start',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'instant' }],
    },
    {
      elementName: 'end',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'end', typeCode: 'instant' }],
    },
    {
      elementName: 'minutesDuration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'minutesDuration', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'slot',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'slot', typeCode: 'Reference', targetResourceTypes: ['Slot'] }],
    },
    {
      elementName: 'created',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'incomingReferral',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'incomingReferral',
          typeCode: 'Reference',
          targetResourceTypes: ['ReferralRequest'],
        },
      ],
    },
    {
      elementName: 'participant',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'AppointmentParticipant' }],
    },
    {
      elementName: 'requestedPeriod',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'requestedPeriod', typeCode: 'Period' }],
    },
  ];

  readonly resourceType = 'Appointment';

  /** External Ids for this item (0..*) */
  identifier?: Identifier[];

  /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error (1..1) */
  status?: valueSetCodes.AppointmentStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** A broad categorisation of the service that is to be performed during this appointment (0..1) */
  serviceCategory?: CodeableConcept;

  /** The specific service that is to be performed during this appointment (0..*) */
  serviceType?: CodeableConcept[];

  /** The specialty of a practitioner that would be required to perform the service requested in this appointment (0..*) */
  specialty?: CodeableConcept[];

  /** The style of appointment or patient that has been booked in the slot (not service type) (0..1) */
  appointmentType?: CodeableConcept;

  /** Reason this appointment is scheduled (0..*) */
  reason?: CodeableConcept[];

  /** Reason the appointment is to takes place (resource) (0..*) */
  indication?: Reference[];

  /** Used to make informed decisions if needing to re-prioritize (0..1) */
  priority?: number;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** Shown on a subject line in a meeting request, or appointment list (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Additional information to support the appointment (0..*) */
  supportingInformation?: Reference[];

  /** When appointment is to take place (0..1) */
  start?: string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** When appointment is to conclude (0..1) */
  end?: string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  /** Can be less than start/end (e.g. estimate) (0..1) */
  minutesDuration?: number;
  /** Id and extensions of the primitive `minutesDuration`. */
  _minutesDuration?: Element;

  /** The slots that this appointment is filling (0..*) */
  slot?: Reference[];

  /** The date that this appointment was initially created (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** Additional comments (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** The ReferralRequest provided as information to allocate to the Encounter (0..*) */
  incomingReferral?: Reference[];

  /** Participants involved in appointment (1..*) */
  participant?: AppointmentParticipant[];

  /** Potential date/time interval(s) requested to allocate the appointment within (0..*) */
  requestedPeriod?: Period[];

  override fhirType(): string {
    return 'Appointment';
  }

  /** FHIR JSON for this Appointment, typed as the plain `Appointment` data type. */
  override toJSON(): plainTypes.Appointment {
    return this.serialize() as plainTypes.Appointment;
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

  /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error (1..1) */
  getStatus(): valueSetCodes.AppointmentStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.AppointmentStatus | undefined): this {
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

  /** A broad categorisation of the service that is to be performed during this appointment (0..1) Created when absent. */
  getServiceCategory(): CodeableConcept {
    if (this.serviceCategory === undefined) {
      this.serviceCategory = new CodeableConcept();
    }
    return this.serviceCategory;
  }

  setServiceCategory(serviceCategory: CodeableConcept | undefined): this {
    return this.setFieldValue('serviceCategory', serviceCategory);
  }

  hasServiceCategory(): boolean {
    return this.hasFieldValue('serviceCategory');
  }

  /** The specific service that is to be performed during this appointment (0..*) Never undefined; an empty list is created when absent. */
  getServiceType(): CodeableConcept[] {
    if (this.serviceType === undefined) {
      this.serviceType = [];
    }
    return this.serviceType;
  }

  setServiceType(serviceType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('serviceType', serviceType);
  }

  hasServiceType(): boolean {
    return this.hasFieldValue('serviceType');
  }

  /** Appends a new, empty CodeableConcept to `serviceType` and returns it so it can be filled in. */
  addServiceType(): CodeableConcept;
  /** Appends the given CodeableConcept to `serviceType` and returns this object for chaining. */
  addServiceType(codeableConcept: CodeableConcept): this;
  addServiceType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('serviceType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('serviceType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `serviceType`. One is added when the list is empty. */
  getServiceTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getServiceType()[0];
    return firstCodeableConcept === undefined ? this.addServiceType() : firstCodeableConcept;
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

  /** The style of appointment or patient that has been booked in the slot (not service type) (0..1) Created when absent. */
  getAppointmentType(): CodeableConcept {
    if (this.appointmentType === undefined) {
      this.appointmentType = new CodeableConcept();
    }
    return this.appointmentType;
  }

  setAppointmentType(appointmentType: CodeableConcept | undefined): this {
    return this.setFieldValue('appointmentType', appointmentType);
  }

  hasAppointmentType(): boolean {
    return this.hasFieldValue('appointmentType');
  }

  /** Reason this appointment is scheduled (0..*) Never undefined; an empty list is created when absent. */
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

  /** Reason the appointment is to takes place (resource) (0..*) Never undefined; an empty list is created when absent. */
  getIndication(): Reference[] {
    if (this.indication === undefined) {
      this.indication = [];
    }
    return this.indication;
  }

  setIndication(indication: Reference[] | undefined): this {
    return this.setFieldValue('indication', indication);
  }

  hasIndication(): boolean {
    return this.hasFieldValue('indication');
  }

  /** Appends a new, empty Reference to `indication` and returns it so it can be filled in. */
  addIndication(): Reference;
  /** Appends the given Reference to `indication` and returns this object for chaining. */
  addIndication(reference: Reference): this;
  addIndication(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('indication', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('indication', createdReference);
    return createdReference;
  }

  /** The first Reference of `indication`. One is added when the list is empty. */
  getIndicationFirstRep(): Reference {
    const firstReference = this.getIndication()[0];
    return firstReference === undefined ? this.addIndication() : firstReference;
  }

  /** Used to make informed decisions if needing to re-prioritize (0..1) */
  getPriority(): number | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setPriority(priority: number | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The element carrying the id and extensions of `priority`. Created when absent. */
  getPriorityElement(): Element {
    if (this._priority === undefined) {
      this._priority = new Element();
    }
    return this._priority;
  }

  setPriorityElement(priorityElement: Element | undefined): this {
    this._priority = priorityElement;
    return this;
  }

  /** Shown on a subject line in a meeting request, or appointment list (0..1) */
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

  /** Additional information to support the appointment (0..*) Never undefined; an empty list is created when absent. */
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

  /** When appointment is to take place (0..1) */
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

  /** When appointment is to conclude (0..1) */
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

  /** Can be less than start/end (e.g. estimate) (0..1) */
  getMinutesDuration(): number | undefined {
    return this.minutesDuration;
  }

  /** Sets `minutesDuration`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setMinutesDuration(minutesDuration: number | undefined): this {
    return this.setFieldValue('minutesDuration', minutesDuration);
  }

  hasMinutesDuration(): boolean {
    return this.hasFieldValue('minutesDuration');
  }

  /** The element carrying the id and extensions of `minutesDuration`. Created when absent. */
  getMinutesDurationElement(): Element {
    if (this._minutesDuration === undefined) {
      this._minutesDuration = new Element();
    }
    return this._minutesDuration;
  }

  setMinutesDurationElement(minutesDurationElement: Element | undefined): this {
    this._minutesDuration = minutesDurationElement;
    return this;
  }

  /** The slots that this appointment is filling (0..*) Never undefined; an empty list is created when absent. */
  getSlot(): Reference[] {
    if (this.slot === undefined) {
      this.slot = [];
    }
    return this.slot;
  }

  setSlot(slot: Reference[] | undefined): this {
    return this.setFieldValue('slot', slot);
  }

  hasSlot(): boolean {
    return this.hasFieldValue('slot');
  }

  /** Appends a new, empty Reference to `slot` and returns it so it can be filled in. */
  addSlot(): Reference;
  /** Appends the given Reference to `slot` and returns this object for chaining. */
  addSlot(reference: Reference): this;
  addSlot(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('slot', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('slot', createdReference);
    return createdReference;
  }

  /** The first Reference of `slot`. One is added when the list is empty. */
  getSlotFirstRep(): Reference {
    const firstReference = this.getSlot()[0];
    return firstReference === undefined ? this.addSlot() : firstReference;
  }

  /** The date that this appointment was initially created (0..1) */
  getCreated(): string | undefined {
    return this.created;
  }

  /** Sets `created`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCreated(created: string | undefined): this {
    return this.setFieldValue('created', created);
  }

  hasCreated(): boolean {
    return this.hasFieldValue('created');
  }

  /** The element carrying the id and extensions of `created`. Created when absent. */
  getCreatedElement(): Element {
    if (this._created === undefined) {
      this._created = new Element();
    }
    return this._created;
  }

  setCreatedElement(createdElement: Element | undefined): this {
    this._created = createdElement;
    return this;
  }

  /** Additional comments (0..1) */
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

  /** The ReferralRequest provided as information to allocate to the Encounter (0..*) Never undefined; an empty list is created when absent. */
  getIncomingReferral(): Reference[] {
    if (this.incomingReferral === undefined) {
      this.incomingReferral = [];
    }
    return this.incomingReferral;
  }

  setIncomingReferral(incomingReferral: Reference[] | undefined): this {
    return this.setFieldValue('incomingReferral', incomingReferral);
  }

  hasIncomingReferral(): boolean {
    return this.hasFieldValue('incomingReferral');
  }

  /** Appends a new, empty Reference to `incomingReferral` and returns it so it can be filled in. */
  addIncomingReferral(): Reference;
  /** Appends the given Reference to `incomingReferral` and returns this object for chaining. */
  addIncomingReferral(reference: Reference): this;
  addIncomingReferral(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('incomingReferral', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('incomingReferral', createdReference);
    return createdReference;
  }

  /** The first Reference of `incomingReferral`. One is added when the list is empty. */
  getIncomingReferralFirstRep(): Reference {
    const firstReference = this.getIncomingReferral()[0];
    return firstReference === undefined ? this.addIncomingReferral() : firstReference;
  }

  /** Participants involved in appointment (1..*) Never undefined; an empty list is created when absent. */
  getParticipant(): AppointmentParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: AppointmentParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty AppointmentParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): AppointmentParticipant;
  /** Appends the given AppointmentParticipant to `participant` and returns this object for chaining. */
  addParticipant(appointmentParticipant: AppointmentParticipant): this;
  addParticipant(appointmentParticipant?: AppointmentParticipant): AppointmentParticipant | this {
    if (appointmentParticipant !== undefined) {
      return this.addFieldValue('participant', appointmentParticipant);
    }
    const createdAppointmentParticipant = new AppointmentParticipant();
    this.addFieldValue('participant', createdAppointmentParticipant);
    return createdAppointmentParticipant;
  }

  /** The first AppointmentParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): AppointmentParticipant {
    const firstAppointmentParticipant = this.getParticipant()[0];
    return firstAppointmentParticipant === undefined
      ? this.addParticipant()
      : firstAppointmentParticipant;
  }

  /** Potential date/time interval(s) requested to allocate the appointment within (0..*) Never undefined; an empty list is created when absent. */
  getRequestedPeriod(): Period[] {
    if (this.requestedPeriod === undefined) {
      this.requestedPeriod = [];
    }
    return this.requestedPeriod;
  }

  setRequestedPeriod(requestedPeriod: Period[] | undefined): this {
    return this.setFieldValue('requestedPeriod', requestedPeriod);
  }

  hasRequestedPeriod(): boolean {
    return this.hasFieldValue('requestedPeriod');
  }

  /** Appends a new, empty Period to `requestedPeriod` and returns it so it can be filled in. */
  addRequestedPeriod(): Period;
  /** Appends the given Period to `requestedPeriod` and returns this object for chaining. */
  addRequestedPeriod(period: Period): this;
  addRequestedPeriod(period?: Period): Period | this {
    if (period !== undefined) {
      return this.addFieldValue('requestedPeriod', period);
    }
    const createdPeriod = new Period();
    this.addFieldValue('requestedPeriod', createdPeriod);
    return createdPeriod;
  }

  /** The first Period of `requestedPeriod`. One is added when the list is empty. */
  getRequestedPeriodFirstRep(): Period {
    const firstPeriod = this.getRequestedPeriod()[0];
    return firstPeriod === undefined ? this.addRequestedPeriod() : firstPeriod;
  }
}

modelTypeRegistry.register('Appointment', Appointment, true);

/** True when the value is a Appointment model instance. */
export function isAppointment(candidate: unknown): candidate is Appointment {
  return candidate instanceof Appointment;
}

/**
 * Participants involved in appointment
 */
export class AppointmentParticipant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'HealthcareService',
            'Location',
            'Patient',
            'Practitioner',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'required',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'required', typeCode: 'code', allowedCodes: valueSetCodes.ParticipantRequired },
      ],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.ParticipationStatus },
      ],
    },
  ];

  /** Role of participant in the appointment (0..*) */
  type?: CodeableConcept[];

  /** Person, Location/HealthcareService or Device (0..1) */
  actor?: Reference;

  /** required | optional | information-only (0..1) */
  required?: valueSetCodes.ParticipantRequired;
  /** Id and extensions of the primitive `required`. */
  _required?: Element;

  /** accepted | declined | tentative | needs-action (1..1) */
  status?: valueSetCodes.ParticipationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  override fhirType(): string {
    return 'Appointment.participant';
  }

  /** FHIR JSON for this AppointmentParticipant, typed as the plain `AppointmentParticipant` data type. */
  override toJSON(): plainTypes.AppointmentParticipant {
    return this.serialize() as plainTypes.AppointmentParticipant;
  }

  /** Role of participant in the appointment (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** Person, Location/HealthcareService or Device (0..1) Created when absent. */
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

  /** required | optional | information-only (0..1) */
  getRequired(): valueSetCodes.ParticipantRequired | undefined {
    return this.required;
  }

  /** Sets `required`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRequired(required: valueSetCodes.ParticipantRequired | undefined): this {
    return this.setFieldValue('required', required);
  }

  hasRequired(): boolean {
    return this.hasFieldValue('required');
  }

  /** The element carrying the id and extensions of `required`. Created when absent. */
  getRequiredElement(): Element {
    if (this._required === undefined) {
      this._required = new Element();
    }
    return this._required;
  }

  setRequiredElement(requiredElement: Element | undefined): this {
    this._required = requiredElement;
    return this;
  }

  /** accepted | declined | tentative | needs-action (1..1) */
  getStatus(): valueSetCodes.ParticipationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ParticipationStatus | undefined): this {
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
}

modelTypeRegistry.register('AppointmentParticipant', AppointmentParticipant, false);
