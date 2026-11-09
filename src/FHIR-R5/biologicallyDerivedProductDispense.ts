/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A record of dispensation of a biologically derived product.
 */
export interface BiologicallyDerivedProductDispense {
  resourceType: 'BiologicallyDerivedProductDispense';
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
  /** Business identifier for this dispense (0..*) */
  identifier?: Array<Identifier>;
  /** The order or request that this dispense is fulfilling (0..*) */
  basedOn?: Array<Reference>;
  /** Short description (0..*) */
  partOf?: Array<Reference>;
  /** preparation | in-progress | allocated | issued | unfulfilled | returned | entered-in-error | unknown (1..1) */
  status?: BiologicallyDerivedProductDispense.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Relationship between the donor and intended recipient (0..1) */
  originRelationshipType?: CodeableConcept;
  /** The BiologicallyDerivedProduct that is dispensed (1..1) */
  product: Reference;
  /** The intended recipient of the dispensed product (1..1) */
  patient: Reference;
  /** Indicates the type of matching associated with the dispense (0..1) */
  matchStatus?: CodeableConcept;
  /** Indicates who or what performed an action (0..*) */
  performer?: Array<BiologicallyDerivedProductDispensePerformer>;
  /** Where the dispense occurred (0..1) */
  location?: Reference;
  /** Amount dispensed (0..1) */
  quantity?: Quantity;
  /** When product was selected/matched (0..1) */
  preparedDate?: string;
  /** Id and extensions of the primitive `preparedDate`. */
  _preparedDate?: Element;
  /** When the product was dispatched (0..1) */
  whenHandedOver?: string;
  /** Id and extensions of the primitive `whenHandedOver`. */
  _whenHandedOver?: Element;
  /** Where the product was dispatched to (0..1) */
  destination?: Reference;
  /** Additional notes (0..*) */
  note?: Array<Annotation>;
  /** Specific instructions for use (0..1) */
  usageInstruction?: string;
  /** Id and extensions of the primitive `usageInstruction`. */
  _usageInstruction?: Element;
}

export namespace BiologicallyDerivedProductDispense {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/biologicallyderivedproductdispense-status */
  export type StatusEnum =
    | 'preparation'
    | 'in-progress'
    | 'allocated'
    | 'issued'
    | 'unfulfilled'
    | 'returned'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    Allocated: 'allocated' as StatusEnum,
    Issued: 'issued' as StatusEnum,
    Unfulfilled: 'unfulfilled' as StatusEnum,
    Returned: 'returned' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Indicates who or what performed an action
 */
export interface BiologicallyDerivedProductDispensePerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifies the function of the performer during the dispense (0..1) */
  function?: CodeableConcept;
  /** Who performed the action (1..1) */
  actor: Reference;
}
