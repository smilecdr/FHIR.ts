/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Coding } from './coding';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Subscription Resource
 */
export class Subscription {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** requested | active | error | off (1..1) */
  status?: Subscription.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Contact details for source (e.g. troubleshooting) (0..*) */
  contact?: Array<ContactPoint>;
  /** When to automatically delete the subscription (0..1) */
  end?: string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;
  /** Description of why this subscription was created (1..1) */
  reason?: string;
  /** Id and extensions of the primitive `reason`. */
  _reason?: Element;
  /** Rule for server push criteria (1..1) */
  criteria?: string;
  /** Id and extensions of the primitive `criteria`. */
  _criteria?: Element;
  /** Latest error note (0..1) */
  error?: string;
  /** Id and extensions of the primitive `error`. */
  _error?: Element;
  /** The channel on which to report matches to the criteria (1..1) */
  channel: SubscriptionChannel;
  /** A tag to add to matching resources (0..*) */
  tag?: Array<Coding>;
}

export namespace Subscription {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/subscription-status */
  export type StatusEnum = 'requested' | 'active' | 'error' | 'off';
  export const StatusEnum = {
    Requested: 'requested' as StatusEnum,
    Active: 'active' as StatusEnum,
    Error: 'error' as StatusEnum,
    Off: 'off' as StatusEnum,
  };
}

/**
 * The channel on which to report matches to the criteria
 */
export class SubscriptionChannel {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** rest-hook | websocket | email | sms | message (1..1) */
  type?: SubscriptionChannel.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Where the channel points to (0..1) */
  endpoint?: string;
  /** Id and extensions of the primitive `endpoint`. */
  _endpoint?: Element;
  /** Mimetype to send, or omit for no payload (0..1) */
  payload?: string;
  /** Id and extensions of the primitive `payload`. */
  _payload?: Element;
  /** Usage depends on the channel type (0..*) */
  header?: Array<string>;
  /** Id and extensions of the primitive `header`. */
  _header?: Array<Element | null>;
}

export namespace SubscriptionChannel {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/subscription-channel-type */
  export type TypeEnum = 'rest-hook' | 'websocket' | 'email' | 'sms' | 'message';
  export const TypeEnum = {
    RestHook: 'rest-hook' as TypeEnum,
    Websocket: 'websocket' as TypeEnum,
    Email: 'email' as TypeEnum,
    Sms: 'sms' as TypeEnum,
    Message: 'message' as TypeEnum,
  };
}
