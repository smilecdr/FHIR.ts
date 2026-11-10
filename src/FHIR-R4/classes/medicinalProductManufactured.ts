/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { ProdCharacteristic } from './prodCharacteristic';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export class MedicinalProductManufactured {
  resourceType: 'MedicinalProductManufactured';
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
  /** Dose form as manufactured and before any transformation into the pharmaceutical product (1..1) */
  manufacturedDoseForm: CodeableConcept;
  /** The “real world” units in which the quantity of the manufactured item is described (0..1) */
  unitOfPresentation?: CodeableConcept;
  /** The quantity or "count number" of the manufactured item (1..1) */
  quantity: Quantity;
  /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) (0..*) */
  manufacturer?: Array<Reference>;
  /** Ingredient (0..*) */
  ingredient?: Array<Reference>;
  /** Dimensions, color etc. (0..1) */
  physicalCharacteristics?: ProdCharacteristic;
  /** Other codeable characteristics (0..*) */
  otherCharacteristics?: Array<CodeableConcept>;
}
