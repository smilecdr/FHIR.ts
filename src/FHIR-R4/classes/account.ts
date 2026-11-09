/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A financial tool for tracking value accrued for a particular purpose. In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export class Account {
  resourceType: 'Account';
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
  /** Account number (0..*) */
  identifier?: Array<Identifier>;
  /** active | inactive | entered-in-error | on-hold | unknown (1..1) */
  status?: Account.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** E.g. patient, expense, depreciation (0..1) */
  type?: CodeableConcept;
  /** Human-readable label (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** The entity that caused the expenses (0..*) */
  subject?: Array<Reference>;
  /** Transaction window (0..1) */
  servicePeriod?: Period;
  /** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account (0..*) */
  coverage?: Array<AccountCoverage>;
  /** Entity managing the Account (0..1) */
  owner?: Reference;
  /** Explanation of purpose/use (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The parties ultimately responsible for balancing the Account (0..*) */
  guarantor?: Array<AccountGuarantor>;
  /** Reference to a parent Account (0..1) */
  partOf?: Reference;
}

export namespace Account {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/account-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error' | 'on-hold' | 'unknown';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
 */
export class AccountCoverage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The party(s), such as insurances, that may contribute to the payment of this account (1..1) */
  coverage: Reference;
  /** The priority of the coverage in the context of this account (0..1) */
  priority?: number;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
}

/**
 * The parties ultimately responsible for balancing the Account
 */
export class AccountGuarantor {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Responsible entity (1..1) */
  party: Reference;
  /** Credit or other hold applied (0..1) */
  onHold?: boolean;
  /** Id and extensions of the primitive `onHold`. */
  _onHold?: Element;
  /** Guarantee account during (0..1) */
  period?: Period;
}
