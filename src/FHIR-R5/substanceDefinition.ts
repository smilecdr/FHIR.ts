/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export interface SubstanceDefinition {
  resourceType: 'SubstanceDefinition';
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
  /** Identifier by which this substance is known (0..*) */
  identifier?: Array<Identifier>;
  /** A business level version identifier of the substance (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Status of substance within the catalogue e.g. active, retired (0..1) */
  status?: CodeableConcept;
  /** A categorization, high level e.g. polymer or nucleic acid, or food, chemical, biological, or lower e.g. polymer linear or branch chain, or type of impurity (0..*) */
  classification?: Array<CodeableConcept>;
  /** If the substance applies to human or veterinary use (0..1) */
  domain?: CodeableConcept;
  /** The quality standard, established benchmark, to which substance complies (e.g. USP/NF, BP) (0..*) */
  grade?: Array<CodeableConcept>;
  /** Textual description of the substance (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Supporting literature (0..*) */
  informationSource?: Array<Reference>;
  /** Textual comment about the substance's catalogue or registry record (0..*) */
  note?: Array<Annotation>;
  /** The entity that creates, makes, produces or fabricates the substance (0..*) */
  manufacturer?: Array<Reference>;
  /** An entity that is the source for the substance. It may be different from the manufacturer (0..*) */
  supplier?: Array<Reference>;
  /** Moiety, for structural modifications (0..*) */
  moiety?: Array<SubstanceDefinitionMoiety>;
  /** General specifications for this substance (0..*) */
  characterization?: Array<SubstanceDefinitionCharacterization>;
  /** General specifications for this substance (0..*) */
  property?: Array<SubstanceDefinitionProperty>;
  /** General information detailing this substance (0..1) */
  referenceInformation?: Reference;
  /** The average mass of a molecule of a compound (0..*) */
  molecularWeight?: Array<SubstanceDefinitionMolecularWeight>;
  /** Structural information (0..1) */
  structure?: SubstanceDefinitionStructure;
  /** Codes associated with the substance (0..*) */
  code?: Array<SubstanceDefinitionCode>;
  /** Names applicable to this substance (0..*) */
  name?: Array<SubstanceDefinitionName>;
  /** A link between this substance and another (0..*) */
  relationship?: Array<SubstanceDefinitionRelationship>;
  /** Data items specific to nucleic acids (0..1) */
  nucleicAcid?: Reference;
  /** Data items specific to polymers (0..1) */
  polymer?: Reference;
  /** Data items specific to proteins (0..1) */
  protein?: Reference;
  /** Material or taxonomic/anatomical source (0..1) */
  sourceMaterial?: SubstanceDefinitionSourceMaterial;
}

/**
 * Moiety, for structural modifications
 */
export interface SubstanceDefinitionMoiety {
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
  /** Molecular formula for this moiety (e.g. with the Hill system) (0..1) */
  molecularFormula?: string;
  /** Id and extensions of the primitive `molecularFormula`. */
  _molecularFormula?: Element;
  /** Quantitative value for this moiety (0..1) */
  amountQuantity?: Quantity;
  /** Quantitative value for this moiety (0..1) */
  amountString?: string;
  /** Id and extensions of the primitive `amountString`. */
  _amountString?: Element;
  /** The measurement type of the quantitative value (0..1) */
  measurementType?: CodeableConcept;
}

/**
 * General specifications for this substance
 */
export interface SubstanceDefinitionCharacterization {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The method used to find the characterization e.g. HPLC (0..1) */
  technique?: CodeableConcept;
  /** Describes the nature of the chemical entity and explains, for instance, whether this is a base or a salt form (0..1) */
  form?: CodeableConcept;
  /** The description or justification in support of the interpretation of the data file (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The data produced by the analytical instrument or a pictorial representation of that data. Examples: a JCAMP, JDX, or ADX file, or a chromatogram or spectrum analysis (0..*) */
  file?: Array<Attachment>;
}

/**
 * General specifications for this substance
 */
export interface SubstanceDefinitionProperty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A code expressing the type of property (1..1) */
  type: CodeableConcept;
  /** A value for the property (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** A value for the property (0..1) */
  valueQuantity?: Quantity;
  /** A value for the property (0..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** A value for the property (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** A value for the property (0..1) */
  valueAttachment?: Attachment;
}

/**
 * The average mass of a molecule of a compound
 */
export interface SubstanceDefinitionMolecularWeight {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The method by which the weight was determined (0..1) */
  method?: CodeableConcept;
  /** Type of molecular weight e.g. exact, average, weight average (0..1) */
  type?: CodeableConcept;
  /** Used to capture quantitative values for a variety of elements (1..1) */
  amount: Quantity;
}

/**
 * Structural information
 */
export interface SubstanceDefinitionStructure {
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
  /** An expression which states the number and type of atoms present in a molecule of a substance (0..1) */
  molecularFormula?: string;
  /** Id and extensions of the primitive `molecularFormula`. */
  _molecularFormula?: Element;
  /** Specified per moiety according to the Hill system (0..1) */
  molecularFormulaByMoiety?: string;
  /** Id and extensions of the primitive `molecularFormulaByMoiety`. */
  _molecularFormulaByMoiety?: Element;
  /** The molecular weight or weight range (0..1) */
  molecularWeight?: SubstanceDefinitionMolecularWeight;
  /** The method used to find the structure e.g. X-ray, NMR (0..*) */
  technique?: Array<CodeableConcept>;
  /** Source of information for the structure (0..*) */
  sourceDocument?: Array<Reference>;
  /** A depiction of the structure of the substance (0..*) */
  representation?: Array<SubstanceDefinitionRepresentation>;
}

/**
 * A depiction of the structure of the substance
 */
export interface SubstanceDefinitionRepresentation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The kind of structural representation (e.g. full, partial) (0..1) */
  type?: CodeableConcept;
  /** The structural representation as a text string in a standard format (0..1) */
  representation?: string;
  /** Id and extensions of the primitive `representation`. */
  _representation?: Element;
  /** The format of the representation e.g. InChI, SMILES, MOLFILE (note: not the physical file format) (0..1) */
  format?: CodeableConcept;
  /** An attachment with the structural representation e.g. a structure graphic or AnIML file (0..1) */
  document?: Reference;
}

/**
 * Codes associated with the substance
 */
export interface SubstanceDefinitionCode {
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
  /** Status of the code assignment, for example 'provisional', 'approved' (0..1) */
  status?: CodeableConcept;
  /** The date at which the code status was changed (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;
  /** Any comment can be provided in this field (0..*) */
  note?: Array<Annotation>;
  /** Supporting literature (0..*) */
  source?: Array<Reference>;
}

/**
 * Names applicable to this substance
 */
export interface SubstanceDefinitionName {
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
  /** Name type e.g. 'systematic', 'scientific, 'brand' (0..1) */
  type?: CodeableConcept;
  /** The status of the name e.g. 'current', 'proposed' (0..1) */
  status?: CodeableConcept;
  /** If this is the preferred name for this substance (0..1) */
  preferred?: boolean;
  /** Id and extensions of the primitive `preferred`. */
  _preferred?: Element;
  /** Human language that the name is written in (0..*) */
  language?: Array<CodeableConcept>;
  /** The use context of this name e.g. as an active ingredient or as a food colour additive (0..*) */
  domain?: Array<CodeableConcept>;
  /** The jurisdiction where this name applies (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** A synonym of this particular name, by which the substance is also known (0..*) */
  synonym?: Array<SubstanceDefinitionName>;
  /** A translation for this name into another human language (0..*) */
  translation?: Array<SubstanceDefinitionName>;
  /** Details of the official nature of this name (0..*) */
  official?: Array<SubstanceDefinitionOfficial>;
  /** Supporting literature (0..*) */
  source?: Array<Reference>;
}

/**
 * Details of the official nature of this name
 */
export interface SubstanceDefinitionOfficial {
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
  /** The status of the official name, for example 'draft', 'active' (0..1) */
  status?: CodeableConcept;
  /** Date of official name change (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
}

/**
 * A link between this substance and another
 */
export interface SubstanceDefinitionRelationship {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A pointer to another substance, as a resource or a representational code (0..1) */
  substanceDefinitionReference?: Reference;
  /** A pointer to another substance, as a resource or a representational code (0..1) */
  substanceDefinitionCodeableConcept?: CodeableConcept;
  /** For example "salt to parent", "active moiety" (1..1) */
  type: CodeableConcept;
  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible relationships (0..1) */
  isDefining?: boolean;
  /** Id and extensions of the primitive `isDefining`. */
  _isDefining?: Element;
  /** A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other (0..1) */
  amountQuantity?: Quantity;
  /** A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other (0..1) */
  amountRatio?: Ratio;
  /** A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other (0..1) */
  amountString?: string;
  /** Id and extensions of the primitive `amountString`. */
  _amountString?: Element;
  /** For use when the numeric has an uncertain range (0..1) */
  ratioHighLimitAmount?: Ratio;
  /** An operator for the amount, for example "average", "approximately", "less than" (0..1) */
  comparator?: CodeableConcept;
  /** Supporting literature (0..*) */
  source?: Array<Reference>;
}

/**
 * Material or taxonomic/anatomical source
 */
export interface SubstanceDefinitionSourceMaterial {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Classification of the origin of the raw material. e.g. cat hair is an Animal source type (0..1) */
  type?: CodeableConcept;
  /** The genus of an organism e.g. the Latin epithet of the plant/animal scientific name (0..1) */
  genus?: CodeableConcept;
  /** The species of an organism e.g. the Latin epithet of the species of the plant/animal (0..1) */
  species?: CodeableConcept;
  /** An anatomical origin of the source material within an organism (0..1) */
  part?: CodeableConcept;
  /** The country or countries where the material is harvested (0..*) */
  countryOfOrigin?: Array<CodeableConcept>;
}
