/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Meta Type: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface Meta {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Version specific identifier (0..1) */
  versionId?: string;
  /** Id and extensions of the primitive `versionId`. */
  _versionId?: Element;
  /** When the resource version last changed (0..1) */
  lastUpdated?: string;
  /** Id and extensions of the primitive `lastUpdated`. */
  _lastUpdated?: Element;
  /** Identifies where the resource comes from (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;
  /** Profiles this resource claims to conform to (0..*) */
  profile?: Array<string>;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Array<Element | null>;
  /** Security Labels applied to this resource (0..*) */
  security?: Array<Coding>;
  /** Tags applied to this resource (0..*) */
  tag?: Array<Coding>;
}
