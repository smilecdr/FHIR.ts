/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for HealthcareService Resource
 */
export class HealthcareService {
  resourceType: 'HealthcareService';
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External identifiers for this item (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this healthcareservice is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** Organization that provides this service (0..1) */
  providedBy?: Reference;
  /** Broad category of service being performed or delivered (0..1) */
  category?: CodeableConcept;
  /** Type of service that may be delivered or performed (0..*) */
  type?: Array<CodeableConcept>;
  /** Specialties handled by the HealthcareService (0..*) */
  specialty?: Array<CodeableConcept>;
  /** Location(s) where service may be provided (0..*) */
  location?: Array<Reference>;
  /** Description of service as presented to a consumer while searching (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Additional description and/or any specific issues not covered elsewhere (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Extra details about the service that can't be placed in the other fields (0..1) */
  extraDetails?: string;
  /** Id and extensions of the primitive `extraDetails`. */
  _extraDetails?: Element;
  /** Facilitates quick identification of the service (0..1) */
  photo?: Attachment;
  /** Contacts related to the healthcare service (0..*) */
  telecom?: Array<ContactPoint>;
  /** Location(s) service is inteded for/available to (0..*) */
  coverageArea?: Array<Reference>;
  /** Conditions under which service is available/offered (0..*) */
  serviceProvisionCode?: Array<CodeableConcept>;
  /** Specific eligibility requirements required to use the service (0..1) */
  eligibility?: CodeableConcept;
  /** Describes the eligibility conditions for the service (0..1) */
  eligibilityNote?: string;
  /** Id and extensions of the primitive `eligibilityNote`. */
  _eligibilityNote?: Element;
  /** Program Names that categorize the service (0..*) */
  programName?: Array<string>;
  /** Id and extensions of the primitive `programName`. */
  _programName?: Array<Element | null>;
  /** Collection of characteristics (attributes) (0..*) */
  characteristic?: Array<CodeableConcept>;
  /** Ways that the service accepts referrals (0..*) */
  referralMethod?: Array<CodeableConcept>;
  /** If an appointment is required for access to this service (0..1) */
  appointmentRequired?: boolean;
  /** Id and extensions of the primitive `appointmentRequired`. */
  _appointmentRequired?: Element;
  /** Times the Service Site is available (0..*) */
  availableTime?: Array<HealthcareServiceAvailableTime>;
  /** Not available during this time due to provided reason (0..*) */
  notAvailable?: Array<HealthcareServiceNotAvailable>;
  /** Description of availability exceptions (0..1) */
  availabilityExceptions?: string;
  /** Id and extensions of the primitive `availabilityExceptions`. */
  _availabilityExceptions?: Element;
  /** Technical endpoints providing access to services operated for the location (0..*) */
  endpoint?: Array<Reference>;
}

/**
 * Times the Service Site is available
 */
export class HealthcareServiceAvailableTime {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  daysOfWeek?: Array<HealthcareServiceAvailableTime.DaysOfWeekEnum>;
  /** Id and extensions of the primitive `daysOfWeek`. */
  _daysOfWeek?: Array<Element | null>;
  /** Always available? e.g. 24 hour service (0..1) */
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

export namespace HealthcareServiceAvailableTime {
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
export class HealthcareServiceNotAvailable {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reason presented to the user explaining why time not available (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Service not availablefrom this date (0..1) */
  during?: Period;
}
