/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Age } from './age';
import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { ContactPoint } from './contactPoint';
import type { Contributor } from './contributor';
import type { Count } from './count';
import type { DataRequirement } from './dataRequirement';
import type { Distance } from './distance';
import type { Dosage } from './dosage';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { HumanName } from './humanName';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { ParameterDefinition } from './parameterDefinition';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { Resource } from './resourceList';
import type { SampledData } from './sampledData';
import type { Signature } from './signature';
import type { Timing } from './timing';
import type { TriggerDefinition } from './triggerDefinition';
import type { UsageContext } from './usageContext';

/**
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export class Parameters {
  resourceType: 'Parameters';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Operation Parameter (0..*) */
  parameter?: Array<ParametersParameter>;
}

/**
 * Operation Parameter
 */
export class ParametersParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name from the definition (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** If parameter is a data type (0..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** If parameter is a data type (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** If parameter is a data type (0..1) */
  valueCanonical?: string;
  /** Id and extensions of the primitive `valueCanonical`. */
  _valueCanonical?: Element;
  /** If parameter is a data type (0..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** If parameter is a data type (0..1) */
  valueDate?: Date | string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** If parameter is a data type (0..1) */
  valueDateTime?: Date | string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** If parameter is a data type (0..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** If parameter is a data type (0..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** If parameter is a data type (0..1) */
  valueInstant?: Date | string;
  /** Id and extensions of the primitive `valueInstant`. */
  _valueInstant?: Element;
  /** If parameter is a data type (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** If parameter is a data type (0..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** If parameter is a data type (0..1) */
  valueOid?: string;
  /** Id and extensions of the primitive `valueOid`. */
  _valueOid?: Element;
  /** If parameter is a data type (0..1) */
  valuePositiveInt?: number;
  /** Id and extensions of the primitive `valuePositiveInt`. */
  _valuePositiveInt?: Element;
  /** If parameter is a data type (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** If parameter is a data type (0..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** If parameter is a data type (0..1) */
  valueUnsignedInt?: number;
  /** Id and extensions of the primitive `valueUnsignedInt`. */
  _valueUnsignedInt?: Element;
  /** If parameter is a data type (0..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** If parameter is a data type (0..1) */
  valueUrl?: string;
  /** Id and extensions of the primitive `valueUrl`. */
  _valueUrl?: Element;
  /** If parameter is a data type (0..1) */
  valueUuid?: string;
  /** Id and extensions of the primitive `valueUuid`. */
  _valueUuid?: Element;
  /** If parameter is a data type (0..1) */
  valueAddress?: Address;
  /** If parameter is a data type (0..1) */
  valueAge?: Age;
  /** If parameter is a data type (0..1) */
  valueAnnotation?: Annotation;
  /** If parameter is a data type (0..1) */
  valueAttachment?: Attachment;
  /** If parameter is a data type (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** If parameter is a data type (0..1) */
  valueCoding?: Coding;
  /** If parameter is a data type (0..1) */
  valueContactPoint?: ContactPoint;
  /** If parameter is a data type (0..1) */
  valueCount?: Count;
  /** If parameter is a data type (0..1) */
  valueDistance?: Distance;
  /** If parameter is a data type (0..1) */
  valueDuration?: Duration;
  /** If parameter is a data type (0..1) */
  valueHumanName?: HumanName;
  /** If parameter is a data type (0..1) */
  valueIdentifier?: Identifier;
  /** If parameter is a data type (0..1) */
  valueMoney?: Money;
  /** If parameter is a data type (0..1) */
  valuePeriod?: Period;
  /** If parameter is a data type (0..1) */
  valueQuantity?: Quantity;
  /** If parameter is a data type (0..1) */
  valueRange?: Range;
  /** If parameter is a data type (0..1) */
  valueRatio?: Ratio;
  /** If parameter is a data type (0..1) */
  valueReference?: Reference;
  /** If parameter is a data type (0..1) */
  valueSampledData?: SampledData;
  /** If parameter is a data type (0..1) */
  valueSignature?: Signature;
  /** If parameter is a data type (0..1) */
  valueTiming?: Timing;
  /** If parameter is a data type (0..1) */
  valueContactDetail?: ContactDetail;
  /** If parameter is a data type (0..1) */
  valueContributor?: Contributor;
  /** If parameter is a data type (0..1) */
  valueDataRequirement?: DataRequirement;
  /** If parameter is a data type (0..1) */
  valueExpression?: Expression;
  /** If parameter is a data type (0..1) */
  valueParameterDefinition?: ParameterDefinition;
  /** If parameter is a data type (0..1) */
  valueRelatedArtifact?: RelatedArtifact;
  /** If parameter is a data type (0..1) */
  valueTriggerDefinition?: TriggerDefinition;
  /** If parameter is a data type (0..1) */
  valueUsageContext?: UsageContext;
  /** If parameter is a data type (0..1) */
  valueDosage?: Dosage;
  /** If parameter is a data type (0..1) */
  valueMeta?: Meta;
  /** If parameter is a whole resource (0..1) */
  resource?: Resource;
  /** Named part of a multi-part parameter (0..*) */
  part?: Array<ParametersParameter>;
}
