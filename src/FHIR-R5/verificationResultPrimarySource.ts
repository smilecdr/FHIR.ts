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
import { DateTime } from './dateTime';
import { Extension } from './extension';
import { Reference } from './reference';

/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export interface VerificationResultPrimarySource { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    who?: Reference;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: Array<CodeableConcept>;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: Array<CodeableConcept>;
    validationStatus?: CodeableConcept;
    validationDate?: Date;
    canPushUpdates?: CodeableConcept;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: Array<CodeableConcept>;
}