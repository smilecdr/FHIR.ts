/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.
 */
export interface SubscriptionTopic {
  resourceType: 'SubscriptionTopic';
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
  /** Canonical identifier for this subscription topic, represented as an absolute URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business identifier for subscription topic (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the subscription topic (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this subscription topic (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this subscription topic (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Based on FHIR protocol or definition (0..*) */
  derivedFrom?: Array<string>;
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: Array<Element | null>;
  /** draft | active | retired | unknown (1..1) */
  status?: SubscriptionTopic.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** If for testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date status first applied (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The name of the individual or organization that published the SubscriptionTopic (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the SubscriptionTopic (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Content intends to support these contexts (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction of the SubscriptionTopic (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this SubscriptionTopic is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** When SubscriptionTopic is/was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** Date the Subscription Topic was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** The effective date range for the SubscriptionTopic (0..1) */
  effectivePeriod?: Period;
  /** Definition of a resource-based trigger for the subscription topic (0..*) */
  resourceTrigger?: Array<SubscriptionTopicResourceTrigger>;
  /** Event definitions the SubscriptionTopic (0..*) */
  eventTrigger?: Array<SubscriptionTopicEventTrigger>;
  /** Properties by which a Subscription can filter notifications from the SubscriptionTopic (0..*) */
  canFilterBy?: Array<SubscriptionTopicCanFilterBy>;
  /** Properties for describing the shape of notifications generated by this topic (0..*) */
  notificationShape?: Array<SubscriptionTopicNotificationShape>;
}

export namespace SubscriptionTopic {
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
 * Definition of a resource-based trigger for the subscription topic
 */
export interface SubscriptionTopicResourceTrigger {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Text representation of the resource trigger (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Data Type or Resource (reference to definition) for this trigger definition (1..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;
  /** create | update | delete (0..*) */
  supportedInteraction?: Array<SubscriptionTopicResourceTrigger.SupportedInteractionEnum>;
  /** Id and extensions of the primitive `supportedInteraction`. */
  _supportedInteraction?: Array<Element | null>;
  /** Query based trigger rule (0..1) */
  queryCriteria?: SubscriptionTopicQueryCriteria;
  /** FHIRPath based trigger rule (0..1) */
  fhirPathCriteria?: string;
  /** Id and extensions of the primitive `fhirPathCriteria`. */
  _fhirPathCriteria?: Element;
}

export namespace SubscriptionTopicResourceTrigger {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/interaction-trigger */
  export type SupportedInteractionEnum = 'create' | 'update' | 'delete';
  export const SupportedInteractionEnum = {
    Create: 'create' as SupportedInteractionEnum,
    Update: 'update' as SupportedInteractionEnum,
    Delete: 'delete' as SupportedInteractionEnum,
  };
}

/**
 * Query based trigger rule
 */
export interface SubscriptionTopicQueryCriteria {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Rule applied to previous resource state (0..1) */
  previous?: string;
  /** Id and extensions of the primitive `previous`. */
  _previous?: Element;
  /** test-passes | test-fails (0..1) */
  resultForCreate?: SubscriptionTopicQueryCriteria.ResultForCreateEnum;
  /** Id and extensions of the primitive `resultForCreate`. */
  _resultForCreate?: Element;
  /** Rule applied to current resource state (0..1) */
  current?: string;
  /** Id and extensions of the primitive `current`. */
  _current?: Element;
  /** test-passes | test-fails (0..1) */
  resultForDelete?: SubscriptionTopicQueryCriteria.ResultForDeleteEnum;
  /** Id and extensions of the primitive `resultForDelete`. */
  _resultForDelete?: Element;
  /** Both must be true flag (0..1) */
  requireBoth?: boolean;
  /** Id and extensions of the primitive `requireBoth`. */
  _requireBoth?: Element;
}

export namespace SubscriptionTopicQueryCriteria {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/subscriptiontopic-cr-behavior */
  export type ResultForCreateEnum = 'test-passes' | 'test-fails';
  export const ResultForCreateEnum = {
    TestPasses: 'test-passes' as ResultForCreateEnum,
    TestFails: 'test-fails' as ResultForCreateEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/subscriptiontopic-cr-behavior */
  export type ResultForDeleteEnum = 'test-passes' | 'test-fails';
  export const ResultForDeleteEnum = {
    TestPasses: 'test-passes' as ResultForDeleteEnum,
    TestFails: 'test-fails' as ResultForDeleteEnum,
  };
}

/**
 * Event definitions the SubscriptionTopic
 */
export interface SubscriptionTopicEventTrigger {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Text representation of the event trigger (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Event which can trigger a notification from the SubscriptionTopic (1..1) */
  event: CodeableConcept;
  /** Data Type or Resource (reference to definition) for this trigger definition (1..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;
}

/**
 * Properties by which a Subscription can filter notifications from the SubscriptionTopic
 */
export interface SubscriptionTopicCanFilterBy {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of this filter parameter (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** URL of the triggering Resource that this filter applies to (0..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;
  /** Human-readable and computation-friendly name for a filter parameter usable by subscriptions on this topic, via Subscription.filterBy.filterParameter (1..1) */
  filterParameter?: string;
  /** Id and extensions of the primitive `filterParameter`. */
  _filterParameter?: Element;
  /** Canonical URL for a filterParameter definition (0..1) */
  filterDefinition?: string;
  /** Id and extensions of the primitive `filterDefinition`. */
  _filterDefinition?: Element;
  /** eq | ne | gt | lt | ge | le | sa | eb | ap (0..*) */
  comparator?: Array<SubscriptionTopicCanFilterBy.ComparatorEnum>;
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: Array<Element | null>;
  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate (0..*) */
  modifier?: Array<SubscriptionTopicCanFilterBy.ModifierEnum>;
  /** Id and extensions of the primitive `modifier`. */
  _modifier?: Array<Element | null>;
}

export namespace SubscriptionTopicCanFilterBy {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-comparator */
  export type ComparatorEnum = 'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap';
  export const ComparatorEnum = {
    Eq: 'eq' as ComparatorEnum,
    Ne: 'ne' as ComparatorEnum,
    Gt: 'gt' as ComparatorEnum,
    Lt: 'lt' as ComparatorEnum,
    Ge: 'ge' as ComparatorEnum,
    Le: 'le' as ComparatorEnum,
    Sa: 'sa' as ComparatorEnum,
    Eb: 'eb' as ComparatorEnum,
    Ap: 'ap' as ComparatorEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-modifier-code */
  export type ModifierEnum =
    | 'missing'
    | 'exact'
    | 'contains'
    | 'not'
    | 'text'
    | 'in'
    | 'not-in'
    | 'below'
    | 'above'
    | 'type'
    | 'identifier'
    | 'of-type'
    | 'code-text'
    | 'text-advanced'
    | 'iterate';
  export const ModifierEnum = {
    Missing: 'missing' as ModifierEnum,
    Exact: 'exact' as ModifierEnum,
    Contains: 'contains' as ModifierEnum,
    Not: 'not' as ModifierEnum,
    Text: 'text' as ModifierEnum,
    In: 'in' as ModifierEnum,
    NotIn: 'not-in' as ModifierEnum,
    Below: 'below' as ModifierEnum,
    Above: 'above' as ModifierEnum,
    Type: 'type' as ModifierEnum,
    Identifier: 'identifier' as ModifierEnum,
    OfType: 'of-type' as ModifierEnum,
    CodeText: 'code-text' as ModifierEnum,
    TextAdvanced: 'text-advanced' as ModifierEnum,
    Iterate: 'iterate' as ModifierEnum,
  };
}

/**
 * Properties for describing the shape of notifications generated by this topic
 */
export interface SubscriptionTopicNotificationShape {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** URL of the Resource that is the focus (main) resource in a notification shape (1..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;
  /** Include directives, rooted in the resource for this shape (0..*) */
  include?: Array<string>;
  /** Id and extensions of the primitive `include`. */
  _include?: Array<Element | null>;
  /** Reverse include directives, rooted in the resource for this shape (0..*) */
  revInclude?: Array<string>;
  /** Id and extensions of the primitive `revInclude`. */
  _revInclude?: Array<Element | null>;
}
