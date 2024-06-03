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
import { Attachment } from './attachment';
import { Availability } from './availability';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { ExtendedContactDetail } from './extendedContactDetail';
import { Extension } from './extension';
import { HealthcareServiceEligibility } from './healthcareServiceEligibility';
import { Id } from './id';
import { Identifier } from './identifier';
import { Markdown } from './markdown';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * The details of a healthcare service available at a location.
 */
export interface HealthcareService { 
    /**
     * This is a HealthcareService resource
     */
    resourceType: 'HealthcareService';
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
     * External identifiers for this item.
     */
    identifier?: Array<Identifier>;
    active?: boolean;
    providedBy?: Reference;
    /**
     * When the HealthcareService is representing a specific, schedulable service, the availableIn property can refer to a generic service.
     */
    offeredIn?: Array<Reference>;
    /**
     * Identifies the broad category of service being performed or delivered.
     */
    category?: Array<CodeableConcept>;
    /**
     * The specific type of service that may be delivered or performed.
     */
    type?: Array<CodeableConcept>;
    /**
     * Collection of specialties handled by the Healthcare service. This is more of a medical term.
     */
    specialty?: Array<CodeableConcept>;
    /**
     * The location(s) where this healthcare service may be provided.
     */
    location?: Array<Reference>;
    name?: string;
    comment?: Markdown;
    extraDetails?: Markdown;
    photo?: Attachment;
    /**
     * The contact details of communication devices available relevant to the specific HealthcareService. This can include addresses, phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    contact?: Array<ExtendedContactDetail>;
    /**
     * The location(s) that this service is available to (not where the service is provided).
     */
    coverageArea?: Array<Reference>;
    /**
     * The code(s) that detail the conditions under which the healthcare service is available/offered.
     */
    serviceProvisionCode?: Array<CodeableConcept>;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: Array<HealthcareServiceEligibility>;
    /**
     * Programs that this service is applicable to.
     */
    program?: Array<CodeableConcept>;
    /**
     * Collection of characteristics (attributes).
     */
    characteristic?: Array<CodeableConcept>;
    /**
     * Some services are specifically made available in multiple languages, this property permits a directory to declare the languages this is offered in. Typically this is only provided where a service operates in communities with mixed languages used.
     */
    communication?: Array<CodeableConcept>;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: Array<CodeableConcept>;
    appointmentRequired?: boolean;
    /**
     * A collection of times that the healthcare service is available.
     */
    availability?: Array<Availability>;
    /**
     * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
     */
    endpoint?: Array<Reference>;
}