/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Permission resource holds access rules for a given data and context.
 */
export interface Permission {
  resourceType: 'Permission';
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
  /** active | entered-in-error | draft | rejected (1..1) */
  status?: Permission.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The person or entity that asserts the permission (0..1) */
  asserter?: Reference;
  /** The date that permission was asserted (0..*) */
  date?: Array<string>;
  /** Id and extensions of the primitive `date`. */
  _date?: Array<Element | null>;
  /** The period in which the permission is active (0..1) */
  validity?: Period;
  /** The asserted justification for using the data (0..1) */
  justification?: PermissionJustification;
  /** deny-overrides | permit-overrides | ordered-deny-overrides | ordered-permit-overrides | deny-unless-permit | permit-unless-deny (1..1) */
  combining?: Permission.CombiningEnum;
  /** Id and extensions of the primitive `combining`. */
  _combining?: Element;
  /** Constraints to the Permission (0..*) */
  rule?: Array<PermissionRule>;
}

export namespace Permission {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/permission-status */
  export type StatusEnum = 'active' | 'entered-in-error' | 'draft' | 'rejected';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    Rejected: 'rejected' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/permission-rule-combining */
  export type CombiningEnum =
    | 'deny-overrides'
    | 'permit-overrides'
    | 'ordered-deny-overrides'
    | 'ordered-permit-overrides'
    | 'deny-unless-permit'
    | 'permit-unless-deny';
  export const CombiningEnum = {
    DenyOverrides: 'deny-overrides' as CombiningEnum,
    PermitOverrides: 'permit-overrides' as CombiningEnum,
    OrderedDenyOverrides: 'ordered-deny-overrides' as CombiningEnum,
    OrderedPermitOverrides: 'ordered-permit-overrides' as CombiningEnum,
    DenyUnlessPermit: 'deny-unless-permit' as CombiningEnum,
    PermitUnlessDeny: 'permit-unless-deny' as CombiningEnum,
  };
}

/**
 * The asserted justification for using the data
 */
export interface PermissionJustification {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The regulatory grounds upon which this Permission builds (0..*) */
  basis?: Array<CodeableConcept>;
  /** Justifing rational (0..*) */
  evidence?: Array<Reference>;
}

/**
 * Constraints to the Permission
 */
export interface PermissionRule {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** deny | permit (0..1) */
  type?: PermissionRule.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** The selection criteria to identify data that is within scope of this provision (0..*) */
  data?: Array<PermissionData>;
  /** A description or definition of which activities are allowed to be done on the data (0..*) */
  activity?: Array<PermissionActivity>;
  /** What limits apply to the use of the data (0..*) */
  limit?: Array<CodeableConcept>;
}

export namespace PermissionRule {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/consent-provision-type */
  export type TypeEnum = 'deny' | 'permit';
  export const TypeEnum = { Deny: 'deny' as TypeEnum, Permit: 'permit' as TypeEnum };
}

/**
 * The selection criteria to identify data that is within scope of this provision
 */
export interface PermissionData {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Explicit FHIR Resource references (0..*) */
  resource?: Array<PermissionResource>;
  /** Security tag code on .meta.security (0..*) */
  security?: Array<Coding>;
  /** Timeframe encompasing data create/update (0..*) */
  period?: Array<Period>;
  /** Expression identifying the data (0..1) */
  expression?: Expression;
}

/**
 * Explicit FHIR Resource references
 */
export interface PermissionResource {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** instance | related | dependents | authoredby (1..1) */
  meaning?: PermissionResource.MeaningEnum;
  /** Id and extensions of the primitive `meaning`. */
  _meaning?: Element;
  /** The actual data reference (1..1) */
  reference: Reference;
}

export namespace PermissionResource {
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
 * A description or definition of which activities are allowed to be done on the data
 */
export interface PermissionActivity {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Authorized actor(s) (0..*) */
  actor?: Array<Reference>;
  /** Actions controlled by this rule (0..*) */
  action?: Array<CodeableConcept>;
  /** The purpose for which the permission is given (0..*) */
  purpose?: Array<CodeableConcept>;
}
