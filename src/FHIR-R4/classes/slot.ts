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
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export class Slot {
  resourceType: 'Slot';
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
  /** A broad categorization of the service that is to be performed during this appointment (0..*) */
  serviceCategory?: Array<CodeableConcept>;
  /** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource (0..*) */
  serviceType?: Array<CodeableConcept>;
  /** The specialty of a practitioner that would be required to perform the service requested in this appointment (0..*) */
  specialty?: Array<CodeableConcept>;
  /** The style of appointment or patient that may be booked in the slot (not service type) (0..1) */
  appointmentType?: CodeableConcept;
  /** The schedule resource that this slot defines an interval of status information (1..1) */
  schedule: Reference;
  /** busy | free | busy-unavailable | busy-tentative | entered-in-error (1..1) */
  status?: Slot.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Date/Time that the slot is to begin (1..1) */
  start?: Date | string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;
  /** Date/Time that the slot is to conclude (1..1) */
  end?: Date | string;
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
}

export namespace Slot {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/slotstatus */
  export type StatusEnum =
    'busy' | 'free' | 'busy-unavailable' | 'busy-tentative' | 'entered-in-error';
  export const StatusEnum = {
    Busy: 'busy' as StatusEnum,
    Free: 'free' as StatusEnum,
    BusyUnavailable: 'busy-unavailable' as StatusEnum,
    BusyTentative: 'busy-tentative' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}
