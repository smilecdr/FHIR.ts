/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Element } from './element';
import { Quantity } from './quantity';

/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export class Range extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'low',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'low', typeCode: 'Quantity' }],
    },
    {
      elementName: 'high',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'high', typeCode: 'Quantity' }],
    },
  ];

  /** Low limit (0..1) */
  low?: Quantity;

  /** High limit (0..1) */
  high?: Quantity;

  override fhirType(): string {
    return 'Range';
  }

  /** FHIR JSON for this Range, typed as the plain `Range` data type. */
  override toJSON(): plainTypes.Range {
    return this.serialize() as plainTypes.Range;
  }

  /** Low limit (0..1) Created when absent. */
  getLow(): Quantity {
    if (this.low === undefined) {
      this.low = new Quantity();
    }
    return this.low;
  }

  setLow(low: Quantity | undefined): this {
    return this.setFieldValue('low', low);
  }

  hasLow(): boolean {
    return this.hasFieldValue('low');
  }

  /** High limit (0..1) Created when absent. */
  getHigh(): Quantity {
    if (this.high === undefined) {
      this.high = new Quantity();
    }
    return this.high;
  }

  setHigh(high: Quantity | undefined): this {
    return this.setFieldValue('high', high);
  }

  hasHigh(): boolean {
    return this.hasFieldValue('high');
  }
}

modelTypeRegistry.register('Range', Range, false);
