/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Medication Resource
 */
export class Medication {
  resourceType: 'Medication';
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Codes that identify this medication (0..1) */
  code?: CodeableConcept;
  /** active | inactive | entered-in-error (0..1) */
  status?: Medication.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** True if a brand (0..1) */
  isBrand?: boolean;
  /** Id and extensions of the primitive `isBrand`. */
  _isBrand?: Element;
  /** True if medication does not require a prescription (0..1) */
  isOverTheCounter?: boolean;
  /** Id and extensions of the primitive `isOverTheCounter`. */
  _isOverTheCounter?: Element;
  /** Manufacturer of the item (0..1) */
  manufacturer?: Reference;
  /** powder | tablets | capsule + (0..1) */
  form?: CodeableConcept;
  /** Active or inactive ingredient (0..*) */
  ingredient?: Array<MedicationIngredient>;
  /** Details about packaged medications (0..1) */
  package?: MedicationPackage;
  /** Picture of the medication (0..*) */
  image?: Array<Attachment>;
}

export namespace Medication {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Active or inactive ingredient
 */
export class MedicationIngredient {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The product contained (1..1) */
  itemCodeableConcept?: CodeableConcept;
  /** The product contained (1..1) */
  itemReference?: Reference;
  /** Active ingredient indicator (0..1) */
  isActive?: boolean;
  /** Id and extensions of the primitive `isActive`. */
  _isActive?: Element;
  /** Quantity of ingredient present (0..1) */
  amount?: Ratio;
}

/**
 * Details about packaged medications
 */
export class MedicationPackage {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** E.g. box, vial, blister-pack (0..1) */
  container?: CodeableConcept;
  /** What is in the package (0..*) */
  content?: Array<MedicationContent>;
  /** Identifies a single production run (0..*) */
  batch?: Array<MedicationBatch>;
}

/**
 * What is in the package
 */
export class MedicationContent {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The item in the package (1..1) */
  itemCodeableConcept?: CodeableConcept;
  /** The item in the package (1..1) */
  itemReference?: Reference;
  /** Quantity present in the package (0..1) */
  amount?: Quantity;
}

/**
 * Identifies a single production run
 */
export class MedicationBatch {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier assigned to batch (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;
  /** When batch will expire (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;
}
