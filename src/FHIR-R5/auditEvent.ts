/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.
 */
export interface AuditEvent {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type/identifier of event (0..*) */
  category?: Array<CodeableConcept>;
  /** Specific type of event (1..1) */
  code: CodeableConcept;
  /** Type of action performed during the event (0..1) */
  action?: AuditEvent.ActionEnum;
  /** Id and extensions of the primitive `action`. */
  _action?: Element;
  /** emergency | alert | critical | error | warning | notice | informational | debug (0..1) */
  severity?: AuditEvent.SeverityEnum;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;
  /** When the activity occurred (0..1) */
  occurredPeriod?: Period;
  /** When the activity occurred (0..1) */
  occurredDateTime?: string;
  /** Id and extensions of the primitive `occurredDateTime`. */
  _occurredDateTime?: Element;
  /** Time when the event was recorded (1..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;
  /** Whether the event succeeded or failed (0..1) */
  outcome?: AuditEventOutcome;
  /** Authorization related to the event (0..*) */
  authorization?: Array<CodeableConcept>;
  /** Workflow authorization within which this event occurred (0..*) */
  basedOn?: Array<Reference>;
  /** The patient is the subject of the data used/created/updated/deleted during the activity (0..1) */
  patient?: Reference;
  /** Encounter within which this event occurred or which the event is tightly associated (0..1) */
  encounter?: Reference;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/audit-event-severity */
  export type SeverityEnum =
    'emergency' | 'alert' | 'critical' | 'error' | 'warning' | 'notice' | 'informational' | 'debug';
  export const SeverityEnum = {
    Emergency: 'emergency' as SeverityEnum,
    Alert: 'alert' as SeverityEnum,
    Critical: 'critical' as SeverityEnum,
    Error: 'error' as SeverityEnum,
    Warning: 'warning' as SeverityEnum,
    Notice: 'notice' as SeverityEnum,
    Informational: 'informational' as SeverityEnum,
    Debug: 'debug' as SeverityEnum,
  };
}

/**
 * Whether the event succeeded or failed
 */
export interface AuditEventOutcome {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether the event succeeded or failed (1..1) */
  code: Coding;
  /** Additional outcome detail (0..*) */
  detail?: Array<CodeableConcept>;
}

/**
 * Actor involved in the event
 */
export interface AuditEventAgent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** How agent participated (0..1) */
  type?: CodeableConcept;
  /** Agent role in the event (0..*) */
  role?: Array<CodeableConcept>;
  /** Identifier of who (1..1) */
  who: Reference;
  /** Whether user is initiator (0..1) */
  requestor?: boolean;
  /** Id and extensions of the primitive `requestor`. */
  _requestor?: Element;
  /** The agent location when the event occurred (0..1) */
  location?: Reference;
  /** Policy that authorized the agent participation in the event (0..*) */
  policy?: Array<string>;
  /** Id and extensions of the primitive `policy`. */
  _policy?: Array<Element | null>;
  /** This agent network location for the activity (0..1) */
  networkReference?: Reference;
  /** This agent network location for the activity (0..1) */
  networkUri?: string;
  /** Id and extensions of the primitive `networkUri`. */
  _networkUri?: Element;
  /** This agent network location for the activity (0..1) */
  networkString?: string;
  /** Id and extensions of the primitive `networkString`. */
  _networkString?: Element;
  /** Allowable authorization for this agent (0..*) */
  authorization?: Array<CodeableConcept>;
}

/**
 * Audit Event Reporter
 */
export interface AuditEventSource {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Logical source location within the enterprise (0..1) */
  site?: Reference;
  /** The identity of source detecting the event (1..1) */
  observer: Reference;
  /** The type of source where event originated (0..*) */
  type?: Array<CodeableConcept>;
}

/**
 * Data or objects used
 */
export interface AuditEventEntity {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Specific instance of resource (0..1) */
  what?: Reference;
  /** What role the entity played (0..1) */
  role?: CodeableConcept;
  /** Security labels on the entity (0..*) */
  securityLabel?: Array<CodeableConcept>;
  /** Query parameters (0..1) */
  query?: string;
  /** Id and extensions of the primitive `query`. */
  _query?: Element;
  /** Additional Information about the entity (0..*) */
  detail?: Array<AuditEventDetail>;
  /** Entity is attributed to this agent (0..*) */
  agent?: Array<AuditEventAgent>;
}

/**
 * Additional Information about the entity
 */
export interface AuditEventDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of the property (1..1) */
  type: CodeableConcept;
  /** Property value (1..1) */
  valueQuantity?: Quantity;
  /** Property value (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Property value (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Property value (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Property value (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Property value (1..1) */
  valueRange?: Range;
  /** Property value (1..1) */
  valueRatio?: Ratio;
  /** Property value (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Property value (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Property value (1..1) */
  valuePeriod?: Period;
  /** Property value (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
}
