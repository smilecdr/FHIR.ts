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
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export interface RiskAssessment {
  resourceType: 'RiskAssessment';
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
  /** Unique identifier for the assessment (0..*) */
  identifier?: Array<Identifier>;
  /** Request fulfilled by this assessment (0..1) */
  basedOn?: Reference;
  /** Part of this occurrence (0..1) */
  parent?: Reference;
  /** registered | preliminary | final | amended + (1..1) */
  status?: RiskAssessment.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Evaluation mechanism (0..1) */
  method?: CodeableConcept;
  /** Type of assessment (0..1) */
  code?: CodeableConcept;
  /** Who/what does assessment apply to? (1..1) */
  subject: Reference;
  /** Where was assessment performed? (0..1) */
  encounter?: Reference;
  /** When was assessment made? (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When was assessment made? (0..1) */
  occurrencePeriod?: Period;
  /** Condition assessed (0..1) */
  condition?: Reference;
  /** Who did assessment? (0..1) */
  performer?: Reference;
  /** Why the assessment was necessary? (0..*) */
  reason?: Array<CodeableReference>;
  /** Information used in assessment (0..*) */
  basis?: Array<Reference>;
  /** Outcome predicted (0..*) */
  prediction?: Array<RiskAssessmentPrediction>;
  /** How to reduce risk (0..1) */
  mitigation?: string;
  /** Id and extensions of the primitive `mitigation`. */
  _mitigation?: Element;
  /** Comments on the risk assessment (0..*) */
  note?: Array<Annotation>;
}

export namespace RiskAssessment {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/observation-status */
  export type StatusEnum =
    | 'registered'
    | 'preliminary'
    | 'final'
    | 'amended'
    | 'corrected'
    | 'cancelled'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Registered: 'registered' as StatusEnum,
    Preliminary: 'preliminary' as StatusEnum,
    Final: 'final' as StatusEnum,
    Amended: 'amended' as StatusEnum,
    Corrected: 'corrected' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Outcome predicted
 */
export interface RiskAssessmentPrediction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Possible outcome for the subject (0..1) */
  outcome?: CodeableConcept;
  /** Likelihood of specified outcome (0..1) */
  probabilityDecimal?: number;
  /** Id and extensions of the primitive `probabilityDecimal`. */
  _probabilityDecimal?: Element;
  /** Likelihood of specified outcome (0..1) */
  probabilityRange?: Range;
  /** Likelihood of specified outcome as a qualitative value (0..1) */
  qualitativeRisk?: CodeableConcept;
  /** Relative likelihood (0..1) */
  relativeRisk?: number;
  /** Id and extensions of the primitive `relativeRisk`. */
  _relativeRisk?: Element;
  /** Timeframe or age range (0..1) */
  whenPeriod?: Period;
  /** Timeframe or age range (0..1) */
  whenRange?: Range;
  /** Explanation of prediction (0..1) */
  rationale?: string;
  /** Id and extensions of the primitive `rationale`. */
  _rationale?: Element;
}
