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
import { Annotation } from './annotation';
import { Canonical } from './canonical';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DateTime } from './dateTime';
import { Extension } from './extension';
import { FamilyMemberHistoryCondition } from './familyMemberHistoryCondition';
import { FamilyMemberHistoryParticipant } from './familyMemberHistoryParticipant';
import { FamilyMemberHistoryProcedure } from './familyMemberHistoryProcedure';
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
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export interface FamilyMemberHistory { 
    /**
     * This is a FamilyMemberHistory resource
     */
    resourceType: 'FamilyMemberHistory';
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
     * Business identifiers assigned to this family member history by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: Array<Identifier>;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
     */
    instantiatesCanonical?: Array<Canonical>;
    /**
     * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
     */
    instantiatesUri?: Array<Uri>;
    status?: Code;
    dataAbsentReason?: CodeableConcept;
    patient: Reference;
    date?: Date;
    /**
     * Indicates who or what participated in the activities related to the family member history and how they were involved.
     */
    participant?: Array<FamilyMemberHistoryParticipant>;
    name?: string;
    relationship: CodeableConcept;
    sex?: CodeableConcept;
    bornPeriod?: Period;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornDate?: string;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornString?: string;
    ageAge?: Age;
    ageRange?: Range;
    /**
     * The age of the relative at the time the family member history is recorded.
     */
    ageString?: string;
    estimatedAge?: boolean;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: boolean;
    deceasedAge?: Age;
    deceasedRange?: Range;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedDate?: string;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedString?: string;
    /**
     * Describes why the family member history occurred in coded or textual form, or Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
     */
    reason?: Array<CodeableReference>;
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: Array<Annotation>;
    /**
     * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
     */
    condition?: Array<FamilyMemberHistoryCondition>;
    /**
     * The significant Procedures (or procedure) that the family member had. This is a repeating section to allow a system to represent more than one procedure per resource, though there is nothing stopping multiple resources - one per procedure.
     */
    procedure?: Array<FamilyMemberHistoryProcedure>;
}