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
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DateTime } from './dateTime';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Markdown } from './markdown';
import { MeasureGroup } from './measureGroup';
import { MeasureSupplementalData } from './measureSupplementalData';
import { MeasureTerm } from './measureTerm';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { ResourceList } from './resourceList';
import { Uri } from './uri';
import { UsageContext } from './usageContext';

/**
 * The Measure resource provides the definition of a quality measure.
 */
export interface Measure { 
    /**
     * This is a Measure resource
     */
    resourceType: 'Measure';
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
     * A formal identifier that is used to identify this measure when it is represented in other formats, or referenced in a specification, model, design or an instance.
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
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate measure instances.
     */
    useContext?: Array<UsageContext>;
    /**
     * A legal or geographic region in which the measure is intended to be used.
     */
    jurisdiction?: Array<CodeableConcept>;
    purpose?: Markdown;
    copyright?: Markdown;
    copyrightLabel?: string;
    approvalDate?: string;
    lastReviewDate?: string;
    effectivePeriod?: Period;
    /**
     * Descriptive topics related to the content of the measure. Topics provide a high-level categorization grouping types of measures that can be useful for filtering and searching.
     */
    topic?: Array<CodeableConcept>;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: Array<ContactDetail>;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: Array<ContactDetail>;
    /**
     * An individual or organization asserted by the publisher to be primarily responsible for review of some aspect of the content.
     */
    reviewer?: Array<ContactDetail>;
    /**
     * An individual or organization asserted by the publisher to be responsible for officially endorsing the content for use in some setting.
     */
    endorser?: Array<ContactDetail>;
    /**
     * Related artifacts such as additional documentation, justification, or bibliographic references.
     */
    relatedArtifact?: Array<RelatedArtifact>;
    subtitle?: string;
    subjectCodeableConcept?: CodeableConcept;
    subjectReference?: Reference;
    basis?: Code;
    usage?: Markdown;
    /**
     * A reference to a Library resource containing the formal logic used by the measure.
     */
    library?: Array<Canonical>;
    disclaimer?: Markdown;
    scoring?: CodeableConcept;
    scoringUnit?: CodeableConcept;
    compositeScoring?: CodeableConcept;
    /**
     * Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.
     */
    type?: Array<CodeableConcept>;
    riskAdjustment?: Markdown;
    rateAggregation?: Markdown;
    rationale?: Markdown;
    clinicalRecommendationStatement?: Markdown;
    improvementNotation?: CodeableConcept;
    /**
     * Provides a description of an individual term used within the measure.
     */
    term?: Array<MeasureTerm>;
    guidance?: Markdown;
    /**
     * A group of population criteria for the measure.
     */
    group?: Array<MeasureGroup>;
    /**
     * The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path.
     */
    supplementalData?: Array<MeasureSupplementalData>;
}