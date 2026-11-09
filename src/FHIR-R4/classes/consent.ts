/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A record of a healthcare consumer’s choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export class Consent {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier for this record (external references) (0..*) */
  identifier?: Array<Identifier>;
  /** draft | proposed | active | rejected | inactive | entered-in-error (1..1) */
  status?: Consent.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Which of the four areas this resource covers (extensible) (1..1) */
  scope: CodeableConcept;
  /** Classification of the consent statement - for indexing/retrieval (1..*) */
  category: Array<CodeableConcept>;
  /** Who the consent applies to (0..1) */
  patient?: Reference;
  /** When this Consent was created or indexed (0..1) */
  dateTime?: Date | string;
  /** Id and extensions of the primitive `dateTime`. */
  _dateTime?: Element;
  /** Who is agreeing to the policy and rules (0..*) */
  performer?: Array<Reference>;
  /** Custodian of the consent (0..*) */
  organization?: Array<Reference>;
  /** Source from which this consent is taken (0..1) */
  sourceAttachment?: Attachment;
  /** Source from which this consent is taken (0..1) */
  sourceReference?: Reference;
  /** Policies covered by this consent (0..*) */
  policy?: Array<ConsentPolicy>;
  /** Regulation that this consents to (0..1) */
  policyRule?: CodeableConcept;
  /** Consent Verified by patient or family (0..*) */
  verification?: Array<ConsentVerification>;
  /** Constraints to the base Consent.policyRule (0..1) */
  provision?: ConsentProvision;
}

export namespace Consent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/consent-state-codes */
  export type StatusEnum =
    'draft' | 'proposed' | 'active' | 'rejected' | 'inactive' | 'entered-in-error';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Proposed: 'proposed' as StatusEnum,
    Active: 'active' as StatusEnum,
    Rejected: 'rejected' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Policies covered by this consent
 */
export class ConsentPolicy {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Enforcement source for policy (0..1) */
  authority?: string;
  /** Id and extensions of the primitive `authority`. */
  _authority?: Element;
  /** Specific policy covered by this consent (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;
}

/**
 * Consent Verified by patient or family
 */
export class ConsentVerification {
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
  /** Person who verified (0..1) */
  verifiedWith?: Reference;
  /** When consent verified (0..1) */
  verificationDate?: Date | string;
  /** Id and extensions of the primitive `verificationDate`. */
  _verificationDate?: Element;
}

/**
 * Constraints to the base Consent.policyRule
 */
export class ConsentProvision {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** deny | permit (0..1) */
  type?: ConsentProvision.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Timeframe for this rule (0..1) */
  period?: Period;
  /** Who|what controlled by this rule (or group, by role) (0..*) */
  actor?: Array<ConsentActor>;
  /** Actions controlled by this rule (0..*) */
  action?: Array<CodeableConcept>;
  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Array<Coding>;
  /** Context of activities covered by this rule (0..*) */
  purpose?: Array<Coding>;
  /** e.g. Resource Type, Profile, CDA, etc. (0..*) */
  class?: Array<Coding>;
  /** e.g. LOINC or SNOMED CT code, etc. in the content (0..*) */
  code?: Array<CodeableConcept>;
  /** Timeframe for data controlled by this rule (0..1) */
  dataPeriod?: Period;
  /** Data controlled by this rule (0..*) */
  data?: Array<ConsentData>;
  /** Nested Exception Rules (0..*) */
  provision?: Array<ConsentProvision>;
}

export namespace ConsentProvision {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/consent-provision-type */
  export type TypeEnum = 'deny' | 'permit';
  export const TypeEnum = { Deny: 'deny' as TypeEnum, Permit: 'permit' as TypeEnum };
}

/**
 * Who|what controlled by this rule (or group, by role)
 */
export class ConsentActor {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** How the actor is involved (1..1) */
  role: CodeableConcept;
  /** Resource for the actor (or group, by role) (1..1) */
  reference: Reference;
}

/**
 * Data controlled by this rule
 */
export class ConsentData {
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
