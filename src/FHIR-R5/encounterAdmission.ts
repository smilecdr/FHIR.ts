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
import { CodeableConcept } from './codeableConcept';
import { Extension } from './extension';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.  Encounter is primarily used to record information about the actual activities that occurred, where Appointment is used to record planned activities.
 */
export interface EncounterAdmission { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    preAdmissionIdentifier?: Identifier;
    origin?: Reference;
    admitSource?: CodeableConcept;
    reAdmission?: CodeableConcept;
    destination?: Reference;
    dischargeDisposition?: CodeableConcept;
}