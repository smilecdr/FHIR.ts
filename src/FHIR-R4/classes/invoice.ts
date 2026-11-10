/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export class Invoice {
  resourceType: 'Invoice';
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
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business Identifier for item (0..*) */
  identifier?: Array<Identifier>;
  /** draft | issued | balanced | cancelled | entered-in-error (1..1) */
  status?: Invoice.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for cancellation of this Invoice (0..1) */
  cancelledReason?: string;
  /** Id and extensions of the primitive `cancelledReason`. */
  _cancelledReason?: Element;
  /** Type of Invoice (0..1) */
  type?: CodeableConcept;
  /** Recipient(s) of goods and services (0..1) */
  subject?: Reference;
  /** Recipient of this invoice (0..1) */
  recipient?: Reference;
  /** Invoice date / posting date (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Participant in creation of this Invoice (0..*) */
  participant?: Array<InvoiceParticipant>;
  /** Issuing Organization of Invoice (0..1) */
  issuer?: Reference;
  /** Account that is being balanced (0..1) */
  account?: Reference;
  /** Line items of this Invoice (0..*) */
  lineItem?: Array<InvoiceLineItem>;
  /** Components of Invoice total (0..*) */
  totalPriceComponent?: Array<InvoicePriceComponent>;
  /** Net total of this Invoice (0..1) */
  totalNet?: Money;
  /** Gross total of this Invoice (0..1) */
  totalGross?: Money;
  /** Payment details (0..1) */
  paymentTerms?: string;
  /** Id and extensions of the primitive `paymentTerms`. */
  _paymentTerms?: Element;
  /** Comments made about the invoice (0..*) */
  note?: Array<Annotation>;
}

export namespace Invoice {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/invoice-status */
  export type StatusEnum = 'draft' | 'issued' | 'balanced' | 'cancelled' | 'entered-in-error';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Issued: 'issued' as StatusEnum,
    Balanced: 'balanced' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Participant in creation of this Invoice
 */
export class InvoiceParticipant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of involvement in creation of this Invoice (0..1) */
  role?: CodeableConcept;
  /** Individual who was involved (1..1) */
  actor: Reference;
}

/**
 * Line items of this Invoice
 */
export class InvoiceLineItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Sequence number of line item (0..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Reference to ChargeItem containing details of this line item or an inline billing code (1..1) */
  chargeItemReference?: Reference;
  /** Reference to ChargeItem containing details of this line item or an inline billing code (1..1) */
  chargeItemCodeableConcept?: CodeableConcept;
  /** Components of total line item price (0..*) */
  priceComponent?: Array<InvoicePriceComponent>;
}

/**
 * Components of total line item price
 */
export class InvoicePriceComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** base | surcharge | deduction | discount | tax | informational (1..1) */
  type?: InvoicePriceComponent.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Code identifying the specific component (0..1) */
  code?: CodeableConcept;
  /** Factor used for calculating this component (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Monetary amount associated with this component (0..1) */
  amount?: Money;
}

export namespace InvoicePriceComponent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/invoice-priceComponentType */
  export type TypeEnum = 'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational';
  export const TypeEnum = {
    Base: 'base' as TypeEnum,
    Surcharge: 'surcharge' as TypeEnum,
    Deduction: 'deduction' as TypeEnum,
    Discount: 'discount' as TypeEnum,
    Tax: 'tax' as TypeEnum,
    Informational: 'informational' as TypeEnum,
  };
}
