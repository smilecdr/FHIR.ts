/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
export class DocumentManifest {
  resourceType: 'DocumentManifest';
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
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique Identifier for the set of documents (0..1) */
  masterIdentifier?: Identifier;
  /** Other identifiers for the manifest (0..*) */
  identifier?: Array<Identifier>;
  /** current | superseded | entered-in-error (1..1) */
  status?: DocumentManifest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Kind of document set (0..1) */
  type?: CodeableConcept;
  /** The subject of the set of documents (0..1) */
  subject?: Reference;
  /** When this document manifest created (0..1) */
  created?: Date | string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Who and/or what authored the DocumentManifest (0..*) */
  author?: Array<Reference>;
  /** Intended to get notified about this set of documents (0..*) */
  recipient?: Array<Reference>;
  /** The source system/application/software (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;
  /** Human-readable description (title) (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Items in manifest (1..*) */
  content: Array<Reference>;
  /** Related things (0..*) */
  related?: Array<DocumentManifestRelated>;
}

export namespace DocumentManifest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/document-reference-status */
  export type StatusEnum = 'current' | 'superseded' | 'entered-in-error';
  export const StatusEnum = {
    Current: 'current' as StatusEnum,
    Superseded: 'superseded' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Related things
 */
export class DocumentManifestRelated {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifiers of things that are related (0..1) */
  identifier?: Identifier;
  /** Related Resource (0..1) */
  ref?: Reference;
}
