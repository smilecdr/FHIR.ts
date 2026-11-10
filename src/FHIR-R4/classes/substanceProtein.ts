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
import type { Resource } from './resourceList';

/**
 * A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
 */
export class SubstanceProtein {
  resourceType: 'SubstanceProtein';
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
  /** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence (0..1) */
  sequenceType?: CodeableConcept;
  /** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable (0..1) */
  numberOfSubunits?: number;
  /** Id and extensions of the primitive `numberOfSubunits`. */
  _numberOfSubunits?: Element;
  /** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions (0..*) */
  disulfideLinkage?: Array<string>;
  /** Id and extensions of the primitive `disulfideLinkage`. */
  _disulfideLinkage?: Array<Element | null>;
  /** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times (0..*) */
  subunit?: Array<SubstanceProteinSubunit>;
}

/**
 * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
 */
export class SubstanceProteinSubunit {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts (0..1) */
  subunit?: number;
  /** Id and extensions of the primitive `subunit`. */
  _subunit?: Element;
  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence (0..1) */
  sequence?: string;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Length of linear sequences of amino acids contained in the subunit (0..1) */
  length?: number;
  /** Id and extensions of the primitive `length`. */
  _length?: Element;
  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence (0..1) */
  sequenceAttachment?: Attachment;
  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID (0..1) */
  nTerminalModificationId?: Identifier;
  /** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified (0..1) */
  nTerminalModification?: string;
  /** Id and extensions of the primitive `nTerminalModification`. */
  _nTerminalModification?: Element;
  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID (0..1) */
  cTerminalModificationId?: Identifier;
  /** The modification at the C-terminal shall be specified (0..1) */
  cTerminalModification?: string;
  /** Id and extensions of the primitive `cTerminalModification`. */
  _cTerminalModification?: Element;
}
