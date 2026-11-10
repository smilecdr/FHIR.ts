/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export class Appointment {
  resourceType: 'Appointment';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;
  /** Contained, inline Resources (0..*) */
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External Ids for this item (0..*) */
  identifier?: Array<Identifier>;
  /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist (1..1) */
  status?: Appointment.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The coded reason for the appointment being cancelled (0..1) */
  cancelationReason?: CodeableConcept;
  /** A broad categorization of the service that is to be performed during this appointment (0..*) */
  serviceCategory?: Array<CodeableConcept>;
  /** The specific service that is to be performed during this appointment (0..*) */
  serviceType?: Array<CodeableConcept>;
  /** The specialty of a practitioner that would be required to perform the service requested in this appointment (0..*) */
  specialty?: Array<CodeableConcept>;
  /** The style of appointment or patient that has been booked in the slot (not service type) (0..1) */
  appointmentType?: CodeableConcept;
  /** Coded reason this appointment is scheduled (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Reason the appointment is to take place (resource) (0..*) */
  reasonReference?: Array<Reference>;
  /** Used to make informed decisions if needing to re-prioritize (0..1) */
  priority?: number;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** Shown on a subject line in a meeting request, or appointment list (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Additional information to support the appointment (0..*) */
  supportingInformation?: Array<Reference>;
  /** When appointment is to take place (0..1) */
  start?: Date | string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;
  /** When appointment is to conclude (0..1) */
  end?: Date | string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;
  /** Can be less than start/end (e.g. estimate) (0..1) */
  minutesDuration?: number;
  /** Id and extensions of the primitive `minutesDuration`. */
  _minutesDuration?: Element;
  /** The slots that this appointment is filling (0..*) */
  slot?: Array<Reference>;
  /** The date that this appointment was initially created (0..1) */
  created?: Date | string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Additional comments (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Detailed information and instructions for the patient (0..1) */
  patientInstruction?: string;
  /** Id and extensions of the primitive `patientInstruction`. */
  _patientInstruction?: Element;
  /** The service request this appointment is allocated to assess (0..*) */
  basedOn?: Array<Reference>;
  /** Participants involved in appointment (1..*) */
  participant: Array<AppointmentParticipant>;
  /** Potential date/time interval(s) requested to allocate the appointment within (0..*) */
  requestedPeriod?: Array<Period>;
}

export namespace Appointment {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/appointmentstatus */
  export type StatusEnum =
    | 'proposed'
    | 'pending'
    | 'booked'
    | 'arrived'
    | 'fulfilled'
    | 'cancelled'
    | 'noshow'
    | 'entered-in-error'
    | 'checked-in'
    | 'waitlist';
  export const StatusEnum = {
    Proposed: 'proposed' as StatusEnum,
    Pending: 'pending' as StatusEnum,
    Booked: 'booked' as StatusEnum,
    Arrived: 'arrived' as StatusEnum,
    Fulfilled: 'fulfilled' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Noshow: 'noshow' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    CheckedIn: 'checked-in' as StatusEnum,
    Waitlist: 'waitlist' as StatusEnum,
  };
}

/**
 * Participants involved in appointment
 */
export class AppointmentParticipant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Role of participant in the appointment (0..*) */
  type?: Array<CodeableConcept>;
  /** Person, Location/HealthcareService or Device (0..1) */
  actor?: Reference;
  /** required | optional | information-only (0..1) */
  required?: AppointmentParticipant.RequiredEnum;
  /** Id and extensions of the primitive `required`. */
  _required?: Element;
  /** accepted | declined | tentative | needs-action (1..1) */
  status?: AppointmentParticipant.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Participation period of the actor (0..1) */
  period?: Period;
}

export namespace AppointmentParticipant {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/participantrequired */
  export type RequiredEnum = 'required' | 'optional' | 'information-only';
  export const RequiredEnum = {
    Required: 'required' as RequiredEnum,
    Optional: 'optional' as RequiredEnum,
    InformationOnly: 'information-only' as RequiredEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/participationstatus */
  export type StatusEnum = 'accepted' | 'declined' | 'tentative' | 'needs-action';
  export const StatusEnum = {
    Accepted: 'accepted' as StatusEnum,
    Declined: 'declined' as StatusEnum,
    Tentative: 'tentative' as StatusEnum,
    NeedsAction: 'needs-action' as StatusEnum,
  };
}
