/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Reference } from './reference';

/**
 * Annotation Type: A text note which also contains information about who made the statement and when.
 */
export interface Annotation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Individual responsible for the annotation (0..1) */
  authorReference?: Reference;
  /** Individual responsible for the annotation (0..1) */
  authorString?: string;
  /** Id and extensions of the primitive `authorString`. */
  _authorString?: Element;
  /** When the annotation was made (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;
  /** The annotation - text content (as markdown) (1..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
}
