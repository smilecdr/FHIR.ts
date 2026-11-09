/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Base StructureDefinition for Period Type
 */
export class Period {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Starting time with inclusive boundary (0..1) */
  start?: string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;
  /** End time with inclusive boundary, if not ongoing (0..1) */
  end?: string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;
}
