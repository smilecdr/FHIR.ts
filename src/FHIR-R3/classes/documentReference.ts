/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for DocumentReference Resource
 */
export class DocumentReference {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Master Version Specific Identifier (0..1) */
  masterIdentifier?: Identifier;
  /** Other identifiers for the document (0..*) */
  identifier?: Array<Identifier>;
  /** current | superseded | entered-in-error (1..1) */
  status?: DocumentReference.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** preliminary | final | appended | amended | entered-in-error (0..1) */
  docStatus?: DocumentReference.DocStatusEnum;
  /** Id and extensions of the primitive `docStatus`. */
  _docStatus?: Element;
  /** Kind of document (LOINC if possible) (1..1) */
  type: CodeableConcept;
  /** Categorization of document (0..1) */
  class?: CodeableConcept;
  /** Who/what is the subject of the document (0..1) */
  subject?: Reference;
  /** Document creation time (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** When this document reference was created (1..1) */
  indexed?: string;
  /** Id and extensions of the primitive `indexed`. */
  _indexed?: Element;
  /** Who and/or what authored the document (0..*) */
  author?: Array<Reference>;
  /** Who/what authenticated the document (0..1) */
  authenticator?: Reference;
  /** Organization which maintains the document (0..1) */
  custodian?: Reference;
  /** Relationships to other documents (0..*) */
  relatesTo?: Array<DocumentReferenceRelatesTo>;
  /** Human-readable description (title) (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Document security-tags (0..*) */
  securityLabel?: Array<CodeableConcept>;
  /** Document referenced (1..*) */
  content: Array<DocumentReferenceContent>;
  /** Clinical context of document (0..1) */
  context?: DocumentReferenceContext;
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
  export type DocStatusEnum = 'preliminary' | 'final' | 'amended' | 'entered-in-error';
  export const DocStatusEnum = {
    Preliminary: 'preliminary' as DocStatusEnum,
    Final: 'final' as DocStatusEnum,
    Amended: 'amended' as DocStatusEnum,
    EnteredInError: 'entered-in-error' as DocStatusEnum,
  };
}

/**
 * Relationships to other documents
 */
export class DocumentReferenceRelatesTo {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** replaces | transforms | signs | appends (1..1) */
  code?: DocumentReferenceRelatesTo.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Target of the relationship (1..1) */
  target: Reference;
}

export namespace DocumentReferenceRelatesTo {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/document-relationship-type */
  export type CodeEnum = 'replaces' | 'transforms' | 'signs' | 'appends';
  export const CodeEnum = {
    Replaces: 'replaces' as CodeEnum,
    Transforms: 'transforms' as CodeEnum,
    Signs: 'signs' as CodeEnum,
    Appends: 'appends' as CodeEnum,
  };
}

/**
 * Document referenced
 */
export class DocumentReferenceContent {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Where to access the document (1..1) */
  attachment: Attachment;
  /** Format/content rules for the document (0..1) */
  format?: Coding;
}

/**
 * Clinical context of document
 */
export class DocumentReferenceContext {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Context of the document content (0..1) */
  encounter?: Reference;
  /** Main clinical acts documented (0..*) */
  event?: Array<CodeableConcept>;
  /** Time of service that is being documented (0..1) */
  period?: Period;
  /** Kind of facility where patient was seen (0..1) */
  facilityType?: CodeableConcept;
  /** Additional details about where the content was created (e.g. clinical specialty) (0..1) */
  practiceSetting?: CodeableConcept;
  /** Patient demographics from source (0..1) */
  sourcePatientInfo?: Reference;
  /** Related identifiers or resources (0..*) */
  related?: Array<DocumentReferenceRelated>;
}

/**
 * Related identifiers or resources
 */
export class DocumentReferenceRelated {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier of related objects or events (0..1) */
  identifier?: Identifier;
  /** Related Resource (0..1) */
  ref?: Reference;
}
