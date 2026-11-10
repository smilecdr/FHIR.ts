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
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export interface GraphDefinition {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this graph definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the GraphDefinition (business identifier) (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the graph definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this graph definition (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this graph definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: GraphDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
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
  /** Natural language description of the graph definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for graph definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this graph definition is defined (0..1) */
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
  /** Starting Node (0..1) */
  start?: string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;
  /** Potential target for the link (0..*) */
  node?: Array<GraphDefinitionNode>;
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
}

/**
 * Potential target for the link
 */
export interface GraphDefinitionNode {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Internal ID - target for link references (1..1) */
  nodeId?: string;
  /** Id and extensions of the primitive `nodeId`. */
  _nodeId?: Element;
  /** Why this node is specified (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Type of resource this link refers to (1..1) */
  type?: GraphDefinitionNode.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Profile for the target resource (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;
}

export namespace GraphDefinitionNode {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/version-independent-all-resource-types */
  export type TypeEnum =
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
  export const TypeEnum = {
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
    Binary: 'Binary' as TypeEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as TypeEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as TypeEnum,
    BodyStructure: 'BodyStructure' as TypeEnum,
    Bundle: 'Bundle' as TypeEnum,
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
    DomainResource: 'DomainResource' as TypeEnum,
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
    Parameters: 'Parameters' as TypeEnum,
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
    Resource: 'Resource' as TypeEnum,
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
    BodySite: 'BodySite' as TypeEnum,
    CatalogEntry: 'CatalogEntry' as TypeEnum,
    Conformance: 'Conformance' as TypeEnum,
    DataElement: 'DataElement' as TypeEnum,
    DeviceComponent: 'DeviceComponent' as TypeEnum,
    DeviceUseRequest: 'DeviceUseRequest' as TypeEnum,
    DeviceUseStatement: 'DeviceUseStatement' as TypeEnum,
    DiagnosticOrder: 'DiagnosticOrder' as TypeEnum,
    DocumentManifest: 'DocumentManifest' as TypeEnum,
    EffectEvidenceSynthesis: 'EffectEvidenceSynthesis' as TypeEnum,
    EligibilityRequest: 'EligibilityRequest' as TypeEnum,
    EligibilityResponse: 'EligibilityResponse' as TypeEnum,
    ExpansionProfile: 'ExpansionProfile' as TypeEnum,
    ImagingManifest: 'ImagingManifest' as TypeEnum,
    ImagingObjectSelection: 'ImagingObjectSelection' as TypeEnum,
    Media: 'Media' as TypeEnum,
    MedicationOrder: 'MedicationOrder' as TypeEnum,
    MedicationUsage: 'MedicationUsage' as TypeEnum,
    MedicinalProduct: 'MedicinalProduct' as TypeEnum,
    MedicinalProductAuthorization: 'MedicinalProductAuthorization' as TypeEnum,
    MedicinalProductContraindication: 'MedicinalProductContraindication' as TypeEnum,
    MedicinalProductIndication: 'MedicinalProductIndication' as TypeEnum,
    MedicinalProductIngredient: 'MedicinalProductIngredient' as TypeEnum,
    MedicinalProductInteraction: 'MedicinalProductInteraction' as TypeEnum,
    MedicinalProductManufactured: 'MedicinalProductManufactured' as TypeEnum,
    MedicinalProductPackaged: 'MedicinalProductPackaged' as TypeEnum,
    MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical' as TypeEnum,
    MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect' as TypeEnum,
    Order: 'Order' as TypeEnum,
    OrderResponse: 'OrderResponse' as TypeEnum,
    ProcedureRequest: 'ProcedureRequest' as TypeEnum,
    ProcessRequest: 'ProcessRequest' as TypeEnum,
    ProcessResponse: 'ProcessResponse' as TypeEnum,
    ReferralRequest: 'ReferralRequest' as TypeEnum,
    RequestGroup: 'RequestGroup' as TypeEnum,
    ResearchDefinition: 'ResearchDefinition' as TypeEnum,
    ResearchElementDefinition: 'ResearchElementDefinition' as TypeEnum,
    RiskEvidenceSynthesis: 'RiskEvidenceSynthesis' as TypeEnum,
    Sequence: 'Sequence' as TypeEnum,
    ServiceDefinition: 'ServiceDefinition' as TypeEnum,
    SubstanceSpecification: 'SubstanceSpecification' as TypeEnum,
  };
}

/**
 * Links this graph makes rules about
 */
export interface GraphDefinitionLink {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Why this link is specified (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Minimum occurrences for this link (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;
  /** Maximum occurrences for this link (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;
  /** Source Node for this link (1..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;
  /** Path in the resource that contains the link (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** Which slice (if profiled) (0..1) */
  sliceName?: string;
  /** Id and extensions of the primitive `sliceName`. */
  _sliceName?: Element;
  /** Target Node for this link (1..1) */
  targetId?: string;
  /** Id and extensions of the primitive `targetId`. */
  _targetId?: Element;
  /** Criteria for reverse lookup (0..1) */
  params?: string;
  /** Id and extensions of the primitive `params`. */
  _params?: Element;
  /** Compartment Consistency Rules (0..*) */
  compartment?: Array<GraphDefinitionCompartment>;
}

/**
 * Compartment Consistency Rules
 */
export interface GraphDefinitionCompartment {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** where | requires (1..1) */
  use?: GraphDefinitionCompartment.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** identical | matching | different | custom (1..1) */
  rule?: GraphDefinitionCompartment.RuleEnum;
  /** Id and extensions of the primitive `rule`. */
  _rule?: Element;
  /** Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare (1..1) */
  code?: GraphDefinitionCompartment.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/graph-compartment-use */
  export type UseEnum = 'where' | 'requires';
  export const UseEnum = { Where: 'where' as UseEnum, Requires: 'requires' as UseEnum };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/graph-compartment-rule */
  export type RuleEnum = 'identical' | 'matching' | 'different' | 'custom';
  export const RuleEnum = {
    Identical: 'identical' as RuleEnum,
    Matching: 'matching' as RuleEnum,
    Different: 'different' as RuleEnum,
    Custom: 'custom' as RuleEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/compartment-type */
  export type CodeEnum =
    'Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device' | 'EpisodeOfCare';
  export const CodeEnum = {
    Patient: 'Patient' as CodeEnum,
    Encounter: 'Encounter' as CodeEnum,
    RelatedPerson: 'RelatedPerson' as CodeEnum,
    Practitioner: 'Practitioner' as CodeEnum,
    Device: 'Device' as CodeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as CodeEnum,
  };
}
