/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc. Represents a "System" used within the Identifier and Coding data types.
 */
export interface NamingSystem {
  resourceType: 'NamingSystem';
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
  /** Canonical identifier for this naming system, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the naming system (business identifier) (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the naming system (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this naming system (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Title for this naming system (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: NamingSystem.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** codesystem | identifier | root (1..1) */
  kind?: NamingSystem.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Who maintains system namespace? (0..1) */
  responsible?: string;
  /** Id and extensions of the primitive `responsible`. */
  _responsible?: Element;
  /** e.g. driver, provider, patient, bank etc (0..1) */
  type?: CodeableConcept;
  /** Natural language description of the naming system (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for naming system (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this naming system is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** When the NamingSystem was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the NamingSystem was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the NamingSystem is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: Array<CodeableConcept>;
  /** Who authored the CodeSystem (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the NamingSystem (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the NamingSystem (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the NamingSystem (0..*) */
  endorser?: Array<ContactDetail>;
  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** How/where is it used (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;
  /** Unique identifiers used for system (1..*) */
  uniqueId: Array<NamingSystemUniqueId>;
}

export namespace NamingSystem {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/namingsystem-type */
  export type KindEnum = 'codesystem' | 'identifier' | 'root';
  export const KindEnum = {
    Codesystem: 'codesystem' as KindEnum,
    Identifier: 'identifier' as KindEnum,
    Root: 'root' as KindEnum,
  };
}

/**
 * Unique identifiers used for system
 */
export interface NamingSystemUniqueId {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** oid | uuid | uri | iri-stem | v2csmnemonic | other (1..1) */
  type?: NamingSystemUniqueId.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** The unique identifier (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** Is this the id that should be used for this type (0..1) */
  preferred?: boolean;
  /** Id and extensions of the primitive `preferred`. */
  _preferred?: Element;
  /** Notes about identifier usage (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** When is identifier valid? (0..1) */
  period?: Period;
  /** Whether the identifier is authoritative (0..1) */
  authoritative?: boolean;
  /** Id and extensions of the primitive `authoritative`. */
  _authoritative?: Element;
}

export namespace NamingSystemUniqueId {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/namingsystem-identifier-type */
  export type TypeEnum = 'oid' | 'uuid' | 'uri' | 'iri-stem' | 'v2csmnemonic' | 'other';
  export const TypeEnum = {
    Oid: 'oid' as TypeEnum,
    Uuid: 'uuid' as TypeEnum,
    Uri: 'uri' as TypeEnum,
    IriStem: 'iri-stem' as TypeEnum,
    V2csmnemonic: 'v2csmnemonic' as TypeEnum,
    Other: 'other' as TypeEnum,
  };
}
