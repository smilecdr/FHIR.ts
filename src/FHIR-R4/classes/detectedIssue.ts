/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export class DetectedIssue {
  resourceType: 'DetectedIssue';
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
  /** Unique id for the detected issue (0..*) */
  identifier?: Array<Identifier>;
  /** registered | preliminary | final | amended + (1..1) */
  status?: DetectedIssue.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Issue Category, e.g. drug-drug, duplicate therapy, etc. (0..1) */
  code?: CodeableConcept;
  /** high | moderate | low (0..1) */
  severity?: DetectedIssue.SeverityEnum;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;
  /** Associated patient (0..1) */
  patient?: Reference;
  /** When identified (0..1) */
  identifiedDateTime?: Date | string;
  /** Id and extensions of the primitive `identifiedDateTime`. */
  _identifiedDateTime?: Element;
  /** When identified (0..1) */
  identifiedPeriod?: Period;
  /** The provider or device that identified the issue (0..1) */
  author?: Reference;
  /** Problem resource (0..*) */
  implicated?: Array<Reference>;
  /** Supporting evidence (0..*) */
  evidence?: Array<DetectedIssueEvidence>;
  /** Description and context (0..1) */
  detail?: string;
  /** Id and extensions of the primitive `detail`. */
  _detail?: Element;
  /** Authority for issue (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;
  /** Step taken to address (0..*) */
  mitigation?: Array<DetectedIssueMitigation>;
}

export namespace DetectedIssue {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/observation-status */
  export type StatusEnum =
    | 'registered'
    | 'preliminary'
    | 'final'
    | 'amended'
    | 'corrected'
    | 'cancelled'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Registered: 'registered' as StatusEnum,
    Preliminary: 'preliminary' as StatusEnum,
    Final: 'final' as StatusEnum,
    Amended: 'amended' as StatusEnum,
    Corrected: 'corrected' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/detectedissue-severity */
  export type SeverityEnum = 'high' | 'moderate' | 'low';
  export const SeverityEnum = {
    High: 'high' as SeverityEnum,
    Moderate: 'moderate' as SeverityEnum,
    Low: 'low' as SeverityEnum,
  };
}

/**
 * Supporting evidence
 */
export class DetectedIssueEvidence {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Manifestation (0..*) */
  code?: Array<CodeableConcept>;
  /** Supporting information (0..*) */
  detail?: Array<Reference>;
}

/**
 * Step taken to address
 */
export class DetectedIssueMitigation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What mitigation? (1..1) */
  action: CodeableConcept;
  /** Date committed (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who is committing? (0..1) */
  author?: Reference;
}
