/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for GraphDefinition Resource
 */
export class GraphDefinition {
  resourceType: 'GraphDefinition';
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
  /** Logical URI to reference this graph definition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business version of the graph definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this graph definition (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: GraphDefinition.StatusEnum;
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
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the graph definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for graph definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this graph definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Type of resource at which the graph starts (1..1) */
  start?: GraphDefinition.StartEnum;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;
  /** Profile on base resource (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;
  /** Links this graph makes rules about (0..*) */
  link?: Array<GraphDefinitionLink>;
}

export namespace GraphDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type StartEnum =
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
  export const StartEnum = {
    Account: 'Account' as StartEnum,
    ActivityDefinition: 'ActivityDefinition' as StartEnum,
    AdverseEvent: 'AdverseEvent' as StartEnum,
    AllergyIntolerance: 'AllergyIntolerance' as StartEnum,
    Appointment: 'Appointment' as StartEnum,
    AppointmentResponse: 'AppointmentResponse' as StartEnum,
    AuditEvent: 'AuditEvent' as StartEnum,
    Basic: 'Basic' as StartEnum,
    Binary: 'Binary' as StartEnum,
    BodySite: 'BodySite' as StartEnum,
    Bundle: 'Bundle' as StartEnum,
    CapabilityStatement: 'CapabilityStatement' as StartEnum,
    CarePlan: 'CarePlan' as StartEnum,
    CareTeam: 'CareTeam' as StartEnum,
    ChargeItem: 'ChargeItem' as StartEnum,
    Claim: 'Claim' as StartEnum,
    ClaimResponse: 'ClaimResponse' as StartEnum,
    ClinicalImpression: 'ClinicalImpression' as StartEnum,
    CodeSystem: 'CodeSystem' as StartEnum,
    Communication: 'Communication' as StartEnum,
    CommunicationRequest: 'CommunicationRequest' as StartEnum,
    CompartmentDefinition: 'CompartmentDefinition' as StartEnum,
    Composition: 'Composition' as StartEnum,
    ConceptMap: 'ConceptMap' as StartEnum,
    Condition: 'Condition' as StartEnum,
    Consent: 'Consent' as StartEnum,
    Contract: 'Contract' as StartEnum,
    Coverage: 'Coverage' as StartEnum,
    DataElement: 'DataElement' as StartEnum,
    DetectedIssue: 'DetectedIssue' as StartEnum,
    Device: 'Device' as StartEnum,
    DeviceComponent: 'DeviceComponent' as StartEnum,
    DeviceMetric: 'DeviceMetric' as StartEnum,
    DeviceRequest: 'DeviceRequest' as StartEnum,
    DeviceUseStatement: 'DeviceUseStatement' as StartEnum,
    DiagnosticReport: 'DiagnosticReport' as StartEnum,
    DocumentManifest: 'DocumentManifest' as StartEnum,
    DocumentReference: 'DocumentReference' as StartEnum,
    DomainResource: 'DomainResource' as StartEnum,
    EligibilityRequest: 'EligibilityRequest' as StartEnum,
    EligibilityResponse: 'EligibilityResponse' as StartEnum,
    Encounter: 'Encounter' as StartEnum,
    Endpoint: 'Endpoint' as StartEnum,
    EnrollmentRequest: 'EnrollmentRequest' as StartEnum,
    EnrollmentResponse: 'EnrollmentResponse' as StartEnum,
    EpisodeOfCare: 'EpisodeOfCare' as StartEnum,
    ExpansionProfile: 'ExpansionProfile' as StartEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as StartEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as StartEnum,
    Flag: 'Flag' as StartEnum,
    Goal: 'Goal' as StartEnum,
    GraphDefinition: 'GraphDefinition' as StartEnum,
    Group: 'Group' as StartEnum,
    GuidanceResponse: 'GuidanceResponse' as StartEnum,
    HealthcareService: 'HealthcareService' as StartEnum,
    ImagingManifest: 'ImagingManifest' as StartEnum,
    ImagingStudy: 'ImagingStudy' as StartEnum,
    Immunization: 'Immunization' as StartEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as StartEnum,
    ImplementationGuide: 'ImplementationGuide' as StartEnum,
    Library: 'Library' as StartEnum,
    Linkage: 'Linkage' as StartEnum,
    List: 'List' as StartEnum,
    Location: 'Location' as StartEnum,
    Measure: 'Measure' as StartEnum,
    MeasureReport: 'MeasureReport' as StartEnum,
    Media: 'Media' as StartEnum,
    Medication: 'Medication' as StartEnum,
    MedicationAdministration: 'MedicationAdministration' as StartEnum,
    MedicationDispense: 'MedicationDispense' as StartEnum,
    MedicationRequest: 'MedicationRequest' as StartEnum,
    MedicationStatement: 'MedicationStatement' as StartEnum,
    MessageDefinition: 'MessageDefinition' as StartEnum,
    MessageHeader: 'MessageHeader' as StartEnum,
    NamingSystem: 'NamingSystem' as StartEnum,
    NutritionOrder: 'NutritionOrder' as StartEnum,
    Observation: 'Observation' as StartEnum,
    OperationDefinition: 'OperationDefinition' as StartEnum,
    OperationOutcome: 'OperationOutcome' as StartEnum,
    Organization: 'Organization' as StartEnum,
    Parameters: 'Parameters' as StartEnum,
    Patient: 'Patient' as StartEnum,
    PaymentNotice: 'PaymentNotice' as StartEnum,
    PaymentReconciliation: 'PaymentReconciliation' as StartEnum,
    Person: 'Person' as StartEnum,
    PlanDefinition: 'PlanDefinition' as StartEnum,
    Practitioner: 'Practitioner' as StartEnum,
    PractitionerRole: 'PractitionerRole' as StartEnum,
    Procedure: 'Procedure' as StartEnum,
    ProcedureRequest: 'ProcedureRequest' as StartEnum,
    ProcessRequest: 'ProcessRequest' as StartEnum,
    ProcessResponse: 'ProcessResponse' as StartEnum,
    Provenance: 'Provenance' as StartEnum,
    Questionnaire: 'Questionnaire' as StartEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as StartEnum,
    ReferralRequest: 'ReferralRequest' as StartEnum,
    RelatedPerson: 'RelatedPerson' as StartEnum,
    RequestGroup: 'RequestGroup' as StartEnum,
    ResearchStudy: 'ResearchStudy' as StartEnum,
    ResearchSubject: 'ResearchSubject' as StartEnum,
    Resource: 'Resource' as StartEnum,
    RiskAssessment: 'RiskAssessment' as StartEnum,
    Schedule: 'Schedule' as StartEnum,
    SearchParameter: 'SearchParameter' as StartEnum,
    Sequence: 'Sequence' as StartEnum,
    ServiceDefinition: 'ServiceDefinition' as StartEnum,
    Slot: 'Slot' as StartEnum,
    Specimen: 'Specimen' as StartEnum,
    StructureDefinition: 'StructureDefinition' as StartEnum,
    StructureMap: 'StructureMap' as StartEnum,
    Subscription: 'Subscription' as StartEnum,
    Substance: 'Substance' as StartEnum,
    SupplyDelivery: 'SupplyDelivery' as StartEnum,
    SupplyRequest: 'SupplyRequest' as StartEnum,
    Task: 'Task' as StartEnum,
    TestReport: 'TestReport' as StartEnum,
    TestScript: 'TestScript' as StartEnum,
    ValueSet: 'ValueSet' as StartEnum,
    VisionPrescription: 'VisionPrescription' as StartEnum,
  };
}

/**
 * Links this graph makes rules about
 */
export class GraphDefinitionLink {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Path in the resource that contains the link (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** Which slice (if profiled) (0..1) */
  sliceName?: string;
  /** Id and extensions of the primitive `sliceName`. */
  _sliceName?: Element;
  /** Minimum occurrences for this link (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;
  /** Maximum occurrences for this link (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;
  /** Why this link is specified (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Potential target for the link (1..*) */
  target: Array<GraphDefinitionTarget>;
}

/**
 * Potential target for the link
 */
export class GraphDefinitionTarget {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of resource this link refers to (1..1) */
  type?: GraphDefinitionTarget.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Profile for the target resource (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;
  /** Compartment Consistency Rules (0..*) */
  compartment?: Array<GraphDefinitionCompartment>;
  /** Additional links from target resource (0..*) */
  link?: Array<GraphDefinitionLink>;
}

export namespace GraphDefinitionTarget {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type TypeEnum =
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
  export const TypeEnum = {
    Account: 'Account' as TypeEnum,
    ActivityDefinition: 'ActivityDefinition' as TypeEnum,
    AdverseEvent: 'AdverseEvent' as TypeEnum,
    AllergyIntolerance: 'AllergyIntolerance' as TypeEnum,
    Appointment: 'Appointment' as TypeEnum,
    AppointmentResponse: 'AppointmentResponse' as TypeEnum,
    AuditEvent: 'AuditEvent' as TypeEnum,
    Basic: 'Basic' as TypeEnum,
    Binary: 'Binary' as TypeEnum,
    BodySite: 'BodySite' as TypeEnum,
    Bundle: 'Bundle' as TypeEnum,
    CapabilityStatement: 'CapabilityStatement' as TypeEnum,
    CarePlan: 'CarePlan' as TypeEnum,
    CareTeam: 'CareTeam' as TypeEnum,
    ChargeItem: 'ChargeItem' as TypeEnum,
    Claim: 'Claim' as TypeEnum,
    ClaimResponse: 'ClaimResponse' as TypeEnum,
    ClinicalImpression: 'ClinicalImpression' as TypeEnum,
    CodeSystem: 'CodeSystem' as TypeEnum,
    Communication: 'Communication' as TypeEnum,
    CommunicationRequest: 'CommunicationRequest' as TypeEnum,
    CompartmentDefinition: 'CompartmentDefinition' as TypeEnum,
    Composition: 'Composition' as TypeEnum,
    ConceptMap: 'ConceptMap' as TypeEnum,
    Condition: 'Condition' as TypeEnum,
    Consent: 'Consent' as TypeEnum,
    Contract: 'Contract' as TypeEnum,
    Coverage: 'Coverage' as TypeEnum,
    DataElement: 'DataElement' as TypeEnum,
    DetectedIssue: 'DetectedIssue' as TypeEnum,
    Device: 'Device' as TypeEnum,
    DeviceComponent: 'DeviceComponent' as TypeEnum,
    DeviceMetric: 'DeviceMetric' as TypeEnum,
    DeviceRequest: 'DeviceRequest' as TypeEnum,
    DeviceUseStatement: 'DeviceUseStatement' as TypeEnum,
    DiagnosticReport: 'DiagnosticReport' as TypeEnum,
    DocumentManifest: 'DocumentManifest' as TypeEnum,
    DocumentReference: 'DocumentReference' as TypeEnum,
    DomainResource: 'DomainResource' as TypeEnum,
    EligibilityRequest: 'EligibilityRequest' as TypeEnum,
    EligibilityResponse: 'EligibilityResponse' as TypeEnum,
    Encounter: 'Encounter' as TypeEnum,
    Endpoint: 'Endpoint' as TypeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as TypeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as TypeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as TypeEnum,
    ExpansionProfile: 'ExpansionProfile' as TypeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as TypeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as TypeEnum,
    Flag: 'Flag' as TypeEnum,
    Goal: 'Goal' as TypeEnum,
    GraphDefinition: 'GraphDefinition' as TypeEnum,
    Group: 'Group' as TypeEnum,
    GuidanceResponse: 'GuidanceResponse' as TypeEnum,
    HealthcareService: 'HealthcareService' as TypeEnum,
    ImagingManifest: 'ImagingManifest' as TypeEnum,
    ImagingStudy: 'ImagingStudy' as TypeEnum,
    Immunization: 'Immunization' as TypeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as TypeEnum,
    ImplementationGuide: 'ImplementationGuide' as TypeEnum,
    Library: 'Library' as TypeEnum,
    Linkage: 'Linkage' as TypeEnum,
    List: 'List' as TypeEnum,
    Location: 'Location' as TypeEnum,
    Measure: 'Measure' as TypeEnum,
    MeasureReport: 'MeasureReport' as TypeEnum,
    Media: 'Media' as TypeEnum,
    Medication: 'Medication' as TypeEnum,
    MedicationAdministration: 'MedicationAdministration' as TypeEnum,
    MedicationDispense: 'MedicationDispense' as TypeEnum,
    MedicationRequest: 'MedicationRequest' as TypeEnum,
    MedicationStatement: 'MedicationStatement' as TypeEnum,
    MessageDefinition: 'MessageDefinition' as TypeEnum,
    MessageHeader: 'MessageHeader' as TypeEnum,
    NamingSystem: 'NamingSystem' as TypeEnum,
    NutritionOrder: 'NutritionOrder' as TypeEnum,
    Observation: 'Observation' as TypeEnum,
    OperationDefinition: 'OperationDefinition' as TypeEnum,
    OperationOutcome: 'OperationOutcome' as TypeEnum,
    Organization: 'Organization' as TypeEnum,
    Parameters: 'Parameters' as TypeEnum,
    Patient: 'Patient' as TypeEnum,
    PaymentNotice: 'PaymentNotice' as TypeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as TypeEnum,
    Person: 'Person' as TypeEnum,
    PlanDefinition: 'PlanDefinition' as TypeEnum,
    Practitioner: 'Practitioner' as TypeEnum,
    PractitionerRole: 'PractitionerRole' as TypeEnum,
    Procedure: 'Procedure' as TypeEnum,
    ProcedureRequest: 'ProcedureRequest' as TypeEnum,
    ProcessRequest: 'ProcessRequest' as TypeEnum,
    ProcessResponse: 'ProcessResponse' as TypeEnum,
    Provenance: 'Provenance' as TypeEnum,
    Questionnaire: 'Questionnaire' as TypeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as TypeEnum,
    ReferralRequest: 'ReferralRequest' as TypeEnum,
    RelatedPerson: 'RelatedPerson' as TypeEnum,
    RequestGroup: 'RequestGroup' as TypeEnum,
    ResearchStudy: 'ResearchStudy' as TypeEnum,
    ResearchSubject: 'ResearchSubject' as TypeEnum,
    Resource: 'Resource' as TypeEnum,
    RiskAssessment: 'RiskAssessment' as TypeEnum,
    Schedule: 'Schedule' as TypeEnum,
    SearchParameter: 'SearchParameter' as TypeEnum,
    Sequence: 'Sequence' as TypeEnum,
    ServiceDefinition: 'ServiceDefinition' as TypeEnum,
    Slot: 'Slot' as TypeEnum,
    Specimen: 'Specimen' as TypeEnum,
    StructureDefinition: 'StructureDefinition' as TypeEnum,
    StructureMap: 'StructureMap' as TypeEnum,
    Subscription: 'Subscription' as TypeEnum,
    Substance: 'Substance' as TypeEnum,
    SupplyDelivery: 'SupplyDelivery' as TypeEnum,
    SupplyRequest: 'SupplyRequest' as TypeEnum,
    Task: 'Task' as TypeEnum,
    TestReport: 'TestReport' as TypeEnum,
    TestScript: 'TestScript' as TypeEnum,
    ValueSet: 'ValueSet' as TypeEnum,
    VisionPrescription: 'VisionPrescription' as TypeEnum,
  };
}

/**
 * Compartment Consistency Rules
 */
export class GraphDefinitionCompartment {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifies the compartment (1..1) */
  code?: GraphDefinitionCompartment.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** identical | matching | different | custom (1..1) */
  rule?: GraphDefinitionCompartment.RuleEnum;
  /** Id and extensions of the primitive `rule`. */
  _rule?: Element;
  /** Custom rule, as a FHIRPath expression (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
  /** Documentation for FHIRPath expression (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

export namespace GraphDefinitionCompartment {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/compartment-type */
  export type CodeEnum = 'Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device';
  export const CodeEnum = {
    Patient: 'Patient' as CodeEnum,
    Encounter: 'Encounter' as CodeEnum,
    RelatedPerson: 'RelatedPerson' as CodeEnum,
    Practitioner: 'Practitioner' as CodeEnum,
    Device: 'Device' as CodeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/graph-compartment-rule */
  export type RuleEnum = 'identical' | 'matching' | 'different' | 'custom';
  export const RuleEnum = {
    Identical: 'identical' as RuleEnum,
    Matching: 'matching' as RuleEnum,
    Different: 'different' as RuleEnum,
    Custom: 'custom' as RuleEnum,
  };
}
