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
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export interface SearchParameter {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this search parameter, represented as a URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the search parameter (business identifier) (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the search parameter (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this search parameter (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this search parameter (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Original definition for the search parameter (0..1) */
  derivedFrom?: string;
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: SearchParameter.StatusEnum;
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
  /** Natural language description of the search parameter (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for search parameter (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this search parameter is defined (0..1) */
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
  /** Recommended name for parameter in search url (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** The resource type(s) this search parameter applies to (1..*) */
  base?: Array<SearchParameter.BaseEnum>;
  /** Id and extensions of the primitive `base`. */
  _base?: Array<Element | null>;
  /** number | date | string | token | reference | composite | quantity | uri | special (1..1) */
  type?: SearchParameter.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** FHIRPath expression that extracts the values (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
  /** normal | phonetic | other (0..1) */
  processingMode?: SearchParameter.ProcessingModeEnum;
  /** Id and extensions of the primitive `processingMode`. */
  _processingMode?: Element;
  /** FHIRPath expression that constraints the usage of this SearchParamete (0..1) */
  constraint?: string;
  /** Id and extensions of the primitive `constraint`. */
  _constraint?: Element;
  /** Types of resource (if a resource reference) (0..*) */
  target?: Array<SearchParameter.TargetEnum>;
  /** Id and extensions of the primitive `target`. */
  _target?: Array<Element | null>;
  /** Allow multiple values per parameter (or) (0..1) */
  multipleOr?: boolean;
  /** Id and extensions of the primitive `multipleOr`. */
  _multipleOr?: Element;
  /** Allow multiple parameters (and) (0..1) */
  multipleAnd?: boolean;
  /** Id and extensions of the primitive `multipleAnd`. */
  _multipleAnd?: Element;
  /** eq | ne | gt | lt | ge | le | sa | eb | ap (0..*) */
  comparator?: Array<SearchParameter.ComparatorEnum>;
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: Array<Element | null>;
  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate (0..*) */
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/version-independent-all-resource-types */
  export type BaseEnum =
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
  export const BaseEnum = {
    Account: 'Account' as BaseEnum,
    ActivityDefinition: 'ActivityDefinition' as BaseEnum,
    ActorDefinition: 'ActorDefinition' as BaseEnum,
    AdministrableProductDefinition: 'AdministrableProductDefinition' as BaseEnum,
    AdverseEvent: 'AdverseEvent' as BaseEnum,
    AllergyIntolerance: 'AllergyIntolerance' as BaseEnum,
    Appointment: 'Appointment' as BaseEnum,
    AppointmentResponse: 'AppointmentResponse' as BaseEnum,
    ArtifactAssessment: 'ArtifactAssessment' as BaseEnum,
    AuditEvent: 'AuditEvent' as BaseEnum,
    Basic: 'Basic' as BaseEnum,
    Binary: 'Binary' as BaseEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as BaseEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as BaseEnum,
    BodyStructure: 'BodyStructure' as BaseEnum,
    Bundle: 'Bundle' as BaseEnum,
    CanonicalResource: 'CanonicalResource' as BaseEnum,
    CapabilityStatement: 'CapabilityStatement' as BaseEnum,
    CarePlan: 'CarePlan' as BaseEnum,
    CareTeam: 'CareTeam' as BaseEnum,
    ChargeItem: 'ChargeItem' as BaseEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as BaseEnum,
    Citation: 'Citation' as BaseEnum,
    Claim: 'Claim' as BaseEnum,
    ClaimResponse: 'ClaimResponse' as BaseEnum,
    ClinicalImpression: 'ClinicalImpression' as BaseEnum,
    ClinicalUseDefinition: 'ClinicalUseDefinition' as BaseEnum,
    CodeSystem: 'CodeSystem' as BaseEnum,
    Communication: 'Communication' as BaseEnum,
    CommunicationRequest: 'CommunicationRequest' as BaseEnum,
    CompartmentDefinition: 'CompartmentDefinition' as BaseEnum,
    Composition: 'Composition' as BaseEnum,
    ConceptMap: 'ConceptMap' as BaseEnum,
    Condition: 'Condition' as BaseEnum,
    ConditionDefinition: 'ConditionDefinition' as BaseEnum,
    Consent: 'Consent' as BaseEnum,
    Contract: 'Contract' as BaseEnum,
    Coverage: 'Coverage' as BaseEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as BaseEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as BaseEnum,
    DetectedIssue: 'DetectedIssue' as BaseEnum,
    Device: 'Device' as BaseEnum,
    DeviceAssociation: 'DeviceAssociation' as BaseEnum,
    DeviceDefinition: 'DeviceDefinition' as BaseEnum,
    DeviceDispense: 'DeviceDispense' as BaseEnum,
    DeviceMetric: 'DeviceMetric' as BaseEnum,
    DeviceRequest: 'DeviceRequest' as BaseEnum,
    DeviceUsage: 'DeviceUsage' as BaseEnum,
    DiagnosticReport: 'DiagnosticReport' as BaseEnum,
    DocumentReference: 'DocumentReference' as BaseEnum,
    DomainResource: 'DomainResource' as BaseEnum,
    Encounter: 'Encounter' as BaseEnum,
    EncounterHistory: 'EncounterHistory' as BaseEnum,
    Endpoint: 'Endpoint' as BaseEnum,
    EnrollmentRequest: 'EnrollmentRequest' as BaseEnum,
    EnrollmentResponse: 'EnrollmentResponse' as BaseEnum,
    EpisodeOfCare: 'EpisodeOfCare' as BaseEnum,
    EventDefinition: 'EventDefinition' as BaseEnum,
    Evidence: 'Evidence' as BaseEnum,
    EvidenceReport: 'EvidenceReport' as BaseEnum,
    EvidenceVariable: 'EvidenceVariable' as BaseEnum,
    ExampleScenario: 'ExampleScenario' as BaseEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as BaseEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as BaseEnum,
    Flag: 'Flag' as BaseEnum,
    FormularyItem: 'FormularyItem' as BaseEnum,
    GenomicStudy: 'GenomicStudy' as BaseEnum,
    Goal: 'Goal' as BaseEnum,
    GraphDefinition: 'GraphDefinition' as BaseEnum,
    Group: 'Group' as BaseEnum,
    GuidanceResponse: 'GuidanceResponse' as BaseEnum,
    HealthcareService: 'HealthcareService' as BaseEnum,
    ImagingSelection: 'ImagingSelection' as BaseEnum,
    ImagingStudy: 'ImagingStudy' as BaseEnum,
    Immunization: 'Immunization' as BaseEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as BaseEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as BaseEnum,
    ImplementationGuide: 'ImplementationGuide' as BaseEnum,
    Ingredient: 'Ingredient' as BaseEnum,
    InsurancePlan: 'InsurancePlan' as BaseEnum,
    InventoryItem: 'InventoryItem' as BaseEnum,
    InventoryReport: 'InventoryReport' as BaseEnum,
    Invoice: 'Invoice' as BaseEnum,
    Library: 'Library' as BaseEnum,
    Linkage: 'Linkage' as BaseEnum,
    List: 'List' as BaseEnum,
    Location: 'Location' as BaseEnum,
    ManufacturedItemDefinition: 'ManufacturedItemDefinition' as BaseEnum,
    Measure: 'Measure' as BaseEnum,
    MeasureReport: 'MeasureReport' as BaseEnum,
    Medication: 'Medication' as BaseEnum,
    MedicationAdministration: 'MedicationAdministration' as BaseEnum,
    MedicationDispense: 'MedicationDispense' as BaseEnum,
    MedicationKnowledge: 'MedicationKnowledge' as BaseEnum,
    MedicationRequest: 'MedicationRequest' as BaseEnum,
    MedicationStatement: 'MedicationStatement' as BaseEnum,
    MedicinalProductDefinition: 'MedicinalProductDefinition' as BaseEnum,
    MessageDefinition: 'MessageDefinition' as BaseEnum,
    MessageHeader: 'MessageHeader' as BaseEnum,
    MetadataResource: 'MetadataResource' as BaseEnum,
    MolecularSequence: 'MolecularSequence' as BaseEnum,
    NamingSystem: 'NamingSystem' as BaseEnum,
    NutritionIntake: 'NutritionIntake' as BaseEnum,
    NutritionOrder: 'NutritionOrder' as BaseEnum,
    NutritionProduct: 'NutritionProduct' as BaseEnum,
    Observation: 'Observation' as BaseEnum,
    ObservationDefinition: 'ObservationDefinition' as BaseEnum,
    OperationDefinition: 'OperationDefinition' as BaseEnum,
    OperationOutcome: 'OperationOutcome' as BaseEnum,
    Organization: 'Organization' as BaseEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as BaseEnum,
    PackagedProductDefinition: 'PackagedProductDefinition' as BaseEnum,
    Parameters: 'Parameters' as BaseEnum,
    Patient: 'Patient' as BaseEnum,
    PaymentNotice: 'PaymentNotice' as BaseEnum,
    PaymentReconciliation: 'PaymentReconciliation' as BaseEnum,
    Permission: 'Permission' as BaseEnum,
    Person: 'Person' as BaseEnum,
    PlanDefinition: 'PlanDefinition' as BaseEnum,
    Practitioner: 'Practitioner' as BaseEnum,
    PractitionerRole: 'PractitionerRole' as BaseEnum,
    Procedure: 'Procedure' as BaseEnum,
    Provenance: 'Provenance' as BaseEnum,
    Questionnaire: 'Questionnaire' as BaseEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as BaseEnum,
    RegulatedAuthorization: 'RegulatedAuthorization' as BaseEnum,
    RelatedPerson: 'RelatedPerson' as BaseEnum,
    RequestOrchestration: 'RequestOrchestration' as BaseEnum,
    Requirements: 'Requirements' as BaseEnum,
    ResearchStudy: 'ResearchStudy' as BaseEnum,
    ResearchSubject: 'ResearchSubject' as BaseEnum,
    Resource: 'Resource' as BaseEnum,
    RiskAssessment: 'RiskAssessment' as BaseEnum,
    Schedule: 'Schedule' as BaseEnum,
    SearchParameter: 'SearchParameter' as BaseEnum,
    ServiceRequest: 'ServiceRequest' as BaseEnum,
    Slot: 'Slot' as BaseEnum,
    Specimen: 'Specimen' as BaseEnum,
    SpecimenDefinition: 'SpecimenDefinition' as BaseEnum,
    StructureDefinition: 'StructureDefinition' as BaseEnum,
    StructureMap: 'StructureMap' as BaseEnum,
    Subscription: 'Subscription' as BaseEnum,
    SubscriptionStatus: 'SubscriptionStatus' as BaseEnum,
    SubscriptionTopic: 'SubscriptionTopic' as BaseEnum,
    Substance: 'Substance' as BaseEnum,
    SubstanceDefinition: 'SubstanceDefinition' as BaseEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as BaseEnum,
    SubstancePolymer: 'SubstancePolymer' as BaseEnum,
    SubstanceProtein: 'SubstanceProtein' as BaseEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as BaseEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as BaseEnum,
    SupplyDelivery: 'SupplyDelivery' as BaseEnum,
    SupplyRequest: 'SupplyRequest' as BaseEnum,
    Task: 'Task' as BaseEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as BaseEnum,
    TestPlan: 'TestPlan' as BaseEnum,
    TestReport: 'TestReport' as BaseEnum,
    TestScript: 'TestScript' as BaseEnum,
    Transport: 'Transport' as BaseEnum,
    ValueSet: 'ValueSet' as BaseEnum,
    VerificationResult: 'VerificationResult' as BaseEnum,
    VisionPrescription: 'VisionPrescription' as BaseEnum,
    BodySite: 'BodySite' as BaseEnum,
    CatalogEntry: 'CatalogEntry' as BaseEnum,
    Conformance: 'Conformance' as BaseEnum,
    DataElement: 'DataElement' as BaseEnum,
    DeviceComponent: 'DeviceComponent' as BaseEnum,
    DeviceUseRequest: 'DeviceUseRequest' as BaseEnum,
    DeviceUseStatement: 'DeviceUseStatement' as BaseEnum,
    DiagnosticOrder: 'DiagnosticOrder' as BaseEnum,
    DocumentManifest: 'DocumentManifest' as BaseEnum,
    EffectEvidenceSynthesis: 'EffectEvidenceSynthesis' as BaseEnum,
    EligibilityRequest: 'EligibilityRequest' as BaseEnum,
    EligibilityResponse: 'EligibilityResponse' as BaseEnum,
    ExpansionProfile: 'ExpansionProfile' as BaseEnum,
    ImagingManifest: 'ImagingManifest' as BaseEnum,
    ImagingObjectSelection: 'ImagingObjectSelection' as BaseEnum,
    Media: 'Media' as BaseEnum,
    MedicationOrder: 'MedicationOrder' as BaseEnum,
    MedicationUsage: 'MedicationUsage' as BaseEnum,
    MedicinalProduct: 'MedicinalProduct' as BaseEnum,
    MedicinalProductAuthorization: 'MedicinalProductAuthorization' as BaseEnum,
    MedicinalProductContraindication: 'MedicinalProductContraindication' as BaseEnum,
    MedicinalProductIndication: 'MedicinalProductIndication' as BaseEnum,
    MedicinalProductIngredient: 'MedicinalProductIngredient' as BaseEnum,
    MedicinalProductInteraction: 'MedicinalProductInteraction' as BaseEnum,
    MedicinalProductManufactured: 'MedicinalProductManufactured' as BaseEnum,
    MedicinalProductPackaged: 'MedicinalProductPackaged' as BaseEnum,
    MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical' as BaseEnum,
    MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect' as BaseEnum,
    Order: 'Order' as BaseEnum,
    OrderResponse: 'OrderResponse' as BaseEnum,
    ProcedureRequest: 'ProcedureRequest' as BaseEnum,
    ProcessRequest: 'ProcessRequest' as BaseEnum,
    ProcessResponse: 'ProcessResponse' as BaseEnum,
    ReferralRequest: 'ReferralRequest' as BaseEnum,
    RequestGroup: 'RequestGroup' as BaseEnum,
    ResearchDefinition: 'ResearchDefinition' as BaseEnum,
    ResearchElementDefinition: 'ResearchElementDefinition' as BaseEnum,
    RiskEvidenceSynthesis: 'RiskEvidenceSynthesis' as BaseEnum,
    Sequence: 'Sequence' as BaseEnum,
    ServiceDefinition: 'ServiceDefinition' as BaseEnum,
    SubstanceSpecification: 'SubstanceSpecification' as BaseEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-param-type */
  export type TypeEnum =
    | 'number'
    | 'date'
    | 'string'
    | 'token'
    | 'reference'
    | 'composite'
    | 'quantity'
    | 'uri'
    | 'special';
  export const TypeEnum = {
    Number: 'number' as TypeEnum,
    Date: 'date' as TypeEnum,
    String: 'string' as TypeEnum,
    Token: 'token' as TypeEnum,
    Reference: 'reference' as TypeEnum,
    Composite: 'composite' as TypeEnum,
    Quantity: 'quantity' as TypeEnum,
    Uri: 'uri' as TypeEnum,
    Special: 'special' as TypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-processingmode */
  export type ProcessingModeEnum = 'normal' | 'phonetic' | 'other';
  export const ProcessingModeEnum = {
    Normal: 'normal' as ProcessingModeEnum,
    Phonetic: 'phonetic' as ProcessingModeEnum,
    Other: 'other' as ProcessingModeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/version-independent-all-resource-types */
  export type TargetEnum =
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
  export const TargetEnum = {
    Account: 'Account' as TargetEnum,
    ActivityDefinition: 'ActivityDefinition' as TargetEnum,
    ActorDefinition: 'ActorDefinition' as TargetEnum,
    AdministrableProductDefinition: 'AdministrableProductDefinition' as TargetEnum,
    AdverseEvent: 'AdverseEvent' as TargetEnum,
    AllergyIntolerance: 'AllergyIntolerance' as TargetEnum,
    Appointment: 'Appointment' as TargetEnum,
    AppointmentResponse: 'AppointmentResponse' as TargetEnum,
    ArtifactAssessment: 'ArtifactAssessment' as TargetEnum,
    AuditEvent: 'AuditEvent' as TargetEnum,
    Basic: 'Basic' as TargetEnum,
    Binary: 'Binary' as TargetEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as TargetEnum,
    BiologicallyDerivedProductDispense: 'BiologicallyDerivedProductDispense' as TargetEnum,
    BodyStructure: 'BodyStructure' as TargetEnum,
    Bundle: 'Bundle' as TargetEnum,
    CanonicalResource: 'CanonicalResource' as TargetEnum,
    CapabilityStatement: 'CapabilityStatement' as TargetEnum,
    CarePlan: 'CarePlan' as TargetEnum,
    CareTeam: 'CareTeam' as TargetEnum,
    ChargeItem: 'ChargeItem' as TargetEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as TargetEnum,
    Citation: 'Citation' as TargetEnum,
    Claim: 'Claim' as TargetEnum,
    ClaimResponse: 'ClaimResponse' as TargetEnum,
    ClinicalImpression: 'ClinicalImpression' as TargetEnum,
    ClinicalUseDefinition: 'ClinicalUseDefinition' as TargetEnum,
    CodeSystem: 'CodeSystem' as TargetEnum,
    Communication: 'Communication' as TargetEnum,
    CommunicationRequest: 'CommunicationRequest' as TargetEnum,
    CompartmentDefinition: 'CompartmentDefinition' as TargetEnum,
    Composition: 'Composition' as TargetEnum,
    ConceptMap: 'ConceptMap' as TargetEnum,
    Condition: 'Condition' as TargetEnum,
    ConditionDefinition: 'ConditionDefinition' as TargetEnum,
    Consent: 'Consent' as TargetEnum,
    Contract: 'Contract' as TargetEnum,
    Coverage: 'Coverage' as TargetEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as TargetEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as TargetEnum,
    DetectedIssue: 'DetectedIssue' as TargetEnum,
    Device: 'Device' as TargetEnum,
    DeviceAssociation: 'DeviceAssociation' as TargetEnum,
    DeviceDefinition: 'DeviceDefinition' as TargetEnum,
    DeviceDispense: 'DeviceDispense' as TargetEnum,
    DeviceMetric: 'DeviceMetric' as TargetEnum,
    DeviceRequest: 'DeviceRequest' as TargetEnum,
    DeviceUsage: 'DeviceUsage' as TargetEnum,
    DiagnosticReport: 'DiagnosticReport' as TargetEnum,
    DocumentReference: 'DocumentReference' as TargetEnum,
    DomainResource: 'DomainResource' as TargetEnum,
    Encounter: 'Encounter' as TargetEnum,
    EncounterHistory: 'EncounterHistory' as TargetEnum,
    Endpoint: 'Endpoint' as TargetEnum,
    EnrollmentRequest: 'EnrollmentRequest' as TargetEnum,
    EnrollmentResponse: 'EnrollmentResponse' as TargetEnum,
    EpisodeOfCare: 'EpisodeOfCare' as TargetEnum,
    EventDefinition: 'EventDefinition' as TargetEnum,
    Evidence: 'Evidence' as TargetEnum,
    EvidenceReport: 'EvidenceReport' as TargetEnum,
    EvidenceVariable: 'EvidenceVariable' as TargetEnum,
    ExampleScenario: 'ExampleScenario' as TargetEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as TargetEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as TargetEnum,
    Flag: 'Flag' as TargetEnum,
    FormularyItem: 'FormularyItem' as TargetEnum,
    GenomicStudy: 'GenomicStudy' as TargetEnum,
    Goal: 'Goal' as TargetEnum,
    GraphDefinition: 'GraphDefinition' as TargetEnum,
    Group: 'Group' as TargetEnum,
    GuidanceResponse: 'GuidanceResponse' as TargetEnum,
    HealthcareService: 'HealthcareService' as TargetEnum,
    ImagingSelection: 'ImagingSelection' as TargetEnum,
    ImagingStudy: 'ImagingStudy' as TargetEnum,
    Immunization: 'Immunization' as TargetEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as TargetEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as TargetEnum,
    ImplementationGuide: 'ImplementationGuide' as TargetEnum,
    Ingredient: 'Ingredient' as TargetEnum,
    InsurancePlan: 'InsurancePlan' as TargetEnum,
    InventoryItem: 'InventoryItem' as TargetEnum,
    InventoryReport: 'InventoryReport' as TargetEnum,
    Invoice: 'Invoice' as TargetEnum,
    Library: 'Library' as TargetEnum,
    Linkage: 'Linkage' as TargetEnum,
    List: 'List' as TargetEnum,
    Location: 'Location' as TargetEnum,
    ManufacturedItemDefinition: 'ManufacturedItemDefinition' as TargetEnum,
    Measure: 'Measure' as TargetEnum,
    MeasureReport: 'MeasureReport' as TargetEnum,
    Medication: 'Medication' as TargetEnum,
    MedicationAdministration: 'MedicationAdministration' as TargetEnum,
    MedicationDispense: 'MedicationDispense' as TargetEnum,
    MedicationKnowledge: 'MedicationKnowledge' as TargetEnum,
    MedicationRequest: 'MedicationRequest' as TargetEnum,
    MedicationStatement: 'MedicationStatement' as TargetEnum,
    MedicinalProductDefinition: 'MedicinalProductDefinition' as TargetEnum,
    MessageDefinition: 'MessageDefinition' as TargetEnum,
    MessageHeader: 'MessageHeader' as TargetEnum,
    MetadataResource: 'MetadataResource' as TargetEnum,
    MolecularSequence: 'MolecularSequence' as TargetEnum,
    NamingSystem: 'NamingSystem' as TargetEnum,
    NutritionIntake: 'NutritionIntake' as TargetEnum,
    NutritionOrder: 'NutritionOrder' as TargetEnum,
    NutritionProduct: 'NutritionProduct' as TargetEnum,
    Observation: 'Observation' as TargetEnum,
    ObservationDefinition: 'ObservationDefinition' as TargetEnum,
    OperationDefinition: 'OperationDefinition' as TargetEnum,
    OperationOutcome: 'OperationOutcome' as TargetEnum,
    Organization: 'Organization' as TargetEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as TargetEnum,
    PackagedProductDefinition: 'PackagedProductDefinition' as TargetEnum,
    Parameters: 'Parameters' as TargetEnum,
    Patient: 'Patient' as TargetEnum,
    PaymentNotice: 'PaymentNotice' as TargetEnum,
    PaymentReconciliation: 'PaymentReconciliation' as TargetEnum,
    Permission: 'Permission' as TargetEnum,
    Person: 'Person' as TargetEnum,
    PlanDefinition: 'PlanDefinition' as TargetEnum,
    Practitioner: 'Practitioner' as TargetEnum,
    PractitionerRole: 'PractitionerRole' as TargetEnum,
    Procedure: 'Procedure' as TargetEnum,
    Provenance: 'Provenance' as TargetEnum,
    Questionnaire: 'Questionnaire' as TargetEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as TargetEnum,
    RegulatedAuthorization: 'RegulatedAuthorization' as TargetEnum,
    RelatedPerson: 'RelatedPerson' as TargetEnum,
    RequestOrchestration: 'RequestOrchestration' as TargetEnum,
    Requirements: 'Requirements' as TargetEnum,
    ResearchStudy: 'ResearchStudy' as TargetEnum,
    ResearchSubject: 'ResearchSubject' as TargetEnum,
    Resource: 'Resource' as TargetEnum,
    RiskAssessment: 'RiskAssessment' as TargetEnum,
    Schedule: 'Schedule' as TargetEnum,
    SearchParameter: 'SearchParameter' as TargetEnum,
    ServiceRequest: 'ServiceRequest' as TargetEnum,
    Slot: 'Slot' as TargetEnum,
    Specimen: 'Specimen' as TargetEnum,
    SpecimenDefinition: 'SpecimenDefinition' as TargetEnum,
    StructureDefinition: 'StructureDefinition' as TargetEnum,
    StructureMap: 'StructureMap' as TargetEnum,
    Subscription: 'Subscription' as TargetEnum,
    SubscriptionStatus: 'SubscriptionStatus' as TargetEnum,
    SubscriptionTopic: 'SubscriptionTopic' as TargetEnum,
    Substance: 'Substance' as TargetEnum,
    SubstanceDefinition: 'SubstanceDefinition' as TargetEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as TargetEnum,
    SubstancePolymer: 'SubstancePolymer' as TargetEnum,
    SubstanceProtein: 'SubstanceProtein' as TargetEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as TargetEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as TargetEnum,
    SupplyDelivery: 'SupplyDelivery' as TargetEnum,
    SupplyRequest: 'SupplyRequest' as TargetEnum,
    Task: 'Task' as TargetEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as TargetEnum,
    TestPlan: 'TestPlan' as TargetEnum,
    TestReport: 'TestReport' as TargetEnum,
    TestScript: 'TestScript' as TargetEnum,
    Transport: 'Transport' as TargetEnum,
    ValueSet: 'ValueSet' as TargetEnum,
    VerificationResult: 'VerificationResult' as TargetEnum,
    VisionPrescription: 'VisionPrescription' as TargetEnum,
    BodySite: 'BodySite' as TargetEnum,
    CatalogEntry: 'CatalogEntry' as TargetEnum,
    Conformance: 'Conformance' as TargetEnum,
    DataElement: 'DataElement' as TargetEnum,
    DeviceComponent: 'DeviceComponent' as TargetEnum,
    DeviceUseRequest: 'DeviceUseRequest' as TargetEnum,
    DeviceUseStatement: 'DeviceUseStatement' as TargetEnum,
    DiagnosticOrder: 'DiagnosticOrder' as TargetEnum,
    DocumentManifest: 'DocumentManifest' as TargetEnum,
    EffectEvidenceSynthesis: 'EffectEvidenceSynthesis' as TargetEnum,
    EligibilityRequest: 'EligibilityRequest' as TargetEnum,
    EligibilityResponse: 'EligibilityResponse' as TargetEnum,
    ExpansionProfile: 'ExpansionProfile' as TargetEnum,
    ImagingManifest: 'ImagingManifest' as TargetEnum,
    ImagingObjectSelection: 'ImagingObjectSelection' as TargetEnum,
    Media: 'Media' as TargetEnum,
    MedicationOrder: 'MedicationOrder' as TargetEnum,
    MedicationUsage: 'MedicationUsage' as TargetEnum,
    MedicinalProduct: 'MedicinalProduct' as TargetEnum,
    MedicinalProductAuthorization: 'MedicinalProductAuthorization' as TargetEnum,
    MedicinalProductContraindication: 'MedicinalProductContraindication' as TargetEnum,
    MedicinalProductIndication: 'MedicinalProductIndication' as TargetEnum,
    MedicinalProductIngredient: 'MedicinalProductIngredient' as TargetEnum,
    MedicinalProductInteraction: 'MedicinalProductInteraction' as TargetEnum,
    MedicinalProductManufactured: 'MedicinalProductManufactured' as TargetEnum,
    MedicinalProductPackaged: 'MedicinalProductPackaged' as TargetEnum,
    MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical' as TargetEnum,
    MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect' as TargetEnum,
    Order: 'Order' as TargetEnum,
    OrderResponse: 'OrderResponse' as TargetEnum,
    ProcedureRequest: 'ProcedureRequest' as TargetEnum,
    ProcessRequest: 'ProcessRequest' as TargetEnum,
    ProcessResponse: 'ProcessResponse' as TargetEnum,
    ReferralRequest: 'ReferralRequest' as TargetEnum,
    RequestGroup: 'RequestGroup' as TargetEnum,
    ResearchDefinition: 'ResearchDefinition' as TargetEnum,
    ResearchElementDefinition: 'ResearchElementDefinition' as TargetEnum,
    RiskEvidenceSynthesis: 'RiskEvidenceSynthesis' as TargetEnum,
    Sequence: 'Sequence' as TargetEnum,
    ServiceDefinition: 'ServiceDefinition' as TargetEnum,
    SubstanceSpecification: 'SubstanceSpecification' as TargetEnum,
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
    | 'type'
    | 'identifier'
    | 'of-type'
    | 'code-text'
    | 'text-advanced'
    | 'iterate';
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
    Identifier: 'identifier' as ModifierEnum,
    OfType: 'of-type' as ModifierEnum,
    CodeText: 'code-text' as ModifierEnum,
    TextAdvanced: 'text-advanced' as ModifierEnum,
    Iterate: 'iterate' as ModifierEnum,
  };
}

/**
 * For Composite resources to define the parts
 */
export interface SearchParameterComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Defines how the part works (1..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
  /** Subexpression relative to main expression (1..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
}
