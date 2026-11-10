/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Reference } from './reference';

/**
 * Base StructureDefinition for Signature Type
 */
export class Signature {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Indication of the reason the entity signed the object(s) (1..*) */
  type: Array<Coding>;
  /** When the signature was created (1..1) */
  when?: string;
  /** Id and extensions of the primitive `when`. */
  _when?: Element;
  /** Who signed (1..1) */
  whoUri?: string;
  /** Id and extensions of the primitive `whoUri`. */
  _whoUri?: Element;
  /** Who signed (1..1) */
  whoReference?: Reference;
  /** The party represented (0..1) */
  onBehalfOfUri?: string;
  /** Id and extensions of the primitive `onBehalfOfUri`. */
  _onBehalfOfUri?: Element;
  /** The party represented (0..1) */
  onBehalfOfReference?: Reference;
  /** The technical format of the signature (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;
  /** The actual signature content (XML DigSig. JWT, picture, etc.) (0..1) */
  blob?: string;
  /** Id and extensions of the primitive `blob`. */
  _blob?: Element;
}
