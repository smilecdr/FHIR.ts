/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';

/**
 * Base StructureDefinition for Reference Type
 */
export class Reference {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Literal reference, Relative, internal or absolute URL (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;
  /** Logical reference, when literal reference is not known (0..1) */
  identifier?: Identifier;
  /** Text alternative for the resource (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
}
