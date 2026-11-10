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
import { Coding } from './coding';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { ProductShelfLife } from './productShelfLife';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { UsageContext } from './usageContext';

/**
 * This is a specialized resource that defines the characteristics and capabilities of a device.
 */
export class DeviceDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
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
      elementName: 'regulatoryIdentifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'regulatoryIdentifier', typeCode: 'DeviceDefinitionRegulatoryIdentifier' },
      ],
    },
    {
      elementName: 'partNumber',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'partNumber', typeCode: 'string' }],
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
      elementName: 'classification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classification', typeCode: 'DeviceDefinitionClassification' }],
    },
    {
      elementName: 'conformsTo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'conformsTo', typeCode: 'DeviceDefinitionConformsTo' }],
    },
    {
      elementName: 'hasPart',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'hasPart', typeCode: 'DeviceDefinitionHasPart' }],
    },
    {
      elementName: 'packaging',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'packaging', typeCode: 'DeviceDefinitionPackaging' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'version', typeCode: 'DeviceDefinitionVersion' }],
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
      elementName: 'languageCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'languageCode', typeCode: 'CodeableConcept' }],
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
      elementName: 'link',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'link', typeCode: 'DeviceDefinitionLink' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'material',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'material', typeCode: 'DeviceDefinitionMaterial' }],
    },
    {
      elementName: 'productionIdentifierInUDI',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'productionIdentifierInUDI',
          typeCode: 'code',
          allowedCodes: valueSetCodes.DeviceProductionIdentifierInUDI,
        },
      ],
    },
    {
      elementName: 'guideline',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'guideline', typeCode: 'DeviceDefinitionGuideline' }],
    },
    {
      elementName: 'correctiveAction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'correctiveAction', typeCode: 'DeviceDefinitionCorrectiveAction' }],
    },
    {
      elementName: 'chargeItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'chargeItem', typeCode: 'DeviceDefinitionChargeItem' }],
    },
  ];

  readonly resourceType = 'DeviceDefinition';

  /** Additional information to describe the device (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Instance identifier (0..*) */
  identifier?: Identifier[];

  /** Unique Device Identifier (UDI) Barcode string (0..*) */
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  /** Regulatory identifier(s) associated with this device (0..*) */
  regulatoryIdentifier?: DeviceDefinitionRegulatoryIdentifier[];

  /** The part number or catalog number of the device (0..1) */
  partNumber?: string;
  /** Id and extensions of the primitive `partNumber`. */
  _partNumber?: Element;

  /** Name of device manufacturer (0..1) */
  manufacturer?: Reference;

  /** The name or names of the device as given by the manufacturer (0..*) */
  deviceName?: DeviceDefinitionDeviceName[];

  /** The catalog or model number for the device for example as defined by the manufacturer (0..1) */
  modelNumber?: string;
  /** Id and extensions of the primitive `modelNumber`. */
  _modelNumber?: Element;

  /** What kind of device or device system this is (0..*) */
  classification?: DeviceDefinitionClassification[];

  /** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device (0..*) */
  conformsTo?: DeviceDefinitionConformsTo[];

  /** A device, part of the current one (0..*) */
  hasPart?: DeviceDefinitionHasPart[];

  /** Information about the packaging of the device, i.e. how the device is packaged (0..*) */
  packaging?: DeviceDefinitionPackaging[];

  /** The version of the device or software (0..*) */
  version?: DeviceDefinitionVersion[];

  /** Safety characteristics of the device (0..*) */
  safety?: CodeableConcept[];

  /** Shelf Life and storage information (0..*) */
  shelfLifeStorage?: ProductShelfLife[];

  /** Language code for the human-readable text strings produced by the device (all supported) (0..*) */
  languageCode?: CodeableConcept[];

  /** Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc (0..*) */
  property?: DeviceDefinitionProperty[];

  /** Organization responsible for device (0..1) */
  owner?: Reference;

  /** Details for human/organization for support (0..*) */
  contact?: ContactPoint[];

  /** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device (0..*) */
  link?: DeviceDefinitionLink[];

  /** Device notes and comments (0..*) */
  note?: Annotation[];

  /** A substance used to create the material(s) of which the device is made (0..*) */
  material?: DeviceDefinitionMaterial[];

  /** lot-number | manufactured-date | serial-number | expiration-date | biological-source | software-version (0..*) */
  productionIdentifierInUDI?: valueSetCodes.DeviceProductionIdentifierInUDI[];
  /** Id and extensions of the primitive `productionIdentifierInUDI`. */
  _productionIdentifierInUDI?: (Element | null)[];

  /** Information aimed at providing directions for the usage of this model of device (0..1) */
  guideline?: DeviceDefinitionGuideline;

  /** Tracking of latest field safety corrective action (0..1) */
  correctiveAction?: DeviceDefinitionCorrectiveAction;

  /** Billing code or reference associated with the device (0..*) */
  chargeItem?: DeviceDefinitionChargeItem[];

  override fhirType(): string {
    return 'DeviceDefinition';
  }

  /** FHIR JSON for this DeviceDefinition, typed as the plain `DeviceDefinition` data type. */
  override toJSON(): plainTypes.DeviceDefinition {
    return this.serialize() as plainTypes.DeviceDefinition;
  }

  /** Additional information to describe the device (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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

  /** Regulatory identifier(s) associated with this device (0..*) Never undefined; an empty list is created when absent. */
  getRegulatoryIdentifier(): DeviceDefinitionRegulatoryIdentifier[] {
    if (this.regulatoryIdentifier === undefined) {
      this.regulatoryIdentifier = [];
    }
    return this.regulatoryIdentifier;
  }

  setRegulatoryIdentifier(
    regulatoryIdentifier: DeviceDefinitionRegulatoryIdentifier[] | undefined
  ): this {
    return this.setFieldValue('regulatoryIdentifier', regulatoryIdentifier);
  }

  hasRegulatoryIdentifier(): boolean {
    return this.hasFieldValue('regulatoryIdentifier');
  }

  /** Appends a new, empty DeviceDefinitionRegulatoryIdentifier to `regulatoryIdentifier` and returns it so it can be filled in. */
  addRegulatoryIdentifier(): DeviceDefinitionRegulatoryIdentifier;
  /** Appends the given DeviceDefinitionRegulatoryIdentifier to `regulatoryIdentifier` and returns this object for chaining. */
  addRegulatoryIdentifier(
    deviceDefinitionRegulatoryIdentifier: DeviceDefinitionRegulatoryIdentifier
  ): this;
  addRegulatoryIdentifier(
    deviceDefinitionRegulatoryIdentifier?: DeviceDefinitionRegulatoryIdentifier
  ): DeviceDefinitionRegulatoryIdentifier | this {
    if (deviceDefinitionRegulatoryIdentifier !== undefined) {
      return this.addFieldValue('regulatoryIdentifier', deviceDefinitionRegulatoryIdentifier);
    }
    const createdDeviceDefinitionRegulatoryIdentifier = new DeviceDefinitionRegulatoryIdentifier();
    this.addFieldValue('regulatoryIdentifier', createdDeviceDefinitionRegulatoryIdentifier);
    return createdDeviceDefinitionRegulatoryIdentifier;
  }

  /** The first DeviceDefinitionRegulatoryIdentifier of `regulatoryIdentifier`. One is added when the list is empty. */
  getRegulatoryIdentifierFirstRep(): DeviceDefinitionRegulatoryIdentifier {
    const firstDeviceDefinitionRegulatoryIdentifier = this.getRegulatoryIdentifier()[0];
    return firstDeviceDefinitionRegulatoryIdentifier === undefined
      ? this.addRegulatoryIdentifier()
      : firstDeviceDefinitionRegulatoryIdentifier;
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

  /** Name of device manufacturer (0..1) Created when absent. */
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

  /** The name or names of the device as given by the manufacturer (0..*) Never undefined; an empty list is created when absent. */
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

  /** The catalog or model number for the device for example as defined by the manufacturer (0..1) */
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

  /** What kind of device or device system this is (0..*) Never undefined; an empty list is created when absent. */
  getClassification(): DeviceDefinitionClassification[] {
    if (this.classification === undefined) {
      this.classification = [];
    }
    return this.classification;
  }

  setClassification(classification: DeviceDefinitionClassification[] | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** Appends a new, empty DeviceDefinitionClassification to `classification` and returns it so it can be filled in. */
  addClassification(): DeviceDefinitionClassification;
  /** Appends the given DeviceDefinitionClassification to `classification` and returns this object for chaining. */
  addClassification(deviceDefinitionClassification: DeviceDefinitionClassification): this;
  addClassification(
    deviceDefinitionClassification?: DeviceDefinitionClassification
  ): DeviceDefinitionClassification | this {
    if (deviceDefinitionClassification !== undefined) {
      return this.addFieldValue('classification', deviceDefinitionClassification);
    }
    const createdDeviceDefinitionClassification = new DeviceDefinitionClassification();
    this.addFieldValue('classification', createdDeviceDefinitionClassification);
    return createdDeviceDefinitionClassification;
  }

  /** The first DeviceDefinitionClassification of `classification`. One is added when the list is empty. */
  getClassificationFirstRep(): DeviceDefinitionClassification {
    const firstDeviceDefinitionClassification = this.getClassification()[0];
    return firstDeviceDefinitionClassification === undefined
      ? this.addClassification()
      : firstDeviceDefinitionClassification;
  }

  /** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device (0..*) Never undefined; an empty list is created when absent. */
  getConformsTo(): DeviceDefinitionConformsTo[] {
    if (this.conformsTo === undefined) {
      this.conformsTo = [];
    }
    return this.conformsTo;
  }

  setConformsTo(conformsTo: DeviceDefinitionConformsTo[] | undefined): this {
    return this.setFieldValue('conformsTo', conformsTo);
  }

  hasConformsTo(): boolean {
    return this.hasFieldValue('conformsTo');
  }

  /** Appends a new, empty DeviceDefinitionConformsTo to `conformsTo` and returns it so it can be filled in. */
  addConformsTo(): DeviceDefinitionConformsTo;
  /** Appends the given DeviceDefinitionConformsTo to `conformsTo` and returns this object for chaining. */
  addConformsTo(deviceDefinitionConformsTo: DeviceDefinitionConformsTo): this;
  addConformsTo(
    deviceDefinitionConformsTo?: DeviceDefinitionConformsTo
  ): DeviceDefinitionConformsTo | this {
    if (deviceDefinitionConformsTo !== undefined) {
      return this.addFieldValue('conformsTo', deviceDefinitionConformsTo);
    }
    const createdDeviceDefinitionConformsTo = new DeviceDefinitionConformsTo();
    this.addFieldValue('conformsTo', createdDeviceDefinitionConformsTo);
    return createdDeviceDefinitionConformsTo;
  }

  /** The first DeviceDefinitionConformsTo of `conformsTo`. One is added when the list is empty. */
  getConformsToFirstRep(): DeviceDefinitionConformsTo {
    const firstDeviceDefinitionConformsTo = this.getConformsTo()[0];
    return firstDeviceDefinitionConformsTo === undefined
      ? this.addConformsTo()
      : firstDeviceDefinitionConformsTo;
  }

  /** A device, part of the current one (0..*) Never undefined; an empty list is created when absent. */
  getHasPart(): DeviceDefinitionHasPart[] {
    if (this.hasPart === undefined) {
      this.hasPart = [];
    }
    return this.hasPart;
  }

  setHasPart(hasPart: DeviceDefinitionHasPart[] | undefined): this {
    return this.setFieldValue('hasPart', hasPart);
  }

  hasHasPart(): boolean {
    return this.hasFieldValue('hasPart');
  }

  /** Appends a new, empty DeviceDefinitionHasPart to `hasPart` and returns it so it can be filled in. */
  addHasPart(): DeviceDefinitionHasPart;
  /** Appends the given DeviceDefinitionHasPart to `hasPart` and returns this object for chaining. */
  addHasPart(deviceDefinitionHasPart: DeviceDefinitionHasPart): this;
  addHasPart(deviceDefinitionHasPart?: DeviceDefinitionHasPart): DeviceDefinitionHasPart | this {
    if (deviceDefinitionHasPart !== undefined) {
      return this.addFieldValue('hasPart', deviceDefinitionHasPart);
    }
    const createdDeviceDefinitionHasPart = new DeviceDefinitionHasPart();
    this.addFieldValue('hasPart', createdDeviceDefinitionHasPart);
    return createdDeviceDefinitionHasPart;
  }

  /** The first DeviceDefinitionHasPart of `hasPart`. One is added when the list is empty. */
  getHasPartFirstRep(): DeviceDefinitionHasPart {
    const firstDeviceDefinitionHasPart = this.getHasPart()[0];
    return firstDeviceDefinitionHasPart === undefined
      ? this.addHasPart()
      : firstDeviceDefinitionHasPart;
  }

  /** Information about the packaging of the device, i.e. how the device is packaged (0..*) Never undefined; an empty list is created when absent. */
  getPackaging(): DeviceDefinitionPackaging[] {
    if (this.packaging === undefined) {
      this.packaging = [];
    }
    return this.packaging;
  }

  setPackaging(packaging: DeviceDefinitionPackaging[] | undefined): this {
    return this.setFieldValue('packaging', packaging);
  }

  hasPackaging(): boolean {
    return this.hasFieldValue('packaging');
  }

  /** Appends a new, empty DeviceDefinitionPackaging to `packaging` and returns it so it can be filled in. */
  addPackaging(): DeviceDefinitionPackaging;
  /** Appends the given DeviceDefinitionPackaging to `packaging` and returns this object for chaining. */
  addPackaging(deviceDefinitionPackaging: DeviceDefinitionPackaging): this;
  addPackaging(
    deviceDefinitionPackaging?: DeviceDefinitionPackaging
  ): DeviceDefinitionPackaging | this {
    if (deviceDefinitionPackaging !== undefined) {
      return this.addFieldValue('packaging', deviceDefinitionPackaging);
    }
    const createdDeviceDefinitionPackaging = new DeviceDefinitionPackaging();
    this.addFieldValue('packaging', createdDeviceDefinitionPackaging);
    return createdDeviceDefinitionPackaging;
  }

  /** The first DeviceDefinitionPackaging of `packaging`. One is added when the list is empty. */
  getPackagingFirstRep(): DeviceDefinitionPackaging {
    const firstDeviceDefinitionPackaging = this.getPackaging()[0];
    return firstDeviceDefinitionPackaging === undefined
      ? this.addPackaging()
      : firstDeviceDefinitionPackaging;
  }

  /** The version of the device or software (0..*) Never undefined; an empty list is created when absent. */
  getVersion(): DeviceDefinitionVersion[] {
    if (this.version === undefined) {
      this.version = [];
    }
    return this.version;
  }

  setVersion(version: DeviceDefinitionVersion[] | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** Appends a new, empty DeviceDefinitionVersion to `version` and returns it so it can be filled in. */
  addVersion(): DeviceDefinitionVersion;
  /** Appends the given DeviceDefinitionVersion to `version` and returns this object for chaining. */
  addVersion(deviceDefinitionVersion: DeviceDefinitionVersion): this;
  addVersion(deviceDefinitionVersion?: DeviceDefinitionVersion): DeviceDefinitionVersion | this {
    if (deviceDefinitionVersion !== undefined) {
      return this.addFieldValue('version', deviceDefinitionVersion);
    }
    const createdDeviceDefinitionVersion = new DeviceDefinitionVersion();
    this.addFieldValue('version', createdDeviceDefinitionVersion);
    return createdDeviceDefinitionVersion;
  }

  /** The first DeviceDefinitionVersion of `version`. One is added when the list is empty. */
  getVersionFirstRep(): DeviceDefinitionVersion {
    const firstDeviceDefinitionVersion = this.getVersion()[0];
    return firstDeviceDefinitionVersion === undefined
      ? this.addVersion()
      : firstDeviceDefinitionVersion;
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

  /** Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc (0..*) Never undefined; an empty list is created when absent. */
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

  /** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device (0..*) Never undefined; an empty list is created when absent. */
  getLink(): DeviceDefinitionLink[] {
    if (this.link === undefined) {
      this.link = [];
    }
    return this.link;
  }

  setLink(link: DeviceDefinitionLink[] | undefined): this {
    return this.setFieldValue('link', link);
  }

  hasLink(): boolean {
    return this.hasFieldValue('link');
  }

  /** Appends a new, empty DeviceDefinitionLink to `link` and returns it so it can be filled in. */
  addLink(): DeviceDefinitionLink;
  /** Appends the given DeviceDefinitionLink to `link` and returns this object for chaining. */
  addLink(deviceDefinitionLink: DeviceDefinitionLink): this;
  addLink(deviceDefinitionLink?: DeviceDefinitionLink): DeviceDefinitionLink | this {
    if (deviceDefinitionLink !== undefined) {
      return this.addFieldValue('link', deviceDefinitionLink);
    }
    const createdDeviceDefinitionLink = new DeviceDefinitionLink();
    this.addFieldValue('link', createdDeviceDefinitionLink);
    return createdDeviceDefinitionLink;
  }

  /** The first DeviceDefinitionLink of `link`. One is added when the list is empty. */
  getLinkFirstRep(): DeviceDefinitionLink {
    const firstDeviceDefinitionLink = this.getLink()[0];
    return firstDeviceDefinitionLink === undefined ? this.addLink() : firstDeviceDefinitionLink;
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

  /** lot-number | manufactured-date | serial-number | expiration-date | biological-source | software-version (0..*) Never undefined; an empty list is created when absent. */
  getProductionIdentifierInUDI(): valueSetCodes.DeviceProductionIdentifierInUDI[] {
    if (this.productionIdentifierInUDI === undefined) {
      this.productionIdentifierInUDI = [];
    }
    return this.productionIdentifierInUDI;
  }

  setProductionIdentifierInUDI(
    productionIdentifierInUDI: valueSetCodes.DeviceProductionIdentifierInUDI[] | undefined
  ): this {
    return this.setFieldValue('productionIdentifierInUDI', productionIdentifierInUDI);
  }

  hasProductionIdentifierInUDI(): boolean {
    return this.hasFieldValue('productionIdentifierInUDI');
  }

  /** Appends one value to `productionIdentifierInUDI`. Throws a FhirModelError when it is not a valid FHIR code. */
  addProductionIdentifierInUDI(
    productionIdentifierInUDI: valueSetCodes.DeviceProductionIdentifierInUDI
  ): this {
    return this.addFieldValue('productionIdentifierInUDI', productionIdentifierInUDI);
  }

  /** Information aimed at providing directions for the usage of this model of device (0..1) Created when absent. */
  getGuideline(): DeviceDefinitionGuideline {
    if (this.guideline === undefined) {
      this.guideline = new DeviceDefinitionGuideline();
    }
    return this.guideline;
  }

  setGuideline(guideline: DeviceDefinitionGuideline | undefined): this {
    return this.setFieldValue('guideline', guideline);
  }

  hasGuideline(): boolean {
    return this.hasFieldValue('guideline');
  }

  /** Tracking of latest field safety corrective action (0..1) Created when absent. */
  getCorrectiveAction(): DeviceDefinitionCorrectiveAction {
    if (this.correctiveAction === undefined) {
      this.correctiveAction = new DeviceDefinitionCorrectiveAction();
    }
    return this.correctiveAction;
  }

  setCorrectiveAction(correctiveAction: DeviceDefinitionCorrectiveAction | undefined): this {
    return this.setFieldValue('correctiveAction', correctiveAction);
  }

  hasCorrectiveAction(): boolean {
    return this.hasFieldValue('correctiveAction');
  }

  /** Billing code or reference associated with the device (0..*) Never undefined; an empty list is created when absent. */
  getChargeItem(): DeviceDefinitionChargeItem[] {
    if (this.chargeItem === undefined) {
      this.chargeItem = [];
    }
    return this.chargeItem;
  }

  setChargeItem(chargeItem: DeviceDefinitionChargeItem[] | undefined): this {
    return this.setFieldValue('chargeItem', chargeItem);
  }

  hasChargeItem(): boolean {
    return this.hasFieldValue('chargeItem');
  }

  /** Appends a new, empty DeviceDefinitionChargeItem to `chargeItem` and returns it so it can be filled in. */
  addChargeItem(): DeviceDefinitionChargeItem;
  /** Appends the given DeviceDefinitionChargeItem to `chargeItem` and returns this object for chaining. */
  addChargeItem(deviceDefinitionChargeItem: DeviceDefinitionChargeItem): this;
  addChargeItem(
    deviceDefinitionChargeItem?: DeviceDefinitionChargeItem
  ): DeviceDefinitionChargeItem | this {
    if (deviceDefinitionChargeItem !== undefined) {
      return this.addFieldValue('chargeItem', deviceDefinitionChargeItem);
    }
    const createdDeviceDefinitionChargeItem = new DeviceDefinitionChargeItem();
    this.addFieldValue('chargeItem', createdDeviceDefinitionChargeItem);
    return createdDeviceDefinitionChargeItem;
  }

  /** The first DeviceDefinitionChargeItem of `chargeItem`. One is added when the list is empty. */
  getChargeItemFirstRep(): DeviceDefinitionChargeItem {
    const firstDeviceDefinitionChargeItem = this.getChargeItem()[0];
    return firstDeviceDefinitionChargeItem === undefined
      ? this.addChargeItem()
      : firstDeviceDefinitionChargeItem;
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
    {
      elementName: 'marketDistribution',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'marketDistribution',
          typeCode: 'DeviceDefinitionUdiDeviceIdentifierMarketDistribution',
        },
      ],
    },
  ];

  /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdiction provided in the DeviceDefinition.udiDeviceIdentifier (1..1) */
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

  /** Indicates whether and when the device is available on the market (0..*) */
  marketDistribution?: DeviceDefinitionUdiDeviceIdentifierMarketDistribution[];

  override fhirType(): string {
    return 'DeviceDefinition.udiDeviceIdentifier';
  }

  /** FHIR JSON for this DeviceDefinitionUdiDeviceIdentifier, typed as the plain `DeviceDefinitionUdiDeviceIdentifier` data type. */
  override toJSON(): plainTypes.DeviceDefinitionUdiDeviceIdentifier {
    return this.serialize() as plainTypes.DeviceDefinitionUdiDeviceIdentifier;
  }

  /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdiction provided in the DeviceDefinition.udiDeviceIdentifier (1..1) */
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

  /** Indicates whether and when the device is available on the market (0..*) Never undefined; an empty list is created when absent. */
  getMarketDistribution(): DeviceDefinitionUdiDeviceIdentifierMarketDistribution[] {
    if (this.marketDistribution === undefined) {
      this.marketDistribution = [];
    }
    return this.marketDistribution;
  }

  setMarketDistribution(
    marketDistribution: DeviceDefinitionUdiDeviceIdentifierMarketDistribution[] | undefined
  ): this {
    return this.setFieldValue('marketDistribution', marketDistribution);
  }

  hasMarketDistribution(): boolean {
    return this.hasFieldValue('marketDistribution');
  }

  /** Appends a new, empty DeviceDefinitionUdiDeviceIdentifierMarketDistribution to `marketDistribution` and returns it so it can be filled in. */
  addMarketDistribution(): DeviceDefinitionUdiDeviceIdentifierMarketDistribution;
  /** Appends the given DeviceDefinitionUdiDeviceIdentifierMarketDistribution to `marketDistribution` and returns this object for chaining. */
  addMarketDistribution(
    deviceDefinitionUdiDeviceIdentifierMarketDistribution: DeviceDefinitionUdiDeviceIdentifierMarketDistribution
  ): this;
  addMarketDistribution(
    deviceDefinitionUdiDeviceIdentifierMarketDistribution?: DeviceDefinitionUdiDeviceIdentifierMarketDistribution
  ): DeviceDefinitionUdiDeviceIdentifierMarketDistribution | this {
    if (deviceDefinitionUdiDeviceIdentifierMarketDistribution !== undefined) {
      return this.addFieldValue(
        'marketDistribution',
        deviceDefinitionUdiDeviceIdentifierMarketDistribution
      );
    }
    const createdDeviceDefinitionUdiDeviceIdentifierMarketDistribution =
      new DeviceDefinitionUdiDeviceIdentifierMarketDistribution();
    this.addFieldValue(
      'marketDistribution',
      createdDeviceDefinitionUdiDeviceIdentifierMarketDistribution
    );
    return createdDeviceDefinitionUdiDeviceIdentifierMarketDistribution;
  }

  /** The first DeviceDefinitionUdiDeviceIdentifierMarketDistribution of `marketDistribution`. One is added when the list is empty. */
  getMarketDistributionFirstRep(): DeviceDefinitionUdiDeviceIdentifierMarketDistribution {
    const firstDeviceDefinitionUdiDeviceIdentifierMarketDistribution =
      this.getMarketDistribution()[0];
    return firstDeviceDefinitionUdiDeviceIdentifierMarketDistribution === undefined
      ? this.addMarketDistribution()
      : firstDeviceDefinitionUdiDeviceIdentifierMarketDistribution;
  }
}

modelTypeRegistry.register(
  'DeviceDefinitionUdiDeviceIdentifier',
  DeviceDefinitionUdiDeviceIdentifier,
  false
);

/**
 * Indicates whether and when the device is available on the market
 */
export class DeviceDefinitionUdiDeviceIdentifierMarketDistribution extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'marketPeriod',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'marketPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'subJurisdiction',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subJurisdiction', typeCode: 'uri' }],
    },
  ];

  /** Begin and end dates for the commercial distribution of the device (1..1) */
  marketPeriod?: Period;

  /** National state or territory where the device is commercialized (1..1) */
  subJurisdiction?: string;
  /** Id and extensions of the primitive `subJurisdiction`. */
  _subJurisdiction?: Element;

  override fhirType(): string {
    return 'DeviceDefinition.udiDeviceIdentifier.marketDistribution';
  }

  /** FHIR JSON for this DeviceDefinitionUdiDeviceIdentifierMarketDistribution, typed as the plain `DeviceDefinitionMarketDistribution` data type. */
  override toJSON(): plainTypes.DeviceDefinitionMarketDistribution {
    return this.serialize() as plainTypes.DeviceDefinitionMarketDistribution;
  }

  /** Begin and end dates for the commercial distribution of the device (1..1) Created when absent. */
  getMarketPeriod(): Period {
    if (this.marketPeriod === undefined) {
      this.marketPeriod = new Period();
    }
    return this.marketPeriod;
  }

  setMarketPeriod(marketPeriod: Period | undefined): this {
    return this.setFieldValue('marketPeriod', marketPeriod);
  }

  hasMarketPeriod(): boolean {
    return this.hasFieldValue('marketPeriod');
  }

  /** National state or territory where the device is commercialized (1..1) */
  getSubJurisdiction(): string | undefined {
    return this.subJurisdiction;
  }

  /** Sets `subJurisdiction`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setSubJurisdiction(subJurisdiction: string | undefined): this {
    return this.setFieldValue('subJurisdiction', subJurisdiction);
  }

  hasSubJurisdiction(): boolean {
    return this.hasFieldValue('subJurisdiction');
  }

  /** The element carrying the id and extensions of `subJurisdiction`. Created when absent. */
  getSubJurisdictionElement(): Element {
    if (this._subJurisdiction === undefined) {
      this._subJurisdiction = new Element();
    }
    return this._subJurisdiction;
  }

  setSubJurisdictionElement(subJurisdictionElement: Element | undefined): this {
    this._subJurisdiction = subJurisdictionElement;
    return this;
  }
}

modelTypeRegistry.register(
  'DeviceDefinitionUdiDeviceIdentifierMarketDistribution',
  DeviceDefinitionUdiDeviceIdentifierMarketDistribution,
  false
);

/**
 * Regulatory identifier(s) associated with this device
 */
export class DeviceDefinitionRegulatoryIdentifier extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.DeviceDefinitionRegulatoryIdentifierType,
        },
      ],
    },
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

  /** basic | master | license (1..1) */
  type?: valueSetCodes.DeviceDefinitionRegulatoryIdentifierType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The identifier itself (1..1) */
  deviceIdentifier?: string;
  /** Id and extensions of the primitive `deviceIdentifier`. */
  _deviceIdentifier?: Element;

  /** The organization that issued this identifier (1..1) */
  issuer?: string;
  /** Id and extensions of the primitive `issuer`. */
  _issuer?: Element;

  /** The jurisdiction to which the deviceIdentifier applies (1..1) */
  jurisdiction?: string;
  /** Id and extensions of the primitive `jurisdiction`. */
  _jurisdiction?: Element;

  override fhirType(): string {
    return 'DeviceDefinition.regulatoryIdentifier';
  }

  /** FHIR JSON for this DeviceDefinitionRegulatoryIdentifier, typed as the plain `DeviceDefinitionRegulatoryIdentifier` data type. */
  override toJSON(): plainTypes.DeviceDefinitionRegulatoryIdentifier {
    return this.serialize() as plainTypes.DeviceDefinitionRegulatoryIdentifier;
  }

  /** basic | master | license (1..1) */
  getType(): valueSetCodes.DeviceDefinitionRegulatoryIdentifierType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.DeviceDefinitionRegulatoryIdentifierType | undefined): this {
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

  /** The identifier itself (1..1) */
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

  /** The organization that issued this identifier (1..1) */
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
  'DeviceDefinitionRegulatoryIdentifier',
  DeviceDefinitionRegulatoryIdentifier,
  false
);

/**
 * The name or names of the device as given by the manufacturer
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

  /** A name that is used to refer to the device (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** registered-name | user-friendly-name | patient-reported-name (1..1) */
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

  /** A name that is used to refer to the device (1..1) */
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
}

modelTypeRegistry.register('DeviceDefinitionDeviceName', DeviceDefinitionDeviceName, false);

/**
 * What kind of device or device system this is
 */
export class DeviceDefinitionClassification extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'justification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'justification', typeCode: 'RelatedArtifact' }],
    },
  ];

  /** A classification or risk class of the device model (1..1) */
  type?: CodeableConcept;

  /** Further information qualifying this classification of the device model (0..*) */
  justification?: RelatedArtifact[];

  override fhirType(): string {
    return 'DeviceDefinition.classification';
  }

  /** FHIR JSON for this DeviceDefinitionClassification, typed as the plain `DeviceDefinitionClassification` data type. */
  override toJSON(): plainTypes.DeviceDefinitionClassification {
    return this.serialize() as plainTypes.DeviceDefinitionClassification;
  }

  /** A classification or risk class of the device model (1..1) Created when absent. */
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

  /** Further information qualifying this classification of the device model (0..*) Never undefined; an empty list is created when absent. */
  getJustification(): RelatedArtifact[] {
    if (this.justification === undefined) {
      this.justification = [];
    }
    return this.justification;
  }

  setJustification(justification: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('justification', justification);
  }

  hasJustification(): boolean {
    return this.hasFieldValue('justification');
  }

  /** Appends a new, empty RelatedArtifact to `justification` and returns it so it can be filled in. */
  addJustification(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `justification` and returns this object for chaining. */
  addJustification(relatedArtifact: RelatedArtifact): this;
  addJustification(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('justification', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('justification', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `justification`. One is added when the list is empty. */
  getJustificationFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getJustification()[0];
    return firstRelatedArtifact === undefined ? this.addJustification() : firstRelatedArtifact;
  }
}

modelTypeRegistry.register('DeviceDefinitionClassification', DeviceDefinitionClassification, false);

/**
 * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 */
export class DeviceDefinitionConformsTo extends BackboneElement {
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
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'source', typeCode: 'RelatedArtifact' }],
    },
  ];

  /** Describes the common type of the standard, specification, or formal guidance (0..1) */
  category?: CodeableConcept;

  /** Identifies the standard, specification, or formal guidance that the device adheres to the Device Specification type (1..1) */
  specification?: CodeableConcept;

  /** The specific form or variant of the standard, specification or formal guidance (0..*) */
  version?: string[];
  /** Id and extensions of the primitive `version`. */
  _version?: (Element | null)[];

  /** Standard, regulation, certification, or guidance website, document, or other publication, or similar, supporting the conformance (0..*) */
  source?: RelatedArtifact[];

  override fhirType(): string {
    return 'DeviceDefinition.conformsTo';
  }

  /** FHIR JSON for this DeviceDefinitionConformsTo, typed as the plain `DeviceDefinitionConformsTo` data type. */
  override toJSON(): plainTypes.DeviceDefinitionConformsTo {
    return this.serialize() as plainTypes.DeviceDefinitionConformsTo;
  }

  /** Describes the common type of the standard, specification, or formal guidance (0..1) Created when absent. */
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

  /** Identifies the standard, specification, or formal guidance that the device adheres to the Device Specification type (1..1) Created when absent. */
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

  /** The specific form or variant of the standard, specification or formal guidance (0..*) Never undefined; an empty list is created when absent. */
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

  /** Standard, regulation, certification, or guidance website, document, or other publication, or similar, supporting the conformance (0..*) Never undefined; an empty list is created when absent. */
  getSource(): RelatedArtifact[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty RelatedArtifact to `source` and returns it so it can be filled in. */
  addSource(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `source` and returns this object for chaining. */
  addSource(relatedArtifact: RelatedArtifact): this;
  addSource(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('source', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('source', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `source`. One is added when the list is empty. */
  getSourceFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getSource()[0];
    return firstRelatedArtifact === undefined ? this.addSource() : firstRelatedArtifact;
  }
}

modelTypeRegistry.register('DeviceDefinitionConformsTo', DeviceDefinitionConformsTo, false);

/**
 * A device, part of the current one
 */
export class DeviceDefinitionHasPart extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reference', typeCode: 'Reference', targetResourceTypes: ['DeviceDefinition'] },
      ],
    },
    {
      elementName: 'count',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'count', typeCode: 'integer' }],
    },
  ];

  /** Reference to the part (1..1) */
  reference?: Reference;

  /** Number of occurrences of the part (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  override fhirType(): string {
    return 'DeviceDefinition.hasPart';
  }

  /** FHIR JSON for this DeviceDefinitionHasPart, typed as the plain `DeviceDefinitionHasPart` data type. */
  override toJSON(): plainTypes.DeviceDefinitionHasPart {
    return this.serialize() as plainTypes.DeviceDefinitionHasPart;
  }

  /** Reference to the part (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** Number of occurrences of the part (0..1) */
  getCount(): number | undefined {
    return this.count;
  }

  /** Sets `count`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setCount(count: number | undefined): this {
    return this.setFieldValue('count', count);
  }

  hasCount(): boolean {
    return this.hasFieldValue('count');
  }

  /** The element carrying the id and extensions of `count`. Created when absent. */
  getCountElement(): Element {
    if (this._count === undefined) {
      this._count = new Element();
    }
    return this._count;
  }

  setCountElement(countElement: Element | undefined): this {
    this._count = countElement;
    return this;
  }
}

modelTypeRegistry.register('DeviceDefinitionHasPart', DeviceDefinitionHasPart, false);

/**
 * Information about the packaging of the device, i.e. how the device is packaged
 */
export class DeviceDefinitionPackaging extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'count',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'count', typeCode: 'integer' }],
    },
    {
      elementName: 'distributor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'distributor', typeCode: 'DeviceDefinitionPackagingDistributor' }],
    },
    {
      elementName: 'udiDeviceIdentifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'udiDeviceIdentifier', typeCode: 'DeviceDefinitionUdiDeviceIdentifier' }],
    },
    {
      elementName: 'packaging',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'packaging', typeCode: 'DeviceDefinitionPackaging' }],
    },
  ];

  /** Business identifier of the packaged medication (0..1) */
  identifier?: Identifier;

  /** A code that defines the specific type of packaging (0..1) */
  type?: CodeableConcept;

  /** The number of items contained in the package (devices or sub-packages) (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  /** An organization that distributes the packaged device (0..*) */
  distributor?: DeviceDefinitionPackagingDistributor[];

  /** Unique Device Identifier (UDI) Barcode string on the packaging (0..*) */
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  /** Allows packages within packages (0..*) */
  packaging?: DeviceDefinitionPackaging[];

  override fhirType(): string {
    return 'DeviceDefinition.packaging';
  }

  /** FHIR JSON for this DeviceDefinitionPackaging, typed as the plain `DeviceDefinitionPackaging` data type. */
  override toJSON(): plainTypes.DeviceDefinitionPackaging {
    return this.serialize() as plainTypes.DeviceDefinitionPackaging;
  }

  /** Business identifier of the packaged medication (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** A code that defines the specific type of packaging (0..1) Created when absent. */
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

  /** The number of items contained in the package (devices or sub-packages) (0..1) */
  getCount(): number | undefined {
    return this.count;
  }

  /** Sets `count`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setCount(count: number | undefined): this {
    return this.setFieldValue('count', count);
  }

  hasCount(): boolean {
    return this.hasFieldValue('count');
  }

  /** The element carrying the id and extensions of `count`. Created when absent. */
  getCountElement(): Element {
    if (this._count === undefined) {
      this._count = new Element();
    }
    return this._count;
  }

  setCountElement(countElement: Element | undefined): this {
    this._count = countElement;
    return this;
  }

  /** An organization that distributes the packaged device (0..*) Never undefined; an empty list is created when absent. */
  getDistributor(): DeviceDefinitionPackagingDistributor[] {
    if (this.distributor === undefined) {
      this.distributor = [];
    }
    return this.distributor;
  }

  setDistributor(distributor: DeviceDefinitionPackagingDistributor[] | undefined): this {
    return this.setFieldValue('distributor', distributor);
  }

  hasDistributor(): boolean {
    return this.hasFieldValue('distributor');
  }

  /** Appends a new, empty DeviceDefinitionPackagingDistributor to `distributor` and returns it so it can be filled in. */
  addDistributor(): DeviceDefinitionPackagingDistributor;
  /** Appends the given DeviceDefinitionPackagingDistributor to `distributor` and returns this object for chaining. */
  addDistributor(deviceDefinitionPackagingDistributor: DeviceDefinitionPackagingDistributor): this;
  addDistributor(
    deviceDefinitionPackagingDistributor?: DeviceDefinitionPackagingDistributor
  ): DeviceDefinitionPackagingDistributor | this {
    if (deviceDefinitionPackagingDistributor !== undefined) {
      return this.addFieldValue('distributor', deviceDefinitionPackagingDistributor);
    }
    const createdDeviceDefinitionPackagingDistributor = new DeviceDefinitionPackagingDistributor();
    this.addFieldValue('distributor', createdDeviceDefinitionPackagingDistributor);
    return createdDeviceDefinitionPackagingDistributor;
  }

  /** The first DeviceDefinitionPackagingDistributor of `distributor`. One is added when the list is empty. */
  getDistributorFirstRep(): DeviceDefinitionPackagingDistributor {
    const firstDeviceDefinitionPackagingDistributor = this.getDistributor()[0];
    return firstDeviceDefinitionPackagingDistributor === undefined
      ? this.addDistributor()
      : firstDeviceDefinitionPackagingDistributor;
  }

  /** Unique Device Identifier (UDI) Barcode string on the packaging (0..*) Never undefined; an empty list is created when absent. */
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

  /** Allows packages within packages (0..*) Never undefined; an empty list is created when absent. */
  getPackaging(): DeviceDefinitionPackaging[] {
    if (this.packaging === undefined) {
      this.packaging = [];
    }
    return this.packaging;
  }

  setPackaging(packaging: DeviceDefinitionPackaging[] | undefined): this {
    return this.setFieldValue('packaging', packaging);
  }

  hasPackaging(): boolean {
    return this.hasFieldValue('packaging');
  }

  /** Appends a new, empty DeviceDefinitionPackaging to `packaging` and returns it so it can be filled in. */
  addPackaging(): DeviceDefinitionPackaging;
  /** Appends the given DeviceDefinitionPackaging to `packaging` and returns this object for chaining. */
  addPackaging(deviceDefinitionPackaging: DeviceDefinitionPackaging): this;
  addPackaging(
    deviceDefinitionPackaging?: DeviceDefinitionPackaging
  ): DeviceDefinitionPackaging | this {
    if (deviceDefinitionPackaging !== undefined) {
      return this.addFieldValue('packaging', deviceDefinitionPackaging);
    }
    const createdDeviceDefinitionPackaging = new DeviceDefinitionPackaging();
    this.addFieldValue('packaging', createdDeviceDefinitionPackaging);
    return createdDeviceDefinitionPackaging;
  }

  /** The first DeviceDefinitionPackaging of `packaging`. One is added when the list is empty. */
  getPackagingFirstRep(): DeviceDefinitionPackaging {
    const firstDeviceDefinitionPackaging = this.getPackaging()[0];
    return firstDeviceDefinitionPackaging === undefined
      ? this.addPackaging()
      : firstDeviceDefinitionPackaging;
  }
}

modelTypeRegistry.register('DeviceDefinitionPackaging', DeviceDefinitionPackaging, false);

/**
 * An organization that distributes the packaged device
 */
export class DeviceDefinitionPackagingDistributor extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'organizationReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'organizationReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
  ];

  /** Distributor's human-readable name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Distributor as an Organization resource (0..*) */
  organizationReference?: Reference[];

  override fhirType(): string {
    return 'DeviceDefinition.packaging.distributor';
  }

  /** FHIR JSON for this DeviceDefinitionPackagingDistributor, typed as the plain `DeviceDefinitionDistributor` data type. */
  override toJSON(): plainTypes.DeviceDefinitionDistributor {
    return this.serialize() as plainTypes.DeviceDefinitionDistributor;
  }

  /** Distributor's human-readable name (0..1) */
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

  /** Distributor as an Organization resource (0..*) Never undefined; an empty list is created when absent. */
  getOrganizationReference(): Reference[] {
    if (this.organizationReference === undefined) {
      this.organizationReference = [];
    }
    return this.organizationReference;
  }

  setOrganizationReference(organizationReference: Reference[] | undefined): this {
    return this.setFieldValue('organizationReference', organizationReference);
  }

  hasOrganizationReference(): boolean {
    return this.hasFieldValue('organizationReference');
  }

  /** Appends a new, empty Reference to `organizationReference` and returns it so it can be filled in. */
  addOrganizationReference(): Reference;
  /** Appends the given Reference to `organizationReference` and returns this object for chaining. */
  addOrganizationReference(reference: Reference): this;
  addOrganizationReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('organizationReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('organizationReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `organizationReference`. One is added when the list is empty. */
  getOrganizationReferenceFirstRep(): Reference {
    const firstReference = this.getOrganizationReference()[0];
    return firstReference === undefined ? this.addOrganizationReference() : firstReference;
  }
}

modelTypeRegistry.register(
  'DeviceDefinitionPackagingDistributor',
  DeviceDefinitionPackagingDistributor,
  false
);

/**
 * The version of the device or software
 */
export class DeviceDefinitionVersion extends BackboneElement {
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

  /** The type of the device version, e.g. manufacturer, approved, internal (0..1) */
  type?: CodeableConcept;

  /** The hardware or software module of the device to which the version applies (0..1) */
  component?: Identifier;

  /** The version text (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'DeviceDefinition.version';
  }

  /** FHIR JSON for this DeviceDefinitionVersion, typed as the plain `DeviceDefinitionVersion` data type. */
  override toJSON(): plainTypes.DeviceDefinitionVersion {
    return this.serialize() as plainTypes.DeviceDefinitionVersion;
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

modelTypeRegistry.register('DeviceDefinitionVersion', DeviceDefinitionVersion, false);

/**
 * Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc
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
    return 'DeviceDefinition.property';
  }

  /** FHIR JSON for this DeviceDefinitionProperty, typed as the plain `DeviceDefinitionProperty` data type. */
  override toJSON(): plainTypes.DeviceDefinitionProperty {
    return this.serialize() as plainTypes.DeviceDefinitionProperty;
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

modelTypeRegistry.register('DeviceDefinitionProperty', DeviceDefinitionProperty, false);

/**
 * An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device
 */
export class DeviceDefinitionLink extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'relation',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relation', typeCode: 'Coding' }],
    },
    {
      elementName: 'relatedDevice',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relatedDevice', typeCode: 'CodeableReference' }],
    },
  ];

  /** The type indicates the relationship of the related device to the device instance (1..1) */
  relation?: Coding;

  /** A reference to the linked device (1..1) */
  relatedDevice?: CodeableReference;

  override fhirType(): string {
    return 'DeviceDefinition.link';
  }

  /** FHIR JSON for this DeviceDefinitionLink, typed as the plain `DeviceDefinitionLink` data type. */
  override toJSON(): plainTypes.DeviceDefinitionLink {
    return this.serialize() as plainTypes.DeviceDefinitionLink;
  }

  /** The type indicates the relationship of the related device to the device instance (1..1) Created when absent. */
  getRelation(): Coding {
    if (this.relation === undefined) {
      this.relation = new Coding();
    }
    return this.relation;
  }

  setRelation(relation: Coding | undefined): this {
    return this.setFieldValue('relation', relation);
  }

  hasRelation(): boolean {
    return this.hasFieldValue('relation');
  }

  /** A reference to the linked device (1..1) Created when absent. */
  getRelatedDevice(): CodeableReference {
    if (this.relatedDevice === undefined) {
      this.relatedDevice = new CodeableReference();
    }
    return this.relatedDevice;
  }

  setRelatedDevice(relatedDevice: CodeableReference | undefined): this {
    return this.setFieldValue('relatedDevice', relatedDevice);
  }

  hasRelatedDevice(): boolean {
    return this.hasFieldValue('relatedDevice');
  }
}

modelTypeRegistry.register('DeviceDefinitionLink', DeviceDefinitionLink, false);

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

  /** A relevant substance that the device contains, may contain, or is made of (1..1) */
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

  /** A relevant substance that the device contains, may contain, or is made of (1..1) Created when absent. */
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

/**
 * Information aimed at providing directions for the usage of this model of device
 */
export class DeviceDefinitionGuideline extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'useContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'useContext', typeCode: 'UsageContext' }],
    },
    {
      elementName: 'usageInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'usageInstruction', typeCode: 'markdown' }],
    },
    {
      elementName: 'relatedArtifact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'relatedArtifact', typeCode: 'RelatedArtifact' }],
    },
    {
      elementName: 'indication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'indication', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contraindication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contraindication', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'warning',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'warning', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'intendedUse',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intendedUse', typeCode: 'string' }],
    },
  ];

  /** The circumstances that form the setting for using the device (0..*) */
  useContext?: UsageContext[];

  /** Detailed written and visual directions for the user on how to use the device (0..1) */
  usageInstruction?: string;
  /** Id and extensions of the primitive `usageInstruction`. */
  _usageInstruction?: Element;

  /** A source of information or reference for this guideline (0..*) */
  relatedArtifact?: RelatedArtifact[];

  /** A clinical condition for which the device was designed to be used (0..*) */
  indication?: CodeableConcept[];

  /** A specific situation when a device should not be used because it may cause harm (0..*) */
  contraindication?: CodeableConcept[];

  /** Specific hazard alert information that a user needs to know before using the device (0..*) */
  warning?: CodeableConcept[];

  /** A description of the general purpose or medical use of the device or its function (0..1) */
  intendedUse?: string;
  /** Id and extensions of the primitive `intendedUse`. */
  _intendedUse?: Element;

  override fhirType(): string {
    return 'DeviceDefinition.guideline';
  }

  /** FHIR JSON for this DeviceDefinitionGuideline, typed as the plain `DeviceDefinitionGuideline` data type. */
  override toJSON(): plainTypes.DeviceDefinitionGuideline {
    return this.serialize() as plainTypes.DeviceDefinitionGuideline;
  }

  /** The circumstances that form the setting for using the device (0..*) Never undefined; an empty list is created when absent. */
  getUseContext(): UsageContext[] {
    if (this.useContext === undefined) {
      this.useContext = [];
    }
    return this.useContext;
  }

  setUseContext(useContext: UsageContext[] | undefined): this {
    return this.setFieldValue('useContext', useContext);
  }

  hasUseContext(): boolean {
    return this.hasFieldValue('useContext');
  }

  /** Appends a new, empty UsageContext to `useContext` and returns it so it can be filled in. */
  addUseContext(): UsageContext;
  /** Appends the given UsageContext to `useContext` and returns this object for chaining. */
  addUseContext(usageContext: UsageContext): this;
  addUseContext(usageContext?: UsageContext): UsageContext | this {
    if (usageContext !== undefined) {
      return this.addFieldValue('useContext', usageContext);
    }
    const createdUsageContext = new UsageContext();
    this.addFieldValue('useContext', createdUsageContext);
    return createdUsageContext;
  }

  /** The first UsageContext of `useContext`. One is added when the list is empty. */
  getUseContextFirstRep(): UsageContext {
    const firstUsageContext = this.getUseContext()[0];
    return firstUsageContext === undefined ? this.addUseContext() : firstUsageContext;
  }

  /** Detailed written and visual directions for the user on how to use the device (0..1) */
  getUsageInstruction(): string | undefined {
    return this.usageInstruction;
  }

  /** Sets `usageInstruction`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setUsageInstruction(usageInstruction: string | undefined): this {
    return this.setFieldValue('usageInstruction', usageInstruction);
  }

  hasUsageInstruction(): boolean {
    return this.hasFieldValue('usageInstruction');
  }

  /** The element carrying the id and extensions of `usageInstruction`. Created when absent. */
  getUsageInstructionElement(): Element {
    if (this._usageInstruction === undefined) {
      this._usageInstruction = new Element();
    }
    return this._usageInstruction;
  }

  setUsageInstructionElement(usageInstructionElement: Element | undefined): this {
    this._usageInstruction = usageInstructionElement;
    return this;
  }

  /** A source of information or reference for this guideline (0..*) Never undefined; an empty list is created when absent. */
  getRelatedArtifact(): RelatedArtifact[] {
    if (this.relatedArtifact === undefined) {
      this.relatedArtifact = [];
    }
    return this.relatedArtifact;
  }

  setRelatedArtifact(relatedArtifact: RelatedArtifact[] | undefined): this {
    return this.setFieldValue('relatedArtifact', relatedArtifact);
  }

  hasRelatedArtifact(): boolean {
    return this.hasFieldValue('relatedArtifact');
  }

  /** Appends a new, empty RelatedArtifact to `relatedArtifact` and returns it so it can be filled in. */
  addRelatedArtifact(): RelatedArtifact;
  /** Appends the given RelatedArtifact to `relatedArtifact` and returns this object for chaining. */
  addRelatedArtifact(relatedArtifact: RelatedArtifact): this;
  addRelatedArtifact(relatedArtifact?: RelatedArtifact): RelatedArtifact | this {
    if (relatedArtifact !== undefined) {
      return this.addFieldValue('relatedArtifact', relatedArtifact);
    }
    const createdRelatedArtifact = new RelatedArtifact();
    this.addFieldValue('relatedArtifact', createdRelatedArtifact);
    return createdRelatedArtifact;
  }

  /** The first RelatedArtifact of `relatedArtifact`. One is added when the list is empty. */
  getRelatedArtifactFirstRep(): RelatedArtifact {
    const firstRelatedArtifact = this.getRelatedArtifact()[0];
    return firstRelatedArtifact === undefined ? this.addRelatedArtifact() : firstRelatedArtifact;
  }

  /** A clinical condition for which the device was designed to be used (0..*) Never undefined; an empty list is created when absent. */
  getIndication(): CodeableConcept[] {
    if (this.indication === undefined) {
      this.indication = [];
    }
    return this.indication;
  }

  setIndication(indication: CodeableConcept[] | undefined): this {
    return this.setFieldValue('indication', indication);
  }

  hasIndication(): boolean {
    return this.hasFieldValue('indication');
  }

  /** Appends a new, empty CodeableConcept to `indication` and returns it so it can be filled in. */
  addIndication(): CodeableConcept;
  /** Appends the given CodeableConcept to `indication` and returns this object for chaining. */
  addIndication(codeableConcept: CodeableConcept): this;
  addIndication(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('indication', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('indication', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `indication`. One is added when the list is empty. */
  getIndicationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getIndication()[0];
    return firstCodeableConcept === undefined ? this.addIndication() : firstCodeableConcept;
  }

  /** A specific situation when a device should not be used because it may cause harm (0..*) Never undefined; an empty list is created when absent. */
  getContraindication(): CodeableConcept[] {
    if (this.contraindication === undefined) {
      this.contraindication = [];
    }
    return this.contraindication;
  }

  setContraindication(contraindication: CodeableConcept[] | undefined): this {
    return this.setFieldValue('contraindication', contraindication);
  }

  hasContraindication(): boolean {
    return this.hasFieldValue('contraindication');
  }

  /** Appends a new, empty CodeableConcept to `contraindication` and returns it so it can be filled in. */
  addContraindication(): CodeableConcept;
  /** Appends the given CodeableConcept to `contraindication` and returns this object for chaining. */
  addContraindication(codeableConcept: CodeableConcept): this;
  addContraindication(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('contraindication', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('contraindication', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `contraindication`. One is added when the list is empty. */
  getContraindicationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getContraindication()[0];
    return firstCodeableConcept === undefined ? this.addContraindication() : firstCodeableConcept;
  }

  /** Specific hazard alert information that a user needs to know before using the device (0..*) Never undefined; an empty list is created when absent. */
  getWarning(): CodeableConcept[] {
    if (this.warning === undefined) {
      this.warning = [];
    }
    return this.warning;
  }

  setWarning(warning: CodeableConcept[] | undefined): this {
    return this.setFieldValue('warning', warning);
  }

  hasWarning(): boolean {
    return this.hasFieldValue('warning');
  }

  /** Appends a new, empty CodeableConcept to `warning` and returns it so it can be filled in. */
  addWarning(): CodeableConcept;
  /** Appends the given CodeableConcept to `warning` and returns this object for chaining. */
  addWarning(codeableConcept: CodeableConcept): this;
  addWarning(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('warning', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('warning', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `warning`. One is added when the list is empty. */
  getWarningFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getWarning()[0];
    return firstCodeableConcept === undefined ? this.addWarning() : firstCodeableConcept;
  }

  /** A description of the general purpose or medical use of the device or its function (0..1) */
  getIntendedUse(): string | undefined {
    return this.intendedUse;
  }

  /** Sets `intendedUse`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setIntendedUse(intendedUse: string | undefined): this {
    return this.setFieldValue('intendedUse', intendedUse);
  }

  hasIntendedUse(): boolean {
    return this.hasFieldValue('intendedUse');
  }

  /** The element carrying the id and extensions of `intendedUse`. Created when absent. */
  getIntendedUseElement(): Element {
    if (this._intendedUse === undefined) {
      this._intendedUse = new Element();
    }
    return this._intendedUse;
  }

  setIntendedUseElement(intendedUseElement: Element | undefined): this {
    this._intendedUse = intendedUseElement;
    return this;
  }
}

modelTypeRegistry.register('DeviceDefinitionGuideline', DeviceDefinitionGuideline, false);

/**
 * Tracking of latest field safety corrective action
 */
export class DeviceDefinitionCorrectiveAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'recall',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recall', typeCode: 'boolean' }],
    },
    {
      elementName: 'scope',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'scope',
          typeCode: 'code',
          allowedCodes: valueSetCodes.DeviceCorrectiveActionScope,
        },
      ],
    },
    {
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Whether the corrective action was a recall (1..1) */
  recall?: boolean;
  /** Id and extensions of the primitive `recall`. */
  _recall?: Element;

  /** model | lot-numbers | serial-numbers (0..1) */
  scope?: valueSetCodes.DeviceCorrectiveActionScope;
  /** Id and extensions of the primitive `scope`. */
  _scope?: Element;

  /** Start and end dates of the corrective action (1..1) */
  period?: Period;

  override fhirType(): string {
    return 'DeviceDefinition.correctiveAction';
  }

  /** FHIR JSON for this DeviceDefinitionCorrectiveAction, typed as the plain `DeviceDefinitionCorrectiveAction` data type. */
  override toJSON(): plainTypes.DeviceDefinitionCorrectiveAction {
    return this.serialize() as plainTypes.DeviceDefinitionCorrectiveAction;
  }

  /** Whether the corrective action was a recall (1..1) */
  getRecall(): boolean | undefined {
    return this.recall;
  }

  /** Sets `recall`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setRecall(recall: boolean | undefined): this {
    return this.setFieldValue('recall', recall);
  }

  hasRecall(): boolean {
    return this.hasFieldValue('recall');
  }

  /** The element carrying the id and extensions of `recall`. Created when absent. */
  getRecallElement(): Element {
    if (this._recall === undefined) {
      this._recall = new Element();
    }
    return this._recall;
  }

  setRecallElement(recallElement: Element | undefined): this {
    this._recall = recallElement;
    return this;
  }

  /** model | lot-numbers | serial-numbers (0..1) */
  getScope(): valueSetCodes.DeviceCorrectiveActionScope | undefined {
    return this.scope;
  }

  /** Sets `scope`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setScope(scope: valueSetCodes.DeviceCorrectiveActionScope | undefined): this {
    return this.setFieldValue('scope', scope);
  }

  hasScope(): boolean {
    return this.hasFieldValue('scope');
  }

  /** The element carrying the id and extensions of `scope`. Created when absent. */
  getScopeElement(): Element {
    if (this._scope === undefined) {
      this._scope = new Element();
    }
    return this._scope;
  }

  setScopeElement(scopeElement: Element | undefined): this {
    this._scope = scopeElement;
    return this;
  }

  /** Start and end dates of the corrective action (1..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register(
  'DeviceDefinitionCorrectiveAction',
  DeviceDefinitionCorrectiveAction,
  false
);

/**
 * Billing code or reference associated with the device
 */
export class DeviceDefinitionChargeItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'chargeItemCode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'chargeItemCode', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'count',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'count', typeCode: 'Quantity' }],
    },
    {
      elementName: 'effectivePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectivePeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'useContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'useContext', typeCode: 'UsageContext' }],
    },
  ];

  /** The code or reference for the charge item (1..1) */
  chargeItemCode?: CodeableReference;

  /** Coefficient applicable to the billing code (1..1) */
  count?: Quantity;

  /** A specific time period in which this charge item applies (0..1) */
  effectivePeriod?: Period;

  /** The context to which this charge item applies (0..*) */
  useContext?: UsageContext[];

  override fhirType(): string {
    return 'DeviceDefinition.chargeItem';
  }

  /** FHIR JSON for this DeviceDefinitionChargeItem, typed as the plain `DeviceDefinitionChargeItem` data type. */
  override toJSON(): plainTypes.DeviceDefinitionChargeItem {
    return this.serialize() as plainTypes.DeviceDefinitionChargeItem;
  }

  /** The code or reference for the charge item (1..1) Created when absent. */
  getChargeItemCode(): CodeableReference {
    if (this.chargeItemCode === undefined) {
      this.chargeItemCode = new CodeableReference();
    }
    return this.chargeItemCode;
  }

  setChargeItemCode(chargeItemCode: CodeableReference | undefined): this {
    return this.setFieldValue('chargeItemCode', chargeItemCode);
  }

  hasChargeItemCode(): boolean {
    return this.hasFieldValue('chargeItemCode');
  }

  /** Coefficient applicable to the billing code (1..1) Created when absent. */
  getCount(): Quantity {
    if (this.count === undefined) {
      this.count = new Quantity();
    }
    return this.count;
  }

  setCount(count: Quantity | undefined): this {
    return this.setFieldValue('count', count);
  }

  hasCount(): boolean {
    return this.hasFieldValue('count');
  }

  /** A specific time period in which this charge item applies (0..1) Created when absent. */
  getEffectivePeriod(): Period {
    if (this.effectivePeriod === undefined) {
      this.effectivePeriod = new Period();
    }
    return this.effectivePeriod;
  }

  setEffectivePeriod(effectivePeriod: Period | undefined): this {
    return this.setFieldValue('effectivePeriod', effectivePeriod);
  }

  hasEffectivePeriod(): boolean {
    return this.hasFieldValue('effectivePeriod');
  }

  /** The context to which this charge item applies (0..*) Never undefined; an empty list is created when absent. */
  getUseContext(): UsageContext[] {
    if (this.useContext === undefined) {
      this.useContext = [];
    }
    return this.useContext;
  }

  setUseContext(useContext: UsageContext[] | undefined): this {
    return this.setFieldValue('useContext', useContext);
  }

  hasUseContext(): boolean {
    return this.hasFieldValue('useContext');
  }

  /** Appends a new, empty UsageContext to `useContext` and returns it so it can be filled in. */
  addUseContext(): UsageContext;
  /** Appends the given UsageContext to `useContext` and returns this object for chaining. */
  addUseContext(usageContext: UsageContext): this;
  addUseContext(usageContext?: UsageContext): UsageContext | this {
    if (usageContext !== undefined) {
      return this.addFieldValue('useContext', usageContext);
    }
    const createdUsageContext = new UsageContext();
    this.addFieldValue('useContext', createdUsageContext);
    return createdUsageContext;
  }

  /** The first UsageContext of `useContext`. One is added when the list is empty. */
  getUseContextFirstRep(): UsageContext {
    const firstUsageContext = this.getUseContext()[0];
    return firstUsageContext === undefined ? this.addUseContext() : firstUsageContext;
  }
}

modelTypeRegistry.register('DeviceDefinitionChargeItem', DeviceDefinitionChargeItem, false);
