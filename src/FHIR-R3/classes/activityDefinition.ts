/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Contributor } from './contributor';
import type { Dosage } from './dosage';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { Resource } from './resourceList';
import type { Timing } from './timing';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for ActivityDefinition Resource
 */
export class ActivityDefinition {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Logical URI to reference this activity definition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the activity definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the activity definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this activity definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this activity definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ActivityDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date this was last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Natural language description of the activity definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Why this activity definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Describes the clinical usage of the asset (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;
  /** When the activity definition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the activity definition was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the activity definition is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for activity definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: Array<CodeableConcept>;
  /** A content contributor (0..*) */
  contributor?: Array<Contributor>;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Logic used by the asset (0..*) */
  library?: Array<Reference>;
  /** Kind of resource (0..1) */
  kind?: ActivityDefinition.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Detail type of activity (0..1) */
  code?: CodeableConcept;
  /** When activity is to occur (0..1) */
  timingTiming?: Timing;
  /** When activity is to occur (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** When activity is to occur (0..1) */
  timingPeriod?: Period;
  /** When activity is to occur (0..1) */
  timingRange?: Range;
  /** Where it should happen (0..1) */
  location?: Reference;
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
  /** Transform to apply the template (0..1) */
  transform?: Reference;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type KindEnum =
    | 'Account'
    | 'ActivityDefinition'
    | 'AdverseEvent'
    | 'AllergyIntolerance'
    | 'Appointment'
    | 'AppointmentResponse'
    | 'AuditEvent'
    | 'Basic'
    | 'Binary'
    | 'BodySite'
    | 'Bundle'
    | 'CapabilityStatement'
    | 'CarePlan'
    | 'CareTeam'
    | 'ChargeItem'
    | 'Claim'
    | 'ClaimResponse'
    | 'ClinicalImpression'
    | 'CodeSystem'
    | 'Communication'
    | 'CommunicationRequest'
    | 'CompartmentDefinition'
    | 'Composition'
    | 'ConceptMap'
    | 'Condition'
    | 'Consent'
    | 'Contract'
    | 'Coverage'
    | 'DataElement'
    | 'DetectedIssue'
    | 'Device'
    | 'DeviceComponent'
    | 'DeviceMetric'
    | 'DeviceRequest'
    | 'DeviceUseStatement'
    | 'DiagnosticReport'
    | 'DocumentManifest'
    | 'DocumentReference'
    | 'DomainResource'
    | 'EligibilityRequest'
    | 'EligibilityResponse'
    | 'Encounter'
    | 'Endpoint'
    | 'EnrollmentRequest'
    | 'EnrollmentResponse'
    | 'EpisodeOfCare'
    | 'ExpansionProfile'
    | 'ExplanationOfBenefit'
    | 'FamilyMemberHistory'
    | 'Flag'
    | 'Goal'
    | 'GraphDefinition'
    | 'Group'
    | 'GuidanceResponse'
    | 'HealthcareService'
    | 'ImagingManifest'
    | 'ImagingStudy'
    | 'Immunization'
    | 'ImmunizationRecommendation'
    | 'ImplementationGuide'
    | 'Library'
    | 'Linkage'
    | 'List'
    | 'Location'
    | 'Measure'
    | 'MeasureReport'
    | 'Media'
    | 'Medication'
    | 'MedicationAdministration'
    | 'MedicationDispense'
    | 'MedicationRequest'
    | 'MedicationStatement'
    | 'MessageDefinition'
    | 'MessageHeader'
    | 'NamingSystem'
    | 'NutritionOrder'
    | 'Observation'
    | 'OperationDefinition'
    | 'OperationOutcome'
    | 'Organization'
    | 'Parameters'
    | 'Patient'
    | 'PaymentNotice'
    | 'PaymentReconciliation'
    | 'Person'
    | 'PlanDefinition'
    | 'Practitioner'
    | 'PractitionerRole'
    | 'Procedure'
    | 'ProcedureRequest'
    | 'ProcessRequest'
    | 'ProcessResponse'
    | 'Provenance'
    | 'Questionnaire'
    | 'QuestionnaireResponse'
    | 'ReferralRequest'
    | 'RelatedPerson'
    | 'RequestGroup'
    | 'ResearchStudy'
    | 'ResearchSubject'
    | 'Resource'
    | 'RiskAssessment'
    | 'Schedule'
    | 'SearchParameter'
    | 'Sequence'
    | 'ServiceDefinition'
    | 'Slot'
    | 'Specimen'
    | 'StructureDefinition'
    | 'StructureMap'
    | 'Subscription'
    | 'Substance'
    | 'SupplyDelivery'
    | 'SupplyRequest'
    | 'Task'
    | 'TestReport'
    | 'TestScript'
    | 'ValueSet'
    | 'VisionPrescription';
  export const KindEnum = {
    Account: 'Account' as KindEnum,
    ActivityDefinition: 'ActivityDefinition' as KindEnum,
    AdverseEvent: 'AdverseEvent' as KindEnum,
    AllergyIntolerance: 'AllergyIntolerance' as KindEnum,
    Appointment: 'Appointment' as KindEnum,
    AppointmentResponse: 'AppointmentResponse' as KindEnum,
    AuditEvent: 'AuditEvent' as KindEnum,
    Basic: 'Basic' as KindEnum,
    Binary: 'Binary' as KindEnum,
    BodySite: 'BodySite' as KindEnum,
    Bundle: 'Bundle' as KindEnum,
    CapabilityStatement: 'CapabilityStatement' as KindEnum,
    CarePlan: 'CarePlan' as KindEnum,
    CareTeam: 'CareTeam' as KindEnum,
    ChargeItem: 'ChargeItem' as KindEnum,
    Claim: 'Claim' as KindEnum,
    ClaimResponse: 'ClaimResponse' as KindEnum,
    ClinicalImpression: 'ClinicalImpression' as KindEnum,
    CodeSystem: 'CodeSystem' as KindEnum,
    Communication: 'Communication' as KindEnum,
    CommunicationRequest: 'CommunicationRequest' as KindEnum,
    CompartmentDefinition: 'CompartmentDefinition' as KindEnum,
    Composition: 'Composition' as KindEnum,
    ConceptMap: 'ConceptMap' as KindEnum,
    Condition: 'Condition' as KindEnum,
    Consent: 'Consent' as KindEnum,
    Contract: 'Contract' as KindEnum,
    Coverage: 'Coverage' as KindEnum,
    DataElement: 'DataElement' as KindEnum,
    DetectedIssue: 'DetectedIssue' as KindEnum,
    Device: 'Device' as KindEnum,
    DeviceComponent: 'DeviceComponent' as KindEnum,
    DeviceMetric: 'DeviceMetric' as KindEnum,
    DeviceRequest: 'DeviceRequest' as KindEnum,
    DeviceUseStatement: 'DeviceUseStatement' as KindEnum,
    DiagnosticReport: 'DiagnosticReport' as KindEnum,
    DocumentManifest: 'DocumentManifest' as KindEnum,
    DocumentReference: 'DocumentReference' as KindEnum,
    DomainResource: 'DomainResource' as KindEnum,
    EligibilityRequest: 'EligibilityRequest' as KindEnum,
    EligibilityResponse: 'EligibilityResponse' as KindEnum,
    Encounter: 'Encounter' as KindEnum,
    Endpoint: 'Endpoint' as KindEnum,
    EnrollmentRequest: 'EnrollmentRequest' as KindEnum,
    EnrollmentResponse: 'EnrollmentResponse' as KindEnum,
    EpisodeOfCare: 'EpisodeOfCare' as KindEnum,
    ExpansionProfile: 'ExpansionProfile' as KindEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as KindEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as KindEnum,
    Flag: 'Flag' as KindEnum,
    Goal: 'Goal' as KindEnum,
    GraphDefinition: 'GraphDefinition' as KindEnum,
    Group: 'Group' as KindEnum,
    GuidanceResponse: 'GuidanceResponse' as KindEnum,
    HealthcareService: 'HealthcareService' as KindEnum,
    ImagingManifest: 'ImagingManifest' as KindEnum,
    ImagingStudy: 'ImagingStudy' as KindEnum,
    Immunization: 'Immunization' as KindEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as KindEnum,
    ImplementationGuide: 'ImplementationGuide' as KindEnum,
    Library: 'Library' as KindEnum,
    Linkage: 'Linkage' as KindEnum,
    List: 'List' as KindEnum,
    Location: 'Location' as KindEnum,
    Measure: 'Measure' as KindEnum,
    MeasureReport: 'MeasureReport' as KindEnum,
    Media: 'Media' as KindEnum,
    Medication: 'Medication' as KindEnum,
    MedicationAdministration: 'MedicationAdministration' as KindEnum,
    MedicationDispense: 'MedicationDispense' as KindEnum,
    MedicationRequest: 'MedicationRequest' as KindEnum,
    MedicationStatement: 'MedicationStatement' as KindEnum,
    MessageDefinition: 'MessageDefinition' as KindEnum,
    MessageHeader: 'MessageHeader' as KindEnum,
    NamingSystem: 'NamingSystem' as KindEnum,
    NutritionOrder: 'NutritionOrder' as KindEnum,
    Observation: 'Observation' as KindEnum,
    OperationDefinition: 'OperationDefinition' as KindEnum,
    OperationOutcome: 'OperationOutcome' as KindEnum,
    Organization: 'Organization' as KindEnum,
    Parameters: 'Parameters' as KindEnum,
    Patient: 'Patient' as KindEnum,
    PaymentNotice: 'PaymentNotice' as KindEnum,
    PaymentReconciliation: 'PaymentReconciliation' as KindEnum,
    Person: 'Person' as KindEnum,
    PlanDefinition: 'PlanDefinition' as KindEnum,
    Practitioner: 'Practitioner' as KindEnum,
    PractitionerRole: 'PractitionerRole' as KindEnum,
    Procedure: 'Procedure' as KindEnum,
    ProcedureRequest: 'ProcedureRequest' as KindEnum,
    ProcessRequest: 'ProcessRequest' as KindEnum,
    ProcessResponse: 'ProcessResponse' as KindEnum,
    Provenance: 'Provenance' as KindEnum,
    Questionnaire: 'Questionnaire' as KindEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as KindEnum,
    ReferralRequest: 'ReferralRequest' as KindEnum,
    RelatedPerson: 'RelatedPerson' as KindEnum,
    RequestGroup: 'RequestGroup' as KindEnum,
    ResearchStudy: 'ResearchStudy' as KindEnum,
    ResearchSubject: 'ResearchSubject' as KindEnum,
    Resource: 'Resource' as KindEnum,
    RiskAssessment: 'RiskAssessment' as KindEnum,
    Schedule: 'Schedule' as KindEnum,
    SearchParameter: 'SearchParameter' as KindEnum,
    Sequence: 'Sequence' as KindEnum,
    ServiceDefinition: 'ServiceDefinition' as KindEnum,
    Slot: 'Slot' as KindEnum,
    Specimen: 'Specimen' as KindEnum,
    StructureDefinition: 'StructureDefinition' as KindEnum,
    StructureMap: 'StructureMap' as KindEnum,
    Subscription: 'Subscription' as KindEnum,
    Substance: 'Substance' as KindEnum,
    SupplyDelivery: 'SupplyDelivery' as KindEnum,
    SupplyRequest: 'SupplyRequest' as KindEnum,
    Task: 'Task' as KindEnum,
    TestReport: 'TestReport' as KindEnum,
    TestScript: 'TestScript' as KindEnum,
    ValueSet: 'ValueSet' as KindEnum,
    VisionPrescription: 'VisionPrescription' as KindEnum,
  };
}

/**
 * Who should participate in the action
 */
export class ActivityDefinitionParticipant {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** patient | practitioner | related-person (1..1) */
  type?: ActivityDefinitionParticipant.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** E.g. Nurse, Surgeon, Parent, etc (0..1) */
  role?: CodeableConcept;
}

export namespace ActivityDefinitionParticipant {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/action-participant-type */
  export type TypeEnum = 'patient' | 'practitioner' | 'related-person';
  export const TypeEnum = {
    Patient: 'patient' as TypeEnum,
    Practitioner: 'practitioner' as TypeEnum,
    RelatedPerson: 'related-person' as TypeEnum,
  };
}

/**
 * Dynamic aspects of the definition
 */
export class ActivityDefinitionDynamicValue {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Natural language description of the dynamic value (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The path to the element to be set dynamically (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** Language of the expression (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** An expression that provides the dynamic value for the customization (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
}
