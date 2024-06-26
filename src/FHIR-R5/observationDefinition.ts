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
import { Meta } from './meta';
import { Narrative } from './narrative';
import { ObservationDefinitionComponent } from './observationDefinitionComponent';
import { ObservationDefinitionQualifiedValue } from './observationDefinitionQualifiedValue';
import { Period } from './period';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { ResourceList } from './resourceList';
import { Uri } from './uri';
import { UsageContext } from './usageContext';

/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export interface ObservationDefinition { 
    /**
     * This is a ObservationDefinition resource
     */
    resourceType: 'ObservationDefinition';
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
    identifier?: Identifier;
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
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate ObservationDefinition instances.
     */
    useContext?: Array<UsageContext>;
    /**
     * A jurisdiction in which the ObservationDefinition is intended to be used.
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
     * An individiual or organization primarily involved in the creation and maintenance of the {{title}}.
     */
    author?: Array<ContactDetail>;
    /**
     * An individual or organization primarily responsible for internal coherence of the {{title}}.
     */
    editor?: Array<ContactDetail>;
    /**
     * An individual or organization asserted by the publisher to be primarily responsible for review of some aspect of the {{title}}.
     */
    reviewer?: Array<ContactDetail>;
    /**
     * An individual or organization asserted by the publisher to be responsible for officially endorsing the {{title}} for use in some setting.
     */
    endorser?: Array<ContactDetail>;
    /**
     * Related artifacts such as additional documentation, justification, dependencies, bibliographic references, and predecessor and successor artifacts.
     */
    relatedArtifact?: Array<RelatedArtifact>;
    /**
     * The canonical URL pointing to another FHIR-defined ObservationDefinition that is adhered to in whole or in part by this definition.
     */
    derivedFromCanonical?: Array<Canonical>;
    /**
     * The URL pointing to an externally-defined observation definition, guideline or other definition that is adhered to in whole or in part by this definition.
     */
    derivedFromUri?: Array<Uri>;
    /**
     * A code that describes the intended kind of subject of Observation instances conforming to this ObservationDefinition.
     */
    subject?: Array<CodeableConcept>;
    performerType?: CodeableConcept;
    /**
     * A code that classifies the general type of observation.
     */
    category?: Array<CodeableConcept>;
    code: CodeableConcept;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: Array<Code>;
    multipleResultsAllowed?: boolean;
    bodySite?: CodeableConcept;
    method?: CodeableConcept;
    /**
     * The kind of specimen that this type of observation is produced on.
     */
    specimen?: Array<Reference>;
    /**
     * The measurement model of device or actual device used to produce observations of this type.
     */
    device?: Array<Reference>;
    preferredReportName?: string;
    /**
     * Units allowed for the valueQuantity element in the instance observations conforming to this ObservationDefinition.
     */
    permittedUnit?: Array<Coding>;
    /**
     * A set of qualified values associated with a context and a set of conditions -  provides a range for quantitative and ordinal observations and a collection of value sets for qualitative observations.
     */
    qualifiedValue?: Array<ObservationDefinitionQualifiedValue>;
    /**
     * This ObservationDefinition defines a group  observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
     */
    hasMember?: Array<Reference>;
    /**
     * Some observations have multiple component observations, expressed as separate code value pairs.
     */
    component?: Array<ObservationDefinitionComponent>;
}