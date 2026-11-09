/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
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
import type { ResourceList } from './resourceList';

/**
 * A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study.
 */
export interface ResearchSubject {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business Identifier for research subject in a study (0..*) */
  identifier?: Array<Identifier>;
  /** draft | active | retired | unknown (1..1) */
  status?: ResearchSubject.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Subject status (0..*) */
  progress?: Array<ResearchSubjectProgress>;
  /** Start and end of participation (0..1) */
  period?: Period;
  /** Study subject is part of (1..1) */
  study: Reference;
  /** Who or what is part of study (1..1) */
  subject: Reference;
  /** What path should be followed (0..1) */
  assignedComparisonGroup?: string;
  /** Id and extensions of the primitive `assignedComparisonGroup`. */
  _assignedComparisonGroup?: Element;
  /** What path was followed (0..1) */
  actualComparisonGroup?: string;
  /** Id and extensions of the primitive `actualComparisonGroup`. */
  _actualComparisonGroup?: Element;
  /** Agreement to participate in study (0..*) */
  consent?: Array<Reference>;
}

export namespace ResearchSubject {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Subject status
 */
export interface ResearchSubjectProgress {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** state | milestone (0..1) */
  type?: CodeableConcept;
  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn (0..1) */
  subjectState?: CodeableConcept;
  /** SignedUp | Screened | Randomized (0..1) */
  milestone?: CodeableConcept;
  /** State change reason (0..1) */
  reason?: CodeableConcept;
  /** State change date (0..1) */
  startDate?: string;
  /** Id and extensions of the primitive `startDate`. */
  _startDate?: Element;
  /** State change date (0..1) */
  endDate?: string;
  /** Id and extensions of the primitive `endDate`. */
  _endDate?: Element;
}
