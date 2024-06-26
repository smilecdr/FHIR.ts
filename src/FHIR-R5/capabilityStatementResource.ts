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
import { CapabilityStatementInteraction } from './capabilityStatementInteraction';
import { CapabilityStatementOperation } from './capabilityStatementOperation';
import { CapabilityStatementSearchParam } from './capabilityStatementSearchParam';
import { Code } from './code';
import { Extension } from './extension';
import { Markdown } from './markdown';

/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface CapabilityStatementResource { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    type?: Code;
    profile?: Canonical;
    /**
     * A list of profiles representing different use cases the system hosts/produces. A supported profile is a statement about the functionality of the data and services provided by the server (or the client) for supported use cases. For example, a system can define and declare multiple Observation profiles for laboratory observations, vital sign observations, etc. By declaring supported profiles, systems provide a way to determine whether individual resources are conformant. See further discussion in [Using Profiles](profiling.html#profile-uses).
     */
    supportedProfile?: Array<Canonical>;
    documentation?: Markdown;
    /**
     * Identifies a restful operation supported by the solution.
     */
    interaction?: Array<CapabilityStatementInteraction>;
    versioning?: Code;
    readHistory?: boolean;
    updateCreate?: boolean;
    conditionalCreate?: boolean;
    conditionalRead?: Code;
    conditionalUpdate?: boolean;
    conditionalPatch?: boolean;
    conditionalDelete?: Code;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy?: Array<Code>;
    /**
     * A list of _include values supported by the server.
     */
    searchInclude?: Array<string>;
    /**
     * A list of _revinclude (reverse include) values supported by the server.
     */
    searchRevInclude?: Array<string>;
    /**
     * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam?: Array<CapabilityStatementSearchParam>;
    /**
     * Definition of an operation or a named query together with its parameters and their meaning and type. Consult the definition of the operation for details about how to invoke the operation, and the parameters.
     */
    operation?: Array<CapabilityStatementOperation>;
}