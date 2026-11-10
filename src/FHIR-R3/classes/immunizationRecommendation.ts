/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
 * Base StructureDefinition for ImmunizationRecommendation Resource
 */
export class ImmunizationRecommendation {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Who this profile is for (1..1) */
  patient: Reference;
  /** Vaccine administration recommendations (1..*) */
  recommendation: Array<ImmunizationRecommendationRecommendation>;
}

/**
 * Vaccine administration recommendations
 */
export class ImmunizationRecommendationRecommendation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Date recommendation created (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Vaccine recommendation applies to (0..1) */
  vaccineCode?: CodeableConcept;
  /** Disease to be immunized against (0..1) */
  targetDisease?: CodeableConcept;
  /** Recommended dose number (0..1) */
  doseNumber?: number;
  /** Id and extensions of the primitive `doseNumber`. */
  _doseNumber?: Element;
  /** Vaccine administration status (1..1) */
  forecastStatus: CodeableConcept;
  /** Dates governing proposed immunization (0..*) */
  dateCriterion?: Array<ImmunizationRecommendationDateCriterion>;
  /** Protocol used by recommendation (0..1) */
  protocol?: ImmunizationRecommendationProtocol;
  /** Past immunizations supporting recommendation (0..*) */
  supportingImmunization?: Array<Reference>;
  /** Patient observations supporting recommendation (0..*) */
  supportingPatientInformation?: Array<Reference>;
}

/**
 * Dates governing proposed immunization
 */
export class ImmunizationRecommendationDateCriterion {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of date (1..1) */
  code: CodeableConcept;
  /** Recommended date (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Protocol used by recommendation
 */
export class ImmunizationRecommendationProtocol {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Dose number within sequence (0..1) */
  doseSequence?: number;
  /** Id and extensions of the primitive `doseSequence`. */
  _doseSequence?: Element;
  /** Protocol details (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Who is responsible for protocol (0..1) */
  authority?: Reference;
  /** Name of vaccination series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;
}
