/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Age } from './age';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { DataRequirement } from './dataRequirement';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';
import type { TriggerDefinition } from './triggerDefinition';
import type { UsageContext } from './usageContext';

/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications.
 */
export interface PlanDefinition {
  resourceType: 'PlanDefinition';
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
  /** Canonical identifier for this plan definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the plan definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the plan definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this plan definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this plan definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Subordinate title of the plan definition (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;
  /** order-set | clinical-protocol | eca-rule | workflow-definition (0..1) */
  type?: CodeableConcept;
  /** draft | active | retired | unknown (1..1) */
  status?: PlanDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Type of individual the plan definition is focused on (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the plan definition is focused on (0..1) */
  subjectReference?: Reference;
  /** Type of individual the plan definition is focused on (0..1) */
  subjectCanonical?: string;
  /** Id and extensions of the primitive `subjectCanonical`. */
  _subjectCanonical?: Element;
  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the plan definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for plan definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this plan definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Describes the clinical usage of the plan (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** When the plan definition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the plan definition was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the plan definition is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment (0..*) */
  topic?: Array<CodeableConcept>;
  /** Who authored the content (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the content (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the content (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the content (0..*) */
  endorser?: Array<ContactDetail>;
  /** Additional documentation, citations (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Logic used by the plan definition (0..*) */
  library?: Array<string>;
  /** Id and extensions of the primitive `library`. */
  _library?: Array<Element | null>;
  /** What the plan is trying to accomplish (0..*) */
  goal?: Array<PlanDefinitionGoal>;
  /** Actors within the plan (0..*) */
  actor?: Array<PlanDefinitionActor>;
  /** Action defined by the plan (0..*) */
  action?: Array<PlanDefinitionAction>;
  /** Preconditions for service (0..1) */
  asNeededBoolean?: boolean;
  /** Id and extensions of the primitive `asNeededBoolean`. */
  _asNeededBoolean?: Element;
  /** Preconditions for service (0..1) */
  asNeededCodeableConcept?: CodeableConcept;
}

export namespace PlanDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * What the plan is trying to accomplish
 */
export interface PlanDefinitionGoal {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** E.g. Treatment, dietary, behavioral (0..1) */
  category?: CodeableConcept;
  /** Code or text describing the goal (1..1) */
  description: CodeableConcept;
  /** high-priority | medium-priority | low-priority (0..1) */
  priority?: CodeableConcept;
  /** When goal pursuit begins (0..1) */
  start?: CodeableConcept;
  /** What does the goal address (0..*) */
  addresses?: Array<CodeableConcept>;
  /** Supporting documentation for the goal (0..*) */
  documentation?: Array<RelatedArtifact>;
  /** Target outcome for the goal (0..*) */
  target?: Array<PlanDefinitionTarget>;
}

/**
 * Target outcome for the goal
 */
export interface PlanDefinitionTarget {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The parameter whose value is to be tracked (0..1) */
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
  /** Reach goal within (0..1) */
  due?: Duration;
}

/**
 * Actors within the plan
 */
export interface PlanDefinitionActor {
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
  /** Describes the actor (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Who or what can be this actor (1..*) */
  option: Array<PlanDefinitionOption>;
}

/**
 * Who or what can be this actor
 */
export interface PlanDefinitionOption {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson (0..1) */
  type?: PlanDefinitionOption.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Who or what can participate (0..1) */
  typeCanonical?: string;
  /** Id and extensions of the primitive `typeCanonical`. */
  _typeCanonical?: Element;
  /** Who or what can participate (0..1) */
  typeReference?: Reference;
  /** E.g. Nurse, Surgeon, Parent (0..1) */
  role?: CodeableConcept;
}

export namespace PlanDefinitionOption {
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
 * Action defined by the plan
 */
export interface PlanDefinitionAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique id for the action in the PlanDefinition (0..1) */
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
  /** Brief description of the action (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system (0..1) */
  textEquivalent?: string;
  /** Id and extensions of the primitive `textEquivalent`. */
  _textEquivalent?: Element;
  /** routine | urgent | asap | stat (0..1) */
  priority?: PlanDefinitionAction.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** Code representing the meaning of the action or sub-actions (0..1) */
  code?: CodeableConcept;
  /** Why the action should be performed (0..*) */
  reason?: Array<CodeableConcept>;
  /** Supporting documentation for the intended performer of the action (0..*) */
  documentation?: Array<RelatedArtifact>;
  /** What goals this action supports (0..*) */
  goalId?: Array<string>;
  /** Id and extensions of the primitive `goalId`. */
  _goalId?: Array<Element | null>;
  /** Type of individual the action is focused on (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the action is focused on (0..1) */
  subjectReference?: Reference;
  /** Type of individual the action is focused on (0..1) */
  subjectCanonical?: string;
  /** Id and extensions of the primitive `subjectCanonical`. */
  _subjectCanonical?: Element;
  /** When the action should be triggered (0..*) */
  trigger?: Array<TriggerDefinition>;
  /** Whether or not the action is applicable (0..*) */
  condition?: Array<PlanDefinitionCondition>;
  /** Input data requirements (0..*) */
  input?: Array<PlanDefinitionInput>;
  /** Output data definition (0..*) */
  output?: Array<PlanDefinitionOutput>;
  /** Relationship to another action (0..*) */
  relatedAction?: Array<PlanDefinitionRelatedAction>;
  /** When the action should take place (0..1) */
  timingAge?: Age;
  /** When the action should take place (0..1) */
  timingDuration?: Duration;
  /** When the action should take place (0..1) */
  timingRange?: Range;
  /** When the action should take place (0..1) */
  timingTiming?: Timing;
  /** Where it should happen (0..1) */
  location?: CodeableReference;
  /** Who should participate in the action (0..*) */
  participant?: Array<PlanDefinitionParticipant>;
  /** create | update | remove | fire-event (0..1) */
  type?: CodeableConcept;
  /** visual-group | logical-group | sentence-group (0..1) */
  groupingBehavior?: PlanDefinitionAction.GroupingBehaviorEnum;
  /** Id and extensions of the primitive `groupingBehavior`. */
  _groupingBehavior?: Element;
  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more (0..1) */
  selectionBehavior?: PlanDefinitionAction.SelectionBehaviorEnum;
  /** Id and extensions of the primitive `selectionBehavior`. */
  _selectionBehavior?: Element;
  /** must | could | must-unless-documented (0..1) */
  requiredBehavior?: PlanDefinitionAction.RequiredBehaviorEnum;
  /** Id and extensions of the primitive `requiredBehavior`. */
  _requiredBehavior?: Element;
  /** yes | no (0..1) */
  precheckBehavior?: PlanDefinitionAction.PrecheckBehaviorEnum;
  /** Id and extensions of the primitive `precheckBehavior`. */
  _precheckBehavior?: Element;
  /** single | multiple (0..1) */
  cardinalityBehavior?: PlanDefinitionAction.CardinalityBehaviorEnum;
  /** Id and extensions of the primitive `cardinalityBehavior`. */
  _cardinalityBehavior?: Element;
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
  dynamicValue?: Array<PlanDefinitionDynamicValue>;
  /** A sub-action (0..*) */
  action?: Array<PlanDefinitionAction>;
}

export namespace PlanDefinitionAction {
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
export interface PlanDefinitionCondition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** applicability | start | stop (1..1) */
  kind?: PlanDefinitionCondition.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Boolean-valued expression (0..1) */
  expression?: Expression;
}

export namespace PlanDefinitionCondition {
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
export interface PlanDefinitionInput {
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
export interface PlanDefinitionOutput {
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
export interface PlanDefinitionRelatedAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What action is this related to (1..1) */
  targetId?: string;
  /** Id and extensions of the primitive `targetId`. */
  _targetId?: Element;
  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end (1..1) */
  relationship?: PlanDefinitionRelatedAction.RelationshipEnum;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;
  /** before | before-start | before-end | concurrent | concurrent-with-start | concurrent-with-end | after | after-start | after-end (0..1) */
  endRelationship?: PlanDefinitionRelatedAction.EndRelationshipEnum;
  /** Id and extensions of the primitive `endRelationship`. */
  _endRelationship?: Element;
  /** Time offset for the relationship (0..1) */
  offsetDuration?: Duration;
  /** Time offset for the relationship (0..1) */
  offsetRange?: Range;
}

export namespace PlanDefinitionRelatedAction {
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
 * Who should participate in the action
 */
export interface PlanDefinitionParticipant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What actor (0..1) */
  actorId?: string;
  /** Id and extensions of the primitive `actorId`. */
  _actorId?: Element;
  /** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson (0..1) */
  type?: PlanDefinitionParticipant.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Who or what can participate (0..1) */
  typeCanonical?: string;
  /** Id and extensions of the primitive `typeCanonical`. */
  _typeCanonical?: Element;
  /** Who or what can participate (0..1) */
  typeReference?: Reference;
  /** E.g. Nurse, Surgeon, Parent (0..1) */
  role?: CodeableConcept;
  /** E.g. Author, Reviewer, Witness, etc (0..1) */
  function?: CodeableConcept;
}

export namespace PlanDefinitionParticipant {
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
export interface PlanDefinitionDynamicValue {
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
