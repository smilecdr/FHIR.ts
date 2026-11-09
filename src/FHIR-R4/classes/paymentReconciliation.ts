/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
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
import type { Resource } from './resourceList';

/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export class PaymentReconciliation {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business Identifier for a payment reconciliation (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: PaymentReconciliation.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Period covered (0..1) */
  period?: Period;
  /** Creation date (1..1) */
  created?: Date | string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
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
  paymentDate?: Date | string;
  /** Id and extensions of the primitive `paymentDate`. */
  _paymentDate?: Element;
  /** Total amount of Payment (1..1) */
  paymentAmount: Money;
  /** Business identifier for the payment (0..1) */
  paymentIdentifier?: Identifier;
  /** Settlement particulars (0..*) */
  detail?: Array<PaymentReconciliationDetail>;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/remittance-outcome */
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
export class PaymentReconciliationDetail {
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
  /** Category of payment (1..1) */
  type: CodeableConcept;
  /** Request giving rise to the payment (0..1) */
  request?: Reference;
  /** Submitter of the request (0..1) */
  submitter?: Reference;
  /** Response committing to a payment (0..1) */
  response?: Reference;
  /** Date of commitment to pay (0..1) */
  date?: Date | string;
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
export class PaymentReconciliationProcessNote {
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
