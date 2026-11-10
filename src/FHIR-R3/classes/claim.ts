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
 * Base StructureDefinition for Claim Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Claim number (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: Claim.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Type or discipline (0..1) */
  type?: CodeableConcept;
  /** Finer grained claim type information (0..*) */
  subType?: Array<CodeableConcept>;
  /** complete | proposed | exploratory | other (0..1) */
  use?: Claim.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
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
  /** Target (0..1) */
  insurer?: Reference;
  /** Responsible provider (0..1) */
  provider?: Reference;
  /** Responsible organization (0..1) */
  organization?: Reference;
  /** Desired processing priority (0..1) */
  priority?: CodeableConcept;
  /** Funds requested to be reserved (0..1) */
  fundsReserve?: CodeableConcept;
  /** Related Claims which may be revelant to processing this claimn (0..*) */
  related?: Array<ClaimRelated>;
  /** Prescription authorizing services or products (0..1) */
  prescription?: Reference;
  /** Original prescription if superceded by fulfiller (0..1) */
  originalPrescription?: Reference;
  /** Party to be paid any benefits payable (0..1) */
  payee?: ClaimPayee;
  /** Treatment Referral (0..1) */
  referral?: Reference;
  /** Servicing Facility (0..1) */
  facility?: Reference;
  /** Members of the care team (0..*) */
  careTeam?: Array<ClaimCareTeam>;
  /** Exceptions, special considerations, the condition, situation, prior or concurrent issues (0..*) */
  information?: Array<ClaimInformation>;
  /** List of Diagnosis (0..*) */
  diagnosis?: Array<ClaimDiagnosis>;
  /** Procedures performed (0..*) */
  procedure?: Array<ClaimProcedure>;
  /** Insurance or medical plan (0..*) */
  insurance?: Array<ClaimInsurance>;
  /** Details about an accident (0..1) */
  accident?: ClaimAccident;
  /** Period unable to work (0..1) */
  employmentImpacted?: Period;
  /** Period in hospital (0..1) */
  hospitalization?: Period;
  /** Goods and Services (0..*) */
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
  export type UseEnum = 'complete' | 'proposed' | 'exploratory' | 'other';
  export const UseEnum = {
    Complete: 'complete' as UseEnum,
    Proposed: 'proposed' as UseEnum,
    Exploratory: 'exploratory' as UseEnum,
    Other: 'other' as UseEnum,
  };
}

/**
 * Related Claims which may be revelant to processing this claimn
 */
export class ClaimRelated {
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
export class ClaimPayee {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of party: Subscriber, Provider, other (1..1) */
  type: CodeableConcept;
  /** organization | patient | practitioner | relatedperson (0..1) */
  resourceType?: Coding;
  /** Party to receive the payable (0..1) */
  party?: Reference;
}

/**
 * Members of the care team
 */
export class ClaimCareTeam {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Number to covey order of careTeam (1..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Provider individual or organization (1..1) */
  provider: Reference;
  /** Billing provider (0..1) */
  responsible?: boolean;
  /** Id and extensions of the primitive `responsible`. */
  _responsible?: Element;
  /** Role on the team (0..1) */
  role?: CodeableConcept;
  /** Type, classification or Specialization (0..1) */
  qualification?: CodeableConcept;
}

/**
 * Exceptions, special considerations, the condition, situation, prior or concurrent issues
 */
export class ClaimInformation {
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
  reason?: CodeableConcept;
}

/**
 * List of Diagnosis
 */
export class ClaimDiagnosis {
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
export class ClaimProcedure {
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
export class ClaimInsurance {
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

/**
 * Details about an accident
 */
export class ClaimAccident {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** When the accident occurred see information codes see information codes (1..1) */
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
export class ClaimItem {
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
  /** Applicable careTeam members (0..*) */
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
  /** Additional items (0..*) */
  detail?: Array<ClaimDetail>;
}

/**
 * Additional items
 */
export class ClaimDetail {
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
  /** Additional items (0..*) */
  subDetail?: Array<ClaimSubDetail>;
}

/**
 * Additional items
 */
export class ClaimSubDetail {
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
}
