/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A List is a curated collection of resources, for things such as problem lists, allergy lists, facility list, organization list, etc.
 */
export interface List {
  resourceType: 'List';
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
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** current | retired | entered-in-error (1..1) */
  status?: List.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** working | snapshot | changes (1..1) */
  mode?: List.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Descriptive name for the list (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** What the purpose of this list is (0..1) */
  code?: CodeableConcept;
  /** If all resources have the same subject(s) (0..*) */
  subject?: Array<Reference>;
  /** Context in which list created (0..1) */
  encounter?: Reference;
  /** When the list was prepared (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Who and/or what defined the list contents (aka Author) (0..1) */
  source?: Reference;
  /** What order the list has (0..1) */
  orderedBy?: CodeableConcept;
  /** Comments about the list (0..*) */
  note?: Array<Annotation>;
  /** Entries in the list (0..*) */
  entry?: Array<ListEntry>;
  /** Why list is empty (0..1) */
  emptyReason?: CodeableConcept;
}

export namespace List {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/list-status */
  export type StatusEnum = 'current' | 'retired' | 'entered-in-error';
  export const StatusEnum = {
    Current: 'current' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/list-mode */
  export type ModeEnum = 'working' | 'snapshot' | 'changes';
  export const ModeEnum = {
    Working: 'working' as ModeEnum,
    Snapshot: 'snapshot' as ModeEnum,
    Changes: 'changes' as ModeEnum,
  };
}

/**
 * Entries in the list
 */
export interface ListEntry {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Status/Workflow information about this item (0..1) */
  flag?: CodeableConcept;
  /** If this item is actually marked as deleted (0..1) */
  deleted?: boolean;
  /** Id and extensions of the primitive `deleted`. */
  _deleted?: Element;
  /** When item added to list (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Actual entry (1..1) */
  item: Reference;
}
