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
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { VirtualServiceDetail } from './virtualServiceDetail';

/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
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
      elementName: 'cancellationReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cancellationReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'class',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'class', typeCode: 'CodeableConcept' }],
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'appointmentType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'replaces',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'replaces', typeCode: 'Reference', targetResourceTypes: ['Appointment'] }],
    },
    {
      elementName: 'virtualService',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'virtualService', typeCode: 'VirtualServiceDetail' }],
    },
    {
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'Reference' }],
    },
    {
      elementName: 'previousAppointment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'previousAppointment',
          typeCode: 'Reference',
          targetResourceTypes: ['Appointment'],
        },
      ],
    },
    {
      elementName: 'originatingAppointment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'originatingAppointment',
          typeCode: 'Reference',
          targetResourceTypes: ['Appointment'],
        },
      ],
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
      elementName: 'requestedPeriod',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'requestedPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'slot',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'slot', typeCode: 'Reference', targetResourceTypes: ['Slot'] }],
    },
    {
      elementName: 'account',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'account', typeCode: 'Reference', targetResourceTypes: ['Account'] }],
    },
    {
      elementName: 'created',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'created', typeCode: 'dateTime' }],
    },
    {
      elementName: 'cancellationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cancellationDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'patientInstruction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'patientInstruction', typeCode: 'CodeableReference' }],
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
          targetResourceTypes: ['CarePlan', 'DeviceRequest', 'MedicationRequest', 'ServiceRequest'],
        },
      ],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
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
      elementName: 'recurrenceId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recurrenceId', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'occurrenceChanged',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'occurrenceChanged', typeCode: 'boolean' }],
    },
    {
      elementName: 'recurrenceTemplate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'recurrenceTemplate', typeCode: 'AppointmentRecurrenceTemplate' }],
    },
  ];

  readonly resourceType = 'Appointment';

  /** External Ids for this item (0..*) */
  identifier?: Identifier[];

  /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist (1..1) */
  status?: valueSetCodes.AppointmentStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The coded reason for the appointment being cancelled (0..1) */
  cancellationReason?: CodeableConcept;

  /** Classification when becoming an encounter (0..*) */
  class?: CodeableConcept[];

  /** A broad categorization of the service that is to be performed during this appointment (0..*) */
  serviceCategory?: CodeableConcept[];

  /** The specific service that is to be performed during this appointment (0..*) */
  serviceType?: CodeableReference[];

  /** The specialty of a practitioner that would be required to perform the service requested in this appointment (0..*) */
  specialty?: CodeableConcept[];

  /** The style of appointment or patient that has been booked in the slot (not service type) (0..1) */
  appointmentType?: CodeableConcept;

  /** Reason this appointment is scheduled (0..*) */
  reason?: CodeableReference[];

  /** Used to make informed decisions if needing to re-prioritize (0..1) */
  priority?: CodeableConcept;

  /** Shown on a subject line in a meeting request, or appointment list (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Appointment replaced by this Appointment (0..*) */
  replaces?: Reference[];

  /** Connection details of a virtual service (e.g. conference call) (0..*) */
  virtualService?: VirtualServiceDetail[];

  /** Additional information to support the appointment (0..*) */
  supportingInformation?: Reference[];

  /** The previous appointment in a series (0..1) */
  previousAppointment?: Reference;

  /** The originating appointment in a recurring set of appointments (0..1) */
  originatingAppointment?: Reference;

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

  /** Potential date/time interval(s) requested to allocate the appointment within (0..*) */
  requestedPeriod?: Period[];

  /** The slots that this appointment is filling (0..*) */
  slot?: Reference[];

  /** The set of accounts that may be used for billing for this Appointment (0..*) */
  account?: Reference[];

  /** The date that this appointment was initially created (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;

  /** When the appointment was cancelled (0..1) */
  cancellationDate?: string;
  /** Id and extensions of the primitive `cancellationDate`. */
  _cancellationDate?: Element;

  /** Additional comments (0..*) */
  note?: Annotation[];

  /** Detailed information and instructions for the patient (0..*) */
  patientInstruction?: CodeableReference[];

  /** The request this appointment is allocated to assess (0..*) */
  basedOn?: Reference[];

  /** The patient or group associated with the appointment (0..1) */
  subject?: Reference;

  /** Participants involved in appointment (1..*) */
  participant?: AppointmentParticipant[];

  /** The sequence number in the recurrence (0..1) */
  recurrenceId?: number;
  /** Id and extensions of the primitive `recurrenceId`. */
  _recurrenceId?: Element;

  /** Indicates that this appointment varies from a recurrence pattern (0..1) */
  occurrenceChanged?: boolean;
  /** Id and extensions of the primitive `occurrenceChanged`. */
  _occurrenceChanged?: Element;

  /** Details of the recurrence pattern/template used to generate occurrences (0..*) */
  recurrenceTemplate?: AppointmentRecurrenceTemplate[];

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

  /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist (1..1) */
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

  /** The coded reason for the appointment being cancelled (0..1) Created when absent. */
  getCancellationReason(): CodeableConcept {
    if (this.cancellationReason === undefined) {
      this.cancellationReason = new CodeableConcept();
    }
    return this.cancellationReason;
  }

  setCancellationReason(cancellationReason: CodeableConcept | undefined): this {
    return this.setFieldValue('cancellationReason', cancellationReason);
  }

  hasCancellationReason(): boolean {
    return this.hasFieldValue('cancellationReason');
  }

  /** Classification when becoming an encounter (0..*) Never undefined; an empty list is created when absent. */
  getClass(): CodeableConcept[] {
    if (this.class === undefined) {
      this.class = [];
    }
    return this.class;
  }

  setClass(classValue: CodeableConcept[] | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** Appends a new, empty CodeableConcept to `class` and returns it so it can be filled in. */
  addClass(): CodeableConcept;
  /** Appends the given CodeableConcept to `class` and returns this object for chaining. */
  addClass(codeableConcept: CodeableConcept): this;
  addClass(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('class', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('class', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `class`. One is added when the list is empty. */
  getClassFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClass()[0];
    return firstCodeableConcept === undefined ? this.addClass() : firstCodeableConcept;
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

  /** The specific service that is to be performed during this appointment (0..*) Never undefined; an empty list is created when absent. */
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

  /** Used to make informed decisions if needing to re-prioritize (0..1) Created when absent. */
  getPriority(): CodeableConcept {
    if (this.priority === undefined) {
      this.priority = new CodeableConcept();
    }
    return this.priority;
  }

  setPriority(priority: CodeableConcept | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
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

  /** Appointment replaced by this Appointment (0..*) Never undefined; an empty list is created when absent. */
  getReplaces(): Reference[] {
    if (this.replaces === undefined) {
      this.replaces = [];
    }
    return this.replaces;
  }

  setReplaces(replaces: Reference[] | undefined): this {
    return this.setFieldValue('replaces', replaces);
  }

  hasReplaces(): boolean {
    return this.hasFieldValue('replaces');
  }

  /** Appends a new, empty Reference to `replaces` and returns it so it can be filled in. */
  addReplaces(): Reference;
  /** Appends the given Reference to `replaces` and returns this object for chaining. */
  addReplaces(reference: Reference): this;
  addReplaces(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('replaces', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('replaces', createdReference);
    return createdReference;
  }

  /** The first Reference of `replaces`. One is added when the list is empty. */
  getReplacesFirstRep(): Reference {
    const firstReference = this.getReplaces()[0];
    return firstReference === undefined ? this.addReplaces() : firstReference;
  }

  /** Connection details of a virtual service (e.g. conference call) (0..*) Never undefined; an empty list is created when absent. */
  getVirtualService(): VirtualServiceDetail[] {
    if (this.virtualService === undefined) {
      this.virtualService = [];
    }
    return this.virtualService;
  }

  setVirtualService(virtualService: VirtualServiceDetail[] | undefined): this {
    return this.setFieldValue('virtualService', virtualService);
  }

  hasVirtualService(): boolean {
    return this.hasFieldValue('virtualService');
  }

  /** Appends a new, empty VirtualServiceDetail to `virtualService` and returns it so it can be filled in. */
  addVirtualService(): VirtualServiceDetail;
  /** Appends the given VirtualServiceDetail to `virtualService` and returns this object for chaining. */
  addVirtualService(virtualServiceDetail: VirtualServiceDetail): this;
  addVirtualService(virtualServiceDetail?: VirtualServiceDetail): VirtualServiceDetail | this {
    if (virtualServiceDetail !== undefined) {
      return this.addFieldValue('virtualService', virtualServiceDetail);
    }
    const createdVirtualServiceDetail = new VirtualServiceDetail();
    this.addFieldValue('virtualService', createdVirtualServiceDetail);
    return createdVirtualServiceDetail;
  }

  /** The first VirtualServiceDetail of `virtualService`. One is added when the list is empty. */
  getVirtualServiceFirstRep(): VirtualServiceDetail {
    const firstVirtualServiceDetail = this.getVirtualService()[0];
    return firstVirtualServiceDetail === undefined
      ? this.addVirtualService()
      : firstVirtualServiceDetail;
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

  /** The previous appointment in a series (0..1) Created when absent. */
  getPreviousAppointment(): Reference {
    if (this.previousAppointment === undefined) {
      this.previousAppointment = new Reference();
    }
    return this.previousAppointment;
  }

  setPreviousAppointment(previousAppointment: Reference | undefined): this {
    return this.setFieldValue('previousAppointment', previousAppointment);
  }

  hasPreviousAppointment(): boolean {
    return this.hasFieldValue('previousAppointment');
  }

  /** The originating appointment in a recurring set of appointments (0..1) Created when absent. */
  getOriginatingAppointment(): Reference {
    if (this.originatingAppointment === undefined) {
      this.originatingAppointment = new Reference();
    }
    return this.originatingAppointment;
  }

  setOriginatingAppointment(originatingAppointment: Reference | undefined): this {
    return this.setFieldValue('originatingAppointment', originatingAppointment);
  }

  hasOriginatingAppointment(): boolean {
    return this.hasFieldValue('originatingAppointment');
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

  /** The set of accounts that may be used for billing for this Appointment (0..*) Never undefined; an empty list is created when absent. */
  getAccount(): Reference[] {
    if (this.account === undefined) {
      this.account = [];
    }
    return this.account;
  }

  setAccount(account: Reference[] | undefined): this {
    return this.setFieldValue('account', account);
  }

  hasAccount(): boolean {
    return this.hasFieldValue('account');
  }

  /** Appends a new, empty Reference to `account` and returns it so it can be filled in. */
  addAccount(): Reference;
  /** Appends the given Reference to `account` and returns this object for chaining. */
  addAccount(reference: Reference): this;
  addAccount(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('account', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('account', createdReference);
    return createdReference;
  }

  /** The first Reference of `account`. One is added when the list is empty. */
  getAccountFirstRep(): Reference {
    const firstReference = this.getAccount()[0];
    return firstReference === undefined ? this.addAccount() : firstReference;
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

  /** When the appointment was cancelled (0..1) */
  getCancellationDate(): string | undefined {
    return this.cancellationDate;
  }

  /** Sets `cancellationDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setCancellationDate(cancellationDate: string | undefined): this {
    return this.setFieldValue('cancellationDate', cancellationDate);
  }

  hasCancellationDate(): boolean {
    return this.hasFieldValue('cancellationDate');
  }

  /** The element carrying the id and extensions of `cancellationDate`. Created when absent. */
  getCancellationDateElement(): Element {
    if (this._cancellationDate === undefined) {
      this._cancellationDate = new Element();
    }
    return this._cancellationDate;
  }

  setCancellationDateElement(cancellationDateElement: Element | undefined): this {
    this._cancellationDate = cancellationDateElement;
    return this;
  }

  /** Additional comments (0..*) Never undefined; an empty list is created when absent. */
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

  /** Detailed information and instructions for the patient (0..*) Never undefined; an empty list is created when absent. */
  getPatientInstruction(): CodeableReference[] {
    if (this.patientInstruction === undefined) {
      this.patientInstruction = [];
    }
    return this.patientInstruction;
  }

  setPatientInstruction(patientInstruction: CodeableReference[] | undefined): this {
    return this.setFieldValue('patientInstruction', patientInstruction);
  }

  hasPatientInstruction(): boolean {
    return this.hasFieldValue('patientInstruction');
  }

  /** Appends a new, empty CodeableReference to `patientInstruction` and returns it so it can be filled in. */
  addPatientInstruction(): CodeableReference;
  /** Appends the given CodeableReference to `patientInstruction` and returns this object for chaining. */
  addPatientInstruction(codeableReference: CodeableReference): this;
  addPatientInstruction(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('patientInstruction', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('patientInstruction', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `patientInstruction`. One is added when the list is empty. */
  getPatientInstructionFirstRep(): CodeableReference {
    const firstCodeableReference = this.getPatientInstruction()[0];
    return firstCodeableReference === undefined
      ? this.addPatientInstruction()
      : firstCodeableReference;
  }

  /** The request this appointment is allocated to assess (0..*) Never undefined; an empty list is created when absent. */
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

  /** The patient or group associated with the appointment (0..1) Created when absent. */
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

  /** The sequence number in the recurrence (0..1) */
  getRecurrenceId(): number | undefined {
    return this.recurrenceId;
  }

  /** Sets `recurrenceId`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setRecurrenceId(recurrenceId: number | undefined): this {
    return this.setFieldValue('recurrenceId', recurrenceId);
  }

  hasRecurrenceId(): boolean {
    return this.hasFieldValue('recurrenceId');
  }

  /** The element carrying the id and extensions of `recurrenceId`. Created when absent. */
  getRecurrenceIdElement(): Element {
    if (this._recurrenceId === undefined) {
      this._recurrenceId = new Element();
    }
    return this._recurrenceId;
  }

  setRecurrenceIdElement(recurrenceIdElement: Element | undefined): this {
    this._recurrenceId = recurrenceIdElement;
    return this;
  }

  /** Indicates that this appointment varies from a recurrence pattern (0..1) */
  getOccurrenceChanged(): boolean | undefined {
    return this.occurrenceChanged;
  }

  /** Sets `occurrenceChanged`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setOccurrenceChanged(occurrenceChanged: boolean | undefined): this {
    return this.setFieldValue('occurrenceChanged', occurrenceChanged);
  }

  hasOccurrenceChanged(): boolean {
    return this.hasFieldValue('occurrenceChanged');
  }

  /** The element carrying the id and extensions of `occurrenceChanged`. Created when absent. */
  getOccurrenceChangedElement(): Element {
    if (this._occurrenceChanged === undefined) {
      this._occurrenceChanged = new Element();
    }
    return this._occurrenceChanged;
  }

  setOccurrenceChangedElement(occurrenceChangedElement: Element | undefined): this {
    this._occurrenceChanged = occurrenceChangedElement;
    return this;
  }

  /** Details of the recurrence pattern/template used to generate occurrences (0..*) Never undefined; an empty list is created when absent. */
  getRecurrenceTemplate(): AppointmentRecurrenceTemplate[] {
    if (this.recurrenceTemplate === undefined) {
      this.recurrenceTemplate = [];
    }
    return this.recurrenceTemplate;
  }

  setRecurrenceTemplate(recurrenceTemplate: AppointmentRecurrenceTemplate[] | undefined): this {
    return this.setFieldValue('recurrenceTemplate', recurrenceTemplate);
  }

  hasRecurrenceTemplate(): boolean {
    return this.hasFieldValue('recurrenceTemplate');
  }

  /** Appends a new, empty AppointmentRecurrenceTemplate to `recurrenceTemplate` and returns it so it can be filled in. */
  addRecurrenceTemplate(): AppointmentRecurrenceTemplate;
  /** Appends the given AppointmentRecurrenceTemplate to `recurrenceTemplate` and returns this object for chaining. */
  addRecurrenceTemplate(appointmentRecurrenceTemplate: AppointmentRecurrenceTemplate): this;
  addRecurrenceTemplate(
    appointmentRecurrenceTemplate?: AppointmentRecurrenceTemplate
  ): AppointmentRecurrenceTemplate | this {
    if (appointmentRecurrenceTemplate !== undefined) {
      return this.addFieldValue('recurrenceTemplate', appointmentRecurrenceTemplate);
    }
    const createdAppointmentRecurrenceTemplate = new AppointmentRecurrenceTemplate();
    this.addFieldValue('recurrenceTemplate', createdAppointmentRecurrenceTemplate);
    return createdAppointmentRecurrenceTemplate;
  }

  /** The first AppointmentRecurrenceTemplate of `recurrenceTemplate`. One is added when the list is empty. */
  getRecurrenceTemplateFirstRep(): AppointmentRecurrenceTemplate {
    const firstAppointmentRecurrenceTemplate = this.getRecurrenceTemplate()[0];
    return firstAppointmentRecurrenceTemplate === undefined
      ? this.addRecurrenceTemplate()
      : firstAppointmentRecurrenceTemplate;
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
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
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
            'CareTeam',
            'Device',
            'Group',
            'HealthcareService',
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
      elementName: 'required',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'required', typeCode: 'boolean' }],
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

  /** Participation period of the actor (0..1) */
  period?: Period;

  /** The individual, device, location, or service participating in the appointment (0..1) */
  actor?: Reference;

  /** The participant is required to attend (optional when false) (0..1) */
  required?: boolean;
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

  /** Participation period of the actor (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** The individual, device, location, or service participating in the appointment (0..1) Created when absent. */
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

  /** The participant is required to attend (optional when false) (0..1) */
  getRequired(): boolean | undefined {
    return this.required;
  }

  /** Sets `required`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setRequired(required: boolean | undefined): this {
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

/**
 * Details of the recurrence pattern/template used to generate occurrences
 */
export class AppointmentRecurrenceTemplate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'timezone',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'timezone', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'recurrenceType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recurrenceType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'lastOccurrenceDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastOccurrenceDate', typeCode: 'date' }],
    },
    {
      elementName: 'occurrenceCount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'occurrenceCount', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'occurrenceDate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'occurrenceDate', typeCode: 'date' }],
    },
    {
      elementName: 'weeklyTemplate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'weeklyTemplate', typeCode: 'AppointmentRecurrenceTemplateWeeklyTemplate' },
      ],
    },
    {
      elementName: 'monthlyTemplate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'monthlyTemplate', typeCode: 'AppointmentRecurrenceTemplateMonthlyTemplate' },
      ],
    },
    {
      elementName: 'yearlyTemplate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'yearlyTemplate', typeCode: 'AppointmentRecurrenceTemplateYearlyTemplate' },
      ],
    },
    {
      elementName: 'excludingDate',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'excludingDate', typeCode: 'date' }],
    },
    {
      elementName: 'excludingRecurrenceId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'excludingRecurrenceId', typeCode: 'positiveInt' }],
    },
  ];

  /** The timezone of the occurrences (0..1) */
  timezone?: CodeableConcept;

  /** The frequency of the recurrence (1..1) */
  recurrenceType?: CodeableConcept;

  /** The date when the recurrence should end (0..1) */
  lastOccurrenceDate?: string;
  /** Id and extensions of the primitive `lastOccurrenceDate`. */
  _lastOccurrenceDate?: Element;

  /** The number of planned occurrences (0..1) */
  occurrenceCount?: number;
  /** Id and extensions of the primitive `occurrenceCount`. */
  _occurrenceCount?: Element;

  /** Specific dates for a recurring set of appointments (no template) (0..*) */
  occurrenceDate?: string[];
  /** Id and extensions of the primitive `occurrenceDate`. */
  _occurrenceDate?: (Element | null)[];

  /** Information about weekly recurring appointments (0..1) */
  weeklyTemplate?: AppointmentRecurrenceTemplateWeeklyTemplate;

  /** Information about monthly recurring appointments (0..1) */
  monthlyTemplate?: AppointmentRecurrenceTemplateMonthlyTemplate;

  /** Information about yearly recurring appointments (0..1) */
  yearlyTemplate?: AppointmentRecurrenceTemplateYearlyTemplate;

  /** Any dates that should be excluded from the series (0..*) */
  excludingDate?: string[];
  /** Id and extensions of the primitive `excludingDate`. */
  _excludingDate?: (Element | null)[];

  /** Any recurrence IDs that should be excluded from the recurrence (0..*) */
  excludingRecurrenceId?: number[];
  /** Id and extensions of the primitive `excludingRecurrenceId`. */
  _excludingRecurrenceId?: (Element | null)[];

  override fhirType(): string {
    return 'Appointment.recurrenceTemplate';
  }

  /** FHIR JSON for this AppointmentRecurrenceTemplate, typed as the plain `AppointmentRecurrenceTemplate` data type. */
  override toJSON(): plainTypes.AppointmentRecurrenceTemplate {
    return this.serialize() as plainTypes.AppointmentRecurrenceTemplate;
  }

  /** The timezone of the occurrences (0..1) Created when absent. */
  getTimezone(): CodeableConcept {
    if (this.timezone === undefined) {
      this.timezone = new CodeableConcept();
    }
    return this.timezone;
  }

  setTimezone(timezone: CodeableConcept | undefined): this {
    return this.setFieldValue('timezone', timezone);
  }

  hasTimezone(): boolean {
    return this.hasFieldValue('timezone');
  }

  /** The frequency of the recurrence (1..1) Created when absent. */
  getRecurrenceType(): CodeableConcept {
    if (this.recurrenceType === undefined) {
      this.recurrenceType = new CodeableConcept();
    }
    return this.recurrenceType;
  }

  setRecurrenceType(recurrenceType: CodeableConcept | undefined): this {
    return this.setFieldValue('recurrenceType', recurrenceType);
  }

  hasRecurrenceType(): boolean {
    return this.hasFieldValue('recurrenceType');
  }

  /** The date when the recurrence should end (0..1) */
  getLastOccurrenceDate(): string | undefined {
    return this.lastOccurrenceDate;
  }

  /** Sets `lastOccurrenceDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setLastOccurrenceDate(lastOccurrenceDate: string | undefined): this {
    return this.setFieldValue('lastOccurrenceDate', lastOccurrenceDate);
  }

  hasLastOccurrenceDate(): boolean {
    return this.hasFieldValue('lastOccurrenceDate');
  }

  /** The element carrying the id and extensions of `lastOccurrenceDate`. Created when absent. */
  getLastOccurrenceDateElement(): Element {
    if (this._lastOccurrenceDate === undefined) {
      this._lastOccurrenceDate = new Element();
    }
    return this._lastOccurrenceDate;
  }

  setLastOccurrenceDateElement(lastOccurrenceDateElement: Element | undefined): this {
    this._lastOccurrenceDate = lastOccurrenceDateElement;
    return this;
  }

  /** The number of planned occurrences (0..1) */
  getOccurrenceCount(): number | undefined {
    return this.occurrenceCount;
  }

  /** Sets `occurrenceCount`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setOccurrenceCount(occurrenceCount: number | undefined): this {
    return this.setFieldValue('occurrenceCount', occurrenceCount);
  }

  hasOccurrenceCount(): boolean {
    return this.hasFieldValue('occurrenceCount');
  }

  /** The element carrying the id and extensions of `occurrenceCount`. Created when absent. */
  getOccurrenceCountElement(): Element {
    if (this._occurrenceCount === undefined) {
      this._occurrenceCount = new Element();
    }
    return this._occurrenceCount;
  }

  setOccurrenceCountElement(occurrenceCountElement: Element | undefined): this {
    this._occurrenceCount = occurrenceCountElement;
    return this;
  }

  /** Specific dates for a recurring set of appointments (no template) (0..*) Never undefined; an empty list is created when absent. */
  getOccurrenceDate(): string[] {
    if (this.occurrenceDate === undefined) {
      this.occurrenceDate = [];
    }
    return this.occurrenceDate;
  }

  setOccurrenceDate(occurrenceDate: string[] | undefined): this {
    return this.setFieldValue('occurrenceDate', occurrenceDate);
  }

  hasOccurrenceDate(): boolean {
    return this.hasFieldValue('occurrenceDate');
  }

  /** Appends one value to `occurrenceDate`. Throws a FhirModelError when it is not a valid FHIR date. */
  addOccurrenceDate(occurrenceDate: string): this {
    return this.addFieldValue('occurrenceDate', occurrenceDate);
  }

  /** Information about weekly recurring appointments (0..1) Created when absent. */
  getWeeklyTemplate(): AppointmentRecurrenceTemplateWeeklyTemplate {
    if (this.weeklyTemplate === undefined) {
      this.weeklyTemplate = new AppointmentRecurrenceTemplateWeeklyTemplate();
    }
    return this.weeklyTemplate;
  }

  setWeeklyTemplate(weeklyTemplate: AppointmentRecurrenceTemplateWeeklyTemplate | undefined): this {
    return this.setFieldValue('weeklyTemplate', weeklyTemplate);
  }

  hasWeeklyTemplate(): boolean {
    return this.hasFieldValue('weeklyTemplate');
  }

  /** Information about monthly recurring appointments (0..1) Created when absent. */
  getMonthlyTemplate(): AppointmentRecurrenceTemplateMonthlyTemplate {
    if (this.monthlyTemplate === undefined) {
      this.monthlyTemplate = new AppointmentRecurrenceTemplateMonthlyTemplate();
    }
    return this.monthlyTemplate;
  }

  setMonthlyTemplate(
    monthlyTemplate: AppointmentRecurrenceTemplateMonthlyTemplate | undefined
  ): this {
    return this.setFieldValue('monthlyTemplate', monthlyTemplate);
  }

  hasMonthlyTemplate(): boolean {
    return this.hasFieldValue('monthlyTemplate');
  }

  /** Information about yearly recurring appointments (0..1) Created when absent. */
  getYearlyTemplate(): AppointmentRecurrenceTemplateYearlyTemplate {
    if (this.yearlyTemplate === undefined) {
      this.yearlyTemplate = new AppointmentRecurrenceTemplateYearlyTemplate();
    }
    return this.yearlyTemplate;
  }

  setYearlyTemplate(yearlyTemplate: AppointmentRecurrenceTemplateYearlyTemplate | undefined): this {
    return this.setFieldValue('yearlyTemplate', yearlyTemplate);
  }

  hasYearlyTemplate(): boolean {
    return this.hasFieldValue('yearlyTemplate');
  }

  /** Any dates that should be excluded from the series (0..*) Never undefined; an empty list is created when absent. */
  getExcludingDate(): string[] {
    if (this.excludingDate === undefined) {
      this.excludingDate = [];
    }
    return this.excludingDate;
  }

  setExcludingDate(excludingDate: string[] | undefined): this {
    return this.setFieldValue('excludingDate', excludingDate);
  }

  hasExcludingDate(): boolean {
    return this.hasFieldValue('excludingDate');
  }

  /** Appends one value to `excludingDate`. Throws a FhirModelError when it is not a valid FHIR date. */
  addExcludingDate(excludingDate: string): this {
    return this.addFieldValue('excludingDate', excludingDate);
  }

  /** Any recurrence IDs that should be excluded from the recurrence (0..*) Never undefined; an empty list is created when absent. */
  getExcludingRecurrenceId(): number[] {
    if (this.excludingRecurrenceId === undefined) {
      this.excludingRecurrenceId = [];
    }
    return this.excludingRecurrenceId;
  }

  setExcludingRecurrenceId(excludingRecurrenceId: number[] | undefined): this {
    return this.setFieldValue('excludingRecurrenceId', excludingRecurrenceId);
  }

  hasExcludingRecurrenceId(): boolean {
    return this.hasFieldValue('excludingRecurrenceId');
  }

  /** Appends one value to `excludingRecurrenceId`. Throws a FhirModelError when it is not a valid FHIR positiveInt. */
  addExcludingRecurrenceId(excludingRecurrenceId: number): this {
    return this.addFieldValue('excludingRecurrenceId', excludingRecurrenceId);
  }
}

modelTypeRegistry.register('AppointmentRecurrenceTemplate', AppointmentRecurrenceTemplate, false);

/**
 * Information about weekly recurring appointments
 */
export class AppointmentRecurrenceTemplateWeeklyTemplate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'monday',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'monday', typeCode: 'boolean' }],
    },
    {
      elementName: 'tuesday',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'tuesday', typeCode: 'boolean' }],
    },
    {
      elementName: 'wednesday',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'wednesday', typeCode: 'boolean' }],
    },
    {
      elementName: 'thursday',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'thursday', typeCode: 'boolean' }],
    },
    {
      elementName: 'friday',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'friday', typeCode: 'boolean' }],
    },
    {
      elementName: 'saturday',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'saturday', typeCode: 'boolean' }],
    },
    {
      elementName: 'sunday',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sunday', typeCode: 'boolean' }],
    },
    {
      elementName: 'weekInterval',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'weekInterval', typeCode: 'positiveInt' }],
    },
  ];

  /** Recurs on Mondays (0..1) */
  monday?: boolean;
  /** Id and extensions of the primitive `monday`. */
  _monday?: Element;

  /** Recurs on Tuesday (0..1) */
  tuesday?: boolean;
  /** Id and extensions of the primitive `tuesday`. */
  _tuesday?: Element;

  /** Recurs on Wednesday (0..1) */
  wednesday?: boolean;
  /** Id and extensions of the primitive `wednesday`. */
  _wednesday?: Element;

  /** Recurs on Thursday (0..1) */
  thursday?: boolean;
  /** Id and extensions of the primitive `thursday`. */
  _thursday?: Element;

  /** Recurs on Friday (0..1) */
  friday?: boolean;
  /** Id and extensions of the primitive `friday`. */
  _friday?: Element;

  /** Recurs on Saturday (0..1) */
  saturday?: boolean;
  /** Id and extensions of the primitive `saturday`. */
  _saturday?: Element;

  /** Recurs on Sunday (0..1) */
  sunday?: boolean;
  /** Id and extensions of the primitive `sunday`. */
  _sunday?: Element;

  /** Recurs every nth week (0..1) */
  weekInterval?: number;
  /** Id and extensions of the primitive `weekInterval`. */
  _weekInterval?: Element;

  override fhirType(): string {
    return 'Appointment.recurrenceTemplate.weeklyTemplate';
  }

  /** FHIR JSON for this AppointmentRecurrenceTemplateWeeklyTemplate, typed as the plain `AppointmentWeeklyTemplate` data type. */
  override toJSON(): plainTypes.AppointmentWeeklyTemplate {
    return this.serialize() as plainTypes.AppointmentWeeklyTemplate;
  }

  /** Recurs on Mondays (0..1) */
  getMonday(): boolean | undefined {
    return this.monday;
  }

  /** Sets `monday`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setMonday(monday: boolean | undefined): this {
    return this.setFieldValue('monday', monday);
  }

  hasMonday(): boolean {
    return this.hasFieldValue('monday');
  }

  /** The element carrying the id and extensions of `monday`. Created when absent. */
  getMondayElement(): Element {
    if (this._monday === undefined) {
      this._monday = new Element();
    }
    return this._monday;
  }

  setMondayElement(mondayElement: Element | undefined): this {
    this._monday = mondayElement;
    return this;
  }

  /** Recurs on Tuesday (0..1) */
  getTuesday(): boolean | undefined {
    return this.tuesday;
  }

  /** Sets `tuesday`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setTuesday(tuesday: boolean | undefined): this {
    return this.setFieldValue('tuesday', tuesday);
  }

  hasTuesday(): boolean {
    return this.hasFieldValue('tuesday');
  }

  /** The element carrying the id and extensions of `tuesday`. Created when absent. */
  getTuesdayElement(): Element {
    if (this._tuesday === undefined) {
      this._tuesday = new Element();
    }
    return this._tuesday;
  }

  setTuesdayElement(tuesdayElement: Element | undefined): this {
    this._tuesday = tuesdayElement;
    return this;
  }

  /** Recurs on Wednesday (0..1) */
  getWednesday(): boolean | undefined {
    return this.wednesday;
  }

  /** Sets `wednesday`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setWednesday(wednesday: boolean | undefined): this {
    return this.setFieldValue('wednesday', wednesday);
  }

  hasWednesday(): boolean {
    return this.hasFieldValue('wednesday');
  }

  /** The element carrying the id and extensions of `wednesday`. Created when absent. */
  getWednesdayElement(): Element {
    if (this._wednesday === undefined) {
      this._wednesday = new Element();
    }
    return this._wednesday;
  }

  setWednesdayElement(wednesdayElement: Element | undefined): this {
    this._wednesday = wednesdayElement;
    return this;
  }

  /** Recurs on Thursday (0..1) */
  getThursday(): boolean | undefined {
    return this.thursday;
  }

  /** Sets `thursday`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setThursday(thursday: boolean | undefined): this {
    return this.setFieldValue('thursday', thursday);
  }

  hasThursday(): boolean {
    return this.hasFieldValue('thursday');
  }

  /** The element carrying the id and extensions of `thursday`. Created when absent. */
  getThursdayElement(): Element {
    if (this._thursday === undefined) {
      this._thursday = new Element();
    }
    return this._thursday;
  }

  setThursdayElement(thursdayElement: Element | undefined): this {
    this._thursday = thursdayElement;
    return this;
  }

  /** Recurs on Friday (0..1) */
  getFriday(): boolean | undefined {
    return this.friday;
  }

  /** Sets `friday`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setFriday(friday: boolean | undefined): this {
    return this.setFieldValue('friday', friday);
  }

  hasFriday(): boolean {
    return this.hasFieldValue('friday');
  }

  /** The element carrying the id and extensions of `friday`. Created when absent. */
  getFridayElement(): Element {
    if (this._friday === undefined) {
      this._friday = new Element();
    }
    return this._friday;
  }

  setFridayElement(fridayElement: Element | undefined): this {
    this._friday = fridayElement;
    return this;
  }

  /** Recurs on Saturday (0..1) */
  getSaturday(): boolean | undefined {
    return this.saturday;
  }

  /** Sets `saturday`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setSaturday(saturday: boolean | undefined): this {
    return this.setFieldValue('saturday', saturday);
  }

  hasSaturday(): boolean {
    return this.hasFieldValue('saturday');
  }

  /** The element carrying the id and extensions of `saturday`. Created when absent. */
  getSaturdayElement(): Element {
    if (this._saturday === undefined) {
      this._saturday = new Element();
    }
    return this._saturday;
  }

  setSaturdayElement(saturdayElement: Element | undefined): this {
    this._saturday = saturdayElement;
    return this;
  }

  /** Recurs on Sunday (0..1) */
  getSunday(): boolean | undefined {
    return this.sunday;
  }

  /** Sets `sunday`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setSunday(sunday: boolean | undefined): this {
    return this.setFieldValue('sunday', sunday);
  }

  hasSunday(): boolean {
    return this.hasFieldValue('sunday');
  }

  /** The element carrying the id and extensions of `sunday`. Created when absent. */
  getSundayElement(): Element {
    if (this._sunday === undefined) {
      this._sunday = new Element();
    }
    return this._sunday;
  }

  setSundayElement(sundayElement: Element | undefined): this {
    this._sunday = sundayElement;
    return this;
  }

  /** Recurs every nth week (0..1) */
  getWeekInterval(): number | undefined {
    return this.weekInterval;
  }

  /** Sets `weekInterval`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setWeekInterval(weekInterval: number | undefined): this {
    return this.setFieldValue('weekInterval', weekInterval);
  }

  hasWeekInterval(): boolean {
    return this.hasFieldValue('weekInterval');
  }

  /** The element carrying the id and extensions of `weekInterval`. Created when absent. */
  getWeekIntervalElement(): Element {
    if (this._weekInterval === undefined) {
      this._weekInterval = new Element();
    }
    return this._weekInterval;
  }

  setWeekIntervalElement(weekIntervalElement: Element | undefined): this {
    this._weekInterval = weekIntervalElement;
    return this;
  }
}

modelTypeRegistry.register(
  'AppointmentRecurrenceTemplateWeeklyTemplate',
  AppointmentRecurrenceTemplateWeeklyTemplate,
  false
);

/**
 * Information about monthly recurring appointments
 */
export class AppointmentRecurrenceTemplateMonthlyTemplate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'dayOfMonth',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dayOfMonth', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'nthWeekOfMonth',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nthWeekOfMonth', typeCode: 'Coding' }],
    },
    {
      elementName: 'dayOfWeek',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dayOfWeek', typeCode: 'Coding' }],
    },
    {
      elementName: 'monthInterval',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'monthInterval', typeCode: 'positiveInt' }],
    },
  ];

  /** Recurs on a specific day of the month (0..1) */
  dayOfMonth?: number;
  /** Id and extensions of the primitive `dayOfMonth`. */
  _dayOfMonth?: Element;

  /** Indicates which week of the month the appointment should occur (0..1) */
  nthWeekOfMonth?: Coding;

  /** Indicates which day of the week the appointment should occur (0..1) */
  dayOfWeek?: Coding;

  /** Recurs every nth month (1..1) */
  monthInterval?: number;
  /** Id and extensions of the primitive `monthInterval`. */
  _monthInterval?: Element;

  override fhirType(): string {
    return 'Appointment.recurrenceTemplate.monthlyTemplate';
  }

  /** FHIR JSON for this AppointmentRecurrenceTemplateMonthlyTemplate, typed as the plain `AppointmentMonthlyTemplate` data type. */
  override toJSON(): plainTypes.AppointmentMonthlyTemplate {
    return this.serialize() as plainTypes.AppointmentMonthlyTemplate;
  }

  /** Recurs on a specific day of the month (0..1) */
  getDayOfMonth(): number | undefined {
    return this.dayOfMonth;
  }

  /** Sets `dayOfMonth`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setDayOfMonth(dayOfMonth: number | undefined): this {
    return this.setFieldValue('dayOfMonth', dayOfMonth);
  }

  hasDayOfMonth(): boolean {
    return this.hasFieldValue('dayOfMonth');
  }

  /** The element carrying the id and extensions of `dayOfMonth`. Created when absent. */
  getDayOfMonthElement(): Element {
    if (this._dayOfMonth === undefined) {
      this._dayOfMonth = new Element();
    }
    return this._dayOfMonth;
  }

  setDayOfMonthElement(dayOfMonthElement: Element | undefined): this {
    this._dayOfMonth = dayOfMonthElement;
    return this;
  }

  /** Indicates which week of the month the appointment should occur (0..1) Created when absent. */
  getNthWeekOfMonth(): Coding {
    if (this.nthWeekOfMonth === undefined) {
      this.nthWeekOfMonth = new Coding();
    }
    return this.nthWeekOfMonth;
  }

  setNthWeekOfMonth(nthWeekOfMonth: Coding | undefined): this {
    return this.setFieldValue('nthWeekOfMonth', nthWeekOfMonth);
  }

  hasNthWeekOfMonth(): boolean {
    return this.hasFieldValue('nthWeekOfMonth');
  }

  /** Indicates which day of the week the appointment should occur (0..1) Created when absent. */
  getDayOfWeek(): Coding {
    if (this.dayOfWeek === undefined) {
      this.dayOfWeek = new Coding();
    }
    return this.dayOfWeek;
  }

  setDayOfWeek(dayOfWeek: Coding | undefined): this {
    return this.setFieldValue('dayOfWeek', dayOfWeek);
  }

  hasDayOfWeek(): boolean {
    return this.hasFieldValue('dayOfWeek');
  }

  /** Recurs every nth month (1..1) */
  getMonthInterval(): number | undefined {
    return this.monthInterval;
  }

  /** Sets `monthInterval`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setMonthInterval(monthInterval: number | undefined): this {
    return this.setFieldValue('monthInterval', monthInterval);
  }

  hasMonthInterval(): boolean {
    return this.hasFieldValue('monthInterval');
  }

  /** The element carrying the id and extensions of `monthInterval`. Created when absent. */
  getMonthIntervalElement(): Element {
    if (this._monthInterval === undefined) {
      this._monthInterval = new Element();
    }
    return this._monthInterval;
  }

  setMonthIntervalElement(monthIntervalElement: Element | undefined): this {
    this._monthInterval = monthIntervalElement;
    return this;
  }
}

modelTypeRegistry.register(
  'AppointmentRecurrenceTemplateMonthlyTemplate',
  AppointmentRecurrenceTemplateMonthlyTemplate,
  false
);

/**
 * Information about yearly recurring appointments
 */
export class AppointmentRecurrenceTemplateYearlyTemplate extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'yearInterval',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'yearInterval', typeCode: 'positiveInt' }],
    },
  ];

  /** Recurs every nth year (1..1) */
  yearInterval?: number;
  /** Id and extensions of the primitive `yearInterval`. */
  _yearInterval?: Element;

  override fhirType(): string {
    return 'Appointment.recurrenceTemplate.yearlyTemplate';
  }

  /** FHIR JSON for this AppointmentRecurrenceTemplateYearlyTemplate, typed as the plain `AppointmentYearlyTemplate` data type. */
  override toJSON(): plainTypes.AppointmentYearlyTemplate {
    return this.serialize() as plainTypes.AppointmentYearlyTemplate;
  }

  /** Recurs every nth year (1..1) */
  getYearInterval(): number | undefined {
    return this.yearInterval;
  }

  /** Sets `yearInterval`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setYearInterval(yearInterval: number | undefined): this {
    return this.setFieldValue('yearInterval', yearInterval);
  }

  hasYearInterval(): boolean {
    return this.hasFieldValue('yearInterval');
  }

  /** The element carrying the id and extensions of `yearInterval`. Created when absent. */
  getYearIntervalElement(): Element {
    if (this._yearInterval === undefined) {
      this._yearInterval = new Element();
    }
    return this._yearInterval;
  }

  setYearIntervalElement(yearIntervalElement: Element | undefined): this {
    this._yearInterval = yearIntervalElement;
    return this;
  }
}

modelTypeRegistry.register(
  'AppointmentRecurrenceTemplateYearlyTemplate',
  AppointmentRecurrenceTemplateYearlyTemplate,
  false
);
