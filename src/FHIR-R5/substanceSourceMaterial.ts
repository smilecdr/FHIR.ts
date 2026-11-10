/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { ResourceList } from './resourceList';

/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export interface SubstanceSourceMaterial {
  resourceType: 'SubstanceSourceMaterial';
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
  /** General high level classification of the source material specific to the origin of the material (0..1) */
  sourceMaterialClass?: CodeableConcept;
  /** The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent (0..1) */
  sourceMaterialType?: CodeableConcept;
  /** The state of the source material when extracted (0..1) */
  sourceMaterialState?: CodeableConcept;
  /** The unique identifier associated with the source material parent organism shall be specified (0..1) */
  organismId?: Identifier;
  /** The organism accepted Scientific name shall be provided based on the organism taxonomy (0..1) */
  organismName?: string;
  /** Id and extensions of the primitive `organismName`. */
  _organismName?: Element;
  /** The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant) (0..*) */
  parentSubstanceId?: Array<Identifier>;
  /** The parent substance of the Herbal Drug, or Herbal preparation (0..*) */
  parentSubstanceName?: Array<string>;
  /** Id and extensions of the primitive `parentSubstanceName`. */
  _parentSubstanceName?: Array<Element | null>;
  /** The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate (0..*) */
  countryOfOrigin?: Array<CodeableConcept>;
  /** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat (0..*) */
  geographicalLocation?: Array<string>;
  /** Id and extensions of the primitive `geographicalLocation`. */
  _geographicalLocation?: Array<Element | null>;
  /** Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum) (0..1) */
  developmentStage?: CodeableConcept;
  /** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels (0..*) */
  fractionDescription?: Array<SubstanceSourceMaterialFractionDescription>;
  /** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf (0..1) */
  organism?: SubstanceSourceMaterialOrganism;
  /** To do (0..*) */
  partDescription?: Array<SubstanceSourceMaterialPartDescription>;
}

/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
 */
export interface SubstanceSourceMaterialFractionDescription {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** This element is capturing information about the fraction of a plant part, or human plasma for fractionation (0..1) */
  fraction?: string;
  /** Id and extensions of the primitive `fraction`. */
  _fraction?: Element;
  /** The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1 (0..1) */
  materialType?: CodeableConcept;
}

/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
 */
export interface SubstanceSourceMaterialOrganism {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The family of an organism shall be specified (0..1) */
  family?: CodeableConcept;
  /** The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies (0..1) */
  genus?: CodeableConcept;
  /** The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies (0..1) */
  species?: CodeableConcept;
  /** The Intraspecific type of an organism shall be specified (0..1) */
  intraspecificType?: CodeableConcept;
  /** The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention (0..1) */
  intraspecificDescription?: string;
  /** Id and extensions of the primitive `intraspecificDescription`. */
  _intraspecificDescription?: Element;
  /** 4.9.13.6.1 Author type (Conditional) (0..*) */
  author?: Array<SubstanceSourceMaterialAuthor>;
  /** 4.9.13.8.1 Hybrid species maternal organism ID (Optional) (0..1) */
  hybrid?: SubstanceSourceMaterialHybrid;
  /** 4.9.13.7.1 Kingdom (Conditional) (0..1) */
  organismGeneral?: SubstanceSourceMaterialOrganismGeneral;
}

/**
 * 4.9.13.6.1 Author type (Conditional)
 */
export interface SubstanceSourceMaterialAuthor {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name (0..1) */
  authorType?: CodeableConcept;
  /** The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank) (0..1) */
  authorDescription?: string;
  /** Id and extensions of the primitive `authorDescription`. */
  _authorDescription?: Element;
}

/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
 */
export interface SubstanceSourceMaterialHybrid {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal (0..1) */
  maternalOrganismId?: string;
  /** Id and extensions of the primitive `maternalOrganismId`. */
  _maternalOrganismId?: Element;
  /** The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal (0..1) */
  maternalOrganismName?: string;
  /** Id and extensions of the primitive `maternalOrganismName`. */
  _maternalOrganismName?: Element;
  /** The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary (0..1) */
  paternalOrganismId?: string;
  /** Id and extensions of the primitive `paternalOrganismId`. */
  _paternalOrganismId?: Element;
  /** The name of the paternal species constituting the hybrid organism shall be specified (0..1) */
  paternalOrganismName?: string;
  /** Id and extensions of the primitive `paternalOrganismName`. */
  _paternalOrganismName?: Element;
  /** The hybrid type of an organism shall be specified (0..1) */
  hybridType?: CodeableConcept;
}

/**
 * 4.9.13.7.1 Kingdom (Conditional)
 */
export interface SubstanceSourceMaterialOrganismGeneral {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The kingdom of an organism shall be specified (0..1) */
  kingdom?: CodeableConcept;
  /** The phylum of an organism shall be specified (0..1) */
  phylum?: CodeableConcept;
  /** The class of an organism shall be specified (0..1) */
  class?: CodeableConcept;
  /** The order of an organism shall be specified, (0..1) */
  order?: CodeableConcept;
}

/**
 * To do
 */
export interface SubstanceSourceMaterialPartDescription {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Entity of anatomical origin of source material within an organism (0..1) */
  part?: CodeableConcept;
  /** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply (0..1) */
  partLocation?: CodeableConcept;
}
