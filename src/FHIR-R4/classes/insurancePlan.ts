/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { CodeableConcept } from './codeableConcept';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { HumanName } from './humanName';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export class InsurancePlan {
  resourceType: 'InsurancePlan';
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
  /** Business Identifier for Product (0..*) */
  identifier?: Array<Identifier>;
  /** draft | active | retired | unknown (0..1) */
  status?: InsurancePlan.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Kind of product (0..*) */
  type?: Array<CodeableConcept>;
  /** Official name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Alternate names (0..*) */
  alias?: Array<string>;
  /** Id and extensions of the primitive `alias`. */
  _alias?: Array<Element | null>;
  /** When the product is available (0..1) */
  period?: Period;
  /** Plan issuer (0..1) */
  ownedBy?: Reference;
  /** Product administrator (0..1) */
  administeredBy?: Reference;
  /** Where product applies (0..*) */
  coverageArea?: Array<Reference>;
  /** Contact for the product (0..*) */
  contact?: Array<InsurancePlanContact>;
  /** Technical endpoint (0..*) */
  endpoint?: Array<Reference>;
  /** What networks are Included (0..*) */
  network?: Array<Reference>;
  /** Coverage details (0..*) */
  coverage?: Array<InsurancePlanCoverage>;
  /** Plan details (0..*) */
  plan?: Array<InsurancePlanPlan>;
}

export namespace InsurancePlan {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Contact for the product
 */
export class InsurancePlanContact {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of contact (0..1) */
  purpose?: CodeableConcept;
  /** A name associated with the contact (0..1) */
  name?: HumanName;
  /** Contact details (telephone, email, etc.) for a contact (0..*) */
  telecom?: Array<ContactPoint>;
  /** Visiting or postal addresses for the contact (0..1) */
  address?: Address;
}

/**
 * Coverage details
 */
export class InsurancePlanCoverage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of coverage (1..1) */
  type: CodeableConcept;
  /** What networks provide coverage (0..*) */
  network?: Array<Reference>;
  /** List of benefits (1..*) */
  benefit: Array<InsurancePlanBenefit>;
}

/**
 * List of benefits
 */
export class InsurancePlanBenefit {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of benefit (1..1) */
  type: CodeableConcept;
  /** Referral requirements (0..1) */
  requirement?: string;
  /** Id and extensions of the primitive `requirement`. */
  _requirement?: Element;
  /** Benefit limits (0..*) */
  limit?: Array<InsurancePlanLimit>;
}

/**
 * Benefit limits
 */
export class InsurancePlanLimit {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Maximum value allowed (0..1) */
  value?: Quantity;
  /** Benefit limit details (0..1) */
  code?: CodeableConcept;
}

/**
 * Plan details
 */
export class InsurancePlanPlan {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business Identifier for Product (0..*) */
  identifier?: Array<Identifier>;
  /** Type of plan (0..1) */
  type?: CodeableConcept;
  /** Where product applies (0..*) */
  coverageArea?: Array<Reference>;
  /** What networks provide coverage (0..*) */
  network?: Array<Reference>;
  /** Overall costs (0..*) */
  generalCost?: Array<InsurancePlanGeneralCost>;
  /** Specific costs (0..*) */
  specificCost?: Array<InsurancePlanSpecificCost>;
}

/**
 * Overall costs
 */
export class InsurancePlanGeneralCost {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of cost (0..1) */
  type?: CodeableConcept;
  /** Number of enrollees (0..1) */
  groupSize?: number;
  /** Id and extensions of the primitive `groupSize`. */
  _groupSize?: Element;
  /** Cost value (0..1) */
  cost?: Money;
  /** Additional cost information (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
}

/**
 * Specific costs
 */
export class InsurancePlanSpecificCost {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** General category of benefit (1..1) */
  category: CodeableConcept;
  /** Benefits list (0..*) */
  benefit?: Array<InsurancePlanBenefit1>;
}

/**
 * Benefits list
 */
export class InsurancePlanBenefit1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of specific benefit (1..1) */
  type: CodeableConcept;
  /** List of the costs (0..*) */
  cost?: Array<InsurancePlanCost>;
}

/**
 * List of the costs
 */
export class InsurancePlanCost {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of cost (1..1) */
  type: CodeableConcept;
  /** in-network | out-of-network | other (0..1) */
  applicability?: CodeableConcept;
  /** Additional information about the cost (0..*) */
  qualifiers?: Array<CodeableConcept>;
  /** The actual cost value (0..1) */
  value?: Quantity;
}
