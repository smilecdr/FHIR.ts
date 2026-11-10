/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Money } from './money';

/**
 * MonetaryComponent Type: Availability data for an {item}.
 */
export interface MonetaryComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** base | surcharge | deduction | discount | tax | informational (1..1) */
  type?: MonetaryComponent.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc. (0..1) */
  code?: CodeableConcept;
  /** Factor used for calculating this component (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Explicit value amount to be used (0..1) */
  amount?: Money;
}

export namespace MonetaryComponent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/price-component-type */
  export type TypeEnum = 'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational';
  export const TypeEnum = {
    Base: 'base' as TypeEnum,
    Surcharge: 'surcharge' as TypeEnum,
    Deduction: 'deduction' as TypeEnum,
    Discount: 'discount' as TypeEnum,
    Tax: 'tax' as TypeEnum,
    Informational: 'informational' as TypeEnum,
  };
}
