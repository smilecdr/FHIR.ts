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
import { CodeableReference } from './codeableReference';
import { DateTime } from './dateTime';
import { Duration } from './duration';
import { EncounterAdmission } from './encounterAdmission';
import { EncounterDiagnosis } from './encounterDiagnosis';
import { EncounterLocation } from './encounterLocation';
import { EncounterParticipant } from './encounterParticipant';
import { EncounterReason } from './encounterReason';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';
import { VirtualServiceDetail } from './virtualServiceDetail';

/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.  Encounter is primarily used to record information about the actual activities that occurred, where Appointment is used to record planned activities.
 */
export interface Encounter { 
    /**
     * This is a Encounter resource
     */
    resourceType: 'Encounter';
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
     * Identifier(s) by which this encounter is known.
     */
    identifier?: Array<Identifier>;
    status?: Code;
    /**
     * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
     */
    _class?: Array<CodeableConcept>;
    priority?: CodeableConcept;
    /**
     * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
     */
    type?: Array<CodeableConcept>;
    /**
     * Broad categorization of the service that is to be provided (e.g. cardiology).
     */
    serviceType?: Array<CodeableReference>;
    subject?: Reference;
    subjectStatus?: CodeableConcept;
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */
    episodeOfCare?: Array<Reference>;
    /**
     * The request this encounter satisfies (e.g. incoming referral or procedure request).
     */
    basedOn?: Array<Reference>;
    /**
     * The group(s) of individuals, organizations that are allocated to participate in this encounter. The participants backbone will record the actuals of when these individuals participated during the encounter.
     */
    careTeam?: Array<Reference>;
    partOf?: Reference;
    serviceProvider?: Reference;
    /**
     * The list of people responsible for providing the service.
     */
    participant?: Array<EncounterParticipant>;
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: Array<Reference>;
    /**
     * Connection details of a virtual service (e.g. conference call).
     */
    virtualService?: Array<VirtualServiceDetail>;
    actualPeriod?: Period;
    plannedStartDate?: Date;
    plannedEndDate?: Date;
    length?: Duration;
    /**
     * The list of medical reasons that are expected to be addressed during the episode of care.
     */
    reason?: Array<EncounterReason>;
    /**
     * The list of diagnosis relevant to this encounter.
     */
    diagnosis?: Array<EncounterDiagnosis>;
    /**
     * The set of accounts that may be used for billing for this Encounter.
     */
    account?: Array<Reference>;
    /**
     * Diet preferences reported by the patient.
     */
    dietPreference?: Array<CodeableConcept>;
    /**
     * Any special requests that have been made for this encounter, such as the provision of specific equipment or other things.
     */
    specialArrangement?: Array<CodeableConcept>;
    /**
     * Special courtesies that may be provided to the patient during the encounter (VIP, board member, professional courtesy).
     */
    specialCourtesy?: Array<CodeableConcept>;
    admission?: EncounterAdmission;
    /**
     * List of locations where  the patient has been during this encounter.
     */
    location?: Array<EncounterLocation>;
}