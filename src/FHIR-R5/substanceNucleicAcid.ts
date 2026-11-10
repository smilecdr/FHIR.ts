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
import type { ResourceList } from './resourceList';

/**
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
 */
export interface SubstanceNucleicAcid {
  resourceType: 'SubstanceNucleicAcid';
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
  /** The type of the sequence shall be specified based on a controlled vocabulary (0..1) */
  sequenceType?: CodeableConcept;
  /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit (0..1) */
  numberOfSubunits?: number;
  /** Id and extensions of the primitive `numberOfSubunits`. */
  _numberOfSubunits?: Element;
  /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” (0..1) */
  areaOfHybridisation?: string;
  /** Id and extensions of the primitive `areaOfHybridisation`. */
  _areaOfHybridisation?: Element;
  /** (TBC) (0..1) */
  oligoNucleotideType?: CodeableConcept;
  /** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times (0..*) */
  subunit?: Array<SubstanceNucleicAcidSubunit>;
}

/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
 */
export interface SubstanceNucleicAcidSubunit {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts (0..1) */
  subunit?: number;
  /** Id and extensions of the primitive `subunit`. */
  _subunit?: Element;
  /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured (0..1) */
  sequence?: string;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** The length of the sequence shall be captured (0..1) */
  length?: number;
  /** Id and extensions of the primitive `length`. */
  _length?: Element;
  /** (TBC) (0..1) */
  sequenceAttachment?: Attachment;
  /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant (0..1) */
  fivePrime?: CodeableConcept;
  /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant (0..1) */
  threePrime?: CodeableConcept;
  /** The linkages between sugar residues will also be captured (0..*) */
  linkage?: Array<SubstanceNucleicAcidLinkage>;
  /** 5.3.6.8.1 Sugar ID (Mandatory) (0..*) */
  sugar?: Array<SubstanceNucleicAcidSugar>;
}

/**
 * The linkages between sugar residues will also be captured
 */
export interface SubstanceNucleicAcidLinkage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified (0..1) */
  connectivity?: string;
  /** Id and extensions of the primitive `connectivity`. */
  _connectivity?: Element;
  /** Each linkage will be registered as a fragment and have an ID (0..1) */
  identifier?: Identifier;
  /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Residues shall be captured as described in 5.3.6.8.3 (0..1) */
  residueSite?: string;
  /** Id and extensions of the primitive `residueSite`. */
  _residueSite?: Element;
}

/**
 * 5.3.6.8.1 Sugar ID (Mandatory)
 */
export interface SubstanceNucleicAcidSugar {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The Substance ID of the sugar or sugar-like component that make up the nucleotide (0..1) */
  identifier?: Identifier;
  /** The name of the sugar or sugar-like component that make up the nucleotide (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above (0..1) */
  residueSite?: string;
  /** Id and extensions of the primitive `residueSite`. */
  _residueSite?: Element;
}
