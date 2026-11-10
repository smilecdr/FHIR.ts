/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Period } from './period';
import type { Reference } from './reference';

/**
 * Base StructureDefinition for DataRequirement Type
 */
export class DataRequirement {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** The type of the required data (1..1) */
  type?: DataRequirement.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** The profile of the required data (0..*) */
  profile?: Array<string>;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Array<Element | null>;
  /** Indicates that specific structure elements are referenced by the knowledge module (0..*) */
  mustSupport?: Array<string>;
  /** Id and extensions of the primitive `mustSupport`. */
  _mustSupport?: Array<Element | null>;
  /** What codes are expected (0..*) */
  codeFilter?: Array<DataRequirementCodeFilter>;
  /** What dates/date ranges are expected (0..*) */
  dateFilter?: Array<DataRequirementDateFilter>;
}

export namespace DataRequirement {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/all-types */
  export type TypeEnum =
    | 'Address'
    | 'Age'
    | 'Annotation'
    | 'Attachment'
    | 'BackboneElement'
    | 'CodeableConcept'
    | 'Coding'
    | 'ContactDetail'
    | 'ContactPoint'
    | 'Contributor'
    | 'Count'
    | 'DataRequirement'
    | 'Distance'
    | 'Dosage'
    | 'Duration'
    | 'Element'
    | 'ElementDefinition'
    | 'Extension'
    | 'HumanName'
    | 'Identifier'
    | 'Meta'
    | 'Money'
    | 'Narrative'
    | 'ParameterDefinition'
    | 'Period'
    | 'Quantity'
    | 'Range'
    | 'Ratio'
    | 'Reference'
    | 'RelatedArtifact'
    | 'SampledData'
    | 'Signature'
    | 'SimpleQuantity'
    | 'Timing'
    | 'TriggerDefinition'
    | 'UsageContext'
    | 'base64Binary'
    | 'boolean'
    | 'code'
    | 'date'
    | 'dateTime'
    | 'decimal'
    | 'id'
    | 'instant'
    | 'integer'
    | 'markdown'
    | 'oid'
    | 'positiveInt'
    | 'string'
    | 'time'
    | 'unsignedInt'
    | 'uri'
    | 'uuid'
    | 'xhtml'
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
    | 'VisionPrescription'
    | 'Type'
    | 'Any';
  export const TypeEnum = {
    Address: 'Address' as TypeEnum,
    Age: 'Age' as TypeEnum,
    Annotation: 'Annotation' as TypeEnum,
    Attachment: 'Attachment' as TypeEnum,
    BackboneElement: 'BackboneElement' as TypeEnum,
    CodeableConcept: 'CodeableConcept' as TypeEnum,
    Coding: 'Coding' as TypeEnum,
    ContactDetail: 'ContactDetail' as TypeEnum,
    ContactPoint: 'ContactPoint' as TypeEnum,
    Contributor: 'Contributor' as TypeEnum,
    Count: 'Count' as TypeEnum,
    DataRequirement: 'DataRequirement' as TypeEnum,
    Distance: 'Distance' as TypeEnum,
    Dosage: 'Dosage' as TypeEnum,
    Duration: 'Duration' as TypeEnum,
    Element: 'Element' as TypeEnum,
    ElementDefinition: 'ElementDefinition' as TypeEnum,
    Extension: 'Extension' as TypeEnum,
    HumanName: 'HumanName' as TypeEnum,
    Identifier: 'Identifier' as TypeEnum,
    Meta: 'Meta' as TypeEnum,
    Money: 'Money' as TypeEnum,
    Narrative: 'Narrative' as TypeEnum,
    ParameterDefinition: 'ParameterDefinition' as TypeEnum,
    Period: 'Period' as TypeEnum,
    Quantity: 'Quantity' as TypeEnum,
    Range: 'Range' as TypeEnum,
    Ratio: 'Ratio' as TypeEnum,
    Reference: 'Reference' as TypeEnum,
    RelatedArtifact: 'RelatedArtifact' as TypeEnum,
    SampledData: 'SampledData' as TypeEnum,
    Signature: 'Signature' as TypeEnum,
    SimpleQuantity: 'SimpleQuantity' as TypeEnum,
    Timing: 'Timing' as TypeEnum,
    TriggerDefinition: 'TriggerDefinition' as TypeEnum,
    UsageContext: 'UsageContext' as TypeEnum,
    Base64Binary: 'base64Binary' as TypeEnum,
    Boolean: 'boolean' as TypeEnum,
    Code: 'code' as TypeEnum,
    Date: 'date' as TypeEnum,
    DateTime: 'dateTime' as TypeEnum,
    Decimal: 'decimal' as TypeEnum,
    Id: 'id' as TypeEnum,
    Instant: 'instant' as TypeEnum,
    Integer: 'integer' as TypeEnum,
    Markdown: 'markdown' as TypeEnum,
    Oid: 'oid' as TypeEnum,
    PositiveInt: 'positiveInt' as TypeEnum,
    String: 'string' as TypeEnum,
    Time: 'time' as TypeEnum,
    UnsignedInt: 'unsignedInt' as TypeEnum,
    Uri: 'uri' as TypeEnum,
    Uuid: 'uuid' as TypeEnum,
    Xhtml: 'xhtml' as TypeEnum,
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
    Type: 'Type' as TypeEnum,
    Any: 'Any' as TypeEnum,
  };
}

/**
 * What codes are expected
 */
export class DataRequirementCodeFilter {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** The code-valued attribute of the filter (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** Valueset for the filter (0..1) */
  valueSetString?: string;
  /** Id and extensions of the primitive `valueSetString`. */
  _valueSetString?: Element;
  /** Valueset for the filter (0..1) */
  valueSetReference?: Reference;
  /** What code is expected (0..*) */
  valueCode?: Array<string>;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Array<Element | null>;
  /** What Coding is expected (0..*) */
  valueCoding?: Array<Coding>;
  /** What CodeableConcept is expected (0..*) */
  valueCodeableConcept?: Array<CodeableConcept>;
}

/**
 * What dates/date ranges are expected
 */
export class DataRequirementDateFilter {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** The date-valued attribute of the filter (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valuePeriod?: Period;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDuration?: Duration;
}
