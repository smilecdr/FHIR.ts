/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { Signature } from './signature';
import type { Timing } from './timing';

/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export class VerificationResult {
  resourceType: 'VerificationResult';
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
  /** A resource that was validated (0..*) */
  target?: Array<Reference>;
  /** The fhirpath location(s) within the resource that was validated (0..*) */
  targetLocation?: Array<string>;
  /** Id and extensions of the primitive `targetLocation`. */
  _targetLocation?: Array<Element | null>;
  /** none | initial | periodic (0..1) */
  need?: CodeableConcept;
  /** attested | validated | in-process | req-revalid | val-fail | reval-fail (1..1) */
  status?: VerificationResult.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** When the validation status was updated (0..1) */
  statusDate?: Date | string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;
  /** nothing | primary | multiple (0..1) */
  validationType?: CodeableConcept;
  /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) (0..*) */
  validationProcess?: Array<CodeableConcept>;
  /** Frequency of revalidation (0..1) */
  frequency?: Timing;
  /** The date/time validation was last completed (including failed validations) (0..1) */
  lastPerformed?: Date | string;
  /** Id and extensions of the primitive `lastPerformed`. */
  _lastPerformed?: Element;
  /** The date when target is next validated, if appropriate (0..1) */
  nextScheduled?: Date | string;
  /** Id and extensions of the primitive `nextScheduled`. */
  _nextScheduled?: Element;
  /** fatal | warn | rec-only | none (0..1) */
  failureAction?: CodeableConcept;
  /** Information about the primary source(s) involved in validation (0..*) */
  primarySource?: Array<VerificationResultPrimarySource>;
  /** Information about the entity attesting to information (0..1) */
  attestation?: VerificationResultAttestation;
  /** Information about the entity validating information (0..*) */
  validator?: Array<VerificationResultValidator>;
}

export namespace VerificationResult {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/verificationresult-status */
  export type StatusEnum =
    'attested' | 'validated' | 'in-process' | 'req-revalid' | 'val-fail' | 'reval-fail';
  export const StatusEnum = {
    Attested: 'attested' as StatusEnum,
    Validated: 'validated' as StatusEnum,
    InProcess: 'in-process' as StatusEnum,
    ReqRevalid: 'req-revalid' as StatusEnum,
    ValFail: 'val-fail' as StatusEnum,
    RevalFail: 'reval-fail' as StatusEnum,
  };
}

/**
 * Information about the primary source(s) involved in validation
 */
export class VerificationResultPrimarySource {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to the primary source (0..1) */
  who?: Reference;
  /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source) (0..*) */
  type?: Array<CodeableConcept>;
  /** Method for exchanging information with the primary source (0..*) */
  communicationMethod?: Array<CodeableConcept>;
  /** successful | failed | unknown (0..1) */
  validationStatus?: CodeableConcept;
  /** When the target was validated against the primary source (0..1) */
  validationDate?: Date | string;
  /** Id and extensions of the primitive `validationDate`. */
  _validationDate?: Element;
  /** yes | no | undetermined (0..1) */
  canPushUpdates?: CodeableConcept;
  /** specific | any | source (0..*) */
  pushTypeAvailable?: Array<CodeableConcept>;
}

/**
 * Information about the entity attesting to information
 */
export class VerificationResultAttestation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The individual or organization attesting to information (0..1) */
  who?: Reference;
  /** When the who is asserting on behalf of another (organization or individual) (0..1) */
  onBehalfOf?: Reference;
  /** The method by which attested information was submitted/retrieved (0..1) */
  communicationMethod?: CodeableConcept;
  /** The date the information was attested to (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** A digital identity certificate associated with the attestation source (0..1) */
  sourceIdentityCertificate?: string;
  /** Id and extensions of the primitive `sourceIdentityCertificate`. */
  _sourceIdentityCertificate?: Element;
  /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source (0..1) */
  proxyIdentityCertificate?: string;
  /** Id and extensions of the primitive `proxyIdentityCertificate`. */
  _proxyIdentityCertificate?: Element;
  /** Proxy signature (0..1) */
  proxySignature?: Signature;
  /** Attester signature (0..1) */
  sourceSignature?: Signature;
}

/**
 * Information about the entity validating information
 */
export class VerificationResultValidator {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to the organization validating information (1..1) */
  organization: Reference;
  /** A digital identity certificate associated with the validator (0..1) */
  identityCertificate?: string;
  /** Id and extensions of the primitive `identityCertificate`. */
  _identityCertificate?: Element;
  /** Validator signature (0..1) */
  attestationSignature?: Signature;
}
