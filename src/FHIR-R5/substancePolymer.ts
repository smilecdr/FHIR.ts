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
import type { Quantity } from './quantity';
import type { ResourceList } from './resourceList';

/**
 * Properties of a substance specific to it being a polymer.
 */
export interface SubstancePolymer {
  resourceType: 'SubstancePolymer';
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
  /** A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier (0..1) */
  identifier?: Identifier;
  /** Overall type of the polymer (0..1) */
  class?: CodeableConcept;
  /** Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic (0..1) */
  geometry?: CodeableConcept;
  /** Descrtibes the copolymer sequence type (polymer connectivity) (0..*) */
  copolymerConnectivity?: Array<CodeableConcept>;
  /** Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder (0..1) */
  modification?: string;
  /** Id and extensions of the primitive `modification`. */
  _modification?: Element;
  /** Todo (0..*) */
  monomerSet?: Array<SubstancePolymerMonomerSet>;
  /** Specifies and quantifies the repeated units and their configuration (0..*) */
  repeat?: Array<SubstancePolymerRepeat>;
}

/**
 * Todo
 */
export interface SubstancePolymerMonomerSet {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Captures the type of ratio to the entire polymer, e.g. Monomer/Polymer ratio, SRU/Polymer Ratio (0..1) */
  ratioType?: CodeableConcept;
  /** The starting materials - monomer(s) used in the synthesis of the polymer (0..*) */
  startingMaterial?: Array<SubstancePolymerStartingMaterial>;
}

/**
 * The starting materials - monomer(s) used in the synthesis of the polymer
 */
export interface SubstancePolymerStartingMaterial {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of substance for this starting material (0..1) */
  code?: CodeableConcept;
  /** Substance high level category, e.g. chemical substance (0..1) */
  category?: CodeableConcept;
  /** Used to specify whether the attribute described is a defining element for the unique identification of the polymer (0..1) */
  isDefining?: boolean;
  /** Id and extensions of the primitive `isDefining`. */
  _isDefining?: Element;
  /** A percentage (0..1) */
  amount?: Quantity;
}

/**
 * Specifies and quantifies the repeated units and their configuration
 */
export interface SubstancePolymerRepeat {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A representation of an (average) molecular formula from a polymer (0..1) */
  averageMolecularFormula?: string;
  /** Id and extensions of the primitive `averageMolecularFormula`. */
  _averageMolecularFormula?: Element;
  /** How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average) (0..1) */
  repeatUnitAmountType?: CodeableConcept;
  /** An SRU - Structural Repeat Unit (0..*) */
  repeatUnit?: Array<SubstancePolymerRepeatUnit>;
}

/**
 * An SRU - Structural Repeat Unit
 */
export interface SubstancePolymerRepeatUnit {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Structural repeat units are essential elements for defining polymers (0..1) */
  unit?: string;
  /** Id and extensions of the primitive `unit`. */
  _unit?: Element;
  /** The orientation of the polymerisation, e.g. head-tail, head-head, random (0..1) */
  orientation?: CodeableConcept;
  /** Number of repeats of this unit (0..1) */
  amount?: number;
  /** Id and extensions of the primitive `amount`. */
  _amount?: Element;
  /** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described (0..*) */
  degreeOfPolymerisation?: Array<SubstancePolymerDegreeOfPolymerisation>;
  /** A graphical structure for this SRU (0..*) */
  structuralRepresentation?: Array<SubstancePolymerStructuralRepresentation>;
}

/**
 * Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described
 */
export interface SubstancePolymerDegreeOfPolymerisation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of the degree of polymerisation shall be described, e.g. SRU/Polymer Ratio (0..1) */
  type?: CodeableConcept;
  /** An average amount of polymerisation (0..1) */
  average?: number;
  /** Id and extensions of the primitive `average`. */
  _average?: Element;
  /** A low expected limit of the amount (0..1) */
  low?: number;
  /** Id and extensions of the primitive `low`. */
  _low?: Element;
  /** A high expected limit of the amount (0..1) */
  high?: number;
  /** Id and extensions of the primitive `high`. */
  _high?: Element;
}

/**
 * A graphical structure for this SRU
 */
export interface SubstancePolymerStructuralRepresentation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of structure (e.g. Full, Partial, Representative) (0..1) */
  type?: CodeableConcept;
  /** The structural representation as text string in a standard format e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF (0..1) */
  representation?: string;
  /** Id and extensions of the primitive `representation`. */
  _representation?: Element;
  /** The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF (0..1) */
  format?: CodeableConcept;
  /** An attached file with the structural representation (0..1) */
  attachment?: Attachment;
}
