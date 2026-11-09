/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A food or supplement that is consumed by patients.
 */
export interface NutritionProduct {
  resourceType: 'NutritionProduct';
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
  /** A code that can identify the detailed nutrients and ingredients in a specific food product (0..1) */
  code?: CodeableConcept;
  /** active | inactive | entered-in-error (1..1) */
  status?: NutritionProduct.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Broad product groups or categories used to classify the product, such as Legume and Legume Products, Beverages, or Beef Products (0..*) */
  category?: Array<CodeableConcept>;
  /** Manufacturer, representative or officially responsible for the product (0..*) */
  manufacturer?: Array<Reference>;
  /** The product's nutritional information expressed by the nutrients (0..*) */
  nutrient?: Array<NutritionProductNutrient>;
  /** Ingredients contained in this product (0..*) */
  ingredient?: Array<NutritionProductIngredient>;
  /** Known or suspected allergens that are a part of this product (0..*) */
  knownAllergen?: Array<CodeableReference>;
  /** Specifies descriptive properties of the nutrition product (0..*) */
  characteristic?: Array<NutritionProductCharacteristic>;
  /** One or several physical instances or occurrences of the nutrition product (0..*) */
  instance?: Array<NutritionProductInstance>;
  /** Comments made about the product (0..*) */
  note?: Array<Annotation>;
}

export namespace NutritionProduct {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/nutritionproduct-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * The product's nutritional information expressed by the nutrients
 */
export interface NutritionProductNutrient {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The (relevant) nutrients in the product (0..1) */
  item?: CodeableReference;
  /** The amount of nutrient expressed in one or more units: X per pack / per serving / per dose (0..*) */
  amount?: Array<Ratio>;
}

/**
 * Ingredients contained in this product
 */
export interface NutritionProductIngredient {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The ingredient contained in the product (1..1) */
  item: CodeableReference;
  /** The amount of ingredient that is in the product (0..*) */
  amount?: Array<Ratio>;
}

/**
 * Specifies descriptive properties of the nutrition product
 */
export interface NutritionProductCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code specifying the type of characteristic (1..1) */
  type: CodeableConcept;
  /** The value of the characteristic (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** The value of the characteristic (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** The value of the characteristic (1..1) */
  valueQuantity?: Quantity;
  /** The value of the characteristic (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** The value of the characteristic (1..1) */
  valueAttachment?: Attachment;
  /** The value of the characteristic (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
}

/**
 * One or several physical instances or occurrences of the nutrition product
 */
export interface NutritionProductInstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The amount of items or instances (0..1) */
  quantity?: Quantity;
  /** The identifier for the physical instance, typically a serial number or manufacturer number (0..*) */
  identifier?: Array<Identifier>;
  /** The name for the specific product (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** The identification of the batch or lot of the product (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;
  /** The expiry date or date and time for the product (0..1) */
  expiry?: string;
  /** Id and extensions of the primitive `expiry`. */
  _expiry?: Element;
  /** The date until which the product is expected to be good for consumption (0..1) */
  useBy?: string;
  /** Id and extensions of the primitive `useBy`. */
  _useBy?: Element;
  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled (0..1) */
  biologicalSourceEvent?: Identifier;
}
