/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Coding } from './coding';
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
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export interface ExplanationOfBenefit {
  resourceType: 'ExplanationOfBenefit';
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
  /** Business Identifier for the resource (0..*) */
  identifier?: Array<Identifier>;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: ExplanationOfBenefit.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Category or discipline (1..1) */
  type: CodeableConcept;
  /** More granular claim type (0..1) */
  subType?: CodeableConcept;
  /** claim | preauthorization | predetermination (1..1) */
  use?: ExplanationOfBenefit.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** The recipient of the products and services (1..1) */
  patient: Reference;
  /** Relevant time frame for the claim (0..1) */
  billablePeriod?: Period;
  /** Response creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Author of the claim (0..1) */
  enterer?: Reference;
  /** Party responsible for reimbursement (0..1) */
  insurer?: Reference;
  /** Party responsible for the claim (0..1) */
  provider?: Reference;
  /** Desired processing urgency (0..1) */
  priority?: CodeableConcept;
  /** For whom to reserve funds (0..1) */
  fundsReserveRequested?: CodeableConcept;
  /** Funds reserved status (0..1) */
  fundsReserve?: CodeableConcept;
  /** Prior or corollary claims (0..*) */
  related?: Array<ExplanationOfBenefitRelated>;
  /** Prescription authorizing services or products (0..1) */
  prescription?: Reference;
  /** Original prescription if superceded by fulfiller (0..1) */
  originalPrescription?: Reference;
  /** Event information (0..*) */
  event?: Array<ExplanationOfBenefitEvent>;
  /** Recipient of benefits payable (0..1) */
  payee?: ExplanationOfBenefitPayee;
  /** Treatment Referral (0..1) */
  referral?: Reference;
  /** Encounters associated with the listed treatments (0..*) */
  encounter?: Array<Reference>;
  /** Servicing Facility (0..1) */
  facility?: Reference;
  /** Claim reference (0..1) */
  claim?: Reference;
  /** Claim response reference (0..1) */
  claimResponse?: Reference;
  /** queued | complete | error | partial (1..1) */
  outcome?: ExplanationOfBenefit.OutcomeEnum;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;
  /** Result of the adjudication (0..1) */
  decision?: CodeableConcept;
  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** Preauthorization reference (0..*) */
  preAuthRef?: Array<string>;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Array<Element | null>;
  /** Preauthorization in-effect period (0..*) */
  preAuthRefPeriod?: Array<Period>;
  /** Package billing code (0..1) */
  diagnosisRelatedGroup?: CodeableConcept;
  /** Care Team members (0..*) */
  careTeam?: Array<ExplanationOfBenefitCareTeam>;
  /** Supporting information (0..*) */
  supportingInfo?: Array<ExplanationOfBenefitSupportingInfo>;
  /** Pertinent diagnosis information (0..*) */
  diagnosis?: Array<ExplanationOfBenefitDiagnosis>;
  /** Clinical procedures performed (0..*) */
  procedure?: Array<ExplanationOfBenefitProcedure>;
  /** Precedence (primary, secondary, etc.) (0..1) */
  precedence?: number;
  /** Id and extensions of the primitive `precedence`. */
  _precedence?: Element;
  /** Patient insurance information (0..*) */
  insurance?: Array<ExplanationOfBenefitInsurance>;
  /** Details of the event (0..1) */
  accident?: ExplanationOfBenefitAccident;
  /** Paid by the patient (0..1) */
  patientPaid?: Money;
  /** Product or service provided (0..*) */
  item?: Array<ExplanationOfBenefitItem>;
  /** Insurer added line items (0..*) */
  addItem?: Array<ExplanationOfBenefitAddItem>;
  /** Header-level adjudication (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
  /** Adjudication totals (0..*) */
  total?: Array<ExplanationOfBenefitTotal>;
  /** Payment Details (0..1) */
  payment?: ExplanationOfBenefitPayment;
  /** Printed form identifier (0..1) */
  formCode?: CodeableConcept;
  /** Printed reference or actual form (0..1) */
  form?: Attachment;
  /** Note concerning adjudication (0..*) */
  processNote?: Array<ExplanationOfBenefitProcessNote>;
  /** When the benefits are applicable (0..1) */
  benefitPeriod?: Period;
  /** Balance by Benefit Category (0..*) */
  benefitBalance?: Array<ExplanationOfBenefitBenefitBalance>;
}

export namespace ExplanationOfBenefit {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/explanationofbenefit-status */
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
 * Prior or corollary claims
 */
export interface ExplanationOfBenefitRelated {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to the related claim (0..1) */
  claim?: Reference;
  /** How the reference claim is related (0..1) */
  relationship?: CodeableConcept;
  /** File or case reference (0..1) */
  reference?: Identifier;
}

/**
 * Event information
 */
export interface ExplanationOfBenefitEvent {
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
 * Recipient of benefits payable
 */
export interface ExplanationOfBenefitPayee {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Category of recipient (0..1) */
  type?: CodeableConcept;
  /** Recipient reference (0..1) */
  party?: Reference;
}

/**
 * Care Team members
 */
export interface ExplanationOfBenefitCareTeam {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Order of care team (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Practitioner or organization (1..1) */
  provider: Reference;
  /** Indicator of the lead practitioner (0..1) */
  responsible?: boolean;
  /** Id and extensions of the primitive `responsible`. */
  _responsible?: Element;
  /** Function within the team (0..1) */
  role?: CodeableConcept;
  /** Practitioner or provider specialization (0..1) */
  specialty?: CodeableConcept;
}

/**
 * Supporting information
 */
export interface ExplanationOfBenefitSupportingInfo {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Information instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Classification of the supplied information (1..1) */
  category: CodeableConcept;
  /** Type of information (0..1) */
  code?: CodeableConcept;
  /** When it occurred (0..1) */
  timingDate?: string;
  /** Id and extensions of the primitive `timingDate`. */
  _timingDate?: Element;
  /** When it occurred (0..1) */
  timingPeriod?: Period;
  /** Data to be provided (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Data to be provided (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Data to be provided (0..1) */
  valueQuantity?: Quantity;
  /** Data to be provided (0..1) */
  valueAttachment?: Attachment;
  /** Data to be provided (0..1) */
  valueReference?: Reference;
  /** Data to be provided (0..1) */
  valueIdentifier?: Identifier;
  /** Explanation for the information (0..1) */
  reason?: Coding;
}

/**
 * Pertinent diagnosis information
 */
export interface ExplanationOfBenefitDiagnosis {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Diagnosis instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Nature of illness or problem (1..1) */
  diagnosisCodeableConcept?: CodeableConcept;
  /** Nature of illness or problem (1..1) */
  diagnosisReference?: Reference;
  /** Timing or nature of the diagnosis (0..*) */
  type?: Array<CodeableConcept>;
  /** Present on admission (0..1) */
  onAdmission?: CodeableConcept;
}

/**
 * Clinical procedures performed
 */
export interface ExplanationOfBenefitProcedure {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Procedure instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Category of Procedure (0..*) */
  type?: Array<CodeableConcept>;
  /** When the procedure was performed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Specific clinical procedure (1..1) */
  procedureCodeableConcept?: CodeableConcept;
  /** Specific clinical procedure (1..1) */
  procedureReference?: Reference;
  /** Unique device identifier (0..*) */
  udi?: Array<Reference>;
}

/**
 * Patient insurance information
 */
export interface ExplanationOfBenefitInsurance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Coverage to be used for adjudication (1..1) */
  focal?: boolean;
  /** Id and extensions of the primitive `focal`. */
  _focal?: Element;
  /** Insurance information (1..1) */
  coverage: Reference;
  /** Prior authorization reference number (0..*) */
  preAuthRef?: Array<string>;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Array<Element | null>;
}

/**
 * Details of the event
 */
export interface ExplanationOfBenefitAccident {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** When the incident occurred (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The nature of the accident (0..1) */
  type?: CodeableConcept;
  /** Where the event occurred (0..1) */
  locationAddress?: Address;
  /** Where the event occurred (0..1) */
  locationReference?: Reference;
}

/**
 * Product or service provided
 */
export interface ExplanationOfBenefitItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Item instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Applicable care team members (0..*) */
  careTeamSequence?: Array<number>;
  /** Id and extensions of the primitive `careTeamSequence`. */
  _careTeamSequence?: Array<Element | null>;
  /** Applicable diagnoses (0..*) */
  diagnosisSequence?: Array<number>;
  /** Id and extensions of the primitive `diagnosisSequence`. */
  _diagnosisSequence?: Array<Element | null>;
  /** Applicable procedures (0..*) */
  procedureSequence?: Array<number>;
  /** Id and extensions of the primitive `procedureSequence`. */
  _procedureSequence?: Array<Element | null>;
  /** Applicable exception and supporting information (0..*) */
  informationSequence?: Array<number>;
  /** Id and extensions of the primitive `informationSequence`. */
  _informationSequence?: Array<Element | null>;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Benefit classification (0..1) */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;
  /** End of a range of codes (0..1) */
  productOrServiceEnd?: CodeableConcept;
  /** Request or Referral for Service (0..*) */
  request?: Array<Reference>;
  /** Product or service billing modifiers (0..*) */
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
  /** Paid by the patient (0..1) */
  patientPaid?: Money;
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
  /** Unique device identifier (0..*) */
  udi?: Array<Reference>;
  /** Anatomical location (0..*) */
  bodySite?: Array<ExplanationOfBenefitBodySite>;
  /** Encounters associated with the listed treatments (0..*) */
  encounter?: Array<Reference>;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Adjudication results (0..1) */
  reviewOutcome?: ExplanationOfBenefitReviewOutcome;
  /** Adjudication details (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
  /** Additional items (0..*) */
  detail?: Array<ExplanationOfBenefitDetail>;
}

/**
 * Anatomical location
 */
export interface ExplanationOfBenefitBodySite {
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
 * Adjudication results
 */
export interface ExplanationOfBenefitReviewOutcome {
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
export interface ExplanationOfBenefitAdjudication {
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
  /** Non-monitary value (0..1) */
  quantity?: Quantity;
}

/**
 * Additional items
 */
export interface ExplanationOfBenefitDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Product or service provided (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Benefit classification (0..1) */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;
  /** End of a range of codes (0..1) */
  productOrServiceEnd?: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Program the product or service is provided under (0..*) */
  programCode?: Array<CodeableConcept>;
  /** Paid by the patient (0..1) */
  patientPaid?: Money;
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
  /** Unique device identifier (0..*) */
  udi?: Array<Reference>;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Detail level adjudication results (0..1) */
  reviewOutcome?: ExplanationOfBenefitReviewOutcome;
  /** Detail level adjudication details (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
  /** Additional items (0..*) */
  subDetail?: Array<ExplanationOfBenefitSubDetail>;
}

/**
 * Additional items
 */
export interface ExplanationOfBenefitSubDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Product or service provided (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Number for tracking (0..*) */
  traceNumber?: Array<Identifier>;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Benefit classification (0..1) */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;
  /** End of a range of codes (0..1) */
  productOrServiceEnd?: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Program the product or service is provided under (0..*) */
  programCode?: Array<CodeableConcept>;
  /** Paid by the patient (0..1) */
  patientPaid?: Money;
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
  /** Unique device identifier (0..*) */
  udi?: Array<Reference>;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Subdetail level adjudication results (0..1) */
  reviewOutcome?: ExplanationOfBenefitReviewOutcome;
  /** Subdetail level adjudication details (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
}

/**
 * Insurer added line items
 */
export interface ExplanationOfBenefitAddItem {
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
  subDetailSequence?: Array<number>;
  /** Id and extensions of the primitive `subDetailSequence`. */
  _subDetailSequence?: Array<Element | null>;
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
  /** Paid by the patient (0..1) */
  patientPaid?: Money;
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
  bodySite?: Array<ExplanationOfBenefitBodySite1>;
  /** Applicable note numbers (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Additem level adjudication results (0..1) */
  reviewOutcome?: ExplanationOfBenefitReviewOutcome;
  /** Added items adjudication (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
  /** Insurer added line items (0..*) */
  detail?: Array<ExplanationOfBenefitDetail1>;
}

/**
 * Anatomical location
 */
export interface ExplanationOfBenefitBodySite1 {
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
 * Insurer added line items
 */
export interface ExplanationOfBenefitDetail1 {
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
  /** Paid by the patient (0..1) */
  patientPaid?: Money;
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
  /** Additem detail level adjudication results (0..1) */
  reviewOutcome?: ExplanationOfBenefitReviewOutcome;
  /** Added items adjudication (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
  /** Insurer added line items (0..*) */
  subDetail?: Array<ExplanationOfBenefitSubDetail1>;
}

/**
 * Insurer added line items
 */
export interface ExplanationOfBenefitSubDetail1 {
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
  /** Paid by the patient (0..1) */
  patientPaid?: Money;
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
  /** Additem subdetail level adjudication results (0..1) */
  reviewOutcome?: ExplanationOfBenefitReviewOutcome;
  /** Added items adjudication (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
}

/**
 * Adjudication totals
 */
export interface ExplanationOfBenefitTotal {
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
export interface ExplanationOfBenefitPayment {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Partial or complete payment (0..1) */
  type?: CodeableConcept;
  /** Payment adjustment for non-claim issues (0..1) */
  adjustment?: Money;
  /** Explanation for the variance (0..1) */
  adjustmentReason?: CodeableConcept;
  /** Expected date of payment (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Payable amount after adjustment (0..1) */
  amount?: Money;
  /** Business identifier for the payment (0..1) */
  identifier?: Identifier;
}

/**
 * Note concerning adjudication
 */
export interface ExplanationOfBenefitProcessNote {
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
  /** Note explanatory text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Language of the text (0..1) */
  language?: CodeableConcept;
}

/**
 * Balance by Benefit Category
 */
export interface ExplanationOfBenefitBenefitBalance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Benefit classification (1..1) */
  category: CodeableConcept;
  /** Excluded from the plan (0..1) */
  excluded?: boolean;
  /** Id and extensions of the primitive `excluded`. */
  _excluded?: Element;
  /** Short name for the benefit (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Description of the benefit or services covered (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** In or out of network (0..1) */
  network?: CodeableConcept;
  /** Individual or family (0..1) */
  unit?: CodeableConcept;
  /** Annual or lifetime (0..1) */
  term?: CodeableConcept;
  /** Benefit Summary (0..*) */
  financial?: Array<ExplanationOfBenefitFinancial>;
}

/**
 * Benefit Summary
 */
export interface ExplanationOfBenefitFinancial {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Benefit classification (1..1) */
  type: CodeableConcept;
  /** Benefits allowed (0..1) */
  allowedUnsignedInt?: number;
  /** Id and extensions of the primitive `allowedUnsignedInt`. */
  _allowedUnsignedInt?: Element;
  /** Benefits allowed (0..1) */
  allowedString?: string;
  /** Id and extensions of the primitive `allowedString`. */
  _allowedString?: Element;
  /** Benefits allowed (0..1) */
  allowedMoney?: Money;
  /** Benefits used (0..1) */
  usedUnsignedInt?: number;
  /** Id and extensions of the primitive `usedUnsignedInt`. */
  _usedUnsignedInt?: Element;
  /** Benefits used (0..1) */
  usedMoney?: Money;
}
