/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { DataType } from './dataType';
import { Quantity } from './quantity';

/**
 * RatioRange Type: A range of ratios expressed as a low and high numerator and a denominator.
 */
export class RatioRange extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'lowNumerator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lowNumerator', typeCode: 'Quantity' }],
    },
    {
      elementName: 'highNumerator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'highNumerator', typeCode: 'Quantity' }],
    },
    {
      elementName: 'denominator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'denominator', typeCode: 'Quantity' }],
    },
  ];

  /** Low Numerator limit (0..1) */
  lowNumerator?: Quantity;

  /** High Numerator limit (0..1) */
  highNumerator?: Quantity;

  /** Denominator value (0..1) */
  denominator?: Quantity;

  override fhirType(): string {
    return 'RatioRange';
  }

  /** FHIR JSON for this RatioRange, typed as the plain `RatioRange` data type. */
  override toJSON(): plainTypes.RatioRange {
    return this.serialize() as plainTypes.RatioRange;
  }

  /** Low Numerator limit (0..1) Created when absent. */
  getLowNumerator(): Quantity {
    if (this.lowNumerator === undefined) {
      this.lowNumerator = new Quantity();
    }
    return this.lowNumerator;
  }

  setLowNumerator(lowNumerator: Quantity | undefined): this {
    return this.setFieldValue('lowNumerator', lowNumerator);
  }

  hasLowNumerator(): boolean {
    return this.hasFieldValue('lowNumerator');
  }

  /** High Numerator limit (0..1) Created when absent. */
  getHighNumerator(): Quantity {
    if (this.highNumerator === undefined) {
      this.highNumerator = new Quantity();
    }
    return this.highNumerator;
  }

  setHighNumerator(highNumerator: Quantity | undefined): this {
    return this.setFieldValue('highNumerator', highNumerator);
  }

  hasHighNumerator(): boolean {
    return this.hasFieldValue('highNumerator');
  }

  /** Denominator value (0..1) Created when absent. */
  getDenominator(): Quantity {
    if (this.denominator === undefined) {
      this.denominator = new Quantity();
    }
    return this.denominator;
  }

  setDenominator(denominator: Quantity | undefined): this {
    return this.setFieldValue('denominator', denominator);
  }

  hasDenominator(): boolean {
    return this.hasFieldValue('denominator');
  }
}

modelTypeRegistry.register('RatioRange', RatioRange, false);
