/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for AuditEvent Resource
 */
export class AuditEvent {
  resourceType: 'AuditEvent';
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
  /** Type/identifier of event (1..1) */
  type: Coding;
  /** More specific type/id for the event (0..*) */
  subtype?: Array<Coding>;
  /** Type of action performed during the event (0..1) */
  action?: AuditEvent.ActionEnum;
  /** Id and extensions of the primitive `action`. */
  _action?: Element;
  /** Time when the event occurred on source (1..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;
  /** Whether the event succeeded or failed (0..1) */
  outcome?: AuditEvent.OutcomeEnum;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;
  /** Description of the event outcome (0..1) */
  outcomeDesc?: string;
  /** Id and extensions of the primitive `outcomeDesc`. */
  _outcomeDesc?: Element;
  /** The purposeOfUse of the event (0..*) */
  purposeOfEvent?: Array<CodeableConcept>;
  /** Actor involved in the event (1..*) */
  agent: Array<AuditEventAgent>;
  /** Audit Event Reporter (1..1) */
  source: AuditEventSource;
  /** Data or objects used (0..*) */
  entity?: Array<AuditEventEntity>;
}

export namespace AuditEvent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/audit-event-action */
  export type ActionEnum = 'C' | 'R' | 'U' | 'D' | 'E';
  export const ActionEnum = {
    C: 'C' as ActionEnum,
    R: 'R' as ActionEnum,
    U: 'U' as ActionEnum,
    D: 'D' as ActionEnum,
    E: 'E' as ActionEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/audit-event-outcome */
  export type OutcomeEnum = '0' | '4' | '8' | '12';
  export const OutcomeEnum = {
    _0: '0' as OutcomeEnum,
    _4: '4' as OutcomeEnum,
    _8: '8' as OutcomeEnum,
    _12: '12' as OutcomeEnum,
  };
}

/**
 * Actor involved in the event
 */
export class AuditEventAgent {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Agent role in the event (0..*) */
  role?: Array<CodeableConcept>;
  /** Direct reference to resource (0..1) */
  reference?: Reference;
  /** Unique identifier for the user (0..1) */
  userId?: Identifier;
  /** Alternative User id e.g. authentication (0..1) */
  altId?: string;
  /** Id and extensions of the primitive `altId`. */
  _altId?: Element;
  /** Human-meaningful name for the agent (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Whether user is initiator (1..1) */
  requestor?: boolean;
  /** Id and extensions of the primitive `requestor`. */
  _requestor?: Element;
  /** Where (0..1) */
  location?: Reference;
  /** Policy that authorized event (0..*) */
  policy?: Array<string>;
  /** Id and extensions of the primitive `policy`. */
  _policy?: Array<Element | null>;
  /** Type of media (0..1) */
  media?: Coding;
  /** Logical network location for application activity (0..1) */
  network?: AuditEventNetwork;
  /** Reason given for this user (0..*) */
  purposeOfUse?: Array<CodeableConcept>;
}

/**
 * Logical network location for application activity
 */
export class AuditEventNetwork {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier for the network access point of the user device (0..1) */
  address?: string;
  /** Id and extensions of the primitive `address`. */
  _address?: Element;
  /** The type of network access point (0..1) */
  type?: AuditEventNetwork.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
}

export namespace AuditEventNetwork {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/network-type */
  export type TypeEnum = '1' | '2' | '3' | '4' | '5';
  export const TypeEnum = {
    _1: '1' as TypeEnum,
    _2: '2' as TypeEnum,
    _3: '3' as TypeEnum,
    _4: '4' as TypeEnum,
    _5: '5' as TypeEnum,
  };
}

/**
 * Audit Event Reporter
 */
export class AuditEventSource {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Logical source location within the enterprise (0..1) */
  site?: string;
  /** Id and extensions of the primitive `site`. */
  _site?: Element;
  /** The identity of source detecting the event (1..1) */
  identifier: Identifier;
  /** The type of source where event originated (0..*) */
  type?: Array<Coding>;
}

/**
 * Data or objects used
 */
export class AuditEventEntity {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Specific instance of object (0..1) */
  identifier?: Identifier;
  /** Specific instance of resource (0..1) */
  reference?: Reference;
  /** Type of entity involved (0..1) */
  type?: Coding;
  /** What role the entity played (0..1) */
  role?: Coding;
  /** Life-cycle stage for the entity (0..1) */
  lifecycle?: Coding;
  /** Security labels on the entity (0..*) */
  securityLabel?: Array<Coding>;
  /** Descriptor for entity (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Descriptive text (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Query parameters (0..1) */
  query?: string;
  /** Id and extensions of the primitive `query`. */
  _query?: Element;
  /** Additional Information about the entity (0..*) */
  detail?: Array<AuditEventDetail>;
}

/**
 * Additional Information about the entity
 */
export class AuditEventDetail {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of the property (1..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Property value (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}
