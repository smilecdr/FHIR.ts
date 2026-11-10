/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Medication Resource
 */
export class Medication extends DomainResource {
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.MedicationStatus },
      ],
    },
    {
      elementName: 'isBrand',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isBrand', typeCode: 'boolean' }],
    },
    {
      elementName: 'isOverTheCounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isOverTheCounter', typeCode: 'boolean' }],
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
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'ingredient', typeCode: 'MedicationIngredient' }],
    },
    {
      elementName: 'package',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'package', typeCode: 'MedicationPackage' }],
    },
    {
      elementName: 'image',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'image', typeCode: 'Attachment' }],
    },
  ];

  readonly resourceType = 'Medication';

  /** Codes that identify this medication (0..1) */
  code?: CodeableConcept;

  /** active | inactive | entered-in-error (0..1) */
  status?: valueSetCodes.MedicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** True if a brand (0..1) */
  isBrand?: boolean;
  /** Id and extensions of the primitive `isBrand`. */
  _isBrand?: Element;

  /** True if medication does not require a prescription (0..1) */
  isOverTheCounter?: boolean;
  /** Id and extensions of the primitive `isOverTheCounter`. */
  _isOverTheCounter?: Element;

  /** Manufacturer of the item (0..1) */
  manufacturer?: Reference;

  /** powder | tablets | capsule + (0..1) */
  form?: CodeableConcept;

  /** Active or inactive ingredient (0..*) */
  ingredient?: MedicationIngredient[];

  /** Details about packaged medications (0..1) */
  package?: MedicationPackage;

  /** Picture of the medication (0..*) */
  image?: Attachment[];

  override fhirType(): string {
    return 'Medication';
  }

  /** FHIR JSON for this Medication, typed as the plain `Medication` data type. */
  override toJSON(): plainTypes.Medication {
    return this.serialize() as plainTypes.Medication;
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
  getStatus(): valueSetCodes.MedicationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationStatus | undefined): this {
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

  /** True if a brand (0..1) */
  getIsBrand(): boolean | undefined {
    return this.isBrand;
  }

  /** Sets `isBrand`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsBrand(isBrand: boolean | undefined): this {
    return this.setFieldValue('isBrand', isBrand);
  }

  hasIsBrand(): boolean {
    return this.hasFieldValue('isBrand');
  }

  /** The element carrying the id and extensions of `isBrand`. Created when absent. */
  getIsBrandElement(): Element {
    if (this._isBrand === undefined) {
      this._isBrand = new Element();
    }
    return this._isBrand;
  }

  setIsBrandElement(isBrandElement: Element | undefined): this {
    this._isBrand = isBrandElement;
    return this;
  }

  /** True if medication does not require a prescription (0..1) */
  getIsOverTheCounter(): boolean | undefined {
    return this.isOverTheCounter;
  }

  /** Sets `isOverTheCounter`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsOverTheCounter(isOverTheCounter: boolean | undefined): this {
    return this.setFieldValue('isOverTheCounter', isOverTheCounter);
  }

  hasIsOverTheCounter(): boolean {
    return this.hasFieldValue('isOverTheCounter');
  }

  /** The element carrying the id and extensions of `isOverTheCounter`. Created when absent. */
  getIsOverTheCounterElement(): Element {
    if (this._isOverTheCounter === undefined) {
      this._isOverTheCounter = new Element();
    }
    return this._isOverTheCounter;
  }

  setIsOverTheCounterElement(isOverTheCounterElement: Element | undefined): this {
    this._isOverTheCounter = isOverTheCounterElement;
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
  getPackage(): MedicationPackage {
    if (this.package === undefined) {
      this.package = new MedicationPackage();
    }
    return this.package;
  }

  setPackage(packageValue: MedicationPackage | undefined): this {
    return this.setFieldValue('package', packageValue);
  }

  hasPackage(): boolean {
    return this.hasFieldValue('package');
  }

  /** Picture of the medication (0..*) Never undefined; an empty list is created when absent. */
  getImage(): Attachment[] {
    if (this.image === undefined) {
      this.image = [];
    }
    return this.image;
  }

  setImage(image: Attachment[] | undefined): this {
    return this.setFieldValue('image', image);
  }

  hasImage(): boolean {
    return this.hasFieldValue('image');
  }

  /** Appends a new, empty Attachment to `image` and returns it so it can be filled in. */
  addImage(): Attachment;
  /** Appends the given Attachment to `image` and returns this object for chaining. */
  addImage(attachment: Attachment): this;
  addImage(attachment?: Attachment): Attachment | this {
    if (attachment !== undefined) {
      return this.addFieldValue('image', attachment);
    }
    const createdAttachment = new Attachment();
    this.addFieldValue('image', createdAttachment);
    return createdAttachment;
  }

  /** The first Attachment of `image`. One is added when the list is empty. */
  getImageFirstRep(): Attachment {
    const firstAttachment = this.getImage()[0];
    return firstAttachment === undefined ? this.addImage() : firstAttachment;
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
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Ratio' }],
    },
  ];

  /** The product contained (1..1) */
  itemCodeableConcept?: CodeableConcept;
  /** The product contained (1..1) */
  itemReference?: Reference;

  /** Active ingredient indicator (0..1) */
  isActive?: boolean;
  /** Id and extensions of the primitive `isActive`. */
  _isActive?: Element;

  /** Quantity of ingredient present (0..1) */
  amount?: Ratio;

  override fhirType(): string {
    return 'Medication.ingredient';
  }

  /** FHIR JSON for this MedicationIngredient, typed as the plain `MedicationIngredient` data type. */
  override toJSON(): plainTypes.MedicationIngredient {
    return this.serialize() as plainTypes.MedicationIngredient;
  }

  /** The product contained (1..1) Whichever type of `item[x]` is set. */
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
}

modelTypeRegistry.register('MedicationIngredient', MedicationIngredient, false);

/**
 * Details about packaged medications
 */
export class MedicationPackage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'container',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'container', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'content',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'content', typeCode: 'MedicationPackageContent' }],
    },
    {
      elementName: 'batch',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'batch', typeCode: 'MedicationPackageBatch' }],
    },
  ];

  /** E.g. box, vial, blister-pack (0..1) */
  container?: CodeableConcept;

  /** What is in the package (0..*) */
  content?: MedicationPackageContent[];

  /** Identifies a single production run (0..*) */
  batch?: MedicationPackageBatch[];

  override fhirType(): string {
    return 'Medication.package';
  }

  /** FHIR JSON for this MedicationPackage, typed as the plain `MedicationPackage` data type. */
  override toJSON(): plainTypes.MedicationPackage {
    return this.serialize() as plainTypes.MedicationPackage;
  }

  /** E.g. box, vial, blister-pack (0..1) Created when absent. */
  getContainer(): CodeableConcept {
    if (this.container === undefined) {
      this.container = new CodeableConcept();
    }
    return this.container;
  }

  setContainer(container: CodeableConcept | undefined): this {
    return this.setFieldValue('container', container);
  }

  hasContainer(): boolean {
    return this.hasFieldValue('container');
  }

  /** What is in the package (0..*) Never undefined; an empty list is created when absent. */
  getContent(): MedicationPackageContent[] {
    if (this.content === undefined) {
      this.content = [];
    }
    return this.content;
  }

  setContent(content: MedicationPackageContent[] | undefined): this {
    return this.setFieldValue('content', content);
  }

  hasContent(): boolean {
    return this.hasFieldValue('content');
  }

  /** Appends a new, empty MedicationPackageContent to `content` and returns it so it can be filled in. */
  addContent(): MedicationPackageContent;
  /** Appends the given MedicationPackageContent to `content` and returns this object for chaining. */
  addContent(medicationPackageContent: MedicationPackageContent): this;
  addContent(medicationPackageContent?: MedicationPackageContent): MedicationPackageContent | this {
    if (medicationPackageContent !== undefined) {
      return this.addFieldValue('content', medicationPackageContent);
    }
    const createdMedicationPackageContent = new MedicationPackageContent();
    this.addFieldValue('content', createdMedicationPackageContent);
    return createdMedicationPackageContent;
  }

  /** The first MedicationPackageContent of `content`. One is added when the list is empty. */
  getContentFirstRep(): MedicationPackageContent {
    const firstMedicationPackageContent = this.getContent()[0];
    return firstMedicationPackageContent === undefined
      ? this.addContent()
      : firstMedicationPackageContent;
  }

  /** Identifies a single production run (0..*) Never undefined; an empty list is created when absent. */
  getBatch(): MedicationPackageBatch[] {
    if (this.batch === undefined) {
      this.batch = [];
    }
    return this.batch;
  }

  setBatch(batch: MedicationPackageBatch[] | undefined): this {
    return this.setFieldValue('batch', batch);
  }

  hasBatch(): boolean {
    return this.hasFieldValue('batch');
  }

  /** Appends a new, empty MedicationPackageBatch to `batch` and returns it so it can be filled in. */
  addBatch(): MedicationPackageBatch;
  /** Appends the given MedicationPackageBatch to `batch` and returns this object for chaining. */
  addBatch(medicationPackageBatch: MedicationPackageBatch): this;
  addBatch(medicationPackageBatch?: MedicationPackageBatch): MedicationPackageBatch | this {
    if (medicationPackageBatch !== undefined) {
      return this.addFieldValue('batch', medicationPackageBatch);
    }
    const createdMedicationPackageBatch = new MedicationPackageBatch();
    this.addFieldValue('batch', createdMedicationPackageBatch);
    return createdMedicationPackageBatch;
  }

  /** The first MedicationPackageBatch of `batch`. One is added when the list is empty. */
  getBatchFirstRep(): MedicationPackageBatch {
    const firstMedicationPackageBatch = this.getBatch()[0];
    return firstMedicationPackageBatch === undefined
      ? this.addBatch()
      : firstMedicationPackageBatch;
  }
}

modelTypeRegistry.register('MedicationPackage', MedicationPackage, false);

/**
 * What is in the package
 */
export class MedicationPackageContent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'itemReference', typeCode: 'Reference', targetResourceTypes: ['Medication'] },
      ],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
  ];

  /** The item in the package (1..1) */
  itemCodeableConcept?: CodeableConcept;
  /** The item in the package (1..1) */
  itemReference?: Reference;

  /** Quantity present in the package (0..1) */
  amount?: Quantity;

  override fhirType(): string {
    return 'Medication.package.content';
  }

  /** FHIR JSON for this MedicationPackageContent, typed as the plain `MedicationContent` data type. */
  override toJSON(): plainTypes.MedicationContent {
    return this.serialize() as plainTypes.MedicationContent;
  }

  /** The item in the package (1..1) Whichever type of `item[x]` is set. */
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

  /** Quantity present in the package (0..1) Created when absent. */
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

modelTypeRegistry.register('MedicationPackageContent', MedicationPackageContent, false);

/**
 * Identifies a single production run
 */
export class MedicationPackageBatch extends BackboneElement {
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
    return 'Medication.package.batch';
  }

  /** FHIR JSON for this MedicationPackageBatch, typed as the plain `MedicationBatch` data type. */
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

modelTypeRegistry.register('MedicationPackageBatch', MedicationPackageBatch, false);
