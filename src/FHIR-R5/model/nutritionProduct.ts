/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
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
 * A food or supplement that is consumed by patients.
 */
export class NutritionProduct extends DomainResource {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.NutritionProductStatus },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
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
      elementName: 'nutrient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'nutrient', typeCode: 'NutritionProductNutrient' }],
    },
    {
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'ingredient', typeCode: 'NutritionProductIngredient' }],
    },
    {
      elementName: 'knownAllergen',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'knownAllergen', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'characteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'NutritionProductCharacteristic' }],
    },
    {
      elementName: 'instance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instance', typeCode: 'NutritionProductInstance' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'NutritionProduct';

  /** A code that can identify the detailed nutrients and ingredients in a specific food product (0..1) */
  code?: CodeableConcept;

  /** active | inactive | entered-in-error (1..1) */
  status?: valueSetCodes.NutritionProductStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Broad product groups or categories used to classify the product, such as Legume and Legume Products, Beverages, or Beef Products (0..*) */
  category?: CodeableConcept[];

  /** Manufacturer, representative or officially responsible for the product (0..*) */
  manufacturer?: Reference[];

  /** The product's nutritional information expressed by the nutrients (0..*) */
  nutrient?: NutritionProductNutrient[];

  /** Ingredients contained in this product (0..*) */
  ingredient?: NutritionProductIngredient[];

  /** Known or suspected allergens that are a part of this product (0..*) */
  knownAllergen?: CodeableReference[];

  /** Specifies descriptive properties of the nutrition product (0..*) */
  characteristic?: NutritionProductCharacteristic[];

  /** One or several physical instances or occurrences of the nutrition product (0..*) */
  instance?: NutritionProductInstance[];

  /** Comments made about the product (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'NutritionProduct';
  }

  /** FHIR JSON for this NutritionProduct, typed as the plain `NutritionProduct` data type. */
  override toJSON(): plainTypes.NutritionProduct {
    return this.serialize() as plainTypes.NutritionProduct;
  }

  /** A code that can identify the detailed nutrients and ingredients in a specific food product (0..1) Created when absent. */
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

  /** active | inactive | entered-in-error (1..1) */
  getStatus(): valueSetCodes.NutritionProductStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.NutritionProductStatus | undefined): this {
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

  /** Broad product groups or categories used to classify the product, such as Legume and Legume Products, Beverages, or Beef Products (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** Manufacturer, representative or officially responsible for the product (0..*) Never undefined; an empty list is created when absent. */
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

  /** The product's nutritional information expressed by the nutrients (0..*) Never undefined; an empty list is created when absent. */
  getNutrient(): NutritionProductNutrient[] {
    if (this.nutrient === undefined) {
      this.nutrient = [];
    }
    return this.nutrient;
  }

  setNutrient(nutrient: NutritionProductNutrient[] | undefined): this {
    return this.setFieldValue('nutrient', nutrient);
  }

  hasNutrient(): boolean {
    return this.hasFieldValue('nutrient');
  }

  /** Appends a new, empty NutritionProductNutrient to `nutrient` and returns it so it can be filled in. */
  addNutrient(): NutritionProductNutrient;
  /** Appends the given NutritionProductNutrient to `nutrient` and returns this object for chaining. */
  addNutrient(nutritionProductNutrient: NutritionProductNutrient): this;
  addNutrient(
    nutritionProductNutrient?: NutritionProductNutrient
  ): NutritionProductNutrient | this {
    if (nutritionProductNutrient !== undefined) {
      return this.addFieldValue('nutrient', nutritionProductNutrient);
    }
    const createdNutritionProductNutrient = new NutritionProductNutrient();
    this.addFieldValue('nutrient', createdNutritionProductNutrient);
    return createdNutritionProductNutrient;
  }

  /** The first NutritionProductNutrient of `nutrient`. One is added when the list is empty. */
  getNutrientFirstRep(): NutritionProductNutrient {
    const firstNutritionProductNutrient = this.getNutrient()[0];
    return firstNutritionProductNutrient === undefined
      ? this.addNutrient()
      : firstNutritionProductNutrient;
  }

  /** Ingredients contained in this product (0..*) Never undefined; an empty list is created when absent. */
  getIngredient(): NutritionProductIngredient[] {
    if (this.ingredient === undefined) {
      this.ingredient = [];
    }
    return this.ingredient;
  }

  setIngredient(ingredient: NutritionProductIngredient[] | undefined): this {
    return this.setFieldValue('ingredient', ingredient);
  }

  hasIngredient(): boolean {
    return this.hasFieldValue('ingredient');
  }

  /** Appends a new, empty NutritionProductIngredient to `ingredient` and returns it so it can be filled in. */
  addIngredient(): NutritionProductIngredient;
  /** Appends the given NutritionProductIngredient to `ingredient` and returns this object for chaining. */
  addIngredient(nutritionProductIngredient: NutritionProductIngredient): this;
  addIngredient(
    nutritionProductIngredient?: NutritionProductIngredient
  ): NutritionProductIngredient | this {
    if (nutritionProductIngredient !== undefined) {
      return this.addFieldValue('ingredient', nutritionProductIngredient);
    }
    const createdNutritionProductIngredient = new NutritionProductIngredient();
    this.addFieldValue('ingredient', createdNutritionProductIngredient);
    return createdNutritionProductIngredient;
  }

  /** The first NutritionProductIngredient of `ingredient`. One is added when the list is empty. */
  getIngredientFirstRep(): NutritionProductIngredient {
    const firstNutritionProductIngredient = this.getIngredient()[0];
    return firstNutritionProductIngredient === undefined
      ? this.addIngredient()
      : firstNutritionProductIngredient;
  }

  /** Known or suspected allergens that are a part of this product (0..*) Never undefined; an empty list is created when absent. */
  getKnownAllergen(): CodeableReference[] {
    if (this.knownAllergen === undefined) {
      this.knownAllergen = [];
    }
    return this.knownAllergen;
  }

  setKnownAllergen(knownAllergen: CodeableReference[] | undefined): this {
    return this.setFieldValue('knownAllergen', knownAllergen);
  }

  hasKnownAllergen(): boolean {
    return this.hasFieldValue('knownAllergen');
  }

  /** Appends a new, empty CodeableReference to `knownAllergen` and returns it so it can be filled in. */
  addKnownAllergen(): CodeableReference;
  /** Appends the given CodeableReference to `knownAllergen` and returns this object for chaining. */
  addKnownAllergen(codeableReference: CodeableReference): this;
  addKnownAllergen(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('knownAllergen', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('knownAllergen', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `knownAllergen`. One is added when the list is empty. */
  getKnownAllergenFirstRep(): CodeableReference {
    const firstCodeableReference = this.getKnownAllergen()[0];
    return firstCodeableReference === undefined ? this.addKnownAllergen() : firstCodeableReference;
  }

  /** Specifies descriptive properties of the nutrition product (0..*) Never undefined; an empty list is created when absent. */
  getCharacteristic(): NutritionProductCharacteristic[] {
    if (this.characteristic === undefined) {
      this.characteristic = [];
    }
    return this.characteristic;
  }

  setCharacteristic(characteristic: NutritionProductCharacteristic[] | undefined): this {
    return this.setFieldValue('characteristic', characteristic);
  }

  hasCharacteristic(): boolean {
    return this.hasFieldValue('characteristic');
  }

  /** Appends a new, empty NutritionProductCharacteristic to `characteristic` and returns it so it can be filled in. */
  addCharacteristic(): NutritionProductCharacteristic;
  /** Appends the given NutritionProductCharacteristic to `characteristic` and returns this object for chaining. */
  addCharacteristic(nutritionProductCharacteristic: NutritionProductCharacteristic): this;
  addCharacteristic(
    nutritionProductCharacteristic?: NutritionProductCharacteristic
  ): NutritionProductCharacteristic | this {
    if (nutritionProductCharacteristic !== undefined) {
      return this.addFieldValue('characteristic', nutritionProductCharacteristic);
    }
    const createdNutritionProductCharacteristic = new NutritionProductCharacteristic();
    this.addFieldValue('characteristic', createdNutritionProductCharacteristic);
    return createdNutritionProductCharacteristic;
  }

  /** The first NutritionProductCharacteristic of `characteristic`. One is added when the list is empty. */
  getCharacteristicFirstRep(): NutritionProductCharacteristic {
    const firstNutritionProductCharacteristic = this.getCharacteristic()[0];
    return firstNutritionProductCharacteristic === undefined
      ? this.addCharacteristic()
      : firstNutritionProductCharacteristic;
  }

  /** One or several physical instances or occurrences of the nutrition product (0..*) Never undefined; an empty list is created when absent. */
  getInstance(): NutritionProductInstance[] {
    if (this.instance === undefined) {
      this.instance = [];
    }
    return this.instance;
  }

  setInstance(instance: NutritionProductInstance[] | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** Appends a new, empty NutritionProductInstance to `instance` and returns it so it can be filled in. */
  addInstance(): NutritionProductInstance;
  /** Appends the given NutritionProductInstance to `instance` and returns this object for chaining. */
  addInstance(nutritionProductInstance: NutritionProductInstance): this;
  addInstance(
    nutritionProductInstance?: NutritionProductInstance
  ): NutritionProductInstance | this {
    if (nutritionProductInstance !== undefined) {
      return this.addFieldValue('instance', nutritionProductInstance);
    }
    const createdNutritionProductInstance = new NutritionProductInstance();
    this.addFieldValue('instance', createdNutritionProductInstance);
    return createdNutritionProductInstance;
  }

  /** The first NutritionProductInstance of `instance`. One is added when the list is empty. */
  getInstanceFirstRep(): NutritionProductInstance {
    const firstNutritionProductInstance = this.getInstance()[0];
    return firstNutritionProductInstance === undefined
      ? this.addInstance()
      : firstNutritionProductInstance;
  }

  /** Comments made about the product (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register('NutritionProduct', NutritionProduct, true);

/** True when the value is a NutritionProduct model instance. */
export function isNutritionProduct(candidate: unknown): candidate is NutritionProduct {
  return candidate instanceof NutritionProduct;
}

/**
 * The product's nutritional information expressed by the nutrients
 */
export class NutritionProductNutrient extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'item', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'amount', typeCode: 'Ratio' }],
    },
  ];

  /** The (relevant) nutrients in the product (0..1) */
  item?: CodeableReference;

  /** The amount of nutrient expressed in one or more units: X per pack / per serving / per dose (0..*) */
  amount?: Ratio[];

  override fhirType(): string {
    return 'NutritionProduct.nutrient';
  }

  /** FHIR JSON for this NutritionProductNutrient, typed as the plain `NutritionProductNutrient` data type. */
  override toJSON(): plainTypes.NutritionProductNutrient {
    return this.serialize() as plainTypes.NutritionProductNutrient;
  }

  /** The (relevant) nutrients in the product (0..1) Created when absent. */
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

  /** The amount of nutrient expressed in one or more units: X per pack / per serving / per dose (0..*) Never undefined; an empty list is created when absent. */
  getAmount(): Ratio[] {
    if (this.amount === undefined) {
      this.amount = [];
    }
    return this.amount;
  }

  setAmount(amount: Ratio[] | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Appends a new, empty Ratio to `amount` and returns it so it can be filled in. */
  addAmount(): Ratio;
  /** Appends the given Ratio to `amount` and returns this object for chaining. */
  addAmount(ratio: Ratio): this;
  addAmount(ratio?: Ratio): Ratio | this {
    if (ratio !== undefined) {
      return this.addFieldValue('amount', ratio);
    }
    const createdRatio = new Ratio();
    this.addFieldValue('amount', createdRatio);
    return createdRatio;
  }

  /** The first Ratio of `amount`. One is added when the list is empty. */
  getAmountFirstRep(): Ratio {
    const firstRatio = this.getAmount()[0];
    return firstRatio === undefined ? this.addAmount() : firstRatio;
  }
}

modelTypeRegistry.register('NutritionProductNutrient', NutritionProductNutrient, false);

/**
 * Ingredients contained in this product
 */
export class NutritionProductIngredient extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'item', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'amount', typeCode: 'Ratio' }],
    },
  ];

  /** The ingredient contained in the product (1..1) */
  item?: CodeableReference;

  /** The amount of ingredient that is in the product (0..*) */
  amount?: Ratio[];

  override fhirType(): string {
    return 'NutritionProduct.ingredient';
  }

  /** FHIR JSON for this NutritionProductIngredient, typed as the plain `NutritionProductIngredient` data type. */
  override toJSON(): plainTypes.NutritionProductIngredient {
    return this.serialize() as plainTypes.NutritionProductIngredient;
  }

  /** The ingredient contained in the product (1..1) Created when absent. */
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

  /** The amount of ingredient that is in the product (0..*) Never undefined; an empty list is created when absent. */
  getAmount(): Ratio[] {
    if (this.amount === undefined) {
      this.amount = [];
    }
    return this.amount;
  }

  setAmount(amount: Ratio[] | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Appends a new, empty Ratio to `amount` and returns it so it can be filled in. */
  addAmount(): Ratio;
  /** Appends the given Ratio to `amount` and returns this object for chaining. */
  addAmount(ratio: Ratio): this;
  addAmount(ratio?: Ratio): Ratio | this {
    if (ratio !== undefined) {
      return this.addFieldValue('amount', ratio);
    }
    const createdRatio = new Ratio();
    this.addFieldValue('amount', createdRatio);
    return createdRatio;
  }

  /** The first Ratio of `amount`. One is added when the list is empty. */
  getAmountFirstRep(): Ratio {
    const firstRatio = this.getAmount()[0];
    return firstRatio === undefined ? this.addAmount() : firstRatio;
  }
}

modelTypeRegistry.register('NutritionProductIngredient', NutritionProductIngredient, false);

/**
 * Specifies descriptive properties of the nutrition product
 */
export class NutritionProductCharacteristic extends BackboneElement {
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
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueBase64Binary', typeCode: 'base64Binary' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
      ],
    },
  ];

  /** Code specifying the type of characteristic (1..1) */
  type?: CodeableConcept;

  /** The value of the characteristic (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** The value of the characteristic (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** The value of the characteristic (1..1) */
  valueQuantity?: Quantity;
  /** The value of the characteristic (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** The value of the characteristic (1..1) */
  valueAttachment?: Attachment;
  /** The value of the characteristic (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;

  override fhirType(): string {
    return 'NutritionProduct.characteristic';
  }

  /** FHIR JSON for this NutritionProductCharacteristic, typed as the plain `NutritionProductCharacteristic` data type. */
  override toJSON(): plainTypes.NutritionProductCharacteristic {
    return this.serialize() as plainTypes.NutritionProductCharacteristic;
  }

  /** Code specifying the type of characteristic (1..1) Created when absent. */
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

  /** The value of the characteristic (1..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | string | Quantity | Attachment | boolean | undefined {
    return this.getChoiceValue<CodeableConcept | string | Quantity | Attachment | boolean>('value');
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

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
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

  getValueBase64Binary(): string | undefined {
    return this.valueBase64Binary;
  }

  /** Sets `value[x]` as base64Binary and clears every other type of it. */
  setValueBase64Binary(valueBase64Binary: string | undefined): this {
    return this.setFieldValue('valueBase64Binary', valueBase64Binary);
  }

  hasValueBase64Binary(): boolean {
    return this.hasFieldValue('valueBase64Binary');
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
}

modelTypeRegistry.register('NutritionProductCharacteristic', NutritionProductCharacteristic, false);

/**
 * One or several physical instances or occurrences of the nutrition product
 */
export class NutritionProductInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
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
      elementName: 'lotNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lotNumber', typeCode: 'string' }],
    },
    {
      elementName: 'expiry',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expiry', typeCode: 'dateTime' }],
    },
    {
      elementName: 'useBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'useBy', typeCode: 'dateTime' }],
    },
    {
      elementName: 'biologicalSourceEvent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'biologicalSourceEvent', typeCode: 'Identifier' }],
    },
  ];

  /** The amount of items or instances (0..1) */
  quantity?: Quantity;

  /** The identifier for the physical instance, typically a serial number or manufacturer number (0..*) */
  identifier?: Identifier[];

  /** The name for the specific product (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** The identification of the batch or lot of the product (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;

  /** The expiry date or date and time for the product (0..1) */
  expiry?: string;
  /** Id and extensions of the primitive `expiry`. */
  _expiry?: Element;

  /** The date until which the product is expected to be good for consumption (0..1) */
  useBy?: string;
  /** Id and extensions of the primitive `useBy`. */
  _useBy?: Element;

  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled (0..1) */
  biologicalSourceEvent?: Identifier;

  override fhirType(): string {
    return 'NutritionProduct.instance';
  }

  /** FHIR JSON for this NutritionProductInstance, typed as the plain `NutritionProductInstance` data type. */
  override toJSON(): plainTypes.NutritionProductInstance {
    return this.serialize() as plainTypes.NutritionProductInstance;
  }

  /** The amount of items or instances (0..1) Created when absent. */
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

  /** The identifier for the physical instance, typically a serial number or manufacturer number (0..*) Never undefined; an empty list is created when absent. */
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

  /** The name for the specific product (0..1) */
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

  /** The identification of the batch or lot of the product (0..1) */
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

  /** The expiry date or date and time for the product (0..1) */
  getExpiry(): string | undefined {
    return this.expiry;
  }

  /** Sets `expiry`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setExpiry(expiry: string | undefined): this {
    return this.setFieldValue('expiry', expiry);
  }

  hasExpiry(): boolean {
    return this.hasFieldValue('expiry');
  }

  /** The element carrying the id and extensions of `expiry`. Created when absent. */
  getExpiryElement(): Element {
    if (this._expiry === undefined) {
      this._expiry = new Element();
    }
    return this._expiry;
  }

  setExpiryElement(expiryElement: Element | undefined): this {
    this._expiry = expiryElement;
    return this;
  }

  /** The date until which the product is expected to be good for consumption (0..1) */
  getUseBy(): string | undefined {
    return this.useBy;
  }

  /** Sets `useBy`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setUseBy(useBy: string | undefined): this {
    return this.setFieldValue('useBy', useBy);
  }

  hasUseBy(): boolean {
    return this.hasFieldValue('useBy');
  }

  /** The element carrying the id and extensions of `useBy`. Created when absent. */
  getUseByElement(): Element {
    if (this._useBy === undefined) {
      this._useBy = new Element();
    }
    return this._useBy;
  }

  setUseByElement(useByElement: Element | undefined): this {
    this._useBy = useByElement;
    return this;
  }

  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled (0..1) Created when absent. */
  getBiologicalSourceEvent(): Identifier {
    if (this.biologicalSourceEvent === undefined) {
      this.biologicalSourceEvent = new Identifier();
    }
    return this.biologicalSourceEvent;
  }

  setBiologicalSourceEvent(biologicalSourceEvent: Identifier | undefined): this {
    return this.setFieldValue('biologicalSourceEvent', biologicalSourceEvent);
  }

  hasBiologicalSourceEvent(): boolean {
    return this.hasFieldValue('biologicalSourceEvent');
  }
}

modelTypeRegistry.register('NutritionProductInstance', NutritionProductInstance, false);
