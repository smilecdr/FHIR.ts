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
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { Extension } from './extension';
import { Narrative } from './narrative';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 */
export interface EvidenceReportSection { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    title?: string;
    focus?: CodeableConcept;
    focusReference?: Reference;
    /**
     * Identifies who is responsible for the information in this section, not necessarily who typed it in.
     */
    author?: Array<Reference>;
    text?: Narrative;
    mode?: Code;
    orderedBy?: CodeableConcept;
    /**
     * Specifies any type of classification of the evidence report.
     */
    entryClassifier?: Array<CodeableConcept>;
    /**
     * A reference to the actual resource from which the narrative in the section is derived.
     */
    entryReference?: Array<Reference>;
    /**
     * Quantity as content.
     */
    entryQuantity?: Array<Quantity>;
    emptyReason?: CodeableConcept;
    /**
     * A nested sub-section within this section.
     */
    section?: Array<EvidenceReportSection>;
}