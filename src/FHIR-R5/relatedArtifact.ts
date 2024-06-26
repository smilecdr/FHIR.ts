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
import { Attachment } from './attachment';
import { Canonical } from './canonical';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { Extension } from './extension';
import { Markdown } from './markdown';
import { Reference } from './reference';

/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export interface RelatedArtifact { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * The type of relationship to the related artifact.
     */
    type?: string;
    /**
     * Provides additional classifiers of the related artifact.
     */
    classifier?: Array<CodeableConcept>;
    label?: string;
    display?: string;
    citation?: Markdown;
    document?: Attachment;
    resource?: Canonical;
    resourceReference?: Reference;
    publicationStatus?: Code;
    publicationDate?: string;
}