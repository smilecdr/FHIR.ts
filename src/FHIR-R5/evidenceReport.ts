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
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DateTime } from './dateTime';
import { EvidenceReportRelatesTo } from './evidenceReportRelatesTo';
import { EvidenceReportSection } from './evidenceReportSection';
import { EvidenceReportSubject } from './evidenceReportSubject';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Markdown } from './markdown';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { ResourceList } from './resourceList';
import { Uri } from './uri';
import { UsageContext } from './usageContext';

/**
 * The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 */
export interface EvidenceReport { 
    /**
     * This is a EvidenceReport resource
     */
    resourceType: 'EvidenceReport';
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
    url?: Uri;
    /**
     * A formal identifier that is used to identify this EvidenceReport when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: Array<Identifier>;
    version?: string;
    /**
     * Indicates the mechanism used to compare versions to determine which is more current.
     */
    versionAlgorithmString?: string;
    versionAlgorithmCoding?: Coding;
    name?: string;
    title?: string;
    status?: Code;
    experimental?: boolean;
    date?: Date;
    publisher?: string;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: Array<ContactDetail>;
    description?: Markdown;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate evidence report instances.
     */
    useContext?: Array<UsageContext>;
    /**
     * A legal or geographic region in which the {{title}} is intended to be used.
     */
    jurisdiction?: Array<CodeableConcept>;
    purpose?: Markdown;
    copyright?: Markdown;
    copyrightLabel?: string;
    approvalDate?: string;
    lastReviewDate?: string;
    effectivePeriod?: Period;
    /**
     * Descriptive topics related to the content of the {{title}}. Topics provide a high-level categorization as well as keywords for the {{title}} that can be useful for filtering and searching.
     */
    topic?: Array<CodeableConcept>;
    /**
     * An individiual, organization, or device primarily involved in the creation and maintenance of the content.
     */
    author?: Array<ContactDetail>;
    /**
     * An individiual, organization, or device primarily responsible for internal coherence of the content.
     */
    editor?: Array<ContactDetail>;
    /**
     * An individiual, organization, or device primarily responsible for review of some aspect of the content.
     */
    reviewer?: Array<ContactDetail>;
    /**
     * An individiual, organization, or device responsible for officially endorsing the content for use in some setting.
     */
    endorser?: Array<ContactDetail>;
    /**
     * Link, description or reference to artifact associated with the report.
     */
    relatedArtifact?: Array<RelatedArtifact>;
    /**
     * A formal identifier that is used to identify things closely related to this EvidenceReport.
     */
    relatedIdentifier?: Array<Identifier>;
    citeAsReference?: Reference;
    /**
     * Citation Resource or display of suggested citation for this report.
     */
    citeAsMarkdown?: string;
    type?: CodeableConcept;
    /**
     * Used for footnotes and annotations.
     */
    note?: Array<Annotation>;
    subject: EvidenceReportSubject;
    /**
     * Relationships that this composition has with other compositions or documents that already exist.
     */
    relatesTo?: Array<EvidenceReportRelatesTo>;
    /**
     * The root of the sections that make up the composition.
     */
    section?: Array<EvidenceReportSection>;
}