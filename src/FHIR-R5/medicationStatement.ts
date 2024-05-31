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
import { Annotation } from './annotation';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DateTime } from './dateTime';
import { Dosage } from './dosage';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Markdown } from './markdown';
import { MedicationStatementAdherence } from './medicationStatementAdherence';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Timing } from './timing';
import { Uri } from './uri';

/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.   The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medicationstatement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.  The MedicationStatement resource was previously called MedicationStatement.
 */
export interface MedicationStatement { 
    /**
     * This is a MedicationStatement resource
     */
    resourceType: any;
    id?: Id;
    meta?: Meta;
    implicitRules?: Uri;
    language?: Code;
    text?: Narrative;
    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope. This is allowed to be a Parameters resource if and only if it is referenced by a resource that provides context/meaning.
     */
    contained?: Array<ResourceList>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * Identifiers associated with this Medication Statement that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: Array<Identifier>;
    /**
     * A larger event of which this particular MedicationStatement is a component or step.
     */
    partOf?: Array<Reference>;
    status?: Code;
    /**
     * Type of medication statement (for example, drug classification like ATC, where meds would be administered, legal category of the medication.).
     */
    category?: Array<CodeableConcept>;
    medication: CodeableReference;
    subject: Reference;
    encounter?: Reference;
    /**
     * The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.adherence element is Not Taking).
     */
    effectiveDateTime?: string;
    effectivePeriod?: Period;
    effectiveTiming?: Timing;
    dateAsserted?: Date;
    /**
     * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
     */
    informationSource?: Array<Reference>;
    /**
     * Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.
     */
    derivedFrom?: Array<Reference>;
    /**
     * A concept, Condition or observation that supports why the medication is being/was taken.
     */
    reason?: Array<CodeableReference>;
    /**
     * Provides extra information about the Medication Statement that is not conveyed by the other attributes.
     */
    note?: Array<Annotation>;
    /**
     * Link to information that is relevant to a medication statement, for example, illicit drug use, gestational age, etc.
     */
    relatedClinicalInformation?: Array<Reference>;
    renderedDosageInstruction?: Markdown;
    /**
     * Indicates how the medication is/was or should be taken by the patient.
     */
    dosage?: Array<Dosage>;
    adherence?: MedicationStatementAdherence;
}