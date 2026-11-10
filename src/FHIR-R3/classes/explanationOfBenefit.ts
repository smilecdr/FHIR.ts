/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
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
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for ExplanationOfBenefit Resource
 */
export class ExplanationOfBenefit {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business Identifier (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: ExplanationOfBenefit.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Type or discipline (0..1) */
  type?: CodeableConcept;
  /** Finer grained claim type information (0..*) */
  subType?: Array<CodeableConcept>;
  /** The subject of the Products and Services (0..1) */
  patient?: Reference;
  /** Period for charge submission (0..1) */
  billablePeriod?: Period;
  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Author (0..1) */
  enterer?: Reference;
  /** Insurer responsible for the EOB (0..1) */
  insurer?: Reference;
  /** Responsible provider for the claim (0..1) */
  provider?: Reference;
  /** Responsible organization for the claim (0..1) */
  organization?: Reference;
  /** Treatment Referral (0..1) */
  referral?: Reference;
  /** Servicing Facility (0..1) */
  facility?: Reference;
  /** Claim reference (0..1) */
  claim?: Reference;
  /** Claim response reference (0..1) */
  claimResponse?: Reference;
  /** complete | error | partial (0..1) */
  outcome?: CodeableConcept;
  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** Related Claims which may be revelant to processing this claim (0..*) */
  related?: Array<ExplanationOfBenefitRelated>;
  /** Prescription authorizing services or products (0..1) */
  prescription?: Reference;
  /** Original prescription if superceded by fulfiller (0..1) */
  originalPrescription?: Reference;
  /** Party to be paid any benefits payable (0..1) */
  payee?: ExplanationOfBenefitPayee;
  /** Exceptions, special considerations, the condition, situation, prior or concurrent issues (0..*) */
  information?: Array<ExplanationOfBenefitInformation>;
  /** Care Team members (0..*) */
  careTeam?: Array<ExplanationOfBenefitCareTeam>;
  /** List of Diagnosis (0..*) */
  diagnosis?: Array<ExplanationOfBenefitDiagnosis>;
  /** Procedures performed (0..*) */
  procedure?: Array<ExplanationOfBenefitProcedure>;
  /** Precedence (primary, secondary, etc.) (0..1) */
  precedence?: number;
  /** Id and extensions of the primitive `precedence`. */
  _precedence?: Element;
  /** Insurance or medical plan (0..1) */
  insurance?: ExplanationOfBenefitInsurance;
  /** Details of an accident (0..1) */
  accident?: ExplanationOfBenefitAccident;
  /** Period unable to work (0..1) */
  employmentImpacted?: Period;
  /** Period in hospital (0..1) */
  hospitalization?: Period;
  /** Goods and Services (0..*) */
  item?: Array<ExplanationOfBenefitItem>;
  /** Insurer added line items (0..*) */
  addItem?: Array<ExplanationOfBenefitAddItem>;
  /** Total Cost of service from the Claim (0..1) */
  totalCost?: Money;
  /** Unallocated deductable (0..1) */
  unallocDeductable?: Money;
  /** Total benefit payable for the Claim (0..1) */
  totalBenefit?: Money;
  /** Payment (if paid) (0..1) */
  payment?: ExplanationOfBenefitPayment;
  /** Printed Form Identifier (0..1) */
  form?: CodeableConcept;
  /** Processing notes (0..*) */
  processNote?: Array<ExplanationOfBenefitProcessNote>;
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
}

/**
 * Related Claims which may be revelant to processing this claim
 */
export class ExplanationOfBenefitRelated {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to the related claim (0..1) */
  claim?: Reference;
  /** How the reference claim is related (0..1) */
  relationship?: CodeableConcept;
  /** Related file or case reference (0..1) */
  reference?: Identifier;
}

/**
 * Party to be paid any benefits payable
 */
export class ExplanationOfBenefitPayee {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of party: Subscriber, Provider, other (0..1) */
  type?: CodeableConcept;
  /** organization | patient | practitioner | relatedperson (0..1) */
  resourceType?: CodeableConcept;
  /** Party to receive the payable (0..1) */
  party?: Reference;
}

/**
 * Exceptions, special considerations, the condition, situation, prior or concurrent issues
 */
export class ExplanationOfBenefitInformation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Information instance identifier (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** General class of information (1..1) */
  category: CodeableConcept;
  /** Type of information (0..1) */
  code?: CodeableConcept;
  /** When it occurred (0..1) */
  timingDate?: string;
  /** Id and extensions of the primitive `timingDate`. */
  _timingDate?: Element;
  /** When it occurred (0..1) */
  timingPeriod?: Period;
  /** Additional Data or supporting information (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Additional Data or supporting information (0..1) */
  valueQuantity?: Quantity;
  /** Additional Data or supporting information (0..1) */
  valueAttachment?: Attachment;
  /** Additional Data or supporting information (0..1) */
  valueReference?: Reference;
  /** Reason associated with the information (0..1) */
  reason?: Coding;
}

/**
 * Care Team members
 */
export class ExplanationOfBenefitCareTeam {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Number to covey order of careteam (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Member of the Care Team (1..1) */
  provider: Reference;
  /** Billing practitioner (0..1) */
  responsible?: boolean;
  /** Id and extensions of the primitive `responsible`. */
  _responsible?: Element;
  /** Role on the team (0..1) */
  role?: CodeableConcept;
  /** Type, classification or Specialization (0..1) */
  qualification?: CodeableConcept;
}

/**
 * List of Diagnosis
 */
export class ExplanationOfBenefitDiagnosis {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Number to covey order of diagnosis (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Patient's diagnosis (1..1) */
  diagnosisCodeableConcept?: CodeableConcept;
  /** Patient's diagnosis (1..1) */
  diagnosisReference?: Reference;
  /** Timing or nature of the diagnosis (0..*) */
  type?: Array<CodeableConcept>;
  /** Package billing code (0..1) */
  packageCode?: CodeableConcept;
}

/**
 * Procedures performed
 */
export class ExplanationOfBenefitProcedure {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Procedure sequence for reference (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** When the procedure was performed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Patient's list of procedures performed (1..1) */
  procedureCodeableConcept?: CodeableConcept;
  /** Patient's list of procedures performed (1..1) */
  procedureReference?: Reference;
}

/**
 * Insurance or medical plan
 */
export class ExplanationOfBenefitInsurance {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Insurance information (0..1) */
  coverage?: Reference;
  /** Pre-Authorization/Determination Reference (0..*) */
  preAuthRef?: Array<string>;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Array<Element | null>;
}

/**
 * Details of an accident
 */
export class ExplanationOfBenefitAccident {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** When the accident occurred (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The nature of the accident (0..1) */
  type?: CodeableConcept;
  /** Accident Place (0..1) */
  locationAddress?: Address;
  /** Accident Place (0..1) */
  locationReference?: Reference;
}

/**
 * Goods and Services
 */
export class ExplanationOfBenefitItem {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Service instance (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Applicable careteam members (0..*) */
  careTeamLinkId?: Array<number>;
  /** Id and extensions of the primitive `careTeamLinkId`. */
  _careTeamLinkId?: Array<Element | null>;
  /** Applicable diagnoses (0..*) */
  diagnosisLinkId?: Array<number>;
  /** Id and extensions of the primitive `diagnosisLinkId`. */
  _diagnosisLinkId?: Array<Element | null>;
  /** Applicable procedures (0..*) */
  procedureLinkId?: Array<number>;
  /** Id and extensions of the primitive `procedureLinkId`. */
  _procedureLinkId?: Array<Element | null>;
  /** Applicable exception and supporting information (0..*) */
  informationLinkId?: Array<number>;
  /** Id and extensions of the primitive `informationLinkId`. */
  _informationLinkId?: Array<Element | null>;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Type of service or product (0..1) */
  category?: CodeableConcept;
  /** Billing Code (0..1) */
  service?: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Program specific reason for item inclusion (0..*) */
  programCode?: Array<CodeableConcept>;
  /** Date or dates of Service (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Date or dates of Service (0..1) */
  servicedPeriod?: Period;
  /** Place of service (0..1) */
  locationCodeableConcept?: CodeableConcept;
  /** Place of service (0..1) */
  locationAddress?: Address;
  /** Place of service (0..1) */
  locationReference?: Reference;
  /** Count of Products or Services (0..1) */
  quantity?: Quantity;
  /** Fee, charge or cost per point (0..1) */
  unitPrice?: Money;
  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Total item cost (0..1) */
  net?: Money;
  /** Unique Device Identifier (0..*) */
  udi?: Array<Reference>;
  /** Service Location (0..1) */
  bodySite?: CodeableConcept;
  /** Service Sub-location (0..*) */
  subSite?: Array<CodeableConcept>;
  /** Encounters related to this billed item (0..*) */
  encounter?: Array<Reference>;
  /** List of note numbers which apply (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Adjudication details (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
  /** Additional items (0..*) */
  detail?: Array<ExplanationOfBenefitDetail>;
}

/**
 * Adjudication details
 */
export class ExplanationOfBenefitAdjudication {
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
  /** Non-monitory value (0..1) */
  value?: number;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Additional items
 */
export class ExplanationOfBenefitDetail {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Service instance (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Group or type of product or service (1..1) */
  type: CodeableConcept;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Type of service or product (0..1) */
  category?: CodeableConcept;
  /** Billing Code (0..1) */
  service?: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Program specific reason for item inclusion (0..*) */
  programCode?: Array<CodeableConcept>;
  /** Count of Products or Services (0..1) */
  quantity?: Quantity;
  /** Fee, charge or cost per point (0..1) */
  unitPrice?: Money;
  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Total additional item cost (0..1) */
  net?: Money;
  /** Unique Device Identifier (0..*) */
  udi?: Array<Reference>;
  /** List of note numbers which apply (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Detail level adjudication details (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
  /** Additional items (0..*) */
  subDetail?: Array<ExplanationOfBenefitSubDetail>;
}

/**
 * Additional items
 */
export class ExplanationOfBenefitSubDetail {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Service instance (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Type of product or service (1..1) */
  type: CodeableConcept;
  /** Revenue or cost center code (0..1) */
  revenue?: CodeableConcept;
  /** Type of service or product (0..1) */
  category?: CodeableConcept;
  /** Billing Code (0..1) */
  service?: CodeableConcept;
  /** Service/Product billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Program specific reason for item inclusion (0..*) */
  programCode?: Array<CodeableConcept>;
  /** Count of Products or Services (0..1) */
  quantity?: Quantity;
  /** Fee, charge or cost per point (0..1) */
  unitPrice?: Money;
  /** Price scaling factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Net additional item cost (0..1) */
  net?: Money;
  /** Unique Device Identifier (0..*) */
  udi?: Array<Reference>;
  /** List of note numbers which apply (0..*) */
  noteNumber?: Array<number>;
  /** Id and extensions of the primitive `noteNumber`. */
  _noteNumber?: Array<Element | null>;
  /** Language if different from the resource (0..*) */
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
}

/**
 * Insurer added line items
 */
export class ExplanationOfBenefitAddItem {
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
  /** Billing Code (0..1) */
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
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
  /** Added items details (0..*) */
  detail?: Array<ExplanationOfBenefitDetail1>;
}

/**
 * Added items details
 */
export class ExplanationOfBenefitDetail1 {
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
  /** Billing Code (0..1) */
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
  adjudication?: Array<ExplanationOfBenefitAdjudication>;
}

/**
 * Payment (if paid)
 */
export class ExplanationOfBenefitPayment {
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
  /** Expected date of Payment (0..1) */
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
export class ExplanationOfBenefitProcessNote {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Sequence number for this note (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;
  /** display | print | printoper (0..1) */
  type?: CodeableConcept;
  /** Note explanitory text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Language if different from the resource (0..1) */
  language?: CodeableConcept;
}

/**
 * Balance by Benefit Category
 */
export class ExplanationOfBenefitBenefitBalance {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of services covered (1..1) */
  category: CodeableConcept;
  /** Detailed services covered within the type (0..1) */
  subCategory?: CodeableConcept;
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
export class ExplanationOfBenefitFinancial {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Deductable, visits, benefit amount (1..1) */
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
