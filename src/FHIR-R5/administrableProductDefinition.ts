/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Duration } from './duration';
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
 * A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
 */
export interface AdministrableProductDefinition {
  resourceType: 'AdministrableProductDefinition';
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
  /** An identifier for the administrable product (0..*) */
  identifier?: Array<Identifier>;
  /** draft | active | retired | unknown (1..1) */
  status?: AdministrableProductDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product (0..*) */
  formOf?: Array<Reference>;
  /** The dose form of the final product after necessary reconstitution or processing (0..1) */
  administrableDoseForm?: CodeableConcept;
  /** The presentation type in which this item is given to a patient. e.g. for a spray - 'puff' (0..1) */
  unitOfPresentation?: CodeableConcept;
  /** Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form (0..*) */
  producedFrom?: Array<Reference>;
  /** The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton, or using by incoming references from the Ingredient resource (0..*) */
  ingredient?: Array<CodeableConcept>;
  /** A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product (0..1) */
  device?: Reference;
  /** A general description of the product, when in its final form, suitable for administration e.g. effervescent blue liquid, to be swallowed (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Characteristics e.g. a product's onset of action (0..*) */
  property?: Array<AdministrableProductDefinitionProperty>;
  /** The path by which the product is taken into or makes contact with the body (1..*) */
  routeOfAdministration: Array<AdministrableProductDefinitionRouteOfAdministration>;
}

export namespace AdministrableProductDefinition {
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
 * Characteristics e.g. a product's onset of action
 */
export interface AdministrableProductDefinitionProperty {
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
  /** The status of characteristic e.g. assigned or pending (0..1) */
  status?: CodeableConcept;
}

/**
 * The path by which the product is taken into or makes contact with the body
 */
export interface AdministrableProductDefinitionRouteOfAdministration {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Coded expression for the route (1..1) */
  code: CodeableConcept;
  /** The first dose (dose quantity) administered can be specified for the product (0..1) */
  firstDose?: Quantity;
  /** The maximum single dose that can be administered (0..1) */
  maxSingleDose?: Quantity;
  /** The maximum dose quantity to be administered in any one 24-h period (0..1) */
  maxDosePerDay?: Quantity;
  /** The maximum dose per treatment period that can be administered (0..1) */
  maxDosePerTreatmentPeriod?: Ratio;
  /** The maximum treatment period during which the product can be administered (0..1) */
  maxTreatmentPeriod?: Duration;
  /** A species for which this route applies (0..*) */
  targetSpecies?: Array<AdministrableProductDefinitionTargetSpecies>;
}

/**
 * A species for which this route applies
 */
export interface AdministrableProductDefinitionTargetSpecies {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Coded expression for the species (1..1) */
  code: CodeableConcept;
  /** A species specific time during which consumption of animal product is not appropriate (0..*) */
  withdrawalPeriod?: Array<AdministrableProductDefinitionWithdrawalPeriod>;
}

/**
 * A species specific time during which consumption of animal product is not appropriate
 */
export interface AdministrableProductDefinitionWithdrawalPeriod {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of tissue for which the withdrawal period applies, e.g. meat, milk (1..1) */
  tissue: CodeableConcept;
  /** A value for the time (1..1) */
  value: Quantity;
  /** Extra information about the withdrawal period (0..1) */
  supportingInformation?: string;
  /** Id and extensions of the primitive `supportingInformation`. */
  _supportingInformation?: Element;
}
