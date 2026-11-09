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
 * Base StructureDefinition for OperationDefinition Resource
 */
export class OperationDefinition {
  resourceType: 'OperationDefinition';
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
  /** Logical URI to reference this operation definition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business version of the operation definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this operation definition (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: OperationDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** operation | query (1..1) */
  kind?: OperationDefinition.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
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
  /** Natural language description of the operation definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for operation definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this operation definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Whether content is unchanged by the operation (0..1) */
  idempotent?: boolean;
  /** Id and extensions of the primitive `idempotent`. */
  _idempotent?: Element;
  /** Name used to invoke the operation (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Additional information about use (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Marks this as a profile of the base (0..1) */
  base?: Reference;
  /** Types this operation applies to (0..*) */
  resource?: Array<OperationDefinition.ResourceEnum>;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Array<Element | null>;
  /** Invoke at the system level? (1..1) */
  system?: boolean;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** Invole at the type level? (1..1) */
  type?: boolean;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Invoke on an instance? (1..1) */
  instance?: boolean;
  /** Id and extensions of the primitive `instance`. */
  _instance?: Element;
  /** Parameters for the operation/query (0..*) */
  parameter?: Array<OperationDefinitionParameter>;
  /** Define overloaded variants for when generating code (0..*) */
  overload?: Array<OperationDefinitionOverload>;
}

export namespace OperationDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/operation-kind */
  export type KindEnum = 'operation' | 'query';
  export const KindEnum = { Operation: 'operation' as KindEnum, Query: 'query' as KindEnum };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type ResourceEnum =
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
  export const ResourceEnum = {
    Account: 'Account' as ResourceEnum,
    ActivityDefinition: 'ActivityDefinition' as ResourceEnum,
    AdverseEvent: 'AdverseEvent' as ResourceEnum,
    AllergyIntolerance: 'AllergyIntolerance' as ResourceEnum,
    Appointment: 'Appointment' as ResourceEnum,
    AppointmentResponse: 'AppointmentResponse' as ResourceEnum,
    AuditEvent: 'AuditEvent' as ResourceEnum,
    Basic: 'Basic' as ResourceEnum,
    Binary: 'Binary' as ResourceEnum,
    BodySite: 'BodySite' as ResourceEnum,
    Bundle: 'Bundle' as ResourceEnum,
    CapabilityStatement: 'CapabilityStatement' as ResourceEnum,
    CarePlan: 'CarePlan' as ResourceEnum,
    CareTeam: 'CareTeam' as ResourceEnum,
    ChargeItem: 'ChargeItem' as ResourceEnum,
    Claim: 'Claim' as ResourceEnum,
    ClaimResponse: 'ClaimResponse' as ResourceEnum,
    ClinicalImpression: 'ClinicalImpression' as ResourceEnum,
    CodeSystem: 'CodeSystem' as ResourceEnum,
    Communication: 'Communication' as ResourceEnum,
    CommunicationRequest: 'CommunicationRequest' as ResourceEnum,
    CompartmentDefinition: 'CompartmentDefinition' as ResourceEnum,
    Composition: 'Composition' as ResourceEnum,
    ConceptMap: 'ConceptMap' as ResourceEnum,
    Condition: 'Condition' as ResourceEnum,
    Consent: 'Consent' as ResourceEnum,
    Contract: 'Contract' as ResourceEnum,
    Coverage: 'Coverage' as ResourceEnum,
    DataElement: 'DataElement' as ResourceEnum,
    DetectedIssue: 'DetectedIssue' as ResourceEnum,
    Device: 'Device' as ResourceEnum,
    DeviceComponent: 'DeviceComponent' as ResourceEnum,
    DeviceMetric: 'DeviceMetric' as ResourceEnum,
    DeviceRequest: 'DeviceRequest' as ResourceEnum,
    DeviceUseStatement: 'DeviceUseStatement' as ResourceEnum,
    DiagnosticReport: 'DiagnosticReport' as ResourceEnum,
    DocumentManifest: 'DocumentManifest' as ResourceEnum,
    DocumentReference: 'DocumentReference' as ResourceEnum,
    DomainResource: 'DomainResource' as ResourceEnum,
    EligibilityRequest: 'EligibilityRequest' as ResourceEnum,
    EligibilityResponse: 'EligibilityResponse' as ResourceEnum,
    Encounter: 'Encounter' as ResourceEnum,
    Endpoint: 'Endpoint' as ResourceEnum,
    EnrollmentRequest: 'EnrollmentRequest' as ResourceEnum,
    EnrollmentResponse: 'EnrollmentResponse' as ResourceEnum,
    EpisodeOfCare: 'EpisodeOfCare' as ResourceEnum,
    ExpansionProfile: 'ExpansionProfile' as ResourceEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as ResourceEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as ResourceEnum,
    Flag: 'Flag' as ResourceEnum,
    Goal: 'Goal' as ResourceEnum,
    GraphDefinition: 'GraphDefinition' as ResourceEnum,
    Group: 'Group' as ResourceEnum,
    GuidanceResponse: 'GuidanceResponse' as ResourceEnum,
    HealthcareService: 'HealthcareService' as ResourceEnum,
    ImagingManifest: 'ImagingManifest' as ResourceEnum,
    ImagingStudy: 'ImagingStudy' as ResourceEnum,
    Immunization: 'Immunization' as ResourceEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as ResourceEnum,
    ImplementationGuide: 'ImplementationGuide' as ResourceEnum,
    Library: 'Library' as ResourceEnum,
    Linkage: 'Linkage' as ResourceEnum,
    List: 'List' as ResourceEnum,
    Location: 'Location' as ResourceEnum,
    Measure: 'Measure' as ResourceEnum,
    MeasureReport: 'MeasureReport' as ResourceEnum,
    Media: 'Media' as ResourceEnum,
    Medication: 'Medication' as ResourceEnum,
    MedicationAdministration: 'MedicationAdministration' as ResourceEnum,
    MedicationDispense: 'MedicationDispense' as ResourceEnum,
    MedicationRequest: 'MedicationRequest' as ResourceEnum,
    MedicationStatement: 'MedicationStatement' as ResourceEnum,
    MessageDefinition: 'MessageDefinition' as ResourceEnum,
    MessageHeader: 'MessageHeader' as ResourceEnum,
    NamingSystem: 'NamingSystem' as ResourceEnum,
    NutritionOrder: 'NutritionOrder' as ResourceEnum,
    Observation: 'Observation' as ResourceEnum,
    OperationDefinition: 'OperationDefinition' as ResourceEnum,
    OperationOutcome: 'OperationOutcome' as ResourceEnum,
    Organization: 'Organization' as ResourceEnum,
    Parameters: 'Parameters' as ResourceEnum,
    Patient: 'Patient' as ResourceEnum,
    PaymentNotice: 'PaymentNotice' as ResourceEnum,
    PaymentReconciliation: 'PaymentReconciliation' as ResourceEnum,
    Person: 'Person' as ResourceEnum,
    PlanDefinition: 'PlanDefinition' as ResourceEnum,
    Practitioner: 'Practitioner' as ResourceEnum,
    PractitionerRole: 'PractitionerRole' as ResourceEnum,
    Procedure: 'Procedure' as ResourceEnum,
    ProcedureRequest: 'ProcedureRequest' as ResourceEnum,
    ProcessRequest: 'ProcessRequest' as ResourceEnum,
    ProcessResponse: 'ProcessResponse' as ResourceEnum,
    Provenance: 'Provenance' as ResourceEnum,
    Questionnaire: 'Questionnaire' as ResourceEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as ResourceEnum,
    ReferralRequest: 'ReferralRequest' as ResourceEnum,
    RelatedPerson: 'RelatedPerson' as ResourceEnum,
    RequestGroup: 'RequestGroup' as ResourceEnum,
    ResearchStudy: 'ResearchStudy' as ResourceEnum,
    ResearchSubject: 'ResearchSubject' as ResourceEnum,
    Resource: 'Resource' as ResourceEnum,
    RiskAssessment: 'RiskAssessment' as ResourceEnum,
    Schedule: 'Schedule' as ResourceEnum,
    SearchParameter: 'SearchParameter' as ResourceEnum,
    Sequence: 'Sequence' as ResourceEnum,
    ServiceDefinition: 'ServiceDefinition' as ResourceEnum,
    Slot: 'Slot' as ResourceEnum,
    Specimen: 'Specimen' as ResourceEnum,
    StructureDefinition: 'StructureDefinition' as ResourceEnum,
    StructureMap: 'StructureMap' as ResourceEnum,
    Subscription: 'Subscription' as ResourceEnum,
    Substance: 'Substance' as ResourceEnum,
    SupplyDelivery: 'SupplyDelivery' as ResourceEnum,
    SupplyRequest: 'SupplyRequest' as ResourceEnum,
    Task: 'Task' as ResourceEnum,
    TestReport: 'TestReport' as ResourceEnum,
    TestScript: 'TestScript' as ResourceEnum,
    ValueSet: 'ValueSet' as ResourceEnum,
    VisionPrescription: 'VisionPrescription' as ResourceEnum,
  };
}

/**
 * Parameters for the operation/query
 */
export class OperationDefinitionParameter {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name in Parameters.parameter.name or in URL (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** in | out (1..1) */
  use?: OperationDefinitionParameter.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** Minimum Cardinality (1..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;
  /** Maximum Cardinality (a number or *) (1..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;
  /** Description of meaning/use (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
  /** What type this parameter has (0..1) */
  type?: OperationDefinitionParameter.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** number | date | string | token | reference | composite | quantity | uri (0..1) */
  searchType?: OperationDefinitionParameter.SearchTypeEnum;
  /** Id and extensions of the primitive `searchType`. */
  _searchType?: Element;
  /** Profile on the type (0..1) */
  profile?: Reference;
  /** ValueSet details if this is coded (0..1) */
  binding?: OperationDefinitionBinding;
  /** Parts of a nested Parameter (0..*) */
  part?: Array<OperationDefinitionParameter>;
}

export namespace OperationDefinitionParameter {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/operation-parameter-use */
  export type UseEnum = 'in' | 'out';
  export const UseEnum = { In: 'in' as UseEnum, Out: 'out' as UseEnum };
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-param-type */
  export type SearchTypeEnum =
    'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri';
  export const SearchTypeEnum = {
    Number: 'number' as SearchTypeEnum,
    Date: 'date' as SearchTypeEnum,
    String: 'string' as SearchTypeEnum,
    Token: 'token' as SearchTypeEnum,
    Reference: 'reference' as SearchTypeEnum,
    Composite: 'composite' as SearchTypeEnum,
    Quantity: 'quantity' as SearchTypeEnum,
    Uri: 'uri' as SearchTypeEnum,
  };
}

/**
 * ValueSet details if this is coded
 */
export class OperationDefinitionBinding {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** required | extensible | preferred | example (1..1) */
  strength?: OperationDefinitionBinding.StrengthEnum;
  /** Id and extensions of the primitive `strength`. */
  _strength?: Element;
  /** Source of value set (1..1) */
  valueSetUri?: string;
  /** Id and extensions of the primitive `valueSetUri`. */
  _valueSetUri?: Element;
  /** Source of value set (1..1) */
  valueSetReference?: Reference;
}

export namespace OperationDefinitionBinding {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/binding-strength */
  export type StrengthEnum = 'required' | 'extensible' | 'preferred' | 'example';
  export const StrengthEnum = {
    Required: 'required' as StrengthEnum,
    Extensible: 'extensible' as StrengthEnum,
    Preferred: 'preferred' as StrengthEnum,
    Example: 'example' as StrengthEnum,
  };
}

/**
 * Define overloaded variants for when generating code
 */
export class OperationDefinitionOverload {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of parameter to include in overload (0..*) */
  parameterName?: Array<string>;
  /** Id and extensions of the primitive `parameterName`. */
  _parameterName?: Array<Element | null>;
  /** Comments to go on overload (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
}
