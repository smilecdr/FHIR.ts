/**
 * FHIR Version R5
 * The following is auto generated resource definition.
 *
 * OpenAPI spec version: 3.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Canonical } from './canonical';
import { Code } from './code';
import { DateTime } from './dateTime';
import { Decimal } from './decimal';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { ResourceList } from './resourceList';
import { TestReportParticipant } from './testReportParticipant';
import { TestReportSetup } from './testReportSetup';
import { TestReportTeardown } from './testReportTeardown';
import { TestReportTest } from './testReportTest';
import { Uri } from './uri';

/**
 * A summary of information based on the results of executing a TestScript.
 */
export interface TestReport { 
    /**
     * This is a TestReport resource
     */
    resourceType: 'TestReport';
    id?: Id;
    meta?: Meta;
    implicitRules?: Uri;
    language?: Code;
    text?: Narrative;
    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope. This is allowed to be a Parameters resource if and only if it is referenced by a resource that provides context/meaning.
     */
    contained?: Array<ResourceList>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    identifier?: Identifier;
    name?: string;
    status?: Code;
    testScript: Canonical;
    result?: Code;
    score?: Decimal;
    tester?: string;
    issued?: Date;
    /**
     * A participant in the test execution, either the execution engine, a client, or a server.
     */
    participant?: Array<TestReportParticipant>;
    setup?: TestReportSetup;
    /**
     * A test executed from the test script.
     */
    test?: Array<TestReportTest>;
    teardown?: TestReportTeardown;
}