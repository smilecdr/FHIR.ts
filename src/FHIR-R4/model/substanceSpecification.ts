/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export class SubstanceSpecification extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'domain',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'domain', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'moiety',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'moiety', typeCode: 'SubstanceSpecificationMoiety' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'SubstanceSpecificationProperty' }],
    },
    {
      elementName: 'referenceInformation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'referenceInformation',
          typeCode: 'Reference',
          targetResourceTypes: ['SubstanceReferenceInformation'],
        },
      ],
    },
    {
      elementName: 'structure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'structure', typeCode: 'SubstanceSpecificationStructure' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'SubstanceSpecificationCode' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'name', typeCode: 'SubstanceSpecificationName' }],
    },
    {
      elementName: 'molecularWeight',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'molecularWeight',
          typeCode: 'SubstanceSpecificationStructureIsotopeMolecularWeight',
        },
      ],
    },
    {
      elementName: 'relationship',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relationship', typeCode: 'SubstanceSpecificationRelationship' }],
    },
    {
      elementName: 'nucleicAcid',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'nucleicAcid',
          typeCode: 'Reference',
          targetResourceTypes: ['SubstanceNucleicAcid'],
        },
      ],
    },
    {
      elementName: 'polymer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'polymer', typeCode: 'Reference', targetResourceTypes: ['SubstancePolymer'] },
      ],
    },
    {
      elementName: 'protein',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'protein', typeCode: 'Reference', targetResourceTypes: ['SubstanceProtein'] },
      ],
    },
    {
      elementName: 'sourceMaterial',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'sourceMaterial',
          typeCode: 'Reference',
          targetResourceTypes: ['SubstanceSourceMaterial'],
        },
      ],
    },
  ];

  readonly resourceType = 'SubstanceSpecification';

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
  source?: Reference[];

  /** Textual comment about this record of a substance (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Moiety, for structural modifications (0..*) */
  moiety?: SubstanceSpecificationMoiety[];

  /** General specifications for this substance, including how it is related to other substances (0..*) */
  property?: SubstanceSpecificationProperty[];

  /** General information detailing this substance (0..1) */
  referenceInformation?: Reference;

  /** Structural information (0..1) */
  structure?: SubstanceSpecificationStructure;

  /** Codes associated with the substance (0..*) */
  code?: SubstanceSpecificationCode[];

  /** Names applicable to this substance (0..*) */
  name?: SubstanceSpecificationName[];

  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) (0..*) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[];

  /** A link between this substance and another, with details of the relationship (0..*) */
  relationship?: SubstanceSpecificationRelationship[];

  /** Data items specific to nucleic acids (0..1) */
  nucleicAcid?: Reference;

  /** Data items specific to polymers (0..1) */
  polymer?: Reference;

  /** Data items specific to proteins (0..1) */
  protein?: Reference;

  /** Material or taxonomic/anatomical source for the substance (0..1) */
  sourceMaterial?: Reference;

  override fhirType(): string {
    return 'SubstanceSpecification';
  }

  /** FHIR JSON for this SubstanceSpecification, typed as the plain `SubstanceSpecification` data type. */
  override toJSON(): plainTypes.SubstanceSpecification {
    return this.serialize() as plainTypes.SubstanceSpecification;
  }

  /** Identifier by which this substance is known (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** High level categorization, e.g. polymer or nucleic acid (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Status of substance within the catalogue e.g. approved (0..1) Created when absent. */
  getStatus(): CodeableConcept {
    if (this.status === undefined) {
      this.status = new CodeableConcept();
    }
    return this.status;
  }

  setStatus(status: CodeableConcept | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** If the substance applies to only human or veterinary use (0..1) Created when absent. */
  getDomain(): CodeableConcept {
    if (this.domain === undefined) {
      this.domain = new CodeableConcept();
    }
    return this.domain;
  }

  setDomain(domain: CodeableConcept | undefined): this {
    return this.setFieldValue('domain', domain);
  }

  hasDomain(): boolean {
    return this.hasFieldValue('domain');
  }

  /** Textual description of the substance (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Supporting literature (0..*) Never undefined; an empty list is created when absent. */
  getSource(): Reference[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: Reference[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty Reference to `source` and returns it so it can be filled in. */
  addSource(): Reference;
  /** Appends the given Reference to `source` and returns this object for chaining. */
  addSource(reference: Reference): this;
  addSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('source', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('source', createdReference);
    return createdReference;
  }

  /** The first Reference of `source`. One is added when the list is empty. */
  getSourceFirstRep(): Reference {
    const firstReference = this.getSource()[0];
    return firstReference === undefined ? this.addSource() : firstReference;
  }

  /** Textual comment about this record of a substance (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }

  /** Moiety, for structural modifications (0..*) Never undefined; an empty list is created when absent. */
  getMoiety(): SubstanceSpecificationMoiety[] {
    if (this.moiety === undefined) {
      this.moiety = [];
    }
    return this.moiety;
  }

  setMoiety(moiety: SubstanceSpecificationMoiety[] | undefined): this {
    return this.setFieldValue('moiety', moiety);
  }

  hasMoiety(): boolean {
    return this.hasFieldValue('moiety');
  }

  /** Appends a new, empty SubstanceSpecificationMoiety to `moiety` and returns it so it can be filled in. */
  addMoiety(): SubstanceSpecificationMoiety;
  /** Appends the given SubstanceSpecificationMoiety to `moiety` and returns this object for chaining. */
  addMoiety(substanceSpecificationMoiety: SubstanceSpecificationMoiety): this;
  addMoiety(
    substanceSpecificationMoiety?: SubstanceSpecificationMoiety
  ): SubstanceSpecificationMoiety | this {
    if (substanceSpecificationMoiety !== undefined) {
      return this.addFieldValue('moiety', substanceSpecificationMoiety);
    }
    const createdSubstanceSpecificationMoiety = new SubstanceSpecificationMoiety();
    this.addFieldValue('moiety', createdSubstanceSpecificationMoiety);
    return createdSubstanceSpecificationMoiety;
  }

  /** The first SubstanceSpecificationMoiety of `moiety`. One is added when the list is empty. */
  getMoietyFirstRep(): SubstanceSpecificationMoiety {
    const firstSubstanceSpecificationMoiety = this.getMoiety()[0];
    return firstSubstanceSpecificationMoiety === undefined
      ? this.addMoiety()
      : firstSubstanceSpecificationMoiety;
  }

  /** General specifications for this substance, including how it is related to other substances (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): SubstanceSpecificationProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: SubstanceSpecificationProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty SubstanceSpecificationProperty to `property` and returns it so it can be filled in. */
  addProperty(): SubstanceSpecificationProperty;
  /** Appends the given SubstanceSpecificationProperty to `property` and returns this object for chaining. */
  addProperty(substanceSpecificationProperty: SubstanceSpecificationProperty): this;
  addProperty(
    substanceSpecificationProperty?: SubstanceSpecificationProperty
  ): SubstanceSpecificationProperty | this {
    if (substanceSpecificationProperty !== undefined) {
      return this.addFieldValue('property', substanceSpecificationProperty);
    }
    const createdSubstanceSpecificationProperty = new SubstanceSpecificationProperty();
    this.addFieldValue('property', createdSubstanceSpecificationProperty);
    return createdSubstanceSpecificationProperty;
  }

  /** The first SubstanceSpecificationProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): SubstanceSpecificationProperty {
    const firstSubstanceSpecificationProperty = this.getProperty()[0];
    return firstSubstanceSpecificationProperty === undefined
      ? this.addProperty()
      : firstSubstanceSpecificationProperty;
  }

  /** General information detailing this substance (0..1) Created when absent. */
  getReferenceInformation(): Reference {
    if (this.referenceInformation === undefined) {
      this.referenceInformation = new Reference();
    }
    return this.referenceInformation;
  }

  setReferenceInformation(referenceInformation: Reference | undefined): this {
    return this.setFieldValue('referenceInformation', referenceInformation);
  }

  hasReferenceInformation(): boolean {
    return this.hasFieldValue('referenceInformation');
  }

  /** Structural information (0..1) Created when absent. */
  getStructure(): SubstanceSpecificationStructure {
    if (this.structure === undefined) {
      this.structure = new SubstanceSpecificationStructure();
    }
    return this.structure;
  }

  setStructure(structure: SubstanceSpecificationStructure | undefined): this {
    return this.setFieldValue('structure', structure);
  }

  hasStructure(): boolean {
    return this.hasFieldValue('structure');
  }

  /** Codes associated with the substance (0..*) Never undefined; an empty list is created when absent. */
  getCode(): SubstanceSpecificationCode[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: SubstanceSpecificationCode[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty SubstanceSpecificationCode to `code` and returns it so it can be filled in. */
  addCode(): SubstanceSpecificationCode;
  /** Appends the given SubstanceSpecificationCode to `code` and returns this object for chaining. */
  addCode(substanceSpecificationCode: SubstanceSpecificationCode): this;
  addCode(
    substanceSpecificationCode?: SubstanceSpecificationCode
  ): SubstanceSpecificationCode | this {
    if (substanceSpecificationCode !== undefined) {
      return this.addFieldValue('code', substanceSpecificationCode);
    }
    const createdSubstanceSpecificationCode = new SubstanceSpecificationCode();
    this.addFieldValue('code', createdSubstanceSpecificationCode);
    return createdSubstanceSpecificationCode;
  }

  /** The first SubstanceSpecificationCode of `code`. One is added when the list is empty. */
  getCodeFirstRep(): SubstanceSpecificationCode {
    const firstSubstanceSpecificationCode = this.getCode()[0];
    return firstSubstanceSpecificationCode === undefined
      ? this.addCode()
      : firstSubstanceSpecificationCode;
  }

  /** Names applicable to this substance (0..*) Never undefined; an empty list is created when absent. */
  getName(): SubstanceSpecificationName[] {
    if (this.name === undefined) {
      this.name = [];
    }
    return this.name;
  }

  setName(name: SubstanceSpecificationName[] | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** Appends a new, empty SubstanceSpecificationName to `name` and returns it so it can be filled in. */
  addName(): SubstanceSpecificationName;
  /** Appends the given SubstanceSpecificationName to `name` and returns this object for chaining. */
  addName(substanceSpecificationName: SubstanceSpecificationName): this;
  addName(
    substanceSpecificationName?: SubstanceSpecificationName
  ): SubstanceSpecificationName | this {
    if (substanceSpecificationName !== undefined) {
      return this.addFieldValue('name', substanceSpecificationName);
    }
    const createdSubstanceSpecificationName = new SubstanceSpecificationName();
    this.addFieldValue('name', createdSubstanceSpecificationName);
    return createdSubstanceSpecificationName;
  }

  /** The first SubstanceSpecificationName of `name`. One is added when the list is empty. */
  getNameFirstRep(): SubstanceSpecificationName {
    const firstSubstanceSpecificationName = this.getName()[0];
    return firstSubstanceSpecificationName === undefined
      ? this.addName()
      : firstSubstanceSpecificationName;
  }

  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) (0..*) Never undefined; an empty list is created when absent. */
  getMolecularWeight(): SubstanceSpecificationStructureIsotopeMolecularWeight[] {
    if (this.molecularWeight === undefined) {
      this.molecularWeight = [];
    }
    return this.molecularWeight;
  }

  setMolecularWeight(
    molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeight[] | undefined
  ): this {
    return this.setFieldValue('molecularWeight', molecularWeight);
  }

  hasMolecularWeight(): boolean {
    return this.hasFieldValue('molecularWeight');
  }

  /** Appends a new, empty SubstanceSpecificationStructureIsotopeMolecularWeight to `molecularWeight` and returns it so it can be filled in. */
  addMolecularWeight(): SubstanceSpecificationStructureIsotopeMolecularWeight;
  /** Appends the given SubstanceSpecificationStructureIsotopeMolecularWeight to `molecularWeight` and returns this object for chaining. */
  addMolecularWeight(
    substanceSpecificationStructureIsotopeMolecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeight
  ): this;
  addMolecularWeight(
    substanceSpecificationStructureIsotopeMolecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight
  ): SubstanceSpecificationStructureIsotopeMolecularWeight | this {
    if (substanceSpecificationStructureIsotopeMolecularWeight !== undefined) {
      return this.addFieldValue(
        'molecularWeight',
        substanceSpecificationStructureIsotopeMolecularWeight
      );
    }
    const createdSubstanceSpecificationStructureIsotopeMolecularWeight =
      new SubstanceSpecificationStructureIsotopeMolecularWeight();
    this.addFieldValue(
      'molecularWeight',
      createdSubstanceSpecificationStructureIsotopeMolecularWeight
    );
    return createdSubstanceSpecificationStructureIsotopeMolecularWeight;
  }

  /** The first SubstanceSpecificationStructureIsotopeMolecularWeight of `molecularWeight`. One is added when the list is empty. */
  getMolecularWeightFirstRep(): SubstanceSpecificationStructureIsotopeMolecularWeight {
    const firstSubstanceSpecificationStructureIsotopeMolecularWeight = this.getMolecularWeight()[0];
    return firstSubstanceSpecificationStructureIsotopeMolecularWeight === undefined
      ? this.addMolecularWeight()
      : firstSubstanceSpecificationStructureIsotopeMolecularWeight;
  }

  /** A link between this substance and another, with details of the relationship (0..*) Never undefined; an empty list is created when absent. */
  getRelationship(): SubstanceSpecificationRelationship[] {
    if (this.relationship === undefined) {
      this.relationship = [];
    }
    return this.relationship;
  }

  setRelationship(relationship: SubstanceSpecificationRelationship[] | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** Appends a new, empty SubstanceSpecificationRelationship to `relationship` and returns it so it can be filled in. */
  addRelationship(): SubstanceSpecificationRelationship;
  /** Appends the given SubstanceSpecificationRelationship to `relationship` and returns this object for chaining. */
  addRelationship(substanceSpecificationRelationship: SubstanceSpecificationRelationship): this;
  addRelationship(
    substanceSpecificationRelationship?: SubstanceSpecificationRelationship
  ): SubstanceSpecificationRelationship | this {
    if (substanceSpecificationRelationship !== undefined) {
      return this.addFieldValue('relationship', substanceSpecificationRelationship);
    }
    const createdSubstanceSpecificationRelationship = new SubstanceSpecificationRelationship();
    this.addFieldValue('relationship', createdSubstanceSpecificationRelationship);
    return createdSubstanceSpecificationRelationship;
  }

  /** The first SubstanceSpecificationRelationship of `relationship`. One is added when the list is empty. */
  getRelationshipFirstRep(): SubstanceSpecificationRelationship {
    const firstSubstanceSpecificationRelationship = this.getRelationship()[0];
    return firstSubstanceSpecificationRelationship === undefined
      ? this.addRelationship()
      : firstSubstanceSpecificationRelationship;
  }

  /** Data items specific to nucleic acids (0..1) Created when absent. */
  getNucleicAcid(): Reference {
    if (this.nucleicAcid === undefined) {
      this.nucleicAcid = new Reference();
    }
    return this.nucleicAcid;
  }

  setNucleicAcid(nucleicAcid: Reference | undefined): this {
    return this.setFieldValue('nucleicAcid', nucleicAcid);
  }

  hasNucleicAcid(): boolean {
    return this.hasFieldValue('nucleicAcid');
  }

  /** Data items specific to polymers (0..1) Created when absent. */
  getPolymer(): Reference {
    if (this.polymer === undefined) {
      this.polymer = new Reference();
    }
    return this.polymer;
  }

  setPolymer(polymer: Reference | undefined): this {
    return this.setFieldValue('polymer', polymer);
  }

  hasPolymer(): boolean {
    return this.hasFieldValue('polymer');
  }

  /** Data items specific to proteins (0..1) Created when absent. */
  getProtein(): Reference {
    if (this.protein === undefined) {
      this.protein = new Reference();
    }
    return this.protein;
  }

  setProtein(protein: Reference | undefined): this {
    return this.setFieldValue('protein', protein);
  }

  hasProtein(): boolean {
    return this.hasFieldValue('protein');
  }

  /** Material or taxonomic/anatomical source for the substance (0..1) Created when absent. */
  getSourceMaterial(): Reference {
    if (this.sourceMaterial === undefined) {
      this.sourceMaterial = new Reference();
    }
    return this.sourceMaterial;
  }

  setSourceMaterial(sourceMaterial: Reference | undefined): this {
    return this.setFieldValue('sourceMaterial', sourceMaterial);
  }

  hasSourceMaterial(): boolean {
    return this.hasFieldValue('sourceMaterial');
  }
}

modelTypeRegistry.register('SubstanceSpecification', SubstanceSpecification, true);

/** True when the value is a SubstanceSpecification model instance. */
export function isSubstanceSpecification(candidate: unknown): candidate is SubstanceSpecification {
  return candidate instanceof SubstanceSpecification;
}

/**
 * Moiety, for structural modifications
 */
export class SubstanceSpecificationMoiety extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'stereochemistry',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'stereochemistry', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'opticalActivity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'opticalActivity', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'molecularFormula',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'molecularFormula', typeCode: 'string' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'amountQuantity', typeCode: 'Quantity' },
        { jsonKey: 'amountString', typeCode: 'string' },
      ],
    },
  ];

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

  override fhirType(): string {
    return 'SubstanceSpecification.moiety';
  }

  /** FHIR JSON for this SubstanceSpecificationMoiety, typed as the plain `SubstanceSpecificationMoiety` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationMoiety {
    return this.serialize() as plainTypes.SubstanceSpecificationMoiety;
  }

  /** Role that the moiety is playing (0..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** Identifier by which this moiety substance is known (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Textual name for this moiety substance (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Stereochemistry type (0..1) Created when absent. */
  getStereochemistry(): CodeableConcept {
    if (this.stereochemistry === undefined) {
      this.stereochemistry = new CodeableConcept();
    }
    return this.stereochemistry;
  }

  setStereochemistry(stereochemistry: CodeableConcept | undefined): this {
    return this.setFieldValue('stereochemistry', stereochemistry);
  }

  hasStereochemistry(): boolean {
    return this.hasFieldValue('stereochemistry');
  }

  /** Optical activity type (0..1) Created when absent. */
  getOpticalActivity(): CodeableConcept {
    if (this.opticalActivity === undefined) {
      this.opticalActivity = new CodeableConcept();
    }
    return this.opticalActivity;
  }

  setOpticalActivity(opticalActivity: CodeableConcept | undefined): this {
    return this.setFieldValue('opticalActivity', opticalActivity);
  }

  hasOpticalActivity(): boolean {
    return this.hasFieldValue('opticalActivity');
  }

  /** Molecular formula (0..1) */
  getMolecularFormula(): string | undefined {
    return this.molecularFormula;
  }

  /** Sets `molecularFormula`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMolecularFormula(molecularFormula: string | undefined): this {
    return this.setFieldValue('molecularFormula', molecularFormula);
  }

  hasMolecularFormula(): boolean {
    return this.hasFieldValue('molecularFormula');
  }

  /** The element carrying the id and extensions of `molecularFormula`. Created when absent. */
  getMolecularFormulaElement(): Element {
    if (this._molecularFormula === undefined) {
      this._molecularFormula = new Element();
    }
    return this._molecularFormula;
  }

  setMolecularFormulaElement(molecularFormulaElement: Element | undefined): this {
    this._molecularFormula = molecularFormulaElement;
    return this;
  }

  /** Quantitative value for this moiety (0..1) Whichever type of `amount[x]` is set. */
  getAmount(): Quantity | string | undefined {
    return this.getChoiceValue<Quantity | string>('amount');
  }

  /** True when any type of `amount[x]` is set. */
  hasAmount(): boolean {
    return this.hasChoiceValue('amount');
  }

  getAmountQuantity(): Quantity | undefined {
    return this.amountQuantity;
  }

  /** Sets `amount[x]` as Quantity and clears every other type of it. */
  setAmountQuantity(amountQuantity: Quantity | undefined): this {
    return this.setFieldValue('amountQuantity', amountQuantity);
  }

  hasAmountQuantity(): boolean {
    return this.hasFieldValue('amountQuantity');
  }

  getAmountString(): string | undefined {
    return this.amountString;
  }

  /** Sets `amount[x]` as string and clears every other type of it. */
  setAmountString(amountString: string | undefined): this {
    return this.setFieldValue('amountString', amountString);
  }

  hasAmountString(): boolean {
    return this.hasFieldValue('amountString');
  }
}

modelTypeRegistry.register('SubstanceSpecificationMoiety', SubstanceSpecificationMoiety, false);

/**
 * General specifications for this substance, including how it is related to other substances
 */
export class SubstanceSpecificationProperty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'parameters',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'parameters', typeCode: 'string' }],
    },
    {
      elementName: 'definingSubstance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'definingSubstanceReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Substance', 'SubstanceSpecification'],
        },
        { jsonKey: 'definingSubstanceCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'amountQuantity', typeCode: 'Quantity' },
        { jsonKey: 'amountString', typeCode: 'string' },
      ],
    },
  ];

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

  override fhirType(): string {
    return 'SubstanceSpecification.property';
  }

  /** FHIR JSON for this SubstanceSpecificationProperty, typed as the plain `SubstanceSpecificationProperty` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationProperty {
    return this.serialize() as plainTypes.SubstanceSpecificationProperty;
  }

  /** A category for this property, e.g. Physical, Chemical, Enzymatic (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Property type e.g. viscosity, pH, isoelectric point (0..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1) (0..1) */
  getParameters(): string | undefined {
    return this.parameters;
  }

  /** Sets `parameters`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setParameters(parameters: string | undefined): this {
    return this.setFieldValue('parameters', parameters);
  }

  hasParameters(): boolean {
    return this.hasFieldValue('parameters');
  }

  /** The element carrying the id and extensions of `parameters`. Created when absent. */
  getParametersElement(): Element {
    if (this._parameters === undefined) {
      this._parameters = new Element();
    }
    return this._parameters;
  }

  setParametersElement(parametersElement: Element | undefined): this {
    this._parameters = parametersElement;
    return this;
  }

  /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) (0..1) Whichever type of `definingSubstance[x]` is set. */
  getDefiningSubstance(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('definingSubstance');
  }

  /** True when any type of `definingSubstance[x]` is set. */
  hasDefiningSubstance(): boolean {
    return this.hasChoiceValue('definingSubstance');
  }

  getDefiningSubstanceReference(): Reference | undefined {
    return this.definingSubstanceReference;
  }

  /** Sets `definingSubstance[x]` as Reference and clears every other type of it. */
  setDefiningSubstanceReference(definingSubstanceReference: Reference | undefined): this {
    return this.setFieldValue('definingSubstanceReference', definingSubstanceReference);
  }

  hasDefiningSubstanceReference(): boolean {
    return this.hasFieldValue('definingSubstanceReference');
  }

  getDefiningSubstanceCodeableConcept(): CodeableConcept | undefined {
    return this.definingSubstanceCodeableConcept;
  }

  /** Sets `definingSubstance[x]` as CodeableConcept and clears every other type of it. */
  setDefiningSubstanceCodeableConcept(
    definingSubstanceCodeableConcept: CodeableConcept | undefined
  ): this {
    return this.setFieldValue('definingSubstanceCodeableConcept', definingSubstanceCodeableConcept);
  }

  hasDefiningSubstanceCodeableConcept(): boolean {
    return this.hasFieldValue('definingSubstanceCodeableConcept');
  }

  /** Quantitative value for this property (0..1) Whichever type of `amount[x]` is set. */
  getAmount(): Quantity | string | undefined {
    return this.getChoiceValue<Quantity | string>('amount');
  }

  /** True when any type of `amount[x]` is set. */
  hasAmount(): boolean {
    return this.hasChoiceValue('amount');
  }

  getAmountQuantity(): Quantity | undefined {
    return this.amountQuantity;
  }

  /** Sets `amount[x]` as Quantity and clears every other type of it. */
  setAmountQuantity(amountQuantity: Quantity | undefined): this {
    return this.setFieldValue('amountQuantity', amountQuantity);
  }

  hasAmountQuantity(): boolean {
    return this.hasFieldValue('amountQuantity');
  }

  getAmountString(): string | undefined {
    return this.amountString;
  }

  /** Sets `amount[x]` as string and clears every other type of it. */
  setAmountString(amountString: string | undefined): this {
    return this.setFieldValue('amountString', amountString);
  }

  hasAmountString(): boolean {
    return this.hasFieldValue('amountString');
  }
}

modelTypeRegistry.register('SubstanceSpecificationProperty', SubstanceSpecificationProperty, false);

/**
 * Structural information
 */
export class SubstanceSpecificationStructure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'stereochemistry',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'stereochemistry', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'opticalActivity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'opticalActivity', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'molecularFormula',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'molecularFormula', typeCode: 'string' }],
    },
    {
      elementName: 'molecularFormulaByMoiety',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'molecularFormulaByMoiety', typeCode: 'string' }],
    },
    {
      elementName: 'isotope',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'isotope', typeCode: 'SubstanceSpecificationStructureIsotope' }],
    },
    {
      elementName: 'molecularWeight',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'molecularWeight',
          typeCode: 'SubstanceSpecificationStructureIsotopeMolecularWeight',
        },
      ],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
    {
      elementName: 'representation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'representation', typeCode: 'SubstanceSpecificationStructureRepresentation' },
      ],
    },
  ];

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
  isotope?: SubstanceSpecificationStructureIsotope[];

  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) (0..1) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  /** Supporting literature (0..*) */
  source?: Reference[];

  /** Molecular structural representation (0..*) */
  representation?: SubstanceSpecificationStructureRepresentation[];

  override fhirType(): string {
    return 'SubstanceSpecification.structure';
  }

  /** FHIR JSON for this SubstanceSpecificationStructure, typed as the plain `SubstanceSpecificationStructure` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationStructure {
    return this.serialize() as plainTypes.SubstanceSpecificationStructure;
  }

  /** Stereochemistry type (0..1) Created when absent. */
  getStereochemistry(): CodeableConcept {
    if (this.stereochemistry === undefined) {
      this.stereochemistry = new CodeableConcept();
    }
    return this.stereochemistry;
  }

  setStereochemistry(stereochemistry: CodeableConcept | undefined): this {
    return this.setFieldValue('stereochemistry', stereochemistry);
  }

  hasStereochemistry(): boolean {
    return this.hasFieldValue('stereochemistry');
  }

  /** Optical activity type (0..1) Created when absent. */
  getOpticalActivity(): CodeableConcept {
    if (this.opticalActivity === undefined) {
      this.opticalActivity = new CodeableConcept();
    }
    return this.opticalActivity;
  }

  setOpticalActivity(opticalActivity: CodeableConcept | undefined): this {
    return this.setFieldValue('opticalActivity', opticalActivity);
  }

  hasOpticalActivity(): boolean {
    return this.hasFieldValue('opticalActivity');
  }

  /** Molecular formula (0..1) */
  getMolecularFormula(): string | undefined {
    return this.molecularFormula;
  }

  /** Sets `molecularFormula`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMolecularFormula(molecularFormula: string | undefined): this {
    return this.setFieldValue('molecularFormula', molecularFormula);
  }

  hasMolecularFormula(): boolean {
    return this.hasFieldValue('molecularFormula');
  }

  /** The element carrying the id and extensions of `molecularFormula`. Created when absent. */
  getMolecularFormulaElement(): Element {
    if (this._molecularFormula === undefined) {
      this._molecularFormula = new Element();
    }
    return this._molecularFormula;
  }

  setMolecularFormulaElement(molecularFormulaElement: Element | undefined): this {
    this._molecularFormula = molecularFormulaElement;
    return this;
  }

  /** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot (0..1) */
  getMolecularFormulaByMoiety(): string | undefined {
    return this.molecularFormulaByMoiety;
  }

  /** Sets `molecularFormulaByMoiety`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMolecularFormulaByMoiety(molecularFormulaByMoiety: string | undefined): this {
    return this.setFieldValue('molecularFormulaByMoiety', molecularFormulaByMoiety);
  }

  hasMolecularFormulaByMoiety(): boolean {
    return this.hasFieldValue('molecularFormulaByMoiety');
  }

  /** The element carrying the id and extensions of `molecularFormulaByMoiety`. Created when absent. */
  getMolecularFormulaByMoietyElement(): Element {
    if (this._molecularFormulaByMoiety === undefined) {
      this._molecularFormulaByMoiety = new Element();
    }
    return this._molecularFormulaByMoiety;
  }

  setMolecularFormulaByMoietyElement(molecularFormulaByMoietyElement: Element | undefined): this {
    this._molecularFormulaByMoiety = molecularFormulaByMoietyElement;
    return this;
  }

  /** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio (0..*) Never undefined; an empty list is created when absent. */
  getIsotope(): SubstanceSpecificationStructureIsotope[] {
    if (this.isotope === undefined) {
      this.isotope = [];
    }
    return this.isotope;
  }

  setIsotope(isotope: SubstanceSpecificationStructureIsotope[] | undefined): this {
    return this.setFieldValue('isotope', isotope);
  }

  hasIsotope(): boolean {
    return this.hasFieldValue('isotope');
  }

  /** Appends a new, empty SubstanceSpecificationStructureIsotope to `isotope` and returns it so it can be filled in. */
  addIsotope(): SubstanceSpecificationStructureIsotope;
  /** Appends the given SubstanceSpecificationStructureIsotope to `isotope` and returns this object for chaining. */
  addIsotope(substanceSpecificationStructureIsotope: SubstanceSpecificationStructureIsotope): this;
  addIsotope(
    substanceSpecificationStructureIsotope?: SubstanceSpecificationStructureIsotope
  ): SubstanceSpecificationStructureIsotope | this {
    if (substanceSpecificationStructureIsotope !== undefined) {
      return this.addFieldValue('isotope', substanceSpecificationStructureIsotope);
    }
    const createdSubstanceSpecificationStructureIsotope =
      new SubstanceSpecificationStructureIsotope();
    this.addFieldValue('isotope', createdSubstanceSpecificationStructureIsotope);
    return createdSubstanceSpecificationStructureIsotope;
  }

  /** The first SubstanceSpecificationStructureIsotope of `isotope`. One is added when the list is empty. */
  getIsotopeFirstRep(): SubstanceSpecificationStructureIsotope {
    const firstSubstanceSpecificationStructureIsotope = this.getIsotope()[0];
    return firstSubstanceSpecificationStructureIsotope === undefined
      ? this.addIsotope()
      : firstSubstanceSpecificationStructureIsotope;
  }

  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) (0..1) Created when absent. */
  getMolecularWeight(): SubstanceSpecificationStructureIsotopeMolecularWeight {
    if (this.molecularWeight === undefined) {
      this.molecularWeight = new SubstanceSpecificationStructureIsotopeMolecularWeight();
    }
    return this.molecularWeight;
  }

  setMolecularWeight(
    molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeight | undefined
  ): this {
    return this.setFieldValue('molecularWeight', molecularWeight);
  }

  hasMolecularWeight(): boolean {
    return this.hasFieldValue('molecularWeight');
  }

  /** Supporting literature (0..*) Never undefined; an empty list is created when absent. */
  getSource(): Reference[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: Reference[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty Reference to `source` and returns it so it can be filled in. */
  addSource(): Reference;
  /** Appends the given Reference to `source` and returns this object for chaining. */
  addSource(reference: Reference): this;
  addSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('source', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('source', createdReference);
    return createdReference;
  }

  /** The first Reference of `source`. One is added when the list is empty. */
  getSourceFirstRep(): Reference {
    const firstReference = this.getSource()[0];
    return firstReference === undefined ? this.addSource() : firstReference;
  }

  /** Molecular structural representation (0..*) Never undefined; an empty list is created when absent. */
  getRepresentation(): SubstanceSpecificationStructureRepresentation[] {
    if (this.representation === undefined) {
      this.representation = [];
    }
    return this.representation;
  }

  setRepresentation(
    representation: SubstanceSpecificationStructureRepresentation[] | undefined
  ): this {
    return this.setFieldValue('representation', representation);
  }

  hasRepresentation(): boolean {
    return this.hasFieldValue('representation');
  }

  /** Appends a new, empty SubstanceSpecificationStructureRepresentation to `representation` and returns it so it can be filled in. */
  addRepresentation(): SubstanceSpecificationStructureRepresentation;
  /** Appends the given SubstanceSpecificationStructureRepresentation to `representation` and returns this object for chaining. */
  addRepresentation(
    substanceSpecificationStructureRepresentation: SubstanceSpecificationStructureRepresentation
  ): this;
  addRepresentation(
    substanceSpecificationStructureRepresentation?: SubstanceSpecificationStructureRepresentation
  ): SubstanceSpecificationStructureRepresentation | this {
    if (substanceSpecificationStructureRepresentation !== undefined) {
      return this.addFieldValue('representation', substanceSpecificationStructureRepresentation);
    }
    const createdSubstanceSpecificationStructureRepresentation =
      new SubstanceSpecificationStructureRepresentation();
    this.addFieldValue('representation', createdSubstanceSpecificationStructureRepresentation);
    return createdSubstanceSpecificationStructureRepresentation;
  }

  /** The first SubstanceSpecificationStructureRepresentation of `representation`. One is added when the list is empty. */
  getRepresentationFirstRep(): SubstanceSpecificationStructureRepresentation {
    const firstSubstanceSpecificationStructureRepresentation = this.getRepresentation()[0];
    return firstSubstanceSpecificationStructureRepresentation === undefined
      ? this.addRepresentation()
      : firstSubstanceSpecificationStructureRepresentation;
  }
}

modelTypeRegistry.register(
  'SubstanceSpecificationStructure',
  SubstanceSpecificationStructure,
  false
);

/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
 */
export class SubstanceSpecificationStructureIsotope extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'substitution',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'substitution', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'halfLife',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'halfLife', typeCode: 'Quantity' }],
    },
    {
      elementName: 'molecularWeight',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'molecularWeight',
          typeCode: 'SubstanceSpecificationStructureIsotopeMolecularWeight',
        },
      ],
    },
  ];

  /** Substance identifier for each non-natural or radioisotope (0..1) */
  identifier?: Identifier;

  /** Substance name for each non-natural or radioisotope (0..1) */
  name?: CodeableConcept;

  /** The type of isotopic substitution present in a single substance (0..1) */
  substitution?: CodeableConcept;

  /** Half life - for a non-natural nuclide (0..1) */
  halfLife?: Quantity;

  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) (0..1) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  override fhirType(): string {
    return 'SubstanceSpecification.structure.isotope';
  }

  /** FHIR JSON for this SubstanceSpecificationStructureIsotope, typed as the plain `SubstanceSpecificationIsotope` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationIsotope {
    return this.serialize() as plainTypes.SubstanceSpecificationIsotope;
  }

  /** Substance identifier for each non-natural or radioisotope (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Substance name for each non-natural or radioisotope (0..1) Created when absent. */
  getName(): CodeableConcept {
    if (this.name === undefined) {
      this.name = new CodeableConcept();
    }
    return this.name;
  }

  setName(name: CodeableConcept | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The type of isotopic substitution present in a single substance (0..1) Created when absent. */
  getSubstitution(): CodeableConcept {
    if (this.substitution === undefined) {
      this.substitution = new CodeableConcept();
    }
    return this.substitution;
  }

  setSubstitution(substitution: CodeableConcept | undefined): this {
    return this.setFieldValue('substitution', substitution);
  }

  hasSubstitution(): boolean {
    return this.hasFieldValue('substitution');
  }

  /** Half life - for a non-natural nuclide (0..1) Created when absent. */
  getHalfLife(): Quantity {
    if (this.halfLife === undefined) {
      this.halfLife = new Quantity();
    }
    return this.halfLife;
  }

  setHalfLife(halfLife: Quantity | undefined): this {
    return this.setFieldValue('halfLife', halfLife);
  }

  hasHalfLife(): boolean {
    return this.hasFieldValue('halfLife');
  }

  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) (0..1) Created when absent. */
  getMolecularWeight(): SubstanceSpecificationStructureIsotopeMolecularWeight {
    if (this.molecularWeight === undefined) {
      this.molecularWeight = new SubstanceSpecificationStructureIsotopeMolecularWeight();
    }
    return this.molecularWeight;
  }

  setMolecularWeight(
    molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeight | undefined
  ): this {
    return this.setFieldValue('molecularWeight', molecularWeight);
  }

  hasMolecularWeight(): boolean {
    return this.hasFieldValue('molecularWeight');
  }
}

modelTypeRegistry.register(
  'SubstanceSpecificationStructureIsotope',
  SubstanceSpecificationStructureIsotope,
  false
);

/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids)
 */
export class SubstanceSpecificationStructureIsotopeMolecularWeight extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
  ];

  /** The method by which the molecular weight was determined (0..1) */
  method?: CodeableConcept;

  /** Type of molecular weight such as exact, average (also known as. number average), weight average (0..1) */
  type?: CodeableConcept;

  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field (0..1) */
  amount?: Quantity;

  override fhirType(): string {
    return 'SubstanceSpecification.structure.isotope.molecularWeight';
  }

  /** FHIR JSON for this SubstanceSpecificationStructureIsotopeMolecularWeight, typed as the plain `SubstanceSpecificationMolecularWeight` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationMolecularWeight {
    return this.serialize() as plainTypes.SubstanceSpecificationMolecularWeight;
  }

  /** The method by which the molecular weight was determined (0..1) Created when absent. */
  getMethod(): CodeableConcept {
    if (this.method === undefined) {
      this.method = new CodeableConcept();
    }
    return this.method;
  }

  setMethod(method: CodeableConcept | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }

  /** Type of molecular weight such as exact, average (also known as. number average), weight average (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field (0..1) Created when absent. */
  getAmount(): Quantity {
    if (this.amount === undefined) {
      this.amount = new Quantity();
    }
    return this.amount;
  }

  setAmount(amount: Quantity | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }
}

modelTypeRegistry.register(
  'SubstanceSpecificationStructureIsotopeMolecularWeight',
  SubstanceSpecificationStructureIsotopeMolecularWeight,
  false
);

/**
 * Molecular structural representation
 */
export class SubstanceSpecificationStructureRepresentation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'representation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'representation', typeCode: 'string' }],
    },
    {
      elementName: 'attachment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'attachment', typeCode: 'Attachment' }],
    },
  ];

  /** The type of structure (e.g. Full, Partial, Representative) (0..1) */
  type?: CodeableConcept;

  /** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX (0..1) */
  representation?: string;
  /** Id and extensions of the primitive `representation`. */
  _representation?: Element;

  /** An attached file with the structural representation (0..1) */
  attachment?: Attachment;

  override fhirType(): string {
    return 'SubstanceSpecification.structure.representation';
  }

  /** FHIR JSON for this SubstanceSpecificationStructureRepresentation, typed as the plain `SubstanceSpecificationRepresentation` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationRepresentation {
    return this.serialize() as plainTypes.SubstanceSpecificationRepresentation;
  }

  /** The type of structure (e.g. Full, Partial, Representative) (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX (0..1) */
  getRepresentation(): string | undefined {
    return this.representation;
  }

  /** Sets `representation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRepresentation(representation: string | undefined): this {
    return this.setFieldValue('representation', representation);
  }

  hasRepresentation(): boolean {
    return this.hasFieldValue('representation');
  }

  /** The element carrying the id and extensions of `representation`. Created when absent. */
  getRepresentationElement(): Element {
    if (this._representation === undefined) {
      this._representation = new Element();
    }
    return this._representation;
  }

  setRepresentationElement(representationElement: Element | undefined): this {
    this._representation = representationElement;
    return this;
  }

  /** An attached file with the structural representation (0..1) Created when absent. */
  getAttachment(): Attachment {
    if (this.attachment === undefined) {
      this.attachment = new Attachment();
    }
    return this.attachment;
  }

  setAttachment(attachment: Attachment | undefined): this {
    return this.setFieldValue('attachment', attachment);
  }

  hasAttachment(): boolean {
    return this.hasFieldValue('attachment');
  }
}

modelTypeRegistry.register(
  'SubstanceSpecificationStructureRepresentation',
  SubstanceSpecificationStructureRepresentation,
  false
);

/**
 * Codes associated with the substance
 */
export class SubstanceSpecificationCode extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'statusDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

  /** The specific code (0..1) */
  code?: CodeableConcept;

  /** Status of the code assignment (0..1) */
  status?: CodeableConcept;

  /** The date at which the code status is changed as part of the terminology maintenance (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;

  /** Any comment can be provided in this field, if necessary (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Supporting literature (0..*) */
  source?: Reference[];

  override fhirType(): string {
    return 'SubstanceSpecification.code';
  }

  /** FHIR JSON for this SubstanceSpecificationCode, typed as the plain `SubstanceSpecificationCode` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationCode {
    return this.serialize() as plainTypes.SubstanceSpecificationCode;
  }

  /** The specific code (0..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Status of the code assignment (0..1) Created when absent. */
  getStatus(): CodeableConcept {
    if (this.status === undefined) {
      this.status = new CodeableConcept();
    }
    return this.status;
  }

  setStatus(status: CodeableConcept | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The date at which the code status is changed as part of the terminology maintenance (0..1) */
  getStatusDate(): string | undefined {
    return this.statusDate;
  }

  /** Sets `statusDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStatusDate(statusDate: string | undefined): this {
    return this.setFieldValue('statusDate', statusDate);
  }

  hasStatusDate(): boolean {
    return this.hasFieldValue('statusDate');
  }

  /** The element carrying the id and extensions of `statusDate`. Created when absent. */
  getStatusDateElement(): Element {
    if (this._statusDate === undefined) {
      this._statusDate = new Element();
    }
    return this._statusDate;
  }

  setStatusDateElement(statusDateElement: Element | undefined): this {
    this._statusDate = statusDateElement;
    return this;
  }

  /** Any comment can be provided in this field, if necessary (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }

  /** Supporting literature (0..*) Never undefined; an empty list is created when absent. */
  getSource(): Reference[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: Reference[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty Reference to `source` and returns it so it can be filled in. */
  addSource(): Reference;
  /** Appends the given Reference to `source` and returns this object for chaining. */
  addSource(reference: Reference): this;
  addSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('source', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('source', createdReference);
    return createdReference;
  }

  /** The first Reference of `source`. One is added when the list is empty. */
  getSourceFirstRep(): Reference {
    const firstReference = this.getSource()[0];
    return firstReference === undefined ? this.addSource() : firstReference;
  }
}

modelTypeRegistry.register('SubstanceSpecificationCode', SubstanceSpecificationCode, false);

/**
 * Names applicable to this substance
 */
export class SubstanceSpecificationName extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'preferred',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preferred', typeCode: 'boolean' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'language', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'domain',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'domain', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'synonym',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'synonym', typeCode: 'SubstanceSpecificationName' }],
    },
    {
      elementName: 'translation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'translation', typeCode: 'SubstanceSpecificationName' }],
    },
    {
      elementName: 'official',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'official', typeCode: 'SubstanceSpecificationNameOfficial' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

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
  language?: CodeableConcept[];

  /** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive (0..*) */
  domain?: CodeableConcept[];

  /** The jurisdiction where this name applies (0..*) */
  jurisdiction?: CodeableConcept[];

  /** A synonym of this name (0..*) */
  synonym?: SubstanceSpecificationName[];

  /** A translation for this name (0..*) */
  translation?: SubstanceSpecificationName[];

  /** Details of the official nature of this name (0..*) */
  official?: SubstanceSpecificationNameOfficial[];

  /** Supporting literature (0..*) */
  source?: Reference[];

  override fhirType(): string {
    return 'SubstanceSpecification.name';
  }

  /** FHIR JSON for this SubstanceSpecificationName, typed as the plain `SubstanceSpecificationName` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationName {
    return this.serialize() as plainTypes.SubstanceSpecificationName;
  }

  /** The actual name (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Name type (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The status of the name (0..1) Created when absent. */
  getStatus(): CodeableConcept {
    if (this.status === undefined) {
      this.status = new CodeableConcept();
    }
    return this.status;
  }

  setStatus(status: CodeableConcept | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** If this is the preferred name for this substance (0..1) */
  getPreferred(): boolean | undefined {
    return this.preferred;
  }

  /** Sets `preferred`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setPreferred(preferred: boolean | undefined): this {
    return this.setFieldValue('preferred', preferred);
  }

  hasPreferred(): boolean {
    return this.hasFieldValue('preferred');
  }

  /** The element carrying the id and extensions of `preferred`. Created when absent. */
  getPreferredElement(): Element {
    if (this._preferred === undefined) {
      this._preferred = new Element();
    }
    return this._preferred;
  }

  setPreferredElement(preferredElement: Element | undefined): this {
    this._preferred = preferredElement;
    return this;
  }

  /** Language of the name (0..*) Never undefined; an empty list is created when absent. */
  getLanguage(): CodeableConcept[] {
    if (this.language === undefined) {
      this.language = [];
    }
    return this.language;
  }

  setLanguage(language: CodeableConcept[] | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** Appends a new, empty CodeableConcept to `language` and returns it so it can be filled in. */
  addLanguage(): CodeableConcept;
  /** Appends the given CodeableConcept to `language` and returns this object for chaining. */
  addLanguage(codeableConcept: CodeableConcept): this;
  addLanguage(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('language', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('language', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `language`. One is added when the list is empty. */
  getLanguageFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getLanguage()[0];
    return firstCodeableConcept === undefined ? this.addLanguage() : firstCodeableConcept;
  }

  /** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive (0..*) Never undefined; an empty list is created when absent. */
  getDomain(): CodeableConcept[] {
    if (this.domain === undefined) {
      this.domain = [];
    }
    return this.domain;
  }

  setDomain(domain: CodeableConcept[] | undefined): this {
    return this.setFieldValue('domain', domain);
  }

  hasDomain(): boolean {
    return this.hasFieldValue('domain');
  }

  /** Appends a new, empty CodeableConcept to `domain` and returns it so it can be filled in. */
  addDomain(): CodeableConcept;
  /** Appends the given CodeableConcept to `domain` and returns this object for chaining. */
  addDomain(codeableConcept: CodeableConcept): this;
  addDomain(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('domain', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('domain', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `domain`. One is added when the list is empty. */
  getDomainFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getDomain()[0];
    return firstCodeableConcept === undefined ? this.addDomain() : firstCodeableConcept;
  }

  /** The jurisdiction where this name applies (0..*) Never undefined; an empty list is created when absent. */
  getJurisdiction(): CodeableConcept[] {
    if (this.jurisdiction === undefined) {
      this.jurisdiction = [];
    }
    return this.jurisdiction;
  }

  setJurisdiction(jurisdiction: CodeableConcept[] | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }

  /** Appends a new, empty CodeableConcept to `jurisdiction` and returns it so it can be filled in. */
  addJurisdiction(): CodeableConcept;
  /** Appends the given CodeableConcept to `jurisdiction` and returns this object for chaining. */
  addJurisdiction(codeableConcept: CodeableConcept): this;
  addJurisdiction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('jurisdiction', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('jurisdiction', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `jurisdiction`. One is added when the list is empty. */
  getJurisdictionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getJurisdiction()[0];
    return firstCodeableConcept === undefined ? this.addJurisdiction() : firstCodeableConcept;
  }

  /** A synonym of this name (0..*) Never undefined; an empty list is created when absent. */
  getSynonym(): SubstanceSpecificationName[] {
    if (this.synonym === undefined) {
      this.synonym = [];
    }
    return this.synonym;
  }

  setSynonym(synonym: SubstanceSpecificationName[] | undefined): this {
    return this.setFieldValue('synonym', synonym);
  }

  hasSynonym(): boolean {
    return this.hasFieldValue('synonym');
  }

  /** Appends a new, empty SubstanceSpecificationName to `synonym` and returns it so it can be filled in. */
  addSynonym(): SubstanceSpecificationName;
  /** Appends the given SubstanceSpecificationName to `synonym` and returns this object for chaining. */
  addSynonym(substanceSpecificationName: SubstanceSpecificationName): this;
  addSynonym(
    substanceSpecificationName?: SubstanceSpecificationName
  ): SubstanceSpecificationName | this {
    if (substanceSpecificationName !== undefined) {
      return this.addFieldValue('synonym', substanceSpecificationName);
    }
    const createdSubstanceSpecificationName = new SubstanceSpecificationName();
    this.addFieldValue('synonym', createdSubstanceSpecificationName);
    return createdSubstanceSpecificationName;
  }

  /** The first SubstanceSpecificationName of `synonym`. One is added when the list is empty. */
  getSynonymFirstRep(): SubstanceSpecificationName {
    const firstSubstanceSpecificationName = this.getSynonym()[0];
    return firstSubstanceSpecificationName === undefined
      ? this.addSynonym()
      : firstSubstanceSpecificationName;
  }

  /** A translation for this name (0..*) Never undefined; an empty list is created when absent. */
  getTranslation(): SubstanceSpecificationName[] {
    if (this.translation === undefined) {
      this.translation = [];
    }
    return this.translation;
  }

  setTranslation(translation: SubstanceSpecificationName[] | undefined): this {
    return this.setFieldValue('translation', translation);
  }

  hasTranslation(): boolean {
    return this.hasFieldValue('translation');
  }

  /** Appends a new, empty SubstanceSpecificationName to `translation` and returns it so it can be filled in. */
  addTranslation(): SubstanceSpecificationName;
  /** Appends the given SubstanceSpecificationName to `translation` and returns this object for chaining. */
  addTranslation(substanceSpecificationName: SubstanceSpecificationName): this;
  addTranslation(
    substanceSpecificationName?: SubstanceSpecificationName
  ): SubstanceSpecificationName | this {
    if (substanceSpecificationName !== undefined) {
      return this.addFieldValue('translation', substanceSpecificationName);
    }
    const createdSubstanceSpecificationName = new SubstanceSpecificationName();
    this.addFieldValue('translation', createdSubstanceSpecificationName);
    return createdSubstanceSpecificationName;
  }

  /** The first SubstanceSpecificationName of `translation`. One is added when the list is empty. */
  getTranslationFirstRep(): SubstanceSpecificationName {
    const firstSubstanceSpecificationName = this.getTranslation()[0];
    return firstSubstanceSpecificationName === undefined
      ? this.addTranslation()
      : firstSubstanceSpecificationName;
  }

  /** Details of the official nature of this name (0..*) Never undefined; an empty list is created when absent. */
  getOfficial(): SubstanceSpecificationNameOfficial[] {
    if (this.official === undefined) {
      this.official = [];
    }
    return this.official;
  }

  setOfficial(official: SubstanceSpecificationNameOfficial[] | undefined): this {
    return this.setFieldValue('official', official);
  }

  hasOfficial(): boolean {
    return this.hasFieldValue('official');
  }

  /** Appends a new, empty SubstanceSpecificationNameOfficial to `official` and returns it so it can be filled in. */
  addOfficial(): SubstanceSpecificationNameOfficial;
  /** Appends the given SubstanceSpecificationNameOfficial to `official` and returns this object for chaining. */
  addOfficial(substanceSpecificationNameOfficial: SubstanceSpecificationNameOfficial): this;
  addOfficial(
    substanceSpecificationNameOfficial?: SubstanceSpecificationNameOfficial
  ): SubstanceSpecificationNameOfficial | this {
    if (substanceSpecificationNameOfficial !== undefined) {
      return this.addFieldValue('official', substanceSpecificationNameOfficial);
    }
    const createdSubstanceSpecificationNameOfficial = new SubstanceSpecificationNameOfficial();
    this.addFieldValue('official', createdSubstanceSpecificationNameOfficial);
    return createdSubstanceSpecificationNameOfficial;
  }

  /** The first SubstanceSpecificationNameOfficial of `official`. One is added when the list is empty. */
  getOfficialFirstRep(): SubstanceSpecificationNameOfficial {
    const firstSubstanceSpecificationNameOfficial = this.getOfficial()[0];
    return firstSubstanceSpecificationNameOfficial === undefined
      ? this.addOfficial()
      : firstSubstanceSpecificationNameOfficial;
  }

  /** Supporting literature (0..*) Never undefined; an empty list is created when absent. */
  getSource(): Reference[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: Reference[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty Reference to `source` and returns it so it can be filled in. */
  addSource(): Reference;
  /** Appends the given Reference to `source` and returns this object for chaining. */
  addSource(reference: Reference): this;
  addSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('source', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('source', createdReference);
    return createdReference;
  }

  /** The first Reference of `source`. One is added when the list is empty. */
  getSourceFirstRep(): Reference {
    const firstReference = this.getSource()[0];
    return firstReference === undefined ? this.addSource() : firstReference;
  }
}

modelTypeRegistry.register('SubstanceSpecificationName', SubstanceSpecificationName, false);

/**
 * Details of the official nature of this name
 */
export class SubstanceSpecificationNameOfficial extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'authority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authority', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
  ];

  /** Which authority uses this official name (0..1) */
  authority?: CodeableConcept;

  /** The status of the official name (0..1) */
  status?: CodeableConcept;

  /** Date of official name change (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  override fhirType(): string {
    return 'SubstanceSpecification.name.official';
  }

  /** FHIR JSON for this SubstanceSpecificationNameOfficial, typed as the plain `SubstanceSpecificationOfficial` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationOfficial {
    return this.serialize() as plainTypes.SubstanceSpecificationOfficial;
  }

  /** Which authority uses this official name (0..1) Created when absent. */
  getAuthority(): CodeableConcept {
    if (this.authority === undefined) {
      this.authority = new CodeableConcept();
    }
    return this.authority;
  }

  setAuthority(authority: CodeableConcept | undefined): this {
    return this.setFieldValue('authority', authority);
  }

  hasAuthority(): boolean {
    return this.hasFieldValue('authority');
  }

  /** The status of the official name (0..1) Created when absent. */
  getStatus(): CodeableConcept {
    if (this.status === undefined) {
      this.status = new CodeableConcept();
    }
    return this.status;
  }

  setStatus(status: CodeableConcept | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** Date of official name change (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SubstanceSpecificationNameOfficial',
  SubstanceSpecificationNameOfficial,
  false
);

/**
 * A link between this substance and another, with details of the relationship
 */
export class SubstanceSpecificationRelationship extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'substance',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'substanceReference',
          typeCode: 'Reference',
          targetResourceTypes: ['SubstanceSpecification'],
        },
        { jsonKey: 'substanceCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'relationship',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relationship', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'isDefining',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isDefining', typeCode: 'boolean' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'amountQuantity', typeCode: 'Quantity' },
        { jsonKey: 'amountRange', typeCode: 'Range' },
        { jsonKey: 'amountRatio', typeCode: 'Ratio' },
        { jsonKey: 'amountString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'amountRatioLowLimit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amountRatioLowLimit', typeCode: 'Ratio' }],
    },
    {
      elementName: 'amountType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amountType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

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
  source?: Reference[];

  override fhirType(): string {
    return 'SubstanceSpecification.relationship';
  }

  /** FHIR JSON for this SubstanceSpecificationRelationship, typed as the plain `SubstanceSpecificationRelationship` data type. */
  override toJSON(): plainTypes.SubstanceSpecificationRelationship {
    return this.serialize() as plainTypes.SubstanceSpecificationRelationship;
  }

  /** A pointer to another substance, as a resource or just a representational code (0..1) Whichever type of `substance[x]` is set. */
  getSubstance(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('substance');
  }

  /** True when any type of `substance[x]` is set. */
  hasSubstance(): boolean {
    return this.hasChoiceValue('substance');
  }

  getSubstanceReference(): Reference | undefined {
    return this.substanceReference;
  }

  /** Sets `substance[x]` as Reference and clears every other type of it. */
  setSubstanceReference(substanceReference: Reference | undefined): this {
    return this.setFieldValue('substanceReference', substanceReference);
  }

  hasSubstanceReference(): boolean {
    return this.hasFieldValue('substanceReference');
  }

  getSubstanceCodeableConcept(): CodeableConcept | undefined {
    return this.substanceCodeableConcept;
  }

  /** Sets `substance[x]` as CodeableConcept and clears every other type of it. */
  setSubstanceCodeableConcept(substanceCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('substanceCodeableConcept', substanceCodeableConcept);
  }

  hasSubstanceCodeableConcept(): boolean {
    return this.hasFieldValue('substanceCodeableConcept');
  }

  /** For example "salt to parent", "active moiety", "starting material" (0..1) Created when absent. */
  getRelationship(): CodeableConcept {
    if (this.relationship === undefined) {
      this.relationship = new CodeableConcept();
    }
    return this.relationship;
  }

  setRelationship(relationship: CodeableConcept | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships (0..1) */
  getIsDefining(): boolean | undefined {
    return this.isDefining;
  }

  /** Sets `isDefining`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsDefining(isDefining: boolean | undefined): this {
    return this.setFieldValue('isDefining', isDefining);
  }

  hasIsDefining(): boolean {
    return this.hasFieldValue('isDefining');
  }

  /** The element carrying the id and extensions of `isDefining`. Created when absent. */
  getIsDefiningElement(): Element {
    if (this._isDefining === undefined) {
      this._isDefining = new Element();
    }
    return this._isDefining;
  }

  setIsDefiningElement(isDefiningElement: Element | undefined): this {
    this._isDefining = isDefiningElement;
    return this;
  }

  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other (0..1) Whichever type of `amount[x]` is set. */
  getAmount(): Quantity | Range | Ratio | string | undefined {
    return this.getChoiceValue<Quantity | Range | Ratio | string>('amount');
  }

  /** True when any type of `amount[x]` is set. */
  hasAmount(): boolean {
    return this.hasChoiceValue('amount');
  }

  getAmountQuantity(): Quantity | undefined {
    return this.amountQuantity;
  }

  /** Sets `amount[x]` as Quantity and clears every other type of it. */
  setAmountQuantity(amountQuantity: Quantity | undefined): this {
    return this.setFieldValue('amountQuantity', amountQuantity);
  }

  hasAmountQuantity(): boolean {
    return this.hasFieldValue('amountQuantity');
  }

  getAmountRange(): Range | undefined {
    return this.amountRange;
  }

  /** Sets `amount[x]` as Range and clears every other type of it. */
  setAmountRange(amountRange: Range | undefined): this {
    return this.setFieldValue('amountRange', amountRange);
  }

  hasAmountRange(): boolean {
    return this.hasFieldValue('amountRange');
  }

  getAmountRatio(): Ratio | undefined {
    return this.amountRatio;
  }

  /** Sets `amount[x]` as Ratio and clears every other type of it. */
  setAmountRatio(amountRatio: Ratio | undefined): this {
    return this.setFieldValue('amountRatio', amountRatio);
  }

  hasAmountRatio(): boolean {
    return this.hasFieldValue('amountRatio');
  }

  getAmountString(): string | undefined {
    return this.amountString;
  }

  /** Sets `amount[x]` as string and clears every other type of it. */
  setAmountString(amountString: string | undefined): this {
    return this.setFieldValue('amountString', amountString);
  }

  hasAmountString(): boolean {
    return this.hasFieldValue('amountString');
  }

  /** For use when the numeric (0..1) Created when absent. */
  getAmountRatioLowLimit(): Ratio {
    if (this.amountRatioLowLimit === undefined) {
      this.amountRatioLowLimit = new Ratio();
    }
    return this.amountRatioLowLimit;
  }

  setAmountRatioLowLimit(amountRatioLowLimit: Ratio | undefined): this {
    return this.setFieldValue('amountRatioLowLimit', amountRatioLowLimit);
  }

  hasAmountRatioLowLimit(): boolean {
    return this.hasFieldValue('amountRatioLowLimit');
  }

  /** An operator for the amount, for example "average", "approximately", "less than" (0..1) Created when absent. */
  getAmountType(): CodeableConcept {
    if (this.amountType === undefined) {
      this.amountType = new CodeableConcept();
    }
    return this.amountType;
  }

  setAmountType(amountType: CodeableConcept | undefined): this {
    return this.setFieldValue('amountType', amountType);
  }

  hasAmountType(): boolean {
    return this.hasFieldValue('amountType');
  }

  /** Supporting literature (0..*) Never undefined; an empty list is created when absent. */
  getSource(): Reference[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: Reference[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty Reference to `source` and returns it so it can be filled in. */
  addSource(): Reference;
  /** Appends the given Reference to `source` and returns this object for chaining. */
  addSource(reference: Reference): this;
  addSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('source', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('source', createdReference);
    return createdReference;
  }

  /** The first Reference of `source`. One is added when the list is empty. */
  getSourceFirstRep(): Reference {
    const firstReference = this.getSource()[0];
    return firstReference === undefined ? this.addSource() : firstReference;
  }
}

modelTypeRegistry.register(
  'SubstanceSpecificationRelationship',
  SubstanceSpecificationRelationship,
  false
);
