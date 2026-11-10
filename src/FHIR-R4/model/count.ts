/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { Quantity } from './quantity';

/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
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
