/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
export interface MessageDefinition {
  resourceType: 'MessageDefinition';
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
  /** The cannonical URL for a given MessageDefinition (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business Identifier for a given MessageDefinition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the message definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this message definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this message definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Takes the place of (0..*) */
  replaces?: Array<string>;
  /** Id and extensions of the primitive `replaces`. */
  _replaces?: Array<Element | null>;
  /** draft | active | retired | unknown (1..1) */
  status?: MessageDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the message definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for message definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this message definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** Definition this one is based on (0..1) */
  base?: string;
  /** Id and extensions of the primitive `base`. */
  _base?: Element;
  /** Protocol/workflow this is part of (0..*) */
  parent?: Array<string>;
  /** Id and extensions of the primitive `parent`. */
  _parent?: Array<Element | null>;
  /** Event code or link to the EventDefinition (1..1) */
  eventCoding?: Coding;
  /** Event code or link to the EventDefinition (1..1) */
  eventUri?: string;
  /** Id and extensions of the primitive `eventUri`. */
  _eventUri?: Element;
  /** consequence | currency | notification (0..1) */
  category?: MessageDefinition.CategoryEnum;
  /** Id and extensions of the primitive `category`. */
  _category?: Element;
  /** Resource(s) that are the subject of the event (0..*) */
  focus?: Array<MessageDefinitionFocus>;
  /** always | on-error | never | on-success (0..1) */
  responseRequired?: MessageDefinition.ResponseRequiredEnum;
  /** Id and extensions of the primitive `responseRequired`. */
  _responseRequired?: Element;
  /** Responses to this message (0..*) */
  allowedResponse?: Array<MessageDefinitionAllowedResponse>;
  /** Canonical reference to a GraphDefinition (0..1) */
  graph?: string;
  /** Id and extensions of the primitive `graph`. */
  _graph?: Element;
}

export namespace MessageDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/message-significance-category */
  export type CategoryEnum = 'consequence' | 'currency' | 'notification';
  export const CategoryEnum = {
    Consequence: 'consequence' as CategoryEnum,
    Currency: 'currency' as CategoryEnum,
    Notification: 'notification' as CategoryEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/messageheader-response-request */
  export type ResponseRequiredEnum = 'always' | 'on-error' | 'never' | 'on-success';
  export const ResponseRequiredEnum = {
    Always: 'always' as ResponseRequiredEnum,
    OnError: 'on-error' as ResponseRequiredEnum,
    Never: 'never' as ResponseRequiredEnum,
    OnSuccess: 'on-success' as ResponseRequiredEnum,
  };
}

/**
 * Resource(s) that are the subject of the event
 */
export interface MessageDefinitionFocus {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of resource (1..1) */
  code?: MessageDefinitionFocus.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Profile that must be adhered to by focus (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;
  /** Minimum number of focuses of this type (1..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;
  /** Maximum number of focuses of this type (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;
}

export namespace MessageDefinitionFocus {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type CodeEnum =
    | 'Account'
    | 'ActivityDefinition'
    | 'ActorDefinition'
    | 'AdministrableProductDefinition'
    | 'AdverseEvent'
    | 'AllergyIntolerance'
    | 'Appointment'
    | 'AppointmentResponse'
    | 'ArtifactAssessment'
    | 'AuditEvent'
    | 'Basic'
    | 'Binary'
    | 'BiologicallyDerivedProduct'
    | 'BiologicallyDerivedProductDispense'
    | 'BodyStructure'
    | 'Bundle'
    | 'CapabilityStatement'
    | 'CarePlan'
    | 'CareTeam'
    | 'ChargeItem'
    | 'ChargeItemDefinition'
    | 'Citation'
    | 'Claim'
    | 'ClaimResponse'
    | 'ClinicalImpression'
    | 'ClinicalUseDefinition'
    | 'CodeSystem'
    | 'Communication'
    | 'CommunicationRequest'
    | 'CompartmentDefinition'
    | 'Composition'
    | 'ConceptMap'
    | 'Condition'
    | 'ConditionDefinition'
    | 'Consent'
    | 'Contract'
    | 'Coverage'
    | 'CoverageEligibilityRequest'
    | 'CoverageEligibilityResponse'
    | 'DetectedIssue'
    | 'Device'
    | 'DeviceAssociation'
    | 'DeviceDefinition'
    | 'DeviceDispense'
    | 'DeviceMetric'
    | 'DeviceRequest'
    | 'DeviceUsage'
    | 'DiagnosticReport'
    | 'DocumentReference'
    | 'Encounter'
    | 'EncounterHistory'
    | 'Endpoint'
    | 'EnrollmentRequest'
    | 'EnrollmentResponse'
    | 'EpisodeOfCare'
    | 'EventDefinition'
    | 'Evidence'
    | 'EvidenceReport'
    | 'EvidenceVariable'
    | 'ExampleScenario'
    | 'ExplanationOfBenefit'
    | 'FamilyMemberHistory'
    | 'Flag'
    | 'FormularyItem'
    | 'GenomicStudy'
    | 'Goal'
    | 'GraphDefinition'
    | 'Group'
    | 'GuidanceResponse'
    | 'HealthcareService'
    | 'ImagingSelection'
    | 'ImagingStudy'
    | 'Immunization'
    | 'ImmunizationEvaluation'
    | 'ImmunizationRecommendation'
    | 'ImplementationGuide'
    | 'Ingredient'
    | 'InsurancePlan'
    | 'InventoryItem'
    | 'InventoryReport'
    | 'Invoice'
    | 'Library'
    | 'Linkage'
    | 'List'
    | 'Location'
    | 'ManufacturedItemDefinition'
    | 'Measure'
    | 'MeasureReport'
    | 'Medication'
    | 'MedicationAdministration'
    | 'MedicationDispense'
    | 'MedicationKnowledge'
    | 'MedicationRequest'
    | 'MedicationStatement'
    | 'MedicinalProductDefinition'
    | 'MessageDefinition'
    | 'MessageHeader'
    | 'MolecularSequence'
    | 'NamingSystem'
    | 'NutritionIntake'
    | 'NutritionOrder'
    | 'NutritionProduct'
    | 'Observation'
    | 'ObservationDefinition'
    | 'OperationDefinition'
    | 'OperationOutcome'
    | 'Organization'
    | 'OrganizationAffiliation'
    | 'PackagedProductDefinition'
    | 'Parameters'
    | 'Patient'
    | 'PaymentNotice'
    | 'PaymentReconciliation'
    | 'Permission'
    | 'Person'
    | 'PlanDefinition'
    | 'Practitioner'
    | 'PractitionerRole'
    | 'Procedure'
    | 'Provenance'
    | 'Questionnaire'
    | 'QuestionnaireResponse'
    | 'RegulatedAuthorization'
    | 'RelatedPerson'
    | 'RequestOrchestration'
    | 'Requirements'
    | 'ResearchStudy'
    | 'ResearchSubject'
    | 'RiskAssessment'
    | 'Schedule'
    | 'SearchParameter'
    | 'ServiceRequest'
    | 'Slot'
    | 'Specimen'
    | 'SpecimenDefinition'
    | 'StructureDefinition'
    | 'StructureMap'
    | 'Subscription'
    | 'SubscriptionStatus'
    | 'SubscriptionTopic'
    | 'Substance'
    | 'SubstanceDefinition'
    | 'SubstanceNucleicAcid'
    | 'SubstancePolymer'
    | 'SubstanceProtein'
    | 'SubstanceReferenceInformation'
    | 'SubstanceSourceMaterial'
    | 'SupplyDelivery'
    | 'SupplyRequest'
    | 'Task'
    | 'TerminologyCapabilities'
    | 'TestPlan'
    | 'TestReport'
    | 'TestScript'
    | 'Transport'
    | 'ValueSet'
    | 'VerificationResult'
    | 'VisionPrescription';
  export const CodeEnum = {
    Account: 'Account' as CodeEnum,
    ActivityDefinition: 'ActivityDefinition' as CodeEnum,
    ActorDefinition: 'ActorDefinition' as CodeEnum,
    AdministrableProductDefinition: 'AdministrableProductDefinition' as CodeEnum,
    AdverseEvent: 'AdverseEvent' as CodeEnum,
    AllergyIntolerance: 'AllergyIntolerance' as CodeEnum,
    Appointment: 'Appointment' as CodeEnum,
    AppointmentResponse: 'AppointmentResponse' as CodeEnum,
    ArtifactAssessment: 'ArtifactAssessment' as CodeEnum,
    AuditEvent: 'AuditEvent' as CodeEnum,
    Basic: 'Basic' as CodeEnum,
    Binary: 'Binary' as CodeEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as CodeEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as CodeEnum,
    BodyStructure: 'BodyStructure' as CodeEnum,
    Bundle: 'Bundle' as CodeEnum,
    CapabilityStatement: 'CapabilityStatement' as CodeEnum,
    CarePlan: 'CarePlan' as CodeEnum,
    CareTeam: 'CareTeam' as CodeEnum,
    ChargeItem: 'ChargeItem' as CodeEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as CodeEnum,
    Citation: 'Citation' as CodeEnum,
    Claim: 'Claim' as CodeEnum,
    ClaimResponse: 'ClaimResponse' as CodeEnum,
    ClinicalImpression: 'ClinicalImpression' as CodeEnum,
    ClinicalUseDefinition: 'ClinicalUseDefinition' as CodeEnum,
    CodeSystem: 'CodeSystem' as CodeEnum,
    Communication: 'Communication' as CodeEnum,
    CommunicationRequest: 'CommunicationRequest' as CodeEnum,
    CompartmentDefinition: 'CompartmentDefinition' as CodeEnum,
    Composition: 'Composition' as CodeEnum,
    ConceptMap: 'ConceptMap' as CodeEnum,
    Condition: 'Condition' as CodeEnum,
    ConditionDefinition: 'ConditionDefinition' as CodeEnum,
    Consent: 'Consent' as CodeEnum,
    Contract: 'Contract' as CodeEnum,
    Coverage: 'Coverage' as CodeEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as CodeEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as CodeEnum,
    DetectedIssue: 'DetectedIssue' as CodeEnum,
    Device: 'Device' as CodeEnum,
    DeviceAssociation: 'DeviceAssociation' as CodeEnum,
    DeviceDefinition: 'DeviceDefinition' as CodeEnum,
    DeviceDispense: 'DeviceDispense' as CodeEnum,
    DeviceMetric: 'DeviceMetric' as CodeEnum,
    DeviceRequest: 'DeviceRequest' as CodeEnum,
    DeviceUsage: 'DeviceUsage' as CodeEnum,
    DiagnosticReport: 'DiagnosticReport' as CodeEnum,
    DocumentReference: 'DocumentReference' as CodeEnum,
    Encounter: 'Encounter' as CodeEnum,
    EncounterHistory: 'EncounterHistory' as CodeEnum,
    Endpoint: 'Endpoint' as CodeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as CodeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as CodeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as CodeEnum,
    EventDefinition: 'EventDefinition' as CodeEnum,
    Evidence: 'Evidence' as CodeEnum,
    EvidenceReport: 'EvidenceReport' as CodeEnum,
    EvidenceVariable: 'EvidenceVariable' as CodeEnum,
    ExampleScenario: 'ExampleScenario' as CodeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as CodeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as CodeEnum,
    Flag: 'Flag' as CodeEnum,
    FormularyItem: 'FormularyItem' as CodeEnum,
    GenomicStudy: 'GenomicStudy' as CodeEnum,
    Goal: 'Goal' as CodeEnum,
    GraphDefinition: 'GraphDefinition' as CodeEnum,
    Group: 'Group' as CodeEnum,
    GuidanceResponse: 'GuidanceResponse' as CodeEnum,
    HealthcareService: 'HealthcareService' as CodeEnum,
    ImagingSelection: 'ImagingSelection' as CodeEnum,
    ImagingStudy: 'ImagingStudy' as CodeEnum,
    Immunization: 'Immunization' as CodeEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as CodeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as CodeEnum,
    ImplementationGuide: 'ImplementationGuide' as CodeEnum,
    Ingredient: 'Ingredient' as CodeEnum,
    InsurancePlan: 'InsurancePlan' as CodeEnum,
    InventoryItem: 'InventoryItem' as CodeEnum,
    InventoryReport: 'InventoryReport' as CodeEnum,
    Invoice: 'Invoice' as CodeEnum,
    Library: 'Library' as CodeEnum,
    Linkage: 'Linkage' as CodeEnum,
    List: 'List' as CodeEnum,
    Location: 'Location' as CodeEnum,
    ManufacturedItemDefinition: 'ManufacturedItemDefinition' as CodeEnum,
    Measure: 'Measure' as CodeEnum,
    MeasureReport: 'MeasureReport' as CodeEnum,
    Medication: 'Medication' as CodeEnum,
    MedicationAdministration: 'MedicationAdministration' as CodeEnum,
    MedicationDispense: 'MedicationDispense' as CodeEnum,
    MedicationKnowledge: 'MedicationKnowledge' as CodeEnum,
    MedicationRequest: 'MedicationRequest' as CodeEnum,
    MedicationStatement: 'MedicationStatement' as CodeEnum,
    MedicinalProductDefinition: 'MedicinalProductDefinition' as CodeEnum,
    MessageDefinition: 'MessageDefinition' as CodeEnum,
    MessageHeader: 'MessageHeader' as CodeEnum,
    MolecularSequence: 'MolecularSequence' as CodeEnum,
    NamingSystem: 'NamingSystem' as CodeEnum,
    NutritionIntake: 'NutritionIntake' as CodeEnum,
    NutritionOrder: 'NutritionOrder' as CodeEnum,
    NutritionProduct: 'NutritionProduct' as CodeEnum,
    Observation: 'Observation' as CodeEnum,
    ObservationDefinition: 'ObservationDefinition' as CodeEnum,
    OperationDefinition: 'OperationDefinition' as CodeEnum,
    OperationOutcome: 'OperationOutcome' as CodeEnum,
    Organization: 'Organization' as CodeEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as CodeEnum,
    PackagedProductDefinition: 'PackagedProductDefinition' as CodeEnum,
    Parameters: 'Parameters' as CodeEnum,
    Patient: 'Patient' as CodeEnum,
    PaymentNotice: 'PaymentNotice' as CodeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as CodeEnum,
    Permission: 'Permission' as CodeEnum,
    Person: 'Person' as CodeEnum,
    PlanDefinition: 'PlanDefinition' as CodeEnum,
    Practitioner: 'Practitioner' as CodeEnum,
    PractitionerRole: 'PractitionerRole' as CodeEnum,
    Procedure: 'Procedure' as CodeEnum,
    Provenance: 'Provenance' as CodeEnum,
    Questionnaire: 'Questionnaire' as CodeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as CodeEnum,
    RegulatedAuthorization: 'RegulatedAuthorization' as CodeEnum,
    RelatedPerson: 'RelatedPerson' as CodeEnum,
    RequestOrchestration: 'RequestOrchestration' as CodeEnum,
    Requirements: 'Requirements' as CodeEnum,
    ResearchStudy: 'ResearchStudy' as CodeEnum,
    ResearchSubject: 'ResearchSubject' as CodeEnum,
    RiskAssessment: 'RiskAssessment' as CodeEnum,
    Schedule: 'Schedule' as CodeEnum,
    SearchParameter: 'SearchParameter' as CodeEnum,
    ServiceRequest: 'ServiceRequest' as CodeEnum,
    Slot: 'Slot' as CodeEnum,
    Specimen: 'Specimen' as CodeEnum,
    SpecimenDefinition: 'SpecimenDefinition' as CodeEnum,
    StructureDefinition: 'StructureDefinition' as CodeEnum,
    StructureMap: 'StructureMap' as CodeEnum,
    Subscription: 'Subscription' as CodeEnum,
    SubscriptionStatus: 'SubscriptionStatus' as CodeEnum,
    SubscriptionTopic: 'SubscriptionTopic' as CodeEnum,
    Substance: 'Substance' as CodeEnum,
    SubstanceDefinition: 'SubstanceDefinition' as CodeEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as CodeEnum,
    SubstancePolymer: 'SubstancePolymer' as CodeEnum,
    SubstanceProtein: 'SubstanceProtein' as CodeEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as CodeEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as CodeEnum,
    SupplyDelivery: 'SupplyDelivery' as CodeEnum,
    SupplyRequest: 'SupplyRequest' as CodeEnum,
    Task: 'Task' as CodeEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as CodeEnum,
    TestPlan: 'TestPlan' as CodeEnum,
    TestReport: 'TestReport' as CodeEnum,
    TestScript: 'TestScript' as CodeEnum,
    Transport: 'Transport' as CodeEnum,
    ValueSet: 'ValueSet' as CodeEnum,
    VerificationResult: 'VerificationResult' as CodeEnum,
    VisionPrescription: 'VisionPrescription' as CodeEnum,
  };
}

/**
 * Responses to this message
 */
export interface MessageDefinitionAllowedResponse {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to allowed message definition response (1..1) */
  message?: string;
  /** Id and extensions of the primitive `message`. */
  _message?: Element;
  /** When should this response be used (0..1) */
  situation?: string;
  /** Id and extensions of the primitive `situation`. */
  _situation?: Element;
}
