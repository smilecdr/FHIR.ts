/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Range } from './range';
import { Reference } from './reference';

/**
 * Representation of a molecular sequence.
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
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: [
            'BiologicallyDerivedProduct',
            'Group',
            'NutritionProduct',
            'Patient',
            'Substance',
          ],
        },
      ],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'focus', typeCode: 'Reference' }],
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
      elementName: 'literal',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'literal', typeCode: 'string' }],
    },
    {
      elementName: 'formatted',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'formatted', typeCode: 'Attachment' }],
    },
    {
      elementName: 'relative',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relative', typeCode: 'MolecularSequenceRelative' }],
    },
  ];

  readonly resourceType = 'MolecularSequence';

  /** Unique ID for this particular sequence (0..*) */
  identifier?: Identifier[];

  /** aa | dna | rna (0..1) */
  type?: valueSetCodes.SequenceType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Subject this sequence is associated too (0..1) */
  subject?: Reference;

  /** What the molecular sequence is about, when it is not about the subject of record (0..*) */
  focus?: Reference[];

  /** Specimen used for sequencing (0..1) */
  specimen?: Reference;

  /** The method for sequencing (0..1) */
  device?: Reference;

  /** Who should be responsible for test result (0..1) */
  performer?: Reference;

  /** Sequence that was observed (0..1) */
  literal?: string;
  /** Id and extensions of the primitive `literal`. */
  _literal?: Element;

  /** Embedded file or a link (URL) which contains content to represent the sequence (0..*) */
  formatted?: Attachment[];

  /** A sequence defined relative to another sequence (0..*) */
  relative?: MolecularSequenceRelative[];

  override fhirType(): string {
    return 'MolecularSequence';
  }

  /** FHIR JSON for this MolecularSequence, typed as the plain `MolecularSequence` data type. */
  override toJSON(): plainTypes.MolecularSequence {
    return this.serialize() as plainTypes.MolecularSequence;
  }

  /** Unique ID for this particular sequence (0..*) Never undefined; an empty list is created when absent. */
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

  /** Subject this sequence is associated too (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** What the molecular sequence is about, when it is not about the subject of record (0..*) Never undefined; an empty list is created when absent. */
  getFocus(): Reference[] {
    if (this.focus === undefined) {
      this.focus = [];
    }
    return this.focus;
  }

  setFocus(focus: Reference[] | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Appends a new, empty Reference to `focus` and returns it so it can be filled in. */
  addFocus(): Reference;
  /** Appends the given Reference to `focus` and returns this object for chaining. */
  addFocus(reference: Reference): this;
  addFocus(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('focus', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('focus', createdReference);
    return createdReference;
  }

  /** The first Reference of `focus`. One is added when the list is empty. */
  getFocusFirstRep(): Reference {
    const firstReference = this.getFocus()[0];
    return firstReference === undefined ? this.addFocus() : firstReference;
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

  /** Sequence that was observed (0..1) */
  getLiteral(): string | undefined {
    return this.literal;
  }

  /** Sets `literal`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLiteral(literal: string | undefined): this {
    return this.setFieldValue('literal', literal);
  }

  hasLiteral(): boolean {
    return this.hasFieldValue('literal');
  }

  /** The element carrying the id and extensions of `literal`. Created when absent. */
  getLiteralElement(): Element {
    if (this._literal === undefined) {
      this._literal = new Element();
    }
    return this._literal;
  }

  setLiteralElement(literalElement: Element | undefined): this {
    this._literal = literalElement;
    return this;
  }

  /** Embedded file or a link (URL) which contains content to represent the sequence (0..*) Never undefined; an empty list is created when absent. */
  getFormatted(): Attachment[] {
    if (this.formatted === undefined) {
      this.formatted = [];
    }
    return this.formatted;
  }

  setFormatted(formatted: Attachment[] | undefined): this {
    return this.setFieldValue('formatted', formatted);
  }

  hasFormatted(): boolean {
    return this.hasFieldValue('formatted');
  }

  /** Appends a new, empty Attachment to `formatted` and returns it so it can be filled in. */
  addFormatted(): Attachment;
  /** Appends the given Attachment to `formatted` and returns this object for chaining. */
  addFormatted(attachment: Attachment): this;
  addFormatted(attachment?: Attachment): Attachment | this {
    if (attachment !== undefined) {
      return this.addFieldValue('formatted', attachment);
    }
    const createdAttachment = new Attachment();
    this.addFieldValue('formatted', createdAttachment);
    return createdAttachment;
  }

  /** The first Attachment of `formatted`. One is added when the list is empty. */
  getFormattedFirstRep(): Attachment {
    const firstAttachment = this.getFormatted()[0];
    return firstAttachment === undefined ? this.addFormatted() : firstAttachment;
  }

  /** A sequence defined relative to another sequence (0..*) Never undefined; an empty list is created when absent. */
  getRelative(): MolecularSequenceRelative[] {
    if (this.relative === undefined) {
      this.relative = [];
    }
    return this.relative;
  }

  setRelative(relative: MolecularSequenceRelative[] | undefined): this {
    return this.setFieldValue('relative', relative);
  }

  hasRelative(): boolean {
    return this.hasFieldValue('relative');
  }

  /** Appends a new, empty MolecularSequenceRelative to `relative` and returns it so it can be filled in. */
  addRelative(): MolecularSequenceRelative;
  /** Appends the given MolecularSequenceRelative to `relative` and returns this object for chaining. */
  addRelative(molecularSequenceRelative: MolecularSequenceRelative): this;
  addRelative(
    molecularSequenceRelative?: MolecularSequenceRelative
  ): MolecularSequenceRelative | this {
    if (molecularSequenceRelative !== undefined) {
      return this.addFieldValue('relative', molecularSequenceRelative);
    }
    const createdMolecularSequenceRelative = new MolecularSequenceRelative();
    this.addFieldValue('relative', createdMolecularSequenceRelative);
    return createdMolecularSequenceRelative;
  }

  /** The first MolecularSequenceRelative of `relative`. One is added when the list is empty. */
  getRelativeFirstRep(): MolecularSequenceRelative {
    const firstMolecularSequenceRelative = this.getRelative()[0];
    return firstMolecularSequenceRelative === undefined
      ? this.addRelative()
      : firstMolecularSequenceRelative;
  }
}

modelTypeRegistry.register('MolecularSequence', MolecularSequence, true);

/** True when the value is a MolecularSequence model instance. */
export function isMolecularSequence(candidate: unknown): candidate is MolecularSequence {
  return candidate instanceof MolecularSequence;
}

/**
 * A sequence defined relative to another sequence
 */
export class MolecularSequenceRelative extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'coordinateSystem',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'coordinateSystem', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'ordinalPosition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ordinalPosition', typeCode: 'integer' }],
    },
    {
      elementName: 'sequenceRange',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequenceRange', typeCode: 'Range' }],
    },
    {
      elementName: 'startingSequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'startingSequence', typeCode: 'MolecularSequenceRelativeStartingSequence' },
      ],
    },
    {
      elementName: 'edit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'edit', typeCode: 'MolecularSequenceRelativeEdit' }],
    },
  ];

  /** Ways of identifying nucleotides or amino acids within a sequence (1..1) */
  coordinateSystem?: CodeableConcept;

  /** Indicates the order in which the sequence should be considered when putting multiple 'relative' elements together (0..1) */
  ordinalPosition?: number;
  /** Id and extensions of the primitive `ordinalPosition`. */
  _ordinalPosition?: Element;

  /** Indicates the nucleotide range in the composed sequence when multiple 'relative' elements are used together (0..1) */
  sequenceRange?: Range;

  /** A sequence used as starting sequence (0..1) */
  startingSequence?: MolecularSequenceRelativeStartingSequence;

  /** Changes in sequence from the starting sequence (0..*) */
  edit?: MolecularSequenceRelativeEdit[];

  override fhirType(): string {
    return 'MolecularSequence.relative';
  }

  /** FHIR JSON for this MolecularSequenceRelative, typed as the plain `MolecularSequenceRelative` data type. */
  override toJSON(): plainTypes.MolecularSequenceRelative {
    return this.serialize() as plainTypes.MolecularSequenceRelative;
  }

  /** Ways of identifying nucleotides or amino acids within a sequence (1..1) Created when absent. */
  getCoordinateSystem(): CodeableConcept {
    if (this.coordinateSystem === undefined) {
      this.coordinateSystem = new CodeableConcept();
    }
    return this.coordinateSystem;
  }

  setCoordinateSystem(coordinateSystem: CodeableConcept | undefined): this {
    return this.setFieldValue('coordinateSystem', coordinateSystem);
  }

  hasCoordinateSystem(): boolean {
    return this.hasFieldValue('coordinateSystem');
  }

  /** Indicates the order in which the sequence should be considered when putting multiple 'relative' elements together (0..1) */
  getOrdinalPosition(): number | undefined {
    return this.ordinalPosition;
  }

  /** Sets `ordinalPosition`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setOrdinalPosition(ordinalPosition: number | undefined): this {
    return this.setFieldValue('ordinalPosition', ordinalPosition);
  }

  hasOrdinalPosition(): boolean {
    return this.hasFieldValue('ordinalPosition');
  }

  /** The element carrying the id and extensions of `ordinalPosition`. Created when absent. */
  getOrdinalPositionElement(): Element {
    if (this._ordinalPosition === undefined) {
      this._ordinalPosition = new Element();
    }
    return this._ordinalPosition;
  }

  setOrdinalPositionElement(ordinalPositionElement: Element | undefined): this {
    this._ordinalPosition = ordinalPositionElement;
    return this;
  }

  /** Indicates the nucleotide range in the composed sequence when multiple 'relative' elements are used together (0..1) Created when absent. */
  getSequenceRange(): Range {
    if (this.sequenceRange === undefined) {
      this.sequenceRange = new Range();
    }
    return this.sequenceRange;
  }

  setSequenceRange(sequenceRange: Range | undefined): this {
    return this.setFieldValue('sequenceRange', sequenceRange);
  }

  hasSequenceRange(): boolean {
    return this.hasFieldValue('sequenceRange');
  }

  /** A sequence used as starting sequence (0..1) Created when absent. */
  getStartingSequence(): MolecularSequenceRelativeStartingSequence {
    if (this.startingSequence === undefined) {
      this.startingSequence = new MolecularSequenceRelativeStartingSequence();
    }
    return this.startingSequence;
  }

  setStartingSequence(
    startingSequence: MolecularSequenceRelativeStartingSequence | undefined
  ): this {
    return this.setFieldValue('startingSequence', startingSequence);
  }

  hasStartingSequence(): boolean {
    return this.hasFieldValue('startingSequence');
  }

  /** Changes in sequence from the starting sequence (0..*) Never undefined; an empty list is created when absent. */
  getEdit(): MolecularSequenceRelativeEdit[] {
    if (this.edit === undefined) {
      this.edit = [];
    }
    return this.edit;
  }

  setEdit(edit: MolecularSequenceRelativeEdit[] | undefined): this {
    return this.setFieldValue('edit', edit);
  }

  hasEdit(): boolean {
    return this.hasFieldValue('edit');
  }

  /** Appends a new, empty MolecularSequenceRelativeEdit to `edit` and returns it so it can be filled in. */
  addEdit(): MolecularSequenceRelativeEdit;
  /** Appends the given MolecularSequenceRelativeEdit to `edit` and returns this object for chaining. */
  addEdit(molecularSequenceRelativeEdit: MolecularSequenceRelativeEdit): this;
  addEdit(
    molecularSequenceRelativeEdit?: MolecularSequenceRelativeEdit
  ): MolecularSequenceRelativeEdit | this {
    if (molecularSequenceRelativeEdit !== undefined) {
      return this.addFieldValue('edit', molecularSequenceRelativeEdit);
    }
    const createdMolecularSequenceRelativeEdit = new MolecularSequenceRelativeEdit();
    this.addFieldValue('edit', createdMolecularSequenceRelativeEdit);
    return createdMolecularSequenceRelativeEdit;
  }

  /** The first MolecularSequenceRelativeEdit of `edit`. One is added when the list is empty. */
  getEditFirstRep(): MolecularSequenceRelativeEdit {
    const firstMolecularSequenceRelativeEdit = this.getEdit()[0];
    return firstMolecularSequenceRelativeEdit === undefined
      ? this.addEdit()
      : firstMolecularSequenceRelativeEdit;
  }
}

modelTypeRegistry.register('MolecularSequenceRelative', MolecularSequenceRelative, false);

/**
 * A sequence used as starting sequence
 */
export class MolecularSequenceRelativeStartingSequence extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'genomeAssembly',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'genomeAssembly', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'chromosome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'chromosome', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'sequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sequenceCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'sequenceString', typeCode: 'string' },
        {
          jsonKey: 'sequenceReference',
          typeCode: 'Reference',
          targetResourceTypes: ['MolecularSequence'],
        },
      ],
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
      elementName: 'strand',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'strand', typeCode: 'code', allowedCodes: valueSetCodes.StrandType }],
    },
  ];

  /** The genome assembly used for starting sequence, e.g. GRCh38 (0..1) */
  genomeAssembly?: CodeableConcept;

  /** Chromosome Identifier (0..1) */
  chromosome?: CodeableConcept;

  /** The reference sequence that represents the starting sequence (0..1) */
  sequenceCodeableConcept?: CodeableConcept;
  /** The reference sequence that represents the starting sequence (0..1) */
  sequenceString?: string;
  /** Id and extensions of the primitive `sequenceString`. */
  _sequenceString?: Element;
  /** The reference sequence that represents the starting sequence (0..1) */
  sequenceReference?: Reference;

  /** Start position of the window on the starting sequence (0..1) */
  windowStart?: number;
  /** Id and extensions of the primitive `windowStart`. */
  _windowStart?: Element;

  /** End position of the window on the starting sequence (0..1) */
  windowEnd?: number;
  /** Id and extensions of the primitive `windowEnd`. */
  _windowEnd?: Element;

  /** sense | antisense (0..1) */
  orientation?: valueSetCodes.OrientationType;
  /** Id and extensions of the primitive `orientation`. */
  _orientation?: Element;

  /** watson | crick (0..1) */
  strand?: valueSetCodes.StrandType;
  /** Id and extensions of the primitive `strand`. */
  _strand?: Element;

  override fhirType(): string {
    return 'MolecularSequence.relative.startingSequence';
  }

  /** FHIR JSON for this MolecularSequenceRelativeStartingSequence, typed as the plain `MolecularSequenceStartingSequence` data type. */
  override toJSON(): plainTypes.MolecularSequenceStartingSequence {
    return this.serialize() as plainTypes.MolecularSequenceStartingSequence;
  }

  /** The genome assembly used for starting sequence, e.g. GRCh38 (0..1) Created when absent. */
  getGenomeAssembly(): CodeableConcept {
    if (this.genomeAssembly === undefined) {
      this.genomeAssembly = new CodeableConcept();
    }
    return this.genomeAssembly;
  }

  setGenomeAssembly(genomeAssembly: CodeableConcept | undefined): this {
    return this.setFieldValue('genomeAssembly', genomeAssembly);
  }

  hasGenomeAssembly(): boolean {
    return this.hasFieldValue('genomeAssembly');
  }

  /** Chromosome Identifier (0..1) Created when absent. */
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

  /** The reference sequence that represents the starting sequence (0..1) Whichever type of `sequence[x]` is set. */
  getSequence(): CodeableConcept | string | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | string | Reference>('sequence');
  }

  /** True when any type of `sequence[x]` is set. */
  hasSequence(): boolean {
    return this.hasChoiceValue('sequence');
  }

  getSequenceCodeableConcept(): CodeableConcept | undefined {
    return this.sequenceCodeableConcept;
  }

  /** Sets `sequence[x]` as CodeableConcept and clears every other type of it. */
  setSequenceCodeableConcept(sequenceCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('sequenceCodeableConcept', sequenceCodeableConcept);
  }

  hasSequenceCodeableConcept(): boolean {
    return this.hasFieldValue('sequenceCodeableConcept');
  }

  getSequenceString(): string | undefined {
    return this.sequenceString;
  }

  /** Sets `sequence[x]` as string and clears every other type of it. */
  setSequenceString(sequenceString: string | undefined): this {
    return this.setFieldValue('sequenceString', sequenceString);
  }

  hasSequenceString(): boolean {
    return this.hasFieldValue('sequenceString');
  }

  getSequenceReference(): Reference | undefined {
    return this.sequenceReference;
  }

  /** Sets `sequence[x]` as Reference and clears every other type of it. */
  setSequenceReference(sequenceReference: Reference | undefined): this {
    return this.setFieldValue('sequenceReference', sequenceReference);
  }

  hasSequenceReference(): boolean {
    return this.hasFieldValue('sequenceReference');
  }

  /** Start position of the window on the starting sequence (0..1) */
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

  /** End position of the window on the starting sequence (0..1) */
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
}

modelTypeRegistry.register(
  'MolecularSequenceRelativeStartingSequence',
  MolecularSequenceRelativeStartingSequence,
  false
);

/**
 * Changes in sequence from the starting sequence
 */
export class MolecularSequenceRelativeEdit extends BackboneElement {
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
      elementName: 'replacementSequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'replacementSequence', typeCode: 'string' }],
    },
    {
      elementName: 'replacedSequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'replacedSequence', typeCode: 'string' }],
    },
  ];

  /** Start position of the edit on the starting sequence (0..1) */
  start?: number;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** End position of the edit on the starting sequence (0..1) */
  end?: number;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  /** Allele that was observed (0..1) */
  replacementSequence?: string;
  /** Id and extensions of the primitive `replacementSequence`. */
  _replacementSequence?: Element;

  /** Allele in the starting sequence (0..1) */
  replacedSequence?: string;
  /** Id and extensions of the primitive `replacedSequence`. */
  _replacedSequence?: Element;

  override fhirType(): string {
    return 'MolecularSequence.relative.edit';
  }

  /** FHIR JSON for this MolecularSequenceRelativeEdit, typed as the plain `MolecularSequenceEdit` data type. */
  override toJSON(): plainTypes.MolecularSequenceEdit {
    return this.serialize() as plainTypes.MolecularSequenceEdit;
  }

  /** Start position of the edit on the starting sequence (0..1) */
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

  /** End position of the edit on the starting sequence (0..1) */
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
  getReplacementSequence(): string | undefined {
    return this.replacementSequence;
  }

  /** Sets `replacementSequence`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReplacementSequence(replacementSequence: string | undefined): this {
    return this.setFieldValue('replacementSequence', replacementSequence);
  }

  hasReplacementSequence(): boolean {
    return this.hasFieldValue('replacementSequence');
  }

  /** The element carrying the id and extensions of `replacementSequence`. Created when absent. */
  getReplacementSequenceElement(): Element {
    if (this._replacementSequence === undefined) {
      this._replacementSequence = new Element();
    }
    return this._replacementSequence;
  }

  setReplacementSequenceElement(replacementSequenceElement: Element | undefined): this {
    this._replacementSequence = replacementSequenceElement;
    return this;
  }

  /** Allele in the starting sequence (0..1) */
  getReplacedSequence(): string | undefined {
    return this.replacedSequence;
  }

  /** Sets `replacedSequence`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReplacedSequence(replacedSequence: string | undefined): this {
    return this.setFieldValue('replacedSequence', replacedSequence);
  }

  hasReplacedSequence(): boolean {
    return this.hasFieldValue('replacedSequence');
  }

  /** The element carrying the id and extensions of `replacedSequence`. Created when absent. */
  getReplacedSequenceElement(): Element {
    if (this._replacedSequence === undefined) {
      this._replacedSequence = new Element();
    }
    return this._replacedSequence;
  }

  setReplacedSequenceElement(replacedSequenceElement: Element | undefined): this {
    this._replacedSequence = replacedSequenceElement;
    return this;
  }
}

modelTypeRegistry.register('MolecularSequenceRelativeEdit', MolecularSequenceRelativeEdit, false);
