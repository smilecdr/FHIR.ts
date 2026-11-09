/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A record of significant events/milestones key data throughout the history of an Encounter
 */
export interface EncounterHistory {
  resourceType: 'EncounterHistory';
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
  /** The Encounter associated with this set of historic values (0..1) */
  encounter?: Reference;
  /** Identifier(s) by which this encounter is known (0..*) */
  identifier?: Array<Identifier>;
  /** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown (1..1) */
  status?: EncounterHistory.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Classification of patient encounter (1..1) */
  class: CodeableConcept;
  /** Specific type of encounter (0..*) */
  type?: Array<CodeableConcept>;
  /** Specific type of service (0..*) */
  serviceType?: Array<CodeableReference>;
  /** The patient or group related to this encounter (0..1) */
  subject?: Reference;
  /** The current status of the subject in relation to the Encounter (0..1) */
  subjectStatus?: CodeableConcept;
  /** The actual start and end time associated with this set of values associated with the encounter (0..1) */
  actualPeriod?: Period;
  /** The planned start date/time (or admission date) of the encounter (0..1) */
  plannedStartDate?: string;
  /** Id and extensions of the primitive `plannedStartDate`. */
  _plannedStartDate?: Element;
  /** The planned end date/time (or discharge date) of the encounter (0..1) */
  plannedEndDate?: string;
  /** Id and extensions of the primitive `plannedEndDate`. */
  _plannedEndDate?: Element;
  /** Actual quantity of time the encounter lasted (less time absent) (0..1) */
  length?: Duration;
  /** Location of the patient at this point in the encounter (0..*) */
  location?: Array<EncounterHistoryLocation>;
}

export namespace EncounterHistory {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/encounter-status */
  export type StatusEnum =
    | 'planned'
    | 'in-progress'
    | 'on-hold'
    | 'discharged'
    | 'completed'
    | 'cancelled'
    | 'discontinued'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Planned: 'planned' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Discharged: 'discharged' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Discontinued: 'discontinued' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Location of the patient at this point in the encounter
 */
export interface EncounterHistoryLocation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Location the encounter takes place (1..1) */
  location: Reference;
  /** The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.) (0..1) */
  form?: CodeableConcept;
}
