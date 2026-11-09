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
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export interface Medication {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier for this medication (0..*) */
  identifier?: Array<Identifier>;
  /** Codes that identify this medication (0..1) */
  code?: CodeableConcept;
  /** active | inactive | entered-in-error (0..1) */
  status?: Medication.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Organization that has authorization to market medication (0..1) */
  marketingAuthorizationHolder?: Reference;
  /** powder | tablets | capsule + (0..1) */
  doseForm?: CodeableConcept;
  /** When the specified product code does not infer a package size, this is the specific amount of drug in the product (0..1) */
  totalVolume?: Quantity;
  /** Active or inactive ingredient (0..*) */
  ingredient?: Array<MedicationIngredient>;
  /** Details about packaged medications (0..1) */
  batch?: MedicationBatch;
  /** Knowledge about this medication (0..1) */
  definition?: Reference;
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
export interface MedicationIngredient {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The ingredient (substance or medication) that the ingredient.strength relates to (1..1) */
  item: CodeableReference;
  /** Active ingredient indicator (0..1) */
  isActive?: boolean;
  /** Id and extensions of the primitive `isActive`. */
  _isActive?: Element;
  /** Quantity of ingredient present (0..1) */
  strengthRatio?: Ratio;
  /** Quantity of ingredient present (0..1) */
  strengthCodeableConcept?: CodeableConcept;
  /** Quantity of ingredient present (0..1) */
  strengthQuantity?: Quantity;
}

/**
 * Details about packaged medications
 */
export interface MedicationBatch {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
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
