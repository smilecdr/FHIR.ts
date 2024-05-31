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
import { Availability } from './availability';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ExtendedContactDetail } from './extendedContactDetail';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { LocationPosition } from './locationPosition';
import { Markdown } from './markdown';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';
import { VirtualServiceDetail } from './virtualServiceDetail';

/**
 * Details and position information for a place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export interface Location { 
    /**
     * This is a Location resource
     */
    resourceType: 'Location';
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
     * Unique code or number identifying the location to its users.
     */
    identifier?: Array<Identifier>;
    status?: Code;
    operationalStatus?: Coding;
    name?: string;
    /**
     * A list of alternate names that the location is known as, or was known as, in the past.
     */
    alias?: Array<string>;
    description?: Markdown;
    mode?: Code;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: Array<CodeableConcept>;
    /**
     * The contact details of communication devices available at the location. This can include addresses, phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    contact?: Array<ExtendedContactDetail>;
    address?: Address;
    form?: CodeableConcept;
    position?: LocationPosition;
    managingOrganization?: Reference;
    partOf?: Reference;
    /**
     * Collection of characteristics (attributes).
     */
    characteristic?: Array<CodeableConcept>;
    /**
     * What days/times during a week is this location usually open, and any exceptions where the location is not available.
     */
    hoursOfOperation?: Array<Availability>;
    /**
     * Connection details of a virtual service (e.g. shared conference call facility with dedicated number/details).
     */
    virtualService?: Array<VirtualServiceDetail>;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint?: Array<Reference>;
}