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
import { Attachment } from './attachment';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { DiagnosticReportMedia } from './diagnosticReportMedia';
import { DiagnosticReportSupportingInfo } from './diagnosticReportSupportingInfo';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Instant } from './instant';
import { Markdown } from './markdown';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * The findings and interpretation of diagnostic tests performed on patients, groups of patients, products, substances, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. The report also includes non-clinical context such as batch analysis and stability reporting of products and substances.
 */
export interface DiagnosticReport { 
    /**
     * This is a DiagnosticReport resource
     */
    resourceType: 'DiagnosticReport';
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
     * Identifiers assigned to this report by the performer or other systems.
     */
    identifier?: Array<Identifier>;
    /**
     * Details concerning a service requested.
     */
    basedOn?: Array<Reference>;
    status?: Code;
    /**
     * A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
     */
    category?: Array<CodeableConcept>;
    code: CodeableConcept;
    subject?: Reference;
    encounter?: Reference;
    /**
     * The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
     */
    effectiveDateTime?: string;
    effectivePeriod?: Period;
    issued?: Instant;
    /**
     * The diagnostic service that is responsible for issuing the report.
     */
    performer?: Array<Reference>;
    /**
     * The practitioner or organization that is responsible for the report's conclusions and interpretations.
     */
    resultsInterpreter?: Array<Reference>;
    /**
     * Details about the specimens on which this diagnostic report is based.
     */
    specimen?: Array<Reference>;
    /**
     * [Observations](observation.html)  that are part of this diagnostic report.
     */
    result?: Array<Reference>;
    /**
     * Comments about the diagnostic report.
     */
    note?: Array<Annotation>;
    /**
     * One or more links to full details of any study performed during the diagnostic investigation. An ImagingStudy might comprise a set of radiologic images obtained via a procedure that are analyzed as a group. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images. A GenomicStudy might comprise one or more analyses, each serving a specific purpose. These analyses may vary in method (e.g., karyotyping, CNV, or SNV detection), performer, software, devices used, or regions targeted.
     */
    study?: Array<Reference>;
    /**
     * This backbone element contains supporting information that was used in the creation of the report not included in the results already included in the report.
     */
    supportingInfo?: Array<DiagnosticReportSupportingInfo>;
    /**
     * A list of key images or data associated with this report. The images or data are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    media?: Array<DiagnosticReportMedia>;
    composition?: Reference;
    conclusion?: Markdown;
    /**
     * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusionCode?: Array<CodeableConcept>;
    /**
     * Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
     */
    presentedForm?: Array<Attachment>;
}