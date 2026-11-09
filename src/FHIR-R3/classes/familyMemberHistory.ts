/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Age } from './age';
import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Range } from './range';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for FamilyMemberHistory Resource
 */
export class FamilyMemberHistory {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External Id(s) for this record (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates protocol or definition (0..*) */
  definition?: Array<Reference>;
  /** partial | completed | entered-in-error | health-unknown (1..1) */
  status?: FamilyMemberHistory.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The taking of a family member's history did not occur (0..1) */
  notDone?: boolean;
  /** Id and extensions of the primitive `notDone`. */
  _notDone?: Element;
  /** subject-unknown | withheld | unable-to-obtain | deferred (0..1) */
  notDoneReason?: CodeableConcept;
  /** Patient history is about (1..1) */
  patient: Reference;
  /** When history was captured/updated (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The family member described (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Relationship to the subject (1..1) */
  relationship: CodeableConcept;
  /** male | female | other | unknown (0..1) */
  gender?: FamilyMemberHistory.GenderEnum;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;
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
  reasonCode?: Array<CodeableConcept>;
  /** Why was family member history performed? (0..*) */
  reasonReference?: Array<Reference>;
  /** General note about related person (0..*) */
  note?: Array<Annotation>;
  /** Condition that the related person had (0..*) */
  condition?: Array<FamilyMemberHistoryCondition>;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/administrative-gender */
  export type GenderEnum = 'male' | 'female' | 'other' | 'unknown';
  export const GenderEnum = {
    Male: 'male' as GenderEnum,
    Female: 'female' as GenderEnum,
    Other: 'other' as GenderEnum,
    Unknown: 'unknown' as GenderEnum,
  };
}

/**
 * Condition that the related person had
 */
export class FamilyMemberHistoryCondition {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Condition suffered by relation (1..1) */
  code: CodeableConcept;
  /** deceased | permanent disability | etc. (0..1) */
  outcome?: CodeableConcept;
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
