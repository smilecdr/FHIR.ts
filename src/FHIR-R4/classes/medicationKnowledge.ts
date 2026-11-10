/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Dosage } from './dosage';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Information about a medication that is used to support knowledge.
 */
export class MedicationKnowledge {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code that identifies this medication (0..1) */
  code?: CodeableConcept;
  /** active | inactive | entered-in-error (0..1) */
  status?: MedicationKnowledge.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Manufacturer of the item (0..1) */
  manufacturer?: Reference;
  /** powder | tablets | capsule + (0..1) */
  doseForm?: CodeableConcept;
  /** Amount of drug in package (0..1) */
  amount?: Quantity;
  /** Additional names for a medication (0..*) */
  synonym?: Array<string>;
  /** Id and extensions of the primitive `synonym`. */
  _synonym?: Array<Element | null>;
  /** Associated or related medication information (0..*) */
  relatedMedicationKnowledge?: Array<MedicationKnowledgeRelatedMedicationKnowledge>;
  /** A medication resource that is associated with this medication (0..*) */
  associatedMedication?: Array<Reference>;
  /** Category of the medication or product (0..*) */
  productType?: Array<CodeableConcept>;
  /** Associated documentation about the medication (0..*) */
  monograph?: Array<MedicationKnowledgeMonograph>;
  /** Active or inactive ingredient (0..*) */
  ingredient?: Array<MedicationKnowledgeIngredient>;
  /** The instructions for preparing the medication (0..1) */
  preparationInstruction?: string;
  /** Id and extensions of the primitive `preparationInstruction`. */
  _preparationInstruction?: Element;
  /** The intended or approved route of administration (0..*) */
  intendedRoute?: Array<CodeableConcept>;
  /** The pricing of the medication (0..*) */
  cost?: Array<MedicationKnowledgeCost>;
  /** Program under which a medication is reviewed (0..*) */
  monitoringProgram?: Array<MedicationKnowledgeMonitoringProgram>;
  /** Guidelines for administration of the medication (0..*) */
  administrationGuidelines?: Array<MedicationKnowledgeAdministrationGuidelines>;
  /** Categorization of the medication within a formulary or classification system (0..*) */
  medicineClassification?: Array<MedicationKnowledgeMedicineClassification>;
  /** Details about packaged medications (0..1) */
  packaging?: MedicationKnowledgePackaging;
  /** Specifies descriptive properties of the medicine (0..*) */
  drugCharacteristic?: Array<MedicationKnowledgeDrugCharacteristic>;
  /** Potential clinical issue with or between medication(s) (0..*) */
  contraindication?: Array<Reference>;
  /** Regulatory information about a medication (0..*) */
  regulatory?: Array<MedicationKnowledgeRegulatory>;
  /** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body (0..*) */
  kinetics?: Array<MedicationKnowledgeKinetics>;
}

export namespace MedicationKnowledge {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medicationknowledge-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Associated or related medication information
 */
export class MedicationKnowledgeRelatedMedicationKnowledge {
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
export class MedicationKnowledgeMonograph {
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
 * Active or inactive ingredient
 */
export class MedicationKnowledgeIngredient {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Medication(s) or substance(s) contained in the medication (1..1) */
  itemCodeableConcept?: CodeableConcept;
  /** Medication(s) or substance(s) contained in the medication (1..1) */
  itemReference?: Reference;
  /** Active ingredient indicator (0..1) */
  isActive?: boolean;
  /** Id and extensions of the primitive `isActive`. */
  _isActive?: Element;
  /** Quantity of ingredient present (0..1) */
  strength?: Ratio;
}

/**
 * The pricing of the medication
 */
export class MedicationKnowledgeCost {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The category of the cost information (1..1) */
  type: CodeableConcept;
  /** The source or owner for the price information (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;
  /** The price of the medication (1..1) */
  cost: Money;
}

/**
 * Program under which a medication is reviewed
 */
export class MedicationKnowledgeMonitoringProgram {
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
 * Guidelines for administration of the medication
 */
export class MedicationKnowledgeAdministrationGuidelines {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Dosage for the medication for the specific guidelines (0..*) */
  dosage?: Array<MedicationKnowledgeDosage>;
  /** Indication for use that apply to the specific administration guidelines (0..1) */
  indicationCodeableConcept?: CodeableConcept;
  /** Indication for use that apply to the specific administration guidelines (0..1) */
  indicationReference?: Reference;
  /** Characteristics of the patient that are relevant to the administration guidelines (0..*) */
  patientCharacteristics?: Array<MedicationKnowledgePatientCharacteristics>;
}

/**
 * Dosage for the medication for the specific guidelines
 */
export class MedicationKnowledgeDosage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of dosage (1..1) */
  type: CodeableConcept;
  /** Dosage for the medication for the specific guidelines (1..*) */
  dosage: Array<Dosage>;
}

/**
 * Characteristics of the patient that are relevant to the administration guidelines
 */
export class MedicationKnowledgePatientCharacteristics {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Specific characteristic that is relevant to the administration guideline (1..1) */
  characteristicCodeableConcept?: CodeableConcept;
  /** Specific characteristic that is relevant to the administration guideline (1..1) */
  characteristicQuantity?: Quantity;
  /** The specific characteristic (0..*) */
  value?: Array<string>;
  /** Id and extensions of the primitive `value`. */
  _value?: Array<Element | null>;
}

/**
 * Categorization of the medication within a formulary or classification system
 */
export class MedicationKnowledgeMedicineClassification {
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
  /** Specific category assigned to the medication (0..*) */
  classification?: Array<CodeableConcept>;
}

/**
 * Details about packaged medications
 */
export class MedicationKnowledgePackaging {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A code that defines the specific type of packaging that the medication can be found in (0..1) */
  type?: CodeableConcept;
  /** The number of product units the package would contain if fully loaded (0..1) */
  quantity?: Quantity;
}

/**
 * Specifies descriptive properties of the medicine
 */
export class MedicationKnowledgeDrugCharacteristic {
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
}

/**
 * Regulatory information about a medication
 */
export class MedicationKnowledgeRegulatory {
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
  schedule?: Array<MedicationKnowledgeSchedule>;
  /** The maximum number of units of the medication that can be dispensed in a period (0..1) */
  maxDispense?: MedicationKnowledgeMaxDispense;
}

/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 */
export class MedicationKnowledgeSubstitution {
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
 * Specifies the schedule of a medication in jurisdiction
 */
export class MedicationKnowledgeSchedule {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Specifies the specific drug schedule (1..1) */
  schedule: CodeableConcept;
}

/**
 * The maximum number of units of the medication that can be dispensed in a period
 */
export class MedicationKnowledgeMaxDispense {
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
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
 */
export class MedicationKnowledgeKinetics {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The drug concentration measured at certain discrete points in time (0..*) */
  areaUnderCurve?: Array<Quantity>;
  /** The median lethal dose of a drug (0..*) */
  lethalDose50?: Array<Quantity>;
  /** Time required for concentration in the body to decrease by half (0..1) */
  halfLifePeriod?: Duration;
}
