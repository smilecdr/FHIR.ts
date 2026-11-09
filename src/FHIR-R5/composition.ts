/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export interface Composition {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this Composition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Version-independent identifier for the Composition (0..*) */
  identifier?: Array<Identifier>;
  /** An explicitly assigned identifer of a variation of the content in the Composition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown (1..1) */
  status?: Composition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Kind of composition (LOINC if possible) (1..1) */
  type: CodeableConcept;
  /** Categorization of Composition (0..*) */
  category?: Array<CodeableConcept>;
  /** Who and/or what the composition is about (0..*) */
  subject?: Array<Reference>;
  /** Context of the Composition (0..1) */
  encounter?: Reference;
  /** Composition editing time (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Who and/or what authored the composition (1..*) */
  author: Array<Reference>;
  /** Name for this Composition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Human Readable name/title (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** For any additional notes (0..*) */
  note?: Array<Annotation>;
  /** Attests to accuracy of composition (0..*) */
  attester?: Array<CompositionAttester>;
  /** Organization which maintains the composition (0..1) */
  custodian?: Reference;
  /** Relationships to other compositions/documents (0..*) */
  relatesTo?: Array<RelatedArtifact>;
  /** The clinical service(s) being documented (0..*) */
  event?: Array<CompositionEvent>;
  /** Composition is broken into sections (0..*) */
  section?: Array<CompositionSection>;
}

export namespace Composition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/composition-status */
  export type StatusEnum =
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
  export const StatusEnum = {
    Registered: 'registered' as StatusEnum,
    Partial: 'partial' as StatusEnum,
    Preliminary: 'preliminary' as StatusEnum,
    Final: 'final' as StatusEnum,
    Amended: 'amended' as StatusEnum,
    Corrected: 'corrected' as StatusEnum,
    Appended: 'appended' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Deprecated: 'deprecated' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Attests to accuracy of composition
 */
export interface CompositionAttester {
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
  /** When the composition was attested (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;
  /** Who attested the composition (0..1) */
  party?: Reference;
}

/**
 * The clinical service(s) being documented
 */
export interface CompositionEvent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The period covered by the documentation (0..1) */
  period?: Period;
  /** The event(s) being documented, as code(s), reference(s), or both (0..*) */
  detail?: Array<CodeableReference>;
}

/**
 * Composition is broken into sections
 */
export interface CompositionSection {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for section (e.g. for ToC) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Classification of section (recommended) (0..1) */
  code?: CodeableConcept;
  /** Who and/or what authored the section (0..*) */
  author?: Array<Reference>;
  /** Who/what the section is about, when it is not about the subject of composition (0..1) */
  focus?: Reference;
  /** Text summary of the section, for human interpretation (0..1) */
  text?: Narrative;
  /** Order of section entries (0..1) */
  orderedBy?: CodeableConcept;
  /** A reference to data that supports this section (0..*) */
  entry?: Array<Reference>;
  /** Why the section is empty (0..1) */
  emptyReason?: CodeableConcept;
  /** Nested Section (0..*) */
  section?: Array<CompositionSection>;
}
