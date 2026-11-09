/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Quantity } from './quantity';
import type { Range } from './range';

/**
 * Base StructureDefinition for UsageContext Type
 */
export class UsageContext {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Type of context being specified (1..1) */
  code: Coding;
  /** Value that defines the context (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value that defines the context (1..1) */
  valueQuantity?: Quantity;
  /** Value that defines the context (1..1) */
  valueRange?: Range;
}
