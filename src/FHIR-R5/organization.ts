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
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { ExtendedContactDetail } from './extendedContactDetail';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Markdown } from './markdown';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { OrganizationQualification } from './organizationQualification';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export interface Organization { 
    /**
     * This is a Organization resource
     */
    resourceType: 'Organization';
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
    /**
     * Identifier for the organization that is used to identify the organization across multiple disparate systems.
     */
    identifier?: Array<Identifier>;
    active?: boolean;
    /**
     * The kind(s) of organization that this is.
     */
    type?: Array<CodeableConcept>;
    name?: string;
    /**
     * A list of alternate names that the organization is known as, or was known as in the past.
     */
    alias?: Array<string>;
    description?: Markdown;
    /**
     * The contact details of communication devices available relevant to the specific Organization. This can include addresses, phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    contact?: Array<ExtendedContactDetail>;
    partOf?: Reference;
    /**
     * Technical endpoints providing access to services operated for the organization.
     */
    endpoint?: Array<Reference>;
    /**
     * The official certifications, accreditations, training, designations and licenses that authorize and/or otherwise endorse the provision of care by the organization.  For example, an approval to provide a type of services issued by a certifying body (such as the US Joint Commission) to an organization.
     */
    qualification?: Array<OrganizationQualification>;
}