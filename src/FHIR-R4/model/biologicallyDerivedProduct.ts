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
import { Period } from './period';
import { Reference } from './reference';

/**
 * A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 */
export class BiologicallyDerivedProduct extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'productCategory',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'productCategory',
          typeCode: 'code',
          allowedCodes: valueSetCodes.BiologicallyDerivedProductCategory,
        },
      ],
    },
    {
      elementName: 'productCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.BiologicallyDerivedProductStatus,
        },
      ],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'request', typeCode: 'Reference', targetResourceTypes: ['ServiceRequest'] },
      ],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'integer' }],
    },
    {
      elementName: 'parent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'parent',
          typeCode: 'Reference',
          targetResourceTypes: ['BiologicallyDerivedProduct'],
        },
      ],
    },
    {
      elementName: 'collection',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'collection', typeCode: 'BiologicallyDerivedProductCollection' }],
    },
    {
      elementName: 'processing',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'processing', typeCode: 'BiologicallyDerivedProductProcessing' }],
    },
    {
      elementName: 'manipulation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'manipulation', typeCode: 'BiologicallyDerivedProductManipulation' }],
    },
    {
      elementName: 'storage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'storage', typeCode: 'BiologicallyDerivedProductStorage' }],
    },
  ];

  readonly resourceType = 'BiologicallyDerivedProduct';

  /** External ids for this item (0..*) */
  identifier?: Identifier[];

  /** organ | tissue | fluid | cells | biologicalAgent (0..1) */
  productCategory?: valueSetCodes.BiologicallyDerivedProductCategory;
  /** Id and extensions of the primitive `productCategory`. */
  _productCategory?: Element;

  /** What this biologically derived product is (0..1) */
  productCode?: CodeableConcept;

  /** available | unavailable (0..1) */
  status?: valueSetCodes.BiologicallyDerivedProductStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Procedure request (0..*) */
  request?: Reference[];

  /** The amount of this biologically derived product (0..1) */
  quantity?: number;
  /** Id and extensions of the primitive `quantity`. */
  _quantity?: Element;

  /** BiologicallyDerivedProduct parent (0..*) */
  parent?: Reference[];

  /** How this product was collected (0..1) */
  collection?: BiologicallyDerivedProductCollection;

  /** Any processing of the product during collection (0..*) */
  processing?: BiologicallyDerivedProductProcessing[];

  /** Any manipulation of product post-collection (0..1) */
  manipulation?: BiologicallyDerivedProductManipulation;

  /** Product storage (0..*) */
  storage?: BiologicallyDerivedProductStorage[];

  override fhirType(): string {
    return 'BiologicallyDerivedProduct';
  }

  /** FHIR JSON for this BiologicallyDerivedProduct, typed as the plain `BiologicallyDerivedProduct` data type. */
  override toJSON(): plainTypes.BiologicallyDerivedProduct {
    return this.serialize() as plainTypes.BiologicallyDerivedProduct;
  }

  /** External ids for this item (0..*) Never undefined; an empty list is created when absent. */
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

  /** organ | tissue | fluid | cells | biologicalAgent (0..1) */
  getProductCategory(): valueSetCodes.BiologicallyDerivedProductCategory | undefined {
    return this.productCategory;
  }

  /** Sets `productCategory`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setProductCategory(
    productCategory: valueSetCodes.BiologicallyDerivedProductCategory | undefined
  ): this {
    return this.setFieldValue('productCategory', productCategory);
  }

  hasProductCategory(): boolean {
    return this.hasFieldValue('productCategory');
  }

  /** The element carrying the id and extensions of `productCategory`. Created when absent. */
  getProductCategoryElement(): Element {
    if (this._productCategory === undefined) {
      this._productCategory = new Element();
    }
    return this._productCategory;
  }

  setProductCategoryElement(productCategoryElement: Element | undefined): this {
    this._productCategory = productCategoryElement;
    return this;
  }

  /** What this biologically derived product is (0..1) Created when absent. */
  getProductCode(): CodeableConcept {
    if (this.productCode === undefined) {
      this.productCode = new CodeableConcept();
    }
    return this.productCode;
  }

  setProductCode(productCode: CodeableConcept | undefined): this {
    return this.setFieldValue('productCode', productCode);
  }

  hasProductCode(): boolean {
    return this.hasFieldValue('productCode');
  }

  /** available | unavailable (0..1) */
  getStatus(): valueSetCodes.BiologicallyDerivedProductStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.BiologicallyDerivedProductStatus | undefined): this {
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

  /** Procedure request (0..*) Never undefined; an empty list is created when absent. */
  getRequest(): Reference[] {
    if (this.request === undefined) {
      this.request = [];
    }
    return this.request;
  }

  setRequest(request: Reference[] | undefined): this {
    return this.setFieldValue('request', request);
  }

  hasRequest(): boolean {
    return this.hasFieldValue('request');
  }

  /** Appends a new, empty Reference to `request` and returns it so it can be filled in. */
  addRequest(): Reference;
  /** Appends the given Reference to `request` and returns this object for chaining. */
  addRequest(reference: Reference): this;
  addRequest(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('request', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('request', createdReference);
    return createdReference;
  }

  /** The first Reference of `request`. One is added when the list is empty. */
  getRequestFirstRep(): Reference {
    const firstReference = this.getRequest()[0];
    return firstReference === undefined ? this.addRequest() : firstReference;
  }

  /** The amount of this biologically derived product (0..1) */
  getQuantity(): number | undefined {
    return this.quantity;
  }

  /** Sets `quantity`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setQuantity(quantity: number | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** The element carrying the id and extensions of `quantity`. Created when absent. */
  getQuantityElement(): Element {
    if (this._quantity === undefined) {
      this._quantity = new Element();
    }
    return this._quantity;
  }

  setQuantityElement(quantityElement: Element | undefined): this {
    this._quantity = quantityElement;
    return this;
  }

  /** BiologicallyDerivedProduct parent (0..*) Never undefined; an empty list is created when absent. */
  getParent(): Reference[] {
    if (this.parent === undefined) {
      this.parent = [];
    }
    return this.parent;
  }

  setParent(parent: Reference[] | undefined): this {
    return this.setFieldValue('parent', parent);
  }

  hasParent(): boolean {
    return this.hasFieldValue('parent');
  }

  /** Appends a new, empty Reference to `parent` and returns it so it can be filled in. */
  addParent(): Reference;
  /** Appends the given Reference to `parent` and returns this object for chaining. */
  addParent(reference: Reference): this;
  addParent(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('parent', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('parent', createdReference);
    return createdReference;
  }

  /** The first Reference of `parent`. One is added when the list is empty. */
  getParentFirstRep(): Reference {
    const firstReference = this.getParent()[0];
    return firstReference === undefined ? this.addParent() : firstReference;
  }

  /** How this product was collected (0..1) Created when absent. */
  getCollection(): BiologicallyDerivedProductCollection {
    if (this.collection === undefined) {
      this.collection = new BiologicallyDerivedProductCollection();
    }
    return this.collection;
  }

  setCollection(collection: BiologicallyDerivedProductCollection | undefined): this {
    return this.setFieldValue('collection', collection);
  }

  hasCollection(): boolean {
    return this.hasFieldValue('collection');
  }

  /** Any processing of the product during collection (0..*) Never undefined; an empty list is created when absent. */
  getProcessing(): BiologicallyDerivedProductProcessing[] {
    if (this.processing === undefined) {
      this.processing = [];
    }
    return this.processing;
  }

  setProcessing(processing: BiologicallyDerivedProductProcessing[] | undefined): this {
    return this.setFieldValue('processing', processing);
  }

  hasProcessing(): boolean {
    return this.hasFieldValue('processing');
  }

  /** Appends a new, empty BiologicallyDerivedProductProcessing to `processing` and returns it so it can be filled in. */
  addProcessing(): BiologicallyDerivedProductProcessing;
  /** Appends the given BiologicallyDerivedProductProcessing to `processing` and returns this object for chaining. */
  addProcessing(biologicallyDerivedProductProcessing: BiologicallyDerivedProductProcessing): this;
  addProcessing(
    biologicallyDerivedProductProcessing?: BiologicallyDerivedProductProcessing
  ): BiologicallyDerivedProductProcessing | this {
    if (biologicallyDerivedProductProcessing !== undefined) {
      return this.addFieldValue('processing', biologicallyDerivedProductProcessing);
    }
    const createdBiologicallyDerivedProductProcessing = new BiologicallyDerivedProductProcessing();
    this.addFieldValue('processing', createdBiologicallyDerivedProductProcessing);
    return createdBiologicallyDerivedProductProcessing;
  }

  /** The first BiologicallyDerivedProductProcessing of `processing`. One is added when the list is empty. */
  getProcessingFirstRep(): BiologicallyDerivedProductProcessing {
    const firstBiologicallyDerivedProductProcessing = this.getProcessing()[0];
    return firstBiologicallyDerivedProductProcessing === undefined
      ? this.addProcessing()
      : firstBiologicallyDerivedProductProcessing;
  }

  /** Any manipulation of product post-collection (0..1) Created when absent. */
  getManipulation(): BiologicallyDerivedProductManipulation {
    if (this.manipulation === undefined) {
      this.manipulation = new BiologicallyDerivedProductManipulation();
    }
    return this.manipulation;
  }

  setManipulation(manipulation: BiologicallyDerivedProductManipulation | undefined): this {
    return this.setFieldValue('manipulation', manipulation);
  }

  hasManipulation(): boolean {
    return this.hasFieldValue('manipulation');
  }

  /** Product storage (0..*) Never undefined; an empty list is created when absent. */
  getStorage(): BiologicallyDerivedProductStorage[] {
    if (this.storage === undefined) {
      this.storage = [];
    }
    return this.storage;
  }

  setStorage(storage: BiologicallyDerivedProductStorage[] | undefined): this {
    return this.setFieldValue('storage', storage);
  }

  hasStorage(): boolean {
    return this.hasFieldValue('storage');
  }

  /** Appends a new, empty BiologicallyDerivedProductStorage to `storage` and returns it so it can be filled in. */
  addStorage(): BiologicallyDerivedProductStorage;
  /** Appends the given BiologicallyDerivedProductStorage to `storage` and returns this object for chaining. */
  addStorage(biologicallyDerivedProductStorage: BiologicallyDerivedProductStorage): this;
  addStorage(
    biologicallyDerivedProductStorage?: BiologicallyDerivedProductStorage
  ): BiologicallyDerivedProductStorage | this {
    if (biologicallyDerivedProductStorage !== undefined) {
      return this.addFieldValue('storage', biologicallyDerivedProductStorage);
    }
    const createdBiologicallyDerivedProductStorage = new BiologicallyDerivedProductStorage();
    this.addFieldValue('storage', createdBiologicallyDerivedProductStorage);
    return createdBiologicallyDerivedProductStorage;
  }

  /** The first BiologicallyDerivedProductStorage of `storage`. One is added when the list is empty. */
  getStorageFirstRep(): BiologicallyDerivedProductStorage {
    const firstBiologicallyDerivedProductStorage = this.getStorage()[0];
    return firstBiologicallyDerivedProductStorage === undefined
      ? this.addStorage()
      : firstBiologicallyDerivedProductStorage;
  }
}

modelTypeRegistry.register('BiologicallyDerivedProduct', BiologicallyDerivedProduct, true);

/** True when the value is a BiologicallyDerivedProduct model instance. */
export function isBiologicallyDerivedProduct(
  candidate: unknown
): candidate is BiologicallyDerivedProduct {
  return candidate instanceof BiologicallyDerivedProduct;
}

/**
 * How this product was collected
 */
export class BiologicallyDerivedProductCollection extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'collector',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'collector',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'source',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient'],
        },
      ],
    },
    {
      elementName: 'collected',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'collectedDateTime', typeCode: 'dateTime' },
        { jsonKey: 'collectedPeriod', typeCode: 'Period' },
      ],
    },
  ];

  /** Individual performing collection (0..1) */
  collector?: Reference;

  /** Who is product from (0..1) */
  source?: Reference;

  /** Time of product collection (0..1) */
  collectedDateTime?: string;
  /** Id and extensions of the primitive `collectedDateTime`. */
  _collectedDateTime?: Element;
  /** Time of product collection (0..1) */
  collectedPeriod?: Period;

  override fhirType(): string {
    return 'BiologicallyDerivedProduct.collection';
  }

  /** FHIR JSON for this BiologicallyDerivedProductCollection, typed as the plain `BiologicallyDerivedProductCollection` data type. */
  override toJSON(): plainTypes.BiologicallyDerivedProductCollection {
    return this.serialize() as plainTypes.BiologicallyDerivedProductCollection;
  }

  /** Individual performing collection (0..1) Created when absent. */
  getCollector(): Reference {
    if (this.collector === undefined) {
      this.collector = new Reference();
    }
    return this.collector;
  }

  setCollector(collector: Reference | undefined): this {
    return this.setFieldValue('collector', collector);
  }

  hasCollector(): boolean {
    return this.hasFieldValue('collector');
  }

  /** Who is product from (0..1) Created when absent. */
  getSource(): Reference {
    if (this.source === undefined) {
      this.source = new Reference();
    }
    return this.source;
  }

  setSource(source: Reference | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Time of product collection (0..1) Whichever type of `collected[x]` is set. */
  getCollected(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('collected');
  }

  /** True when any type of `collected[x]` is set. */
  hasCollected(): boolean {
    return this.hasChoiceValue('collected');
  }

  getCollectedDateTime(): string | undefined {
    return this.collectedDateTime;
  }

  /** Sets `collected[x]` as dateTime and clears every other type of it. */
  setCollectedDateTime(collectedDateTime: string | undefined): this {
    return this.setFieldValue('collectedDateTime', collectedDateTime);
  }

  hasCollectedDateTime(): boolean {
    return this.hasFieldValue('collectedDateTime');
  }

  getCollectedPeriod(): Period | undefined {
    return this.collectedPeriod;
  }

  /** Sets `collected[x]` as Period and clears every other type of it. */
  setCollectedPeriod(collectedPeriod: Period | undefined): this {
    return this.setFieldValue('collectedPeriod', collectedPeriod);
  }

  hasCollectedPeriod(): boolean {
    return this.hasFieldValue('collectedPeriod');
  }
}

modelTypeRegistry.register(
  'BiologicallyDerivedProductCollection',
  BiologicallyDerivedProductCollection,
  false
);

/**
 * Any processing of the product during collection
 */
export class BiologicallyDerivedProductProcessing extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'procedure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'procedure', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'additive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'additive', typeCode: 'Reference', targetResourceTypes: ['Substance'] }],
    },
    {
      elementName: 'time',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timeDateTime', typeCode: 'dateTime' },
        { jsonKey: 'timePeriod', typeCode: 'Period' },
      ],
    },
  ];

  /** Description of of processing (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Procesing code (0..1) */
  procedure?: CodeableConcept;

  /** Substance added during processing (0..1) */
  additive?: Reference;

  /** Time of processing (0..1) */
  timeDateTime?: string;
  /** Id and extensions of the primitive `timeDateTime`. */
  _timeDateTime?: Element;
  /** Time of processing (0..1) */
  timePeriod?: Period;

  override fhirType(): string {
    return 'BiologicallyDerivedProduct.processing';
  }

  /** FHIR JSON for this BiologicallyDerivedProductProcessing, typed as the plain `BiologicallyDerivedProductProcessing` data type. */
  override toJSON(): plainTypes.BiologicallyDerivedProductProcessing {
    return this.serialize() as plainTypes.BiologicallyDerivedProductProcessing;
  }

  /** Description of of processing (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Procesing code (0..1) Created when absent. */
  getProcedure(): CodeableConcept {
    if (this.procedure === undefined) {
      this.procedure = new CodeableConcept();
    }
    return this.procedure;
  }

  setProcedure(procedure: CodeableConcept | undefined): this {
    return this.setFieldValue('procedure', procedure);
  }

  hasProcedure(): boolean {
    return this.hasFieldValue('procedure');
  }

  /** Substance added during processing (0..1) Created when absent. */
  getAdditive(): Reference {
    if (this.additive === undefined) {
      this.additive = new Reference();
    }
    return this.additive;
  }

  setAdditive(additive: Reference | undefined): this {
    return this.setFieldValue('additive', additive);
  }

  hasAdditive(): boolean {
    return this.hasFieldValue('additive');
  }

  /** Time of processing (0..1) Whichever type of `time[x]` is set. */
  getTime(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('time');
  }

  /** True when any type of `time[x]` is set. */
  hasTime(): boolean {
    return this.hasChoiceValue('time');
  }

  getTimeDateTime(): string | undefined {
    return this.timeDateTime;
  }

  /** Sets `time[x]` as dateTime and clears every other type of it. */
  setTimeDateTime(timeDateTime: string | undefined): this {
    return this.setFieldValue('timeDateTime', timeDateTime);
  }

  hasTimeDateTime(): boolean {
    return this.hasFieldValue('timeDateTime');
  }

  getTimePeriod(): Period | undefined {
    return this.timePeriod;
  }

  /** Sets `time[x]` as Period and clears every other type of it. */
  setTimePeriod(timePeriod: Period | undefined): this {
    return this.setFieldValue('timePeriod', timePeriod);
  }

  hasTimePeriod(): boolean {
    return this.hasFieldValue('timePeriod');
  }
}

modelTypeRegistry.register(
  'BiologicallyDerivedProductProcessing',
  BiologicallyDerivedProductProcessing,
  false
);

/**
 * Any manipulation of product post-collection
 */
export class BiologicallyDerivedProductManipulation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'time',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timeDateTime', typeCode: 'dateTime' },
        { jsonKey: 'timePeriod', typeCode: 'Period' },
      ],
    },
  ];

  /** Description of manipulation (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Time of manipulation (0..1) */
  timeDateTime?: string;
  /** Id and extensions of the primitive `timeDateTime`. */
  _timeDateTime?: Element;
  /** Time of manipulation (0..1) */
  timePeriod?: Period;

  override fhirType(): string {
    return 'BiologicallyDerivedProduct.manipulation';
  }

  /** FHIR JSON for this BiologicallyDerivedProductManipulation, typed as the plain `BiologicallyDerivedProductManipulation` data type. */
  override toJSON(): plainTypes.BiologicallyDerivedProductManipulation {
    return this.serialize() as plainTypes.BiologicallyDerivedProductManipulation;
  }

  /** Description of manipulation (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Time of manipulation (0..1) Whichever type of `time[x]` is set. */
  getTime(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('time');
  }

  /** True when any type of `time[x]` is set. */
  hasTime(): boolean {
    return this.hasChoiceValue('time');
  }

  getTimeDateTime(): string | undefined {
    return this.timeDateTime;
  }

  /** Sets `time[x]` as dateTime and clears every other type of it. */
  setTimeDateTime(timeDateTime: string | undefined): this {
    return this.setFieldValue('timeDateTime', timeDateTime);
  }

  hasTimeDateTime(): boolean {
    return this.hasFieldValue('timeDateTime');
  }

  getTimePeriod(): Period | undefined {
    return this.timePeriod;
  }

  /** Sets `time[x]` as Period and clears every other type of it. */
  setTimePeriod(timePeriod: Period | undefined): this {
    return this.setFieldValue('timePeriod', timePeriod);
  }

  hasTimePeriod(): boolean {
    return this.hasFieldValue('timePeriod');
  }
}

modelTypeRegistry.register(
  'BiologicallyDerivedProductManipulation',
  BiologicallyDerivedProductManipulation,
  false
);

/**
 * Product storage
 */
export class BiologicallyDerivedProductStorage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'temperature',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'temperature', typeCode: 'decimal' }],
    },
    {
      elementName: 'scale',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'scale',
          typeCode: 'code',
          allowedCodes: valueSetCodes.BiologicallyDerivedProductStorageScale,
        },
      ],
    },
    {
      elementName: 'duration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'duration', typeCode: 'Period' }],
    },
  ];

  /** Description of storage (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Storage temperature (0..1) */
  temperature?: number;
  /** Id and extensions of the primitive `temperature`. */
  _temperature?: Element;

  /** farenheit | celsius | kelvin (0..1) */
  scale?: valueSetCodes.BiologicallyDerivedProductStorageScale;
  /** Id and extensions of the primitive `scale`. */
  _scale?: Element;

  /** Storage timeperiod (0..1) */
  duration?: Period;

  override fhirType(): string {
    return 'BiologicallyDerivedProduct.storage';
  }

  /** FHIR JSON for this BiologicallyDerivedProductStorage, typed as the plain `BiologicallyDerivedProductStorage` data type. */
  override toJSON(): plainTypes.BiologicallyDerivedProductStorage {
    return this.serialize() as plainTypes.BiologicallyDerivedProductStorage;
  }

  /** Description of storage (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Storage temperature (0..1) */
  getTemperature(): number | undefined {
    return this.temperature;
  }

  /** Sets `temperature`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setTemperature(temperature: number | undefined): this {
    return this.setFieldValue('temperature', temperature);
  }

  hasTemperature(): boolean {
    return this.hasFieldValue('temperature');
  }

  /** The element carrying the id and extensions of `temperature`. Created when absent. */
  getTemperatureElement(): Element {
    if (this._temperature === undefined) {
      this._temperature = new Element();
    }
    return this._temperature;
  }

  setTemperatureElement(temperatureElement: Element | undefined): this {
    this._temperature = temperatureElement;
    return this;
  }

  /** farenheit | celsius | kelvin (0..1) */
  getScale(): valueSetCodes.BiologicallyDerivedProductStorageScale | undefined {
    return this.scale;
  }

  /** Sets `scale`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setScale(scale: valueSetCodes.BiologicallyDerivedProductStorageScale | undefined): this {
    return this.setFieldValue('scale', scale);
  }

  hasScale(): boolean {
    return this.hasFieldValue('scale');
  }

  /** The element carrying the id and extensions of `scale`. Created when absent. */
  getScaleElement(): Element {
    if (this._scale === undefined) {
      this._scale = new Element();
    }
    return this._scale;
  }

  setScaleElement(scaleElement: Element | undefined): this {
    this._scale = scaleElement;
    return this;
  }

  /** Storage timeperiod (0..1) Created when absent. */
  getDuration(): Period {
    if (this.duration === undefined) {
      this.duration = new Period();
    }
    return this.duration;
  }

  setDuration(duration: Period | undefined): this {
    return this.setFieldValue('duration', duration);
  }

  hasDuration(): boolean {
    return this.hasFieldValue('duration');
  }
}

modelTypeRegistry.register(
  'BiologicallyDerivedProductStorage',
  BiologicallyDerivedProductStorage,
  false
);
