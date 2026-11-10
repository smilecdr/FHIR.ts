/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { Timing } from './timing';

/**
 * Base StructureDefinition for DeviceRequest Resource
 */
export class DeviceRequest {
  resourceType: 'DeviceRequest';
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
  /** External Request identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Protocol or definition (0..*) */
  definition?: Array<Reference>;
  /** What request fulfills (0..*) */
  basedOn?: Array<Reference>;
  /** What request replaces (0..*) */
  priorRequest?: Array<Reference>;
  /** Identifier of composite request (0..1) */
  groupIdentifier?: Identifier;
  /** draft | active | suspended | completed | entered-in-error | cancelled (0..1) */
  status?: DeviceRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** proposal | plan | original-order | encoded | reflex-order (1..1) */
  intent: CodeableConcept;
  /** Indicates how quickly the {{title}} should be addressed with respect to other requests (0..1) */
  priority?: DeviceRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** Device requested (1..1) */
  codeReference?: Reference;
  /** Device requested (1..1) */
  codeCodeableConcept?: CodeableConcept;
  /** Focus of request (1..1) */
  subject: Reference;
  /** Encounter or Episode motivating request (0..1) */
  context?: Reference;
  /** Desired time or schedule for use (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** Desired time or schedule for use (0..1) */
  occurrencePeriod?: Period;
  /** Desired time or schedule for use (0..1) */
  occurrenceTiming?: Timing;
  /** When recorded (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Who/what is requesting diagnostics (0..1) */
  requester?: DeviceRequestRequester;
  /** Fille role (0..1) */
  performerType?: CodeableConcept;
  /** Requested Filler (0..1) */
  performer?: Reference;
  /** Coded Reason for request (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Linked Reason for request (0..*) */
  reasonReference?: Array<Reference>;
  /** Additional clinical information (0..*) */
  supportingInfo?: Array<Reference>;
  /** Notes or comments (0..*) */
  note?: Array<Annotation>;
  /** Request provenance (0..*) */
  relevantHistory?: Array<Reference>;
}

export namespace DeviceRequest {
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
 * Who/what is requesting diagnostics
 */
export class DeviceRequestRequester {
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
