/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { ProdCharacteristic } from './prodCharacteristic';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export class MedicinalProductManufactured extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'manufacturedDoseForm',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'manufacturedDoseForm', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'unitOfPresentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitOfPresentation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
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
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'ingredient',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductIngredient'],
        },
      ],
    },
    {
      elementName: 'physicalCharacteristics',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'physicalCharacteristics', typeCode: 'ProdCharacteristic' }],
    },
    {
      elementName: 'otherCharacteristics',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'otherCharacteristics', typeCode: 'CodeableConcept' }],
    },
  ];

  readonly resourceType = 'MedicinalProductManufactured';

  /** Dose form as manufactured and before any transformation into the pharmaceutical product (1..1) */
  manufacturedDoseForm?: CodeableConcept;

  /** The “real world” units in which the quantity of the manufactured item is described (0..1) */
  unitOfPresentation?: CodeableConcept;

  /** The quantity or "count number" of the manufactured item (1..1) */
  quantity?: Quantity;

  /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) (0..*) */
  manufacturer?: Reference[];

  /** Ingredient (0..*) */
  ingredient?: Reference[];

  /** Dimensions, color etc. (0..1) */
  physicalCharacteristics?: ProdCharacteristic;

  /** Other codeable characteristics (0..*) */
  otherCharacteristics?: CodeableConcept[];

  override fhirType(): string {
    return 'MedicinalProductManufactured';
  }

  /** FHIR JSON for this MedicinalProductManufactured, typed as the plain `MedicinalProductManufactured` data type. */
  override toJSON(): plainTypes.MedicinalProductManufactured {
    return this.serialize() as plainTypes.MedicinalProductManufactured;
  }

  /** Dose form as manufactured and before any transformation into the pharmaceutical product (1..1) Created when absent. */
  getManufacturedDoseForm(): CodeableConcept {
    if (this.manufacturedDoseForm === undefined) {
      this.manufacturedDoseForm = new CodeableConcept();
    }
    return this.manufacturedDoseForm;
  }

  setManufacturedDoseForm(manufacturedDoseForm: CodeableConcept | undefined): this {
    return this.setFieldValue('manufacturedDoseForm', manufacturedDoseForm);
  }

  hasManufacturedDoseForm(): boolean {
    return this.hasFieldValue('manufacturedDoseForm');
  }

  /** The “real world” units in which the quantity of the manufactured item is described (0..1) Created when absent. */
  getUnitOfPresentation(): CodeableConcept {
    if (this.unitOfPresentation === undefined) {
      this.unitOfPresentation = new CodeableConcept();
    }
    return this.unitOfPresentation;
  }

  setUnitOfPresentation(unitOfPresentation: CodeableConcept | undefined): this {
    return this.setFieldValue('unitOfPresentation', unitOfPresentation);
  }

  hasUnitOfPresentation(): boolean {
    return this.hasFieldValue('unitOfPresentation');
  }

  /** The quantity or "count number" of the manufactured item (1..1) Created when absent. */
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

  /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Ingredient (0..*) Never undefined; an empty list is created when absent. */
  getIngredient(): Reference[] {
    if (this.ingredient === undefined) {
      this.ingredient = [];
    }
    return this.ingredient;
  }

  setIngredient(ingredient: Reference[] | undefined): this {
    return this.setFieldValue('ingredient', ingredient);
  }

  hasIngredient(): boolean {
    return this.hasFieldValue('ingredient');
  }

  /** Appends a new, empty Reference to `ingredient` and returns it so it can be filled in. */
  addIngredient(): Reference;
  /** Appends the given Reference to `ingredient` and returns this object for chaining. */
  addIngredient(reference: Reference): this;
  addIngredient(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('ingredient', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('ingredient', createdReference);
    return createdReference;
  }

  /** The first Reference of `ingredient`. One is added when the list is empty. */
  getIngredientFirstRep(): Reference {
    const firstReference = this.getIngredient()[0];
    return firstReference === undefined ? this.addIngredient() : firstReference;
  }

  /** Dimensions, color etc. (0..1) Created when absent. */
  getPhysicalCharacteristics(): ProdCharacteristic {
    if (this.physicalCharacteristics === undefined) {
      this.physicalCharacteristics = new ProdCharacteristic();
    }
    return this.physicalCharacteristics;
  }

  setPhysicalCharacteristics(physicalCharacteristics: ProdCharacteristic | undefined): this {
    return this.setFieldValue('physicalCharacteristics', physicalCharacteristics);
  }

  hasPhysicalCharacteristics(): boolean {
    return this.hasFieldValue('physicalCharacteristics');
  }

  /** Other codeable characteristics (0..*) Never undefined; an empty list is created when absent. */
  getOtherCharacteristics(): CodeableConcept[] {
    if (this.otherCharacteristics === undefined) {
      this.otherCharacteristics = [];
    }
    return this.otherCharacteristics;
  }

  setOtherCharacteristics(otherCharacteristics: CodeableConcept[] | undefined): this {
    return this.setFieldValue('otherCharacteristics', otherCharacteristics);
  }

  hasOtherCharacteristics(): boolean {
    return this.hasFieldValue('otherCharacteristics');
  }

  /** Appends a new, empty CodeableConcept to `otherCharacteristics` and returns it so it can be filled in. */
  addOtherCharacteristics(): CodeableConcept;
  /** Appends the given CodeableConcept to `otherCharacteristics` and returns this object for chaining. */
  addOtherCharacteristics(codeableConcept: CodeableConcept): this;
  addOtherCharacteristics(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('otherCharacteristics', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('otherCharacteristics', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `otherCharacteristics`. One is added when the list is empty. */
  getOtherCharacteristicsFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getOtherCharacteristics()[0];
    return firstCodeableConcept === undefined
      ? this.addOtherCharacteristics()
      : firstCodeableConcept;
  }
}

modelTypeRegistry.register('MedicinalProductManufactured', MedicinalProductManufactured, true);

/** True when the value is a MedicinalProductManufactured model instance. */
export function isMedicinalProductManufactured(
  candidate: unknown
): candidate is MedicinalProductManufactured {
  return candidate instanceof MedicinalProductManufactured;
}
