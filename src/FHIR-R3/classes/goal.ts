/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Goal Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External Ids for this goal (0..*) */
  identifier?: Array<Identifier>;
  /** proposed | accepted | planned | in-progress | on-target | ahead-of-target | behind-target | sustaining | achieved | on-hold | cancelled | entered-in-error | rejected (1..1) */
  status?: Goal.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** E.g. Treatment, dietary, behavioral, etc. (0..*) */
  category?: Array<CodeableConcept>;
  /** high-priority | medium-priority | low-priority (0..1) */
  priority?: CodeableConcept;
  /** Code or text describing goal (1..1) */
  description: CodeableConcept;
  /** Who this goal is intended for (0..1) */
  subject?: Reference;
  /** When goal pursuit begins (0..1) */
  startDate?: string;
  /** Id and extensions of the primitive `startDate`. */
  _startDate?: Element;
  /** When goal pursuit begins (0..1) */
  startCodeableConcept?: CodeableConcept;
  /** Target outcome for the goal (0..1) */
  target?: GoalTarget;
  /** When goal status took effect (0..1) */
  statusDate?: string;
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
  export type StatusEnum =
    | 'proposed'
    | 'accepted'
    | 'planned'
    | 'in-progress'
    | 'on-target'
    | 'ahead-of-target'
    | 'behind-target'
    | 'sustaining'
    | 'achieved'
    | 'on-hold'
    | 'cancelled'
    | 'entered-in-error'
    | 'rejected';
  export const StatusEnum = {
    Proposed: 'proposed' as StatusEnum,
    Accepted: 'accepted' as StatusEnum,
    Planned: 'planned' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    OnTarget: 'on-target' as StatusEnum,
    AheadOfTarget: 'ahead-of-target' as StatusEnum,
    BehindTarget: 'behind-target' as StatusEnum,
    Sustaining: 'sustaining' as StatusEnum,
    Achieved: 'achieved' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Rejected: 'rejected' as StatusEnum,
  };
}

/**
 * Target outcome for the goal
 */
export class GoalTarget {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The parameter whose value is being tracked (0..1) */
  measure?: CodeableConcept;
  /** The target value to be achieved (0..1) */
  detailQuantity?: Quantity;
  /** The target value to be achieved (0..1) */
  detailRange?: Range;
  /** The target value to be achieved (0..1) */
  detailCodeableConcept?: CodeableConcept;
  /** Reach goal on or before (0..1) */
  dueDate?: string;
  /** Id and extensions of the primitive `dueDate`. */
  _dueDate?: Element;
  /** Reach goal on or before (0..1) */
  dueDuration?: Duration;
}
