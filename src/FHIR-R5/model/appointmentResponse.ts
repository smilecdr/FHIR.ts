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
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export class AppointmentResponse extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'appointment',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'appointment', typeCode: 'Reference', targetResourceTypes: ['Appointment'] },
      ],
    },
    {
      elementName: 'proposedNewTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'proposedNewTime', typeCode: 'boolean' }],
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
      elementName: 'participantType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participantType', typeCode: 'CodeableConcept' }],
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
      elementName: 'participantStatus',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'participantStatus',
          typeCode: 'code',
          allowedCodes: valueSetCodes.AppointmentResponseStatus,
        },
      ],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'markdown' }],
    },
    {
      elementName: 'recurring',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recurring', typeCode: 'boolean' }],
    },
    {
      elementName: 'occurrenceDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'occurrenceDate', typeCode: 'date' }],
    },
    {
      elementName: 'recurrenceId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recurrenceId', typeCode: 'positiveInt' }],
    },
  ];

  readonly resourceType = 'AppointmentResponse';

  /** External Ids for this item (0..*) */
  identifier?: Identifier[];

  /** Appointment this response relates to (1..1) */
  appointment?: Reference;

  /** Indicator for a counter proposal (0..1) */
  proposedNewTime?: boolean;
  /** Id and extensions of the primitive `proposedNewTime`. */
  _proposedNewTime?: Element;

  /** Time from appointment, or requested new start time (0..1) */
  start?: string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** Time from appointment, or requested new end time (0..1) */
  end?: string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  /** Role of participant in the appointment (0..*) */
  participantType?: CodeableConcept[];

  /** Person(s), Location, HealthcareService, or Device (0..1) */
  actor?: Reference;

  /** accepted | declined | tentative | needs-action | entered-in-error (1..1) */
  participantStatus?: valueSetCodes.AppointmentResponseStatus;
  /** Id and extensions of the primitive `participantStatus`. */
  _participantStatus?: Element;

  /** Additional comments (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** This response is for all occurrences in a recurring request (0..1) */
  recurring?: boolean;
  /** Id and extensions of the primitive `recurring`. */
  _recurring?: Element;

  /** Original date within a recurring request (0..1) */
  occurrenceDate?: string;
  /** Id and extensions of the primitive `occurrenceDate`. */
  _occurrenceDate?: Element;

  /** The recurrence ID of the specific recurring request (0..1) */
  recurrenceId?: number;
  /** Id and extensions of the primitive `recurrenceId`. */
  _recurrenceId?: Element;

  override fhirType(): string {
    return 'AppointmentResponse';
  }

  /** FHIR JSON for this AppointmentResponse, typed as the plain `AppointmentResponse` data type. */
  override toJSON(): plainTypes.AppointmentResponse {
    return this.serialize() as plainTypes.AppointmentResponse;
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

  /** Appointment this response relates to (1..1) Created when absent. */
  getAppointment(): Reference {
    if (this.appointment === undefined) {
      this.appointment = new Reference();
    }
    return this.appointment;
  }

  setAppointment(appointment: Reference | undefined): this {
    return this.setFieldValue('appointment', appointment);
  }

  hasAppointment(): boolean {
    return this.hasFieldValue('appointment');
  }

  /** Indicator for a counter proposal (0..1) */
  getProposedNewTime(): boolean | undefined {
    return this.proposedNewTime;
  }

  /** Sets `proposedNewTime`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setProposedNewTime(proposedNewTime: boolean | undefined): this {
    return this.setFieldValue('proposedNewTime', proposedNewTime);
  }

  hasProposedNewTime(): boolean {
    return this.hasFieldValue('proposedNewTime');
  }

  /** The element carrying the id and extensions of `proposedNewTime`. Created when absent. */
  getProposedNewTimeElement(): Element {
    if (this._proposedNewTime === undefined) {
      this._proposedNewTime = new Element();
    }
    return this._proposedNewTime;
  }

  setProposedNewTimeElement(proposedNewTimeElement: Element | undefined): this {
    this._proposedNewTime = proposedNewTimeElement;
    return this;
  }

  /** Time from appointment, or requested new start time (0..1) */
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

  /** Time from appointment, or requested new end time (0..1) */
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

  /** Role of participant in the appointment (0..*) Never undefined; an empty list is created when absent. */
  getParticipantType(): CodeableConcept[] {
    if (this.participantType === undefined) {
      this.participantType = [];
    }
    return this.participantType;
  }

  setParticipantType(participantType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('participantType', participantType);
  }

  hasParticipantType(): boolean {
    return this.hasFieldValue('participantType');
  }

  /** Appends a new, empty CodeableConcept to `participantType` and returns it so it can be filled in. */
  addParticipantType(): CodeableConcept;
  /** Appends the given CodeableConcept to `participantType` and returns this object for chaining. */
  addParticipantType(codeableConcept: CodeableConcept): this;
  addParticipantType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('participantType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('participantType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `participantType`. One is added when the list is empty. */
  getParticipantTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getParticipantType()[0];
    return firstCodeableConcept === undefined ? this.addParticipantType() : firstCodeableConcept;
  }

  /** Person(s), Location, HealthcareService, or Device (0..1) Created when absent. */
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

  /** accepted | declined | tentative | needs-action | entered-in-error (1..1) */
  getParticipantStatus(): valueSetCodes.AppointmentResponseStatus | undefined {
    return this.participantStatus;
  }

  /** Sets `participantStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setParticipantStatus(
    participantStatus: valueSetCodes.AppointmentResponseStatus | undefined
  ): this {
    return this.setFieldValue('participantStatus', participantStatus);
  }

  hasParticipantStatus(): boolean {
    return this.hasFieldValue('participantStatus');
  }

  /** The element carrying the id and extensions of `participantStatus`. Created when absent. */
  getParticipantStatusElement(): Element {
    if (this._participantStatus === undefined) {
      this._participantStatus = new Element();
    }
    return this._participantStatus;
  }

  setParticipantStatusElement(participantStatusElement: Element | undefined): this {
    this._participantStatus = participantStatusElement;
    return this;
  }

  /** Additional comments (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** This response is for all occurrences in a recurring request (0..1) */
  getRecurring(): boolean | undefined {
    return this.recurring;
  }

  /** Sets `recurring`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setRecurring(recurring: boolean | undefined): this {
    return this.setFieldValue('recurring', recurring);
  }

  hasRecurring(): boolean {
    return this.hasFieldValue('recurring');
  }

  /** The element carrying the id and extensions of `recurring`. Created when absent. */
  getRecurringElement(): Element {
    if (this._recurring === undefined) {
      this._recurring = new Element();
    }
    return this._recurring;
  }

  setRecurringElement(recurringElement: Element | undefined): this {
    this._recurring = recurringElement;
    return this;
  }

  /** Original date within a recurring request (0..1) */
  getOccurrenceDate(): string | undefined {
    return this.occurrenceDate;
  }

  /** Sets `occurrenceDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setOccurrenceDate(occurrenceDate: string | undefined): this {
    return this.setFieldValue('occurrenceDate', occurrenceDate);
  }

  hasOccurrenceDate(): boolean {
    return this.hasFieldValue('occurrenceDate');
  }

  /** The element carrying the id and extensions of `occurrenceDate`. Created when absent. */
  getOccurrenceDateElement(): Element {
    if (this._occurrenceDate === undefined) {
      this._occurrenceDate = new Element();
    }
    return this._occurrenceDate;
  }

  setOccurrenceDateElement(occurrenceDateElement: Element | undefined): this {
    this._occurrenceDate = occurrenceDateElement;
    return this;
  }

  /** The recurrence ID of the specific recurring request (0..1) */
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
}

modelTypeRegistry.register('AppointmentResponse', AppointmentResponse, true);

/** True when the value is a AppointmentResponse model instance. */
export function isAppointmentResponse(candidate: unknown): candidate is AppointmentResponse {
  return candidate instanceof AppointmentResponse;
}
