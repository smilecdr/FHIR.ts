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
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export class Device extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'definition', typeCode: 'Reference', targetResourceTypes: ['DeviceDefinition'] },
      ],
    },
    {
      elementName: 'udiCarrier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'udiCarrier', typeCode: 'DeviceUdiCarrier' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.FHIRDeviceStatus },
      ],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'distinctIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'distinctIdentifier', typeCode: 'string' }],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'manufacturer', typeCode: 'string' }],
    },
    {
      elementName: 'manufactureDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'manufactureDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'expirationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expirationDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'lotNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lotNumber', typeCode: 'string' }],
    },
    {
      elementName: 'serialNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'serialNumber', typeCode: 'string' }],
    },
    {
      elementName: 'deviceName',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'deviceName', typeCode: 'DeviceDeviceName' }],
    },
    {
      elementName: 'modelNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'modelNumber', typeCode: 'string' }],
    },
    {
      elementName: 'partNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'partNumber', typeCode: 'string' }],
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
      types: [{ jsonKey: 'specialization', typeCode: 'DeviceSpecialization' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'version', typeCode: 'DeviceVersion' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'DeviceProperty' }],
    },
    {
      elementName: 'patient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
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
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'safety',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'safety', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'parent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'parent', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
  ];

  readonly resourceType = 'Device';

  /** Instance identifier (0..*) */
  identifier?: Identifier[];

  /** The reference to the definition for the device (0..1) */
  definition?: Reference;

  /** Unique Device Identifier (UDI) Barcode string (0..*) */
  udiCarrier?: DeviceUdiCarrier[];

  /** active | inactive | entered-in-error | unknown (0..1) */
  status?: valueSetCodes.FHIRDeviceStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off (0..*) */
  statusReason?: CodeableConcept[];

  /** The distinct identification string (0..1) */
  distinctIdentifier?: string;
  /** Id and extensions of the primitive `distinctIdentifier`. */
  _distinctIdentifier?: Element;

  /** Name of device manufacturer (0..1) */
  manufacturer?: string;
  /** Id and extensions of the primitive `manufacturer`. */
  _manufacturer?: Element;

  /** Date when the device was made (0..1) */
  manufactureDate?: string;
  /** Id and extensions of the primitive `manufactureDate`. */
  _manufactureDate?: Element;

  /** Date and time of expiry of this device (if applicable) (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;

  /** Lot number of manufacture (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;

  /** Serial number assigned by the manufacturer (0..1) */
  serialNumber?: string;
  /** Id and extensions of the primitive `serialNumber`. */
  _serialNumber?: Element;

  /** The name of the device as given by the manufacturer (0..*) */
  deviceName?: DeviceDeviceName[];

  /** The model number for the device (0..1) */
  modelNumber?: string;
  /** Id and extensions of the primitive `modelNumber`. */
  _modelNumber?: Element;

  /** The part number of the device (0..1) */
  partNumber?: string;
  /** Id and extensions of the primitive `partNumber`. */
  _partNumber?: Element;

  /** The kind or type of device (0..1) */
  type?: CodeableConcept;

  /** The capabilities supported on a device, the standards to which the device conforms for a particular purpose, and used for the communication (0..*) */
  specialization?: DeviceSpecialization[];

  /** The actual design of the device or software version running on the device (0..*) */
  version?: DeviceVersion[];

  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties (0..*) */
  property?: DeviceProperty[];

  /** Patient to whom Device is affixed (0..1) */
  patient?: Reference;

  /** Organization responsible for device (0..1) */
  owner?: Reference;

  /** Details for human/organization for support (0..*) */
  contact?: ContactPoint[];

  /** Where the device is found (0..1) */
  location?: Reference;

  /** Network address to contact device (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Device notes and comments (0..*) */
  note?: Annotation[];

  /** Safety Characteristics of Device (0..*) */
  safety?: CodeableConcept[];

  /** The parent device (0..1) */
  parent?: Reference;

  override fhirType(): string {
    return 'Device';
  }

  /** FHIR JSON for this Device, typed as the plain `Device` data type. */
  override toJSON(): plainTypes.Device {
    return this.serialize() as plainTypes.Device;
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

  /** The reference to the definition for the device (0..1) Created when absent. */
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

  /** Unique Device Identifier (UDI) Barcode string (0..*) Never undefined; an empty list is created when absent. */
  getUdiCarrier(): DeviceUdiCarrier[] {
    if (this.udiCarrier === undefined) {
      this.udiCarrier = [];
    }
    return this.udiCarrier;
  }

  setUdiCarrier(udiCarrier: DeviceUdiCarrier[] | undefined): this {
    return this.setFieldValue('udiCarrier', udiCarrier);
  }

  hasUdiCarrier(): boolean {
    return this.hasFieldValue('udiCarrier');
  }

  /** Appends a new, empty DeviceUdiCarrier to `udiCarrier` and returns it so it can be filled in. */
  addUdiCarrier(): DeviceUdiCarrier;
  /** Appends the given DeviceUdiCarrier to `udiCarrier` and returns this object for chaining. */
  addUdiCarrier(deviceUdiCarrier: DeviceUdiCarrier): this;
  addUdiCarrier(deviceUdiCarrier?: DeviceUdiCarrier): DeviceUdiCarrier | this {
    if (deviceUdiCarrier !== undefined) {
      return this.addFieldValue('udiCarrier', deviceUdiCarrier);
    }
    const createdDeviceUdiCarrier = new DeviceUdiCarrier();
    this.addFieldValue('udiCarrier', createdDeviceUdiCarrier);
    return createdDeviceUdiCarrier;
  }

  /** The first DeviceUdiCarrier of `udiCarrier`. One is added when the list is empty. */
  getUdiCarrierFirstRep(): DeviceUdiCarrier {
    const firstDeviceUdiCarrier = this.getUdiCarrier()[0];
    return firstDeviceUdiCarrier === undefined ? this.addUdiCarrier() : firstDeviceUdiCarrier;
  }

  /** active | inactive | entered-in-error | unknown (0..1) */
  getStatus(): valueSetCodes.FHIRDeviceStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.FHIRDeviceStatus | undefined): this {
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

  /** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off (0..*) Never undefined; an empty list is created when absent. */
  getStatusReason(): CodeableConcept[] {
    if (this.statusReason === undefined) {
      this.statusReason = [];
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
  }

  /** Appends a new, empty CodeableConcept to `statusReason` and returns it so it can be filled in. */
  addStatusReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `statusReason` and returns this object for chaining. */
  addStatusReason(codeableConcept: CodeableConcept): this;
  addStatusReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('statusReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('statusReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `statusReason`. One is added when the list is empty. */
  getStatusReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getStatusReason()[0];
    return firstCodeableConcept === undefined ? this.addStatusReason() : firstCodeableConcept;
  }

  /** The distinct identification string (0..1) */
  getDistinctIdentifier(): string | undefined {
    return this.distinctIdentifier;
  }

  /** Sets `distinctIdentifier`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDistinctIdentifier(distinctIdentifier: string | undefined): this {
    return this.setFieldValue('distinctIdentifier', distinctIdentifier);
  }

  hasDistinctIdentifier(): boolean {
    return this.hasFieldValue('distinctIdentifier');
  }

  /** The element carrying the id and extensions of `distinctIdentifier`. Created when absent. */
  getDistinctIdentifierElement(): Element {
    if (this._distinctIdentifier === undefined) {
      this._distinctIdentifier = new Element();
    }
    return this._distinctIdentifier;
  }

  setDistinctIdentifierElement(distinctIdentifierElement: Element | undefined): this {
    this._distinctIdentifier = distinctIdentifierElement;
    return this;
  }

  /** Name of device manufacturer (0..1) */
  getManufacturer(): string | undefined {
    return this.manufacturer;
  }

  /** Sets `manufacturer`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setManufacturer(manufacturer: string | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }

  /** The element carrying the id and extensions of `manufacturer`. Created when absent. */
  getManufacturerElement(): Element {
    if (this._manufacturer === undefined) {
      this._manufacturer = new Element();
    }
    return this._manufacturer;
  }

  setManufacturerElement(manufacturerElement: Element | undefined): this {
    this._manufacturer = manufacturerElement;
    return this;
  }

  /** Date when the device was made (0..1) */
  getManufactureDate(): string | undefined {
    return this.manufactureDate;
  }

  /** Sets `manufactureDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setManufactureDate(manufactureDate: string | undefined): this {
    return this.setFieldValue('manufactureDate', manufactureDate);
  }

  hasManufactureDate(): boolean {
    return this.hasFieldValue('manufactureDate');
  }

  /** The element carrying the id and extensions of `manufactureDate`. Created when absent. */
  getManufactureDateElement(): Element {
    if (this._manufactureDate === undefined) {
      this._manufactureDate = new Element();
    }
    return this._manufactureDate;
  }

  setManufactureDateElement(manufactureDateElement: Element | undefined): this {
    this._manufactureDate = manufactureDateElement;
    return this;
  }

  /** Date and time of expiry of this device (if applicable) (0..1) */
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

  /** Lot number of manufacture (0..1) */
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

  /** Serial number assigned by the manufacturer (0..1) */
  getSerialNumber(): string | undefined {
    return this.serialNumber;
  }

  /** Sets `serialNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSerialNumber(serialNumber: string | undefined): this {
    return this.setFieldValue('serialNumber', serialNumber);
  }

  hasSerialNumber(): boolean {
    return this.hasFieldValue('serialNumber');
  }

  /** The element carrying the id and extensions of `serialNumber`. Created when absent. */
  getSerialNumberElement(): Element {
    if (this._serialNumber === undefined) {
      this._serialNumber = new Element();
    }
    return this._serialNumber;
  }

  setSerialNumberElement(serialNumberElement: Element | undefined): this {
    this._serialNumber = serialNumberElement;
    return this;
  }

  /** The name of the device as given by the manufacturer (0..*) Never undefined; an empty list is created when absent. */
  getDeviceName(): DeviceDeviceName[] {
    if (this.deviceName === undefined) {
      this.deviceName = [];
    }
    return this.deviceName;
  }

  setDeviceName(deviceName: DeviceDeviceName[] | undefined): this {
    return this.setFieldValue('deviceName', deviceName);
  }

  hasDeviceName(): boolean {
    return this.hasFieldValue('deviceName');
  }

  /** Appends a new, empty DeviceDeviceName to `deviceName` and returns it so it can be filled in. */
  addDeviceName(): DeviceDeviceName;
  /** Appends the given DeviceDeviceName to `deviceName` and returns this object for chaining. */
  addDeviceName(deviceDeviceName: DeviceDeviceName): this;
  addDeviceName(deviceDeviceName?: DeviceDeviceName): DeviceDeviceName | this {
    if (deviceDeviceName !== undefined) {
      return this.addFieldValue('deviceName', deviceDeviceName);
    }
    const createdDeviceDeviceName = new DeviceDeviceName();
    this.addFieldValue('deviceName', createdDeviceDeviceName);
    return createdDeviceDeviceName;
  }

  /** The first DeviceDeviceName of `deviceName`. One is added when the list is empty. */
  getDeviceNameFirstRep(): DeviceDeviceName {
    const firstDeviceDeviceName = this.getDeviceName()[0];
    return firstDeviceDeviceName === undefined ? this.addDeviceName() : firstDeviceDeviceName;
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

  /** The part number of the device (0..1) */
  getPartNumber(): string | undefined {
    return this.partNumber;
  }

  /** Sets `partNumber`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPartNumber(partNumber: string | undefined): this {
    return this.setFieldValue('partNumber', partNumber);
  }

  hasPartNumber(): boolean {
    return this.hasFieldValue('partNumber');
  }

  /** The element carrying the id and extensions of `partNumber`. Created when absent. */
  getPartNumberElement(): Element {
    if (this._partNumber === undefined) {
      this._partNumber = new Element();
    }
    return this._partNumber;
  }

  setPartNumberElement(partNumberElement: Element | undefined): this {
    this._partNumber = partNumberElement;
    return this;
  }

  /** The kind or type of device (0..1) Created when absent. */
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
  getSpecialization(): DeviceSpecialization[] {
    if (this.specialization === undefined) {
      this.specialization = [];
    }
    return this.specialization;
  }

  setSpecialization(specialization: DeviceSpecialization[] | undefined): this {
    return this.setFieldValue('specialization', specialization);
  }

  hasSpecialization(): boolean {
    return this.hasFieldValue('specialization');
  }

  /** Appends a new, empty DeviceSpecialization to `specialization` and returns it so it can be filled in. */
  addSpecialization(): DeviceSpecialization;
  /** Appends the given DeviceSpecialization to `specialization` and returns this object for chaining. */
  addSpecialization(deviceSpecialization: DeviceSpecialization): this;
  addSpecialization(deviceSpecialization?: DeviceSpecialization): DeviceSpecialization | this {
    if (deviceSpecialization !== undefined) {
      return this.addFieldValue('specialization', deviceSpecialization);
    }
    const createdDeviceSpecialization = new DeviceSpecialization();
    this.addFieldValue('specialization', createdDeviceSpecialization);
    return createdDeviceSpecialization;
  }

  /** The first DeviceSpecialization of `specialization`. One is added when the list is empty. */
  getSpecializationFirstRep(): DeviceSpecialization {
    const firstDeviceSpecialization = this.getSpecialization()[0];
    return firstDeviceSpecialization === undefined
      ? this.addSpecialization()
      : firstDeviceSpecialization;
  }

  /** The actual design of the device or software version running on the device (0..*) Never undefined; an empty list is created when absent. */
  getVersion(): DeviceVersion[] {
    if (this.version === undefined) {
      this.version = [];
    }
    return this.version;
  }

  setVersion(version: DeviceVersion[] | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** Appends a new, empty DeviceVersion to `version` and returns it so it can be filled in. */
  addVersion(): DeviceVersion;
  /** Appends the given DeviceVersion to `version` and returns this object for chaining. */
  addVersion(deviceVersion: DeviceVersion): this;
  addVersion(deviceVersion?: DeviceVersion): DeviceVersion | this {
    if (deviceVersion !== undefined) {
      return this.addFieldValue('version', deviceVersion);
    }
    const createdDeviceVersion = new DeviceVersion();
    this.addFieldValue('version', createdDeviceVersion);
    return createdDeviceVersion;
  }

  /** The first DeviceVersion of `version`. One is added when the list is empty. */
  getVersionFirstRep(): DeviceVersion {
    const firstDeviceVersion = this.getVersion()[0];
    return firstDeviceVersion === undefined ? this.addVersion() : firstDeviceVersion;
  }

  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties (0..*) Never undefined; an empty list is created when absent. */
  getProperty(): DeviceProperty[] {
    if (this.property === undefined) {
      this.property = [];
    }
    return this.property;
  }

  setProperty(property: DeviceProperty[] | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** Appends a new, empty DeviceProperty to `property` and returns it so it can be filled in. */
  addProperty(): DeviceProperty;
  /** Appends the given DeviceProperty to `property` and returns this object for chaining. */
  addProperty(deviceProperty: DeviceProperty): this;
  addProperty(deviceProperty?: DeviceProperty): DeviceProperty | this {
    if (deviceProperty !== undefined) {
      return this.addFieldValue('property', deviceProperty);
    }
    const createdDeviceProperty = new DeviceProperty();
    this.addFieldValue('property', createdDeviceProperty);
    return createdDeviceProperty;
  }

  /** The first DeviceProperty of `property`. One is added when the list is empty. */
  getPropertyFirstRep(): DeviceProperty {
    const firstDeviceProperty = this.getProperty()[0];
    return firstDeviceProperty === undefined ? this.addProperty() : firstDeviceProperty;
  }

  /** Patient to whom Device is affixed (0..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
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

  /** Where the device is found (0..1) Created when absent. */
  getLocation(): Reference {
    if (this.location === undefined) {
      this.location = new Reference();
    }
    return this.location;
  }

  setLocation(location: Reference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
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

  /** Safety Characteristics of Device (0..*) Never undefined; an empty list is created when absent. */
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

  /** The parent device (0..1) Created when absent. */
  getParent(): Reference {
    if (this.parent === undefined) {
      this.parent = new Reference();
    }
    return this.parent;
  }

  setParent(parent: Reference | undefined): this {
    return this.setFieldValue('parent', parent);
  }

  hasParent(): boolean {
    return this.hasFieldValue('parent');
  }
}

modelTypeRegistry.register('Device', Device, true);

/** True when the value is a Device model instance. */
export function isDevice(candidate: unknown): candidate is Device {
  return candidate instanceof Device;
}

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export class DeviceUdiCarrier extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'deviceIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'deviceIdentifier', typeCode: 'string' }],
    },
    {
      elementName: 'issuer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issuer', typeCode: 'uri' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'uri' }],
    },
    {
      elementName: 'carrierAIDC',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'carrierAIDC', typeCode: 'base64Binary' }],
    },
    {
      elementName: 'carrierHRF',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'carrierHRF', typeCode: 'string' }],
    },
    {
      elementName: 'entryType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'entryType', typeCode: 'code', allowedCodes: valueSetCodes.UDIEntryType }],
    },
  ];

  /** Mandatory fixed portion of UDI (0..1) */
  deviceIdentifier?: string;
  /** Id and extensions of the primitive `deviceIdentifier`. */
  _deviceIdentifier?: Element;

  /** UDI Issuing Organization (0..1) */
  issuer?: string;
  /** Id and extensions of the primitive `issuer`. */
  _issuer?: Element;

  /** Regional UDI authority (0..1) */
  jurisdiction?: string;
  /** Id and extensions of the primitive `jurisdiction`. */
  _jurisdiction?: Element;

  /** UDI Machine Readable Barcode String (0..1) */
  carrierAIDC?: string;
  /** Id and extensions of the primitive `carrierAIDC`. */
  _carrierAIDC?: Element;

  /** UDI Human Readable Barcode String (0..1) */
  carrierHRF?: string;
  /** Id and extensions of the primitive `carrierHRF`. */
  _carrierHRF?: Element;

  /** barcode | rfid | manual + (0..1) */
  entryType?: valueSetCodes.UDIEntryType;
  /** Id and extensions of the primitive `entryType`. */
  _entryType?: Element;

  override fhirType(): string {
    return 'Device.udiCarrier';
  }

  /** FHIR JSON for this DeviceUdiCarrier, typed as the plain `DeviceUdiCarrier` data type. */
  override toJSON(): plainTypes.DeviceUdiCarrier {
    return this.serialize() as plainTypes.DeviceUdiCarrier;
  }

  /** Mandatory fixed portion of UDI (0..1) */
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

  /** UDI Issuing Organization (0..1) */
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

  /** Regional UDI authority (0..1) */
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

  /** UDI Machine Readable Barcode String (0..1) */
  getCarrierAIDC(): string | undefined {
    return this.carrierAIDC;
  }

  /** Sets `carrierAIDC`. Throws a FhirModelError when the value is not a valid FHIR base64Binary. */
  setCarrierAIDC(carrierAIDC: string | undefined): this {
    return this.setFieldValue('carrierAIDC', carrierAIDC);
  }

  hasCarrierAIDC(): boolean {
    return this.hasFieldValue('carrierAIDC');
  }

  /** The element carrying the id and extensions of `carrierAIDC`. Created when absent. */
  getCarrierAIDCElement(): Element {
    if (this._carrierAIDC === undefined) {
      this._carrierAIDC = new Element();
    }
    return this._carrierAIDC;
  }

  setCarrierAIDCElement(carrierAIDCElement: Element | undefined): this {
    this._carrierAIDC = carrierAIDCElement;
    return this;
  }

  /** UDI Human Readable Barcode String (0..1) */
  getCarrierHRF(): string | undefined {
    return this.carrierHRF;
  }

  /** Sets `carrierHRF`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCarrierHRF(carrierHRF: string | undefined): this {
    return this.setFieldValue('carrierHRF', carrierHRF);
  }

  hasCarrierHRF(): boolean {
    return this.hasFieldValue('carrierHRF');
  }

  /** The element carrying the id and extensions of `carrierHRF`. Created when absent. */
  getCarrierHRFElement(): Element {
    if (this._carrierHRF === undefined) {
      this._carrierHRF = new Element();
    }
    return this._carrierHRF;
  }

  setCarrierHRFElement(carrierHRFElement: Element | undefined): this {
    this._carrierHRF = carrierHRFElement;
    return this;
  }

  /** barcode | rfid | manual + (0..1) */
  getEntryType(): valueSetCodes.UDIEntryType | undefined {
    return this.entryType;
  }

  /** Sets `entryType`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setEntryType(entryType: valueSetCodes.UDIEntryType | undefined): this {
    return this.setFieldValue('entryType', entryType);
  }

  hasEntryType(): boolean {
    return this.hasFieldValue('entryType');
  }

  /** The element carrying the id and extensions of `entryType`. Created when absent. */
  getEntryTypeElement(): Element {
    if (this._entryType === undefined) {
      this._entryType = new Element();
    }
    return this._entryType;
  }

  setEntryTypeElement(entryTypeElement: Element | undefined): this {
    this._entryType = entryTypeElement;
    return this;
  }
}

modelTypeRegistry.register('DeviceUdiCarrier', DeviceUdiCarrier, false);

/**
 * The name of the device as given by the manufacturer
 */
export class DeviceDeviceName extends BackboneElement {
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
    return 'Device.deviceName';
  }

  /** FHIR JSON for this DeviceDeviceName, typed as the plain `DeviceDeviceName` data type. */
  override toJSON(): plainTypes.DeviceDeviceName {
    return this.serialize() as plainTypes.DeviceDeviceName;
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

modelTypeRegistry.register('DeviceDeviceName', DeviceDeviceName, false);

/**
 * The capabilities supported on a device, the standards to which the device conforms for a particular purpose, and used for the communication
 */
export class DeviceSpecialization extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'systemType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'systemType', typeCode: 'CodeableConcept' }],
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
  systemType?: CodeableConcept;

  /** The version of the standard that is used to operate and communicate (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  override fhirType(): string {
    return 'Device.specialization';
  }

  /** FHIR JSON for this DeviceSpecialization, typed as the plain `DeviceSpecialization` data type. */
  override toJSON(): plainTypes.DeviceSpecialization {
    return this.serialize() as plainTypes.DeviceSpecialization;
  }

  /** The standard that is used to operate and communicate (1..1) Created when absent. */
  getSystemType(): CodeableConcept {
    if (this.systemType === undefined) {
      this.systemType = new CodeableConcept();
    }
    return this.systemType;
  }

  setSystemType(systemType: CodeableConcept | undefined): this {
    return this.setFieldValue('systemType', systemType);
  }

  hasSystemType(): boolean {
    return this.hasFieldValue('systemType');
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

modelTypeRegistry.register('DeviceSpecialization', DeviceSpecialization, false);

/**
 * The actual design of the device or software version running on the device
 */
export class DeviceVersion extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'component',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'component', typeCode: 'Identifier' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** The type of the device version (0..1) */
  type?: CodeableConcept;

  /** A single component of the device version (0..1) */
  component?: Identifier;

  /** The version text (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'Device.version';
  }

  /** FHIR JSON for this DeviceVersion, typed as the plain `DeviceVersion` data type. */
  override toJSON(): plainTypes.DeviceVersion {
    return this.serialize() as plainTypes.DeviceVersion;
  }

  /** The type of the device version (0..1) Created when absent. */
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

  /** A single component of the device version (0..1) Created when absent. */
  getComponent(): Identifier {
    if (this.component === undefined) {
      this.component = new Identifier();
    }
    return this.component;
  }

  setComponent(component: Identifier | undefined): this {
    return this.setFieldValue('component', component);
  }

  hasComponent(): boolean {
    return this.hasFieldValue('component');
  }

  /** The version text (1..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setValue(value: string | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** The element carrying the id and extensions of `value`. Created when absent. */
  getValueElement(): Element {
    if (this._value === undefined) {
      this._value = new Element();
    }
    return this._value;
  }

  setValueElement(valueElement: Element | undefined): this {
    this._value = valueElement;
    return this;
  }
}

modelTypeRegistry.register('DeviceVersion', DeviceVersion, false);

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 */
export class DeviceProperty extends BackboneElement {
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
    return 'Device.property';
  }

  /** FHIR JSON for this DeviceProperty, typed as the plain `DeviceProperty` data type. */
  override toJSON(): plainTypes.DeviceProperty {
    return this.serialize() as plainTypes.DeviceProperty;
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

modelTypeRegistry.register('DeviceProperty', DeviceProperty, false);
