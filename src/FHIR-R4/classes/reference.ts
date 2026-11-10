/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';

/**
 * A reference from one resource to another.
 */
export class Reference {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Literal reference, Relative, internal or absolute URL (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;
  /** Type the reference refers to (e.g. "Patient") (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Logical reference, when literal reference is not known (0..1) */
  identifier?: Identifier;
  /** Text alternative for the resource (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
}
