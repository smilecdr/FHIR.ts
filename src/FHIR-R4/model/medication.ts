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
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
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
      elementName: 'manufacturer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'manufacturer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'form',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'form', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Ratio' }],
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

  /** Manufacturer of the item (0..1) */
  manufacturer?: Reference;

  /** powder | tablets | capsule + (0..1) */
  form?: CodeableConcept;

  /** Amount of drug in package (0..1) */
  amount?: Ratio;

  /** Active or inactive ingredient (0..*) */
  ingredient?: MedicationIngredient[];

  /** Details about packaged medications (0..1) */
  batch?: MedicationBatch;

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

  /** Manufacturer of the item (0..1) Created when absent. */
  getManufacturer(): Reference {
    if (this.manufacturer === undefined) {
      this.manufacturer = new Reference();
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Reference | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }

  /** powder | tablets | capsule + (0..1) Created when absent. */
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

  /** Amount of drug in package (0..1) Created when absent. */
  getAmount(): Ratio {
    if (this.amount === undefined) {
      this.amount = new Ratio();
    }
    return this.amount;
  }

  setAmount(amount: Ratio | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
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
      types: [
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'itemReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Medication', 'Substance'],
        },
      ],
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
      types: [{ jsonKey: 'strength', typeCode: 'Ratio' }],
    },
  ];

  /** The actual ingredient or content (1..1) */
  itemCodeableConcept?: CodeableConcept;
  /** The actual ingredient or content (1..1) */
  itemReference?: Reference;

  /** Active ingredient indicator (0..1) */
  isActive?: boolean;
  /** Id and extensions of the primitive `isActive`. */
  _isActive?: Element;

  /** Quantity of ingredient present (0..1) */
  strength?: Ratio;

  override fhirType(): string {
    return 'Medication.ingredient';
  }

  /** FHIR JSON for this MedicationIngredient, typed as the plain `MedicationIngredient` data type. */
  override toJSON(): plainTypes.MedicationIngredient {
    return this.serialize() as plainTypes.MedicationIngredient;
  }

  /** The actual ingredient or content (1..1) Whichever type of `item[x]` is set. */
  getItem(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('item');
  }

  /** True when any type of `item[x]` is set. */
  hasItem(): boolean {
    return this.hasChoiceValue('item');
  }

  getItemCodeableConcept(): CodeableConcept | undefined {
    return this.itemCodeableConcept;
  }

  /** Sets `item[x]` as CodeableConcept and clears every other type of it. */
  setItemCodeableConcept(itemCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('itemCodeableConcept', itemCodeableConcept);
  }

  hasItemCodeableConcept(): boolean {
    return this.hasFieldValue('itemCodeableConcept');
  }

  getItemReference(): Reference | undefined {
    return this.itemReference;
  }

  /** Sets `item[x]` as Reference and clears every other type of it. */
  setItemReference(itemReference: Reference | undefined): this {
    return this.setFieldValue('itemReference', itemReference);
  }

  hasItemReference(): boolean {
    return this.hasFieldValue('itemReference');
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

  /** Quantity of ingredient present (0..1) Created when absent. */
  getStrength(): Ratio {
    if (this.strength === undefined) {
      this.strength = new Ratio();
    }
    return this.strength;
  }

  setStrength(strength: Ratio | undefined): this {
    return this.setFieldValue('strength', strength);
  }

  hasStrength(): boolean {
    return this.hasFieldValue('strength');
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
