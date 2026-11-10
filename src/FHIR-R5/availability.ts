/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Period } from './period';

/**
 * Availability Type: Availability data for an {item}.
 */
export interface Availability {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Times the {item} is available (0..*) */
  availableTime?: Array<AvailabilityAvailableTime>;
  /** Not available during this time due to provided reason (0..*) */
  notAvailableTime?: Array<AvailabilityNotAvailableTime>;
}

/**
 * Times the {item} is available
 */
export interface AvailabilityAvailableTime {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  daysOfWeek?: Array<AvailabilityAvailableTime.DaysOfWeekEnum>;
  /** Id and extensions of the primitive `daysOfWeek`. */
  _daysOfWeek?: Array<Element | null>;
  /** Always available? i.e. 24 hour service (0..1) */
  allDay?: boolean;
  /** Id and extensions of the primitive `allDay`. */
  _allDay?: Element;
  /** Opening time of day (ignored if allDay = true) (0..1) */
  availableStartTime?: string;
  /** Id and extensions of the primitive `availableStartTime`. */
  _availableStartTime?: Element;
  /** Closing time of day (ignored if allDay = true) (0..1) */
  availableEndTime?: string;
  /** Id and extensions of the primitive `availableEndTime`. */
  _availableEndTime?: Element;
}

export namespace AvailabilityAvailableTime {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/days-of-week */
  export type DaysOfWeekEnum = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
  export const DaysOfWeekEnum = {
    Mon: 'mon' as DaysOfWeekEnum,
    Tue: 'tue' as DaysOfWeekEnum,
    Wed: 'wed' as DaysOfWeekEnum,
    Thu: 'thu' as DaysOfWeekEnum,
    Fri: 'fri' as DaysOfWeekEnum,
    Sat: 'sat' as DaysOfWeekEnum,
    Sun: 'sun' as DaysOfWeekEnum,
  };
}

/**
 * Not available during this time due to provided reason
 */
export interface AvailabilityNotAvailableTime {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Reason presented to the user explaining why time not available (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Service not available during this period (0..1) */
  during?: Period;
}
