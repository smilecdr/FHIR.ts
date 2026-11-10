/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export interface CommunicationRequest {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
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
  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  status?: CommunicationRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;
  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: CommunicationRequest.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** Message category (0..*) */
  category?: Array<CodeableConcept>;
  /** routine | urgent | asap | stat (0..1) */
  priority?: CommunicationRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** True if request is prohibiting action (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;
  /** A channel of communication (0..*) */
  medium?: Array<CodeableConcept>;
  /** Focus of message (0..1) */
  subject?: Reference;
  /** Resources that pertain to this communication request (0..*) */
  about?: Array<Reference>;
  /** The Encounter during which this CommunicationRequest was created (0..1) */
  encounter?: Reference;
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
  /** Who asks for the information to be shared (0..1) */
  requester?: Reference;
  /** Who to share the information with (0..*) */
  recipient?: Array<Reference>;
  /** Who should share the information (0..*) */
  informationProvider?: Array<Reference>;
  /** Why is communication needed? (0..*) */
  reason?: Array<CodeableReference>;
  /** Comments made about communication request (0..*) */
  note?: Array<Annotation>;
}

export namespace CommunicationRequest {
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
 * Message payload
 */
export interface CommunicationRequestPayload {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Message part content (1..1) */
  contentAttachment?: Attachment;
  /** Message part content (1..1) */
  contentReference?: Reference;
  /** Message part content (1..1) */
  contentCodeableConcept?: CodeableConcept;
}
