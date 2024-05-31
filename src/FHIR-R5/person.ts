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
import { Address } from './address';
import { Attachment } from './attachment';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { ContactPoint } from './contactPoint';
import { Extension } from './extension';
import { HumanName } from './humanName';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { PersonCommunication } from './personCommunication';
import { PersonLink } from './personLink';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export interface Person { 
    /**
     * This is a Person resource
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
     * Identifier for a person within a particular scope.
     */
    identifier?: Array<Identifier>;
    active?: boolean;
    /**
     * A name associated with the person.
     */
    name?: Array<HumanName>;
    /**
     * A contact detail for the person, e.g. a telephone number or an email address.
     */
    telecom?: Array<ContactPoint>;
    gender?: Code;
    birthDate?: string;
    /**
     * Indicates if the individual is deceased or not.
     */
    deceasedBoolean?: boolean;
    /**
     * Indicates if the individual is deceased or not.
     */
    deceasedDateTime?: string;
    /**
     * One or more addresses for the person.
     */
    address?: Array<Address>;
    maritalStatus?: CodeableConcept;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: Array<Attachment>;
    /**
     * A language which may be used to communicate with the person about his or her health.
     */
    communication?: Array<PersonCommunication>;
    managingOrganization?: Reference;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: Array<PersonLink>;
}