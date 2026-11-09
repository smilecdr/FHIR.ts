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

/**
 * A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
 */
export class SubstanceProtein extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'sequenceType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequenceType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'numberOfSubunits',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfSubunits', typeCode: 'integer' }],
    },
    {
      elementName: 'disulfideLinkage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'disulfideLinkage', typeCode: 'string' }],
    },
    {
      elementName: 'subunit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subunit', typeCode: 'SubstanceProteinSubunit' }],
    },
  ];

  readonly resourceType = 'SubstanceProtein';

  /** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence (0..1) */
  sequenceType?: CodeableConcept;

  /** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable (0..1) */
  numberOfSubunits?: number;
  /** Id and extensions of the primitive `numberOfSubunits`. */
  _numberOfSubunits?: Element;

  /** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions (0..*) */
  disulfideLinkage?: string[];
  /** Id and extensions of the primitive `disulfideLinkage`. */
  _disulfideLinkage?: (Element | null)[];

  /** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times (0..*) */
  subunit?: SubstanceProteinSubunit[];

  override fhirType(): string {
    return 'SubstanceProtein';
  }

  /** FHIR JSON for this SubstanceProtein, typed as the plain `SubstanceProtein` data type. */
  override toJSON(): plainTypes.SubstanceProtein {
    return this.serialize() as plainTypes.SubstanceProtein;
  }

  /** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence (0..1) Created when absent. */
  getSequenceType(): CodeableConcept {
    if (this.sequenceType === undefined) {
      this.sequenceType = new CodeableConcept();
    }
    return this.sequenceType;
  }

  setSequenceType(sequenceType: CodeableConcept | undefined): this {
    return this.setFieldValue('sequenceType', sequenceType);
  }

  hasSequenceType(): boolean {
    return this.hasFieldValue('sequenceType');
  }

  /** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable (0..1) */
  getNumberOfSubunits(): number | undefined {
    return this.numberOfSubunits;
  }

  /** Sets `numberOfSubunits`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setNumberOfSubunits(numberOfSubunits: number | undefined): this {
    return this.setFieldValue('numberOfSubunits', numberOfSubunits);
  }

  hasNumberOfSubunits(): boolean {
    return this.hasFieldValue('numberOfSubunits');
  }

  /** The element carrying the id and extensions of `numberOfSubunits`. Created when absent. */
  getNumberOfSubunitsElement(): Element {
    if (this._numberOfSubunits === undefined) {
      this._numberOfSubunits = new Element();
    }
    return this._numberOfSubunits;
  }

  setNumberOfSubunitsElement(numberOfSubunitsElement: Element | undefined): this {
    this._numberOfSubunits = numberOfSubunitsElement;
    return this;
  }

  /** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions (0..*) Never undefined; an empty list is created when absent. */
  getDisulfideLinkage(): string[] {
    if (this.disulfideLinkage === undefined) {
      this.disulfideLinkage = [];
    }
    return this.disulfideLinkage;
  }

  setDisulfideLinkage(disulfideLinkage: string[] | undefined): this {
    return this.setFieldValue('disulfideLinkage', disulfideLinkage);
  }

  hasDisulfideLinkage(): boolean {
    return this.hasFieldValue('disulfideLinkage');
  }

  /** Appends one value to `disulfideLinkage`. Throws a FhirModelError when it is not a valid FHIR string. */
  addDisulfideLinkage(disulfideLinkage: string): this {
    return this.addFieldValue('disulfideLinkage', disulfideLinkage);
  }

  /** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times (0..*) Never undefined; an empty list is created when absent. */
  getSubunit(): SubstanceProteinSubunit[] {
    if (this.subunit === undefined) {
      this.subunit = [];
    }
    return this.subunit;
  }

  setSubunit(subunit: SubstanceProteinSubunit[] | undefined): this {
    return this.setFieldValue('subunit', subunit);
  }

  hasSubunit(): boolean {
    return this.hasFieldValue('subunit');
  }

  /** Appends a new, empty SubstanceProteinSubunit to `subunit` and returns it so it can be filled in. */
  addSubunit(): SubstanceProteinSubunit;
  /** Appends the given SubstanceProteinSubunit to `subunit` and returns this object for chaining. */
  addSubunit(substanceProteinSubunit: SubstanceProteinSubunit): this;
  addSubunit(substanceProteinSubunit?: SubstanceProteinSubunit): SubstanceProteinSubunit | this {
    if (substanceProteinSubunit !== undefined) {
      return this.addFieldValue('subunit', substanceProteinSubunit);
    }
    const createdSubstanceProteinSubunit = new SubstanceProteinSubunit();
    this.addFieldValue('subunit', createdSubstanceProteinSubunit);
    return createdSubstanceProteinSubunit;
  }

  /** The first SubstanceProteinSubunit of `subunit`. One is added when the list is empty. */
  getSubunitFirstRep(): SubstanceProteinSubunit {
    const firstSubstanceProteinSubunit = this.getSubunit()[0];
    return firstSubstanceProteinSubunit === undefined
      ? this.addSubunit()
      : firstSubstanceProteinSubunit;
  }
}

modelTypeRegistry.register('SubstanceProtein', SubstanceProtein, true);

/** True when the value is a SubstanceProtein model instance. */
export function isSubstanceProtein(candidate: unknown): candidate is SubstanceProtein {
  return candidate instanceof SubstanceProtein;
}

/**
 * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
 */
export class SubstanceProteinSubunit extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'subunit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subunit', typeCode: 'integer' }],
    },
    {
      elementName: 'sequence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequence', typeCode: 'string' }],
    },
    {
      elementName: 'length',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'length', typeCode: 'integer' }],
    },
    {
      elementName: 'sequenceAttachment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sequenceAttachment', typeCode: 'Attachment' }],
    },
    {
      elementName: 'nTerminalModificationId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nTerminalModificationId', typeCode: 'Identifier' }],
    },
    {
      elementName: 'nTerminalModification',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nTerminalModification', typeCode: 'string' }],
    },
    {
      elementName: 'cTerminalModificationId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cTerminalModificationId', typeCode: 'Identifier' }],
    },
    {
      elementName: 'cTerminalModification',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cTerminalModification', typeCode: 'string' }],
    },
  ];

  /** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts (0..1) */
  subunit?: number;
  /** Id and extensions of the primitive `subunit`. */
  _subunit?: Element;

  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence (0..1) */
  sequence?: string;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** Length of linear sequences of amino acids contained in the subunit (0..1) */
  length?: number;
  /** Id and extensions of the primitive `length`. */
  _length?: Element;

  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence (0..1) */
  sequenceAttachment?: Attachment;

  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID (0..1) */
  nTerminalModificationId?: Identifier;

  /** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified (0..1) */
  nTerminalModification?: string;
  /** Id and extensions of the primitive `nTerminalModification`. */
  _nTerminalModification?: Element;

  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID (0..1) */
  cTerminalModificationId?: Identifier;

  /** The modification at the C-terminal shall be specified (0..1) */
  cTerminalModification?: string;
  /** Id and extensions of the primitive `cTerminalModification`. */
  _cTerminalModification?: Element;

  override fhirType(): string {
    return 'SubstanceProtein.subunit';
  }

  /** FHIR JSON for this SubstanceProteinSubunit, typed as the plain `SubstanceProteinSubunit` data type. */
  override toJSON(): plainTypes.SubstanceProteinSubunit {
    return this.serialize() as plainTypes.SubstanceProteinSubunit;
  }

  /** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts (0..1) */
  getSubunit(): number | undefined {
    return this.subunit;
  }

  /** Sets `subunit`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setSubunit(subunit: number | undefined): this {
    return this.setFieldValue('subunit', subunit);
  }

  hasSubunit(): boolean {
    return this.hasFieldValue('subunit');
  }

  /** The element carrying the id and extensions of `subunit`. Created when absent. */
  getSubunitElement(): Element {
    if (this._subunit === undefined) {
      this._subunit = new Element();
    }
    return this._subunit;
  }

  setSubunitElement(subunitElement: Element | undefined): this {
    this._subunit = subunitElement;
    return this;
  }

  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence (0..1) */
  getSequence(): string | undefined {
    return this.sequence;
  }

  /** Sets `sequence`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSequence(sequence: string | undefined): this {
    return this.setFieldValue('sequence', sequence);
  }

  hasSequence(): boolean {
    return this.hasFieldValue('sequence');
  }

  /** The element carrying the id and extensions of `sequence`. Created when absent. */
  getSequenceElement(): Element {
    if (this._sequence === undefined) {
      this._sequence = new Element();
    }
    return this._sequence;
  }

  setSequenceElement(sequenceElement: Element | undefined): this {
    this._sequence = sequenceElement;
    return this;
  }

  /** Length of linear sequences of amino acids contained in the subunit (0..1) */
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

  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence (0..1) Created when absent. */
  getSequenceAttachment(): Attachment {
    if (this.sequenceAttachment === undefined) {
      this.sequenceAttachment = new Attachment();
    }
    return this.sequenceAttachment;
  }

  setSequenceAttachment(sequenceAttachment: Attachment | undefined): this {
    return this.setFieldValue('sequenceAttachment', sequenceAttachment);
  }

  hasSequenceAttachment(): boolean {
    return this.hasFieldValue('sequenceAttachment');
  }

  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID (0..1) Created when absent. */
  getNTerminalModificationId(): Identifier {
    if (this.nTerminalModificationId === undefined) {
      this.nTerminalModificationId = new Identifier();
    }
    return this.nTerminalModificationId;
  }

  setNTerminalModificationId(nTerminalModificationId: Identifier | undefined): this {
    return this.setFieldValue('nTerminalModificationId', nTerminalModificationId);
  }

  hasNTerminalModificationId(): boolean {
    return this.hasFieldValue('nTerminalModificationId');
  }

  /** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified (0..1) */
  getNTerminalModification(): string | undefined {
    return this.nTerminalModification;
  }

  /** Sets `nTerminalModification`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setNTerminalModification(nTerminalModification: string | undefined): this {
    return this.setFieldValue('nTerminalModification', nTerminalModification);
  }

  hasNTerminalModification(): boolean {
    return this.hasFieldValue('nTerminalModification');
  }

  /** The element carrying the id and extensions of `nTerminalModification`. Created when absent. */
  getNTerminalModificationElement(): Element {
    if (this._nTerminalModification === undefined) {
      this._nTerminalModification = new Element();
    }
    return this._nTerminalModification;
  }

  setNTerminalModificationElement(nTerminalModificationElement: Element | undefined): this {
    this._nTerminalModification = nTerminalModificationElement;
    return this;
  }

  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID (0..1) Created when absent. */
  getCTerminalModificationId(): Identifier {
    if (this.cTerminalModificationId === undefined) {
      this.cTerminalModificationId = new Identifier();
    }
    return this.cTerminalModificationId;
  }

  setCTerminalModificationId(cTerminalModificationId: Identifier | undefined): this {
    return this.setFieldValue('cTerminalModificationId', cTerminalModificationId);
  }

  hasCTerminalModificationId(): boolean {
    return this.hasFieldValue('cTerminalModificationId');
  }

  /** The modification at the C-terminal shall be specified (0..1) */
  getCTerminalModification(): string | undefined {
    return this.cTerminalModification;
  }

  /** Sets `cTerminalModification`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCTerminalModification(cTerminalModification: string | undefined): this {
    return this.setFieldValue('cTerminalModification', cTerminalModification);
  }

  hasCTerminalModification(): boolean {
    return this.hasFieldValue('cTerminalModification');
  }

  /** The element carrying the id and extensions of `cTerminalModification`. Created when absent. */
  getCTerminalModificationElement(): Element {
    if (this._cTerminalModification === undefined) {
      this._cTerminalModification = new Element();
    }
    return this._cTerminalModification;
  }

  setCTerminalModificationElement(cTerminalModificationElement: Element | undefined): this {
    this._cTerminalModification = cTerminalModificationElement;
    return this;
  }
}

modelTypeRegistry.register('SubstanceProteinSubunit', SubstanceProteinSubunit, false);
