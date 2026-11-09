/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Dosage } from './dosage';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for MedicationStatement Resource
 */
export class MedicationStatement {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Fulfils plan, proposal or order (0..*) */
  basedOn?: Array<Reference>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** Encounter / Episode associated with MedicationStatement (0..1) */
  context?: Reference;
  /** active | completed | entered-in-error | intended | stopped | on-hold (1..1) */
  status?: MedicationStatement.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Type of medication usage (0..1) */
  category?: CodeableConcept;
  /** What medication was taken (1..1) */
  medicationCodeableConcept?: CodeableConcept;
  /** What medication was taken (1..1) */
  medicationReference?: Reference;
  /** The date/time or interval when the medication was taken (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** The date/time or interval when the medication was taken (0..1) */
  effectivePeriod?: Period;
  /** When the statement was asserted? (0..1) */
  dateAsserted?: string;
  /** Id and extensions of the primitive `dateAsserted`. */
  _dateAsserted?: Element;
  /** Person or organization that provided the information about the taking of this medication (0..1) */
  informationSource?: Reference;
  /** Who is/was taking the medication (1..1) */
  subject: Reference;
  /** Additional supporting information (0..*) */
  derivedFrom?: Array<Reference>;
  /** y | n | unk | na (1..1) */
  taken?: MedicationStatement.TakenEnum;
  /** Id and extensions of the primitive `taken`. */
  _taken?: Element;
  /** True if asserting medication was not given (0..*) */
  reasonNotTaken?: Array<CodeableConcept>;
  /** Reason for why the medication is being/was taken (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Condition or observation that supports why the medication is being/was taken (0..*) */
  reasonReference?: Array<Reference>;
  /** Further information about the statement (0..*) */
  note?: Array<Annotation>;
  /** Details of how medication is/was taken or should be taken (0..*) */
  dosage?: Array<Dosage>;
}

export namespace MedicationStatement {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-statement-status */
  export type StatusEnum =
    'active' | 'completed' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Intended: 'intended' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-statement-taken */
  export type TakenEnum = 'y' | 'n' | 'unk' | 'na';
  export const TakenEnum = {
    Y: 'y' as TakenEnum,
    N: 'n' as TakenEnum,
    Unk: 'unk' as TakenEnum,
    Na: 'na' as TakenEnum,
  };
}
