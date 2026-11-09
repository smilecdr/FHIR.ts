/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Age } from './age';
import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export interface FamilyMemberHistory {
  resourceType: 'FamilyMemberHistory';
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
  /** External Id(s) for this record (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: Array<string>;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Array<Element | null>;
  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: Array<string>;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Array<Element | null>;
  /** partial | completed | entered-in-error | health-unknown (1..1) */
  status?: FamilyMemberHistory.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** subject-unknown | withheld | unable-to-obtain | deferred (0..1) */
  dataAbsentReason?: CodeableConcept;
  /** Patient history is about (1..1) */
  patient: Reference;
  /** When history was recorded or last updated (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who or what participated in the activities related to the family member history and how they were involved (0..*) */
  participant?: Array<FamilyMemberHistoryParticipant>;
  /** The family member described (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Relationship to the subject (1..1) */
  relationship: CodeableConcept;
  /** male | female | other | unknown (0..1) */
  sex?: CodeableConcept;
  /** (approximate) date of birth (0..1) */
  bornPeriod?: Period;
  /** (approximate) date of birth (0..1) */
  bornDate?: string;
  /** Id and extensions of the primitive `bornDate`. */
  _bornDate?: Element;
  /** (approximate) date of birth (0..1) */
  bornString?: string;
  /** Id and extensions of the primitive `bornString`. */
  _bornString?: Element;
  /** (approximate) age (0..1) */
  ageAge?: Age;
  /** (approximate) age (0..1) */
  ageRange?: Range;
  /** (approximate) age (0..1) */
  ageString?: string;
  /** Id and extensions of the primitive `ageString`. */
  _ageString?: Element;
  /** Age is estimated? (0..1) */
  estimatedAge?: boolean;
  /** Id and extensions of the primitive `estimatedAge`. */
  _estimatedAge?: Element;
  /** Dead? How old/when? (0..1) */
  deceasedBoolean?: boolean;
  /** Id and extensions of the primitive `deceasedBoolean`. */
  _deceasedBoolean?: Element;
  /** Dead? How old/when? (0..1) */
  deceasedAge?: Age;
  /** Dead? How old/when? (0..1) */
  deceasedRange?: Range;
  /** Dead? How old/when? (0..1) */
  deceasedDate?: string;
  /** Id and extensions of the primitive `deceasedDate`. */
  _deceasedDate?: Element;
  /** Dead? How old/when? (0..1) */
  deceasedString?: string;
  /** Id and extensions of the primitive `deceasedString`. */
  _deceasedString?: Element;
  /** Why was family member history performed? (0..*) */
  reason?: Array<CodeableReference>;
  /** General note about related person (0..*) */
  note?: Array<Annotation>;
  /** Condition that the related person had (0..*) */
  condition?: Array<FamilyMemberHistoryCondition>;
  /** Procedures that the related person had (0..*) */
  procedure?: Array<FamilyMemberHistoryProcedure>;
}

export namespace FamilyMemberHistory {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/history-status */
  export type StatusEnum = 'partial' | 'completed' | 'entered-in-error' | 'health-unknown';
  export const StatusEnum = {
    Partial: 'partial' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    HealthUnknown: 'health-unknown' as StatusEnum,
  };
}

/**
 * Who or what participated in the activities related to the family member history and how they were involved
 */
export interface FamilyMemberHistoryParticipant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of involvement (0..1) */
  function?: CodeableConcept;
  /** Who or what participated in the activities related to the family member history (1..1) */
  actor: Reference;
}

/**
 * Condition that the related person had
 */
export interface FamilyMemberHistoryCondition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Condition suffered by relation (1..1) */
  code: CodeableConcept;
  /** deceased | permanent disability | etc (0..1) */
  outcome?: CodeableConcept;
  /** Whether the condition contributed to the cause of death (0..1) */
  contributedToDeath?: boolean;
  /** Id and extensions of the primitive `contributedToDeath`. */
  _contributedToDeath?: Element;
  /** When condition first manifested (0..1) */
  onsetAge?: Age;
  /** When condition first manifested (0..1) */
  onsetRange?: Range;
  /** When condition first manifested (0..1) */
  onsetPeriod?: Period;
  /** When condition first manifested (0..1) */
  onsetString?: string;
  /** Id and extensions of the primitive `onsetString`. */
  _onsetString?: Element;
  /** Extra information about condition (0..*) */
  note?: Array<Annotation>;
}

/**
 * Procedures that the related person had
 */
export interface FamilyMemberHistoryProcedure {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Procedures performed on the related person (1..1) */
  code: CodeableConcept;
  /** What happened following the procedure (0..1) */
  outcome?: CodeableConcept;
  /** Whether the procedure contributed to the cause of death (0..1) */
  contributedToDeath?: boolean;
  /** Id and extensions of the primitive `contributedToDeath`. */
  _contributedToDeath?: Element;
  /** When the procedure was performed (0..1) */
  performedAge?: Age;
  /** When the procedure was performed (0..1) */
  performedRange?: Range;
  /** When the procedure was performed (0..1) */
  performedPeriod?: Period;
  /** When the procedure was performed (0..1) */
  performedString?: string;
  /** Id and extensions of the primitive `performedString`. */
  _performedString?: Element;
  /** When the procedure was performed (0..1) */
  performedDateTime?: string;
  /** Id and extensions of the primitive `performedDateTime`. */
  _performedDateTime?: Element;
  /** Extra information about the procedure (0..*) */
  note?: Array<Annotation>;
}
