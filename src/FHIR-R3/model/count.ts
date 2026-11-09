/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Quantity } from './quantity';

/**
 * Base StructureDefinition for Count Type
 */
export class Count extends Quantity {
  static override readonly ownFields: readonly FieldDefinition[] = [];

  override fhirType(): string {
    return 'Count';
  }

  /** FHIR JSON for this Count, typed as the plain `Count` data type. */
  override toJSON(): plainTypes.Count {
    return this.serialize() as plainTypes.Count;
  }
}

modelTypeRegistry.register('Count', Count, false);
