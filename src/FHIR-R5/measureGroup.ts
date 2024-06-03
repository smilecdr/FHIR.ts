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
import { Canonical } from './canonical';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { Extension } from './extension';
import { Markdown } from './markdown';
import { MeasurePopulation } from './measurePopulation';
import { MeasureStratifier } from './measureStratifier';
import { Reference } from './reference';

/**
 * The Measure resource provides the definition of a quality measure.
 */
export interface MeasureGroup { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    linkId?: string;
    code?: CodeableConcept;
    description?: Markdown;
    /**
     * Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.
     */
    type?: Array<CodeableConcept>;
    subjectCodeableConcept?: CodeableConcept;
    subjectReference?: Reference;
    basis?: Code;
    scoring?: CodeableConcept;
    scoringUnit?: CodeableConcept;
    rateAggregation?: Markdown;
    improvementNotation?: CodeableConcept;
    /**
     * A reference to a Library resource containing the formal logic used by the measure group.
     */
    library?: Array<Canonical>;
    /**
     * A population criteria for the measure.
     */
    population?: Array<MeasurePopulation>;
    /**
     * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.
     */
    stratifier?: Array<MeasureStratifier>;
}