/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Coding } from './coding';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { ProductShelfLife } from './productShelfLife';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * This is a specialized resource that defines the characteristics and capabilities of a device.
 */
export interface DeviceDefinition {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Additional information to describe the device (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Instance identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Unique Device Identifier (UDI) Barcode string (0..*) */
  udiDeviceIdentifier?: Array<DeviceDefinitionUdiDeviceIdentifier>;
  /** Regulatory identifier(s) associated with this device (0..*) */
  regulatoryIdentifier?: Array<DeviceDefinitionRegulatoryIdentifier>;
  /** The part number or catalog number of the device (0..1) */
  partNumber?: string;
  /** Id and extensions of the primitive `partNumber`. */
  _partNumber?: Element;
  /** Name of device manufacturer (0..1) */
  manufacturer?: Reference;
  /** The name or names of the device as given by the manufacturer (0..*) */
  deviceName?: Array<DeviceDefinitionDeviceName>;
  /** The catalog or model number for the device for example as defined by the manufacturer (0..1) */
  modelNumber?: string;
  /** Id and extensions of the primitive `modelNumber`. */
  _modelNumber?: Element;
  /** What kind of device or device system this is (0..*) */
  classification?: Array<DeviceDefinitionClassification>;
  /** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device (0..*) */
  conformsTo?: Array<DeviceDefinitionConformsTo>;
  /** A device, part of the current one (0..*) */
  hasPart?: Array<DeviceDefinitionHasPart>;
  /** Information about the packaging of the device, i.e. how the device is packaged (0..*) */
  packaging?: Array<DeviceDefinitionPackaging>;
  /** The version of the device or software (0..*) */
  version?: Array<DeviceDefinitionVersion>;
  /** Safety characteristics of the device (0..*) */
  safety?: Array<CodeableConcept>;
  /** Shelf Life and storage information (0..*) */
  shelfLifeStorage?: Array<ProductShelfLife>;
  /** Language code for the human-readable text strings produced by the device (all supported) (0..*) */
  languageCode?: Array<CodeableConcept>;
  /** Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc (0..*) */
  property?: Array<DeviceDefinitionProperty>;
  /** Organization responsible for device (0..1) */
  owner?: Reference;
  /** Details for human/organization for support (0..*) */
  contact?: Array<ContactPoint>;
  /** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device (0..*) */
  link?: Array<DeviceDefinitionLink>;
  /** Device notes and comments (0..*) */
  note?: Array<Annotation>;
  /** A substance used to create the material(s) of which the device is made (0..*) */
  material?: Array<DeviceDefinitionMaterial>;
  /** lot-number | manufactured-date | serial-number | expiration-date | biological-source | software-version (0..*) */
  productionIdentifierInUDI?: Array<DeviceDefinition.ProductionIdentifierInUDIEnum>;
  /** Id and extensions of the primitive `productionIdentifierInUDI`. */
  _productionIdentifierInUDI?: Array<Element | null>;
  /** Information aimed at providing directions for the usage of this model of device (0..1) */
  guideline?: DeviceDefinitionGuideline;
  /** Tracking of latest field safety corrective action (0..1) */
  correctiveAction?: DeviceDefinitionCorrectiveAction;
  /** Billing code or reference associated with the device (0..*) */
  chargeItem?: Array<DeviceDefinitionChargeItem>;
}

export namespace DeviceDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/device-productidentifierinudi */
  export type ProductionIdentifierInUDIEnum =
    | 'lot-number'
    | 'manufactured-date'
    | 'serial-number'
    | 'expiration-date'
    | 'biological-source'
    | 'software-version';
  export const ProductionIdentifierInUDIEnum = {
    LotNumber: 'lot-number' as ProductionIdentifierInUDIEnum,
    ManufacturedDate: 'manufactured-date' as ProductionIdentifierInUDIEnum,
    SerialNumber: 'serial-number' as ProductionIdentifierInUDIEnum,
    ExpirationDate: 'expiration-date' as ProductionIdentifierInUDIEnum,
    BiologicalSource: 'biological-source' as ProductionIdentifierInUDIEnum,
    SoftwareVersion: 'software-version' as ProductionIdentifierInUDIEnum,
  };
}

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export interface DeviceDefinitionUdiDeviceIdentifier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
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
  marketDistribution?: Array<DeviceDefinitionMarketDistribution>;
}

/**
 * Indicates whether and when the device is available on the market
 */
export interface DeviceDefinitionMarketDistribution {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Begin and end dates for the commercial distribution of the device (1..1) */
  marketPeriod: Period;
  /** National state or territory where the device is commercialized (1..1) */
  subJurisdiction?: string;
  /** Id and extensions of the primitive `subJurisdiction`. */
  _subJurisdiction?: Element;
}

/**
 * Regulatory identifier(s) associated with this device
 */
export interface DeviceDefinitionRegulatoryIdentifier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** basic | master | license (1..1) */
  type?: DeviceDefinitionRegulatoryIdentifier.TypeEnum;
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
}

export namespace DeviceDefinitionRegulatoryIdentifier {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/devicedefinition-regulatory-identifier-type */
  export type TypeEnum = 'basic' | 'master' | 'license';
  export const TypeEnum = {
    Basic: 'basic' as TypeEnum,
    Master: 'master' as TypeEnum,
    License: 'license' as TypeEnum,
  };
}

/**
 * The name or names of the device as given by the manufacturer
 */
export interface DeviceDefinitionDeviceName {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A name that is used to refer to the device (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** registered-name | user-friendly-name | patient-reported-name (1..1) */
  type?: DeviceDefinitionDeviceName.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
}

export namespace DeviceDefinitionDeviceName {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/device-nametype */
  export type TypeEnum = 'registered-name' | 'user-friendly-name' | 'patient-reported-name';
  export const TypeEnum = {
    RegisteredName: 'registered-name' as TypeEnum,
    UserFriendlyName: 'user-friendly-name' as TypeEnum,
    PatientReportedName: 'patient-reported-name' as TypeEnum,
  };
}

/**
 * What kind of device or device system this is
 */
export interface DeviceDefinitionClassification {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A classification or risk class of the device model (1..1) */
  type: CodeableConcept;
  /** Further information qualifying this classification of the device model (0..*) */
  justification?: Array<RelatedArtifact>;
}

/**
 * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 */
export interface DeviceDefinitionConformsTo {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Describes the common type of the standard, specification, or formal guidance (0..1) */
  category?: CodeableConcept;
  /** Identifies the standard, specification, or formal guidance that the device adheres to the Device Specification type (1..1) */
  specification: CodeableConcept;
  /** The specific form or variant of the standard, specification or formal guidance (0..*) */
  version?: Array<string>;
  /** Id and extensions of the primitive `version`. */
  _version?: Array<Element | null>;
  /** Standard, regulation, certification, or guidance website, document, or other publication, or similar, supporting the conformance (0..*) */
  source?: Array<RelatedArtifact>;
}

/**
 * A device, part of the current one
 */
export interface DeviceDefinitionHasPart {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to the part (1..1) */
  reference: Reference;
  /** Number of occurrences of the part (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;
}

/**
 * Information about the packaging of the device, i.e. how the device is packaged
 */
export interface DeviceDefinitionPackaging {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier of the packaged medication (0..1) */
  identifier?: Identifier;
  /** A code that defines the specific type of packaging (0..1) */
  type?: CodeableConcept;
  /** The number of items contained in the package (devices or sub-packages) (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;
  /** An organization that distributes the packaged device (0..*) */
  distributor?: Array<DeviceDefinitionDistributor>;
  /** Unique Device Identifier (UDI) Barcode string on the packaging (0..*) */
  udiDeviceIdentifier?: Array<DeviceDefinitionUdiDeviceIdentifier>;
  /** Allows packages within packages (0..*) */
  packaging?: Array<DeviceDefinitionPackaging>;
}

/**
 * An organization that distributes the packaged device
 */
export interface DeviceDefinitionDistributor {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Distributor's human-readable name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Distributor as an Organization resource (0..*) */
  organizationReference?: Array<Reference>;
}

/**
 * The version of the device or software
 */
export interface DeviceDefinitionVersion {
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
  /** The version text (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc
 */
export interface DeviceDefinitionProperty {
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

/**
 * An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device
 */
export interface DeviceDefinitionLink {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type indicates the relationship of the related device to the device instance (1..1) */
  relation: Coding;
  /** A reference to the linked device (1..1) */
  relatedDevice: CodeableReference;
}

/**
 * A substance used to create the material(s) of which the device is made
 */
export interface DeviceDefinitionMaterial {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A relevant substance that the device contains, may contain, or is made of (1..1) */
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

/**
 * Information aimed at providing directions for the usage of this model of device
 */
export interface DeviceDefinitionGuideline {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The circumstances that form the setting for using the device (0..*) */
  useContext?: Array<UsageContext>;
  /** Detailed written and visual directions for the user on how to use the device (0..1) */
  usageInstruction?: string;
  /** Id and extensions of the primitive `usageInstruction`. */
  _usageInstruction?: Element;
  /** A source of information or reference for this guideline (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** A clinical condition for which the device was designed to be used (0..*) */
  indication?: Array<CodeableConcept>;
  /** A specific situation when a device should not be used because it may cause harm (0..*) */
  contraindication?: Array<CodeableConcept>;
  /** Specific hazard alert information that a user needs to know before using the device (0..*) */
  warning?: Array<CodeableConcept>;
  /** A description of the general purpose or medical use of the device or its function (0..1) */
  intendedUse?: string;
  /** Id and extensions of the primitive `intendedUse`. */
  _intendedUse?: Element;
}

/**
 * Tracking of latest field safety corrective action
 */
export interface DeviceDefinitionCorrectiveAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether the corrective action was a recall (1..1) */
  recall?: boolean;
  /** Id and extensions of the primitive `recall`. */
  _recall?: Element;
  /** model | lot-numbers | serial-numbers (0..1) */
  scope?: DeviceDefinitionCorrectiveAction.ScopeEnum;
  /** Id and extensions of the primitive `scope`. */
  _scope?: Element;
  /** Start and end dates of the corrective action (1..1) */
  period: Period;
}

export namespace DeviceDefinitionCorrectiveAction {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/device-correctiveactionscope */
  export type ScopeEnum = 'model' | 'lot-numbers' | 'serial-numbers';
  export const ScopeEnum = {
    Model: 'model' as ScopeEnum,
    LotNumbers: 'lot-numbers' as ScopeEnum,
    SerialNumbers: 'serial-numbers' as ScopeEnum,
  };
}

/**
 * Billing code or reference associated with the device
 */
export interface DeviceDefinitionChargeItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The code or reference for the charge item (1..1) */
  chargeItemCode: CodeableReference;
  /** Coefficient applicable to the billing code (1..1) */
  count: Quantity;
  /** A specific time period in which this charge item applies (0..1) */
  effectivePeriod?: Period;
  /** The context to which this charge item applies (0..*) */
  useContext?: Array<UsageContext>;
}
