/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export class Location {
  resourceType: 'Location';
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
  /** Unique code or number identifying the location to its users (0..*) */
  identifier?: Array<Identifier>;
  /** active | suspended | inactive (0..1) */
  status?: Location.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The operational status of the location (typically only for a bed/room) (0..1) */
  operationalStatus?: Coding;
  /** Name of the location as used by humans (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** A list of alternate names that the location is known as, or was known as, in the past (0..*) */
  alias?: Array<string>;
  /** Id and extensions of the primitive `alias`. */
  _alias?: Array<Element | null>;
  /** Additional details about the location that could be displayed as further information to identify the location beyond its name (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** instance | kind (0..1) */
  mode?: Location.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Type of function performed (0..*) */
  type?: Array<CodeableConcept>;
  /** Contact details of the location (0..*) */
  telecom?: Array<ContactPoint>;
  /** Physical location (0..1) */
  address?: Address;
  /** Physical form of the location (0..1) */
  physicalType?: CodeableConcept;
  /** The absolute geographic location (0..1) */
  position?: LocationPosition;
  /** Organization responsible for provisioning and upkeep (0..1) */
  managingOrganization?: Reference;
  /** Another Location this one is physically a part of (0..1) */
  partOf?: Reference;
  /** What days/times during a week is this location usually open (0..*) */
  hoursOfOperation?: Array<LocationHoursOfOperation>;
  /** Description of availability exceptions (0..1) */
  availabilityExceptions?: string;
  /** Id and extensions of the primitive `availabilityExceptions`. */
  _availabilityExceptions?: Element;
  /** Technical endpoints providing access to services operated for the location (0..*) */
  endpoint?: Array<Reference>;
}

export namespace Location {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/location-status */
  export type StatusEnum = 'active' | 'suspended' | 'inactive';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Suspended: 'suspended' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/location-mode */
  export type ModeEnum = 'instance' | 'kind';
  export const ModeEnum = { Instance: 'instance' as ModeEnum, Kind: 'kind' as ModeEnum };
}

/**
 * The absolute geographic location
 */
export class LocationPosition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Longitude with WGS84 datum (1..1) */
  longitude?: number;
  /** Id and extensions of the primitive `longitude`. */
  _longitude?: Element;
  /** Latitude with WGS84 datum (1..1) */
  latitude?: number;
  /** Id and extensions of the primitive `latitude`. */
  _latitude?: Element;
  /** Altitude with WGS84 datum (0..1) */
  altitude?: number;
  /** Id and extensions of the primitive `altitude`. */
  _altitude?: Element;
}

/**
 * What days/times during a week is this location usually open
 */
export class LocationHoursOfOperation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  daysOfWeek?: Array<LocationHoursOfOperation.DaysOfWeekEnum>;
  /** Id and extensions of the primitive `daysOfWeek`. */
  _daysOfWeek?: Array<Element | null>;
  /** The Location is open all day (0..1) */
  allDay?: boolean;
  /** Id and extensions of the primitive `allDay`. */
  _allDay?: Element;
  /** Time that the Location opens (0..1) */
  openingTime?: string;
  /** Id and extensions of the primitive `openingTime`. */
  _openingTime?: Element;
  /** Time that the Location closes (0..1) */
  closingTime?: string;
  /** Id and extensions of the primitive `closingTime`. */
  _closingTime?: Element;
}

export namespace LocationHoursOfOperation {
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
