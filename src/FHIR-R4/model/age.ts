/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Quantity } from './quantity';

/**
 * A duration of time during which an organism (or a process) has existed.
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
