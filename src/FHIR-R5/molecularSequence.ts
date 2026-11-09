/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Representation of a molecular sequence.
 */
export interface MolecularSequence {
  resourceType: 'MolecularSequence';
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
  /** Unique ID for this particular sequence (0..*) */
  identifier?: Array<Identifier>;
  /** aa | dna | rna (0..1) */
  type?: MolecularSequence.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Subject this sequence is associated too (0..1) */
  subject?: Reference;
  /** What the molecular sequence is about, when it is not about the subject of record (0..*) */
  focus?: Array<Reference>;
  /** Specimen used for sequencing (0..1) */
  specimen?: Reference;
  /** The method for sequencing (0..1) */
  device?: Reference;
  /** Who should be responsible for test result (0..1) */
  performer?: Reference;
  /** Sequence that was observed (0..1) */
  literal?: string;
  /** Id and extensions of the primitive `literal`. */
  _literal?: Element;
  /** Embedded file or a link (URL) which contains content to represent the sequence (0..*) */
  formatted?: Array<Attachment>;
  /** A sequence defined relative to another sequence (0..*) */
  relative?: Array<MolecularSequenceRelative>;
}

export namespace MolecularSequence {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/sequence-type */
  export type TypeEnum = 'aa' | 'dna' | 'rna';
  export const TypeEnum = { Aa: 'aa' as TypeEnum, Dna: 'dna' as TypeEnum, Rna: 'rna' as TypeEnum };
}

/**
 * A sequence defined relative to another sequence
 */
export interface MolecularSequenceRelative {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Ways of identifying nucleotides or amino acids within a sequence (1..1) */
  coordinateSystem: CodeableConcept;
  /** Indicates the order in which the sequence should be considered when putting multiple 'relative' elements together (0..1) */
  ordinalPosition?: number;
  /** Id and extensions of the primitive `ordinalPosition`. */
  _ordinalPosition?: Element;
  /** Indicates the nucleotide range in the composed sequence when multiple 'relative' elements are used together (0..1) */
  sequenceRange?: Range;
  /** A sequence used as starting sequence (0..1) */
  startingSequence?: MolecularSequenceStartingSequence;
  /** Changes in sequence from the starting sequence (0..*) */
  edit?: Array<MolecularSequenceEdit>;
}

/**
 * A sequence used as starting sequence
 */
export interface MolecularSequenceStartingSequence {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The genome assembly used for starting sequence, e.g. GRCh38 (0..1) */
  genomeAssembly?: CodeableConcept;
  /** Chromosome Identifier (0..1) */
  chromosome?: CodeableConcept;
  /** The reference sequence that represents the starting sequence (0..1) */
  sequenceCodeableConcept?: CodeableConcept;
  /** The reference sequence that represents the starting sequence (0..1) */
  sequenceString?: string;
  /** Id and extensions of the primitive `sequenceString`. */
  _sequenceString?: Element;
  /** The reference sequence that represents the starting sequence (0..1) */
  sequenceReference?: Reference;
  /** Start position of the window on the starting sequence (0..1) */
  windowStart?: number;
  /** Id and extensions of the primitive `windowStart`. */
  _windowStart?: Element;
  /** End position of the window on the starting sequence (0..1) */
  windowEnd?: number;
  /** Id and extensions of the primitive `windowEnd`. */
  _windowEnd?: Element;
  /** sense | antisense (0..1) */
  orientation?: MolecularSequenceStartingSequence.OrientationEnum;
  /** Id and extensions of the primitive `orientation`. */
  _orientation?: Element;
  /** watson | crick (0..1) */
  strand?: MolecularSequenceStartingSequence.StrandEnum;
  /** Id and extensions of the primitive `strand`. */
  _strand?: Element;
}

export namespace MolecularSequenceStartingSequence {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/orientation-type */
  export type OrientationEnum = 'sense' | 'antisense';
  export const OrientationEnum = {
    Sense: 'sense' as OrientationEnum,
    Antisense: 'antisense' as OrientationEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/strand-type */
  export type StrandEnum = 'watson' | 'crick';
  export const StrandEnum = { Watson: 'watson' as StrandEnum, Crick: 'crick' as StrandEnum };
}

/**
 * Changes in sequence from the starting sequence
 */
export interface MolecularSequenceEdit {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Start position of the edit on the starting sequence (0..1) */
  start?: number;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;
  /** End position of the edit on the starting sequence (0..1) */
  end?: number;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;
  /** Allele that was observed (0..1) */
  replacementSequence?: string;
  /** Id and extensions of the primitive `replacementSequence`. */
  _replacementSequence?: Element;
  /** Allele in the starting sequence (0..1) */
  replacedSequence?: string;
  /** Id and extensions of the primitive `replacedSequence`. */
  _replacedSequence?: Element;
}
