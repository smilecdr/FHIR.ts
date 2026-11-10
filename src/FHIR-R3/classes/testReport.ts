/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for TestReport Resource
 */
export class TestReport {
  resourceType: 'TestReport';
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
  /** External identifier (0..1) */
  identifier?: Identifier;
  /** Informal name of the executed TestScript (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** completed | in-progress | waiting | stopped | entered-in-error (1..1) */
  status?: TestReport.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reference to the version-specific TestScript that was executed to produce this TestReport (1..1) */
  testScript: Reference;
  /** pass | fail | pending (1..1) */
  result?: TestReport.ResultEnum;
  /** Id and extensions of the primitive `result`. */
  _result?: Element;
  /** The final score (percentage of tests passed) resulting from the execution of the TestScript (0..1) */
  score?: number;
  /** Id and extensions of the primitive `score`. */
  _score?: Element;
  /** Name of the tester producing this report (Organization or individual) (0..1) */
  tester?: string;
  /** Id and extensions of the primitive `tester`. */
  _tester?: Element;
  /** When the TestScript was executed and this TestReport was generated (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;
  /** A participant in the test execution, either the execution engine, a client, or a server (0..*) */
  participant?: Array<TestReportParticipant>;
  /** The results of the series of required setup operations before the tests were executed (0..1) */
  setup?: TestReportSetup;
  /** A test executed from the test script (0..*) */
  test?: Array<TestReportTest>;
  /** The results of running the series of required clean up steps (0..1) */
  teardown?: TestReportTeardown;
}

export namespace TestReport {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/report-status-codes */
  export type StatusEnum = 'completed' | 'in-progress' | 'waiting' | 'stopped' | 'entered-in-error';
  export const StatusEnum = {
    Completed: 'completed' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    Waiting: 'waiting' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/report-result-codes */
  export type ResultEnum = 'pass' | 'fail' | 'pending';
  export const ResultEnum = {
    Pass: 'pass' as ResultEnum,
    Fail: 'fail' as ResultEnum,
    Pending: 'pending' as ResultEnum,
  };
}

/**
 * A participant in the test execution, either the execution engine, a client, or a server
 */
export class TestReportParticipant {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** test-engine | client | server (1..1) */
  type?: TestReportParticipant.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** The uri of the participant. An absolute URL is preferred (1..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;
  /** The display name of the participant (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
}

export namespace TestReportParticipant {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/report-participant-type */
  export type TypeEnum = 'test-engine' | 'client' | 'server';
  export const TypeEnum = {
    TestEngine: 'test-engine' as TypeEnum,
    Client: 'client' as TypeEnum,
    Server: 'server' as TypeEnum,
  };
}

/**
 * The results of the series of required setup operations before the tests were executed
 */
export class TestReportSetup {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** A setup operation or assert that was executed (1..*) */
  action: Array<TestReportAction>;
}

/**
 * A setup operation or assert that was executed
 */
export class TestReportAction {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The operation to perform (0..1) */
  operation?: TestReportOperation;
  /** The assertion to perform (0..1) */
  assert?: TestReportAssert;
}

/**
 * The operation to perform
 */
export class TestReportOperation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** pass | skip | fail | warning | error (1..1) */
  result?: TestReportOperation.ResultEnum;
  /** Id and extensions of the primitive `result`. */
  _result?: Element;
  /** A message associated with the result (0..1) */
  message?: string;
  /** Id and extensions of the primitive `message`. */
  _message?: Element;
  /** A link to further details on the result (0..1) */
  detail?: string;
  /** Id and extensions of the primitive `detail`. */
  _detail?: Element;
}

export namespace TestReportOperation {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/report-action-result-codes */
  export type ResultEnum = 'pass' | 'skip' | 'fail' | 'warning' | 'error';
  export const ResultEnum = {
    Pass: 'pass' as ResultEnum,
    Skip: 'skip' as ResultEnum,
    Fail: 'fail' as ResultEnum,
    Warning: 'warning' as ResultEnum,
    Error: 'error' as ResultEnum,
  };
}

/**
 * The assertion to perform
 */
export class TestReportAssert {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** pass | skip | fail | warning | error (1..1) */
  result?: TestReportAssert.ResultEnum;
  /** Id and extensions of the primitive `result`. */
  _result?: Element;
  /** A message associated with the result (0..1) */
  message?: string;
  /** Id and extensions of the primitive `message`. */
  _message?: Element;
  /** A link to further details on the result (0..1) */
  detail?: string;
  /** Id and extensions of the primitive `detail`. */
  _detail?: Element;
}

export namespace TestReportAssert {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/report-action-result-codes */
  export type ResultEnum = 'pass' | 'skip' | 'fail' | 'warning' | 'error';
  export const ResultEnum = {
    Pass: 'pass' as ResultEnum,
    Skip: 'skip' as ResultEnum,
    Fail: 'fail' as ResultEnum,
    Warning: 'warning' as ResultEnum,
    Error: 'error' as ResultEnum,
  };
}

/**
 * A test executed from the test script
 */
export class TestReportTest {
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
  /** A test operation or assert that was performed (1..*) */
  action: Array<TestReportAction1>;
}

/**
 * A test operation or assert that was performed
 */
export class TestReportAction1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The operation performed (0..1) */
  operation?: TestReportOperation;
  /** The assertion performed (0..1) */
  assert?: TestReportAssert;
}

/**
 * The results of running the series of required clean up steps
 */
export class TestReportTeardown {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** One or more teardown operations performed (1..*) */
  action: Array<TestReportAction2>;
}

/**
 * One or more teardown operations performed
 */
export class TestReportAction2 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The teardown operation performed (1..1) */
  operation: TestReportOperation;
}
