/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for ClaimResponse Resource
 */
export class ClaimResponse {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Response number (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: ClaimResponse.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The subject of the Products and Services (0..1) */
  patient?: Reference;
  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Insurance issuing organization (0..1) */
  insurer?: Reference;
  /** Responsible practitioner (0..1) */
  requestProvider?: Reference;
  /** Responsible organization (0..1) */
  requestOrganization?: Reference;
  /** Id of resource triggering adjudication (0..1) */
  request?: Reference;
  /** complete | error | partial (0..1) */
  outcome?: CodeableConcept;
  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** Party to be paid any benefits payable (0..1) */
  payeeType?: CodeableConcept;
  /** Line items (0..*) */
  item?: Array<ClaimResponseItem>;
  /** Insurer added line items (0..*) */
  addItem?: Array<ClaimResponseAddItem>;
  /** Processing errors (0..*) */
  error?: Array<ClaimResponseError>;
  /** Total Cost of service from the Claim (0..1) */
  totalCost?: Money;
  /** Unallocated deductible (0..1) */
  unallocDeductable?: Money;
  /** Total benefit payable for the Claim (0..1) */
  totalBenefit?: Money;
  /** Payment details, if paid (0..1) */
  payment?: ClaimResponsePayment;
  /** Funds reserved status (0..1) */
  reserved?: Coding;
  /** Printed Form Identifier (0..1) */
  form?: CodeableConcept;
  /** Processing notes (0..*) */
  processNote?: Array<ClaimResponseProcessNote>;
  /** Request for additional information (0..*) */
  communicationRequest?: Array<Reference>;
  /** Insurance or medical plan (0..*) */
  insurance?: Array<ClaimResponseInsurance>;
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
}

/**
 * Line items
 */
export class ClaimResponseItem {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Service instance (1..1) */
  sequenceLinkId?: number;
  /** Id and extensions of the primitive `sequenceLinkId`. */
  _sequenceLinkId?: Element;
  /** List of note numbers which apply (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Adjudication details (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
  /** Detail line items (0..*) */
  detail?: Array<ClaimResponseDetail>;
}

/**
 * Adjudication details
 */
export class ClaimResponseAdjudication {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Adjudication category such as co-pay, eligible, benefit, etc. (1..1) */
  category: CodeableConcept;
  /** Explanation of Adjudication outcome (0..1) */
  reason?: CodeableConcept;
  /** Monetary amount (0..1) */
  amount?: Money;
  /** Non-monetary value (0..1) */
  value?: number;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Detail line items
 */
export class ClaimResponseDetail {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Service instance (1..1) */
  sequenceLinkId?: number;
  /** Id and extensions of the primitive `sequenceLinkId`. */
  _sequenceLinkId?: Element;
  /** List of note numbers which apply (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Detail level adjudication details (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
  /** Subdetail line items (0..*) */
  subDetail?: Array<ClaimResponseSubDetail>;
}

/**
 * Subdetail line items
 */
export class ClaimResponseSubDetail {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Service instance (1..1) */
  sequenceLinkId?: number;
  /** Id and extensions of the primitive `sequenceLinkId`. */
  _sequenceLinkId?: Element;
  /** List of note numbers which apply (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Subdetail level adjudication details (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
}

/**
 * Insurer added line items
 */
export class ClaimResponseAddItem {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Service instances (0..*) */
  sequenceLinkId?: Array<number>;
  /** Id and extensions of the primitive `sequenceLinkId`. */
  _sequenceLinkId?: Array<Element | null>;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Type of service or product (0..1) */
  category?: CodeableConcept;
  /** Group, Service or Product (0..1) */
  service?: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Professional fee or Product charge (0..1) */
  fee?: Money;
  /** List of note numbers which apply (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Added items adjudication (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
  /** Added items details (0..*) */
  detail?: Array<ClaimResponseDetail1>;
}

/**
 * Added items details
 */
export class ClaimResponseDetail1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Type of service or product (0..1) */
  category?: CodeableConcept;
  /** Service or Product (0..1) */
  service?: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Professional fee or Product charge (0..1) */
  fee?: Money;
  /** List of note numbers which apply (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Added items detail adjudication (0..*) */
  adjudication?: Array<ClaimResponseAdjudication>;
}

/**
 * Processing errors
 */
export class ClaimResponseError {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Item sequence number (0..1) */
  sequenceLinkId?: number;
  /** Id and extensions of the primitive `sequenceLinkId`. */
  _sequenceLinkId?: Element;
  /** Detail sequence number (0..1) */
  detailSequenceLinkId?: number;
  /** Id and extensions of the primitive `detailSequenceLinkId`. */
  _detailSequenceLinkId?: Element;
  /** Subdetail sequence number (0..1) */
  subdetailSequenceLinkId?: number;
  /** Id and extensions of the primitive `subdetailSequenceLinkId`. */
  _subdetailSequenceLinkId?: Element;
  /** Error code detailing processing issues (1..1) */
  code: CodeableConcept;
}

/**
 * Payment details, if paid
 */
export class ClaimResponsePayment {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Partial or Complete (0..1) */
  type?: CodeableConcept;
  /** Payment adjustment for non-Claim issues (0..1) */
  adjustment?: Money;
  /** Explanation for the non-claim adjustment (0..1) */
  adjustmentReason?: CodeableConcept;
  /** Expected data of Payment (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Payable amount after adjustment (0..1) */
  amount?: Money;
  /** Identifier of the payment instrument (0..1) */
  identifier?: Identifier;
}

/**
 * Processing notes
 */
export class ClaimResponseProcessNote {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Sequence Number for this note (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;
  /** display | print | printoper (0..1) */
  type?: CodeableConcept;
  /** Note explanatory text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Language if different from the resource (0..1) */
  language?: CodeableConcept;
}

/**
 * Insurance or medical plan
 */
export class ClaimResponseInsurance {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Service instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Is the focal Coverage (1..1) */
  focal?: boolean;
  /** Id and extensions of the primitive `focal`. */
  _focal?: Element;
  /** Insurance information (1..1) */
  coverage: Reference;
  /** Business agreement (0..1) */
  businessArrangement?: string;
  /** Id and extensions of the primitive `businessArrangement`. */
  _businessArrangement?: Element;
  /** Pre-Authorization/Determination Reference (0..*) */
  preAuthRef?: Array<string>;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Array<Element | null>;
  /** Adjudication results (0..1) */
  claimResponse?: Reference;
}
