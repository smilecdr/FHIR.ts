/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this “document” encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare. The DocumentReference resource provides metadata about the document so that the document can be discovered and managed. The actual content may be inline base64 encoded data or provided by direct reference.
 */
export interface DocumentReference {
  resourceType: 'DocumentReference';
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
  /** Business identifiers for the document (0..*) */
  identifier?: Array<Identifier>;
  /** An explicitly assigned identifer of a variation of the content in the DocumentReference (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Procedure that caused this media to be created (0..*) */
  basedOn?: Array<Reference>;
  /** current | superseded | entered-in-error (1..1) */
  status?: DocumentReference.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown (0..1) */
  docStatus?: DocumentReference.DocStatusEnum;
  /** Id and extensions of the primitive `docStatus`. */
  _docStatus?: Element;
  /** Imaging modality used (0..*) */
  modality?: Array<CodeableConcept>;
  /** Kind of document (LOINC if possible) (0..1) */
  type?: CodeableConcept;
  /** Categorization of document (0..*) */
  category?: Array<CodeableConcept>;
  /** Who/what is the subject of the document (0..1) */
  subject?: Reference;
  /** Context of the document content (0..*) */
  context?: Array<Reference>;
  /** Main clinical acts documented (0..*) */
  event?: Array<CodeableReference>;
  /** Body part included (0..*) */
  bodySite?: Array<CodeableReference>;
  /** Kind of facility where patient was seen (0..1) */
  facilityType?: CodeableConcept;
  /** Additional details about where the content was created (e.g. clinical specialty) (0..1) */
  practiceSetting?: CodeableConcept;
  /** Time of service that is being documented (0..1) */
  period?: Period;
  /** When this document reference was created (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who and/or what authored the document (0..*) */
  author?: Array<Reference>;
  /** Attests to accuracy of the document (0..*) */
  attester?: Array<DocumentReferenceAttester>;
  /** Organization which maintains the document (0..1) */
  custodian?: Reference;
  /** Relationships to other documents (0..*) */
  relatesTo?: Array<DocumentReferenceRelatesTo>;
  /** Human-readable description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Document security-tags (0..*) */
  securityLabel?: Array<CodeableConcept>;
  /** Document referenced (1..*) */
  content: Array<DocumentReferenceContent>;
}

export namespace DocumentReference {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/document-reference-status */
  export type StatusEnum = 'current' | 'superseded' | 'entered-in-error';
  export const StatusEnum = {
    Current: 'current' as StatusEnum,
    Superseded: 'superseded' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/composition-status */
  export type DocStatusEnum =
    | 'registered'
    | 'partial'
    | 'preliminary'
    | 'final'
    | 'amended'
    | 'corrected'
    | 'appended'
    | 'cancelled'
    | 'entered-in-error'
    | 'deprecated'
    | 'unknown';
  export const DocStatusEnum = {
    Registered: 'registered' as DocStatusEnum,
    Partial: 'partial' as DocStatusEnum,
    Preliminary: 'preliminary' as DocStatusEnum,
    Final: 'final' as DocStatusEnum,
    Amended: 'amended' as DocStatusEnum,
    Corrected: 'corrected' as DocStatusEnum,
    Appended: 'appended' as DocStatusEnum,
    Cancelled: 'cancelled' as DocStatusEnum,
    EnteredInError: 'entered-in-error' as DocStatusEnum,
    Deprecated: 'deprecated' as DocStatusEnum,
    Unknown: 'unknown' as DocStatusEnum,
  };
}

/**
 * Attests to accuracy of the document
 */
export interface DocumentReferenceAttester {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** personal | professional | legal | official (1..1) */
  mode: CodeableConcept;
  /** When the document was attested (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;
  /** Who attested the document (0..1) */
  party?: Reference;
}

/**
 * Relationships to other documents
 */
export interface DocumentReferenceRelatesTo {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The relationship type with another document (1..1) */
  code: CodeableConcept;
  /** Target of the relationship (1..1) */
  target: Reference;
}

/**
 * Document referenced
 */
export interface DocumentReferenceContent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Where to access the document (1..1) */
  attachment: Attachment;
  /** Content profile rules for the document (0..*) */
  profile?: Array<DocumentReferenceProfile>;
}

/**
 * Content profile rules for the document
 */
export interface DocumentReferenceProfile {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code|uri|canonical (1..1) */
  valueCoding?: Coding;
  /** Code|uri|canonical (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Code|uri|canonical (1..1) */
  valueCanonical?: string;
  /** Id and extensions of the primitive `valueCanonical`. */
  _valueCanonical?: Element;
}
