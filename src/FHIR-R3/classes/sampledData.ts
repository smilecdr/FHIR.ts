/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Quantity } from './quantity';

/**
 * Base StructureDefinition for SampledData Type
 */
export class SampledData {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Zero value and units (1..1) */
  origin: Quantity;
  /** Number of milliseconds between samples (1..1) */
  period?: number;
  /** Id and extensions of the primitive `period`. */
  _period?: Element;
  /** Multiply data by this before adding to origin (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Lower limit of detection (0..1) */
  lowerLimit?: number;
  /** Id and extensions of the primitive `lowerLimit`. */
  _lowerLimit?: Element;
  /** Upper limit of detection (0..1) */
  upperLimit?: number;
  /** Id and extensions of the primitive `upperLimit`. */
  _upperLimit?: Element;
  /** Number of sample points at each time point (1..1) */
  dimensions?: number;
  /** Id and extensions of the primitive `dimensions`. */
  _dimensions?: Element;
  /** Decimal values with spaces, or "E" | "U" | "L" (1..1) */
  data?: string;
  /** Id and extensions of the primitive `data`. */
  _data?: Element;
}
