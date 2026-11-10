/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Composition Resource
 */
export class Composition {
  resourceType: 'Composition';
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
  /** Logical identifier of composition (version-independent) (0..1) */
  identifier?: Identifier;
  /** preliminary | final | amended | entered-in-error (1..1) */
  status?: Composition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Kind of composition (LOINC if possible) (1..1) */
  type: CodeableConcept;
  /** Categorization of Composition (0..1) */
  class?: CodeableConcept;
  /** Who and/or what the composition is about (1..1) */
  subject: Reference;
  /** Context of the Composition (0..1) */
  encounter?: Reference;
  /** Composition editing time (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who and/or what authored the composition (1..*) */
  author: Array<Reference>;
  /** Human Readable name/title (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** As defined by affinity domain (0..1) */
  confidentiality?: Composition.ConfidentialityEnum;
  /** Id and extensions of the primitive `confidentiality`. */
  _confidentiality?: Element;
  /** Attests to accuracy of composition (0..*) */
  attester?: Array<CompositionAttester>;
  /** Organization which maintains the composition (0..1) */
  custodian?: Reference;
  /** Relationships to other compositions/documents (0..*) */
  relatesTo?: Array<CompositionRelatesTo>;
  /** The clinical service(s) being documented (0..*) */
  event?: Array<CompositionEvent>;
  /** Composition is broken into sections (0..*) */
  section?: Array<CompositionSection>;
}

export namespace Composition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/composition-status */
  export type StatusEnum = 'preliminary' | 'final' | 'amended' | 'entered-in-error';
  export const StatusEnum = {
    Preliminary: 'preliminary' as StatusEnum,
    Final: 'final' as StatusEnum,
    Amended: 'amended' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/v3-ConfidentialityClassification */
  export type ConfidentialityEnum = 'U' | 'L' | 'M' | 'N' | 'R' | 'V';
  export const ConfidentialityEnum = {
    U: 'U' as ConfidentialityEnum,
    L: 'L' as ConfidentialityEnum,
    M: 'M' as ConfidentialityEnum,
    N: 'N' as ConfidentialityEnum,
    R: 'R' as ConfidentialityEnum,
    V: 'V' as ConfidentialityEnum,
  };
}

/**
 * Attests to accuracy of composition
 */
export class CompositionAttester {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** personal | professional | legal | official (1..*) */
  mode?: Array<CompositionAttester.ModeEnum>;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Array<Element | null>;
  /** When the composition was attested (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;
  /** Who attested the composition (0..1) */
  party?: Reference;
}

export namespace CompositionAttester {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/composition-attestation-mode */
  export type ModeEnum = 'personal' | 'professional' | 'legal' | 'official';
  export const ModeEnum = {
    Personal: 'personal' as ModeEnum,
    Professional: 'professional' as ModeEnum,
    Legal: 'legal' as ModeEnum,
    Official: 'official' as ModeEnum,
  };
}

/**
 * Relationships to other compositions/documents
 */
export class CompositionRelatesTo {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** replaces | transforms | signs | appends (1..1) */
  code?: CompositionRelatesTo.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Target of the relationship (1..1) */
  targetIdentifier?: Identifier;
  /** Target of the relationship (1..1) */
  targetReference?: Reference;
}

export namespace CompositionRelatesTo {
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
 * The clinical service(s) being documented
 */
export class CompositionEvent {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code(s) that apply to the event being documented (0..*) */
  code?: Array<CodeableConcept>;
  /** The period covered by the documentation (0..1) */
  period?: Period;
  /** The event(s) being documented (0..*) */
  detail?: Array<Reference>;
}

/**
 * Composition is broken into sections
 */
export class CompositionSection {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for section (e.g. for ToC) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Classification of section (recommended) (0..1) */
  code?: CodeableConcept;
  /** Text summary of the section, for human interpretation (0..1) */
  text?: Narrative;
  /** working | snapshot | changes (0..1) */
  mode?: CompositionSection.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Order of section entries (0..1) */
  orderedBy?: CodeableConcept;
  /** A reference to data that supports this section (0..*) */
  entry?: Array<Reference>;
  /** Why the section is empty (0..1) */
  emptyReason?: CodeableConcept;
  /** Nested Section (0..*) */
  section?: Array<CompositionSection>;
}

export namespace CompositionSection {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/list-mode */
  export type ModeEnum = 'working' | 'snapshot' | 'changes';
  export const ModeEnum = {
    Working: 'working' as ModeEnum,
    Snapshot: 'snapshot' as ModeEnum,
    Changes: 'changes' as ModeEnum,
  };
}
