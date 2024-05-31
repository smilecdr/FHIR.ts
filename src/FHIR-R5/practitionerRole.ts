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
import { Availability } from './availability';
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
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export interface PractitionerRole { 
    /**
     * This is a PractitionerRole resource
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
     * Business Identifiers that are specific to a role/location.
     */
    identifier?: Array<Identifier>;
    active?: boolean;
    period?: Period;
    practitioner?: Reference;
    organization?: Reference;
    /**
     * Roles which this practitioner is authorized to perform for the organization.
     */
    code?: Array<CodeableConcept>;
    /**
     * The specialty of a practitioner that describes the functional role they are practicing at a given organization or location.
     */
    specialty?: Array<CodeableConcept>;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: Array<Reference>;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: Array<Reference>;
    /**
     * The contact details of communication devices available relevant to the specific PractitionerRole. This can include addresses, phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    contact?: Array<ExtendedContactDetail>;
    /**
     * Collection of characteristics (attributes).
     */
    characteristic?: Array<CodeableConcept>;
    /**
     * A language the practitioner can use in patient communication. The practitioner may know several languages (listed in practitioner.communication), however these are the languages that could be advertised in a directory for a patient to search.
     */
    communication?: Array<CodeableConcept>;
    /**
     * A collection of times the practitioner is available or performing this role at the location and/or healthcareservice.
     */
    availability?: Array<Availability>;
    /**
     *  Technical endpoints providing access to services operated for the practitioner with this role. Commonly used for locating scheduling services, or identifying where to send referrals electronically.
     */
    endpoint?: Array<Reference>;
}