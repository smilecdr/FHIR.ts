/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Example of workflow instance.
 */
export class ExampleScenario {
  resourceType: 'ExampleScenario';
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
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this example scenario, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the example scenario (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the example scenario (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this example scenario (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ExampleScenario.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for example scenario (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** The purpose of the example, e.g. to illustrate a scenario (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Actor participating in the resource (0..*) */
  actor?: Array<ExampleScenarioActor>;
  /** Each resource and each version that is present in the workflow (0..*) */
  instance?: Array<ExampleScenarioInstance>;
  /** Each major process - a group of operations (0..*) */
  process?: Array<ExampleScenarioProcess>;
  /** Another nested workflow (0..*) */
  workflow?: Array<string>;
  /** Id and extensions of the primitive `workflow`. */
  _workflow?: Array<Element | null>;
}

export namespace ExampleScenario {
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
 * Actor participating in the resource
 */
export class ExampleScenarioActor {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** ID or acronym of the actor (1..1) */
  actorId?: string;
  /** Id and extensions of the primitive `actorId`. */
  _actorId?: Element;
  /** person | entity (1..1) */
  type?: ExampleScenarioActor.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** The name of the actor as shown in the page (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** The description of the actor (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

export namespace ExampleScenarioActor {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/examplescenario-actor-type */
  export type TypeEnum = 'person' | 'entity';
  export const TypeEnum = { Person: 'person' as TypeEnum, Entity: 'entity' as TypeEnum };
}

/**
 * Each resource and each version that is present in the workflow
 */
export class ExampleScenarioInstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The id of the resource for referencing (1..1) */
  resourceId?: string;
  /** Id and extensions of the primitive `resourceId`. */
  _resourceId?: Element;
  /** The type of the resource (1..1) */
  resourceType?: ExampleScenarioInstance.ResourceTypeEnum;
  /** Id and extensions of the primitive `resourceType`. */
  _resourceType?: Element;
  /** A short name for the resource instance (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Human-friendly description of the resource instance (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** A specific version of the resource (0..*) */
  version?: Array<ExampleScenarioVersion>;
  /** Resources contained in the instance (0..*) */
  containedInstance?: Array<ExampleScenarioContainedInstance>;
}

export namespace ExampleScenarioInstance {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type ResourceTypeEnum =
    | 'Account'
    | 'ActivityDefinition'
    | 'AdverseEvent'
    | 'AllergyIntolerance'
    | 'Appointment'
    | 'AppointmentResponse'
    | 'AuditEvent'
    | 'Basic'
    | 'Binary'
    | 'BiologicallyDerivedProduct'
    | 'BodyStructure'
    | 'Bundle'
    | 'CapabilityStatement'
    | 'CarePlan'
    | 'CareTeam'
    | 'CatalogEntry'
    | 'ChargeItem'
    | 'ChargeItemDefinition'
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
    | 'CoverageEligibilityRequest'
    | 'CoverageEligibilityResponse'
    | 'DetectedIssue'
    | 'Device'
    | 'DeviceDefinition'
    | 'DeviceMetric'
    | 'DeviceRequest'
    | 'DeviceUseStatement'
    | 'DiagnosticReport'
    | 'DocumentManifest'
    | 'DocumentReference'
    | 'DomainResource'
    | 'EffectEvidenceSynthesis'
    | 'Encounter'
    | 'Endpoint'
    | 'EnrollmentRequest'
    | 'EnrollmentResponse'
    | 'EpisodeOfCare'
    | 'EventDefinition'
    | 'Evidence'
    | 'EvidenceVariable'
    | 'ExampleScenario'
    | 'ExplanationOfBenefit'
    | 'FamilyMemberHistory'
    | 'Flag'
    | 'Goal'
    | 'GraphDefinition'
    | 'Group'
    | 'GuidanceResponse'
    | 'HealthcareService'
    | 'ImagingStudy'
    | 'Immunization'
    | 'ImmunizationEvaluation'
    | 'ImmunizationRecommendation'
    | 'ImplementationGuide'
    | 'InsurancePlan'
    | 'Invoice'
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
    | 'MedicationKnowledge'
    | 'MedicationRequest'
    | 'MedicationStatement'
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
    | 'MessageDefinition'
    | 'MessageHeader'
    | 'MolecularSequence'
    | 'NamingSystem'
    | 'NutritionOrder'
    | 'Observation'
    | 'ObservationDefinition'
    | 'OperationDefinition'
    | 'OperationOutcome'
    | 'Organization'
    | 'OrganizationAffiliation'
    | 'Parameters'
    | 'Patient'
    | 'PaymentNotice'
    | 'PaymentReconciliation'
    | 'Person'
    | 'PlanDefinition'
    | 'Practitioner'
    | 'PractitionerRole'
    | 'Procedure'
    | 'Provenance'
    | 'Questionnaire'
    | 'QuestionnaireResponse'
    | 'RelatedPerson'
    | 'RequestGroup'
    | 'ResearchDefinition'
    | 'ResearchElementDefinition'
    | 'ResearchStudy'
    | 'ResearchSubject'
    | 'Resource'
    | 'RiskAssessment'
    | 'RiskEvidenceSynthesis'
    | 'Schedule'
    | 'SearchParameter'
    | 'ServiceRequest'
    | 'Slot'
    | 'Specimen'
    | 'SpecimenDefinition'
    | 'StructureDefinition'
    | 'StructureMap'
    | 'Subscription'
    | 'Substance'
    | 'SubstanceNucleicAcid'
    | 'SubstancePolymer'
    | 'SubstanceProtein'
    | 'SubstanceReferenceInformation'
    | 'SubstanceSourceMaterial'
    | 'SubstanceSpecification'
    | 'SupplyDelivery'
    | 'SupplyRequest'
    | 'Task'
    | 'TerminologyCapabilities'
    | 'TestReport'
    | 'TestScript'
    | 'ValueSet'
    | 'VerificationResult'
    | 'VisionPrescription';
  export const ResourceTypeEnum = {
    Account: 'Account' as ResourceTypeEnum,
    ActivityDefinition: 'ActivityDefinition' as ResourceTypeEnum,
    AdverseEvent: 'AdverseEvent' as ResourceTypeEnum,
    AllergyIntolerance: 'AllergyIntolerance' as ResourceTypeEnum,
    Appointment: 'Appointment' as ResourceTypeEnum,
    AppointmentResponse: 'AppointmentResponse' as ResourceTypeEnum,
    AuditEvent: 'AuditEvent' as ResourceTypeEnum,
    Basic: 'Basic' as ResourceTypeEnum,
    Binary: 'Binary' as ResourceTypeEnum,
    BiologicallyDerivedProduct: 'BiologicallyDerivedProduct' as ResourceTypeEnum,
    BodyStructure: 'BodyStructure' as ResourceTypeEnum,
    Bundle: 'Bundle' as ResourceTypeEnum,
    CapabilityStatement: 'CapabilityStatement' as ResourceTypeEnum,
    CarePlan: 'CarePlan' as ResourceTypeEnum,
    CareTeam: 'CareTeam' as ResourceTypeEnum,
    CatalogEntry: 'CatalogEntry' as ResourceTypeEnum,
    ChargeItem: 'ChargeItem' as ResourceTypeEnum,
    ChargeItemDefinition: 'ChargeItemDefinition' as ResourceTypeEnum,
    Claim: 'Claim' as ResourceTypeEnum,
    ClaimResponse: 'ClaimResponse' as ResourceTypeEnum,
    ClinicalImpression: 'ClinicalImpression' as ResourceTypeEnum,
    CodeSystem: 'CodeSystem' as ResourceTypeEnum,
    Communication: 'Communication' as ResourceTypeEnum,
    CommunicationRequest: 'CommunicationRequest' as ResourceTypeEnum,
    CompartmentDefinition: 'CompartmentDefinition' as ResourceTypeEnum,
    Composition: 'Composition' as ResourceTypeEnum,
    ConceptMap: 'ConceptMap' as ResourceTypeEnum,
    Condition: 'Condition' as ResourceTypeEnum,
    Consent: 'Consent' as ResourceTypeEnum,
    Contract: 'Contract' as ResourceTypeEnum,
    Coverage: 'Coverage' as ResourceTypeEnum,
    CoverageEligibilityRequest: 'CoverageEligibilityRequest' as ResourceTypeEnum,
    CoverageEligibilityResponse: 'CoverageEligibilityResponse' as ResourceTypeEnum,
    DetectedIssue: 'DetectedIssue' as ResourceTypeEnum,
    Device: 'Device' as ResourceTypeEnum,
    DeviceDefinition: 'DeviceDefinition' as ResourceTypeEnum,
    DeviceMetric: 'DeviceMetric' as ResourceTypeEnum,
    DeviceRequest: 'DeviceRequest' as ResourceTypeEnum,
    DeviceUseStatement: 'DeviceUseStatement' as ResourceTypeEnum,
    DiagnosticReport: 'DiagnosticReport' as ResourceTypeEnum,
    DocumentManifest: 'DocumentManifest' as ResourceTypeEnum,
    DocumentReference: 'DocumentReference' as ResourceTypeEnum,
    DomainResource: 'DomainResource' as ResourceTypeEnum,
    EffectEvidenceSynthesis: 'EffectEvidenceSynthesis' as ResourceTypeEnum,
    Encounter: 'Encounter' as ResourceTypeEnum,
    Endpoint: 'Endpoint' as ResourceTypeEnum,
    EnrollmentRequest: 'EnrollmentRequest' as ResourceTypeEnum,
    EnrollmentResponse: 'EnrollmentResponse' as ResourceTypeEnum,
    EpisodeOfCare: 'EpisodeOfCare' as ResourceTypeEnum,
    EventDefinition: 'EventDefinition' as ResourceTypeEnum,
    Evidence: 'Evidence' as ResourceTypeEnum,
    EvidenceVariable: 'EvidenceVariable' as ResourceTypeEnum,
    ExampleScenario: 'ExampleScenario' as ResourceTypeEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as ResourceTypeEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as ResourceTypeEnum,
    Flag: 'Flag' as ResourceTypeEnum,
    Goal: 'Goal' as ResourceTypeEnum,
    GraphDefinition: 'GraphDefinition' as ResourceTypeEnum,
    Group: 'Group' as ResourceTypeEnum,
    GuidanceResponse: 'GuidanceResponse' as ResourceTypeEnum,
    HealthcareService: 'HealthcareService' as ResourceTypeEnum,
    ImagingStudy: 'ImagingStudy' as ResourceTypeEnum,
    Immunization: 'Immunization' as ResourceTypeEnum,
    ImmunizationEvaluation: 'ImmunizationEvaluation' as ResourceTypeEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as ResourceTypeEnum,
    ImplementationGuide: 'ImplementationGuide' as ResourceTypeEnum,
    InsurancePlan: 'InsurancePlan' as ResourceTypeEnum,
    Invoice: 'Invoice' as ResourceTypeEnum,
    Library: 'Library' as ResourceTypeEnum,
    Linkage: 'Linkage' as ResourceTypeEnum,
    List: 'List' as ResourceTypeEnum,
    Location: 'Location' as ResourceTypeEnum,
    Measure: 'Measure' as ResourceTypeEnum,
    MeasureReport: 'MeasureReport' as ResourceTypeEnum,
    Media: 'Media' as ResourceTypeEnum,
    Medication: 'Medication' as ResourceTypeEnum,
    MedicationAdministration: 'MedicationAdministration' as ResourceTypeEnum,
    MedicationDispense: 'MedicationDispense' as ResourceTypeEnum,
    MedicationKnowledge: 'MedicationKnowledge' as ResourceTypeEnum,
    MedicationRequest: 'MedicationRequest' as ResourceTypeEnum,
    MedicationStatement: 'MedicationStatement' as ResourceTypeEnum,
    MedicinalProduct: 'MedicinalProduct' as ResourceTypeEnum,
    MedicinalProductAuthorization: 'MedicinalProductAuthorization' as ResourceTypeEnum,
    MedicinalProductContraindication: 'MedicinalProductContraindication' as ResourceTypeEnum,
    MedicinalProductIndication: 'MedicinalProductIndication' as ResourceTypeEnum,
    MedicinalProductIngredient: 'MedicinalProductIngredient' as ResourceTypeEnum,
    MedicinalProductInteraction: 'MedicinalProductInteraction' as ResourceTypeEnum,
    MedicinalProductManufactured: 'MedicinalProductManufactured' as ResourceTypeEnum,
    MedicinalProductPackaged: 'MedicinalProductPackaged' as ResourceTypeEnum,
    MedicinalProductPharmaceutical: 'MedicinalProductPharmaceutical' as ResourceTypeEnum,
    MedicinalProductUndesirableEffect: 'MedicinalProductUndesirableEffect' as ResourceTypeEnum,
    MessageDefinition: 'MessageDefinition' as ResourceTypeEnum,
    MessageHeader: 'MessageHeader' as ResourceTypeEnum,
    MolecularSequence: 'MolecularSequence' as ResourceTypeEnum,
    NamingSystem: 'NamingSystem' as ResourceTypeEnum,
    NutritionOrder: 'NutritionOrder' as ResourceTypeEnum,
    Observation: 'Observation' as ResourceTypeEnum,
    ObservationDefinition: 'ObservationDefinition' as ResourceTypeEnum,
    OperationDefinition: 'OperationDefinition' as ResourceTypeEnum,
    OperationOutcome: 'OperationOutcome' as ResourceTypeEnum,
    Organization: 'Organization' as ResourceTypeEnum,
    OrganizationAffiliation: 'OrganizationAffiliation' as ResourceTypeEnum,
    Parameters: 'Parameters' as ResourceTypeEnum,
    Patient: 'Patient' as ResourceTypeEnum,
    PaymentNotice: 'PaymentNotice' as ResourceTypeEnum,
    PaymentReconciliation: 'PaymentReconciliation' as ResourceTypeEnum,
    Person: 'Person' as ResourceTypeEnum,
    PlanDefinition: 'PlanDefinition' as ResourceTypeEnum,
    Practitioner: 'Practitioner' as ResourceTypeEnum,
    PractitionerRole: 'PractitionerRole' as ResourceTypeEnum,
    Procedure: 'Procedure' as ResourceTypeEnum,
    Provenance: 'Provenance' as ResourceTypeEnum,
    Questionnaire: 'Questionnaire' as ResourceTypeEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as ResourceTypeEnum,
    RelatedPerson: 'RelatedPerson' as ResourceTypeEnum,
    RequestGroup: 'RequestGroup' as ResourceTypeEnum,
    ResearchDefinition: 'ResearchDefinition' as ResourceTypeEnum,
    ResearchElementDefinition: 'ResearchElementDefinition' as ResourceTypeEnum,
    ResearchStudy: 'ResearchStudy' as ResourceTypeEnum,
    ResearchSubject: 'ResearchSubject' as ResourceTypeEnum,
    Resource: 'Resource' as ResourceTypeEnum,
    RiskAssessment: 'RiskAssessment' as ResourceTypeEnum,
    RiskEvidenceSynthesis: 'RiskEvidenceSynthesis' as ResourceTypeEnum,
    Schedule: 'Schedule' as ResourceTypeEnum,
    SearchParameter: 'SearchParameter' as ResourceTypeEnum,
    ServiceRequest: 'ServiceRequest' as ResourceTypeEnum,
    Slot: 'Slot' as ResourceTypeEnum,
    Specimen: 'Specimen' as ResourceTypeEnum,
    SpecimenDefinition: 'SpecimenDefinition' as ResourceTypeEnum,
    StructureDefinition: 'StructureDefinition' as ResourceTypeEnum,
    StructureMap: 'StructureMap' as ResourceTypeEnum,
    Subscription: 'Subscription' as ResourceTypeEnum,
    Substance: 'Substance' as ResourceTypeEnum,
    SubstanceNucleicAcid: 'SubstanceNucleicAcid' as ResourceTypeEnum,
    SubstancePolymer: 'SubstancePolymer' as ResourceTypeEnum,
    SubstanceProtein: 'SubstanceProtein' as ResourceTypeEnum,
    SubstanceReferenceInformation: 'SubstanceReferenceInformation' as ResourceTypeEnum,
    SubstanceSourceMaterial: 'SubstanceSourceMaterial' as ResourceTypeEnum,
    SubstanceSpecification: 'SubstanceSpecification' as ResourceTypeEnum,
    SupplyDelivery: 'SupplyDelivery' as ResourceTypeEnum,
    SupplyRequest: 'SupplyRequest' as ResourceTypeEnum,
    Task: 'Task' as ResourceTypeEnum,
    TerminologyCapabilities: 'TerminologyCapabilities' as ResourceTypeEnum,
    TestReport: 'TestReport' as ResourceTypeEnum,
    TestScript: 'TestScript' as ResourceTypeEnum,
    ValueSet: 'ValueSet' as ResourceTypeEnum,
    VerificationResult: 'VerificationResult' as ResourceTypeEnum,
    VisionPrescription: 'VisionPrescription' as ResourceTypeEnum,
  };
}

/**
 * A specific version of the resource
 */
export class ExampleScenarioVersion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The identifier of a specific version of a resource (1..1) */
  versionId?: string;
  /** Id and extensions of the primitive `versionId`. */
  _versionId?: Element;
  /** The description of the resource version (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

/**
 * Resources contained in the instance
 */
export class ExampleScenarioContainedInstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Each resource contained in the instance (1..1) */
  resourceId?: string;
  /** Id and extensions of the primitive `resourceId`. */
  _resourceId?: Element;
  /** A specific version of a resource contained in the instance (0..1) */
  versionId?: string;
  /** Id and extensions of the primitive `versionId`. */
  _versionId?: Element;
}

/**
 * Each major process - a group of operations
 */
export class ExampleScenarioProcess {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The diagram title of the group of operations (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** A longer description of the group of operations (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Description of initial status before the process starts (0..1) */
  preConditions?: string;
  /** Id and extensions of the primitive `preConditions`. */
  _preConditions?: Element;
  /** Description of final status after the process ends (0..1) */
  postConditions?: string;
  /** Id and extensions of the primitive `postConditions`. */
  _postConditions?: Element;
  /** Each step of the process (0..*) */
  step?: Array<ExampleScenarioStep>;
}

/**
 * Each step of the process
 */
export class ExampleScenarioStep {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Nested process (0..*) */
  process?: Array<ExampleScenarioProcess>;
  /** If there is a pause in the flow (0..1) */
  pause?: boolean;
  /** Id and extensions of the primitive `pause`. */
  _pause?: Element;
  /** Each interaction or action (0..1) */
  operation?: ExampleScenarioOperation;
  /** Alternate non-typical step action (0..*) */
  alternative?: Array<ExampleScenarioAlternative>;
}

/**
 * Each interaction or action
 */
export class ExampleScenarioOperation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The sequential number of the interaction (1..1) */
  number?: string;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;
  /** The type of operation - CRUD (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** The human-friendly name of the interaction (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Who starts the transaction (0..1) */
  initiator?: string;
  /** Id and extensions of the primitive `initiator`. */
  _initiator?: Element;
  /** Who receives the transaction (0..1) */
  receiver?: string;
  /** Id and extensions of the primitive `receiver`. */
  _receiver?: Element;
  /** A comment to be inserted in the diagram (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Whether the initiator is deactivated right after the transaction (0..1) */
  initiatorActive?: boolean;
  /** Id and extensions of the primitive `initiatorActive`. */
  _initiatorActive?: Element;
  /** Whether the receiver is deactivated right after the transaction (0..1) */
  receiverActive?: boolean;
  /** Id and extensions of the primitive `receiverActive`. */
  _receiverActive?: Element;
  /** Each resource instance used by the initiator (0..1) */
  request?: ExampleScenarioContainedInstance;
  /** Each resource instance used by the responder (0..1) */
  response?: ExampleScenarioContainedInstance;
}

/**
 * Alternate non-typical step action
 */
export class ExampleScenarioAlternative {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for alternative (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** A human-readable description of each option (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** What happens in each alternative option (0..*) */
  step?: Array<ExampleScenarioStep>;
}
