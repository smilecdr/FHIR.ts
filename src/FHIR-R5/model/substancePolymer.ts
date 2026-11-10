/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';

/**
 * Properties of a substance specific to it being a polymer.
 */
export class SubstancePolymer extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'class',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'class', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'geometry',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'geometry', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'copolymerConnectivity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'copolymerConnectivity', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'modification',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'modification', typeCode: 'string' }],
    },
    {
      elementName: 'monomerSet',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'monomerSet', typeCode: 'SubstancePolymerMonomerSet' }],
    },
    {
      elementName: 'repeat',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'repeat', typeCode: 'SubstancePolymerRepeat' }],
    },
  ];

  readonly resourceType = 'SubstancePolymer';

  /** A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier (0..1) */
  identifier?: Identifier;

  /** Overall type of the polymer (0..1) */
  class?: CodeableConcept;

  /** Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic (0..1) */
  geometry?: CodeableConcept;

  /** Descrtibes the copolymer sequence type (polymer connectivity) (0..*) */
  copolymerConnectivity?: CodeableConcept[];

  /** Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder (0..1) */
  modification?: string;
  /** Id and extensions of the primitive `modification`. */
  _modification?: Element;

  /** Todo (0..*) */
  monomerSet?: SubstancePolymerMonomerSet[];

  /** Specifies and quantifies the repeated units and their configuration (0..*) */
  repeat?: SubstancePolymerRepeat[];

  override fhirType(): string {
    return 'SubstancePolymer';
  }

  /** FHIR JSON for this SubstancePolymer, typed as the plain `SubstancePolymer` data type. */
  override toJSON(): plainTypes.SubstancePolymer {
    return this.serialize() as plainTypes.SubstancePolymer;
  }

  /** A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier (0..1) Created when absent. */
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

  /** Overall type of the polymer (0..1) Created when absent. */
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

  /** Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic (0..1) Created when absent. */
  getGeometry(): CodeableConcept {
    if (this.geometry === undefined) {
      this.geometry = new CodeableConcept();
    }
    return this.geometry;
  }

  setGeometry(geometry: CodeableConcept | undefined): this {
    return this.setFieldValue('geometry', geometry);
  }

  hasGeometry(): boolean {
    return this.hasFieldValue('geometry');
  }

  /** Descrtibes the copolymer sequence type (polymer connectivity) (0..*) Never undefined; an empty list is created when absent. */
  getCopolymerConnectivity(): CodeableConcept[] {
    if (this.copolymerConnectivity === undefined) {
      this.copolymerConnectivity = [];
    }
    return this.copolymerConnectivity;
  }

  setCopolymerConnectivity(copolymerConnectivity: CodeableConcept[] | undefined): this {
    return this.setFieldValue('copolymerConnectivity', copolymerConnectivity);
  }

  hasCopolymerConnectivity(): boolean {
    return this.hasFieldValue('copolymerConnectivity');
  }

  /** Appends a new, empty CodeableConcept to `copolymerConnectivity` and returns it so it can be filled in. */
  addCopolymerConnectivity(): CodeableConcept;
  /** Appends the given CodeableConcept to `copolymerConnectivity` and returns this object for chaining. */
  addCopolymerConnectivity(codeableConcept: CodeableConcept): this;
  addCopolymerConnectivity(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('copolymerConnectivity', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('copolymerConnectivity', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `copolymerConnectivity`. One is added when the list is empty. */
  getCopolymerConnectivityFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCopolymerConnectivity()[0];
    return firstCodeableConcept === undefined
      ? this.addCopolymerConnectivity()
      : firstCodeableConcept;
  }

  /** Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder (0..1) */
  getModification(): string | undefined {
    return this.modification;
  }

  /** Sets `modification`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setModification(modification: string | undefined): this {
    return this.setFieldValue('modification', modification);
  }

  hasModification(): boolean {
    return this.hasFieldValue('modification');
  }

  /** The element carrying the id and extensions of `modification`. Created when absent. */
  getModificationElement(): Element {
    if (this._modification === undefined) {
      this._modification = new Element();
    }
    return this._modification;
  }

  setModificationElement(modificationElement: Element | undefined): this {
    this._modification = modificationElement;
    return this;
  }

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
  getMonomerSet(): SubstancePolymerMonomerSet[] {
    if (this.monomerSet === undefined) {
      this.monomerSet = [];
    }
    return this.monomerSet;
  }

  setMonomerSet(monomerSet: SubstancePolymerMonomerSet[] | undefined): this {
    return this.setFieldValue('monomerSet', monomerSet);
  }

  hasMonomerSet(): boolean {
    return this.hasFieldValue('monomerSet');
  }

  /** Appends a new, empty SubstancePolymerMonomerSet to `monomerSet` and returns it so it can be filled in. */
  addMonomerSet(): SubstancePolymerMonomerSet;
  /** Appends the given SubstancePolymerMonomerSet to `monomerSet` and returns this object for chaining. */
  addMonomerSet(substancePolymerMonomerSet: SubstancePolymerMonomerSet): this;
  addMonomerSet(
    substancePolymerMonomerSet?: SubstancePolymerMonomerSet
  ): SubstancePolymerMonomerSet | this {
    if (substancePolymerMonomerSet !== undefined) {
      return this.addFieldValue('monomerSet', substancePolymerMonomerSet);
    }
    const createdSubstancePolymerMonomerSet = new SubstancePolymerMonomerSet();
    this.addFieldValue('monomerSet', createdSubstancePolymerMonomerSet);
    return createdSubstancePolymerMonomerSet;
  }

  /** The first SubstancePolymerMonomerSet of `monomerSet`. One is added when the list is empty. */
  getMonomerSetFirstRep(): SubstancePolymerMonomerSet {
    const firstSubstancePolymerMonomerSet = this.getMonomerSet()[0];
    return firstSubstancePolymerMonomerSet === undefined
      ? this.addMonomerSet()
      : firstSubstancePolymerMonomerSet;
  }

  /** Specifies and quantifies the repeated units and their configuration (0..*) Never undefined; an empty list is created when absent. */
  getRepeat(): SubstancePolymerRepeat[] {
    if (this.repeat === undefined) {
      this.repeat = [];
    }
    return this.repeat;
  }

  setRepeat(repeat: SubstancePolymerRepeat[] | undefined): this {
    return this.setFieldValue('repeat', repeat);
  }

  hasRepeat(): boolean {
    return this.hasFieldValue('repeat');
  }

  /** Appends a new, empty SubstancePolymerRepeat to `repeat` and returns it so it can be filled in. */
  addRepeat(): SubstancePolymerRepeat;
  /** Appends the given SubstancePolymerRepeat to `repeat` and returns this object for chaining. */
  addRepeat(substancePolymerRepeat: SubstancePolymerRepeat): this;
  addRepeat(substancePolymerRepeat?: SubstancePolymerRepeat): SubstancePolymerRepeat | this {
    if (substancePolymerRepeat !== undefined) {
      return this.addFieldValue('repeat', substancePolymerRepeat);
    }
    const createdSubstancePolymerRepeat = new SubstancePolymerRepeat();
    this.addFieldValue('repeat', createdSubstancePolymerRepeat);
    return createdSubstancePolymerRepeat;
  }

  /** The first SubstancePolymerRepeat of `repeat`. One is added when the list is empty. */
  getRepeatFirstRep(): SubstancePolymerRepeat {
    const firstSubstancePolymerRepeat = this.getRepeat()[0];
    return firstSubstancePolymerRepeat === undefined
      ? this.addRepeat()
      : firstSubstancePolymerRepeat;
  }
}

modelTypeRegistry.register('SubstancePolymer', SubstancePolymer, true);

/** True when the value is a SubstancePolymer model instance. */
export function isSubstancePolymer(candidate: unknown): candidate is SubstancePolymer {
  return candidate instanceof SubstancePolymer;
}

/**
 * Todo
 */
export class SubstancePolymerMonomerSet extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'ratioType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ratioType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'startingMaterial',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'startingMaterial', typeCode: 'SubstancePolymerMonomerSetStartingMaterial' },
      ],
    },
  ];

  /** Captures the type of ratio to the entire polymer, e.g. Monomer/Polymer ratio, SRU/Polymer Ratio (0..1) */
  ratioType?: CodeableConcept;

  /** The starting materials - monomer(s) used in the synthesis of the polymer (0..*) */
  startingMaterial?: SubstancePolymerMonomerSetStartingMaterial[];

  override fhirType(): string {
    return 'SubstancePolymer.monomerSet';
  }

  /** FHIR JSON for this SubstancePolymerMonomerSet, typed as the plain `SubstancePolymerMonomerSet` data type. */
  override toJSON(): plainTypes.SubstancePolymerMonomerSet {
    return this.serialize() as plainTypes.SubstancePolymerMonomerSet;
  }

  /** Captures the type of ratio to the entire polymer, e.g. Monomer/Polymer ratio, SRU/Polymer Ratio (0..1) Created when absent. */
  getRatioType(): CodeableConcept {
    if (this.ratioType === undefined) {
      this.ratioType = new CodeableConcept();
    }
    return this.ratioType;
  }

  setRatioType(ratioType: CodeableConcept | undefined): this {
    return this.setFieldValue('ratioType', ratioType);
  }

  hasRatioType(): boolean {
    return this.hasFieldValue('ratioType');
  }

  /** The starting materials - monomer(s) used in the synthesis of the polymer (0..*) Never undefined; an empty list is created when absent. */
  getStartingMaterial(): SubstancePolymerMonomerSetStartingMaterial[] {
    if (this.startingMaterial === undefined) {
      this.startingMaterial = [];
    }
    return this.startingMaterial;
  }

  setStartingMaterial(
    startingMaterial: SubstancePolymerMonomerSetStartingMaterial[] | undefined
  ): this {
    return this.setFieldValue('startingMaterial', startingMaterial);
  }

  hasStartingMaterial(): boolean {
    return this.hasFieldValue('startingMaterial');
  }

  /** Appends a new, empty SubstancePolymerMonomerSetStartingMaterial to `startingMaterial` and returns it so it can be filled in. */
  addStartingMaterial(): SubstancePolymerMonomerSetStartingMaterial;
  /** Appends the given SubstancePolymerMonomerSetStartingMaterial to `startingMaterial` and returns this object for chaining. */
  addStartingMaterial(
    substancePolymerMonomerSetStartingMaterial: SubstancePolymerMonomerSetStartingMaterial
  ): this;
  addStartingMaterial(
    substancePolymerMonomerSetStartingMaterial?: SubstancePolymerMonomerSetStartingMaterial
  ): SubstancePolymerMonomerSetStartingMaterial | this {
    if (substancePolymerMonomerSetStartingMaterial !== undefined) {
      return this.addFieldValue('startingMaterial', substancePolymerMonomerSetStartingMaterial);
    }
    const createdSubstancePolymerMonomerSetStartingMaterial =
      new SubstancePolymerMonomerSetStartingMaterial();
    this.addFieldValue('startingMaterial', createdSubstancePolymerMonomerSetStartingMaterial);
    return createdSubstancePolymerMonomerSetStartingMaterial;
  }

  /** The first SubstancePolymerMonomerSetStartingMaterial of `startingMaterial`. One is added when the list is empty. */
  getStartingMaterialFirstRep(): SubstancePolymerMonomerSetStartingMaterial {
    const firstSubstancePolymerMonomerSetStartingMaterial = this.getStartingMaterial()[0];
    return firstSubstancePolymerMonomerSetStartingMaterial === undefined
      ? this.addStartingMaterial()
      : firstSubstancePolymerMonomerSetStartingMaterial;
  }
}

modelTypeRegistry.register('SubstancePolymerMonomerSet', SubstancePolymerMonomerSet, false);

/**
 * The starting materials - monomer(s) used in the synthesis of the polymer
 */
export class SubstancePolymerMonomerSetStartingMaterial extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
  ];

  /** The type of substance for this starting material (0..1) */
  code?: CodeableConcept;

  /** Substance high level category, e.g. chemical substance (0..1) */
  category?: CodeableConcept;

  /** Used to specify whether the attribute described is a defining element for the unique identification of the polymer (0..1) */
  isDefining?: boolean;
  /** Id and extensions of the primitive `isDefining`. */
  _isDefining?: Element;

  /** A percentage (0..1) */
  amount?: Quantity;

  override fhirType(): string {
    return 'SubstancePolymer.monomerSet.startingMaterial';
  }

  /** FHIR JSON for this SubstancePolymerMonomerSetStartingMaterial, typed as the plain `SubstancePolymerStartingMaterial` data type. */
  override toJSON(): plainTypes.SubstancePolymerStartingMaterial {
    return this.serialize() as plainTypes.SubstancePolymerStartingMaterial;
  }

  /** The type of substance for this starting material (0..1) Created when absent. */
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

  /** Substance high level category, e.g. chemical substance (0..1) Created when absent. */
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

  /** Used to specify whether the attribute described is a defining element for the unique identification of the polymer (0..1) */
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

  /** A percentage (0..1) Created when absent. */
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
  'SubstancePolymerMonomerSetStartingMaterial',
  SubstancePolymerMonomerSetStartingMaterial,
  false
);

/**
 * Specifies and quantifies the repeated units and their configuration
 */
export class SubstancePolymerRepeat extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'averageMolecularFormula',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'averageMolecularFormula', typeCode: 'string' }],
    },
    {
      elementName: 'repeatUnitAmountType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'repeatUnitAmountType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'repeatUnit',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'repeatUnit', typeCode: 'SubstancePolymerRepeatRepeatUnit' }],
    },
  ];

  /** A representation of an (average) molecular formula from a polymer (0..1) */
  averageMolecularFormula?: string;
  /** Id and extensions of the primitive `averageMolecularFormula`. */
  _averageMolecularFormula?: Element;

  /** How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average) (0..1) */
  repeatUnitAmountType?: CodeableConcept;

  /** An SRU - Structural Repeat Unit (0..*) */
  repeatUnit?: SubstancePolymerRepeatRepeatUnit[];

  override fhirType(): string {
    return 'SubstancePolymer.repeat';
  }

  /** FHIR JSON for this SubstancePolymerRepeat, typed as the plain `SubstancePolymerRepeat` data type. */
  override toJSON(): plainTypes.SubstancePolymerRepeat {
    return this.serialize() as plainTypes.SubstancePolymerRepeat;
  }

  /** A representation of an (average) molecular formula from a polymer (0..1) */
  getAverageMolecularFormula(): string | undefined {
    return this.averageMolecularFormula;
  }

  /** Sets `averageMolecularFormula`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAverageMolecularFormula(averageMolecularFormula: string | undefined): this {
    return this.setFieldValue('averageMolecularFormula', averageMolecularFormula);
  }

  hasAverageMolecularFormula(): boolean {
    return this.hasFieldValue('averageMolecularFormula');
  }

  /** The element carrying the id and extensions of `averageMolecularFormula`. Created when absent. */
  getAverageMolecularFormulaElement(): Element {
    if (this._averageMolecularFormula === undefined) {
      this._averageMolecularFormula = new Element();
    }
    return this._averageMolecularFormula;
  }

  setAverageMolecularFormulaElement(averageMolecularFormulaElement: Element | undefined): this {
    this._averageMolecularFormula = averageMolecularFormulaElement;
    return this;
  }

  /** How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average) (0..1) Created when absent. */
  getRepeatUnitAmountType(): CodeableConcept {
    if (this.repeatUnitAmountType === undefined) {
      this.repeatUnitAmountType = new CodeableConcept();
    }
    return this.repeatUnitAmountType;
  }

  setRepeatUnitAmountType(repeatUnitAmountType: CodeableConcept | undefined): this {
    return this.setFieldValue('repeatUnitAmountType', repeatUnitAmountType);
  }

  hasRepeatUnitAmountType(): boolean {
    return this.hasFieldValue('repeatUnitAmountType');
  }

  /** An SRU - Structural Repeat Unit (0..*) Never undefined; an empty list is created when absent. */
  getRepeatUnit(): SubstancePolymerRepeatRepeatUnit[] {
    if (this.repeatUnit === undefined) {
      this.repeatUnit = [];
    }
    return this.repeatUnit;
  }

  setRepeatUnit(repeatUnit: SubstancePolymerRepeatRepeatUnit[] | undefined): this {
    return this.setFieldValue('repeatUnit', repeatUnit);
  }

  hasRepeatUnit(): boolean {
    return this.hasFieldValue('repeatUnit');
  }

  /** Appends a new, empty SubstancePolymerRepeatRepeatUnit to `repeatUnit` and returns it so it can be filled in. */
  addRepeatUnit(): SubstancePolymerRepeatRepeatUnit;
  /** Appends the given SubstancePolymerRepeatRepeatUnit to `repeatUnit` and returns this object for chaining. */
  addRepeatUnit(substancePolymerRepeatRepeatUnit: SubstancePolymerRepeatRepeatUnit): this;
  addRepeatUnit(
    substancePolymerRepeatRepeatUnit?: SubstancePolymerRepeatRepeatUnit
  ): SubstancePolymerRepeatRepeatUnit | this {
    if (substancePolymerRepeatRepeatUnit !== undefined) {
      return this.addFieldValue('repeatUnit', substancePolymerRepeatRepeatUnit);
    }
    const createdSubstancePolymerRepeatRepeatUnit = new SubstancePolymerRepeatRepeatUnit();
    this.addFieldValue('repeatUnit', createdSubstancePolymerRepeatRepeatUnit);
    return createdSubstancePolymerRepeatRepeatUnit;
  }

  /** The first SubstancePolymerRepeatRepeatUnit of `repeatUnit`. One is added when the list is empty. */
  getRepeatUnitFirstRep(): SubstancePolymerRepeatRepeatUnit {
    const firstSubstancePolymerRepeatRepeatUnit = this.getRepeatUnit()[0];
    return firstSubstancePolymerRepeatRepeatUnit === undefined
      ? this.addRepeatUnit()
      : firstSubstancePolymerRepeatRepeatUnit;
  }
}

modelTypeRegistry.register('SubstancePolymerRepeat', SubstancePolymerRepeat, false);

/**
 * An SRU - Structural Repeat Unit
 */
export class SubstancePolymerRepeatRepeatUnit extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'unit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unit', typeCode: 'string' }],
    },
    {
      elementName: 'orientation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'orientation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'integer' }],
    },
    {
      elementName: 'degreeOfPolymerisation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'degreeOfPolymerisation',
          typeCode: 'SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation',
        },
      ],
    },
    {
      elementName: 'structuralRepresentation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'structuralRepresentation',
          typeCode: 'SubstancePolymerRepeatRepeatUnitStructuralRepresentation',
        },
      ],
    },
  ];

  /** Structural repeat units are essential elements for defining polymers (0..1) */
  unit?: string;
  /** Id and extensions of the primitive `unit`. */
  _unit?: Element;

  /** The orientation of the polymerisation, e.g. head-tail, head-head, random (0..1) */
  orientation?: CodeableConcept;

  /** Number of repeats of this unit (0..1) */
  amount?: number;
  /** Id and extensions of the primitive `amount`. */
  _amount?: Element;

  /** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described (0..*) */
  degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];

  /** A graphical structure for this SRU (0..*) */
  structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];

  override fhirType(): string {
    return 'SubstancePolymer.repeat.repeatUnit';
  }

  /** FHIR JSON for this SubstancePolymerRepeatRepeatUnit, typed as the plain `SubstancePolymerRepeatUnit` data type. */
  override toJSON(): plainTypes.SubstancePolymerRepeatUnit {
    return this.serialize() as plainTypes.SubstancePolymerRepeatUnit;
  }

  /** Structural repeat units are essential elements for defining polymers (0..1) */
  getUnit(): string | undefined {
    return this.unit;
  }

  /** Sets `unit`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setUnit(unit: string | undefined): this {
    return this.setFieldValue('unit', unit);
  }

  hasUnit(): boolean {
    return this.hasFieldValue('unit');
  }

  /** The element carrying the id and extensions of `unit`. Created when absent. */
  getUnitElement(): Element {
    if (this._unit === undefined) {
      this._unit = new Element();
    }
    return this._unit;
  }

  setUnitElement(unitElement: Element | undefined): this {
    this._unit = unitElement;
    return this;
  }

  /** The orientation of the polymerisation, e.g. head-tail, head-head, random (0..1) Created when absent. */
  getOrientation(): CodeableConcept {
    if (this.orientation === undefined) {
      this.orientation = new CodeableConcept();
    }
    return this.orientation;
  }

  setOrientation(orientation: CodeableConcept | undefined): this {
    return this.setFieldValue('orientation', orientation);
  }

  hasOrientation(): boolean {
    return this.hasFieldValue('orientation');
  }

  /** Number of repeats of this unit (0..1) */
  getAmount(): number | undefined {
    return this.amount;
  }

  /** Sets `amount`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setAmount(amount: number | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** The element carrying the id and extensions of `amount`. Created when absent. */
  getAmountElement(): Element {
    if (this._amount === undefined) {
      this._amount = new Element();
    }
    return this._amount;
  }

  setAmountElement(amountElement: Element | undefined): this {
    this._amount = amountElement;
    return this;
  }

  /** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described (0..*) Never undefined; an empty list is created when absent. */
  getDegreeOfPolymerisation(): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[] {
    if (this.degreeOfPolymerisation === undefined) {
      this.degreeOfPolymerisation = [];
    }
    return this.degreeOfPolymerisation;
  }

  setDegreeOfPolymerisation(
    degreeOfPolymerisation: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[] | undefined
  ): this {
    return this.setFieldValue('degreeOfPolymerisation', degreeOfPolymerisation);
  }

  hasDegreeOfPolymerisation(): boolean {
    return this.hasFieldValue('degreeOfPolymerisation');
  }

  /** Appends a new, empty SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation to `degreeOfPolymerisation` and returns it so it can be filled in. */
  addDegreeOfPolymerisation(): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation;
  /** Appends the given SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation to `degreeOfPolymerisation` and returns this object for chaining. */
  addDegreeOfPolymerisation(
    substancePolymerRepeatRepeatUnitDegreeOfPolymerisation: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation
  ): this;
  addDegreeOfPolymerisation(
    substancePolymerRepeatRepeatUnitDegreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation
  ): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation | this {
    if (substancePolymerRepeatRepeatUnitDegreeOfPolymerisation !== undefined) {
      return this.addFieldValue(
        'degreeOfPolymerisation',
        substancePolymerRepeatRepeatUnitDegreeOfPolymerisation
      );
    }
    const createdSubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation =
      new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation();
    this.addFieldValue(
      'degreeOfPolymerisation',
      createdSubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation
    );
    return createdSubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation;
  }

  /** The first SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation of `degreeOfPolymerisation`. One is added when the list is empty. */
  getDegreeOfPolymerisationFirstRep(): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    const firstSubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation =
      this.getDegreeOfPolymerisation()[0];
    return firstSubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation === undefined
      ? this.addDegreeOfPolymerisation()
      : firstSubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation;
  }

  /** A graphical structure for this SRU (0..*) Never undefined; an empty list is created when absent. */
  getStructuralRepresentation(): SubstancePolymerRepeatRepeatUnitStructuralRepresentation[] {
    if (this.structuralRepresentation === undefined) {
      this.structuralRepresentation = [];
    }
    return this.structuralRepresentation;
  }

  setStructuralRepresentation(
    structuralRepresentation: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[] | undefined
  ): this {
    return this.setFieldValue('structuralRepresentation', structuralRepresentation);
  }

  hasStructuralRepresentation(): boolean {
    return this.hasFieldValue('structuralRepresentation');
  }

  /** Appends a new, empty SubstancePolymerRepeatRepeatUnitStructuralRepresentation to `structuralRepresentation` and returns it so it can be filled in. */
  addStructuralRepresentation(): SubstancePolymerRepeatRepeatUnitStructuralRepresentation;
  /** Appends the given SubstancePolymerRepeatRepeatUnitStructuralRepresentation to `structuralRepresentation` and returns this object for chaining. */
  addStructuralRepresentation(
    substancePolymerRepeatRepeatUnitStructuralRepresentation: SubstancePolymerRepeatRepeatUnitStructuralRepresentation
  ): this;
  addStructuralRepresentation(
    substancePolymerRepeatRepeatUnitStructuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation
  ): SubstancePolymerRepeatRepeatUnitStructuralRepresentation | this {
    if (substancePolymerRepeatRepeatUnitStructuralRepresentation !== undefined) {
      return this.addFieldValue(
        'structuralRepresentation',
        substancePolymerRepeatRepeatUnitStructuralRepresentation
      );
    }
    const createdSubstancePolymerRepeatRepeatUnitStructuralRepresentation =
      new SubstancePolymerRepeatRepeatUnitStructuralRepresentation();
    this.addFieldValue(
      'structuralRepresentation',
      createdSubstancePolymerRepeatRepeatUnitStructuralRepresentation
    );
    return createdSubstancePolymerRepeatRepeatUnitStructuralRepresentation;
  }

  /** The first SubstancePolymerRepeatRepeatUnitStructuralRepresentation of `structuralRepresentation`. One is added when the list is empty. */
  getStructuralRepresentationFirstRep(): SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    const firstSubstancePolymerRepeatRepeatUnitStructuralRepresentation =
      this.getStructuralRepresentation()[0];
    return firstSubstancePolymerRepeatRepeatUnitStructuralRepresentation === undefined
      ? this.addStructuralRepresentation()
      : firstSubstancePolymerRepeatRepeatUnitStructuralRepresentation;
  }
}

modelTypeRegistry.register(
  'SubstancePolymerRepeatRepeatUnit',
  SubstancePolymerRepeatRepeatUnit,
  false
);

/**
 * Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described
 */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'average',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'average', typeCode: 'integer' }],
    },
    {
      elementName: 'low',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'low', typeCode: 'integer' }],
    },
    {
      elementName: 'high',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'high', typeCode: 'integer' }],
    },
  ];

  /** The type of the degree of polymerisation shall be described, e.g. SRU/Polymer Ratio (0..1) */
  type?: CodeableConcept;

  /** An average amount of polymerisation (0..1) */
  average?: number;
  /** Id and extensions of the primitive `average`. */
  _average?: Element;

  /** A low expected limit of the amount (0..1) */
  low?: number;
  /** Id and extensions of the primitive `low`. */
  _low?: Element;

  /** A high expected limit of the amount (0..1) */
  high?: number;
  /** Id and extensions of the primitive `high`. */
  _high?: Element;

  override fhirType(): string {
    return 'SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation';
  }

  /** FHIR JSON for this SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation, typed as the plain `SubstancePolymerDegreeOfPolymerisation` data type. */
  override toJSON(): plainTypes.SubstancePolymerDegreeOfPolymerisation {
    return this.serialize() as plainTypes.SubstancePolymerDegreeOfPolymerisation;
  }

  /** The type of the degree of polymerisation shall be described, e.g. SRU/Polymer Ratio (0..1) Created when absent. */
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

  /** An average amount of polymerisation (0..1) */
  getAverage(): number | undefined {
    return this.average;
  }

  /** Sets `average`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setAverage(average: number | undefined): this {
    return this.setFieldValue('average', average);
  }

  hasAverage(): boolean {
    return this.hasFieldValue('average');
  }

  /** The element carrying the id and extensions of `average`. Created when absent. */
  getAverageElement(): Element {
    if (this._average === undefined) {
      this._average = new Element();
    }
    return this._average;
  }

  setAverageElement(averageElement: Element | undefined): this {
    this._average = averageElement;
    return this;
  }

  /** A low expected limit of the amount (0..1) */
  getLow(): number | undefined {
    return this.low;
  }

  /** Sets `low`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setLow(low: number | undefined): this {
    return this.setFieldValue('low', low);
  }

  hasLow(): boolean {
    return this.hasFieldValue('low');
  }

  /** The element carrying the id and extensions of `low`. Created when absent. */
  getLowElement(): Element {
    if (this._low === undefined) {
      this._low = new Element();
    }
    return this._low;
  }

  setLowElement(lowElement: Element | undefined): this {
    this._low = lowElement;
    return this;
  }

  /** A high expected limit of the amount (0..1) */
  getHigh(): number | undefined {
    return this.high;
  }

  /** Sets `high`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setHigh(high: number | undefined): this {
    return this.setFieldValue('high', high);
  }

  hasHigh(): boolean {
    return this.hasFieldValue('high');
  }

  /** The element carrying the id and extensions of `high`. Created when absent. */
  getHighElement(): Element {
    if (this._high === undefined) {
      this._high = new Element();
    }
    return this._high;
  }

  setHighElement(highElement: Element | undefined): this {
    this._high = highElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation',
  SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  false
);

/**
 * A graphical structure for this SRU
 */
export class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends BackboneElement {
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
      elementName: 'attachment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'attachment', typeCode: 'Attachment' }],
    },
  ];

  /** The type of structure (e.g. Full, Partial, Representative) (0..1) */
  type?: CodeableConcept;

  /** The structural representation as text string in a standard format e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF (0..1) */
  representation?: string;
  /** Id and extensions of the primitive `representation`. */
  _representation?: Element;

  /** The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF (0..1) */
  format?: CodeableConcept;

  /** An attached file with the structural representation (0..1) */
  attachment?: Attachment;

  override fhirType(): string {
    return 'SubstancePolymer.repeat.repeatUnit.structuralRepresentation';
  }

  /** FHIR JSON for this SubstancePolymerRepeatRepeatUnitStructuralRepresentation, typed as the plain `SubstancePolymerStructuralRepresentation` data type. */
  override toJSON(): plainTypes.SubstancePolymerStructuralRepresentation {
    return this.serialize() as plainTypes.SubstancePolymerStructuralRepresentation;
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

  /** The structural representation as text string in a standard format e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF (0..1) */
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

  /** The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF (0..1) Created when absent. */
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
  'SubstancePolymerRepeatRepeatUnitStructuralRepresentation',
  SubstancePolymerRepeatRepeatUnitStructuralRepresentation,
  false
);
