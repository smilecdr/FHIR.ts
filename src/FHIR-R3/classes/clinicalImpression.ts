/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
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
 * Base StructureDefinition for ClinicalImpression Resource
 */
export class ClinicalImpression {
  resourceType: 'ClinicalImpression';
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
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** draft | completed | entered-in-error (1..1) */
  status?: ClinicalImpression.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Kind of assessment performed (0..1) */
  code?: CodeableConcept;
  /** Why/how the assessment was performed (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Patient or group assessed (1..1) */
  subject: Reference;
  /** Encounter or Episode created from (0..1) */
  context?: Reference;
  /** Time of assessment (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Time of assessment (0..1) */
  effectivePeriod?: Period;
  /** When the assessment was documented (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The clinician performing the assessment (0..1) */
  assessor?: Reference;
  /** Reference to last assessment (0..1) */
  previous?: Reference;
  /** Relevant impressions of patient state (0..*) */
  problem?: Array<Reference>;
  /** One or more sets of investigations (signs, symptions, etc.) (0..*) */
  investigation?: Array<ClinicalImpressionInvestigation>;
  /** Clinical Protocol followed (0..*) */
  protocol?: Array<string>;
  /** Id and extensions of the primitive `protocol`. */
  _protocol?: Array<Element | null>;
  /** Summary of the assessment (0..1) */
  summary?: string;
  /** Id and extensions of the primitive `summary`. */
  _summary?: Element;
  /** Possible or likely findings and diagnoses (0..*) */
  finding?: Array<ClinicalImpressionFinding>;
  /** Estimate of likely outcome (0..*) */
  prognosisCodeableConcept?: Array<CodeableConcept>;
  /** RiskAssessment expressing likely outcome (0..*) */
  prognosisReference?: Array<Reference>;
  /** Action taken as part of assessment procedure (0..*) */
  action?: Array<Reference>;
  /** Comments made about the ClinicalImpression (0..*) */
  note?: Array<Annotation>;
}

export namespace ClinicalImpression {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/clinical-impression-status */
  export type StatusEnum = 'draft' | 'completed' | 'entered-in-error';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * One or more sets of investigations (signs, symptions, etc.)
 */
export class ClinicalImpressionInvestigation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** A name/code for the set (1..1) */
  code: CodeableConcept;
  /** Record of a specific investigation (0..*) */
  item?: Array<Reference>;
}

/**
 * Possible or likely findings and diagnoses
 */
export class ClinicalImpressionFinding {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** What was found (1..1) */
  itemCodeableConcept?: CodeableConcept;
  /** What was found (1..1) */
  itemReference?: Reference;
  /** Which investigations support finding (0..1) */
  basis?: string;
  /** Id and extensions of the primitive `basis`. */
  _basis?: Element;
}
