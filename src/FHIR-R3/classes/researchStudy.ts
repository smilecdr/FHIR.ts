/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
 * Base StructureDefinition for ResearchStudy Resource
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
  /** Additional Content defined by implementations (0..*) */
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
  /** draft | in-progress | suspended | stopped | completed | entered-in-error (1..1) */
  status?: ResearchStudy.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Classifications for the study (0..*) */
  category?: Array<CodeableConcept>;
  /** Drugs, devices, conditions, etc. under study (0..*) */
  focus?: Array<CodeableConcept>;
  /** Contact details for the study (0..*) */
  contact?: Array<ContactDetail>;
  /** References and dependencies (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Used to search for the study (0..*) */
  keyword?: Array<CodeableConcept>;
  /** Geographic region(s) for study (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** What this is study doing (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Inclusion & exclusion criteria (0..*) */
  enrollment?: Array<Reference>;
  /** When the study began and ended (0..1) */
  period?: Period;
  /** Organization responsible for the study (0..1) */
  sponsor?: Reference;
  /** The individual responsible for the study (0..1) */
  principalInvestigator?: Reference;
  /** Location involved in study execution (0..*) */
  site?: Array<Reference>;
  /** Reason for terminating study early (0..1) */
  reasonStopped?: CodeableConcept;
  /** Comments made about the event (0..*) */
  note?: Array<Annotation>;
  /** Defined path through the study for a subject (0..*) */
  arm?: Array<ResearchStudyArm>;
}

export namespace ResearchStudy {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/research-study-status */
  export type StatusEnum =
    'draft' | 'in-progress' | 'suspended' | 'stopped' | 'completed' | 'entered-in-error';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    Suspended: 'suspended' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Defined path through the study for a subject
 */
export class ResearchStudyArm {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for study arm (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Categorization of study arm (0..1) */
  code?: CodeableConcept;
  /** Short explanation of study path (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}
