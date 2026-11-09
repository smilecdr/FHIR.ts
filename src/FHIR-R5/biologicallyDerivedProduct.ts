/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A biological material originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 */
export interface BiologicallyDerivedProduct {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** organ | tissue | fluid | cells | biologicalAgent (0..1) */
  productCategory?: Coding;
  /** A code that identifies the kind of this biologically derived product (0..1) */
  productCode?: CodeableConcept;
  /** The parent biologically-derived product (0..*) */
  parent?: Array<Reference>;
  /** Request to obtain and/or infuse this product (0..*) */
  request?: Array<Reference>;
  /** Instance identifier (0..*) */
  identifier?: Array<Identifier>;
  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled (0..1) */
  biologicalSourceEvent?: Identifier;
  /** Processing facilities responsible for the labeling and distribution of this biologically derived product (0..*) */
  processingFacility?: Array<Reference>;
  /** A unique identifier for an aliquot of a product (0..1) */
  division?: string;
  /** Id and extensions of the primitive `division`. */
  _division?: Element;
  /** available | unavailable (0..1) */
  productStatus?: Coding;
  /** Date, and where relevant time, of expiration (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;
  /** How this product was collected (0..1) */
  collection?: BiologicallyDerivedProductCollection;
  /** Product storage temperature requirements (0..1) */
  storageTempRequirements?: Range;
  /** A property that is specific to this BiologicallyDerviedProduct instance (0..*) */
  property?: Array<BiologicallyDerivedProductProperty>;
}

/**
 * How this product was collected
 */
export interface BiologicallyDerivedProductCollection {
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
  /** The patient who underwent the medical procedure to collect the product or the organization that facilitated the collection (0..1) */
  source?: Reference;
  /** Time of product collection (0..1) */
  collectedDateTime?: string;
  /** Id and extensions of the primitive `collectedDateTime`. */
  _collectedDateTime?: Element;
  /** Time of product collection (0..1) */
  collectedPeriod?: Period;
}

/**
 * A property that is specific to this BiologicallyDerviedProduct instance
 */
export interface BiologicallyDerivedProductProperty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code that specifies the property (1..1) */
  type: CodeableConcept;
  /** Property values (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Property values (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Property values (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Property values (1..1) */
  valuePeriod?: Period;
  /** Property values (1..1) */
  valueQuantity?: Quantity;
  /** Property values (1..1) */
  valueRange?: Range;
  /** Property values (1..1) */
  valueRatio?: Ratio;
  /** Property values (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Property values (1..1) */
  valueAttachment?: Attachment;
}
