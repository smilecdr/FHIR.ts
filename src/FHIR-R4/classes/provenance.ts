/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { Signature } from './signature';

/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
export class Provenance {
  resourceType: 'Provenance';
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
  /** Target Reference(s) (usually version specific) (1..*) */
  target: Array<Reference>;
  /** When the activity occurred (0..1) */
  occurredPeriod?: Period;
  /** When the activity occurred (0..1) */
  occurredDateTime?: Date | string;
  /** Id and extensions of the primitive `occurredDateTime`. */
  _occurredDateTime?: Element;
  /** When the activity was recorded / updated (1..1) */
  recorded?: Date | string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;
  /** Policy or plan the activity was defined by (0..*) */
  policy?: Array<string>;
  /** Id and extensions of the primitive `policy`. */
  _policy?: Array<Element | null>;
  /** Where the activity occurred, if relevant (0..1) */
  location?: Reference;
  /** Reason the activity is occurring (0..*) */
  reason?: Array<CodeableConcept>;
  /** Activity that occurred (0..1) */
  activity?: CodeableConcept;
  /** Actor involved (1..*) */
  agent: Array<ProvenanceAgent>;
  /** An entity used in this activity (0..*) */
  entity?: Array<ProvenanceEntity>;
  /** Signature on target (0..*) */
  signature?: Array<Signature>;
}

/**
 * Actor involved
 */
export class ProvenanceAgent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** How the agent participated (0..1) */
  type?: CodeableConcept;
  /** What the agents role was (0..*) */
  role?: Array<CodeableConcept>;
  /** Who participated (1..1) */
  who: Reference;
  /** Who the agent is representing (0..1) */
  onBehalfOf?: Reference;
}

/**
 * An entity used in this activity
 */
export class ProvenanceEntity {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** derivation | revision | quotation | source | removal (1..1) */
  role?: ProvenanceEntity.RoleEnum;
  /** Id and extensions of the primitive `role`. */
  _role?: Element;
  /** Identity of entity (1..1) */
  what: Reference;
  /** Entity is attributed to this agent (0..*) */
  agent?: Array<ProvenanceAgent>;
}

export namespace ProvenanceEntity {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/provenance-entity-role */
  export type RoleEnum = 'derivation' | 'revision' | 'quotation' | 'source' | 'removal';
  export const RoleEnum = {
    Derivation: 'derivation' as RoleEnum,
    Revision: 'revision' as RoleEnum,
    Quotation: 'quotation' as RoleEnum,
    Source: 'source' as RoleEnum,
    Removal: 'removal' as RoleEnum,
  };
}
