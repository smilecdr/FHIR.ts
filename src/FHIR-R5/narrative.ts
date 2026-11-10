/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Narrative Type: A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export interface Narrative {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** generated | extensions | additional | empty (1..1) */
  status?: Narrative.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Limited xhtml content (1..1) */
  div?: string;
  /** Id and extensions of the primitive `div`. */
  _div?: Element;
}

export namespace Narrative {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/narrative-status */
  export type StatusEnum = 'generated' | 'extensions' | 'additional' | 'empty';
  export const StatusEnum = {
    Generated: 'generated' as StatusEnum,
    Extensions: 'extensions' as StatusEnum,
    Additional: 'additional' as StatusEnum,
    Empty: 'empty' as StatusEnum,
  };
}
