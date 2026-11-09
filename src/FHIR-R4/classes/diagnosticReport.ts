/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
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
 * The findings and interpretation of diagnostic tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export class DiagnosticReport {
  resourceType: 'DiagnosticReport';
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
  /** Business identifier for report (0..*) */
  identifier?: Array<Identifier>;
  /** What was requested (0..*) */
  basedOn?: Array<Reference>;
  /** registered | partial | preliminary | final + (1..1) */
  status?: DiagnosticReport.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Service category (0..*) */
  category?: Array<CodeableConcept>;
  /** Name/Code for this diagnostic report (1..1) */
  code: CodeableConcept;
  /** The subject of the report - usually, but not always, the patient (0..1) */
  subject?: Reference;
  /** Health care event when test ordered (0..1) */
  encounter?: Reference;
  /** Clinically relevant time/time-period for report (0..1) */
  effectiveDateTime?: Date | string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Clinically relevant time/time-period for report (0..1) */
  effectivePeriod?: Period;
  /** DateTime this version was made (0..1) */
  issued?: Date | string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;
  /** Responsible Diagnostic Service (0..*) */
  performer?: Array<Reference>;
  /** Primary result interpreter (0..*) */
  resultsInterpreter?: Array<Reference>;
  /** Specimens this report is based on (0..*) */
  specimen?: Array<Reference>;
  /** Observations (0..*) */
  result?: Array<Reference>;
  /** Reference to full details of imaging associated with the diagnostic report (0..*) */
  imagingStudy?: Array<Reference>;
  /** Key images associated with this report (0..*) */
  media?: Array<DiagnosticReportMedia>;
  /** Clinical conclusion (interpretation) of test results (0..1) */
  conclusion?: string;
  /** Id and extensions of the primitive `conclusion`. */
  _conclusion?: Element;
  /** Codes for the clinical conclusion of test results (0..*) */
  conclusionCode?: Array<CodeableConcept>;
  /** Entire report as issued (0..*) */
  presentedForm?: Array<Attachment>;
}

export namespace DiagnosticReport {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/diagnostic-report-status */
  export type StatusEnum =
    | 'registered'
    | 'partial'
    | 'preliminary'
    | 'final'
    | 'amended'
    | 'corrected'
    | 'appended'
    | 'cancelled'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Registered: 'registered' as StatusEnum,
    Partial: 'partial' as StatusEnum,
    Preliminary: 'preliminary' as StatusEnum,
    Final: 'final' as StatusEnum,
    Amended: 'amended' as StatusEnum,
    Corrected: 'corrected' as StatusEnum,
    Appended: 'appended' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Key images associated with this report
 */
export class DiagnosticReportMedia {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Comment about the image (e.g. explanation) (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Reference to the image source (1..1) */
  link: Reference;
}
