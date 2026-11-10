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
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
export class CatalogEntry {
  resourceType: 'CatalogEntry';
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
  /** Unique identifier of the catalog item (0..*) */
  identifier?: Array<Identifier>;
  /** The type of item - medication, device, service, protocol or other (0..1) */
  type?: CodeableConcept;
  /** Whether the entry represents an orderable item (1..1) */
  orderable?: boolean;
  /** Id and extensions of the primitive `orderable`. */
  _orderable?: Element;
  /** The item that is being defined (1..1) */
  referencedItem: Reference;
  /** Any additional identifier(s) for the catalog item, in the same granularity or concept (0..*) */
  additionalIdentifier?: Array<Identifier>;
  /** Classification (category or class) of the item entry (0..*) */
  classification?: Array<CodeableConcept>;
  /** draft | active | retired | unknown (0..1) */
  status?: CatalogEntry.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The time period in which this catalog entry is expected to be active (0..1) */
  validityPeriod?: Period;
  /** The date until which this catalog entry is expected to be active (0..1) */
  validTo?: Date | string;
  /** Id and extensions of the primitive `validTo`. */
  _validTo?: Element;
  /** When was this catalog last updated (0..1) */
  lastUpdated?: Date | string;
  /** Id and extensions of the primitive `lastUpdated`. */
  _lastUpdated?: Element;
  /** Additional characteristics of the catalog entry (0..*) */
  additionalCharacteristic?: Array<CodeableConcept>;
  /** Additional classification of the catalog entry (0..*) */
  additionalClassification?: Array<CodeableConcept>;
  /** An item that this catalog entry is related to (0..*) */
  relatedEntry?: Array<CatalogEntryRelatedEntry>;
}

export namespace CatalogEntry {
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
 * An item that this catalog entry is related to
 */
export class CatalogEntryRelatedEntry {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** triggers | is-replaced-by (1..1) */
  relationtype?: CatalogEntryRelatedEntry.RelationtypeEnum;
  /** Id and extensions of the primitive `relationtype`. */
  _relationtype?: Element;
  /** The reference to the related item (1..1) */
  item: Reference;
}

export namespace CatalogEntryRelatedEntry {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/relation-type */
  export type RelationtypeEnum = 'triggers' | 'is-replaced-by';
  export const RelationtypeEnum = {
    Triggers: 'triggers' as RelationtypeEnum,
    IsReplacedBy: 'is-replaced-by' as RelationtypeEnum,
  };
}
