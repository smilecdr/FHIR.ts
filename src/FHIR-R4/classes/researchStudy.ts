/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { Resource } from './resourceList';

/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge. This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques. A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export class ResearchStudy {
  resourceType: 'ResearchStudy';
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
  /** Business Identifier for study (0..*) */
  identifier?: Array<Identifier>;
  /** Name for this study (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Steps followed in executing study (0..*) */
  protocol?: Array<Reference>;
  /** Part of larger study (0..*) */
  partOf?: Array<Reference>;
  /** active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn (1..1) */
  status?: ResearchStudy.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility (0..1) */
  primaryPurposeType?: CodeableConcept;
  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 (0..1) */
  phase?: CodeableConcept;
  /** Classifications for the study (0..*) */
  category?: Array<CodeableConcept>;
  /** Drugs, devices, etc. under study (0..*) */
  focus?: Array<CodeableConcept>;
  /** Condition being studied (0..*) */
  condition?: Array<CodeableConcept>;
  /** Contact details for the study (0..*) */
  contact?: Array<ContactDetail>;
  /** References and dependencies (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Used to search for the study (0..*) */
  keyword?: Array<CodeableConcept>;
  /** Geographic region(s) for study (0..*) */
  location?: Array<CodeableConcept>;
  /** What this is study doing (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Inclusion & exclusion criteria (0..*) */
  enrollment?: Array<Reference>;
  /** When the study began and ended (0..1) */
  period?: Period;
  /** Organization that initiates and is legally responsible for the study (0..1) */
  sponsor?: Reference;
  /** Researcher who oversees multiple aspects of the study (0..1) */
  principalInvestigator?: Reference;
  /** Facility where study activities are conducted (0..*) */
  site?: Array<Reference>;
  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design (0..1) */
  reasonStopped?: CodeableConcept;
  /** Comments made about the study (0..*) */
  note?: Array<Annotation>;
  /** Defined path through the study for a subject (0..*) */
  arm?: Array<ResearchStudyArm>;
  /** A goal for the study (0..*) */
  objective?: Array<ResearchStudyObjective>;
}

export namespace ResearchStudy {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/research-study-status */
  export type StatusEnum =
    | 'active'
    | 'administratively-completed'
    | 'approved'
    | 'closed-to-accrual'
    | 'closed-to-accrual-and-intervention'
    | 'completed'
    | 'disapproved'
    | 'in-review'
    | 'temporarily-closed-to-accrual'
    | 'temporarily-closed-to-accrual-and-intervention'
    | 'withdrawn';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    AdministrativelyCompleted: 'administratively-completed' as StatusEnum,
    Approved: 'approved' as StatusEnum,
    ClosedToAccrual: 'closed-to-accrual' as StatusEnum,
    ClosedToAccrualAndIntervention: 'closed-to-accrual-and-intervention' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    Disapproved: 'disapproved' as StatusEnum,
    InReview: 'in-review' as StatusEnum,
    TemporarilyClosedToAccrual: 'temporarily-closed-to-accrual' as StatusEnum,
    TemporarilyClosedToAccrualAndIntervention:
      'temporarily-closed-to-accrual-and-intervention' as StatusEnum,
    Withdrawn: 'withdrawn' as StatusEnum,
  };
}

/**
 * Defined path through the study for a subject
 */
export class ResearchStudyArm {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for study arm (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Categorization of study arm (0..1) */
  type?: CodeableConcept;
  /** Short explanation of study path (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

/**
 * A goal for the study
 */
export class ResearchStudyObjective {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for the objective (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** primary | secondary | exploratory (0..1) */
  type?: CodeableConcept;
}
