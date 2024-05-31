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
import { Extension } from './extension';
import { Period } from './period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world. The ISO21090-codedString may be used to provide a coded representation of the contents of strings in an Address.
 */
export interface Address { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * The purpose of this address.
     */
    use?: string;
    /**
     * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
     */
    type?: string;
    text?: string;
    /**
     * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
     */
    line?: Array<string>;
    city?: string;
    district?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    period?: Period;
}