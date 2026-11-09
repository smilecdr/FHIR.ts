/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { RatioRange } from './ratioRange';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export interface Ingredient {
  resourceType: 'Ingredient';
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
  /** An identifier or code by which the ingredient can be referenced (0..1) */
  identifier?: Identifier;
  /** draft | active | retired | unknown (1..1) */
  status?: Ingredient.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The product which this ingredient is a constituent part of (0..*) */
  for?: Array<Reference>;
  /** Purpose of the ingredient within the product, e.g. active, inactive (1..1) */
  role: CodeableConcept;
  /** Precise action within the drug product, e.g. antioxidant, alkalizing agent (0..*) */
  function?: Array<CodeableConcept>;
  /** A classification of the ingredient according to where in the physical item it tends to be used, such the outer shell of a tablet, inner body or ink (0..1) */
  group?: CodeableConcept;
  /** If the ingredient is a known or suspected allergen (0..1) */
  allergenicIndicator?: boolean;
  /** Id and extensions of the primitive `allergenicIndicator`. */
  _allergenicIndicator?: Element;
  /** A place for providing any notes that are relevant to the component, e.g. removed during process, adjusted for loss on drying (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** An organization that manufactures this ingredient (0..*) */
  manufacturer?: Array<IngredientManufacturer>;
  /** The substance that comprises this ingredient (1..1) */
  substance: IngredientSubstance;
}

export namespace Ingredient {
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
 * An organization that manufactures this ingredient
 */
export interface IngredientManufacturer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** allowed | possible | actual (0..1) */
  role?: IngredientManufacturer.RoleEnum;
  /** Id and extensions of the primitive `role`. */
  _role?: Element;
  /** An organization that manufactures this ingredient (1..1) */
  manufacturer: Reference;
}

export namespace IngredientManufacturer {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/ingredient-manufacturer-role */
  export type RoleEnum = 'allowed' | 'possible' | 'actual';
  export const RoleEnum = {
    Allowed: 'allowed' as RoleEnum,
    Possible: 'possible' as RoleEnum,
    Actual: 'actual' as RoleEnum,
  };
}

/**
 * The substance that comprises this ingredient
 */
export interface IngredientSubstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A code or full resource that represents the ingredient substance (1..1) */
  code: CodeableReference;
  /** The quantity of substance, per presentation, or per volume or mass, and type of quantity (0..*) */
  strength?: Array<IngredientStrength>;
}

/**
 * The quantity of substance, per presentation, or per volume or mass, and type of quantity
 */
export interface IngredientStrength {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The quantity of substance in the unit of presentation (0..1) */
  presentationRatio?: Ratio;
  /** The quantity of substance in the unit of presentation (0..1) */
  presentationRatioRange?: RatioRange;
  /** The quantity of substance in the unit of presentation (0..1) */
  presentationCodeableConcept?: CodeableConcept;
  /** The quantity of substance in the unit of presentation (0..1) */
  presentationQuantity?: Quantity;
  /** Text of either the whole presentation strength or a part of it (rest being in Strength.presentation as a ratio) (0..1) */
  textPresentation?: string;
  /** Id and extensions of the primitive `textPresentation`. */
  _textPresentation?: Element;
  /** The strength per unitary volume (or mass) (0..1) */
  concentrationRatio?: Ratio;
  /** The strength per unitary volume (or mass) (0..1) */
  concentrationRatioRange?: RatioRange;
  /** The strength per unitary volume (or mass) (0..1) */
  concentrationCodeableConcept?: CodeableConcept;
  /** The strength per unitary volume (or mass) (0..1) */
  concentrationQuantity?: Quantity;
  /** Text of either the whole concentration strength or a part of it (rest being in Strength.concentration as a ratio) (0..1) */
  textConcentration?: string;
  /** Id and extensions of the primitive `textConcentration`. */
  _textConcentration?: Element;
  /** A code that indicates if the strength is, for example, based on the ingredient substance as stated or on the substance base (when the ingredient is a salt) (0..1) */
  basis?: CodeableConcept;
  /** When strength is measured at a particular point or distance (0..1) */
  measurementPoint?: string;
  /** Id and extensions of the primitive `measurementPoint`. */
  _measurementPoint?: Element;
  /** Where the strength range applies (0..*) */
  country?: Array<CodeableConcept>;
  /** Strength expressed in terms of a reference substance (0..*) */
  referenceStrength?: Array<IngredientReferenceStrength>;
}

/**
 * Strength expressed in terms of a reference substance
 */
export interface IngredientReferenceStrength {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Relevant reference substance (1..1) */
  substance: CodeableReference;
  /** Strength expressed in terms of a reference substance (1..1) */
  strengthRatio?: Ratio;
  /** Strength expressed in terms of a reference substance (1..1) */
  strengthRatioRange?: RatioRange;
  /** Strength expressed in terms of a reference substance (1..1) */
  strengthQuantity?: Quantity;
  /** When strength is measured at a particular point or distance (0..1) */
  measurementPoint?: string;
  /** Id and extensions of the primitive `measurementPoint`. */
  _measurementPoint?: Element;
  /** Where the strength range applies (0..*) */
  country?: Array<CodeableConcept>;
}
