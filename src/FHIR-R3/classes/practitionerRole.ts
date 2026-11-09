/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

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
 * Base StructureDefinition for PractitionerRole Resource
 */
export class PractitionerRole {
  resourceType: 'PractitionerRole';
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
  /** Business Identifiers that are specific to a role/location (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this practitioner's record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** The period during which the practitioner is authorized to perform in these role(s) (0..1) */
  period?: Period;
  /** Practitioner that is able to provide the defined services for the organation (0..1) */
  practitioner?: Reference;
  /** Organization where the roles are available (0..1) */
  organization?: Reference;
  /** Roles which this practitioner may perform (0..*) */
  code?: Array<CodeableConcept>;
  /** Specific specialty of the practitioner (0..*) */
  specialty?: Array<CodeableConcept>;
  /** The location(s) at which this practitioner provides care (0..*) */
  location?: Array<Reference>;
  /** The list of healthcare services that this worker provides for this role's Organization/Location(s) (0..*) */
  healthcareService?: Array<Reference>;
  /** Contact details that are specific to the role/location/service (0..*) */
  telecom?: Array<ContactPoint>;
  /** Times the Service Site is available (0..*) */
  availableTime?: Array<PractitionerRoleAvailableTime>;
  /** Not available during this time due to provided reason (0..*) */
  notAvailable?: Array<PractitionerRoleNotAvailable>;
  /** Description of availability exceptions (0..1) */
  availabilityExceptions?: string;
  /** Id and extensions of the primitive `availabilityExceptions`. */
  _availabilityExceptions?: Element;
  /** Technical endpoints providing access to services operated for the practitioner with this role (0..*) */
  endpoint?: Array<Reference>;
}

/**
 * Times the Service Site is available
 */
export class PractitionerRoleAvailableTime {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  daysOfWeek?: Array<PractitionerRoleAvailableTime.DaysOfWeekEnum>;
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

export namespace PractitionerRoleAvailableTime {
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
export class PractitionerRoleNotAvailable {
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
