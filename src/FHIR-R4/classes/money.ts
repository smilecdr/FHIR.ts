/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';

/**
 * An amount of economic utility in some recognized currency.
 */
export class Money {
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
  /** ISO 4217 Currency Code (0..1) */
  currency?: string;
  /** Id and extensions of the primitive `currency`. */
  _currency?: Element;
}
