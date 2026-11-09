/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export interface AppointmentResponse {
  resourceType: 'AppointmentResponse';
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
  /** Appointment this response relates to (1..1) */
  appointment: Reference;
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
  participantType?: Array<CodeableConcept>;
  /** Person(s), Location, HealthcareService, or Device (0..1) */
  actor?: Reference;
  /** accepted | declined | tentative | needs-action | entered-in-error (1..1) */
  participantStatus?: AppointmentResponse.ParticipantStatusEnum;
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
}

export namespace AppointmentResponse {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/appointmentresponse-status */
  export type ParticipantStatusEnum =
    'accepted' | 'declined' | 'tentative' | 'needs-action' | 'entered-in-error';
  export const ParticipantStatusEnum = {
    Accepted: 'accepted' as ParticipantStatusEnum,
    Declined: 'declined' as ParticipantStatusEnum,
    Tentative: 'tentative' as ParticipantStatusEnum,
    NeedsAction: 'needs-action' as ParticipantStatusEnum,
    EnteredInError: 'entered-in-error' as ParticipantStatusEnum,
  };
}
