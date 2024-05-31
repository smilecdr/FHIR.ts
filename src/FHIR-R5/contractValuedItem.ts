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
import { Decimal } from './decimal';
import { Extension } from './extension';
import { Identifier } from './identifier';
import { Money } from './money';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { UnsignedInt } from './unsignedInt';

/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export interface ContractValuedItem { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    entityCodeableConcept?: CodeableConcept;
    entityReference?: Reference;
    identifier?: Identifier;
    effectiveTime?: Date;
    quantity?: Quantity;
    unitPrice?: Money;
    factor?: Decimal;
    points?: Decimal;
    net?: Money;
    payment?: string;
    paymentDate?: Date;
    responsible?: Reference;
    recipient?: Reference;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
     */
    linkId?: Array<string>;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: Array<UnsignedInt>;
}