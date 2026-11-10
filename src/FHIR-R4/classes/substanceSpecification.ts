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
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export class SubstanceSpecification {
  resourceType: 'SubstanceSpecification';
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
  /** Identifier by which this substance is known (0..1) */
  identifier?: Identifier;
  /** High level categorization, e.g. polymer or nucleic acid (0..1) */
  type?: CodeableConcept;
  /** Status of substance within the catalogue e.g. approved (0..1) */
  status?: CodeableConcept;
  /** If the substance applies to only human or veterinary use (0..1) */
  domain?: CodeableConcept;
  /** Textual description of the substance (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Supporting literature (0..*) */
  source?: Array<Reference>;
  /** Textual comment about this record of a substance (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Moiety, for structural modifications (0..*) */
  moiety?: Array<SubstanceSpecificationMoiety>;
  /** General specifications for this substance, including how it is related to other substances (0..*) */
  property?: Array<SubstanceSpecificationProperty>;
  /** General information detailing this substance (0..1) */
  referenceInformation?: Reference;
  /** Structural information (0..1) */
  structure?: SubstanceSpecificationStructure;
  /** Codes associated with the substance (0..*) */
  code?: Array<SubstanceSpecificationCode>;
  /** Names applicable to this substance (0..*) */
  name?: Array<SubstanceSpecificationName>;
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) (0..*) */
  molecularWeight?: Array<SubstanceSpecificationMolecularWeight>;
  /** A link between this substance and another, with details of the relationship (0..*) */
  relationship?: Array<SubstanceSpecificationRelationship>;
  /** Data items specific to nucleic acids (0..1) */
  nucleicAcid?: Reference;
  /** Data items specific to polymers (0..1) */
  polymer?: Reference;
  /** Data items specific to proteins (0..1) */
  protein?: Reference;
  /** Material or taxonomic/anatomical source for the substance (0..1) */
  sourceMaterial?: Reference;
}

/**
 * Moiety, for structural modifications
 */
export class SubstanceSpecificationMoiety {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Role that the moiety is playing (0..1) */
  role?: CodeableConcept;
  /** Identifier by which this moiety substance is known (0..1) */
  identifier?: Identifier;
  /** Textual name for this moiety substance (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Stereochemistry type (0..1) */
  stereochemistry?: CodeableConcept;
  /** Optical activity type (0..1) */
  opticalActivity?: CodeableConcept;
  /** Molecular formula (0..1) */
  molecularFormula?: string;
  /** Id and extensions of the primitive `molecularFormula`. */
  _molecularFormula?: Element;
  /** Quantitative value for this moiety (0..1) */
  amountQuantity?: Quantity;
  /** Quantitative value for this moiety (0..1) */
  amountString?: string;
  /** Id and extensions of the primitive `amountString`. */
  _amountString?: Element;
}

/**
 * General specifications for this substance, including how it is related to other substances
 */
export class SubstanceSpecificationProperty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A category for this property, e.g. Physical, Chemical, Enzymatic (0..1) */
  category?: CodeableConcept;
  /** Property type e.g. viscosity, pH, isoelectric point (0..1) */
  code?: CodeableConcept;
  /** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1) (0..1) */
  parameters?: string;
  /** Id and extensions of the primitive `parameters`. */
  _parameters?: Element;
  /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) (0..1) */
  definingSubstanceReference?: Reference;
  /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) (0..1) */
  definingSubstanceCodeableConcept?: CodeableConcept;
  /** Quantitative value for this property (0..1) */
  amountQuantity?: Quantity;
  /** Quantitative value for this property (0..1) */
  amountString?: string;
  /** Id and extensions of the primitive `amountString`. */
  _amountString?: Element;
}

/**
 * Structural information
 */
export class SubstanceSpecificationStructure {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Stereochemistry type (0..1) */
  stereochemistry?: CodeableConcept;
  /** Optical activity type (0..1) */
  opticalActivity?: CodeableConcept;
  /** Molecular formula (0..1) */
  molecularFormula?: string;
  /** Id and extensions of the primitive `molecularFormula`. */
  _molecularFormula?: Element;
  /** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot (0..1) */
  molecularFormulaByMoiety?: string;
  /** Id and extensions of the primitive `molecularFormulaByMoiety`. */
  _molecularFormulaByMoiety?: Element;
  /** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio (0..*) */
  isotope?: Array<SubstanceSpecificationIsotope>;
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) (0..1) */
  molecularWeight?: SubstanceSpecificationMolecularWeight;
  /** Supporting literature (0..*) */
  source?: Array<Reference>;
  /** Molecular structural representation (0..*) */
  representation?: Array<SubstanceSpecificationRepresentation>;
}

/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
 */
export class SubstanceSpecificationIsotope {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Substance identifier for each non-natural or radioisotope (0..1) */
  identifier?: Identifier;
  /** Substance name for each non-natural or radioisotope (0..1) */
  name?: CodeableConcept;
  /** The type of isotopic substitution present in a single substance (0..1) */
  substitution?: CodeableConcept;
  /** Half life - for a non-natural nuclide (0..1) */
  halfLife?: Quantity;
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) (0..1) */
  molecularWeight?: SubstanceSpecificationMolecularWeight;
}

/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids)
 */
export class SubstanceSpecificationMolecularWeight {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The method by which the molecular weight was determined (0..1) */
  method?: CodeableConcept;
  /** Type of molecular weight such as exact, average (also known as. number average), weight average (0..1) */
  type?: CodeableConcept;
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field (0..1) */
  amount?: Quantity;
}

/**
 * Molecular structural representation
 */
export class SubstanceSpecificationRepresentation {
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
  /** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX (0..1) */
  representation?: string;
  /** Id and extensions of the primitive `representation`. */
  _representation?: Element;
  /** An attached file with the structural representation (0..1) */
  attachment?: Attachment;
}

/**
 * Codes associated with the substance
 */
export class SubstanceSpecificationCode {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The specific code (0..1) */
  code?: CodeableConcept;
  /** Status of the code assignment (0..1) */
  status?: CodeableConcept;
  /** The date at which the code status is changed as part of the terminology maintenance (0..1) */
  statusDate?: Date | string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;
  /** Any comment can be provided in this field, if necessary (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Supporting literature (0..*) */
  source?: Array<Reference>;
}

/**
 * Names applicable to this substance
 */
export class SubstanceSpecificationName {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The actual name (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name type (0..1) */
  type?: CodeableConcept;
  /** The status of the name (0..1) */
  status?: CodeableConcept;
  /** If this is the preferred name for this substance (0..1) */
  preferred?: boolean;
  /** Id and extensions of the primitive `preferred`. */
  _preferred?: Element;
  /** Language of the name (0..*) */
  language?: Array<CodeableConcept>;
  /** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive (0..*) */
  domain?: Array<CodeableConcept>;
  /** The jurisdiction where this name applies (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** A synonym of this name (0..*) */
  synonym?: Array<SubstanceSpecificationName>;
  /** A translation for this name (0..*) */
  translation?: Array<SubstanceSpecificationName>;
  /** Details of the official nature of this name (0..*) */
  official?: Array<SubstanceSpecificationOfficial>;
  /** Supporting literature (0..*) */
  source?: Array<Reference>;
}

/**
 * Details of the official nature of this name
 */
export class SubstanceSpecificationOfficial {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Which authority uses this official name (0..1) */
  authority?: CodeableConcept;
  /** The status of the official name (0..1) */
  status?: CodeableConcept;
  /** Date of official name change (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
}

/**
 * A link between this substance and another, with details of the relationship
 */
export class SubstanceSpecificationRelationship {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A pointer to another substance, as a resource or just a representational code (0..1) */
  substanceReference?: Reference;
  /** A pointer to another substance, as a resource or just a representational code (0..1) */
  substanceCodeableConcept?: CodeableConcept;
  /** For example "salt to parent", "active moiety", "starting material" (0..1) */
  relationship?: CodeableConcept;
  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships (0..1) */
  isDefining?: boolean;
  /** Id and extensions of the primitive `isDefining`. */
  _isDefining?: Element;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other (0..1) */
  amountQuantity?: Quantity;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other (0..1) */
  amountRange?: Range;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other (0..1) */
  amountRatio?: Ratio;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other (0..1) */
  amountString?: string;
  /** Id and extensions of the primitive `amountString`. */
  _amountString?: Element;
  /** For use when the numeric (0..1) */
  amountRatioLowLimit?: Ratio;
  /** An operator for the amount, for example "average", "approximately", "less than" (0..1) */
  amountType?: CodeableConcept;
  /** Supporting literature (0..*) */
  source?: Array<Reference>;
}
