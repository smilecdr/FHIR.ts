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
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';

/**
 * A record of a non-patient specific request for a medication, substance, device, certain types of biologically derived product, and nutrition product used in the healthcare setting.
 */
export interface SupplyRequest {
  resourceType: 'SupplyRequest';
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
  /** Business Identifier for SupplyRequest (0..*) */
  identifier?: Array<Identifier>;
  /** draft | active | suspended + (0..1) */
  status?: SupplyRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** What other request is fulfilled by this supply request (0..*) */
  basedOn?: Array<Reference>;
  /** The kind of supply (central, non-stock, etc.) (0..1) */
  category?: CodeableConcept;
  /** routine | urgent | asap | stat (0..1) */
  priority?: SupplyRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** The patient for who the supply request is for (0..1) */
  deliverFor?: Reference;
  /** Medication, Substance, or Device requested to be supplied (1..1) */
  item: CodeableReference;
  /** The requested amount of the item indicated (1..1) */
  quantity: Quantity;
  /** Ordered item details (0..*) */
  parameter?: Array<SupplyRequestParameter>;
  /** When the request should be fulfilled (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When the request should be fulfilled (0..1) */
  occurrencePeriod?: Period;
  /** When the request should be fulfilled (0..1) */
  occurrenceTiming?: Timing;
  /** When the request was made (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Individual making the request (0..1) */
  requester?: Reference;
  /** Who is intended to fulfill the request (0..*) */
  supplier?: Array<Reference>;
  /** The reason why the supply item was requested (0..*) */
  reason?: Array<CodeableReference>;
  /** The origin of the supply (0..1) */
  deliverFrom?: Reference;
  /** The destination of the supply (0..1) */
  deliverTo?: Reference;
}

export namespace SupplyRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/supplyrequest-status */
  export type StatusEnum =
    'draft' | 'active' | 'suspended' | 'cancelled' | 'completed' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Suspended: 'suspended' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-priority */
  export type PriorityEnum = 'routine' | 'urgent' | 'asap' | 'stat';
  export const PriorityEnum = {
    Routine: 'routine' as PriorityEnum,
    Urgent: 'urgent' as PriorityEnum,
    Asap: 'asap' as PriorityEnum,
    Stat: 'stat' as PriorityEnum,
  };
}

/**
 * Ordered item details
 */
export interface SupplyRequestParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Item detail (0..1) */
  code?: CodeableConcept;
  /** Value of detail (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value of detail (0..1) */
  valueQuantity?: Quantity;
  /** Value of detail (0..1) */
  valueRange?: Range;
  /** Value of detail (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
}
