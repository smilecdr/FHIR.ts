/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Quantity } from './quantity';

/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class ProdCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  height?: Quantity;
  /** Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  width?: Quantity;
  /** Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  depth?: Quantity;
  /** Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  weight?: Quantity;
  /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  nominalVolume?: Quantity;
  /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used (0..1) */
  externalDiameter?: Quantity;
  /** Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used (0..1) */
  shape?: string;
  /** Id and extensions of the primitive `shape`. */
  _shape?: Element;
  /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used (0..*) */
  color?: Array<string>;
  /** Id and extensions of the primitive `color`. */
  _color?: Array<Element | null>;
  /** Where applicable, the imprint can be specified as text (0..*) */
  imprint?: Array<string>;
  /** Id and extensions of the primitive `imprint`. */
  _imprint?: Array<Element | null>;
  /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations (0..*) */
  image?: Array<Attachment>;
  /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used (0..1) */
  scoring?: CodeableConcept;
}
