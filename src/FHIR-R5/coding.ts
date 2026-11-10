/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Coding Type: A reference to a code defined by a terminology system.
 */
export interface Coding {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Identity of the terminology system (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** Version of the system - if relevant (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Symbol in syntax defined by the system (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Representation defined by the system (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** If this coding was chosen directly by the user (0..1) */
  userSelected?: boolean;
  /** Id and extensions of the primitive `userSelected`. */
  _userSelected?: Element;
}
