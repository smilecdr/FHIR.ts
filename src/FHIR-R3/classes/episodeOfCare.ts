/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for EpisodeOfCare Resource
 */
export class EpisodeOfCare {
  resourceType: 'EpisodeOfCare';
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
  /** Business Identifier(s) relevant for this EpisodeOfCare (0..*) */
  identifier?: Array<Identifier>;
  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error (1..1) */
  status?: EpisodeOfCare.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Past list of status codes (the current status may be included to cover the start date of the status) (0..*) */
  statusHistory?: Array<EpisodeOfCareStatusHistory>;
  /** Type/class - e.g. specialist referral, disease management (0..*) */
  type?: Array<CodeableConcept>;
  /** The list of diagnosis relevant to this episode of care (0..*) */
  diagnosis?: Array<EpisodeOfCareDiagnosis>;
  /** The patient who is the focus of this episode of care (1..1) */
  patient: Reference;
  /** Organization that assumes care (0..1) */
  managingOrganization?: Reference;
  /** Interval during responsibility is assumed (0..1) */
  period?: Period;
  /** Originating Referral Request(s) (0..*) */
  referralRequest?: Array<Reference>;
  /** Care manager/care co-ordinator for the patient (0..1) */
  careManager?: Reference;
  /** Other practitioners facilitating this episode of care (0..*) */
  team?: Array<Reference>;
  /** The set of accounts that may be used for billing for this EpisodeOfCare (0..*) */
  account?: Array<Reference>;
}

export namespace EpisodeOfCare {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/episode-of-care-status */
  export type StatusEnum =
    'planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error';
  export const StatusEnum = {
    Planned: 'planned' as StatusEnum,
    Waitlist: 'waitlist' as StatusEnum,
    Active: 'active' as StatusEnum,
    Onhold: 'onhold' as StatusEnum,
    Finished: 'finished' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Past list of status codes (the current status may be included to cover the start date of the status)
 */
export class EpisodeOfCareStatusHistory {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error (1..1) */
  status?: EpisodeOfCareStatusHistory.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Duration the EpisodeOfCare was in the specified status (1..1) */
  period: Period;
}

export namespace EpisodeOfCareStatusHistory {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/episode-of-care-status */
  export type StatusEnum =
    'planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error';
  export const StatusEnum = {
    Planned: 'planned' as StatusEnum,
    Waitlist: 'waitlist' as StatusEnum,
    Active: 'active' as StatusEnum,
    Onhold: 'onhold' as StatusEnum,
    Finished: 'finished' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * The list of diagnosis relevant to this episode of care
 */
export class EpisodeOfCareDiagnosis {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Conditions/problems/diagnoses this episode of care is for (1..1) */
  condition: Reference;
  /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) (0..1) */
  role?: CodeableConcept;
  /** Ranking of the diagnosis (for each role type) (0..1) */
  rank?: number;
  /** Id and extensions of the primitive `rank`. */
  _rank?: Element;
}
