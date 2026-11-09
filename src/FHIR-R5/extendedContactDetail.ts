/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { CodeableConcept } from './codeableConcept';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { HumanName } from './humanName';
import type { Period } from './period';
import type { Reference } from './reference';

/**
 * ExtendedContactDetail Type: Specifies contact information for a specific purpose over a period of time, might be handled/monitored by a specific named person or organization.
 */
export interface ExtendedContactDetail {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** The type of contact (0..1) */
  purpose?: CodeableConcept;
  /** Name of an individual to contact (0..*) */
  name?: Array<HumanName>;
  /** Contact details (e.g.phone/fax/url) (0..*) */
  telecom?: Array<ContactPoint>;
  /** Address for the contact (0..1) */
  address?: Address;
  /** This contact detail is handled/monitored by a specific organization (0..1) */
  organization?: Reference;
  /** Period that this contact was valid for usage (0..1) */
  period?: Period;
}
