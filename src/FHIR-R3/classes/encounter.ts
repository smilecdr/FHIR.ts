/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Encounter Resource
 */
export class Encounter {
  resourceType: 'Encounter';
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
  /** Identifier(s) by which this encounter is known (0..*) */
  identifier?: Array<Identifier>;
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + (1..1) */
  status?: Encounter.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** List of past encounter statuses (0..*) */
  statusHistory?: Array<EncounterStatusHistory>;
  /** inpatient | outpatient | ambulatory | emergency + (0..1) */
  class?: Coding;
  /** List of past encounter classes (0..*) */
  classHistory?: Array<EncounterClassHistory>;
  /** Specific type of encounter (0..*) */
  type?: Array<CodeableConcept>;
  /** Indicates the urgency of the encounter (0..1) */
  priority?: CodeableConcept;
  /** The patient ro group present at the encounter (0..1) */
  subject?: Reference;
  /** Episode(s) of care that this encounter should be recorded against (0..*) */
  episodeOfCare?: Array<Reference>;
  /** The ReferralRequest that initiated this encounter (0..*) */
  incomingReferral?: Array<Reference>;
  /** List of participants involved in the encounter (0..*) */
  participant?: Array<EncounterParticipant>;
  /** The appointment that scheduled this encounter (0..1) */
  appointment?: Reference;
  /** The start and end time of the encounter (0..1) */
  period?: Period;
  /** Quantity of time the encounter lasted (less time absent) (0..1) */
  length?: Duration;
  /** Reason the encounter takes place (code) (0..*) */
  reason?: Array<CodeableConcept>;
  /** The list of diagnosis relevant to this encounter (0..*) */
  diagnosis?: Array<EncounterDiagnosis>;
  /** The set of accounts that may be used for billing for this Encounter (0..*) */
  account?: Array<Reference>;
  /** Details about the admission to a healthcare service (0..1) */
  hospitalization?: EncounterHospitalization;
  /** List of locations where the patient has been (0..*) */
  location?: Array<EncounterLocation>;
  /** The custodian organization of this Encounter record (0..1) */
  serviceProvider?: Reference;
  /** Another Encounter this encounter is part of (0..1) */
  partOf?: Reference;
}

export namespace Encounter {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/encounter-status */
  export type StatusEnum =
    | 'planned'
    | 'arrived'
    | 'triaged'
    | 'in-progress'
    | 'onleave'
    | 'finished'
    | 'cancelled'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Planned: 'planned' as StatusEnum,
    Arrived: 'arrived' as StatusEnum,
    Triaged: 'triaged' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    Onleave: 'onleave' as StatusEnum,
    Finished: 'finished' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * List of past encounter statuses
 */
export class EncounterStatusHistory {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + (1..1) */
  status?: EncounterStatusHistory.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The time that the episode was in the specified status (1..1) */
  period: Period;
}

export namespace EncounterStatusHistory {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/encounter-status */
  export type StatusEnum =
    | 'planned'
    | 'arrived'
    | 'triaged'
    | 'in-progress'
    | 'onleave'
    | 'finished'
    | 'cancelled'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Planned: 'planned' as StatusEnum,
    Arrived: 'arrived' as StatusEnum,
    Triaged: 'triaged' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    Onleave: 'onleave' as StatusEnum,
    Finished: 'finished' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * List of past encounter classes
 */
export class EncounterClassHistory {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** inpatient | outpatient | ambulatory | emergency + (1..1) */
  class: Coding;
  /** The time that the episode was in the specified class (1..1) */
  period: Period;
}

/**
 * List of participants involved in the encounter
 */
export class EncounterParticipant {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Role of participant in encounter (0..*) */
  type?: Array<CodeableConcept>;
  /** Period of time during the encounter that the participant participated (0..1) */
  period?: Period;
  /** Persons involved in the encounter other than the patient (0..1) */
  individual?: Reference;
}

/**
 * The list of diagnosis relevant to this encounter
 */
export class EncounterDiagnosis {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reason the encounter takes place (resource) (1..1) */
  condition: Reference;
  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) (0..1) */
  role?: CodeableConcept;
  /** Ranking of the diagnosis (for each role type) (0..1) */
  rank?: number;
  /** Id and extensions of the primitive `rank`. */
  _rank?: Element;
}

/**
 * Details about the admission to a healthcare service
 */
export class EncounterHospitalization {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Pre-admission identifier (0..1) */
  preAdmissionIdentifier?: Identifier;
  /** The location from which the patient came before admission (0..1) */
  origin?: Reference;
  /** From where patient was admitted (physician referral, transfer) (0..1) */
  admitSource?: CodeableConcept;
  /** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission (0..1) */
  reAdmission?: CodeableConcept;
  /** Diet preferences reported by the patient (0..*) */
  dietPreference?: Array<CodeableConcept>;
  /** Special courtesies (VIP, board member) (0..*) */
  specialCourtesy?: Array<CodeableConcept>;
  /** Wheelchair, translator, stretcher, etc. (0..*) */
  specialArrangement?: Array<CodeableConcept>;
  /** Location to which the patient is discharged (0..1) */
  destination?: Reference;
  /** Category or kind of location after discharge (0..1) */
  dischargeDisposition?: CodeableConcept;
}

/**
 * List of locations where the patient has been
 */
export class EncounterLocation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Location the encounter takes place (1..1) */
  location: Reference;
  /** planned | active | reserved | completed (0..1) */
  status?: EncounterLocation.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Time period during which the patient was present at the location (0..1) */
  period?: Period;
}

export namespace EncounterLocation {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/encounter-location-status */
  export type StatusEnum = 'planned' | 'active' | 'reserved' | 'completed';
  export const StatusEnum = {
    Planned: 'planned' as StatusEnum,
    Active: 'active' as StatusEnum,
    Reserved: 'reserved' as StatusEnum,
    Completed: 'completed' as StatusEnum,
  };
}
