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
import { AvailabilityAvailableTime } from './availabilityAvailableTime';
import { AvailabilityNotAvailableTime } from './availabilityNotAvailableTime';
import { Extension } from './extension';

/**
 * Availability data for an {item}.
 */
export interface Availability { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * Times the {item} is available.
     */
    availableTime?: Array<AvailabilityAvailableTime>;
    /**
     * Not available during this time due to provided reason.
     */
    notAvailableTime?: Array<AvailabilityNotAvailableTime>;
}