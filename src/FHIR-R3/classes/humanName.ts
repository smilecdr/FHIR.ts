/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Period } from './period';

/**
 * Base StructureDefinition for HumanName Type
 */
export class HumanName {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** usual | official | temp | nickname | anonymous | old | maiden (0..1) */
  use?: HumanName.UseEnum;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;
  /** Text representation of the full name (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Family name (often called 'Surname') (0..1) */
  family?: string;
  /** Id and extensions of the primitive `family`. */
  _family?: Element;
  /** Given names (not always 'first'). Includes middle names (0..*) */
  given?: Array<string>;
  /** Id and extensions of the primitive `given`. */
  _given?: Array<Element | null>;
  /** Parts that come before the name (0..*) */
  prefix?: Array<string>;
  /** Id and extensions of the primitive `prefix`. */
  _prefix?: Array<Element | null>;
  /** Parts that come after the name (0..*) */
  suffix?: Array<string>;
  /** Id and extensions of the primitive `suffix`. */
  _suffix?: Array<Element | null>;
  /** Time period when name was/is in use (0..1) */
  period?: Period;
}

export namespace HumanName {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/name-use */
  export type UseEnum = 'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden';
  export const UseEnum = {
    Usual: 'usual' as UseEnum,
    Official: 'official' as UseEnum,
    Temp: 'temp' as UseEnum,
    Nickname: 'nickname' as UseEnum,
    Anonymous: 'anonymous' as UseEnum,
    Old: 'old' as UseEnum,
    Maiden: 'maiden' as UseEnum,
  };
}
