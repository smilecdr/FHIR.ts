/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
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
 * An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical research trial management. Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers. Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints.
 */
export interface AdverseEvent {
  resourceType: 'AdverseEvent';
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
  /** Business identifier for the event (0..*) */
  identifier?: Array<Identifier>;
  /** in-progress | completed | entered-in-error | unknown (1..1) */
  status?: AdverseEvent.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** actual | potential (1..1) */
  actuality?: AdverseEvent.ActualityEnum;
  /** Id and extensions of the primitive `actuality`. */
  _actuality?: Element;
  /** wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site (0..*) */
  category?: Array<CodeableConcept>;
  /** Event or incident that occurred or was averted (0..1) */
  code?: CodeableConcept;
  /** Subject impacted by event (1..1) */
  subject: Reference;
  /** The Encounter associated with the start of the AdverseEvent (0..1) */
  encounter?: Reference;
  /** When the event occurred (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When the event occurred (0..1) */
  occurrencePeriod?: Period;
  /** When the event occurred (0..1) */
  occurrenceTiming?: Timing;
  /** When the event was detected (0..1) */
  detected?: string;
  /** Id and extensions of the primitive `detected`. */
  _detected?: Element;
  /** When the event was recorded (0..1) */
  recordedDate?: string;
  /** Id and extensions of the primitive `recordedDate`. */
  _recordedDate?: Element;
  /** Effect on the subject due to this event (0..*) */
  resultingEffect?: Array<Reference>;
  /** Location where adverse event occurred (0..1) */
  location?: Reference;
  /** Seriousness or gravity of the event (0..1) */
  seriousness?: CodeableConcept;
  /** Type of outcome from the adverse event (0..*) */
  outcome?: Array<CodeableConcept>;
  /** Who recorded the adverse event (0..1) */
  recorder?: Reference;
  /** Who was involved in the adverse event or the potential adverse event and what they did (0..*) */
  participant?: Array<AdverseEventParticipant>;
  /** Research study that the subject is enrolled in (0..*) */
  study?: Array<Reference>;
  /** Considered likely or probable or anticipated in the research study (0..1) */
  expectedInResearchStudy?: boolean;
  /** Id and extensions of the primitive `expectedInResearchStudy`. */
  _expectedInResearchStudy?: Element;
  /** The suspected agent causing the adverse event (0..*) */
  suspectEntity?: Array<AdverseEventSuspectEntity>;
  /** Contributing factors suspected to have increased the probability or severity of the adverse event (0..*) */
  contributingFactor?: Array<AdverseEventContributingFactor>;
  /** Preventive actions that contributed to avoiding the adverse event (0..*) */
  preventiveAction?: Array<AdverseEventPreventiveAction>;
  /** Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm (0..*) */
  mitigatingAction?: Array<AdverseEventMitigatingAction>;
  /** Supporting information relevant to the event (0..*) */
  supportingInfo?: Array<AdverseEventSupportingInfo>;
  /** Comment on adverse event (0..*) */
  note?: Array<Annotation>;
}

export namespace AdverseEvent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/adverse-event-status */
  export type StatusEnum = 'in-progress' | 'completed' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    InProgress: 'in-progress' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/adverse-event-actuality */
  export type ActualityEnum = 'actual' | 'potential';
  export const ActualityEnum = {
    Actual: 'actual' as ActualityEnum,
    Potential: 'potential' as ActualityEnum,
  };
}

/**
 * Who was involved in the adverse event or the potential adverse event and what they did
 */
export interface AdverseEventParticipant {
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
  /** Who was involved in the adverse event or the potential adverse event (1..1) */
  actor: Reference;
}

/**
 * The suspected agent causing the adverse event
 */
export interface AdverseEventSuspectEntity {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Refers to the specific entity that caused the adverse event (1..1) */
  instanceCodeableConcept?: CodeableConcept;
  /** Refers to the specific entity that caused the adverse event (1..1) */
  instanceReference?: Reference;
  /** Information on the possible cause of the event (0..1) */
  causality?: AdverseEventCausality;
}

/**
 * Information on the possible cause of the event
 */
export interface AdverseEventCausality {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Method of evaluating the relatedness of the suspected entity to the event (0..1) */
  assessmentMethod?: CodeableConcept;
  /** Result of the assessment regarding the relatedness of the suspected entity to the event (0..1) */
  entityRelatedness?: CodeableConcept;
  /** Author of the information on the possible cause of the event (0..1) */
  author?: Reference;
}

/**
 * Contributing factors suspected to have increased the probability or severity of the adverse event
 */
export interface AdverseEventContributingFactor {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Item suspected to have increased the probability or severity of the adverse event (1..1) */
  itemReference?: Reference;
  /** Item suspected to have increased the probability or severity of the adverse event (1..1) */
  itemCodeableConcept?: CodeableConcept;
}

/**
 * Preventive actions that contributed to avoiding the adverse event
 */
export interface AdverseEventPreventiveAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Action that contributed to avoiding the adverse event (1..1) */
  itemReference?: Reference;
  /** Action that contributed to avoiding the adverse event (1..1) */
  itemCodeableConcept?: CodeableConcept;
}

/**
 * Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm
 */
export interface AdverseEventMitigatingAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Ameliorating action taken after the adverse event occured in order to reduce the extent of harm (1..1) */
  itemReference?: Reference;
  /** Ameliorating action taken after the adverse event occured in order to reduce the extent of harm (1..1) */
  itemCodeableConcept?: CodeableConcept;
}

/**
 * Supporting information relevant to the event
 */
export interface AdverseEventSupportingInfo {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Subject medical history or document relevant to this adverse event (1..1) */
  itemReference?: Reference;
  /** Subject medical history or document relevant to this adverse event (1..1) */
  itemCodeableConcept?: CodeableConcept;
}
