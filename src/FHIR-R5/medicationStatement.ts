/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Dosage } from './dosage';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';

/**
 * A record of a medication that is being consumed by a patient. A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future. The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician. A common scenario where this information is captured is during the history taking process during a patient visit or stay. The medication information may come from sources such as the patient's memory, from a prescription bottle, or from a list of medications the patient, clinician or other party maintains. The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication. A medicationstatement is often, if not always, less specific. There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise. As stated earlier, the Medication Statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains. Medication administration is more formal and is not missing detailed information.
 */
export interface MedicationStatement {
  resourceType: 'MedicationStatement';
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
  /** External identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** recorded | entered-in-error | draft (1..1) */
  status?: MedicationStatement.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Type of medication statement (0..*) */
  category?: Array<CodeableConcept>;
  /** What medication was taken (1..1) */
  medication: CodeableReference;
  /** Who is/was taking the medication (1..1) */
  subject: Reference;
  /** Encounter associated with MedicationStatement (0..1) */
  encounter?: Reference;
  /** The date/time or interval when the medication is/was/will be taken (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** The date/time or interval when the medication is/was/will be taken (0..1) */
  effectivePeriod?: Period;
  /** The date/time or interval when the medication is/was/will be taken (0..1) */
  effectiveTiming?: Timing;
  /** When the usage was asserted? (0..1) */
  dateAsserted?: string;
  /** Id and extensions of the primitive `dateAsserted`. */
  _dateAsserted?: Element;
  /** Person or organization that provided the information about the taking of this medication (0..*) */
  informationSource?: Array<Reference>;
  /** Link to information used to derive the MedicationStatement (0..*) */
  derivedFrom?: Array<Reference>;
  /** Reason for why the medication is being/was taken (0..*) */
  reason?: Array<CodeableReference>;
  /** Further information about the usage (0..*) */
  note?: Array<Annotation>;
  /** Link to information relevant to the usage of a medication (0..*) */
  relatedClinicalInformation?: Array<Reference>;
  /** Full representation of the dosage instructions (0..1) */
  renderedDosageInstruction?: string;
  /** Id and extensions of the primitive `renderedDosageInstruction`. */
  _renderedDosageInstruction?: Element;
  /** Details of how medication is/was taken or should be taken (0..*) */
  dosage?: Array<Dosage>;
  /** Indicates whether the medication is or is not being consumed or administered (0..1) */
  adherence?: MedicationStatementAdherence;
}

export namespace MedicationStatement {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-statement-status */
  export type StatusEnum = 'recorded' | 'entered-in-error' | 'draft';
  export const StatusEnum = {
    Recorded: 'recorded' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Draft: 'draft' as StatusEnum,
  };
}

/**
 * Indicates whether the medication is or is not being consumed or administered
 */
export interface MedicationStatementAdherence {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of adherence (1..1) */
  code: CodeableConcept;
  /** Details of the reason for the current use of the medication (0..1) */
  reason?: CodeableConcept;
}
