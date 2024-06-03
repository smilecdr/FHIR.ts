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
import { EpisodeOfCareDiagnosis } from './episodeOfCareDiagnosis';
import { EpisodeOfCareReason } from './episodeOfCareReason';
import { EpisodeOfCareStatusHistory } from './episodeOfCareStatusHistory';
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
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export interface EpisodeOfCare { 
    /**
     * This is a EpisodeOfCare resource
     */
    resourceType: 'EpisodeOfCare';
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
     * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: Array<Identifier>;
    status?: Code;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: Array<EpisodeOfCareStatusHistory>;
    /**
     * A classification of the type of episode of care; e.g. specialist referral, disease management, type of funded care.
     */
    type?: Array<CodeableConcept>;
    /**
     * The list of medical reasons that are expected to be addressed during the episode of care.
     */
    reason?: Array<EpisodeOfCareReason>;
    /**
     * The list of medical conditions that were addressed during the episode of care.
     */
    diagnosis?: Array<EpisodeOfCareDiagnosis>;
    patient: Reference;
    managingOrganization?: Reference;
    period?: Period;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: Array<Reference>;
    careManager?: Reference;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    careTeam?: Array<Reference>;
    /**
     * The set of accounts that may be used for billing for this EpisodeOfCare.
     */
    account?: Array<Reference>;
}