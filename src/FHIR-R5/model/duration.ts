/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Quantity } from './quantity';

/**
 * Duration Type: A length of time.
 */
export class Duration extends Quantity {
  static override readonly ownFields: readonly FieldDefinition[] = [];

  override fhirType(): string {
    return 'Duration';
  }

  /** FHIR JSON for this Duration, typed as the plain `Duration` data type. */
  override toJSON(): plainTypes.Duration {
    return this.serialize() as plainTypes.Duration;
  }
}

modelTypeRegistry.register('Duration', Duration, false);
