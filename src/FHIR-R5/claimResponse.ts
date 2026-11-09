/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface ClaimResponse {
  resourceType: 'ClaimResponse';
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
  /** Business Identifier for a claim response (0..*) */
  identifier?: Array<Identifier>;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: ClaimResponse.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** More granular claim type (1..1) */
  type: CodeableConcept;
  /** More granular claim type (0..1) */
  subType?: CodeableConcept;
  /** claim | preauthorization | predetermination (1..1) */
  use?: ClaimResponse.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** The recipient of the products and services (1..1) */
  patient: Reference;
  /** Response creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Party responsible for reimbursement (0..1) */
  insurer?: Reference;
  /** Party responsible for the claim (0..1) */
  requestor?: Reference;
  /** Id of resource triggering adjudication (0..1) */
  request?: Reference;
  /** queued | complete | error | partial (1..1) */
  outcome?: ClaimResponse.OutcomeEnum;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;
  /** Result of the adjudication (0..1) */
  decision?: CodeableConcept;
  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** Preauthorization reference (0..1) */
  preAuthRef?: string;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Element;
  /** Preauthorization reference effective period (0..1) */
  preAuthPeriod?: Period;
  /** Event information (0..*) */
  event?: Array<ClaimResponseEvent>;
  /** Party to be paid any benefits payable (0..1) */
  payeeType?: CodeableConcept;
  /** Encounters associated with the listed treatments (0..*) */
  encounter?: Array<Reference>;
  /** Package billing code (0..1) */
  diagnosisRelatedGroup?: CodeableConcept;
  /** Adjudication for claim line items (0..*) */
  item?: Array<ClaimResponseItem>;
  /** Insurer added line items (0..*) */
  addItem?: Array<ClaimResponseAddItem>;
  /** Header-level adjudication (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
  /** Adjudication totals (0..*) */
  total?: Array<ClaimResponseTotal>;
  /** Payment Details (0..1) */
  payment?: ClaimResponsePayment;
  /** Funds reserved status (0..1) */
  fundsReserve?: CodeableConcept;
  /** Printed form identifier (0..1) */
  formCode?: CodeableConcept;
  /** Printed reference or actual form (0..1) */
  form?: Attachment;
  /** Note concerning adjudication (0..*) */
  processNote?: Array<ClaimResponseProcessNote>;
  /** Request for additional information (0..*) */
  communicationRequest?: Array<Reference>;
  /** Patient insurance information (0..*) */
  insurance?: Array<ClaimResponseInsurance>;
  /** Processing errors (0..*) */
  error?: Array<ClaimResponseError>;
}

export namespace ClaimResponse {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/claim-use */
  export type UseEnum = 'claim' | 'preauthorization' | 'predetermination';
  export const UseEnum = {
    Claim: 'claim' as UseEnum,
    Preauthorization: 'preauthorization' as UseEnum,
    Predetermination: 'predetermination' as UseEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/claim-outcome */
  export type OutcomeEnum = 'queued' | 'complete' | 'error' | 'partial';
  export const OutcomeEnum = {
    Queued: 'queued' as OutcomeEnum,
    Complete: 'complete' as OutcomeEnum,
    Error: 'error' as OutcomeEnum,
    Partial: 'partial' as OutcomeEnum,
  };
}

/**
 * Event information
 */
export interface ClaimResponseEvent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Specific event (1..1) */
  type: CodeableConcept;
  /** Occurance date or period (1..1) */
  whenDateTime?: string;
  /** Id and extensions of the primitive `whenDateTime`. */
  _whenDateTime?: Element;
  /** Occurance date or period (1..1) */
  whenPeriod?: Period;
}

/**
 * Adjudication for claim line items
 */
export interface ClaimResponseItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Claim item instance identifier (1..1) */
  itemSequence?: number;
  /** Id and extensions of the primitive `itemSequence`. */
  _itemSequence?: Element;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Adjudication results (0..1) */
  reviewOutcome?: ClaimResponseReviewOutcome;
  /** Adjudication details (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
  /** Adjudication for claim details (0..*) */
  detail?: Array<ClaimResponseDetail>;
}

/**
 * Adjudication results
 */
export interface ClaimResponseReviewOutcome {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Result of the adjudication (0..1) */
  decision?: CodeableConcept;
  /** Reason for result of the adjudication (0..*) */
  reason?: Array<CodeableConcept>;
  /** Preauthorization reference (0..1) */
  preAuthRef?: string;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Element;
  /** Preauthorization reference effective period (0..1) */
  preAuthPeriod?: Period;
}

/**
 * Adjudication details
 */
export interface ClaimResponseAdjudication {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of adjudication information (1..1) */
  category: CodeableConcept;
  /** Explanation of adjudication outcome (0..1) */
  reason?: CodeableConcept;
  /** Monetary amount (0..1) */
  amount?: Money;
  /** Non-monetary value (0..1) */
  quantity?: Quantity;
}

/**
 * Adjudication for claim details
 */
export interface ClaimResponseDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Claim detail instance identifier (1..1) */
  detailSequence?: number;
  /** Id and extensions of the primitive `detailSequence`. */
  _detailSequence?: Element;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Detail level adjudication results (0..1) */
  reviewOutcome?: ClaimResponseReviewOutcome;
  /** Detail level adjudication details (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
  /** Adjudication for claim sub-details (0..*) */
  subDetail?: Array<ClaimResponseSubDetail>;
}

/**
 * Adjudication for claim sub-details
 */
export interface ClaimResponseSubDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Claim sub-detail instance identifier (1..1) */
  subDetailSequence?: number;
  /** Id and extensions of the primitive `subDetailSequence`. */
  _subDetailSequence?: Element;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Subdetail level adjudication results (0..1) */
  reviewOutcome?: ClaimResponseReviewOutcome;
  /** Subdetail level adjudication details (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
}

/**
 * Insurer added line items
 */
export interface ClaimResponseAddItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Item sequence number (0..*) */
  itemSequence?: Array<number>;
  /** Id and extensions of the primitive `itemSequence`. */
  _itemSequence?: Array<Element | null>;
  /** Detail sequence number (0..*) */
  detailSequence?: Array<number>;
  /** Id and extensions of the primitive `detailSequence`. */
  _detailSequence?: Array<Element | null>;
  /** Subdetail sequence number (0..*) */
  subdetailSequence?: Array<number>;
  /** Id and extensions of the primitive `subdetailSequence`. */
  _subdetailSequence?: Array<Element | null>;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** Authorized providers (0..*) */
  provider?: Array<Reference>;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;
  /** End of a range of codes (0..1) */
  productOrServiceEnd?: CodeableConcept;
  /** Request or Referral for Service (0..*) */
  request?: Array<Reference>;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Program the product or service is provided under (0..*) */
  programCode?: Array<CodeableConcept>;
  /** Date or dates of service or product delivery (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Date or dates of service or product delivery (0..1) */
  servicedPeriod?: Period;
  /** Place of service or where product was supplied (0..1) */
  locationCodeableConcept?: CodeableConcept;
  /** Place of service or where product was supplied (0..1) */
  locationAddress?: Address;
  /** Place of service or where product was supplied (0..1) */
  locationReference?: Reference;
  /** Count of products or services (0..1) */
  quantity?: Quantity;
  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;
  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Total tax (0..1) */
  tax?: Money;
  /** Total item cost (0..1) */
  net?: Money;
  /** Anatomical location (0..*) */
  bodySite?: Array<ClaimResponseBodySite>;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Added items adjudication results (0..1) */
  reviewOutcome?: ClaimResponseReviewOutcome;
  /** Added items adjudication (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
  /** Insurer added line details (0..*) */
  detail?: Array<ClaimResponseDetail1>;
}

/**
 * Anatomical location
 */
export interface ClaimResponseBodySite {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Location (1..*) */
  site: Array<CodeableReference>;
  /** Sub-location (0..*) */
  subSite?: Array<CodeableConcept>;
}

/**
 * Insurer added line details
 */
export interface ClaimResponseDetail1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;
  /** End of a range of codes (0..1) */
  productOrServiceEnd?: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Count of products or services (0..1) */
  quantity?: Quantity;
  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;
  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Total tax (0..1) */
  tax?: Money;
  /** Total item cost (0..1) */
  net?: Money;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Added items detail level adjudication results (0..1) */
  reviewOutcome?: ClaimResponseReviewOutcome;
  /** Added items detail adjudication (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
  /** Insurer added line items (0..*) */
  subDetail?: Array<ClaimResponseSubDetail1>;
}

/**
 * Insurer added line items
 */
export interface ClaimResponseSubDetail1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;
  /** End of a range of codes (0..1) */
  productOrServiceEnd?: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Count of products or services (0..1) */
  quantity?: Quantity;
  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;
  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Total tax (0..1) */
  tax?: Money;
  /** Total item cost (0..1) */
  net?: Money;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Added items subdetail level adjudication results (0..1) */
  reviewOutcome?: ClaimResponseReviewOutcome;
  /** Added items subdetail adjudication (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
}

/**
 * Adjudication totals
 */
export interface ClaimResponseTotal {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of adjudication information (1..1) */
  category: CodeableConcept;
  /** Financial total for the category (1..1) */
  amount: Money;
}

/**
 * Payment Details
 */
export interface ClaimResponsePayment {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Partial or complete payment (1..1) */
  type: CodeableConcept;
  /** Payment adjustment for non-claim issues (0..1) */
  adjustment?: Money;
  /** Explanation for the adjustment (0..1) */
  adjustmentReason?: CodeableConcept;
  /** Expected date of payment (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Payable amount after adjustment (1..1) */
  amount: Money;
  /** Business identifier for the payment (0..1) */
  identifier?: Identifier;
}

/**
 * Note concerning adjudication
 */
export interface ClaimResponseProcessNote {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Note instance identifier (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;
  /** Note purpose (0..1) */
  type?: CodeableConcept;
  /** Note explanatory text (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Language of the text (0..1) */
  language?: CodeableConcept;
}

/**
 * Patient insurance information
 */
export interface ClaimResponseInsurance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Insurance instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Coverage to be used for adjudication (1..1) */
  focal?: boolean;
  /** Id and extensions of the primitive `focal`. */
  _focal?: Element;
  /** Insurance information (1..1) */
  coverage: Reference;
  /** Additional provider contract number (0..1) */
  businessArrangement?: string;
  /** Id and extensions of the primitive `businessArrangement`. */
  _businessArrangement?: Element;
  /** Adjudication results (0..1) */
  claimResponse?: Reference;
}

/**
 * Processing errors
 */
export interface ClaimResponseError {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Item sequence number (0..1) */
  itemSequence?: number;
  /** Id and extensions of the primitive `itemSequence`. */
  _itemSequence?: Element;
  /** Detail sequence number (0..1) */
  detailSequence?: number;
  /** Id and extensions of the primitive `detailSequence`. */
  _detailSequence?: Element;
  /** Subdetail sequence number (0..1) */
  subDetailSequence?: number;
  /** Id and extensions of the primitive `subDetailSequence`. */
  _subDetailSequence?: Element;
  /** Error code detailing processing issues (1..1) */
  code: CodeableConcept;
  /** FHIRPath of element(s) related to issue (0..*) */
  expression?: Array<string>;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Array<Element | null>;
}
