/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
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
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export interface Coverage {
  resourceType: 'Coverage';
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
  /** Business identifier(s) for this coverage (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: Coverage.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** insurance | self-pay | other (1..1) */
  kind?: Coverage.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Self-pay parties and responsibility (0..*) */
  paymentBy?: Array<CoveragePaymentBy>;
  /** Coverage category such as medical or accident (0..1) */
  type?: CodeableConcept;
  /** Owner of the policy (0..1) */
  policyHolder?: Reference;
  /** Subscriber to the policy (0..1) */
  subscriber?: Reference;
  /** ID assigned to the subscriber (0..*) */
  subscriberId?: Array<Identifier>;
  /** Plan beneficiary (1..1) */
  beneficiary: Reference;
  /** Dependent number (0..1) */
  dependent?: string;
  /** Id and extensions of the primitive `dependent`. */
  _dependent?: Element;
  /** Beneficiary relationship to the subscriber (0..1) */
  relationship?: CodeableConcept;
  /** Coverage start and end dates (0..1) */
  period?: Period;
  /** Issuer of the policy (0..1) */
  insurer?: Reference;
  /** Additional coverage classifications (0..*) */
  class?: Array<CoverageClass>;
  /** Relative order of the coverage (0..1) */
  order?: number;
  /** Id and extensions of the primitive `order`. */
  _order?: Element;
  /** Insurer network (0..1) */
  network?: string;
  /** Id and extensions of the primitive `network`. */
  _network?: Element;
  /** Patient payments for services/products (0..*) */
  costToBeneficiary?: Array<CoverageCostToBeneficiary>;
  /** Reimbursement to insurer (0..1) */
  subrogation?: boolean;
  /** Id and extensions of the primitive `subrogation`. */
  _subrogation?: Element;
  /** Contract details (0..*) */
  contract?: Array<Reference>;
  /** Insurance plan details (0..1) */
  insurancePlan?: Reference;
}

export namespace Coverage {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/coverage-kind */
  export type KindEnum = 'insurance' | 'self-pay' | 'other';
  export const KindEnum = {
    Insurance: 'insurance' as KindEnum,
    SelfPay: 'self-pay' as KindEnum,
    Other: 'other' as KindEnum,
  };
}

/**
 * Self-pay parties and responsibility
 */
export interface CoveragePaymentBy {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Parties performing self-payment (1..1) */
  party: Reference;
  /** Party's responsibility (0..1) */
  responsibility?: string;
  /** Id and extensions of the primitive `responsibility`. */
  _responsibility?: Element;
}

/**
 * Additional coverage classifications
 */
export interface CoverageClass {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of class such as 'group' or 'plan' (1..1) */
  type: CodeableConcept;
  /** Value associated with the type (1..1) */
  value: Identifier;
  /** Human readable description of the type and value (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
}

/**
 * Patient payments for services/products
 */
export interface CoverageCostToBeneficiary {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Cost category (0..1) */
  type?: CodeableConcept;
  /** Benefit classification (0..1) */
  category?: CodeableConcept;
  /** In or out of network (0..1) */
  network?: CodeableConcept;
  /** Individual or family (0..1) */
  unit?: CodeableConcept;
  /** Annual or lifetime (0..1) */
  term?: CodeableConcept;
  /** The amount or percentage due from the beneficiary (0..1) */
  valueQuantity?: Quantity;
  /** The amount or percentage due from the beneficiary (0..1) */
  valueMoney?: Money;
  /** Exceptions for patient payments (0..*) */
  exception?: Array<CoverageException>;
}

/**
 * Exceptions for patient payments
 */
export interface CoverageException {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Exception category (1..1) */
  type: CodeableConcept;
  /** The effective period of the exception (0..1) */
  period?: Period;
}
