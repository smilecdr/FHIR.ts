/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';

/**
 * This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.
 */
export interface ArtifactAssessment {
  resourceType: 'ArtifactAssessment';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;
  /** Contained, inline Resources (0..*) */
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Additional identifier for the artifact assessment (0..*) */
  identifier?: Array<Identifier>;
  /** A short title for the assessment for use in displaying and selecting (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** How to cite the comment or rating (0..1) */
  citeAsReference?: Reference;
  /** How to cite the comment or rating (0..1) */
  citeAsMarkdown?: string;
  /** Id and extensions of the primitive `citeAsMarkdown`. */
  _citeAsMarkdown?: Element;
  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** When the artifact assessment was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the artifact assessment was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** The artifact assessed, commented upon or rated (1..1) */
  artifactReference?: Reference;
  /** The artifact assessed, commented upon or rated (1..1) */
  artifactCanonical?: string;
  /** Id and extensions of the primitive `artifactCanonical`. */
  _artifactCanonical?: Element;
  /** The artifact assessed, commented upon or rated (1..1) */
  artifactUri?: string;
  /** Id and extensions of the primitive `artifactUri`. */
  _artifactUri?: Element;
  /** Comment, classifier, or rating content (0..*) */
  content?: Array<ArtifactAssessmentContent>;
  /** submitted | triaged | waiting-for-input | resolved-no-change | resolved-change-required | deferred | duplicate | applied | published | entered-in-error (0..1) */
  workflowStatus?: ArtifactAssessment.WorkflowStatusEnum;
  /** Id and extensions of the primitive `workflowStatus`. */
  _workflowStatus?: Element;
  /** unresolved | not-persuasive | persuasive | persuasive-with-modification | not-persuasive-with-modification (0..1) */
  disposition?: ArtifactAssessment.DispositionEnum;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
}

export namespace ArtifactAssessment {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/artifactassessment-workflow-status */
  export type WorkflowStatusEnum =
    | 'submitted'
    | 'triaged'
    | 'waiting-for-input'
    | 'resolved-no-change'
    | 'resolved-change-required'
    | 'deferred'
    | 'duplicate'
    | 'applied'
    | 'published'
    | 'entered-in-error';
  export const WorkflowStatusEnum = {
    Submitted: 'submitted' as WorkflowStatusEnum,
    Triaged: 'triaged' as WorkflowStatusEnum,
    WaitingForInput: 'waiting-for-input' as WorkflowStatusEnum,
    ResolvedNoChange: 'resolved-no-change' as WorkflowStatusEnum,
    ResolvedChangeRequired: 'resolved-change-required' as WorkflowStatusEnum,
    Deferred: 'deferred' as WorkflowStatusEnum,
    Duplicate: 'duplicate' as WorkflowStatusEnum,
    Applied: 'applied' as WorkflowStatusEnum,
    Published: 'published' as WorkflowStatusEnum,
    EnteredInError: 'entered-in-error' as WorkflowStatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/artifactassessment-disposition */
  export type DispositionEnum =
    | 'unresolved'
    | 'not-persuasive'
    | 'persuasive'
    | 'persuasive-with-modification'
    | 'not-persuasive-with-modification';
  export const DispositionEnum = {
    Unresolved: 'unresolved' as DispositionEnum,
    NotPersuasive: 'not-persuasive' as DispositionEnum,
    Persuasive: 'persuasive' as DispositionEnum,
    PersuasiveWithModification: 'persuasive-with-modification' as DispositionEnum,
    NotPersuasiveWithModification: 'not-persuasive-with-modification' as DispositionEnum,
  };
}

/**
 * Comment, classifier, or rating content
 */
export interface ArtifactAssessmentContent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** comment | classifier | rating | container | response | change-request (0..1) */
  informationType?: ArtifactAssessmentContent.InformationTypeEnum;
  /** Id and extensions of the primitive `informationType`. */
  _informationType?: Element;
  /** Brief summary of the content (0..1) */
  summary?: string;
  /** Id and extensions of the primitive `summary`. */
  _summary?: Element;
  /** What type of content (0..1) */
  type?: CodeableConcept;
  /** Rating, classifier, or assessment (0..*) */
  classifier?: Array<CodeableConcept>;
  /** Quantitative rating (0..1) */
  quantity?: Quantity;
  /** Who authored the content (0..1) */
  author?: Reference;
  /** What the comment is directed to (0..*) */
  path?: Array<string>;
  /** Id and extensions of the primitive `path`. */
  _path?: Array<Element | null>;
  /** Additional information (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Acceptable to publicly share the resource content (0..1) */
  freeToShare?: boolean;
  /** Id and extensions of the primitive `freeToShare`. */
  _freeToShare?: Element;
  /** Contained content (0..*) */
  component?: Array<ArtifactAssessmentContent>;
}

export namespace ArtifactAssessmentContent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/artifactassessment-information-type */
  export type InformationTypeEnum =
    'comment' | 'classifier' | 'rating' | 'container' | 'response' | 'change-request';
  export const InformationTypeEnum = {
    Comment: 'comment' as InformationTypeEnum,
    Classifier: 'classifier' as InformationTypeEnum,
    Rating: 'rating' as InformationTypeEnum,
    Container: 'container' as InformationTypeEnum,
    Response: 'response' as InformationTypeEnum,
    ChangeRequest: 'change-request' as InformationTypeEnum,
  };
}
