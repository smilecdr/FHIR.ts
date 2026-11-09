/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Device Resource
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
      elementName: 'udi',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'udi', typeCode: 'DeviceUdi' }],
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
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'lotNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lotNumber', typeCode: 'string' }],
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
      elementName: 'model',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'model', typeCode: 'string' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
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
  ];

  readonly resourceType = 'Device';

  /** Instance identifier (0..*) */
  identifier?: Identifier[];

  /** Unique Device Identifier (UDI) Barcode string (0..1) */
  udi?: DeviceUdi;

  /** active | inactive | entered-in-error | unknown (0..1) */
  status?: valueSetCodes.FHIRDeviceStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** What kind of device this is (0..1) */
  type?: CodeableConcept;

  /** Lot number of manufacture (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;

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

  /** Model id assigned by the manufacturer (0..1) */
  model?: string;
  /** Id and extensions of the primitive `model`. */
  _model?: Element;

  /** Version number (i.e. software) (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Patient to whom Device is affixed (0..1) */
  patient?: Reference;

  /** Organization responsible for device (0..1) */
  owner?: Reference;

  /** Details for human/organization for support (0..*) */
  contact?: ContactPoint[];

  /** Where the resource is found (0..1) */
  location?: Reference;

  /** Network address to contact device (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Device notes and comments (0..*) */
  note?: Annotation[];

  /** Safety Characteristics of Device (0..*) */
  safety?: CodeableConcept[];

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

  /** Unique Device Identifier (UDI) Barcode string (0..1) Created when absent. */
  getUdi(): DeviceUdi {
    if (this.udi === undefined) {
      this.udi = new DeviceUdi();
    }
    return this.udi;
  }

  setUdi(udi: DeviceUdi | undefined): this {
    return this.setFieldValue('udi', udi);
  }

  hasUdi(): boolean {
    return this.hasFieldValue('udi');
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

  /** What kind of device this is (0..1) Created when absent. */
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

  /** Model id assigned by the manufacturer (0..1) */
  getModel(): string | undefined {
    return this.model;
  }

  /** Sets `model`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setModel(model: string | undefined): this {
    return this.setFieldValue('model', model);
  }

  hasModel(): boolean {
    return this.hasFieldValue('model');
  }

  /** The element carrying the id and extensions of `model`. Created when absent. */
  getModelElement(): Element {
    if (this._model === undefined) {
      this._model = new Element();
    }
    return this._model;
  }

  setModelElement(modelElement: Element | undefined): this {
    this._model = modelElement;
    return this;
  }

  /** Version number (i.e. software) (0..1) */
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

  /** Where the resource is found (0..1) Created when absent. */
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
}

modelTypeRegistry.register('Device', Device, true);

/** True when the value is a Device model instance. */
export function isDevice(candidate: unknown): candidate is Device {
  return candidate instanceof Device;
}

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export class DeviceUdi extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'deviceIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'deviceIdentifier', typeCode: 'string' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'uri' }],
    },
    {
      elementName: 'carrierHRF',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'carrierHRF', typeCode: 'string' }],
    },
    {
      elementName: 'carrierAIDC',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'carrierAIDC', typeCode: 'base64Binary' }],
    },
    {
      elementName: 'issuer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issuer', typeCode: 'uri' }],
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

  /** Device Name as appears on UDI label (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Regional UDI authority (0..1) */
  jurisdiction?: string;
  /** Id and extensions of the primitive `jurisdiction`. */
  _jurisdiction?: Element;

  /** UDI Human Readable Barcode String (0..1) */
  carrierHRF?: string;
  /** Id and extensions of the primitive `carrierHRF`. */
  _carrierHRF?: Element;

  /** UDI Machine Readable Barcode String (0..1) */
  carrierAIDC?: string;
  /** Id and extensions of the primitive `carrierAIDC`. */
  _carrierAIDC?: Element;

  /** UDI Issuing Organization (0..1) */
  issuer?: string;
  /** Id and extensions of the primitive `issuer`. */
  _issuer?: Element;

  /** barcode | rfid | manual + (0..1) */
  entryType?: valueSetCodes.UDIEntryType;
  /** Id and extensions of the primitive `entryType`. */
  _entryType?: Element;

  override fhirType(): string {
    return 'Device.udi';
  }

  /** FHIR JSON for this DeviceUdi, typed as the plain `DeviceUdi` data type. */
  override toJSON(): plainTypes.DeviceUdi {
    return this.serialize() as plainTypes.DeviceUdi;
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

  /** Device Name as appears on UDI label (0..1) */
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

modelTypeRegistry.register('DeviceUdi', DeviceUdi, false);
