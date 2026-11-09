/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Device Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Instance identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Unique Device Identifier (UDI) Barcode string (0..1) */
  udi?: DeviceUdi;
  /** active | inactive | entered-in-error | unknown (0..1) */
  status?: Device.StatusEnum;
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
  contact?: Array<ContactPoint>;
  /** Where the resource is found (0..1) */
  location?: Reference;
  /** Network address to contact device (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Device notes and comments (0..*) */
  note?: Array<Annotation>;
  /** Safety Characteristics of Device (0..*) */
  safety?: Array<CodeableConcept>;
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
export class DeviceUdi {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
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
  entryType?: DeviceUdi.EntryTypeEnum;
  /** Id and extensions of the primitive `entryType`. */
  _entryType?: Element;
}

export namespace DeviceUdi {
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
