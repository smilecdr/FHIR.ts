/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import { Element } from './element';

/**
 * DataType Type: The base class for all re-useable types defined as part of the FHIR Specification.
 */
export abstract class DataType extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [];

  override fhirType(): string {
    return 'DataType';
  }
}

modelTypeRegistry.register('DataType', DataType, false);
