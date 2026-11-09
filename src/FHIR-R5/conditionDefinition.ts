/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A definition of a condition and information relevant to managing it.
 */
export interface ConditionDefinition {
  resourceType: 'ConditionDefinition';
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
  /** Canonical identifier for this condition definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the condition definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the condition definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this condition definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this condition definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Subordinate title of the event definition (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ConditionDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the condition definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for condition definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Identification of the condition, problem or diagnosis (1..1) */
  code: CodeableConcept;
  /** Subjective severity of condition (0..1) */
  severity?: CodeableConcept;
  /** Anatomical location, if relevant (0..1) */
  bodySite?: CodeableConcept;
  /** Stage/grade, usually assessed formally (0..1) */
  stage?: CodeableConcept;
  /** Whether Severity is appropriate (0..1) */
  hasSeverity?: boolean;
  /** Id and extensions of the primitive `hasSeverity`. */
  _hasSeverity?: Element;
  /** Whether bodySite is appropriate (0..1) */
  hasBodySite?: boolean;
  /** Id and extensions of the primitive `hasBodySite`. */
  _hasBodySite?: Element;
  /** Whether stage is appropriate (0..1) */
  hasStage?: boolean;
  /** Id and extensions of the primitive `hasStage`. */
  _hasStage?: Element;
  /** Formal Definition for the condition (0..*) */
  definition?: Array<string>;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Array<Element | null>;
  /** Observations particularly relevant to this condition (0..*) */
  observation?: Array<ConditionDefinitionObservation>;
  /** Medications particularly relevant for this condition (0..*) */
  medication?: Array<ConditionDefinitionMedication>;
  /** Observation that suggets this condition (0..*) */
  precondition?: Array<ConditionDefinitionPrecondition>;
  /** Appropriate team for this condition (0..*) */
  team?: Array<Reference>;
  /** Questionnaire for this condition (0..*) */
  questionnaire?: Array<ConditionDefinitionQuestionnaire>;
  /** Plan that is appropriate (0..*) */
  plan?: Array<ConditionDefinitionPlan>;
}

export namespace ConditionDefinition {
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
 * Observations particularly relevant to this condition
 */
export interface ConditionDefinitionObservation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Category that is relevant (0..1) */
  category?: CodeableConcept;
  /** Code for relevant Observation (0..1) */
  code?: CodeableConcept;
}

/**
 * Medications particularly relevant for this condition
 */
export interface ConditionDefinitionMedication {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Category that is relevant (0..1) */
  category?: CodeableConcept;
  /** Code for relevant Medication (0..1) */
  code?: CodeableConcept;
}

/**
 * Observation that suggets this condition
 */
export interface ConditionDefinitionPrecondition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** sensitive | specific (1..1) */
  type?: ConditionDefinitionPrecondition.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Code for relevant Observation (1..1) */
  code: CodeableConcept;
  /** Value of Observation (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value of Observation (0..1) */
  valueQuantity?: Quantity;
}

export namespace ConditionDefinitionPrecondition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/condition-precondition-type */
  export type TypeEnum = 'sensitive' | 'specific';
  export const TypeEnum = { Sensitive: 'sensitive' as TypeEnum, Specific: 'specific' as TypeEnum };
}

/**
 * Questionnaire for this condition
 */
export interface ConditionDefinitionQuestionnaire {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** preadmit | diff-diagnosis | outcome (1..1) */
  purpose?: ConditionDefinitionQuestionnaire.PurposeEnum;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Specific Questionnaire (1..1) */
  reference: Reference;
}

export namespace ConditionDefinitionQuestionnaire {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/condition-questionnaire-purpose */
  export type PurposeEnum = 'preadmit' | 'diff-diagnosis' | 'outcome';
  export const PurposeEnum = {
    Preadmit: 'preadmit' as PurposeEnum,
    DiffDiagnosis: 'diff-diagnosis' as PurposeEnum,
    Outcome: 'outcome' as PurposeEnum,
  };
}

/**
 * Plan that is appropriate
 */
export interface ConditionDefinitionPlan {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Use for the plan (0..1) */
  role?: CodeableConcept;
  /** The actual plan (1..1) */
  reference: Reference;
}
