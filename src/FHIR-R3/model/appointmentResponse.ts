/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for AppointmentResponse Resource
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
      elementName: 'participantStatus',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'participantStatus',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ParticipationStatus,
        },
      ],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
  ];

  readonly resourceType = 'AppointmentResponse';

  /** External Ids for this item (0..*) */
  identifier?: Identifier[];

  /** Appointment this response relates to (1..1) */
  appointment?: Reference;

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

  /** Person, Location/HealthcareService or Device (0..1) */
  actor?: Reference;

  /** accepted | declined | tentative | in-process | completed | needs-action | entered-in-error (1..1) */
  participantStatus?: valueSetCodes.ParticipationStatus;
  /** Id and extensions of the primitive `participantStatus`. */
  _participantStatus?: Element;

  /** Additional comments (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

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

  /** accepted | declined | tentative | in-process | completed | needs-action | entered-in-error (1..1) */
  getParticipantStatus(): valueSetCodes.ParticipationStatus | undefined {
    return this.participantStatus;
  }

  /** Sets `participantStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setParticipantStatus(participantStatus: valueSetCodes.ParticipationStatus | undefined): this {
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

modelTypeRegistry.register('AppointmentResponse', AppointmentResponse, true);

/** True when the value is a AppointmentResponse model instance. */
export function isAppointmentResponse(candidate: unknown): candidate is AppointmentResponse {
  return candidate instanceof AppointmentResponse;
}
