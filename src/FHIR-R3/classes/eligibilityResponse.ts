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
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for EligibilityResponse Resource
 */
export class EligibilityResponse {
  resourceType: 'EligibilityResponse';
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
  status?: EligibilityResponse.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Responsible practitioner (0..1) */
  requestProvider?: Reference;
  /** Responsible organization (0..1) */
  requestOrganization?: Reference;
  /** Eligibility reference (0..1) */
  request?: Reference;
  /** complete | error | partial (0..1) */
  outcome?: CodeableConcept;
  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** Insurer issuing the coverage (0..1) */
  insurer?: Reference;
  /** Coverage inforce indicator (0..1) */
  inforce?: boolean;
  /** Id and extensions of the primitive `inforce`. */
  _inforce?: Element;
  /** Details by insurance coverage (0..*) */
  insurance?: Array<EligibilityResponseInsurance>;
  /** Printed Form Identifier (0..1) */
  form?: CodeableConcept;
  /** Processing errors (0..*) */
  error?: Array<EligibilityResponseError>;
}

export namespace EligibilityResponse {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Details by insurance coverage
 */
export class EligibilityResponseInsurance {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Updated Coverage details (0..1) */
  coverage?: Reference;
  /** Contract details (0..1) */
  contract?: Reference;
  /** Benefits by Category (0..*) */
  benefitBalance?: Array<EligibilityResponseBenefitBalance>;
}

/**
 * Benefits by Category
 */
export class EligibilityResponseBenefitBalance {
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
  financial?: Array<EligibilityResponseFinancial>;
}

/**
 * Benefit Summary
 */
export class EligibilityResponseFinancial {
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

/**
 * Processing errors
 */
export class EligibilityResponseError {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Error code detailing processing issues (1..1) */
  code: CodeableConcept;
}
