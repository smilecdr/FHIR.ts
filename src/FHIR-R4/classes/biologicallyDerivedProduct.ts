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
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 */
export class BiologicallyDerivedProduct {
  resourceType: 'BiologicallyDerivedProduct';
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
  /** External ids for this item (0..*) */
  identifier?: Array<Identifier>;
  /** organ | tissue | fluid | cells | biologicalAgent (0..1) */
  productCategory?: BiologicallyDerivedProduct.ProductCategoryEnum;
  /** Id and extensions of the primitive `productCategory`. */
  _productCategory?: Element;
  /** What this biologically derived product is (0..1) */
  productCode?: CodeableConcept;
  /** available | unavailable (0..1) */
  status?: BiologicallyDerivedProduct.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Procedure request (0..*) */
  request?: Array<Reference>;
  /** The amount of this biologically derived product (0..1) */
  quantity?: number;
  /** Id and extensions of the primitive `quantity`. */
  _quantity?: Element;
  /** BiologicallyDerivedProduct parent (0..*) */
  parent?: Array<Reference>;
  /** How this product was collected (0..1) */
  collection?: BiologicallyDerivedProductCollection;
  /** Any processing of the product during collection (0..*) */
  processing?: Array<BiologicallyDerivedProductProcessing>;
  /** Any manipulation of product post-collection (0..1) */
  manipulation?: BiologicallyDerivedProductManipulation;
  /** Product storage (0..*) */
  storage?: Array<BiologicallyDerivedProductStorage>;
}

export namespace BiologicallyDerivedProduct {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/product-category */
  export type ProductCategoryEnum = 'organ' | 'tissue' | 'fluid' | 'cells' | 'biologicalAgent';
  export const ProductCategoryEnum = {
    Organ: 'organ' as ProductCategoryEnum,
    Tissue: 'tissue' as ProductCategoryEnum,
    Fluid: 'fluid' as ProductCategoryEnum,
    Cells: 'cells' as ProductCategoryEnum,
    BiologicalAgent: 'biologicalAgent' as ProductCategoryEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/product-status */
  export type StatusEnum = 'available' | 'unavailable';
  export const StatusEnum = {
    Available: 'available' as StatusEnum,
    Unavailable: 'unavailable' as StatusEnum,
  };
}

/**
 * How this product was collected
 */
export class BiologicallyDerivedProductCollection {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Individual performing collection (0..1) */
  collector?: Reference;
  /** Who is product from (0..1) */
  source?: Reference;
  /** Time of product collection (0..1) */
  collectedDateTime?: Date | string;
  /** Id and extensions of the primitive `collectedDateTime`. */
  _collectedDateTime?: Element;
  /** Time of product collection (0..1) */
  collectedPeriod?: Period;
}

/**
 * Any processing of the product during collection
 */
export class BiologicallyDerivedProductProcessing {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of of processing (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Procesing code (0..1) */
  procedure?: CodeableConcept;
  /** Substance added during processing (0..1) */
  additive?: Reference;
  /** Time of processing (0..1) */
  timeDateTime?: Date | string;
  /** Id and extensions of the primitive `timeDateTime`. */
  _timeDateTime?: Element;
  /** Time of processing (0..1) */
  timePeriod?: Period;
}

/**
 * Any manipulation of product post-collection
 */
export class BiologicallyDerivedProductManipulation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of manipulation (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Time of manipulation (0..1) */
  timeDateTime?: Date | string;
  /** Id and extensions of the primitive `timeDateTime`. */
  _timeDateTime?: Element;
  /** Time of manipulation (0..1) */
  timePeriod?: Period;
}

/**
 * Product storage
 */
export class BiologicallyDerivedProductStorage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of storage (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Storage temperature (0..1) */
  temperature?: number;
  /** Id and extensions of the primitive `temperature`. */
  _temperature?: Element;
  /** farenheit | celsius | kelvin (0..1) */
  scale?: BiologicallyDerivedProductStorage.ScaleEnum;
  /** Id and extensions of the primitive `scale`. */
  _scale?: Element;
  /** Storage timeperiod (0..1) */
  duration?: Period;
}

export namespace BiologicallyDerivedProductStorage {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/product-storage-scale */
  export type ScaleEnum = 'farenheit' | 'celsius' | 'kelvin';
  export const ScaleEnum = {
    Farenheit: 'farenheit' as ScaleEnum,
    Celsius: 'celsius' as ScaleEnum,
    Kelvin: 'kelvin' as ScaleEnum,
  };
}
