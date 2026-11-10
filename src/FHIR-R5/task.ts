/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Age } from './age';
import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { Availability } from './availability';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { ContactPoint } from './contactPoint';
import type { Count } from './count';
import type { DataRequirement } from './dataRequirement';
import type { Distance } from './distance';
import type { Dosage } from './dosage';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Expression } from './expression';
import type { ExtendedContactDetail } from './extendedContactDetail';
import type { Extension } from './extension';
import type { HumanName } from './humanName';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { ParameterDefinition } from './parameterDefinition';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { RatioRange } from './ratioRange';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { SampledData } from './sampledData';
import type { Signature } from './signature';
import type { Timing } from './timing';
import type { TriggerDefinition } from './triggerDefinition';
import type { UsageContext } from './usageContext';

/**
 * A task to be performed.
 */
export interface Task {
  resourceType: 'Task';
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
  /** Task Instance Identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Formal definition of task (0..1) */
  instantiatesCanonical?: string;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Element;
  /** Formal definition of task (0..1) */
  instantiatesUri?: string;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Element;
  /** Request fulfilled by this task (0..*) */
  basedOn?: Array<Reference>;
  /** Requisition or grouper id (0..1) */
  groupIdentifier?: Identifier;
  /** Composite task (0..*) */
  partOf?: Array<Reference>;
  /** draft | requested | received | accepted | + (1..1) */
  status?: Task.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: CodeableReference;
  /** E.g. "Specimen collected", "IV prepped" (0..1) */
  businessStatus?: CodeableConcept;
  /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: Task.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** routine | urgent | asap | stat (0..1) */
  priority?: Task.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** True if Task is prohibiting action (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;
  /** Task Type (0..1) */
  code?: CodeableConcept;
  /** Human-readable explanation of task (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** What task is acting on (0..1) */
  focus?: Reference;
  /** Beneficiary of the Task (0..1) */
  for?: Reference;
  /** Healthcare event during which this task originated (0..1) */
  encounter?: Reference;
  /** When the task should be performed (0..1) */
  requestedPeriod?: Period;
  /** Start and end time of execution (0..1) */
  executionPeriod?: Period;
  /** Task Creation Date (0..1) */
  authoredOn?: string;
  /** Id and extensions of the primitive `authoredOn`. */
  _authoredOn?: Element;
  /** Task Last Modified Date (0..1) */
  lastModified?: string;
  /** Id and extensions of the primitive `lastModified`. */
  _lastModified?: Element;
  /** Who is asking for task to be done (0..1) */
  requester?: Reference;
  /** Who should perform Task (0..*) */
  requestedPerformer?: Array<CodeableReference>;
  /** Responsible individual (0..1) */
  owner?: Reference;
  /** Who or what performed the task (0..*) */
  performer?: Array<TaskPerformer>;
  /** Where task occurs (0..1) */
  location?: Reference;
  /** Why task is needed (0..*) */
  reason?: Array<CodeableReference>;
  /** Associated insurance coverage (0..*) */
  insurance?: Array<Reference>;
  /** Comments made about the task (0..*) */
  note?: Array<Annotation>;
  /** Key events in history of the Task (0..*) */
  relevantHistory?: Array<Reference>;
  /** Constraints on fulfillment tasks (0..1) */
  restriction?: TaskRestriction;
  /** Information used to perform task (0..*) */
  input?: Array<TaskInput>;
  /** Information produced as part of task (0..*) */
  output?: Array<TaskOutput>;
}

export namespace Task {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/task-status */
  export type StatusEnum =
    | 'draft'
    | 'requested'
    | 'received'
    | 'accepted'
    | 'rejected'
    | 'ready'
    | 'cancelled'
    | 'in-progress'
    | 'on-hold'
    | 'failed'
    | 'completed'
    | 'entered-in-error';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Requested: 'requested' as StatusEnum,
    Received: 'received' as StatusEnum,
    Accepted: 'accepted' as StatusEnum,
    Rejected: 'rejected' as StatusEnum,
    Ready: 'ready' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Failed: 'failed' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/task-intent */
  export type IntentEnum =
    | 'unknown'
    | 'proposal'
    | 'plan'
    | 'order'
    | 'original-order'
    | 'reflex-order'
    | 'filler-order'
    | 'instance-order'
    | 'option';
  export const IntentEnum = {
    Unknown: 'unknown' as IntentEnum,
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
 * Who or what performed the task
 */
export interface TaskPerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of performance (0..1) */
  function?: CodeableConcept;
  /** Who performed the task (1..1) */
  actor: Reference;
}

/**
 * Constraints on fulfillment tasks
 */
export interface TaskRestriction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** How many times to repeat (0..1) */
  repetitions?: number;
  /** Id and extensions of the primitive `repetitions`. */
  _repetitions?: Element;
  /** When fulfillment is sought (0..1) */
  period?: Period;
  /** For whom is fulfillment sought? (0..*) */
  recipient?: Array<Reference>;
}

/**
 * Information used to perform task
 */
export interface TaskInput {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for the input (1..1) */
  type: CodeableConcept;
  /** Content to use in performing the task (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Content to use in performing the task (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Content to use in performing the task (1..1) */
  valueCanonical?: string;
  /** Id and extensions of the primitive `valueCanonical`. */
  _valueCanonical?: Element;
  /** Content to use in performing the task (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Content to use in performing the task (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Content to use in performing the task (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Content to use in performing the task (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Content to use in performing the task (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Content to use in performing the task (1..1) */
  valueInstant?: string;
  /** Id and extensions of the primitive `valueInstant`. */
  _valueInstant?: Element;
  /** Content to use in performing the task (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Content to use in performing the task (1..1) */
  valueInteger64?: string;
  /** Id and extensions of the primitive `valueInteger64`. */
  _valueInteger64?: Element;
  /** Content to use in performing the task (1..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** Content to use in performing the task (1..1) */
  valueOid?: string;
  /** Id and extensions of the primitive `valueOid`. */
  _valueOid?: Element;
  /** Content to use in performing the task (1..1) */
  valuePositiveInt?: number;
  /** Id and extensions of the primitive `valuePositiveInt`. */
  _valuePositiveInt?: Element;
  /** Content to use in performing the task (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Content to use in performing the task (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Content to use in performing the task (1..1) */
  valueUnsignedInt?: number;
  /** Id and extensions of the primitive `valueUnsignedInt`. */
  _valueUnsignedInt?: Element;
  /** Content to use in performing the task (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Content to use in performing the task (1..1) */
  valueUrl?: string;
  /** Id and extensions of the primitive `valueUrl`. */
  _valueUrl?: Element;
  /** Content to use in performing the task (1..1) */
  valueUuid?: string;
  /** Id and extensions of the primitive `valueUuid`. */
  _valueUuid?: Element;
  /** Content to use in performing the task (1..1) */
  valueAddress?: Address;
  /** Content to use in performing the task (1..1) */
  valueAge?: Age;
  /** Content to use in performing the task (1..1) */
  valueAnnotation?: Annotation;
  /** Content to use in performing the task (1..1) */
  valueAttachment?: Attachment;
  /** Content to use in performing the task (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Content to use in performing the task (1..1) */
  valueCodeableReference?: CodeableReference;
  /** Content to use in performing the task (1..1) */
  valueCoding?: Coding;
  /** Content to use in performing the task (1..1) */
  valueContactPoint?: ContactPoint;
  /** Content to use in performing the task (1..1) */
  valueCount?: Count;
  /** Content to use in performing the task (1..1) */
  valueDistance?: Distance;
  /** Content to use in performing the task (1..1) */
  valueDuration?: Duration;
  /** Content to use in performing the task (1..1) */
  valueHumanName?: HumanName;
  /** Content to use in performing the task (1..1) */
  valueIdentifier?: Identifier;
  /** Content to use in performing the task (1..1) */
  valueMoney?: Money;
  /** Content to use in performing the task (1..1) */
  valuePeriod?: Period;
  /** Content to use in performing the task (1..1) */
  valueQuantity?: Quantity;
  /** Content to use in performing the task (1..1) */
  valueRange?: Range;
  /** Content to use in performing the task (1..1) */
  valueRatio?: Ratio;
  /** Content to use in performing the task (1..1) */
  valueRatioRange?: RatioRange;
  /** Content to use in performing the task (1..1) */
  valueReference?: Reference;
  /** Content to use in performing the task (1..1) */
  valueSampledData?: SampledData;
  /** Content to use in performing the task (1..1) */
  valueSignature?: Signature;
  /** Content to use in performing the task (1..1) */
  valueTiming?: Timing;
  /** Content to use in performing the task (1..1) */
  valueContactDetail?: ContactDetail;
  /** Content to use in performing the task (1..1) */
  valueDataRequirement?: DataRequirement;
  /** Content to use in performing the task (1..1) */
  valueExpression?: Expression;
  /** Content to use in performing the task (1..1) */
  valueParameterDefinition?: ParameterDefinition;
  /** Content to use in performing the task (1..1) */
  valueRelatedArtifact?: RelatedArtifact;
  /** Content to use in performing the task (1..1) */
  valueTriggerDefinition?: TriggerDefinition;
  /** Content to use in performing the task (1..1) */
  valueUsageContext?: UsageContext;
  /** Content to use in performing the task (1..1) */
  valueAvailability?: Availability;
  /** Content to use in performing the task (1..1) */
  valueExtendedContactDetail?: ExtendedContactDetail;
  /** Content to use in performing the task (1..1) */
  valueDosage?: Dosage;
  /** Content to use in performing the task (1..1) */
  valueMeta?: Meta;
}

/**
 * Information produced as part of task
 */
export interface TaskOutput {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for output (1..1) */
  type: CodeableConcept;
  /** Result of output (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Result of output (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Result of output (1..1) */
  valueCanonical?: string;
  /** Id and extensions of the primitive `valueCanonical`. */
  _valueCanonical?: Element;
  /** Result of output (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Result of output (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Result of output (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Result of output (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Result of output (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Result of output (1..1) */
  valueInstant?: string;
  /** Id and extensions of the primitive `valueInstant`. */
  _valueInstant?: Element;
  /** Result of output (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Result of output (1..1) */
  valueInteger64?: string;
  /** Id and extensions of the primitive `valueInteger64`. */
  _valueInteger64?: Element;
  /** Result of output (1..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** Result of output (1..1) */
  valueOid?: string;
  /** Id and extensions of the primitive `valueOid`. */
  _valueOid?: Element;
  /** Result of output (1..1) */
  valuePositiveInt?: number;
  /** Id and extensions of the primitive `valuePositiveInt`. */
  _valuePositiveInt?: Element;
  /** Result of output (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Result of output (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Result of output (1..1) */
  valueUnsignedInt?: number;
  /** Id and extensions of the primitive `valueUnsignedInt`. */
  _valueUnsignedInt?: Element;
  /** Result of output (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Result of output (1..1) */
  valueUrl?: string;
  /** Id and extensions of the primitive `valueUrl`. */
  _valueUrl?: Element;
  /** Result of output (1..1) */
  valueUuid?: string;
  /** Id and extensions of the primitive `valueUuid`. */
  _valueUuid?: Element;
  /** Result of output (1..1) */
  valueAddress?: Address;
  /** Result of output (1..1) */
  valueAge?: Age;
  /** Result of output (1..1) */
  valueAnnotation?: Annotation;
  /** Result of output (1..1) */
  valueAttachment?: Attachment;
  /** Result of output (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Result of output (1..1) */
  valueCodeableReference?: CodeableReference;
  /** Result of output (1..1) */
  valueCoding?: Coding;
  /** Result of output (1..1) */
  valueContactPoint?: ContactPoint;
  /** Result of output (1..1) */
  valueCount?: Count;
  /** Result of output (1..1) */
  valueDistance?: Distance;
  /** Result of output (1..1) */
  valueDuration?: Duration;
  /** Result of output (1..1) */
  valueHumanName?: HumanName;
  /** Result of output (1..1) */
  valueIdentifier?: Identifier;
  /** Result of output (1..1) */
  valueMoney?: Money;
  /** Result of output (1..1) */
  valuePeriod?: Period;
  /** Result of output (1..1) */
  valueQuantity?: Quantity;
  /** Result of output (1..1) */
  valueRange?: Range;
  /** Result of output (1..1) */
  valueRatio?: Ratio;
  /** Result of output (1..1) */
  valueRatioRange?: RatioRange;
  /** Result of output (1..1) */
  valueReference?: Reference;
  /** Result of output (1..1) */
  valueSampledData?: SampledData;
  /** Result of output (1..1) */
  valueSignature?: Signature;
  /** Result of output (1..1) */
  valueTiming?: Timing;
  /** Result of output (1..1) */
  valueContactDetail?: ContactDetail;
  /** Result of output (1..1) */
  valueDataRequirement?: DataRequirement;
  /** Result of output (1..1) */
  valueExpression?: Expression;
  /** Result of output (1..1) */
  valueParameterDefinition?: ParameterDefinition;
  /** Result of output (1..1) */
  valueRelatedArtifact?: RelatedArtifact;
  /** Result of output (1..1) */
  valueTriggerDefinition?: TriggerDefinition;
  /** Result of output (1..1) */
  valueUsageContext?: UsageContext;
  /** Result of output (1..1) */
  valueAvailability?: Availability;
  /** Result of output (1..1) */
  valueExtendedContactDetail?: ExtendedContactDetail;
  /** Result of output (1..1) */
  valueDosage?: Dosage;
  /** Result of output (1..1) */
  valueMeta?: Meta;
}
