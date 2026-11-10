/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Age } from './age';
import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactPoint } from './contactPoint';
import type { Count } from './count';
import type { Distance } from './distance';
import type { Duration } from './duration';
import type { Element } from './element';
import type { HumanName } from './humanName';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { SampledData } from './sampledData';
import type { Signature } from './signature';
import type { Timing } from './timing';

/**
 * Base StructureDefinition for Extension Type
 */
export class Extension {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** identifies the meaning of the extension (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Value of extension (0..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Value of extension (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of extension (0..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of extension (0..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Value of extension (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Value of extension (0..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Value of extension (0..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Value of extension (0..1) */
  valueInstant?: string;
  /** Id and extensions of the primitive `valueInstant`. */
  _valueInstant?: Element;
  /** Value of extension (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of extension (0..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** Value of extension (0..1) */
  valueOid?: string;
  /** Id and extensions of the primitive `valueOid`. */
  _valueOid?: Element;
  /** Value of extension (0..1) */
  valuePositiveInt?: number;
  /** Id and extensions of the primitive `valuePositiveInt`. */
  _valuePositiveInt?: Element;
  /** Value of extension (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of extension (0..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Value of extension (0..1) */
  valueUnsignedInt?: number;
  /** Id and extensions of the primitive `valueUnsignedInt`. */
  _valueUnsignedInt?: Element;
  /** Value of extension (0..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Value of extension (0..1) */
  valueAddress?: Address;
  /** Value of extension (0..1) */
  valueAge?: Age;
  /** Value of extension (0..1) */
  valueAnnotation?: Annotation;
  /** Value of extension (0..1) */
  valueAttachment?: Attachment;
  /** Value of extension (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value of extension (0..1) */
  valueCoding?: Coding;
  /** Value of extension (0..1) */
  valueContactPoint?: ContactPoint;
  /** Value of extension (0..1) */
  valueCount?: Count;
  /** Value of extension (0..1) */
  valueDistance?: Distance;
  /** Value of extension (0..1) */
  valueDuration?: Duration;
  /** Value of extension (0..1) */
  valueHumanName?: HumanName;
  /** Value of extension (0..1) */
  valueIdentifier?: Identifier;
  /** Value of extension (0..1) */
  valueMoney?: Money;
  /** Value of extension (0..1) */
  valuePeriod?: Period;
  /** Value of extension (0..1) */
  valueQuantity?: Quantity;
  /** Value of extension (0..1) */
  valueRange?: Range;
  /** Value of extension (0..1) */
  valueRatio?: Ratio;
  /** Value of extension (0..1) */
  valueReference?: Reference;
  /** Value of extension (0..1) */
  valueSampledData?: SampledData;
  /** Value of extension (0..1) */
  valueSignature?: Signature;
  /** Value of extension (0..1) */
  valueTiming?: Timing;
  /** Value of extension (0..1) */
  valueMeta?: Meta;
}
