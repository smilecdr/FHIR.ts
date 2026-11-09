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
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * A biological material originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.
 */
export class BiologicallyDerivedProduct extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'productCategory',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productCategory', typeCode: 'Coding' }],
    },
    {
      elementName: 'productCode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productCode', typeCode: 'CodeableConcept' }],
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
      elementName: 'request',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'request', typeCode: 'Reference', targetResourceTypes: ['ServiceRequest'] },
      ],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'biologicalSourceEvent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'biologicalSourceEvent', typeCode: 'Identifier' }],
    },
    {
      elementName: 'processingFacility',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'processingFacility',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'division',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'division', typeCode: 'string' }],
    },
    {
      elementName: 'productStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productStatus', typeCode: 'Coding' }],
    },
    {
      elementName: 'expirationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expirationDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'collection',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'collection', typeCode: 'BiologicallyDerivedProductCollection' }],
    },
    {
      elementName: 'storageTempRequirements',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'storageTempRequirements', typeCode: 'Range' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'BiologicallyDerivedProductProperty' }],
    },
  ];

  readonly resourceType = 'BiologicallyDerivedProduct';

  /** organ | tissue | fluid | cells | biologicalAgent (0..1) */
  productCategory?: Coding;

  /** A code that identifies the kind of this biologically derived product (0..1) */
  productCode?: CodeableConcept;

  /** The parent biologically-derived product (0..*) */
  parent?: Reference[];

  /** Request to obtain and/or infuse this product (0..*) */
  request?: Reference[];

  /** Instance identifier (0..*) */
  identifier?: Identifier[];

  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled (0..1) */
  biologicalSourceEvent?: Identifier;

  /** Processing facilities responsible for the labeling and distribution of this biologically derived product (0..*) */
  processingFacility?: Reference[];

  /** A unique identifier for an aliquot of a product (0..1) */
  division?: string;
  /** Id and extensions of the primitive `division`. */
  _division?: Element;

  /** available | unavailable (0..1) */
  productStatus?: Coding;

  /** Date, and where relevant time, of expiration (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;

  /** How this product was collected (0..1) */
  collection?: BiologicallyDerivedProductCollection;

  /** Product storage temperature requirements (0..1) */
  storageTempRequirements?: Range;

  /** A property that is specific to this BiologicallyDerviedProduct instance (0..*) */
  property?: BiologicallyDerivedProductProperty[];

  override fhirType(): string {
    return 'BiologicallyDerivedProduct';
  }

  /** FHIR JSON for this BiologicallyDerivedProduct, typed as the plain `BiologicallyDerivedProduct` data type. */
  override toJSON(): plainTypes.BiologicallyDerivedProduct {
    return this.serialize() as plainTypes.BiologicallyDerivedProduct;
  }

  /** organ | tissue | fluid | cells | biologicalAgent (0..1) Created when absent. */
  getProductCategory(): Coding {
    if (this.productCategory === undefined) {
      this.productCategory = new Coding();
    }
    return this.productCategory;
  }

  setProductCategory(productCategory: Coding | undefined): this {
    return this.setFieldValue('productCategory', productCategory);
  }

  hasProductCategory(): boolean {
    return this.hasFieldValue('productCategory');
  }

  /** A code that identifies the kind of this biologically derived product (0..1) Created when absent. */
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

  /** The parent biologically-derived product (0..*) Never undefined; an empty list is created when absent. */
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

  /** Request to obtain and/or infuse this product (0..*) Never undefined; an empty list is created when absent. */
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

  /** Instance identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Processing facilities responsible for the labeling and distribution of this biologically derived product (0..*) Never undefined; an empty list is created when absent. */
  getProcessingFacility(): Reference[] {
    if (this.processingFacility === undefined) {
      this.processingFacility = [];
    }
    return this.processingFacility;
  }

  setProcessingFacility(processingFacility: Reference[] | undefined): this {
    return this.setFieldValue('processingFacility', processingFacility);
  }

  hasProcessingFacility(): boolean {
    return this.hasFieldValue('processingFacility');
  }

  /** Appends a new, empty Reference to `processingFacility` and returns it so it can be filled in. */
  addProcessingFacility(): Reference;
  /** Appends the given Reference to `processingFacility` and returns this object for chaining. */
  addProcessingFacility(reference: Reference): this;
  addProcessingFacility(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('processingFacility', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('processingFacility', createdReference);
    return createdReference;
  }

  /** The first Reference of `processingFacility`. One is added when the list is empty. */
  getProcessingFacilityFirstRep(): Reference {
    const firstReference = this.getProcessingFacility()[0];
    return firstReference === undefined ? this.addProcessingFacility() : firstReference;
  }

  /** A unique identifier for an aliquot of a product (0..1) */
  getDivision(): string | undefined {
    return this.division;
  }

  /** Sets `division`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDivision(division: string | undefined): this {
    return this.setFieldValue('division', division);
  }

  hasDivision(): boolean {
    return this.hasFieldValue('division');
  }

  /** The element carrying the id and extensions of `division`. Created when absent. */
  getDivisionElement(): Element {
    if (this._division === undefined) {
      this._division = new Element();
    }
    return this._division;
  }

  setDivisionElement(divisionElement: Element | undefined): this {
    this._division = divisionElement;
    return this;
  }

  /** available | unavailable (0..1) Created when absent. */
  getProductStatus(): Coding {
    if (this.productStatus === undefined) {
      this.productStatus = new Coding();
    }
    return this.productStatus;
  }

  setProductStatus(productStatus: Coding | undefined): this {
    return this.setFieldValue('productStatus', productStatus);
  }

  hasProductStatus(): boolean {
    return this.hasFieldValue('productStatus');
  }

  /** Date, and where relevant time, of expiration (0..1) */
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

  /** Product storage temperature requirements (0..1) Created when absent. */
  getStorageTempRequirements(): Range {
    if (this.storageTempRequirements === undefined) {
      this.storageTempRequirements = new Range();
    }
    return this.storageTempRequirements;
  }

  setStorageTempRequirements(storageTempRequirements: Range | undefined): this {
    return this.setFieldValue('storageTempRequirements', storageTempRequirements);
  }

  hasStorageTempRequirements(): boolean {
    return this.hasFieldValue('storageTempRequirements');
  }

  /** A property that is specific to this BiologicallyDerviedProduct instance (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): BiologicallyDerivedProductProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: BiologicallyDerivedProductProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty BiologicallyDerivedProductProperty to `property` and returns it so it can be filled in. */
  addProperty(): BiologicallyDerivedProductProperty;
  /** Appends the given BiologicallyDerivedProductProperty to `property` and returns this object for chaining. */
  addProperty(biologicallyDerivedProductProperty: BiologicallyDerivedProductProperty): this;
  addProperty(
    biologicallyDerivedProductProperty?: BiologicallyDerivedProductProperty
  ): BiologicallyDerivedProductProperty | this {
    if (biologicallyDerivedProductProperty !== undefined) {
      return this.addFieldValue('property', biologicallyDerivedProductProperty);
    }
    const createdBiologicallyDerivedProductProperty = new BiologicallyDerivedProductProperty();
    this.addFieldValue('property', createdBiologicallyDerivedProductProperty);
    return createdBiologicallyDerivedProductProperty;
  }

  /** The first BiologicallyDerivedProductProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): BiologicallyDerivedProductProperty {
    const firstBiologicallyDerivedProductProperty = this.getProperty()[0];
    return firstBiologicallyDerivedProductProperty === undefined
      ? this.addProperty()
      : firstBiologicallyDerivedProductProperty;
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

  /** The patient who underwent the medical procedure to collect the product or the organization that facilitated the collection (0..1) */
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

  /** The patient who underwent the medical procedure to collect the product or the organization that facilitated the collection (0..1) Created when absent. */
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
 * A property that is specific to this BiologicallyDerviedProduct instance
 */
export class BiologicallyDerivedProductProperty extends BackboneElement {
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
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valuePeriod', typeCode: 'Period' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueRatio', typeCode: 'Ratio' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
      ],
    },
  ];

  /** Code that specifies the property (1..1) */
  type?: CodeableConcept;

  /** Property values (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Property values (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Property values (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Property values (1..1) */
  valuePeriod?: Period;
  /** Property values (1..1) */
  valueQuantity?: Quantity;
  /** Property values (1..1) */
  valueRange?: Range;
  /** Property values (1..1) */
  valueRatio?: Ratio;
  /** Property values (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Property values (1..1) */
  valueAttachment?: Attachment;

  override fhirType(): string {
    return 'BiologicallyDerivedProduct.property';
  }

  /** FHIR JSON for this BiologicallyDerivedProductProperty, typed as the plain `BiologicallyDerivedProductProperty` data type. */
  override toJSON(): plainTypes.BiologicallyDerivedProductProperty {
    return this.serialize() as plainTypes.BiologicallyDerivedProductProperty;
  }

  /** Code that specifies the property (1..1) Created when absent. */
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

  /** Property values (1..1) Whichever type of `value[x]` is set. */
  getValue():
    | boolean
    | number
    | CodeableConcept
    | Period
    | Quantity
    | Range
    | Ratio
    | string
    | Attachment
    | undefined {
    return this.getChoiceValue<
      boolean | number | CodeableConcept | Period | Quantity | Range | Ratio | string | Attachment
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
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

  getValuePeriod(): Period | undefined {
    return this.valuePeriod;
  }

  /** Sets `value[x]` as Period and clears every other type of it. */
  setValuePeriod(valuePeriod: Period | undefined): this {
    return this.setFieldValue('valuePeriod', valuePeriod);
  }

  hasValuePeriod(): boolean {
    return this.hasFieldValue('valuePeriod');
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

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  getValueRatio(): Ratio | undefined {
    return this.valueRatio;
  }

  /** Sets `value[x]` as Ratio and clears every other type of it. */
  setValueRatio(valueRatio: Ratio | undefined): this {
    return this.setFieldValue('valueRatio', valueRatio);
  }

  hasValueRatio(): boolean {
    return this.hasFieldValue('valueRatio');
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
}

modelTypeRegistry.register(
  'BiologicallyDerivedProductProperty',
  BiologicallyDerivedProductProperty,
  false
);
