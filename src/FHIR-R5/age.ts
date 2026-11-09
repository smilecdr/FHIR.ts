/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Age Type: A duration of time during which an organism (or a process) has existed.
 */
export interface Age {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Numerical value (with implicit precision) (0..1) */
  value?: number;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** < | <= | >= | > | ad - how to understand the value (0..1) */
  comparator?: Age.ComparatorEnum;
  /** Id and extensions of the primitive `comparator`. */
  _comparator?: Element;
  /** Unit representation (0..1) */
  unit?: string;
  /** Id and extensions of the primitive `unit`. */
  _unit?: Element;
  /** System that defines coded unit form (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** Coded form of the unit (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
}

export namespace Age {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/quantity-comparator */
  export type ComparatorEnum = '<' | '<=' | '>=' | '>' | 'ad';
  export const ComparatorEnum = {
    LessThan: '<' as ComparatorEnum,
    LessThanOrEqualTo: '<=' as ComparatorEnum,
    GreaterThanOrEqualTo: '>=' as ComparatorEnum,
    GreaterThan: '>' as ComparatorEnum,
    Ad: 'ad' as ComparatorEnum,
  };
}
