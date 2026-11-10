/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Quantity } from './quantity';

/**
 * Age Type: A duration of time during which an organism (or a process) has existed.
 */
export class Age extends Quantity {
  static override readonly ownFields: readonly FieldDefinition[] = [];

  override fhirType(): string {
    return 'Age';
  }

  /** FHIR JSON for this Age, typed as the plain `Age` data type. */
  override toJSON(): plainTypes.Age {
    return this.serialize() as plainTypes.Age;
  }
}

modelTypeRegistry.register('Age', Age, false);
