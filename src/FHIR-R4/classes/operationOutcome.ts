/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Resource } from './resourceList';

/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export class OperationOutcome {
  resourceType: 'OperationOutcome';
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
  /** A single issue associated with the action (1..*) */
  issue: Array<OperationOutcomeIssue>;
}

/**
 * A single issue associated with the action
 */
export class OperationOutcomeIssue {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** fatal | error | warning | information (1..1) */
  severity?: OperationOutcomeIssue.SeverityEnum;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;
  /** Error or warning code (1..1) */
  code?: OperationOutcomeIssue.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Additional details about the error (0..1) */
  details?: CodeableConcept;
  /** Additional diagnostic information about the issue (0..1) */
  diagnostics?: string;
  /** Id and extensions of the primitive `diagnostics`. */
  _diagnostics?: Element;
  /** Deprecated: Path of element(s) related to issue (0..*) */
  location?: Array<string>;
  /** Id and extensions of the primitive `location`. */
  _location?: Array<Element | null>;
  /** FHIRPath of element(s) related to issue (0..*) */
  expression?: Array<string>;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Array<Element | null>;
}

export namespace OperationOutcomeIssue {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/issue-severity */
  export type SeverityEnum = 'fatal' | 'error' | 'warning' | 'information';
  export const SeverityEnum = {
    Fatal: 'fatal' as SeverityEnum,
    Error: 'error' as SeverityEnum,
    Warning: 'warning' as SeverityEnum,
    Information: 'information' as SeverityEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/issue-type */
  export type CodeEnum =
    | 'invalid'
    | 'structure'
    | 'required'
    | 'value'
    | 'invariant'
    | 'security'
    | 'login'
    | 'unknown'
    | 'expired'
    | 'forbidden'
    | 'suppressed'
    | 'processing'
    | 'not-supported'
    | 'duplicate'
    | 'multiple-matches'
    | 'not-found'
    | 'deleted'
    | 'too-long'
    | 'code-invalid'
    | 'extension'
    | 'too-costly'
    | 'business-rule'
    | 'conflict'
    | 'transient'
    | 'lock-error'
    | 'no-store'
    | 'exception'
    | 'timeout'
    | 'incomplete'
    | 'throttled'
    | 'informational';
  export const CodeEnum = {
    Invalid: 'invalid' as CodeEnum,
    Structure: 'structure' as CodeEnum,
    Required: 'required' as CodeEnum,
    Value: 'value' as CodeEnum,
    Invariant: 'invariant' as CodeEnum,
    Security: 'security' as CodeEnum,
    Login: 'login' as CodeEnum,
    Unknown: 'unknown' as CodeEnum,
    Expired: 'expired' as CodeEnum,
    Forbidden: 'forbidden' as CodeEnum,
    Suppressed: 'suppressed' as CodeEnum,
    Processing: 'processing' as CodeEnum,
    NotSupported: 'not-supported' as CodeEnum,
    Duplicate: 'duplicate' as CodeEnum,
    MultipleMatches: 'multiple-matches' as CodeEnum,
    NotFound: 'not-found' as CodeEnum,
    Deleted: 'deleted' as CodeEnum,
    TooLong: 'too-long' as CodeEnum,
    CodeInvalid: 'code-invalid' as CodeEnum,
    Extension: 'extension' as CodeEnum,
    TooCostly: 'too-costly' as CodeEnum,
    BusinessRule: 'business-rule' as CodeEnum,
    Conflict: 'conflict' as CodeEnum,
    Transient: 'transient' as CodeEnum,
    LockError: 'lock-error' as CodeEnum,
    NoStore: 'no-store' as CodeEnum,
    Exception: 'exception' as CodeEnum,
    Timeout: 'timeout' as CodeEnum,
    Incomplete: 'incomplete' as CodeEnum,
    Throttled: 'throttled' as CodeEnum,
    Informational: 'informational' as CodeEnum,
  };
}
