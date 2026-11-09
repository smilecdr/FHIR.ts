/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';

/**
 * A time period defined by a start and end date and optionally time.
 */
export class Period {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Starting time with inclusive boundary (0..1) */
  start?: Date | string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;
  /** End time with inclusive boundary, if not ongoing (0..1) */
  end?: Date | string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;
}
