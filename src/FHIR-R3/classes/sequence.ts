/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Sequence Resource
 */
export class Sequence {
  resourceType: 'Sequence';
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
  /** Unique ID for this particular sequence. This is a FHIR-defined id (0..*) */
  identifier?: Array<Identifier>;
  /** aa | dna | rna (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end) (1..1) */
  coordinateSystem?: number;
  /** Id and extensions of the primitive `coordinateSystem`. */
  _coordinateSystem?: Element;
  /** Who and/or what this is about (0..1) */
  patient?: Reference;
  /** Specimen used for sequencing (0..1) */
  specimen?: Reference;
  /** The method for sequencing (0..1) */
  device?: Reference;
  /** Who should be responsible for test result (0..1) */
  performer?: Reference;
  /** The number of copies of the seqeunce of interest. (RNASeq) (0..1) */
  quantity?: Quantity;
  /** A sequence used as reference (0..1) */
  referenceSeq?: SequenceReferenceSeq;
  /** Variant in sequence (0..*) */
  variant?: Array<SequenceVariant>;
  /** Sequence that was observed (0..1) */
  observedSeq?: string;
  /** Id and extensions of the primitive `observedSeq`. */
  _observedSeq?: Element;
  /** An set of value as quality of sequence (0..*) */
  quality?: Array<SequenceQuality>;
  /** Average number of reads representing a given nucleotide in the reconstructed sequence (0..1) */
  readCoverage?: number;
  /** Id and extensions of the primitive `readCoverage`. */
  _readCoverage?: Element;
  /** External repository which contains detailed report related with observedSeq in this resource (0..*) */
  repository?: Array<SequenceRepository>;
  /** Pointer to next atomic sequence (0..*) */
  pointer?: Array<Reference>;
}

/**
 * A sequence used as reference
 */
export class SequenceReferenceSeq {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Chromosome containing genetic finding (0..1) */
  chromosome?: CodeableConcept;
  /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37' (0..1) */
  genomeBuild?: string;
  /** Id and extensions of the primitive `genomeBuild`. */
  _genomeBuild?: Element;
  /** Reference identifier (0..1) */
  referenceSeqId?: CodeableConcept;
  /** A Pointer to another Sequence entity as reference sequence (0..1) */
  referenceSeqPointer?: Reference;
  /** A string to represent reference sequence (0..1) */
  referenceSeqString?: string;
  /** Id and extensions of the primitive `referenceSeqString`. */
  _referenceSeqString?: Element;
  /** Directionality of DNA ( +1/-1) (0..1) */
  strand?: number;
  /** Id and extensions of the primitive `strand`. */
  _strand?: Element;
  /** Start position of the window on the reference sequence (1..1) */
  windowStart?: number;
  /** Id and extensions of the primitive `windowStart`. */
  _windowStart?: Element;
  /** End position of the window on the reference sequence (1..1) */
  windowEnd?: number;
  /** Id and extensions of the primitive `windowEnd`. */
  _windowEnd?: Element;
}

/**
 * Variant in sequence
 */
export class SequenceVariant {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Start position of the variant on the reference sequence (0..1) */
  start?: number;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;
  /** End position of the variant on the reference sequence (0..1) */
  end?: number;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;
  /** Allele that was observed (0..1) */
  observedAllele?: string;
  /** Id and extensions of the primitive `observedAllele`. */
  _observedAllele?: Element;
  /** Allele in the reference sequence (0..1) */
  referenceAllele?: string;
  /** Id and extensions of the primitive `referenceAllele`. */
  _referenceAllele?: Element;
  /** Extended CIGAR string for aligning the sequence with reference bases (0..1) */
  cigar?: string;
  /** Id and extensions of the primitive `cigar`. */
  _cigar?: Element;
  /** Pointer to observed variant information (0..1) */
  variantPointer?: Reference;
}

/**
 * An set of value as quality of sequence
 */
export class SequenceQuality {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** indel | snp | unknown (1..1) */
  type?: SequenceQuality.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Standard sequence for comparison (0..1) */
  standardSequence?: CodeableConcept;
  /** Start position of the sequence (0..1) */
  start?: number;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;
  /** End position of the sequence (0..1) */
  end?: number;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;
  /** Quality score for the comparison (0..1) */
  score?: Quantity;
  /** Method to get quality (0..1) */
  method?: CodeableConcept;
  /** True positives from the perspective of the truth data (0..1) */
  truthTP?: number;
  /** Id and extensions of the primitive `truthTP`. */
  _truthTP?: Element;
  /** True positives from the perspective of the query data (0..1) */
  queryTP?: number;
  /** Id and extensions of the primitive `queryTP`. */
  _queryTP?: Element;
  /** False negatives (0..1) */
  truthFN?: number;
  /** Id and extensions of the primitive `truthFN`. */
  _truthFN?: Element;
  /** False positives (0..1) */
  queryFP?: number;
  /** Id and extensions of the primitive `queryFP`. */
  _queryFP?: Element;
  /** False positives where the non-REF alleles in the Truth and Query Call Sets match (0..1) */
  gtFP?: number;
  /** Id and extensions of the primitive `gtFP`. */
  _gtFP?: Element;
  /** Precision of comparison (0..1) */
  precision?: number;
  /** Id and extensions of the primitive `precision`. */
  _precision?: Element;
  /** Recall of comparison (0..1) */
  recall?: number;
  /** Id and extensions of the primitive `recall`. */
  _recall?: Element;
  /** F-score (0..1) */
  fScore?: number;
  /** Id and extensions of the primitive `fScore`. */
  _fScore?: Element;
}

export namespace SequenceQuality {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/quality-type */
  export type TypeEnum = 'indel' | 'snp' | 'unknown';
  export const TypeEnum = {
    Indel: 'indel' as TypeEnum,
    Snp: 'snp' as TypeEnum,
    Unknown: 'unknown' as TypeEnum,
  };
}

/**
 * External repository which contains detailed report related with observedSeq in this resource
 */
export class SequenceRepository {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** directlink | openapi | login | oauth | other (1..1) */
  type?: SequenceRepository.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** URI of the repository (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Repository's name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Id of the dataset that used to call for dataset in repository (0..1) */
  datasetId?: string;
  /** Id and extensions of the primitive `datasetId`. */
  _datasetId?: Element;
  /** Id of the variantset that used to call for variantset in repository (0..1) */
  variantsetId?: string;
  /** Id and extensions of the primitive `variantsetId`. */
  _variantsetId?: Element;
  /** Id of the read (0..1) */
  readsetId?: string;
  /** Id and extensions of the primitive `readsetId`. */
  _readsetId?: Element;
}

export namespace SequenceRepository {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/repository-type */
  export type TypeEnum = 'directlink' | 'openapi' | 'login' | 'oauth' | 'other';
  export const TypeEnum = {
    Directlink: 'directlink' as TypeEnum,
    Openapi: 'openapi' as TypeEnum,
    Login: 'login' as TypeEnum,
    Oauth: 'oauth' as TypeEnum,
    Other: 'other' as TypeEnum,
  };
}
