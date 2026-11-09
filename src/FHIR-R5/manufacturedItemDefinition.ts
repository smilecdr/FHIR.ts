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
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 */
export interface ManufacturedItemDefinition {
  resourceType: 'ManufacturedItemDefinition';
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
  /** Unique identifier (0..*) */
  identifier?: Array<Identifier>;
  /** draft | active | retired | unknown (1..1) */
  status?: ManufacturedItemDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** A descriptive name applied to this item (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Dose form as manufactured (before any necessary transformation) (1..1) */
  manufacturedDoseForm: CodeableConcept;
  /** The “real-world” units in which the quantity of the item is described (0..1) */
  unitOfPresentation?: CodeableConcept;
  /** Manufacturer of the item, one of several possible (0..*) */
  manufacturer?: Array<Reference>;
  /** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated (0..*) */
  marketingStatus?: Array<MarketingStatus>;
  /** The ingredients of this manufactured item. Only needed if these are not specified by incoming references from the Ingredient resource (0..*) */
  ingredient?: Array<CodeableConcept>;
  /** General characteristics of this item (0..*) */
  property?: Array<ManufacturedItemDefinitionProperty>;
  /** Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup (0..*) */
  component?: Array<ManufacturedItemDefinitionComponent>;
}

export namespace ManufacturedItemDefinition {
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
 * General characteristics of this item
 */
export interface ManufacturedItemDefinitionProperty {
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
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** A value for the characteristic (0..1) */
  valueAttachment?: Attachment;
  /** A value for the characteristic (0..1) */
  valueReference?: Reference;
}

/**
 * Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup
 */
export interface ManufacturedItemDefinitionComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Defining type of the component e.g. shell, layer, ink (1..1) */
  type: CodeableConcept;
  /** The function of this component within the item e.g. delivers active ingredient, masks taste (0..*) */
  function?: Array<CodeableConcept>;
  /** The measurable amount of total quantity of all substances in the component, expressable in different ways (e.g. by mass or volume) (0..*) */
  amount?: Array<Quantity>;
  /** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient) (0..*) */
  constituent?: Array<ManufacturedItemDefinitionConstituent>;
  /** General characteristics of this component (0..*) */
  property?: Array<ManufacturedItemDefinitionProperty>;
  /** A component that this component contains or is made from (0..*) */
  component?: Array<ManufacturedItemDefinitionComponent>;
}

/**
 * A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient)
 */
export interface ManufacturedItemDefinitionConstituent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The measurable amount of the substance, expressable in different ways (e.g. by mass or volume) (0..*) */
  amount?: Array<Quantity>;
  /** The physical location of the constituent/ingredient within the component (0..*) */
  location?: Array<CodeableConcept>;
  /** The function of this constituent within the component e.g. binder (0..*) */
  function?: Array<CodeableConcept>;
  /** The ingredient that is the constituent of the given component (0..*) */
  hasIngredient?: Array<CodeableReference>;
}
