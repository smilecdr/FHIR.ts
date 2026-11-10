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
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export class Ratio extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'numerator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'numerator', typeCode: 'Quantity' }],
    },
    {
      elementName: 'denominator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'denominator', typeCode: 'Quantity' }],
    },
  ];

  /** Numerator value (0..1) */
  numerator?: Quantity;

  /** Denominator value (0..1) */
  denominator?: Quantity;

  override fhirType(): string {
    return 'Ratio';
  }

  /** FHIR JSON for this Ratio, typed as the plain `Ratio` data type. */
  override toJSON(): plainTypes.Ratio {
    return this.serialize() as plainTypes.Ratio;
  }

  /** Numerator value (0..1) Created when absent. */
  getNumerator(): Quantity {
    if (this.numerator === undefined) {
      this.numerator = new Quantity();
    }
    return this.numerator;
  }

  setNumerator(numerator: Quantity | undefined): this {
    return this.setFieldValue('numerator', numerator);
  }

  hasNumerator(): boolean {
    return this.hasFieldValue('numerator');
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

modelTypeRegistry.register('Ratio', Ratio, false);
