/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Substance Resource
 */
export class Substance {
  resourceType: 'Substance';
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
  /** Unique identifier (0..*) */
  identifier?: Array<Identifier>;
  /** active | inactive | entered-in-error (0..1) */
  status?: Substance.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** What class/type of substance this is (0..*) */
  category?: Array<CodeableConcept>;
  /** What substance this is (1..1) */
  code: CodeableConcept;
  /** Textual description of the substance, comments (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** If this describes a specific package/container of the substance (0..*) */
  instance?: Array<SubstanceInstance>;
  /** Composition information about the substance (0..*) */
  ingredient?: Array<SubstanceIngredient>;
}

export namespace Substance {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/substance-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * If this describes a specific package/container of the substance
 */
export class SubstanceInstance {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier of the package/container (0..1) */
  identifier?: Identifier;
  /** When no longer valid to use (0..1) */
  expiry?: string;
  /** Id and extensions of the primitive `expiry`. */
  _expiry?: Element;
  /** Amount of substance in the package (0..1) */
  quantity?: Quantity;
}

/**
 * Composition information about the substance
 */
export class SubstanceIngredient {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Optional amount (concentration) (0..1) */
  quantity?: Ratio;
  /** A component of the substance (1..1) */
  substanceCodeableConcept?: CodeableConcept;
  /** A component of the substance (1..1) */
  substanceReference?: Reference;
}
