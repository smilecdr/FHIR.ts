/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export class ResearchSubject {
  resourceType: 'ResearchSubject';
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
  /** Business Identifier for research subject in a study (0..*) */
  identifier?: Array<Identifier>;
  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn (1..1) */
  status?: ResearchSubject.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Start and end of participation (0..1) */
  period?: Period;
  /** Study subject is part of (1..1) */
  study: Reference;
  /** Who is part of study (1..1) */
  individual: Reference;
  /** What path should be followed (0..1) */
  assignedArm?: string;
  /** Id and extensions of the primitive `assignedArm`. */
  _assignedArm?: Element;
  /** What path was followed (0..1) */
  actualArm?: string;
  /** Id and extensions of the primitive `actualArm`. */
  _actualArm?: Element;
  /** Agreement to participate in study (0..1) */
  consent?: Reference;
}

export namespace ResearchSubject {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/research-subject-status */
  export type StatusEnum =
    | 'candidate'
    | 'eligible'
    | 'follow-up'
    | 'ineligible'
    | 'not-registered'
    | 'off-study'
    | 'on-study'
    | 'on-study-intervention'
    | 'on-study-observation'
    | 'pending-on-study'
    | 'potential-candidate'
    | 'screening'
    | 'withdrawn';
  export const StatusEnum = {
    Candidate: 'candidate' as StatusEnum,
    Eligible: 'eligible' as StatusEnum,
    FollowUp: 'follow-up' as StatusEnum,
    Ineligible: 'ineligible' as StatusEnum,
    NotRegistered: 'not-registered' as StatusEnum,
    OffStudy: 'off-study' as StatusEnum,
    OnStudy: 'on-study' as StatusEnum,
    OnStudyIntervention: 'on-study-intervention' as StatusEnum,
    OnStudyObservation: 'on-study-observation' as StatusEnum,
    PendingOnStudy: 'pending-on-study' as StatusEnum,
    PotentialCandidate: 'potential-candidate' as StatusEnum,
    Screening: 'screening' as StatusEnum,
    Withdrawn: 'withdrawn' as StatusEnum,
  };
}
