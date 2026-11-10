/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export class Communication {
  resourceType: 'Communication';
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
  /** Unique identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: Array<string>;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Array<Element | null>;
  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: Array<string>;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Array<Element | null>;
  /** Request fulfilled by this communication (0..*) */
  basedOn?: Array<Reference>;
  /** Part of this action (0..*) */
  partOf?: Array<Reference>;
  /** Reply to (0..*) */
  inResponseTo?: Array<Reference>;
  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  status?: Communication.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;
  /** Message category (0..*) */
  category?: Array<CodeableConcept>;
  /** routine | urgent | asap | stat (0..1) */
  priority?: Communication.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** A channel of communication (0..*) */
  medium?: Array<CodeableConcept>;
  /** Focus of message (0..1) */
  subject?: Reference;
  /** Description of the purpose/content (0..1) */
  topic?: CodeableConcept;
  /** Resources that pertain to this communication (0..*) */
  about?: Array<Reference>;
  /** Encounter created as part of (0..1) */
  encounter?: Reference;
  /** When sent (0..1) */
  sent?: Date | string;
  /** Id and extensions of the primitive `sent`. */
  _sent?: Element;
  /** When received (0..1) */
  received?: Date | string;
  /** Id and extensions of the primitive `received`. */
  _received?: Element;
  /** Message recipient (0..*) */
  recipient?: Array<Reference>;
  /** Message sender (0..1) */
  sender?: Reference;
  /** Indication for message (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Why was communication done? (0..*) */
  reasonReference?: Array<Reference>;
  /** Message payload (0..*) */
  payload?: Array<CommunicationPayload>;
  /** Comments made about the communication (0..*) */
  note?: Array<Annotation>;
}

export namespace Communication {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-status */
  export type StatusEnum =
    | 'preparation'
    | 'in-progress'
    | 'not-done'
    | 'on-hold'
    | 'stopped'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    NotDone: 'not-done' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
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
 * Message payload
 */
export class CommunicationPayload {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Message part content (1..1) */
  contentString?: string;
  /** Id and extensions of the primitive `contentString`. */
  _contentString?: Element;
  /** Message part content (1..1) */
  contentAttachment?: Attachment;
  /** Message part content (1..1) */
  contentReference?: Reference;
}
