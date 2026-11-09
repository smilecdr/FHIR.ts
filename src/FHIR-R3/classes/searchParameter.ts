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
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for SearchParameter Resource
 */
export class SearchParameter {
  resourceType: 'SearchParameter';
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
  /** Logical URI to reference this search parameter (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business version of the search parameter (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this search parameter (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: SearchParameter.StatusEnum;
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
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for search parameter (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this search parameter is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Code used in URL (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** The resource type(s) this search parameter applies to (1..*) */
  base?: Array<SearchParameter.BaseEnum>;
  /** Id and extensions of the primitive `base`. */
  _base?: Array<Element | null>;
  /** number | date | string | token | reference | composite | quantity | uri (1..1) */
  type?: SearchParameter.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Original Definition for the search parameter (0..1) */
  derivedFrom?: string;
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: Element;
  /** Natural language description of the search parameter (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** FHIRPath expression that extracts the values (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
  /** XPath that extracts the values (0..1) */
  xpath?: string;
  /** Id and extensions of the primitive `xpath`. */
  _xpath?: Element;
  /** normal | phonetic | nearby | distance | other (0..1) */
  xpathUsage?: SearchParameter.XpathUsageEnum;
  /** Id and extensions of the primitive `xpathUsage`. */
  _xpathUsage?: Element;
  /** Types of resource (if a resource reference) (0..*) */
  target?: Array<SearchParameter.TargetEnum>;
  /** Id and extensions of the primitive `target`. */
  _target?: Array<Element | null>;
  /** eq | ne | gt | lt | ge | le | sa | eb | ap (0..*) */
  comparator?: Array<SearchParameter.ComparatorEnum>;
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: Array<Element | null>;
  /** missing | exact | contains | not | text | in | not-in | below | above | type (0..*) */
  modifier?: Array<SearchParameter.ModifierEnum>;
  /** Id and extensions of the primitive `modifier`. */
  _modifier?: Array<Element | null>;
  /** Chained names supported (0..*) */
  chain?: Array<string>;
  /** Id and extensions of the primitive `chain`. */
  _chain?: Array<Element | null>;
  /** For Composite resources to define the parts (0..*) */
  component?: Array<SearchParameterComponent>;
}

export namespace SearchParameter {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type BaseEnum =
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
  export const BaseEnum = {
    Account: 'Account' as BaseEnum,
    ActivityDefinition: 'ActivityDefinition' as BaseEnum,
    AdverseEvent: 'AdverseEvent' as BaseEnum,
    AllergyIntolerance: 'AllergyIntolerance' as BaseEnum,
    Appointment: 'Appointment' as BaseEnum,
    AppointmentResponse: 'AppointmentResponse' as BaseEnum,
    AuditEvent: 'AuditEvent' as BaseEnum,
    Basic: 'Basic' as BaseEnum,
    Binary: 'Binary' as BaseEnum,
    BodySite: 'BodySite' as BaseEnum,
    Bundle: 'Bundle' as BaseEnum,
    CapabilityStatement: 'CapabilityStatement' as BaseEnum,
    CarePlan: 'CarePlan' as BaseEnum,
    CareTeam: 'CareTeam' as BaseEnum,
    ChargeItem: 'ChargeItem' as BaseEnum,
    Claim: 'Claim' as BaseEnum,
    ClaimResponse: 'ClaimResponse' as BaseEnum,
    ClinicalImpression: 'ClinicalImpression' as BaseEnum,
    CodeSystem: 'CodeSystem' as BaseEnum,
    Communication: 'Communication' as BaseEnum,
    CommunicationRequest: 'CommunicationRequest' as BaseEnum,
    CompartmentDefinition: 'CompartmentDefinition' as BaseEnum,
    Composition: 'Composition' as BaseEnum,
    ConceptMap: 'ConceptMap' as BaseEnum,
    Condition: 'Condition' as BaseEnum,
    Consent: 'Consent' as BaseEnum,
    Contract: 'Contract' as BaseEnum,
    Coverage: 'Coverage' as BaseEnum,
    DataElement: 'DataElement' as BaseEnum,
    DetectedIssue: 'DetectedIssue' as BaseEnum,
    Device: 'Device' as BaseEnum,
    DeviceComponent: 'DeviceComponent' as BaseEnum,
    DeviceMetric: 'DeviceMetric' as BaseEnum,
    DeviceRequest: 'DeviceRequest' as BaseEnum,
    DeviceUseStatement: 'DeviceUseStatement' as BaseEnum,
    DiagnosticReport: 'DiagnosticReport' as BaseEnum,
    DocumentManifest: 'DocumentManifest' as BaseEnum,
    DocumentReference: 'DocumentReference' as BaseEnum,
    DomainResource: 'DomainResource' as BaseEnum,
    EligibilityRequest: 'EligibilityRequest' as BaseEnum,
    EligibilityResponse: 'EligibilityResponse' as BaseEnum,
    Encounter: 'Encounter' as BaseEnum,
    Endpoint: 'Endpoint' as BaseEnum,
    EnrollmentRequest: 'EnrollmentRequest' as BaseEnum,
    EnrollmentResponse: 'EnrollmentResponse' as BaseEnum,
    EpisodeOfCare: 'EpisodeOfCare' as BaseEnum,
    ExpansionProfile: 'ExpansionProfile' as BaseEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as BaseEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as BaseEnum,
    Flag: 'Flag' as BaseEnum,
    Goal: 'Goal' as BaseEnum,
    GraphDefinition: 'GraphDefinition' as BaseEnum,
    Group: 'Group' as BaseEnum,
    GuidanceResponse: 'GuidanceResponse' as BaseEnum,
    HealthcareService: 'HealthcareService' as BaseEnum,
    ImagingManifest: 'ImagingManifest' as BaseEnum,
    ImagingStudy: 'ImagingStudy' as BaseEnum,
    Immunization: 'Immunization' as BaseEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as BaseEnum,
    ImplementationGuide: 'ImplementationGuide' as BaseEnum,
    Library: 'Library' as BaseEnum,
    Linkage: 'Linkage' as BaseEnum,
    List: 'List' as BaseEnum,
    Location: 'Location' as BaseEnum,
    Measure: 'Measure' as BaseEnum,
    MeasureReport: 'MeasureReport' as BaseEnum,
    Media: 'Media' as BaseEnum,
    Medication: 'Medication' as BaseEnum,
    MedicationAdministration: 'MedicationAdministration' as BaseEnum,
    MedicationDispense: 'MedicationDispense' as BaseEnum,
    MedicationRequest: 'MedicationRequest' as BaseEnum,
    MedicationStatement: 'MedicationStatement' as BaseEnum,
    MessageDefinition: 'MessageDefinition' as BaseEnum,
    MessageHeader: 'MessageHeader' as BaseEnum,
    NamingSystem: 'NamingSystem' as BaseEnum,
    NutritionOrder: 'NutritionOrder' as BaseEnum,
    Observation: 'Observation' as BaseEnum,
    OperationDefinition: 'OperationDefinition' as BaseEnum,
    OperationOutcome: 'OperationOutcome' as BaseEnum,
    Organization: 'Organization' as BaseEnum,
    Parameters: 'Parameters' as BaseEnum,
    Patient: 'Patient' as BaseEnum,
    PaymentNotice: 'PaymentNotice' as BaseEnum,
    PaymentReconciliation: 'PaymentReconciliation' as BaseEnum,
    Person: 'Person' as BaseEnum,
    PlanDefinition: 'PlanDefinition' as BaseEnum,
    Practitioner: 'Practitioner' as BaseEnum,
    PractitionerRole: 'PractitionerRole' as BaseEnum,
    Procedure: 'Procedure' as BaseEnum,
    ProcedureRequest: 'ProcedureRequest' as BaseEnum,
    ProcessRequest: 'ProcessRequest' as BaseEnum,
    ProcessResponse: 'ProcessResponse' as BaseEnum,
    Provenance: 'Provenance' as BaseEnum,
    Questionnaire: 'Questionnaire' as BaseEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as BaseEnum,
    ReferralRequest: 'ReferralRequest' as BaseEnum,
    RelatedPerson: 'RelatedPerson' as BaseEnum,
    RequestGroup: 'RequestGroup' as BaseEnum,
    ResearchStudy: 'ResearchStudy' as BaseEnum,
    ResearchSubject: 'ResearchSubject' as BaseEnum,
    Resource: 'Resource' as BaseEnum,
    RiskAssessment: 'RiskAssessment' as BaseEnum,
    Schedule: 'Schedule' as BaseEnum,
    SearchParameter: 'SearchParameter' as BaseEnum,
    Sequence: 'Sequence' as BaseEnum,
    ServiceDefinition: 'ServiceDefinition' as BaseEnum,
    Slot: 'Slot' as BaseEnum,
    Specimen: 'Specimen' as BaseEnum,
    StructureDefinition: 'StructureDefinition' as BaseEnum,
    StructureMap: 'StructureMap' as BaseEnum,
    Subscription: 'Subscription' as BaseEnum,
    Substance: 'Substance' as BaseEnum,
    SupplyDelivery: 'SupplyDelivery' as BaseEnum,
    SupplyRequest: 'SupplyRequest' as BaseEnum,
    Task: 'Task' as BaseEnum,
    TestReport: 'TestReport' as BaseEnum,
    TestScript: 'TestScript' as BaseEnum,
    ValueSet: 'ValueSet' as BaseEnum,
    VisionPrescription: 'VisionPrescription' as BaseEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-param-type */
  export type TypeEnum =
    'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri';
  export const TypeEnum = {
    Number: 'number' as TypeEnum,
    Date: 'date' as TypeEnum,
    String: 'string' as TypeEnum,
    Token: 'token' as TypeEnum,
    Reference: 'reference' as TypeEnum,
    Composite: 'composite' as TypeEnum,
    Quantity: 'quantity' as TypeEnum,
    Uri: 'uri' as TypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-xpath-usage */
  export type XpathUsageEnum = 'normal' | 'phonetic' | 'nearby' | 'distance' | 'other';
  export const XpathUsageEnum = {
    Normal: 'normal' as XpathUsageEnum,
    Phonetic: 'phonetic' as XpathUsageEnum,
    Nearby: 'nearby' as XpathUsageEnum,
    Distance: 'distance' as XpathUsageEnum,
    Other: 'other' as XpathUsageEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type TargetEnum =
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
  export const TargetEnum = {
    Account: 'Account' as TargetEnum,
    ActivityDefinition: 'ActivityDefinition' as TargetEnum,
    AdverseEvent: 'AdverseEvent' as TargetEnum,
    AllergyIntolerance: 'AllergyIntolerance' as TargetEnum,
    Appointment: 'Appointment' as TargetEnum,
    AppointmentResponse: 'AppointmentResponse' as TargetEnum,
    AuditEvent: 'AuditEvent' as TargetEnum,
    Basic: 'Basic' as TargetEnum,
    Binary: 'Binary' as TargetEnum,
    BodySite: 'BodySite' as TargetEnum,
    Bundle: 'Bundle' as TargetEnum,
    CapabilityStatement: 'CapabilityStatement' as TargetEnum,
    CarePlan: 'CarePlan' as TargetEnum,
    CareTeam: 'CareTeam' as TargetEnum,
    ChargeItem: 'ChargeItem' as TargetEnum,
    Claim: 'Claim' as TargetEnum,
    ClaimResponse: 'ClaimResponse' as TargetEnum,
    ClinicalImpression: 'ClinicalImpression' as TargetEnum,
    CodeSystem: 'CodeSystem' as TargetEnum,
    Communication: 'Communication' as TargetEnum,
    CommunicationRequest: 'CommunicationRequest' as TargetEnum,
    CompartmentDefinition: 'CompartmentDefinition' as TargetEnum,
    Composition: 'Composition' as TargetEnum,
    ConceptMap: 'ConceptMap' as TargetEnum,
    Condition: 'Condition' as TargetEnum,
    Consent: 'Consent' as TargetEnum,
    Contract: 'Contract' as TargetEnum,
    Coverage: 'Coverage' as TargetEnum,
    DataElement: 'DataElement' as TargetEnum,
    DetectedIssue: 'DetectedIssue' as TargetEnum,
    Device: 'Device' as TargetEnum,
    DeviceComponent: 'DeviceComponent' as TargetEnum,
    DeviceMetric: 'DeviceMetric' as TargetEnum,
    DeviceRequest: 'DeviceRequest' as TargetEnum,
    DeviceUseStatement: 'DeviceUseStatement' as TargetEnum,
    DiagnosticReport: 'DiagnosticReport' as TargetEnum,
    DocumentManifest: 'DocumentManifest' as TargetEnum,
    DocumentReference: 'DocumentReference' as TargetEnum,
    DomainResource: 'DomainResource' as TargetEnum,
    EligibilityRequest: 'EligibilityRequest' as TargetEnum,
    EligibilityResponse: 'EligibilityResponse' as TargetEnum,
    Encounter: 'Encounter' as TargetEnum,
    Endpoint: 'Endpoint' as TargetEnum,
    EnrollmentRequest: 'EnrollmentRequest' as TargetEnum,
    EnrollmentResponse: 'EnrollmentResponse' as TargetEnum,
    EpisodeOfCare: 'EpisodeOfCare' as TargetEnum,
    ExpansionProfile: 'ExpansionProfile' as TargetEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as TargetEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as TargetEnum,
    Flag: 'Flag' as TargetEnum,
    Goal: 'Goal' as TargetEnum,
    GraphDefinition: 'GraphDefinition' as TargetEnum,
    Group: 'Group' as TargetEnum,
    GuidanceResponse: 'GuidanceResponse' as TargetEnum,
    HealthcareService: 'HealthcareService' as TargetEnum,
    ImagingManifest: 'ImagingManifest' as TargetEnum,
    ImagingStudy: 'ImagingStudy' as TargetEnum,
    Immunization: 'Immunization' as TargetEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as TargetEnum,
    ImplementationGuide: 'ImplementationGuide' as TargetEnum,
    Library: 'Library' as TargetEnum,
    Linkage: 'Linkage' as TargetEnum,
    List: 'List' as TargetEnum,
    Location: 'Location' as TargetEnum,
    Measure: 'Measure' as TargetEnum,
    MeasureReport: 'MeasureReport' as TargetEnum,
    Media: 'Media' as TargetEnum,
    Medication: 'Medication' as TargetEnum,
    MedicationAdministration: 'MedicationAdministration' as TargetEnum,
    MedicationDispense: 'MedicationDispense' as TargetEnum,
    MedicationRequest: 'MedicationRequest' as TargetEnum,
    MedicationStatement: 'MedicationStatement' as TargetEnum,
    MessageDefinition: 'MessageDefinition' as TargetEnum,
    MessageHeader: 'MessageHeader' as TargetEnum,
    NamingSystem: 'NamingSystem' as TargetEnum,
    NutritionOrder: 'NutritionOrder' as TargetEnum,
    Observation: 'Observation' as TargetEnum,
    OperationDefinition: 'OperationDefinition' as TargetEnum,
    OperationOutcome: 'OperationOutcome' as TargetEnum,
    Organization: 'Organization' as TargetEnum,
    Parameters: 'Parameters' as TargetEnum,
    Patient: 'Patient' as TargetEnum,
    PaymentNotice: 'PaymentNotice' as TargetEnum,
    PaymentReconciliation: 'PaymentReconciliation' as TargetEnum,
    Person: 'Person' as TargetEnum,
    PlanDefinition: 'PlanDefinition' as TargetEnum,
    Practitioner: 'Practitioner' as TargetEnum,
    PractitionerRole: 'PractitionerRole' as TargetEnum,
    Procedure: 'Procedure' as TargetEnum,
    ProcedureRequest: 'ProcedureRequest' as TargetEnum,
    ProcessRequest: 'ProcessRequest' as TargetEnum,
    ProcessResponse: 'ProcessResponse' as TargetEnum,
    Provenance: 'Provenance' as TargetEnum,
    Questionnaire: 'Questionnaire' as TargetEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as TargetEnum,
    ReferralRequest: 'ReferralRequest' as TargetEnum,
    RelatedPerson: 'RelatedPerson' as TargetEnum,
    RequestGroup: 'RequestGroup' as TargetEnum,
    ResearchStudy: 'ResearchStudy' as TargetEnum,
    ResearchSubject: 'ResearchSubject' as TargetEnum,
    Resource: 'Resource' as TargetEnum,
    RiskAssessment: 'RiskAssessment' as TargetEnum,
    Schedule: 'Schedule' as TargetEnum,
    SearchParameter: 'SearchParameter' as TargetEnum,
    Sequence: 'Sequence' as TargetEnum,
    ServiceDefinition: 'ServiceDefinition' as TargetEnum,
    Slot: 'Slot' as TargetEnum,
    Specimen: 'Specimen' as TargetEnum,
    StructureDefinition: 'StructureDefinition' as TargetEnum,
    StructureMap: 'StructureMap' as TargetEnum,
    Subscription: 'Subscription' as TargetEnum,
    Substance: 'Substance' as TargetEnum,
    SupplyDelivery: 'SupplyDelivery' as TargetEnum,
    SupplyRequest: 'SupplyRequest' as TargetEnum,
    Task: 'Task' as TargetEnum,
    TestReport: 'TestReport' as TargetEnum,
    TestScript: 'TestScript' as TargetEnum,
    ValueSet: 'ValueSet' as TargetEnum,
    VisionPrescription: 'VisionPrescription' as TargetEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-comparator */
  export type ComparatorEnum = 'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap';
  export const ComparatorEnum = {
    Eq: 'eq' as ComparatorEnum,
    Ne: 'ne' as ComparatorEnum,
    Gt: 'gt' as ComparatorEnum,
    Lt: 'lt' as ComparatorEnum,
    Ge: 'ge' as ComparatorEnum,
    Le: 'le' as ComparatorEnum,
    Sa: 'sa' as ComparatorEnum,
    Eb: 'eb' as ComparatorEnum,
    Ap: 'ap' as ComparatorEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-modifier-code */
  export type ModifierEnum =
    | 'missing'
    | 'exact'
    | 'contains'
    | 'not'
    | 'text'
    | 'in'
    | 'not-in'
    | 'below'
    | 'above'
    | 'type';
  export const ModifierEnum = {
    Missing: 'missing' as ModifierEnum,
    Exact: 'exact' as ModifierEnum,
    Contains: 'contains' as ModifierEnum,
    Not: 'not' as ModifierEnum,
    Text: 'text' as ModifierEnum,
    In: 'in' as ModifierEnum,
    NotIn: 'not-in' as ModifierEnum,
    Below: 'below' as ModifierEnum,
    Above: 'above' as ModifierEnum,
    Type: 'type' as ModifierEnum,
  };
}

/**
 * For Composite resources to define the parts
 */
export class SearchParameterComponent {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Defines how the part works (1..1) */
  definition: Reference;
  /** Subexpression relative to main expression (1..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
}
