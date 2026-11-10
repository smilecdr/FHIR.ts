/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
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
import type { Signature } from './signature';
import type { Timing } from './timing';

/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export class Contract {
  resourceType: 'Contract';
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
  /** Contract number (0..*) */
  identifier?: Array<Identifier>;
  /** Basal definition (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business edition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated (0..1) */
  status?: Contract.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Negotiation status (0..1) */
  legalState?: CodeableConcept;
  /** Source Contract Definition (0..1) */
  instantiatesCanonical?: Reference;
  /** External Contract Definition (0..1) */
  instantiatesUri?: string;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Element;
  /** Content derived from the basal information (0..1) */
  contentDerivative?: CodeableConcept;
  /** When this Contract was issued (0..1) */
  issued?: Date | string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;
  /** Effective time (0..1) */
  applies?: Period;
  /** Contract cessation cause (0..1) */
  expirationType?: CodeableConcept;
  /** Contract Target Entity (0..*) */
  subject?: Array<Reference>;
  /** Authority under which this Contract has standing (0..*) */
  authority?: Array<Reference>;
  /** A sphere of control governed by an authoritative jurisdiction, organization, or person (0..*) */
  domain?: Array<Reference>;
  /** Specific Location (0..*) */
  site?: Array<Reference>;
  /** Computer friendly designation (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Human Friendly name (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Subordinate Friendly name (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;
  /** Acronym or short name (0..*) */
  alias?: Array<string>;
  /** Id and extensions of the primitive `alias`. */
  _alias?: Array<Element | null>;
  /** Source of Contract (0..1) */
  author?: Reference;
  /** Range of Legal Concerns (0..1) */
  scope?: CodeableConcept;
  /** Focus of contract interest (0..1) */
  topicCodeableConcept?: CodeableConcept;
  /** Focus of contract interest (0..1) */
  topicReference?: Reference;
  /** Legal instrument category (0..1) */
  type?: CodeableConcept;
  /** Subtype within the context of type (0..*) */
  subType?: Array<CodeableConcept>;
  /** Contract precursor content (0..1) */
  contentDefinition?: ContractContentDefinition;
  /** Contract Term List (0..*) */
  term?: Array<ContractTerm>;
  /** Extra Information (0..*) */
  supportingInfo?: Array<Reference>;
  /** Key event in Contract History (0..*) */
  relevantHistory?: Array<Reference>;
  /** Contract Signatory (0..*) */
  signer?: Array<ContractSigner>;
  /** Contract Friendly Language (0..*) */
  friendly?: Array<ContractFriendly>;
  /** Contract Legal Language (0..*) */
  legal?: Array<ContractLegal>;
  /** Computable Contract Language (0..*) */
  rule?: Array<ContractRule>;
  /** Binding Contract (0..1) */
  legallyBindingAttachment?: Attachment;
  /** Binding Contract (0..1) */
  legallyBindingReference?: Reference;
}

export namespace Contract {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/contract-status */
  export type StatusEnum =
    | 'amended'
    | 'appended'
    | 'cancelled'
    | 'disputed'
    | 'entered-in-error'
    | 'executable'
    | 'executed'
    | 'negotiable'
    | 'offered'
    | 'policy'
    | 'rejected'
    | 'renewed'
    | 'revoked'
    | 'resolved'
    | 'terminated';
  export const StatusEnum = {
    Amended: 'amended' as StatusEnum,
    Appended: 'appended' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Disputed: 'disputed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Executable: 'executable' as StatusEnum,
    Executed: 'executed' as StatusEnum,
    Negotiable: 'negotiable' as StatusEnum,
    Offered: 'offered' as StatusEnum,
    Policy: 'policy' as StatusEnum,
    Rejected: 'rejected' as StatusEnum,
    Renewed: 'renewed' as StatusEnum,
    Revoked: 'revoked' as StatusEnum,
    Resolved: 'resolved' as StatusEnum,
    Terminated: 'terminated' as StatusEnum,
  };
}

/**
 * Contract precursor content
 */
export class ContractContentDefinition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Content structure and use (1..1) */
  type: CodeableConcept;
  /** Detailed Content Type Definition (0..1) */
  subType?: CodeableConcept;
  /** Publisher Entity (0..1) */
  publisher?: Reference;
  /** When published (0..1) */
  publicationDate?: Date | string;
  /** Id and extensions of the primitive `publicationDate`. */
  _publicationDate?: Element;
  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated (1..1) */
  publicationStatus?: ContractContentDefinition.PublicationStatusEnum;
  /** Id and extensions of the primitive `publicationStatus`. */
  _publicationStatus?: Element;
  /** Publication Ownership (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
}

export namespace ContractContentDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/contract-publicationstatus */
  export type PublicationStatusEnum =
    | 'amended'
    | 'appended'
    | 'cancelled'
    | 'disputed'
    | 'entered-in-error'
    | 'executable'
    | 'executed'
    | 'negotiable'
    | 'offered'
    | 'policy'
    | 'rejected'
    | 'renewed'
    | 'revoked'
    | 'resolved'
    | 'terminated';
  export const PublicationStatusEnum = {
    Amended: 'amended' as PublicationStatusEnum,
    Appended: 'appended' as PublicationStatusEnum,
    Cancelled: 'cancelled' as PublicationStatusEnum,
    Disputed: 'disputed' as PublicationStatusEnum,
    EnteredInError: 'entered-in-error' as PublicationStatusEnum,
    Executable: 'executable' as PublicationStatusEnum,
    Executed: 'executed' as PublicationStatusEnum,
    Negotiable: 'negotiable' as PublicationStatusEnum,
    Offered: 'offered' as PublicationStatusEnum,
    Policy: 'policy' as PublicationStatusEnum,
    Rejected: 'rejected' as PublicationStatusEnum,
    Renewed: 'renewed' as PublicationStatusEnum,
    Revoked: 'revoked' as PublicationStatusEnum,
    Resolved: 'resolved' as PublicationStatusEnum,
    Terminated: 'terminated' as PublicationStatusEnum,
  };
}

/**
 * Contract Term List
 */
export class ContractTerm {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Term Number (0..1) */
  identifier?: Identifier;
  /** Contract Term Issue Date Time (0..1) */
  issued?: Date | string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;
  /** Contract Term Effective Time (0..1) */
  applies?: Period;
  /** Term Concern (0..1) */
  topicCodeableConcept?: CodeableConcept;
  /** Term Concern (0..1) */
  topicReference?: Reference;
  /** Contract Term Type or Form (0..1) */
  type?: CodeableConcept;
  /** Contract Term Type specific classification (0..1) */
  subType?: CodeableConcept;
  /** Term Statement (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Protection for the Term (0..*) */
  securityLabel?: Array<ContractSecurityLabel>;
  /** Context of the Contract term (1..1) */
  offer: ContractOffer;
  /** Contract Term Asset List (0..*) */
  asset?: Array<ContractAsset>;
  /** Entity being ascribed responsibility (0..*) */
  action?: Array<ContractAction>;
  /** Nested Contract Term Group (0..*) */
  group?: Array<ContractTerm>;
}

/**
 * Protection for the Term
 */
export class ContractSecurityLabel {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Link to Security Labels (0..*) */
  number?: Array<number>;
  /** Id and extensions of the primitive `number`. */
  _number?: Array<Element | null>;
  /** Confidentiality Protection (1..1) */
  classification: Coding;
  /** Applicable Policy (0..*) */
  category?: Array<Coding>;
  /** Handling Instructions (0..*) */
  control?: Array<Coding>;
}

/**
 * Context of the Contract term
 */
export class ContractOffer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Offer business ID (0..*) */
  identifier?: Array<Identifier>;
  /** Offer Recipient (0..*) */
  party?: Array<ContractParty>;
  /** Negotiable offer asset (0..1) */
  topic?: Reference;
  /** Contract Offer Type or Form (0..1) */
  type?: CodeableConcept;
  /** Accepting party choice (0..1) */
  decision?: CodeableConcept;
  /** How decision is conveyed (0..*) */
  decisionMode?: Array<CodeableConcept>;
  /** Response to offer text (0..*) */
  answer?: Array<ContractAnswer>;
  /** Human readable offer text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Pointer to text (0..*) */
  linkId?: Array<string>;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Array<Element | null>;
  /** Offer restriction numbers (0..*) */
  securityLabelNumber?: Array<number>;
  /** Id and extensions of the primitive `securityLabelNumber`. */
  _securityLabelNumber?: Array<Element | null>;
}

/**
 * Offer Recipient
 */
export class ContractParty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Referenced entity (1..*) */
  reference: Array<Reference>;
  /** Participant engagement type (1..1) */
  role: CodeableConcept;
}

/**
 * Response to offer text
 */
export class ContractAnswer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The actual answer response (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** The actual answer response (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** The actual answer response (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** The actual answer response (1..1) */
  valueDate?: Date | string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** The actual answer response (1..1) */
  valueDateTime?: Date | string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** The actual answer response (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** The actual answer response (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** The actual answer response (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** The actual answer response (1..1) */
  valueAttachment?: Attachment;
  /** The actual answer response (1..1) */
  valueCoding?: Coding;
  /** The actual answer response (1..1) */
  valueQuantity?: Quantity;
  /** The actual answer response (1..1) */
  valueReference?: Reference;
}

/**
 * Contract Term Asset List
 */
export class ContractAsset {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Range of asset (0..1) */
  scope?: CodeableConcept;
  /** Asset category (0..*) */
  type?: Array<CodeableConcept>;
  /** Associated entities (0..*) */
  typeReference?: Array<Reference>;
  /** Asset sub-category (0..*) */
  subtype?: Array<CodeableConcept>;
  /** Kinship of the asset (0..1) */
  relationship?: Coding;
  /** Circumstance of the asset (0..*) */
  context?: Array<ContractContext>;
  /** Quality desctiption of asset (0..1) */
  condition?: string;
  /** Id and extensions of the primitive `condition`. */
  _condition?: Element;
  /** Asset availability types (0..*) */
  periodType?: Array<CodeableConcept>;
  /** Time period of the asset (0..*) */
  period?: Array<Period>;
  /** Time period (0..*) */
  usePeriod?: Array<Period>;
  /** Asset clause or question text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Pointer to asset text (0..*) */
  linkId?: Array<string>;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Array<Element | null>;
  /** Response to assets (0..*) */
  answer?: Array<ContractAnswer>;
  /** Asset restriction numbers (0..*) */
  securityLabelNumber?: Array<number>;
  /** Id and extensions of the primitive `securityLabelNumber`. */
  _securityLabelNumber?: Array<Element | null>;
  /** Contract Valued Item List (0..*) */
  valuedItem?: Array<ContractValuedItem>;
}

/**
 * Circumstance of the asset
 */
export class ContractContext {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Creator,custodian or owner (0..1) */
  reference?: Reference;
  /** Codeable asset context (0..*) */
  code?: Array<CodeableConcept>;
  /** Context description (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
}

/**
 * Contract Valued Item List
 */
export class ContractValuedItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Valued Item Type (0..1) */
  entityCodeableConcept?: CodeableConcept;
  /** Contract Valued Item Type (0..1) */
  entityReference?: Reference;
  /** Contract Valued Item Number (0..1) */
  identifier?: Identifier;
  /** Contract Valued Item Effective Tiem (0..1) */
  effectiveTime?: Date | string;
  /** Id and extensions of the primitive `effectiveTime`. */
  _effectiveTime?: Element;
  /** Count of Contract Valued Items (0..1) */
  quantity?: Quantity;
  /** Contract Valued Item fee, charge, or cost (0..1) */
  unitPrice?: Money;
  /** Contract Valued Item Price Scaling Factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Contract Valued Item Difficulty Scaling Factor (0..1) */
  points?: number;
  /** Id and extensions of the primitive `points`. */
  _points?: Element;
  /** Total Contract Valued Item Value (0..1) */
  net?: Money;
  /** Terms of valuation (0..1) */
  payment?: string;
  /** Id and extensions of the primitive `payment`. */
  _payment?: Element;
  /** When payment is due (0..1) */
  paymentDate?: Date | string;
  /** Id and extensions of the primitive `paymentDate`. */
  _paymentDate?: Element;
  /** Who will make payment (0..1) */
  responsible?: Reference;
  /** Who will receive payment (0..1) */
  recipient?: Reference;
  /** Pointer to specific item (0..*) */
  linkId?: Array<string>;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Array<Element | null>;
  /** Security Labels that define affected terms (0..*) */
  securityLabelNumber?: Array<number>;
  /** Id and extensions of the primitive `securityLabelNumber`. */
  _securityLabelNumber?: Array<Element | null>;
}

/**
 * Entity being ascribed responsibility
 */
export class ContractAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** True if the term prohibits the action (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;
  /** Type or form of the action (1..1) */
  type: CodeableConcept;
  /** Entity of the action (0..*) */
  subject?: Array<ContractSubject>;
  /** Purpose for the Contract Term Action (1..1) */
  intent: CodeableConcept;
  /** Pointer to specific item (0..*) */
  linkId?: Array<string>;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Array<Element | null>;
  /** State of the action (1..1) */
  status: CodeableConcept;
  /** Episode associated with action (0..1) */
  context?: Reference;
  /** Pointer to specific item (0..*) */
  contextLinkId?: Array<string>;
  /** Id and extensions of the primitive `contextLinkId`. */
  _contextLinkId?: Array<Element | null>;
  /** When action happens (0..1) */
  occurrenceDateTime?: Date | string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When action happens (0..1) */
  occurrencePeriod?: Period;
  /** When action happens (0..1) */
  occurrenceTiming?: Timing;
  /** Who asked for action (0..*) */
  requester?: Array<Reference>;
  /** Pointer to specific item (0..*) */
  requesterLinkId?: Array<string>;
  /** Id and extensions of the primitive `requesterLinkId`. */
  _requesterLinkId?: Array<Element | null>;
  /** Kind of service performer (0..*) */
  performerType?: Array<CodeableConcept>;
  /** Competency of the performer (0..1) */
  performerRole?: CodeableConcept;
  /** Actor that wil execute (or not) the action (0..1) */
  performer?: Reference;
  /** Pointer to specific item (0..*) */
  performerLinkId?: Array<string>;
  /** Id and extensions of the primitive `performerLinkId`. */
  _performerLinkId?: Array<Element | null>;
  /** Why is action (not) needed? (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Why is action (not) needed? (0..*) */
  reasonReference?: Array<Reference>;
  /** Why action is to be performed (0..*) */
  reason?: Array<string>;
  /** Id and extensions of the primitive `reason`. */
  _reason?: Array<Element | null>;
  /** Pointer to specific item (0..*) */
  reasonLinkId?: Array<string>;
  /** Id and extensions of the primitive `reasonLinkId`. */
  _reasonLinkId?: Array<Element | null>;
  /** Comments about the action (0..*) */
  note?: Array<Annotation>;
  /** Action restriction numbers (0..*) */
  securityLabelNumber?: Array<number>;
  /** Id and extensions of the primitive `securityLabelNumber`. */
  _securityLabelNumber?: Array<Element | null>;
}

/**
 * Entity of the action
 */
export class ContractSubject {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Entity of the action (1..*) */
  reference: Array<Reference>;
  /** Role type of the agent (0..1) */
  role?: CodeableConcept;
}

/**
 * Contract Signatory
 */
export class ContractSigner {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Signatory Role (1..1) */
  type: Coding;
  /** Contract Signatory Party (1..1) */
  party: Reference;
  /** Contract Documentation Signature (1..*) */
  signature: Array<Signature>;
}

/**
 * Contract Friendly Language
 */
export class ContractFriendly {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Easily comprehended representation of this Contract (1..1) */
  contentAttachment?: Attachment;
  /** Easily comprehended representation of this Contract (1..1) */
  contentReference?: Reference;
}

/**
 * Contract Legal Language
 */
export class ContractLegal {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Legal Text (1..1) */
  contentAttachment?: Attachment;
  /** Contract Legal Text (1..1) */
  contentReference?: Reference;
}

/**
 * Computable Contract Language
 */
export class ContractRule {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Computable Contract Rules (1..1) */
  contentAttachment?: Attachment;
  /** Computable Contract Rules (1..1) */
  contentReference?: Reference;
}
