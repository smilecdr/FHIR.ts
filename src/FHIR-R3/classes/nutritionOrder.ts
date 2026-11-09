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
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { Timing } from './timing';

/**
 * Base StructureDefinition for NutritionOrder Resource
 */
export class NutritionOrder {
  resourceType: 'NutritionOrder';
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
  /** Identifiers assigned to this order (0..*) */
  identifier?: Array<Identifier>;
  /** proposed | draft | planned | requested | active | on-hold | completed | cancelled | entered-in-error (0..1) */
  status?: NutritionOrder.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The person who requires the diet, formula or nutritional supplement (1..1) */
  patient: Reference;
  /** The encounter associated with this nutrition order (0..1) */
  encounter?: Reference;
  /** Date and time the nutrition order was requested (1..1) */
  dateTime?: string;
  /** Id and extensions of the primitive `dateTime`. */
  _dateTime?: Element;
  /** Who ordered the diet, formula or nutritional supplement (0..1) */
  orderer?: Reference;
  /** List of the patient's food and nutrition-related allergies and intolerances (0..*) */
  allergyIntolerance?: Array<Reference>;
  /** Order-specific modifier about the type of food that should be given (0..*) */
  foodPreferenceModifier?: Array<CodeableConcept>;
  /** Order-specific modifier about the type of food that should not be given (0..*) */
  excludeFoodModifier?: Array<CodeableConcept>;
  /** Oral diet components (0..1) */
  oralDiet?: NutritionOrderOralDiet;
  /** Supplement components (0..*) */
  supplement?: Array<NutritionOrderSupplement>;
  /** Enteral formula components (0..1) */
  enteralFormula?: NutritionOrderEnteralFormula;
}

export namespace NutritionOrder {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/nutrition-request-status */
  export type StatusEnum =
    | 'proposed'
    | 'draft'
    | 'planned'
    | 'requested'
    | 'active'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'entered-in-error';
  export const StatusEnum = {
    Proposed: 'proposed' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    Planned: 'planned' as StatusEnum,
    Requested: 'requested' as StatusEnum,
    Active: 'active' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Oral diet components
 */
export class NutritionOrderOralDiet {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of oral diet or diet restrictions that describe what can be consumed orally (0..*) */
  type?: Array<CodeableConcept>;
  /** Scheduled frequency of diet (0..*) */
  schedule?: Array<Timing>;
  /** Required nutrient modifications (0..*) */
  nutrient?: Array<NutritionOrderNutrient>;
  /** Required texture modifications (0..*) */
  texture?: Array<NutritionOrderTexture>;
  /** The required consistency of fluids and liquids provided to the patient (0..*) */
  fluidConsistencyType?: Array<CodeableConcept>;
  /** Instructions or additional information about the oral diet (0..1) */
  instruction?: string;
  /** Id and extensions of the primitive `instruction`. */
  _instruction?: Element;
}

/**
 * Required nutrient modifications
 */
export class NutritionOrderNutrient {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of nutrient that is being modified (0..1) */
  modifier?: CodeableConcept;
  /** Quantity of the specified nutrient (0..1) */
  amount?: Quantity;
}

/**
 * Required texture modifications
 */
export class NutritionOrderTexture {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code to indicate how to alter the texture of the foods, e.g. pureed (0..1) */
  modifier?: CodeableConcept;
  /** Concepts that are used to identify an entity that is ingested for nutritional purposes (0..1) */
  foodType?: CodeableConcept;
}

/**
 * Supplement components
 */
export class NutritionOrderSupplement {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of supplement product requested (0..1) */
  type?: CodeableConcept;
  /** Product or brand name of the nutritional supplement (0..1) */
  productName?: string;
  /** Id and extensions of the primitive `productName`. */
  _productName?: Element;
  /** Scheduled frequency of supplement (0..*) */
  schedule?: Array<Timing>;
  /** Amount of the nutritional supplement (0..1) */
  quantity?: Quantity;
  /** Instructions or additional information about the oral supplement (0..1) */
  instruction?: string;
  /** Id and extensions of the primitive `instruction`. */
  _instruction?: Element;
}

/**
 * Enteral formula components
 */
export class NutritionOrderEnteralFormula {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of enteral or infant formula (0..1) */
  baseFormulaType?: CodeableConcept;
  /** Product or brand name of the enteral or infant formula (0..1) */
  baseFormulaProductName?: string;
  /** Id and extensions of the primitive `baseFormulaProductName`. */
  _baseFormulaProductName?: Element;
  /** Type of modular component to add to the feeding (0..1) */
  additiveType?: CodeableConcept;
  /** Product or brand name of the modular additive (0..1) */
  additiveProductName?: string;
  /** Id and extensions of the primitive `additiveProductName`. */
  _additiveProductName?: Element;
  /** Amount of energy per specified volume that is required (0..1) */
  caloricDensity?: Quantity;
  /** How the formula should enter the patient's gastrointestinal tract (0..1) */
  routeofAdministration?: CodeableConcept;
  /** Formula feeding instruction as structured data (0..*) */
  administration?: Array<NutritionOrderAdministration>;
  /** Upper limit on formula volume per unit of time (0..1) */
  maxVolumeToDeliver?: Quantity;
  /** Formula feeding instructions expressed as text (0..1) */
  administrationInstruction?: string;
  /** Id and extensions of the primitive `administrationInstruction`. */
  _administrationInstruction?: Element;
}

/**
 * Formula feeding instruction as structured data
 */
export class NutritionOrderAdministration {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Scheduled frequency of enteral feeding (0..1) */
  schedule?: Timing;
  /** The volume of formula to provide (0..1) */
  quantity?: Quantity;
  /** Speed with which the formula is provided per period of time (0..1) */
  rateQuantity?: Quantity;
  /** Speed with which the formula is provided per period of time (0..1) */
  rateRatio?: Ratio;
}
