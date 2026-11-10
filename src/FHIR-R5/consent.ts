/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A record of a healthcare consumer’s choices or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export interface Consent {
  resourceType: 'Consent';
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
  /** Identifier for this record (external references) (0..*) */
  identifier?: Array<Identifier>;
  /** draft | active | inactive | not-done | entered-in-error | unknown (1..1) */
  status?: Consent.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Classification of the consent statement - for indexing/retrieval (0..*) */
  category?: Array<CodeableConcept>;
  /** Who the consent applies to (0..1) */
  subject?: Reference;
  /** Fully executed date of the consent (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Effective period for this Consent (0..1) */
  period?: Period;
  /** Who is granting rights according to the policy and rules (0..*) */
  grantor?: Array<Reference>;
  /** Who is agreeing to the policy and rules (0..*) */
  grantee?: Array<Reference>;
  /** Consent workflow management (0..*) */
  manager?: Array<Reference>;
  /** Consent Enforcer (0..*) */
  controller?: Array<Reference>;
  /** Source from which this consent is taken (0..*) */
  sourceAttachment?: Array<Attachment>;
  /** Source from which this consent is taken (0..*) */
  sourceReference?: Array<Reference>;
  /** Regulations establishing base Consent (0..*) */
  regulatoryBasis?: Array<CodeableConcept>;
  /** Computable version of the backing policy (0..1) */
  policyBasis?: ConsentPolicyBasis;
  /** Human Readable Policy (0..*) */
  policyText?: Array<Reference>;
  /** Consent Verified by patient or family (0..*) */
  verification?: Array<ConsentVerification>;
  /** deny | permit (0..1) */
  decision?: Consent.DecisionEnum;
  /** Id and extensions of the primitive `decision`. */
  _decision?: Element;
  /** Constraints to the base Consent.policyRule/Consent.policy (0..*) */
  provision?: Array<ConsentProvision>;
}

export namespace Consent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/consent-state-codes */
  export type StatusEnum =
    'draft' | 'active' | 'inactive' | 'not-done' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    NotDone: 'not-done' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/consent-provision-type */
  export type DecisionEnum = 'deny' | 'permit';
  export const DecisionEnum = { Deny: 'deny' as DecisionEnum, Permit: 'permit' as DecisionEnum };
}

/**
 * Computable version of the backing policy
 */
export interface ConsentPolicyBasis {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference backing policy resource (0..1) */
  reference?: Reference;
  /** URL to a computable backing policy (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

/**
 * Consent Verified by patient or family
 */
export interface ConsentVerification {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Has been verified (1..1) */
  verified?: boolean;
  /** Id and extensions of the primitive `verified`. */
  _verified?: Element;
  /** Business case of verification (0..1) */
  verificationType?: CodeableConcept;
  /** Person conducting verification (0..1) */
  verifiedBy?: Reference;
  /** Person who verified (0..1) */
  verifiedWith?: Reference;
  /** When consent verified (0..*) */
  verificationDate?: Array<string>;
  /** Id and extensions of the primitive `verificationDate`. */
  _verificationDate?: Array<Element | null>;
}

/**
 * Constraints to the base Consent.policyRule/Consent.policy
 */
export interface ConsentProvision {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Timeframe for this provision (0..1) */
  period?: Period;
  /** Who|what controlled by this provision (or group, by role) (0..*) */
  actor?: Array<ConsentActor>;
  /** Actions controlled by this provision (0..*) */
  action?: Array<CodeableConcept>;
  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Array<Coding>;
  /** Context of activities covered by this provision (0..*) */
  purpose?: Array<Coding>;
  /** e.g. Resource Type, Profile, CDA, etc (0..*) */
  documentType?: Array<Coding>;
  /** e.g. Resource Type, Profile, etc (0..*) */
  resourceType?: Array<Coding>;
  /** e.g. LOINC or SNOMED CT code, etc. in the content (0..*) */
  code?: Array<CodeableConcept>;
  /** Timeframe for data controlled by this provision (0..1) */
  dataPeriod?: Period;
  /** Data controlled by this provision (0..*) */
  data?: Array<ConsentData>;
  /** A computable expression of the consent (0..1) */
  expression?: Expression;
  /** Nested Exception Provisions (0..*) */
  provision?: Array<ConsentProvision>;
}

/**
 * Who|what controlled by this provision (or group, by role)
 */
export interface ConsentActor {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** How the actor is involved (0..1) */
  role?: CodeableConcept;
  /** Resource for the actor (or group, by role) (0..1) */
  reference?: Reference;
}

/**
 * Data controlled by this provision
 */
export interface ConsentData {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** instance | related | dependents | authoredby (1..1) */
  meaning?: ConsentData.MeaningEnum;
  /** Id and extensions of the primitive `meaning`. */
  _meaning?: Element;
  /** The actual data reference (1..1) */
  reference: Reference;
}

export namespace ConsentData {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/consent-data-meaning */
  export type MeaningEnum = 'instance' | 'related' | 'dependents' | 'authoredby';
  export const MeaningEnum = {
    Instance: 'instance' as MeaningEnum,
    Related: 'related' as MeaningEnum,
    Dependents: 'dependents' as MeaningEnum,
    Authoredby: 'authoredby' as MeaningEnum,
  };
}
