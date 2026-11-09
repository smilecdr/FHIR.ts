/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
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
 * A plan for executing testing on an artifact or specifications
 */
export interface TestPlan {
  resourceType: 'TestPlan';
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
  /** Canonical identifier for this test plan, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business identifier identifier for the test plan (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the test plan (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this test plan (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this test plan (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: TestPlan.StatusEnum;
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
  /** Natural language description of the test plan (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction where the test plan applies (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this test plan is defined (0..1) */
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
  /** The category of the Test Plan - can be acceptance, unit, performance (0..*) */
  category?: Array<CodeableConcept>;
  /** What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference (0..*) */
  scope?: Array<Reference>;
  /** A description of test tools to be used in the test plan - narrative for now (0..1) */
  testTools?: string;
  /** Id and extensions of the primitive `testTools`. */
  _testTools?: Element;
  /** The required criteria to execute the test plan - e.g. preconditions, previous tests (0..*) */
  dependency?: Array<TestPlanDependency>;
  /** The threshold or criteria for the test plan to be considered successfully executed - narrative (0..1) */
  exitCriteria?: string;
  /** Id and extensions of the primitive `exitCriteria`. */
  _exitCriteria?: Element;
  /** The test cases that constitute this plan (0..*) */
  testCase?: Array<TestPlanTestCase>;
}

export namespace TestPlan {
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
 * The required criteria to execute the test plan - e.g. preconditions, previous tests
 */
export interface TestPlanDependency {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of the dependency criterium (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Link to predecessor test plans (0..1) */
  predecessor?: Reference;
}

/**
 * The test cases that constitute this plan
 */
export interface TestPlanTestCase {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Sequence of test case in the test plan (0..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** The scope or artifact covered by the case (0..*) */
  scope?: Array<Reference>;
  /** Required criteria to execute the test case (0..*) */
  dependency?: Array<TestPlanDependency1>;
  /** The actual test to be executed (0..*) */
  testRun?: Array<TestPlanTestRun>;
  /** The test data used in the test case (0..*) */
  testData?: Array<TestPlanTestData>;
  /** Test assertions or expectations (0..*) */
  assertion?: Array<TestPlanAssertion>;
}

/**
 * Required criteria to execute the test case
 */
export interface TestPlanDependency1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of the criteria (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Link to predecessor test plans (0..1) */
  predecessor?: Reference;
}

/**
 * The actual test to be executed
 */
export interface TestPlanTestRun {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The narrative description of the tests (0..1) */
  narrative?: string;
  /** Id and extensions of the primitive `narrative`. */
  _narrative?: Element;
  /** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript (0..1) */
  script?: TestPlanScript;
}

/**
 * The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript
 */
export interface TestPlanScript {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The language for the test cases e.g. 'gherkin', 'testscript' (0..1) */
  language?: CodeableConcept;
  /** The actual content of the cases - references to TestScripts or externally defined content (0..1) */
  sourceString?: string;
  /** Id and extensions of the primitive `sourceString`. */
  _sourceString?: Element;
  /** The actual content of the cases - references to TestScripts or externally defined content (0..1) */
  sourceReference?: Reference;
}

/**
 * The test data used in the test case
 */
export interface TestPlanTestData {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of test data description, e.g. 'synthea' (1..1) */
  type: Coding;
  /** The actual test resources when they exist (0..1) */
  content?: Reference;
  /** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc (0..1) */
  sourceString?: string;
  /** Id and extensions of the primitive `sourceString`. */
  _sourceString?: Element;
  /** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc (0..1) */
  sourceReference?: Reference;
}

/**
 * Test assertions or expectations
 */
export interface TestPlanAssertion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Assertion type - for example 'informative' or 'required' (0..*) */
  type?: Array<CodeableConcept>;
  /** The focus or object of the assertion (0..*) */
  object?: Array<CodeableReference>;
  /** The actual result assertion (0..*) */
  result?: Array<CodeableReference>;
}
