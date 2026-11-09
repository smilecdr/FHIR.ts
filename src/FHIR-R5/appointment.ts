/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { VirtualServiceDetail } from './virtualServiceDetail';

/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export interface Appointment {
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
  contained?: Array<ResourceList>;
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
  cancellationReason?: CodeableConcept;
  /** Classification when becoming an encounter (0..*) */
  class?: Array<CodeableConcept>;
  /** A broad categorization of the service that is to be performed during this appointment (0..*) */
  serviceCategory?: Array<CodeableConcept>;
  /** The specific service that is to be performed during this appointment (0..*) */
  serviceType?: Array<CodeableReference>;
  /** The specialty of a practitioner that would be required to perform the service requested in this appointment (0..*) */
  specialty?: Array<CodeableConcept>;
  /** The style of appointment or patient that has been booked in the slot (not service type) (0..1) */
  appointmentType?: CodeableConcept;
  /** Reason this appointment is scheduled (0..*) */
  reason?: Array<CodeableReference>;
  /** Used to make informed decisions if needing to re-prioritize (0..1) */
  priority?: CodeableConcept;
  /** Shown on a subject line in a meeting request, or appointment list (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Appointment replaced by this Appointment (0..*) */
  replaces?: Array<Reference>;
  /** Connection details of a virtual service (e.g. conference call) (0..*) */
  virtualService?: Array<VirtualServiceDetail>;
  /** Additional information to support the appointment (0..*) */
  supportingInformation?: Array<Reference>;
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
  requestedPeriod?: Array<Period>;
  /** The slots that this appointment is filling (0..*) */
  slot?: Array<Reference>;
  /** The set of accounts that may be used for billing for this Appointment (0..*) */
  account?: Array<Reference>;
  /** The date that this appointment was initially created (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** When the appointment was cancelled (0..1) */
  cancellationDate?: string;
  /** Id and extensions of the primitive `cancellationDate`. */
  _cancellationDate?: Element;
  /** Additional comments (0..*) */
  note?: Array<Annotation>;
  /** Detailed information and instructions for the patient (0..*) */
  patientInstruction?: Array<CodeableReference>;
  /** The request this appointment is allocated to assess (0..*) */
  basedOn?: Array<Reference>;
  /** The patient or group associated with the appointment (0..1) */
  subject?: Reference;
  /** Participants involved in appointment (1..*) */
  participant: Array<AppointmentParticipant>;
  /** The sequence number in the recurrence (0..1) */
  recurrenceId?: number;
  /** Id and extensions of the primitive `recurrenceId`. */
  _recurrenceId?: Element;
  /** Indicates that this appointment varies from a recurrence pattern (0..1) */
  occurrenceChanged?: boolean;
  /** Id and extensions of the primitive `occurrenceChanged`. */
  _occurrenceChanged?: Element;
  /** Details of the recurrence pattern/template used to generate occurrences (0..*) */
  recurrenceTemplate?: Array<AppointmentRecurrenceTemplate>;
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
export interface AppointmentParticipant {
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
  /** Participation period of the actor (0..1) */
  period?: Period;
  /** The individual, device, location, or service participating in the appointment (0..1) */
  actor?: Reference;
  /** The participant is required to attend (optional when false) (0..1) */
  required?: boolean;
  /** Id and extensions of the primitive `required`. */
  _required?: Element;
  /** accepted | declined | tentative | needs-action (1..1) */
  status?: AppointmentParticipant.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
}

export namespace AppointmentParticipant {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/participationstatus */
  export type StatusEnum = 'accepted' | 'declined' | 'tentative' | 'needs-action';
  export const StatusEnum = {
    Accepted: 'accepted' as StatusEnum,
    Declined: 'declined' as StatusEnum,
    Tentative: 'tentative' as StatusEnum,
    NeedsAction: 'needs-action' as StatusEnum,
  };
}

/**
 * Details of the recurrence pattern/template used to generate occurrences
 */
export interface AppointmentRecurrenceTemplate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The timezone of the occurrences (0..1) */
  timezone?: CodeableConcept;
  /** The frequency of the recurrence (1..1) */
  recurrenceType: CodeableConcept;
  /** The date when the recurrence should end (0..1) */
  lastOccurrenceDate?: string;
  /** Id and extensions of the primitive `lastOccurrenceDate`. */
  _lastOccurrenceDate?: Element;
  /** The number of planned occurrences (0..1) */
  occurrenceCount?: number;
  /** Id and extensions of the primitive `occurrenceCount`. */
  _occurrenceCount?: Element;
  /** Specific dates for a recurring set of appointments (no template) (0..*) */
  occurrenceDate?: Array<string>;
  /** Id and extensions of the primitive `occurrenceDate`. */
  _occurrenceDate?: Array<Element | null>;
  /** Information about weekly recurring appointments (0..1) */
  weeklyTemplate?: AppointmentWeeklyTemplate;
  /** Information about monthly recurring appointments (0..1) */
  monthlyTemplate?: AppointmentMonthlyTemplate;
  /** Information about yearly recurring appointments (0..1) */
  yearlyTemplate?: AppointmentYearlyTemplate;
  /** Any dates that should be excluded from the series (0..*) */
  excludingDate?: Array<string>;
  /** Id and extensions of the primitive `excludingDate`. */
  _excludingDate?: Array<Element | null>;
  /** Any recurrence IDs that should be excluded from the recurrence (0..*) */
  excludingRecurrenceId?: Array<number>;
  /** Id and extensions of the primitive `excludingRecurrenceId`. */
  _excludingRecurrenceId?: Array<Element | null>;
}

/**
 * Information about weekly recurring appointments
 */
export interface AppointmentWeeklyTemplate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
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
}

/**
 * Information about monthly recurring appointments
 */
export interface AppointmentMonthlyTemplate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
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
}

/**
 * Information about yearly recurring appointments
 */
export interface AppointmentYearlyTemplate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Recurs every nth year (1..1) */
  yearInterval?: number;
  /** Id and extensions of the primitive `yearInterval`. */
  _yearInterval?: Element;
}
