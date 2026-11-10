/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Age } from './age';
import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { DataRequirement } from './dataRequirement';
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
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';

/**
 * A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export interface RequestOrchestration {
  resourceType: 'RequestOrchestration';
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
  status?: RequestOrchestration.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: RequestOrchestration.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** routine | urgent | asap | stat (0..1) */
  priority?: RequestOrchestration.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** What's being requested/ordered (0..1) */
  code?: CodeableConcept;
  /** Who the request orchestration is about (0..1) */
  subject?: Reference;
  /** Created as part of (0..1) */
  encounter?: Reference;
  /** When the request orchestration was authored (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Device or practitioner that authored the request orchestration (0..1) */
  author?: Reference;
  /** Why the request orchestration is needed (0..*) */
  reason?: Array<CodeableReference>;
  /** What goals (0..*) */
  goal?: Array<Reference>;
  /** Additional notes about the response (0..*) */
  note?: Array<Annotation>;
  /** Proposed actions, if any (0..*) */
  action?: Array<RequestOrchestrationAction>;
}

export namespace RequestOrchestration {
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
export interface RequestOrchestrationAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Pointer to specific item from the PlanDefinition (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
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
  priority?: RequestOrchestrationAction.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** Code representing the meaning of the action or sub-actions (0..*) */
  code?: Array<CodeableConcept>;
  /** Supporting documentation for the intended performer of the action (0..*) */
  documentation?: Array<RelatedArtifact>;
  /** What goals (0..*) */
  goal?: Array<Reference>;
  /** Whether or not the action is applicable (0..*) */
  condition?: Array<RequestOrchestrationCondition>;
  /** Input data requirements (0..*) */
  input?: Array<RequestOrchestrationInput>;
  /** Output data definition (0..*) */
  output?: Array<RequestOrchestrationOutput>;
  /** Relationship to another action (0..*) */
  relatedAction?: Array<RequestOrchestrationRelatedAction>;
  /** When the action should take place (0..1) */
  timingDateTime?: string;
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
  /** Where it should happen (0..1) */
  location?: CodeableReference;
  /** Who should perform the action (0..*) */
  participant?: Array<RequestOrchestrationParticipant>;
  /** create | update | remove | fire-event (0..1) */
  type?: CodeableConcept;
  /** visual-group | logical-group | sentence-group (0..1) */
  groupingBehavior?: RequestOrchestrationAction.GroupingBehaviorEnum;
  /** Id and extensions of the primitive `groupingBehavior`. */
  _groupingBehavior?: Element;
  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more (0..1) */
  selectionBehavior?: RequestOrchestrationAction.SelectionBehaviorEnum;
  /** Id and extensions of the primitive `selectionBehavior`. */
  _selectionBehavior?: Element;
  /** must | could | must-unless-documented (0..1) */
  requiredBehavior?: RequestOrchestrationAction.RequiredBehaviorEnum;
  /** Id and extensions of the primitive `requiredBehavior`. */
  _requiredBehavior?: Element;
  /** yes | no (0..1) */
  precheckBehavior?: RequestOrchestrationAction.PrecheckBehaviorEnum;
  /** Id and extensions of the primitive `precheckBehavior`. */
  _precheckBehavior?: Element;
  /** single | multiple (0..1) */
  cardinalityBehavior?: RequestOrchestrationAction.CardinalityBehaviorEnum;
  /** Id and extensions of the primitive `cardinalityBehavior`. */
  _cardinalityBehavior?: Element;
  /** The target of the action (0..1) */
  resource?: Reference;
  /** Description of the activity to be performed (0..1) */
  definitionCanonical?: string;
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: Element;
  /** Description of the activity to be performed (0..1) */
  definitionUri?: string;
  /** Id and extensions of the primitive `definitionUri`. */
  _definitionUri?: Element;
  /** Transform to apply the template (0..1) */
  transform?: string;
  /** Id and extensions of the primitive `transform`. */
  _transform?: Element;
  /** Dynamic aspects of the definition (0..*) */
  dynamicValue?: Array<RequestOrchestrationDynamicValue>;
  /** Sub action (0..*) */
  action?: Array<RequestOrchestrationAction>;
}

export namespace RequestOrchestrationAction {
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
export interface RequestOrchestrationCondition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** applicability | start | stop (1..1) */
  kind?: RequestOrchestrationCondition.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Boolean-valued expression (0..1) */
  expression?: Expression;
}

export namespace RequestOrchestrationCondition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-condition-kind */
  export type KindEnum = 'applicability' | 'start' | 'stop';
  export const KindEnum = {
    Applicability: 'applicability' as KindEnum,
    Start: 'start' as KindEnum,
    Stop: 'stop' as KindEnum,
  };
}

/**
 * Input data requirements
 */
export interface RequestOrchestrationInput {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** User-visible title (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** What data is provided (0..1) */
  requirement?: DataRequirement;
  /** What data is provided (0..1) */
  relatedData?: string;
  /** Id and extensions of the primitive `relatedData`. */
  _relatedData?: Element;
}

/**
 * Output data definition
 */
export interface RequestOrchestrationOutput {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** User-visible title (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** What data is provided (0..1) */
  requirement?: DataRequirement;
  /** What data is provided (0..1) */
  relatedData?: string;
  /** Id and extensions of the primitive `relatedData`. */
  _relatedData?: Element;
}

/**
 * Relationship to another action
 */
export interface RequestOrchestrationRelatedAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What action this is related to (1..1) */
  targetId?: string;
  /** Id and extensions of the primitive `targetId`. */
  _targetId?: Element;
  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end (1..1) */
  relationship?: RequestOrchestrationRelatedAction.RelationshipEnum;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;
  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end (0..1) */
  endRelationship?: RequestOrchestrationRelatedAction.EndRelationshipEnum;
  /** Id and extensions of the primitive `endRelationship`. */
  _endRelationship?: Element;
  /** Time offset for the relationship (0..1) */
  offsetDuration?: Duration;
  /** Time offset for the relationship (0..1) */
  offsetRange?: Range;
}

export namespace RequestOrchestrationRelatedAction {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-relationship-type */
  export type RelationshipEnum =
    | 'before'
    | 'before-start'
    | 'before-end'
    | 'concurrent'
    | 'concurrent-with-start'
    | 'concurrent-with-end'
    | 'after'
    | 'after-start'
    | 'after-end';
  export const RelationshipEnum = {
    Before: 'before' as RelationshipEnum,
    BeforeStart: 'before-start' as RelationshipEnum,
    BeforeEnd: 'before-end' as RelationshipEnum,
    Concurrent: 'concurrent' as RelationshipEnum,
    ConcurrentWithStart: 'concurrent-with-start' as RelationshipEnum,
    ConcurrentWithEnd: 'concurrent-with-end' as RelationshipEnum,
    After: 'after' as RelationshipEnum,
    AfterStart: 'after-start' as RelationshipEnum,
    AfterEnd: 'after-end' as RelationshipEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-relationship-type */
  export type EndRelationshipEnum =
    | 'before'
    | 'before-start'
    | 'before-end'
    | 'concurrent'
    | 'concurrent-with-start'
    | 'concurrent-with-end'
    | 'after'
    | 'after-start'
    | 'after-end';
  export const EndRelationshipEnum = {
    Before: 'before' as EndRelationshipEnum,
    BeforeStart: 'before-start' as EndRelationshipEnum,
    BeforeEnd: 'before-end' as EndRelationshipEnum,
    Concurrent: 'concurrent' as EndRelationshipEnum,
    ConcurrentWithStart: 'concurrent-with-start' as EndRelationshipEnum,
    ConcurrentWithEnd: 'concurrent-with-end' as EndRelationshipEnum,
    After: 'after' as EndRelationshipEnum,
    AfterStart: 'after-start' as EndRelationshipEnum,
    AfterEnd: 'after-end' as EndRelationshipEnum,
  };
}

/**
 * Who should perform the action
 */
export interface RequestOrchestrationParticipant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson (0..1) */
  type?: RequestOrchestrationParticipant.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Who or what can participate (0..1) */
  typeCanonical?: string;
  /** Id and extensions of the primitive `typeCanonical`. */
  _typeCanonical?: Element;
  /** Who or what can participate (0..1) */
  typeReference?: Reference;
  /** E.g. Nurse, Surgeon, Parent, etc (0..1) */
  role?: CodeableConcept;
  /** E.g. Author, Reviewer, Witness, etc (0..1) */
  function?: CodeableConcept;
  /** Who/what is participating? (0..1) */
  actorCanonical?: string;
  /** Id and extensions of the primitive `actorCanonical`. */
  _actorCanonical?: Element;
  /** Who/what is participating? (0..1) */
  actorReference?: Reference;
}

export namespace RequestOrchestrationParticipant {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-participant-type */
  export type TypeEnum =
    | 'careteam'
    | 'device'
    | 'group'
    | 'healthcareservice'
    | 'location'
    | 'organization'
    | 'patient'
    | 'practitioner'
    | 'practitionerrole'
    | 'relatedperson';
  export const TypeEnum = {
    Careteam: 'careteam' as TypeEnum,
    Device: 'device' as TypeEnum,
    Group: 'group' as TypeEnum,
    Healthcareservice: 'healthcareservice' as TypeEnum,
    Location: 'location' as TypeEnum,
    Organization: 'organization' as TypeEnum,
    Patient: 'patient' as TypeEnum,
    Practitioner: 'practitioner' as TypeEnum,
    Practitionerrole: 'practitionerrole' as TypeEnum,
    Relatedperson: 'relatedperson' as TypeEnum,
  };
}

/**
 * Dynamic aspects of the definition
 */
export interface RequestOrchestrationDynamicValue {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The path to the element to be set dynamically (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** An expression that provides the dynamic value for the customization (0..1) */
  expression?: Expression;
}
