/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Period } from './period';

/**
 * ContactPoint Type: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export interface ContactPoint {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** phone | fax | email | pager | url | sms | other (0..1) */
  system?: ContactPoint.SystemEnum;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** The actual contact point details (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** home | work | temp | old | mobile - purpose of this contact point (0..1) */
  use?: ContactPoint.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** Specify preferred order of use (1 = highest) (0..1) */
  rank?: number;
  /** Id and extensions of the primitive `rank`. */
  _rank?: Element;
  /** Time period when the contact point was/is in use (0..1) */
  period?: Period;
}

export namespace ContactPoint {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/contact-point-system */
  export type SystemEnum = 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other';
  export const SystemEnum = {
    Phone: 'phone' as SystemEnum,
    Fax: 'fax' as SystemEnum,
    Email: 'email' as SystemEnum,
    Pager: 'pager' as SystemEnum,
    Url: 'url' as SystemEnum,
    Sms: 'sms' as SystemEnum,
    Other: 'other' as SystemEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/contact-point-use */
  export type UseEnum = 'home' | 'work' | 'temp' | 'old' | 'mobile';
  export const UseEnum = {
    Home: 'home' as UseEnum,
    Work: 'work' as UseEnum,
    Temp: 'temp' as UseEnum,
    Old: 'old' as UseEnum,
    Mobile: 'mobile' as UseEnum,
  };
}
