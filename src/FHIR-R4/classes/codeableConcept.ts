/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';

/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export class CodeableConcept {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Code defined by a terminology system (0..*) */
  coding?: Array<Coding>;
  /** Plain text representation of the concept (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
}
