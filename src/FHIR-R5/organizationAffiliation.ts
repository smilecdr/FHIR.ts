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
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * Defines an affiliation/association/relationship between 2 distinct organizations, that is not a part-of relationship/sub-division relationship.
 */
export interface OrganizationAffiliation { 
    /**
     * This is a OrganizationAffiliation resource
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
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: Array<Identifier>;
    active?: boolean;
    period?: Period;
    organization?: Reference;
    participatingOrganization?: Reference;
    /**
     * The network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: Array<Reference>;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: Array<CodeableConcept>;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: Array<CodeableConcept>;
    /**
     * The location(s) at which the role occurs.
     */
    location?: Array<Reference>;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: Array<Reference>;
    /**
     * The contact details of communication devices available at the participatingOrganization relevant to this Affiliation.
     */
    contact?: Array<ExtendedContactDetail>;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: Array<Reference>;
}