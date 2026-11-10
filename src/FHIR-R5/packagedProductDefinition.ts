/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { MarketingStatus } from './marketingStatus';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { ProductShelfLife } from './productShelfLife';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A medically related item or items, in a container or package.
 */
export interface PackagedProductDefinition {
  resourceType: 'PackagedProductDefinition';
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
  /** A unique identifier for this package as whole - not for the content of the package (0..*) */
  identifier?: Array<Identifier>;
  /** A name for this package. Typically as listed in a drug formulary, catalogue, inventory etc (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** A high level category e.g. medicinal product, raw material, shipping container etc (0..1) */
  type?: CodeableConcept;
  /** The product that this is a pack for (0..*) */
  packageFor?: Array<Reference>;
  /** The status within the lifecycle of this item. High level - not intended to duplicate details elsewhere e.g. legal status, or authorization/marketing status (0..1) */
  status?: CodeableConcept;
  /** The date at which the given status became applicable (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;
  /** A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. See also packaging.containedItem.amount (especially the long definition) (0..*) */
  containedItemQuantity?: Array<Quantity>;
  /** Textual description. Note that this is not the name of the package or product (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The legal status of supply of the packaged item as classified by the regulator (0..*) */
  legalStatusOfSupply?: Array<PackagedProductDefinitionLegalStatusOfSupply>;
  /** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated (0..*) */
  marketingStatus?: Array<MarketingStatus>;
  /** Identifies if the drug product is supplied with another item such as a diluent or adjuvant (0..1) */
  copackagedIndicator?: boolean;
  /** Id and extensions of the primitive `copackagedIndicator`. */
  _copackagedIndicator?: Element;
  /** Manufacturer of this package type (multiple means these are all possible manufacturers) (0..*) */
  manufacturer?: Array<Reference>;
  /** Additional information or supporting documentation about the packaged product (0..*) */
  attachedDocument?: Array<Reference>;
  /** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (0..1) */
  packaging?: PackagedProductDefinitionPackaging;
  /** Allows the key features to be recorded, such as "hospital pack", "nurse prescribable" (0..*) */
  characteristic?: Array<PackagedProductDefinitionProperty>;
}

/**
 * The legal status of supply of the packaged item as classified by the regulator
 */
export interface PackagedProductDefinitionLegalStatusOfSupply {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The actual status of supply. In what situation this package type may be supplied for use (0..1) */
  code?: CodeableConcept;
  /** The place where the legal status of supply applies (0..1) */
  jurisdiction?: CodeableConcept;
}

/**
 * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
 */
export interface PackagedProductDefinitionPackaging {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier (0..*) */
  identifier?: Array<Identifier>;
  /** The physical type of the container of the items (0..1) */
  type?: CodeableConcept;
  /** Is this a part of the packaging (e.g. a cap or bottle stopper), rather than the packaging itself (e.g. a bottle or vial) (0..1) */
  componentPart?: boolean;
  /** Id and extensions of the primitive `componentPart`. */
  _componentPart?: Element;
  /** The quantity of this level of packaging in the package that contains it (with the outermost level being 1) (0..1) */
  quantity?: number;
  /** Id and extensions of the primitive `quantity`. */
  _quantity?: Element;
  /** Material type of the package item (0..*) */
  material?: Array<CodeableConcept>;
  /** A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material (0..*) */
  alternateMaterial?: Array<CodeableConcept>;
  /** Shelf Life and storage information (0..*) */
  shelfLifeStorage?: Array<ProductShelfLife>;
  /** Manufacturer of this packaging item (multiple means these are all potential manufacturers) (0..*) */
  manufacturer?: Array<Reference>;
  /** General characteristics of this item (0..*) */
  property?: Array<PackagedProductDefinitionProperty>;
  /** The item(s) within the packaging (0..*) */
  containedItem?: Array<PackagedProductDefinitionContainedItem>;
  /** Allows containers (and parts of containers) within containers, still as a part of single packaged product (0..*) */
  packaging?: Array<PackagedProductDefinitionPackaging>;
}

/**
 * General characteristics of this item
 */
export interface PackagedProductDefinitionProperty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A code expressing the type of characteristic (1..1) */
  type: CodeableConcept;
  /** A value for the characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** A value for the characteristic (0..1) */
  valueQuantity?: Quantity;
  /** A value for the characteristic (0..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** A value for the characteristic (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** A value for the characteristic (0..1) */
  valueAttachment?: Attachment;
}

/**
 * The item(s) within the packaging
 */
export interface PackagedProductDefinitionContainedItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package (1..1) */
  item: CodeableReference;
  /** The number of this type of item within this packaging or for continuous items such as liquids it is the quantity (for example 25ml). See also PackagedProductDefinition.containedItemQuantity (especially the long definition) (0..1) */
  amount?: Quantity;
}
