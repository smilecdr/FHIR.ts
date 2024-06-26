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
import { Age } from './age';
import { AllergyIntoleranceParticipant } from './allergyIntoleranceParticipant';
import { AllergyIntoleranceReaction } from './allergyIntoleranceReaction';
import { Annotation } from './annotation';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { DateTime } from './dateTime';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Range } from './range';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * Risk of harmful or undesirable physiological response which is specific to an individual and associated with exposure to a substance.
 */
export interface AllergyIntolerance { 
    /**
     * This is a AllergyIntolerance resource
     */
    resourceType: 'AllergyIntolerance';
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
     * Business identifiers assigned to this AllergyIntolerance by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: Array<Identifier>;
    clinicalStatus?: CodeableConcept;
    verificationStatus?: CodeableConcept;
    type?: CodeableConcept;
    /**
     * Category of the identified substance.
     */
    category?: Array<Code>;
    criticality?: Code;
    code?: CodeableConcept;
    patient: Reference;
    encounter?: Reference;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetDateTime?: string;
    onsetAge?: Age;
    onsetPeriod?: Period;
    onsetRange?: Range;
    /**
     * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
     */
    onsetString?: string;
    recordedDate?: Date;
    /**
     * Indicates who or what participated in the activities related to the allergy or intolerance and how they were involved.
     */
    participant?: Array<AllergyIntoleranceParticipant>;
    lastOccurrence?: Date;
    /**
     * Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
     */
    note?: Array<Annotation>;
    /**
     * Details about each adverse reaction event linked to exposure to the identified substance.
     */
    reaction?: Array<AllergyIntoleranceReaction>;
}