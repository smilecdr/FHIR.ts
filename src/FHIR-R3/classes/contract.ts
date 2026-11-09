/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

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

/**
 * Base StructureDefinition for Contract Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract number (0..1) */
  identifier?: Identifier;
  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated (0..1) */
  status?: Contract.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** When this Contract was issued (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;
  /** Effective time (0..1) */
  applies?: Period;
  /** Contract Target Entity (0..*) */
  subject?: Array<Reference>;
  /** Context of the Contract (0..*) */
  topic?: Array<Reference>;
  /** Authority under which this Contract has standing (0..*) */
  authority?: Array<Reference>;
  /** Domain in which this Contract applies (0..*) */
  domain?: Array<Reference>;
  /** Type or form (0..1) */
  type?: CodeableConcept;
  /** Subtype within the context of type (0..*) */
  subType?: Array<CodeableConcept>;
  /** Action stipulated by this Contract (0..*) */
  action?: Array<CodeableConcept>;
  /** Rationale for the stiplulated action (0..*) */
  actionReason?: Array<CodeableConcept>;
  /** Decision by Grantor (0..1) */
  decisionType?: CodeableConcept;
  /** Content derived from the basal information (0..1) */
  contentDerivative?: CodeableConcept;
  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Array<Coding>;
  /** Entity being ascribed responsibility (0..*) */
  agent?: Array<ContractAgent>;
  /** Contract Signatory (0..*) */
  signer?: Array<ContractSigner>;
  /** Contract Valued Item List (0..*) */
  valuedItem?: Array<ContractValuedItem>;
  /** Contract Term List (0..*) */
  term?: Array<ContractTerm>;
  /** Binding Contract (0..1) */
  bindingAttachment?: Attachment;
  /** Binding Contract (0..1) */
  bindingReference?: Reference;
  /** Contract Friendly Language (0..*) */
  friendly?: Array<ContractFriendly>;
  /** Contract Legal Language (0..*) */
  legal?: Array<ContractLegal>;
  /** Computable Contract Language (0..*) */
  rule?: Array<ContractRule>;
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
 * Entity being ascribed responsibility
 */
export class ContractAgent {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Agent Type (1..1) */
  actor: Reference;
  /** Role type of the agent (0..*) */
  role?: Array<CodeableConcept>;
}

/**
 * Contract Signatory
 */
export class ContractSigner {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Signatory Role (1..1) */
  type: Coding;
  /** Contract Signatory Party (1..1) */
  party: Reference;
  /** Contract Documentation Signature (1..*) */
  signature: Array<Signature>;
}

/**
 * Contract Valued Item List
 */
export class ContractValuedItem {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Valued Item Type (0..1) */
  entityCodeableConcept?: CodeableConcept;
  /** Contract Valued Item Type (0..1) */
  entityReference?: Reference;
  /** Contract Valued Item Number (0..1) */
  identifier?: Identifier;
  /** Contract Valued Item Effective Tiem (0..1) */
  effectiveTime?: string;
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
}

/**
 * Contract Term List
 */
export class ContractTerm {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Term Number (0..1) */
  identifier?: Identifier;
  /** Contract Term Issue Date Time (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;
  /** Contract Term Effective Time (0..1) */
  applies?: Period;
  /** Contract Term Type or Form (0..1) */
  type?: CodeableConcept;
  /** Contract Term Type specific classification (0..1) */
  subType?: CodeableConcept;
  /** Context of the Contract term (0..*) */
  topic?: Array<Reference>;
  /** Contract Term Activity (0..*) */
  action?: Array<CodeableConcept>;
  /** Purpose for the Contract Term Action (0..*) */
  actionReason?: Array<CodeableConcept>;
  /** Security Labels that define affected terms (0..*) */
  securityLabel?: Array<Coding>;
  /** Contract Term Agent List (0..*) */
  agent?: Array<ContractAgent1>;
  /** Human readable Contract term text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Contract Term Valued Item List (0..*) */
  valuedItem?: Array<ContractValuedItem1>;
  /** Nested Contract Term Group (0..*) */
  group?: Array<ContractTerm>;
}

/**
 * Contract Term Agent List
 */
export class ContractAgent1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Term Agent Subject (1..1) */
  actor: Reference;
  /** Type of the Contract Term Agent (0..*) */
  role?: Array<CodeableConcept>;
}

/**
 * Contract Term Valued Item List
 */
export class ContractValuedItem1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Contract Term Valued Item Type (0..1) */
  entityCodeableConcept?: CodeableConcept;
  /** Contract Term Valued Item Type (0..1) */
  entityReference?: Reference;
  /** Contract Term Valued Item Number (0..1) */
  identifier?: Identifier;
  /** Contract Term Valued Item Effective Tiem (0..1) */
  effectiveTime?: string;
  /** Id and extensions of the primitive `effectiveTime`. */
  _effectiveTime?: Element;
  /** Contract Term Valued Item Count (0..1) */
  quantity?: Quantity;
  /** Contract Term Valued Item fee, charge, or cost (0..1) */
  unitPrice?: Money;
  /** Contract Term Valued Item Price Scaling Factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Contract Term Valued Item Difficulty Scaling Factor (0..1) */
  points?: number;
  /** Id and extensions of the primitive `points`. */
  _points?: Element;
  /** Total Contract Term Valued Item Value (0..1) */
  net?: Money;
}

/**
 * Contract Friendly Language
 */
export class ContractFriendly {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Computable Contract Rules (1..1) */
  contentAttachment?: Attachment;
  /** Computable Contract Rules (1..1) */
  contentReference?: Reference;
}
