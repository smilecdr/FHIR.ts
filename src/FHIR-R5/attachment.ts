/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Attachment Type: For referring to data content defined in other formats.
 */
export interface Attachment {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Mime type of the content, with charset etc. (0..1) */
  contentType?: string;
  /** Id and extensions of the primitive `contentType`. */
  _contentType?: Element;
  /** Human language of the content (BCP-47) (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Data inline, base64ed (0..1) */
  data?: string;
  /** Id and extensions of the primitive `data`. */
  _data?: Element;
  /** Uri where the data can be found (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Number of bytes of content (if url provided) (0..1) */
  size?: string;
  /** Id and extensions of the primitive `size`. */
  _size?: Element;
  /** Hash of the data (sha-1, base64ed) (0..1) */
  hash?: string;
  /** Id and extensions of the primitive `hash`. */
  _hash?: Element;
  /** Label to display in place of the data (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Date attachment was first created (0..1) */
  creation?: string;
  /** Id and extensions of the primitive `creation`. */
  _creation?: Element;
  /** Height of the image in pixels (photo/video) (0..1) */
  height?: number;
  /** Id and extensions of the primitive `height`. */
  _height?: Element;
  /** Width of the image in pixels (photo/video) (0..1) */
  width?: number;
  /** Id and extensions of the primitive `width`. */
  _width?: Element;
  /** Number of frames if > 1 (photo) (0..1) */
  frames?: number;
  /** Id and extensions of the primitive `frames`. */
  _frames?: Element;
  /** Length in seconds (audio / video) (0..1) */
  duration?: number;
  /** Id and extensions of the primitive `duration`. */
  _duration?: Element;
  /** Number of printed pages (0..1) */
  pages?: number;
  /** Id and extensions of the primitive `pages`. */
  _pages?: Element;
}
