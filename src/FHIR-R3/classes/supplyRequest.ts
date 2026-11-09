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
 * Base StructureDefinition for SupplyRequest Resource
 */
export class SupplyRequest {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique identifier (0..1) */
  identifier?: Identifier;
  /** draft | active | suspended + (0..1) */
  status?: SupplyRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The kind of supply (central, non-stock, etc.) (0..1) */
  category?: CodeableConcept;
  /** routine | urgent | asap | stat (0..1) */
  priority?: SupplyRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** The item being requested (0..1) */
  orderedItem?: SupplyRequestOrderedItem;
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
  /** Who/what is requesting service (0..1) */
  requester?: SupplyRequestRequester;
  /** Who is intended to fulfill the request (0..*) */
  supplier?: Array<Reference>;
  /** Why the supply item was requested (0..1) */
  reasonCodeableConcept?: CodeableConcept;
  /** Why the supply item was requested (0..1) */
  reasonReference?: Reference;
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
 * The item being requested
 */
export class SupplyRequestOrderedItem {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The requested amount of the item indicated (1..1) */
  quantity: Quantity;
  /** Medication, Substance, or Device requested to be supplied (0..1) */
  itemCodeableConcept?: CodeableConcept;
  /** Medication, Substance, or Device requested to be supplied (0..1) */
  itemReference?: Reference;
}

/**
 * Who/what is requesting service
 */
export class SupplyRequestRequester {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Individual making the request (1..1) */
  agent: Reference;
  /** Organization agent is acting for (0..1) */
  onBehalfOf?: Reference;
}
