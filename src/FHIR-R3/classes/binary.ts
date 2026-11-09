/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Meta } from './meta';
import type { Reference } from './reference';

/**
 * Base StructureDefinition for Binary Resource
 */
export class Binary {
  resourceType: 'Binary';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** MimeType of the binary content (1..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;
  /** Access Control Management (0..1) */
  securityContext?: Reference;
  /** The actual content (1..1) */
  content?: string;
  /** Id and extensions of the primitive `content`. */
  _content?: Element;
}
