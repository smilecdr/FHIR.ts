/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Quantity } from './quantity';

/**
 * Ratio Type: A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export interface Ratio {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Numerator value (0..1) */
  numerator?: Quantity;
  /** Denominator value (0..1) */
  denominator?: Quantity;
}
