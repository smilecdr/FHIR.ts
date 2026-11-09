/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { Signature } from './signature';

/**
 * Base StructureDefinition for Provenance Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Target Reference(s) (usually version specific) (1..*) */
  target: Array<Reference>;
  /** When the activity occurred (0..1) */
  period?: Period;
  /** When the activity was recorded / updated (1..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;
  /** Policy or plan the activity was defined by (0..*) */
  policy?: Array<string>;
  /** Id and extensions of the primitive `policy`. */
  _policy?: Array<Element | null>;
  /** Where the activity occurred, if relevant (0..1) */
  location?: Reference;
  /** Reason the activity is occurring (0..*) */
  reason?: Array<Coding>;
  /** Activity that occurred (0..1) */
  activity?: Coding;
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
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** What the agents role was (0..*) */
  role?: Array<CodeableConcept>;
  /** Who participated (1..1) */
  whoUri?: string;
  /** Id and extensions of the primitive `whoUri`. */
  _whoUri?: Element;
  /** Who participated (1..1) */
  whoReference?: Reference;
  /** Who the agent is representing (0..1) */
  onBehalfOfUri?: string;
  /** Id and extensions of the primitive `onBehalfOfUri`. */
  _onBehalfOfUri?: Element;
  /** Who the agent is representing (0..1) */
  onBehalfOfReference?: Reference;
  /** Type of relationship between agents (0..1) */
  relatedAgentType?: CodeableConcept;
}

/**
 * An entity used in this activity
 */
export class ProvenanceEntity {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** derivation | revision | quotation | source | removal (1..1) */
  role?: ProvenanceEntity.RoleEnum;
  /** Id and extensions of the primitive `role`. */
  _role?: Element;
  /** Identity of entity (1..1) */
  whatUri?: string;
  /** Id and extensions of the primitive `whatUri`. */
  _whatUri?: Element;
  /** Identity of entity (1..1) */
  whatReference?: Reference;
  /** Identity of entity (1..1) */
  whatIdentifier?: Identifier;
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
