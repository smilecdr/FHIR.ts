/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A homogeneous material with a definite composition.
 */
export interface Substance {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Is this an instance of a substance or a kind of one (1..1) */
  instance?: boolean;
  /** Id and extensions of the primitive `instance`. */
  _instance?: Element;
  /** active | inactive | entered-in-error (0..1) */
  status?: Substance.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** What class/type of substance this is (0..*) */
  category?: Array<CodeableConcept>;
  /** What substance this is (1..1) */
  code: CodeableReference;
  /** Textual description of the substance, comments (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** When no longer valid to use (0..1) */
  expiry?: string;
  /** Id and extensions of the primitive `expiry`. */
  _expiry?: Element;
  /** Amount of substance in the package (0..1) */
  quantity?: Quantity;
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
 * Composition information about the substance
 */
export interface SubstanceIngredient {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Optional amount (concentration) (0..1) */
  quantity?: Ratio;
  /** A component of the substance (1..1) */
  substanceCodeableConcept?: CodeableConcept;
  /** A component of the substance (1..1) */
  substanceReference?: Reference;
}
