/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';

/**
 * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
 */
export interface ServiceRequest {
  resourceType: 'ServiceRequest';
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
  /** Identifiers assigned to this order (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: Array<string>;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Array<Element | null>;
  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: Array<string>;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Array<Element | null>;
  /** What request fulfills (0..*) */
  basedOn?: Array<Reference>;
  /** What request replaces (0..*) */
  replaces?: Array<Reference>;
  /** Composite Request ID (0..1) */
  requisition?: Identifier;
  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  status?: ServiceRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** proposal | plan | directive | order + (1..1) */
  intent?: ServiceRequest.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** Classification of service (0..*) */
  category?: Array<CodeableConcept>;
  /** routine | urgent | asap | stat (0..1) */
  priority?: ServiceRequest.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** True if service/procedure should not be performed (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;
  /** What is being requested/ordered (0..1) */
  code?: CodeableReference;
  /** Additional order information (0..*) */
  orderDetail?: Array<ServiceRequestOrderDetail>;
  /** Service amount (0..1) */
  quantityQuantity?: Quantity;
  /** Service amount (0..1) */
  quantityRatio?: Ratio;
  /** Service amount (0..1) */
  quantityRange?: Range;
  /** Individual or Entity the service is ordered for (1..1) */
  subject: Reference;
  /** What the service request is about, when it is not about the subject of record (0..*) */
  focus?: Array<Reference>;
  /** Encounter in which the request was created (0..1) */
  encounter?: Reference;
  /** When service should occur (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When service should occur (0..1) */
  occurrencePeriod?: Period;
  /** When service should occur (0..1) */
  occurrenceTiming?: Timing;
  /** Preconditions for service (0..1) */
  asNeededBoolean?: boolean;
  /** Id and extensions of the primitive `asNeededBoolean`. */
  _asNeededBoolean?: Element;
  /** Preconditions for service (0..1) */
  asNeededCodeableConcept?: CodeableConcept;
  /** Date request signed (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Who/what is requesting service (0..1) */
  requester?: Reference;
  /** Performer role (0..1) */
  performerType?: CodeableConcept;
  /** Requested performer (0..*) */
  performer?: Array<Reference>;
  /** Requested location (0..*) */
  location?: Array<CodeableReference>;
  /** Explanation/Justification for procedure or service (0..*) */
  reason?: Array<CodeableReference>;
  /** Associated insurance coverage (0..*) */
  insurance?: Array<Reference>;
  /** Additional clinical information (0..*) */
  supportingInfo?: Array<CodeableReference>;
  /** Procedure Samples (0..*) */
  specimen?: Array<Reference>;
  /** Coded location on Body (0..*) */
  bodySite?: Array<CodeableConcept>;
  /** BodyStructure-based location on the body (0..1) */
  bodyStructure?: Reference;
  /** Comments (0..*) */
  note?: Array<Annotation>;
  /** Patient or consumer-oriented instructions (0..*) */
  patientInstruction?: Array<ServiceRequestPatientInstruction>;
  /** Request provenance (0..*) */
  relevantHistory?: Array<Reference>;
}

export namespace ServiceRequest {
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
 * Additional order information
 */
export interface ServiceRequestOrderDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The context of the order details by reference (0..1) */
  parameterFocus?: CodeableReference;
  /** The parameter details for the service being requested (1..*) */
  parameter: Array<ServiceRequestParameter>;
}

/**
 * The parameter details for the service being requested
 */
export interface ServiceRequestParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The detail of the order being requested (1..1) */
  code: CodeableConcept;
  /** The value for the order detail (1..1) */
  valueQuantity?: Quantity;
  /** The value for the order detail (1..1) */
  valueRatio?: Ratio;
  /** The value for the order detail (1..1) */
  valueRange?: Range;
  /** The value for the order detail (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** The value for the order detail (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** The value for the order detail (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** The value for the order detail (1..1) */
  valuePeriod?: Period;
}

/**
 * Patient or consumer-oriented instructions
 */
export interface ServiceRequestPatientInstruction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Patient or consumer-oriented instructions (0..1) */
  instructionMarkdown?: string;
  /** Id and extensions of the primitive `instructionMarkdown`. */
  _instructionMarkdown?: Element;
  /** Patient or consumer-oriented instructions (0..1) */
  instructionReference?: Reference;
}
