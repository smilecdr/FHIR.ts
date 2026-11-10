/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Quantity } from './quantity';

/**
 * The shelf-life and storage information for a medicinal product item or container can be described using this class.
 */
export class ProductShelfLife {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique identifier for the packaged Medicinal Product (0..1) */
  identifier?: Identifier;
  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified (1..1) */
  type: CodeableConcept;
  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (1..1) */
  period: Quantity;
  /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified (0..*) */
  specialPrecautionsForStorage?: Array<CodeableConcept>;
}
