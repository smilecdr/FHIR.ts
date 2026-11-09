/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Base StructureDefinition for CodeableConcept Type
 */
export class CodeableConcept {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Code defined by a terminology system (0..*) */
  coding?: Array<Coding>;
  /** Plain text representation of the concept (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
}
