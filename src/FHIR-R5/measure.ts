/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * The Measure resource provides the definition of a quality measure.
 */
export interface Measure {
  resourceType: 'Measure';
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
  /** Canonical identifier for this measure, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the measure (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the measure (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this measure (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this measure (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Subordinate title of the measure (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: Measure.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectReference?: Reference;
  /** Population basis (0..1) */
  basis?: Measure.BasisEnum;
  /** Id and extensions of the primitive `basis`. */
  _basis?: Element;
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
  /** Natural language description of the measure (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for measure (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this measure is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Describes the clinical usage of the measure (0..1) */
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
  /** When the measure was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the measure was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the measure is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** The category of the measure, such as Education, Treatment, Assessment, etc (0..*) */
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
  /** Logic used by the measure (0..*) */
  library?: Array<string>;
  /** Id and extensions of the primitive `library`. */
  _library?: Array<Element | null>;
  /** Disclaimer for use of the measure or its referenced content (0..1) */
  disclaimer?: string;
  /** Id and extensions of the primitive `disclaimer`. */
  _disclaimer?: Element;
  /** proportion | ratio | continuous-variable | cohort (0..1) */
  scoring?: CodeableConcept;
  /** What units? (0..1) */
  scoringUnit?: CodeableConcept;
  /** opportunity | all-or-nothing | linear | weighted (0..1) */
  compositeScoring?: CodeableConcept;
  /** process | outcome | structure | patient-reported-outcome | composite (0..*) */
  type?: Array<CodeableConcept>;
  /** How risk adjustment is applied for this measure (0..1) */
  riskAdjustment?: string;
  /** Id and extensions of the primitive `riskAdjustment`. */
  _riskAdjustment?: Element;
  /** How is rate aggregation performed for this measure (0..1) */
  rateAggregation?: string;
  /** Id and extensions of the primitive `rateAggregation`. */
  _rateAggregation?: Element;
  /** Detailed description of why the measure exists (0..1) */
  rationale?: string;
  /** Id and extensions of the primitive `rationale`. */
  _rationale?: Element;
  /** Summary of clinical guidelines (0..1) */
  clinicalRecommendationStatement?: string;
  /** Id and extensions of the primitive `clinicalRecommendationStatement`. */
  _clinicalRecommendationStatement?: Element;
  /** increase | decrease (0..1) */
  improvementNotation?: CodeableConcept;
  /** Defined terms used in the measure documentation (0..*) */
  term?: Array<MeasureTerm>;
  /** Additional guidance for implementers (deprecated) (0..1) */
  guidance?: string;
  /** Id and extensions of the primitive `guidance`. */
  _guidance?: Element;
  /** Population criteria group (0..*) */
  group?: Array<MeasureGroup>;
  /** What other data should be reported with the measure (0..*) */
  supplementalData?: Array<MeasureSupplementalData>;
}

export namespace Measure {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fhir-types */
  export type BasisEnum =
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
  export const BasisEnum = {
    Base: 'Base' as BasisEnum,
    Element: 'Element' as BasisEnum,
    BackboneElement: 'BackboneElement' as BasisEnum,
    DataType: 'DataType' as BasisEnum,
    Address: 'Address' as BasisEnum,
    Annotation: 'Annotation' as BasisEnum,
    Attachment: 'Attachment' as BasisEnum,
    Availability: 'Availability' as BasisEnum,
    BackboneType: 'BackboneType' as BasisEnum,
    Dosage: 'Dosage' as BasisEnum,
    ElementDefinition: 'ElementDefinition' as BasisEnum,
    MarketingStatus: 'MarketingStatus' as BasisEnum,
    ProductShelfLife: 'ProductShelfLife' as BasisEnum,
    Timing: 'Timing' as BasisEnum,
    CodeableConcept: 'CodeableConcept' as BasisEnum,
    CodeableReference: 'CodeableReference' as BasisEnum,
    Coding: 'Coding' as BasisEnum,
    ContactDetail: 'ContactDetail' as BasisEnum,
    ContactPoint: 'ContactPoint' as BasisEnum,
    Contributor: 'Contributor' as BasisEnum,
    DataRequirement: 'DataRequirement' as BasisEnum,
    Expression: 'Expression' as BasisEnum,
    ExtendedContactDetail: 'ExtendedContactDetail' as BasisEnum,
    Extension: 'Extension' as BasisEnum,
    HumanName: 'HumanName' as BasisEnum,
    Identifier: 'Identifier' as BasisEnum,
    Meta: 'Meta' as BasisEnum,
    MonetaryComponent: 'MonetaryComponent' as BasisEnum,
    Money: 'Money' as BasisEnum,
    Narrative: 'Narrative' as BasisEnum,
    ParameterDefinition: 'ParameterDefinition' as BasisEnum,
    Period: 'Period' as BasisEnum,
    PrimitiveType: 'PrimitiveType' as BasisEnum,
    Base64Binary: 'base64Binary' as BasisEnum,
    Boolean: 'boolean' as BasisEnum,
    Date: 'date' as BasisEnum,
    DateTime: 'dateTime' as BasisEnum,
    Decimal: 'decimal' as BasisEnum,
    Instant: 'instant' as BasisEnum,
    Integer: 'integer' as BasisEnum,
    PositiveInt: 'positiveInt' as BasisEnum,
    UnsignedInt: 'unsignedInt' as BasisEnum,
    Integer64: 'integer64' as BasisEnum,
    String: 'string' as BasisEnum,
    Code: 'code' as BasisEnum,
    Id: 'id' as BasisEnum,
    Markdown: 'markdown' as BasisEnum,
    Time: 'time' as BasisEnum,
    Uri: 'uri' as BasisEnum,
    Canonical: 'canonical' as BasisEnum,
    Oid: 'oid' as BasisEnum,
    Url: 'url' as BasisEnum,
    Uuid: 'uuid' as BasisEnum,
    Quantity: 'Quantity' as BasisEnum,
    Age: 'Age' as BasisEnum,
    Count: 'Count' as BasisEnum,
    Distance: 'Distance' as BasisEnum,
    Duration: 'Duration' as BasisEnum,
    Range: 'Range' as BasisEnum,
    Ratio: 'Ratio' as BasisEnum,
    RatioRange: 'RatioRange' as BasisEnum,
    Reference: 'Reference' as BasisEnum,
    RelatedArtifact: 'RelatedArtifact' as BasisEnum,
    SampledData: 'SampledData' as BasisEnum,
    Signature: 'Signature' as BasisEnum,
    TriggerDefinition: 'TriggerDefinition' as BasisEnum,
    UsageContext: 'UsageContext' as BasisEnum,
    VirtualServiceDetail: 'VirtualServiceDetail' as BasisEnum,
    Xhtml: 'xhtml' as BasisEnum,
    Resource: 'Resource' as BasisEnum,
    Binary: 'Binary' as BasisEnum,
    Bundle: 'Bundle' as BasisEnum,
    DomainResource: 'DomainResource' as BasisEnum,
    Account: 'Account' as BasisEnum,
    ActivityDefinition: 'ActivityDefinition' as BasisEnum,
    ActorDefinition: 'ActorDefinition' as BasisEnum,
    AdministrableProductDefinition: 'AdministrableProductDefinition' as BasisEnum,
    AdverseEvent: 'AdverseEvent' as BasisEnum,
    AllergyIntolerance: 'AllergyIntolerance' as BasisEnum,
    Appointment: 'Appointment' as BasisEnum,
    AppointmentResponse: 'AppointmentResponse' as BasisEnum,
    ArtifactAssessment: 'ArtifactAssessment' as BasisEnum,
    AuditEvent: 'AuditEvent' as BasisEnum,
    Basic: 'Basic' as BasisEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as BasisEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as BasisEnum,
    BodyStructure: 'BodyStructure' as BasisEnum,
    CanonicalResource: 'CanonicalResource' as BasisEnum,
    CapabilityStatement: 'CapabilityStatement' as BasisEnum,
    CarePlan: 'CarePlan' as BasisEnum,
    CareTeam: 'CareTeam' as BasisEnum,
    ChargeItem: 'ChargeItem' as BasisEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as BasisEnum,
    Citation: 'Citation' as BasisEnum,
    Claim: 'Claim' as BasisEnum,
    ClaimResponse: 'ClaimResponse' as BasisEnum,
    ClinicalImpression: 'ClinicalImpression' as BasisEnum,
    ClinicalUseDefinition: 'ClinicalUseDefinition' as BasisEnum,
    CodeSystem: 'CodeSystem' as BasisEnum,
    Communication: 'Communication' as BasisEnum,
    CommunicationRequest: 'CommunicationRequest' as BasisEnum,
    CompartmentDefinition: 'CompartmentDefinition' as BasisEnum,
    Composition: 'Composition' as BasisEnum,
    ConceptMap: 'ConceptMap' as BasisEnum,
    Condition: 'Condition' as BasisEnum,
    ConditionDefinition: 'ConditionDefinition' as BasisEnum,
    Consent: 'Consent' as BasisEnum,
    Contract: 'Contract' as BasisEnum,
    Coverage: 'Coverage' as BasisEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as BasisEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as BasisEnum,
    DetectedIssue: 'DetectedIssue' as BasisEnum,
    Device: 'Device' as BasisEnum,
    DeviceAssociation: 'DeviceAssociation' as BasisEnum,
    DeviceDefinition: 'DeviceDefinition' as BasisEnum,
    DeviceDispense: 'DeviceDispense' as BasisEnum,
    DeviceMetric: 'DeviceMetric' as BasisEnum,
    DeviceRequest: 'DeviceRequest' as BasisEnum,
    DeviceUsage: 'DeviceUsage' as BasisEnum,
    DiagnosticReport: 'DiagnosticReport' as BasisEnum,
    DocumentReference: 'DocumentReference' as BasisEnum,
    Encounter: 'Encounter' as BasisEnum,
    EncounterHistory: 'EncounterHistory' as BasisEnum,
    Endpoint: 'Endpoint' as BasisEnum,
    EnrollmentRequest: 'EnrollmentRequest' as BasisEnum,
    EnrollmentResponse: 'EnrollmentResponse' as BasisEnum,
    EpisodeOfCare: 'EpisodeOfCare' as BasisEnum,
    EventDefinition: 'EventDefinition' as BasisEnum,
    Evidence: 'Evidence' as BasisEnum,
    EvidenceReport: 'EvidenceReport' as BasisEnum,
    EvidenceVariable: 'EvidenceVariable' as BasisEnum,
    ExampleScenario: 'ExampleScenario' as BasisEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as BasisEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as BasisEnum,
    Flag: 'Flag' as BasisEnum,
    FormularyItem: 'FormularyItem' as BasisEnum,
    GenomicStudy: 'GenomicStudy' as BasisEnum,
    Goal: 'Goal' as BasisEnum,
    GraphDefinition: 'GraphDefinition' as BasisEnum,
    Group: 'Group' as BasisEnum,
    GuidanceResponse: 'GuidanceResponse' as BasisEnum,
    HealthcareService: 'HealthcareService' as BasisEnum,
    ImagingSelection: 'ImagingSelection' as BasisEnum,
    ImagingStudy: 'ImagingStudy' as BasisEnum,
    Immunization: 'Immunization' as BasisEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as BasisEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as BasisEnum,
    ImplementationGuide: 'ImplementationGuide' as BasisEnum,
    Ingredient: 'Ingredient' as BasisEnum,
    InsurancePlan: 'InsurancePlan' as BasisEnum,
    InventoryItem: 'InventoryItem' as BasisEnum,
    InventoryReport: 'InventoryReport' as BasisEnum,
    Invoice: 'Invoice' as BasisEnum,
    Library: 'Library' as BasisEnum,
    Linkage: 'Linkage' as BasisEnum,
    List: 'List' as BasisEnum,
    Location: 'Location' as BasisEnum,
    ManufacturedItemDefinition: 'ManufacturedItemDefinition' as BasisEnum,
    Measure: 'Measure' as BasisEnum,
    MeasureReport: 'MeasureReport' as BasisEnum,
    Medication: 'Medication' as BasisEnum,
    MedicationAdministration: 'MedicationAdministration' as BasisEnum,
    MedicationDispense: 'MedicationDispense' as BasisEnum,
    MedicationKnowledge: 'MedicationKnowledge' as BasisEnum,
    MedicationRequest: 'MedicationRequest' as BasisEnum,
    MedicationStatement: 'MedicationStatement' as BasisEnum,
    MedicinalProductDefinition: 'MedicinalProductDefinition' as BasisEnum,
    MessageDefinition: 'MessageDefinition' as BasisEnum,
    MessageHeader: 'MessageHeader' as BasisEnum,
    MetadataResource: 'MetadataResource' as BasisEnum,
    MolecularSequence: 'MolecularSequence' as BasisEnum,
    NamingSystem: 'NamingSystem' as BasisEnum,
    NutritionIntake: 'NutritionIntake' as BasisEnum,
    NutritionOrder: 'NutritionOrder' as BasisEnum,
    NutritionProduct: 'NutritionProduct' as BasisEnum,
    Observation: 'Observation' as BasisEnum,
    ObservationDefinition: 'ObservationDefinition' as BasisEnum,
    OperationDefinition: 'OperationDefinition' as BasisEnum,
    OperationOutcome: 'OperationOutcome' as BasisEnum,
    Organization: 'Organization' as BasisEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as BasisEnum,
    PackagedProductDefinition: 'PackagedProductDefinition' as BasisEnum,
    Patient: 'Patient' as BasisEnum,
    PaymentNotice: 'PaymentNotice' as BasisEnum,
    PaymentReconciliation: 'PaymentReconciliation' as BasisEnum,
    Permission: 'Permission' as BasisEnum,
    Person: 'Person' as BasisEnum,
    PlanDefinition: 'PlanDefinition' as BasisEnum,
    Practitioner: 'Practitioner' as BasisEnum,
    PractitionerRole: 'PractitionerRole' as BasisEnum,
    Procedure: 'Procedure' as BasisEnum,
    Provenance: 'Provenance' as BasisEnum,
    Questionnaire: 'Questionnaire' as BasisEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as BasisEnum,
    RegulatedAuthorization: 'RegulatedAuthorization' as BasisEnum,
    RelatedPerson: 'RelatedPerson' as BasisEnum,
    RequestOrchestration: 'RequestOrchestration' as BasisEnum,
    Requirements: 'Requirements' as BasisEnum,
    ResearchStudy: 'ResearchStudy' as BasisEnum,
    ResearchSubject: 'ResearchSubject' as BasisEnum,
    RiskAssessment: 'RiskAssessment' as BasisEnum,
    Schedule: 'Schedule' as BasisEnum,
    SearchParameter: 'SearchParameter' as BasisEnum,
    ServiceRequest: 'ServiceRequest' as BasisEnum,
    Slot: 'Slot' as BasisEnum,
    Specimen: 'Specimen' as BasisEnum,
    SpecimenDefinition: 'SpecimenDefinition' as BasisEnum,
    StructureDefinition: 'StructureDefinition' as BasisEnum,
    StructureMap: 'StructureMap' as BasisEnum,
    Subscription: 'Subscription' as BasisEnum,
    SubscriptionStatus: 'SubscriptionStatus' as BasisEnum,
    SubscriptionTopic: 'SubscriptionTopic' as BasisEnum,
    Substance: 'Substance' as BasisEnum,
    SubstanceDefinition: 'SubstanceDefinition' as BasisEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as BasisEnum,
    SubstancePolymer: 'SubstancePolymer' as BasisEnum,
    SubstanceProtein: 'SubstanceProtein' as BasisEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as BasisEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as BasisEnum,
    SupplyDelivery: 'SupplyDelivery' as BasisEnum,
    SupplyRequest: 'SupplyRequest' as BasisEnum,
    Task: 'Task' as BasisEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as BasisEnum,
    TestPlan: 'TestPlan' as BasisEnum,
    TestReport: 'TestReport' as BasisEnum,
    TestScript: 'TestScript' as BasisEnum,
    Transport: 'Transport' as BasisEnum,
    ValueSet: 'ValueSet' as BasisEnum,
    VerificationResult: 'VerificationResult' as BasisEnum,
    VisionPrescription: 'VisionPrescription' as BasisEnum,
    Parameters: 'Parameters' as BasisEnum,
  };
}

/**
 * Defined terms used in the measure documentation
 */
export interface MeasureTerm {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What term? (0..1) */
  code?: CodeableConcept;
  /** Meaning of the term (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
}

/**
 * Population criteria group
 */
export interface MeasureGroup {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique id for group in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** Meaning of the group (0..1) */
  code?: CodeableConcept;
  /** Summary description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** process | outcome | structure | patient-reported-outcome | composite (0..*) */
  type?: Array<CodeableConcept>;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectReference?: Reference;
  /** Population basis (0..1) */
  basis?: MeasureGroup.BasisEnum;
  /** Id and extensions of the primitive `basis`. */
  _basis?: Element;
  /** proportion | ratio | continuous-variable | cohort (0..1) */
  scoring?: CodeableConcept;
  /** What units? (0..1) */
  scoringUnit?: CodeableConcept;
  /** How is rate aggregation performed for this measure (0..1) */
  rateAggregation?: string;
  /** Id and extensions of the primitive `rateAggregation`. */
  _rateAggregation?: Element;
  /** increase | decrease (0..1) */
  improvementNotation?: CodeableConcept;
  /** Logic used by the measure group (0..*) */
  library?: Array<string>;
  /** Id and extensions of the primitive `library`. */
  _library?: Array<Element | null>;
  /** Population criteria (0..*) */
  population?: Array<MeasurePopulation>;
  /** Stratifier criteria for the measure (0..*) */
  stratifier?: Array<MeasureStratifier>;
}

export namespace MeasureGroup {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fhir-types */
  export type BasisEnum =
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
  export const BasisEnum = {
    Base: 'Base' as BasisEnum,
    Element: 'Element' as BasisEnum,
    BackboneElement: 'BackboneElement' as BasisEnum,
    DataType: 'DataType' as BasisEnum,
    Address: 'Address' as BasisEnum,
    Annotation: 'Annotation' as BasisEnum,
    Attachment: 'Attachment' as BasisEnum,
    Availability: 'Availability' as BasisEnum,
    BackboneType: 'BackboneType' as BasisEnum,
    Dosage: 'Dosage' as BasisEnum,
    ElementDefinition: 'ElementDefinition' as BasisEnum,
    MarketingStatus: 'MarketingStatus' as BasisEnum,
    ProductShelfLife: 'ProductShelfLife' as BasisEnum,
    Timing: 'Timing' as BasisEnum,
    CodeableConcept: 'CodeableConcept' as BasisEnum,
    CodeableReference: 'CodeableReference' as BasisEnum,
    Coding: 'Coding' as BasisEnum,
    ContactDetail: 'ContactDetail' as BasisEnum,
    ContactPoint: 'ContactPoint' as BasisEnum,
    Contributor: 'Contributor' as BasisEnum,
    DataRequirement: 'DataRequirement' as BasisEnum,
    Expression: 'Expression' as BasisEnum,
    ExtendedContactDetail: 'ExtendedContactDetail' as BasisEnum,
    Extension: 'Extension' as BasisEnum,
    HumanName: 'HumanName' as BasisEnum,
    Identifier: 'Identifier' as BasisEnum,
    Meta: 'Meta' as BasisEnum,
    MonetaryComponent: 'MonetaryComponent' as BasisEnum,
    Money: 'Money' as BasisEnum,
    Narrative: 'Narrative' as BasisEnum,
    ParameterDefinition: 'ParameterDefinition' as BasisEnum,
    Period: 'Period' as BasisEnum,
    PrimitiveType: 'PrimitiveType' as BasisEnum,
    Base64Binary: 'base64Binary' as BasisEnum,
    Boolean: 'boolean' as BasisEnum,
    Date: 'date' as BasisEnum,
    DateTime: 'dateTime' as BasisEnum,
    Decimal: 'decimal' as BasisEnum,
    Instant: 'instant' as BasisEnum,
    Integer: 'integer' as BasisEnum,
    PositiveInt: 'positiveInt' as BasisEnum,
    UnsignedInt: 'unsignedInt' as BasisEnum,
    Integer64: 'integer64' as BasisEnum,
    String: 'string' as BasisEnum,
    Code: 'code' as BasisEnum,
    Id: 'id' as BasisEnum,
    Markdown: 'markdown' as BasisEnum,
    Time: 'time' as BasisEnum,
    Uri: 'uri' as BasisEnum,
    Canonical: 'canonical' as BasisEnum,
    Oid: 'oid' as BasisEnum,
    Url: 'url' as BasisEnum,
    Uuid: 'uuid' as BasisEnum,
    Quantity: 'Quantity' as BasisEnum,
    Age: 'Age' as BasisEnum,
    Count: 'Count' as BasisEnum,
    Distance: 'Distance' as BasisEnum,
    Duration: 'Duration' as BasisEnum,
    Range: 'Range' as BasisEnum,
    Ratio: 'Ratio' as BasisEnum,
    RatioRange: 'RatioRange' as BasisEnum,
    Reference: 'Reference' as BasisEnum,
    RelatedArtifact: 'RelatedArtifact' as BasisEnum,
    SampledData: 'SampledData' as BasisEnum,
    Signature: 'Signature' as BasisEnum,
    TriggerDefinition: 'TriggerDefinition' as BasisEnum,
    UsageContext: 'UsageContext' as BasisEnum,
    VirtualServiceDetail: 'VirtualServiceDetail' as BasisEnum,
    Xhtml: 'xhtml' as BasisEnum,
    Resource: 'Resource' as BasisEnum,
    Binary: 'Binary' as BasisEnum,
    Bundle: 'Bundle' as BasisEnum,
    DomainResource: 'DomainResource' as BasisEnum,
    Account: 'Account' as BasisEnum,
    ActivityDefinition: 'ActivityDefinition' as BasisEnum,
    ActorDefinition: 'ActorDefinition' as BasisEnum,
    AdministrableProductDefinition: 'AdministrableProductDefinition' as BasisEnum,
    AdverseEvent: 'AdverseEvent' as BasisEnum,
    AllergyIntolerance: 'AllergyIntolerance' as BasisEnum,
    Appointment: 'Appointment' as BasisEnum,
    AppointmentResponse: 'AppointmentResponse' as BasisEnum,
    ArtifactAssessment: 'ArtifactAssessment' as BasisEnum,
    AuditEvent: 'AuditEvent' as BasisEnum,
    Basic: 'Basic' as BasisEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as BasisEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as BasisEnum,
    BodyStructure: 'BodyStructure' as BasisEnum,
    CanonicalResource: 'CanonicalResource' as BasisEnum,
    CapabilityStatement: 'CapabilityStatement' as BasisEnum,
    CarePlan: 'CarePlan' as BasisEnum,
    CareTeam: 'CareTeam' as BasisEnum,
    ChargeItem: 'ChargeItem' as BasisEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as BasisEnum,
    Citation: 'Citation' as BasisEnum,
    Claim: 'Claim' as BasisEnum,
    ClaimResponse: 'ClaimResponse' as BasisEnum,
    ClinicalImpression: 'ClinicalImpression' as BasisEnum,
    ClinicalUseDefinition: 'ClinicalUseDefinition' as BasisEnum,
    CodeSystem: 'CodeSystem' as BasisEnum,
    Communication: 'Communication' as BasisEnum,
    CommunicationRequest: 'CommunicationRequest' as BasisEnum,
    CompartmentDefinition: 'CompartmentDefinition' as BasisEnum,
    Composition: 'Composition' as BasisEnum,
    ConceptMap: 'ConceptMap' as BasisEnum,
    Condition: 'Condition' as BasisEnum,
    ConditionDefinition: 'ConditionDefinition' as BasisEnum,
    Consent: 'Consent' as BasisEnum,
    Contract: 'Contract' as BasisEnum,
    Coverage: 'Coverage' as BasisEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as BasisEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as BasisEnum,
    DetectedIssue: 'DetectedIssue' as BasisEnum,
    Device: 'Device' as BasisEnum,
    DeviceAssociation: 'DeviceAssociation' as BasisEnum,
    DeviceDefinition: 'DeviceDefinition' as BasisEnum,
    DeviceDispense: 'DeviceDispense' as BasisEnum,
    DeviceMetric: 'DeviceMetric' as BasisEnum,
    DeviceRequest: 'DeviceRequest' as BasisEnum,
    DeviceUsage: 'DeviceUsage' as BasisEnum,
    DiagnosticReport: 'DiagnosticReport' as BasisEnum,
    DocumentReference: 'DocumentReference' as BasisEnum,
    Encounter: 'Encounter' as BasisEnum,
    EncounterHistory: 'EncounterHistory' as BasisEnum,
    Endpoint: 'Endpoint' as BasisEnum,
    EnrollmentRequest: 'EnrollmentRequest' as BasisEnum,
    EnrollmentResponse: 'EnrollmentResponse' as BasisEnum,
    EpisodeOfCare: 'EpisodeOfCare' as BasisEnum,
    EventDefinition: 'EventDefinition' as BasisEnum,
    Evidence: 'Evidence' as BasisEnum,
    EvidenceReport: 'EvidenceReport' as BasisEnum,
    EvidenceVariable: 'EvidenceVariable' as BasisEnum,
    ExampleScenario: 'ExampleScenario' as BasisEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as BasisEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as BasisEnum,
    Flag: 'Flag' as BasisEnum,
    FormularyItem: 'FormularyItem' as BasisEnum,
    GenomicStudy: 'GenomicStudy' as BasisEnum,
    Goal: 'Goal' as BasisEnum,
    GraphDefinition: 'GraphDefinition' as BasisEnum,
    Group: 'Group' as BasisEnum,
    GuidanceResponse: 'GuidanceResponse' as BasisEnum,
    HealthcareService: 'HealthcareService' as BasisEnum,
    ImagingSelection: 'ImagingSelection' as BasisEnum,
    ImagingStudy: 'ImagingStudy' as BasisEnum,
    Immunization: 'Immunization' as BasisEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as BasisEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as BasisEnum,
    ImplementationGuide: 'ImplementationGuide' as BasisEnum,
    Ingredient: 'Ingredient' as BasisEnum,
    InsurancePlan: 'InsurancePlan' as BasisEnum,
    InventoryItem: 'InventoryItem' as BasisEnum,
    InventoryReport: 'InventoryReport' as BasisEnum,
    Invoice: 'Invoice' as BasisEnum,
    Library: 'Library' as BasisEnum,
    Linkage: 'Linkage' as BasisEnum,
    List: 'List' as BasisEnum,
    Location: 'Location' as BasisEnum,
    ManufacturedItemDefinition: 'ManufacturedItemDefinition' as BasisEnum,
    Measure: 'Measure' as BasisEnum,
    MeasureReport: 'MeasureReport' as BasisEnum,
    Medication: 'Medication' as BasisEnum,
    MedicationAdministration: 'MedicationAdministration' as BasisEnum,
    MedicationDispense: 'MedicationDispense' as BasisEnum,
    MedicationKnowledge: 'MedicationKnowledge' as BasisEnum,
    MedicationRequest: 'MedicationRequest' as BasisEnum,
    MedicationStatement: 'MedicationStatement' as BasisEnum,
    MedicinalProductDefinition: 'MedicinalProductDefinition' as BasisEnum,
    MessageDefinition: 'MessageDefinition' as BasisEnum,
    MessageHeader: 'MessageHeader' as BasisEnum,
    MetadataResource: 'MetadataResource' as BasisEnum,
    MolecularSequence: 'MolecularSequence' as BasisEnum,
    NamingSystem: 'NamingSystem' as BasisEnum,
    NutritionIntake: 'NutritionIntake' as BasisEnum,
    NutritionOrder: 'NutritionOrder' as BasisEnum,
    NutritionProduct: 'NutritionProduct' as BasisEnum,
    Observation: 'Observation' as BasisEnum,
    ObservationDefinition: 'ObservationDefinition' as BasisEnum,
    OperationDefinition: 'OperationDefinition' as BasisEnum,
    OperationOutcome: 'OperationOutcome' as BasisEnum,
    Organization: 'Organization' as BasisEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as BasisEnum,
    PackagedProductDefinition: 'PackagedProductDefinition' as BasisEnum,
    Patient: 'Patient' as BasisEnum,
    PaymentNotice: 'PaymentNotice' as BasisEnum,
    PaymentReconciliation: 'PaymentReconciliation' as BasisEnum,
    Permission: 'Permission' as BasisEnum,
    Person: 'Person' as BasisEnum,
    PlanDefinition: 'PlanDefinition' as BasisEnum,
    Practitioner: 'Practitioner' as BasisEnum,
    PractitionerRole: 'PractitionerRole' as BasisEnum,
    Procedure: 'Procedure' as BasisEnum,
    Provenance: 'Provenance' as BasisEnum,
    Questionnaire: 'Questionnaire' as BasisEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as BasisEnum,
    RegulatedAuthorization: 'RegulatedAuthorization' as BasisEnum,
    RelatedPerson: 'RelatedPerson' as BasisEnum,
    RequestOrchestration: 'RequestOrchestration' as BasisEnum,
    Requirements: 'Requirements' as BasisEnum,
    ResearchStudy: 'ResearchStudy' as BasisEnum,
    ResearchSubject: 'ResearchSubject' as BasisEnum,
    RiskAssessment: 'RiskAssessment' as BasisEnum,
    Schedule: 'Schedule' as BasisEnum,
    SearchParameter: 'SearchParameter' as BasisEnum,
    ServiceRequest: 'ServiceRequest' as BasisEnum,
    Slot: 'Slot' as BasisEnum,
    Specimen: 'Specimen' as BasisEnum,
    SpecimenDefinition: 'SpecimenDefinition' as BasisEnum,
    StructureDefinition: 'StructureDefinition' as BasisEnum,
    StructureMap: 'StructureMap' as BasisEnum,
    Subscription: 'Subscription' as BasisEnum,
    SubscriptionStatus: 'SubscriptionStatus' as BasisEnum,
    SubscriptionTopic: 'SubscriptionTopic' as BasisEnum,
    Substance: 'Substance' as BasisEnum,
    SubstanceDefinition: 'SubstanceDefinition' as BasisEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as BasisEnum,
    SubstancePolymer: 'SubstancePolymer' as BasisEnum,
    SubstanceProtein: 'SubstanceProtein' as BasisEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as BasisEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as BasisEnum,
    SupplyDelivery: 'SupplyDelivery' as BasisEnum,
    SupplyRequest: 'SupplyRequest' as BasisEnum,
    Task: 'Task' as BasisEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as BasisEnum,
    TestPlan: 'TestPlan' as BasisEnum,
    TestReport: 'TestReport' as BasisEnum,
    TestScript: 'TestScript' as BasisEnum,
    Transport: 'Transport' as BasisEnum,
    ValueSet: 'ValueSet' as BasisEnum,
    VerificationResult: 'VerificationResult' as BasisEnum,
    VisionPrescription: 'VisionPrescription' as BasisEnum,
    Parameters: 'Parameters' as BasisEnum,
  };
}

/**
 * Population criteria
 */
export interface MeasurePopulation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique id for population in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;
  /** The human readable description of this population criteria (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The criteria that defines this population (0..1) */
  criteria?: Expression;
  /** A group resource that defines this population (0..1) */
  groupDefinition?: Reference;
  /** Which population (0..1) */
  inputPopulationId?: string;
  /** Id and extensions of the primitive `inputPopulationId`. */
  _inputPopulationId?: Element;
  /** Aggregation method for a measure score (e.g. sum, average, median, minimum, maximum, count) (0..1) */
  aggregateMethod?: CodeableConcept;
}

/**
 * Stratifier criteria for the measure
 */
export interface MeasureStratifier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique id for stratifier in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** Meaning of the stratifier (0..1) */
  code?: CodeableConcept;
  /** The human readable description of this stratifier (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** How the measure should be stratified (0..1) */
  criteria?: Expression;
  /** A group resource that defines this population (0..1) */
  groupDefinition?: Reference;
  /** Stratifier criteria component for the measure (0..*) */
  component?: Array<MeasureComponent>;
}

/**
 * Stratifier criteria component for the measure
 */
export interface MeasureComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique id for stratifier component in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** Meaning of the stratifier component (0..1) */
  code?: CodeableConcept;
  /** The human readable description of this stratifier component (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Component of how the measure should be stratified (0..1) */
  criteria?: Expression;
  /** A group resource that defines this population (0..1) */
  groupDefinition?: Reference;
}

/**
 * What other data should be reported with the measure
 */
export interface MeasureSupplementalData {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique id for supplementalData in measure (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** Meaning of the supplemental data (0..1) */
  code?: CodeableConcept;
  /** supplemental-data | risk-adjustment-factor (0..*) */
  usage?: Array<CodeableConcept>;
  /** The human readable description of this supplemental data (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Expression describing additional data to be reported (1..1) */
  criteria: Expression;
}
