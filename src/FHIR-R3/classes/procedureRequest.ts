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
 * Base StructureDefinition for ProcedureRequest Resource
 */
export class ProcedureRequest {
  resourceType: 'ProcedureRequest';
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
  /** Identifiers assigned to this order (0..*) */
  identifier?: Array<Identifier>;
  /** Protocol or definition (0..*) */
  definition?: Array<Reference>;
  /** What request fulfills (0..*) */
  basedOn?: Array<Reference>;
  /** What request replaces (0..*) */
  replaces?: Array<Reference>;
  /** Composite Request ID (0..1) */
  requisition?: Identifier;
  /** draft | active | suspended | completed | entered-in-error | cancelled (1..1) */
  status?: ProcedureRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** proposal | plan | order + (1..1) */
  intent?: ProcedureRequest.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** routine | urgent | asap | stat (0..1) */
  priority?: ProcedureRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** True if procedure should not be performed (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;
  /** Classification of procedure (0..*) */
  category?: Array<CodeableConcept>;
  /** What is being requested/ordered (1..1) */
  code: CodeableConcept;
  /** Individual the service is ordered for (1..1) */
  subject: Reference;
  /** Encounter or Episode during which request was created (0..1) */
  context?: Reference;
  /** When procedure should occur (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When procedure should occur (0..1) */
  occurrencePeriod?: Period;
  /** When procedure should occur (0..1) */
  occurrenceTiming?: Timing;
  /** Preconditions for procedure or diagnostic (0..1) */
  asNeededBoolean?: boolean;
  /** Id and extensions of the primitive `asNeededBoolean`. */
  _asNeededBoolean?: Element;
  /** Preconditions for procedure or diagnostic (0..1) */
  asNeededCodeableConcept?: CodeableConcept;
  /** Date request signed (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Who/what is requesting procedure or diagnostic (0..1) */
  requester?: ProcedureRequestRequester;
  /** Performer role (0..1) */
  performerType?: CodeableConcept;
  /** Requested perfomer (0..1) */
  performer?: Reference;
  /** Explanation/Justification for test (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Explanation/Justification for test (0..*) */
  reasonReference?: Array<Reference>;
  /** Additional clinical information (0..*) */
  supportingInfo?: Array<Reference>;
  /** Procedure Samples (0..*) */
  specimen?: Array<Reference>;
  /** Location on Body (0..*) */
  bodySite?: Array<CodeableConcept>;
  /** Comments (0..*) */
  note?: Array<Annotation>;
  /** Request provenance (0..*) */
  relevantHistory?: Array<Reference>;
}

export namespace ProcedureRequest {
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-intent */
  export type IntentEnum =
    | 'proposal'
    | 'plan'
    | 'order'
    | 'original-order'
    | 'reflex-order'
    | 'filler-order'
    | 'instance-order'
    | 'option';
  export const IntentEnum = {
    Proposal: 'proposal' as IntentEnum,
    Plan: 'plan' as IntentEnum,
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
 * Who/what is requesting procedure or diagnostic
 */
export class ProcedureRequestRequester {
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
