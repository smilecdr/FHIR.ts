/**
 * CDS Hooks
 * The following is auto generated class definition.
 *
 * OpenAPI spec version: 3.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CdsServiceRequestAuthorizationJson } from './cdsServiceRequestAuthorizationJson';
import { CdsServiceRequestContextJson } from './cdsServiceRequestContextJson';
import { IBaseResource } from './iBaseResource';

export interface CdsServiceRequestJson { 
    extension: any;
    hook: string;
    hookInstance: string;
    fhirServer?: string;
    fhirAuthorization?: CdsServiceRequestAuthorizationJson;
    context: CdsServiceRequestContextJson;
    prefetch?: { [key: string]: IBaseResource; };
}