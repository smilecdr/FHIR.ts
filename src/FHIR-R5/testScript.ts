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
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export interface TestScript {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this test script, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the test script (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the test script (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
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
  /** Natural language description of the test script (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
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
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** An abstract server representing a client or sender in a message exchange (0..*) */
  origin?: Array<TestScriptOrigin>;
  /** An abstract server representing a destination or receiver in a message exchange (0..*) */
  destination?: Array<TestScriptDestination>;
  /** Required capability that is assumed to function correctly on the FHIR server being tested (0..1) */
  metadata?: TestScriptMetadata;
  /** Indication of the artifact(s) that are tested by this test case (0..*) */
  scope?: Array<TestScriptScope>;
  /** Fixture in the test script - by reference (uri) (0..*) */
  fixture?: Array<TestScriptFixture>;
  /** Reference of the validation profile (0..*) */
  profile?: Array<string>;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Array<Element | null>;
  /** Placeholder for evaluated elements (0..*) */
  variable?: Array<TestScriptVariable>;
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
export interface TestScriptOrigin {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The index of the abstract origin server starting at 1 (1..1) */
  index?: number;
  /** Id and extensions of the primitive `index`. */
  _index?: Element;
  /** FHIR-Client | FHIR-SDC-FormFiller (1..1) */
  profile: Coding;
  /** The url path of the origin server (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

/**
 * An abstract server representing a destination or receiver in a message exchange
 */
export interface TestScriptDestination {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The index of the abstract destination server starting at 1 (1..1) */
  index?: number;
  /** Id and extensions of the primitive `index`. */
  _index?: Element;
  /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor (1..1) */
  profile: Coding;
  /** The url path of the destination server (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

/**
 * Required capability that is assumed to function correctly on the FHIR server being tested
 */
export interface TestScriptMetadata {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Links to the FHIR specification (0..*) */
  link?: Array<TestScriptLink>;
  /** Capabilities that are assumed to function correctly on the FHIR server being tested (1..*) */
  capability: Array<TestScriptCapability>;
}

/**
 * Links to the FHIR specification
 */
export interface TestScriptLink {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
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
export interface TestScriptCapability {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Are the capabilities required? (1..1) */
  required?: boolean;
  /** Id and extensions of the primitive `required`. */
  _required?: Element;
  /** Are the capabilities validated? (1..1) */
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
  capabilities?: string;
  /** Id and extensions of the primitive `capabilities`. */
  _capabilities?: Element;
}

/**
 * Indication of the artifact(s) that are tested by this test case
 */
export interface TestScriptScope {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The specific conformance artifact being tested (1..1) */
  artifact?: string;
  /** Id and extensions of the primitive `artifact`. */
  _artifact?: Element;
  /** required | optional | strict (0..1) */
  conformance?: CodeableConcept;
  /** unit | integration | production (0..1) */
  phase?: CodeableConcept;
}

/**
 * Fixture in the test script - by reference (uri)
 */
export interface TestScriptFixture {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether or not to implicitly create the fixture during setup (1..1) */
  autocreate?: boolean;
  /** Id and extensions of the primitive `autocreate`. */
  _autocreate?: Element;
  /** Whether or not to implicitly delete the fixture during teardown (1..1) */
  autodelete?: boolean;
  /** Id and extensions of the primitive `autodelete`. */
  _autodelete?: Element;
  /** Reference of the resource (0..1) */
  resource?: Reference;
}

/**
 * Placeholder for evaluated elements
 */
export interface TestScriptVariable {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
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
  /** The FHIRPath expression against the fixture body (0..1) */
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
 * A series of required setup operations before tests are executed
 */
export interface TestScriptSetup {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A setup operation or assert to perform (1..*) */
  action: Array<TestScriptAction>;
}

/**
 * A setup operation or assert to perform
 */
export interface TestScriptAction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The setup operation to perform (0..1) */
  operation?: TestScriptOperation;
  /** The assertion to perform (0..1) */
  assert?: TestScriptAssert;
}

/**
 * The setup operation to perform
 */
export interface TestScriptOperation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The operation code type that will be executed (0..1) */
  type?: Coding;
  /** Resource type (0..1) */
  resource?: string;
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
  /** Mime type to accept in the payload of the response, with charset etc (0..1) */
  accept?: string;
  /** Id and extensions of the primitive `accept`. */
  _accept?: Element;
  /** Mime type of the request payload contents, with charset etc (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;
  /** Server responding to the request (0..1) */
  destination?: number;
  /** Id and extensions of the primitive `destination`. */
  _destination?: Element;
  /** Whether or not to send the request url in encoded format (1..1) */
  encodeRequestUrl?: boolean;
  /** Id and extensions of the primitive `encodeRequestUrl`. */
  _encodeRequestUrl?: Element;
  /** delete | get | options | patch | post | put | head (0..1) */
  method?: TestScriptOperation.MethodEnum;
  /** Id and extensions of the primitive `method`. */
  _method?: Element;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/http-operations */
  export type MethodEnum = 'delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head';
  export const MethodEnum = {
    Delete: 'delete' as MethodEnum,
    Get: 'get' as MethodEnum,
    Options: 'options' as MethodEnum,
    Patch: 'patch' as MethodEnum,
    Post: 'post' as MethodEnum,
    Put: 'put' as MethodEnum,
    Head: 'head' as MethodEnum,
  };
}

/**
 * Each operation can have one or more header elements
 */
export interface TestScriptRequestHeader {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
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
export interface TestScriptAssert {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
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
  /** The FHIRPath expression to evaluate against the source fixture (0..1) */
  compareToSourceExpression?: string;
  /** Id and extensions of the primitive `compareToSourceExpression`. */
  _compareToSourceExpression?: Element;
  /** XPath or JSONPath expression to evaluate against the source fixture (0..1) */
  compareToSourcePath?: string;
  /** Id and extensions of the primitive `compareToSourcePath`. */
  _compareToSourcePath?: Element;
  /** Mime type to compare against the 'Content-Type' header (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;
  /** fail | pass | skip | stop (0..1) */
  defaultManualCompletion?: TestScriptAssert.DefaultManualCompletionEnum;
  /** Id and extensions of the primitive `defaultManualCompletion`. */
  _defaultManualCompletion?: Element;
  /** The FHIRPath expression to be evaluated (0..1) */
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
  /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval | manualEval (0..1) */
  operator?: TestScriptAssert.OperatorEnum;
  /** Id and extensions of the primitive `operator`. */
  _operator?: Element;
  /** XPath or JSONPath expression (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
  /** delete | get | options | patch | post | put | head (0..1) */
  requestMethod?: TestScriptAssert.RequestMethodEnum;
  /** Id and extensions of the primitive `requestMethod`. */
  _requestMethod?: Element;
  /** Request URL comparison value (0..1) */
  requestURL?: string;
  /** Id and extensions of the primitive `requestURL`. */
  _requestURL?: Element;
  /** Resource type (0..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;
  /** continue | switchingProtocols | okay | created | accepted | nonAuthoritativeInformation | noContent | resetContent | partialContent | multipleChoices | movedPermanently | found | seeOther | notModified | useProxy | temporaryRedirect | permanentRedirect | badRequest | unauthorized | paymentRequired | forbidden | notFound | methodNotAllowed | notAcceptable | proxyAuthenticationRequired | requestTimeout | conflict | gone | lengthRequired | preconditionFailed | contentTooLarge | uriTooLong | unsupportedMediaType | rangeNotSatisfiable | expectationFailed | misdirectedRequest | unprocessableContent | upgradeRequired | internalServerError | notImplemented | badGateway | serviceUnavailable | gatewayTimeout | httpVersionNotSupported (0..1) */
  response?: TestScriptAssert.ResponseEnum;
  /** Id and extensions of the primitive `response`. */
  _response?: Element;
  /** HTTP response code to test (0..1) */
  responseCode?: string;
  /** Id and extensions of the primitive `responseCode`. */
  _responseCode?: Element;
  /** Fixture Id of source expression or headerField (0..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;
  /** If this assert fails, will the current test execution stop? (1..1) */
  stopTestOnFail?: boolean;
  /** Id and extensions of the primitive `stopTestOnFail`. */
  _stopTestOnFail?: Element;
  /** Profile Id of validation profile reference (0..1) */
  validateProfileId?: string;
  /** Id and extensions of the primitive `validateProfileId`. */
  _validateProfileId?: Element;
  /** The value to compare to (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** Will this assert produce a warning only on error? (1..1) */
  warningOnly?: boolean;
  /** Id and extensions of the primitive `warningOnly`. */
  _warningOnly?: Element;
  /** Links or references to the testing requirements (0..*) */
  requirement?: Array<TestScriptRequirement>;
}

export namespace TestScriptAssert {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/assert-direction-codes */
  export type DirectionEnum = 'response' | 'request';
  export const DirectionEnum = {
    Response: 'response' as DirectionEnum,
    Request: 'request' as DirectionEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/assert-manual-completion-codes */
  export type DefaultManualCompletionEnum = 'fail' | 'pass' | 'skip' | 'stop';
  export const DefaultManualCompletionEnum = {
    Fail: 'fail' as DefaultManualCompletionEnum,
    Pass: 'pass' as DefaultManualCompletionEnum,
    Skip: 'skip' as DefaultManualCompletionEnum,
    Stop: 'stop' as DefaultManualCompletionEnum,
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
    | 'eval'
    | 'manualEval';
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
    ManualEval: 'manualEval' as OperatorEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/http-operations */
  export type RequestMethodEnum = 'delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head';
  export const RequestMethodEnum = {
    Delete: 'delete' as RequestMethodEnum,
    Get: 'get' as RequestMethodEnum,
    Options: 'options' as RequestMethodEnum,
    Patch: 'patch' as RequestMethodEnum,
    Post: 'post' as RequestMethodEnum,
    Put: 'put' as RequestMethodEnum,
    Head: 'head' as RequestMethodEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/assert-response-code-types */
  export type ResponseEnum =
    | 'continue'
    | 'switchingProtocols'
    | 'okay'
    | 'created'
    | 'accepted'
    | 'nonAuthoritativeInformation'
    | 'noContent'
    | 'resetContent'
    | 'partialContent'
    | 'multipleChoices'
    | 'movedPermanently'
    | 'found'
    | 'seeOther'
    | 'notModified'
    | 'useProxy'
    | 'temporaryRedirect'
    | 'permanentRedirect'
    | 'badRequest'
    | 'unauthorized'
    | 'paymentRequired'
    | 'forbidden'
    | 'notFound'
    | 'methodNotAllowed'
    | 'notAcceptable'
    | 'proxyAuthenticationRequired'
    | 'requestTimeout'
    | 'conflict'
    | 'gone'
    | 'lengthRequired'
    | 'preconditionFailed'
    | 'contentTooLarge'
    | 'uriTooLong'
    | 'unsupportedMediaType'
    | 'rangeNotSatisfiable'
    | 'expectationFailed'
    | 'misdirectedRequest'
    | 'unprocessableContent'
    | 'upgradeRequired'
    | 'internalServerError'
    | 'notImplemented'
    | 'badGateway'
    | 'serviceUnavailable'
    | 'gatewayTimeout'
    | 'httpVersionNotSupported';
  export const ResponseEnum = {
    Continue: 'continue' as ResponseEnum,
    SwitchingProtocols: 'switchingProtocols' as ResponseEnum,
    Okay: 'okay' as ResponseEnum,
    Created: 'created' as ResponseEnum,
    Accepted: 'accepted' as ResponseEnum,
    NonAuthoritativeInformation: 'nonAuthoritativeInformation' as ResponseEnum,
    NoContent: 'noContent' as ResponseEnum,
    ResetContent: 'resetContent' as ResponseEnum,
    PartialContent: 'partialContent' as ResponseEnum,
    MultipleChoices: 'multipleChoices' as ResponseEnum,
    MovedPermanently: 'movedPermanently' as ResponseEnum,
    Found: 'found' as ResponseEnum,
    SeeOther: 'seeOther' as ResponseEnum,
    NotModified: 'notModified' as ResponseEnum,
    UseProxy: 'useProxy' as ResponseEnum,
    TemporaryRedirect: 'temporaryRedirect' as ResponseEnum,
    PermanentRedirect: 'permanentRedirect' as ResponseEnum,
    BadRequest: 'badRequest' as ResponseEnum,
    Unauthorized: 'unauthorized' as ResponseEnum,
    PaymentRequired: 'paymentRequired' as ResponseEnum,
    Forbidden: 'forbidden' as ResponseEnum,
    NotFound: 'notFound' as ResponseEnum,
    MethodNotAllowed: 'methodNotAllowed' as ResponseEnum,
    NotAcceptable: 'notAcceptable' as ResponseEnum,
    ProxyAuthenticationRequired: 'proxyAuthenticationRequired' as ResponseEnum,
    RequestTimeout: 'requestTimeout' as ResponseEnum,
    Conflict: 'conflict' as ResponseEnum,
    Gone: 'gone' as ResponseEnum,
    LengthRequired: 'lengthRequired' as ResponseEnum,
    PreconditionFailed: 'preconditionFailed' as ResponseEnum,
    ContentTooLarge: 'contentTooLarge' as ResponseEnum,
    UriTooLong: 'uriTooLong' as ResponseEnum,
    UnsupportedMediaType: 'unsupportedMediaType' as ResponseEnum,
    RangeNotSatisfiable: 'rangeNotSatisfiable' as ResponseEnum,
    ExpectationFailed: 'expectationFailed' as ResponseEnum,
    MisdirectedRequest: 'misdirectedRequest' as ResponseEnum,
    UnprocessableContent: 'unprocessableContent' as ResponseEnum,
    UpgradeRequired: 'upgradeRequired' as ResponseEnum,
    InternalServerError: 'internalServerError' as ResponseEnum,
    NotImplemented: 'notImplemented' as ResponseEnum,
    BadGateway: 'badGateway' as ResponseEnum,
    ServiceUnavailable: 'serviceUnavailable' as ResponseEnum,
    GatewayTimeout: 'gatewayTimeout' as ResponseEnum,
    HttpVersionNotSupported: 'httpVersionNotSupported' as ResponseEnum,
  };
}

/**
 * Links or references to the testing requirements
 */
export interface TestScriptRequirement {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Link or reference to the testing requirement (0..1) */
  linkUri?: string;
  /** Id and extensions of the primitive `linkUri`. */
  _linkUri?: Element;
  /** Link or reference to the testing requirement (0..1) */
  linkCanonical?: string;
  /** Id and extensions of the primitive `linkCanonical`. */
  _linkCanonical?: Element;
}

/**
 * A test in this script
 */
export interface TestScriptTest {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
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
export interface TestScriptAction1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The setup operation to perform (0..1) */
  operation?: TestScriptOperation;
  /** The setup assertion to perform (0..1) */
  assert?: TestScriptAssert;
}

/**
 * A series of required clean up steps
 */
export interface TestScriptTeardown {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** One or more teardown operations to perform (1..*) */
  action: Array<TestScriptAction2>;
}

/**
 * One or more teardown operations to perform
 */
export interface TestScriptAction2 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The teardown operation to perform (1..1) */
  operation: TestScriptOperation;
}
