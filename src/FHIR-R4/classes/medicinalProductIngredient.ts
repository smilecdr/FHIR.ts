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
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export class MedicinalProductIngredient {
  resourceType: 'MedicinalProductIngredient';
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
  /** Identifier for the ingredient (0..1) */
  identifier?: Identifier;
  /** Ingredient role e.g. Active ingredient, excipient (1..1) */
  role: CodeableConcept;
  /** If the ingredient is a known or suspected allergen (0..1) */
  allergenicIndicator?: boolean;
  /** Id and extensions of the primitive `allergenicIndicator`. */
  _allergenicIndicator?: Element;
  /** Manufacturer of this Ingredient (0..*) */
  manufacturer?: Array<Reference>;
  /** A specified substance that comprises this ingredient (0..*) */
  specifiedSubstance?: Array<MedicinalProductIngredientSpecifiedSubstance>;
  /** The ingredient substance (0..1) */
  substance?: MedicinalProductIngredientSubstance;
}

/**
 * A specified substance that comprises this ingredient
 */
export class MedicinalProductIngredientSpecifiedSubstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The specified substance (1..1) */
  code: CodeableConcept;
  /** The group of specified substance, e.g. group 1 to 4 (1..1) */
  group: CodeableConcept;
  /** Confidentiality level of the specified substance as the ingredient (0..1) */
  confidentiality?: CodeableConcept;
  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product (0..*) */
  strength?: Array<MedicinalProductIngredientStrength>;
}

/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
 */
export class MedicinalProductIngredientStrength {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item (1..1) */
  presentation: Ratio;
  /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit (0..1) */
  presentationLowLimit?: Ratio;
  /** The strength per unitary volume (or mass) (0..1) */
  concentration?: Ratio;
  /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit (0..1) */
  concentrationLowLimit?: Ratio;
  /** For when strength is measured at a particular point or distance (0..1) */
  measurementPoint?: string;
  /** Id and extensions of the primitive `measurementPoint`. */
  _measurementPoint?: Element;
  /** The country or countries for which the strength range applies (0..*) */
  country?: Array<CodeableConcept>;
  /** Strength expressed in terms of a reference substance (0..*) */
  referenceStrength?: Array<MedicinalProductIngredientReferenceStrength>;
}

/**
 * Strength expressed in terms of a reference substance
 */
export class MedicinalProductIngredientReferenceStrength {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Relevant reference substance (0..1) */
  substance?: CodeableConcept;
  /** Strength expressed in terms of a reference substance (1..1) */
  strength: Ratio;
  /** Strength expressed in terms of a reference substance (0..1) */
  strengthLowLimit?: Ratio;
  /** For when strength is measured at a particular point or distance (0..1) */
  measurementPoint?: string;
  /** Id and extensions of the primitive `measurementPoint`. */
  _measurementPoint?: Element;
  /** The country or countries for which the strength range applies (0..*) */
  country?: Array<CodeableConcept>;
}

/**
 * The ingredient substance
 */
export class MedicinalProductIngredientSubstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The ingredient substance (1..1) */
  code: CodeableConcept;
  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product (0..*) */
  strength?: Array<MedicinalProductIngredientStrength>;
}
