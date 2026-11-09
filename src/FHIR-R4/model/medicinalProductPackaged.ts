/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { MarketingStatus } from './marketingStatus';
import { ProdCharacteristic } from './prodCharacteristic';
import { ProductShelfLife } from './productShelfLife';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * A medicinal product in a container or package.
 */
export class MedicinalProductPackaged extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['MedicinalProduct'] },
      ],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'legalStatusOfSupply',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'legalStatusOfSupply', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'marketingStatus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'marketingStatus', typeCode: 'MarketingStatus' }],
    },
    {
      elementName: 'marketingAuthorization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'marketingAuthorization',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductAuthorization'],
        },
      ],
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
      elementName: 'batchIdentifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'batchIdentifier', typeCode: 'MedicinalProductPackagedBatchIdentifier' }],
    },
    {
      elementName: 'packageItem',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'packageItem', typeCode: 'MedicinalProductPackagedPackageItem' }],
    },
  ];

  readonly resourceType = 'MedicinalProductPackaged';

  /** Unique identifier (0..*) */
  identifier?: Identifier[];

  /** The product with this is a pack for (0..*) */
  subject?: Reference[];

  /** Textual description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The legal status of supply of the medicinal product as classified by the regulator (0..1) */
  legalStatusOfSupply?: CodeableConcept;

  /** Marketing information (0..*) */
  marketingStatus?: MarketingStatus[];

  /** Manufacturer of this Package Item (0..1) */
  marketingAuthorization?: Reference;

  /** Manufacturer of this Package Item (0..*) */
  manufacturer?: Reference[];

  /** Batch numbering (0..*) */
  batchIdentifier?: MedicinalProductPackagedBatchIdentifier[];

  /** A packaging item, as a contained for medicine, possibly with other packaging items within (1..*) */
  packageItem?: MedicinalProductPackagedPackageItem[];

  override fhirType(): string {
    return 'MedicinalProductPackaged';
  }

  /** FHIR JSON for this MedicinalProductPackaged, typed as the plain `MedicinalProductPackaged` data type. */
  override toJSON(): plainTypes.MedicinalProductPackaged {
    return this.serialize() as plainTypes.MedicinalProductPackaged;
  }

  /** Unique identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** The product with this is a pack for (0..*) Never undefined; an empty list is created when absent. */
  getSubject(): Reference[] {
    if (this.subject === undefined) {
      this.subject = [];
    }
    return this.subject;
  }

  setSubject(subject: Reference[] | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Appends a new, empty Reference to `subject` and returns it so it can be filled in. */
  addSubject(): Reference;
  /** Appends the given Reference to `subject` and returns this object for chaining. */
  addSubject(reference: Reference): this;
  addSubject(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subject', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subject', createdReference);
    return createdReference;
  }

  /** The first Reference of `subject`. One is added when the list is empty. */
  getSubjectFirstRep(): Reference {
    const firstReference = this.getSubject()[0];
    return firstReference === undefined ? this.addSubject() : firstReference;
  }

  /** Textual description (0..1) */
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

  /** The legal status of supply of the medicinal product as classified by the regulator (0..1) Created when absent. */
  getLegalStatusOfSupply(): CodeableConcept {
    if (this.legalStatusOfSupply === undefined) {
      this.legalStatusOfSupply = new CodeableConcept();
    }
    return this.legalStatusOfSupply;
  }

  setLegalStatusOfSupply(legalStatusOfSupply: CodeableConcept | undefined): this {
    return this.setFieldValue('legalStatusOfSupply', legalStatusOfSupply);
  }

  hasLegalStatusOfSupply(): boolean {
    return this.hasFieldValue('legalStatusOfSupply');
  }

  /** Marketing information (0..*) Never undefined; an empty list is created when absent. */
  getMarketingStatus(): MarketingStatus[] {
    if (this.marketingStatus === undefined) {
      this.marketingStatus = [];
    }
    return this.marketingStatus;
  }

  setMarketingStatus(marketingStatus: MarketingStatus[] | undefined): this {
    return this.setFieldValue('marketingStatus', marketingStatus);
  }

  hasMarketingStatus(): boolean {
    return this.hasFieldValue('marketingStatus');
  }

  /** Appends a new, empty MarketingStatus to `marketingStatus` and returns it so it can be filled in. */
  addMarketingStatus(): MarketingStatus;
  /** Appends the given MarketingStatus to `marketingStatus` and returns this object for chaining. */
  addMarketingStatus(marketingStatus: MarketingStatus): this;
  addMarketingStatus(marketingStatus?: MarketingStatus): MarketingStatus | this {
    if (marketingStatus !== undefined) {
      return this.addFieldValue('marketingStatus', marketingStatus);
    }
    const createdMarketingStatus = new MarketingStatus();
    this.addFieldValue('marketingStatus', createdMarketingStatus);
    return createdMarketingStatus;
  }

  /** The first MarketingStatus of `marketingStatus`. One is added when the list is empty. */
  getMarketingStatusFirstRep(): MarketingStatus {
    const firstMarketingStatus = this.getMarketingStatus()[0];
    return firstMarketingStatus === undefined ? this.addMarketingStatus() : firstMarketingStatus;
  }

  /** Manufacturer of this Package Item (0..1) Created when absent. */
  getMarketingAuthorization(): Reference {
    if (this.marketingAuthorization === undefined) {
      this.marketingAuthorization = new Reference();
    }
    return this.marketingAuthorization;
  }

  setMarketingAuthorization(marketingAuthorization: Reference | undefined): this {
    return this.setFieldValue('marketingAuthorization', marketingAuthorization);
  }

  hasMarketingAuthorization(): boolean {
    return this.hasFieldValue('marketingAuthorization');
  }

  /** Manufacturer of this Package Item (0..*) Never undefined; an empty list is created when absent. */
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

  /** Batch numbering (0..*) Never undefined; an empty list is created when absent. */
  getBatchIdentifier(): MedicinalProductPackagedBatchIdentifier[] {
    if (this.batchIdentifier === undefined) {
      this.batchIdentifier = [];
    }
    return this.batchIdentifier;
  }

  setBatchIdentifier(batchIdentifier: MedicinalProductPackagedBatchIdentifier[] | undefined): this {
    return this.setFieldValue('batchIdentifier', batchIdentifier);
  }

  hasBatchIdentifier(): boolean {
    return this.hasFieldValue('batchIdentifier');
  }

  /** Appends a new, empty MedicinalProductPackagedBatchIdentifier to `batchIdentifier` and returns it so it can be filled in. */
  addBatchIdentifier(): MedicinalProductPackagedBatchIdentifier;
  /** Appends the given MedicinalProductPackagedBatchIdentifier to `batchIdentifier` and returns this object for chaining. */
  addBatchIdentifier(
    medicinalProductPackagedBatchIdentifier: MedicinalProductPackagedBatchIdentifier
  ): this;
  addBatchIdentifier(
    medicinalProductPackagedBatchIdentifier?: MedicinalProductPackagedBatchIdentifier
  ): MedicinalProductPackagedBatchIdentifier | this {
    if (medicinalProductPackagedBatchIdentifier !== undefined) {
      return this.addFieldValue('batchIdentifier', medicinalProductPackagedBatchIdentifier);
    }
    const createdMedicinalProductPackagedBatchIdentifier =
      new MedicinalProductPackagedBatchIdentifier();
    this.addFieldValue('batchIdentifier', createdMedicinalProductPackagedBatchIdentifier);
    return createdMedicinalProductPackagedBatchIdentifier;
  }

  /** The first MedicinalProductPackagedBatchIdentifier of `batchIdentifier`. One is added when the list is empty. */
  getBatchIdentifierFirstRep(): MedicinalProductPackagedBatchIdentifier {
    const firstMedicinalProductPackagedBatchIdentifier = this.getBatchIdentifier()[0];
    return firstMedicinalProductPackagedBatchIdentifier === undefined
      ? this.addBatchIdentifier()
      : firstMedicinalProductPackagedBatchIdentifier;
  }

  /** A packaging item, as a contained for medicine, possibly with other packaging items within (1..*) Never undefined; an empty list is created when absent. */
  getPackageItem(): MedicinalProductPackagedPackageItem[] {
    if (this.packageItem === undefined) {
      this.packageItem = [];
    }
    return this.packageItem;
  }

  setPackageItem(packageItem: MedicinalProductPackagedPackageItem[] | undefined): this {
    return this.setFieldValue('packageItem', packageItem);
  }

  hasPackageItem(): boolean {
    return this.hasFieldValue('packageItem');
  }

  /** Appends a new, empty MedicinalProductPackagedPackageItem to `packageItem` and returns it so it can be filled in. */
  addPackageItem(): MedicinalProductPackagedPackageItem;
  /** Appends the given MedicinalProductPackagedPackageItem to `packageItem` and returns this object for chaining. */
  addPackageItem(medicinalProductPackagedPackageItem: MedicinalProductPackagedPackageItem): this;
  addPackageItem(
    medicinalProductPackagedPackageItem?: MedicinalProductPackagedPackageItem
  ): MedicinalProductPackagedPackageItem | this {
    if (medicinalProductPackagedPackageItem !== undefined) {
      return this.addFieldValue('packageItem', medicinalProductPackagedPackageItem);
    }
    const createdMedicinalProductPackagedPackageItem = new MedicinalProductPackagedPackageItem();
    this.addFieldValue('packageItem', createdMedicinalProductPackagedPackageItem);
    return createdMedicinalProductPackagedPackageItem;
  }

  /** The first MedicinalProductPackagedPackageItem of `packageItem`. One is added when the list is empty. */
  getPackageItemFirstRep(): MedicinalProductPackagedPackageItem {
    const firstMedicinalProductPackagedPackageItem = this.getPackageItem()[0];
    return firstMedicinalProductPackagedPackageItem === undefined
      ? this.addPackageItem()
      : firstMedicinalProductPackagedPackageItem;
  }
}

modelTypeRegistry.register('MedicinalProductPackaged', MedicinalProductPackaged, true);

/** True when the value is a MedicinalProductPackaged model instance. */
export function isMedicinalProductPackaged(
  candidate: unknown
): candidate is MedicinalProductPackaged {
  return candidate instanceof MedicinalProductPackaged;
}

/**
 * Batch numbering
 */
export class MedicinalProductPackagedBatchIdentifier extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'outerPackaging',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outerPackaging', typeCode: 'Identifier' }],
    },
    {
      elementName: 'immediatePackaging',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'immediatePackaging', typeCode: 'Identifier' }],
    },
  ];

  /** A number appearing on the outer packaging of a specific batch (1..1) */
  outerPackaging?: Identifier;

  /** A number appearing on the immediate packaging (and not the outer packaging) (0..1) */
  immediatePackaging?: Identifier;

  override fhirType(): string {
    return 'MedicinalProductPackaged.batchIdentifier';
  }

  /** FHIR JSON for this MedicinalProductPackagedBatchIdentifier, typed as the plain `MedicinalProductPackagedBatchIdentifier` data type. */
  override toJSON(): plainTypes.MedicinalProductPackagedBatchIdentifier {
    return this.serialize() as plainTypes.MedicinalProductPackagedBatchIdentifier;
  }

  /** A number appearing on the outer packaging of a specific batch (1..1) Created when absent. */
  getOuterPackaging(): Identifier {
    if (this.outerPackaging === undefined) {
      this.outerPackaging = new Identifier();
    }
    return this.outerPackaging;
  }

  setOuterPackaging(outerPackaging: Identifier | undefined): this {
    return this.setFieldValue('outerPackaging', outerPackaging);
  }

  hasOuterPackaging(): boolean {
    return this.hasFieldValue('outerPackaging');
  }

  /** A number appearing on the immediate packaging (and not the outer packaging) (0..1) Created when absent. */
  getImmediatePackaging(): Identifier {
    if (this.immediatePackaging === undefined) {
      this.immediatePackaging = new Identifier();
    }
    return this.immediatePackaging;
  }

  setImmediatePackaging(immediatePackaging: Identifier | undefined): this {
    return this.setFieldValue('immediatePackaging', immediatePackaging);
  }

  hasImmediatePackaging(): boolean {
    return this.hasFieldValue('immediatePackaging');
  }
}

modelTypeRegistry.register(
  'MedicinalProductPackagedBatchIdentifier',
  MedicinalProductPackagedBatchIdentifier,
  false
);

/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within
 */
export class MedicinalProductPackagedPackageItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'material',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'material', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'alternateMaterial',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'alternateMaterial', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'device', typeCode: 'Reference', targetResourceTypes: ['DeviceDefinition'] },
      ],
    },
    {
      elementName: 'manufacturedItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'manufacturedItem',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductManufactured'],
        },
      ],
    },
    {
      elementName: 'packageItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'packageItem', typeCode: 'MedicinalProductPackagedPackageItem' }],
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
    {
      elementName: 'shelfLifeStorage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'shelfLifeStorage', typeCode: 'ProductShelfLife' }],
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
  ];

  /** Including possibly Data Carrier Identifier (0..*) */
  identifier?: Identifier[];

  /** The physical type of the container of the medicine (1..1) */
  type?: CodeableConcept;

  /** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1 (1..1) */
  quantity?: Quantity;

  /** Material type of the package item (0..*) */
  material?: CodeableConcept[];

  /** A possible alternate material for the packaging (0..*) */
  alternateMaterial?: CodeableConcept[];

  /** A device accompanying a medicinal product (0..*) */
  device?: Reference[];

  /** The manufactured item as contained in the packaged medicinal product (0..*) */
  manufacturedItem?: Reference[];

  /** Allows containers within containers (0..*) */
  packageItem?: MedicinalProductPackagedPackageItem[];

  /** Dimensions, color etc. (0..1) */
  physicalCharacteristics?: ProdCharacteristic;

  /** Other codeable characteristics (0..*) */
  otherCharacteristics?: CodeableConcept[];

  /** Shelf Life and storage information (0..*) */
  shelfLifeStorage?: ProductShelfLife[];

  /** Manufacturer of this Package Item (0..*) */
  manufacturer?: Reference[];

  override fhirType(): string {
    return 'MedicinalProductPackaged.packageItem';
  }

  /** FHIR JSON for this MedicinalProductPackagedPackageItem, typed as the plain `MedicinalProductPackagedPackageItem` data type. */
  override toJSON(): plainTypes.MedicinalProductPackagedPackageItem {
    return this.serialize() as plainTypes.MedicinalProductPackagedPackageItem;
  }

  /** Including possibly Data Carrier Identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** The physical type of the container of the medicine (1..1) Created when absent. */
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

  /** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1 (1..1) Created when absent. */
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

  /** Material type of the package item (0..*) Never undefined; an empty list is created when absent. */
  getMaterial(): CodeableConcept[] {
    if (this.material === undefined) {
      this.material = [];
    }
    return this.material;
  }

  setMaterial(material: CodeableConcept[] | undefined): this {
    return this.setFieldValue('material', material);
  }

  hasMaterial(): boolean {
    return this.hasFieldValue('material');
  }

  /** Appends a new, empty CodeableConcept to `material` and returns it so it can be filled in. */
  addMaterial(): CodeableConcept;
  /** Appends the given CodeableConcept to `material` and returns this object for chaining. */
  addMaterial(codeableConcept: CodeableConcept): this;
  addMaterial(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('material', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('material', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `material`. One is added when the list is empty. */
  getMaterialFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getMaterial()[0];
    return firstCodeableConcept === undefined ? this.addMaterial() : firstCodeableConcept;
  }

  /** A possible alternate material for the packaging (0..*) Never undefined; an empty list is created when absent. */
  getAlternateMaterial(): CodeableConcept[] {
    if (this.alternateMaterial === undefined) {
      this.alternateMaterial = [];
    }
    return this.alternateMaterial;
  }

  setAlternateMaterial(alternateMaterial: CodeableConcept[] | undefined): this {
    return this.setFieldValue('alternateMaterial', alternateMaterial);
  }

  hasAlternateMaterial(): boolean {
    return this.hasFieldValue('alternateMaterial');
  }

  /** Appends a new, empty CodeableConcept to `alternateMaterial` and returns it so it can be filled in. */
  addAlternateMaterial(): CodeableConcept;
  /** Appends the given CodeableConcept to `alternateMaterial` and returns this object for chaining. */
  addAlternateMaterial(codeableConcept: CodeableConcept): this;
  addAlternateMaterial(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('alternateMaterial', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('alternateMaterial', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `alternateMaterial`. One is added when the list is empty. */
  getAlternateMaterialFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getAlternateMaterial()[0];
    return firstCodeableConcept === undefined ? this.addAlternateMaterial() : firstCodeableConcept;
  }

  /** A device accompanying a medicinal product (0..*) Never undefined; an empty list is created when absent. */
  getDevice(): Reference[] {
    if (this.device === undefined) {
      this.device = [];
    }
    return this.device;
  }

  setDevice(device: Reference[] | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Appends a new, empty Reference to `device` and returns it so it can be filled in. */
  addDevice(): Reference;
  /** Appends the given Reference to `device` and returns this object for chaining. */
  addDevice(reference: Reference): this;
  addDevice(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('device', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('device', createdReference);
    return createdReference;
  }

  /** The first Reference of `device`. One is added when the list is empty. */
  getDeviceFirstRep(): Reference {
    const firstReference = this.getDevice()[0];
    return firstReference === undefined ? this.addDevice() : firstReference;
  }

  /** The manufactured item as contained in the packaged medicinal product (0..*) Never undefined; an empty list is created when absent. */
  getManufacturedItem(): Reference[] {
    if (this.manufacturedItem === undefined) {
      this.manufacturedItem = [];
    }
    return this.manufacturedItem;
  }

  setManufacturedItem(manufacturedItem: Reference[] | undefined): this {
    return this.setFieldValue('manufacturedItem', manufacturedItem);
  }

  hasManufacturedItem(): boolean {
    return this.hasFieldValue('manufacturedItem');
  }

  /** Appends a new, empty Reference to `manufacturedItem` and returns it so it can be filled in. */
  addManufacturedItem(): Reference;
  /** Appends the given Reference to `manufacturedItem` and returns this object for chaining. */
  addManufacturedItem(reference: Reference): this;
  addManufacturedItem(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('manufacturedItem', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('manufacturedItem', createdReference);
    return createdReference;
  }

  /** The first Reference of `manufacturedItem`. One is added when the list is empty. */
  getManufacturedItemFirstRep(): Reference {
    const firstReference = this.getManufacturedItem()[0];
    return firstReference === undefined ? this.addManufacturedItem() : firstReference;
  }

  /** Allows containers within containers (0..*) Never undefined; an empty list is created when absent. */
  getPackageItem(): MedicinalProductPackagedPackageItem[] {
    if (this.packageItem === undefined) {
      this.packageItem = [];
    }
    return this.packageItem;
  }

  setPackageItem(packageItem: MedicinalProductPackagedPackageItem[] | undefined): this {
    return this.setFieldValue('packageItem', packageItem);
  }

  hasPackageItem(): boolean {
    return this.hasFieldValue('packageItem');
  }

  /** Appends a new, empty MedicinalProductPackagedPackageItem to `packageItem` and returns it so it can be filled in. */
  addPackageItem(): MedicinalProductPackagedPackageItem;
  /** Appends the given MedicinalProductPackagedPackageItem to `packageItem` and returns this object for chaining. */
  addPackageItem(medicinalProductPackagedPackageItem: MedicinalProductPackagedPackageItem): this;
  addPackageItem(
    medicinalProductPackagedPackageItem?: MedicinalProductPackagedPackageItem
  ): MedicinalProductPackagedPackageItem | this {
    if (medicinalProductPackagedPackageItem !== undefined) {
      return this.addFieldValue('packageItem', medicinalProductPackagedPackageItem);
    }
    const createdMedicinalProductPackagedPackageItem = new MedicinalProductPackagedPackageItem();
    this.addFieldValue('packageItem', createdMedicinalProductPackagedPackageItem);
    return createdMedicinalProductPackagedPackageItem;
  }

  /** The first MedicinalProductPackagedPackageItem of `packageItem`. One is added when the list is empty. */
  getPackageItemFirstRep(): MedicinalProductPackagedPackageItem {
    const firstMedicinalProductPackagedPackageItem = this.getPackageItem()[0];
    return firstMedicinalProductPackagedPackageItem === undefined
      ? this.addPackageItem()
      : firstMedicinalProductPackagedPackageItem;
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

  /** Shelf Life and storage information (0..*) Never undefined; an empty list is created when absent. */
  getShelfLifeStorage(): ProductShelfLife[] {
    if (this.shelfLifeStorage === undefined) {
      this.shelfLifeStorage = [];
    }
    return this.shelfLifeStorage;
  }

  setShelfLifeStorage(shelfLifeStorage: ProductShelfLife[] | undefined): this {
    return this.setFieldValue('shelfLifeStorage', shelfLifeStorage);
  }

  hasShelfLifeStorage(): boolean {
    return this.hasFieldValue('shelfLifeStorage');
  }

  /** Appends a new, empty ProductShelfLife to `shelfLifeStorage` and returns it so it can be filled in. */
  addShelfLifeStorage(): ProductShelfLife;
  /** Appends the given ProductShelfLife to `shelfLifeStorage` and returns this object for chaining. */
  addShelfLifeStorage(productShelfLife: ProductShelfLife): this;
  addShelfLifeStorage(productShelfLife?: ProductShelfLife): ProductShelfLife | this {
    if (productShelfLife !== undefined) {
      return this.addFieldValue('shelfLifeStorage', productShelfLife);
    }
    const createdProductShelfLife = new ProductShelfLife();
    this.addFieldValue('shelfLifeStorage', createdProductShelfLife);
    return createdProductShelfLife;
  }

  /** The first ProductShelfLife of `shelfLifeStorage`. One is added when the list is empty. */
  getShelfLifeStorageFirstRep(): ProductShelfLife {
    const firstProductShelfLife = this.getShelfLifeStorage()[0];
    return firstProductShelfLife === undefined ? this.addShelfLifeStorage() : firstProductShelfLife;
  }

  /** Manufacturer of this Package Item (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register(
  'MedicinalProductPackagedPackageItem',
  MedicinalProductPackagedPackageItem,
  false
);
