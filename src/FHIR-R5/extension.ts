/**
 * FHIR Version R5
 * The following is auto generated resource definition.
 *
 * OpenAPI spec version: 3.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { Age } from './age';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { Availability } from './availability';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { ContactPoint } from './contactPoint';
import { Count } from './count';
import { DataRequirement } from './dataRequirement';
import { Distance } from './distance';
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Expression } from './expression';
import { ExtendedContactDetail } from './extendedContactDetail';
import { HumanName } from './humanName';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Money } from './money';
import { ParameterDefinition } from './parameterDefinition';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { RatioRange } from './ratioRange';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { SampledData } from './sampledData';
import { Signature } from './signature';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';
import { Uri } from './uri';
import { UsageContext } from './usageContext';

/**
 * Optional Extension Element - found in all resources.
 */
export interface Extension { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    url?: Uri;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBase64Binary?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBoolean?: boolean;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCanonical?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCode?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDate?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDateTime?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDecimal?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueId?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInstant?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInteger?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInteger64?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMarkdown?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueOid?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valuePositiveInt?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueString?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTime?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUnsignedInt?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUri?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUrl?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUuid?: string;
    valueAddress?: Address;
    valueAge?: Age;
    valueAnnotation?: Annotation;
    valueAttachment?: Attachment;
    valueCodeableConcept?: CodeableConcept;
    valueCodeableReference?: CodeableReference;
    valueCoding?: Coding;
    valueContactPoint?: ContactPoint;
    valueCount?: Count;
    valueDistance?: Distance;
    valueDuration?: Duration;
    valueHumanName?: HumanName;
    valueIdentifier?: Identifier;
    valueMoney?: Money;
    valuePeriod?: Period;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueRatio?: Ratio;
    valueRatioRange?: RatioRange;
    valueReference?: Reference;
    valueSampledData?: SampledData;
    valueSignature?: Signature;
    valueTiming?: Timing;
    valueContactDetail?: ContactDetail;
    valueDataRequirement?: DataRequirement;
    valueExpression?: Expression;
    valueParameterDefinition?: ParameterDefinition;
    valueRelatedArtifact?: RelatedArtifact;
    valueTriggerDefinition?: TriggerDefinition;
    valueUsageContext?: UsageContext;
    valueAvailability?: Availability;
    valueExtendedContactDetail?: ExtendedContactDetail;
    valueDosage?: Dosage;
    valueMeta?: Meta;
}