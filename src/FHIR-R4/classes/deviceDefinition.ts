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
import type { ProdCharacteristic } from './prodCharacteristic';
import type { ProductShelfLife } from './productShelfLife';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export class DeviceDefinition {
  resourceType: 'DeviceDefinition';
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
  /** Unique Device Identifier (UDI) Barcode string (0..*) */
  udiDeviceIdentifier?: Array<DeviceDefinitionUdiDeviceIdentifier>;
  /** Name of device manufacturer (0..1) */
  manufacturerString?: string;
  /** Id and extensions of the primitive `manufacturerString`. */
  _manufacturerString?: Element;
  /** Name of device manufacturer (0..1) */
  manufacturerReference?: Reference;
  /** A name given to the device to identify it (0..*) */
  deviceName?: Array<DeviceDefinitionDeviceName>;
  /** The model number for the device (0..1) */
  modelNumber?: string;
  /** Id and extensions of the primitive `modelNumber`. */
  _modelNumber?: Element;
  /** What kind of device or device system this is (0..1) */
  type?: CodeableConcept;
  /** The capabilities supported on a device, the standards to which the device conforms for a particular purpose, and used for the communication (0..*) */
  specialization?: Array<DeviceDefinitionSpecialization>;
  /** Available versions (0..*) */
  version?: Array<string>;
  /** Id and extensions of the primitive `version`. */
  _version?: Array<Element | null>;
  /** Safety characteristics of the device (0..*) */
  safety?: Array<CodeableConcept>;
  /** Shelf Life and storage information (0..*) */
  shelfLifeStorage?: Array<ProductShelfLife>;
  /** Dimensions, color etc. (0..1) */
  physicalCharacteristics?: ProdCharacteristic;
  /** Language code for the human-readable text strings produced by the device (all supported) (0..*) */
  languageCode?: Array<CodeableConcept>;
  /** Device capabilities (0..*) */
  capability?: Array<DeviceDefinitionCapability>;
  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties (0..*) */
  property?: Array<DeviceDefinitionProperty>;
  /** Organization responsible for device (0..1) */
  owner?: Reference;
  /** Details for human/organization for support (0..*) */
  contact?: Array<ContactPoint>;
  /** Network address to contact device (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Access to on-line information (0..1) */
  onlineInformation?: string;
  /** Id and extensions of the primitive `onlineInformation`. */
  _onlineInformation?: Element;
  /** Device notes and comments (0..*) */
  note?: Array<Annotation>;
  /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) (0..1) */
  quantity?: Quantity;
  /** The parent device it can be part of (0..1) */
  parentDevice?: Reference;
  /** A substance used to create the material(s) of which the device is made (0..*) */
  material?: Array<DeviceDefinitionMaterial>;
}

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export class DeviceDefinitionUdiDeviceIdentifier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
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
}

/**
 * A name given to the device to identify it
 */
export class DeviceDefinitionDeviceName {
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
  type?: DeviceDefinitionDeviceName.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
}

export namespace DeviceDefinitionDeviceName {
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
export class DeviceDefinitionSpecialization {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The standard that is used to operate and communicate (1..1) */
  systemType?: string;
  /** Id and extensions of the primitive `systemType`. */
  _systemType?: Element;
  /** The version of the standard that is used to operate and communicate (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
}

/**
 * Device capabilities
 */
export class DeviceDefinitionCapability {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of capability (1..1) */
  type: CodeableConcept;
  /** Description of capability (0..*) */
  description?: Array<CodeableConcept>;
}

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 */
export class DeviceDefinitionProperty {
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

/**
 * A substance used to create the material(s) of which the device is made
 */
export class DeviceDefinitionMaterial {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The substance (1..1) */
  substance: CodeableConcept;
  /** Indicates an alternative material of the device (0..1) */
  alternate?: boolean;
  /** Id and extensions of the primitive `alternate`. */
  _alternate?: Element;
  /** Whether the substance is a known or suspected allergen (0..1) */
  allergenicIndicator?: boolean;
  /** Id and extensions of the primitive `allergenicIndicator`. */
  _allergenicIndicator?: Element;
}
