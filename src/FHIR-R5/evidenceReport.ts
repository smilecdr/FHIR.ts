/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 */
export interface EvidenceReport {
  resourceType: 'EvidenceReport';
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
  /** Canonical identifier for this EvidenceReport, represented as a globally unique URI (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: EvidenceReport.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Unique identifier for the evidence report (0..*) */
  identifier?: Array<Identifier>;
  /** Identifiers for articles that may relate to more than one evidence report (0..*) */
  relatedIdentifier?: Array<Identifier>;
  /** Citation for this report (0..1) */
  citeAsReference?: Reference;
  /** Citation for this report (0..1) */
  citeAsMarkdown?: string;
  /** Id and extensions of the primitive `citeAsMarkdown`. */
  _citeAsMarkdown?: Element;
  /** Kind of report (0..1) */
  type?: CodeableConcept;
  /** Used for footnotes and annotations (0..*) */
  note?: Array<Annotation>;
  /** Link, description or reference to artifact associated with the report (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Focus of the report (1..1) */
  subject: EvidenceReportSubject;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Who authored the content (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the content (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the content (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the content (0..*) */
  endorser?: Array<ContactDetail>;
  /** Relationships to other compositions/documents (0..*) */
  relatesTo?: Array<EvidenceReportRelatesTo>;
  /** Composition is broken into sections (0..*) */
  section?: Array<EvidenceReportSection>;
}

export namespace EvidenceReport {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Focus of the report
 */
export interface EvidenceReportSubject {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Characteristic (0..*) */
  characteristic?: Array<EvidenceReportCharacteristic>;
  /** Footnotes and/or explanatory notes (0..*) */
  note?: Array<Annotation>;
}

/**
 * Characteristic
 */
export interface EvidenceReportCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Characteristic code (1..1) */
  code: CodeableConcept;
  /** Characteristic value (1..1) */
  valueReference?: Reference;
  /** Characteristic value (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Characteristic value (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Characteristic value (1..1) */
  valueQuantity?: Quantity;
  /** Characteristic value (1..1) */
  valueRange?: Range;
  /** Is used to express not the characteristic (0..1) */
  exclude?: boolean;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Element;
  /** Timeframe for the characteristic (0..1) */
  period?: Period;
}

/**
 * Relationships to other compositions/documents
 */
export interface EvidenceReportRelatesTo {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith (1..1) */
  code?: EvidenceReportRelatesTo.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Target of the relationship (1..1) */
  target: EvidenceReportTarget;
}

export namespace EvidenceReportRelatesTo {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/report-relation-type */
  export type CodeEnum =
    | 'replaces'
    | 'amends'
    | 'appends'
    | 'transforms'
    | 'replacedWith'
    | 'amendedWith'
    | 'appendedWith'
    | 'transformedWith';
  export const CodeEnum = {
    Replaces: 'replaces' as CodeEnum,
    Amends: 'amends' as CodeEnum,
    Appends: 'appends' as CodeEnum,
    Transforms: 'transforms' as CodeEnum,
    ReplacedWith: 'replacedWith' as CodeEnum,
    AmendedWith: 'amendedWith' as CodeEnum,
    AppendedWith: 'appendedWith' as CodeEnum,
    TransformedWith: 'transformedWith' as CodeEnum,
  };
}

/**
 * Target of the relationship
 */
export interface EvidenceReportTarget {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Target of the relationship URL (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Target of the relationship Identifier (0..1) */
  identifier?: Identifier;
  /** Target of the relationship Display (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Target of the relationship Resource reference (0..1) */
  resource?: Reference;
}

/**
 * Composition is broken into sections
 */
export interface EvidenceReportSection {
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
  focus?: CodeableConcept;
  /** Classification of section by Resource (0..1) */
  focusReference?: Reference;
  /** Who and/or what authored the section (0..*) */
  author?: Array<Reference>;
  /** Text summary of the section, for human interpretation (0..1) */
  text?: Narrative;
  /** working | snapshot | changes (0..1) */
  mode?: EvidenceReportSection.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Order of section entries (0..1) */
  orderedBy?: CodeableConcept;
  /** Extensible classifiers as content (0..*) */
  entryClassifier?: Array<CodeableConcept>;
  /** Reference to resources as content (0..*) */
  entryReference?: Array<Reference>;
  /** Quantity as content (0..*) */
  entryQuantity?: Array<Quantity>;
  /** Why the section is empty (0..1) */
  emptyReason?: CodeableConcept;
  /** Nested Section (0..*) */
  section?: Array<EvidenceReportSection>;
}

export namespace EvidenceReportSection {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/list-mode */
  export type ModeEnum = 'working' | 'snapshot' | 'changes';
  export const ModeEnum = {
    Working: 'working' as ModeEnum,
    Snapshot: 'snapshot' as ModeEnum,
    Changes: 'changes' as ModeEnum,
  };
}
