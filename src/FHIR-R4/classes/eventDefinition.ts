/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { Resource } from './resourceList';
import type { TriggerDefinition } from './triggerDefinition';
import type { UsageContext } from './usageContext';

/**
 * The EventDefinition resource provides a reusable description of when a particular event can occur.
 */
export class EventDefinition {
  resourceType: 'EventDefinition';
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
  /** Canonical identifier for this event definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the event definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the event definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this event definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this event definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Subordinate title of the event definition (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: EventDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Type of individual the event definition is focused on (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the event definition is focused on (0..1) */
  subjectReference?: Reference;
  /** Date last changed (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the event definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for event definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this event definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Describes the clinical usage of the event definition (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** When the event definition was approved by publisher (0..1) */
  approvalDate?: Date | string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the event definition was last reviewed (0..1) */
  lastReviewDate?: Date | string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the event definition is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment, etc. (0..*) */
  topic?: Array<CodeableConcept>;
  /** Who authored the content (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the content (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the content (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the content (0..*) */
  endorser?: Array<ContactDetail>;
  /** Additional documentation, citations, etc. (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** "when" the event occurs (multiple = 'or') (1..*) */
  trigger: Array<TriggerDefinition>;
}

export namespace EventDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}
