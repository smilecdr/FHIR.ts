/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Duration } from './duration';
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
 * An interaction between healthcare provider(s), and/or patient(s) for the purpose of providing healthcare service(s) or assessing the health status of patient(s).
 */
export interface Encounter {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier(s) by which this encounter is known (0..*) */
  identifier?: Array<Identifier>;
  /** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown (1..1) */
  status?: Encounter.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Classification of patient encounter context - e.g. Inpatient, outpatient (0..*) */
  class?: Array<CodeableConcept>;
  /** Indicates the urgency of the encounter (0..1) */
  priority?: CodeableConcept;
  /** Specific type of encounter (e.g. e-mail consultation, surgical day-care, ...) (0..*) */
  type?: Array<CodeableConcept>;
  /** Specific type of service (0..*) */
  serviceType?: Array<CodeableReference>;
  /** The patient or group related to this encounter (0..1) */
  subject?: Reference;
  /** The current status of the subject in relation to the Encounter (0..1) */
  subjectStatus?: CodeableConcept;
  /** Episode(s) of care that this encounter should be recorded against (0..*) */
  episodeOfCare?: Array<Reference>;
  /** The request that initiated this encounter (0..*) */
  basedOn?: Array<Reference>;
  /** The group(s) that are allocated to participate in this encounter (0..*) */
  careTeam?: Array<Reference>;
  /** Another Encounter this encounter is part of (0..1) */
  partOf?: Reference;
  /** The organization (facility) responsible for this encounter (0..1) */
  serviceProvider?: Reference;
  /** List of participants involved in the encounter (0..*) */
  participant?: Array<EncounterParticipant>;
  /** The appointment that scheduled this encounter (0..*) */
  appointment?: Array<Reference>;
  /** Connection details of a virtual service (e.g. conference call) (0..*) */
  virtualService?: Array<VirtualServiceDetail>;
  /** The actual start and end time of the encounter (0..1) */
  actualPeriod?: Period;
  /** The planned start date/time (or admission date) of the encounter (0..1) */
  plannedStartDate?: string;
  /** Id and extensions of the primitive `plannedStartDate`. */
  _plannedStartDate?: Element;
  /** The planned end date/time (or discharge date) of the encounter (0..1) */
  plannedEndDate?: string;
  /** Id and extensions of the primitive `plannedEndDate`. */
  _plannedEndDate?: Element;
  /** Actual quantity of time the encounter lasted (less time absent) (0..1) */
  length?: Duration;
  /** The list of medical reasons that are expected to be addressed during the episode of care (0..*) */
  reason?: Array<EncounterReason>;
  /** The list of diagnosis relevant to this encounter (0..*) */
  diagnosis?: Array<EncounterDiagnosis>;
  /** The set of accounts that may be used for billing for this Encounter (0..*) */
  account?: Array<Reference>;
  /** Diet preferences reported by the patient (0..*) */
  dietPreference?: Array<CodeableConcept>;
  /** Wheelchair, translator, stretcher, etc (0..*) */
  specialArrangement?: Array<CodeableConcept>;
  /** Special courtesies (VIP, board member) (0..*) */
  specialCourtesy?: Array<CodeableConcept>;
  /** Details about the admission to a healthcare service (0..1) */
  admission?: EncounterAdmission;
  /** List of locations where the patient has been (0..*) */
  location?: Array<EncounterLocation>;
}

export namespace Encounter {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/encounter-status */
  export type StatusEnum =
    | 'planned'
    | 'in-progress'
    | 'on-hold'
    | 'discharged'
    | 'completed'
    | 'cancelled'
    | 'discontinued'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Planned: 'planned' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Discharged: 'discharged' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Discontinued: 'discontinued' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * List of participants involved in the encounter
 */
export interface EncounterParticipant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Role of participant in encounter (0..*) */
  type?: Array<CodeableConcept>;
  /** Period of time during the encounter that the participant participated (0..1) */
  period?: Period;
  /** The individual, device, or service participating in the encounter (0..1) */
  actor?: Reference;
}

/**
 * The list of medical reasons that are expected to be addressed during the episode of care
 */
export interface EncounterReason {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What the reason value should be used for/as (0..*) */
  use?: Array<CodeableConcept>;
  /** Reason the encounter takes place (core or reference) (0..*) */
  value?: Array<CodeableReference>;
}

/**
 * The list of diagnosis relevant to this encounter
 */
export interface EncounterDiagnosis {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The diagnosis relevant to the encounter (0..*) */
  condition?: Array<CodeableReference>;
  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) (0..*) */
  use?: Array<CodeableConcept>;
}

/**
 * Details about the admission to a healthcare service
 */
export interface EncounterAdmission {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Pre-admission identifier (0..1) */
  preAdmissionIdentifier?: Identifier;
  /** The location/organization from which the patient came before admission (0..1) */
  origin?: Reference;
  /** From where patient was admitted (physician referral, transfer) (0..1) */
  admitSource?: CodeableConcept;
  /** Indicates that the patient is being re-admitted (0..1) */
  reAdmission?: CodeableConcept;
  /** Location/organization to which the patient is discharged (0..1) */
  destination?: Reference;
  /** Category or kind of location after discharge (0..1) */
  dischargeDisposition?: CodeableConcept;
}

/**
 * List of locations where the patient has been
 */
export interface EncounterLocation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Location the encounter takes place (1..1) */
  location: Reference;
  /** planned | active | reserved | completed (0..1) */
  status?: EncounterLocation.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.) (0..1) */
  form?: CodeableConcept;
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
