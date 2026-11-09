/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Availability } from './availability';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { ExtendedContactDetail } from './extendedContactDetail';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { VirtualServiceDetail } from './virtualServiceDetail';

/**
 * Details and position information for a place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export interface Location {
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
  contained?: Array<ResourceList>;
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
  /** Official contact details for the location (0..*) */
  contact?: Array<ExtendedContactDetail>;
  /** Physical location (0..1) */
  address?: Address;
  /** Physical form of the location (0..1) */
  form?: CodeableConcept;
  /** The absolute geographic location (0..1) */
  position?: LocationPosition;
  /** Organization responsible for provisioning and upkeep (0..1) */
  managingOrganization?: Reference;
  /** Another Location this one is physically a part of (0..1) */
  partOf?: Reference;
  /** Collection of characteristics (attributes) (0..*) */
  characteristic?: Array<CodeableConcept>;
  /** What days/times during a week is this location usually open (including exceptions) (0..*) */
  hoursOfOperation?: Array<Availability>;
  /** Connection details of a virtual service (e.g. conference call) (0..*) */
  virtualService?: Array<VirtualServiceDetail>;
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
export interface LocationPosition {
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
