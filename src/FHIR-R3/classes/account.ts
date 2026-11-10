/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
 * Base StructureDefinition for Account Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Account number (0..*) */
  identifier?: Array<Identifier>;
  /** active | inactive | entered-in-error (0..1) */
  status?: Account.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** E.g. patient, expense, depreciation (0..1) */
  type?: CodeableConcept;
  /** Human-readable label (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** What is account tied to? (0..1) */
  subject?: Reference;
  /** Transaction window (0..1) */
  period?: Period;
  /** Time window that transactions may be posted to this account (0..1) */
  active?: Period;
  /** How much is in account? (0..1) */
  balance?: Money;
  /** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account (0..*) */
  coverage?: Array<AccountCoverage>;
  /** Who is responsible? (0..1) */
  owner?: Reference;
  /** Explanation of purpose/use (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Responsible for the account (0..*) */
  guarantor?: Array<AccountGuarantor>;
}

export namespace Account {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/account-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
 */
export class AccountCoverage {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The party(s) that are responsible for covering the payment of this account (1..1) */
  coverage: Reference;
  /** The priority of the coverage in the context of this account (0..1) */
  priority?: number;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
}

/**
 * Responsible for the account
 */
export class AccountGuarantor {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Responsible entity (1..1) */
  party: Reference;
  /** Credit or other hold applied (0..1) */
  onHold?: boolean;
  /** Id and extensions of the primitive `onHold`. */
  _onHold?: Element;
  /** Guarrantee account during (0..1) */
  period?: Period;
}
