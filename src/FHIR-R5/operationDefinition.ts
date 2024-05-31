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
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DateTime } from './dateTime';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Markdown } from './markdown';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { OperationDefinitionOverload } from './operationDefinitionOverload';
import { OperationDefinitionParameter } from './operationDefinitionParameter';
import { ResourceList } from './resourceList';
import { Uri } from './uri';
import { UsageContext } from './usageContext';

/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export interface OperationDefinition { 
    /**
     * This is a OperationDefinition resource
     */
    resourceType: any;
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
    url?: Uri;
    /**
     * A formal identifier that is used to identify this implementation guide when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Array<Identifier>;
    version?: string;
    /**
     * Indicates the mechanism used to compare versions to determine which is more current.
     */
    versionAlgorithmString?: string;
    versionAlgorithmCoding?: Coding;
    name?: string;
    title?: string;
    status?: Code;
    experimental?: boolean;
    date?: Date;
    publisher?: string;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<ContactDetail>;
    description?: Markdown;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate operation definition.
     */
    useContext?: Array<UsageContext>;
    /**
     * A legal or geographic region in which the operation definition is intended to be used.
     */
    jurisdiction?: Array<CodeableConcept>;
    purpose?: Markdown;
    copyright?: Markdown;
    copyrightLabel?: string;
    kind?: Code;
    affectsState?: boolean;
    code?: Code;
    comment?: Markdown;
    base?: Canonical;
    /**
     * The types on which this operation can be executed.
     */
    resource?: Array<Code>;
    system?: boolean;
    type?: boolean;
    instance?: boolean;
    inputProfile?: Canonical;
    outputProfile?: Canonical;
    /**
     * The parameters for the operation/query.
     */
    parameter?: Array<OperationDefinitionParameter>;
    /**
     * Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.
     */
    overload?: Array<OperationDefinitionOverload>;
}