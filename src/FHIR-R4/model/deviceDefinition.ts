/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { ProdCharacteristic } from './prodCharacteristic';
import { ProductShelfLife } from './productShelfLife';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export class DeviceDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'udiDeviceIdentifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'udiDeviceIdentifier', typeCode: 'DeviceDefinitionUdiDeviceIdentifier' }],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'manufacturerString', typeCode: 'string' },
        {
          jsonKey: 'manufacturerReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'deviceName',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'deviceName', typeCode: 'DeviceDefinitionDeviceName' }],
    },
    {
      elementName: 'modelNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'modelNumber', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specialization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialization', typeCode: 'DeviceDefinitionSpecialization' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'safety',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'safety', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'shelfLifeStorage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'shelfLifeStorage', typeCode: 'ProductShelfLife' }],
    },
    {
      elementName: 'physicalCharacteristics',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'physicalCharacteristics', typeCode: 'ProdCharacteristic' }],
    },
    {
      elementName: 'languageCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'languageCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'capability',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'capability', typeCode: 'DeviceDefinitionCapability' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'DeviceDefinitionProperty' }],
    },
    {
      elementName: 'owner',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'owner', typeCode: 'Reference', targetResourceTypes: ['Organization'] }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactPoint' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'onlineInformation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'onlineInformation', typeCode: 'uri' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'parentDevice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'parentDevice',
          typeCode: 'Reference',
          targetResourceTypes: ['DeviceDefinition'],
        },
      ],
    },
    {
      elementName: 'material',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'material', typeCode: 'DeviceDefinitionMaterial' }],
    },
  ];

  readonly resourceType = 'DeviceDefinition';

  /** Instance identifier (0..*) */
  identifier?: Identifier[];

  /** Unique Device Identifier (UDI) Barcode string (0..*) */
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  /** Name of device manufacturer (0..1) */
  manufacturerString?: string;
  /** Id and extensions of the primitive `manufacturerString`. */
  _manufacturerString?: Element;
  /** Name of device manufacturer (0..1) */
  manufacturerReference?: Reference;

  /** A name given to the device to identify it (0..*) */
  deviceName?: DeviceDefinitionDeviceName[];

  /** The model number for the device (0..1) */
  modelNumber?: string;
  /** Id and extensions of the primitive `modelNumber`. */
  _modelNumber?: Element;

  /** What kind of device or device system this is (0..1) */
  type?: CodeableConcept;

  /** The capabilities supported on a device, the standards to which the device conforms for a particular purpose, and used for the communication (0..*) */
  specialization?: DeviceDefinitionSpecialization[];

  /** Available versions (0..*) */
  version?: string[];
  /** Id and extensions of the primitive `version`. */
  _version?: (Element | null)[];

  /** Safety characteristics of the device (0..*) */
  safety?: CodeableConcept[];

  /** Shelf Life and storage information (0..*) */
  shelfLifeStorage?: ProductShelfLife[];

  /** Dimensions, color etc. (0..1) */
  physicalCharacteristics?: ProdCharacteristic;

  /** Language code for the human-readable text strings produced by the device (all supported) (0..*) */
  languageCode?: CodeableConcept[];

  /** Device capabilities (0..*) */
  capability?: DeviceDefinitionCapability[];

  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties (0..*) */
  property?: DeviceDefinitionProperty[];

  /** Organization responsible for device (0..1) */
  owner?: Reference;

  /** Details for human/organization for support (0..*) */
  contact?: ContactPoint[];

  /** Network address to contact device (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Access to on-line information (0..1) */
  onlineInformation?: string;
  /** Id and extensions of the primitive `onlineInformation`. */
  _onlineInformation?: Element;

  /** Device notes and comments (0..*) */
  note?: Annotation[];

  /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) (0..1) */
  quantity?: Quantity;

  /** The parent device it can be part of (0..1) */
  parentDevice?: Reference;

  /** A substance used to create the material(s) of which the device is made (0..*) */
  material?: DeviceDefinitionMaterial[];

  override fhirType(): string {
    return 'DeviceDefinition';
  }

  /** FHIR JSON for this DeviceDefinition, typed as the plain `DeviceDefinition` data type. */
  override toJSON(): plainTypes.DeviceDefinition {
    return this.serialize() as plainTypes.DeviceDefinition;
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

  /** Unique Device Identifier (UDI) Barcode string (0..*) Never undefined; an empty list is created when absent. */
  getUdiDeviceIdentifier(): DeviceDefinitionUdiDeviceIdentifier[] {
    if (this.udiDeviceIdentifier === undefined) {
      this.udiDeviceIdentifier = [];
    }
    return this.udiDeviceIdentifier;
  }

  setUdiDeviceIdentifier(
    udiDeviceIdentifier: DeviceDefinitionUdiDeviceIdentifier[] | undefined
  ): this {
    return this.setFieldValue('udiDeviceIdentifier', udiDeviceIdentifier);
  }

  hasUdiDeviceIdentifier(): boolean {
    return this.hasFieldValue('udiDeviceIdentifier');
  }

  /** Appends a new, empty DeviceDefinitionUdiDeviceIdentifier to `udiDeviceIdentifier` and returns it so it can be filled in. */
  addUdiDeviceIdentifier(): DeviceDefinitionUdiDeviceIdentifier;
  /** Appends the given DeviceDefinitionUdiDeviceIdentifier to `udiDeviceIdentifier` and returns this object for chaining. */
  addUdiDeviceIdentifier(
    deviceDefinitionUdiDeviceIdentifier: DeviceDefinitionUdiDeviceIdentifier
  ): this;
  addUdiDeviceIdentifier(
    deviceDefinitionUdiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier
  ): DeviceDefinitionUdiDeviceIdentifier | this {
    if (deviceDefinitionUdiDeviceIdentifier !== undefined) {
      return this.addFieldValue('udiDeviceIdentifier', deviceDefinitionUdiDeviceIdentifier);
    }
    const createdDeviceDefinitionUdiDeviceIdentifier = new DeviceDefinitionUdiDeviceIdentifier();
    this.addFieldValue('udiDeviceIdentifier', createdDeviceDefinitionUdiDeviceIdentifier);
    return createdDeviceDefinitionUdiDeviceIdentifier;
  }

  /** The first DeviceDefinitionUdiDeviceIdentifier of `udiDeviceIdentifier`. One is added when the list is empty. */
  getUdiDeviceIdentifierFirstRep(): DeviceDefinitionUdiDeviceIdentifier {
    const firstDeviceDefinitionUdiDeviceIdentifier = this.getUdiDeviceIdentifier()[0];
    return firstDeviceDefinitionUdiDeviceIdentifier === undefined
      ? this.addUdiDeviceIdentifier()
      : firstDeviceDefinitionUdiDeviceIdentifier;
  }

  /** Name of device manufacturer (0..1) Whichever type of `manufacturer[x]` is set. */
  getManufacturer(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('manufacturer');
  }

  /** True when any type of `manufacturer[x]` is set. */
  hasManufacturer(): boolean {
    return this.hasChoiceValue('manufacturer');
  }

  getManufacturerString(): string | undefined {
    return this.manufacturerString;
  }

  /** Sets `manufacturer[x]` as string and clears every other type of it. */
  setManufacturerString(manufacturerString: string | undefined): this {
    return this.setFieldValue('manufacturerString', manufacturerString);
  }

  hasManufacturerString(): boolean {
    return this.hasFieldValue('manufacturerString');
  }

  getManufacturerReference(): Reference | undefined {
    return this.manufacturerReference;
  }

  /** Sets `manufacturer[x]` as Reference and clears every other type of it. */
  setManufacturerReference(manufacturerReference: Reference | undefined): this {
    return this.setFieldValue('manufacturerReference', manufacturerReference);
  }

  hasManufacturerReference(): boolean {
    return this.hasFieldValue('manufacturerReference');
  }

  /** A name given to the device to identify it (0..*) Never undefined; an empty list is created when absent. */
  getDeviceName(): DeviceDefinitionDeviceName[] {
    if (this.deviceName === undefined) {
      this.deviceName = [];
    }
    return this.deviceName;
  }

  setDeviceName(deviceName: DeviceDefinitionDeviceName[] | undefined): this {
    return this.setFieldValue('deviceName', deviceName);
  }

  hasDeviceName(): boolean {
    return this.hasFieldValue('deviceName');
  }

  /** Appends a new, empty DeviceDefinitionDeviceName to `deviceName` and returns it so it can be filled in. */
  addDeviceName(): DeviceDefinitionDeviceName;
  /** Appends the given DeviceDefinitionDeviceName to `deviceName` and returns this object for chaining. */
  addDeviceName(deviceDefinitionDeviceName: DeviceDefinitionDeviceName): this;
  addDeviceName(
    deviceDefinitionDeviceName?: DeviceDefinitionDeviceName
  ): DeviceDefinitionDeviceName | this {
    if (deviceDefinitionDeviceName !== undefined) {
      return this.addFieldValue('deviceName', deviceDefinitionDeviceName);
    }
    const createdDeviceDefinitionDeviceName = new DeviceDefinitionDeviceName();
    this.addFieldValue('deviceName', createdDeviceDefinitionDeviceName);
    return createdDeviceDefinitionDeviceName;
  }

  /** The first DeviceDefinitionDeviceName of `deviceName`. One is added when the list is empty. */
  getDeviceNameFirstRep(): DeviceDefinitionDeviceName {
    const firstDeviceDefinitionDeviceName = this.getDeviceName()[0];
    return firstDeviceDefinitionDeviceName === undefined
      ? this.addDeviceName()
      : firstDeviceDefinitionDeviceName;
  }

  /** The model number for the device (0..1) */
  getModelNumber(): string | undefined {
    return this.modelNumber;
  }

  /** Sets `modelNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setModelNumber(modelNumber: string | undefined): this {
    return this.setFieldValue('modelNumber', modelNumber);
  }

  hasModelNumber(): boolean {
    return this.hasFieldValue('modelNumber');
  }

  /** The element carrying the id and extensions of `modelNumber`. Created when absent. */
  getModelNumberElement(): Element {
    if (this._modelNumber === undefined) {
      this._modelNumber = new Element();
    }
    return this._modelNumber;
  }

  setModelNumberElement(modelNumberElement: Element | undefined): this {
    this._modelNumber = modelNumberElement;
    return this;
  }

  /** What kind of device or device system this is (0..1) Created when absent. */
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

  /** The capabilities supported on a device, the standards to which the device conforms for a particular purpose, and used for the communication (0..*) Never undefined; an empty list is created when absent. */
  getSpecialization(): DeviceDefinitionSpecialization[] {
    if (this.specialization === undefined) {
      this.specialization = [];
    }
    return this.specialization;
  }

  setSpecialization(specialization: DeviceDefinitionSpecialization[] | undefined): this {
    return this.setFieldValue('specialization', specialization);
  }

  hasSpecialization(): boolean {
    return this.hasFieldValue('specialization');
  }

  /** Appends a new, empty DeviceDefinitionSpecialization to `specialization` and returns it so it can be filled in. */
  addSpecialization(): DeviceDefinitionSpecialization;
  /** Appends the given DeviceDefinitionSpecialization to `specialization` and returns this object for chaining. */
  addSpecialization(deviceDefinitionSpecialization: DeviceDefinitionSpecialization): this;
  addSpecialization(
    deviceDefinitionSpecialization?: DeviceDefinitionSpecialization
  ): DeviceDefinitionSpecialization | this {
    if (deviceDefinitionSpecialization !== undefined) {
      return this.addFieldValue('specialization', deviceDefinitionSpecialization);
    }
    const createdDeviceDefinitionSpecialization = new DeviceDefinitionSpecialization();
    this.addFieldValue('specialization', createdDeviceDefinitionSpecialization);
    return createdDeviceDefinitionSpecialization;
  }

  /** The first DeviceDefinitionSpecialization of `specialization`. One is added when the list is empty. */
  getSpecializationFirstRep(): DeviceDefinitionSpecialization {
    const firstDeviceDefinitionSpecialization = this.getSpecialization()[0];
    return firstDeviceDefinitionSpecialization === undefined
      ? this.addSpecialization()
      : firstDeviceDefinitionSpecialization;
  }

  /** Available versions (0..*) Never undefined; an empty list is created when absent. */
  getVersion(): string[] {
    if (this.version === undefined) {
      this.version = [];
    }
    return this.version;
  }

  setVersion(version: string[] | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** Appends one value to `version`. Throws a FhirModelError when it is not a valid FHIR string. */
  addVersion(version: string): this {
    return this.addFieldValue('version', version);
  }

  /** Safety characteristics of the device (0..*) Never undefined; an empty list is created when absent. */
  getSafety(): CodeableConcept[] {
    if (this.safety === undefined) {
      this.safety = [];
    }
    return this.safety;
  }

  setSafety(safety: CodeableConcept[] | undefined): this {
    return this.setFieldValue('safety', safety);
  }

  hasSafety(): boolean {
    return this.hasFieldValue('safety');
  }

  /** Appends a new, empty CodeableConcept to `safety` and returns it so it can be filled in. */
  addSafety(): CodeableConcept;
  /** Appends the given CodeableConcept to `safety` and returns this object for chaining. */
  addSafety(codeableConcept: CodeableConcept): this;
  addSafety(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('safety', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('safety', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `safety`. One is added when the list is empty. */
  getSafetyFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSafety()[0];
    return firstCodeableConcept === undefined ? this.addSafety() : firstCodeableConcept;
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

  /** Language code for the human-readable text strings produced by the device (all supported) (0..*) Never undefined; an empty list is created when absent. */
  getLanguageCode(): CodeableConcept[] {
    if (this.languageCode === undefined) {
      this.languageCode = [];
    }
    return this.languageCode;
  }

  setLanguageCode(languageCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('languageCode', languageCode);
  }

  hasLanguageCode(): boolean {
    return this.hasFieldValue('languageCode');
  }

  /** Appends a new, empty CodeableConcept to `languageCode` and returns it so it can be filled in. */
  addLanguageCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `languageCode` and returns this object for chaining. */
  addLanguageCode(codeableConcept: CodeableConcept): this;
  addLanguageCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('languageCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('languageCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `languageCode`. One is added when the list is empty. */
  getLanguageCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getLanguageCode()[0];
    return firstCodeableConcept === undefined ? this.addLanguageCode() : firstCodeableConcept;
  }

  /** Device capabilities (0..*) Never undefined; an empty list is created when absent. */
  getCapability(): DeviceDefinitionCapability[] {
    if (this.capability === undefined) {
      this.capability = [];
    }
    return this.capability;
  }

  setCapability(capability: DeviceDefinitionCapability[] | undefined): this {
    return this.setFieldValue('capability', capability);
  }

  hasCapability(): boolean {
    return this.hasFieldValue('capability');
  }

  /** Appends a new, empty DeviceDefinitionCapability to `capability` and returns it so it can be filled in. */
  addCapability(): DeviceDefinitionCapability;
  /** Appends the given DeviceDefinitionCapability to `capability` and returns this object for chaining. */
  addCapability(deviceDefinitionCapability: DeviceDefinitionCapability): this;
  addCapability(
    deviceDefinitionCapability?: DeviceDefinitionCapability
  ): DeviceDefinitionCapability | this {
    if (deviceDefinitionCapability !== undefined) {
      return this.addFieldValue('capability', deviceDefinitionCapability);
    }
    const createdDeviceDefinitionCapability = new DeviceDefinitionCapability();
    this.addFieldValue('capability', createdDeviceDefinitionCapability);
    return createdDeviceDefinitionCapability;
  }

  /** The first DeviceDefinitionCapability of `capability`. One is added when the list is empty. */
  getCapabilityFirstRep(): DeviceDefinitionCapability {
    const firstDeviceDefinitionCapability = this.getCapability()[0];
    return firstDeviceDefinitionCapability === undefined
      ? this.addCapability()
      : firstDeviceDefinitionCapability;
  }

  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): DeviceDefinitionProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: DeviceDefinitionProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty DeviceDefinitionProperty to `property` and returns it so it can be filled in. */
  addProperty(): DeviceDefinitionProperty;
  /** Appends the given DeviceDefinitionProperty to `property` and returns this object for chaining. */
  addProperty(deviceDefinitionProperty: DeviceDefinitionProperty): this;
  addProperty(
    deviceDefinitionProperty?: DeviceDefinitionProperty
  ): DeviceDefinitionProperty | this {
    if (deviceDefinitionProperty !== undefined) {
      return this.addFieldValue('property', deviceDefinitionProperty);
    }
    const createdDeviceDefinitionProperty = new DeviceDefinitionProperty();
    this.addFieldValue('property', createdDeviceDefinitionProperty);
    return createdDeviceDefinitionProperty;
  }

  /** The first DeviceDefinitionProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): DeviceDefinitionProperty {
    const firstDeviceDefinitionProperty = this.getProperty()[0];
    return firstDeviceDefinitionProperty === undefined
      ? this.addProperty()
      : firstDeviceDefinitionProperty;
  }

  /** Organization responsible for device (0..1) Created when absent. */
  getOwner(): Reference {
    if (this.owner === undefined) {
      this.owner = new Reference();
    }
    return this.owner;
  }

  setOwner(owner: Reference | undefined): this {
    return this.setFieldValue('owner', owner);
  }

  hasOwner(): boolean {
    return this.hasFieldValue('owner');
  }

  /** Details for human/organization for support (0..*) Never undefined; an empty list is created when absent. */
  getContact(): ContactPoint[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: ContactPoint[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty ContactPoint to `contact` and returns it so it can be filled in. */
  addContact(): ContactPoint;
  /** Appends the given ContactPoint to `contact` and returns this object for chaining. */
  addContact(contactPoint: ContactPoint): this;
  addContact(contactPoint?: ContactPoint): ContactPoint | this {
    if (contactPoint !== undefined) {
      return this.addFieldValue('contact', contactPoint);
    }
    const createdContactPoint = new ContactPoint();
    this.addFieldValue('contact', createdContactPoint);
    return createdContactPoint;
  }

  /** The first ContactPoint of `contact`. One is added when the list is empty. */
  getContactFirstRep(): ContactPoint {
    const firstContactPoint = this.getContact()[0];
    return firstContactPoint === undefined ? this.addContact() : firstContactPoint;
  }

  /** Network address to contact device (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }

  /** Access to on-line information (0..1) */
  getOnlineInformation(): string | undefined {
    return this.onlineInformation;
  }

  /** Sets `onlineInformation`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setOnlineInformation(onlineInformation: string | undefined): this {
    return this.setFieldValue('onlineInformation', onlineInformation);
  }

  hasOnlineInformation(): boolean {
    return this.hasFieldValue('onlineInformation');
  }

  /** The element carrying the id and extensions of `onlineInformation`. Created when absent. */
  getOnlineInformationElement(): Element {
    if (this._onlineInformation === undefined) {
      this._onlineInformation = new Element();
    }
    return this._onlineInformation;
  }

  setOnlineInformationElement(onlineInformationElement: Element | undefined): this {
    this._onlineInformation = onlineInformationElement;
    return this;
  }

  /** Device notes and comments (0..*) Never undefined; an empty list is created when absent. */
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

  /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) (0..1) Created when absent. */
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

  /** The parent device it can be part of (0..1) Created when absent. */
  getParentDevice(): Reference {
    if (this.parentDevice === undefined) {
      this.parentDevice = new Reference();
    }
    return this.parentDevice;
  }

  setParentDevice(parentDevice: Reference | undefined): this {
    return this.setFieldValue('parentDevice', parentDevice);
  }

  hasParentDevice(): boolean {
    return this.hasFieldValue('parentDevice');
  }

  /** A substance used to create the material(s) of which the device is made (0..*) Never undefined; an empty list is created when absent. */
  getMaterial(): DeviceDefinitionMaterial[] {
    if (this.material === undefined) {
      this.material = [];
    }
    return this.material;
  }

  setMaterial(material: DeviceDefinitionMaterial[] | undefined): this {
    return this.setFieldValue('material', material);
  }

  hasMaterial(): boolean {
    return this.hasFieldValue('material');
  }

  /** Appends a new, empty DeviceDefinitionMaterial to `material` and returns it so it can be filled in. */
  addMaterial(): DeviceDefinitionMaterial;
  /** Appends the given DeviceDefinitionMaterial to `material` and returns this object for chaining. */
  addMaterial(deviceDefinitionMaterial: DeviceDefinitionMaterial): this;
  addMaterial(
    deviceDefinitionMaterial?: DeviceDefinitionMaterial
  ): DeviceDefinitionMaterial | this {
    if (deviceDefinitionMaterial !== undefined) {
      return this.addFieldValue('material', deviceDefinitionMaterial);
    }
    const createdDeviceDefinitionMaterial = new DeviceDefinitionMaterial();
    this.addFieldValue('material', createdDeviceDefinitionMaterial);
    return createdDeviceDefinitionMaterial;
  }

  /** The first DeviceDefinitionMaterial of `material`. One is added when the list is empty. */
  getMaterialFirstRep(): DeviceDefinitionMaterial {
    const firstDeviceDefinitionMaterial = this.getMaterial()[0];
    return firstDeviceDefinitionMaterial === undefined
      ? this.addMaterial()
      : firstDeviceDefinitionMaterial;
  }
}

modelTypeRegistry.register('DeviceDefinition', DeviceDefinition, true);

/** True when the value is a DeviceDefinition model instance. */
export function isDeviceDefinition(candidate: unknown): candidate is DeviceDefinition {
  return candidate instanceof DeviceDefinition;
}

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export class DeviceDefinitionUdiDeviceIdentifier extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'deviceIdentifier',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'deviceIdentifier', typeCode: 'string' }],
    },
    {
      elementName: 'issuer',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issuer', typeCode: 'uri' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'uri' }],
    },
  ];

  /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier (1..1) */
  deviceIdentifier?: string;
  /** Id and extensions of the primitive `deviceIdentifier`. */
  _deviceIdentifier?: Element;

  /** The organization that assigns the identifier algorithm (1..1) */
  issuer?: string;
  /** Id and extensions of the primitive `issuer`. */
  _issuer?: Element;

  /** The jurisdiction to which the deviceIdentifier applies (1..1) */
  jurisdiction?: string;
  /** Id and extensions of the primitive `jurisdiction`. */
  _jurisdiction?: Element;

  override fhirType(): string {
    return 'DeviceDefinition.udiDeviceIdentifier';
  }

  /** FHIR JSON for this DeviceDefinitionUdiDeviceIdentifier, typed as the plain `DeviceDefinitionUdiDeviceIdentifier` data type. */
  override toJSON(): plainTypes.DeviceDefinitionUdiDeviceIdentifier {
    return this.serialize() as plainTypes.DeviceDefinitionUdiDeviceIdentifier;
  }

  /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier (1..1) */
  getDeviceIdentifier(): string | undefined {
    return this.deviceIdentifier;
  }

  /** Sets `deviceIdentifier`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDeviceIdentifier(deviceIdentifier: string | undefined): this {
    return this.setFieldValue('deviceIdentifier', deviceIdentifier);
  }

  hasDeviceIdentifier(): boolean {
    return this.hasFieldValue('deviceIdentifier');
  }

  /** The element carrying the id and extensions of `deviceIdentifier`. Created when absent. */
  getDeviceIdentifierElement(): Element {
    if (this._deviceIdentifier === undefined) {
      this._deviceIdentifier = new Element();
    }
    return this._deviceIdentifier;
  }

  setDeviceIdentifierElement(deviceIdentifierElement: Element | undefined): this {
    this._deviceIdentifier = deviceIdentifierElement;
    return this;
  }

  /** The organization that assigns the identifier algorithm (1..1) */
  getIssuer(): string | undefined {
    return this.issuer;
  }

  /** Sets `issuer`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setIssuer(issuer: string | undefined): this {
    return this.setFieldValue('issuer', issuer);
  }

  hasIssuer(): boolean {
    return this.hasFieldValue('issuer');
  }

  /** The element carrying the id and extensions of `issuer`. Created when absent. */
  getIssuerElement(): Element {
    if (this._issuer === undefined) {
      this._issuer = new Element();
    }
    return this._issuer;
  }

  setIssuerElement(issuerElement: Element | undefined): this {
    this._issuer = issuerElement;
    return this;
  }

  /** The jurisdiction to which the deviceIdentifier applies (1..1) */
  getJurisdiction(): string | undefined {
    return this.jurisdiction;
  }

  /** Sets `jurisdiction`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setJurisdiction(jurisdiction: string | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }

  /** The element carrying the id and extensions of `jurisdiction`. Created when absent. */
  getJurisdictionElement(): Element {
    if (this._jurisdiction === undefined) {
      this._jurisdiction = new Element();
    }
    return this._jurisdiction;
  }

  setJurisdictionElement(jurisdictionElement: Element | undefined): this {
    this._jurisdiction = jurisdictionElement;
    return this;
  }
}

modelTypeRegistry.register(
  'DeviceDefinitionUdiDeviceIdentifier',
  DeviceDefinitionUdiDeviceIdentifier,
  false
);

/**
 * A name given to the device to identify it
 */
export class DeviceDefinitionDeviceName extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.DeviceNameType }],
    },
  ];

  /** The name of the device (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other (1..1) */
  type?: valueSetCodes.DeviceNameType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  override fhirType(): string {
    return 'DeviceDefinition.deviceName';
  }

  /** FHIR JSON for this DeviceDefinitionDeviceName, typed as the plain `DeviceDefinitionDeviceName` data type. */
  override toJSON(): plainTypes.DeviceDefinitionDeviceName {
    return this.serialize() as plainTypes.DeviceDefinitionDeviceName;
  }

  /** The name of the device (1..1) */
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

  /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other (1..1) */
  getType(): valueSetCodes.DeviceNameType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.DeviceNameType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }
}

modelTypeRegistry.register('DeviceDefinitionDeviceName', DeviceDefinitionDeviceName, false);

/**
 * The capabilities supported on a device, the standards to which the device conforms for a particular purpose, and used for the communication
 */
export class DeviceDefinitionSpecialization extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'systemType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'systemType', typeCode: 'string' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
  ];

  /** The standard that is used to operate and communicate (1..1) */
  systemType?: string;
  /** Id and extensions of the primitive `systemType`. */
  _systemType?: Element;

  /** The version of the standard that is used to operate and communicate (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  override fhirType(): string {
    return 'DeviceDefinition.specialization';
  }

  /** FHIR JSON for this DeviceDefinitionSpecialization, typed as the plain `DeviceDefinitionSpecialization` data type. */
  override toJSON(): plainTypes.DeviceDefinitionSpecialization {
    return this.serialize() as plainTypes.DeviceDefinitionSpecialization;
  }

  /** The standard that is used to operate and communicate (1..1) */
  getSystemType(): string | undefined {
    return this.systemType;
  }

  /** Sets `systemType`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSystemType(systemType: string | undefined): this {
    return this.setFieldValue('systemType', systemType);
  }

  hasSystemType(): boolean {
    return this.hasFieldValue('systemType');
  }

  /** The element carrying the id and extensions of `systemType`. Created when absent. */
  getSystemTypeElement(): Element {
    if (this._systemType === undefined) {
      this._systemType = new Element();
    }
    return this._systemType;
  }

  setSystemTypeElement(systemTypeElement: Element | undefined): this {
    this._systemType = systemTypeElement;
    return this;
  }

  /** The version of the standard that is used to operate and communicate (0..1) */
  getVersion(): string | undefined {
    return this.version;
  }

  /** Sets `version`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersion(version: string | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** The element carrying the id and extensions of `version`. Created when absent. */
  getVersionElement(): Element {
    if (this._version === undefined) {
      this._version = new Element();
    }
    return this._version;
  }

  setVersionElement(versionElement: Element | undefined): this {
    this._version = versionElement;
    return this;
  }
}

modelTypeRegistry.register('DeviceDefinitionSpecialization', DeviceDefinitionSpecialization, false);

/**
 * Device capabilities
 */
export class DeviceDefinitionCapability extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'description', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Type of capability (1..1) */
  type?: CodeableConcept;

  /** Description of capability (0..*) */
  description?: CodeableConcept[];

  override fhirType(): string {
    return 'DeviceDefinition.capability';
  }

  /** FHIR JSON for this DeviceDefinitionCapability, typed as the plain `DeviceDefinitionCapability` data type. */
  override toJSON(): plainTypes.DeviceDefinitionCapability {
    return this.serialize() as plainTypes.DeviceDefinitionCapability;
  }

  /** Type of capability (1..1) Created when absent. */
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

  /** Description of capability (0..*) Never undefined; an empty list is created when absent. */
  getDescription(): CodeableConcept[] {
    if (this.description === undefined) {
      this.description = [];
    }
    return this.description;
  }

  setDescription(description: CodeableConcept[] | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** Appends a new, empty CodeableConcept to `description` and returns it so it can be filled in. */
  addDescription(): CodeableConcept;
  /** Appends the given CodeableConcept to `description` and returns this object for chaining. */
  addDescription(codeableConcept: CodeableConcept): this;
  addDescription(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('description', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('description', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `description`. One is added when the list is empty. */
  getDescriptionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getDescription()[0];
    return firstCodeableConcept === undefined ? this.addDescription() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('DeviceDefinitionCapability', DeviceDefinitionCapability, false);

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 */
export class DeviceDefinitionProperty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'valueQuantity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueQuantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'valueCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valueCode', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible) (1..1) */
  type?: CodeableConcept;

  /** Property value as a quantity (0..*) */
  valueQuantity?: Quantity[];

  /** Property value as a code, e.g., NTP4 (synced to NTP) (0..*) */
  valueCode?: CodeableConcept[];

  override fhirType(): string {
    return 'DeviceDefinition.property';
  }

  /** FHIR JSON for this DeviceDefinitionProperty, typed as the plain `DeviceDefinitionProperty` data type. */
  override toJSON(): plainTypes.DeviceDefinitionProperty {
    return this.serialize() as plainTypes.DeviceDefinitionProperty;
  }

  /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible) (1..1) Created when absent. */
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

  /** Property value as a quantity (0..*) Never undefined; an empty list is created when absent. */
  getValueQuantity(): Quantity[] {
    if (this.valueQuantity === undefined) {
      this.valueQuantity = [];
    }
    return this.valueQuantity;
  }

  setValueQuantity(valueQuantity: Quantity[] | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  /** Appends a new, empty Quantity to `valueQuantity` and returns it so it can be filled in. */
  addValueQuantity(): Quantity;
  /** Appends the given Quantity to `valueQuantity` and returns this object for chaining. */
  addValueQuantity(quantity: Quantity): this;
  addValueQuantity(quantity?: Quantity): Quantity | this {
    if (quantity !== undefined) {
      return this.addFieldValue('valueQuantity', quantity);
    }
    const createdQuantity = new Quantity();
    this.addFieldValue('valueQuantity', createdQuantity);
    return createdQuantity;
  }

  /** The first Quantity of `valueQuantity`. One is added when the list is empty. */
  getValueQuantityFirstRep(): Quantity {
    const firstQuantity = this.getValueQuantity()[0];
    return firstQuantity === undefined ? this.addValueQuantity() : firstQuantity;
  }

  /** Property value as a code, e.g., NTP4 (synced to NTP) (0..*) Never undefined; an empty list is created when absent. */
  getValueCode(): CodeableConcept[] {
    if (this.valueCode === undefined) {
      this.valueCode = [];
    }
    return this.valueCode;
  }

  setValueCode(valueCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('valueCode', valueCode);
  }

  hasValueCode(): boolean {
    return this.hasFieldValue('valueCode');
  }

  /** Appends a new, empty CodeableConcept to `valueCode` and returns it so it can be filled in. */
  addValueCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `valueCode` and returns this object for chaining. */
  addValueCode(codeableConcept: CodeableConcept): this;
  addValueCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('valueCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('valueCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `valueCode`. One is added when the list is empty. */
  getValueCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getValueCode()[0];
    return firstCodeableConcept === undefined ? this.addValueCode() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('DeviceDefinitionProperty', DeviceDefinitionProperty, false);

/**
 * A substance used to create the material(s) of which the device is made
 */
export class DeviceDefinitionMaterial extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'substance',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'substance', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'alternate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'alternate', typeCode: 'boolean' }],
    },
    {
      elementName: 'allergenicIndicator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allergenicIndicator', typeCode: 'boolean' }],
    },
  ];

  /** The substance (1..1) */
  substance?: CodeableConcept;

  /** Indicates an alternative material of the device (0..1) */
  alternate?: boolean;
  /** Id and extensions of the primitive `alternate`. */
  _alternate?: Element;

  /** Whether the substance is a known or suspected allergen (0..1) */
  allergenicIndicator?: boolean;
  /** Id and extensions of the primitive `allergenicIndicator`. */
  _allergenicIndicator?: Element;

  override fhirType(): string {
    return 'DeviceDefinition.material';
  }

  /** FHIR JSON for this DeviceDefinitionMaterial, typed as the plain `DeviceDefinitionMaterial` data type. */
  override toJSON(): plainTypes.DeviceDefinitionMaterial {
    return this.serialize() as plainTypes.DeviceDefinitionMaterial;
  }

  /** The substance (1..1) Created when absent. */
  getSubstance(): CodeableConcept {
    if (this.substance === undefined) {
      this.substance = new CodeableConcept();
    }
    return this.substance;
  }

  setSubstance(substance: CodeableConcept | undefined): this {
    return this.setFieldValue('substance', substance);
  }

  hasSubstance(): boolean {
    return this.hasFieldValue('substance');
  }

  /** Indicates an alternative material of the device (0..1) */
  getAlternate(): boolean | undefined {
    return this.alternate;
  }

  /** Sets `alternate`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAlternate(alternate: boolean | undefined): this {
    return this.setFieldValue('alternate', alternate);
  }

  hasAlternate(): boolean {
    return this.hasFieldValue('alternate');
  }

  /** The element carrying the id and extensions of `alternate`. Created when absent. */
  getAlternateElement(): Element {
    if (this._alternate === undefined) {
      this._alternate = new Element();
    }
    return this._alternate;
  }

  setAlternateElement(alternateElement: Element | undefined): this {
    this._alternate = alternateElement;
    return this;
  }

  /** Whether the substance is a known or suspected allergen (0..1) */
  getAllergenicIndicator(): boolean | undefined {
    return this.allergenicIndicator;
  }

  /** Sets `allergenicIndicator`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAllergenicIndicator(allergenicIndicator: boolean | undefined): this {
    return this.setFieldValue('allergenicIndicator', allergenicIndicator);
  }

  hasAllergenicIndicator(): boolean {
    return this.hasFieldValue('allergenicIndicator');
  }

  /** The element carrying the id and extensions of `allergenicIndicator`. Created when absent. */
  getAllergenicIndicatorElement(): Element {
    if (this._allergenicIndicator === undefined) {
      this._allergenicIndicator = new Element();
    }
    return this._allergenicIndicator;
  }

  setAllergenicIndicatorElement(allergenicIndicatorElement: Element | undefined): this {
    this._allergenicIndicator = allergenicIndicatorElement;
    return this;
  }
}

modelTypeRegistry.register('DeviceDefinitionMaterial', DeviceDefinitionMaterial, false);
