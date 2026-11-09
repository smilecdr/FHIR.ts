/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
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
import type { Resource } from './resourceList';

/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export class CoverageEligibilityRequest {
  resourceType: 'CoverageEligibilityRequest';
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
  /** Business Identifier for coverage eligiblity request (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: CoverageEligibilityRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Desired processing priority (0..1) */
  priority?: CodeableConcept;
  /** auth-requirements | benefits | discovery | validation (1..*) */
  purpose?: Array<CoverageEligibilityRequest.PurposeEnum>;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Array<Element | null>;
  /** Intended recipient of products and services (1..1) */
  patient: Reference;
  /** Estimated date or dates of service (0..1) */
  servicedDate?: Date | string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Estimated date or dates of service (0..1) */
  servicedPeriod?: Period;
  /** Creation date (1..1) */
  created?: Date | string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Author (0..1) */
  enterer?: Reference;
  /** Party responsible for the request (0..1) */
  provider?: Reference;
  /** Coverage issuer (1..1) */
  insurer: Reference;
  /** Servicing facility (0..1) */
  facility?: Reference;
  /** Supporting information (0..*) */
  supportingInfo?: Array<CoverageEligibilityRequestSupportingInfo>;
  /** Patient insurance information (0..*) */
  insurance?: Array<CoverageEligibilityRequestInsurance>;
  /** Item to be evaluated for eligibiity (0..*) */
  item?: Array<CoverageEligibilityRequestItem>;
}

export namespace CoverageEligibilityRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/eligibilityrequest-purpose */
  export type PurposeEnum = 'auth-requirements' | 'benefits' | 'discovery' | 'validation';
  export const PurposeEnum = {
    AuthRequirements: 'auth-requirements' as PurposeEnum,
    Benefits: 'benefits' as PurposeEnum,
    Discovery: 'discovery' as PurposeEnum,
    Validation: 'validation' as PurposeEnum,
  };
}

/**
 * Supporting information
 */
export class CoverageEligibilityRequestSupportingInfo {
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
  /** Data to be provided (1..1) */
  information: Reference;
  /** Applies to all items (0..1) */
  appliesToAll?: boolean;
  /** Id and extensions of the primitive `appliesToAll`. */
  _appliesToAll?: Element;
}

/**
 * Patient insurance information
 */
export class CoverageEligibilityRequestInsurance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Applicable coverage (0..1) */
  focal?: boolean;
  /** Id and extensions of the primitive `focal`. */
  _focal?: Element;
  /** Insurance information (1..1) */
  coverage: Reference;
  /** Additional provider contract number (0..1) */
  businessArrangement?: string;
  /** Id and extensions of the primitive `businessArrangement`. */
  _businessArrangement?: Element;
}

/**
 * Item to be evaluated for eligibiity
 */
export class CoverageEligibilityRequestItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Applicable exception or supporting information (0..*) */
  supportingInfoSequence?: Array<number>;
  /** Id and extensions of the primitive `supportingInfoSequence`. */
  _supportingInfoSequence?: Array<Element | null>;
  /** Benefit classification (0..1) */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;
  /** Product or service billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Perfoming practitioner (0..1) */
  provider?: Reference;
  /** Count of products or services (0..1) */
  quantity?: Quantity;
  /** Fee, charge or cost per item (0..1) */
  unitPrice?: Money;
  /** Servicing facility (0..1) */
  facility?: Reference;
  /** Applicable diagnosis (0..*) */
  diagnosis?: Array<CoverageEligibilityRequestDiagnosis>;
  /** Product or service details (0..*) */
  detail?: Array<Reference>;
}

/**
 * Applicable diagnosis
 */
export class CoverageEligibilityRequestDiagnosis {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Nature of illness or problem (0..1) */
  diagnosisCodeableConcept?: CodeableConcept;
  /** Nature of illness or problem (0..1) */
  diagnosisReference?: Reference;
}
