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
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export interface ImmunizationRecommendation {
  resourceType: 'ImmunizationRecommendation';
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
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Who this profile is for (1..1) */
  patient: Reference;
  /** Date recommendation(s) created (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who is responsible for protocol (0..1) */
  authority?: Reference;
  /** Vaccine administration recommendations (1..*) */
  recommendation: Array<ImmunizationRecommendationRecommendation>;
}

/**
 * Vaccine administration recommendations
 */
export interface ImmunizationRecommendationRecommendation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Vaccine or vaccine group recommendation applies to (0..*) */
  vaccineCode?: Array<CodeableConcept>;
  /** Disease to be immunized against (0..*) */
  targetDisease?: Array<CodeableConcept>;
  /** Vaccine which is contraindicated to fulfill the recommendation (0..*) */
  contraindicatedVaccineCode?: Array<CodeableConcept>;
  /** Vaccine recommendation status (1..1) */
  forecastStatus: CodeableConcept;
  /** Vaccine administration status reason (0..*) */
  forecastReason?: Array<CodeableConcept>;
  /** Dates governing proposed immunization (0..*) */
  dateCriterion?: Array<ImmunizationRecommendationDateCriterion>;
  /** Protocol details (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Name of vaccination series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;
  /** Recommended dose number within series (0..1) */
  doseNumber?: string;
  /** Id and extensions of the primitive `doseNumber`. */
  _doseNumber?: Element;
  /** Recommended number of doses for immunity (0..1) */
  seriesDoses?: string;
  /** Id and extensions of the primitive `seriesDoses`. */
  _seriesDoses?: Element;
  /** Past immunizations supporting recommendation (0..*) */
  supportingImmunization?: Array<Reference>;
  /** Patient observations supporting recommendation (0..*) */
  supportingPatientInformation?: Array<Reference>;
}

/**
 * Dates governing proposed immunization
 */
export interface ImmunizationRecommendationDateCriterion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of date (1..1) */
  code: CodeableConcept;
  /** Recommended date (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}
