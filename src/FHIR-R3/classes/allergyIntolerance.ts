/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Age } from './age';
import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Range } from './range';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for AllergyIntolerance Resource
 */
export class AllergyIntolerance {
  resourceType: 'AllergyIntolerance';
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
  /** External ids for this item (0..*) */
  identifier?: Array<Identifier>;
  /** active | inactive | resolved (0..1) */
  clinicalStatus?: AllergyIntolerance.ClinicalStatusEnum;
  /** Id and extensions of the primitive `clinicalStatus`. */
  _clinicalStatus?: Element;
  /** unconfirmed | confirmed | refuted | entered-in-error (1..1) */
  verificationStatus?: AllergyIntolerance.VerificationStatusEnum;
  /** Id and extensions of the primitive `verificationStatus`. */
  _verificationStatus?: Element;
  /** allergy | intolerance - Underlying mechanism (if known) (0..1) */
  type?: AllergyIntolerance.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** food | medication | environment | biologic (0..*) */
  category?: Array<AllergyIntolerance.CategoryEnum>;
  /** Id and extensions of the primitive `category`. */
  _category?: Array<Element | null>;
  /** low | high | unable-to-assess (0..1) */
  criticality?: AllergyIntolerance.CriticalityEnum;
  /** Id and extensions of the primitive `criticality`. */
  _criticality?: Element;
  /** Code that identifies the allergy or intolerance (0..1) */
  code?: CodeableConcept;
  /** Who the sensitivity is for (1..1) */
  patient: Reference;
  /** When allergy or intolerance was identified (0..1) */
  onsetDateTime?: string;
  /** Id and extensions of the primitive `onsetDateTime`. */
  _onsetDateTime?: Element;
  /** When allergy or intolerance was identified (0..1) */
  onsetAge?: Age;
  /** When allergy or intolerance was identified (0..1) */
  onsetPeriod?: Period;
  /** When allergy or intolerance was identified (0..1) */
  onsetRange?: Range;
  /** When allergy or intolerance was identified (0..1) */
  onsetString?: string;
  /** Id and extensions of the primitive `onsetString`. */
  _onsetString?: Element;
  /** Date record was believed accurate (0..1) */
  assertedDate?: string;
  /** Id and extensions of the primitive `assertedDate`. */
  _assertedDate?: Element;
  /** Who recorded the sensitivity (0..1) */
  recorder?: Reference;
  /** Source of the information about the allergy (0..1) */
  asserter?: Reference;
  /** Date(/time) of last known occurrence of a reaction (0..1) */
  lastOccurrence?: string;
  /** Id and extensions of the primitive `lastOccurrence`. */
  _lastOccurrence?: Element;
  /** Additional text not captured in other fields (0..*) */
  note?: Array<Annotation>;
  /** Adverse Reaction Events linked to exposure to substance (0..*) */
  reaction?: Array<AllergyIntoleranceReaction>;
}

export namespace AllergyIntolerance {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/allergy-clinical-status */
  export type ClinicalStatusEnum = 'active' | 'inactive' | 'resolved';
  export const ClinicalStatusEnum = {
    Active: 'active' as ClinicalStatusEnum,
    Inactive: 'inactive' as ClinicalStatusEnum,
    Resolved: 'resolved' as ClinicalStatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/allergy-verification-status */
  export type VerificationStatusEnum = 'unconfirmed' | 'confirmed' | 'refuted' | 'entered-in-error';
  export const VerificationStatusEnum = {
    Unconfirmed: 'unconfirmed' as VerificationStatusEnum,
    Confirmed: 'confirmed' as VerificationStatusEnum,
    Refuted: 'refuted' as VerificationStatusEnum,
    EnteredInError: 'entered-in-error' as VerificationStatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/allergy-intolerance-type */
  export type TypeEnum = 'allergy' | 'intolerance';
  export const TypeEnum = {
    Allergy: 'allergy' as TypeEnum,
    Intolerance: 'intolerance' as TypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/allergy-intolerance-category */
  export type CategoryEnum = 'food' | 'medication' | 'environment' | 'biologic';
  export const CategoryEnum = {
    Food: 'food' as CategoryEnum,
    Medication: 'medication' as CategoryEnum,
    Environment: 'environment' as CategoryEnum,
    Biologic: 'biologic' as CategoryEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality */
  export type CriticalityEnum = 'low' | 'high' | 'unable-to-assess';
  export const CriticalityEnum = {
    Low: 'low' as CriticalityEnum,
    High: 'high' as CriticalityEnum,
    UnableToAssess: 'unable-to-assess' as CriticalityEnum,
  };
}

/**
 * Adverse Reaction Events linked to exposure to substance
 */
export class AllergyIntoleranceReaction {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Specific substance or pharmaceutical product considered to be responsible for event (0..1) */
  substance?: CodeableConcept;
  /** Clinical symptoms/signs associated with the Event (1..*) */
  manifestation: Array<CodeableConcept>;
  /** Description of the event as a whole (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Date(/time) when manifestations showed (0..1) */
  onset?: string;
  /** Id and extensions of the primitive `onset`. */
  _onset?: Element;
  /** mild | moderate | severe (of event as a whole) (0..1) */
  severity?: AllergyIntoleranceReaction.SeverityEnum;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;
  /** How the subject was exposed to the substance (0..1) */
  exposureRoute?: CodeableConcept;
  /** Text about event not captured in other fields (0..*) */
  note?: Array<Annotation>;
}

export namespace AllergyIntoleranceReaction {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/reaction-event-severity */
  export type SeverityEnum = 'mild' | 'moderate' | 'severe';
  export const SeverityEnum = {
    Mild: 'mild' as SeverityEnum,
    Moderate: 'moderate' as SeverityEnum,
    Severe: 'severe' as SeverityEnum,
  };
}
