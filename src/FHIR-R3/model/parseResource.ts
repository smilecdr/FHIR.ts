/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { ParseOptions } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type { Resource } from './resource';

/**
 * Builds the model for any FHIR R3 resource, choosing the class from the JSON's `resourceType`.
 * Throws a FhirModelError when the resource type is unknown or the JSON does not match it.
 */
export function parseResource(json: unknown, parseOptions: ParseOptions = {}): Resource {
  return modelTypeRegistry.parseResource(json, parseOptions) as Resource;
}
