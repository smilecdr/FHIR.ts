/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { Timing } from './timing';

/**
 * Base StructureDefinition for SupplyDelivery Resource
 */
export class SupplyDelivery {
  resourceType: 'SupplyDelivery';
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
  /** External identifier (0..1) */
  identifier?: Identifier;
  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Array<Reference>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** in-progress | completed | abandoned | entered-in-error (0..1) */
  status?: SupplyDelivery.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Patient for whom the item is supplied (0..1) */
  patient?: Reference;
  /** Category of dispense event (0..1) */
  type?: CodeableConcept;
  /** The item that is delivered or supplied (0..1) */
  suppliedItem?: SupplyDeliverySuppliedItem;
  /** When event occurred (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When event occurred (0..1) */
  occurrencePeriod?: Period;
  /** When event occurred (0..1) */
  occurrenceTiming?: Timing;
  /** Dispenser (0..1) */
  supplier?: Reference;
  /** Where the Supply was sent (0..1) */
  destination?: Reference;
  /** Who collected the Supply (0..*) */
  receiver?: Array<Reference>;
}

export namespace SupplyDelivery {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/supplydelivery-status */
  export type StatusEnum = 'in-progress' | 'completed' | 'abandoned' | 'entered-in-error';
  export const StatusEnum = {
    InProgress: 'in-progress' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    Abandoned: 'abandoned' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * The item that is delivered or supplied
 */
export class SupplyDeliverySuppliedItem {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Amount dispensed (0..1) */
  quantity?: Quantity;
  /** Medication, Substance, or Device supplied (0..1) */
  itemCodeableConcept?: CodeableConcept;
  /** Medication, Substance, or Device supplied (0..1) */
  itemReference?: Reference;
}
