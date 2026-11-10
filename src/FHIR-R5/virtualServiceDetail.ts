/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Coding } from './coding';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { ExtendedContactDetail } from './extendedContactDetail';
import type { Extension } from './extension';

/**
 * VirtualServiceDetail Type: Virtual Service Contact Details.
 */
export interface VirtualServiceDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Channel Type (0..1) */
  channelType?: Coding;
  /** Contact address/number (0..1) */
  addressUrl?: string;
  /** Id and extensions of the primitive `addressUrl`. */
  _addressUrl?: Element;
  /** Contact address/number (0..1) */
  addressString?: string;
  /** Id and extensions of the primitive `addressString`. */
  _addressString?: Element;
  /** Contact address/number (0..1) */
  addressContactPoint?: ContactPoint;
  /** Contact address/number (0..1) */
  addressExtendedContactDetail?: ExtendedContactDetail;
  /** Address to see alternative connection details (0..*) */
  additionalInfo?: Array<string>;
  /** Id and extensions of the primitive `additionalInfo`. */
  _additionalInfo?: Array<Element | null>;
  /** Maximum number of participants supported by the virtual service (0..1) */
  maxParticipants?: number;
  /** Id and extensions of the primitive `maxParticipants`. */
  _maxParticipants?: Element;
  /** Session Key required by the virtual service (0..1) */
  sessionKey?: string;
  /** Id and extensions of the primitive `sessionKey`. */
  _sessionKey?: Element;
}
