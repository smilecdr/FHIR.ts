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
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface CapabilityStatement {
  resourceType: 'CapabilityStatement';
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
  /** Canonical identifier for this capability statement, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the CapabilityStatement (business identifier) (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the capability statement (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this capability statement (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this capability statement (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: CapabilityStatement.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the capability statement (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for capability statement (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this capability statement is defined (0..1) */
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
  /** instance | capability | requirements (1..1) */
  kind?: CapabilityStatement.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Canonical URL of another capability statement this implements (0..*) */
  instantiates?: Array<string>;
  /** Id and extensions of the primitive `instantiates`. */
  _instantiates?: Array<Element | null>;
  /** Canonical URL of another capability statement this adds to (0..*) */
  imports?: Array<string>;
  /** Id and extensions of the primitive `imports`. */
  _imports?: Array<Element | null>;
  /** Software that is covered by this capability statement (0..1) */
  software?: CapabilityStatementSoftware;
  /** If this describes a specific instance (0..1) */
  implementation?: CapabilityStatementImplementation;
  /** FHIR Version the system supports (1..1) */
  fhirVersion?: CapabilityStatement.FhirVersionEnum;
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: Element;
  /** formats supported (xml | json | ttl | mime type) (1..*) */
  format?: Array<string>;
  /** Id and extensions of the primitive `format`. */
  _format?: Array<Element | null>;
  /** Patch formats supported (0..*) */
  patchFormat?: Array<string>;
  /** Id and extensions of the primitive `patchFormat`. */
  _patchFormat?: Array<Element | null>;
  /** Languages supported (0..*) */
  acceptLanguage?: Array<string>;
  /** Id and extensions of the primitive `acceptLanguage`. */
  _acceptLanguage?: Array<Element | null>;
  /** Implementation guides supported (0..*) */
  implementationGuide?: Array<string>;
  /** Id and extensions of the primitive `implementationGuide`. */
  _implementationGuide?: Array<Element | null>;
  /** If the endpoint is a RESTful one (0..*) */
  rest?: Array<CapabilityStatementRest>;
  /** If messaging is supported (0..*) */
  messaging?: Array<CapabilityStatementMessaging>;
  /** Document definition (0..*) */
  document?: Array<CapabilityStatementDocument>;
}

export namespace CapabilityStatement {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/capability-statement-kind */
  export type KindEnum = 'instance' | 'capability' | 'requirements';
  export const KindEnum = {
    Instance: 'instance' as KindEnum,
    Capability: 'capability' as KindEnum,
    Requirements: 'requirements' as KindEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/FHIR-version */
  export type FhirVersionEnum =
    | '0.01'
    | '0.05'
    | '0.06'
    | '0.11'
    | '0.0'
    | '0.0.80'
    | '0.0.81'
    | '0.0.82'
    | '0.4'
    | '0.4.0'
    | '0.5'
    | '0.5.0'
    | '1.0'
    | '1.0.0'
    | '1.0.1'
    | '1.0.2'
    | '1.1'
    | '1.1.0'
    | '1.4'
    | '1.4.0'
    | '1.6'
    | '1.6.0'
    | '1.8'
    | '1.8.0'
    | '3.0'
    | '3.0.0'
    | '3.0.1'
    | '3.0.2'
    | '3.3'
    | '3.3.0'
    | '3.5'
    | '3.5.0'
    | '4.0'
    | '4.0.0'
    | '4.0.1'
    | '4.1'
    | '4.1.0'
    | '4.2'
    | '4.2.0'
    | '4.3'
    | '4.3.0'
    | '4.3.0-cibuild'
    | '4.3.0-snapshot1'
    | '4.4'
    | '4.4.0'
    | '4.5'
    | '4.5.0'
    | '4.6'
    | '4.6.0'
    | '5.0'
    | '5.0.0'
    | '5.0.0-cibuild'
    | '5.0.0-snapshot1'
    | '5.0.0-snapshot2'
    | '5.0.0-ballot'
    | '5.0.0-snapshot3'
    | '5.0.0-draft-final';
  export const FhirVersionEnum = {
    _001: '0.01' as FhirVersionEnum,
    _005: '0.05' as FhirVersionEnum,
    _006: '0.06' as FhirVersionEnum,
    _011: '0.11' as FhirVersionEnum,
    _00: '0.0' as FhirVersionEnum,
    _0080: '0.0.80' as FhirVersionEnum,
    _0081: '0.0.81' as FhirVersionEnum,
    _0082: '0.0.82' as FhirVersionEnum,
    _04: '0.4' as FhirVersionEnum,
    _040: '0.4.0' as FhirVersionEnum,
    _05: '0.5' as FhirVersionEnum,
    _050: '0.5.0' as FhirVersionEnum,
    _10: '1.0' as FhirVersionEnum,
    _100: '1.0.0' as FhirVersionEnum,
    _101: '1.0.1' as FhirVersionEnum,
    _102: '1.0.2' as FhirVersionEnum,
    _11: '1.1' as FhirVersionEnum,
    _110: '1.1.0' as FhirVersionEnum,
    _14: '1.4' as FhirVersionEnum,
    _140: '1.4.0' as FhirVersionEnum,
    _16: '1.6' as FhirVersionEnum,
    _160: '1.6.0' as FhirVersionEnum,
    _18: '1.8' as FhirVersionEnum,
    _180: '1.8.0' as FhirVersionEnum,
    _30: '3.0' as FhirVersionEnum,
    _300: '3.0.0' as FhirVersionEnum,
    _301: '3.0.1' as FhirVersionEnum,
    _302: '3.0.2' as FhirVersionEnum,
    _33: '3.3' as FhirVersionEnum,
    _330: '3.3.0' as FhirVersionEnum,
    _35: '3.5' as FhirVersionEnum,
    _350: '3.5.0' as FhirVersionEnum,
    _40: '4.0' as FhirVersionEnum,
    _400: '4.0.0' as FhirVersionEnum,
    _401: '4.0.1' as FhirVersionEnum,
    _41: '4.1' as FhirVersionEnum,
    _410: '4.1.0' as FhirVersionEnum,
    _42: '4.2' as FhirVersionEnum,
    _420: '4.2.0' as FhirVersionEnum,
    _43: '4.3' as FhirVersionEnum,
    _430: '4.3.0' as FhirVersionEnum,
    _430Cibuild: '4.3.0-cibuild' as FhirVersionEnum,
    _430Snapshot1: '4.3.0-snapshot1' as FhirVersionEnum,
    _44: '4.4' as FhirVersionEnum,
    _440: '4.4.0' as FhirVersionEnum,
    _45: '4.5' as FhirVersionEnum,
    _450: '4.5.0' as FhirVersionEnum,
    _46: '4.6' as FhirVersionEnum,
    _460: '4.6.0' as FhirVersionEnum,
    _50: '5.0' as FhirVersionEnum,
    _500: '5.0.0' as FhirVersionEnum,
    _500Cibuild: '5.0.0-cibuild' as FhirVersionEnum,
    _500Snapshot1: '5.0.0-snapshot1' as FhirVersionEnum,
    _500Snapshot2: '5.0.0-snapshot2' as FhirVersionEnum,
    _500Ballot: '5.0.0-ballot' as FhirVersionEnum,
    _500Snapshot3: '5.0.0-snapshot3' as FhirVersionEnum,
    _500DraftFinal: '5.0.0-draft-final' as FhirVersionEnum,
  };
}

/**
 * Software that is covered by this capability statement
 */
export interface CapabilityStatementSoftware {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A name the software is known by (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Version covered by this statement (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Date this version was released (0..1) */
  releaseDate?: string;
  /** Id and extensions of the primitive `releaseDate`. */
  _releaseDate?: Element;
}

/**
 * If this describes a specific instance
 */
export interface CapabilityStatementImplementation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Describes this specific instance (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Base URL for the installation (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Organization that manages the data (0..1) */
  custodian?: Reference;
}

/**
 * If the endpoint is a RESTful one
 */
export interface CapabilityStatementRest {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** client | server (1..1) */
  mode?: CapabilityStatementRest.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** General description of implementation (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
  /** Information about security of implementation (0..1) */
  security?: CapabilityStatementSecurity;
  /** Resource served on the REST interface (0..*) */
  resource?: Array<CapabilityStatementResource>;
  /** What operations are supported? (0..*) */
  interaction?: Array<CapabilityStatementInteraction1>;
  /** Search parameters for searching all resources (0..*) */
  searchParam?: Array<CapabilityStatementSearchParam>;
  /** Definition of a system level operation (0..*) */
  operation?: Array<CapabilityStatementOperation>;
  /** Compartments served/used by system (0..*) */
  compartment?: Array<string>;
  /** Id and extensions of the primitive `compartment`. */
  _compartment?: Array<Element | null>;
}

export namespace CapabilityStatementRest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/restful-capability-mode */
  export type ModeEnum = 'client' | 'server';
  export const ModeEnum = { Client: 'client' as ModeEnum, Server: 'server' as ModeEnum };
}

/**
 * Information about security of implementation
 */
export interface CapabilityStatementSecurity {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Adds CORS Headers (http://enable-cors.org/) (0..1) */
  cors?: boolean;
  /** Id and extensions of the primitive `cors`. */
  _cors?: Element;
  /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates (0..*) */
  service?: Array<CodeableConcept>;
  /** General description of how security works (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

/**
 * Resource served on the REST interface
 */
export interface CapabilityStatementResource {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A resource type that is supported (1..1) */
  type?: CapabilityStatementResource.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** System-wide profile (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;
  /** Use-case specific profiles (0..*) */
  supportedProfile?: Array<string>;
  /** Id and extensions of the primitive `supportedProfile`. */
  _supportedProfile?: Array<Element | null>;
  /** Additional information about the use of the resource type (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
  /** What operations are supported? (0..*) */
  interaction?: Array<CapabilityStatementInteraction>;
  /** no-version | versioned | versioned-update (0..1) */
  versioning?: CapabilityStatementResource.VersioningEnum;
  /** Id and extensions of the primitive `versioning`. */
  _versioning?: Element;
  /** Whether vRead can return past versions (0..1) */
  readHistory?: boolean;
  /** Id and extensions of the primitive `readHistory`. */
  _readHistory?: Element;
  /** If update can commit to a new identity (0..1) */
  updateCreate?: boolean;
  /** Id and extensions of the primitive `updateCreate`. */
  _updateCreate?: Element;
  /** If allows/uses conditional create (0..1) */
  conditionalCreate?: boolean;
  /** Id and extensions of the primitive `conditionalCreate`. */
  _conditionalCreate?: Element;
  /** not-supported | modified-since | not-match | full-support (0..1) */
  conditionalRead?: CapabilityStatementResource.ConditionalReadEnum;
  /** Id and extensions of the primitive `conditionalRead`. */
  _conditionalRead?: Element;
  /** If allows/uses conditional update (0..1) */
  conditionalUpdate?: boolean;
  /** Id and extensions of the primitive `conditionalUpdate`. */
  _conditionalUpdate?: Element;
  /** If allows/uses conditional patch (0..1) */
  conditionalPatch?: boolean;
  /** Id and extensions of the primitive `conditionalPatch`. */
  _conditionalPatch?: Element;
  /** not-supported | single | multiple - how conditional delete is supported (0..1) */
  conditionalDelete?: CapabilityStatementResource.ConditionalDeleteEnum;
  /** Id and extensions of the primitive `conditionalDelete`. */
  _conditionalDelete?: Element;
  /** literal | logical | resolves | enforced | local (0..*) */
  referencePolicy?: Array<CapabilityStatementResource.ReferencePolicyEnum>;
  /** Id and extensions of the primitive `referencePolicy`. */
  _referencePolicy?: Array<Element | null>;
  /** _include values supported by the server (0..*) */
  searchInclude?: Array<string>;
  /** Id and extensions of the primitive `searchInclude`. */
  _searchInclude?: Array<Element | null>;
  /** _revinclude values supported by the server (0..*) */
  searchRevInclude?: Array<string>;
  /** Id and extensions of the primitive `searchRevInclude`. */
  _searchRevInclude?: Array<Element | null>;
  /** Search parameters supported by implementation (0..*) */
  searchParam?: Array<CapabilityStatementSearchParam>;
  /** Definition of a resource operation (0..*) */
  operation?: Array<CapabilityStatementOperation>;
}

export namespace CapabilityStatementResource {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
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
    | 'VisionPrescription';
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
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/versioning-policy */
  export type VersioningEnum = 'no-version' | 'versioned' | 'versioned-update';
  export const VersioningEnum = {
    NoVersion: 'no-version' as VersioningEnum,
    Versioned: 'versioned' as VersioningEnum,
    VersionedUpdate: 'versioned-update' as VersioningEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/conditional-read-status */
  export type ConditionalReadEnum =
    'not-supported' | 'modified-since' | 'not-match' | 'full-support';
  export const ConditionalReadEnum = {
    NotSupported: 'not-supported' as ConditionalReadEnum,
    ModifiedSince: 'modified-since' as ConditionalReadEnum,
    NotMatch: 'not-match' as ConditionalReadEnum,
    FullSupport: 'full-support' as ConditionalReadEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/conditional-delete-status */
  export type ConditionalDeleteEnum = 'not-supported' | 'single' | 'multiple';
  export const ConditionalDeleteEnum = {
    NotSupported: 'not-supported' as ConditionalDeleteEnum,
    Single: 'single' as ConditionalDeleteEnum,
    Multiple: 'multiple' as ConditionalDeleteEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/reference-handling-policy */
  export type ReferencePolicyEnum = 'literal' | 'logical' | 'resolves' | 'enforced' | 'local';
  export const ReferencePolicyEnum = {
    Literal: 'literal' as ReferencePolicyEnum,
    Logical: 'logical' as ReferencePolicyEnum,
    Resolves: 'resolves' as ReferencePolicyEnum,
    Enforced: 'enforced' as ReferencePolicyEnum,
    Local: 'local' as ReferencePolicyEnum,
  };
}

/**
 * What operations are supported?
 */
export interface CapabilityStatementInteraction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** read | vread | update | patch | delete | history-instance | history-type | create | search-type (1..1) */
  code?: CapabilityStatementInteraction.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Anything special about operation behavior (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

export namespace CapabilityStatementInteraction {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/type-restful-interaction */
  export type CodeEnum =
    | 'read'
    | 'vread'
    | 'update'
    | 'patch'
    | 'delete'
    | 'history-instance'
    | 'history-type'
    | 'create'
    | 'search-type';
  export const CodeEnum = {
    Read: 'read' as CodeEnum,
    Vread: 'vread' as CodeEnum,
    Update: 'update' as CodeEnum,
    Patch: 'patch' as CodeEnum,
    Delete: 'delete' as CodeEnum,
    HistoryInstance: 'history-instance' as CodeEnum,
    HistoryType: 'history-type' as CodeEnum,
    Create: 'create' as CodeEnum,
    SearchType: 'search-type' as CodeEnum,
  };
}

/**
 * Search parameters supported by implementation
 */
export interface CapabilityStatementSearchParam {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name for parameter in search url (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Source of definition for parameter (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
  /** number | date | string | token | reference | composite | quantity | uri | special (1..1) */
  type?: CapabilityStatementSearchParam.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Server-specific usage (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

export namespace CapabilityStatementSearchParam {
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
}

/**
 * Definition of a resource operation
 */
export interface CapabilityStatementOperation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name by which the operation/query is invoked (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** The defined operation/query (1..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
  /** Specific details about operation behavior (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

/**
 * What operations are supported?
 */
export interface CapabilityStatementInteraction1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** transaction | batch | search-system | history-system (1..1) */
  code?: CapabilityStatementInteraction1.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Anything special about operation behavior (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

export namespace CapabilityStatementInteraction1 {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/system-restful-interaction */
  export type CodeEnum = 'transaction' | 'batch' | 'search-system' | 'history-system';
  export const CodeEnum = {
    Transaction: 'transaction' as CodeEnum,
    Batch: 'batch' as CodeEnum,
    SearchSystem: 'search-system' as CodeEnum,
    HistorySystem: 'history-system' as CodeEnum,
  };
}

/**
 * If messaging is supported
 */
export interface CapabilityStatementMessaging {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Where messages should be sent (0..*) */
  endpoint?: Array<CapabilityStatementEndpoint>;
  /** Reliable Message Cache Length (min) (0..1) */
  reliableCache?: number;
  /** Id and extensions of the primitive `reliableCache`. */
  _reliableCache?: Element;
  /** Messaging interface behavior details (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
  /** Messages supported by this system (0..*) */
  supportedMessage?: Array<CapabilityStatementSupportedMessage>;
}

/**
 * Where messages should be sent
 */
export interface CapabilityStatementEndpoint {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** http | ftp | mllp + (1..1) */
  protocol: Coding;
  /** Network address or identifier of the end-point (1..1) */
  address?: string;
  /** Id and extensions of the primitive `address`. */
  _address?: Element;
}

/**
 * Messages supported by this system
 */
export interface CapabilityStatementSupportedMessage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** sender | receiver (1..1) */
  mode?: CapabilityStatementSupportedMessage.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Message supported by this system (1..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
}

export namespace CapabilityStatementSupportedMessage {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-capability-mode */
  export type ModeEnum = 'sender' | 'receiver';
  export const ModeEnum = { Sender: 'sender' as ModeEnum, Receiver: 'receiver' as ModeEnum };
}

/**
 * Document definition
 */
export interface CapabilityStatementDocument {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** producer | consumer (1..1) */
  mode?: CapabilityStatementDocument.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Description of document support (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
  /** Constraint on the resources used in the document (1..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;
}

export namespace CapabilityStatementDocument {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/document-mode */
  export type ModeEnum = 'producer' | 'consumer';
  export const ModeEnum = { Producer: 'producer' as ModeEnum, Consumer: 'consumer' as ModeEnum };
}
