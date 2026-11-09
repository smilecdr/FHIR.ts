/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Quantity } from './quantity';

/**
 * RatioRange Type: A range of ratios expressed as a low and high numerator and a denominator.
 */
export interface RatioRange {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Low Numerator limit (0..1) */
  lowNumerator?: Quantity;
  /** High Numerator limit (0..1) */
  highNumerator?: Quantity;
  /** Denominator value (0..1) */
  denominator?: Quantity;
}
