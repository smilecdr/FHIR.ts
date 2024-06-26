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
import { ConceptMapDependsOn } from './conceptMapDependsOn';
import { ConceptMapProperty1 } from './conceptMapProperty1';
import { Extension } from './extension';

/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export interface ConceptMapTarget { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    code?: Code;
    display?: string;
    valueSet?: Canonical;
    relationship?: Code;
    comment?: string;
    /**
     * A property value for this source -> target mapping.
     */
    property?: Array<ConceptMapProperty1>;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified data attribute can be resolved, and it has the specified value.
     */
    dependsOn?: Array<ConceptMapDependsOn>;
    /**
     * Product is the output of a ConceptMap that provides additional values that go in other attributes / data elemnts of the target data.
     */
    product?: Array<ConceptMapDependsOn>;
}