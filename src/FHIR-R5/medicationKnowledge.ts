/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Dosage } from './dosage';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledge {
  resourceType: 'MedicationKnowledge';
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
  /** Business identifier for this medication (0..*) */
  identifier?: Array<Identifier>;
  /** Code that identifies this medication (0..1) */
  code?: CodeableConcept;
  /** active | entered-in-error | inactive (0..1) */
  status?: MedicationKnowledge.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Creator or owner of the knowledge or information about the medication (0..1) */
  author?: Reference;
  /** Codes that identify the different jurisdictions for which the information of this resource was created (0..*) */
  intendedJurisdiction?: Array<CodeableConcept>;
  /** A name associated with the medication being described (0..*) */
  name?: Array<string>;
  /** Id and extensions of the primitive `name`. */
  _name?: Array<Element | null>;
  /** Associated or related medication information (0..*) */
  relatedMedicationKnowledge?: Array<MedicationKnowledgeRelatedMedicationKnowledge>;
  /** The set of medication resources that are associated with this medication (0..*) */
  associatedMedication?: Array<Reference>;
  /** Category of the medication or product (0..*) */
  productType?: Array<CodeableConcept>;
  /** Associated documentation about the medication (0..*) */
  monograph?: Array<MedicationKnowledgeMonograph>;
  /** The instructions for preparing the medication (0..1) */
  preparationInstruction?: string;
  /** Id and extensions of the primitive `preparationInstruction`. */
  _preparationInstruction?: Element;
  /** The pricing of the medication (0..*) */
  cost?: Array<MedicationKnowledgeCost>;
  /** Program under which a medication is reviewed (0..*) */
  monitoringProgram?: Array<MedicationKnowledgeMonitoringProgram>;
  /** Guidelines or protocols for administration of the medication for an indication (0..*) */
  indicationGuideline?: Array<MedicationKnowledgeIndicationGuideline>;
  /** Categorization of the medication within a formulary or classification system (0..*) */
  medicineClassification?: Array<MedicationKnowledgeMedicineClassification>;
  /** Details about packaged medications (0..*) */
  packaging?: Array<MedicationKnowledgePackaging>;
  /** Potential clinical issue with or between medication(s) (0..*) */
  clinicalUseIssue?: Array<Reference>;
  /** How the medication should be stored (0..*) */
  storageGuideline?: Array<MedicationKnowledgeStorageGuideline>;
  /** Regulatory information about a medication (0..*) */
  regulatory?: Array<MedicationKnowledgeRegulatory>;
  /** Minimal definition information about the medication (0..1) */
  definitional?: MedicationKnowledgeDefinitional;
}

export namespace MedicationKnowledge {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medicationknowledge-status */
  export type StatusEnum = 'active' | 'entered-in-error' | 'inactive';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
  };
}

/**
 * Associated or related medication information
 */
export interface MedicationKnowledgeRelatedMedicationKnowledge {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Category of medicationKnowledge (1..1) */
  type: CodeableConcept;
  /** Associated documentation about the associated medication knowledge (1..*) */
  reference: Array<Reference>;
}

/**
 * Associated documentation about the medication
 */
export interface MedicationKnowledgeMonograph {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The category of medication document (0..1) */
  type?: CodeableConcept;
  /** Associated documentation about the medication (0..1) */
  source?: Reference;
}

/**
 * The pricing of the medication
 */
export interface MedicationKnowledgeCost {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The date range for which the cost is effective (0..*) */
  effectiveDate?: Array<Period>;
  /** The category of the cost information (1..1) */
  type: CodeableConcept;
  /** The source or owner for the price information (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;
  /** The price or category of the cost of the medication (1..1) */
  costMoney?: Money;
  /** The price or category of the cost of the medication (1..1) */
  costCodeableConcept?: CodeableConcept;
}

/**
 * Program under which a medication is reviewed
 */
export interface MedicationKnowledgeMonitoringProgram {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of program under which the medication is monitored (0..1) */
  type?: CodeableConcept;
  /** Name of the reviewing program (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
}

/**
 * Guidelines or protocols for administration of the medication for an indication
 */
export interface MedicationKnowledgeIndicationGuideline {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Indication for use that applies to the specific administration guideline (0..*) */
  indication?: Array<CodeableReference>;
  /** Guidelines for dosage of the medication (0..*) */
  dosingGuideline?: Array<MedicationKnowledgeDosingGuideline>;
}

/**
 * Guidelines for dosage of the medication
 */
export interface MedicationKnowledgeDosingGuideline {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Intention of the treatment (0..1) */
  treatmentIntent?: CodeableConcept;
  /** Dosage for the medication for the specific guidelines (0..*) */
  dosage?: Array<MedicationKnowledgeDosage>;
  /** Type of treatment the guideline applies to (0..1) */
  administrationTreatment?: CodeableConcept;
  /** Characteristics of the patient that are relevant to the administration guidelines (0..*) */
  patientCharacteristic?: Array<MedicationKnowledgePatientCharacteristic>;
}

/**
 * Dosage for the medication for the specific guidelines
 */
export interface MedicationKnowledgeDosage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Category of dosage for a medication (1..1) */
  type: CodeableConcept;
  /** Dosage for the medication for the specific guidelines (1..*) */
  dosage: Array<Dosage>;
}

/**
 * Characteristics of the patient that are relevant to the administration guidelines
 */
export interface MedicationKnowledgePatientCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Categorization of specific characteristic that is relevant to the administration guideline (1..1) */
  type: CodeableConcept;
  /** The specific characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** The specific characteristic (0..1) */
  valueQuantity?: Quantity;
  /** The specific characteristic (0..1) */
  valueRange?: Range;
}

/**
 * Categorization of the medication within a formulary or classification system
 */
export interface MedicationKnowledgeMedicineClassification {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) (1..1) */
  type: CodeableConcept;
  /** The source of the classification (0..1) */
  sourceString?: string;
  /** Id and extensions of the primitive `sourceString`. */
  _sourceString?: Element;
  /** The source of the classification (0..1) */
  sourceUri?: string;
  /** Id and extensions of the primitive `sourceUri`. */
  _sourceUri?: Element;
  /** Specific category assigned to the medication (0..*) */
  classification?: Array<CodeableConcept>;
}

/**
 * Details about packaged medications
 */
export interface MedicationKnowledgePackaging {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Cost of the packaged medication (0..*) */
  cost?: Array<MedicationKnowledgeCost>;
  /** The packaged medication that is being priced (0..1) */
  packagedProduct?: Reference;
}

/**
 * How the medication should be stored
 */
export interface MedicationKnowledgeStorageGuideline {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to additional information (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;
  /** Additional storage notes (0..*) */
  note?: Array<Annotation>;
  /** Duration remains stable (0..1) */
  stabilityDuration?: Duration;
  /** Setting or value of environment for adequate storage (0..*) */
  environmentalSetting?: Array<MedicationKnowledgeEnvironmentalSetting>;
}

/**
 * Setting or value of environment for adequate storage
 */
export interface MedicationKnowledgeEnvironmentalSetting {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Categorization of the setting (1..1) */
  type: CodeableConcept;
  /** Value of the setting (1..1) */
  valueQuantity?: Quantity;
  /** Value of the setting (1..1) */
  valueRange?: Range;
  /** Value of the setting (1..1) */
  valueCodeableConcept?: CodeableConcept;
}

/**
 * Regulatory information about a medication
 */
export interface MedicationKnowledgeRegulatory {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Specifies the authority of the regulation (1..1) */
  regulatoryAuthority: Reference;
  /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective (0..*) */
  substitution?: Array<MedicationKnowledgeSubstitution>;
  /** Specifies the schedule of a medication in jurisdiction (0..*) */
  schedule?: Array<CodeableConcept>;
  /** The maximum number of units of the medication that can be dispensed in a period (0..1) */
  maxDispense?: MedicationKnowledgeMaxDispense;
}

/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 */
export interface MedicationKnowledgeSubstitution {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Specifies the type of substitution allowed (1..1) */
  type: CodeableConcept;
  /** Specifies if regulation allows for changes in the medication when dispensing (1..1) */
  allowed?: boolean;
  /** Id and extensions of the primitive `allowed`. */
  _allowed?: Element;
}

/**
 * The maximum number of units of the medication that can be dispensed in a period
 */
export interface MedicationKnowledgeMaxDispense {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The maximum number of units of the medication that can be dispensed (1..1) */
  quantity: Quantity;
  /** The period that applies to the maximum number of units (0..1) */
  period?: Duration;
}

/**
 * Minimal definition information about the medication
 */
export interface MedicationKnowledgeDefinitional {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Definitional resources that provide more information about this medication (0..*) */
  definition?: Array<Reference>;
  /** powder | tablets | capsule + (0..1) */
  doseForm?: CodeableConcept;
  /** The intended or approved route of administration (0..*) */
  intendedRoute?: Array<CodeableConcept>;
  /** Active or inactive ingredient (0..*) */
  ingredient?: Array<MedicationKnowledgeIngredient>;
  /** Specifies descriptive properties of the medicine (0..*) */
  drugCharacteristic?: Array<MedicationKnowledgeDrugCharacteristic>;
}

/**
 * Active or inactive ingredient
 */
export interface MedicationKnowledgeIngredient {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Substances contained in the medication (1..1) */
  item: CodeableReference;
  /** A code that defines the type of ingredient, active, base, etc (0..1) */
  type?: CodeableConcept;
  /** Quantity of ingredient present (0..1) */
  strengthRatio?: Ratio;
  /** Quantity of ingredient present (0..1) */
  strengthCodeableConcept?: CodeableConcept;
  /** Quantity of ingredient present (0..1) */
  strengthQuantity?: Quantity;
}

/**
 * Specifies descriptive properties of the medicine
 */
export interface MedicationKnowledgeDrugCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code specifying the type of characteristic of medication (0..1) */
  type?: CodeableConcept;
  /** Description of the characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Description of the characteristic (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Description of the characteristic (0..1) */
  valueQuantity?: Quantity;
  /** Description of the characteristic (0..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Description of the characteristic (0..1) */
  valueAttachment?: Attachment;
}
