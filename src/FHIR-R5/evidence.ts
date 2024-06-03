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
import { EvidenceCertainty } from './evidenceCertainty';
import { EvidenceStatistic } from './evidenceStatistic';
import { EvidenceVariableDefinition } from './evidenceVariableDefinition';
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
 * The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
 */
export interface Evidence { 
    /**
     * This is a Evidence resource
     */
    resourceType: 'Evidence';
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
     * A formal identifier that is used to identify this summary when it is represented in other formats, or referenced in a specification, model, design or an instance.
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
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate evidence instances.
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
     * Link or citation to artifact associated with the summary.
     */
    relatedArtifact?: Array<RelatedArtifact>;
    citeAsReference?: Reference;
    /**
     * Citation Resource or display of suggested citation for this evidence.
     */
    citeAsMarkdown?: string;
    assertion?: Markdown;
    /**
     * Footnotes and/or explanatory notes.
     */
    note?: Array<Annotation>;
    /**
     * Evidence variable such as population, exposure, or outcome.
     */
    variableDefinition: Array<EvidenceVariableDefinition>;
    synthesisType?: CodeableConcept;
    /**
     * The design of the study that produced this evidence. The design is described with any number of study design characteristics.
     */
    studyDesign?: Array<CodeableConcept>;
    /**
     * Values and parameters for a single statistic.
     */
    statistic?: Array<EvidenceStatistic>;
    /**
     * Assessment of certainty, confidence in the estimates, or quality of the evidence.
     */
    certainty?: Array<EvidenceCertainty>;
}