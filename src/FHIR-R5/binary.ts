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
import { Base64Binary } from './base64Binary';
import { Code } from './code';
import { Id } from './id';
import { Meta } from './meta';
import { Reference } from './reference';
import { Uri } from './uri';

/**
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export interface Binary { 
    /**
     * This is a Binary resource
     */
    resourceType: any;
    id?: Id;
    meta?: Meta;
    implicitRules?: Uri;
    language?: Code;
    contentType?: Code;
    securityContext?: Reference;
    data?: Base64Binary;
}