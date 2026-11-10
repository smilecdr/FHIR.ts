/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
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
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export class Evidence {
  resourceType: 'Evidence';
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
  /** Canonical identifier for this evidence, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the evidence (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the evidence (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this evidence (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this evidence (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Title for use in informal contexts (0..1) */
  shortTitle?: string;
  /** Id and extensions of the primitive `shortTitle`. */
  _shortTitle?: Element;
  /** Subordinate title of the Evidence (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: Evidence.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
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
  /** Natural language description of the evidence (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Used for footnotes or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for evidence (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** When the evidence was approved by publisher (0..1) */
  approvalDate?: Date | string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the evidence was last reviewed (0..1) */
  lastReviewDate?: Date | string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the evidence is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** The category of the Evidence, such as Education, Treatment, Assessment, etc. (0..*) */
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
  /** What population? (1..1) */
  exposureBackground: Reference;
  /** What exposure? (0..*) */
  exposureVariant?: Array<Reference>;
  /** What outcome? (0..*) */
  outcome?: Array<Reference>;
}

export namespace Evidence {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}
