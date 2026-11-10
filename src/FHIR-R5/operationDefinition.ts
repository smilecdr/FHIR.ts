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
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export interface OperationDefinition {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this operation definition, represented as an absolute URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the implementation guide (business identifier) (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the operation definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this operation definition (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this operation definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
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
  /** Natural language description of the operation definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for operation definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this operation definition is defined (0..1) */
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
  /** Whether content is changed by the operation (0..1) */
  affectsState?: boolean;
  /** Id and extensions of the primitive `affectsState`. */
  _affectsState?: Element;
  /** Recommended name for operation in search url (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Additional information about use (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Marks this as a profile of the base (0..1) */
  base?: string;
  /** Id and extensions of the primitive `base`. */
  _base?: Element;
  /** Types this operation applies to (0..*) */
  resource?: Array<OperationDefinition.ResourceEnum>;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Array<Element | null>;
  /** Invoke at the system level? (1..1) */
  system?: boolean;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** Invoke at the type level? (1..1) */
  type?: boolean;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Invoke on an instance? (1..1) */
  instance?: boolean;
  /** Id and extensions of the primitive `instance`. */
  _instance?: Element;
  /** Validation information for in parameters (0..1) */
  inputProfile?: string;
  /** Id and extensions of the primitive `inputProfile`. */
  _inputProfile?: Element;
  /** Validation information for out parameters (0..1) */
  outputProfile?: string;
  /** Id and extensions of the primitive `outputProfile`. */
  _outputProfile?: Element;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/version-independent-all-resource-types */
  export type ResourceEnum =
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
    | 'DomainResource'
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
    | 'Resource'
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
    | 'BodySite'
    | 'CatalogEntry'
    | 'Conformance'
    | 'DataElement'
    | 'DeviceComponent'
    | 'DeviceUseRequest'
    | 'DeviceUseStatement'
    | 'DiagnosticOrder'
    | 'DocumentManifest'
    | 'EffectEvidenceSynthesis'
    | 'EligibilityRequest'
    | 'EligibilityResponse'
    | 'ExpansionProfile'
    | 'ImagingManifest'
    | 'ImagingObjectSelection'
    | 'Media'
    | 'MedicationOrder'
    | 'MedicationUsage'
    | 'MedicinalProduct'
    | 'MedicinalProductAuthorization'
    | 'MedicinalProductContraindication'
    | 'MedicinalProductIndication'
    | 'MedicinalProductIngredient'
    | 'MedicinalProductInteraction'
    | 'MedicinalProductManufactured'
    | 'MedicinalProductPackaged'
    | 'MedicinalProductPharmaceutical'
    | 'MedicinalProductUndesirableEffect'
    | 'Order'
    | 'OrderResponse'
    | 'ProcedureRequest'
    | 'ProcessRequest'
    | 'ProcessResponse'
    | 'ReferralRequest'
    | 'RequestGroup'
    | 'ResearchDefinition'
    | 'ResearchElementDefinition'
    | 'RiskEvidenceSynthesis'
    | 'Sequence'
    | 'ServiceDefinition'
    | 'SubstanceSpecification';
  export const ResourceEnum = {
    Account: 'Account' as ResourceEnum,
    ActivityDefinition: 'ActivityDefinition' as ResourceEnum,
    ActorDefinition: 'ActorDefinition' as ResourceEnum,
    AdministrableProductDefinition: 'AdministrableProductDefinition' as ResourceEnum,
    AdverseEvent: 'AdverseEvent' as ResourceEnum,
    AllergyIntolerance: 'AllergyIntolerance' as ResourceEnum,
    Appointment: 'Appointment' as ResourceEnum,
    AppointmentResponse: 'AppointmentResponse' as ResourceEnum,
    ArtifactAssessment: 'ArtifactAssessment' as ResourceEnum,
    AuditEvent: 'AuditEvent' as ResourceEnum,
    Basic: 'Basic' as ResourceEnum,
    Binary: 'Binary' as ResourceEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as ResourceEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as ResourceEnum,
    BodyStructure: 'BodyStructure' as ResourceEnum,
    Bundle: 'Bundle' as ResourceEnum,
    CanonicalResource: 'CanonicalResource' as ResourceEnum,
    CapabilityStatement: 'CapabilityStatement' as ResourceEnum,
    CarePlan: 'CarePlan' as ResourceEnum,
    CareTeam: 'CareTeam' as ResourceEnum,
    ChargeItem: 'ChargeItem' as ResourceEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as ResourceEnum,
    Citation: 'Citation' as ResourceEnum,
    Claim: 'Claim' as ResourceEnum,
    ClaimResponse: 'ClaimResponse' as ResourceEnum,
    ClinicalImpression: 'ClinicalImpression' as ResourceEnum,
    ClinicalUseDefinition: 'ClinicalUseDefinition' as ResourceEnum,
    CodeSystem: 'CodeSystem' as ResourceEnum,
    Communication: 'Communication' as ResourceEnum,
    CommunicationRequest: 'CommunicationRequest' as ResourceEnum,
    CompartmentDefinition: 'CompartmentDefinition' as ResourceEnum,
    Composition: 'Composition' as ResourceEnum,
    ConceptMap: 'ConceptMap' as ResourceEnum,
    Condition: 'Condition' as ResourceEnum,
    ConditionDefinition: 'ConditionDefinition' as ResourceEnum,
    Consent: 'Consent' as ResourceEnum,
    Contract: 'Contract' as ResourceEnum,
    Coverage: 'Coverage' as ResourceEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as ResourceEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as ResourceEnum,
    DetectedIssue: 'DetectedIssue' as ResourceEnum,
    Device: 'Device' as ResourceEnum,
    DeviceAssociation: 'DeviceAssociation' as ResourceEnum,
    DeviceDefinition: 'DeviceDefinition' as ResourceEnum,
    DeviceDispense: 'DeviceDispense' as ResourceEnum,
    DeviceMetric: 'DeviceMetric' as ResourceEnum,
    DeviceRequest: 'DeviceRequest' as ResourceEnum,
    DeviceUsage: 'DeviceUsage' as ResourceEnum,
    DiagnosticReport: 'DiagnosticReport' as ResourceEnum,
    DocumentReference: 'DocumentReference' as ResourceEnum,
    DomainResource: 'DomainResource' as ResourceEnum,
    Encounter: 'Encounter' as ResourceEnum,
    EncounterHistory: 'EncounterHistory' as ResourceEnum,
    Endpoint: 'Endpoint' as ResourceEnum,
    EnrollmentRequest: 'EnrollmentRequest' as ResourceEnum,
    EnrollmentResponse: 'EnrollmentResponse' as ResourceEnum,
    EpisodeOfCare: 'EpisodeOfCare' as ResourceEnum,
    EventDefinition: 'EventDefinition' as ResourceEnum,
    Evidence: 'Evidence' as ResourceEnum,
    EvidenceReport: 'EvidenceReport' as ResourceEnum,
    EvidenceVariable: 'EvidenceVariable' as ResourceEnum,
    ExampleScenario: 'ExampleScenario' as ResourceEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as ResourceEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as ResourceEnum,
    Flag: 'Flag' as ResourceEnum,
    FormularyItem: 'FormularyItem' as ResourceEnum,
    GenomicStudy: 'GenomicStudy' as ResourceEnum,
    Goal: 'Goal' as ResourceEnum,
    GraphDefinition: 'GraphDefinition' as ResourceEnum,
    Group: 'Group' as ResourceEnum,
    GuidanceResponse: 'GuidanceResponse' as ResourceEnum,
    HealthcareService: 'HealthcareService' as ResourceEnum,
    ImagingSelection: 'ImagingSelection' as ResourceEnum,
    ImagingStudy: 'ImagingStudy' as ResourceEnum,
    Immunization: 'Immunization' as ResourceEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as ResourceEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as ResourceEnum,
    ImplementationGuide: 'ImplementationGuide' as ResourceEnum,
    Ingredient: 'Ingredient' as ResourceEnum,
    InsurancePlan: 'InsurancePlan' as ResourceEnum,
    InventoryItem: 'InventoryItem' as ResourceEnum,
    InventoryReport: 'InventoryReport' as ResourceEnum,
    Invoice: 'Invoice' as ResourceEnum,
    Library: 'Library' as ResourceEnum,
    Linkage: 'Linkage' as ResourceEnum,
    List: 'List' as ResourceEnum,
    Location: 'Location' as ResourceEnum,
    ManufacturedItemDefinition: 'ManufacturedItemDefinition' as ResourceEnum,
    Measure: 'Measure' as ResourceEnum,
    MeasureReport: 'MeasureReport' as ResourceEnum,
    Medication: 'Medication' as ResourceEnum,
    MedicationAdministration: 'MedicationAdministration' as ResourceEnum,
    MedicationDispense: 'MedicationDispense' as ResourceEnum,
    MedicationKnowledge: 'MedicationKnowledge' as ResourceEnum,
    MedicationRequest: 'MedicationRequest' as ResourceEnum,
    MedicationStatement: 'MedicationStatement' as ResourceEnum,
    MedicinalProductDefinition: 'MedicinalProductDefinition' as ResourceEnum,
    MessageDefinition: 'MessageDefinition' as ResourceEnum,
    MessageHeader: 'MessageHeader' as ResourceEnum,
    MetadataResource: 'MetadataResource' as ResourceEnum,
    MolecularSequence: 'MolecularSequence' as ResourceEnum,
    NamingSystem: 'NamingSystem' as ResourceEnum,
    NutritionIntake: 'NutritionIntake' as ResourceEnum,
    NutritionOrder: 'NutritionOrder' as ResourceEnum,
    NutritionProduct: 'NutritionProduct' as ResourceEnum,
    Observation: 'Observation' as ResourceEnum,
    ObservationDefinition: 'ObservationDefinition' as ResourceEnum,
    OperationDefinition: 'OperationDefinition' as ResourceEnum,
    OperationOutcome: 'OperationOutcome' as ResourceEnum,
    Organization: 'Organization' as ResourceEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as ResourceEnum,
    PackagedProductDefinition: 'PackagedProductDefinition' as ResourceEnum,
    Parameters: 'Parameters' as ResourceEnum,
    Patient: 'Patient' as ResourceEnum,
    PaymentNotice: 'PaymentNotice' as ResourceEnum,
    PaymentReconciliation: 'PaymentReconciliation' as ResourceEnum,
    Permission: 'Permission' as ResourceEnum,
    Person: 'Person' as ResourceEnum,
    PlanDefinition: 'PlanDefinition' as ResourceEnum,
    Practitioner: 'Practitioner' as ResourceEnum,
    PractitionerRole: 'PractitionerRole' as ResourceEnum,
    Procedure: 'Procedure' as ResourceEnum,
    Provenance: 'Provenance' as ResourceEnum,
    Questionnaire: 'Questionnaire' as ResourceEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as ResourceEnum,
    RegulatedAuthorization: 'RegulatedAuthorization' as ResourceEnum,
    RelatedPerson: 'RelatedPerson' as ResourceEnum,
    RequestOrchestration: 'RequestOrchestration' as ResourceEnum,
    Requirements: 'Requirements' as ResourceEnum,
    ResearchStudy: 'ResearchStudy' as ResourceEnum,
    ResearchSubject: 'ResearchSubject' as ResourceEnum,
    Resource: 'Resource' as ResourceEnum,
    RiskAssessment: 'RiskAssessment' as ResourceEnum,
    Schedule: 'Schedule' as ResourceEnum,
    SearchParameter: 'SearchParameter' as ResourceEnum,
    ServiceRequest: 'ServiceRequest' as ResourceEnum,
    Slot: 'Slot' as ResourceEnum,
    Specimen: 'Specimen' as ResourceEnum,
    SpecimenDefinition: 'SpecimenDefinition' as ResourceEnum,
    StructureDefinition: 'StructureDefinition' as ResourceEnum,
    StructureMap: 'StructureMap' as ResourceEnum,
    Subscription: 'Subscription' as ResourceEnum,
    SubscriptionStatus: 'SubscriptionStatus' as ResourceEnum,
    SubscriptionTopic: 'SubscriptionTopic' as ResourceEnum,
    Substance: 'Substance' as ResourceEnum,
    SubstanceDefinition: 'SubstanceDefinition' as ResourceEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as ResourceEnum,
    SubstancePolymer: 'SubstancePolymer' as ResourceEnum,
    SubstanceProtein: 'SubstanceProtein' as ResourceEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as ResourceEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as ResourceEnum,
    SupplyDelivery: 'SupplyDelivery' as ResourceEnum,
    SupplyRequest: 'SupplyRequest' as ResourceEnum,
    Task: 'Task' as ResourceEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as ResourceEnum,
    TestPlan: 'TestPlan' as ResourceEnum,
    TestReport: 'TestReport' as ResourceEnum,
    TestScript: 'TestScript' as ResourceEnum,
    Transport: 'Transport' as ResourceEnum,
    ValueSet: 'ValueSet' as ResourceEnum,
    VerificationResult: 'VerificationResult' as ResourceEnum,
    VisionPrescription: 'VisionPrescription' as ResourceEnum,
    BodySite: 'BodySite' as ResourceEnum,
    CatalogEntry: 'CatalogEntry' as ResourceEnum,
    Conformance: 'Conformance' as ResourceEnum,
    DataElement: 'DataElement' as ResourceEnum,
    DeviceComponent: 'DeviceComponent' as ResourceEnum,
    DeviceUseRequest: 'DeviceUseRequest' as ResourceEnum,
    DeviceUseStatement: 'DeviceUseStatement' as ResourceEnum,
    DiagnosticOrder: 'DiagnosticOrder' as ResourceEnum,
    DocumentManifest: 'DocumentManifest' as ResourceEnum,
    EffectEvidenceSynthesis: 'EffectEvidenceSynthesis' as ResourceEnum,
    EligibilityRequest: 'EligibilityRequest' as ResourceEnum,
    EligibilityResponse: 'EligibilityResponse' as ResourceEnum,
    ExpansionProfile: 'ExpansionProfile' as ResourceEnum,
    ImagingManifest: 'ImagingManifest' as ResourceEnum,
    ImagingObjectSelection: 'ImagingObjectSelection' as ResourceEnum,
    Media: 'Media' as ResourceEnum,
    MedicationOrder: 'MedicationOrder' as ResourceEnum,
    MedicationUsage: 'MedicationUsage' as ResourceEnum,
    MedicinalProduct: 'MedicinalProduct' as ResourceEnum,
    MedicinalProductAuthorization: 'MedicinalProductAuthorization' as ResourceEnum,
    MedicinalProductContraindication: 'MedicinalProductContraindication' as ResourceEnum,
    MedicinalProductIndication: 'MedicinalProductIndication' as ResourceEnum,
    MedicinalProductIngredient: 'MedicinalProductIngredient' as ResourceEnum,
    MedicinalProductInteraction: 'MedicinalProductInteraction' as ResourceEnum,
    MedicinalProductManufactured: 'MedicinalProductManufactured' as ResourceEnum,
    MedicinalProductPackaged: 'MedicinalProductPackaged' as ResourceEnum,
    MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical' as ResourceEnum,
    MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect' as ResourceEnum,
    Order: 'Order' as ResourceEnum,
    OrderResponse: 'OrderResponse' as ResourceEnum,
    ProcedureRequest: 'ProcedureRequest' as ResourceEnum,
    ProcessRequest: 'ProcessRequest' as ResourceEnum,
    ProcessResponse: 'ProcessResponse' as ResourceEnum,
    ReferralRequest: 'ReferralRequest' as ResourceEnum,
    RequestGroup: 'RequestGroup' as ResourceEnum,
    ResearchDefinition: 'ResearchDefinition' as ResourceEnum,
    ResearchElementDefinition: 'ResearchElementDefinition' as ResourceEnum,
    RiskEvidenceSynthesis: 'RiskEvidenceSynthesis' as ResourceEnum,
    Sequence: 'Sequence' as ResourceEnum,
    ServiceDefinition: 'ServiceDefinition' as ResourceEnum,
    SubstanceSpecification: 'SubstanceSpecification' as ResourceEnum,
  };
}

/**
 * Parameters for the operation/query
 */
export interface OperationDefinitionParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name in Parameters.parameter.name or in URL (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** in | out (1..1) */
  use?: OperationDefinitionParameter.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** instance | type | system (0..*) */
  scope?: Array<OperationDefinitionParameter.ScopeEnum>;
  /** Id and extensions of the primitive `scope`. */
  _scope?: Array<Element | null>;
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
  /** Allowed sub-type this parameter can have (if type is abstract) (0..*) */
  allowedType?: Array<OperationDefinitionParameter.AllowedTypeEnum>;
  /** Id and extensions of the primitive `allowedType`. */
  _allowedType?: Array<Element | null>;
  /** If type is Reference | canonical, allowed targets. If type is 'Resource', then this constrains the allowed resource types (0..*) */
  targetProfile?: Array<string>;
  /** Id and extensions of the primitive `targetProfile`. */
  _targetProfile?: Array<Element | null>;
  /** number | date | string | token | reference | composite | quantity | uri | special (0..1) */
  searchType?: OperationDefinitionParameter.SearchTypeEnum;
  /** Id and extensions of the primitive `searchType`. */
  _searchType?: Element;
  /** ValueSet details if this is coded (0..1) */
  binding?: OperationDefinitionBinding;
  /** References to this parameter (0..*) */
  referencedFrom?: Array<OperationDefinitionReferencedFrom>;
  /** Parts of a nested Parameter (0..*) */
  part?: Array<OperationDefinitionParameter>;
}

export namespace OperationDefinitionParameter {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/operation-parameter-use */
  export type UseEnum = 'in' | 'out';
  export const UseEnum = { In: 'in' as UseEnum, Out: 'out' as UseEnum };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/operation-parameter-scope */
  export type ScopeEnum = 'instance' | 'type' | 'system';
  export const ScopeEnum = {
    Instance: 'instance' as ScopeEnum,
    Type: 'type' as ScopeEnum,
    System: 'system' as ScopeEnum,
  };
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fhir-types */
  export type AllowedTypeEnum =
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
  export const AllowedTypeEnum = {
    Base: 'Base' as AllowedTypeEnum,
    Element: 'Element' as AllowedTypeEnum,
    BackboneElement: 'BackboneElement' as AllowedTypeEnum,
    DataType: 'DataType' as AllowedTypeEnum,
    Address: 'Address' as AllowedTypeEnum,
    Annotation: 'Annotation' as AllowedTypeEnum,
    Attachment: 'Attachment' as AllowedTypeEnum,
    Availability: 'Availability' as AllowedTypeEnum,
    BackboneType: 'BackboneType' as AllowedTypeEnum,
    Dosage: 'Dosage' as AllowedTypeEnum,
    ElementDefinition: 'ElementDefinition' as AllowedTypeEnum,
    MarketingStatus: 'MarketingStatus' as AllowedTypeEnum,
    ProductShelfLife: 'ProductShelfLife' as AllowedTypeEnum,
    Timing: 'Timing' as AllowedTypeEnum,
    CodeableConcept: 'CodeableConcept' as AllowedTypeEnum,
    CodeableReference: 'CodeableReference' as AllowedTypeEnum,
    Coding: 'Coding' as AllowedTypeEnum,
    ContactDetail: 'ContactDetail' as AllowedTypeEnum,
    ContactPoint: 'ContactPoint' as AllowedTypeEnum,
    Contributor: 'Contributor' as AllowedTypeEnum,
    DataRequirement: 'DataRequirement' as AllowedTypeEnum,
    Expression: 'Expression' as AllowedTypeEnum,
    ExtendedContactDetail: 'ExtendedContactDetail' as AllowedTypeEnum,
    Extension: 'Extension' as AllowedTypeEnum,
    HumanName: 'HumanName' as AllowedTypeEnum,
    Identifier: 'Identifier' as AllowedTypeEnum,
    Meta: 'Meta' as AllowedTypeEnum,
    MonetaryComponent: 'MonetaryComponent' as AllowedTypeEnum,
    Money: 'Money' as AllowedTypeEnum,
    Narrative: 'Narrative' as AllowedTypeEnum,
    ParameterDefinition: 'ParameterDefinition' as AllowedTypeEnum,
    Period: 'Period' as AllowedTypeEnum,
    PrimitiveType: 'PrimitiveType' as AllowedTypeEnum,
    Base64Binary: 'base64Binary' as AllowedTypeEnum,
    Boolean: 'boolean' as AllowedTypeEnum,
    Date: 'date' as AllowedTypeEnum,
    DateTime: 'dateTime' as AllowedTypeEnum,
    Decimal: 'decimal' as AllowedTypeEnum,
    Instant: 'instant' as AllowedTypeEnum,
    Integer: 'integer' as AllowedTypeEnum,
    PositiveInt: 'positiveInt' as AllowedTypeEnum,
    UnsignedInt: 'unsignedInt' as AllowedTypeEnum,
    Integer64: 'integer64' as AllowedTypeEnum,
    String: 'string' as AllowedTypeEnum,
    Code: 'code' as AllowedTypeEnum,
    Id: 'id' as AllowedTypeEnum,
    Markdown: 'markdown' as AllowedTypeEnum,
    Time: 'time' as AllowedTypeEnum,
    Uri: 'uri' as AllowedTypeEnum,
    Canonical: 'canonical' as AllowedTypeEnum,
    Oid: 'oid' as AllowedTypeEnum,
    Url: 'url' as AllowedTypeEnum,
    Uuid: 'uuid' as AllowedTypeEnum,
    Quantity: 'Quantity' as AllowedTypeEnum,
    Age: 'Age' as AllowedTypeEnum,
    Count: 'Count' as AllowedTypeEnum,
    Distance: 'Distance' as AllowedTypeEnum,
    Duration: 'Duration' as AllowedTypeEnum,
    Range: 'Range' as AllowedTypeEnum,
    Ratio: 'Ratio' as AllowedTypeEnum,
    RatioRange: 'RatioRange' as AllowedTypeEnum,
    Reference: 'Reference' as AllowedTypeEnum,
    RelatedArtifact: 'RelatedArtifact' as AllowedTypeEnum,
    SampledData: 'SampledData' as AllowedTypeEnum,
    Signature: 'Signature' as AllowedTypeEnum,
    TriggerDefinition: 'TriggerDefinition' as AllowedTypeEnum,
    UsageContext: 'UsageContext' as AllowedTypeEnum,
    VirtualServiceDetail: 'VirtualServiceDetail' as AllowedTypeEnum,
    Xhtml: 'xhtml' as AllowedTypeEnum,
    Resource: 'Resource' as AllowedTypeEnum,
    Binary: 'Binary' as AllowedTypeEnum,
    Bundle: 'Bundle' as AllowedTypeEnum,
    DomainResource: 'DomainResource' as AllowedTypeEnum,
    Account: 'Account' as AllowedTypeEnum,
    ActivityDefinition: 'ActivityDefinition' as AllowedTypeEnum,
    ActorDefinition: 'ActorDefinition' as AllowedTypeEnum,
    AdministrableProductDefinition: 'AdministrableProductDefinition' as AllowedTypeEnum,
    AdverseEvent: 'AdverseEvent' as AllowedTypeEnum,
    AllergyIntolerance: 'AllergyIntolerance' as AllowedTypeEnum,
    Appointment: 'Appointment' as AllowedTypeEnum,
    AppointmentResponse: 'AppointmentResponse' as AllowedTypeEnum,
    ArtifactAssessment: 'ArtifactAssessment' as AllowedTypeEnum,
    AuditEvent: 'AuditEvent' as AllowedTypeEnum,
    Basic: 'Basic' as AllowedTypeEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as AllowedTypeEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as AllowedTypeEnum,
    BodyStructure: 'BodyStructure' as AllowedTypeEnum,
    CanonicalResource: 'CanonicalResource' as AllowedTypeEnum,
    CapabilityStatement: 'CapabilityStatement' as AllowedTypeEnum,
    CarePlan: 'CarePlan' as AllowedTypeEnum,
    CareTeam: 'CareTeam' as AllowedTypeEnum,
    ChargeItem: 'ChargeItem' as AllowedTypeEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as AllowedTypeEnum,
    Citation: 'Citation' as AllowedTypeEnum,
    Claim: 'Claim' as AllowedTypeEnum,
    ClaimResponse: 'ClaimResponse' as AllowedTypeEnum,
    ClinicalImpression: 'ClinicalImpression' as AllowedTypeEnum,
    ClinicalUseDefinition: 'ClinicalUseDefinition' as AllowedTypeEnum,
    CodeSystem: 'CodeSystem' as AllowedTypeEnum,
    Communication: 'Communication' as AllowedTypeEnum,
    CommunicationRequest: 'CommunicationRequest' as AllowedTypeEnum,
    CompartmentDefinition: 'CompartmentDefinition' as AllowedTypeEnum,
    Composition: 'Composition' as AllowedTypeEnum,
    ConceptMap: 'ConceptMap' as AllowedTypeEnum,
    Condition: 'Condition' as AllowedTypeEnum,
    ConditionDefinition: 'ConditionDefinition' as AllowedTypeEnum,
    Consent: 'Consent' as AllowedTypeEnum,
    Contract: 'Contract' as AllowedTypeEnum,
    Coverage: 'Coverage' as AllowedTypeEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as AllowedTypeEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as AllowedTypeEnum,
    DetectedIssue: 'DetectedIssue' as AllowedTypeEnum,
    Device: 'Device' as AllowedTypeEnum,
    DeviceAssociation: 'DeviceAssociation' as AllowedTypeEnum,
    DeviceDefinition: 'DeviceDefinition' as AllowedTypeEnum,
    DeviceDispense: 'DeviceDispense' as AllowedTypeEnum,
    DeviceMetric: 'DeviceMetric' as AllowedTypeEnum,
    DeviceRequest: 'DeviceRequest' as AllowedTypeEnum,
    DeviceUsage: 'DeviceUsage' as AllowedTypeEnum,
    DiagnosticReport: 'DiagnosticReport' as AllowedTypeEnum,
    DocumentReference: 'DocumentReference' as AllowedTypeEnum,
    Encounter: 'Encounter' as AllowedTypeEnum,
    EncounterHistory: 'EncounterHistory' as AllowedTypeEnum,
    Endpoint: 'Endpoint' as AllowedTypeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as AllowedTypeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as AllowedTypeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as AllowedTypeEnum,
    EventDefinition: 'EventDefinition' as AllowedTypeEnum,
    Evidence: 'Evidence' as AllowedTypeEnum,
    EvidenceReport: 'EvidenceReport' as AllowedTypeEnum,
    EvidenceVariable: 'EvidenceVariable' as AllowedTypeEnum,
    ExampleScenario: 'ExampleScenario' as AllowedTypeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as AllowedTypeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as AllowedTypeEnum,
    Flag: 'Flag' as AllowedTypeEnum,
    FormularyItem: 'FormularyItem' as AllowedTypeEnum,
    GenomicStudy: 'GenomicStudy' as AllowedTypeEnum,
    Goal: 'Goal' as AllowedTypeEnum,
    GraphDefinition: 'GraphDefinition' as AllowedTypeEnum,
    Group: 'Group' as AllowedTypeEnum,
    GuidanceResponse: 'GuidanceResponse' as AllowedTypeEnum,
    HealthcareService: 'HealthcareService' as AllowedTypeEnum,
    ImagingSelection: 'ImagingSelection' as AllowedTypeEnum,
    ImagingStudy: 'ImagingStudy' as AllowedTypeEnum,
    Immunization: 'Immunization' as AllowedTypeEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as AllowedTypeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as AllowedTypeEnum,
    ImplementationGuide: 'ImplementationGuide' as AllowedTypeEnum,
    Ingredient: 'Ingredient' as AllowedTypeEnum,
    InsurancePlan: 'InsurancePlan' as AllowedTypeEnum,
    InventoryItem: 'InventoryItem' as AllowedTypeEnum,
    InventoryReport: 'InventoryReport' as AllowedTypeEnum,
    Invoice: 'Invoice' as AllowedTypeEnum,
    Library: 'Library' as AllowedTypeEnum,
    Linkage: 'Linkage' as AllowedTypeEnum,
    List: 'List' as AllowedTypeEnum,
    Location: 'Location' as AllowedTypeEnum,
    ManufacturedItemDefinition: 'ManufacturedItemDefinition' as AllowedTypeEnum,
    Measure: 'Measure' as AllowedTypeEnum,
    MeasureReport: 'MeasureReport' as AllowedTypeEnum,
    Medication: 'Medication' as AllowedTypeEnum,
    MedicationAdministration: 'MedicationAdministration' as AllowedTypeEnum,
    MedicationDispense: 'MedicationDispense' as AllowedTypeEnum,
    MedicationKnowledge: 'MedicationKnowledge' as AllowedTypeEnum,
    MedicationRequest: 'MedicationRequest' as AllowedTypeEnum,
    MedicationStatement: 'MedicationStatement' as AllowedTypeEnum,
    MedicinalProductDefinition: 'MedicinalProductDefinition' as AllowedTypeEnum,
    MessageDefinition: 'MessageDefinition' as AllowedTypeEnum,
    MessageHeader: 'MessageHeader' as AllowedTypeEnum,
    MetadataResource: 'MetadataResource' as AllowedTypeEnum,
    MolecularSequence: 'MolecularSequence' as AllowedTypeEnum,
    NamingSystem: 'NamingSystem' as AllowedTypeEnum,
    NutritionIntake: 'NutritionIntake' as AllowedTypeEnum,
    NutritionOrder: 'NutritionOrder' as AllowedTypeEnum,
    NutritionProduct: 'NutritionProduct' as AllowedTypeEnum,
    Observation: 'Observation' as AllowedTypeEnum,
    ObservationDefinition: 'ObservationDefinition' as AllowedTypeEnum,
    OperationDefinition: 'OperationDefinition' as AllowedTypeEnum,
    OperationOutcome: 'OperationOutcome' as AllowedTypeEnum,
    Organization: 'Organization' as AllowedTypeEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as AllowedTypeEnum,
    PackagedProductDefinition: 'PackagedProductDefinition' as AllowedTypeEnum,
    Patient: 'Patient' as AllowedTypeEnum,
    PaymentNotice: 'PaymentNotice' as AllowedTypeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as AllowedTypeEnum,
    Permission: 'Permission' as AllowedTypeEnum,
    Person: 'Person' as AllowedTypeEnum,
    PlanDefinition: 'PlanDefinition' as AllowedTypeEnum,
    Practitioner: 'Practitioner' as AllowedTypeEnum,
    PractitionerRole: 'PractitionerRole' as AllowedTypeEnum,
    Procedure: 'Procedure' as AllowedTypeEnum,
    Provenance: 'Provenance' as AllowedTypeEnum,
    Questionnaire: 'Questionnaire' as AllowedTypeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as AllowedTypeEnum,
    RegulatedAuthorization: 'RegulatedAuthorization' as AllowedTypeEnum,
    RelatedPerson: 'RelatedPerson' as AllowedTypeEnum,
    RequestOrchestration: 'RequestOrchestration' as AllowedTypeEnum,
    Requirements: 'Requirements' as AllowedTypeEnum,
    ResearchStudy: 'ResearchStudy' as AllowedTypeEnum,
    ResearchSubject: 'ResearchSubject' as AllowedTypeEnum,
    RiskAssessment: 'RiskAssessment' as AllowedTypeEnum,
    Schedule: 'Schedule' as AllowedTypeEnum,
    SearchParameter: 'SearchParameter' as AllowedTypeEnum,
    ServiceRequest: 'ServiceRequest' as AllowedTypeEnum,
    Slot: 'Slot' as AllowedTypeEnum,
    Specimen: 'Specimen' as AllowedTypeEnum,
    SpecimenDefinition: 'SpecimenDefinition' as AllowedTypeEnum,
    StructureDefinition: 'StructureDefinition' as AllowedTypeEnum,
    StructureMap: 'StructureMap' as AllowedTypeEnum,
    Subscription: 'Subscription' as AllowedTypeEnum,
    SubscriptionStatus: 'SubscriptionStatus' as AllowedTypeEnum,
    SubscriptionTopic: 'SubscriptionTopic' as AllowedTypeEnum,
    Substance: 'Substance' as AllowedTypeEnum,
    SubstanceDefinition: 'SubstanceDefinition' as AllowedTypeEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as AllowedTypeEnum,
    SubstancePolymer: 'SubstancePolymer' as AllowedTypeEnum,
    SubstanceProtein: 'SubstanceProtein' as AllowedTypeEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as AllowedTypeEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as AllowedTypeEnum,
    SupplyDelivery: 'SupplyDelivery' as AllowedTypeEnum,
    SupplyRequest: 'SupplyRequest' as AllowedTypeEnum,
    Task: 'Task' as AllowedTypeEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as AllowedTypeEnum,
    TestPlan: 'TestPlan' as AllowedTypeEnum,
    TestReport: 'TestReport' as AllowedTypeEnum,
    TestScript: 'TestScript' as AllowedTypeEnum,
    Transport: 'Transport' as AllowedTypeEnum,
    ValueSet: 'ValueSet' as AllowedTypeEnum,
    VerificationResult: 'VerificationResult' as AllowedTypeEnum,
    VisionPrescription: 'VisionPrescription' as AllowedTypeEnum,
    Parameters: 'Parameters' as AllowedTypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-param-type */
  export type SearchTypeEnum =
    | 'number'
    | 'date'
    | 'string'
    | 'token'
    | 'reference'
    | 'composite'
    | 'quantity'
    | 'uri'
    | 'special';
  export const SearchTypeEnum = {
    Number: 'number' as SearchTypeEnum,
    Date: 'date' as SearchTypeEnum,
    String: 'string' as SearchTypeEnum,
    Token: 'token' as SearchTypeEnum,
    Reference: 'reference' as SearchTypeEnum,
    Composite: 'composite' as SearchTypeEnum,
    Quantity: 'quantity' as SearchTypeEnum,
    Uri: 'uri' as SearchTypeEnum,
    Special: 'special' as SearchTypeEnum,
  };
}

/**
 * ValueSet details if this is coded
 */
export interface OperationDefinitionBinding {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** required | extensible | preferred | example (1..1) */
  strength?: OperationDefinitionBinding.StrengthEnum;
  /** Id and extensions of the primitive `strength`. */
  _strength?: Element;
  /** Source of value set (1..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;
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
 * References to this parameter
 */
export interface OperationDefinitionReferencedFrom {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Referencing parameter (1..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;
  /** Element id of reference (0..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;
}

/**
 * Define overloaded variants for when generating code
 */
export interface OperationDefinitionOverload {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
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
