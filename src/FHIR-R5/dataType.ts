/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';

/**
 * DataType Type: The base class for all re-useable types defined as part of the FHIR Specification.
 */
export interface DataType {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
}
