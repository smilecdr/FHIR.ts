/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for CommunicationRequest Resource
 */
export class CommunicationRequest {
  resourceType: 'CommunicationRequest';
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
  /** Unique identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Fulfills plan or proposal (0..*) */
  basedOn?: Array<Reference>;
  /** Request(s) replaced by this request (0..*) */
  replaces?: Array<Reference>;
  /** Composite request this is part of (0..1) */
  groupIdentifier?: Identifier;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown (1..1) */
  status?: CommunicationRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Message category (0..*) */
  category?: Array<CodeableConcept>;
  /** Message urgency (0..1) */
  priority?: CommunicationRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** A channel of communication (0..*) */
  medium?: Array<CodeableConcept>;
  /** Focus of message (0..1) */
  subject?: Reference;
  /** Message recipient (0..*) */
  recipient?: Array<Reference>;
  /** Focal resources (0..*) */
  topic?: Array<Reference>;
  /** Encounter or episode leading to message (0..1) */
  context?: Reference;
  /** Message payload (0..*) */
  payload?: Array<CommunicationRequestPayload>;
  /** When scheduled (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When scheduled (0..1) */
  occurrencePeriod?: Period;
  /** When request transitioned to being actionable (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Message sender (0..1) */
  sender?: Reference;
  /** Who/what is requesting service (0..1) */
  requester?: CommunicationRequestRequester;
  /** Why is communication needed? (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Why is communication needed? (0..*) */
  reasonReference?: Array<Reference>;
  /** Comments made about communication request (0..*) */
  note?: Array<Annotation>;
}

export namespace CommunicationRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-status */
  export type StatusEnum =
    'draft' | 'active' | 'suspended' | 'cancelled' | 'completed' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Suspended: 'suspended' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
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
export class CommunicationRequestPayload {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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

/**
 * Who/what is requesting service
 */
export class CommunicationRequestRequester {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Individual making the request (1..1) */
  agent: Reference;
  /** Organization agent is acting for (0..1) */
  onBehalfOf?: Reference;
}
