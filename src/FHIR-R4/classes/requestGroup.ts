/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Age } from './age';
import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Range } from './range';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { Resource } from './resourceList';
import type { Timing } from './timing';

/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export class RequestGroup {
  resourceType: 'RequestGroup';
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
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: Array<string>;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Array<Element | null>;
  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: Array<string>;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Array<Element | null>;
  /** Fulfills plan, proposal, or order (0..*) */
  basedOn?: Array<Reference>;
  /** Request(s) replaced by this request (0..*) */
  replaces?: Array<Reference>;
  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;
  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  status?: RequestGroup.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: RequestGroup.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** routine | urgent | asap | stat (0..1) */
  priority?: RequestGroup.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** What's being requested/ordered (0..1) */
  code?: CodeableConcept;
  /** Who the request group is about (0..1) */
  subject?: Reference;
  /** Created as part of (0..1) */
  encounter?: Reference;
  /** When the request group was authored (0..1) */
  authoredOn?: Date | string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Device or practitioner that authored the request group (0..1) */
  author?: Reference;
  /** Why the request group is needed (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Why the request group is needed (0..*) */
  reasonReference?: Array<Reference>;
  /** Additional notes about the response (0..*) */
  note?: Array<Annotation>;
  /** Proposed actions, if any (0..*) */
  action?: Array<RequestGroupAction>;
}

export namespace RequestGroup {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-status */
  export type StatusEnum =
    'draft' | 'active' | 'on-hold' | 'revoked' | 'completed' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Revoked: 'revoked' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-intent */
  export type IntentEnum =
    | 'proposal'
    | 'plan'
    | 'directive'
    | 'order'
    | 'original-order'
    | 'reflex-order'
    | 'filler-order'
    | 'instance-order'
    | 'option';
  export const IntentEnum = {
    Proposal: 'proposal' as IntentEnum,
    Plan: 'plan' as IntentEnum,
    Directive: 'directive' as IntentEnum,
    Order: 'order' as IntentEnum,
    OriginalOrder: 'original-order' as IntentEnum,
    ReflexOrder: 'reflex-order' as IntentEnum,
    FillerOrder: 'filler-order' as IntentEnum,
    InstanceOrder: 'instance-order' as IntentEnum,
    Option: 'option' as IntentEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-priority */
  export type PriorityEnum = 'routine' | 'urgent' | 'asap' | 'stat';
  export const PriorityEnum = {
    Routine: 'routine' as PriorityEnum,
    Urgent: 'urgent' as PriorityEnum,
    Asap: 'asap' as PriorityEnum,
    Stat: 'stat' as PriorityEnum,
  };
}

/**
 * Proposed actions, if any
 */
export class RequestGroupAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** User-visible prefix for the action (e.g. 1. or A.) (0..1) */
  prefix?: string;
  /** Id and extensions of the primitive `prefix`. */
  _prefix?: Element;
  /** User-visible title (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Short description of the action (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system (0..1) */
  textEquivalent?: string;
  /** Id and extensions of the primitive `textEquivalent`. */
  _textEquivalent?: Element;
  /** routine | urgent | asap | stat (0..1) */
  priority?: RequestGroupAction.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** Code representing the meaning of the action or sub-actions (0..*) */
  code?: Array<CodeableConcept>;
  /** Supporting documentation for the intended performer of the action (0..*) */
  documentation?: Array<RelatedArtifact>;
  /** Whether or not the action is applicable (0..*) */
  condition?: Array<RequestGroupCondition>;
  /** Relationship to another action (0..*) */
  relatedAction?: Array<RequestGroupRelatedAction>;
  /** When the action should take place (0..1) */
  timingDateTime?: Date | string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** When the action should take place (0..1) */
  timingAge?: Age;
  /** When the action should take place (0..1) */
  timingPeriod?: Period;
  /** When the action should take place (0..1) */
  timingDuration?: Duration;
  /** When the action should take place (0..1) */
  timingRange?: Range;
  /** When the action should take place (0..1) */
  timingTiming?: Timing;
  /** Who should perform the action (0..*) */
  participant?: Array<Reference>;
  /** create | update | remove | fire-event (0..1) */
  type?: CodeableConcept;
  /** visual-group | logical-group | sentence-group (0..1) */
  groupingBehavior?: RequestGroupAction.GroupingBehaviorEnum;
  /** Id and extensions of the primitive `groupingBehavior`. */
  _groupingBehavior?: Element;
  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more (0..1) */
  selectionBehavior?: RequestGroupAction.SelectionBehaviorEnum;
  /** Id and extensions of the primitive `selectionBehavior`. */
  _selectionBehavior?: Element;
  /** must | could | must-unless-documented (0..1) */
  requiredBehavior?: RequestGroupAction.RequiredBehaviorEnum;
  /** Id and extensions of the primitive `requiredBehavior`. */
  _requiredBehavior?: Element;
  /** yes | no (0..1) */
  precheckBehavior?: RequestGroupAction.PrecheckBehaviorEnum;
  /** Id and extensions of the primitive `precheckBehavior`. */
  _precheckBehavior?: Element;
  /** single | multiple (0..1) */
  cardinalityBehavior?: RequestGroupAction.CardinalityBehaviorEnum;
  /** Id and extensions of the primitive `cardinalityBehavior`. */
  _cardinalityBehavior?: Element;
  /** The target of the action (0..1) */
  resource?: Reference;
  /** Sub action (0..*) */
  action?: Array<RequestGroupAction>;
}

export namespace RequestGroupAction {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-priority */
  export type PriorityEnum = 'routine' | 'urgent' | 'asap' | 'stat';
  export const PriorityEnum = {
    Routine: 'routine' as PriorityEnum,
    Urgent: 'urgent' as PriorityEnum,
    Asap: 'asap' as PriorityEnum,
    Stat: 'stat' as PriorityEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-grouping-behavior */
  export type GroupingBehaviorEnum = 'visual-group' | 'logical-group' | 'sentence-group';
  export const GroupingBehaviorEnum = {
    VisualGroup: 'visual-group' as GroupingBehaviorEnum,
    LogicalGroup: 'logical-group' as GroupingBehaviorEnum,
    SentenceGroup: 'sentence-group' as GroupingBehaviorEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-selection-behavior */
  export type SelectionBehaviorEnum =
    'any' | 'all' | 'all-or-none' | 'exactly-one' | 'at-most-one' | 'one-or-more';
  export const SelectionBehaviorEnum = {
    Any: 'any' as SelectionBehaviorEnum,
    All: 'all' as SelectionBehaviorEnum,
    AllOrNone: 'all-or-none' as SelectionBehaviorEnum,
    ExactlyOne: 'exactly-one' as SelectionBehaviorEnum,
    AtMostOne: 'at-most-one' as SelectionBehaviorEnum,
    OneOrMore: 'one-or-more' as SelectionBehaviorEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-required-behavior */
  export type RequiredBehaviorEnum = 'must' | 'could' | 'must-unless-documented';
  export const RequiredBehaviorEnum = {
    Must: 'must' as RequiredBehaviorEnum,
    Could: 'could' as RequiredBehaviorEnum,
    MustUnlessDocumented: 'must-unless-documented' as RequiredBehaviorEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-precheck-behavior */
  export type PrecheckBehaviorEnum = 'yes' | 'no';
  export const PrecheckBehaviorEnum = {
    Yes: 'yes' as PrecheckBehaviorEnum,
    No: 'no' as PrecheckBehaviorEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-cardinality-behavior */
  export type CardinalityBehaviorEnum = 'single' | 'multiple';
  export const CardinalityBehaviorEnum = {
    Single: 'single' as CardinalityBehaviorEnum,
    Multiple: 'multiple' as CardinalityBehaviorEnum,
  };
}

/**
 * Whether or not the action is applicable
 */
export class RequestGroupCondition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** applicability | start | stop (1..1) */
  kind?: RequestGroupCondition.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Boolean-valued expression (0..1) */
  expression?: Expression;
}

export namespace RequestGroupCondition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-condition-kind */
  export type KindEnum = 'applicability' | 'start' | 'stop';
  export const KindEnum = {
    Applicability: 'applicability' as KindEnum,
    Start: 'start' as KindEnum,
    Stop: 'stop' as KindEnum,
  };
}

/**
 * Relationship to another action
 */
export class RequestGroupRelatedAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What action this is related to (1..1) */
  actionId?: string;
  /** Id and extensions of the primitive `actionId`. */
  _actionId?: Element;
  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end (1..1) */
  relationship?: RequestGroupRelatedAction.RelationshipEnum;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;
  /** Time offset for the relationship (0..1) */
  offsetDuration?: Duration;
  /** Time offset for the relationship (0..1) */
  offsetRange?: Range;
}

export namespace RequestGroupRelatedAction {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-relationship-type */
  export type RelationshipEnum =
    | 'before-start'
    | 'before'
    | 'before-end'
    | 'concurrent-with-start'
    | 'concurrent'
    | 'concurrent-with-end'
    | 'after-start'
    | 'after'
    | 'after-end';
  export const RelationshipEnum = {
    BeforeStart: 'before-start' as RelationshipEnum,
    Before: 'before' as RelationshipEnum,
    BeforeEnd: 'before-end' as RelationshipEnum,
    ConcurrentWithStart: 'concurrent-with-start' as RelationshipEnum,
    Concurrent: 'concurrent' as RelationshipEnum,
    ConcurrentWithEnd: 'concurrent-with-end' as RelationshipEnum,
    AfterStart: 'after-start' as RelationshipEnum,
    After: 'after' as RelationshipEnum,
    AfterEnd: 'after-end' as RelationshipEnum,
  };
}
