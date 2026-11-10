/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export class Medication extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
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
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.MedicationStatusCodes },
      ],
    },
    {
      elementName: 'marketingAuthorizationHolder',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'marketingAuthorizationHolder',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'doseForm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseForm', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'totalVolume',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'totalVolume', typeCode: 'Quantity' }],
    },
    {
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'ingredient', typeCode: 'MedicationIngredient' }],
    },
    {
      elementName: 'batch',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'batch', typeCode: 'MedicationBatch' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'definition',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationKnowledge'],
        },
      ],
    },
  ];

  readonly resourceType = 'Medication';

  /** Business identifier for this medication (0..*) */
  identifier?: Identifier[];

  /** Codes that identify this medication (0..1) */
  code?: CodeableConcept;

  /** active | inactive | entered-in-error (0..1) */
  status?: valueSetCodes.MedicationStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Organization that has authorization to market medication (0..1) */
  marketingAuthorizationHolder?: Reference;

  /** powder | tablets | capsule + (0..1) */
  doseForm?: CodeableConcept;

  /** When the specified product code does not infer a package size, this is the specific amount of drug in the product (0..1) */
  totalVolume?: Quantity;

  /** Active or inactive ingredient (0..*) */
  ingredient?: MedicationIngredient[];

  /** Details about packaged medications (0..1) */
  batch?: MedicationBatch;

  /** Knowledge about this medication (0..1) */
  definition?: Reference;

  override fhirType(): string {
    return 'Medication';
  }

  /** FHIR JSON for this Medication, typed as the plain `Medication` data type. */
  override toJSON(): plainTypes.Medication {
    return this.serialize() as plainTypes.Medication;
  }

  /** Business identifier for this medication (0..*) Never undefined; an empty list is created when absent. */
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

  /** Codes that identify this medication (0..1) Created when absent. */
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

  /** active | inactive | entered-in-error (0..1) */
  getStatus(): valueSetCodes.MedicationStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationStatusCodes | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** Organization that has authorization to market medication (0..1) Created when absent. */
  getMarketingAuthorizationHolder(): Reference {
    if (this.marketingAuthorizationHolder === undefined) {
      this.marketingAuthorizationHolder = new Reference();
    }
    return this.marketingAuthorizationHolder;
  }

  setMarketingAuthorizationHolder(marketingAuthorizationHolder: Reference | undefined): this {
    return this.setFieldValue('marketingAuthorizationHolder', marketingAuthorizationHolder);
  }

  hasMarketingAuthorizationHolder(): boolean {
    return this.hasFieldValue('marketingAuthorizationHolder');
  }

  /** powder | tablets | capsule + (0..1) Created when absent. */
  getDoseForm(): CodeableConcept {
    if (this.doseForm === undefined) {
      this.doseForm = new CodeableConcept();
    }
    return this.doseForm;
  }

  setDoseForm(doseForm: CodeableConcept | undefined): this {
    return this.setFieldValue('doseForm', doseForm);
  }

  hasDoseForm(): boolean {
    return this.hasFieldValue('doseForm');
  }

  /** When the specified product code does not infer a package size, this is the specific amount of drug in the product (0..1) Created when absent. */
  getTotalVolume(): Quantity {
    if (this.totalVolume === undefined) {
      this.totalVolume = new Quantity();
    }
    return this.totalVolume;
  }

  setTotalVolume(totalVolume: Quantity | undefined): this {
    return this.setFieldValue('totalVolume', totalVolume);
  }

  hasTotalVolume(): boolean {
    return this.hasFieldValue('totalVolume');
  }

  /** Active or inactive ingredient (0..*) Never undefined; an empty list is created when absent. */
  getIngredient(): MedicationIngredient[] {
    if (this.ingredient === undefined) {
      this.ingredient = [];
    }
    return this.ingredient;
  }

  setIngredient(ingredient: MedicationIngredient[] | undefined): this {
    return this.setFieldValue('ingredient', ingredient);
  }

  hasIngredient(): boolean {
    return this.hasFieldValue('ingredient');
  }

  /** Appends a new, empty MedicationIngredient to `ingredient` and returns it so it can be filled in. */
  addIngredient(): MedicationIngredient;
  /** Appends the given MedicationIngredient to `ingredient` and returns this object for chaining. */
  addIngredient(medicationIngredient: MedicationIngredient): this;
  addIngredient(medicationIngredient?: MedicationIngredient): MedicationIngredient | this {
    if (medicationIngredient !== undefined) {
      return this.addFieldValue('ingredient', medicationIngredient);
    }
    const createdMedicationIngredient = new MedicationIngredient();
    this.addFieldValue('ingredient', createdMedicationIngredient);
    return createdMedicationIngredient;
  }

  /** The first MedicationIngredient of `ingredient`. One is added when the list is empty. */
  getIngredientFirstRep(): MedicationIngredient {
    const firstMedicationIngredient = this.getIngredient()[0];
    return firstMedicationIngredient === undefined
      ? this.addIngredient()
      : firstMedicationIngredient;
  }

  /** Details about packaged medications (0..1) Created when absent. */
  getBatch(): MedicationBatch {
    if (this.batch === undefined) {
      this.batch = new MedicationBatch();
    }
    return this.batch;
  }

  setBatch(batch: MedicationBatch | undefined): this {
    return this.setFieldValue('batch', batch);
  }

  hasBatch(): boolean {
    return this.hasFieldValue('batch');
  }

  /** Knowledge about this medication (0..1) Created when absent. */
  getDefinition(): Reference {
    if (this.definition === undefined) {
      this.definition = new Reference();
    }
    return this.definition;
  }

  setDefinition(definition: Reference | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }
}

modelTypeRegistry.register('Medication', Medication, true);

/** True when the value is a Medication model instance. */
export function isMedication(candidate: unknown): candidate is Medication {
  return candidate instanceof Medication;
}

/**
 * Active or inactive ingredient
 */
export class MedicationIngredient extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'item', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'isActive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isActive', typeCode: 'boolean' }],
    },
    {
      elementName: 'strength',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'strengthRatio', typeCode: 'Ratio' },
        { jsonKey: 'strengthCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'strengthQuantity', typeCode: 'Quantity' },
      ],
    },
  ];

  /** The ingredient (substance or medication) that the ingredient.strength relates to (1..1) */
  item?: CodeableReference;

  /** Active ingredient indicator (0..1) */
  isActive?: boolean;
  /** Id and extensions of the primitive `isActive`. */
  _isActive?: Element;

  /** Quantity of ingredient present (0..1) */
  strengthRatio?: Ratio;
  /** Quantity of ingredient present (0..1) */
  strengthCodeableConcept?: CodeableConcept;
  /** Quantity of ingredient present (0..1) */
  strengthQuantity?: Quantity;

  override fhirType(): string {
    return 'Medication.ingredient';
  }

  /** FHIR JSON for this MedicationIngredient, typed as the plain `MedicationIngredient` data type. */
  override toJSON(): plainTypes.MedicationIngredient {
    return this.serialize() as plainTypes.MedicationIngredient;
  }

  /** The ingredient (substance or medication) that the ingredient.strength relates to (1..1) Created when absent. */
  getItem(): CodeableReference {
    if (this.item === undefined) {
      this.item = new CodeableReference();
    }
    return this.item;
  }

  setItem(item: CodeableReference | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Active ingredient indicator (0..1) */
  getIsActive(): boolean | undefined {
    return this.isActive;
  }

  /** Sets `isActive`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsActive(isActive: boolean | undefined): this {
    return this.setFieldValue('isActive', isActive);
  }

  hasIsActive(): boolean {
    return this.hasFieldValue('isActive');
  }

  /** The element carrying the id and extensions of `isActive`. Created when absent. */
  getIsActiveElement(): Element {
    if (this._isActive === undefined) {
      this._isActive = new Element();
    }
    return this._isActive;
  }

  setIsActiveElement(isActiveElement: Element | undefined): this {
    this._isActive = isActiveElement;
    return this;
  }

  /** Quantity of ingredient present (0..1) Whichever type of `strength[x]` is set. */
  getStrength(): Ratio | CodeableConcept | Quantity | undefined {
    return this.getChoiceValue<Ratio | CodeableConcept | Quantity>('strength');
  }

  /** True when any type of `strength[x]` is set. */
  hasStrength(): boolean {
    return this.hasChoiceValue('strength');
  }

  getStrengthRatio(): Ratio | undefined {
    return this.strengthRatio;
  }

  /** Sets `strength[x]` as Ratio and clears every other type of it. */
  setStrengthRatio(strengthRatio: Ratio | undefined): this {
    return this.setFieldValue('strengthRatio', strengthRatio);
  }

  hasStrengthRatio(): boolean {
    return this.hasFieldValue('strengthRatio');
  }

  getStrengthCodeableConcept(): CodeableConcept | undefined {
    return this.strengthCodeableConcept;
  }

  /** Sets `strength[x]` as CodeableConcept and clears every other type of it. */
  setStrengthCodeableConcept(strengthCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('strengthCodeableConcept', strengthCodeableConcept);
  }

  hasStrengthCodeableConcept(): boolean {
    return this.hasFieldValue('strengthCodeableConcept');
  }

  getStrengthQuantity(): Quantity | undefined {
    return this.strengthQuantity;
  }

  /** Sets `strength[x]` as Quantity and clears every other type of it. */
  setStrengthQuantity(strengthQuantity: Quantity | undefined): this {
    return this.setFieldValue('strengthQuantity', strengthQuantity);
  }

  hasStrengthQuantity(): boolean {
    return this.hasFieldValue('strengthQuantity');
  }
}

modelTypeRegistry.register('MedicationIngredient', MedicationIngredient, false);

/**
 * Details about packaged medications
 */
export class MedicationBatch extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'lotNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lotNumber', typeCode: 'string' }],
    },
    {
      elementName: 'expirationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expirationDate', typeCode: 'dateTime' }],
    },
  ];

  /** Identifier assigned to batch (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;

  /** When batch will expire (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;

  override fhirType(): string {
    return 'Medication.batch';
  }

  /** FHIR JSON for this MedicationBatch, typed as the plain `MedicationBatch` data type. */
  override toJSON(): plainTypes.MedicationBatch {
    return this.serialize() as plainTypes.MedicationBatch;
  }

  /** Identifier assigned to batch (0..1) */
  getLotNumber(): string | undefined {
    return this.lotNumber;
  }

  /** Sets `lotNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLotNumber(lotNumber: string | undefined): this {
    return this.setFieldValue('lotNumber', lotNumber);
  }

  hasLotNumber(): boolean {
    return this.hasFieldValue('lotNumber');
  }

  /** The element carrying the id and extensions of `lotNumber`. Created when absent. */
  getLotNumberElement(): Element {
    if (this._lotNumber === undefined) {
      this._lotNumber = new Element();
    }
    return this._lotNumber;
  }

  setLotNumberElement(lotNumberElement: Element | undefined): this {
    this._lotNumber = lotNumberElement;
    return this;
  }

  /** When batch will expire (0..1) */
  getExpirationDate(): string | undefined {
    return this.expirationDate;
  }

  /** Sets `expirationDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setExpirationDate(expirationDate: string | undefined): this {
    return this.setFieldValue('expirationDate', expirationDate);
  }

  hasExpirationDate(): boolean {
    return this.hasFieldValue('expirationDate');
  }

  /** The element carrying the id and extensions of `expirationDate`. Created when absent. */
  getExpirationDateElement(): Element {
    if (this._expirationDate === undefined) {
      this._expirationDate = new Element();
    }
    return this._expirationDate;
  }

  setExpirationDateElement(expirationDateElement: Element | undefined): this {
    this._expirationDate = expirationDateElement;
    return this;
  }
}

modelTypeRegistry.register('MedicationBatch', MedicationBatch, false);
