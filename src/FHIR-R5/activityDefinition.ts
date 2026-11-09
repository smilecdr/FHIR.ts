/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Age } from './age';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Dosage } from './dosage';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';
import type { UsageContext } from './usageContext';

/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export interface ActivityDefinition {
  resourceType: 'ActivityDefinition';
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
  /** Canonical identifier for this activity definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the activity definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the activity definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this activity definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this activity definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Subordinate title of the activity definition (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ActivityDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Type of individual the activity definition is intended for (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the activity definition is intended for (0..1) */
  subjectReference?: Reference;
  /** Type of individual the activity definition is intended for (0..1) */
  subjectCanonical?: string;
  /** Id and extensions of the primitive `subjectCanonical`. */
  _subjectCanonical?: Element;
  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the activity definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for activity definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this activity definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Describes the clinical usage of the activity definition (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** When the activity definition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the activity definition was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the activity definition is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: Array<CodeableConcept>;
  /** Who authored the content (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the content (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the content (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the content (0..*) */
  endorser?: Array<ContactDetail>;
  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Logic used by the activity definition (0..*) */
  library?: Array<string>;
  /** Id and extensions of the primitive `library`. */
  _library?: Array<Element | null>;
  /** Kind of resource (0..1) */
  kind?: ActivityDefinition.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** What profile the resource needs to conform to (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;
  /** Detail type of activity (0..1) */
  code?: CodeableConcept;
  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (0..1) */
  intent?: ActivityDefinition.IntentEnum;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;
  /** routine | urgent | asap | stat (0..1) */
  priority?: ActivityDefinition.PriorityEnum;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;
  /** True if the activity should not be performed (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;
  /** When activity is to occur (0..1) */
  timingTiming?: Timing;
  /** When activity is to occur (0..1) */
  timingAge?: Age;
  /** When activity is to occur (0..1) */
  timingRange?: Range;
  /** When activity is to occur (0..1) */
  timingDuration?: Duration;
  /** Preconditions for service (0..1) */
  asNeededBoolean?: boolean;
  /** Id and extensions of the primitive `asNeededBoolean`. */
  _asNeededBoolean?: Element;
  /** Preconditions for service (0..1) */
  asNeededCodeableConcept?: CodeableConcept;
  /** Where it should happen (0..1) */
  location?: CodeableReference;
  /** Who should participate in the action (0..*) */
  participant?: Array<ActivityDefinitionParticipant>;
  /** What's administered/supplied (0..1) */
  productReference?: Reference;
  /** What's administered/supplied (0..1) */
  productCodeableConcept?: CodeableConcept;
  /** How much is administered/consumed/supplied (0..1) */
  quantity?: Quantity;
  /** Detailed dosage instructions (0..*) */
  dosage?: Array<Dosage>;
  /** What part of body to perform on (0..*) */
  bodySite?: Array<CodeableConcept>;
  /** What specimens are required to perform this action (0..*) */
  specimenRequirement?: Array<string>;
  /** Id and extensions of the primitive `specimenRequirement`. */
  _specimenRequirement?: Array<Element | null>;
  /** What observations are required to perform this action (0..*) */
  observationRequirement?: Array<string>;
  /** Id and extensions of the primitive `observationRequirement`. */
  _observationRequirement?: Array<Element | null>;
  /** What observations must be produced by this action (0..*) */
  observationResultRequirement?: Array<string>;
  /** Id and extensions of the primitive `observationResultRequirement`. */
  _observationResultRequirement?: Array<Element | null>;
  /** Transform to apply the template (0..1) */
  transform?: string;
  /** Id and extensions of the primitive `transform`. */
  _transform?: Element;
  /** Dynamic aspects of the definition (0..*) */
  dynamicValue?: Array<ActivityDefinitionDynamicValue>;
}

export namespace ActivityDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/request-resource-types */
  export type KindEnum =
    | 'Appointment'
    | 'AppointmentResponse'
    | 'CarePlan'
    | 'Claim'
    | 'CommunicationRequest'
    | 'CoverageEligibilityRequest'
    | 'DeviceRequest'
    | 'EnrollmentRequest'
    | 'ImmunizationRecommendation'
    | 'MedicationRequest'
    | 'NutritionOrder'
    | 'RequestOrchestration'
    | 'ServiceRequest'
    | 'SupplyRequest'
    | 'Task'
    | 'Transport'
    | 'VisionPrescription';
  export const KindEnum = {
    Appointment: 'Appointment' as KindEnum,
    AppointmentResponse: 'AppointmentResponse' as KindEnum,
    CarePlan: 'CarePlan' as KindEnum,
    Claim: 'Claim' as KindEnum,
    CommunicationRequest: 'CommunicationRequest' as KindEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as KindEnum,
    DeviceRequest: 'DeviceRequest' as KindEnum,
    EnrollmentRequest: 'EnrollmentRequest' as KindEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as KindEnum,
    MedicationRequest: 'MedicationRequest' as KindEnum,
    NutritionOrder: 'NutritionOrder' as KindEnum,
    RequestOrchestration: 'RequestOrchestration' as KindEnum,
    ServiceRequest: 'ServiceRequest' as KindEnum,
    SupplyRequest: 'SupplyRequest' as KindEnum,
    Task: 'Task' as KindEnum,
    Transport: 'Transport' as KindEnum,
    VisionPrescription: 'VisionPrescription' as KindEnum,
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
 * Who should participate in the action
 */
export interface ActivityDefinitionParticipant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson (0..1) */
  type?: ActivityDefinitionParticipant.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Who or what can participate (0..1) */
  typeCanonical?: string;
  /** Id and extensions of the primitive `typeCanonical`. */
  _typeCanonical?: Element;
  /** Who or what can participate (0..1) */
  typeReference?: Reference;
  /** E.g. Nurse, Surgeon, Parent, etc (0..1) */
  role?: CodeableConcept;
  /** E.g. Author, Reviewer, Witness, etc (0..1) */
  function?: CodeableConcept;
}

export namespace ActivityDefinitionParticipant {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-participant-type */
  export type TypeEnum =
    | 'careteam'
    | 'device'
    | 'group'
    | 'healthcareservice'
    | 'location'
    | 'organization'
    | 'patient'
    | 'practitioner'
    | 'practitionerrole'
    | 'relatedperson';
  export const TypeEnum = {
    Careteam: 'careteam' as TypeEnum,
    Device: 'device' as TypeEnum,
    Group: 'group' as TypeEnum,
    Healthcareservice: 'healthcareservice' as TypeEnum,
    Location: 'location' as TypeEnum,
    Organization: 'organization' as TypeEnum,
    Patient: 'patient' as TypeEnum,
    Practitioner: 'practitioner' as TypeEnum,
    Practitionerrole: 'practitionerrole' as TypeEnum,
    Relatedperson: 'relatedperson' as TypeEnum,
  };
}

/**
 * Dynamic aspects of the definition
 */
export interface ActivityDefinitionDynamicValue {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The path to the element to be set dynamically (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** An expression that provides the dynamic value for the customization (1..1) */
  expression: Expression;
}
