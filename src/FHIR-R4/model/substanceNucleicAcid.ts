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
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
 */
export class SubstanceNucleicAcid extends DomainResource {
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
      elementName: 'areaOfHybridisation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'areaOfHybridisation', typeCode: 'string' }],
    },
    {
      elementName: 'oligoNucleotideType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'oligoNucleotideType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subunit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subunit', typeCode: 'SubstanceNucleicAcidSubunit' }],
    },
  ];

  readonly resourceType = 'SubstanceNucleicAcid';

  /** The type of the sequence shall be specified based on a controlled vocabulary (0..1) */
  sequenceType?: CodeableConcept;

  /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit (0..1) */
  numberOfSubunits?: number;
  /** Id and extensions of the primitive `numberOfSubunits`. */
  _numberOfSubunits?: Element;

  /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” (0..1) */
  areaOfHybridisation?: string;
  /** Id and extensions of the primitive `areaOfHybridisation`. */
  _areaOfHybridisation?: Element;

  /** (TBC) (0..1) */
  oligoNucleotideType?: CodeableConcept;

  /** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times (0..*) */
  subunit?: SubstanceNucleicAcidSubunit[];

  override fhirType(): string {
    return 'SubstanceNucleicAcid';
  }

  /** FHIR JSON for this SubstanceNucleicAcid, typed as the plain `SubstanceNucleicAcid` data type. */
  override toJSON(): plainTypes.SubstanceNucleicAcid {
    return this.serialize() as plainTypes.SubstanceNucleicAcid;
  }

  /** The type of the sequence shall be specified based on a controlled vocabulary (0..1) Created when absent. */
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

  /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit (0..1) */
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

  /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” (0..1) */
  getAreaOfHybridisation(): string | undefined {
    return this.areaOfHybridisation;
  }

  /** Sets `areaOfHybridisation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAreaOfHybridisation(areaOfHybridisation: string | undefined): this {
    return this.setFieldValue('areaOfHybridisation', areaOfHybridisation);
  }

  hasAreaOfHybridisation(): boolean {
    return this.hasFieldValue('areaOfHybridisation');
  }

  /** The element carrying the id and extensions of `areaOfHybridisation`. Created when absent. */
  getAreaOfHybridisationElement(): Element {
    if (this._areaOfHybridisation === undefined) {
      this._areaOfHybridisation = new Element();
    }
    return this._areaOfHybridisation;
  }

  setAreaOfHybridisationElement(areaOfHybridisationElement: Element | undefined): this {
    this._areaOfHybridisation = areaOfHybridisationElement;
    return this;
  }

  /** (TBC) (0..1) Created when absent. */
  getOligoNucleotideType(): CodeableConcept {
    if (this.oligoNucleotideType === undefined) {
      this.oligoNucleotideType = new CodeableConcept();
    }
    return this.oligoNucleotideType;
  }

  setOligoNucleotideType(oligoNucleotideType: CodeableConcept | undefined): this {
    return this.setFieldValue('oligoNucleotideType', oligoNucleotideType);
  }

  hasOligoNucleotideType(): boolean {
    return this.hasFieldValue('oligoNucleotideType');
  }

  /** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times (0..*) Never undefined; an empty list is created when absent. */
  getSubunit(): SubstanceNucleicAcidSubunit[] {
    if (this.subunit === undefined) {
      this.subunit = [];
    }
    return this.subunit;
  }

  setSubunit(subunit: SubstanceNucleicAcidSubunit[] | undefined): this {
    return this.setFieldValue('subunit', subunit);
  }

  hasSubunit(): boolean {
    return this.hasFieldValue('subunit');
  }

  /** Appends a new, empty SubstanceNucleicAcidSubunit to `subunit` and returns it so it can be filled in. */
  addSubunit(): SubstanceNucleicAcidSubunit;
  /** Appends the given SubstanceNucleicAcidSubunit to `subunit` and returns this object for chaining. */
  addSubunit(substanceNucleicAcidSubunit: SubstanceNucleicAcidSubunit): this;
  addSubunit(
    substanceNucleicAcidSubunit?: SubstanceNucleicAcidSubunit
  ): SubstanceNucleicAcidSubunit | this {
    if (substanceNucleicAcidSubunit !== undefined) {
      return this.addFieldValue('subunit', substanceNucleicAcidSubunit);
    }
    const createdSubstanceNucleicAcidSubunit = new SubstanceNucleicAcidSubunit();
    this.addFieldValue('subunit', createdSubstanceNucleicAcidSubunit);
    return createdSubstanceNucleicAcidSubunit;
  }

  /** The first SubstanceNucleicAcidSubunit of `subunit`. One is added when the list is empty. */
  getSubunitFirstRep(): SubstanceNucleicAcidSubunit {
    const firstSubstanceNucleicAcidSubunit = this.getSubunit()[0];
    return firstSubstanceNucleicAcidSubunit === undefined
      ? this.addSubunit()
      : firstSubstanceNucleicAcidSubunit;
  }
}

modelTypeRegistry.register('SubstanceNucleicAcid', SubstanceNucleicAcid, true);

/** True when the value is a SubstanceNucleicAcid model instance. */
export function isSubstanceNucleicAcid(candidate: unknown): candidate is SubstanceNucleicAcid {
  return candidate instanceof SubstanceNucleicAcid;
}

/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
 */
export class SubstanceNucleicAcidSubunit extends BackboneElement {
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
      elementName: 'fivePrime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fivePrime', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'threePrime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'threePrime', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'linkage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'linkage', typeCode: 'SubstanceNucleicAcidSubunitLinkage' }],
    },
    {
      elementName: 'sugar',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'sugar', typeCode: 'SubstanceNucleicAcidSubunitSugar' }],
    },
  ];

  /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts (0..1) */
  subunit?: number;
  /** Id and extensions of the primitive `subunit`. */
  _subunit?: Element;

  /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured (0..1) */
  sequence?: string;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;

  /** The length of the sequence shall be captured (0..1) */
  length?: number;
  /** Id and extensions of the primitive `length`. */
  _length?: Element;

  /** (TBC) (0..1) */
  sequenceAttachment?: Attachment;

  /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant (0..1) */
  fivePrime?: CodeableConcept;

  /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant (0..1) */
  threePrime?: CodeableConcept;

  /** The linkages between sugar residues will also be captured (0..*) */
  linkage?: SubstanceNucleicAcidSubunitLinkage[];

  /** 5.3.6.8.1 Sugar ID (Mandatory) (0..*) */
  sugar?: SubstanceNucleicAcidSubunitSugar[];

  override fhirType(): string {
    return 'SubstanceNucleicAcid.subunit';
  }

  /** FHIR JSON for this SubstanceNucleicAcidSubunit, typed as the plain `SubstanceNucleicAcidSubunit` data type. */
  override toJSON(): plainTypes.SubstanceNucleicAcidSubunit {
    return this.serialize() as plainTypes.SubstanceNucleicAcidSubunit;
  }

  /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts (0..1) */
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

  /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured (0..1) */
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

  /** The length of the sequence shall be captured (0..1) */
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

  /** (TBC) (0..1) Created when absent. */
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

  /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant (0..1) Created when absent. */
  getFivePrime(): CodeableConcept {
    if (this.fivePrime === undefined) {
      this.fivePrime = new CodeableConcept();
    }
    return this.fivePrime;
  }

  setFivePrime(fivePrime: CodeableConcept | undefined): this {
    return this.setFieldValue('fivePrime', fivePrime);
  }

  hasFivePrime(): boolean {
    return this.hasFieldValue('fivePrime');
  }

  /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant (0..1) Created when absent. */
  getThreePrime(): CodeableConcept {
    if (this.threePrime === undefined) {
      this.threePrime = new CodeableConcept();
    }
    return this.threePrime;
  }

  setThreePrime(threePrime: CodeableConcept | undefined): this {
    return this.setFieldValue('threePrime', threePrime);
  }

  hasThreePrime(): boolean {
    return this.hasFieldValue('threePrime');
  }

  /** The linkages between sugar residues will also be captured (0..*) Never undefined; an empty list is created when absent. */
  getLinkage(): SubstanceNucleicAcidSubunitLinkage[] {
    if (this.linkage === undefined) {
      this.linkage = [];
    }
    return this.linkage;
  }

  setLinkage(linkage: SubstanceNucleicAcidSubunitLinkage[] | undefined): this {
    return this.setFieldValue('linkage', linkage);
  }

  hasLinkage(): boolean {
    return this.hasFieldValue('linkage');
  }

  /** Appends a new, empty SubstanceNucleicAcidSubunitLinkage to `linkage` and returns it so it can be filled in. */
  addLinkage(): SubstanceNucleicAcidSubunitLinkage;
  /** Appends the given SubstanceNucleicAcidSubunitLinkage to `linkage` and returns this object for chaining. */
  addLinkage(substanceNucleicAcidSubunitLinkage: SubstanceNucleicAcidSubunitLinkage): this;
  addLinkage(
    substanceNucleicAcidSubunitLinkage?: SubstanceNucleicAcidSubunitLinkage
  ): SubstanceNucleicAcidSubunitLinkage | this {
    if (substanceNucleicAcidSubunitLinkage !== undefined) {
      return this.addFieldValue('linkage', substanceNucleicAcidSubunitLinkage);
    }
    const createdSubstanceNucleicAcidSubunitLinkage = new SubstanceNucleicAcidSubunitLinkage();
    this.addFieldValue('linkage', createdSubstanceNucleicAcidSubunitLinkage);
    return createdSubstanceNucleicAcidSubunitLinkage;
  }

  /** The first SubstanceNucleicAcidSubunitLinkage of `linkage`. One is added when the list is empty. */
  getLinkageFirstRep(): SubstanceNucleicAcidSubunitLinkage {
    const firstSubstanceNucleicAcidSubunitLinkage = this.getLinkage()[0];
    return firstSubstanceNucleicAcidSubunitLinkage === undefined
      ? this.addLinkage()
      : firstSubstanceNucleicAcidSubunitLinkage;
  }

  /** 5.3.6.8.1 Sugar ID (Mandatory) (0..*) Never undefined; an empty list is created when absent. */
  getSugar(): SubstanceNucleicAcidSubunitSugar[] {
    if (this.sugar === undefined) {
      this.sugar = [];
    }
    return this.sugar;
  }

  setSugar(sugar: SubstanceNucleicAcidSubunitSugar[] | undefined): this {
    return this.setFieldValue('sugar', sugar);
  }

  hasSugar(): boolean {
    return this.hasFieldValue('sugar');
  }

  /** Appends a new, empty SubstanceNucleicAcidSubunitSugar to `sugar` and returns it so it can be filled in. */
  addSugar(): SubstanceNucleicAcidSubunitSugar;
  /** Appends the given SubstanceNucleicAcidSubunitSugar to `sugar` and returns this object for chaining. */
  addSugar(substanceNucleicAcidSubunitSugar: SubstanceNucleicAcidSubunitSugar): this;
  addSugar(
    substanceNucleicAcidSubunitSugar?: SubstanceNucleicAcidSubunitSugar
  ): SubstanceNucleicAcidSubunitSugar | this {
    if (substanceNucleicAcidSubunitSugar !== undefined) {
      return this.addFieldValue('sugar', substanceNucleicAcidSubunitSugar);
    }
    const createdSubstanceNucleicAcidSubunitSugar = new SubstanceNucleicAcidSubunitSugar();
    this.addFieldValue('sugar', createdSubstanceNucleicAcidSubunitSugar);
    return createdSubstanceNucleicAcidSubunitSugar;
  }

  /** The first SubstanceNucleicAcidSubunitSugar of `sugar`. One is added when the list is empty. */
  getSugarFirstRep(): SubstanceNucleicAcidSubunitSugar {
    const firstSubstanceNucleicAcidSubunitSugar = this.getSugar()[0];
    return firstSubstanceNucleicAcidSubunitSugar === undefined
      ? this.addSugar()
      : firstSubstanceNucleicAcidSubunitSugar;
  }
}

modelTypeRegistry.register('SubstanceNucleicAcidSubunit', SubstanceNucleicAcidSubunit, false);

/**
 * The linkages between sugar residues will also be captured
 */
export class SubstanceNucleicAcidSubunitLinkage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'connectivity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'connectivity', typeCode: 'string' }],
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
      elementName: 'residueSite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'residueSite', typeCode: 'string' }],
    },
  ];

  /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified (0..1) */
  connectivity?: string;
  /** Id and extensions of the primitive `connectivity`. */
  _connectivity?: Element;

  /** Each linkage will be registered as a fragment and have an ID (0..1) */
  identifier?: Identifier;

  /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Residues shall be captured as described in 5.3.6.8.3 (0..1) */
  residueSite?: string;
  /** Id and extensions of the primitive `residueSite`. */
  _residueSite?: Element;

  override fhirType(): string {
    return 'SubstanceNucleicAcid.subunit.linkage';
  }

  /** FHIR JSON for this SubstanceNucleicAcidSubunitLinkage, typed as the plain `SubstanceNucleicAcidLinkage` data type. */
  override toJSON(): plainTypes.SubstanceNucleicAcidLinkage {
    return this.serialize() as plainTypes.SubstanceNucleicAcidLinkage;
  }

  /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified (0..1) */
  getConnectivity(): string | undefined {
    return this.connectivity;
  }

  /** Sets `connectivity`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setConnectivity(connectivity: string | undefined): this {
    return this.setFieldValue('connectivity', connectivity);
  }

  hasConnectivity(): boolean {
    return this.hasFieldValue('connectivity');
  }

  /** The element carrying the id and extensions of `connectivity`. Created when absent. */
  getConnectivityElement(): Element {
    if (this._connectivity === undefined) {
      this._connectivity = new Element();
    }
    return this._connectivity;
  }

  setConnectivityElement(connectivityElement: Element | undefined): this {
    this._connectivity = connectivityElement;
    return this;
  }

  /** Each linkage will be registered as a fragment and have an ID (0..1) Created when absent. */
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

  /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage (0..1) */
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

  /** Residues shall be captured as described in 5.3.6.8.3 (0..1) */
  getResidueSite(): string | undefined {
    return this.residueSite;
  }

  /** Sets `residueSite`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setResidueSite(residueSite: string | undefined): this {
    return this.setFieldValue('residueSite', residueSite);
  }

  hasResidueSite(): boolean {
    return this.hasFieldValue('residueSite');
  }

  /** The element carrying the id and extensions of `residueSite`. Created when absent. */
  getResidueSiteElement(): Element {
    if (this._residueSite === undefined) {
      this._residueSite = new Element();
    }
    return this._residueSite;
  }

  setResidueSiteElement(residueSiteElement: Element | undefined): this {
    this._residueSite = residueSiteElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SubstanceNucleicAcidSubunitLinkage',
  SubstanceNucleicAcidSubunitLinkage,
  false
);

/**
 * 5.3.6.8.1 Sugar ID (Mandatory)
 */
export class SubstanceNucleicAcidSubunitSugar extends BackboneElement {
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
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'residueSite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'residueSite', typeCode: 'string' }],
    },
  ];

  /** The Substance ID of the sugar or sugar-like component that make up the nucleotide (0..1) */
  identifier?: Identifier;

  /** The name of the sugar or sugar-like component that make up the nucleotide (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above (0..1) */
  residueSite?: string;
  /** Id and extensions of the primitive `residueSite`. */
  _residueSite?: Element;

  override fhirType(): string {
    return 'SubstanceNucleicAcid.subunit.sugar';
  }

  /** FHIR JSON for this SubstanceNucleicAcidSubunitSugar, typed as the plain `SubstanceNucleicAcidSugar` data type. */
  override toJSON(): plainTypes.SubstanceNucleicAcidSugar {
    return this.serialize() as plainTypes.SubstanceNucleicAcidSugar;
  }

  /** The Substance ID of the sugar or sugar-like component that make up the nucleotide (0..1) Created when absent. */
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

  /** The name of the sugar or sugar-like component that make up the nucleotide (0..1) */
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

  /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above (0..1) */
  getResidueSite(): string | undefined {
    return this.residueSite;
  }

  /** Sets `residueSite`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setResidueSite(residueSite: string | undefined): this {
    return this.setFieldValue('residueSite', residueSite);
  }

  hasResidueSite(): boolean {
    return this.hasFieldValue('residueSite');
  }

  /** The element carrying the id and extensions of `residueSite`. Created when absent. */
  getResidueSiteElement(): Element {
    if (this._residueSite === undefined) {
      this._residueSite = new Element();
    }
    return this._residueSite;
  }

  setResidueSiteElement(residueSiteElement: Element | undefined): this {
    this._residueSite = residueSiteElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SubstanceNucleicAcidSubunitSugar',
  SubstanceNucleicAcidSubunitSugar,
  false
);
