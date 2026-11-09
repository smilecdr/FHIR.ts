/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';

/**
 * Specifies contact information for a person or organization.
 */
export class ContactDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Name of an individual to contact (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Contact details for individual or organization (0..*) */
  telecom?: Array<ContactPoint>;
}
