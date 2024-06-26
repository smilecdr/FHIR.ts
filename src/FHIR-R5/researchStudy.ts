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
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Markdown } from './markdown';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { ResearchStudyAssociatedParty } from './researchStudyAssociatedParty';
import { ResearchStudyComparisonGroup } from './researchStudyComparisonGroup';
import { ResearchStudyLabel } from './researchStudyLabel';
import { ResearchStudyObjective } from './researchStudyObjective';
import { ResearchStudyOutcomeMeasure } from './researchStudyOutcomeMeasure';
import { ResearchStudyProgressStatus } from './researchStudyProgressStatus';
import { ResearchStudyRecruitment } from './researchStudyRecruitment';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future.
 */
export interface ResearchStudy { 
    /**
     * This is a ResearchStudy resource
     */
    resourceType: 'ResearchStudy';
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
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: Array<Identifier>;
    version?: string;
    name?: string;
    title?: string;
    /**
     * Additional names for the study.
     */
    label?: Array<ResearchStudyLabel>;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: Array<Reference>;
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: Array<Reference>;
    /**
     * Citations, references, URLs and other related documents.  When using relatedArtifact to share URLs, the relatedArtifact.type will often be set to one of \"documentation\" or \"supported-with\" and the URL value will often be in relatedArtifact.document.url but another possible location is relatedArtifact.resource when it is a canonical URL.
     */
    relatedArtifact?: Array<RelatedArtifact>;
    date?: Date;
    status?: Code;
    primaryPurposeType?: CodeableConcept;
    phase?: CodeableConcept;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    studyDesign?: Array<CodeableConcept>;
    /**
     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus?: Array<CodeableReference>;
    /**
     * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion \"healthy volunteer\", but the target condition code would be a Lupus SNOMED code.
     */
    condition?: Array<CodeableConcept>;
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword?: Array<CodeableConcept>;
    /**
     * A country, state or other area where the study is taking place rather than its precise geographic location or address.
     */
    region?: Array<CodeableConcept>;
    descriptionSummary?: Markdown;
    description?: Markdown;
    period?: Period;
    /**
     * A facility in which study activities are conducted.
     */
    site?: Array<Reference>;
    /**
     * Comments made about the study by the performer, subject or other participants.
     */
    note?: Array<Annotation>;
    /**
     * Additional grouping mechanism or categorization of a research study. Example: FDA regulated device, FDA regulated drug, MPG Paragraph 23b (a German legal requirement), IRB-exempt, etc. Implementation Note: do not use the classifier element to support existing semantics that are already supported thru explicit elements in the resource.
     */
    classifier?: Array<CodeableConcept>;
    /**
     * Sponsors, collaborators, and other parties.
     */
    associatedParty?: Array<ResearchStudyAssociatedParty>;
    /**
     * Status of study with time for that status.
     */
    progressStatus?: Array<ResearchStudyProgressStatus>;
    whyStopped?: CodeableConcept;
    recruitment?: ResearchStudyRecruitment;
    /**
     * Describes an expected event or sequence of events for one of the subjects of a study. E.g. for a living subject: exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up. E.g. for a stability study: {store sample from lot A at 25 degrees for 1 month}, {store sample from lot A at 40 degrees for 1 month}.
     */
    comparisonGroup?: Array<ResearchStudyComparisonGroup>;
    /**
     * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
     */
    objective?: Array<ResearchStudyObjective>;
    /**
     * An \"outcome measure\", \"endpoint\", \"effect measure\" or \"measure of effect\" is a specific measurement or observation used to quantify the effect of experimental variables on the participants in a study, or for observational studies, to describe patterns of diseases or traits or associations with exposures, risk factors or treatment.
     */
    outcomeMeasure?: Array<ResearchStudyOutcomeMeasure>;
    /**
     * Link to one or more sets of results generated by the study.  Could also link to a research registry holding the results such as ClinicalTrials.gov.
     */
    result?: Array<Reference>;
}