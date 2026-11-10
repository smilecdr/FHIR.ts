/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Reference } from './reference';

/**
 * Signature Type: A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export interface Signature {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Indication of the reason the entity signed the object(s) (0..*) */
  type?: Array<Coding>;
  /** When the signature was created (0..1) */
  when?: string;
  /** Id and extensions of the primitive `when`. */
  _when?: Element;
  /** Who signed (0..1) */
  who?: Reference;
  /** The party represented (0..1) */
  onBehalfOf?: Reference;
  /** The technical format of the signed resources (0..1) */
  targetFormat?: string;
  /** Id and extensions of the primitive `targetFormat`. */
  _targetFormat?: Element;
  /** The technical format of the signature (0..1) */
  sigFormat?: string;
  /** Id and extensions of the primitive `sigFormat`. */
  _sigFormat?: Element;
  /** The actual signature content (XML DigSig. JWS, picture, etc.) (0..1) */
  data?: string;
  /** Id and extensions of the primitive `data`. */
  _data?: Element;
}
