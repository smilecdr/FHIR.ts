/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export class Goal {
  resourceType: 'Goal';
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
  /** External Ids for this goal (0..*) */
  identifier?: Array<Identifier>;
  /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected (1..1) */
  lifecycleStatus?: Goal.LifecycleStatusEnum;
  /** Id and extensions of the primitive `lifecycleStatus`. */
  _lifecycleStatus?: Element;
  /** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable (0..1) */
  achievementStatus?: CodeableConcept;
  /** E.g. Treatment, dietary, behavioral, etc. (0..*) */
  category?: Array<CodeableConcept>;
  /** high-priority | medium-priority | low-priority (0..1) */
  priority?: CodeableConcept;
  /** Code or text describing goal (1..1) */
  description: CodeableConcept;
  /** Who this goal is intended for (1..1) */
  subject: Reference;
  /** When goal pursuit begins (0..1) */
  startDate?: Date | string;
  /** Id and extensions of the primitive `startDate`. */
  _startDate?: Element;
  /** When goal pursuit begins (0..1) */
  startCodeableConcept?: CodeableConcept;
  /** Target outcome for the goal (0..*) */
  target?: Array<GoalTarget>;
  /** When goal status took effect (0..1) */
  statusDate?: Date | string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;
  /** Reason for current status (0..1) */
  statusReason?: string;
  /** Id and extensions of the primitive `statusReason`. */
  _statusReason?: Element;
  /** Who's responsible for creating Goal? (0..1) */
  expressedBy?: Reference;
  /** Issues addressed by this goal (0..*) */
  addresses?: Array<Reference>;
  /** Comments about the goal (0..*) */
  note?: Array<Annotation>;
  /** What result was achieved regarding the goal? (0..*) */
  outcomeCode?: Array<CodeableConcept>;
  /** Observation that resulted from goal (0..*) */
  outcomeReference?: Array<Reference>;
}

export namespace Goal {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/goal-status */
  export type LifecycleStatusEnum =
    | 'proposed'
    | 'planned'
    | 'accepted'
    | 'active'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'entered-in-error'
    | 'rejected';
  export const LifecycleStatusEnum = {
    Proposed: 'proposed' as LifecycleStatusEnum,
    Planned: 'planned' as LifecycleStatusEnum,
    Accepted: 'accepted' as LifecycleStatusEnum,
    Active: 'active' as LifecycleStatusEnum,
    OnHold: 'on-hold' as LifecycleStatusEnum,
    Completed: 'completed' as LifecycleStatusEnum,
    Cancelled: 'cancelled' as LifecycleStatusEnum,
    EnteredInError: 'entered-in-error' as LifecycleStatusEnum,
    Rejected: 'rejected' as LifecycleStatusEnum,
  };
}

/**
 * Target outcome for the goal
 */
export class GoalTarget {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The parameter whose value is being tracked (0..1) */
  measure?: CodeableConcept;
  /** The target value to be achieved (0..1) */
  detailQuantity?: Quantity;
  /** The target value to be achieved (0..1) */
  detailRange?: Range;
  /** The target value to be achieved (0..1) */
  detailCodeableConcept?: CodeableConcept;
  /** The target value to be achieved (0..1) */
  detailString?: string;
  /** Id and extensions of the primitive `detailString`. */
  _detailString?: Element;
  /** The target value to be achieved (0..1) */
  detailBoolean?: boolean;
  /** Id and extensions of the primitive `detailBoolean`. */
  _detailBoolean?: Element;
  /** The target value to be achieved (0..1) */
  detailInteger?: number;
  /** Id and extensions of the primitive `detailInteger`. */
  _detailInteger?: Element;
  /** The target value to be achieved (0..1) */
  detailRatio?: Ratio;
  /** Reach goal on or before (0..1) */
  dueDate?: Date | string;
  /** Id and extensions of the primitive `dueDate`. */
  _dueDate?: Element;
  /** Reach goal on or before (0..1) */
  dueDuration?: Duration;
}
