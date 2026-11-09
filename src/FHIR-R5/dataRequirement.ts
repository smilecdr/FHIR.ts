/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
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
 * DataRequirement Type: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export interface DataRequirement {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** The type of the required data (1..1) */
  type?: DataRequirement.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** The profile of the required data (0..*) */
  profile?: Array<string>;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Array<Element | null>;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectReference?: Reference;
  /** Indicates specific structure elements that are referenced by the knowledge module (0..*) */
  mustSupport?: Array<string>;
  /** Id and extensions of the primitive `mustSupport`. */
  _mustSupport?: Array<Element | null>;
  /** What codes are expected (0..*) */
  codeFilter?: Array<DataRequirementCodeFilter>;
  /** What dates/date ranges are expected (0..*) */
  dateFilter?: Array<DataRequirementDateFilter>;
  /** What values are expected (0..*) */
  valueFilter?: Array<DataRequirementValueFilter>;
  /** Number of results (0..1) */
  limit?: number;
  /** Id and extensions of the primitive `limit`. */
  _limit?: Element;
  /** Order of the results (0..*) */
  sort?: Array<DataRequirementSort>;
}

export namespace DataRequirement {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fhir-types */
  export type TypeEnum =
    | 'Base'
    | 'Element'
    | 'BackboneElement'
    | 'DataType'
    | 'Address'
    | 'Annotation'
    | 'Attachment'
    | 'Availability'
    | 'BackboneType'
    | 'Dosage'
    | 'ElementDefinition'
    | 'MarketingStatus'
    | 'ProductShelfLife'
    | 'Timing'
    | 'CodeableConcept'
    | 'CodeableReference'
    | 'Coding'
    | 'ContactDetail'
    | 'ContactPoint'
    | 'Contributor'
    | 'DataRequirement'
    | 'Expression'
    | 'ExtendedContactDetail'
    | 'Extension'
    | 'HumanName'
    | 'Identifier'
    | 'Meta'
    | 'MonetaryComponent'
    | 'Money'
    | 'Narrative'
    | 'ParameterDefinition'
    | 'Period'
    | 'PrimitiveType'
    | 'base64Binary'
    | 'boolean'
    | 'date'
    | 'dateTime'
    | 'decimal'
    | 'instant'
    | 'integer'
    | 'positiveInt'
    | 'unsignedInt'
    | 'integer64'
    | 'string'
    | 'code'
    | 'id'
    | 'markdown'
    | 'time'
    | 'uri'
    | 'canonical'
    | 'oid'
    | 'url'
    | 'uuid'
    | 'Quantity'
    | 'Age'
    | 'Count'
    | 'Distance'
    | 'Duration'
    | 'Range'
    | 'Ratio'
    | 'RatioRange'
    | 'Reference'
    | 'RelatedArtifact'
    | 'SampledData'
    | 'Signature'
    | 'TriggerDefinition'
    | 'UsageContext'
    | 'VirtualServiceDetail'
    | 'xhtml'
    | 'Resource'
    | 'Binary'
    | 'Bundle'
    | 'DomainResource'
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
    | 'BiologicallyDerivedProduct'
    | 'BiologicallyDerivedProductDispense'
    | 'BodyStructure'
    | 'CanonicalResource'
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
    | 'MetadataResource'
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
    | 'VisionPrescription'
    | 'Parameters';
  export const TypeEnum = {
    Base: 'Base' as TypeEnum,
    Element: 'Element' as TypeEnum,
    BackboneElement: 'BackboneElement' as TypeEnum,
    DataType: 'DataType' as TypeEnum,
    Address: 'Address' as TypeEnum,
    Annotation: 'Annotation' as TypeEnum,
    Attachment: 'Attachment' as TypeEnum,
    Availability: 'Availability' as TypeEnum,
    BackboneType: 'BackboneType' as TypeEnum,
    Dosage: 'Dosage' as TypeEnum,
    ElementDefinition: 'ElementDefinition' as TypeEnum,
    MarketingStatus: 'MarketingStatus' as TypeEnum,
    ProductShelfLife: 'ProductShelfLife' as TypeEnum,
    Timing: 'Timing' as TypeEnum,
    CodeableConcept: 'CodeableConcept' as TypeEnum,
    CodeableReference: 'CodeableReference' as TypeEnum,
    Coding: 'Coding' as TypeEnum,
    ContactDetail: 'ContactDetail' as TypeEnum,
    ContactPoint: 'ContactPoint' as TypeEnum,
    Contributor: 'Contributor' as TypeEnum,
    DataRequirement: 'DataRequirement' as TypeEnum,
    Expression: 'Expression' as TypeEnum,
    ExtendedContactDetail: 'ExtendedContactDetail' as TypeEnum,
    Extension: 'Extension' as TypeEnum,
    HumanName: 'HumanName' as TypeEnum,
    Identifier: 'Identifier' as TypeEnum,
    Meta: 'Meta' as TypeEnum,
    MonetaryComponent: 'MonetaryComponent' as TypeEnum,
    Money: 'Money' as TypeEnum,
    Narrative: 'Narrative' as TypeEnum,
    ParameterDefinition: 'ParameterDefinition' as TypeEnum,
    Period: 'Period' as TypeEnum,
    PrimitiveType: 'PrimitiveType' as TypeEnum,
    Base64Binary: 'base64Binary' as TypeEnum,
    Boolean: 'boolean' as TypeEnum,
    Date: 'date' as TypeEnum,
    DateTime: 'dateTime' as TypeEnum,
    Decimal: 'decimal' as TypeEnum,
    Instant: 'instant' as TypeEnum,
    Integer: 'integer' as TypeEnum,
    PositiveInt: 'positiveInt' as TypeEnum,
    UnsignedInt: 'unsignedInt' as TypeEnum,
    Integer64: 'integer64' as TypeEnum,
    String: 'string' as TypeEnum,
    Code: 'code' as TypeEnum,
    Id: 'id' as TypeEnum,
    Markdown: 'markdown' as TypeEnum,
    Time: 'time' as TypeEnum,
    Uri: 'uri' as TypeEnum,
    Canonical: 'canonical' as TypeEnum,
    Oid: 'oid' as TypeEnum,
    Url: 'url' as TypeEnum,
    Uuid: 'uuid' as TypeEnum,
    Quantity: 'Quantity' as TypeEnum,
    Age: 'Age' as TypeEnum,
    Count: 'Count' as TypeEnum,
    Distance: 'Distance' as TypeEnum,
    Duration: 'Duration' as TypeEnum,
    Range: 'Range' as TypeEnum,
    Ratio: 'Ratio' as TypeEnum,
    RatioRange: 'RatioRange' as TypeEnum,
    Reference: 'Reference' as TypeEnum,
    RelatedArtifact: 'RelatedArtifact' as TypeEnum,
    SampledData: 'SampledData' as TypeEnum,
    Signature: 'Signature' as TypeEnum,
    TriggerDefinition: 'TriggerDefinition' as TypeEnum,
    UsageContext: 'UsageContext' as TypeEnum,
    VirtualServiceDetail: 'VirtualServiceDetail' as TypeEnum,
    Xhtml: 'xhtml' as TypeEnum,
    Resource: 'Resource' as TypeEnum,
    Binary: 'Binary' as TypeEnum,
    Bundle: 'Bundle' as TypeEnum,
    DomainResource: 'DomainResource' as TypeEnum,
    Account: 'Account' as TypeEnum,
    ActivityDefinition: 'ActivityDefinition' as TypeEnum,
    ActorDefinition: 'ActorDefinition' as TypeEnum,
    AdministrableProductDefinition: 'AdministrableProductDefinition' as TypeEnum,
    AdverseEvent: 'AdverseEvent' as TypeEnum,
    AllergyIntolerance: 'AllergyIntolerance' as TypeEnum,
    Appointment: 'Appointment' as TypeEnum,
    AppointmentResponse: 'AppointmentResponse' as TypeEnum,
    ArtifactAssessment: 'ArtifactAssessment' as TypeEnum,
    AuditEvent: 'AuditEvent' as TypeEnum,
    Basic: 'Basic' as TypeEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as TypeEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as TypeEnum,
    BodyStructure: 'BodyStructure' as TypeEnum,
    CanonicalResource: 'CanonicalResource' as TypeEnum,
    CapabilityStatement: 'CapabilityStatement' as TypeEnum,
    CarePlan: 'CarePlan' as TypeEnum,
    CareTeam: 'CareTeam' as TypeEnum,
    ChargeItem: 'ChargeItem' as TypeEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as TypeEnum,
    Citation: 'Citation' as TypeEnum,
    Claim: 'Claim' as TypeEnum,
    ClaimResponse: 'ClaimResponse' as TypeEnum,
    ClinicalImpression: 'ClinicalImpression' as TypeEnum,
    ClinicalUseDefinition: 'ClinicalUseDefinition' as TypeEnum,
    CodeSystem: 'CodeSystem' as TypeEnum,
    Communication: 'Communication' as TypeEnum,
    CommunicationRequest: 'CommunicationRequest' as TypeEnum,
    CompartmentDefinition: 'CompartmentDefinition' as TypeEnum,
    Composition: 'Composition' as TypeEnum,
    ConceptMap: 'ConceptMap' as TypeEnum,
    Condition: 'Condition' as TypeEnum,
    ConditionDefinition: 'ConditionDefinition' as TypeEnum,
    Consent: 'Consent' as TypeEnum,
    Contract: 'Contract' as TypeEnum,
    Coverage: 'Coverage' as TypeEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as TypeEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as TypeEnum,
    DetectedIssue: 'DetectedIssue' as TypeEnum,
    Device: 'Device' as TypeEnum,
    DeviceAssociation: 'DeviceAssociation' as TypeEnum,
    DeviceDefinition: 'DeviceDefinition' as TypeEnum,
    DeviceDispense: 'DeviceDispense' as TypeEnum,
    DeviceMetric: 'DeviceMetric' as TypeEnum,
    DeviceRequest: 'DeviceRequest' as TypeEnum,
    DeviceUsage: 'DeviceUsage' as TypeEnum,
    DiagnosticReport: 'DiagnosticReport' as TypeEnum,
    DocumentReference: 'DocumentReference' as TypeEnum,
    Encounter: 'Encounter' as TypeEnum,
    EncounterHistory: 'EncounterHistory' as TypeEnum,
    Endpoint: 'Endpoint' as TypeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as TypeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as TypeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as TypeEnum,
    EventDefinition: 'EventDefinition' as TypeEnum,
    Evidence: 'Evidence' as TypeEnum,
    EvidenceReport: 'EvidenceReport' as TypeEnum,
    EvidenceVariable: 'EvidenceVariable' as TypeEnum,
    ExampleScenario: 'ExampleScenario' as TypeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as TypeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as TypeEnum,
    Flag: 'Flag' as TypeEnum,
    FormularyItem: 'FormularyItem' as TypeEnum,
    GenomicStudy: 'GenomicStudy' as TypeEnum,
    Goal: 'Goal' as TypeEnum,
    GraphDefinition: 'GraphDefinition' as TypeEnum,
    Group: 'Group' as TypeEnum,
    GuidanceResponse: 'GuidanceResponse' as TypeEnum,
    HealthcareService: 'HealthcareService' as TypeEnum,
    ImagingSelection: 'ImagingSelection' as TypeEnum,
    ImagingStudy: 'ImagingStudy' as TypeEnum,
    Immunization: 'Immunization' as TypeEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as TypeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as TypeEnum,
    ImplementationGuide: 'ImplementationGuide' as TypeEnum,
    Ingredient: 'Ingredient' as TypeEnum,
    InsurancePlan: 'InsurancePlan' as TypeEnum,
    InventoryItem: 'InventoryItem' as TypeEnum,
    InventoryReport: 'InventoryReport' as TypeEnum,
    Invoice: 'Invoice' as TypeEnum,
    Library: 'Library' as TypeEnum,
    Linkage: 'Linkage' as TypeEnum,
    List: 'List' as TypeEnum,
    Location: 'Location' as TypeEnum,
    ManufacturedItemDefinition: 'ManufacturedItemDefinition' as TypeEnum,
    Measure: 'Measure' as TypeEnum,
    MeasureReport: 'MeasureReport' as TypeEnum,
    Medication: 'Medication' as TypeEnum,
    MedicationAdministration: 'MedicationAdministration' as TypeEnum,
    MedicationDispense: 'MedicationDispense' as TypeEnum,
    MedicationKnowledge: 'MedicationKnowledge' as TypeEnum,
    MedicationRequest: 'MedicationRequest' as TypeEnum,
    MedicationStatement: 'MedicationStatement' as TypeEnum,
    MedicinalProductDefinition: 'MedicinalProductDefinition' as TypeEnum,
    MessageDefinition: 'MessageDefinition' as TypeEnum,
    MessageHeader: 'MessageHeader' as TypeEnum,
    MetadataResource: 'MetadataResource' as TypeEnum,
    MolecularSequence: 'MolecularSequence' as TypeEnum,
    NamingSystem: 'NamingSystem' as TypeEnum,
    NutritionIntake: 'NutritionIntake' as TypeEnum,
    NutritionOrder: 'NutritionOrder' as TypeEnum,
    NutritionProduct: 'NutritionProduct' as TypeEnum,
    Observation: 'Observation' as TypeEnum,
    ObservationDefinition: 'ObservationDefinition' as TypeEnum,
    OperationDefinition: 'OperationDefinition' as TypeEnum,
    OperationOutcome: 'OperationOutcome' as TypeEnum,
    Organization: 'Organization' as TypeEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as TypeEnum,
    PackagedProductDefinition: 'PackagedProductDefinition' as TypeEnum,
    Patient: 'Patient' as TypeEnum,
    PaymentNotice: 'PaymentNotice' as TypeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as TypeEnum,
    Permission: 'Permission' as TypeEnum,
    Person: 'Person' as TypeEnum,
    PlanDefinition: 'PlanDefinition' as TypeEnum,
    Practitioner: 'Practitioner' as TypeEnum,
    PractitionerRole: 'PractitionerRole' as TypeEnum,
    Procedure: 'Procedure' as TypeEnum,
    Provenance: 'Provenance' as TypeEnum,
    Questionnaire: 'Questionnaire' as TypeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as TypeEnum,
    RegulatedAuthorization: 'RegulatedAuthorization' as TypeEnum,
    RelatedPerson: 'RelatedPerson' as TypeEnum,
    RequestOrchestration: 'RequestOrchestration' as TypeEnum,
    Requirements: 'Requirements' as TypeEnum,
    ResearchStudy: 'ResearchStudy' as TypeEnum,
    ResearchSubject: 'ResearchSubject' as TypeEnum,
    RiskAssessment: 'RiskAssessment' as TypeEnum,
    Schedule: 'Schedule' as TypeEnum,
    SearchParameter: 'SearchParameter' as TypeEnum,
    ServiceRequest: 'ServiceRequest' as TypeEnum,
    Slot: 'Slot' as TypeEnum,
    Specimen: 'Specimen' as TypeEnum,
    SpecimenDefinition: 'SpecimenDefinition' as TypeEnum,
    StructureDefinition: 'StructureDefinition' as TypeEnum,
    StructureMap: 'StructureMap' as TypeEnum,
    Subscription: 'Subscription' as TypeEnum,
    SubscriptionStatus: 'SubscriptionStatus' as TypeEnum,
    SubscriptionTopic: 'SubscriptionTopic' as TypeEnum,
    Substance: 'Substance' as TypeEnum,
    SubstanceDefinition: 'SubstanceDefinition' as TypeEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as TypeEnum,
    SubstancePolymer: 'SubstancePolymer' as TypeEnum,
    SubstanceProtein: 'SubstanceProtein' as TypeEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as TypeEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as TypeEnum,
    SupplyDelivery: 'SupplyDelivery' as TypeEnum,
    SupplyRequest: 'SupplyRequest' as TypeEnum,
    Task: 'Task' as TypeEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as TypeEnum,
    TestPlan: 'TestPlan' as TypeEnum,
    TestReport: 'TestReport' as TypeEnum,
    TestScript: 'TestScript' as TypeEnum,
    Transport: 'Transport' as TypeEnum,
    ValueSet: 'ValueSet' as TypeEnum,
    VerificationResult: 'VerificationResult' as TypeEnum,
    VisionPrescription: 'VisionPrescription' as TypeEnum,
    Parameters: 'Parameters' as TypeEnum,
  };
}

/**
 * What codes are expected
 */
export interface DataRequirementCodeFilter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** A code-valued attribute to filter on (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** A coded (token) parameter to search on (0..1) */
  searchParam?: string;
  /** Id and extensions of the primitive `searchParam`. */
  _searchParam?: Element;
  /** ValueSet for the filter (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;
  /** What code is expected (0..*) */
  code?: Array<Coding>;
}

/**
 * What dates/date ranges are expected
 */
export interface DataRequirementDateFilter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** A date-valued attribute to filter on (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** A date valued parameter to search on (0..1) */
  searchParam?: string;
  /** Id and extensions of the primitive `searchParam`. */
  _searchParam?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valuePeriod?: Period;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDuration?: Duration;
}

/**
 * What values are expected
 */
export interface DataRequirementValueFilter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** An attribute to filter on (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** A parameter to search on (0..1) */
  searchParam?: string;
  /** Id and extensions of the primitive `searchParam`. */
  _searchParam?: Element;
  /** eq | gt | lt | ge | le | sa | eb (0..1) */
  comparator?: DataRequirementValueFilter.ComparatorEnum;
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valuePeriod?: Period;
  /** The value of the filter, as a Period, DateTime, or Duration value (0..1) */
  valueDuration?: Duration;
}

export namespace DataRequirementValueFilter {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/value-filter-comparator */
  export type ComparatorEnum = 'eq' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb';
  export const ComparatorEnum = {
    Eq: 'eq' as ComparatorEnum,
    Gt: 'gt' as ComparatorEnum,
    Lt: 'lt' as ComparatorEnum,
    Ge: 'ge' as ComparatorEnum,
    Le: 'le' as ComparatorEnum,
    Sa: 'sa' as ComparatorEnum,
    Eb: 'eb' as ComparatorEnum,
  };
}

/**
 * Order of the results
 */
export interface DataRequirementSort {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** The name of the attribute to perform the sort (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** ascending | descending (1..1) */
  direction?: DataRequirementSort.DirectionEnum;
  /** Id and extensions of the primitive `direction`. */
  _direction?: Element;
}

export namespace DataRequirementSort {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/sort-direction */
  export type DirectionEnum = 'ascending' | 'descending';
  export const DirectionEnum = {
    Ascending: 'ascending' as DirectionEnum,
    Descending: 'descending' as DirectionEnum,
  };
}
