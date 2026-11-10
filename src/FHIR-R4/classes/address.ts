/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Period } from './period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats). This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery. There are a variety of postal address formats defined around the world.
 */
export class Address {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** home | work | temp | old | billing - purpose of this address (0..1) */
  use?: Address.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** postal | physical | both (0..1) */
  type?: Address.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Text representation of the address (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Street name, number, direction & P.O. Box etc. (0..*) */
  line?: Array<string>;
  /** Id and extensions of the primitive `line`. */
  _line?: Array<Element | null>;
  /** Name of city, town etc. (0..1) */
  city?: string;
  /** Id and extensions of the primitive `city`. */
  _city?: Element;
  /** District name (aka county) (0..1) */
  district?: string;
  /** Id and extensions of the primitive `district`. */
  _district?: Element;
  /** Sub-unit of country (abbreviations ok) (0..1) */
  state?: string;
  /** Id and extensions of the primitive `state`. */
  _state?: Element;
  /** Postal code for area (0..1) */
  postalCode?: string;
  /** Id and extensions of the primitive `postalCode`. */
  _postalCode?: Element;
  /** Country (e.g. can be ISO 3166 2 or 3 letter code) (0..1) */
  country?: string;
  /** Id and extensions of the primitive `country`. */
  _country?: Element;
  /** Time period when address was/is in use (0..1) */
  period?: Period;
}

export namespace Address {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/address-use */
  export type UseEnum = 'home' | 'work' | 'temp' | 'old' | 'billing';
  export const UseEnum = {
    Home: 'home' as UseEnum,
    Work: 'work' as UseEnum,
    Temp: 'temp' as UseEnum,
    Old: 'old' as UseEnum,
    Billing: 'billing' as UseEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/address-type */
  export type TypeEnum = 'postal' | 'physical' | 'both';
  export const TypeEnum = {
    Postal: 'postal' as TypeEnum,
    Physical: 'physical' as TypeEnum,
    Both: 'both' as TypeEnum,
  };
}
