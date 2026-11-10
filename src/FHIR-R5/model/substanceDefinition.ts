/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export class SubstanceDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'classification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classification', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'domain',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'domain', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'grade',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'grade', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'informationSource',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'informationSource', typeCode: 'Reference', targetResourceTypes: ['Citation'] },
      ],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'manufacturer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'supplier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'supplier', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'moiety',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'moiety', typeCode: 'SubstanceDefinitionMoiety' }],
    },
    {
      elementName: 'characterization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characterization', typeCode: 'SubstanceDefinitionCharacterization' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'SubstanceDefinitionProperty' }],
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
      elementName: 'molecularWeight',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'molecularWeight', typeCode: 'SubstanceDefinitionMolecularWeight' }],
    },
    {
      elementName: 'structure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'structure', typeCode: 'SubstanceDefinitionStructure' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'SubstanceDefinitionCode' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'name', typeCode: 'SubstanceDefinitionName' }],
    },
    {
      elementName: 'relationship',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relationship', typeCode: 'SubstanceDefinitionRelationship' }],
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
      types: [{ jsonKey: 'sourceMaterial', typeCode: 'SubstanceDefinitionSourceMaterial' }],
    },
  ];

  readonly resourceType = 'SubstanceDefinition';

  /** Identifier by which this substance is known (0..*) */
  identifier?: Identifier[];

  /** A business level version identifier of the substance (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Status of substance within the catalogue e.g. active, retired (0..1) */
  status?: CodeableConcept;

  /** A categorization, high level e.g. polymer or nucleic acid, or food, chemical, biological, or lower e.g. polymer linear or branch chain, or type of impurity (0..*) */
  classification?: CodeableConcept[];

  /** If the substance applies to human or veterinary use (0..1) */
  domain?: CodeableConcept;

  /** The quality standard, established benchmark, to which substance complies (e.g. USP/NF, BP) (0..*) */
  grade?: CodeableConcept[];

  /** Textual description of the substance (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Supporting literature (0..*) */
  informationSource?: Reference[];

  /** Textual comment about the substance's catalogue or registry record (0..*) */
  note?: Annotation[];

  /** The entity that creates, makes, produces or fabricates the substance (0..*) */
  manufacturer?: Reference[];

  /** An entity that is the source for the substance. It may be different from the manufacturer (0..*) */
  supplier?: Reference[];

  /** Moiety, for structural modifications (0..*) */
  moiety?: SubstanceDefinitionMoiety[];

  /** General specifications for this substance (0..*) */
  characterization?: SubstanceDefinitionCharacterization[];

  /** General specifications for this substance (0..*) */
  property?: SubstanceDefinitionProperty[];

  /** General information detailing this substance (0..1) */
  referenceInformation?: Reference;

  /** The average mass of a molecule of a compound (0..*) */
  molecularWeight?: SubstanceDefinitionMolecularWeight[];

  /** Structural information (0..1) */
  structure?: SubstanceDefinitionStructure;

  /** Codes associated with the substance (0..*) */
  code?: SubstanceDefinitionCode[];

  /** Names applicable to this substance (0..*) */
  name?: SubstanceDefinitionName[];

  /** A link between this substance and another (0..*) */
  relationship?: SubstanceDefinitionRelationship[];

  /** Data items specific to nucleic acids (0..1) */
  nucleicAcid?: Reference;

  /** Data items specific to polymers (0..1) */
  polymer?: Reference;

  /** Data items specific to proteins (0..1) */
  protein?: Reference;

  /** Material or taxonomic/anatomical source (0..1) */
  sourceMaterial?: SubstanceDefinitionSourceMaterial;

  override fhirType(): string {
    return 'SubstanceDefinition';
  }

  /** FHIR JSON for this SubstanceDefinition, typed as the plain `SubstanceDefinition` data type. */
  override toJSON(): plainTypes.SubstanceDefinition {
    return this.serialize() as plainTypes.SubstanceDefinition;
  }

  /** Identifier by which this substance is known (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
  }

  /** A business level version identifier of the substance (0..1) */
  getVersion(): string | undefined {
    return this.version;
  }

  /** Sets `version`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersion(version: string | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** The element carrying the id and extensions of `version`. Created when absent. */
  getVersionElement(): Element {
    if (this._version === undefined) {
      this._version = new Element();
    }
    return this._version;
  }

  setVersionElement(versionElement: Element | undefined): this {
    this._version = versionElement;
    return this;
  }

  /** Status of substance within the catalogue e.g. active, retired (0..1) Created when absent. */
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

  /** A categorization, high level e.g. polymer or nucleic acid, or food, chemical, biological, or lower e.g. polymer linear or branch chain, or type of impurity (0..*) Never undefined; an empty list is created when absent. */
  getClassification(): CodeableConcept[] {
    if (this.classification === undefined) {
      this.classification = [];
    }
    return this.classification;
  }

  setClassification(classification: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** Appends a new, empty CodeableConcept to `classification` and returns it so it can be filled in. */
  addClassification(): CodeableConcept;
  /** Appends the given CodeableConcept to `classification` and returns this object for chaining. */
  addClassification(codeableConcept: CodeableConcept): this;
  addClassification(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classification', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classification', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classification`. One is added when the list is empty. */
  getClassificationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassification()[0];
    return firstCodeableConcept === undefined ? this.addClassification() : firstCodeableConcept;
  }

  /** If the substance applies to human or veterinary use (0..1) Created when absent. */
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

  /** The quality standard, established benchmark, to which substance complies (e.g. USP/NF, BP) (0..*) Never undefined; an empty list is created when absent. */
  getGrade(): CodeableConcept[] {
    if (this.grade === undefined) {
      this.grade = [];
    }
    return this.grade;
  }

  setGrade(grade: CodeableConcept[] | undefined): this {
    return this.setFieldValue('grade', grade);
  }

  hasGrade(): boolean {
    return this.hasFieldValue('grade');
  }

  /** Appends a new, empty CodeableConcept to `grade` and returns it so it can be filled in. */
  addGrade(): CodeableConcept;
  /** Appends the given CodeableConcept to `grade` and returns this object for chaining. */
  addGrade(codeableConcept: CodeableConcept): this;
  addGrade(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('grade', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('grade', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `grade`. One is added when the list is empty. */
  getGradeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getGrade()[0];
    return firstCodeableConcept === undefined ? this.addGrade() : firstCodeableConcept;
  }

  /** Textual description of the substance (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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
  getInformationSource(): Reference[] {
    if (this.informationSource === undefined) {
      this.informationSource = [];
    }
    return this.informationSource;
  }

  setInformationSource(informationSource: Reference[] | undefined): this {
    return this.setFieldValue('informationSource', informationSource);
  }

  hasInformationSource(): boolean {
    return this.hasFieldValue('informationSource');
  }

  /** Appends a new, empty Reference to `informationSource` and returns it so it can be filled in. */
  addInformationSource(): Reference;
  /** Appends the given Reference to `informationSource` and returns this object for chaining. */
  addInformationSource(reference: Reference): this;
  addInformationSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('informationSource', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('informationSource', createdReference);
    return createdReference;
  }

  /** The first Reference of `informationSource`. One is added when the list is empty. */
  getInformationSourceFirstRep(): Reference {
    const firstReference = this.getInformationSource()[0];
    return firstReference === undefined ? this.addInformationSource() : firstReference;
  }

  /** Textual comment about the substance's catalogue or registry record (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }

  /** The entity that creates, makes, produces or fabricates the substance (0..*) Never undefined; an empty list is created when absent. */
  getManufacturer(): Reference[] {
    if (this.manufacturer === undefined) {
      this.manufacturer = [];
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Reference[] | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }

  /** Appends a new, empty Reference to `manufacturer` and returns it so it can be filled in. */
  addManufacturer(): Reference;
  /** Appends the given Reference to `manufacturer` and returns this object for chaining. */
  addManufacturer(reference: Reference): this;
  addManufacturer(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('manufacturer', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('manufacturer', createdReference);
    return createdReference;
  }

  /** The first Reference of `manufacturer`. One is added when the list is empty. */
  getManufacturerFirstRep(): Reference {
    const firstReference = this.getManufacturer()[0];
    return firstReference === undefined ? this.addManufacturer() : firstReference;
  }

  /** An entity that is the source for the substance. It may be different from the manufacturer (0..*) Never undefined; an empty list is created when absent. */
  getSupplier(): Reference[] {
    if (this.supplier === undefined) {
      this.supplier = [];
    }
    return this.supplier;
  }

  setSupplier(supplier: Reference[] | undefined): this {
    return this.setFieldValue('supplier', supplier);
  }

  hasSupplier(): boolean {
    return this.hasFieldValue('supplier');
  }

  /** Appends a new, empty Reference to `supplier` and returns it so it can be filled in. */
  addSupplier(): Reference;
  /** Appends the given Reference to `supplier` and returns this object for chaining. */
  addSupplier(reference: Reference): this;
  addSupplier(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supplier', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supplier', createdReference);
    return createdReference;
  }

  /** The first Reference of `supplier`. One is added when the list is empty. */
  getSupplierFirstRep(): Reference {
    const firstReference = this.getSupplier()[0];
    return firstReference === undefined ? this.addSupplier() : firstReference;
  }

  /** Moiety, for structural modifications (0..*) Never undefined; an empty list is created when absent. */
  getMoiety(): SubstanceDefinitionMoiety[] {
    if (this.moiety === undefined) {
      this.moiety = [];
    }
    return this.moiety;
  }

  setMoiety(moiety: SubstanceDefinitionMoiety[] | undefined): this {
    return this.setFieldValue('moiety', moiety);
  }

  hasMoiety(): boolean {
    return this.hasFieldValue('moiety');
  }

  /** Appends a new, empty SubstanceDefinitionMoiety to `moiety` and returns it so it can be filled in. */
  addMoiety(): SubstanceDefinitionMoiety;
  /** Appends the given SubstanceDefinitionMoiety to `moiety` and returns this object for chaining. */
  addMoiety(substanceDefinitionMoiety: SubstanceDefinitionMoiety): this;
  addMoiety(
    substanceDefinitionMoiety?: SubstanceDefinitionMoiety
  ): SubstanceDefinitionMoiety | this {
    if (substanceDefinitionMoiety !== undefined) {
      return this.addFieldValue('moiety', substanceDefinitionMoiety);
    }
    const createdSubstanceDefinitionMoiety = new SubstanceDefinitionMoiety();
    this.addFieldValue('moiety', createdSubstanceDefinitionMoiety);
    return createdSubstanceDefinitionMoiety;
  }

  /** The first SubstanceDefinitionMoiety of `moiety`. One is added when the list is empty. */
  getMoietyFirstRep(): SubstanceDefinitionMoiety {
    const firstSubstanceDefinitionMoiety = this.getMoiety()[0];
    return firstSubstanceDefinitionMoiety === undefined
      ? this.addMoiety()
      : firstSubstanceDefinitionMoiety;
  }

  /** General specifications for this substance (0..*) Never undefined; an empty list is created when absent. */
  getCharacterization(): SubstanceDefinitionCharacterization[] {
    if (this.characterization === undefined) {
      this.characterization = [];
    }
    return this.characterization;
  }

  setCharacterization(characterization: SubstanceDefinitionCharacterization[] | undefined): this {
    return this.setFieldValue('characterization', characterization);
  }

  hasCharacterization(): boolean {
    return this.hasFieldValue('characterization');
  }

  /** Appends a new, empty SubstanceDefinitionCharacterization to `characterization` and returns it so it can be filled in. */
  addCharacterization(): SubstanceDefinitionCharacterization;
  /** Appends the given SubstanceDefinitionCharacterization to `characterization` and returns this object for chaining. */
  addCharacterization(
    substanceDefinitionCharacterization: SubstanceDefinitionCharacterization
  ): this;
  addCharacterization(
    substanceDefinitionCharacterization?: SubstanceDefinitionCharacterization
  ): SubstanceDefinitionCharacterization | this {
    if (substanceDefinitionCharacterization !== undefined) {
      return this.addFieldValue('characterization', substanceDefinitionCharacterization);
    }
    const createdSubstanceDefinitionCharacterization = new SubstanceDefinitionCharacterization();
    this.addFieldValue('characterization', createdSubstanceDefinitionCharacterization);
    return createdSubstanceDefinitionCharacterization;
  }

  /** The first SubstanceDefinitionCharacterization of `characterization`. One is added when the list is empty. */
  getCharacterizationFirstRep(): SubstanceDefinitionCharacterization {
    const firstSubstanceDefinitionCharacterization = this.getCharacterization()[0];
    return firstSubstanceDefinitionCharacterization === undefined
      ? this.addCharacterization()
      : firstSubstanceDefinitionCharacterization;
  }

  /** General specifications for this substance (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): SubstanceDefinitionProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: SubstanceDefinitionProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty SubstanceDefinitionProperty to `property` and returns it so it can be filled in. */
  addProperty(): SubstanceDefinitionProperty;
  /** Appends the given SubstanceDefinitionProperty to `property` and returns this object for chaining. */
  addProperty(substanceDefinitionProperty: SubstanceDefinitionProperty): this;
  addProperty(
    substanceDefinitionProperty?: SubstanceDefinitionProperty
  ): SubstanceDefinitionProperty | this {
    if (substanceDefinitionProperty !== undefined) {
      return this.addFieldValue('property', substanceDefinitionProperty);
    }
    const createdSubstanceDefinitionProperty = new SubstanceDefinitionProperty();
    this.addFieldValue('property', createdSubstanceDefinitionProperty);
    return createdSubstanceDefinitionProperty;
  }

  /** The first SubstanceDefinitionProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): SubstanceDefinitionProperty {
    const firstSubstanceDefinitionProperty = this.getProperty()[0];
    return firstSubstanceDefinitionProperty === undefined
      ? this.addProperty()
      : firstSubstanceDefinitionProperty;
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

  /** The average mass of a molecule of a compound (0..*) Never undefined; an empty list is created when absent. */
  getMolecularWeight(): SubstanceDefinitionMolecularWeight[] {
    if (this.molecularWeight === undefined) {
      this.molecularWeight = [];
    }
    return this.molecularWeight;
  }

  setMolecularWeight(molecularWeight: SubstanceDefinitionMolecularWeight[] | undefined): this {
    return this.setFieldValue('molecularWeight', molecularWeight);
  }

  hasMolecularWeight(): boolean {
    return this.hasFieldValue('molecularWeight');
  }

  /** Appends a new, empty SubstanceDefinitionMolecularWeight to `molecularWeight` and returns it so it can be filled in. */
  addMolecularWeight(): SubstanceDefinitionMolecularWeight;
  /** Appends the given SubstanceDefinitionMolecularWeight to `molecularWeight` and returns this object for chaining. */
  addMolecularWeight(substanceDefinitionMolecularWeight: SubstanceDefinitionMolecularWeight): this;
  addMolecularWeight(
    substanceDefinitionMolecularWeight?: SubstanceDefinitionMolecularWeight
  ): SubstanceDefinitionMolecularWeight | this {
    if (substanceDefinitionMolecularWeight !== undefined) {
      return this.addFieldValue('molecularWeight', substanceDefinitionMolecularWeight);
    }
    const createdSubstanceDefinitionMolecularWeight = new SubstanceDefinitionMolecularWeight();
    this.addFieldValue('molecularWeight', createdSubstanceDefinitionMolecularWeight);
    return createdSubstanceDefinitionMolecularWeight;
  }

  /** The first SubstanceDefinitionMolecularWeight of `molecularWeight`. One is added when the list is empty. */
  getMolecularWeightFirstRep(): SubstanceDefinitionMolecularWeight {
    const firstSubstanceDefinitionMolecularWeight = this.getMolecularWeight()[0];
    return firstSubstanceDefinitionMolecularWeight === undefined
      ? this.addMolecularWeight()
      : firstSubstanceDefinitionMolecularWeight;
  }

  /** Structural information (0..1) Created when absent. */
  getStructure(): SubstanceDefinitionStructure {
    if (this.structure === undefined) {
      this.structure = new SubstanceDefinitionStructure();
    }
    return this.structure;
  }

  setStructure(structure: SubstanceDefinitionStructure | undefined): this {
    return this.setFieldValue('structure', structure);
  }

  hasStructure(): boolean {
    return this.hasFieldValue('structure');
  }

  /** Codes associated with the substance (0..*) Never undefined; an empty list is created when absent. */
  getCode(): SubstanceDefinitionCode[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: SubstanceDefinitionCode[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty SubstanceDefinitionCode to `code` and returns it so it can be filled in. */
  addCode(): SubstanceDefinitionCode;
  /** Appends the given SubstanceDefinitionCode to `code` and returns this object for chaining. */
  addCode(substanceDefinitionCode: SubstanceDefinitionCode): this;
  addCode(substanceDefinitionCode?: SubstanceDefinitionCode): SubstanceDefinitionCode | this {
    if (substanceDefinitionCode !== undefined) {
      return this.addFieldValue('code', substanceDefinitionCode);
    }
    const createdSubstanceDefinitionCode = new SubstanceDefinitionCode();
    this.addFieldValue('code', createdSubstanceDefinitionCode);
    return createdSubstanceDefinitionCode;
  }

  /** The first SubstanceDefinitionCode of `code`. One is added when the list is empty. */
  getCodeFirstRep(): SubstanceDefinitionCode {
    const firstSubstanceDefinitionCode = this.getCode()[0];
    return firstSubstanceDefinitionCode === undefined
      ? this.addCode()
      : firstSubstanceDefinitionCode;
  }

  /** Names applicable to this substance (0..*) Never undefined; an empty list is created when absent. */
  getName(): SubstanceDefinitionName[] {
    if (this.name === undefined) {
      this.name = [];
    }
    return this.name;
  }

  setName(name: SubstanceDefinitionName[] | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** Appends a new, empty SubstanceDefinitionName to `name` and returns it so it can be filled in. */
  addName(): SubstanceDefinitionName;
  /** Appends the given SubstanceDefinitionName to `name` and returns this object for chaining. */
  addName(substanceDefinitionName: SubstanceDefinitionName): this;
  addName(substanceDefinitionName?: SubstanceDefinitionName): SubstanceDefinitionName | this {
    if (substanceDefinitionName !== undefined) {
      return this.addFieldValue('name', substanceDefinitionName);
    }
    const createdSubstanceDefinitionName = new SubstanceDefinitionName();
    this.addFieldValue('name', createdSubstanceDefinitionName);
    return createdSubstanceDefinitionName;
  }

  /** The first SubstanceDefinitionName of `name`. One is added when the list is empty. */
  getNameFirstRep(): SubstanceDefinitionName {
    const firstSubstanceDefinitionName = this.getName()[0];
    return firstSubstanceDefinitionName === undefined
      ? this.addName()
      : firstSubstanceDefinitionName;
  }

  /** A link between this substance and another (0..*) Never undefined; an empty list is created when absent. */
  getRelationship(): SubstanceDefinitionRelationship[] {
    if (this.relationship === undefined) {
      this.relationship = [];
    }
    return this.relationship;
  }

  setRelationship(relationship: SubstanceDefinitionRelationship[] | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** Appends a new, empty SubstanceDefinitionRelationship to `relationship` and returns it so it can be filled in. */
  addRelationship(): SubstanceDefinitionRelationship;
  /** Appends the given SubstanceDefinitionRelationship to `relationship` and returns this object for chaining. */
  addRelationship(substanceDefinitionRelationship: SubstanceDefinitionRelationship): this;
  addRelationship(
    substanceDefinitionRelationship?: SubstanceDefinitionRelationship
  ): SubstanceDefinitionRelationship | this {
    if (substanceDefinitionRelationship !== undefined) {
      return this.addFieldValue('relationship', substanceDefinitionRelationship);
    }
    const createdSubstanceDefinitionRelationship = new SubstanceDefinitionRelationship();
    this.addFieldValue('relationship', createdSubstanceDefinitionRelationship);
    return createdSubstanceDefinitionRelationship;
  }

  /** The first SubstanceDefinitionRelationship of `relationship`. One is added when the list is empty. */
  getRelationshipFirstRep(): SubstanceDefinitionRelationship {
    const firstSubstanceDefinitionRelationship = this.getRelationship()[0];
    return firstSubstanceDefinitionRelationship === undefined
      ? this.addRelationship()
      : firstSubstanceDefinitionRelationship;
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

  /** Material or taxonomic/anatomical source (0..1) Created when absent. */
  getSourceMaterial(): SubstanceDefinitionSourceMaterial {
    if (this.sourceMaterial === undefined) {
      this.sourceMaterial = new SubstanceDefinitionSourceMaterial();
    }
    return this.sourceMaterial;
  }

  setSourceMaterial(sourceMaterial: SubstanceDefinitionSourceMaterial | undefined): this {
    return this.setFieldValue('sourceMaterial', sourceMaterial);
  }

  hasSourceMaterial(): boolean {
    return this.hasFieldValue('sourceMaterial');
  }
}

modelTypeRegistry.register('SubstanceDefinition', SubstanceDefinition, true);

/** True when the value is a SubstanceDefinition model instance. */
export function isSubstanceDefinition(candidate: unknown): candidate is SubstanceDefinition {
  return candidate instanceof SubstanceDefinition;
}

/**
 * Moiety, for structural modifications
 */
export class SubstanceDefinitionMoiety extends BackboneElement {
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
    {
      elementName: 'measurementType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'measurementType', typeCode: 'CodeableConcept' }],
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

  override fhirType(): string {
    return 'SubstanceDefinition.moiety';
  }

  /** FHIR JSON for this SubstanceDefinitionMoiety, typed as the plain `SubstanceDefinitionMoiety` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionMoiety {
    return this.serialize() as plainTypes.SubstanceDefinitionMoiety;
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

  /** Molecular formula for this moiety (e.g. with the Hill system) (0..1) */
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

  /** The measurement type of the quantitative value (0..1) Created when absent. */
  getMeasurementType(): CodeableConcept {
    if (this.measurementType === undefined) {
      this.measurementType = new CodeableConcept();
    }
    return this.measurementType;
  }

  setMeasurementType(measurementType: CodeableConcept | undefined): this {
    return this.setFieldValue('measurementType', measurementType);
  }

  hasMeasurementType(): boolean {
    return this.hasFieldValue('measurementType');
  }
}

modelTypeRegistry.register('SubstanceDefinitionMoiety', SubstanceDefinitionMoiety, false);

/**
 * General specifications for this substance
 */
export class SubstanceDefinitionCharacterization extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'technique',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'technique', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'form',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'form', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'file',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'file', typeCode: 'Attachment' }],
    },
  ];

  /** The method used to find the characterization e.g. HPLC (0..1) */
  technique?: CodeableConcept;

  /** Describes the nature of the chemical entity and explains, for instance, whether this is a base or a salt form (0..1) */
  form?: CodeableConcept;

  /** The description or justification in support of the interpretation of the data file (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The data produced by the analytical instrument or a pictorial representation of that data. Examples: a JCAMP, JDX, or ADX file, or a chromatogram or spectrum analysis (0..*) */
  file?: Attachment[];

  override fhirType(): string {
    return 'SubstanceDefinition.characterization';
  }

  /** FHIR JSON for this SubstanceDefinitionCharacterization, typed as the plain `SubstanceDefinitionCharacterization` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionCharacterization {
    return this.serialize() as plainTypes.SubstanceDefinitionCharacterization;
  }

  /** The method used to find the characterization e.g. HPLC (0..1) Created when absent. */
  getTechnique(): CodeableConcept {
    if (this.technique === undefined) {
      this.technique = new CodeableConcept();
    }
    return this.technique;
  }

  setTechnique(technique: CodeableConcept | undefined): this {
    return this.setFieldValue('technique', technique);
  }

  hasTechnique(): boolean {
    return this.hasFieldValue('technique');
  }

  /** Describes the nature of the chemical entity and explains, for instance, whether this is a base or a salt form (0..1) Created when absent. */
  getForm(): CodeableConcept {
    if (this.form === undefined) {
      this.form = new CodeableConcept();
    }
    return this.form;
  }

  setForm(form: CodeableConcept | undefined): this {
    return this.setFieldValue('form', form);
  }

  hasForm(): boolean {
    return this.hasFieldValue('form');
  }

  /** The description or justification in support of the interpretation of the data file (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** The data produced by the analytical instrument or a pictorial representation of that data. Examples: a JCAMP, JDX, or ADX file, or a chromatogram or spectrum analysis (0..*) Never undefined; an empty list is created when absent. */
  getFile(): Attachment[] {
    if (this.file === undefined) {
      this.file = [];
    }
    return this.file;
  }

  setFile(file: Attachment[] | undefined): this {
    return this.setFieldValue('file', file);
  }

  hasFile(): boolean {
    return this.hasFieldValue('file');
  }

  /** Appends a new, empty Attachment to `file` and returns it so it can be filled in. */
  addFile(): Attachment;
  /** Appends the given Attachment to `file` and returns this object for chaining. */
  addFile(attachment: Attachment): this;
  addFile(attachment?: Attachment): Attachment | this {
    if (attachment !== undefined) {
      return this.addFieldValue('file', attachment);
    }
    const createdAttachment = new Attachment();
    this.addFieldValue('file', createdAttachment);
    return createdAttachment;
  }

  /** The first Attachment of `file`. One is added when the list is empty. */
  getFileFirstRep(): Attachment {
    const firstAttachment = this.getFile()[0];
    return firstAttachment === undefined ? this.addFile() : firstAttachment;
  }
}

modelTypeRegistry.register(
  'SubstanceDefinitionCharacterization',
  SubstanceDefinitionCharacterization,
  false
);

/**
 * General specifications for this substance
 */
export class SubstanceDefinitionProperty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
      ],
    },
  ];

  /** A code expressing the type of property (1..1) */
  type?: CodeableConcept;

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

  override fhirType(): string {
    return 'SubstanceDefinition.property';
  }

  /** FHIR JSON for this SubstanceDefinitionProperty, typed as the plain `SubstanceDefinitionProperty` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionProperty {
    return this.serialize() as plainTypes.SubstanceDefinitionProperty;
  }

  /** A code expressing the type of property (1..1) Created when absent. */
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

  /** A value for the property (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | Quantity | string | boolean | Attachment | undefined {
    return this.getChoiceValue<CodeableConcept | Quantity | string | boolean | Attachment>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueDate(): string | undefined {
    return this.valueDate;
  }

  /** Sets `value[x]` as date and clears every other type of it. */
  setValueDate(valueDate: string | undefined): this {
    return this.setFieldValue('valueDate', valueDate);
  }

  hasValueDate(): boolean {
    return this.hasFieldValue('valueDate');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
  }
}

modelTypeRegistry.register('SubstanceDefinitionProperty', SubstanceDefinitionProperty, false);

/**
 * The average mass of a molecule of a compound
 */
export class SubstanceDefinitionMolecularWeight extends BackboneElement {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
  ];

  /** The method by which the weight was determined (0..1) */
  method?: CodeableConcept;

  /** Type of molecular weight e.g. exact, average, weight average (0..1) */
  type?: CodeableConcept;

  /** Used to capture quantitative values for a variety of elements (1..1) */
  amount?: Quantity;

  override fhirType(): string {
    return 'SubstanceDefinition.molecularWeight';
  }

  /** FHIR JSON for this SubstanceDefinitionMolecularWeight, typed as the plain `SubstanceDefinitionMolecularWeight` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionMolecularWeight {
    return this.serialize() as plainTypes.SubstanceDefinitionMolecularWeight;
  }

  /** The method by which the weight was determined (0..1) Created when absent. */
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

  /** Type of molecular weight e.g. exact, average, weight average (0..1) Created when absent. */
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

  /** Used to capture quantitative values for a variety of elements (1..1) Created when absent. */
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
  'SubstanceDefinitionMolecularWeight',
  SubstanceDefinitionMolecularWeight,
  false
);

/**
 * Structural information
 */
export class SubstanceDefinitionStructure extends BackboneElement {
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
      elementName: 'molecularWeight',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'molecularWeight', typeCode: 'SubstanceDefinitionMolecularWeight' }],
    },
    {
      elementName: 'technique',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'technique', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'sourceDocument',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'sourceDocument',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference'],
        },
      ],
    },
    {
      elementName: 'representation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'representation', typeCode: 'SubstanceDefinitionStructureRepresentation' },
      ],
    },
  ];

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
  technique?: CodeableConcept[];

  /** Source of information for the structure (0..*) */
  sourceDocument?: Reference[];

  /** A depiction of the structure of the substance (0..*) */
  representation?: SubstanceDefinitionStructureRepresentation[];

  override fhirType(): string {
    return 'SubstanceDefinition.structure';
  }

  /** FHIR JSON for this SubstanceDefinitionStructure, typed as the plain `SubstanceDefinitionStructure` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionStructure {
    return this.serialize() as plainTypes.SubstanceDefinitionStructure;
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

  /** An expression which states the number and type of atoms present in a molecule of a substance (0..1) */
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

  /** Specified per moiety according to the Hill system (0..1) */
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

  /** The molecular weight or weight range (0..1) Created when absent. */
  getMolecularWeight(): SubstanceDefinitionMolecularWeight {
    if (this.molecularWeight === undefined) {
      this.molecularWeight = new SubstanceDefinitionMolecularWeight();
    }
    return this.molecularWeight;
  }

  setMolecularWeight(molecularWeight: SubstanceDefinitionMolecularWeight | undefined): this {
    return this.setFieldValue('molecularWeight', molecularWeight);
  }

  hasMolecularWeight(): boolean {
    return this.hasFieldValue('molecularWeight');
  }

  /** The method used to find the structure e.g. X-ray, NMR (0..*) Never undefined; an empty list is created when absent. */
  getTechnique(): CodeableConcept[] {
    if (this.technique === undefined) {
      this.technique = [];
    }
    return this.technique;
  }

  setTechnique(technique: CodeableConcept[] | undefined): this {
    return this.setFieldValue('technique', technique);
  }

  hasTechnique(): boolean {
    return this.hasFieldValue('technique');
  }

  /** Appends a new, empty CodeableConcept to `technique` and returns it so it can be filled in. */
  addTechnique(): CodeableConcept;
  /** Appends the given CodeableConcept to `technique` and returns this object for chaining. */
  addTechnique(codeableConcept: CodeableConcept): this;
  addTechnique(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('technique', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('technique', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `technique`. One is added when the list is empty. */
  getTechniqueFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getTechnique()[0];
    return firstCodeableConcept === undefined ? this.addTechnique() : firstCodeableConcept;
  }

  /** Source of information for the structure (0..*) Never undefined; an empty list is created when absent. */
  getSourceDocument(): Reference[] {
    if (this.sourceDocument === undefined) {
      this.sourceDocument = [];
    }
    return this.sourceDocument;
  }

  setSourceDocument(sourceDocument: Reference[] | undefined): this {
    return this.setFieldValue('sourceDocument', sourceDocument);
  }

  hasSourceDocument(): boolean {
    return this.hasFieldValue('sourceDocument');
  }

  /** Appends a new, empty Reference to `sourceDocument` and returns it so it can be filled in. */
  addSourceDocument(): Reference;
  /** Appends the given Reference to `sourceDocument` and returns this object for chaining. */
  addSourceDocument(reference: Reference): this;
  addSourceDocument(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('sourceDocument', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('sourceDocument', createdReference);
    return createdReference;
  }

  /** The first Reference of `sourceDocument`. One is added when the list is empty. */
  getSourceDocumentFirstRep(): Reference {
    const firstReference = this.getSourceDocument()[0];
    return firstReference === undefined ? this.addSourceDocument() : firstReference;
  }

  /** A depiction of the structure of the substance (0..*) Never undefined; an empty list is created when absent. */
  getRepresentation(): SubstanceDefinitionStructureRepresentation[] {
    if (this.representation === undefined) {
      this.representation = [];
    }
    return this.representation;
  }

  setRepresentation(
    representation: SubstanceDefinitionStructureRepresentation[] | undefined
  ): this {
    return this.setFieldValue('representation', representation);
  }

  hasRepresentation(): boolean {
    return this.hasFieldValue('representation');
  }

  /** Appends a new, empty SubstanceDefinitionStructureRepresentation to `representation` and returns it so it can be filled in. */
  addRepresentation(): SubstanceDefinitionStructureRepresentation;
  /** Appends the given SubstanceDefinitionStructureRepresentation to `representation` and returns this object for chaining. */
  addRepresentation(
    substanceDefinitionStructureRepresentation: SubstanceDefinitionStructureRepresentation
  ): this;
  addRepresentation(
    substanceDefinitionStructureRepresentation?: SubstanceDefinitionStructureRepresentation
  ): SubstanceDefinitionStructureRepresentation | this {
    if (substanceDefinitionStructureRepresentation !== undefined) {
      return this.addFieldValue('representation', substanceDefinitionStructureRepresentation);
    }
    const createdSubstanceDefinitionStructureRepresentation =
      new SubstanceDefinitionStructureRepresentation();
    this.addFieldValue('representation', createdSubstanceDefinitionStructureRepresentation);
    return createdSubstanceDefinitionStructureRepresentation;
  }

  /** The first SubstanceDefinitionStructureRepresentation of `representation`. One is added when the list is empty. */
  getRepresentationFirstRep(): SubstanceDefinitionStructureRepresentation {
    const firstSubstanceDefinitionStructureRepresentation = this.getRepresentation()[0];
    return firstSubstanceDefinitionStructureRepresentation === undefined
      ? this.addRepresentation()
      : firstSubstanceDefinitionStructureRepresentation;
  }
}

modelTypeRegistry.register('SubstanceDefinitionStructure', SubstanceDefinitionStructure, false);

/**
 * A depiction of the structure of the substance
 */
export class SubstanceDefinitionStructureRepresentation extends BackboneElement {
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
      elementName: 'format',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'format', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'document',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'document', typeCode: 'Reference', targetResourceTypes: ['DocumentReference'] },
      ],
    },
  ];

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

  override fhirType(): string {
    return 'SubstanceDefinition.structure.representation';
  }

  /** FHIR JSON for this SubstanceDefinitionStructureRepresentation, typed as the plain `SubstanceDefinitionRepresentation` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionRepresentation {
    return this.serialize() as plainTypes.SubstanceDefinitionRepresentation;
  }

  /** The kind of structural representation (e.g. full, partial) (0..1) Created when absent. */
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

  /** The structural representation as a text string in a standard format (0..1) */
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

  /** The format of the representation e.g. InChI, SMILES, MOLFILE (note: not the physical file format) (0..1) Created when absent. */
  getFormat(): CodeableConcept {
    if (this.format === undefined) {
      this.format = new CodeableConcept();
    }
    return this.format;
  }

  setFormat(format: CodeableConcept | undefined): this {
    return this.setFieldValue('format', format);
  }

  hasFormat(): boolean {
    return this.hasFieldValue('format');
  }

  /** An attachment with the structural representation e.g. a structure graphic or AnIML file (0..1) Created when absent. */
  getDocument(): Reference {
    if (this.document === undefined) {
      this.document = new Reference();
    }
    return this.document;
  }

  setDocument(document: Reference | undefined): this {
    return this.setFieldValue('document', document);
  }

  hasDocument(): boolean {
    return this.hasFieldValue('document');
  }
}

modelTypeRegistry.register(
  'SubstanceDefinitionStructureRepresentation',
  SubstanceDefinitionStructureRepresentation,
  false
);

/**
 * Codes associated with the substance
 */
export class SubstanceDefinitionCode extends BackboneElement {
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
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
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

  /** Status of the code assignment, for example 'provisional', 'approved' (0..1) */
  status?: CodeableConcept;

  /** The date at which the code status was changed (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;

  /** Any comment can be provided in this field (0..*) */
  note?: Annotation[];

  /** Supporting literature (0..*) */
  source?: Reference[];

  override fhirType(): string {
    return 'SubstanceDefinition.code';
  }

  /** FHIR JSON for this SubstanceDefinitionCode, typed as the plain `SubstanceDefinitionCode` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionCode {
    return this.serialize() as plainTypes.SubstanceDefinitionCode;
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

  /** Status of the code assignment, for example 'provisional', 'approved' (0..1) Created when absent. */
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

  /** The date at which the code status was changed (0..1) */
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

  /** Any comment can be provided in this field (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
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

modelTypeRegistry.register('SubstanceDefinitionCode', SubstanceDefinitionCode, false);

/**
 * Names applicable to this substance
 */
export class SubstanceDefinitionName extends BackboneElement {
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
      types: [{ jsonKey: 'synonym', typeCode: 'SubstanceDefinitionName' }],
    },
    {
      elementName: 'translation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'translation', typeCode: 'SubstanceDefinitionName' }],
    },
    {
      elementName: 'official',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'official', typeCode: 'SubstanceDefinitionNameOfficial' }],
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

  /** Name type e.g. 'systematic', 'scientific, 'brand' (0..1) */
  type?: CodeableConcept;

  /** The status of the name e.g. 'current', 'proposed' (0..1) */
  status?: CodeableConcept;

  /** If this is the preferred name for this substance (0..1) */
  preferred?: boolean;
  /** Id and extensions of the primitive `preferred`. */
  _preferred?: Element;

  /** Human language that the name is written in (0..*) */
  language?: CodeableConcept[];

  /** The use context of this name e.g. as an active ingredient or as a food colour additive (0..*) */
  domain?: CodeableConcept[];

  /** The jurisdiction where this name applies (0..*) */
  jurisdiction?: CodeableConcept[];

  /** A synonym of this particular name, by which the substance is also known (0..*) */
  synonym?: SubstanceDefinitionName[];

  /** A translation for this name into another human language (0..*) */
  translation?: SubstanceDefinitionName[];

  /** Details of the official nature of this name (0..*) */
  official?: SubstanceDefinitionNameOfficial[];

  /** Supporting literature (0..*) */
  source?: Reference[];

  override fhirType(): string {
    return 'SubstanceDefinition.name';
  }

  /** FHIR JSON for this SubstanceDefinitionName, typed as the plain `SubstanceDefinitionName` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionName {
    return this.serialize() as plainTypes.SubstanceDefinitionName;
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

  /** Name type e.g. 'systematic', 'scientific, 'brand' (0..1) Created when absent. */
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

  /** The status of the name e.g. 'current', 'proposed' (0..1) Created when absent. */
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

  /** Human language that the name is written in (0..*) Never undefined; an empty list is created when absent. */
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

  /** The use context of this name e.g. as an active ingredient or as a food colour additive (0..*) Never undefined; an empty list is created when absent. */
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

  /** A synonym of this particular name, by which the substance is also known (0..*) Never undefined; an empty list is created when absent. */
  getSynonym(): SubstanceDefinitionName[] {
    if (this.synonym === undefined) {
      this.synonym = [];
    }
    return this.synonym;
  }

  setSynonym(synonym: SubstanceDefinitionName[] | undefined): this {
    return this.setFieldValue('synonym', synonym);
  }

  hasSynonym(): boolean {
    return this.hasFieldValue('synonym');
  }

  /** Appends a new, empty SubstanceDefinitionName to `synonym` and returns it so it can be filled in. */
  addSynonym(): SubstanceDefinitionName;
  /** Appends the given SubstanceDefinitionName to `synonym` and returns this object for chaining. */
  addSynonym(substanceDefinitionName: SubstanceDefinitionName): this;
  addSynonym(substanceDefinitionName?: SubstanceDefinitionName): SubstanceDefinitionName | this {
    if (substanceDefinitionName !== undefined) {
      return this.addFieldValue('synonym', substanceDefinitionName);
    }
    const createdSubstanceDefinitionName = new SubstanceDefinitionName();
    this.addFieldValue('synonym', createdSubstanceDefinitionName);
    return createdSubstanceDefinitionName;
  }

  /** The first SubstanceDefinitionName of `synonym`. One is added when the list is empty. */
  getSynonymFirstRep(): SubstanceDefinitionName {
    const firstSubstanceDefinitionName = this.getSynonym()[0];
    return firstSubstanceDefinitionName === undefined
      ? this.addSynonym()
      : firstSubstanceDefinitionName;
  }

  /** A translation for this name into another human language (0..*) Never undefined; an empty list is created when absent. */
  getTranslation(): SubstanceDefinitionName[] {
    if (this.translation === undefined) {
      this.translation = [];
    }
    return this.translation;
  }

  setTranslation(translation: SubstanceDefinitionName[] | undefined): this {
    return this.setFieldValue('translation', translation);
  }

  hasTranslation(): boolean {
    return this.hasFieldValue('translation');
  }

  /** Appends a new, empty SubstanceDefinitionName to `translation` and returns it so it can be filled in. */
  addTranslation(): SubstanceDefinitionName;
  /** Appends the given SubstanceDefinitionName to `translation` and returns this object for chaining. */
  addTranslation(substanceDefinitionName: SubstanceDefinitionName): this;
  addTranslation(
    substanceDefinitionName?: SubstanceDefinitionName
  ): SubstanceDefinitionName | this {
    if (substanceDefinitionName !== undefined) {
      return this.addFieldValue('translation', substanceDefinitionName);
    }
    const createdSubstanceDefinitionName = new SubstanceDefinitionName();
    this.addFieldValue('translation', createdSubstanceDefinitionName);
    return createdSubstanceDefinitionName;
  }

  /** The first SubstanceDefinitionName of `translation`. One is added when the list is empty. */
  getTranslationFirstRep(): SubstanceDefinitionName {
    const firstSubstanceDefinitionName = this.getTranslation()[0];
    return firstSubstanceDefinitionName === undefined
      ? this.addTranslation()
      : firstSubstanceDefinitionName;
  }

  /** Details of the official nature of this name (0..*) Never undefined; an empty list is created when absent. */
  getOfficial(): SubstanceDefinitionNameOfficial[] {
    if (this.official === undefined) {
      this.official = [];
    }
    return this.official;
  }

  setOfficial(official: SubstanceDefinitionNameOfficial[] | undefined): this {
    return this.setFieldValue('official', official);
  }

  hasOfficial(): boolean {
    return this.hasFieldValue('official');
  }

  /** Appends a new, empty SubstanceDefinitionNameOfficial to `official` and returns it so it can be filled in. */
  addOfficial(): SubstanceDefinitionNameOfficial;
  /** Appends the given SubstanceDefinitionNameOfficial to `official` and returns this object for chaining. */
  addOfficial(substanceDefinitionNameOfficial: SubstanceDefinitionNameOfficial): this;
  addOfficial(
    substanceDefinitionNameOfficial?: SubstanceDefinitionNameOfficial
  ): SubstanceDefinitionNameOfficial | this {
    if (substanceDefinitionNameOfficial !== undefined) {
      return this.addFieldValue('official', substanceDefinitionNameOfficial);
    }
    const createdSubstanceDefinitionNameOfficial = new SubstanceDefinitionNameOfficial();
    this.addFieldValue('official', createdSubstanceDefinitionNameOfficial);
    return createdSubstanceDefinitionNameOfficial;
  }

  /** The first SubstanceDefinitionNameOfficial of `official`. One is added when the list is empty. */
  getOfficialFirstRep(): SubstanceDefinitionNameOfficial {
    const firstSubstanceDefinitionNameOfficial = this.getOfficial()[0];
    return firstSubstanceDefinitionNameOfficial === undefined
      ? this.addOfficial()
      : firstSubstanceDefinitionNameOfficial;
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

modelTypeRegistry.register('SubstanceDefinitionName', SubstanceDefinitionName, false);

/**
 * Details of the official nature of this name
 */
export class SubstanceDefinitionNameOfficial extends BackboneElement {
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

  /** The status of the official name, for example 'draft', 'active' (0..1) */
  status?: CodeableConcept;

  /** Date of official name change (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  override fhirType(): string {
    return 'SubstanceDefinition.name.official';
  }

  /** FHIR JSON for this SubstanceDefinitionNameOfficial, typed as the plain `SubstanceDefinitionOfficial` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionOfficial {
    return this.serialize() as plainTypes.SubstanceDefinitionOfficial;
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

  /** The status of the official name, for example 'draft', 'active' (0..1) Created when absent. */
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
  'SubstanceDefinitionNameOfficial',
  SubstanceDefinitionNameOfficial,
  false
);

/**
 * A link between this substance and another
 */
export class SubstanceDefinitionRelationship extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'substanceDefinition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'substanceDefinitionReference',
          typeCode: 'Reference',
          targetResourceTypes: ['SubstanceDefinition'],
        },
        { jsonKey: 'substanceDefinitionCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
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
        { jsonKey: 'amountRatio', typeCode: 'Ratio' },
        { jsonKey: 'amountString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'ratioHighLimitAmount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ratioHighLimitAmount', typeCode: 'Ratio' }],
    },
    {
      elementName: 'comparator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comparator', typeCode: 'CodeableConcept' }],
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

  /** A pointer to another substance, as a resource or a representational code (0..1) */
  substanceDefinitionReference?: Reference;
  /** A pointer to another substance, as a resource or a representational code (0..1) */
  substanceDefinitionCodeableConcept?: CodeableConcept;

  /** For example "salt to parent", "active moiety" (1..1) */
  type?: CodeableConcept;

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
  source?: Reference[];

  override fhirType(): string {
    return 'SubstanceDefinition.relationship';
  }

  /** FHIR JSON for this SubstanceDefinitionRelationship, typed as the plain `SubstanceDefinitionRelationship` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionRelationship {
    return this.serialize() as plainTypes.SubstanceDefinitionRelationship;
  }

  /** A pointer to another substance, as a resource or a representational code (0..1) Whichever type of `substanceDefinition[x]` is set. */
  getSubstanceDefinition(): Reference | CodeableConcept | undefined {
    return this.getChoiceValue<Reference | CodeableConcept>('substanceDefinition');
  }

  /** True when any type of `substanceDefinition[x]` is set. */
  hasSubstanceDefinition(): boolean {
    return this.hasChoiceValue('substanceDefinition');
  }

  getSubstanceDefinitionReference(): Reference | undefined {
    return this.substanceDefinitionReference;
  }

  /** Sets `substanceDefinition[x]` as Reference and clears every other type of it. */
  setSubstanceDefinitionReference(substanceDefinitionReference: Reference | undefined): this {
    return this.setFieldValue('substanceDefinitionReference', substanceDefinitionReference);
  }

  hasSubstanceDefinitionReference(): boolean {
    return this.hasFieldValue('substanceDefinitionReference');
  }

  getSubstanceDefinitionCodeableConcept(): CodeableConcept | undefined {
    return this.substanceDefinitionCodeableConcept;
  }

  /** Sets `substanceDefinition[x]` as CodeableConcept and clears every other type of it. */
  setSubstanceDefinitionCodeableConcept(
    substanceDefinitionCodeableConcept: CodeableConcept | undefined
  ): this {
    return this.setFieldValue(
      'substanceDefinitionCodeableConcept',
      substanceDefinitionCodeableConcept
    );
  }

  hasSubstanceDefinitionCodeableConcept(): boolean {
    return this.hasFieldValue('substanceDefinitionCodeableConcept');
  }

  /** For example "salt to parent", "active moiety" (1..1) Created when absent. */
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

  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible relationships (0..1) */
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

  /** A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other (0..1) Whichever type of `amount[x]` is set. */
  getAmount(): Quantity | Ratio | string | undefined {
    return this.getChoiceValue<Quantity | Ratio | string>('amount');
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

  /** For use when the numeric has an uncertain range (0..1) Created when absent. */
  getRatioHighLimitAmount(): Ratio {
    if (this.ratioHighLimitAmount === undefined) {
      this.ratioHighLimitAmount = new Ratio();
    }
    return this.ratioHighLimitAmount;
  }

  setRatioHighLimitAmount(ratioHighLimitAmount: Ratio | undefined): this {
    return this.setFieldValue('ratioHighLimitAmount', ratioHighLimitAmount);
  }

  hasRatioHighLimitAmount(): boolean {
    return this.hasFieldValue('ratioHighLimitAmount');
  }

  /** An operator for the amount, for example "average", "approximately", "less than" (0..1) Created when absent. */
  getComparator(): CodeableConcept {
    if (this.comparator === undefined) {
      this.comparator = new CodeableConcept();
    }
    return this.comparator;
  }

  setComparator(comparator: CodeableConcept | undefined): this {
    return this.setFieldValue('comparator', comparator);
  }

  hasComparator(): boolean {
    return this.hasFieldValue('comparator');
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
  'SubstanceDefinitionRelationship',
  SubstanceDefinitionRelationship,
  false
);

/**
 * Material or taxonomic/anatomical source
 */
export class SubstanceDefinitionSourceMaterial extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
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
      elementName: 'part',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'part', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'countryOfOrigin',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'countryOfOrigin', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Classification of the origin of the raw material. e.g. cat hair is an Animal source type (0..1) */
  type?: CodeableConcept;

  /** The genus of an organism e.g. the Latin epithet of the plant/animal scientific name (0..1) */
  genus?: CodeableConcept;

  /** The species of an organism e.g. the Latin epithet of the species of the plant/animal (0..1) */
  species?: CodeableConcept;

  /** An anatomical origin of the source material within an organism (0..1) */
  part?: CodeableConcept;

  /** The country or countries where the material is harvested (0..*) */
  countryOfOrigin?: CodeableConcept[];

  override fhirType(): string {
    return 'SubstanceDefinition.sourceMaterial';
  }

  /** FHIR JSON for this SubstanceDefinitionSourceMaterial, typed as the plain `SubstanceDefinitionSourceMaterial` data type. */
  override toJSON(): plainTypes.SubstanceDefinitionSourceMaterial {
    return this.serialize() as plainTypes.SubstanceDefinitionSourceMaterial;
  }

  /** Classification of the origin of the raw material. e.g. cat hair is an Animal source type (0..1) Created when absent. */
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

  /** The genus of an organism e.g. the Latin epithet of the plant/animal scientific name (0..1) Created when absent. */
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

  /** The species of an organism e.g. the Latin epithet of the species of the plant/animal (0..1) Created when absent. */
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

  /** An anatomical origin of the source material within an organism (0..1) Created when absent. */
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

  /** The country or countries where the material is harvested (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register(
  'SubstanceDefinitionSourceMaterial',
  SubstanceDefinitionSourceMaterial,
  false
);
