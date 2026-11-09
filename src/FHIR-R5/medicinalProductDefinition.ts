/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { MarketingStatus } from './marketingStatus';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adverse events management etc.).
 */
export interface MedicinalProductDefinition {
  resourceType: 'MedicinalProductDefinition';
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
  /** Business identifier for this product. Could be an MPID (0..*) */
  identifier?: Array<Identifier>;
  /** Regulatory type, e.g. Investigational or Authorized (0..1) */
  type?: CodeableConcept;
  /** If this medicine applies to human or veterinary uses (0..1) */
  domain?: CodeableConcept;
  /** A business identifier relating to a specific version of the product (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** The status within the lifecycle of this product record (0..1) */
  status?: CodeableConcept;
  /** The date at which the given status became applicable (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;
  /** General description of this product (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The dose form for a single part product, or combined form of a multiple part product (0..1) */
  combinedPharmaceuticalDoseForm?: CodeableConcept;
  /** The path by which the product is taken into or makes contact with the body (0..*) */
  route?: Array<CodeableConcept>;
  /** Description of indication(s) for this product, used when structured indications are not required (0..1) */
  indication?: string;
  /** Id and extensions of the primitive `indication`. */
  _indication?: Element;
  /** The legal status of supply of the medicinal product as classified by the regulator (0..1) */
  legalStatusOfSupply?: CodeableConcept;
  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons (0..1) */
  additionalMonitoringIndicator?: CodeableConcept;
  /** Whether the Medicinal Product is subject to special measures for regulatory reasons (0..*) */
  specialMeasures?: Array<CodeableConcept>;
  /** If authorised for use in children (0..1) */
  pediatricUseIndicator?: CodeableConcept;
  /** Allows the product to be classified by various systems (0..*) */
  classification?: Array<CodeableConcept>;
  /** Marketing status of the medicinal product, in contrast to marketing authorization (0..*) */
  marketingStatus?: Array<MarketingStatus>;
  /** Package type for the product (0..*) */
  packagedMedicinalProduct?: Array<CodeableConcept>;
  /** Types of medicinal manufactured items and/or devices that this product consists of, such as tablets, capsule, or syringes (0..*) */
  comprisedOf?: Array<Reference>;
  /** The ingredients of this medicinal product - when not detailed in other resources (0..*) */
  ingredient?: Array<CodeableConcept>;
  /** Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product (0..*) */
  impurity?: Array<CodeableReference>;
  /** Additional documentation about the medicinal product (0..*) */
  attachedDocument?: Array<Reference>;
  /** A master file for the medicinal product (e.g. Pharmacovigilance System Master File) (0..*) */
  masterFile?: Array<Reference>;
  /** A product specific contact, person (in a role), or an organization (0..*) */
  contact?: Array<MedicinalProductDefinitionContact>;
  /** Clinical trials or studies that this product is involved in (0..*) */
  clinicalTrial?: Array<Reference>;
  /** A code that this product is known by, within some formal terminology (0..*) */
  code?: Array<Coding>;
  /** The product's name, including full name and possibly coded parts (1..*) */
  name: Array<MedicinalProductDefinitionName>;
  /** Reference to another product, e.g. for linking authorised to investigational product (0..*) */
  crossReference?: Array<MedicinalProductDefinitionCrossReference>;
  /** A manufacturing or administrative process for the medicinal product (0..*) */
  operation?: Array<MedicinalProductDefinitionOperation>;
  /** Key product features such as "sugar free", "modified release" (0..*) */
  characteristic?: Array<MedicinalProductDefinitionCharacteristic>;
}

/**
 * A product specific contact, person (in a role), or an organization
 */
export interface MedicinalProductDefinitionContact {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information (0..1) */
  type?: CodeableConcept;
  /** A product specific contact, person (in a role), or an organization (1..1) */
  contact: Reference;
}

/**
 * The product's name, including full name and possibly coded parts
 */
export interface MedicinalProductDefinitionName {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The full product name (1..1) */
  productName?: string;
  /** Id and extensions of the primitive `productName`. */
  _productName?: Element;
  /** Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary (0..1) */
  type?: CodeableConcept;
  /** Coding words or phrases of the name (0..*) */
  part?: Array<MedicinalProductDefinitionPart>;
  /** Country and jurisdiction where the name applies (0..*) */
  usage?: Array<MedicinalProductDefinitionUsage>;
}

/**
 * Coding words or phrases of the name
 */
export interface MedicinalProductDefinitionPart {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A fragment of a product name (1..1) */
  part?: string;
  /** Id and extensions of the primitive `part`. */
  _part?: Element;
  /** Identifying type for this part of the name (e.g. strength part) (1..1) */
  type: CodeableConcept;
}

/**
 * Country and jurisdiction where the name applies
 */
export interface MedicinalProductDefinitionUsage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Country code for where this name applies (1..1) */
  country: CodeableConcept;
  /** Jurisdiction code for where this name applies (0..1) */
  jurisdiction?: CodeableConcept;
  /** Language code for this name (1..1) */
  language: CodeableConcept;
}

/**
 * Reference to another product, e.g. for linking authorised to investigational product
 */
export interface MedicinalProductDefinitionCrossReference {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to another product, e.g. for linking authorised to investigational product (1..1) */
  product: CodeableReference;
  /** The type of relationship, for instance branded to generic or virtual to actual product (0..1) */
  type?: CodeableConcept;
}

/**
 * A manufacturing or administrative process for the medicinal product
 */
export interface MedicinalProductDefinitionOperation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of manufacturing operation e.g. manufacturing itself, re-packaging (0..1) */
  type?: CodeableReference;
  /** Date range of applicability (0..1) */
  effectiveDate?: Period;
  /** The organization responsible for the particular process, e.g. the manufacturer or importer (0..*) */
  organization?: Array<Reference>;
  /** Specifies whether this process is considered proprietary or confidential (0..1) */
  confidentialityIndicator?: CodeableConcept;
}

/**
 * Key product features such as "sugar free", "modified release"
 */
export interface MedicinalProductDefinitionCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A code expressing the type of characteristic (1..1) */
  type: CodeableConcept;
  /** A value for the characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** A value for the characteristic (0..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** A value for the characteristic (0..1) */
  valueQuantity?: Quantity;
  /** A value for the characteristic (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** A value for the characteristic (0..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** A value for the characteristic (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** A value for the characteristic (0..1) */
  valueAttachment?: Attachment;
}
