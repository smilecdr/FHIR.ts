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
import { CapabilityStatementInteraction1 } from './capabilityStatementInteraction1';
import { CapabilityStatementOperation } from './capabilityStatementOperation';
import { CapabilityStatementResource } from './capabilityStatementResource';
import { CapabilityStatementSearchParam } from './capabilityStatementSearchParam';
import { CapabilityStatementSecurity } from './capabilityStatementSecurity';
import { Code } from './code';
import { Extension } from './extension';
import { Markdown } from './markdown';

/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface CapabilityStatementRest { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    mode?: Code;
    documentation?: Markdown;
    security?: CapabilityStatementSecurity;
    /**
     * A specification of the restful capabilities of the solution for a specific resource type.
     */
    resource?: Array<CapabilityStatementResource>;
    /**
     * A specification of restful operations supported by the system.
     */
    interaction?: Array<CapabilityStatementInteraction1>;
    /**
     * Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation. This is only for searches executed against the system-level endpoint.
     */
    searchParam?: Array<CapabilityStatementSearchParam>;
    /**
     * Definition of an operation or a named query together with its parameters and their meaning and type.
     */
    operation?: Array<CapabilityStatementOperation>;
    /**
     * An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .
     */
    compartment?: Array<Canonical>;
}