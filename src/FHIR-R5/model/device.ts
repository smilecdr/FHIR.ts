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
import { ContactPoint } from './contactPoint';
import { Count } from './count';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';

/**
 * This resource describes the properties (regulated, has real time clock, etc.), adminstrative (manufacturer name, model number, serial number, firmware, etc.), and type (knee replacement, blood pressure cuff, MRI, etc.) of a physical unit (these values do not change much within a given module, for example the serail number, manufacturer name, and model number). An actual unit may consist of several modules in a distinct hierarchy and these are represented by multiple Device resources and bound through the 'parent' element.
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
      elementName: 'displayName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'displayName', typeCode: 'string' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'CodeableReference' }],
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
      elementName: 'availabilityStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availabilityStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'biologicalSourceEvent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'biologicalSourceEvent', typeCode: 'Identifier' }],
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
      elementName: 'name',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'name', typeCode: 'DeviceName' }],
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
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'version', typeCode: 'DeviceVersion' }],
    },
    {
      elementName: 'conformsTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'conformsTo', typeCode: 'DeviceConformsTo' }],
    },
    {
      elementName: 'property',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'property', typeCode: 'DeviceProperty' }],
    },
    {
      elementName: 'mode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'cycle',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cycle', typeCode: 'Count' }],
    },
    {
      elementName: 'duration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'duration', typeCode: 'Duration' }],
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
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
    {
      elementName: 'gateway',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'gateway', typeCode: 'CodeableReference' }],
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

  /** The name used to display by default when the device is referenced (0..1) */
  displayName?: string;
  /** Id and extensions of the primitive `displayName`. */
  _displayName?: Element;

  /** The reference to the definition for the device (0..1) */
  definition?: CodeableReference;

  /** Unique Device Identifier (UDI) Barcode string (0..*) */
  udiCarrier?: DeviceUdiCarrier[];

  /** active | inactive | entered-in-error (0..1) */
  status?: valueSetCodes.FHIRDeviceStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** lost | damaged | destroyed | available (0..1) */
  availabilityStatus?: CodeableConcept;

  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled (0..1) */
  biologicalSourceEvent?: Identifier;

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

  /** The name or names of the device as known to the manufacturer and/or patient (0..*) */
  name?: DeviceName[];

  /** The manufacturer's model number for the device (0..1) */
  modelNumber?: string;
  /** Id and extensions of the primitive `modelNumber`. */
  _modelNumber?: Element;

  /** The part number or catalog number of the device (0..1) */
  partNumber?: string;
  /** Id and extensions of the primitive `partNumber`. */
  _partNumber?: Element;

  /** Indicates a high-level grouping of the device (0..*) */
  category?: CodeableConcept[];

  /** The kind or type of device (0..*) */
  type?: CodeableConcept[];

  /** The actual design of the device or software version running on the device (0..*) */
  version?: DeviceVersion[];

  /** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device (0..*) */
  conformsTo?: DeviceConformsTo[];

  /** Inherent, essentially fixed, characteristics of the device. e.g., time properties, size, material, etc. (0..*) */
  property?: DeviceProperty[];

  /** The designated condition for performing a task (0..1) */
  mode?: CodeableConcept;

  /** The series of occurrences that repeats during the operation of the device (0..1) */
  cycle?: Count;

  /** A measurement of time during the device's operation (e.g., days, hours, mins, etc.) (0..1) */
  duration?: Duration;

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

  /** Technical endpoints providing access to electronic services provided by the device (0..*) */
  endpoint?: Reference[];

  /** Linked device acting as a communication/data collector, translator or controller (0..*) */
  gateway?: CodeableReference[];

  /** Device notes and comments (0..*) */
  note?: Annotation[];

  /** Safety Characteristics of Device (0..*) */
  safety?: CodeableConcept[];

  /** The higher level or encompassing device that this device is a logical part of (0..1) */
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

  /** The name used to display by default when the device is referenced (0..1) */
  getDisplayName(): string | undefined {
    return this.displayName;
  }

  /** Sets `displayName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisplayName(displayName: string | undefined): this {
    return this.setFieldValue('displayName', displayName);
  }

  hasDisplayName(): boolean {
    return this.hasFieldValue('displayName');
  }

  /** The element carrying the id and extensions of `displayName`. Created when absent. */
  getDisplayNameElement(): Element {
    if (this._displayName === undefined) {
      this._displayName = new Element();
    }
    return this._displayName;
  }

  setDisplayNameElement(displayNameElement: Element | undefined): this {
    this._displayName = displayNameElement;
    return this;
  }

  /** The reference to the definition for the device (0..1) Created when absent. */
  getDefinition(): CodeableReference {
    if (this.definition === undefined) {
      this.definition = new CodeableReference();
    }
    return this.definition;
  }

  setDefinition(definition: CodeableReference | undefined): this {
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

  /** active | inactive | entered-in-error (0..1) */
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

  /** lost | damaged | destroyed | available (0..1) Created when absent. */
  getAvailabilityStatus(): CodeableConcept {
    if (this.availabilityStatus === undefined) {
      this.availabilityStatus = new CodeableConcept();
    }
    return this.availabilityStatus;
  }

  setAvailabilityStatus(availabilityStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('availabilityStatus', availabilityStatus);
  }

  hasAvailabilityStatus(): boolean {
    return this.hasFieldValue('availabilityStatus');
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

  /** The name or names of the device as known to the manufacturer and/or patient (0..*) Never undefined; an empty list is created when absent. */
  getName(): DeviceName[] {
    if (this.name === undefined) {
      this.name = [];
    }
    return this.name;
  }

  setName(name: DeviceName[] | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** Appends a new, empty DeviceName to `name` and returns it so it can be filled in. */
  addName(): DeviceName;
  /** Appends the given DeviceName to `name` and returns this object for chaining. */
  addName(deviceName: DeviceName): this;
  addName(deviceName?: DeviceName): DeviceName | this {
    if (deviceName !== undefined) {
      return this.addFieldValue('name', deviceName);
    }
    const createdDeviceName = new DeviceName();
    this.addFieldValue('name', createdDeviceName);
    return createdDeviceName;
  }

  /** The first DeviceName of `name`. One is added when the list is empty. */
  getNameFirstRep(): DeviceName {
    const firstDeviceName = this.getName()[0];
    return firstDeviceName === undefined ? this.addName() : firstDeviceName;
  }

  /** The manufacturer's model number for the device (0..1) */
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

  /** The part number or catalog number of the device (0..1) */
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

  /** Indicates a high-level grouping of the device (0..*) Never undefined; an empty list is created when absent. */
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

  /** The kind or type of device (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
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

  /** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device (0..*) Never undefined; an empty list is created when absent. */
  getConformsTo(): DeviceConformsTo[] {
    if (this.conformsTo === undefined) {
      this.conformsTo = [];
    }
    return this.conformsTo;
  }

  setConformsTo(conformsTo: DeviceConformsTo[] | undefined): this {
    return this.setFieldValue('conformsTo', conformsTo);
  }

  hasConformsTo(): boolean {
    return this.hasFieldValue('conformsTo');
  }

  /** Appends a new, empty DeviceConformsTo to `conformsTo` and returns it so it can be filled in. */
  addConformsTo(): DeviceConformsTo;
  /** Appends the given DeviceConformsTo to `conformsTo` and returns this object for chaining. */
  addConformsTo(deviceConformsTo: DeviceConformsTo): this;
  addConformsTo(deviceConformsTo?: DeviceConformsTo): DeviceConformsTo | this {
    if (deviceConformsTo !== undefined) {
      return this.addFieldValue('conformsTo', deviceConformsTo);
    }
    const createdDeviceConformsTo = new DeviceConformsTo();
    this.addFieldValue('conformsTo', createdDeviceConformsTo);
    return createdDeviceConformsTo;
  }

  /** The first DeviceConformsTo of `conformsTo`. One is added when the list is empty. */
  getConformsToFirstRep(): DeviceConformsTo {
    const firstDeviceConformsTo = this.getConformsTo()[0];
    return firstDeviceConformsTo === undefined ? this.addConformsTo() : firstDeviceConformsTo;
  }

  /** Inherent, essentially fixed, characteristics of the device. e.g., time properties, size, material, etc. (0..*) Never undefined; an empty list is created when absent. */
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

  /** The designated condition for performing a task (0..1) Created when absent. */
  getMode(): CodeableConcept {
    if (this.mode === undefined) {
      this.mode = new CodeableConcept();
    }
    return this.mode;
  }

  setMode(mode: CodeableConcept | undefined): this {
    return this.setFieldValue('mode', mode);
  }

  hasMode(): boolean {
    return this.hasFieldValue('mode');
  }

  /** The series of occurrences that repeats during the operation of the device (0..1) Created when absent. */
  getCycle(): Count {
    if (this.cycle === undefined) {
      this.cycle = new Count();
    }
    return this.cycle;
  }

  setCycle(cycle: Count | undefined): this {
    return this.setFieldValue('cycle', cycle);
  }

  hasCycle(): boolean {
    return this.hasFieldValue('cycle');
  }

  /** A measurement of time during the device's operation (e.g., days, hours, mins, etc.) (0..1) Created when absent. */
  getDuration(): Duration {
    if (this.duration === undefined) {
      this.duration = new Duration();
    }
    return this.duration;
  }

  setDuration(duration: Duration | undefined): this {
    return this.setFieldValue('duration', duration);
  }

  hasDuration(): boolean {
    return this.hasFieldValue('duration');
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

  /** Technical endpoints providing access to electronic services provided by the device (0..*) Never undefined; an empty list is created when absent. */
  getEndpoint(): Reference[] {
    if (this.endpoint === undefined) {
      this.endpoint = [];
    }
    return this.endpoint;
  }

  setEndpoint(endpoint: Reference[] | undefined): this {
    return this.setFieldValue('endpoint', endpoint);
  }

  hasEndpoint(): boolean {
    return this.hasFieldValue('endpoint');
  }

  /** Appends a new, empty Reference to `endpoint` and returns it so it can be filled in. */
  addEndpoint(): Reference;
  /** Appends the given Reference to `endpoint` and returns this object for chaining. */
  addEndpoint(reference: Reference): this;
  addEndpoint(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('endpoint', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('endpoint', createdReference);
    return createdReference;
  }

  /** The first Reference of `endpoint`. One is added when the list is empty. */
  getEndpointFirstRep(): Reference {
    const firstReference = this.getEndpoint()[0];
    return firstReference === undefined ? this.addEndpoint() : firstReference;
  }

  /** Linked device acting as a communication/data collector, translator or controller (0..*) Never undefined; an empty list is created when absent. */
  getGateway(): CodeableReference[] {
    if (this.gateway === undefined) {
      this.gateway = [];
    }
    return this.gateway;
  }

  setGateway(gateway: CodeableReference[] | undefined): this {
    return this.setFieldValue('gateway', gateway);
  }

  hasGateway(): boolean {
    return this.hasFieldValue('gateway');
  }

  /** Appends a new, empty CodeableReference to `gateway` and returns it so it can be filled in. */
  addGateway(): CodeableReference;
  /** Appends the given CodeableReference to `gateway` and returns this object for chaining. */
  addGateway(codeableReference: CodeableReference): this;
  addGateway(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('gateway', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('gateway', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `gateway`. One is added when the list is empty. */
  getGatewayFirstRep(): CodeableReference {
    const firstCodeableReference = this.getGateway()[0];
    return firstCodeableReference === undefined ? this.addGateway() : firstCodeableReference;
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

  /** The higher level or encompassing device that this device is a logical part of (0..1) Created when absent. */
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

  /** Mandatory fixed portion of UDI (1..1) */
  deviceIdentifier?: string;
  /** Id and extensions of the primitive `deviceIdentifier`. */
  _deviceIdentifier?: Element;

  /** UDI Issuing Organization (1..1) */
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

  /** barcode | rfid | manual | card | self-reported | electronic-transmission | unknown (0..1) */
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

  /** Mandatory fixed portion of UDI (1..1) */
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

  /** UDI Issuing Organization (1..1) */
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

  /** barcode | rfid | manual | card | self-reported | electronic-transmission | unknown (0..1) */
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
 * The name or names of the device as known to the manufacturer and/or patient
 */
export class DeviceName extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.DeviceNameType }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'boolean' }],
    },
  ];

  /** The term that names the device (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** registered-name | user-friendly-name | patient-reported-name (1..1) */
  type?: valueSetCodes.DeviceNameType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The preferred device name (0..1) */
  display?: boolean;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  override fhirType(): string {
    return 'Device.name';
  }

  /** FHIR JSON for this DeviceName, typed as the plain `DeviceName` data type. */
  override toJSON(): plainTypes.DeviceName {
    return this.serialize() as plainTypes.DeviceName;
  }

  /** The term that names the device (1..1) */
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

  /** registered-name | user-friendly-name | patient-reported-name (1..1) */
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

  /** The preferred device name (0..1) */
  getDisplay(): boolean | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setDisplay(display: boolean | undefined): this {
    return this.setFieldValue('display', display);
  }

  hasDisplay(): boolean {
    return this.hasFieldValue('display');
  }

  /** The element carrying the id and extensions of `display`. Created when absent. */
  getDisplayElement(): Element {
    if (this._display === undefined) {
      this._display = new Element();
    }
    return this._display;
  }

  setDisplayElement(displayElement: Element | undefined): this {
    this._display = displayElement;
    return this;
  }
}

modelTypeRegistry.register('DeviceName', DeviceName, false);

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
      elementName: 'installDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'installDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** The type of the device version, e.g. manufacturer, approved, internal (0..1) */
  type?: CodeableConcept;

  /** The hardware or software module of the device to which the version applies (0..1) */
  component?: Identifier;

  /** The date the version was installed on the device (0..1) */
  installDate?: string;
  /** Id and extensions of the primitive `installDate`. */
  _installDate?: Element;

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

  /** The type of the device version, e.g. manufacturer, approved, internal (0..1) Created when absent. */
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

  /** The hardware or software module of the device to which the version applies (0..1) Created when absent. */
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

  /** The date the version was installed on the device (0..1) */
  getInstallDate(): string | undefined {
    return this.installDate;
  }

  /** Sets `installDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setInstallDate(installDate: string | undefined): this {
    return this.setFieldValue('installDate', installDate);
  }

  hasInstallDate(): boolean {
    return this.hasFieldValue('installDate');
  }

  /** The element carrying the id and extensions of `installDate`. Created when absent. */
  getInstallDateElement(): Element {
    if (this._installDate === undefined) {
      this._installDate = new Element();
    }
    return this._installDate;
  }

  setInstallDateElement(installDateElement: Element | undefined): this {
    this._installDate = installDateElement;
    return this;
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
 * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 */
export class DeviceConformsTo extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specification',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'specification', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
  ];

  /** Describes the common type of the standard, specification, or formal guidance. communication | performance | measurement (0..1) */
  category?: CodeableConcept;

  /** Identifies the standard, specification, or formal guidance that the device adheres to (1..1) */
  specification?: CodeableConcept;

  /** Specific form or variant of the standard (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  override fhirType(): string {
    return 'Device.conformsTo';
  }

  /** FHIR JSON for this DeviceConformsTo, typed as the plain `DeviceConformsTo` data type. */
  override toJSON(): plainTypes.DeviceConformsTo {
    return this.serialize() as plainTypes.DeviceConformsTo;
  }

  /** Describes the common type of the standard, specification, or formal guidance. communication | performance | measurement (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Identifies the standard, specification, or formal guidance that the device adheres to (1..1) Created when absent. */
  getSpecification(): CodeableConcept {
    if (this.specification === undefined) {
      this.specification = new CodeableConcept();
    }
    return this.specification;
  }

  setSpecification(specification: CodeableConcept | undefined): this {
    return this.setFieldValue('specification', specification);
  }

  hasSpecification(): boolean {
    return this.hasFieldValue('specification');
  }

  /** Specific form or variant of the standard (0..1) */
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

modelTypeRegistry.register('DeviceConformsTo', DeviceConformsTo, false);

/**
 * Inherent, essentially fixed, characteristics of the device. e.g., time properties, size, material, etc.
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
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
      ],
    },
  ];

  /** Code that specifies the property being represented (1..1) */
  type?: CodeableConcept;

  /** Value of the property (1..1) */
  valueQuantity?: Quantity;
  /** Value of the property (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value of the property (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of the property (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of the property (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of the property (1..1) */
  valueRange?: Range;
  /** Value of the property (1..1) */
  valueAttachment?: Attachment;

  override fhirType(): string {
    return 'Device.property';
  }

  /** FHIR JSON for this DeviceProperty, typed as the plain `DeviceProperty` data type. */
  override toJSON(): plainTypes.DeviceProperty {
    return this.serialize() as plainTypes.DeviceProperty;
  }

  /** Code that specifies the property being represented (1..1) Created when absent. */
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

  /** Value of the property (1..1) Whichever type of `value[x]` is set. */
  getValue():
    Quantity | CodeableConcept | string | boolean | number | Range | Attachment | undefined {
    return this.getChoiceValue<
      Quantity | CodeableConcept | string | boolean | number | Range | Attachment
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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

modelTypeRegistry.register('DeviceProperty', DeviceProperty, false);
