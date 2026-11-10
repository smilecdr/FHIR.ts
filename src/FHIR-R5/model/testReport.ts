/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';

/**
 * A summary of information based on the results of executing a TestScript.
 */
export class TestReport extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.TestReportStatus },
      ],
    },
    {
      elementName: 'testScript',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'testScript', typeCode: 'canonical' }],
    },
    {
      elementName: 'result',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'result', typeCode: 'code', allowedCodes: valueSetCodes.TestReportResult },
      ],
    },
    {
      elementName: 'score',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'score', typeCode: 'decimal' }],
    },
    {
      elementName: 'tester',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'tester', typeCode: 'string' }],
    },
    {
      elementName: 'issued',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issued', typeCode: 'dateTime' }],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'TestReportParticipant' }],
    },
    {
      elementName: 'setup',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'setup', typeCode: 'TestReportSetup' }],
    },
    {
      elementName: 'test',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'test', typeCode: 'TestReportTest' }],
    },
    {
      elementName: 'teardown',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'teardown', typeCode: 'TestReportTeardown' }],
    },
  ];

  readonly resourceType = 'TestReport';

  /** External identifier (0..1) */
  identifier?: Identifier;

  /** Informal name of the executed TestReport (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** completed | in-progress | waiting | stopped | entered-in-error (1..1) */
  status?: valueSetCodes.TestReportStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Canonical URL to the version-specific TestScript that was executed to produce this TestReport (1..1) */
  testScript?: string;
  /** Id and extensions of the primitive `testScript`. */
  _testScript?: Element;

  /** pass | fail | pending (1..1) */
  result?: valueSetCodes.TestReportResult;
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
  participant?: TestReportParticipant[];

  /** The results of the series of required setup operations before the tests were executed (0..1) */
  setup?: TestReportSetup;

  /** A test executed from the test script (0..*) */
  test?: TestReportTest[];

  /** The results of running the series of required clean up steps (0..1) */
  teardown?: TestReportTeardown;

  override fhirType(): string {
    return 'TestReport';
  }

  /** FHIR JSON for this TestReport, typed as the plain `TestReport` data type. */
  override toJSON(): plainTypes.TestReport {
    return this.serialize() as plainTypes.TestReport;
  }

  /** External identifier (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Informal name of the executed TestReport (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** completed | in-progress | waiting | stopped | entered-in-error (1..1) */
  getStatus(): valueSetCodes.TestReportStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.TestReportStatus | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** Canonical URL to the version-specific TestScript that was executed to produce this TestReport (1..1) */
  getTestScript(): string | undefined {
    return this.testScript;
  }

  /** Sets `testScript`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setTestScript(testScript: string | undefined): this {
    return this.setFieldValue('testScript', testScript);
  }

  hasTestScript(): boolean {
    return this.hasFieldValue('testScript');
  }

  /** The element carrying the id and extensions of `testScript`. Created when absent. */
  getTestScriptElement(): Element {
    if (this._testScript === undefined) {
      this._testScript = new Element();
    }
    return this._testScript;
  }

  setTestScriptElement(testScriptElement: Element | undefined): this {
    this._testScript = testScriptElement;
    return this;
  }

  /** pass | fail | pending (1..1) */
  getResult(): valueSetCodes.TestReportResult | undefined {
    return this.result;
  }

  /** Sets `result`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setResult(result: valueSetCodes.TestReportResult | undefined): this {
    return this.setFieldValue('result', result);
  }

  hasResult(): boolean {
    return this.hasFieldValue('result');
  }

  /** The element carrying the id and extensions of `result`. Created when absent. */
  getResultElement(): Element {
    if (this._result === undefined) {
      this._result = new Element();
    }
    return this._result;
  }

  setResultElement(resultElement: Element | undefined): this {
    this._result = resultElement;
    return this;
  }

  /** The final score (percentage of tests passed) resulting from the execution of the TestScript (0..1) */
  getScore(): number | undefined {
    return this.score;
  }

  /** Sets `score`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setScore(score: number | undefined): this {
    return this.setFieldValue('score', score);
  }

  hasScore(): boolean {
    return this.hasFieldValue('score');
  }

  /** The element carrying the id and extensions of `score`. Created when absent. */
  getScoreElement(): Element {
    if (this._score === undefined) {
      this._score = new Element();
    }
    return this._score;
  }

  setScoreElement(scoreElement: Element | undefined): this {
    this._score = scoreElement;
    return this;
  }

  /** Name of the tester producing this report (Organization or individual) (0..1) */
  getTester(): string | undefined {
    return this.tester;
  }

  /** Sets `tester`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTester(tester: string | undefined): this {
    return this.setFieldValue('tester', tester);
  }

  hasTester(): boolean {
    return this.hasFieldValue('tester');
  }

  /** The element carrying the id and extensions of `tester`. Created when absent. */
  getTesterElement(): Element {
    if (this._tester === undefined) {
      this._tester = new Element();
    }
    return this._tester;
  }

  setTesterElement(testerElement: Element | undefined): this {
    this._tester = testerElement;
    return this;
  }

  /** When the TestScript was executed and this TestReport was generated (0..1) */
  getIssued(): string | undefined {
    return this.issued;
  }

  /** Sets `issued`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setIssued(issued: string | undefined): this {
    return this.setFieldValue('issued', issued);
  }

  hasIssued(): boolean {
    return this.hasFieldValue('issued');
  }

  /** The element carrying the id and extensions of `issued`. Created when absent. */
  getIssuedElement(): Element {
    if (this._issued === undefined) {
      this._issued = new Element();
    }
    return this._issued;
  }

  setIssuedElement(issuedElement: Element | undefined): this {
    this._issued = issuedElement;
    return this;
  }

  /** A participant in the test execution, either the execution engine, a client, or a server (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): TestReportParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: TestReportParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty TestReportParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): TestReportParticipant;
  /** Appends the given TestReportParticipant to `participant` and returns this object for chaining. */
  addParticipant(testReportParticipant: TestReportParticipant): this;
  addParticipant(testReportParticipant?: TestReportParticipant): TestReportParticipant | this {
    if (testReportParticipant !== undefined) {
      return this.addFieldValue('participant', testReportParticipant);
    }
    const createdTestReportParticipant = new TestReportParticipant();
    this.addFieldValue('participant', createdTestReportParticipant);
    return createdTestReportParticipant;
  }

  /** The first TestReportParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): TestReportParticipant {
    const firstTestReportParticipant = this.getParticipant()[0];
    return firstTestReportParticipant === undefined
      ? this.addParticipant()
      : firstTestReportParticipant;
  }

  /** The results of the series of required setup operations before the tests were executed (0..1) Created when absent. */
  getSetup(): TestReportSetup {
    if (this.setup === undefined) {
      this.setup = new TestReportSetup();
    }
    return this.setup;
  }

  setSetup(setup: TestReportSetup | undefined): this {
    return this.setFieldValue('setup', setup);
  }

  hasSetup(): boolean {
    return this.hasFieldValue('setup');
  }

  /** A test executed from the test script (0..*) Never undefined; an empty list is created when absent. */
  getTest(): TestReportTest[] {
    if (this.test === undefined) {
      this.test = [];
    }
    return this.test;
  }

  setTest(test: TestReportTest[] | undefined): this {
    return this.setFieldValue('test', test);
  }

  hasTest(): boolean {
    return this.hasFieldValue('test');
  }

  /** Appends a new, empty TestReportTest to `test` and returns it so it can be filled in. */
  addTest(): TestReportTest;
  /** Appends the given TestReportTest to `test` and returns this object for chaining. */
  addTest(testReportTest: TestReportTest): this;
  addTest(testReportTest?: TestReportTest): TestReportTest | this {
    if (testReportTest !== undefined) {
      return this.addFieldValue('test', testReportTest);
    }
    const createdTestReportTest = new TestReportTest();
    this.addFieldValue('test', createdTestReportTest);
    return createdTestReportTest;
  }

  /** The first TestReportTest of `test`. One is added when the list is empty. */
  getTestFirstRep(): TestReportTest {
    const firstTestReportTest = this.getTest()[0];
    return firstTestReportTest === undefined ? this.addTest() : firstTestReportTest;
  }

  /** The results of running the series of required clean up steps (0..1) Created when absent. */
  getTeardown(): TestReportTeardown {
    if (this.teardown === undefined) {
      this.teardown = new TestReportTeardown();
    }
    return this.teardown;
  }

  setTeardown(teardown: TestReportTeardown | undefined): this {
    return this.setFieldValue('teardown', teardown);
  }

  hasTeardown(): boolean {
    return this.hasFieldValue('teardown');
  }
}

modelTypeRegistry.register('TestReport', TestReport, true);

/** True when the value is a TestReport model instance. */
export function isTestReport(candidate: unknown): candidate is TestReport {
  return candidate instanceof TestReport;
}

/**
 * A participant in the test execution, either the execution engine, a client, or a server
 */
export class TestReportParticipant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.TestReportParticipantType,
        },
      ],
    },
    {
      elementName: 'uri',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'uri', typeCode: 'uri' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
  ];

  /** test-engine | client | server (1..1) */
  type?: valueSetCodes.TestReportParticipantType;
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

  override fhirType(): string {
    return 'TestReport.participant';
  }

  /** FHIR JSON for this TestReportParticipant, typed as the plain `TestReportParticipant` data type. */
  override toJSON(): plainTypes.TestReportParticipant {
    return this.serialize() as plainTypes.TestReportParticipant;
  }

  /** test-engine | client | server (1..1) */
  getType(): valueSetCodes.TestReportParticipantType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.TestReportParticipantType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** The uri of the participant. An absolute URL is preferred (1..1) */
  getUri(): string | undefined {
    return this.uri;
  }

  /** Sets `uri`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUri(uri: string | undefined): this {
    return this.setFieldValue('uri', uri);
  }

  hasUri(): boolean {
    return this.hasFieldValue('uri');
  }

  /** The element carrying the id and extensions of `uri`. Created when absent. */
  getUriElement(): Element {
    if (this._uri === undefined) {
      this._uri = new Element();
    }
    return this._uri;
  }

  setUriElement(uriElement: Element | undefined): this {
    this._uri = uriElement;
    return this;
  }

  /** The display name of the participant (0..1) */
  getDisplay(): string | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisplay(display: string | undefined): this {
    return this.setFieldValue('display', display);
  }

  hasDisplay(): boolean {
    return this.hasFieldValue('display');
  }

  /** The element carrying the id and extensions of `display`. Created when absent. */
  getDisplayElement(): Element {
    if (this._display === undefined) {
      this._display = new Element();
    }
    return this._display;
  }

  setDisplayElement(displayElement: Element | undefined): this {
    this._display = displayElement;
    return this;
  }
}

modelTypeRegistry.register('TestReportParticipant', TestReportParticipant, false);

/**
 * The results of the series of required setup operations before the tests were executed
 */
export class TestReportSetup extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'action',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'TestReportSetupAction' }],
    },
  ];

  /** A setup operation or assert that was executed (1..*) */
  action?: TestReportSetupAction[];

  override fhirType(): string {
    return 'TestReport.setup';
  }

  /** FHIR JSON for this TestReportSetup, typed as the plain `TestReportSetup` data type. */
  override toJSON(): plainTypes.TestReportSetup {
    return this.serialize() as plainTypes.TestReportSetup;
  }

  /** A setup operation or assert that was executed (1..*) Never undefined; an empty list is created when absent. */
  getAction(): TestReportSetupAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: TestReportSetupAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty TestReportSetupAction to `action` and returns it so it can be filled in. */
  addAction(): TestReportSetupAction;
  /** Appends the given TestReportSetupAction to `action` and returns this object for chaining. */
  addAction(testReportSetupAction: TestReportSetupAction): this;
  addAction(testReportSetupAction?: TestReportSetupAction): TestReportSetupAction | this {
    if (testReportSetupAction !== undefined) {
      return this.addFieldValue('action', testReportSetupAction);
    }
    const createdTestReportSetupAction = new TestReportSetupAction();
    this.addFieldValue('action', createdTestReportSetupAction);
    return createdTestReportSetupAction;
  }

  /** The first TestReportSetupAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): TestReportSetupAction {
    const firstTestReportSetupAction = this.getAction()[0];
    return firstTestReportSetupAction === undefined ? this.addAction() : firstTestReportSetupAction;
  }
}

modelTypeRegistry.register('TestReportSetup', TestReportSetup, false);

/**
 * A setup operation or assert that was executed
 */
export class TestReportSetupAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'operation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operation', typeCode: 'TestReportSetupActionOperation' }],
    },
    {
      elementName: 'assert',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assert', typeCode: 'TestReportSetupActionAssert' }],
    },
  ];

  /** The operation to perform (0..1) */
  operation?: TestReportSetupActionOperation;

  /** The assertion to perform (0..1) */
  assert?: TestReportSetupActionAssert;

  override fhirType(): string {
    return 'TestReport.setup.action';
  }

  /** FHIR JSON for this TestReportSetupAction, typed as the plain `TestReportAction` data type. */
  override toJSON(): plainTypes.TestReportAction {
    return this.serialize() as plainTypes.TestReportAction;
  }

  /** The operation to perform (0..1) Created when absent. */
  getOperation(): TestReportSetupActionOperation {
    if (this.operation === undefined) {
      this.operation = new TestReportSetupActionOperation();
    }
    return this.operation;
  }

  setOperation(operation: TestReportSetupActionOperation | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }

  /** The assertion to perform (0..1) Created when absent. */
  getAssert(): TestReportSetupActionAssert {
    if (this.assert === undefined) {
      this.assert = new TestReportSetupActionAssert();
    }
    return this.assert;
  }

  setAssert(assert: TestReportSetupActionAssert | undefined): this {
    return this.setFieldValue('assert', assert);
  }

  hasAssert(): boolean {
    return this.hasFieldValue('assert');
  }
}

modelTypeRegistry.register('TestReportSetupAction', TestReportSetupAction, false);

/**
 * The operation to perform
 */
export class TestReportSetupActionOperation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'result',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'result', typeCode: 'code', allowedCodes: valueSetCodes.TestReportActionResult },
      ],
    },
    {
      elementName: 'message',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'message', typeCode: 'markdown' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'detail', typeCode: 'uri' }],
    },
  ];

  /** pass | skip | fail | warning | error (1..1) */
  result?: valueSetCodes.TestReportActionResult;
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

  override fhirType(): string {
    return 'TestReport.setup.action.operation';
  }

  /** FHIR JSON for this TestReportSetupActionOperation, typed as the plain `TestReportOperation` data type. */
  override toJSON(): plainTypes.TestReportOperation {
    return this.serialize() as plainTypes.TestReportOperation;
  }

  /** pass | skip | fail | warning | error (1..1) */
  getResult(): valueSetCodes.TestReportActionResult | undefined {
    return this.result;
  }

  /** Sets `result`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setResult(result: valueSetCodes.TestReportActionResult | undefined): this {
    return this.setFieldValue('result', result);
  }

  hasResult(): boolean {
    return this.hasFieldValue('result');
  }

  /** The element carrying the id and extensions of `result`. Created when absent. */
  getResultElement(): Element {
    if (this._result === undefined) {
      this._result = new Element();
    }
    return this._result;
  }

  setResultElement(resultElement: Element | undefined): this {
    this._result = resultElement;
    return this;
  }

  /** A message associated with the result (0..1) */
  getMessage(): string | undefined {
    return this.message;
  }

  /** Sets `message`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setMessage(message: string | undefined): this {
    return this.setFieldValue('message', message);
  }

  hasMessage(): boolean {
    return this.hasFieldValue('message');
  }

  /** The element carrying the id and extensions of `message`. Created when absent. */
  getMessageElement(): Element {
    if (this._message === undefined) {
      this._message = new Element();
    }
    return this._message;
  }

  setMessageElement(messageElement: Element | undefined): this {
    this._message = messageElement;
    return this;
  }

  /** A link to further details on the result (0..1) */
  getDetail(): string | undefined {
    return this.detail;
  }

  /** Sets `detail`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setDetail(detail: string | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** The element carrying the id and extensions of `detail`. Created when absent. */
  getDetailElement(): Element {
    if (this._detail === undefined) {
      this._detail = new Element();
    }
    return this._detail;
  }

  setDetailElement(detailElement: Element | undefined): this {
    this._detail = detailElement;
    return this;
  }
}

modelTypeRegistry.register('TestReportSetupActionOperation', TestReportSetupActionOperation, false);

/**
 * The assertion to perform
 */
export class TestReportSetupActionAssert extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'result',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'result', typeCode: 'code', allowedCodes: valueSetCodes.TestReportActionResult },
      ],
    },
    {
      elementName: 'message',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'message', typeCode: 'markdown' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'detail', typeCode: 'string' }],
    },
    {
      elementName: 'requirement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'requirement', typeCode: 'TestReportSetupActionAssertRequirement' }],
    },
  ];

  /** pass | skip | fail | warning | error (1..1) */
  result?: valueSetCodes.TestReportActionResult;
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

  /** Links or references to the testing requirements (0..*) */
  requirement?: TestReportSetupActionAssertRequirement[];

  override fhirType(): string {
    return 'TestReport.setup.action.assert';
  }

  /** FHIR JSON for this TestReportSetupActionAssert, typed as the plain `TestReportAssert` data type. */
  override toJSON(): plainTypes.TestReportAssert {
    return this.serialize() as plainTypes.TestReportAssert;
  }

  /** pass | skip | fail | warning | error (1..1) */
  getResult(): valueSetCodes.TestReportActionResult | undefined {
    return this.result;
  }

  /** Sets `result`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setResult(result: valueSetCodes.TestReportActionResult | undefined): this {
    return this.setFieldValue('result', result);
  }

  hasResult(): boolean {
    return this.hasFieldValue('result');
  }

  /** The element carrying the id and extensions of `result`. Created when absent. */
  getResultElement(): Element {
    if (this._result === undefined) {
      this._result = new Element();
    }
    return this._result;
  }

  setResultElement(resultElement: Element | undefined): this {
    this._result = resultElement;
    return this;
  }

  /** A message associated with the result (0..1) */
  getMessage(): string | undefined {
    return this.message;
  }

  /** Sets `message`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setMessage(message: string | undefined): this {
    return this.setFieldValue('message', message);
  }

  hasMessage(): boolean {
    return this.hasFieldValue('message');
  }

  /** The element carrying the id and extensions of `message`. Created when absent. */
  getMessageElement(): Element {
    if (this._message === undefined) {
      this._message = new Element();
    }
    return this._message;
  }

  setMessageElement(messageElement: Element | undefined): this {
    this._message = messageElement;
    return this;
  }

  /** A link to further details on the result (0..1) */
  getDetail(): string | undefined {
    return this.detail;
  }

  /** Sets `detail`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDetail(detail: string | undefined): this {
    return this.setFieldValue('detail', detail);
  }

  hasDetail(): boolean {
    return this.hasFieldValue('detail');
  }

  /** The element carrying the id and extensions of `detail`. Created when absent. */
  getDetailElement(): Element {
    if (this._detail === undefined) {
      this._detail = new Element();
    }
    return this._detail;
  }

  setDetailElement(detailElement: Element | undefined): this {
    this._detail = detailElement;
    return this;
  }

  /** Links or references to the testing requirements (0..*) Never undefined; an empty list is created when absent. */
  getRequirement(): TestReportSetupActionAssertRequirement[] {
    if (this.requirement === undefined) {
      this.requirement = [];
    }
    return this.requirement;
  }

  setRequirement(requirement: TestReportSetupActionAssertRequirement[] | undefined): this {
    return this.setFieldValue('requirement', requirement);
  }

  hasRequirement(): boolean {
    return this.hasFieldValue('requirement');
  }

  /** Appends a new, empty TestReportSetupActionAssertRequirement to `requirement` and returns it so it can be filled in. */
  addRequirement(): TestReportSetupActionAssertRequirement;
  /** Appends the given TestReportSetupActionAssertRequirement to `requirement` and returns this object for chaining. */
  addRequirement(
    testReportSetupActionAssertRequirement: TestReportSetupActionAssertRequirement
  ): this;
  addRequirement(
    testReportSetupActionAssertRequirement?: TestReportSetupActionAssertRequirement
  ): TestReportSetupActionAssertRequirement | this {
    if (testReportSetupActionAssertRequirement !== undefined) {
      return this.addFieldValue('requirement', testReportSetupActionAssertRequirement);
    }
    const createdTestReportSetupActionAssertRequirement =
      new TestReportSetupActionAssertRequirement();
    this.addFieldValue('requirement', createdTestReportSetupActionAssertRequirement);
    return createdTestReportSetupActionAssertRequirement;
  }

  /** The first TestReportSetupActionAssertRequirement of `requirement`. One is added when the list is empty. */
  getRequirementFirstRep(): TestReportSetupActionAssertRequirement {
    const firstTestReportSetupActionAssertRequirement = this.getRequirement()[0];
    return firstTestReportSetupActionAssertRequirement === undefined
      ? this.addRequirement()
      : firstTestReportSetupActionAssertRequirement;
  }
}

modelTypeRegistry.register('TestReportSetupActionAssert', TestReportSetupActionAssert, false);

/**
 * Links or references to the testing requirements
 */
export class TestReportSetupActionAssertRequirement extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'link',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'linkUri', typeCode: 'uri' },
        { jsonKey: 'linkCanonical', typeCode: 'canonical' },
      ],
    },
  ];

  /** Link or reference to the testing requirement (0..1) */
  linkUri?: string;
  /** Id and extensions of the primitive `linkUri`. */
  _linkUri?: Element;
  /** Link or reference to the testing requirement (0..1) */
  linkCanonical?: string;
  /** Id and extensions of the primitive `linkCanonical`. */
  _linkCanonical?: Element;

  override fhirType(): string {
    return 'TestReport.setup.action.assert.requirement';
  }

  /** FHIR JSON for this TestReportSetupActionAssertRequirement, typed as the plain `TestReportRequirement` data type. */
  override toJSON(): plainTypes.TestReportRequirement {
    return this.serialize() as plainTypes.TestReportRequirement;
  }

  /** Link or reference to the testing requirement (0..1) Whichever type of `link[x]` is set. */
  getLink(): string | undefined {
    return this.getChoiceValue<string>('link');
  }

  /** True when any type of `link[x]` is set. */
  hasLink(): boolean {
    return this.hasChoiceValue('link');
  }

  getLinkUri(): string | undefined {
    return this.linkUri;
  }

  /** Sets `link[x]` as uri and clears every other type of it. */
  setLinkUri(linkUri: string | undefined): this {
    return this.setFieldValue('linkUri', linkUri);
  }

  hasLinkUri(): boolean {
    return this.hasFieldValue('linkUri');
  }

  getLinkCanonical(): string | undefined {
    return this.linkCanonical;
  }

  /** Sets `link[x]` as canonical and clears every other type of it. */
  setLinkCanonical(linkCanonical: string | undefined): this {
    return this.setFieldValue('linkCanonical', linkCanonical);
  }

  hasLinkCanonical(): boolean {
    return this.hasFieldValue('linkCanonical');
  }
}

modelTypeRegistry.register(
  'TestReportSetupActionAssertRequirement',
  TestReportSetupActionAssertRequirement,
  false
);

/**
 * A test executed from the test script
 */
export class TestReportTest extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'action',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'TestReportTestAction' }],
    },
  ];

  /** Tracking/logging name of this test (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Tracking/reporting short description of the test (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** A test operation or assert that was performed (1..*) */
  action?: TestReportTestAction[];

  override fhirType(): string {
    return 'TestReport.test';
  }

  /** FHIR JSON for this TestReportTest, typed as the plain `TestReportTest` data type. */
  override toJSON(): plainTypes.TestReportTest {
    return this.serialize() as plainTypes.TestReportTest;
  }

  /** Tracking/logging name of this test (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Tracking/reporting short description of the test (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** A test operation or assert that was performed (1..*) Never undefined; an empty list is created when absent. */
  getAction(): TestReportTestAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: TestReportTestAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty TestReportTestAction to `action` and returns it so it can be filled in. */
  addAction(): TestReportTestAction;
  /** Appends the given TestReportTestAction to `action` and returns this object for chaining. */
  addAction(testReportTestAction: TestReportTestAction): this;
  addAction(testReportTestAction?: TestReportTestAction): TestReportTestAction | this {
    if (testReportTestAction !== undefined) {
      return this.addFieldValue('action', testReportTestAction);
    }
    const createdTestReportTestAction = new TestReportTestAction();
    this.addFieldValue('action', createdTestReportTestAction);
    return createdTestReportTestAction;
  }

  /** The first TestReportTestAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): TestReportTestAction {
    const firstTestReportTestAction = this.getAction()[0];
    return firstTestReportTestAction === undefined ? this.addAction() : firstTestReportTestAction;
  }
}

modelTypeRegistry.register('TestReportTest', TestReportTest, false);

/**
 * A test operation or assert that was performed
 */
export class TestReportTestAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'operation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operation', typeCode: 'TestReportSetupActionOperation' }],
    },
    {
      elementName: 'assert',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'assert', typeCode: 'TestReportSetupActionAssert' }],
    },
  ];

  /** The operation performed (0..1) */
  operation?: TestReportSetupActionOperation;

  /** The assertion performed (0..1) */
  assert?: TestReportSetupActionAssert;

  override fhirType(): string {
    return 'TestReport.test.action';
  }

  /** FHIR JSON for this TestReportTestAction, typed as the plain `TestReportAction1` data type. */
  override toJSON(): plainTypes.TestReportAction1 {
    return this.serialize() as plainTypes.TestReportAction1;
  }

  /** The operation performed (0..1) Created when absent. */
  getOperation(): TestReportSetupActionOperation {
    if (this.operation === undefined) {
      this.operation = new TestReportSetupActionOperation();
    }
    return this.operation;
  }

  setOperation(operation: TestReportSetupActionOperation | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }

  /** The assertion performed (0..1) Created when absent. */
  getAssert(): TestReportSetupActionAssert {
    if (this.assert === undefined) {
      this.assert = new TestReportSetupActionAssert();
    }
    return this.assert;
  }

  setAssert(assert: TestReportSetupActionAssert | undefined): this {
    return this.setFieldValue('assert', assert);
  }

  hasAssert(): boolean {
    return this.hasFieldValue('assert');
  }
}

modelTypeRegistry.register('TestReportTestAction', TestReportTestAction, false);

/**
 * The results of running the series of required clean up steps
 */
export class TestReportTeardown extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'action',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'TestReportTeardownAction' }],
    },
  ];

  /** One or more teardown operations performed (1..*) */
  action?: TestReportTeardownAction[];

  override fhirType(): string {
    return 'TestReport.teardown';
  }

  /** FHIR JSON for this TestReportTeardown, typed as the plain `TestReportTeardown` data type. */
  override toJSON(): plainTypes.TestReportTeardown {
    return this.serialize() as plainTypes.TestReportTeardown;
  }

  /** One or more teardown operations performed (1..*) Never undefined; an empty list is created when absent. */
  getAction(): TestReportTeardownAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: TestReportTeardownAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty TestReportTeardownAction to `action` and returns it so it can be filled in. */
  addAction(): TestReportTeardownAction;
  /** Appends the given TestReportTeardownAction to `action` and returns this object for chaining. */
  addAction(testReportTeardownAction: TestReportTeardownAction): this;
  addAction(testReportTeardownAction?: TestReportTeardownAction): TestReportTeardownAction | this {
    if (testReportTeardownAction !== undefined) {
      return this.addFieldValue('action', testReportTeardownAction);
    }
    const createdTestReportTeardownAction = new TestReportTeardownAction();
    this.addFieldValue('action', createdTestReportTeardownAction);
    return createdTestReportTeardownAction;
  }

  /** The first TestReportTeardownAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): TestReportTeardownAction {
    const firstTestReportTeardownAction = this.getAction()[0];
    return firstTestReportTeardownAction === undefined
      ? this.addAction()
      : firstTestReportTeardownAction;
  }
}

modelTypeRegistry.register('TestReportTeardown', TestReportTeardown, false);

/**
 * One or more teardown operations performed
 */
export class TestReportTeardownAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'operation',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operation', typeCode: 'TestReportSetupActionOperation' }],
    },
  ];

  /** The teardown operation performed (1..1) */
  operation?: TestReportSetupActionOperation;

  override fhirType(): string {
    return 'TestReport.teardown.action';
  }

  /** FHIR JSON for this TestReportTeardownAction, typed as the plain `TestReportAction2` data type. */
  override toJSON(): plainTypes.TestReportAction2 {
    return this.serialize() as plainTypes.TestReportAction2;
  }

  /** The teardown operation performed (1..1) Created when absent. */
  getOperation(): TestReportSetupActionOperation {
    if (this.operation === undefined) {
      this.operation = new TestReportSetupActionOperation();
    }
    return this.operation;
  }

  setOperation(operation: TestReportSetupActionOperation | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }
}

modelTypeRegistry.register('TestReportTeardownAction', TestReportTeardownAction, false);
