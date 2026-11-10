/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A report of inventory or stock items.
 */
export interface InventoryReport {
  resourceType: 'InventoryReport';
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
  /** Business identifier for the report (0..*) */
  identifier?: Array<Identifier>;
  /** draft | requested | active | entered-in-error (1..1) */
  status?: InventoryReport.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** snapshot | difference (1..1) */
  countType?: InventoryReport.CountTypeEnum;
  /** Id and extensions of the primitive `countType`. */
  _countType?: Element;
  /** addition | subtraction (0..1) */
  operationType?: CodeableConcept;
  /** The reason for this count - regular count, ad-hoc count, new arrivals, etc (0..1) */
  operationTypeReason?: CodeableConcept;
  /** When the report has been submitted (1..1) */
  reportedDateTime?: string;
  /** Id and extensions of the primitive `reportedDateTime`. */
  _reportedDateTime?: Element;
  /** Who submits the report (0..1) */
  reporter?: Reference;
  /** The period the report refers to (0..1) */
  reportingPeriod?: Period;
  /** An inventory listing section (grouped by any of the attributes) (0..*) */
  inventoryListing?: Array<InventoryReportInventoryListing>;
  /** A note associated with the InventoryReport (0..*) */
  note?: Array<Annotation>;
}

export namespace InventoryReport {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/inventoryreport-status */
  export type StatusEnum = 'draft' | 'requested' | 'active' | 'entered-in-error';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Requested: 'requested' as StatusEnum,
    Active: 'active' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/inventoryreport-counttype */
  export type CountTypeEnum = 'snapshot' | 'difference';
  export const CountTypeEnum = {
    Snapshot: 'snapshot' as CountTypeEnum,
    Difference: 'difference' as CountTypeEnum,
  };
}

/**
 * An inventory listing section (grouped by any of the attributes)
 */
export interface InventoryReportInventoryListing {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Location of the inventory items (0..1) */
  location?: Reference;
  /** The status of the items that are being reported (0..1) */
  itemStatus?: CodeableConcept;
  /** The date and time when the items were counted (0..1) */
  countingDateTime?: string;
  /** Id and extensions of the primitive `countingDateTime`. */
  _countingDateTime?: Element;
  /** The item or items in this listing (0..*) */
  item?: Array<InventoryReportItem>;
}

/**
 * The item or items in this listing
 */
export interface InventoryReportItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The inventory category or classification of the items being reported (0..1) */
  category?: CodeableConcept;
  /** The quantity of the item or items being reported (1..1) */
  quantity: Quantity;
  /** The code or reference to the item type (1..1) */
  item: CodeableReference;
}
