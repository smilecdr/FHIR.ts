/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those recommendations.
 */
export class ImmunizationEvaluation {
  resourceType: 'ImmunizationEvaluation';
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
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** completed | entered-in-error (1..1) */
  status?: ImmunizationEvaluation.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Who this evaluation is for (1..1) */
  patient: Reference;
  /** Date evaluation was performed (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who is responsible for publishing the recommendations (0..1) */
  authority?: Reference;
  /** Evaluation target disease (1..1) */
  targetDisease: CodeableConcept;
  /** Immunization being evaluated (1..1) */
  immunizationEvent: Reference;
  /** Status of the dose relative to published recommendations (1..1) */
  doseStatus: CodeableConcept;
  /** Reason for the dose status (0..*) */
  doseStatusReason?: Array<CodeableConcept>;
  /** Evaluation notes (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Name of vaccine series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;
  /** Dose number within series (0..1) */
  doseNumberPositiveInt?: number;
  /** Id and extensions of the primitive `doseNumberPositiveInt`. */
  _doseNumberPositiveInt?: Element;
  /** Dose number within series (0..1) */
  doseNumberString?: string;
  /** Id and extensions of the primitive `doseNumberString`. */
  _doseNumberString?: Element;
  /** Recommended number of doses for immunity (0..1) */
  seriesDosesPositiveInt?: number;
  /** Id and extensions of the primitive `seriesDosesPositiveInt`. */
  _seriesDosesPositiveInt?: Element;
  /** Recommended number of doses for immunity (0..1) */
  seriesDosesString?: string;
  /** Id and extensions of the primitive `seriesDosesString`. */
  _seriesDosesString?: Element;
}

export namespace ImmunizationEvaluation {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/immunization-evaluation-status */
  export type StatusEnum = 'completed' | 'entered-in-error';
  export const StatusEnum = {
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}
