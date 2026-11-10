/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for CapabilityStatement Resource
 */
export class CapabilityStatement {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Logical URI to reference this capability statement (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business version of the capability statement (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
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
  /** Date this was last changed (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the capability statement (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Context the content is intended to support (0..*) */
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
  /** instance | capability | requirements (1..1) */
  kind?: CapabilityStatement.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Canonical URL of another capability statement this implements (0..*) */
  instantiates?: Array<string>;
  /** Id and extensions of the primitive `instantiates`. */
  _instantiates?: Array<Element | null>;
  /** Software that is covered by this capability statement (0..1) */
  software?: CapabilityStatementSoftware;
  /** If this describes a specific instance (0..1) */
  implementation?: CapabilityStatementImplementation;
  /** FHIR Version the system uses (1..1) */
  fhirVersion?: string;
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: Element;
  /** no | extensions | elements | both (1..1) */
  acceptUnknown?: CapabilityStatement.AcceptUnknownEnum;
  /** Id and extensions of the primitive `acceptUnknown`. */
  _acceptUnknown?: Element;
  /** formats supported (xml | json | ttl | mime type) (1..*) */
  format?: Array<string>;
  /** Id and extensions of the primitive `format`. */
  _format?: Array<Element | null>;
  /** Patch formats supported (0..*) */
  patchFormat?: Array<string>;
  /** Id and extensions of the primitive `patchFormat`. */
  _patchFormat?: Array<Element | null>;
  /** Implementation guides supported (0..*) */
  implementationGuide?: Array<string>;
  /** Id and extensions of the primitive `implementationGuide`. */
  _implementationGuide?: Array<Element | null>;
  /** Profiles for use cases supported (0..*) */
  profile?: Array<Reference>;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/unknown-content-code */
  export type AcceptUnknownEnum = 'no' | 'extensions' | 'elements' | 'both';
  export const AcceptUnknownEnum = {
    No: 'no' as AcceptUnknownEnum,
    Extensions: 'extensions' as AcceptUnknownEnum,
    Elements: 'elements' as AcceptUnknownEnum,
    Both: 'both' as AcceptUnknownEnum,
  };
}

/**
 * Software that is covered by this capability statement
 */
export class CapabilityStatementSoftware {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** A name the software is known by (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Version covered by this statement (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Date this version released (0..1) */
  releaseDate?: string;
  /** Id and extensions of the primitive `releaseDate`. */
  _releaseDate?: Element;
}

/**
 * If this describes a specific instance
 */
export class CapabilityStatementImplementation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Describes this specific instance (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Base URL for the installation (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

/**
 * If the endpoint is a RESTful one
 */
export class CapabilityStatementRest {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  /** Definition of an operation or a custom query (0..*) */
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
export class CapabilityStatementSecurity {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  /** Certificates associated with security profiles (0..*) */
  certificate?: Array<CapabilityStatementCertificate>;
}

/**
 * Certificates associated with security profiles
 */
export class CapabilityStatementCertificate {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Mime type for certificates (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Actual certificate (0..1) */
  blob?: string;
  /** Id and extensions of the primitive `blob`. */
  _blob?: Element;
}

/**
 * Resource served on the REST interface
 */
export class CapabilityStatementResource {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** A resource type that is supported (1..1) */
  type?: CapabilityStatementResource.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Base System profile for all uses of resource (0..1) */
  profile?: Reference;
  /** Additional information about the use of the resource type (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
  /** What operations are supported? (1..*) */
  interaction: Array<CapabilityStatementInteraction>;
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
}

export namespace CapabilityStatementResource {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type TypeEnum =
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
  export const TypeEnum = {
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
export class CapabilityStatementInteraction {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
export class CapabilityStatementSearchParam {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of search parameter (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Source of definition for parameter (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
  /** number | date | string | token | reference | composite | quantity | uri (1..1) */
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
}

/**
 * What operations are supported?
 */
export class CapabilityStatementInteraction1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
 * Definition of an operation or a custom query
 */
export class CapabilityStatementOperation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name by which the operation/query is invoked (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** The defined operation/query (1..1) */
  definition: Reference;
}

/**
 * If messaging is supported
 */
export class CapabilityStatementMessaging {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  /** Declare support for this event (0..*) */
  event?: Array<CapabilityStatementEvent>;
}

/**
 * Where messages should be sent
 */
export class CapabilityStatementEndpoint {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
export class CapabilityStatementSupportedMessage {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** sender | receiver (1..1) */
  mode?: CapabilityStatementSupportedMessage.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Message supported by this system (1..1) */
  definition: Reference;
}

export namespace CapabilityStatementSupportedMessage {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-capability-mode */
  export type ModeEnum = 'sender' | 'receiver';
  export const ModeEnum = { Sender: 'sender' as ModeEnum, Receiver: 'receiver' as ModeEnum };
}

/**
 * Declare support for this event
 */
export class CapabilityStatementEvent {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Event type (1..1) */
  code: Coding;
  /** Consequence | Currency | Notification (0..1) */
  category?: CapabilityStatementEvent.CategoryEnum;
  /** Id and extensions of the primitive `category`. */
  _category?: Element;
  /** sender | receiver (1..1) */
  mode?: CapabilityStatementEvent.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Resource that's focus of message (1..1) */
  focus?: CapabilityStatementEvent.FocusEnum;
  /** Id and extensions of the primitive `focus`. */
  _focus?: Element;
  /** Profile that describes the request (1..1) */
  request: Reference;
  /** Profile that describes the response (1..1) */
  response: Reference;
  /** Endpoint-specific event documentation (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

export namespace CapabilityStatementEvent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/message-significance-category */
  export type CategoryEnum = 'Consequence' | 'Currency' | 'Notification';
  export const CategoryEnum = {
    Consequence: 'Consequence' as CategoryEnum,
    Currency: 'Currency' as CategoryEnum,
    Notification: 'Notification' as CategoryEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-capability-mode */
  export type ModeEnum = 'sender' | 'receiver';
  export const ModeEnum = { Sender: 'sender' as ModeEnum, Receiver: 'receiver' as ModeEnum };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/resource-types */
  export type FocusEnum =
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
  export const FocusEnum = {
    Account: 'Account' as FocusEnum,
    ActivityDefinition: 'ActivityDefinition' as FocusEnum,
    AdverseEvent: 'AdverseEvent' as FocusEnum,
    AllergyIntolerance: 'AllergyIntolerance' as FocusEnum,
    Appointment: 'Appointment' as FocusEnum,
    AppointmentResponse: 'AppointmentResponse' as FocusEnum,
    AuditEvent: 'AuditEvent' as FocusEnum,
    Basic: 'Basic' as FocusEnum,
    Binary: 'Binary' as FocusEnum,
    BodySite: 'BodySite' as FocusEnum,
    Bundle: 'Bundle' as FocusEnum,
    CapabilityStatement: 'CapabilityStatement' as FocusEnum,
    CarePlan: 'CarePlan' as FocusEnum,
    CareTeam: 'CareTeam' as FocusEnum,
    ChargeItem: 'ChargeItem' as FocusEnum,
    Claim: 'Claim' as FocusEnum,
    ClaimResponse: 'ClaimResponse' as FocusEnum,
    ClinicalImpression: 'ClinicalImpression' as FocusEnum,
    CodeSystem: 'CodeSystem' as FocusEnum,
    Communication: 'Communication' as FocusEnum,
    CommunicationRequest: 'CommunicationRequest' as FocusEnum,
    CompartmentDefinition: 'CompartmentDefinition' as FocusEnum,
    Composition: 'Composition' as FocusEnum,
    ConceptMap: 'ConceptMap' as FocusEnum,
    Condition: 'Condition' as FocusEnum,
    Consent: 'Consent' as FocusEnum,
    Contract: 'Contract' as FocusEnum,
    Coverage: 'Coverage' as FocusEnum,
    DataElement: 'DataElement' as FocusEnum,
    DetectedIssue: 'DetectedIssue' as FocusEnum,
    Device: 'Device' as FocusEnum,
    DeviceComponent: 'DeviceComponent' as FocusEnum,
    DeviceMetric: 'DeviceMetric' as FocusEnum,
    DeviceRequest: 'DeviceRequest' as FocusEnum,
    DeviceUseStatement: 'DeviceUseStatement' as FocusEnum,
    DiagnosticReport: 'DiagnosticReport' as FocusEnum,
    DocumentManifest: 'DocumentManifest' as FocusEnum,
    DocumentReference: 'DocumentReference' as FocusEnum,
    DomainResource: 'DomainResource' as FocusEnum,
    EligibilityRequest: 'EligibilityRequest' as FocusEnum,
    EligibilityResponse: 'EligibilityResponse' as FocusEnum,
    Encounter: 'Encounter' as FocusEnum,
    Endpoint: 'Endpoint' as FocusEnum,
    EnrollmentRequest: 'EnrollmentRequest' as FocusEnum,
    EnrollmentResponse: 'EnrollmentResponse' as FocusEnum,
    EpisodeOfCare: 'EpisodeOfCare' as FocusEnum,
    ExpansionProfile: 'ExpansionProfile' as FocusEnum,
    ExplanationOfBenefit: 'ExplanationOfBenefit' as FocusEnum,
    FamilyMemberHistory: 'FamilyMemberHistory' as FocusEnum,
    Flag: 'Flag' as FocusEnum,
    Goal: 'Goal' as FocusEnum,
    GraphDefinition: 'GraphDefinition' as FocusEnum,
    Group: 'Group' as FocusEnum,
    GuidanceResponse: 'GuidanceResponse' as FocusEnum,
    HealthcareService: 'HealthcareService' as FocusEnum,
    ImagingManifest: 'ImagingManifest' as FocusEnum,
    ImagingStudy: 'ImagingStudy' as FocusEnum,
    Immunization: 'Immunization' as FocusEnum,
    ImmunizationRecommendation: 'ImmunizationRecommendation' as FocusEnum,
    ImplementationGuide: 'ImplementationGuide' as FocusEnum,
    Library: 'Library' as FocusEnum,
    Linkage: 'Linkage' as FocusEnum,
    List: 'List' as FocusEnum,
    Location: 'Location' as FocusEnum,
    Measure: 'Measure' as FocusEnum,
    MeasureReport: 'MeasureReport' as FocusEnum,
    Media: 'Media' as FocusEnum,
    Medication: 'Medication' as FocusEnum,
    MedicationAdministration: 'MedicationAdministration' as FocusEnum,
    MedicationDispense: 'MedicationDispense' as FocusEnum,
    MedicationRequest: 'MedicationRequest' as FocusEnum,
    MedicationStatement: 'MedicationStatement' as FocusEnum,
    MessageDefinition: 'MessageDefinition' as FocusEnum,
    MessageHeader: 'MessageHeader' as FocusEnum,
    NamingSystem: 'NamingSystem' as FocusEnum,
    NutritionOrder: 'NutritionOrder' as FocusEnum,
    Observation: 'Observation' as FocusEnum,
    OperationDefinition: 'OperationDefinition' as FocusEnum,
    OperationOutcome: 'OperationOutcome' as FocusEnum,
    Organization: 'Organization' as FocusEnum,
    Parameters: 'Parameters' as FocusEnum,
    Patient: 'Patient' as FocusEnum,
    PaymentNotice: 'PaymentNotice' as FocusEnum,
    PaymentReconciliation: 'PaymentReconciliation' as FocusEnum,
    Person: 'Person' as FocusEnum,
    PlanDefinition: 'PlanDefinition' as FocusEnum,
    Practitioner: 'Practitioner' as FocusEnum,
    PractitionerRole: 'PractitionerRole' as FocusEnum,
    Procedure: 'Procedure' as FocusEnum,
    ProcedureRequest: 'ProcedureRequest' as FocusEnum,
    ProcessRequest: 'ProcessRequest' as FocusEnum,
    ProcessResponse: 'ProcessResponse' as FocusEnum,
    Provenance: 'Provenance' as FocusEnum,
    Questionnaire: 'Questionnaire' as FocusEnum,
    QuestionnaireResponse: 'QuestionnaireResponse' as FocusEnum,
    ReferralRequest: 'ReferralRequest' as FocusEnum,
    RelatedPerson: 'RelatedPerson' as FocusEnum,
    RequestGroup: 'RequestGroup' as FocusEnum,
    ResearchStudy: 'ResearchStudy' as FocusEnum,
    ResearchSubject: 'ResearchSubject' as FocusEnum,
    Resource: 'Resource' as FocusEnum,
    RiskAssessment: 'RiskAssessment' as FocusEnum,
    Schedule: 'Schedule' as FocusEnum,
    SearchParameter: 'SearchParameter' as FocusEnum,
    Sequence: 'Sequence' as FocusEnum,
    ServiceDefinition: 'ServiceDefinition' as FocusEnum,
    Slot: 'Slot' as FocusEnum,
    Specimen: 'Specimen' as FocusEnum,
    StructureDefinition: 'StructureDefinition' as FocusEnum,
    StructureMap: 'StructureMap' as FocusEnum,
    Subscription: 'Subscription' as FocusEnum,
    Substance: 'Substance' as FocusEnum,
    SupplyDelivery: 'SupplyDelivery' as FocusEnum,
    SupplyRequest: 'SupplyRequest' as FocusEnum,
    Task: 'Task' as FocusEnum,
    TestReport: 'TestReport' as FocusEnum,
    TestScript: 'TestScript' as FocusEnum,
    ValueSet: 'ValueSet' as FocusEnum,
    VisionPrescription: 'VisionPrescription' as FocusEnum,
  };
}

/**
 * Document definition
 */
export class CapabilityStatementDocument {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** producer | consumer (1..1) */
  mode?: CapabilityStatementDocument.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Description of document support (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
  /** Constraint on a resource used in the document (1..1) */
  profile: Reference;
}

export namespace CapabilityStatementDocument {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/document-mode */
  export type ModeEnum = 'producer' | 'consumer';
  export const ModeEnum = { Producer: 'producer' as ModeEnum, Consumer: 'consumer' as ModeEnum };
}
