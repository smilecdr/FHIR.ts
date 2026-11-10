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
 * Base StructureDefinition for CompartmentDefinition Resource
 */
export class CompartmentDefinition {
  resourceType: 'CompartmentDefinition';
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
  /** Logical URI to reference this compartment definition (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Name for this compartment definition (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this compartment definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: CompartmentDefinition.StatusEnum;
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
  /** Natural language description of the compartment definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Why this compartment definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for compartment definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Patient | Encounter | RelatedPerson | Practitioner | Device (1..1) */
  code?: CompartmentDefinition.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Whether the search syntax is supported (1..1) */
  search?: boolean;
  /** Id and extensions of the primitive `search`. */
  _search?: Element;
  /** How a resource is related to the compartment (0..*) */
  resource?: Array<CompartmentDefinitionResource>;
}

export namespace CompartmentDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/compartment-type */
  export type CodeEnum = 'Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device';
  export const CodeEnum = {
    Patient: 'Patient' as CodeEnum,
    Encounter: 'Encounter' as CodeEnum,
    RelatedPerson: 'RelatedPerson' as CodeEnum,
    Practitioner: 'Practitioner' as CodeEnum,
    Device: 'Device' as CodeEnum,
  };
}

/**
 * How a resource is related to the compartment
 */
export class CompartmentDefinitionResource {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of resource type (1..1) */
  code?: CompartmentDefinitionResource.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Search Parameter Name, or chained parameters (0..*) */
  param?: Array<string>;
  /** Id and extensions of the primitive `param`. */
  _param?: Array<Element | null>;
  /** Additional documentation about the resource and compartment (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

export namespace CompartmentDefinitionResource {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type CodeEnum =
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
  export const CodeEnum = {
    Account: 'Account' as CodeEnum,
    ActivityDefinition: 'ActivityDefinition' as CodeEnum,
    AdverseEvent: 'AdverseEvent' as CodeEnum,
    AllergyIntolerance: 'AllergyIntolerance' as CodeEnum,
    Appointment: 'Appointment' as CodeEnum,
    AppointmentResponse: 'AppointmentResponse' as CodeEnum,
    AuditEvent: 'AuditEvent' as CodeEnum,
    Basic: 'Basic' as CodeEnum,
    Binary: 'Binary' as CodeEnum,
    BodySite: 'BodySite' as CodeEnum,
    Bundle: 'Bundle' as CodeEnum,
    CapabilityStatement: 'CapabilityStatement' as CodeEnum,
    CarePlan: 'CarePlan' as CodeEnum,
    CareTeam: 'CareTeam' as CodeEnum,
    ChargeItem: 'ChargeItem' as CodeEnum,
    Claim: 'Claim' as CodeEnum,
    ClaimResponse: 'ClaimResponse' as CodeEnum,
    ClinicalImpression: 'ClinicalImpression' as CodeEnum,
    CodeSystem: 'CodeSystem' as CodeEnum,
    Communication: 'Communication' as CodeEnum,
    CommunicationRequest: 'CommunicationRequest' as CodeEnum,
    CompartmentDefinition: 'CompartmentDefinition' as CodeEnum,
    Composition: 'Composition' as CodeEnum,
    ConceptMap: 'ConceptMap' as CodeEnum,
    Condition: 'Condition' as CodeEnum,
    Consent: 'Consent' as CodeEnum,
    Contract: 'Contract' as CodeEnum,
    Coverage: 'Coverage' as CodeEnum,
    DataElement: 'DataElement' as CodeEnum,
    DetectedIssue: 'DetectedIssue' as CodeEnum,
    Device: 'Device' as CodeEnum,
    DeviceComponent: 'DeviceComponent' as CodeEnum,
    DeviceMetric: 'DeviceMetric' as CodeEnum,
    DeviceRequest: 'DeviceRequest' as CodeEnum,
    DeviceUseStatement: 'DeviceUseStatement' as CodeEnum,
    DiagnosticReport: 'DiagnosticReport' as CodeEnum,
    DocumentManifest: 'DocumentManifest' as CodeEnum,
    DocumentReference: 'DocumentReference' as CodeEnum,
    DomainResource: 'DomainResource' as CodeEnum,
    EligibilityRequest: 'EligibilityRequest' as CodeEnum,
    EligibilityResponse: 'EligibilityResponse' as CodeEnum,
    Encounter: 'Encounter' as CodeEnum,
    Endpoint: 'Endpoint' as CodeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as CodeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as CodeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as CodeEnum,
    ExpansionProfile: 'ExpansionProfile' as CodeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as CodeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as CodeEnum,
    Flag: 'Flag' as CodeEnum,
    Goal: 'Goal' as CodeEnum,
    GraphDefinition: 'GraphDefinition' as CodeEnum,
    Group: 'Group' as CodeEnum,
    GuidanceResponse: 'GuidanceResponse' as CodeEnum,
    HealthcareService: 'HealthcareService' as CodeEnum,
    ImagingManifest: 'ImagingManifest' as CodeEnum,
    ImagingStudy: 'ImagingStudy' as CodeEnum,
    Immunization: 'Immunization' as CodeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as CodeEnum,
    ImplementationGuide: 'ImplementationGuide' as CodeEnum,
    Library: 'Library' as CodeEnum,
    Linkage: 'Linkage' as CodeEnum,
    List: 'List' as CodeEnum,
    Location: 'Location' as CodeEnum,
    Measure: 'Measure' as CodeEnum,
    MeasureReport: 'MeasureReport' as CodeEnum,
    Media: 'Media' as CodeEnum,
    Medication: 'Medication' as CodeEnum,
    MedicationAdministration: 'MedicationAdministration' as CodeEnum,
    MedicationDispense: 'MedicationDispense' as CodeEnum,
    MedicationRequest: 'MedicationRequest' as CodeEnum,
    MedicationStatement: 'MedicationStatement' as CodeEnum,
    MessageDefinition: 'MessageDefinition' as CodeEnum,
    MessageHeader: 'MessageHeader' as CodeEnum,
    NamingSystem: 'NamingSystem' as CodeEnum,
    NutritionOrder: 'NutritionOrder' as CodeEnum,
    Observation: 'Observation' as CodeEnum,
    OperationDefinition: 'OperationDefinition' as CodeEnum,
    OperationOutcome: 'OperationOutcome' as CodeEnum,
    Organization: 'Organization' as CodeEnum,
    Parameters: 'Parameters' as CodeEnum,
    Patient: 'Patient' as CodeEnum,
    PaymentNotice: 'PaymentNotice' as CodeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as CodeEnum,
    Person: 'Person' as CodeEnum,
    PlanDefinition: 'PlanDefinition' as CodeEnum,
    Practitioner: 'Practitioner' as CodeEnum,
    PractitionerRole: 'PractitionerRole' as CodeEnum,
    Procedure: 'Procedure' as CodeEnum,
    ProcedureRequest: 'ProcedureRequest' as CodeEnum,
    ProcessRequest: 'ProcessRequest' as CodeEnum,
    ProcessResponse: 'ProcessResponse' as CodeEnum,
    Provenance: 'Provenance' as CodeEnum,
    Questionnaire: 'Questionnaire' as CodeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as CodeEnum,
    ReferralRequest: 'ReferralRequest' as CodeEnum,
    RelatedPerson: 'RelatedPerson' as CodeEnum,
    RequestGroup: 'RequestGroup' as CodeEnum,
    ResearchStudy: 'ResearchStudy' as CodeEnum,
    ResearchSubject: 'ResearchSubject' as CodeEnum,
    Resource: 'Resource' as CodeEnum,
    RiskAssessment: 'RiskAssessment' as CodeEnum,
    Schedule: 'Schedule' as CodeEnum,
    SearchParameter: 'SearchParameter' as CodeEnum,
    Sequence: 'Sequence' as CodeEnum,
    ServiceDefinition: 'ServiceDefinition' as CodeEnum,
    Slot: 'Slot' as CodeEnum,
    Specimen: 'Specimen' as CodeEnum,
    StructureDefinition: 'StructureDefinition' as CodeEnum,
    StructureMap: 'StructureMap' as CodeEnum,
    Subscription: 'Subscription' as CodeEnum,
    Substance: 'Substance' as CodeEnum,
    SupplyDelivery: 'SupplyDelivery' as CodeEnum,
    SupplyRequest: 'SupplyRequest' as CodeEnum,
    Task: 'Task' as CodeEnum,
    TestReport: 'TestReport' as CodeEnum,
    TestScript: 'TestScript' as CodeEnum,
    ValueSet: 'ValueSet' as CodeEnum,
    VisionPrescription: 'VisionPrescription' as CodeEnum,
  };
}
