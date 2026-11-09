/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Quantity } from './quantity';

/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export class Range {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Low limit (0..1) */
  low?: Quantity;
  /** High limit (0..1) */
  high?: Quantity;
}
