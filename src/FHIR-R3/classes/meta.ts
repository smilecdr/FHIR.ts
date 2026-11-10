/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Base StructureDefinition for Meta Type
 */
export class Meta {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Version specific identifier (0..1) */
  versionId?: string;
  /** Id and extensions of the primitive `versionId`. */
  _versionId?: Element;
  /** When the resource version last changed (0..1) */
  lastUpdated?: string;
  /** Id and extensions of the primitive `lastUpdated`. */
  _lastUpdated?: Element;
  /** Profiles this resource claims to conform to (0..*) */
  profile?: Array<string>;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Array<Element | null>;
  /** Security Labels applied to this resource (0..*) */
  security?: Array<Coding>;
  /** Tags applied to this resource (0..*) */
  tag?: Array<Coding>;
}
