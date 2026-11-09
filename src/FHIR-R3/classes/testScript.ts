/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for TestScript Resource
 */
export class TestScript {
  resourceType: 'TestScript';
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
  /** Logical URI to reference this test script (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the test script (0..1) */
  identifier?: Identifier;
  /** Business version of the test script (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this test script (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this test script (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: TestScript.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
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
  /** Natural language description of the test script (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for test script (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this test script is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** An abstract server representing a client or sender in a message exchange (0..*) */
  origin?: Array<TestScriptOrigin>;
  /** An abstract server representing a destination or receiver in a message exchange (0..*) */
  destination?: Array<TestScriptDestination>;
  /** Required capability that is assumed to function correctly on the FHIR server being tested (0..1) */
  metadata?: TestScriptMetadata;
  /** Fixture in the test script - by reference (uri) (0..*) */
  fixture?: Array<TestScriptFixture>;
  /** Reference of the validation profile (0..*) */
  profile?: Array<Reference>;
  /** Placeholder for evaluated elements (0..*) */
  variable?: Array<TestScriptVariable>;
  /** Assert rule used within the test script (0..*) */
  rule?: Array<TestScriptRule>;
  /** Assert ruleset used within the test script (0..*) */
  ruleset?: Array<TestScriptRuleset>;
  /** A series of required setup operations before tests are executed (0..1) */
  setup?: TestScriptSetup;
  /** A test in this script (0..*) */
  test?: Array<TestScriptTest>;
  /** A series of required clean up steps (0..1) */
  teardown?: TestScriptTeardown;
}

export namespace TestScript {
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
 * An abstract server representing a client or sender in a message exchange
 */
export class TestScriptOrigin {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The index of the abstract origin server starting at 1 (1..1) */
  index?: number;
  /** Id and extensions of the primitive `index`. */
  _index?: Element;
  /** FHIR-Client | FHIR-SDC-FormFiller (1..1) */
  profile: Coding;
}

/**
 * An abstract server representing a destination or receiver in a message exchange
 */
export class TestScriptDestination {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The index of the abstract destination server starting at 1 (1..1) */
  index?: number;
  /** Id and extensions of the primitive `index`. */
  _index?: Element;
  /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor (1..1) */
  profile: Coding;
}

/**
 * Required capability that is assumed to function correctly on the FHIR server being tested
 */
export class TestScriptMetadata {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Links to the FHIR specification (0..*) */
  link?: Array<TestScriptLink>;
  /** Capabilities that are assumed to function correctly on the FHIR server being tested (1..*) */
  capability: Array<TestScriptCapability>;
}

/**
 * Links to the FHIR specification
 */
export class TestScriptLink {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** URL to the specification (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Short description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

/**
 * Capabilities that are assumed to function correctly on the FHIR server being tested
 */
export class TestScriptCapability {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Are the capabilities required? (0..1) */
  required?: boolean;
  /** Id and extensions of the primitive `required`. */
  _required?: Element;
  /** Are the capabilities validated? (0..1) */
  validated?: boolean;
  /** Id and extensions of the primitive `validated`. */
  _validated?: Element;
  /** The expected capabilities of the server (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Which origin server these requirements apply to (0..*) */
  origin?: Array<number>;
  /** Id and extensions of the primitive `origin`. */
  _origin?: Array<Element | null>;
  /** Which server these requirements apply to (0..1) */
  destination?: number;
  /** Id and extensions of the primitive `destination`. */
  _destination?: Element;
  /** Links to the FHIR specification (0..*) */
  link?: Array<string>;
  /** Id and extensions of the primitive `link`. */
  _link?: Array<Element | null>;
  /** Required Capability Statement (1..1) */
  capabilities: Reference;
}

/**
 * Fixture in the test script - by reference (uri)
 */
export class TestScriptFixture {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether or not to implicitly create the fixture during setup (0..1) */
  autocreate?: boolean;
  /** Id and extensions of the primitive `autocreate`. */
  _autocreate?: Element;
  /** Whether or not to implicitly delete the fixture during teardown (0..1) */
  autodelete?: boolean;
  /** Id and extensions of the primitive `autodelete`. */
  _autodelete?: Element;
  /** Reference of the resource (0..1) */
  resource?: Reference;
}

/**
 * Placeholder for evaluated elements
 */
export class TestScriptVariable {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Descriptive name for this variable (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Default, hard-coded, or user-defined value for this variable (0..1) */
  defaultValue?: string;
  /** Id and extensions of the primitive `defaultValue`. */
  _defaultValue?: Element;
  /** Natural language description of the variable (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The fluentpath expression against the fixture body (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
  /** HTTP header field name for source (0..1) */
  headerField?: string;
  /** Id and extensions of the primitive `headerField`. */
  _headerField?: Element;
  /** Hint help text for default value to enter (0..1) */
  hint?: string;
  /** Id and extensions of the primitive `hint`. */
  _hint?: Element;
  /** XPath or JSONPath against the fixture body (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** Fixture Id of source expression or headerField within this variable (0..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;
}

/**
 * Assert rule used within the test script
 */
export class TestScriptRule {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Assert rule resource reference (1..1) */
  resource: Reference;
  /** Rule parameter template (0..*) */
  param?: Array<TestScriptParam>;
}

/**
 * Rule parameter template
 */
export class TestScriptParam {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Parameter name matching external assert rule parameter (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Parameter value defined either explicitly or dynamically (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Assert ruleset used within the test script
 */
export class TestScriptRuleset {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Assert ruleset resource reference (1..1) */
  resource: Reference;
  /** The referenced rule within the ruleset (1..*) */
  rule: Array<TestScriptRule1>;
}

/**
 * The referenced rule within the ruleset
 */
export class TestScriptRule1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Id of referenced rule within the ruleset (1..1) */
  ruleId?: string;
  /** Id and extensions of the primitive `ruleId`. */
  _ruleId?: Element;
  /** Ruleset rule parameter template (0..*) */
  param?: Array<TestScriptParam1>;
}

/**
 * Ruleset rule parameter template
 */
export class TestScriptParam1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Parameter name matching external assert ruleset rule parameter (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Parameter value defined either explicitly or dynamically (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * A series of required setup operations before tests are executed
 */
export class TestScriptSetup {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** A setup operation or assert to perform (1..*) */
  action: Array<TestScriptAction>;
}

/**
 * A setup operation or assert to perform
 */
export class TestScriptAction {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The setup operation to perform (0..1) */
  operation?: TestScriptOperation;
  /** The assertion to perform (0..1) */
  assert?: TestScriptAssert;
}

/**
 * The setup operation to perform
 */
export class TestScriptOperation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The operation code type that will be executed (0..1) */
  type?: Coding;
  /** Resource type (0..1) */
  resource?: TestScriptOperation.ResourceEnum;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;
  /** Tracking/logging operation label (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;
  /** Tracking/reporting operation description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** xml | json | ttl | none (0..1) */
  accept?: TestScriptOperation.AcceptEnum;
  /** Id and extensions of the primitive `accept`. */
  _accept?: Element;
  /** xml | json | ttl | none (0..1) */
  contentType?: TestScriptOperation.ContentTypeEnum;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;
  /** Server responding to the request (0..1) */
  destination?: number;
  /** Id and extensions of the primitive `destination`. */
  _destination?: Element;
  /** Whether or not to send the request url in encoded format (0..1) */
  encodeRequestUrl?: boolean;
  /** Id and extensions of the primitive `encodeRequestUrl`. */
  _encodeRequestUrl?: Element;
  /** Server initiating the request (0..1) */
  origin?: number;
  /** Id and extensions of the primitive `origin`. */
  _origin?: Element;
  /** Explicitly defined path parameters (0..1) */
  params?: string;
  /** Id and extensions of the primitive `params`. */
  _params?: Element;
  /** Each operation can have one or more header elements (0..*) */
  requestHeader?: Array<TestScriptRequestHeader>;
  /** Fixture Id of mapped request (0..1) */
  requestId?: string;
  /** Id and extensions of the primitive `requestId`. */
  _requestId?: Element;
  /** Fixture Id of mapped response (0..1) */
  responseId?: string;
  /** Id and extensions of the primitive `responseId`. */
  _responseId?: Element;
  /** Fixture Id of body for PUT and POST requests (0..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;
  /** Id of fixture used for extracting the [id], [type], and [vid] for GET requests (0..1) */
  targetId?: string;
  /** Id and extensions of the primitive `targetId`. */
  _targetId?: Element;
  /** Request URL (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

export namespace TestScriptOperation {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/defined-types */
  export type ResourceEnum =
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
    | 'VisionPrescription';
  export const ResourceEnum = {
    Address: 'Address' as ResourceEnum,
    Age: 'Age' as ResourceEnum,
    Annotation: 'Annotation' as ResourceEnum,
    Attachment: 'Attachment' as ResourceEnum,
    BackboneElement: 'BackboneElement' as ResourceEnum,
    CodeableConcept: 'CodeableConcept' as ResourceEnum,
    Coding: 'Coding' as ResourceEnum,
    ContactDetail: 'ContactDetail' as ResourceEnum,
    ContactPoint: 'ContactPoint' as ResourceEnum,
    Contributor: 'Contributor' as ResourceEnum,
    Count: 'Count' as ResourceEnum,
    DataRequirement: 'DataRequirement' as ResourceEnum,
    Distance: 'Distance' as ResourceEnum,
    Dosage: 'Dosage' as ResourceEnum,
    Duration: 'Duration' as ResourceEnum,
    Element: 'Element' as ResourceEnum,
    ElementDefinition: 'ElementDefinition' as ResourceEnum,
    Extension: 'Extension' as ResourceEnum,
    HumanName: 'HumanName' as ResourceEnum,
    Identifier: 'Identifier' as ResourceEnum,
    Meta: 'Meta' as ResourceEnum,
    Money: 'Money' as ResourceEnum,
    Narrative: 'Narrative' as ResourceEnum,
    ParameterDefinition: 'ParameterDefinition' as ResourceEnum,
    Period: 'Period' as ResourceEnum,
    Quantity: 'Quantity' as ResourceEnum,
    Range: 'Range' as ResourceEnum,
    Ratio: 'Ratio' as ResourceEnum,
    Reference: 'Reference' as ResourceEnum,
    RelatedArtifact: 'RelatedArtifact' as ResourceEnum,
    SampledData: 'SampledData' as ResourceEnum,
    Signature: 'Signature' as ResourceEnum,
    SimpleQuantity: 'SimpleQuantity' as ResourceEnum,
    Timing: 'Timing' as ResourceEnum,
    TriggerDefinition: 'TriggerDefinition' as ResourceEnum,
    UsageContext: 'UsageContext' as ResourceEnum,
    Base64Binary: 'base64Binary' as ResourceEnum,
    Boolean: 'boolean' as ResourceEnum,
    Code: 'code' as ResourceEnum,
    Date: 'date' as ResourceEnum,
    DateTime: 'dateTime' as ResourceEnum,
    Decimal: 'decimal' as ResourceEnum,
    Id: 'id' as ResourceEnum,
    Instant: 'instant' as ResourceEnum,
    Integer: 'integer' as ResourceEnum,
    Markdown: 'markdown' as ResourceEnum,
    Oid: 'oid' as ResourceEnum,
    PositiveInt: 'positiveInt' as ResourceEnum,
    String: 'string' as ResourceEnum,
    Time: 'time' as ResourceEnum,
    UnsignedInt: 'unsignedInt' as ResourceEnum,
    Uri: 'uri' as ResourceEnum,
    Uuid: 'uuid' as ResourceEnum,
    Xhtml: 'xhtml' as ResourceEnum,
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/content-type */
  export type AcceptEnum = 'xml' | 'json' | 'ttl' | 'none';
  export const AcceptEnum = {
    Xml: 'xml' as AcceptEnum,
    Json: 'json' as AcceptEnum,
    Ttl: 'ttl' as AcceptEnum,
    None: 'none' as AcceptEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/content-type */
  export type ContentTypeEnum = 'xml' | 'json' | 'ttl' | 'none';
  export const ContentTypeEnum = {
    Xml: 'xml' as ContentTypeEnum,
    Json: 'json' as ContentTypeEnum,
    Ttl: 'ttl' as ContentTypeEnum,
    None: 'none' as ContentTypeEnum,
  };
}

/**
 * Each operation can have one or more header elements
 */
export class TestScriptRequestHeader {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** HTTP header field name (1..1) */
  field?: string;
  /** Id and extensions of the primitive `field`. */
  _field?: Element;
  /** HTTP headerfield value (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * The assertion to perform
 */
export class TestScriptAssert {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Tracking/logging assertion label (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;
  /** Tracking/reporting assertion description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** response | request (0..1) */
  direction?: TestScriptAssert.DirectionEnum;
  /** Id and extensions of the primitive `direction`. */
  _direction?: Element;
  /** Id of the source fixture to be evaluated (0..1) */
  compareToSourceId?: string;
  /** Id and extensions of the primitive `compareToSourceId`. */
  _compareToSourceId?: Element;
  /** The fluentpath expression to evaluate against the source fixture (0..1) */
  compareToSourceExpression?: string;
  /** Id and extensions of the primitive `compareToSourceExpression`. */
  _compareToSourceExpression?: Element;
  /** XPath or JSONPath expression to evaluate against the source fixture (0..1) */
  compareToSourcePath?: string;
  /** Id and extensions of the primitive `compareToSourcePath`. */
  _compareToSourcePath?: Element;
  /** xml | json | ttl | none (0..1) */
  contentType?: TestScriptAssert.ContentTypeEnum;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;
  /** The fluentpath expression to be evaluated (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
  /** HTTP header field name (0..1) */
  headerField?: string;
  /** Id and extensions of the primitive `headerField`. */
  _headerField?: Element;
  /** Fixture Id of minimum content resource (0..1) */
  minimumId?: string;
  /** Id and extensions of the primitive `minimumId`. */
  _minimumId?: Element;
  /** Perform validation on navigation links? (0..1) */
  navigationLinks?: boolean;
  /** Id and extensions of the primitive `navigationLinks`. */
  _navigationLinks?: Element;
  /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval (0..1) */
  operator?: TestScriptAssert.OperatorEnum;
  /** Id and extensions of the primitive `operator`. */
  _operator?: Element;
  /** XPath or JSONPath expression (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** delete | get | options | patch | post | put (0..1) */
  requestMethod?: TestScriptAssert.RequestMethodEnum;
  /** Id and extensions of the primitive `requestMethod`. */
  _requestMethod?: Element;
  /** Request URL comparison value (0..1) */
  requestURL?: string;
  /** Id and extensions of the primitive `requestURL`. */
  _requestURL?: Element;
  /** Resource type (0..1) */
  resource?: TestScriptAssert.ResourceEnum;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;
  /** okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable (0..1) */
  response?: TestScriptAssert.ResponseEnum;
  /** Id and extensions of the primitive `response`. */
  _response?: Element;
  /** HTTP response code to test (0..1) */
  responseCode?: string;
  /** Id and extensions of the primitive `responseCode`. */
  _responseCode?: Element;
  /** The reference to a TestScript.rule (0..1) */
  rule?: TestScriptRule2;
  /** The reference to a TestScript.ruleset (0..1) */
  ruleset?: TestScriptRuleset1;
  /** Fixture Id of source expression or headerField (0..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;
  /** Profile Id of validation profile reference (0..1) */
  validateProfileId?: string;
  /** Id and extensions of the primitive `validateProfileId`. */
  _validateProfileId?: Element;
  /** The value to compare to (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** Will this assert produce a warning only on error? (0..1) */
  warningOnly?: boolean;
  /** Id and extensions of the primitive `warningOnly`. */
  _warningOnly?: Element;
}

export namespace TestScriptAssert {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/assert-direction-codes */
  export type DirectionEnum = 'response' | 'request';
  export const DirectionEnum = {
    Response: 'response' as DirectionEnum,
    Request: 'request' as DirectionEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/content-type */
  export type ContentTypeEnum = 'xml' | 'json' | 'ttl' | 'none';
  export const ContentTypeEnum = {
    Xml: 'xml' as ContentTypeEnum,
    Json: 'json' as ContentTypeEnum,
    Ttl: 'ttl' as ContentTypeEnum,
    None: 'none' as ContentTypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/assert-operator-codes */
  export type OperatorEnum =
    | 'equals'
    | 'notEquals'
    | 'in'
    | 'notIn'
    | 'greaterThan'
    | 'lessThan'
    | 'empty'
    | 'notEmpty'
    | 'contains'
    | 'notContains'
    | 'eval';
  export const OperatorEnum = {
    Equals: 'equals' as OperatorEnum,
    NotEquals: 'notEquals' as OperatorEnum,
    In: 'in' as OperatorEnum,
    NotIn: 'notIn' as OperatorEnum,
    GreaterThan: 'greaterThan' as OperatorEnum,
    LessThan: 'lessThan' as OperatorEnum,
    Empty: 'empty' as OperatorEnum,
    NotEmpty: 'notEmpty' as OperatorEnum,
    Contains: 'contains' as OperatorEnum,
    NotContains: 'notContains' as OperatorEnum,
    Eval: 'eval' as OperatorEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/http-operations */
  export type RequestMethodEnum = 'delete' | 'get' | 'options' | 'patch' | 'post' | 'put';
  export const RequestMethodEnum = {
    Delete: 'delete' as RequestMethodEnum,
    Get: 'get' as RequestMethodEnum,
    Options: 'options' as RequestMethodEnum,
    Patch: 'patch' as RequestMethodEnum,
    Post: 'post' as RequestMethodEnum,
    Put: 'put' as RequestMethodEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/defined-types */
  export type ResourceEnum =
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
    | 'VisionPrescription';
  export const ResourceEnum = {
    Address: 'Address' as ResourceEnum,
    Age: 'Age' as ResourceEnum,
    Annotation: 'Annotation' as ResourceEnum,
    Attachment: 'Attachment' as ResourceEnum,
    BackboneElement: 'BackboneElement' as ResourceEnum,
    CodeableConcept: 'CodeableConcept' as ResourceEnum,
    Coding: 'Coding' as ResourceEnum,
    ContactDetail: 'ContactDetail' as ResourceEnum,
    ContactPoint: 'ContactPoint' as ResourceEnum,
    Contributor: 'Contributor' as ResourceEnum,
    Count: 'Count' as ResourceEnum,
    DataRequirement: 'DataRequirement' as ResourceEnum,
    Distance: 'Distance' as ResourceEnum,
    Dosage: 'Dosage' as ResourceEnum,
    Duration: 'Duration' as ResourceEnum,
    Element: 'Element' as ResourceEnum,
    ElementDefinition: 'ElementDefinition' as ResourceEnum,
    Extension: 'Extension' as ResourceEnum,
    HumanName: 'HumanName' as ResourceEnum,
    Identifier: 'Identifier' as ResourceEnum,
    Meta: 'Meta' as ResourceEnum,
    Money: 'Money' as ResourceEnum,
    Narrative: 'Narrative' as ResourceEnum,
    ParameterDefinition: 'ParameterDefinition' as ResourceEnum,
    Period: 'Period' as ResourceEnum,
    Quantity: 'Quantity' as ResourceEnum,
    Range: 'Range' as ResourceEnum,
    Ratio: 'Ratio' as ResourceEnum,
    Reference: 'Reference' as ResourceEnum,
    RelatedArtifact: 'RelatedArtifact' as ResourceEnum,
    SampledData: 'SampledData' as ResourceEnum,
    Signature: 'Signature' as ResourceEnum,
    SimpleQuantity: 'SimpleQuantity' as ResourceEnum,
    Timing: 'Timing' as ResourceEnum,
    TriggerDefinition: 'TriggerDefinition' as ResourceEnum,
    UsageContext: 'UsageContext' as ResourceEnum,
    Base64Binary: 'base64Binary' as ResourceEnum,
    Boolean: 'boolean' as ResourceEnum,
    Code: 'code' as ResourceEnum,
    Date: 'date' as ResourceEnum,
    DateTime: 'dateTime' as ResourceEnum,
    Decimal: 'decimal' as ResourceEnum,
    Id: 'id' as ResourceEnum,
    Instant: 'instant' as ResourceEnum,
    Integer: 'integer' as ResourceEnum,
    Markdown: 'markdown' as ResourceEnum,
    Oid: 'oid' as ResourceEnum,
    PositiveInt: 'positiveInt' as ResourceEnum,
    String: 'string' as ResourceEnum,
    Time: 'time' as ResourceEnum,
    UnsignedInt: 'unsignedInt' as ResourceEnum,
    Uri: 'uri' as ResourceEnum,
    Uuid: 'uuid' as ResourceEnum,
    Xhtml: 'xhtml' as ResourceEnum,
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/assert-response-code-types */
  export type ResponseEnum =
    | 'okay'
    | 'created'
    | 'noContent'
    | 'notModified'
    | 'bad'
    | 'forbidden'
    | 'notFound'
    | 'methodNotAllowed'
    | 'conflict'
    | 'gone'
    | 'preconditionFailed'
    | 'unprocessable';
  export const ResponseEnum = {
    Okay: 'okay' as ResponseEnum,
    Created: 'created' as ResponseEnum,
    NoContent: 'noContent' as ResponseEnum,
    NotModified: 'notModified' as ResponseEnum,
    Bad: 'bad' as ResponseEnum,
    Forbidden: 'forbidden' as ResponseEnum,
    NotFound: 'notFound' as ResponseEnum,
    MethodNotAllowed: 'methodNotAllowed' as ResponseEnum,
    Conflict: 'conflict' as ResponseEnum,
    Gone: 'gone' as ResponseEnum,
    PreconditionFailed: 'preconditionFailed' as ResponseEnum,
    Unprocessable: 'unprocessable' as ResponseEnum,
  };
}

/**
 * The reference to a TestScript.rule
 */
export class TestScriptRule2 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Id of the TestScript.rule (1..1) */
  ruleId?: string;
  /** Id and extensions of the primitive `ruleId`. */
  _ruleId?: Element;
  /** Rule parameter template (0..*) */
  param?: Array<TestScriptParam2>;
}

/**
 * Rule parameter template
 */
export class TestScriptParam2 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Parameter name matching external assert rule parameter (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Parameter value defined either explicitly or dynamically (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * The reference to a TestScript.ruleset
 */
export class TestScriptRuleset1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Id of the TestScript.ruleset (1..1) */
  rulesetId?: string;
  /** Id and extensions of the primitive `rulesetId`. */
  _rulesetId?: Element;
  /** The referenced rule within the ruleset (0..*) */
  rule?: Array<TestScriptRule3>;
}

/**
 * The referenced rule within the ruleset
 */
export class TestScriptRule3 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Id of referenced rule within the ruleset (1..1) */
  ruleId?: string;
  /** Id and extensions of the primitive `ruleId`. */
  _ruleId?: Element;
  /** Rule parameter template (0..*) */
  param?: Array<TestScriptParam3>;
}

/**
 * Rule parameter template
 */
export class TestScriptParam3 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Parameter name matching external assert ruleset rule parameter (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Parameter value defined either explicitly or dynamically (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * A test in this script
 */
export class TestScriptTest {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Tracking/logging name of this test (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Tracking/reporting short description of the test (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** A test operation or assert to perform (1..*) */
  action: Array<TestScriptAction1>;
}

/**
 * A test operation or assert to perform
 */
export class TestScriptAction1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The setup operation to perform (0..1) */
  operation?: TestScriptOperation;
  /** The setup assertion to perform (0..1) */
  assert?: TestScriptAssert;
}

/**
 * A series of required clean up steps
 */
export class TestScriptTeardown {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** One or more teardown operations to perform (1..*) */
  action: Array<TestScriptAction2>;
}

/**
 * One or more teardown operations to perform
 */
export class TestScriptAction2 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The teardown operation to perform (1..1) */
  operation: TestScriptOperation;
}
