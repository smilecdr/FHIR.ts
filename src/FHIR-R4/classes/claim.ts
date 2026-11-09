/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export class Claim {
  resourceType: 'Claim';
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
  /** Business Identifier for claim (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: Claim.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Category or discipline (1..1) */
  type: CodeableConcept;
  /** More granular claim type (0..1) */
  subType?: CodeableConcept;
  /** claim | preauthorization | predetermination (1..1) */
  use?: Claim.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** The recipient of the products and services (1..1) */
  patient: Reference;
  /** Relevant time frame for the claim (0..1) */
  billablePeriod?: Period;
  /** Resource creation date (1..1) */
  created?: Date | string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Author of the claim (0..1) */
  enterer?: Reference;
  /** Target (0..1) */
  insurer?: Reference;
  /** Party responsible for the claim (1..1) */
  provider: Reference;
  /** Desired processing ugency (1..1) */
  priority: CodeableConcept;
  /** For whom to reserve funds (0..1) */
  fundsReserve?: CodeableConcept;
  /** Prior or corollary claims (0..*) */
  related?: Array<ClaimRelated>;
  /** Prescription authorizing services and products (0..1) */
  prescription?: Reference;
  /** Original prescription if superseded by fulfiller (0..1) */
  originalPrescription?: Reference;
  /** Recipient of benefits payable (0..1) */
  payee?: ClaimPayee;
  /** Treatment referral (0..1) */
  referral?: Reference;
  /** Servicing facility (0..1) */
  facility?: Reference;
  /** Members of the care team (0..*) */
  careTeam?: Array<ClaimCareTeam>;
  /** Supporting information (0..*) */
  supportingInfo?: Array<ClaimSupportingInfo>;
  /** Pertinent diagnosis information (0..*) */
  diagnosis?: Array<ClaimDiagnosis>;
  /** Clinical procedures performed (0..*) */
  procedure?: Array<ClaimProcedure>;
  /** Patient insurance information (1..*) */
  insurance: Array<ClaimInsurance>;
  /** Details of the event (0..1) */
  accident?: ClaimAccident;
  /** Product or service provided (0..*) */
  item?: Array<ClaimItem>;
  /** Total claim cost (0..1) */
  total?: Money;
}

export namespace Claim {
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
}

/**
 * Prior or corollary claims
 */
export class ClaimRelated {
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
 * Recipient of benefits payable
 */
export class ClaimPayee {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Category of recipient (1..1) */
  type: CodeableConcept;
  /** Recipient reference (0..1) */
  party?: Reference;
}

/**
 * Members of the care team
 */
export class ClaimCareTeam {
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
  /** Practitioner credential or specialization (0..1) */
  qualification?: CodeableConcept;
}

/**
 * Supporting information
 */
export class ClaimSupportingInfo {
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
  timingDate?: Date | string;
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
  /** Explanation for the information (0..1) */
  reason?: CodeableConcept;
}

/**
 * Pertinent diagnosis information
 */
export class ClaimDiagnosis {
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
  /** Package billing code (0..1) */
  packageCode?: CodeableConcept;
}

/**
 * Clinical procedures performed
 */
export class ClaimProcedure {
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
  date?: Date | string;
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
export class ClaimInsurance {
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
  /** Pre-assigned Claim number (0..1) */
  identifier?: Identifier;
  /** Insurance information (1..1) */
  coverage: Reference;
  /** Additional provider contract number (0..1) */
  businessArrangement?: string;
  /** Id and extensions of the primitive `businessArrangement`. */
  _businessArrangement?: Element;
  /** Prior authorization reference number (0..*) */
  preAuthRef?: Array<string>;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Array<Element | null>;
  /** Adjudication results (0..1) */
  claimResponse?: Reference;
}

/**
 * Details of the event
 */
export class ClaimAccident {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** When the incident occurred (1..1) */
  date?: Date | string;
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
export class ClaimItem {
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
  /** Applicable careTeam members (0..*) */
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
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Benefit classification (0..1) */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code (1..1) */
  productOrService: CodeableConcept;
  /** Product or service billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Program the product or service is provided under (0..*) */
  programCode?: Array<CodeableConcept>;
  /** Date or dates of service or product delivery (0..1) */
  servicedDate?: Date | string;
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
  /** Total item cost (0..1) */
  net?: Money;
  /** Unique device identifier (0..*) */
  udi?: Array<Reference>;
  /** Anatomical location (0..1) */
  bodySite?: CodeableConcept;
  /** Anatomical sub-location (0..*) */
  subSite?: Array<CodeableConcept>;
  /** Encounters related to this billed item (0..*) */
  encounter?: Array<Reference>;
  /** Product or service provided (0..*) */
  detail?: Array<ClaimDetail>;
}

/**
 * Product or service provided
 */
export class ClaimDetail {
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
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Benefit classification (0..1) */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code (1..1) */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Program the product or service is provided under (0..*) */
  programCode?: Array<CodeableConcept>;
  /** Count of products or services (0..1) */
  quantity?: Quantity;
  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;
  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Total item cost (0..1) */
  net?: Money;
  /** Unique device identifier (0..*) */
  udi?: Array<Reference>;
  /** Product or service provided (0..*) */
  subDetail?: Array<ClaimSubDetail>;
}

/**
 * Product or service provided
 */
export class ClaimSubDetail {
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
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Benefit classification (0..1) */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code (1..1) */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Program the product or service is provided under (0..*) */
  programCode?: Array<CodeableConcept>;
  /** Count of products or services (0..1) */
  quantity?: Quantity;
  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;
  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Total item cost (0..1) */
  net?: Money;
  /** Unique device identifier (0..*) */
  udi?: Array<Reference>;
}
