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
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export interface CoverageEligibilityResponse {
  resourceType: 'CoverageEligibilityResponse';
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
  /** Business Identifier for coverage eligiblity request (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: CoverageEligibilityResponse.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** auth-requirements | benefits | discovery | validation (1..*) */
  purpose?: Array<CoverageEligibilityResponse.PurposeEnum>;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Array<Element | null>;
  /** Intended recipient of products and services (1..1) */
  patient: Reference;
  /** Event information (0..*) */
  event?: Array<CoverageEligibilityResponseEvent>;
  /** Estimated date or dates of service (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Estimated date or dates of service (0..1) */
  servicedPeriod?: Period;
  /** Response creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Party responsible for the request (0..1) */
  requestor?: Reference;
  /** Eligibility request reference (1..1) */
  request: Reference;
  /** queued | complete | error | partial (1..1) */
  outcome?: CoverageEligibilityResponse.OutcomeEnum;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;
  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** Coverage issuer (1..1) */
  insurer: Reference;
  /** Patient insurance information (0..*) */
  insurance?: Array<CoverageEligibilityResponseInsurance>;
  /** Preauthorization reference (0..1) */
  preAuthRef?: string;
  /** Id and extensions of the primitive `preAuthRef`. */
  _preAuthRef?: Element;
  /** Printed form identifier (0..1) */
  form?: CodeableConcept;
  /** Processing errors (0..*) */
  error?: Array<CoverageEligibilityResponseError>;
}

export namespace CoverageEligibilityResponse {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose */
  export type PurposeEnum = 'auth-requirements' | 'benefits' | 'discovery' | 'validation';
  export const PurposeEnum = {
    AuthRequirements: 'auth-requirements' as PurposeEnum,
    Benefits: 'benefits' as PurposeEnum,
    Discovery: 'discovery' as PurposeEnum,
    Validation: 'validation' as PurposeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/eligibility-outcome */
  export type OutcomeEnum = 'queued' | 'complete' | 'error' | 'partial';
  export const OutcomeEnum = {
    Queued: 'queued' as OutcomeEnum,
    Complete: 'complete' as OutcomeEnum,
    Error: 'error' as OutcomeEnum,
    Partial: 'partial' as OutcomeEnum,
  };
}

/**
 * Event information
 */
export interface CoverageEligibilityResponseEvent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Specific event (1..1) */
  type: CodeableConcept;
  /** Occurance date or period (1..1) */
  whenDateTime?: string;
  /** Id and extensions of the primitive `whenDateTime`. */
  _whenDateTime?: Element;
  /** Occurance date or period (1..1) */
  whenPeriod?: Period;
}

/**
 * Patient insurance information
 */
export interface CoverageEligibilityResponseInsurance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Insurance information (1..1) */
  coverage: Reference;
  /** Coverage inforce indicator (0..1) */
  inforce?: boolean;
  /** Id and extensions of the primitive `inforce`. */
  _inforce?: Element;
  /** When the benefits are applicable (0..1) */
  benefitPeriod?: Period;
  /** Benefits and authorization details (0..*) */
  item?: Array<CoverageEligibilityResponseItem>;
}

/**
 * Benefits and authorization details
 */
export interface CoverageEligibilityResponseItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Benefit classification (0..1) */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code (0..1) */
  productOrService?: CodeableConcept;
  /** Product or service billing modifiers (0..*) */
  modifier?: Array<CodeableConcept>;
  /** Performing practitioner (0..1) */
  provider?: Reference;
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
  benefit?: Array<CoverageEligibilityResponseBenefit>;
  /** Authorization required flag (0..1) */
  authorizationRequired?: boolean;
  /** Id and extensions of the primitive `authorizationRequired`. */
  _authorizationRequired?: Element;
  /** Type of required supporting materials (0..*) */
  authorizationSupporting?: Array<CodeableConcept>;
  /** Preauthorization requirements endpoint (0..1) */
  authorizationUrl?: string;
  /** Id and extensions of the primitive `authorizationUrl`. */
  _authorizationUrl?: Element;
}

/**
 * Benefit Summary
 */
export interface CoverageEligibilityResponseBenefit {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Benefit classification (1..1) */
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
  usedString?: string;
  /** Id and extensions of the primitive `usedString`. */
  _usedString?: Element;
  /** Benefits used (0..1) */
  usedMoney?: Money;
}

/**
 * Processing errors
 */
export interface CoverageEligibilityResponseError {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Error code detailing processing issues (1..1) */
  code: CodeableConcept;
  /** FHIRPath of element(s) related to issue (0..*) */
  expression?: Array<string>;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Array<Element | null>;
}
