/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc. Represents a "System" used within the Identifier and Coding data types.
 */
export class NamingSystem {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name for this naming system (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: NamingSystem.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** codesystem | identifier | root (1..1) */
  kind?: NamingSystem.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Date last changed (1..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Who maintains system namespace? (0..1) */
  responsible?: string;
  /** Id and extensions of the primitive `responsible`. */
  _responsible?: Element;
  /** e.g. driver, provider, patient, bank etc. (0..1) */
  type?: CodeableConcept;
  /** Natural language description of the naming system (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for naming system (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
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
export class NamingSystemUniqueId {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** oid | uuid | uri | other (1..1) */
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
}

export namespace NamingSystemUniqueId {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/namingsystem-identifier-type */
  export type TypeEnum = 'oid' | 'uuid' | 'uri' | 'other';
  export const TypeEnum = {
    Oid: 'oid' as TypeEnum,
    Uuid: 'uuid' as TypeEnum,
    Uri: 'uri' as TypeEnum,
    Other: 'other' as TypeEnum,
  };
}
