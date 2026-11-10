/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { ContactPoint } from './contactPoint';
import type { Count } from './count';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * This resource describes the properties (regulated, has real time clock, etc.), adminstrative (manufacturer name, model number, serial number, firmware, etc.), and type (knee replacement, blood pressure cuff, MRI, etc.) of a physical unit (these values do not change much within a given module, for example the serail number, manufacturer name, and model number). An actual unit may consist of several modules in a distinct hierarchy and these are represented by multiple Device resources and bound through the 'parent' element.
 */
export interface Device {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Instance identifier (0..*) */
  identifier?: Array<Identifier>;
  /** The name used to display by default when the device is referenced (0..1) */
  displayName?: string;
  /** Id and extensions of the primitive `displayName`. */
  _displayName?: Element;
  /** The reference to the definition for the device (0..1) */
  definition?: CodeableReference;
  /** Unique Device Identifier (UDI) Barcode string (0..*) */
  udiCarrier?: Array<DeviceUdiCarrier>;
  /** active | inactive | entered-in-error (0..1) */
  status?: Device.StatusEnum;
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
  name?: Array<DeviceName>;
  /** The manufacturer's model number for the device (0..1) */
  modelNumber?: string;
  /** Id and extensions of the primitive `modelNumber`. */
  _modelNumber?: Element;
  /** The part number or catalog number of the device (0..1) */
  partNumber?: string;
  /** Id and extensions of the primitive `partNumber`. */
  _partNumber?: Element;
  /** Indicates a high-level grouping of the device (0..*) */
  category?: Array<CodeableConcept>;
  /** The kind or type of device (0..*) */
  type?: Array<CodeableConcept>;
  /** The actual design of the device or software version running on the device (0..*) */
  version?: Array<DeviceVersion>;
  /** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device (0..*) */
  conformsTo?: Array<DeviceConformsTo>;
  /** Inherent, essentially fixed, characteristics of the device. e.g., time properties, size, material, etc. (0..*) */
  property?: Array<DeviceProperty>;
  /** The designated condition for performing a task (0..1) */
  mode?: CodeableConcept;
  /** The series of occurrences that repeats during the operation of the device (0..1) */
  cycle?: Count;
  /** A measurement of time during the device's operation (e.g., days, hours, mins, etc.) (0..1) */
  duration?: Duration;
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
  /** Technical endpoints providing access to electronic services provided by the device (0..*) */
  endpoint?: Array<Reference>;
  /** Linked device acting as a communication/data collector, translator or controller (0..*) */
  gateway?: Array<CodeableReference>;
  /** Device notes and comments (0..*) */
  note?: Array<Annotation>;
  /** Safety Characteristics of Device (0..*) */
  safety?: Array<CodeableConcept>;
  /** The higher level or encompassing device that this device is a logical part of (0..1) */
  parent?: Reference;
}

export namespace Device {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/device-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export interface DeviceUdiCarrier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
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
  entryType?: DeviceUdiCarrier.EntryTypeEnum;
  /** Id and extensions of the primitive `entryType`. */
  _entryType?: Element;
}

export namespace DeviceUdiCarrier {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/udi-entry-type */
  export type EntryTypeEnum =
    | 'barcode'
    | 'rfid'
    | 'manual'
    | 'card'
    | 'self-reported'
    | 'electronic-transmission'
    | 'unknown';
  export const EntryTypeEnum = {
    Barcode: 'barcode' as EntryTypeEnum,
    Rfid: 'rfid' as EntryTypeEnum,
    Manual: 'manual' as EntryTypeEnum,
    Card: 'card' as EntryTypeEnum,
    SelfReported: 'self-reported' as EntryTypeEnum,
    ElectronicTransmission: 'electronic-transmission' as EntryTypeEnum,
    Unknown: 'unknown' as EntryTypeEnum,
  };
}

/**
 * The name or names of the device as known to the manufacturer and/or patient
 */
export interface DeviceName {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The term that names the device (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** registered-name | user-friendly-name | patient-reported-name (1..1) */
  type?: DeviceName.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** The preferred device name (0..1) */
  display?: boolean;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
}

export namespace DeviceName {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/device-nametype */
  export type TypeEnum = 'registered-name' | 'user-friendly-name' | 'patient-reported-name';
  export const TypeEnum = {
    RegisteredName: 'registered-name' as TypeEnum,
    UserFriendlyName: 'user-friendly-name' as TypeEnum,
    PatientReportedName: 'patient-reported-name' as TypeEnum,
  };
}

/**
 * The actual design of the device or software version running on the device
 */
export interface DeviceVersion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
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
}

/**
 * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 */
export interface DeviceConformsTo {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Describes the common type of the standard, specification, or formal guidance. communication | performance | measurement (0..1) */
  category?: CodeableConcept;
  /** Identifies the standard, specification, or formal guidance that the device adheres to (1..1) */
  specification: CodeableConcept;
  /** Specific form or variant of the standard (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
}

/**
 * Inherent, essentially fixed, characteristics of the device. e.g., time properties, size, material, etc.
 */
export interface DeviceProperty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code that specifies the property being represented (1..1) */
  type: CodeableConcept;
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
}
