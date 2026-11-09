/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Quantity } from './quantity';

/**
 * Base StructureDefinition for Money Type
 */
export class Money extends Quantity {
  static override readonly ownFields: readonly FieldDefinition[] = [];

  override fhirType(): string {
    return 'Money';
  }

  /** FHIR JSON for this Money, typed as the plain `Money` data type. */
  override toJSON(): plainTypes.Money {
    return this.serialize() as plainTypes.Money;
  }
}

modelTypeRegistry.register('Money', Money, false);
