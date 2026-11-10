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
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Consent Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier for this record (external references) (0..1) */
  identifier?: Identifier;
  /** draft | proposed | active | rejected | inactive | entered-in-error (1..1) */
  status?: Consent.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Classification of the consent statement - for indexing/retrieval (0..*) */
  category?: Array<CodeableConcept>;
  /** Who the consent applies to (1..1) */
  patient: Reference;
  /** Period that this consent applies (0..1) */
  period?: Period;
  /** When this Consent was created or indexed (0..1) */
  dateTime?: string;
  /** Id and extensions of the primitive `dateTime`. */
  _dateTime?: Element;
  /** Who is agreeing to the policy and exceptions (0..*) */
  consentingParty?: Array<Reference>;
  /** Who|what controlled by this consent (or group, by role) (0..*) */
  actor?: Array<ConsentActor>;
  /** Actions controlled by this consent (0..*) */
  action?: Array<CodeableConcept>;
  /** Custodian of the consent (0..*) */
  organization?: Array<Reference>;
  /** Source from which this consent is taken (0..1) */
  sourceAttachment?: Attachment;
  /** Source from which this consent is taken (0..1) */
  sourceIdentifier?: Identifier;
  /** Source from which this consent is taken (0..1) */
  sourceReference?: Reference;
  /** Policies covered by this consent (0..*) */
  policy?: Array<ConsentPolicy>;
  /** Policy that this consents to (0..1) */
  policyRule?: string;
  /** Id and extensions of the primitive `policyRule`. */
  _policyRule?: Element;
  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Array<Coding>;
  /** Context of activities for which the agreement is made (0..*) */
  purpose?: Array<Coding>;
  /** Timeframe for data controlled by this consent (0..1) */
  dataPeriod?: Period;
  /** Data controlled by this consent (0..*) */
  data?: Array<ConsentData>;
  /** Additional rule - addition or removal of permissions (0..*) */
  except?: Array<ConsentExcept>;
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
 * Who|what controlled by this consent (or group, by role)
 */
export class ConsentActor {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** How the actor is involved (1..1) */
  role: CodeableConcept;
  /** Resource for the actor (or group, by role) (1..1) */
  reference: Reference;
}

/**
 * Policies covered by this consent
 */
export class ConsentPolicy {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
 * Data controlled by this consent
 */
export class ConsentData {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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

/**
 * Additional rule - addition or removal of permissions
 */
export class ConsentExcept {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** deny | permit (1..1) */
  type?: ConsentExcept.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Timeframe for this exception (0..1) */
  period?: Period;
  /** Who|what controlled by this exception (or group, by role) (0..*) */
  actor?: Array<ConsentActor1>;
  /** Actions controlled by this exception (0..*) */
  action?: Array<CodeableConcept>;
  /** Security Labels that define affected resources (0..*) */
  securityLabel?: Array<Coding>;
  /** Context of activities covered by this exception (0..*) */
  purpose?: Array<Coding>;
  /** e.g. Resource Type, Profile, or CDA etc (0..*) */
  class?: Array<Coding>;
  /** e.g. LOINC or SNOMED CT code, etc in the content (0..*) */
  code?: Array<Coding>;
  /** Timeframe for data controlled by this exception (0..1) */
  dataPeriod?: Period;
  /** Data controlled by this exception (0..*) */
  data?: Array<ConsentData1>;
}

export namespace ConsentExcept {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/consent-except-type */
  export type TypeEnum = 'deny' | 'permit';
  export const TypeEnum = { Deny: 'deny' as TypeEnum, Permit: 'permit' as TypeEnum };
}

/**
 * Who|what controlled by this exception (or group, by role)
 */
export class ConsentActor1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** How the actor is involved (1..1) */
  role: CodeableConcept;
  /** Resource for the actor (or group, by role) (1..1) */
  reference: Reference;
}

/**
 * Data controlled by this exception
 */
export class ConsentData1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** instance | related | dependents | authoredby (1..1) */
  meaning?: ConsentData1.MeaningEnum;
  /** Id and extensions of the primitive `meaning`. */
  _meaning?: Element;
  /** The actual data reference (1..1) */
  reference: Reference;
}

export namespace ConsentData1 {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/consent-data-meaning */
  export type MeaningEnum = 'instance' | 'related' | 'dependents' | 'authoredby';
  export const MeaningEnum = {
    Instance: 'instance' as MeaningEnum,
    Related: 'related' as MeaningEnum,
    Dependents: 'dependents' as MeaningEnum,
    Authoredby: 'authoredby' as MeaningEnum,
  };
}
