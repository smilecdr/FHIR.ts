/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { MarketingStatus } from './marketingStatus';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export class MedicinalProduct {
  resourceType: 'MedicinalProduct';
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
  /** Business identifier for this product. Could be an MPID (0..*) */
  identifier?: Array<Identifier>;
  /** Regulatory type, e.g. Investigational or Authorized (0..1) */
  type?: CodeableConcept;
  /** If this medicine applies to human or veterinary uses (0..1) */
  domain?: Coding;
  /** The dose form for a single part product, or combined form of a multiple part product (0..1) */
  combinedPharmaceuticalDoseForm?: CodeableConcept;
  /** The legal status of supply of the medicinal product as classified by the regulator (0..1) */
  legalStatusOfSupply?: CodeableConcept;
  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons (0..1) */
  additionalMonitoringIndicator?: CodeableConcept;
  /** Whether the Medicinal Product is subject to special measures for regulatory reasons (0..*) */
  specialMeasures?: Array<string>;
  /** Id and extensions of the primitive `specialMeasures`. */
  _specialMeasures?: Array<Element | null>;
  /** If authorised for use in children (0..1) */
  paediatricUseIndicator?: CodeableConcept;
  /** Allows the product to be classified by various systems (0..*) */
  productClassification?: Array<CodeableConcept>;
  /** Marketing status of the medicinal product, in contrast to marketing authorizaton (0..*) */
  marketingStatus?: Array<MarketingStatus>;
  /** Pharmaceutical aspects of product (0..*) */
  pharmaceuticalProduct?: Array<Reference>;
  /** Package representation for the product (0..*) */
  packagedMedicinalProduct?: Array<Reference>;
  /** Supporting documentation, typically for regulatory submission (0..*) */
  attachedDocument?: Array<Reference>;
  /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File) (0..*) */
  masterFile?: Array<Reference>;
  /** A product specific contact, person (in a role), or an organization (0..*) */
  contact?: Array<Reference>;
  /** Clinical trials or studies that this product is involved in (0..*) */
  clinicalTrial?: Array<Reference>;
  /** The product's name, including full name and possibly coded parts (1..*) */
  name: Array<MedicinalProductName>;
  /** Reference to another product, e.g. for linking authorised to investigational product (0..*) */
  crossReference?: Array<Identifier>;
  /** An operation applied to the product, for manufacturing or adminsitrative purpose (0..*) */
  manufacturingBusinessOperation?: Array<MedicinalProductManufacturingBusinessOperation>;
  /** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease (0..*) */
  specialDesignation?: Array<MedicinalProductSpecialDesignation>;
}

/**
 * The product's name, including full name and possibly coded parts
 */
export class MedicinalProductName {
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
  /** Coding words or phrases of the name (0..*) */
  namePart?: Array<MedicinalProductNamePart>;
  /** Country where the name applies (0..*) */
  countryLanguage?: Array<MedicinalProductCountryLanguage>;
}

/**
 * Coding words or phrases of the name
 */
export class MedicinalProductNamePart {
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
  /** Idenifying type for this part of the name (e.g. strength part) (1..1) */
  type: Coding;
}

/**
 * Country where the name applies
 */
export class MedicinalProductCountryLanguage {
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
 * An operation applied to the product, for manufacturing or adminsitrative purpose
 */
export class MedicinalProductManufacturingBusinessOperation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of manufacturing operation (0..1) */
  operationType?: CodeableConcept;
  /** Regulatory authorization reference number (0..1) */
  authorisationReferenceNumber?: Identifier;
  /** Regulatory authorization date (0..1) */
  effectiveDate?: Date | string;
  /** Id and extensions of the primitive `effectiveDate`. */
  _effectiveDate?: Element;
  /** To indicate if this proces is commercially confidential (0..1) */
  confidentialityIndicator?: CodeableConcept;
  /** The manufacturer or establishment associated with the process (0..*) */
  manufacturer?: Array<Reference>;
  /** A regulator which oversees the operation (0..1) */
  regulator?: Reference;
}

/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
 */
export class MedicinalProductSpecialDesignation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier for the designation, or procedure number (0..*) */
  identifier?: Array<Identifier>;
  /** The type of special designation, e.g. orphan drug, minor use (0..1) */
  type?: CodeableConcept;
  /** The intended use of the product, e.g. prevention, treatment (0..1) */
  intendedUse?: CodeableConcept;
  /** Condition for which the medicinal use applies (0..1) */
  indicationCodeableConcept?: CodeableConcept;
  /** Condition for which the medicinal use applies (0..1) */
  indicationReference?: Reference;
  /** For example granted, pending, expired or withdrawn (0..1) */
  status?: CodeableConcept;
  /** Date when the designation was granted (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Animal species for which this applies (0..1) */
  species?: CodeableConcept;
}
