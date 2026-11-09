/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Contributor } from './contributor';
import type { DataRequirement } from './dataRequirement';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { Resource } from './resourceList';
import type { Timing } from './timing';
import type { TriggerDefinition } from './triggerDefinition';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for PlanDefinition Resource
 */
export class PlanDefinition {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Logical URI to reference this plan definition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the plan definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the plan definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this plan definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this plan definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** order-set | protocol | eca-rule (0..1) */
  type?: CodeableConcept;
  /** draft | active | retired | unknown (1..1) */
  status?: PlanDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date this was last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Natural language description of the plan definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Why this plan definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Describes the clinical usage of the asset (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;
  /** When the plan definition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the plan definition was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the plan definition is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for plan definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: Array<CodeableConcept>;
  /** A content contributor (0..*) */
  contributor?: Array<Contributor>;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Related artifacts for the asset (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Logic used by the plan definition (0..*) */
  library?: Array<Reference>;
  /** What the plan is trying to accomplish (0..*) */
  goal?: Array<PlanDefinitionGoal>;
  /** Action defined by the plan (0..*) */
  action?: Array<PlanDefinitionAction>;
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
export class PlanDefinitionGoal {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** E.g. Treatment, dietary, behavioral, etc (0..1) */
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
export class PlanDefinitionTarget {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The parameter whose value is to be tracked (0..1) */
  measure?: CodeableConcept;
  /** The target value to be achieved (0..1) */
  detailQuantity?: Quantity;
  /** The target value to be achieved (0..1) */
  detailRange?: Range;
  /** The target value to be achieved (0..1) */
  detailCodeableConcept?: CodeableConcept;
  /** Reach goal within (0..1) */
  due?: Duration;
}

/**
 * Action defined by the plan
 */
export class PlanDefinitionAction {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** User-visible label for the action (e.g. 1. or A.) (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;
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
  /** Code representing the meaning of the action or sub-actions (0..*) */
  code?: Array<CodeableConcept>;
  /** Why the action should be performed (0..*) */
  reason?: Array<CodeableConcept>;
  /** Supporting documentation for the intended performer of the action (0..*) */
  documentation?: Array<RelatedArtifact>;
  /** What goals this action supports (0..*) */
  goalId?: Array<string>;
  /** Id and extensions of the primitive `goalId`. */
  _goalId?: Array<Element | null>;
  /** When the action should be triggered (0..*) */
  triggerDefinition?: Array<TriggerDefinition>;
  /** Whether or not the action is applicable (0..*) */
  condition?: Array<PlanDefinitionCondition>;
  /** Input data requirements (0..*) */
  input?: Array<DataRequirement>;
  /** Output data definition (0..*) */
  output?: Array<DataRequirement>;
  /** Relationship to another action (0..*) */
  relatedAction?: Array<PlanDefinitionRelatedAction>;
  /** When the action should take place (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** When the action should take place (0..1) */
  timingPeriod?: Period;
  /** When the action should take place (0..1) */
  timingDuration?: Duration;
  /** When the action should take place (0..1) */
  timingRange?: Range;
  /** When the action should take place (0..1) */
  timingTiming?: Timing;
  /** Who should participate in the action (0..*) */
  participant?: Array<PlanDefinitionParticipant>;
  /** create | update | remove | fire-event (0..1) */
  type?: Coding;
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
  definition?: Reference;
  /** Transform to apply the template (0..1) */
  transform?: Reference;
  /** Dynamic aspects of the definition (0..*) */
  dynamicValue?: Array<PlanDefinitionDynamicValue>;
  /** A sub-action (0..*) */
  action?: Array<PlanDefinitionAction>;
}

export namespace PlanDefinitionAction {
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
export class PlanDefinitionCondition {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** applicability | start | stop (1..1) */
  kind?: PlanDefinitionCondition.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Natural language description of the condition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Language of the expression (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Boolean-valued expression (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
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
 * Relationship to another action
 */
export class PlanDefinitionRelatedAction {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** What action is this related to (1..1) */
  actionId?: string;
  /** Id and extensions of the primitive `actionId`. */
  _actionId?: Element;
  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end (1..1) */
  relationship?: PlanDefinitionRelatedAction.RelationshipEnum;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;
  /** Time offset for the relationship (0..1) */
  offsetDuration?: Duration;
  /** Time offset for the relationship (0..1) */
  offsetRange?: Range;
}

export namespace PlanDefinitionRelatedAction {
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

/**
 * Who should participate in the action
 */
export class PlanDefinitionParticipant {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** patient | practitioner | related-person (1..1) */
  type?: PlanDefinitionParticipant.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** E.g. Nurse, Surgeon, Parent, etc (0..1) */
  role?: CodeableConcept;
}

export namespace PlanDefinitionParticipant {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-participant-type */
  export type TypeEnum = 'patient' | 'practitioner' | 'related-person';
  export const TypeEnum = {
    Patient: 'patient' as TypeEnum,
    Practitioner: 'practitioner' as TypeEnum,
    RelatedPerson: 'related-person' as TypeEnum,
  };
}

/**
 * Dynamic aspects of the definition
 */
export class PlanDefinitionDynamicValue {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Natural language description of the dynamic value (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The path to the element to be set dynamically (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** Language of the expression (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** An expression that provides the dynamic value for the customization (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
}
