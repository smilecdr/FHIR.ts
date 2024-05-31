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
import { AuditEventAgent } from './auditEventAgent';
import { AuditEventEntity } from './auditEventEntity';
import { AuditEventOutcome } from './auditEventOutcome';
import { AuditEventSource } from './auditEventSource';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { Extension } from './extension';
import { Id } from './id';
import { Instant } from './instant';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.
 */
export interface AuditEvent { 
    /**
     * This is a AuditEvent resource
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
     * Classification of the type of event.
     */
    category?: Array<CodeableConcept>;
    code: CodeableConcept;
    action?: Code;
    severity?: Code;
    occurredPeriod?: Period;
    /**
     * The time or period during which the activity occurred.
     */
    occurredDateTime?: string;
    recorded?: Instant;
    outcome?: AuditEventOutcome;
    /**
     * The authorization (e.g., PurposeOfUse) that was used during the event being recorded.
     */
    authorization?: Array<CodeableConcept>;
    /**
     * Allows tracing of authorizatino for the events and tracking whether proposals/recommendations were acted upon.
     */
    basedOn?: Array<Reference>;
    patient?: Reference;
    encounter?: Reference;
    /**
     * An actor taking an active role in the event or activity that is logged.
     */
    agent: Array<AuditEventAgent>;
    source: AuditEventSource;
    /**
     * Specific instances of data or objects that have been accessed.
     */
    entity?: Array<AuditEventEntity>;
}