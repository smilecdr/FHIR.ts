/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Reference } from './reference';

/**
 * RelatedArtifact Type: Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export interface RelatedArtifact {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as (1..1) */
  type?: RelatedArtifact.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Additional classifiers (0..*) */
  classifier?: Array<CodeableConcept>;
  /** Short label (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;
  /** Brief description of the related artifact (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Bibliographic citation for the artifact (0..1) */
  citation?: string;
  /** Id and extensions of the primitive `citation`. */
  _citation?: Element;
  /** What document is being referenced (0..1) */
  document?: Attachment;
  /** What artifact is being referenced (0..1) */
  resource?: string;
  /** Id and extensions of the primitive `resource`. */
  _resource?: Element;
  /** What artifact, if not a conformance resource (0..1) */
  resourceReference?: Reference;
  /** draft | active | retired | unknown (0..1) */
  publicationStatus?: RelatedArtifact.PublicationStatusEnum;
  /** Id and extensions of the primitive `publicationStatus`. */
  _publicationStatus?: Element;
  /** Date of publication of the artifact being referred to (0..1) */
  publicationDate?: string;
  /** Id and extensions of the primitive `publicationDate`. */
  _publicationDate?: Element;
}

export namespace RelatedArtifact {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/related-artifact-type */
  export type TypeEnum =
    | 'documentation'
    | 'justification'
    | 'citation'
    | 'predecessor'
    | 'successor'
    | 'derived-from'
    | 'depends-on'
    | 'composed-of'
    | 'part-of'
    | 'amends'
    | 'amended-with'
    | 'appends'
    | 'appended-with'
    | 'cites'
    | 'cited-by'
    | 'comments-on'
    | 'comment-in'
    | 'contains'
    | 'contained-in'
    | 'corrects'
    | 'correction-in'
    | 'replaces'
    | 'replaced-with'
    | 'retracts'
    | 'retracted-by'
    | 'signs'
    | 'similar-to'
    | 'supports'
    | 'supported-with'
    | 'transforms'
    | 'transformed-into'
    | 'transformed-with'
    | 'documents'
    | 'specification-of'
    | 'created-with'
    | 'cite-as';
  export const TypeEnum = {
    Documentation: 'documentation' as TypeEnum,
    Justification: 'justification' as TypeEnum,
    Citation: 'citation' as TypeEnum,
    Predecessor: 'predecessor' as TypeEnum,
    Successor: 'successor' as TypeEnum,
    DerivedFrom: 'derived-from' as TypeEnum,
    DependsOn: 'depends-on' as TypeEnum,
    ComposedOf: 'composed-of' as TypeEnum,
    PartOf: 'part-of' as TypeEnum,
    Amends: 'amends' as TypeEnum,
    AmendedWith: 'amended-with' as TypeEnum,
    Appends: 'appends' as TypeEnum,
    AppendedWith: 'appended-with' as TypeEnum,
    Cites: 'cites' as TypeEnum,
    CitedBy: 'cited-by' as TypeEnum,
    CommentsOn: 'comments-on' as TypeEnum,
    CommentIn: 'comment-in' as TypeEnum,
    Contains: 'contains' as TypeEnum,
    ContainedIn: 'contained-in' as TypeEnum,
    Corrects: 'corrects' as TypeEnum,
    CorrectionIn: 'correction-in' as TypeEnum,
    Replaces: 'replaces' as TypeEnum,
    ReplacedWith: 'replaced-with' as TypeEnum,
    Retracts: 'retracts' as TypeEnum,
    RetractedBy: 'retracted-by' as TypeEnum,
    Signs: 'signs' as TypeEnum,
    SimilarTo: 'similar-to' as TypeEnum,
    Supports: 'supports' as TypeEnum,
    SupportedWith: 'supported-with' as TypeEnum,
    Transforms: 'transforms' as TypeEnum,
    TransformedInto: 'transformed-into' as TypeEnum,
    TransformedWith: 'transformed-with' as TypeEnum,
    Documents: 'documents' as TypeEnum,
    SpecificationOf: 'specification-of' as TypeEnum,
    CreatedWith: 'created-with' as TypeEnum,
    CiteAs: 'cite-as' as TypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type PublicationStatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const PublicationStatusEnum = {
    Draft: 'draft' as PublicationStatusEnum,
    Active: 'active' as PublicationStatusEnum,
    Retired: 'retired' as PublicationStatusEnum,
    Unknown: 'unknown' as PublicationStatusEnum,
  };
}
