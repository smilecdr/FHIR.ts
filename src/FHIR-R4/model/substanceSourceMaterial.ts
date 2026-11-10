/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';

/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export class SubstanceSourceMaterial extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sourceMaterialClass',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceMaterialClass', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'sourceMaterialType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceMaterialType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'sourceMaterialState',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceMaterialState', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'organismId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'organismId', typeCode: 'Identifier' }],
    },
    {
      elementName: 'organismName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'organismName', typeCode: 'string' }],
    },
    {
      elementName: 'parentSubstanceId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parentSubstanceId', typeCode: 'Identifier' }],
    },
    {
      elementName: 'parentSubstanceName',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parentSubstanceName', typeCode: 'string' }],
    },
    {
      elementName: 'countryOfOrigin',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'countryOfOrigin', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'geographicalLocation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'geographicalLocation', typeCode: 'string' }],
    },
    {
      elementName: 'developmentStage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'developmentStage', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'fractionDescription',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'fractionDescription', typeCode: 'SubstanceSourceMaterialFractionDescription' },
      ],
    },
    {
      elementName: 'organism',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'organism', typeCode: 'SubstanceSourceMaterialOrganism' }],
    },
    {
      elementName: 'partDescription',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'partDescription', typeCode: 'SubstanceSourceMaterialPartDescription' }],
    },
  ];

  readonly resourceType = 'SubstanceSourceMaterial';

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
  parentSubstanceId?: Identifier[];

  /** The parent substance of the Herbal Drug, or Herbal preparation (0..*) */
  parentSubstanceName?: string[];
  /** Id and extensions of the primitive `parentSubstanceName`. */
  _parentSubstanceName?: (Element | null)[];

  /** The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate (0..*) */
  countryOfOrigin?: CodeableConcept[];

  /** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat (0..*) */
  geographicalLocation?: string[];
  /** Id and extensions of the primitive `geographicalLocation`. */
  _geographicalLocation?: (Element | null)[];

  /** Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum) (0..1) */
  developmentStage?: CodeableConcept;

  /** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels (0..*) */
  fractionDescription?: SubstanceSourceMaterialFractionDescription[];

  /** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf (0..1) */
  organism?: SubstanceSourceMaterialOrganism;

  /** To do (0..*) */
  partDescription?: SubstanceSourceMaterialPartDescription[];

  override fhirType(): string {
    return 'SubstanceSourceMaterial';
  }

  /** FHIR JSON for this SubstanceSourceMaterial, typed as the plain `SubstanceSourceMaterial` data type. */
  override toJSON(): plainTypes.SubstanceSourceMaterial {
    return this.serialize() as plainTypes.SubstanceSourceMaterial;
  }

  /** General high level classification of the source material specific to the origin of the material (0..1) Created when absent. */
  getSourceMaterialClass(): CodeableConcept {
    if (this.sourceMaterialClass === undefined) {
      this.sourceMaterialClass = new CodeableConcept();
    }
    return this.sourceMaterialClass;
  }

  setSourceMaterialClass(sourceMaterialClass: CodeableConcept | undefined): this {
    return this.setFieldValue('sourceMaterialClass', sourceMaterialClass);
  }

  hasSourceMaterialClass(): boolean {
    return this.hasFieldValue('sourceMaterialClass');
  }

  /** The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent (0..1) Created when absent. */
  getSourceMaterialType(): CodeableConcept {
    if (this.sourceMaterialType === undefined) {
      this.sourceMaterialType = new CodeableConcept();
    }
    return this.sourceMaterialType;
  }

  setSourceMaterialType(sourceMaterialType: CodeableConcept | undefined): this {
    return this.setFieldValue('sourceMaterialType', sourceMaterialType);
  }

  hasSourceMaterialType(): boolean {
    return this.hasFieldValue('sourceMaterialType');
  }

  /** The state of the source material when extracted (0..1) Created when absent. */
  getSourceMaterialState(): CodeableConcept {
    if (this.sourceMaterialState === undefined) {
      this.sourceMaterialState = new CodeableConcept();
    }
    return this.sourceMaterialState;
  }

  setSourceMaterialState(sourceMaterialState: CodeableConcept | undefined): this {
    return this.setFieldValue('sourceMaterialState', sourceMaterialState);
  }

  hasSourceMaterialState(): boolean {
    return this.hasFieldValue('sourceMaterialState');
  }

  /** The unique identifier associated with the source material parent organism shall be specified (0..1) Created when absent. */
  getOrganismId(): Identifier {
    if (this.organismId === undefined) {
      this.organismId = new Identifier();
    }
    return this.organismId;
  }

  setOrganismId(organismId: Identifier | undefined): this {
    return this.setFieldValue('organismId', organismId);
  }

  hasOrganismId(): boolean {
    return this.hasFieldValue('organismId');
  }

  /** The organism accepted Scientific name shall be provided based on the organism taxonomy (0..1) */
  getOrganismName(): string | undefined {
    return this.organismName;
  }

  /** Sets `organismName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setOrganismName(organismName: string | undefined): this {
    return this.setFieldValue('organismName', organismName);
  }

  hasOrganismName(): boolean {
    return this.hasFieldValue('organismName');
  }

  /** The element carrying the id and extensions of `organismName`. Created when absent. */
  getOrganismNameElement(): Element {
    if (this._organismName === undefined) {
      this._organismName = new Element();
    }
    return this._organismName;
  }

  setOrganismNameElement(organismNameElement: Element | undefined): this {
    this._organismName = organismNameElement;
    return this;
  }

  /** The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant) (0..*) Never undefined; an empty list is created when absent. */
  getParentSubstanceId(): Identifier[] {
    if (this.parentSubstanceId === undefined) {
      this.parentSubstanceId = [];
    }
    return this.parentSubstanceId;
  }

  setParentSubstanceId(parentSubstanceId: Identifier[] | undefined): this {
    return this.setFieldValue('parentSubstanceId', parentSubstanceId);
  }

  hasParentSubstanceId(): boolean {
    return this.hasFieldValue('parentSubstanceId');
  }

  /** Appends a new, empty Identifier to `parentSubstanceId` and returns it so it can be filled in. */
  addParentSubstanceId(): Identifier;
  /** Appends the given Identifier to `parentSubstanceId` and returns this object for chaining. */
  addParentSubstanceId(identifier: Identifier): this;
  addParentSubstanceId(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('parentSubstanceId', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('parentSubstanceId', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `parentSubstanceId`. One is added when the list is empty. */
  getParentSubstanceIdFirstRep(): Identifier {
    const firstIdentifier = this.getParentSubstanceId()[0];
    return firstIdentifier === undefined ? this.addParentSubstanceId() : firstIdentifier;
  }

  /** The parent substance of the Herbal Drug, or Herbal preparation (0..*) Never undefined; an empty list is created when absent. */
  getParentSubstanceName(): string[] {
    if (this.parentSubstanceName === undefined) {
      this.parentSubstanceName = [];
    }
    return this.parentSubstanceName;
  }

  setParentSubstanceName(parentSubstanceName: string[] | undefined): this {
    return this.setFieldValue('parentSubstanceName', parentSubstanceName);
  }

  hasParentSubstanceName(): boolean {
    return this.hasFieldValue('parentSubstanceName');
  }

  /** Appends one value to `parentSubstanceName`. Throws a FhirModelError when it is not a valid FHIR string. */
  addParentSubstanceName(parentSubstanceName: string): this {
    return this.addFieldValue('parentSubstanceName', parentSubstanceName);
  }

  /** The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate (0..*) Never undefined; an empty list is created when absent. */
  getCountryOfOrigin(): CodeableConcept[] {
    if (this.countryOfOrigin === undefined) {
      this.countryOfOrigin = [];
    }
    return this.countryOfOrigin;
  }

  setCountryOfOrigin(countryOfOrigin: CodeableConcept[] | undefined): this {
    return this.setFieldValue('countryOfOrigin', countryOfOrigin);
  }

  hasCountryOfOrigin(): boolean {
    return this.hasFieldValue('countryOfOrigin');
  }

  /** Appends a new, empty CodeableConcept to `countryOfOrigin` and returns it so it can be filled in. */
  addCountryOfOrigin(): CodeableConcept;
  /** Appends the given CodeableConcept to `countryOfOrigin` and returns this object for chaining. */
  addCountryOfOrigin(codeableConcept: CodeableConcept): this;
  addCountryOfOrigin(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('countryOfOrigin', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('countryOfOrigin', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `countryOfOrigin`. One is added when the list is empty. */
  getCountryOfOriginFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCountryOfOrigin()[0];
    return firstCodeableConcept === undefined ? this.addCountryOfOrigin() : firstCodeableConcept;
  }

  /** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat (0..*) Never undefined; an empty list is created when absent. */
  getGeographicalLocation(): string[] {
    if (this.geographicalLocation === undefined) {
      this.geographicalLocation = [];
    }
    return this.geographicalLocation;
  }

  setGeographicalLocation(geographicalLocation: string[] | undefined): this {
    return this.setFieldValue('geographicalLocation', geographicalLocation);
  }

  hasGeographicalLocation(): boolean {
    return this.hasFieldValue('geographicalLocation');
  }

  /** Appends one value to `geographicalLocation`. Throws a FhirModelError when it is not a valid FHIR string. */
  addGeographicalLocation(geographicalLocation: string): this {
    return this.addFieldValue('geographicalLocation', geographicalLocation);
  }

  /** Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum) (0..1) Created when absent. */
  getDevelopmentStage(): CodeableConcept {
    if (this.developmentStage === undefined) {
      this.developmentStage = new CodeableConcept();
    }
    return this.developmentStage;
  }

  setDevelopmentStage(developmentStage: CodeableConcept | undefined): this {
    return this.setFieldValue('developmentStage', developmentStage);
  }

  hasDevelopmentStage(): boolean {
    return this.hasFieldValue('developmentStage');
  }

  /** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels (0..*) Never undefined; an empty list is created when absent. */
  getFractionDescription(): SubstanceSourceMaterialFractionDescription[] {
    if (this.fractionDescription === undefined) {
      this.fractionDescription = [];
    }
    return this.fractionDescription;
  }

  setFractionDescription(
    fractionDescription: SubstanceSourceMaterialFractionDescription[] | undefined
  ): this {
    return this.setFieldValue('fractionDescription', fractionDescription);
  }

  hasFractionDescription(): boolean {
    return this.hasFieldValue('fractionDescription');
  }

  /** Appends a new, empty SubstanceSourceMaterialFractionDescription to `fractionDescription` and returns it so it can be filled in. */
  addFractionDescription(): SubstanceSourceMaterialFractionDescription;
  /** Appends the given SubstanceSourceMaterialFractionDescription to `fractionDescription` and returns this object for chaining. */
  addFractionDescription(
    substanceSourceMaterialFractionDescription: SubstanceSourceMaterialFractionDescription
  ): this;
  addFractionDescription(
    substanceSourceMaterialFractionDescription?: SubstanceSourceMaterialFractionDescription
  ): SubstanceSourceMaterialFractionDescription | this {
    if (substanceSourceMaterialFractionDescription !== undefined) {
      return this.addFieldValue('fractionDescription', substanceSourceMaterialFractionDescription);
    }
    const createdSubstanceSourceMaterialFractionDescription =
      new SubstanceSourceMaterialFractionDescription();
    this.addFieldValue('fractionDescription', createdSubstanceSourceMaterialFractionDescription);
    return createdSubstanceSourceMaterialFractionDescription;
  }

  /** The first SubstanceSourceMaterialFractionDescription of `fractionDescription`. One is added when the list is empty. */
  getFractionDescriptionFirstRep(): SubstanceSourceMaterialFractionDescription {
    const firstSubstanceSourceMaterialFractionDescription = this.getFractionDescription()[0];
    return firstSubstanceSourceMaterialFractionDescription === undefined
      ? this.addFractionDescription()
      : firstSubstanceSourceMaterialFractionDescription;
  }

  /** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf (0..1) Created when absent. */
  getOrganism(): SubstanceSourceMaterialOrganism {
    if (this.organism === undefined) {
      this.organism = new SubstanceSourceMaterialOrganism();
    }
    return this.organism;
  }

  setOrganism(organism: SubstanceSourceMaterialOrganism | undefined): this {
    return this.setFieldValue('organism', organism);
  }

  hasOrganism(): boolean {
    return this.hasFieldValue('organism');
  }

  /** To do (0..*) Never undefined; an empty list is created when absent. */
  getPartDescription(): SubstanceSourceMaterialPartDescription[] {
    if (this.partDescription === undefined) {
      this.partDescription = [];
    }
    return this.partDescription;
  }

  setPartDescription(partDescription: SubstanceSourceMaterialPartDescription[] | undefined): this {
    return this.setFieldValue('partDescription', partDescription);
  }

  hasPartDescription(): boolean {
    return this.hasFieldValue('partDescription');
  }

  /** Appends a new, empty SubstanceSourceMaterialPartDescription to `partDescription` and returns it so it can be filled in. */
  addPartDescription(): SubstanceSourceMaterialPartDescription;
  /** Appends the given SubstanceSourceMaterialPartDescription to `partDescription` and returns this object for chaining. */
  addPartDescription(
    substanceSourceMaterialPartDescription: SubstanceSourceMaterialPartDescription
  ): this;
  addPartDescription(
    substanceSourceMaterialPartDescription?: SubstanceSourceMaterialPartDescription
  ): SubstanceSourceMaterialPartDescription | this {
    if (substanceSourceMaterialPartDescription !== undefined) {
      return this.addFieldValue('partDescription', substanceSourceMaterialPartDescription);
    }
    const createdSubstanceSourceMaterialPartDescription =
      new SubstanceSourceMaterialPartDescription();
    this.addFieldValue('partDescription', createdSubstanceSourceMaterialPartDescription);
    return createdSubstanceSourceMaterialPartDescription;
  }

  /** The first SubstanceSourceMaterialPartDescription of `partDescription`. One is added when the list is empty. */
  getPartDescriptionFirstRep(): SubstanceSourceMaterialPartDescription {
    const firstSubstanceSourceMaterialPartDescription = this.getPartDescription()[0];
    return firstSubstanceSourceMaterialPartDescription === undefined
      ? this.addPartDescription()
      : firstSubstanceSourceMaterialPartDescription;
  }
}

modelTypeRegistry.register('SubstanceSourceMaterial', SubstanceSourceMaterial, true);

/** True when the value is a SubstanceSourceMaterial model instance. */
export function isSubstanceSourceMaterial(
  candidate: unknown
): candidate is SubstanceSourceMaterial {
  return candidate instanceof SubstanceSourceMaterial;
}

/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
 */
export class SubstanceSourceMaterialFractionDescription extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'fraction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fraction', typeCode: 'string' }],
    },
    {
      elementName: 'materialType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'materialType', typeCode: 'CodeableConcept' }],
    },
  ];

  /** This element is capturing information about the fraction of a plant part, or human plasma for fractionation (0..1) */
  fraction?: string;
  /** Id and extensions of the primitive `fraction`. */
  _fraction?: Element;

  /** The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1 (0..1) */
  materialType?: CodeableConcept;

  override fhirType(): string {
    return 'SubstanceSourceMaterial.fractionDescription';
  }

  /** FHIR JSON for this SubstanceSourceMaterialFractionDescription, typed as the plain `SubstanceSourceMaterialFractionDescription` data type. */
  override toJSON(): plainTypes.SubstanceSourceMaterialFractionDescription {
    return this.serialize() as plainTypes.SubstanceSourceMaterialFractionDescription;
  }

  /** This element is capturing information about the fraction of a plant part, or human plasma for fractionation (0..1) */
  getFraction(): string | undefined {
    return this.fraction;
  }

  /** Sets `fraction`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setFraction(fraction: string | undefined): this {
    return this.setFieldValue('fraction', fraction);
  }

  hasFraction(): boolean {
    return this.hasFieldValue('fraction');
  }

  /** The element carrying the id and extensions of `fraction`. Created when absent. */
  getFractionElement(): Element {
    if (this._fraction === undefined) {
      this._fraction = new Element();
    }
    return this._fraction;
  }

  setFractionElement(fractionElement: Element | undefined): this {
    this._fraction = fractionElement;
    return this;
  }

  /** The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1 (0..1) Created when absent. */
  getMaterialType(): CodeableConcept {
    if (this.materialType === undefined) {
      this.materialType = new CodeableConcept();
    }
    return this.materialType;
  }

  setMaterialType(materialType: CodeableConcept | undefined): this {
    return this.setFieldValue('materialType', materialType);
  }

  hasMaterialType(): boolean {
    return this.hasFieldValue('materialType');
  }
}

modelTypeRegistry.register(
  'SubstanceSourceMaterialFractionDescription',
  SubstanceSourceMaterialFractionDescription,
  false
);

/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
 */
export class SubstanceSourceMaterialOrganism extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'family',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'family', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'genus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'genus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'species',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'species', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'intraspecificType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intraspecificType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'intraspecificDescription',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intraspecificDescription', typeCode: 'string' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'author', typeCode: 'SubstanceSourceMaterialOrganismAuthor' }],
    },
    {
      elementName: 'hybrid',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hybrid', typeCode: 'SubstanceSourceMaterialOrganismHybrid' }],
    },
    {
      elementName: 'organismGeneral',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'organismGeneral', typeCode: 'SubstanceSourceMaterialOrganismOrganismGeneral' },
      ],
    },
  ];

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
  author?: SubstanceSourceMaterialOrganismAuthor[];

  /** 4.9.13.8.1 Hybrid species maternal organism ID (Optional) (0..1) */
  hybrid?: SubstanceSourceMaterialOrganismHybrid;

  /** 4.9.13.7.1 Kingdom (Conditional) (0..1) */
  organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral;

  override fhirType(): string {
    return 'SubstanceSourceMaterial.organism';
  }

  /** FHIR JSON for this SubstanceSourceMaterialOrganism, typed as the plain `SubstanceSourceMaterialOrganism` data type. */
  override toJSON(): plainTypes.SubstanceSourceMaterialOrganism {
    return this.serialize() as plainTypes.SubstanceSourceMaterialOrganism;
  }

  /** The family of an organism shall be specified (0..1) Created when absent. */
  getFamily(): CodeableConcept {
    if (this.family === undefined) {
      this.family = new CodeableConcept();
    }
    return this.family;
  }

  setFamily(family: CodeableConcept | undefined): this {
    return this.setFieldValue('family', family);
  }

  hasFamily(): boolean {
    return this.hasFieldValue('family');
  }

  /** The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies (0..1) Created when absent. */
  getGenus(): CodeableConcept {
    if (this.genus === undefined) {
      this.genus = new CodeableConcept();
    }
    return this.genus;
  }

  setGenus(genus: CodeableConcept | undefined): this {
    return this.setFieldValue('genus', genus);
  }

  hasGenus(): boolean {
    return this.hasFieldValue('genus');
  }

  /** The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies (0..1) Created when absent. */
  getSpecies(): CodeableConcept {
    if (this.species === undefined) {
      this.species = new CodeableConcept();
    }
    return this.species;
  }

  setSpecies(species: CodeableConcept | undefined): this {
    return this.setFieldValue('species', species);
  }

  hasSpecies(): boolean {
    return this.hasFieldValue('species');
  }

  /** The Intraspecific type of an organism shall be specified (0..1) Created when absent. */
  getIntraspecificType(): CodeableConcept {
    if (this.intraspecificType === undefined) {
      this.intraspecificType = new CodeableConcept();
    }
    return this.intraspecificType;
  }

  setIntraspecificType(intraspecificType: CodeableConcept | undefined): this {
    return this.setFieldValue('intraspecificType', intraspecificType);
  }

  hasIntraspecificType(): boolean {
    return this.hasFieldValue('intraspecificType');
  }

  /** The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention (0..1) */
  getIntraspecificDescription(): string | undefined {
    return this.intraspecificDescription;
  }

  /** Sets `intraspecificDescription`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setIntraspecificDescription(intraspecificDescription: string | undefined): this {
    return this.setFieldValue('intraspecificDescription', intraspecificDescription);
  }

  hasIntraspecificDescription(): boolean {
    return this.hasFieldValue('intraspecificDescription');
  }

  /** The element carrying the id and extensions of `intraspecificDescription`. Created when absent. */
  getIntraspecificDescriptionElement(): Element {
    if (this._intraspecificDescription === undefined) {
      this._intraspecificDescription = new Element();
    }
    return this._intraspecificDescription;
  }

  setIntraspecificDescriptionElement(intraspecificDescriptionElement: Element | undefined): this {
    this._intraspecificDescription = intraspecificDescriptionElement;
    return this;
  }

  /** 4.9.13.6.1 Author type (Conditional) (0..*) Never undefined; an empty list is created when absent. */
  getAuthor(): SubstanceSourceMaterialOrganismAuthor[] {
    if (this.author === undefined) {
      this.author = [];
    }
    return this.author;
  }

  setAuthor(author: SubstanceSourceMaterialOrganismAuthor[] | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Appends a new, empty SubstanceSourceMaterialOrganismAuthor to `author` and returns it so it can be filled in. */
  addAuthor(): SubstanceSourceMaterialOrganismAuthor;
  /** Appends the given SubstanceSourceMaterialOrganismAuthor to `author` and returns this object for chaining. */
  addAuthor(substanceSourceMaterialOrganismAuthor: SubstanceSourceMaterialOrganismAuthor): this;
  addAuthor(
    substanceSourceMaterialOrganismAuthor?: SubstanceSourceMaterialOrganismAuthor
  ): SubstanceSourceMaterialOrganismAuthor | this {
    if (substanceSourceMaterialOrganismAuthor !== undefined) {
      return this.addFieldValue('author', substanceSourceMaterialOrganismAuthor);
    }
    const createdSubstanceSourceMaterialOrganismAuthor =
      new SubstanceSourceMaterialOrganismAuthor();
    this.addFieldValue('author', createdSubstanceSourceMaterialOrganismAuthor);
    return createdSubstanceSourceMaterialOrganismAuthor;
  }

  /** The first SubstanceSourceMaterialOrganismAuthor of `author`. One is added when the list is empty. */
  getAuthorFirstRep(): SubstanceSourceMaterialOrganismAuthor {
    const firstSubstanceSourceMaterialOrganismAuthor = this.getAuthor()[0];
    return firstSubstanceSourceMaterialOrganismAuthor === undefined
      ? this.addAuthor()
      : firstSubstanceSourceMaterialOrganismAuthor;
  }

  /** 4.9.13.8.1 Hybrid species maternal organism ID (Optional) (0..1) Created when absent. */
  getHybrid(): SubstanceSourceMaterialOrganismHybrid {
    if (this.hybrid === undefined) {
      this.hybrid = new SubstanceSourceMaterialOrganismHybrid();
    }
    return this.hybrid;
  }

  setHybrid(hybrid: SubstanceSourceMaterialOrganismHybrid | undefined): this {
    return this.setFieldValue('hybrid', hybrid);
  }

  hasHybrid(): boolean {
    return this.hasFieldValue('hybrid');
  }

  /** 4.9.13.7.1 Kingdom (Conditional) (0..1) Created when absent. */
  getOrganismGeneral(): SubstanceSourceMaterialOrganismOrganismGeneral {
    if (this.organismGeneral === undefined) {
      this.organismGeneral = new SubstanceSourceMaterialOrganismOrganismGeneral();
    }
    return this.organismGeneral;
  }

  setOrganismGeneral(
    organismGeneral: SubstanceSourceMaterialOrganismOrganismGeneral | undefined
  ): this {
    return this.setFieldValue('organismGeneral', organismGeneral);
  }

  hasOrganismGeneral(): boolean {
    return this.hasFieldValue('organismGeneral');
  }
}

modelTypeRegistry.register(
  'SubstanceSourceMaterialOrganism',
  SubstanceSourceMaterialOrganism,
  false
);

/**
 * 4.9.13.6.1 Author type (Conditional)
 */
export class SubstanceSourceMaterialOrganismAuthor extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'authorType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authorType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'authorDescription',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authorDescription', typeCode: 'string' }],
    },
  ];

  /** The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name (0..1) */
  authorType?: CodeableConcept;

  /** The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank) (0..1) */
  authorDescription?: string;
  /** Id and extensions of the primitive `authorDescription`. */
  _authorDescription?: Element;

  override fhirType(): string {
    return 'SubstanceSourceMaterial.organism.author';
  }

  /** FHIR JSON for this SubstanceSourceMaterialOrganismAuthor, typed as the plain `SubstanceSourceMaterialAuthor` data type. */
  override toJSON(): plainTypes.SubstanceSourceMaterialAuthor {
    return this.serialize() as plainTypes.SubstanceSourceMaterialAuthor;
  }

  /** The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name (0..1) Created when absent. */
  getAuthorType(): CodeableConcept {
    if (this.authorType === undefined) {
      this.authorType = new CodeableConcept();
    }
    return this.authorType;
  }

  setAuthorType(authorType: CodeableConcept | undefined): this {
    return this.setFieldValue('authorType', authorType);
  }

  hasAuthorType(): boolean {
    return this.hasFieldValue('authorType');
  }

  /** The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank) (0..1) */
  getAuthorDescription(): string | undefined {
    return this.authorDescription;
  }

  /** Sets `authorDescription`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAuthorDescription(authorDescription: string | undefined): this {
    return this.setFieldValue('authorDescription', authorDescription);
  }

  hasAuthorDescription(): boolean {
    return this.hasFieldValue('authorDescription');
  }

  /** The element carrying the id and extensions of `authorDescription`. Created when absent. */
  getAuthorDescriptionElement(): Element {
    if (this._authorDescription === undefined) {
      this._authorDescription = new Element();
    }
    return this._authorDescription;
  }

  setAuthorDescriptionElement(authorDescriptionElement: Element | undefined): this {
    this._authorDescription = authorDescriptionElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SubstanceSourceMaterialOrganismAuthor',
  SubstanceSourceMaterialOrganismAuthor,
  false
);

/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
 */
export class SubstanceSourceMaterialOrganismHybrid extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'maternalOrganismId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maternalOrganismId', typeCode: 'string' }],
    },
    {
      elementName: 'maternalOrganismName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maternalOrganismName', typeCode: 'string' }],
    },
    {
      elementName: 'paternalOrganismId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paternalOrganismId', typeCode: 'string' }],
    },
    {
      elementName: 'paternalOrganismName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paternalOrganismName', typeCode: 'string' }],
    },
    {
      elementName: 'hybridType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hybridType', typeCode: 'CodeableConcept' }],
    },
  ];

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

  override fhirType(): string {
    return 'SubstanceSourceMaterial.organism.hybrid';
  }

  /** FHIR JSON for this SubstanceSourceMaterialOrganismHybrid, typed as the plain `SubstanceSourceMaterialHybrid` data type. */
  override toJSON(): plainTypes.SubstanceSourceMaterialHybrid {
    return this.serialize() as plainTypes.SubstanceSourceMaterialHybrid;
  }

  /** The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal (0..1) */
  getMaternalOrganismId(): string | undefined {
    return this.maternalOrganismId;
  }

  /** Sets `maternalOrganismId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMaternalOrganismId(maternalOrganismId: string | undefined): this {
    return this.setFieldValue('maternalOrganismId', maternalOrganismId);
  }

  hasMaternalOrganismId(): boolean {
    return this.hasFieldValue('maternalOrganismId');
  }

  /** The element carrying the id and extensions of `maternalOrganismId`. Created when absent. */
  getMaternalOrganismIdElement(): Element {
    if (this._maternalOrganismId === undefined) {
      this._maternalOrganismId = new Element();
    }
    return this._maternalOrganismId;
  }

  setMaternalOrganismIdElement(maternalOrganismIdElement: Element | undefined): this {
    this._maternalOrganismId = maternalOrganismIdElement;
    return this;
  }

  /** The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal (0..1) */
  getMaternalOrganismName(): string | undefined {
    return this.maternalOrganismName;
  }

  /** Sets `maternalOrganismName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMaternalOrganismName(maternalOrganismName: string | undefined): this {
    return this.setFieldValue('maternalOrganismName', maternalOrganismName);
  }

  hasMaternalOrganismName(): boolean {
    return this.hasFieldValue('maternalOrganismName');
  }

  /** The element carrying the id and extensions of `maternalOrganismName`. Created when absent. */
  getMaternalOrganismNameElement(): Element {
    if (this._maternalOrganismName === undefined) {
      this._maternalOrganismName = new Element();
    }
    return this._maternalOrganismName;
  }

  setMaternalOrganismNameElement(maternalOrganismNameElement: Element | undefined): this {
    this._maternalOrganismName = maternalOrganismNameElement;
    return this;
  }

  /** The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary (0..1) */
  getPaternalOrganismId(): string | undefined {
    return this.paternalOrganismId;
  }

  /** Sets `paternalOrganismId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPaternalOrganismId(paternalOrganismId: string | undefined): this {
    return this.setFieldValue('paternalOrganismId', paternalOrganismId);
  }

  hasPaternalOrganismId(): boolean {
    return this.hasFieldValue('paternalOrganismId');
  }

  /** The element carrying the id and extensions of `paternalOrganismId`. Created when absent. */
  getPaternalOrganismIdElement(): Element {
    if (this._paternalOrganismId === undefined) {
      this._paternalOrganismId = new Element();
    }
    return this._paternalOrganismId;
  }

  setPaternalOrganismIdElement(paternalOrganismIdElement: Element | undefined): this {
    this._paternalOrganismId = paternalOrganismIdElement;
    return this;
  }

  /** The name of the paternal species constituting the hybrid organism shall be specified (0..1) */
  getPaternalOrganismName(): string | undefined {
    return this.paternalOrganismName;
  }

  /** Sets `paternalOrganismName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPaternalOrganismName(paternalOrganismName: string | undefined): this {
    return this.setFieldValue('paternalOrganismName', paternalOrganismName);
  }

  hasPaternalOrganismName(): boolean {
    return this.hasFieldValue('paternalOrganismName');
  }

  /** The element carrying the id and extensions of `paternalOrganismName`. Created when absent. */
  getPaternalOrganismNameElement(): Element {
    if (this._paternalOrganismName === undefined) {
      this._paternalOrganismName = new Element();
    }
    return this._paternalOrganismName;
  }

  setPaternalOrganismNameElement(paternalOrganismNameElement: Element | undefined): this {
    this._paternalOrganismName = paternalOrganismNameElement;
    return this;
  }

  /** The hybrid type of an organism shall be specified (0..1) Created when absent. */
  getHybridType(): CodeableConcept {
    if (this.hybridType === undefined) {
      this.hybridType = new CodeableConcept();
    }
    return this.hybridType;
  }

  setHybridType(hybridType: CodeableConcept | undefined): this {
    return this.setFieldValue('hybridType', hybridType);
  }

  hasHybridType(): boolean {
    return this.hasFieldValue('hybridType');
  }
}

modelTypeRegistry.register(
  'SubstanceSourceMaterialOrganismHybrid',
  SubstanceSourceMaterialOrganismHybrid,
  false
);

/**
 * 4.9.13.7.1 Kingdom (Conditional)
 */
export class SubstanceSourceMaterialOrganismOrganismGeneral extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'kingdom',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'kingdom', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'phylum',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'phylum', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'class',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'class', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'order',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'order', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The kingdom of an organism shall be specified (0..1) */
  kingdom?: CodeableConcept;

  /** The phylum of an organism shall be specified (0..1) */
  phylum?: CodeableConcept;

  /** The class of an organism shall be specified (0..1) */
  class?: CodeableConcept;

  /** The order of an organism shall be specified, (0..1) */
  order?: CodeableConcept;

  override fhirType(): string {
    return 'SubstanceSourceMaterial.organism.organismGeneral';
  }

  /** FHIR JSON for this SubstanceSourceMaterialOrganismOrganismGeneral, typed as the plain `SubstanceSourceMaterialOrganismGeneral` data type. */
  override toJSON(): plainTypes.SubstanceSourceMaterialOrganismGeneral {
    return this.serialize() as plainTypes.SubstanceSourceMaterialOrganismGeneral;
  }

  /** The kingdom of an organism shall be specified (0..1) Created when absent. */
  getKingdom(): CodeableConcept {
    if (this.kingdom === undefined) {
      this.kingdom = new CodeableConcept();
    }
    return this.kingdom;
  }

  setKingdom(kingdom: CodeableConcept | undefined): this {
    return this.setFieldValue('kingdom', kingdom);
  }

  hasKingdom(): boolean {
    return this.hasFieldValue('kingdom');
  }

  /** The phylum of an organism shall be specified (0..1) Created when absent. */
  getPhylum(): CodeableConcept {
    if (this.phylum === undefined) {
      this.phylum = new CodeableConcept();
    }
    return this.phylum;
  }

  setPhylum(phylum: CodeableConcept | undefined): this {
    return this.setFieldValue('phylum', phylum);
  }

  hasPhylum(): boolean {
    return this.hasFieldValue('phylum');
  }

  /** The class of an organism shall be specified (0..1) Created when absent. */
  getClass(): CodeableConcept {
    if (this.class === undefined) {
      this.class = new CodeableConcept();
    }
    return this.class;
  }

  setClass(classValue: CodeableConcept | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** The order of an organism shall be specified, (0..1) Created when absent. */
  getOrder(): CodeableConcept {
    if (this.order === undefined) {
      this.order = new CodeableConcept();
    }
    return this.order;
  }

  setOrder(order: CodeableConcept | undefined): this {
    return this.setFieldValue('order', order);
  }

  hasOrder(): boolean {
    return this.hasFieldValue('order');
  }
}

modelTypeRegistry.register(
  'SubstanceSourceMaterialOrganismOrganismGeneral',
  SubstanceSourceMaterialOrganismOrganismGeneral,
  false
);

/**
 * To do
 */
export class SubstanceSourceMaterialPartDescription extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'part',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'part', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'partLocation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'partLocation', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Entity of anatomical origin of source material within an organism (0..1) */
  part?: CodeableConcept;

  /** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply (0..1) */
  partLocation?: CodeableConcept;

  override fhirType(): string {
    return 'SubstanceSourceMaterial.partDescription';
  }

  /** FHIR JSON for this SubstanceSourceMaterialPartDescription, typed as the plain `SubstanceSourceMaterialPartDescription` data type. */
  override toJSON(): plainTypes.SubstanceSourceMaterialPartDescription {
    return this.serialize() as plainTypes.SubstanceSourceMaterialPartDescription;
  }

  /** Entity of anatomical origin of source material within an organism (0..1) Created when absent. */
  getPart(): CodeableConcept {
    if (this.part === undefined) {
      this.part = new CodeableConcept();
    }
    return this.part;
  }

  setPart(part: CodeableConcept | undefined): this {
    return this.setFieldValue('part', part);
  }

  hasPart(): boolean {
    return this.hasFieldValue('part');
  }

  /** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply (0..1) Created when absent. */
  getPartLocation(): CodeableConcept {
    if (this.partLocation === undefined) {
      this.partLocation = new CodeableConcept();
    }
    return this.partLocation;
  }

  setPartLocation(partLocation: CodeableConcept | undefined): this {
    return this.setFieldValue('partLocation', partLocation);
  }

  hasPartLocation(): boolean {
    return this.hasFieldValue('partLocation');
  }
}

modelTypeRegistry.register(
  'SubstanceSourceMaterialPartDescription',
  SubstanceSourceMaterialPartDescription,
  false
);
