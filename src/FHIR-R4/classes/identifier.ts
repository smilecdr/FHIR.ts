/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Period } from './period';
import type { Reference } from './reference';

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export class Identifier {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** usual | official | temp | secondary | old (If known) (0..1) */
  use?: Identifier.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** Description of identifier (0..1) */
  type?: CodeableConcept;
  /** The namespace for the identifier value (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** The value that is unique (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** Time period when id is/was valid for use (0..1) */
  period?: Period;
  /** Organization that issued id (may be just text) (0..1) */
  assigner?: Reference;
}

export namespace Identifier {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/identifier-use */
  export type UseEnum = 'usual' | 'official' | 'temp' | 'secondary' | 'old';
  export const UseEnum = {
    Usual: 'usual' as UseEnum,
    Official: 'official' as UseEnum,
    Temp: 'temp' as UseEnum,
    Secondary: 'secondary' as UseEnum,
    Old: 'old' as UseEnum,
  };
}
