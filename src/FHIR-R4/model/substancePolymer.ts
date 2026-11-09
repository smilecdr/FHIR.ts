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
import { SubstanceAmount } from './substanceAmount';

/**
 * Todo.
 */
export class SubstancePolymer extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      maximum: Infinity,
      isList: true,
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

  /** Todo (0..1) */
  class?: CodeableConcept;

  /** Todo (0..1) */
  geometry?: CodeableConcept;

  /** Todo (0..*) */
  copolymerConnectivity?: CodeableConcept[];

  /** Todo (0..*) */
  modification?: string[];
  /** Id and extensions of the primitive `modification`. */
  _modification?: (Element | null)[];

  /** Todo (0..*) */
  monomerSet?: SubstancePolymerMonomerSet[];

  /** Todo (0..*) */
  repeat?: SubstancePolymerRepeat[];

  override fhirType(): string {
    return 'SubstancePolymer';
  }

  /** FHIR JSON for this SubstancePolymer, typed as the plain `SubstancePolymer` data type. */
  override toJSON(): plainTypes.SubstancePolymer {
    return this.serialize() as plainTypes.SubstancePolymer;
  }

  /** Todo (0..1) Created when absent. */
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

  /** Todo (0..1) Created when absent. */
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

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
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

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
  getModification(): string[] {
    if (this.modification === undefined) {
      this.modification = [];
    }
    return this.modification;
  }

  setModification(modification: string[] | undefined): this {
    return this.setFieldValue('modification', modification);
  }

  hasModification(): boolean {
    return this.hasFieldValue('modification');
  }

  /** Appends one value to `modification`. Throws a FhirModelError when it is not a valid FHIR string. */
  addModification(modification: string): this {
    return this.addFieldValue('modification', modification);
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

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
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

  /** Todo (0..1) */
  ratioType?: CodeableConcept;

  /** Todo (0..*) */
  startingMaterial?: SubstancePolymerMonomerSetStartingMaterial[];

  override fhirType(): string {
    return 'SubstancePolymer.monomerSet';
  }

  /** FHIR JSON for this SubstancePolymerMonomerSet, typed as the plain `SubstancePolymerMonomerSet` data type. */
  override toJSON(): plainTypes.SubstancePolymerMonomerSet {
    return this.serialize() as plainTypes.SubstancePolymerMonomerSet;
  }

  /** Todo (0..1) Created when absent. */
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

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
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
 * Todo
 */
export class SubstancePolymerMonomerSetStartingMaterial extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'material',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'material', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
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
      types: [{ jsonKey: 'amount', typeCode: 'SubstanceAmount' }],
    },
  ];

  /** Todo (0..1) */
  material?: CodeableConcept;

  /** Todo (0..1) */
  type?: CodeableConcept;

  /** Todo (0..1) */
  isDefining?: boolean;
  /** Id and extensions of the primitive `isDefining`. */
  _isDefining?: Element;

  /** Todo (0..1) */
  amount?: SubstanceAmount;

  override fhirType(): string {
    return 'SubstancePolymer.monomerSet.startingMaterial';
  }

  /** FHIR JSON for this SubstancePolymerMonomerSetStartingMaterial, typed as the plain `SubstancePolymerStartingMaterial` data type. */
  override toJSON(): plainTypes.SubstancePolymerStartingMaterial {
    return this.serialize() as plainTypes.SubstancePolymerStartingMaterial;
  }

  /** Todo (0..1) Created when absent. */
  getMaterial(): CodeableConcept {
    if (this.material === undefined) {
      this.material = new CodeableConcept();
    }
    return this.material;
  }

  setMaterial(material: CodeableConcept | undefined): this {
    return this.setFieldValue('material', material);
  }

  hasMaterial(): boolean {
    return this.hasFieldValue('material');
  }

  /** Todo (0..1) Created when absent. */
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

  /** Todo (0..1) */
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

  /** Todo (0..1) Created when absent. */
  getAmount(): SubstanceAmount {
    if (this.amount === undefined) {
      this.amount = new SubstanceAmount();
    }
    return this.amount;
  }

  setAmount(amount: SubstanceAmount | undefined): this {
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
 * Todo
 */
export class SubstancePolymerRepeat extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'numberOfUnits',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numberOfUnits', typeCode: 'integer' }],
    },
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

  /** Todo (0..1) */
  numberOfUnits?: number;
  /** Id and extensions of the primitive `numberOfUnits`. */
  _numberOfUnits?: Element;

  /** Todo (0..1) */
  averageMolecularFormula?: string;
  /** Id and extensions of the primitive `averageMolecularFormula`. */
  _averageMolecularFormula?: Element;

  /** Todo (0..1) */
  repeatUnitAmountType?: CodeableConcept;

  /** Todo (0..*) */
  repeatUnit?: SubstancePolymerRepeatRepeatUnit[];

  override fhirType(): string {
    return 'SubstancePolymer.repeat';
  }

  /** FHIR JSON for this SubstancePolymerRepeat, typed as the plain `SubstancePolymerRepeat` data type. */
  override toJSON(): plainTypes.SubstancePolymerRepeat {
    return this.serialize() as plainTypes.SubstancePolymerRepeat;
  }

  /** Todo (0..1) */
  getNumberOfUnits(): number | undefined {
    return this.numberOfUnits;
  }

  /** Sets `numberOfUnits`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setNumberOfUnits(numberOfUnits: number | undefined): this {
    return this.setFieldValue('numberOfUnits', numberOfUnits);
  }

  hasNumberOfUnits(): boolean {
    return this.hasFieldValue('numberOfUnits');
  }

  /** The element carrying the id and extensions of `numberOfUnits`. Created when absent. */
  getNumberOfUnitsElement(): Element {
    if (this._numberOfUnits === undefined) {
      this._numberOfUnits = new Element();
    }
    return this._numberOfUnits;
  }

  setNumberOfUnitsElement(numberOfUnitsElement: Element | undefined): this {
    this._numberOfUnits = numberOfUnitsElement;
    return this;
  }

  /** Todo (0..1) */
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

  /** Todo (0..1) Created when absent. */
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

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
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
 * Todo
 */
export class SubstancePolymerRepeatRepeatUnit extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'orientationOfPolymerisation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'orientationOfPolymerisation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'repeatUnit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'repeatUnit', typeCode: 'string' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'SubstanceAmount' }],
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

  /** Todo (0..1) */
  orientationOfPolymerisation?: CodeableConcept;

  /** Todo (0..1) */
  repeatUnit?: string;
  /** Id and extensions of the primitive `repeatUnit`. */
  _repeatUnit?: Element;

  /** Todo (0..1) */
  amount?: SubstanceAmount;

  /** Todo (0..*) */
  degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];

  /** Todo (0..*) */
  structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];

  override fhirType(): string {
    return 'SubstancePolymer.repeat.repeatUnit';
  }

  /** FHIR JSON for this SubstancePolymerRepeatRepeatUnit, typed as the plain `SubstancePolymerRepeatUnit` data type. */
  override toJSON(): plainTypes.SubstancePolymerRepeatUnit {
    return this.serialize() as plainTypes.SubstancePolymerRepeatUnit;
  }

  /** Todo (0..1) Created when absent. */
  getOrientationOfPolymerisation(): CodeableConcept {
    if (this.orientationOfPolymerisation === undefined) {
      this.orientationOfPolymerisation = new CodeableConcept();
    }
    return this.orientationOfPolymerisation;
  }

  setOrientationOfPolymerisation(orientationOfPolymerisation: CodeableConcept | undefined): this {
    return this.setFieldValue('orientationOfPolymerisation', orientationOfPolymerisation);
  }

  hasOrientationOfPolymerisation(): boolean {
    return this.hasFieldValue('orientationOfPolymerisation');
  }

  /** Todo (0..1) */
  getRepeatUnit(): string | undefined {
    return this.repeatUnit;
  }

  /** Sets `repeatUnit`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRepeatUnit(repeatUnit: string | undefined): this {
    return this.setFieldValue('repeatUnit', repeatUnit);
  }

  hasRepeatUnit(): boolean {
    return this.hasFieldValue('repeatUnit');
  }

  /** The element carrying the id and extensions of `repeatUnit`. Created when absent. */
  getRepeatUnitElement(): Element {
    if (this._repeatUnit === undefined) {
      this._repeatUnit = new Element();
    }
    return this._repeatUnit;
  }

  setRepeatUnitElement(repeatUnitElement: Element | undefined): this {
    this._repeatUnit = repeatUnitElement;
    return this;
  }

  /** Todo (0..1) Created when absent. */
  getAmount(): SubstanceAmount {
    if (this.amount === undefined) {
      this.amount = new SubstanceAmount();
    }
    return this.amount;
  }

  setAmount(amount: SubstanceAmount | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
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

  /** Todo (0..*) Never undefined; an empty list is created when absent. */
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
 * Todo
 */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'degree',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'degree', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'SubstanceAmount' }],
    },
  ];

  /** Todo (0..1) */
  degree?: CodeableConcept;

  /** Todo (0..1) */
  amount?: SubstanceAmount;

  override fhirType(): string {
    return 'SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation';
  }

  /** FHIR JSON for this SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation, typed as the plain `SubstancePolymerDegreeOfPolymerisation` data type. */
  override toJSON(): plainTypes.SubstancePolymerDegreeOfPolymerisation {
    return this.serialize() as plainTypes.SubstancePolymerDegreeOfPolymerisation;
  }

  /** Todo (0..1) Created when absent. */
  getDegree(): CodeableConcept {
    if (this.degree === undefined) {
      this.degree = new CodeableConcept();
    }
    return this.degree;
  }

  setDegree(degree: CodeableConcept | undefined): this {
    return this.setFieldValue('degree', degree);
  }

  hasDegree(): boolean {
    return this.hasFieldValue('degree');
  }

  /** Todo (0..1) Created when absent. */
  getAmount(): SubstanceAmount {
    if (this.amount === undefined) {
      this.amount = new SubstanceAmount();
    }
    return this.amount;
  }

  setAmount(amount: SubstanceAmount | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }
}

modelTypeRegistry.register(
  'SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation',
  SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  false
);

/**
 * Todo
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
      elementName: 'attachment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'attachment', typeCode: 'Attachment' }],
    },
  ];

  /** Todo (0..1) */
  type?: CodeableConcept;

  /** Todo (0..1) */
  representation?: string;
  /** Id and extensions of the primitive `representation`. */
  _representation?: Element;

  /** Todo (0..1) */
  attachment?: Attachment;

  override fhirType(): string {
    return 'SubstancePolymer.repeat.repeatUnit.structuralRepresentation';
  }

  /** FHIR JSON for this SubstancePolymerRepeatRepeatUnitStructuralRepresentation, typed as the plain `SubstancePolymerStructuralRepresentation` data type. */
  override toJSON(): plainTypes.SubstancePolymerStructuralRepresentation {
    return this.serialize() as plainTypes.SubstancePolymerStructuralRepresentation;
  }

  /** Todo (0..1) Created when absent. */
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

  /** Todo (0..1) */
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

  /** Todo (0..1) Created when absent. */
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
