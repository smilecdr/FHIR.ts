/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export class Device {
  resourceType: 'Device';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;
  /** Contained, inline Resources (0..*) */
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Instance identifier (0..*) */
  identifier?: Array<Identifier>;
  /** The reference to the definition for the device (0..1) */
  definition?: Reference;
  /** Unique Device Identifier (UDI) Barcode string (0..*) */
  udiCarrier?: Array<DeviceUdiCarrier>;
  /** active | inactive | entered-in-error | unknown (0..1) */
  status?: Device.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off (0..*) */
  statusReason?: Array<CodeableConcept>;
  /** The distinct identification string (0..1) */
  distinctIdentifier?: string;
  /** Id and extensions of the primitive `distinctIdentifier`. */
  _distinctIdentifier?: Element;
  /** Name of device manufacturer (0..1) */
  manufacturer?: string;
  /** Id and extensions of the primitive `manufacturer`. */
  _manufacturer?: Element;
  /** Date when the device was made (0..1) */
  manufactureDate?: Date | string;
  /** Id and extensions of the primitive `manufactureDate`. */
  _manufactureDate?: Element;
  /** Date and time of expiry of this device (if applicable) (0..1) */
  expirationDate?: Date | string;
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
  deviceName?: Array<DeviceDeviceName>;
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
  specialization?: Array<DeviceSpecialization>;
  /** The actual design of the device or software version running on the device (0..*) */
  version?: Array<DeviceVersion>;
  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties (0..*) */
  property?: Array<DeviceProperty>;
  /** Patient to whom Device is affixed (0..1) */
  patient?: Reference;
  /** Organization responsible for device (0..1) */
  owner?: Reference;
  /** Details for human/organization for support (0..*) */
  contact?: Array<ContactPoint>;
  /** Where the device is found (0..1) */
  location?: Reference;
  /** Network address to contact device (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Device notes and comments (0..*) */
  note?: Array<Annotation>;
  /** Safety Characteristics of Device (0..*) */
  safety?: Array<CodeableConcept>;
  /** The parent device (0..1) */
  parent?: Reference;
}

export namespace Device {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/device-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export class DeviceUdiCarrier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
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
  entryType?: DeviceUdiCarrier.EntryTypeEnum;
  /** Id and extensions of the primitive `entryType`. */
  _entryType?: Element;
}

export namespace DeviceUdiCarrier {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/udi-entry-type */
  export type EntryTypeEnum = 'barcode' | 'rfid' | 'manual' | 'card' | 'self-reported' | 'unknown';
  export const EntryTypeEnum = {
    Barcode: 'barcode' as EntryTypeEnum,
    Rfid: 'rfid' as EntryTypeEnum,
    Manual: 'manual' as EntryTypeEnum,
    Card: 'card' as EntryTypeEnum,
    SelfReported: 'self-reported' as EntryTypeEnum,
    Unknown: 'unknown' as EntryTypeEnum,
  };
}

/**
 * The name of the device as given by the manufacturer
 */
export class DeviceDeviceName {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The name of the device (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other (1..1) */
  type?: DeviceDeviceName.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
}

export namespace DeviceDeviceName {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/device-nametype */
  export type TypeEnum =
    | 'udi-label-name'
    | 'user-friendly-name'
    | 'patient-reported-name'
    | 'manufacturer-name'
    | 'model-name'
    | 'other';
  export const TypeEnum = {
    UdiLabelName: 'udi-label-name' as TypeEnum,
    UserFriendlyName: 'user-friendly-name' as TypeEnum,
    PatientReportedName: 'patient-reported-name' as TypeEnum,
    ManufacturerName: 'manufacturer-name' as TypeEnum,
    ModelName: 'model-name' as TypeEnum,
    Other: 'other' as TypeEnum,
  };
}

/**
 * The capabilities supported on a device, the standards to which the device conforms for a particular purpose, and used for the communication
 */
export class DeviceSpecialization {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The standard that is used to operate and communicate (1..1) */
  systemType: CodeableConcept;
  /** The version of the standard that is used to operate and communicate (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
}

/**
 * The actual design of the device or software version running on the device
 */
export class DeviceVersion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of the device version (0..1) */
  type?: CodeableConcept;
  /** A single component of the device version (0..1) */
  component?: Identifier;
  /** The version text (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 */
export class DeviceProperty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible) (1..1) */
  type: CodeableConcept;
  /** Property value as a quantity (0..*) */
  valueQuantity?: Array<Quantity>;
  /** Property value as a code, e.g., NTP4 (synced to NTP) (0..*) */
  valueCode?: Array<CodeableConcept>;
}
