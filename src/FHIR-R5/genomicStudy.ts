/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A set of analyses performed to analyze and generate genomic data.
 */
export interface GenomicStudy {
  resourceType: 'GenomicStudy';
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
  /** Identifiers for this genomic study (0..*) */
  identifier?: Array<Identifier>;
  /** registered | available | cancelled | entered-in-error | unknown (1..1) */
  status?: GenomicStudy.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The type of the study (e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling) (0..*) */
  type?: Array<CodeableConcept>;
  /** The primary subject of the genomic study (1..1) */
  subject: Reference;
  /** The healthcare event with which this genomics study is associated (0..1) */
  encounter?: Reference;
  /** When the genomic study was started (0..1) */
  startDate?: string;
  /** Id and extensions of the primitive `startDate`. */
  _startDate?: Element;
  /** Event resources that the genomic study is based on (0..*) */
  basedOn?: Array<Reference>;
  /** Healthcare professional who requested or referred the genomic study (0..1) */
  referrer?: Reference;
  /** Healthcare professionals who interpreted the genomic study (0..*) */
  interpreter?: Array<Reference>;
  /** Why the genomic study was performed (0..*) */
  reason?: Array<CodeableReference>;
  /** The defined protocol that describes the study (0..1) */
  instantiatesCanonical?: string;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Element;
  /** The URL pointing to an externally maintained protocol that describes the study (0..1) */
  instantiatesUri?: string;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Element;
  /** Comments related to the genomic study (0..*) */
  note?: Array<Annotation>;
  /** Description of the genomic study (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Genomic Analysis Event (0..*) */
  analysis?: Array<GenomicStudyAnalysis>;
}

export namespace GenomicStudy {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/genomicstudy-status */
  export type StatusEnum =
    'registered' | 'available' | 'cancelled' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Registered: 'registered' as StatusEnum,
    Available: 'available' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Genomic Analysis Event
 */
export interface GenomicStudyAnalysis {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifiers for the analysis event (0..*) */
  identifier?: Array<Identifier>;
  /** Type of the methods used in the analysis (e.g., FISH, Karyotyping, MSI) (0..*) */
  methodType?: Array<CodeableConcept>;
  /** Type of the genomic changes studied in the analysis (e.g., DNA, RNA, or AA change) (0..*) */
  changeType?: Array<CodeableConcept>;
  /** Genome build that is used in this analysis (0..1) */
  genomeBuild?: CodeableConcept;
  /** The defined protocol that describes the analysis (0..1) */
  instantiatesCanonical?: string;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Element;
  /** The URL pointing to an externally maintained protocol that describes the analysis (0..1) */
  instantiatesUri?: string;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Element;
  /** Name of the analysis event (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** What the genomic analysis is about, when it is not about the subject of record (0..*) */
  focus?: Array<Reference>;
  /** The specimen used in the analysis event (0..*) */
  specimen?: Array<Reference>;
  /** The date of the analysis event (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Any notes capture with the analysis event (0..*) */
  note?: Array<Annotation>;
  /** The protocol that was performed for the analysis event (0..1) */
  protocolPerformed?: Reference;
  /** The genomic regions to be studied in the analysis (BED file) (0..*) */
  regionsStudied?: Array<Reference>;
  /** Genomic regions actually called in the analysis event (BED file) (0..*) */
  regionsCalled?: Array<Reference>;
  /** Inputs for the analysis event (0..*) */
  input?: Array<GenomicStudyInput>;
  /** Outputs for the analysis event (0..*) */
  output?: Array<GenomicStudyOutput>;
  /** Performer for the analysis event (0..*) */
  performer?: Array<GenomicStudyPerformer>;
  /** Devices used for the analysis (e.g., instruments, software), with settings and parameters (0..*) */
  device?: Array<GenomicStudyDevice>;
}

/**
 * Inputs for the analysis event
 */
export interface GenomicStudyInput {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** File containing input data (0..1) */
  file?: Reference;
  /** Type of input data (e.g., BAM, CRAM, or FASTA) (0..1) */
  type?: CodeableConcept;
  /** The analysis event or other GenomicStudy that generated this input file (0..1) */
  generatedByIdentifier?: Identifier;
  /** The analysis event or other GenomicStudy that generated this input file (0..1) */
  generatedByReference?: Reference;
}

/**
 * Outputs for the analysis event
 */
export interface GenomicStudyOutput {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** File containing output data (0..1) */
  file?: Reference;
  /** Type of output data (e.g., VCF, MAF, or BAM) (0..1) */
  type?: CodeableConcept;
}

/**
 * Performer for the analysis event
 */
export interface GenomicStudyPerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The organization, healthcare professional, or others who participated in performing this analysis (0..1) */
  actor?: Reference;
  /** Role of the actor for this analysis (0..1) */
  role?: CodeableConcept;
}

/**
 * Devices used for the analysis (e.g., instruments, software), with settings and parameters
 */
export interface GenomicStudyDevice {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Device used for the analysis (0..1) */
  device?: Reference;
  /** Specific function for the device used for the analysis (0..1) */
  function?: CodeableConcept;
}
