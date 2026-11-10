/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export interface PaymentReconciliation {
  resourceType: 'PaymentReconciliation';
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
  /** Business Identifier for a payment reconciliation (0..*) */
  identifier?: Array<Identifier>;
  /** Category of payment (1..1) */
  type: CodeableConcept;
  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: PaymentReconciliation.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Workflow originating payment (0..1) */
  kind?: CodeableConcept;
  /** Period covered (0..1) */
  period?: Period;
  /** Creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Who entered the payment (0..1) */
  enterer?: Reference;
  /** Nature of the source (0..1) */
  issuerType?: CodeableConcept;
  /** Party generating payment (0..1) */
  paymentIssuer?: Reference;
  /** Reference to requesting resource (0..1) */
  request?: Reference;
  /** Responsible practitioner (0..1) */
  requestor?: Reference;
  /** queued | complete | error | partial (0..1) */
  outcome?: PaymentReconciliation.OutcomeEnum;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;
  /** Disposition message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** When payment issued (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Where payment collected (0..1) */
  location?: Reference;
  /** Payment instrument (0..1) */
  method?: CodeableConcept;
  /** Type of card (0..1) */
  cardBrand?: string;
  /** Id and extensions of the primitive `cardBrand`. */
  _cardBrand?: Element;
  /** Digits for verification (0..1) */
  accountNumber?: string;
  /** Id and extensions of the primitive `accountNumber`. */
  _accountNumber?: Element;
  /** Expiration year-month (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;
  /** Processor name (0..1) */
  processor?: string;
  /** Id and extensions of the primitive `processor`. */
  _processor?: Element;
  /** Check number or payment reference (0..1) */
  referenceNumber?: string;
  /** Id and extensions of the primitive `referenceNumber`. */
  _referenceNumber?: Element;
  /** Authorization number (0..1) */
  authorization?: string;
  /** Id and extensions of the primitive `authorization`. */
  _authorization?: Element;
  /** Amount offered by the issuer (0..1) */
  tenderedAmount?: Money;
  /** Amount returned by the receiver (0..1) */
  returnedAmount?: Money;
  /** Total amount of Payment (1..1) */
  amount: Money;
  /** Business identifier for the payment (0..1) */
  paymentIdentifier?: Identifier;
  /** Settlement particulars (0..*) */
  allocation?: Array<PaymentReconciliationAllocation>;
  /** Printed form identifier (0..1) */
  formCode?: CodeableConcept;
  /** Note concerning processing (0..*) */
  processNote?: Array<PaymentReconciliationProcessNote>;
}

export namespace PaymentReconciliation {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/payment-outcome */
  export type OutcomeEnum = 'queued' | 'complete' | 'error' | 'partial';
  export const OutcomeEnum = {
    Queued: 'queued' as OutcomeEnum,
    Complete: 'complete' as OutcomeEnum,
    Error: 'error' as OutcomeEnum,
    Partial: 'partial' as OutcomeEnum,
  };
}

/**
 * Settlement particulars
 */
export interface PaymentReconciliationAllocation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier of the payment detail (0..1) */
  identifier?: Identifier;
  /** Business identifier of the prior payment detail (0..1) */
  predecessor?: Identifier;
  /** Subject of the payment (0..1) */
  target?: Reference;
  /** Sub-element of the subject (0..1) */
  targetItemString?: string;
  /** Id and extensions of the primitive `targetItemString`. */
  _targetItemString?: Element;
  /** Sub-element of the subject (0..1) */
  targetItemIdentifier?: Identifier;
  /** Sub-element of the subject (0..1) */
  targetItemPositiveInt?: number;
  /** Id and extensions of the primitive `targetItemPositiveInt`. */
  _targetItemPositiveInt?: Element;
  /** Applied-to encounter (0..1) */
  encounter?: Reference;
  /** Applied-to account (0..1) */
  account?: Reference;
  /** Category of payment (0..1) */
  type?: CodeableConcept;
  /** Submitter of the request (0..1) */
  submitter?: Reference;
  /** Response committing to a payment (0..1) */
  response?: Reference;
  /** Date of commitment to pay (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Contact for the response (0..1) */
  responsible?: Reference;
  /** Recipient of the payment (0..1) */
  payee?: Reference;
  /** Amount allocated to this payable (0..1) */
  amount?: Money;
}

/**
 * Note concerning processing
 */
export interface PaymentReconciliationProcessNote {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** display | print | printoper (0..1) */
  type?: PaymentReconciliationProcessNote.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Note explanatory text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
}

export namespace PaymentReconciliationProcessNote {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/note-type */
  export type TypeEnum = 'display' | 'print' | 'printoper';
  export const TypeEnum = {
    Display: 'display' as TypeEnum,
    Print: 'print' as TypeEnum,
    Printoper: 'printoper' as TypeEnum,
  };
}
