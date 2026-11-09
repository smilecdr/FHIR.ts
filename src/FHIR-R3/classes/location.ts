/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
 * Base StructureDefinition for Location Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique code or number identifying the location to its users (0..*) */
  identifier?: Array<Identifier>;
  /** active | suspended | inactive (0..1) */
  status?: Location.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The Operational status of the location (typically only for a bed/room) (0..1) */
  operationalStatus?: Coding;
  /** Name of the location as used by humans (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** A list of alternate names that the location is known as, or was known as in the past (0..*) */
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
  /** Type of function performed (0..1) */
  type?: CodeableConcept;
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
  /** Another Location this one is physically part of (0..1) */
  partOf?: Reference;
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
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
