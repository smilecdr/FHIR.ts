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
import { ClinicalUseDefinitionOtherTherapy } from './clinicalUseDefinitionOtherTherapy';
import { CodeableReference } from './codeableReference';
import { Expression } from './expression';
import { Extension } from './extension';
import { Range } from './range';
import { Reference } from './reference';

/**
 * A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 */
export interface ClinicalUseDefinitionIndication { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    diseaseSymptomProcedure?: CodeableReference;
    diseaseStatus?: CodeableReference;
    /**
     * A comorbidity (concurrent condition) or coinfection as part of the indication.
     */
    comorbidity?: Array<CodeableReference>;
    intendedEffect?: CodeableReference;
    durationRange?: Range;
    /**
     * Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months).
     */
    durationString?: string;
    /**
     * An unwanted side effect or negative outcome that may happen if you use the drug (or other subject of this resource) for this indication.
     */
    undesirableEffect?: Array<Reference>;
    applicability?: Expression;
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
     */
    otherTherapy?: Array<ClinicalUseDefinitionOtherTherapy>;
}