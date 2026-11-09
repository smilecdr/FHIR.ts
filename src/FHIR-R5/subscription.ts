/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Coding } from './coding';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * The subscription resource describes a particular client's request to be notified about a SubscriptionTopic.
 */
export interface Subscription {
  resourceType: 'Subscription';
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
  /** Additional identifiers (business identifier) (0..*) */
  identifier?: Array<Identifier>;
  /** Human readable name for this subscription (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** requested | active | error | off | entered-in-error (1..1) */
  status?: Subscription.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reference to the subscription topic being subscribed to (1..1) */
  topic?: string;
  /** Id and extensions of the primitive `topic`. */
  _topic?: Element;
  /** Contact details for source (e.g. troubleshooting) (0..*) */
  contact?: Array<ContactPoint>;
  /** When to automatically delete the subscription (0..1) */
  end?: string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;
  /** Entity responsible for Subscription changes (0..1) */
  managingEntity?: Reference;
  /** Description of why this subscription was created (0..1) */
  reason?: string;
  /** Id and extensions of the primitive `reason`. */
  _reason?: Element;
  /** Criteria for narrowing the subscription topic stream (0..*) */
  filterBy?: Array<SubscriptionFilterBy>;
  /** Channel type for notifications (1..1) */
  channelType: Coding;
  /** Where the channel points to (0..1) */
  endpoint?: string;
  /** Id and extensions of the primitive `endpoint`. */
  _endpoint?: Element;
  /** Channel type (0..*) */
  parameter?: Array<SubscriptionParameter>;
  /** Interval in seconds to send 'heartbeat' notification (0..1) */
  heartbeatPeriod?: number;
  /** Id and extensions of the primitive `heartbeatPeriod`. */
  _heartbeatPeriod?: Element;
  /** Timeout in seconds to attempt notification delivery (0..1) */
  timeout?: number;
  /** Id and extensions of the primitive `timeout`. */
  _timeout?: Element;
  /** MIME type to send, or omit for no payload (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;
  /** empty | id-only | full-resource (0..1) */
  content?: Subscription.ContentEnum;
  /** Id and extensions of the primitive `content`. */
  _content?: Element;
  /** Maximum number of events that can be combined in a single notification (0..1) */
  maxCount?: number;
  /** Id and extensions of the primitive `maxCount`. */
  _maxCount?: Element;
}

export namespace Subscription {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/subscription-status */
  export type StatusEnum = 'requested' | 'active' | 'error' | 'off' | 'entered-in-error';
  export const StatusEnum = {
    Requested: 'requested' as StatusEnum,
    Active: 'active' as StatusEnum,
    Error: 'error' as StatusEnum,
    Off: 'off' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/subscription-payload-content */
  export type ContentEnum = 'empty' | 'id-only' | 'full-resource';
  export const ContentEnum = {
    Empty: 'empty' as ContentEnum,
    IdOnly: 'id-only' as ContentEnum,
    FullResource: 'full-resource' as ContentEnum,
  };
}

/**
 * Criteria for narrowing the subscription topic stream
 */
export interface SubscriptionFilterBy {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Allowed Resource (reference to definition) for this Subscription filter (0..1) */
  resourceType?: string;
  /** Id and extensions of the primitive `resourceType`. */
  _resourceType?: Element;
  /** Filter label defined in SubscriptionTopic (1..1) */
  filterParameter?: string;
  /** Id and extensions of the primitive `filterParameter`. */
  _filterParameter?: Element;
  /** eq | ne | gt | lt | ge | le | sa | eb | ap (0..1) */
  comparator?: SubscriptionFilterBy.ComparatorEnum;
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: Element;
  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate (0..1) */
  modifier?: SubscriptionFilterBy.ModifierEnum;
  /** Id and extensions of the primitive `modifier`. */
  _modifier?: Element;
  /** Literal value or resource path (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

export namespace SubscriptionFilterBy {
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
 * Channel type
 */
export interface SubscriptionParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name (key) of the parameter (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Value of the parameter to use or pass through (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}
