/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Base StructureDefinition for ContactDetail Type
 */
export class ContactDetail {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Name of an individual to contact (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Contact details for individual or organization (0..*) */
  telecom?: Array<ContactPoint>;
}
