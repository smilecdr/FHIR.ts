/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';

/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export class UsageContext {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Type of context being specified (1..1) */
  code: Coding;
  /** Value that defines the context (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value that defines the context (1..1) */
  valueQuantity?: Quantity;
  /** Value that defines the context (1..1) */
  valueRange?: Range;
  /** Value that defines the context (1..1) */
  valueReference?: Reference;
}
