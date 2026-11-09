/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Quantity } from './quantity';

/**
 * Distance Type: A length - a value with a unit that is a physical distance.
 */
export class Distance extends Quantity {
  static override readonly ownFields: readonly FieldDefinition[] = [];

  override fhirType(): string {
    return 'Distance';
  }

  /** FHIR JSON for this Distance, typed as the plain `Distance` data type. */
  override toJSON(): plainTypes.Distance {
    return this.serialize() as plainTypes.Distance;
  }
}

modelTypeRegistry.register('Distance', Distance, false);
