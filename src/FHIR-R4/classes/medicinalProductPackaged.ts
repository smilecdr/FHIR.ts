/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { MarketingStatus } from './marketingStatus';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { ProdCharacteristic } from './prodCharacteristic';
import type { ProductShelfLife } from './productShelfLife';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A medicinal product in a container or package.
 */
export class MedicinalProductPackaged {
  resourceType: 'MedicinalProductPackaged';
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
  /** Unique identifier (0..*) */
  identifier?: Array<Identifier>;
  /** The product with this is a pack for (0..*) */
  subject?: Array<Reference>;
  /** Textual description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The legal status of supply of the medicinal product as classified by the regulator (0..1) */
  legalStatusOfSupply?: CodeableConcept;
  /** Marketing information (0..*) */
  marketingStatus?: Array<MarketingStatus>;
  /** Manufacturer of this Package Item (0..1) */
  marketingAuthorization?: Reference;
  /** Manufacturer of this Package Item (0..*) */
  manufacturer?: Array<Reference>;
  /** Batch numbering (0..*) */
  batchIdentifier?: Array<MedicinalProductPackagedBatchIdentifier>;
  /** A packaging item, as a contained for medicine, possibly with other packaging items within (1..*) */
  packageItem: Array<MedicinalProductPackagedPackageItem>;
}

/**
 * Batch numbering
 */
export class MedicinalProductPackagedBatchIdentifier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A number appearing on the outer packaging of a specific batch (1..1) */
  outerPackaging: Identifier;
  /** A number appearing on the immediate packaging (and not the outer packaging) (0..1) */
  immediatePackaging?: Identifier;
}

/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within
 */
export class MedicinalProductPackagedPackageItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Including possibly Data Carrier Identifier (0..*) */
  identifier?: Array<Identifier>;
  /** The physical type of the container of the medicine (1..1) */
  type: CodeableConcept;
  /** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1 (1..1) */
  quantity: Quantity;
  /** Material type of the package item (0..*) */
  material?: Array<CodeableConcept>;
  /** A possible alternate material for the packaging (0..*) */
  alternateMaterial?: Array<CodeableConcept>;
  /** A device accompanying a medicinal product (0..*) */
  device?: Array<Reference>;
  /** The manufactured item as contained in the packaged medicinal product (0..*) */
  manufacturedItem?: Array<Reference>;
  /** Allows containers within containers (0..*) */
  packageItem?: Array<MedicinalProductPackagedPackageItem>;
  /** Dimensions, color etc. (0..1) */
  physicalCharacteristics?: ProdCharacteristic;
  /** Other codeable characteristics (0..*) */
  otherCharacteristics?: Array<CodeableConcept>;
  /** Shelf Life and storage information (0..*) */
  shelfLifeStorage?: Array<ProductShelfLife>;
  /** Manufacturer of this Package Item (0..*) */
  manufacturer?: Array<Reference>;
}
