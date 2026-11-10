/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Quantity } from './quantity';

/**
 * Base StructureDefinition for Age Type
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
