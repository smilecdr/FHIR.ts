/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Raw data describing a biological sequence.
 */
export class MolecularSequence extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.SequenceType }],
    },
    {
      elementName: 'coordinateSystem',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'coordinateSystem', typeCode: 'integer' }],
    },
    {
      elementName: 'patient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'specimen',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'specimen', typeCode: 'Reference', targetResourceTypes: ['Specimen'] }],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'device', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'performer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'referenceSeq',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'referenceSeq', typeCode: 'MolecularSequenceReferenceSeq' }],
    },
    {
      elementName: 'variant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'variant', typeCode: 'MolecularSequenceVariant' }],
    },
    {
      elementName: 'observedSeq',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'observedSeq', typeCode: 'string' }],
    },
    {
      elementName: 'quality',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'quality', typeCode: 'MolecularSequenceQuality' }],
    },
    {
      elementName: 'readCoverage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'readCoverage', typeCode: 'integer' }],
    },
    {
      elementName: 'repository',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'repository', typeCode: 'MolecularSequenceRepository' }],
    },
    {
      elementName: 'pointer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'pointer', typeCode: 'Reference', targetResourceTypes: ['MolecularSequence'] },
      ],
    },
    {
      elementName: 'structureVariant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'structureVariant', typeCode: 'MolecularSequenceStructureVariant' }],
    },
  ];

  readonly resourceType = 'MolecularSequence';

  /** Unique ID for this particular sequence. This is a FHIR-defined id (0..*) */
  identifier?: Identifier[];

  /** aa | dna | rna (0..1) */
  type?: valueSetCodes.SequenceType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end) (1..1) */
  coordinateSystem?: number;
  /** Id and extensions of the primitive `coordinateSystem`. */
  _coordinateSystem?: Element;

  /** Who and/or what this is about (0..1) */
  patient?: Reference;

  /** Specimen used for sequencing (0..1) */
  specimen?: Reference;

  /** The method for sequencing (0..1) */
  device?: Reference;

  /** Who should be responsible for test result (0..1) */
  performer?: Reference;

  /** The number of copies of the sequence of interest. (RNASeq) (0..1) */
  quantity?: Quantity;

  /** A sequence used as reference (0..1) */
  referenceSeq?: MolecularSequenceReferenceSeq;

  /** Variant in sequence (0..*) */
  variant?: MolecularSequenceVariant[];

  /** Sequence that was observed (0..1) */
  observedSeq?: string;
  /** Id and extensions of the primitive `observedSeq`. */
  _observedSeq?: Element;

  /** An set of value as quality of sequence (0..*) */
  quality?: MolecularSequenceQuality[];

  /** Average number of reads representing a given nucleotide in the reconstructed sequence (0..1) */
  readCoverage?: number;
  /** Id and extensions of the primitive `readCoverage`. */
  _readCoverage?: Element;

  /** External repository which contains detailed report related with observedSeq in this resource (0..*) */
  repository?: MolecularSequenceRepository[];

  /** Pointer to next atomic sequence (0..*) */
  pointer?: Reference[];

  /** Structural variant (0..*) */
  structureVariant?: MolecularSequenceStructureVariant[];

  override fhirType(): string {
    return 'MolecularSequence';
  }

  /** FHIR JSON for this MolecularSequence, typed as the plain `MolecularSequence` data type. */
  override toJSON(): plainTypes.MolecularSequence {
    return this.serialize() as plainTypes.MolecularSequence;
  }

  /** Unique ID for this particular sequence. This is a FHIR-defined id (0..*) Never undefined; an empty list is created when absent. */
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

  /** aa | dna | rna (0..1) */
  getType(): valueSetCodes.SequenceType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.SequenceType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end) (1..1) */
  getCoordinateSystem(): number | undefined {
    return this.coordinateSystem;
  }

  /** Sets `coordinateSystem`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setCoordinateSystem(coordinateSystem: number | undefined): this {
    return this.setFieldValue('coordinateSystem', coordinateSystem);
  }

  hasCoordinateSystem(): boolean {
    return this.hasFieldValue('coordinateSystem');
  }

  /** The element carrying the id and extensions of `coordinateSystem`. Created when absent. */
  getCoordinateSystemElement(): Element {
    if (this._coordinateSystem === undefined) {
      this._coordinateSystem = new Element();
    }
    return this._coordinateSystem;
  }

  setCoordinateSystemElement(coordinateSystemElement: Element | undefined): this {
    this._coordinateSystem = coordinateSystemElement;
    return this;
  }

  /** Who and/or what this is about (0..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** Specimen used for sequencing (0..1) Created when absent. */
  getSpecimen(): Reference {
    if (this.specimen === undefined) {
      this.specimen = new Reference();
    }
    return this.specimen;
  }

  setSpecimen(specimen: Reference | undefined): this {
    return this.setFieldValue('specimen', specimen);
  }

  hasSpecimen(): boolean {
    return this.hasFieldValue('specimen');
  }

  /** The method for sequencing (0..1) Created when absent. */
  getDevice(): Reference {
    if (this.device === undefined) {
      this.device = new Reference();
    }
    return this.device;
  }

  setDevice(device: Reference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Who should be responsible for test result (0..1) Created when absent. */
  getPerformer(): Reference {
    if (this.performer === undefined) {
      this.performer = new Reference();
    }
    return this.performer;
  }

  setPerformer(performer: Reference | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** The number of copies of the sequence of interest. (RNASeq) (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** A sequence used as reference (0..1) Created when absent. */
  getReferenceSeq(): MolecularSequenceReferenceSeq {
    if (this.referenceSeq === undefined) {
      this.referenceSeq = new MolecularSequenceReferenceSeq();
    }
    return this.referenceSeq;
  }

  setReferenceSeq(referenceSeq: MolecularSequenceReferenceSeq | undefined): this {
    return this.setFieldValue('referenceSeq', referenceSeq);
  }

  hasReferenceSeq(): boolean {
    return this.hasFieldValue('referenceSeq');
  }

  /** Variant in sequence (0..*) Never undefined; an empty list is created when absent. */
  getVariant(): MolecularSequenceVariant[] {
    if (this.variant === undefined) {
      this.variant = [];
    }
    return this.variant;
  }

  setVariant(variant: MolecularSequenceVariant[] | undefined): this {
    return this.setFieldValue('variant', variant);
  }

  hasVariant(): boolean {
    return this.hasFieldValue('variant');
  }

  /** Appends a new, empty MolecularSequenceVariant to `variant` and returns it so it can be filled in. */
  addVariant(): MolecularSequenceVariant;
  /** Appends the given MolecularSequenceVariant to `variant` and returns this object for chaining. */
  addVariant(molecularSequenceVariant: MolecularSequenceVariant): this;
  addVariant(molecularSequenceVariant?: MolecularSequenceVariant): MolecularSequenceVariant | this {
    if (molecularSequenceVariant !== undefined) {
      return this.addFieldValue('variant', molecularSequenceVariant);
    }
    const createdMolecularSequenceVariant = new MolecularSequenceVariant();
    this.addFieldValue('variant', createdMolecularSequenceVariant);
    return createdMolecularSequenceVariant;
  }

  /** The first MolecularSequenceVariant of `variant`. One is added when the list is empty. */
  getVariantFirstRep(): MolecularSequenceVariant {
    const firstMolecularSequenceVariant = this.getVariant()[0];
    return firstMolecularSequenceVariant === undefined
      ? this.addVariant()
      : firstMolecularSequenceVariant;
  }

  /** Sequence that was observed (0..1) */
  getObservedSeq(): string | undefined {
    return this.observedSeq;
  }

  /** Sets `observedSeq`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setObservedSeq(observedSeq: string | undefined): this {
    return this.setFieldValue('observedSeq', observedSeq);
  }

  hasObservedSeq(): boolean {
    return this.hasFieldValue('observedSeq');
  }

  /** The element carrying the id and extensions of `observedSeq`. Created when absent. */
  getObservedSeqElement(): Element {
    if (this._observedSeq === undefined) {
      this._observedSeq = new Element();
    }
    return this._observedSeq;
  }

  setObservedSeqElement(observedSeqElement: Element | undefined): this {
    this._observedSeq = observedSeqElement;
    return this;
  }

  /** An set of value as quality of sequence (0..*) Never undefined; an empty list is created when absent. */
  getQuality(): MolecularSequenceQuality[] {
    if (this.quality === undefined) {
      this.quality = [];
    }
    return this.quality;
  }

  setQuality(quality: MolecularSequenceQuality[] | undefined): this {
    return this.setFieldValue('quality', quality);
  }

  hasQuality(): boolean {
    return this.hasFieldValue('quality');
  }

  /** Appends a new, empty MolecularSequenceQuality to `quality` and returns it so it can be filled in. */
  addQuality(): MolecularSequenceQuality;
  /** Appends the given MolecularSequenceQuality to `quality` and returns this object for chaining. */
  addQuality(molecularSequenceQuality: MolecularSequenceQuality): this;
  addQuality(molecularSequenceQuality?: MolecularSequenceQuality): MolecularSequenceQuality | this {
    if (molecularSequenceQuality !== undefined) {
      return this.addFieldValue('quality', molecularSequenceQuality);
    }
    const createdMolecularSequenceQuality = new MolecularSequenceQuality();
    this.addFieldValue('quality', createdMolecularSequenceQuality);
    return createdMolecularSequenceQuality;
  }

  /** The first MolecularSequenceQuality of `quality`. One is added when the list is empty. */
  getQualityFirstRep(): MolecularSequenceQuality {
    const firstMolecularSequenceQuality = this.getQuality()[0];
    return firstMolecularSequenceQuality === undefined
      ? this.addQuality()
      : firstMolecularSequenceQuality;
  }

  /** Average number of reads representing a given nucleotide in the reconstructed sequence (0..1) */
  getReadCoverage(): number | undefined {
    return this.readCoverage;
  }

  /** Sets `readCoverage`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setReadCoverage(readCoverage: number | undefined): this {
    return this.setFieldValue('readCoverage', readCoverage);
  }

  hasReadCoverage(): boolean {
    return this.hasFieldValue('readCoverage');
  }

  /** The element carrying the id and extensions of `readCoverage`. Created when absent. */
  getReadCoverageElement(): Element {
    if (this._readCoverage === undefined) {
      this._readCoverage = new Element();
    }
    return this._readCoverage;
  }

  setReadCoverageElement(readCoverageElement: Element | undefined): this {
    this._readCoverage = readCoverageElement;
    return this;
  }

  /** External repository which contains detailed report related with observedSeq in this resource (0..*) Never undefined; an empty list is created when absent. */
  getRepository(): MolecularSequenceRepository[] {
    if (this.repository === undefined) {
      this.repository = [];
    }
    return this.repository;
  }

  setRepository(repository: MolecularSequenceRepository[] | undefined): this {
    return this.setFieldValue('repository', repository);
  }

  hasRepository(): boolean {
    return this.hasFieldValue('repository');
  }

  /** Appends a new, empty MolecularSequenceRepository to `repository` and returns it so it can be filled in. */
  addRepository(): MolecularSequenceRepository;
  /** Appends the given MolecularSequenceRepository to `repository` and returns this object for chaining. */
  addRepository(molecularSequenceRepository: MolecularSequenceRepository): this;
  addRepository(
    molecularSequenceRepository?: MolecularSequenceRepository
  ): MolecularSequenceRepository | this {
    if (molecularSequenceRepository !== undefined) {
      return this.addFieldValue('repository', molecularSequenceRepository);
    }
    const createdMolecularSequenceRepository = new MolecularSequenceRepository();
    this.addFieldValue('repository', createdMolecularSequenceRepository);
    return createdMolecularSequenceRepository;
  }

  /** The first MolecularSequenceRepository of `repository`. One is added when the list is empty. */
  getRepositoryFirstRep(): MolecularSequenceRepository {
    const firstMolecularSequenceRepository = this.getRepository()[0];
    return firstMolecularSequenceRepository === undefined
      ? this.addRepository()
      : firstMolecularSequenceRepository;
  }

  /** Pointer to next atomic sequence (0..*) Never undefined; an empty list is created when absent. */
  getPointer(): Reference[] {
    if (this.pointer === undefined) {
      this.pointer = [];
    }
    return this.pointer;
  }

  setPointer(pointer: Reference[] | undefined): this {
    return this.setFieldValue('pointer', pointer);
  }

  hasPointer(): boolean {
    return this.hasFieldValue('pointer');
  }

  /** Appends a new, empty Reference to `pointer` and returns it so it can be filled in. */
  addPointer(): Reference;
  /** Appends the given Reference to `pointer` and returns this object for chaining. */
  addPointer(reference: Reference): this;
  addPointer(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('pointer', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('pointer', createdReference);
    return createdReference;
  }

  /** The first Reference of `pointer`. One is added when the list is empty. */
  getPointerFirstRep(): Reference {
    const firstReference = this.getPointer()[0];
    return firstReference === undefined ? this.addPointer() : firstReference;
  }

  /** Structural variant (0..*) Never undefined; an empty list is created when absent. */
  getStructureVariant(): MolecularSequenceStructureVariant[] {
    if (this.structureVariant === undefined) {
      this.structureVariant = [];
    }
    return this.structureVariant;
  }

  setStructureVariant(structureVariant: MolecularSequenceStructureVariant[] | undefined): this {
    return this.setFieldValue('structureVariant', structureVariant);
  }

  hasStructureVariant(): boolean {
    return this.hasFieldValue('structureVariant');
  }

  /** Appends a new, empty MolecularSequenceStructureVariant to `structureVariant` and returns it so it can be filled in. */
  addStructureVariant(): MolecularSequenceStructureVariant;
  /** Appends the given MolecularSequenceStructureVariant to `structureVariant` and returns this object for chaining. */
  addStructureVariant(molecularSequenceStructureVariant: MolecularSequenceStructureVariant): this;
  addStructureVariant(
    molecularSequenceStructureVariant?: MolecularSequenceStructureVariant
  ): MolecularSequenceStructureVariant | this {
    if (molecularSequenceStructureVariant !== undefined) {
      return this.addFieldValue('structureVariant', molecularSequenceStructureVariant);
    }
    const createdMolecularSequenceStructureVariant = new MolecularSequenceStructureVariant();
    this.addFieldValue('structureVariant', createdMolecularSequenceStructureVariant);
    return createdMolecularSequenceStructureVariant;
  }

  /** The first MolecularSequenceStructureVariant of `structureVariant`. One is added when the list is empty. */
  getStructureVariantFirstRep(): MolecularSequenceStructureVariant {
    const firstMolecularSequenceStructureVariant = this.getStructureVariant()[0];
    return firstMolecularSequenceStructureVariant === undefined
      ? this.addStructureVariant()
      : firstMolecularSequenceStructureVariant;
  }
}

modelTypeRegistry.register('MolecularSequence', MolecularSequence, true);

/** True when the value is a MolecularSequence model instance. */
export function isMolecularSequence(candidate: unknown): candidate is MolecularSequence {
  return candidate instanceof MolecularSequence;
}

/**
 * A sequence used as reference
 */
export class MolecularSequenceReferenceSeq extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'chromosome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'chromosome', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'genomeBuild',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'genomeBuild', typeCode: 'string' }],
    },
    {
      elementName: 'orientation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'orientation', typeCode: 'code', allowedCodes: valueSetCodes.OrientationType },
      ],
    },
    {
      elementName: 'referenceSeqId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'referenceSeqId', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'referenceSeqPointer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'referenceSeqPointer',
          typeCode: 'Reference',
          targetResourceTypes: ['MolecularSequence'],
        },
      ],
    },
    {
      elementName: 'referenceSeqString',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'referenceSeqString', typeCode: 'string' }],
    },
    {
      elementName: 'strand',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'strand', typeCode: 'code', allowedCodes: valueSetCodes.StrandType }],
    },
    {
      elementName: 'windowStart',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'windowStart', typeCode: 'integer' }],
    },
    {
      elementName: 'windowEnd',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'windowEnd', typeCode: 'integer' }],
    },
  ];

  /** Chromosome containing genetic finding (0..1) */
  chromosome?: CodeableConcept;

  /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37' (0..1) */
  genomeBuild?: string;
  /** Id and extensions of the primitive `genomeBuild`. */
  _genomeBuild?: Element;

  /** sense | antisense (0..1) */
  orientation?: valueSetCodes.OrientationType;
  /** Id and extensions of the primitive `orientation`. */
  _orientation?: Element;

  /** Reference identifier (0..1) */
  referenceSeqId?: CodeableConcept;

  /** A pointer to another MolecularSequence entity as reference sequence (0..1) */
  referenceSeqPointer?: Reference;

  /** A string to represent reference sequence (0..1) */
  referenceSeqString?: string;
  /** Id and extensions of the primitive `referenceSeqString`. */
  _referenceSeqString?: Element;

  /** watson | crick (0..1) */
  strand?: valueSetCodes.StrandType;
  /** Id and extensions of the primitive `strand`. */
  _strand?: Element;

  /** Start position of the window on the reference sequence (0..1) */
  windowStart?: number;
  /** Id and extensions of the primitive `windowStart`. */
  _windowStart?: Element;

  /** End position of the window on the reference sequence (0..1) */
  windowEnd?: number;
  /** Id and extensions of the primitive `windowEnd`. */
  _windowEnd?: Element;

  override fhirType(): string {
    return 'MolecularSequence.referenceSeq';
  }

  /** FHIR JSON for this MolecularSequenceReferenceSeq, typed as the plain `MolecularSequenceReferenceSeq` data type. */
  override toJSON(): plainTypes.MolecularSequenceReferenceSeq {
    return this.serialize() as plainTypes.MolecularSequenceReferenceSeq;
  }

  /** Chromosome containing genetic finding (0..1) Created when absent. */
  getChromosome(): CodeableConcept {
    if (this.chromosome === undefined) {
      this.chromosome = new CodeableConcept();
    }
    return this.chromosome;
  }

  setChromosome(chromosome: CodeableConcept | undefined): this {
    return this.setFieldValue('chromosome', chromosome);
  }

  hasChromosome(): boolean {
    return this.hasFieldValue('chromosome');
  }

  /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37' (0..1) */
  getGenomeBuild(): string | undefined {
    return this.genomeBuild;
  }

  /** Sets `genomeBuild`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setGenomeBuild(genomeBuild: string | undefined): this {
    return this.setFieldValue('genomeBuild', genomeBuild);
  }

  hasGenomeBuild(): boolean {
    return this.hasFieldValue('genomeBuild');
  }

  /** The element carrying the id and extensions of `genomeBuild`. Created when absent. */
  getGenomeBuildElement(): Element {
    if (this._genomeBuild === undefined) {
      this._genomeBuild = new Element();
    }
    return this._genomeBuild;
  }

  setGenomeBuildElement(genomeBuildElement: Element | undefined): this {
    this._genomeBuild = genomeBuildElement;
    return this;
  }

  /** sense | antisense (0..1) */
  getOrientation(): valueSetCodes.OrientationType | undefined {
    return this.orientation;
  }

  /** Sets `orientation`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setOrientation(orientation: valueSetCodes.OrientationType | undefined): this {
    return this.setFieldValue('orientation', orientation);
  }

  hasOrientation(): boolean {
    return this.hasFieldValue('orientation');
  }

  /** The element carrying the id and extensions of `orientation`. Created when absent. */
  getOrientationElement(): Element {
    if (this._orientation === undefined) {
      this._orientation = new Element();
    }
    return this._orientation;
  }

  setOrientationElement(orientationElement: Element | undefined): this {
    this._orientation = orientationElement;
    return this;
  }

  /** Reference identifier (0..1) Created when absent. */
  getReferenceSeqId(): CodeableConcept {
    if (this.referenceSeqId === undefined) {
      this.referenceSeqId = new CodeableConcept();
    }
    return this.referenceSeqId;
  }

  setReferenceSeqId(referenceSeqId: CodeableConcept | undefined): this {
    return this.setFieldValue('referenceSeqId', referenceSeqId);
  }

  hasReferenceSeqId(): boolean {
    return this.hasFieldValue('referenceSeqId');
  }

  /** A pointer to another MolecularSequence entity as reference sequence (0..1) Created when absent. */
  getReferenceSeqPointer(): Reference {
    if (this.referenceSeqPointer === undefined) {
      this.referenceSeqPointer = new Reference();
    }
    return this.referenceSeqPointer;
  }

  setReferenceSeqPointer(referenceSeqPointer: Reference | undefined): this {
    return this.setFieldValue('referenceSeqPointer', referenceSeqPointer);
  }

  hasReferenceSeqPointer(): boolean {
    return this.hasFieldValue('referenceSeqPointer');
  }

  /** A string to represent reference sequence (0..1) */
  getReferenceSeqString(): string | undefined {
    return this.referenceSeqString;
  }

  /** Sets `referenceSeqString`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReferenceSeqString(referenceSeqString: string | undefined): this {
    return this.setFieldValue('referenceSeqString', referenceSeqString);
  }

  hasReferenceSeqString(): boolean {
    return this.hasFieldValue('referenceSeqString');
  }

  /** The element carrying the id and extensions of `referenceSeqString`. Created when absent. */
  getReferenceSeqStringElement(): Element {
    if (this._referenceSeqString === undefined) {
      this._referenceSeqString = new Element();
    }
    return this._referenceSeqString;
  }

  setReferenceSeqStringElement(referenceSeqStringElement: Element | undefined): this {
    this._referenceSeqString = referenceSeqStringElement;
    return this;
  }

  /** watson | crick (0..1) */
  getStrand(): valueSetCodes.StrandType | undefined {
    return this.strand;
  }

  /** Sets `strand`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStrand(strand: valueSetCodes.StrandType | undefined): this {
    return this.setFieldValue('strand', strand);
  }

  hasStrand(): boolean {
    return this.hasFieldValue('strand');
  }

  /** The element carrying the id and extensions of `strand`. Created when absent. */
  getStrandElement(): Element {
    if (this._strand === undefined) {
      this._strand = new Element();
    }
    return this._strand;
  }

  setStrandElement(strandElement: Element | undefined): this {
    this._strand = strandElement;
    return this;
  }

  /** Start position of the window on the reference sequence (0..1) */
  getWindowStart(): number | undefined {
    return this.windowStart;
  }

  /** Sets `windowStart`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setWindowStart(windowStart: number | undefined): this {
    return this.setFieldValue('windowStart', windowStart);
  }

  hasWindowStart(): boolean {
    return this.hasFieldValue('windowStart');
  }

  /** The element carrying the id and extensions of `windowStart`. Created when absent. */
  getWindowStartElement(): Element {
    if (this._windowStart === undefined) {
      this._windowStart = new Element();
    }
    return this._windowStart;
  }

  setWindowStartElement(windowStartElement: Element | undefined): this {
    this._windowStart = windowStartElement;
    return this;
  }

  /** End position of the window on the reference sequence (0..1) */
  getWindowEnd(): number | undefined {
    return this.windowEnd;
  }

  /** Sets `windowEnd`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setWindowEnd(windowEnd: number | undefined): this {
    return this.setFieldValue('windowEnd', windowEnd);
  }

  hasWindowEnd(): boolean {
    return this.hasFieldValue('windowEnd');
  }

  /** The element carrying the id and extensions of `windowEnd`. Created when absent. */
  getWindowEndElement(): Element {
    if (this._windowEnd === undefined) {
      this._windowEnd = new Element();
    }
    return this._windowEnd;
  }

  setWindowEndElement(windowEndElement: Element | undefined): this {
    this._windowEnd = windowEndElement;
    return this;
  }
}

modelTypeRegistry.register('MolecularSequenceReferenceSeq', MolecularSequenceReferenceSeq, false);

/**
 * Variant in sequence
 */
export class MolecularSequenceVariant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'start',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'integer' }],
    },
    {
      elementName: 'end',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'end', typeCode: 'integer' }],
    },
    {
      elementName: 'observedAllele',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'observedAllele', typeCode: 'string' }],
    },
    {
      elementName: 'referenceAllele',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'referenceAllele', typeCode: 'string' }],
    },
    {
      elementName: 'cigar',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cigar', typeCode: 'string' }],
    },
    {
      elementName: 'variantPointer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'variantPointer', typeCode: 'Reference', targetResourceTypes: ['Observation'] },
      ],
    },
  ];

  /** Start position of the variant on the reference sequence (0..1) */
  start?: number;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** End position of the variant on the reference sequence (0..1) */
  end?: number;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  /** Allele that was observed (0..1) */
  observedAllele?: string;
  /** Id and extensions of the primitive `observedAllele`. */
  _observedAllele?: Element;

  /** Allele in the reference sequence (0..1) */
  referenceAllele?: string;
  /** Id and extensions of the primitive `referenceAllele`. */
  _referenceAllele?: Element;

  /** Extended CIGAR string for aligning the sequence with reference bases (0..1) */
  cigar?: string;
  /** Id and extensions of the primitive `cigar`. */
  _cigar?: Element;

  /** Pointer to observed variant information (0..1) */
  variantPointer?: Reference;

  override fhirType(): string {
    return 'MolecularSequence.variant';
  }

  /** FHIR JSON for this MolecularSequenceVariant, typed as the plain `MolecularSequenceVariant` data type. */
  override toJSON(): plainTypes.MolecularSequenceVariant {
    return this.serialize() as plainTypes.MolecularSequenceVariant;
  }

  /** Start position of the variant on the reference sequence (0..1) */
  getStart(): number | undefined {
    return this.start;
  }

  /** Sets `start`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setStart(start: number | undefined): this {
    return this.setFieldValue('start', start);
  }

  hasStart(): boolean {
    return this.hasFieldValue('start');
  }

  /** The element carrying the id and extensions of `start`. Created when absent. */
  getStartElement(): Element {
    if (this._start === undefined) {
      this._start = new Element();
    }
    return this._start;
  }

  setStartElement(startElement: Element | undefined): this {
    this._start = startElement;
    return this;
  }

  /** End position of the variant on the reference sequence (0..1) */
  getEnd(): number | undefined {
    return this.end;
  }

  /** Sets `end`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setEnd(end: number | undefined): this {
    return this.setFieldValue('end', end);
  }

  hasEnd(): boolean {
    return this.hasFieldValue('end');
  }

  /** The element carrying the id and extensions of `end`. Created when absent. */
  getEndElement(): Element {
    if (this._end === undefined) {
      this._end = new Element();
    }
    return this._end;
  }

  setEndElement(endElement: Element | undefined): this {
    this._end = endElement;
    return this;
  }

  /** Allele that was observed (0..1) */
  getObservedAllele(): string | undefined {
    return this.observedAllele;
  }

  /** Sets `observedAllele`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setObservedAllele(observedAllele: string | undefined): this {
    return this.setFieldValue('observedAllele', observedAllele);
  }

  hasObservedAllele(): boolean {
    return this.hasFieldValue('observedAllele');
  }

  /** The element carrying the id and extensions of `observedAllele`. Created when absent. */
  getObservedAlleleElement(): Element {
    if (this._observedAllele === undefined) {
      this._observedAllele = new Element();
    }
    return this._observedAllele;
  }

  setObservedAlleleElement(observedAlleleElement: Element | undefined): this {
    this._observedAllele = observedAlleleElement;
    return this;
  }

  /** Allele in the reference sequence (0..1) */
  getReferenceAllele(): string | undefined {
    return this.referenceAllele;
  }

  /** Sets `referenceAllele`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReferenceAllele(referenceAllele: string | undefined): this {
    return this.setFieldValue('referenceAllele', referenceAllele);
  }

  hasReferenceAllele(): boolean {
    return this.hasFieldValue('referenceAllele');
  }

  /** The element carrying the id and extensions of `referenceAllele`. Created when absent. */
  getReferenceAlleleElement(): Element {
    if (this._referenceAllele === undefined) {
      this._referenceAllele = new Element();
    }
    return this._referenceAllele;
  }

  setReferenceAlleleElement(referenceAlleleElement: Element | undefined): this {
    this._referenceAllele = referenceAlleleElement;
    return this;
  }

  /** Extended CIGAR string for aligning the sequence with reference bases (0..1) */
  getCigar(): string | undefined {
    return this.cigar;
  }

  /** Sets `cigar`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCigar(cigar: string | undefined): this {
    return this.setFieldValue('cigar', cigar);
  }

  hasCigar(): boolean {
    return this.hasFieldValue('cigar');
  }

  /** The element carrying the id and extensions of `cigar`. Created when absent. */
  getCigarElement(): Element {
    if (this._cigar === undefined) {
      this._cigar = new Element();
    }
    return this._cigar;
  }

  setCigarElement(cigarElement: Element | undefined): this {
    this._cigar = cigarElement;
    return this;
  }

  /** Pointer to observed variant information (0..1) Created when absent. */
  getVariantPointer(): Reference {
    if (this.variantPointer === undefined) {
      this.variantPointer = new Reference();
    }
    return this.variantPointer;
  }

  setVariantPointer(variantPointer: Reference | undefined): this {
    return this.setFieldValue('variantPointer', variantPointer);
  }

  hasVariantPointer(): boolean {
    return this.hasFieldValue('variantPointer');
  }
}

modelTypeRegistry.register('MolecularSequenceVariant', MolecularSequenceVariant, false);

/**
 * An set of value as quality of sequence
 */
export class MolecularSequenceQuality extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.QualityType }],
    },
    {
      elementName: 'standardSequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'standardSequence', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'start',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'integer' }],
    },
    {
      elementName: 'end',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'end', typeCode: 'integer' }],
    },
    {
      elementName: 'score',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'score', typeCode: 'Quantity' }],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'truthTP',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'truthTP', typeCode: 'decimal' }],
    },
    {
      elementName: 'queryTP',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'queryTP', typeCode: 'decimal' }],
    },
    {
      elementName: 'truthFN',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'truthFN', typeCode: 'decimal' }],
    },
    {
      elementName: 'queryFP',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'queryFP', typeCode: 'decimal' }],
    },
    {
      elementName: 'gtFP',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'gtFP', typeCode: 'decimal' }],
    },
    {
      elementName: 'precision',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'precision', typeCode: 'decimal' }],
    },
    {
      elementName: 'recall',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recall', typeCode: 'decimal' }],
    },
    {
      elementName: 'fScore',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fScore', typeCode: 'decimal' }],
    },
    {
      elementName: 'roc',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'roc', typeCode: 'MolecularSequenceQualityRoc' }],
    },
  ];

  /** indel | snp | unknown (1..1) */
  type?: valueSetCodes.QualityType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Standard sequence for comparison (0..1) */
  standardSequence?: CodeableConcept;

  /** Start position of the sequence (0..1) */
  start?: number;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** End position of the sequence (0..1) */
  end?: number;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  /** Quality score for the comparison (0..1) */
  score?: Quantity;

  /** Method to get quality (0..1) */
  method?: CodeableConcept;

  /** True positives from the perspective of the truth data (0..1) */
  truthTP?: number;
  /** Id and extensions of the primitive `truthTP`. */
  _truthTP?: Element;

  /** True positives from the perspective of the query data (0..1) */
  queryTP?: number;
  /** Id and extensions of the primitive `queryTP`. */
  _queryTP?: Element;

  /** False negatives (0..1) */
  truthFN?: number;
  /** Id and extensions of the primitive `truthFN`. */
  _truthFN?: Element;

  /** False positives (0..1) */
  queryFP?: number;
  /** Id and extensions of the primitive `queryFP`. */
  _queryFP?: Element;

  /** False positives where the non-REF alleles in the Truth and Query Call Sets match (0..1) */
  gtFP?: number;
  /** Id and extensions of the primitive `gtFP`. */
  _gtFP?: Element;

  /** Precision of comparison (0..1) */
  precision?: number;
  /** Id and extensions of the primitive `precision`. */
  _precision?: Element;

  /** Recall of comparison (0..1) */
  recall?: number;
  /** Id and extensions of the primitive `recall`. */
  _recall?: Element;

  /** F-score (0..1) */
  fScore?: number;
  /** Id and extensions of the primitive `fScore`. */
  _fScore?: Element;

  /** Receiver Operator Characteristic (ROC) Curve (0..1) */
  roc?: MolecularSequenceQualityRoc;

  override fhirType(): string {
    return 'MolecularSequence.quality';
  }

  /** FHIR JSON for this MolecularSequenceQuality, typed as the plain `MolecularSequenceQuality` data type. */
  override toJSON(): plainTypes.MolecularSequenceQuality {
    return this.serialize() as plainTypes.MolecularSequenceQuality;
  }

  /** indel | snp | unknown (1..1) */
  getType(): valueSetCodes.QualityType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.QualityType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Standard sequence for comparison (0..1) Created when absent. */
  getStandardSequence(): CodeableConcept {
    if (this.standardSequence === undefined) {
      this.standardSequence = new CodeableConcept();
    }
    return this.standardSequence;
  }

  setStandardSequence(standardSequence: CodeableConcept | undefined): this {
    return this.setFieldValue('standardSequence', standardSequence);
  }

  hasStandardSequence(): boolean {
    return this.hasFieldValue('standardSequence');
  }

  /** Start position of the sequence (0..1) */
  getStart(): number | undefined {
    return this.start;
  }

  /** Sets `start`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setStart(start: number | undefined): this {
    return this.setFieldValue('start', start);
  }

  hasStart(): boolean {
    return this.hasFieldValue('start');
  }

  /** The element carrying the id and extensions of `start`. Created when absent. */
  getStartElement(): Element {
    if (this._start === undefined) {
      this._start = new Element();
    }
    return this._start;
  }

  setStartElement(startElement: Element | undefined): this {
    this._start = startElement;
    return this;
  }

  /** End position of the sequence (0..1) */
  getEnd(): number | undefined {
    return this.end;
  }

  /** Sets `end`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setEnd(end: number | undefined): this {
    return this.setFieldValue('end', end);
  }

  hasEnd(): boolean {
    return this.hasFieldValue('end');
  }

  /** The element carrying the id and extensions of `end`. Created when absent. */
  getEndElement(): Element {
    if (this._end === undefined) {
      this._end = new Element();
    }
    return this._end;
  }

  setEndElement(endElement: Element | undefined): this {
    this._end = endElement;
    return this;
  }

  /** Quality score for the comparison (0..1) Created when absent. */
  getScore(): Quantity {
    if (this.score === undefined) {
      this.score = new Quantity();
    }
    return this.score;
  }

  setScore(score: Quantity | undefined): this {
    return this.setFieldValue('score', score);
  }

  hasScore(): boolean {
    return this.hasFieldValue('score');
  }

  /** Method to get quality (0..1) Created when absent. */
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

  /** True positives from the perspective of the truth data (0..1) */
  getTruthTP(): number | undefined {
    return this.truthTP;
  }

  /** Sets `truthTP`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setTruthTP(truthTP: number | undefined): this {
    return this.setFieldValue('truthTP', truthTP);
  }

  hasTruthTP(): boolean {
    return this.hasFieldValue('truthTP');
  }

  /** The element carrying the id and extensions of `truthTP`. Created when absent. */
  getTruthTPElement(): Element {
    if (this._truthTP === undefined) {
      this._truthTP = new Element();
    }
    return this._truthTP;
  }

  setTruthTPElement(truthTPElement: Element | undefined): this {
    this._truthTP = truthTPElement;
    return this;
  }

  /** True positives from the perspective of the query data (0..1) */
  getQueryTP(): number | undefined {
    return this.queryTP;
  }

  /** Sets `queryTP`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setQueryTP(queryTP: number | undefined): this {
    return this.setFieldValue('queryTP', queryTP);
  }

  hasQueryTP(): boolean {
    return this.hasFieldValue('queryTP');
  }

  /** The element carrying the id and extensions of `queryTP`. Created when absent. */
  getQueryTPElement(): Element {
    if (this._queryTP === undefined) {
      this._queryTP = new Element();
    }
    return this._queryTP;
  }

  setQueryTPElement(queryTPElement: Element | undefined): this {
    this._queryTP = queryTPElement;
    return this;
  }

  /** False negatives (0..1) */
  getTruthFN(): number | undefined {
    return this.truthFN;
  }

  /** Sets `truthFN`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setTruthFN(truthFN: number | undefined): this {
    return this.setFieldValue('truthFN', truthFN);
  }

  hasTruthFN(): boolean {
    return this.hasFieldValue('truthFN');
  }

  /** The element carrying the id and extensions of `truthFN`. Created when absent. */
  getTruthFNElement(): Element {
    if (this._truthFN === undefined) {
      this._truthFN = new Element();
    }
    return this._truthFN;
  }

  setTruthFNElement(truthFNElement: Element | undefined): this {
    this._truthFN = truthFNElement;
    return this;
  }

  /** False positives (0..1) */
  getQueryFP(): number | undefined {
    return this.queryFP;
  }

  /** Sets `queryFP`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setQueryFP(queryFP: number | undefined): this {
    return this.setFieldValue('queryFP', queryFP);
  }

  hasQueryFP(): boolean {
    return this.hasFieldValue('queryFP');
  }

  /** The element carrying the id and extensions of `queryFP`. Created when absent. */
  getQueryFPElement(): Element {
    if (this._queryFP === undefined) {
      this._queryFP = new Element();
    }
    return this._queryFP;
  }

  setQueryFPElement(queryFPElement: Element | undefined): this {
    this._queryFP = queryFPElement;
    return this;
  }

  /** False positives where the non-REF alleles in the Truth and Query Call Sets match (0..1) */
  getGtFP(): number | undefined {
    return this.gtFP;
  }

  /** Sets `gtFP`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setGtFP(gtFP: number | undefined): this {
    return this.setFieldValue('gtFP', gtFP);
  }

  hasGtFP(): boolean {
    return this.hasFieldValue('gtFP');
  }

  /** The element carrying the id and extensions of `gtFP`. Created when absent. */
  getGtFPElement(): Element {
    if (this._gtFP === undefined) {
      this._gtFP = new Element();
    }
    return this._gtFP;
  }

  setGtFPElement(gtFPElement: Element | undefined): this {
    this._gtFP = gtFPElement;
    return this;
  }

  /** Precision of comparison (0..1) */
  getPrecision(): number | undefined {
    return this.precision;
  }

  /** Sets `precision`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setPrecision(precision: number | undefined): this {
    return this.setFieldValue('precision', precision);
  }

  hasPrecision(): boolean {
    return this.hasFieldValue('precision');
  }

  /** The element carrying the id and extensions of `precision`. Created when absent. */
  getPrecisionElement(): Element {
    if (this._precision === undefined) {
      this._precision = new Element();
    }
    return this._precision;
  }

  setPrecisionElement(precisionElement: Element | undefined): this {
    this._precision = precisionElement;
    return this;
  }

  /** Recall of comparison (0..1) */
  getRecall(): number | undefined {
    return this.recall;
  }

  /** Sets `recall`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setRecall(recall: number | undefined): this {
    return this.setFieldValue('recall', recall);
  }

  hasRecall(): boolean {
    return this.hasFieldValue('recall');
  }

  /** The element carrying the id and extensions of `recall`. Created when absent. */
  getRecallElement(): Element {
    if (this._recall === undefined) {
      this._recall = new Element();
    }
    return this._recall;
  }

  setRecallElement(recallElement: Element | undefined): this {
    this._recall = recallElement;
    return this;
  }

  /** F-score (0..1) */
  getFScore(): number | undefined {
    return this.fScore;
  }

  /** Sets `fScore`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFScore(fScore: number | undefined): this {
    return this.setFieldValue('fScore', fScore);
  }

  hasFScore(): boolean {
    return this.hasFieldValue('fScore');
  }

  /** The element carrying the id and extensions of `fScore`. Created when absent. */
  getFScoreElement(): Element {
    if (this._fScore === undefined) {
      this._fScore = new Element();
    }
    return this._fScore;
  }

  setFScoreElement(fScoreElement: Element | undefined): this {
    this._fScore = fScoreElement;
    return this;
  }

  /** Receiver Operator Characteristic (ROC) Curve (0..1) Created when absent. */
  getRoc(): MolecularSequenceQualityRoc {
    if (this.roc === undefined) {
      this.roc = new MolecularSequenceQualityRoc();
    }
    return this.roc;
  }

  setRoc(roc: MolecularSequenceQualityRoc | undefined): this {
    return this.setFieldValue('roc', roc);
  }

  hasRoc(): boolean {
    return this.hasFieldValue('roc');
  }
}

modelTypeRegistry.register('MolecularSequenceQuality', MolecularSequenceQuality, false);

/**
 * Receiver Operator Characteristic (ROC) Curve
 */
export class MolecularSequenceQualityRoc extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'score',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'score', typeCode: 'integer' }],
    },
    {
      elementName: 'numTP',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'numTP', typeCode: 'integer' }],
    },
    {
      elementName: 'numFP',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'numFP', typeCode: 'integer' }],
    },
    {
      elementName: 'numFN',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'numFN', typeCode: 'integer' }],
    },
    {
      elementName: 'precision',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'precision', typeCode: 'decimal' }],
    },
    {
      elementName: 'sensitivity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'sensitivity', typeCode: 'decimal' }],
    },
    {
      elementName: 'fMeasure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'fMeasure', typeCode: 'decimal' }],
    },
  ];

  /** Genotype quality score (0..*) */
  score?: number[];
  /** Id and extensions of the primitive `score`. */
  _score?: (Element | null)[];

  /** Roc score true positive numbers (0..*) */
  numTP?: number[];
  /** Id and extensions of the primitive `numTP`. */
  _numTP?: (Element | null)[];

  /** Roc score false positive numbers (0..*) */
  numFP?: number[];
  /** Id and extensions of the primitive `numFP`. */
  _numFP?: (Element | null)[];

  /** Roc score false negative numbers (0..*) */
  numFN?: number[];
  /** Id and extensions of the primitive `numFN`. */
  _numFN?: (Element | null)[];

  /** Precision of the GQ score (0..*) */
  precision?: number[];
  /** Id and extensions of the primitive `precision`. */
  _precision?: (Element | null)[];

  /** Sensitivity of the GQ score (0..*) */
  sensitivity?: number[];
  /** Id and extensions of the primitive `sensitivity`. */
  _sensitivity?: (Element | null)[];

  /** FScore of the GQ score (0..*) */
  fMeasure?: number[];
  /** Id and extensions of the primitive `fMeasure`. */
  _fMeasure?: (Element | null)[];

  override fhirType(): string {
    return 'MolecularSequence.quality.roc';
  }

  /** FHIR JSON for this MolecularSequenceQualityRoc, typed as the plain `MolecularSequenceRoc` data type. */
  override toJSON(): plainTypes.MolecularSequenceRoc {
    return this.serialize() as plainTypes.MolecularSequenceRoc;
  }

  /** Genotype quality score (0..*) Never undefined; an empty list is created when absent. */
  getScore(): number[] {
    if (this.score === undefined) {
      this.score = [];
    }
    return this.score;
  }

  setScore(score: number[] | undefined): this {
    return this.setFieldValue('score', score);
  }

  hasScore(): boolean {
    return this.hasFieldValue('score');
  }

  /** Appends one value to `score`. Throws a FhirModelError when it is not a valid FHIR integer. */
  addScore(score: number): this {
    return this.addFieldValue('score', score);
  }

  /** Roc score true positive numbers (0..*) Never undefined; an empty list is created when absent. */
  getNumTP(): number[] {
    if (this.numTP === undefined) {
      this.numTP = [];
    }
    return this.numTP;
  }

  setNumTP(numTP: number[] | undefined): this {
    return this.setFieldValue('numTP', numTP);
  }

  hasNumTP(): boolean {
    return this.hasFieldValue('numTP');
  }

  /** Appends one value to `numTP`. Throws a FhirModelError when it is not a valid FHIR integer. */
  addNumTP(numTP: number): this {
    return this.addFieldValue('numTP', numTP);
  }

  /** Roc score false positive numbers (0..*) Never undefined; an empty list is created when absent. */
  getNumFP(): number[] {
    if (this.numFP === undefined) {
      this.numFP = [];
    }
    return this.numFP;
  }

  setNumFP(numFP: number[] | undefined): this {
    return this.setFieldValue('numFP', numFP);
  }

  hasNumFP(): boolean {
    return this.hasFieldValue('numFP');
  }

  /** Appends one value to `numFP`. Throws a FhirModelError when it is not a valid FHIR integer. */
  addNumFP(numFP: number): this {
    return this.addFieldValue('numFP', numFP);
  }

  /** Roc score false negative numbers (0..*) Never undefined; an empty list is created when absent. */
  getNumFN(): number[] {
    if (this.numFN === undefined) {
      this.numFN = [];
    }
    return this.numFN;
  }

  setNumFN(numFN: number[] | undefined): this {
    return this.setFieldValue('numFN', numFN);
  }

  hasNumFN(): boolean {
    return this.hasFieldValue('numFN');
  }

  /** Appends one value to `numFN`. Throws a FhirModelError when it is not a valid FHIR integer. */
  addNumFN(numFN: number): this {
    return this.addFieldValue('numFN', numFN);
  }

  /** Precision of the GQ score (0..*) Never undefined; an empty list is created when absent. */
  getPrecision(): number[] {
    if (this.precision === undefined) {
      this.precision = [];
    }
    return this.precision;
  }

  setPrecision(precision: number[] | undefined): this {
    return this.setFieldValue('precision', precision);
  }

  hasPrecision(): boolean {
    return this.hasFieldValue('precision');
  }

  /** Appends one value to `precision`. Throws a FhirModelError when it is not a valid FHIR decimal. */
  addPrecision(precision: number): this {
    return this.addFieldValue('precision', precision);
  }

  /** Sensitivity of the GQ score (0..*) Never undefined; an empty list is created when absent. */
  getSensitivity(): number[] {
    if (this.sensitivity === undefined) {
      this.sensitivity = [];
    }
    return this.sensitivity;
  }

  setSensitivity(sensitivity: number[] | undefined): this {
    return this.setFieldValue('sensitivity', sensitivity);
  }

  hasSensitivity(): boolean {
    return this.hasFieldValue('sensitivity');
  }

  /** Appends one value to `sensitivity`. Throws a FhirModelError when it is not a valid FHIR decimal. */
  addSensitivity(sensitivity: number): this {
    return this.addFieldValue('sensitivity', sensitivity);
  }

  /** FScore of the GQ score (0..*) Never undefined; an empty list is created when absent. */
  getFMeasure(): number[] {
    if (this.fMeasure === undefined) {
      this.fMeasure = [];
    }
    return this.fMeasure;
  }

  setFMeasure(fMeasure: number[] | undefined): this {
    return this.setFieldValue('fMeasure', fMeasure);
  }

  hasFMeasure(): boolean {
    return this.hasFieldValue('fMeasure');
  }

  /** Appends one value to `fMeasure`. Throws a FhirModelError when it is not a valid FHIR decimal. */
  addFMeasure(fMeasure: number): this {
    return this.addFieldValue('fMeasure', fMeasure);
  }
}

modelTypeRegistry.register('MolecularSequenceQualityRoc', MolecularSequenceQualityRoc, false);

/**
 * External repository which contains detailed report related with observedSeq in this resource
 */
export class MolecularSequenceRepository extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.RepositoryType }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'datasetId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'datasetId', typeCode: 'string' }],
    },
    {
      elementName: 'variantsetId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'variantsetId', typeCode: 'string' }],
    },
    {
      elementName: 'readsetId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'readsetId', typeCode: 'string' }],
    },
  ];

  /** directlink | openapi | login | oauth | other (1..1) */
  type?: valueSetCodes.RepositoryType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** URI of the repository (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Repository's name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Id of the dataset that used to call for dataset in repository (0..1) */
  datasetId?: string;
  /** Id and extensions of the primitive `datasetId`. */
  _datasetId?: Element;

  /** Id of the variantset that used to call for variantset in repository (0..1) */
  variantsetId?: string;
  /** Id and extensions of the primitive `variantsetId`. */
  _variantsetId?: Element;

  /** Id of the read (0..1) */
  readsetId?: string;
  /** Id and extensions of the primitive `readsetId`. */
  _readsetId?: Element;

  override fhirType(): string {
    return 'MolecularSequence.repository';
  }

  /** FHIR JSON for this MolecularSequenceRepository, typed as the plain `MolecularSequenceRepository` data type. */
  override toJSON(): plainTypes.MolecularSequenceRepository {
    return this.serialize() as plainTypes.MolecularSequenceRepository;
  }

  /** directlink | openapi | login | oauth | other (1..1) */
  getType(): valueSetCodes.RepositoryType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.RepositoryType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** URI of the repository (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }

  /** Repository's name (0..1) */
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

  /** Id of the dataset that used to call for dataset in repository (0..1) */
  getDatasetId(): string | undefined {
    return this.datasetId;
  }

  /** Sets `datasetId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDatasetId(datasetId: string | undefined): this {
    return this.setFieldValue('datasetId', datasetId);
  }

  hasDatasetId(): boolean {
    return this.hasFieldValue('datasetId');
  }

  /** The element carrying the id and extensions of `datasetId`. Created when absent. */
  getDatasetIdElement(): Element {
    if (this._datasetId === undefined) {
      this._datasetId = new Element();
    }
    return this._datasetId;
  }

  setDatasetIdElement(datasetIdElement: Element | undefined): this {
    this._datasetId = datasetIdElement;
    return this;
  }

  /** Id of the variantset that used to call for variantset in repository (0..1) */
  getVariantsetId(): string | undefined {
    return this.variantsetId;
  }

  /** Sets `variantsetId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVariantsetId(variantsetId: string | undefined): this {
    return this.setFieldValue('variantsetId', variantsetId);
  }

  hasVariantsetId(): boolean {
    return this.hasFieldValue('variantsetId');
  }

  /** The element carrying the id and extensions of `variantsetId`. Created when absent. */
  getVariantsetIdElement(): Element {
    if (this._variantsetId === undefined) {
      this._variantsetId = new Element();
    }
    return this._variantsetId;
  }

  setVariantsetIdElement(variantsetIdElement: Element | undefined): this {
    this._variantsetId = variantsetIdElement;
    return this;
  }

  /** Id of the read (0..1) */
  getReadsetId(): string | undefined {
    return this.readsetId;
  }

  /** Sets `readsetId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReadsetId(readsetId: string | undefined): this {
    return this.setFieldValue('readsetId', readsetId);
  }

  hasReadsetId(): boolean {
    return this.hasFieldValue('readsetId');
  }

  /** The element carrying the id and extensions of `readsetId`. Created when absent. */
  getReadsetIdElement(): Element {
    if (this._readsetId === undefined) {
      this._readsetId = new Element();
    }
    return this._readsetId;
  }

  setReadsetIdElement(readsetIdElement: Element | undefined): this {
    this._readsetId = readsetIdElement;
    return this;
  }
}

modelTypeRegistry.register('MolecularSequenceRepository', MolecularSequenceRepository, false);

/**
 * Structural variant
 */
export class MolecularSequenceStructureVariant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'variantType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'variantType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'exact',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'exact', typeCode: 'boolean' }],
    },
    {
      elementName: 'length',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'length', typeCode: 'integer' }],
    },
    {
      elementName: 'outer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outer', typeCode: 'MolecularSequenceStructureVariantOuter' }],
    },
    {
      elementName: 'inner',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'inner', typeCode: 'MolecularSequenceStructureVariantInner' }],
    },
  ];

  /** Structural variant change type (0..1) */
  variantType?: CodeableConcept;

  /** Does the structural variant have base pair resolution breakpoints? (0..1) */
  exact?: boolean;
  /** Id and extensions of the primitive `exact`. */
  _exact?: Element;

  /** Structural variant length (0..1) */
  length?: number;
  /** Id and extensions of the primitive `length`. */
  _length?: Element;

  /** Structural variant outer (0..1) */
  outer?: MolecularSequenceStructureVariantOuter;

  /** Structural variant inner (0..1) */
  inner?: MolecularSequenceStructureVariantInner;

  override fhirType(): string {
    return 'MolecularSequence.structureVariant';
  }

  /** FHIR JSON for this MolecularSequenceStructureVariant, typed as the plain `MolecularSequenceStructureVariant` data type. */
  override toJSON(): plainTypes.MolecularSequenceStructureVariant {
    return this.serialize() as plainTypes.MolecularSequenceStructureVariant;
  }

  /** Structural variant change type (0..1) Created when absent. */
  getVariantType(): CodeableConcept {
    if (this.variantType === undefined) {
      this.variantType = new CodeableConcept();
    }
    return this.variantType;
  }

  setVariantType(variantType: CodeableConcept | undefined): this {
    return this.setFieldValue('variantType', variantType);
  }

  hasVariantType(): boolean {
    return this.hasFieldValue('variantType');
  }

  /** Does the structural variant have base pair resolution breakpoints? (0..1) */
  getExact(): boolean | undefined {
    return this.exact;
  }

  /** Sets `exact`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExact(exact: boolean | undefined): this {
    return this.setFieldValue('exact', exact);
  }

  hasExact(): boolean {
    return this.hasFieldValue('exact');
  }

  /** The element carrying the id and extensions of `exact`. Created when absent. */
  getExactElement(): Element {
    if (this._exact === undefined) {
      this._exact = new Element();
    }
    return this._exact;
  }

  setExactElement(exactElement: Element | undefined): this {
    this._exact = exactElement;
    return this;
  }

  /** Structural variant length (0..1) */
  getLength(): number | undefined {
    return this.length;
  }

  /** Sets `length`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setLength(length: number | undefined): this {
    return this.setFieldValue('length', length);
  }

  hasLength(): boolean {
    return this.hasFieldValue('length');
  }

  /** The element carrying the id and extensions of `length`. Created when absent. */
  getLengthElement(): Element {
    if (this._length === undefined) {
      this._length = new Element();
    }
    return this._length;
  }

  setLengthElement(lengthElement: Element | undefined): this {
    this._length = lengthElement;
    return this;
  }

  /** Structural variant outer (0..1) Created when absent. */
  getOuter(): MolecularSequenceStructureVariantOuter {
    if (this.outer === undefined) {
      this.outer = new MolecularSequenceStructureVariantOuter();
    }
    return this.outer;
  }

  setOuter(outer: MolecularSequenceStructureVariantOuter | undefined): this {
    return this.setFieldValue('outer', outer);
  }

  hasOuter(): boolean {
    return this.hasFieldValue('outer');
  }

  /** Structural variant inner (0..1) Created when absent. */
  getInner(): MolecularSequenceStructureVariantInner {
    if (this.inner === undefined) {
      this.inner = new MolecularSequenceStructureVariantInner();
    }
    return this.inner;
  }

  setInner(inner: MolecularSequenceStructureVariantInner | undefined): this {
    return this.setFieldValue('inner', inner);
  }

  hasInner(): boolean {
    return this.hasFieldValue('inner');
  }
}

modelTypeRegistry.register(
  'MolecularSequenceStructureVariant',
  MolecularSequenceStructureVariant,
  false
);

/**
 * Structural variant outer
 */
export class MolecularSequenceStructureVariantOuter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'start',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'integer' }],
    },
    {
      elementName: 'end',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'end', typeCode: 'integer' }],
    },
  ];

  /** Structural variant outer start (0..1) */
  start?: number;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** Structural variant outer end (0..1) */
  end?: number;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  override fhirType(): string {
    return 'MolecularSequence.structureVariant.outer';
  }

  /** FHIR JSON for this MolecularSequenceStructureVariantOuter, typed as the plain `MolecularSequenceOuter` data type. */
  override toJSON(): plainTypes.MolecularSequenceOuter {
    return this.serialize() as plainTypes.MolecularSequenceOuter;
  }

  /** Structural variant outer start (0..1) */
  getStart(): number | undefined {
    return this.start;
  }

  /** Sets `start`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setStart(start: number | undefined): this {
    return this.setFieldValue('start', start);
  }

  hasStart(): boolean {
    return this.hasFieldValue('start');
  }

  /** The element carrying the id and extensions of `start`. Created when absent. */
  getStartElement(): Element {
    if (this._start === undefined) {
      this._start = new Element();
    }
    return this._start;
  }

  setStartElement(startElement: Element | undefined): this {
    this._start = startElement;
    return this;
  }

  /** Structural variant outer end (0..1) */
  getEnd(): number | undefined {
    return this.end;
  }

  /** Sets `end`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setEnd(end: number | undefined): this {
    return this.setFieldValue('end', end);
  }

  hasEnd(): boolean {
    return this.hasFieldValue('end');
  }

  /** The element carrying the id and extensions of `end`. Created when absent. */
  getEndElement(): Element {
    if (this._end === undefined) {
      this._end = new Element();
    }
    return this._end;
  }

  setEndElement(endElement: Element | undefined): this {
    this._end = endElement;
    return this;
  }
}

modelTypeRegistry.register(
  'MolecularSequenceStructureVariantOuter',
  MolecularSequenceStructureVariantOuter,
  false
);

/**
 * Structural variant inner
 */
export class MolecularSequenceStructureVariantInner extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'start',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'integer' }],
    },
    {
      elementName: 'end',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'end', typeCode: 'integer' }],
    },
  ];

  /** Structural variant inner start (0..1) */
  start?: number;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** Structural variant inner end (0..1) */
  end?: number;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  override fhirType(): string {
    return 'MolecularSequence.structureVariant.inner';
  }

  /** FHIR JSON for this MolecularSequenceStructureVariantInner, typed as the plain `MolecularSequenceInner` data type. */
  override toJSON(): plainTypes.MolecularSequenceInner {
    return this.serialize() as plainTypes.MolecularSequenceInner;
  }

  /** Structural variant inner start (0..1) */
  getStart(): number | undefined {
    return this.start;
  }

  /** Sets `start`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setStart(start: number | undefined): this {
    return this.setFieldValue('start', start);
  }

  hasStart(): boolean {
    return this.hasFieldValue('start');
  }

  /** The element carrying the id and extensions of `start`. Created when absent. */
  getStartElement(): Element {
    if (this._start === undefined) {
      this._start = new Element();
    }
    return this._start;
  }

  setStartElement(startElement: Element | undefined): this {
    this._start = startElement;
    return this;
  }

  /** Structural variant inner end (0..1) */
  getEnd(): number | undefined {
    return this.end;
  }

  /** Sets `end`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setEnd(end: number | undefined): this {
    return this.setFieldValue('end', end);
  }

  hasEnd(): boolean {
    return this.hasFieldValue('end');
  }

  /** The element carrying the id and extensions of `end`. Created when absent. */
  getEndElement(): Element {
    if (this._end === undefined) {
      this._end = new Element();
    }
    return this._end;
  }

  setEndElement(endElement: Element | undefined): this {
    this._end = endElement;
    return this;
  }
}

modelTypeRegistry.register(
  'MolecularSequenceStructureVariantInner',
  MolecularSequenceStructureVariantInner,
  false
);
