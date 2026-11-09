/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';

/**
 * A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future.
 */
export interface ResearchStudy {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this study resource (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business Identifier for study (0..*) */
  identifier?: Array<Identifier>;
  /** The business version for the study record (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this study (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Human readable name of the study (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Additional names for the study (0..*) */
  label?: Array<ResearchStudyLabel>;
  /** Steps followed in executing study (0..*) */
  protocol?: Array<Reference>;
  /** Part of larger study (0..*) */
  partOf?: Array<Reference>;
  /** References, URLs, and attachments (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Date the resource last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ResearchStudy.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility (0..1) */
  primaryPurposeType?: CodeableConcept;
  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 (0..1) */
  phase?: CodeableConcept;
  /** Classifications of the study design characteristics (0..*) */
  studyDesign?: Array<CodeableConcept>;
  /** Drugs, devices, etc. under study (0..*) */
  focus?: Array<CodeableReference>;
  /** Condition being studied (0..*) */
  condition?: Array<CodeableConcept>;
  /** Used to search for the study (0..*) */
  keyword?: Array<CodeableConcept>;
  /** Geographic area for the study (0..*) */
  region?: Array<CodeableConcept>;
  /** Brief text explaining the study (0..1) */
  descriptionSummary?: string;
  /** Id and extensions of the primitive `descriptionSummary`. */
  _descriptionSummary?: Element;
  /** Detailed narrative of the study (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** When the study began and ended (0..1) */
  period?: Period;
  /** Facility where study activities are conducted (0..*) */
  site?: Array<Reference>;
  /** Comments made about the study (0..*) */
  note?: Array<Annotation>;
  /** Classification for the study (0..*) */
  classifier?: Array<CodeableConcept>;
  /** Sponsors, collaborators, and other parties (0..*) */
  associatedParty?: Array<ResearchStudyAssociatedParty>;
  /** Status of study with time for that status (0..*) */
  progressStatus?: Array<ResearchStudyProgressStatus>;
  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design (0..1) */
  whyStopped?: CodeableConcept;
  /** Target or actual group of participants enrolled in study (0..1) */
  recruitment?: ResearchStudyRecruitment;
  /** Defined path through the study for a subject (0..*) */
  comparisonGroup?: Array<ResearchStudyComparisonGroup>;
  /** A goal for the study (0..*) */
  objective?: Array<ResearchStudyObjective>;
  /** A variable measured during the study (0..*) */
  outcomeMeasure?: Array<ResearchStudyOutcomeMeasure>;
  /** Link to results generated during the study (0..*) */
  result?: Array<Reference>;
}

export namespace ResearchStudy {
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
 * Additional names for the study
 */
export interface ResearchStudyLabel {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** primary | official | scientific | plain-language | subtitle | short-title | acronym | earlier-title | language | auto-translated | human-use | machine-use | duplicate-uid (0..1) */
  type?: CodeableConcept;
  /** The name (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Sponsors, collaborators, and other parties
 */
export interface ResearchStudyAssociatedParty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of associated party (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** sponsor | lead-sponsor | sponsor-investigator | primary-investigator | collaborator | funding-source | general-contact | recruitment-contact | sub-investigator | study-director | study-chair (1..1) */
  role: CodeableConcept;
  /** When active in the role (0..*) */
  period?: Array<Period>;
  /** nih | fda | government | nonprofit | academic | industry (0..*) */
  classifier?: Array<CodeableConcept>;
  /** Individual or organization associated with study (use practitionerRole to specify their organisation) (0..1) */
  party?: Reference;
}

/**
 * Status of study with time for that status
 */
export interface ResearchStudyProgressStatus {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for status or state (e.g. recruitment status) (1..1) */
  state: CodeableConcept;
  /** Actual if true else anticipated (0..1) */
  actual?: boolean;
  /** Id and extensions of the primitive `actual`. */
  _actual?: Element;
  /** Date range (0..1) */
  period?: Period;
}

/**
 * Target or actual group of participants enrolled in study
 */
export interface ResearchStudyRecruitment {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Estimated total number of participants to be enrolled (0..1) */
  targetNumber?: number;
  /** Id and extensions of the primitive `targetNumber`. */
  _targetNumber?: Element;
  /** Actual total number of participants enrolled in study (0..1) */
  actualNumber?: number;
  /** Id and extensions of the primitive `actualNumber`. */
  _actualNumber?: Element;
  /** Inclusion and exclusion criteria (0..1) */
  eligibility?: Reference;
  /** Group of participants who were enrolled in study (0..1) */
  actualGroup?: Reference;
}

/**
 * Defined path through the study for a subject
 */
export interface ResearchStudyComparisonGroup {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** Label for study comparisonGroup (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Categorization of study comparisonGroup (0..1) */
  type?: CodeableConcept;
  /** Short explanation of study path (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Interventions or exposures in this comparisonGroup or cohort (0..*) */
  intendedExposure?: Array<Reference>;
  /** Group of participants who were enrolled in study comparisonGroup (0..1) */
  observedGroup?: Reference;
}

/**
 * A goal for the study
 */
export interface ResearchStudyObjective {
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
  /** Description of the objective (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

/**
 * A variable measured during the study
 */
export interface ResearchStudyOutcomeMeasure {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for the outcome (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** primary | secondary | exploratory (0..*) */
  type?: Array<CodeableConcept>;
  /** Description of the outcome (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Structured outcome definition (0..1) */
  reference?: Reference;
}
