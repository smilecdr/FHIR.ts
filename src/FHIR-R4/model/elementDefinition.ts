/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Address } from './address';
import { Age } from './age';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { ContactPoint } from './contactPoint';
import { Contributor } from './contributor';
import { Count } from './count';
import { DataRequirement } from './dataRequirement';
import { Distance } from './distance';
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Element } from './element';
import { Expression } from './expression';
import { HumanName } from './humanName';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Money } from './money';
import { ParameterDefinition } from './parameterDefinition';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { SampledData } from './sampledData';
import { Signature } from './signature';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';
import { UsageContext } from './usageContext';

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export class ElementDefinition extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'path',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'representation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'representation',
          typeCode: 'code',
          allowedCodes: valueSetCodes.PropertyRepresentation,
        },
      ],
    },
    {
      elementName: 'sliceName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sliceName', typeCode: 'string' }],
    },
    {
      elementName: 'sliceIsConstraining',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sliceIsConstraining', typeCode: 'boolean' }],
    },
    {
      elementName: 'label',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'label', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'Coding' }],
    },
    {
      elementName: 'slicing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'slicing', typeCode: 'ElementDefinitionSlicing' }],
    },
    {
      elementName: 'short',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'short', typeCode: 'string' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'markdown' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'markdown' }],
    },
    {
      elementName: 'requirements',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requirements', typeCode: 'markdown' }],
    },
    {
      elementName: 'alias',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'alias', typeCode: 'string' }],
    },
    {
      elementName: 'min',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'min', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'max',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'max', typeCode: 'string' }],
    },
    {
      elementName: 'base',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'base', typeCode: 'ElementDefinitionBase' }],
    },
    {
      elementName: 'contentReference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentReference', typeCode: 'uri' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'ElementDefinitionType' }],
    },
    {
      elementName: 'defaultValue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'defaultValueBase64Binary', typeCode: 'base64Binary' },
        { jsonKey: 'defaultValueBoolean', typeCode: 'boolean' },
        { jsonKey: 'defaultValueCanonical', typeCode: 'canonical' },
        { jsonKey: 'defaultValueCode', typeCode: 'code' },
        { jsonKey: 'defaultValueDate', typeCode: 'date' },
        { jsonKey: 'defaultValueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'defaultValueDecimal', typeCode: 'decimal' },
        { jsonKey: 'defaultValueId', typeCode: 'id' },
        { jsonKey: 'defaultValueInstant', typeCode: 'instant' },
        { jsonKey: 'defaultValueInteger', typeCode: 'integer' },
        { jsonKey: 'defaultValueMarkdown', typeCode: 'markdown' },
        { jsonKey: 'defaultValueOid', typeCode: 'oid' },
        { jsonKey: 'defaultValuePositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'defaultValueString', typeCode: 'string' },
        { jsonKey: 'defaultValueTime', typeCode: 'time' },
        { jsonKey: 'defaultValueUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'defaultValueUri', typeCode: 'uri' },
        { jsonKey: 'defaultValueUrl', typeCode: 'url' },
        { jsonKey: 'defaultValueUuid', typeCode: 'uuid' },
        { jsonKey: 'defaultValueAddress', typeCode: 'Address' },
        { jsonKey: 'defaultValueAge', typeCode: 'Age' },
        { jsonKey: 'defaultValueAnnotation', typeCode: 'Annotation' },
        { jsonKey: 'defaultValueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'defaultValueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'defaultValueCoding', typeCode: 'Coding' },
        { jsonKey: 'defaultValueContactPoint', typeCode: 'ContactPoint' },
        { jsonKey: 'defaultValueCount', typeCode: 'Count' },
        { jsonKey: 'defaultValueDistance', typeCode: 'Distance' },
        { jsonKey: 'defaultValueDuration', typeCode: 'Duration' },
        { jsonKey: 'defaultValueHumanName', typeCode: 'HumanName' },
        { jsonKey: 'defaultValueIdentifier', typeCode: 'Identifier' },
        { jsonKey: 'defaultValueMoney', typeCode: 'Money' },
        { jsonKey: 'defaultValuePeriod', typeCode: 'Period' },
        { jsonKey: 'defaultValueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'defaultValueRange', typeCode: 'Range' },
        { jsonKey: 'defaultValueRatio', typeCode: 'Ratio' },
        { jsonKey: 'defaultValueReference', typeCode: 'Reference' },
        { jsonKey: 'defaultValueSampledData', typeCode: 'SampledData' },
        { jsonKey: 'defaultValueSignature', typeCode: 'Signature' },
        { jsonKey: 'defaultValueTiming', typeCode: 'Timing' },
        { jsonKey: 'defaultValueContactDetail', typeCode: 'ContactDetail' },
        { jsonKey: 'defaultValueContributor', typeCode: 'Contributor' },
        { jsonKey: 'defaultValueDataRequirement', typeCode: 'DataRequirement' },
        { jsonKey: 'defaultValueExpression', typeCode: 'Expression' },
        { jsonKey: 'defaultValueParameterDefinition', typeCode: 'ParameterDefinition' },
        { jsonKey: 'defaultValueRelatedArtifact', typeCode: 'RelatedArtifact' },
        { jsonKey: 'defaultValueTriggerDefinition', typeCode: 'TriggerDefinition' },
        { jsonKey: 'defaultValueUsageContext', typeCode: 'UsageContext' },
        { jsonKey: 'defaultValueDosage', typeCode: 'Dosage' },
        { jsonKey: 'defaultValueMeta', typeCode: 'Meta' },
      ],
    },
    {
      elementName: 'meaningWhenMissing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'meaningWhenMissing', typeCode: 'markdown' }],
    },
    {
      elementName: 'orderMeaning',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'orderMeaning', typeCode: 'string' }],
    },
    {
      elementName: 'fixed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'fixedBase64Binary', typeCode: 'base64Binary' },
        { jsonKey: 'fixedBoolean', typeCode: 'boolean' },
        { jsonKey: 'fixedCanonical', typeCode: 'canonical' },
        { jsonKey: 'fixedCode', typeCode: 'code' },
        { jsonKey: 'fixedDate', typeCode: 'date' },
        { jsonKey: 'fixedDateTime', typeCode: 'dateTime' },
        { jsonKey: 'fixedDecimal', typeCode: 'decimal' },
        { jsonKey: 'fixedId', typeCode: 'id' },
        { jsonKey: 'fixedInstant', typeCode: 'instant' },
        { jsonKey: 'fixedInteger', typeCode: 'integer' },
        { jsonKey: 'fixedMarkdown', typeCode: 'markdown' },
        { jsonKey: 'fixedOid', typeCode: 'oid' },
        { jsonKey: 'fixedPositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'fixedString', typeCode: 'string' },
        { jsonKey: 'fixedTime', typeCode: 'time' },
        { jsonKey: 'fixedUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'fixedUri', typeCode: 'uri' },
        { jsonKey: 'fixedUrl', typeCode: 'url' },
        { jsonKey: 'fixedUuid', typeCode: 'uuid' },
        { jsonKey: 'fixedAddress', typeCode: 'Address' },
        { jsonKey: 'fixedAge', typeCode: 'Age' },
        { jsonKey: 'fixedAnnotation', typeCode: 'Annotation' },
        { jsonKey: 'fixedAttachment', typeCode: 'Attachment' },
        { jsonKey: 'fixedCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'fixedCoding', typeCode: 'Coding' },
        { jsonKey: 'fixedContactPoint', typeCode: 'ContactPoint' },
        { jsonKey: 'fixedCount', typeCode: 'Count' },
        { jsonKey: 'fixedDistance', typeCode: 'Distance' },
        { jsonKey: 'fixedDuration', typeCode: 'Duration' },
        { jsonKey: 'fixedHumanName', typeCode: 'HumanName' },
        { jsonKey: 'fixedIdentifier', typeCode: 'Identifier' },
        { jsonKey: 'fixedMoney', typeCode: 'Money' },
        { jsonKey: 'fixedPeriod', typeCode: 'Period' },
        { jsonKey: 'fixedQuantity', typeCode: 'Quantity' },
        { jsonKey: 'fixedRange', typeCode: 'Range' },
        { jsonKey: 'fixedRatio', typeCode: 'Ratio' },
        { jsonKey: 'fixedReference', typeCode: 'Reference' },
        { jsonKey: 'fixedSampledData', typeCode: 'SampledData' },
        { jsonKey: 'fixedSignature', typeCode: 'Signature' },
        { jsonKey: 'fixedTiming', typeCode: 'Timing' },
        { jsonKey: 'fixedContactDetail', typeCode: 'ContactDetail' },
        { jsonKey: 'fixedContributor', typeCode: 'Contributor' },
        { jsonKey: 'fixedDataRequirement', typeCode: 'DataRequirement' },
        { jsonKey: 'fixedExpression', typeCode: 'Expression' },
        { jsonKey: 'fixedParameterDefinition', typeCode: 'ParameterDefinition' },
        { jsonKey: 'fixedRelatedArtifact', typeCode: 'RelatedArtifact' },
        { jsonKey: 'fixedTriggerDefinition', typeCode: 'TriggerDefinition' },
        { jsonKey: 'fixedUsageContext', typeCode: 'UsageContext' },
        { jsonKey: 'fixedDosage', typeCode: 'Dosage' },
        { jsonKey: 'fixedMeta', typeCode: 'Meta' },
      ],
    },
    {
      elementName: 'pattern',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'patternBase64Binary', typeCode: 'base64Binary' },
        { jsonKey: 'patternBoolean', typeCode: 'boolean' },
        { jsonKey: 'patternCanonical', typeCode: 'canonical' },
        { jsonKey: 'patternCode', typeCode: 'code' },
        { jsonKey: 'patternDate', typeCode: 'date' },
        { jsonKey: 'patternDateTime', typeCode: 'dateTime' },
        { jsonKey: 'patternDecimal', typeCode: 'decimal' },
        { jsonKey: 'patternId', typeCode: 'id' },
        { jsonKey: 'patternInstant', typeCode: 'instant' },
        { jsonKey: 'patternInteger', typeCode: 'integer' },
        { jsonKey: 'patternMarkdown', typeCode: 'markdown' },
        { jsonKey: 'patternOid', typeCode: 'oid' },
        { jsonKey: 'patternPositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'patternString', typeCode: 'string' },
        { jsonKey: 'patternTime', typeCode: 'time' },
        { jsonKey: 'patternUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'patternUri', typeCode: 'uri' },
        { jsonKey: 'patternUrl', typeCode: 'url' },
        { jsonKey: 'patternUuid', typeCode: 'uuid' },
        { jsonKey: 'patternAddress', typeCode: 'Address' },
        { jsonKey: 'patternAge', typeCode: 'Age' },
        { jsonKey: 'patternAnnotation', typeCode: 'Annotation' },
        { jsonKey: 'patternAttachment', typeCode: 'Attachment' },
        { jsonKey: 'patternCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'patternCoding', typeCode: 'Coding' },
        { jsonKey: 'patternContactPoint', typeCode: 'ContactPoint' },
        { jsonKey: 'patternCount', typeCode: 'Count' },
        { jsonKey: 'patternDistance', typeCode: 'Distance' },
        { jsonKey: 'patternDuration', typeCode: 'Duration' },
        { jsonKey: 'patternHumanName', typeCode: 'HumanName' },
        { jsonKey: 'patternIdentifier', typeCode: 'Identifier' },
        { jsonKey: 'patternMoney', typeCode: 'Money' },
        { jsonKey: 'patternPeriod', typeCode: 'Period' },
        { jsonKey: 'patternQuantity', typeCode: 'Quantity' },
        { jsonKey: 'patternRange', typeCode: 'Range' },
        { jsonKey: 'patternRatio', typeCode: 'Ratio' },
        { jsonKey: 'patternReference', typeCode: 'Reference' },
        { jsonKey: 'patternSampledData', typeCode: 'SampledData' },
        { jsonKey: 'patternSignature', typeCode: 'Signature' },
        { jsonKey: 'patternTiming', typeCode: 'Timing' },
        { jsonKey: 'patternContactDetail', typeCode: 'ContactDetail' },
        { jsonKey: 'patternContributor', typeCode: 'Contributor' },
        { jsonKey: 'patternDataRequirement', typeCode: 'DataRequirement' },
        { jsonKey: 'patternExpression', typeCode: 'Expression' },
        { jsonKey: 'patternParameterDefinition', typeCode: 'ParameterDefinition' },
        { jsonKey: 'patternRelatedArtifact', typeCode: 'RelatedArtifact' },
        { jsonKey: 'patternTriggerDefinition', typeCode: 'TriggerDefinition' },
        { jsonKey: 'patternUsageContext', typeCode: 'UsageContext' },
        { jsonKey: 'patternDosage', typeCode: 'Dosage' },
        { jsonKey: 'patternMeta', typeCode: 'Meta' },
      ],
    },
    {
      elementName: 'example',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'example', typeCode: 'ElementDefinitionExample' }],
    },
    {
      elementName: 'minValue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'minValueDate', typeCode: 'date' },
        { jsonKey: 'minValueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'minValueInstant', typeCode: 'instant' },
        { jsonKey: 'minValueTime', typeCode: 'time' },
        { jsonKey: 'minValueDecimal', typeCode: 'decimal' },
        { jsonKey: 'minValueInteger', typeCode: 'integer' },
        { jsonKey: 'minValuePositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'minValueUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'minValueQuantity', typeCode: 'Quantity' },
      ],
    },
    {
      elementName: 'maxValue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'maxValueDate', typeCode: 'date' },
        { jsonKey: 'maxValueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'maxValueInstant', typeCode: 'instant' },
        { jsonKey: 'maxValueTime', typeCode: 'time' },
        { jsonKey: 'maxValueDecimal', typeCode: 'decimal' },
        { jsonKey: 'maxValueInteger', typeCode: 'integer' },
        { jsonKey: 'maxValuePositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'maxValueUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'maxValueQuantity', typeCode: 'Quantity' },
      ],
    },
    {
      elementName: 'maxLength',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxLength', typeCode: 'integer' }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'condition', typeCode: 'id' }],
    },
    {
      elementName: 'constraint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'constraint', typeCode: 'ElementDefinitionConstraint' }],
    },
    {
      elementName: 'mustSupport',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mustSupport', typeCode: 'boolean' }],
    },
    {
      elementName: 'isModifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isModifier', typeCode: 'boolean' }],
    },
    {
      elementName: 'isModifierReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isModifierReason', typeCode: 'string' }],
    },
    {
      elementName: 'isSummary',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isSummary', typeCode: 'boolean' }],
    },
    {
      elementName: 'binding',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'binding', typeCode: 'ElementDefinitionBinding' }],
    },
    {
      elementName: 'mapping',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'mapping', typeCode: 'ElementDefinitionMapping' }],
    },
  ];

  /** Path of the element in the hierarchy of elements (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** xmlAttr | xmlText | typeAttr | cdaText | xhtml (0..*) */
  representation?: valueSetCodes.PropertyRepresentation[];
  /** Id and extensions of the primitive `representation`. */
  _representation?: (Element | null)[];

  /** Name for this particular element (in a set of slices) (0..1) */
  sliceName?: string;
  /** Id and extensions of the primitive `sliceName`. */
  _sliceName?: Element;

  /** If this slice definition constrains an inherited slice definition (or not) (0..1) */
  sliceIsConstraining?: boolean;
  /** Id and extensions of the primitive `sliceIsConstraining`. */
  _sliceIsConstraining?: Element;

  /** Name for element to display with or prompt for element (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;

  /** Corresponding codes in terminologies (0..*) */
  code?: Coding[];

  /** This element is sliced - slices follow (0..1) */
  slicing?: ElementDefinitionSlicing;

  /** Concise definition for space-constrained presentation (0..1) */
  short?: string;
  /** Id and extensions of the primitive `short`. */
  _short?: Element;

  /** Full formal definition as narrative text (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;

  /** Comments about the use of this element (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Why this resource has been created (0..1) */
  requirements?: string;
  /** Id and extensions of the primitive `requirements`. */
  _requirements?: Element;

  /** Other names (0..*) */
  alias?: string[];
  /** Id and extensions of the primitive `alias`. */
  _alias?: (Element | null)[];

  /** Minimum Cardinality (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;

  /** Maximum Cardinality (a number or *) (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;

  /** Base definition information for tools (0..1) */
  base?: ElementDefinitionBase;

  /** Reference to definition of content for the element (0..1) */
  contentReference?: string;
  /** Id and extensions of the primitive `contentReference`. */
  _contentReference?: Element;

  /** Data type and Profile for this element (0..*) */
  type?: ElementDefinitionType[];

  /** Specified value if missing from instance (0..1) */
  defaultValueBase64Binary?: string;
  /** Id and extensions of the primitive `defaultValueBase64Binary`. */
  _defaultValueBase64Binary?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueBoolean?: boolean;
  /** Id and extensions of the primitive `defaultValueBoolean`. */
  _defaultValueBoolean?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueCanonical?: string;
  /** Id and extensions of the primitive `defaultValueCanonical`. */
  _defaultValueCanonical?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueCode?: string;
  /** Id and extensions of the primitive `defaultValueCode`. */
  _defaultValueCode?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueDate?: string;
  /** Id and extensions of the primitive `defaultValueDate`. */
  _defaultValueDate?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueDateTime?: string;
  /** Id and extensions of the primitive `defaultValueDateTime`. */
  _defaultValueDateTime?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueDecimal?: number;
  /** Id and extensions of the primitive `defaultValueDecimal`. */
  _defaultValueDecimal?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueId?: string;
  /** Id and extensions of the primitive `defaultValueId`. */
  _defaultValueId?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueInstant?: string;
  /** Id and extensions of the primitive `defaultValueInstant`. */
  _defaultValueInstant?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueInteger?: number;
  /** Id and extensions of the primitive `defaultValueInteger`. */
  _defaultValueInteger?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueMarkdown?: string;
  /** Id and extensions of the primitive `defaultValueMarkdown`. */
  _defaultValueMarkdown?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueOid?: string;
  /** Id and extensions of the primitive `defaultValueOid`. */
  _defaultValueOid?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValuePositiveInt?: number;
  /** Id and extensions of the primitive `defaultValuePositiveInt`. */
  _defaultValuePositiveInt?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueString?: string;
  /** Id and extensions of the primitive `defaultValueString`. */
  _defaultValueString?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueTime?: string;
  /** Id and extensions of the primitive `defaultValueTime`. */
  _defaultValueTime?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueUnsignedInt?: number;
  /** Id and extensions of the primitive `defaultValueUnsignedInt`. */
  _defaultValueUnsignedInt?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueUri?: string;
  /** Id and extensions of the primitive `defaultValueUri`. */
  _defaultValueUri?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueUrl?: string;
  /** Id and extensions of the primitive `defaultValueUrl`. */
  _defaultValueUrl?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueUuid?: string;
  /** Id and extensions of the primitive `defaultValueUuid`. */
  _defaultValueUuid?: Element;
  /** Specified value if missing from instance (0..1) */
  defaultValueAddress?: Address;
  /** Specified value if missing from instance (0..1) */
  defaultValueAge?: Age;
  /** Specified value if missing from instance (0..1) */
  defaultValueAnnotation?: Annotation;
  /** Specified value if missing from instance (0..1) */
  defaultValueAttachment?: Attachment;
  /** Specified value if missing from instance (0..1) */
  defaultValueCodeableConcept?: CodeableConcept;
  /** Specified value if missing from instance (0..1) */
  defaultValueCoding?: Coding;
  /** Specified value if missing from instance (0..1) */
  defaultValueContactPoint?: ContactPoint;
  /** Specified value if missing from instance (0..1) */
  defaultValueCount?: Count;
  /** Specified value if missing from instance (0..1) */
  defaultValueDistance?: Distance;
  /** Specified value if missing from instance (0..1) */
  defaultValueDuration?: Duration;
  /** Specified value if missing from instance (0..1) */
  defaultValueHumanName?: HumanName;
  /** Specified value if missing from instance (0..1) */
  defaultValueIdentifier?: Identifier;
  /** Specified value if missing from instance (0..1) */
  defaultValueMoney?: Money;
  /** Specified value if missing from instance (0..1) */
  defaultValuePeriod?: Period;
  /** Specified value if missing from instance (0..1) */
  defaultValueQuantity?: Quantity;
  /** Specified value if missing from instance (0..1) */
  defaultValueRange?: Range;
  /** Specified value if missing from instance (0..1) */
  defaultValueRatio?: Ratio;
  /** Specified value if missing from instance (0..1) */
  defaultValueReference?: Reference;
  /** Specified value if missing from instance (0..1) */
  defaultValueSampledData?: SampledData;
  /** Specified value if missing from instance (0..1) */
  defaultValueSignature?: Signature;
  /** Specified value if missing from instance (0..1) */
  defaultValueTiming?: Timing;
  /** Specified value if missing from instance (0..1) */
  defaultValueContactDetail?: ContactDetail;
  /** Specified value if missing from instance (0..1) */
  defaultValueContributor?: Contributor;
  /** Specified value if missing from instance (0..1) */
  defaultValueDataRequirement?: DataRequirement;
  /** Specified value if missing from instance (0..1) */
  defaultValueExpression?: Expression;
  /** Specified value if missing from instance (0..1) */
  defaultValueParameterDefinition?: ParameterDefinition;
  /** Specified value if missing from instance (0..1) */
  defaultValueRelatedArtifact?: RelatedArtifact;
  /** Specified value if missing from instance (0..1) */
  defaultValueTriggerDefinition?: TriggerDefinition;
  /** Specified value if missing from instance (0..1) */
  defaultValueUsageContext?: UsageContext;
  /** Specified value if missing from instance (0..1) */
  defaultValueDosage?: Dosage;
  /** Specified value if missing from instance (0..1) */
  defaultValueMeta?: Meta;

  /** Implicit meaning when this element is missing (0..1) */
  meaningWhenMissing?: string;
  /** Id and extensions of the primitive `meaningWhenMissing`. */
  _meaningWhenMissing?: Element;

  /** What the order of the elements means (0..1) */
  orderMeaning?: string;
  /** Id and extensions of the primitive `orderMeaning`. */
  _orderMeaning?: Element;

  /** Value must be exactly this (0..1) */
  fixedBase64Binary?: string;
  /** Id and extensions of the primitive `fixedBase64Binary`. */
  _fixedBase64Binary?: Element;
  /** Value must be exactly this (0..1) */
  fixedBoolean?: boolean;
  /** Id and extensions of the primitive `fixedBoolean`. */
  _fixedBoolean?: Element;
  /** Value must be exactly this (0..1) */
  fixedCanonical?: string;
  /** Id and extensions of the primitive `fixedCanonical`. */
  _fixedCanonical?: Element;
  /** Value must be exactly this (0..1) */
  fixedCode?: string;
  /** Id and extensions of the primitive `fixedCode`. */
  _fixedCode?: Element;
  /** Value must be exactly this (0..1) */
  fixedDate?: string;
  /** Id and extensions of the primitive `fixedDate`. */
  _fixedDate?: Element;
  /** Value must be exactly this (0..1) */
  fixedDateTime?: string;
  /** Id and extensions of the primitive `fixedDateTime`. */
  _fixedDateTime?: Element;
  /** Value must be exactly this (0..1) */
  fixedDecimal?: number;
  /** Id and extensions of the primitive `fixedDecimal`. */
  _fixedDecimal?: Element;
  /** Value must be exactly this (0..1) */
  fixedId?: string;
  /** Id and extensions of the primitive `fixedId`. */
  _fixedId?: Element;
  /** Value must be exactly this (0..1) */
  fixedInstant?: string;
  /** Id and extensions of the primitive `fixedInstant`. */
  _fixedInstant?: Element;
  /** Value must be exactly this (0..1) */
  fixedInteger?: number;
  /** Id and extensions of the primitive `fixedInteger`. */
  _fixedInteger?: Element;
  /** Value must be exactly this (0..1) */
  fixedMarkdown?: string;
  /** Id and extensions of the primitive `fixedMarkdown`. */
  _fixedMarkdown?: Element;
  /** Value must be exactly this (0..1) */
  fixedOid?: string;
  /** Id and extensions of the primitive `fixedOid`. */
  _fixedOid?: Element;
  /** Value must be exactly this (0..1) */
  fixedPositiveInt?: number;
  /** Id and extensions of the primitive `fixedPositiveInt`. */
  _fixedPositiveInt?: Element;
  /** Value must be exactly this (0..1) */
  fixedString?: string;
  /** Id and extensions of the primitive `fixedString`. */
  _fixedString?: Element;
  /** Value must be exactly this (0..1) */
  fixedTime?: string;
  /** Id and extensions of the primitive `fixedTime`. */
  _fixedTime?: Element;
  /** Value must be exactly this (0..1) */
  fixedUnsignedInt?: number;
  /** Id and extensions of the primitive `fixedUnsignedInt`. */
  _fixedUnsignedInt?: Element;
  /** Value must be exactly this (0..1) */
  fixedUri?: string;
  /** Id and extensions of the primitive `fixedUri`. */
  _fixedUri?: Element;
  /** Value must be exactly this (0..1) */
  fixedUrl?: string;
  /** Id and extensions of the primitive `fixedUrl`. */
  _fixedUrl?: Element;
  /** Value must be exactly this (0..1) */
  fixedUuid?: string;
  /** Id and extensions of the primitive `fixedUuid`. */
  _fixedUuid?: Element;
  /** Value must be exactly this (0..1) */
  fixedAddress?: Address;
  /** Value must be exactly this (0..1) */
  fixedAge?: Age;
  /** Value must be exactly this (0..1) */
  fixedAnnotation?: Annotation;
  /** Value must be exactly this (0..1) */
  fixedAttachment?: Attachment;
  /** Value must be exactly this (0..1) */
  fixedCodeableConcept?: CodeableConcept;
  /** Value must be exactly this (0..1) */
  fixedCoding?: Coding;
  /** Value must be exactly this (0..1) */
  fixedContactPoint?: ContactPoint;
  /** Value must be exactly this (0..1) */
  fixedCount?: Count;
  /** Value must be exactly this (0..1) */
  fixedDistance?: Distance;
  /** Value must be exactly this (0..1) */
  fixedDuration?: Duration;
  /** Value must be exactly this (0..1) */
  fixedHumanName?: HumanName;
  /** Value must be exactly this (0..1) */
  fixedIdentifier?: Identifier;
  /** Value must be exactly this (0..1) */
  fixedMoney?: Money;
  /** Value must be exactly this (0..1) */
  fixedPeriod?: Period;
  /** Value must be exactly this (0..1) */
  fixedQuantity?: Quantity;
  /** Value must be exactly this (0..1) */
  fixedRange?: Range;
  /** Value must be exactly this (0..1) */
  fixedRatio?: Ratio;
  /** Value must be exactly this (0..1) */
  fixedReference?: Reference;
  /** Value must be exactly this (0..1) */
  fixedSampledData?: SampledData;
  /** Value must be exactly this (0..1) */
  fixedSignature?: Signature;
  /** Value must be exactly this (0..1) */
  fixedTiming?: Timing;
  /** Value must be exactly this (0..1) */
  fixedContactDetail?: ContactDetail;
  /** Value must be exactly this (0..1) */
  fixedContributor?: Contributor;
  /** Value must be exactly this (0..1) */
  fixedDataRequirement?: DataRequirement;
  /** Value must be exactly this (0..1) */
  fixedExpression?: Expression;
  /** Value must be exactly this (0..1) */
  fixedParameterDefinition?: ParameterDefinition;
  /** Value must be exactly this (0..1) */
  fixedRelatedArtifact?: RelatedArtifact;
  /** Value must be exactly this (0..1) */
  fixedTriggerDefinition?: TriggerDefinition;
  /** Value must be exactly this (0..1) */
  fixedUsageContext?: UsageContext;
  /** Value must be exactly this (0..1) */
  fixedDosage?: Dosage;
  /** Value must be exactly this (0..1) */
  fixedMeta?: Meta;

  /** Value must have at least these property values (0..1) */
  patternBase64Binary?: string;
  /** Id and extensions of the primitive `patternBase64Binary`. */
  _patternBase64Binary?: Element;
  /** Value must have at least these property values (0..1) */
  patternBoolean?: boolean;
  /** Id and extensions of the primitive `patternBoolean`. */
  _patternBoolean?: Element;
  /** Value must have at least these property values (0..1) */
  patternCanonical?: string;
  /** Id and extensions of the primitive `patternCanonical`. */
  _patternCanonical?: Element;
  /** Value must have at least these property values (0..1) */
  patternCode?: string;
  /** Id and extensions of the primitive `patternCode`. */
  _patternCode?: Element;
  /** Value must have at least these property values (0..1) */
  patternDate?: string;
  /** Id and extensions of the primitive `patternDate`. */
  _patternDate?: Element;
  /** Value must have at least these property values (0..1) */
  patternDateTime?: string;
  /** Id and extensions of the primitive `patternDateTime`. */
  _patternDateTime?: Element;
  /** Value must have at least these property values (0..1) */
  patternDecimal?: number;
  /** Id and extensions of the primitive `patternDecimal`. */
  _patternDecimal?: Element;
  /** Value must have at least these property values (0..1) */
  patternId?: string;
  /** Id and extensions of the primitive `patternId`. */
  _patternId?: Element;
  /** Value must have at least these property values (0..1) */
  patternInstant?: string;
  /** Id and extensions of the primitive `patternInstant`. */
  _patternInstant?: Element;
  /** Value must have at least these property values (0..1) */
  patternInteger?: number;
  /** Id and extensions of the primitive `patternInteger`. */
  _patternInteger?: Element;
  /** Value must have at least these property values (0..1) */
  patternMarkdown?: string;
  /** Id and extensions of the primitive `patternMarkdown`. */
  _patternMarkdown?: Element;
  /** Value must have at least these property values (0..1) */
  patternOid?: string;
  /** Id and extensions of the primitive `patternOid`. */
  _patternOid?: Element;
  /** Value must have at least these property values (0..1) */
  patternPositiveInt?: number;
  /** Id and extensions of the primitive `patternPositiveInt`. */
  _patternPositiveInt?: Element;
  /** Value must have at least these property values (0..1) */
  patternString?: string;
  /** Id and extensions of the primitive `patternString`. */
  _patternString?: Element;
  /** Value must have at least these property values (0..1) */
  patternTime?: string;
  /** Id and extensions of the primitive `patternTime`. */
  _patternTime?: Element;
  /** Value must have at least these property values (0..1) */
  patternUnsignedInt?: number;
  /** Id and extensions of the primitive `patternUnsignedInt`. */
  _patternUnsignedInt?: Element;
  /** Value must have at least these property values (0..1) */
  patternUri?: string;
  /** Id and extensions of the primitive `patternUri`. */
  _patternUri?: Element;
  /** Value must have at least these property values (0..1) */
  patternUrl?: string;
  /** Id and extensions of the primitive `patternUrl`. */
  _patternUrl?: Element;
  /** Value must have at least these property values (0..1) */
  patternUuid?: string;
  /** Id and extensions of the primitive `patternUuid`. */
  _patternUuid?: Element;
  /** Value must have at least these property values (0..1) */
  patternAddress?: Address;
  /** Value must have at least these property values (0..1) */
  patternAge?: Age;
  /** Value must have at least these property values (0..1) */
  patternAnnotation?: Annotation;
  /** Value must have at least these property values (0..1) */
  patternAttachment?: Attachment;
  /** Value must have at least these property values (0..1) */
  patternCodeableConcept?: CodeableConcept;
  /** Value must have at least these property values (0..1) */
  patternCoding?: Coding;
  /** Value must have at least these property values (0..1) */
  patternContactPoint?: ContactPoint;
  /** Value must have at least these property values (0..1) */
  patternCount?: Count;
  /** Value must have at least these property values (0..1) */
  patternDistance?: Distance;
  /** Value must have at least these property values (0..1) */
  patternDuration?: Duration;
  /** Value must have at least these property values (0..1) */
  patternHumanName?: HumanName;
  /** Value must have at least these property values (0..1) */
  patternIdentifier?: Identifier;
  /** Value must have at least these property values (0..1) */
  patternMoney?: Money;
  /** Value must have at least these property values (0..1) */
  patternPeriod?: Period;
  /** Value must have at least these property values (0..1) */
  patternQuantity?: Quantity;
  /** Value must have at least these property values (0..1) */
  patternRange?: Range;
  /** Value must have at least these property values (0..1) */
  patternRatio?: Ratio;
  /** Value must have at least these property values (0..1) */
  patternReference?: Reference;
  /** Value must have at least these property values (0..1) */
  patternSampledData?: SampledData;
  /** Value must have at least these property values (0..1) */
  patternSignature?: Signature;
  /** Value must have at least these property values (0..1) */
  patternTiming?: Timing;
  /** Value must have at least these property values (0..1) */
  patternContactDetail?: ContactDetail;
  /** Value must have at least these property values (0..1) */
  patternContributor?: Contributor;
  /** Value must have at least these property values (0..1) */
  patternDataRequirement?: DataRequirement;
  /** Value must have at least these property values (0..1) */
  patternExpression?: Expression;
  /** Value must have at least these property values (0..1) */
  patternParameterDefinition?: ParameterDefinition;
  /** Value must have at least these property values (0..1) */
  patternRelatedArtifact?: RelatedArtifact;
  /** Value must have at least these property values (0..1) */
  patternTriggerDefinition?: TriggerDefinition;
  /** Value must have at least these property values (0..1) */
  patternUsageContext?: UsageContext;
  /** Value must have at least these property values (0..1) */
  patternDosage?: Dosage;
  /** Value must have at least these property values (0..1) */
  patternMeta?: Meta;

  /** Example value (as defined for type) (0..*) */
  example?: ElementDefinitionExample[];

  /** Minimum Allowed Value (for some types) (0..1) */
  minValueDate?: string;
  /** Id and extensions of the primitive `minValueDate`. */
  _minValueDate?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueDateTime?: string;
  /** Id and extensions of the primitive `minValueDateTime`. */
  _minValueDateTime?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueInstant?: string;
  /** Id and extensions of the primitive `minValueInstant`. */
  _minValueInstant?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueTime?: string;
  /** Id and extensions of the primitive `minValueTime`. */
  _minValueTime?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueDecimal?: number;
  /** Id and extensions of the primitive `minValueDecimal`. */
  _minValueDecimal?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueInteger?: number;
  /** Id and extensions of the primitive `minValueInteger`. */
  _minValueInteger?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValuePositiveInt?: number;
  /** Id and extensions of the primitive `minValuePositiveInt`. */
  _minValuePositiveInt?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueUnsignedInt?: number;
  /** Id and extensions of the primitive `minValueUnsignedInt`. */
  _minValueUnsignedInt?: Element;
  /** Minimum Allowed Value (for some types) (0..1) */
  minValueQuantity?: Quantity;

  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueDate?: string;
  /** Id and extensions of the primitive `maxValueDate`. */
  _maxValueDate?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueDateTime?: string;
  /** Id and extensions of the primitive `maxValueDateTime`. */
  _maxValueDateTime?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueInstant?: string;
  /** Id and extensions of the primitive `maxValueInstant`. */
  _maxValueInstant?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueTime?: string;
  /** Id and extensions of the primitive `maxValueTime`. */
  _maxValueTime?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueDecimal?: number;
  /** Id and extensions of the primitive `maxValueDecimal`. */
  _maxValueDecimal?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueInteger?: number;
  /** Id and extensions of the primitive `maxValueInteger`. */
  _maxValueInteger?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValuePositiveInt?: number;
  /** Id and extensions of the primitive `maxValuePositiveInt`. */
  _maxValuePositiveInt?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueUnsignedInt?: number;
  /** Id and extensions of the primitive `maxValueUnsignedInt`. */
  _maxValueUnsignedInt?: Element;
  /** Maximum Allowed Value (for some types) (0..1) */
  maxValueQuantity?: Quantity;

  /** Max length for strings (0..1) */
  maxLength?: number;
  /** Id and extensions of the primitive `maxLength`. */
  _maxLength?: Element;

  /** Reference to invariant about presence (0..*) */
  condition?: string[];
  /** Id and extensions of the primitive `condition`. */
  _condition?: (Element | null)[];

  /** Condition that must evaluate to true (0..*) */
  constraint?: ElementDefinitionConstraint[];

  /** If the element must be supported (0..1) */
  mustSupport?: boolean;
  /** Id and extensions of the primitive `mustSupport`. */
  _mustSupport?: Element;

  /** If this modifies the meaning of other elements (0..1) */
  isModifier?: boolean;
  /** Id and extensions of the primitive `isModifier`. */
  _isModifier?: Element;

  /** Reason that this element is marked as a modifier (0..1) */
  isModifierReason?: string;
  /** Id and extensions of the primitive `isModifierReason`. */
  _isModifierReason?: Element;

  /** Include when _summary = true? (0..1) */
  isSummary?: boolean;
  /** Id and extensions of the primitive `isSummary`. */
  _isSummary?: Element;

  /** ValueSet details if this is coded (0..1) */
  binding?: ElementDefinitionBinding;

  /** Map element to another set of definitions (0..*) */
  mapping?: ElementDefinitionMapping[];

  override fhirType(): string {
    return 'ElementDefinition';
  }

  /** FHIR JSON for this ElementDefinition, typed as the plain `ElementDefinition` data type. */
  override toJSON(): plainTypes.ElementDefinition {
    return this.serialize() as plainTypes.ElementDefinition;
  }

  /** Path of the element in the hierarchy of elements (1..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }

  /** xmlAttr | xmlText | typeAttr | cdaText | xhtml (0..*) Never undefined; an empty list is created when absent. */
  getRepresentation(): valueSetCodes.PropertyRepresentation[] {
    if (this.representation === undefined) {
      this.representation = [];
    }
    return this.representation;
  }

  setRepresentation(representation: valueSetCodes.PropertyRepresentation[] | undefined): this {
    return this.setFieldValue('representation', representation);
  }

  hasRepresentation(): boolean {
    return this.hasFieldValue('representation');
  }

  /** Appends one value to `representation`. Throws a FhirModelError when it is not a valid FHIR code. */
  addRepresentation(representation: valueSetCodes.PropertyRepresentation): this {
    return this.addFieldValue('representation', representation);
  }

  /** Name for this particular element (in a set of slices) (0..1) */
  getSliceName(): string | undefined {
    return this.sliceName;
  }

  /** Sets `sliceName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSliceName(sliceName: string | undefined): this {
    return this.setFieldValue('sliceName', sliceName);
  }

  hasSliceName(): boolean {
    return this.hasFieldValue('sliceName');
  }

  /** The element carrying the id and extensions of `sliceName`. Created when absent. */
  getSliceNameElement(): Element {
    if (this._sliceName === undefined) {
      this._sliceName = new Element();
    }
    return this._sliceName;
  }

  setSliceNameElement(sliceNameElement: Element | undefined): this {
    this._sliceName = sliceNameElement;
    return this;
  }

  /** If this slice definition constrains an inherited slice definition (or not) (0..1) */
  getSliceIsConstraining(): boolean | undefined {
    return this.sliceIsConstraining;
  }

  /** Sets `sliceIsConstraining`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setSliceIsConstraining(sliceIsConstraining: boolean | undefined): this {
    return this.setFieldValue('sliceIsConstraining', sliceIsConstraining);
  }

  hasSliceIsConstraining(): boolean {
    return this.hasFieldValue('sliceIsConstraining');
  }

  /** The element carrying the id and extensions of `sliceIsConstraining`. Created when absent. */
  getSliceIsConstrainingElement(): Element {
    if (this._sliceIsConstraining === undefined) {
      this._sliceIsConstraining = new Element();
    }
    return this._sliceIsConstraining;
  }

  setSliceIsConstrainingElement(sliceIsConstrainingElement: Element | undefined): this {
    this._sliceIsConstraining = sliceIsConstrainingElement;
    return this;
  }

  /** Name for element to display with or prompt for element (0..1) */
  getLabel(): string | undefined {
    return this.label;
  }

  /** Sets `label`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLabel(label: string | undefined): this {
    return this.setFieldValue('label', label);
  }

  hasLabel(): boolean {
    return this.hasFieldValue('label');
  }

  /** The element carrying the id and extensions of `label`. Created when absent. */
  getLabelElement(): Element {
    if (this._label === undefined) {
      this._label = new Element();
    }
    return this._label;
  }

  setLabelElement(labelElement: Element | undefined): this {
    this._label = labelElement;
    return this;
  }

  /** Corresponding codes in terminologies (0..*) Never undefined; an empty list is created when absent. */
  getCode(): Coding[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: Coding[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty Coding to `code` and returns it so it can be filled in. */
  addCode(): Coding;
  /** Appends the given Coding to `code` and returns this object for chaining. */
  addCode(coding: Coding): this;
  addCode(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('code', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('code', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `code`. One is added when the list is empty. */
  getCodeFirstRep(): Coding {
    const firstCoding = this.getCode()[0];
    return firstCoding === undefined ? this.addCode() : firstCoding;
  }

  /** This element is sliced - slices follow (0..1) Created when absent. */
  getSlicing(): ElementDefinitionSlicing {
    if (this.slicing === undefined) {
      this.slicing = new ElementDefinitionSlicing();
    }
    return this.slicing;
  }

  setSlicing(slicing: ElementDefinitionSlicing | undefined): this {
    return this.setFieldValue('slicing', slicing);
  }

  hasSlicing(): boolean {
    return this.hasFieldValue('slicing');
  }

  /** Concise definition for space-constrained presentation (0..1) */
  getShort(): string | undefined {
    return this.short;
  }

  /** Sets `short`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setShort(short: string | undefined): this {
    return this.setFieldValue('short', short);
  }

  hasShort(): boolean {
    return this.hasFieldValue('short');
  }

  /** The element carrying the id and extensions of `short`. Created when absent. */
  getShortElement(): Element {
    if (this._short === undefined) {
      this._short = new Element();
    }
    return this._short;
  }

  setShortElement(shortElement: Element | undefined): this {
    this._short = shortElement;
    return this;
  }

  /** Full formal definition as narrative text (0..1) */
  getDefinition(): string | undefined {
    return this.definition;
  }

  /** Sets `definition`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDefinition(definition: string | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** The element carrying the id and extensions of `definition`. Created when absent. */
  getDefinitionElement(): Element {
    if (this._definition === undefined) {
      this._definition = new Element();
    }
    return this._definition;
  }

  setDefinitionElement(definitionElement: Element | undefined): this {
    this._definition = definitionElement;
    return this;
  }

  /** Comments about the use of this element (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }

  /** Why this resource has been created (0..1) */
  getRequirements(): string | undefined {
    return this.requirements;
  }

  /** Sets `requirements`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setRequirements(requirements: string | undefined): this {
    return this.setFieldValue('requirements', requirements);
  }

  hasRequirements(): boolean {
    return this.hasFieldValue('requirements');
  }

  /** The element carrying the id and extensions of `requirements`. Created when absent. */
  getRequirementsElement(): Element {
    if (this._requirements === undefined) {
      this._requirements = new Element();
    }
    return this._requirements;
  }

  setRequirementsElement(requirementsElement: Element | undefined): this {
    this._requirements = requirementsElement;
    return this;
  }

  /** Other names (0..*) Never undefined; an empty list is created when absent. */
  getAlias(): string[] {
    if (this.alias === undefined) {
      this.alias = [];
    }
    return this.alias;
  }

  setAlias(alias: string[] | undefined): this {
    return this.setFieldValue('alias', alias);
  }

  hasAlias(): boolean {
    return this.hasFieldValue('alias');
  }

  /** Appends one value to `alias`. Throws a FhirModelError when it is not a valid FHIR string. */
  addAlias(alias: string): this {
    return this.addFieldValue('alias', alias);
  }

  /** Minimum Cardinality (0..1) */
  getMin(): number | undefined {
    return this.min;
  }

  /** Sets `min`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setMin(min: number | undefined): this {
    return this.setFieldValue('min', min);
  }

  hasMin(): boolean {
    return this.hasFieldValue('min');
  }

  /** The element carrying the id and extensions of `min`. Created when absent. */
  getMinElement(): Element {
    if (this._min === undefined) {
      this._min = new Element();
    }
    return this._min;
  }

  setMinElement(minElement: Element | undefined): this {
    this._min = minElement;
    return this;
  }

  /** Maximum Cardinality (a number or *) (0..1) */
  getMax(): string | undefined {
    return this.max;
  }

  /** Sets `max`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMax(max: string | undefined): this {
    return this.setFieldValue('max', max);
  }

  hasMax(): boolean {
    return this.hasFieldValue('max');
  }

  /** The element carrying the id and extensions of `max`. Created when absent. */
  getMaxElement(): Element {
    if (this._max === undefined) {
      this._max = new Element();
    }
    return this._max;
  }

  setMaxElement(maxElement: Element | undefined): this {
    this._max = maxElement;
    return this;
  }

  /** Base definition information for tools (0..1) Created when absent. */
  getBase(): ElementDefinitionBase {
    if (this.base === undefined) {
      this.base = new ElementDefinitionBase();
    }
    return this.base;
  }

  setBase(base: ElementDefinitionBase | undefined): this {
    return this.setFieldValue('base', base);
  }

  hasBase(): boolean {
    return this.hasFieldValue('base');
  }

  /** Reference to definition of content for the element (0..1) */
  getContentReference(): string | undefined {
    return this.contentReference;
  }

  /** Sets `contentReference`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setContentReference(contentReference: string | undefined): this {
    return this.setFieldValue('contentReference', contentReference);
  }

  hasContentReference(): boolean {
    return this.hasFieldValue('contentReference');
  }

  /** The element carrying the id and extensions of `contentReference`. Created when absent. */
  getContentReferenceElement(): Element {
    if (this._contentReference === undefined) {
      this._contentReference = new Element();
    }
    return this._contentReference;
  }

  setContentReferenceElement(contentReferenceElement: Element | undefined): this {
    this._contentReference = contentReferenceElement;
    return this;
  }

  /** Data type and Profile for this element (0..*) Never undefined; an empty list is created when absent. */
  getType(): ElementDefinitionType[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: ElementDefinitionType[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty ElementDefinitionType to `type` and returns it so it can be filled in. */
  addType(): ElementDefinitionType;
  /** Appends the given ElementDefinitionType to `type` and returns this object for chaining. */
  addType(elementDefinitionType: ElementDefinitionType): this;
  addType(elementDefinitionType?: ElementDefinitionType): ElementDefinitionType | this {
    if (elementDefinitionType !== undefined) {
      return this.addFieldValue('type', elementDefinitionType);
    }
    const createdElementDefinitionType = new ElementDefinitionType();
    this.addFieldValue('type', createdElementDefinitionType);
    return createdElementDefinitionType;
  }

  /** The first ElementDefinitionType of `type`. One is added when the list is empty. */
  getTypeFirstRep(): ElementDefinitionType {
    const firstElementDefinitionType = this.getType()[0];
    return firstElementDefinitionType === undefined ? this.addType() : firstElementDefinitionType;
  }

  /** Specified value if missing from instance (0..1) Whichever type of `defaultValue[x]` is set. */
  getDefaultValue():
    | string
    | boolean
    | number
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | Coding
    | ContactPoint
    | Count
    | Distance
    | Duration
    | HumanName
    | Identifier
    | Money
    | Period
    | Quantity
    | Range
    | Ratio
    | Reference
    | SampledData
    | Signature
    | Timing
    | ContactDetail
    | Contributor
    | DataRequirement
    | Expression
    | ParameterDefinition
    | RelatedArtifact
    | TriggerDefinition
    | UsageContext
    | Dosage
    | Meta
    | undefined {
    return this.getChoiceValue<
      | string
      | boolean
      | number
      | Address
      | Age
      | Annotation
      | Attachment
      | CodeableConcept
      | Coding
      | ContactPoint
      | Count
      | Distance
      | Duration
      | HumanName
      | Identifier
      | Money
      | Period
      | Quantity
      | Range
      | Ratio
      | Reference
      | SampledData
      | Signature
      | Timing
      | ContactDetail
      | Contributor
      | DataRequirement
      | Expression
      | ParameterDefinition
      | RelatedArtifact
      | TriggerDefinition
      | UsageContext
      | Dosage
      | Meta
    >('defaultValue');
  }

  /** True when any type of `defaultValue[x]` is set. */
  hasDefaultValue(): boolean {
    return this.hasChoiceValue('defaultValue');
  }

  getDefaultValueBase64Binary(): string | undefined {
    return this.defaultValueBase64Binary;
  }

  /** Sets `defaultValue[x]` as base64Binary and clears every other type of it. */
  setDefaultValueBase64Binary(defaultValueBase64Binary: string | undefined): this {
    return this.setFieldValue('defaultValueBase64Binary', defaultValueBase64Binary);
  }

  hasDefaultValueBase64Binary(): boolean {
    return this.hasFieldValue('defaultValueBase64Binary');
  }

  getDefaultValueBoolean(): boolean | undefined {
    return this.defaultValueBoolean;
  }

  /** Sets `defaultValue[x]` as boolean and clears every other type of it. */
  setDefaultValueBoolean(defaultValueBoolean: boolean | undefined): this {
    return this.setFieldValue('defaultValueBoolean', defaultValueBoolean);
  }

  hasDefaultValueBoolean(): boolean {
    return this.hasFieldValue('defaultValueBoolean');
  }

  getDefaultValueCanonical(): string | undefined {
    return this.defaultValueCanonical;
  }

  /** Sets `defaultValue[x]` as canonical and clears every other type of it. */
  setDefaultValueCanonical(defaultValueCanonical: string | undefined): this {
    return this.setFieldValue('defaultValueCanonical', defaultValueCanonical);
  }

  hasDefaultValueCanonical(): boolean {
    return this.hasFieldValue('defaultValueCanonical');
  }

  getDefaultValueCode(): string | undefined {
    return this.defaultValueCode;
  }

  /** Sets `defaultValue[x]` as code and clears every other type of it. */
  setDefaultValueCode(defaultValueCode: string | undefined): this {
    return this.setFieldValue('defaultValueCode', defaultValueCode);
  }

  hasDefaultValueCode(): boolean {
    return this.hasFieldValue('defaultValueCode');
  }

  getDefaultValueDate(): string | undefined {
    return this.defaultValueDate;
  }

  /** Sets `defaultValue[x]` as date and clears every other type of it. */
  setDefaultValueDate(defaultValueDate: string | undefined): this {
    return this.setFieldValue('defaultValueDate', defaultValueDate);
  }

  hasDefaultValueDate(): boolean {
    return this.hasFieldValue('defaultValueDate');
  }

  getDefaultValueDateTime(): string | undefined {
    return this.defaultValueDateTime;
  }

  /** Sets `defaultValue[x]` as dateTime and clears every other type of it. */
  setDefaultValueDateTime(defaultValueDateTime: string | undefined): this {
    return this.setFieldValue('defaultValueDateTime', defaultValueDateTime);
  }

  hasDefaultValueDateTime(): boolean {
    return this.hasFieldValue('defaultValueDateTime');
  }

  getDefaultValueDecimal(): number | undefined {
    return this.defaultValueDecimal;
  }

  /** Sets `defaultValue[x]` as decimal and clears every other type of it. */
  setDefaultValueDecimal(defaultValueDecimal: number | undefined): this {
    return this.setFieldValue('defaultValueDecimal', defaultValueDecimal);
  }

  hasDefaultValueDecimal(): boolean {
    return this.hasFieldValue('defaultValueDecimal');
  }

  getDefaultValueId(): string | undefined {
    return this.defaultValueId;
  }

  /** Sets `defaultValue[x]` as id and clears every other type of it. */
  setDefaultValueId(defaultValueId: string | undefined): this {
    return this.setFieldValue('defaultValueId', defaultValueId);
  }

  hasDefaultValueId(): boolean {
    return this.hasFieldValue('defaultValueId');
  }

  getDefaultValueInstant(): string | undefined {
    return this.defaultValueInstant;
  }

  /** Sets `defaultValue[x]` as instant and clears every other type of it. */
  setDefaultValueInstant(defaultValueInstant: string | undefined): this {
    return this.setFieldValue('defaultValueInstant', defaultValueInstant);
  }

  hasDefaultValueInstant(): boolean {
    return this.hasFieldValue('defaultValueInstant');
  }

  getDefaultValueInteger(): number | undefined {
    return this.defaultValueInteger;
  }

  /** Sets `defaultValue[x]` as integer and clears every other type of it. */
  setDefaultValueInteger(defaultValueInteger: number | undefined): this {
    return this.setFieldValue('defaultValueInteger', defaultValueInteger);
  }

  hasDefaultValueInteger(): boolean {
    return this.hasFieldValue('defaultValueInteger');
  }

  getDefaultValueMarkdown(): string | undefined {
    return this.defaultValueMarkdown;
  }

  /** Sets `defaultValue[x]` as markdown and clears every other type of it. */
  setDefaultValueMarkdown(defaultValueMarkdown: string | undefined): this {
    return this.setFieldValue('defaultValueMarkdown', defaultValueMarkdown);
  }

  hasDefaultValueMarkdown(): boolean {
    return this.hasFieldValue('defaultValueMarkdown');
  }

  getDefaultValueOid(): string | undefined {
    return this.defaultValueOid;
  }

  /** Sets `defaultValue[x]` as oid and clears every other type of it. */
  setDefaultValueOid(defaultValueOid: string | undefined): this {
    return this.setFieldValue('defaultValueOid', defaultValueOid);
  }

  hasDefaultValueOid(): boolean {
    return this.hasFieldValue('defaultValueOid');
  }

  getDefaultValuePositiveInt(): number | undefined {
    return this.defaultValuePositiveInt;
  }

  /** Sets `defaultValue[x]` as positiveInt and clears every other type of it. */
  setDefaultValuePositiveInt(defaultValuePositiveInt: number | undefined): this {
    return this.setFieldValue('defaultValuePositiveInt', defaultValuePositiveInt);
  }

  hasDefaultValuePositiveInt(): boolean {
    return this.hasFieldValue('defaultValuePositiveInt');
  }

  getDefaultValueString(): string | undefined {
    return this.defaultValueString;
  }

  /** Sets `defaultValue[x]` as string and clears every other type of it. */
  setDefaultValueString(defaultValueString: string | undefined): this {
    return this.setFieldValue('defaultValueString', defaultValueString);
  }

  hasDefaultValueString(): boolean {
    return this.hasFieldValue('defaultValueString');
  }

  getDefaultValueTime(): string | undefined {
    return this.defaultValueTime;
  }

  /** Sets `defaultValue[x]` as time and clears every other type of it. */
  setDefaultValueTime(defaultValueTime: string | undefined): this {
    return this.setFieldValue('defaultValueTime', defaultValueTime);
  }

  hasDefaultValueTime(): boolean {
    return this.hasFieldValue('defaultValueTime');
  }

  getDefaultValueUnsignedInt(): number | undefined {
    return this.defaultValueUnsignedInt;
  }

  /** Sets `defaultValue[x]` as unsignedInt and clears every other type of it. */
  setDefaultValueUnsignedInt(defaultValueUnsignedInt: number | undefined): this {
    return this.setFieldValue('defaultValueUnsignedInt', defaultValueUnsignedInt);
  }

  hasDefaultValueUnsignedInt(): boolean {
    return this.hasFieldValue('defaultValueUnsignedInt');
  }

  getDefaultValueUri(): string | undefined {
    return this.defaultValueUri;
  }

  /** Sets `defaultValue[x]` as uri and clears every other type of it. */
  setDefaultValueUri(defaultValueUri: string | undefined): this {
    return this.setFieldValue('defaultValueUri', defaultValueUri);
  }

  hasDefaultValueUri(): boolean {
    return this.hasFieldValue('defaultValueUri');
  }

  getDefaultValueUrl(): string | undefined {
    return this.defaultValueUrl;
  }

  /** Sets `defaultValue[x]` as url and clears every other type of it. */
  setDefaultValueUrl(defaultValueUrl: string | undefined): this {
    return this.setFieldValue('defaultValueUrl', defaultValueUrl);
  }

  hasDefaultValueUrl(): boolean {
    return this.hasFieldValue('defaultValueUrl');
  }

  getDefaultValueUuid(): string | undefined {
    return this.defaultValueUuid;
  }

  /** Sets `defaultValue[x]` as uuid and clears every other type of it. */
  setDefaultValueUuid(defaultValueUuid: string | undefined): this {
    return this.setFieldValue('defaultValueUuid', defaultValueUuid);
  }

  hasDefaultValueUuid(): boolean {
    return this.hasFieldValue('defaultValueUuid');
  }

  getDefaultValueAddress(): Address | undefined {
    return this.defaultValueAddress;
  }

  /** Sets `defaultValue[x]` as Address and clears every other type of it. */
  setDefaultValueAddress(defaultValueAddress: Address | undefined): this {
    return this.setFieldValue('defaultValueAddress', defaultValueAddress);
  }

  hasDefaultValueAddress(): boolean {
    return this.hasFieldValue('defaultValueAddress');
  }

  getDefaultValueAge(): Age | undefined {
    return this.defaultValueAge;
  }

  /** Sets `defaultValue[x]` as Age and clears every other type of it. */
  setDefaultValueAge(defaultValueAge: Age | undefined): this {
    return this.setFieldValue('defaultValueAge', defaultValueAge);
  }

  hasDefaultValueAge(): boolean {
    return this.hasFieldValue('defaultValueAge');
  }

  getDefaultValueAnnotation(): Annotation | undefined {
    return this.defaultValueAnnotation;
  }

  /** Sets `defaultValue[x]` as Annotation and clears every other type of it. */
  setDefaultValueAnnotation(defaultValueAnnotation: Annotation | undefined): this {
    return this.setFieldValue('defaultValueAnnotation', defaultValueAnnotation);
  }

  hasDefaultValueAnnotation(): boolean {
    return this.hasFieldValue('defaultValueAnnotation');
  }

  getDefaultValueAttachment(): Attachment | undefined {
    return this.defaultValueAttachment;
  }

  /** Sets `defaultValue[x]` as Attachment and clears every other type of it. */
  setDefaultValueAttachment(defaultValueAttachment: Attachment | undefined): this {
    return this.setFieldValue('defaultValueAttachment', defaultValueAttachment);
  }

  hasDefaultValueAttachment(): boolean {
    return this.hasFieldValue('defaultValueAttachment');
  }

  getDefaultValueCodeableConcept(): CodeableConcept | undefined {
    return this.defaultValueCodeableConcept;
  }

  /** Sets `defaultValue[x]` as CodeableConcept and clears every other type of it. */
  setDefaultValueCodeableConcept(defaultValueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('defaultValueCodeableConcept', defaultValueCodeableConcept);
  }

  hasDefaultValueCodeableConcept(): boolean {
    return this.hasFieldValue('defaultValueCodeableConcept');
  }

  getDefaultValueCoding(): Coding | undefined {
    return this.defaultValueCoding;
  }

  /** Sets `defaultValue[x]` as Coding and clears every other type of it. */
  setDefaultValueCoding(defaultValueCoding: Coding | undefined): this {
    return this.setFieldValue('defaultValueCoding', defaultValueCoding);
  }

  hasDefaultValueCoding(): boolean {
    return this.hasFieldValue('defaultValueCoding');
  }

  getDefaultValueContactPoint(): ContactPoint | undefined {
    return this.defaultValueContactPoint;
  }

  /** Sets `defaultValue[x]` as ContactPoint and clears every other type of it. */
  setDefaultValueContactPoint(defaultValueContactPoint: ContactPoint | undefined): this {
    return this.setFieldValue('defaultValueContactPoint', defaultValueContactPoint);
  }

  hasDefaultValueContactPoint(): boolean {
    return this.hasFieldValue('defaultValueContactPoint');
  }

  getDefaultValueCount(): Count | undefined {
    return this.defaultValueCount;
  }

  /** Sets `defaultValue[x]` as Count and clears every other type of it. */
  setDefaultValueCount(defaultValueCount: Count | undefined): this {
    return this.setFieldValue('defaultValueCount', defaultValueCount);
  }

  hasDefaultValueCount(): boolean {
    return this.hasFieldValue('defaultValueCount');
  }

  getDefaultValueDistance(): Distance | undefined {
    return this.defaultValueDistance;
  }

  /** Sets `defaultValue[x]` as Distance and clears every other type of it. */
  setDefaultValueDistance(defaultValueDistance: Distance | undefined): this {
    return this.setFieldValue('defaultValueDistance', defaultValueDistance);
  }

  hasDefaultValueDistance(): boolean {
    return this.hasFieldValue('defaultValueDistance');
  }

  getDefaultValueDuration(): Duration | undefined {
    return this.defaultValueDuration;
  }

  /** Sets `defaultValue[x]` as Duration and clears every other type of it. */
  setDefaultValueDuration(defaultValueDuration: Duration | undefined): this {
    return this.setFieldValue('defaultValueDuration', defaultValueDuration);
  }

  hasDefaultValueDuration(): boolean {
    return this.hasFieldValue('defaultValueDuration');
  }

  getDefaultValueHumanName(): HumanName | undefined {
    return this.defaultValueHumanName;
  }

  /** Sets `defaultValue[x]` as HumanName and clears every other type of it. */
  setDefaultValueHumanName(defaultValueHumanName: HumanName | undefined): this {
    return this.setFieldValue('defaultValueHumanName', defaultValueHumanName);
  }

  hasDefaultValueHumanName(): boolean {
    return this.hasFieldValue('defaultValueHumanName');
  }

  getDefaultValueIdentifier(): Identifier | undefined {
    return this.defaultValueIdentifier;
  }

  /** Sets `defaultValue[x]` as Identifier and clears every other type of it. */
  setDefaultValueIdentifier(defaultValueIdentifier: Identifier | undefined): this {
    return this.setFieldValue('defaultValueIdentifier', defaultValueIdentifier);
  }

  hasDefaultValueIdentifier(): boolean {
    return this.hasFieldValue('defaultValueIdentifier');
  }

  getDefaultValueMoney(): Money | undefined {
    return this.defaultValueMoney;
  }

  /** Sets `defaultValue[x]` as Money and clears every other type of it. */
  setDefaultValueMoney(defaultValueMoney: Money | undefined): this {
    return this.setFieldValue('defaultValueMoney', defaultValueMoney);
  }

  hasDefaultValueMoney(): boolean {
    return this.hasFieldValue('defaultValueMoney');
  }

  getDefaultValuePeriod(): Period | undefined {
    return this.defaultValuePeriod;
  }

  /** Sets `defaultValue[x]` as Period and clears every other type of it. */
  setDefaultValuePeriod(defaultValuePeriod: Period | undefined): this {
    return this.setFieldValue('defaultValuePeriod', defaultValuePeriod);
  }

  hasDefaultValuePeriod(): boolean {
    return this.hasFieldValue('defaultValuePeriod');
  }

  getDefaultValueQuantity(): Quantity | undefined {
    return this.defaultValueQuantity;
  }

  /** Sets `defaultValue[x]` as Quantity and clears every other type of it. */
  setDefaultValueQuantity(defaultValueQuantity: Quantity | undefined): this {
    return this.setFieldValue('defaultValueQuantity', defaultValueQuantity);
  }

  hasDefaultValueQuantity(): boolean {
    return this.hasFieldValue('defaultValueQuantity');
  }

  getDefaultValueRange(): Range | undefined {
    return this.defaultValueRange;
  }

  /** Sets `defaultValue[x]` as Range and clears every other type of it. */
  setDefaultValueRange(defaultValueRange: Range | undefined): this {
    return this.setFieldValue('defaultValueRange', defaultValueRange);
  }

  hasDefaultValueRange(): boolean {
    return this.hasFieldValue('defaultValueRange');
  }

  getDefaultValueRatio(): Ratio | undefined {
    return this.defaultValueRatio;
  }

  /** Sets `defaultValue[x]` as Ratio and clears every other type of it. */
  setDefaultValueRatio(defaultValueRatio: Ratio | undefined): this {
    return this.setFieldValue('defaultValueRatio', defaultValueRatio);
  }

  hasDefaultValueRatio(): boolean {
    return this.hasFieldValue('defaultValueRatio');
  }

  getDefaultValueReference(): Reference | undefined {
    return this.defaultValueReference;
  }

  /** Sets `defaultValue[x]` as Reference and clears every other type of it. */
  setDefaultValueReference(defaultValueReference: Reference | undefined): this {
    return this.setFieldValue('defaultValueReference', defaultValueReference);
  }

  hasDefaultValueReference(): boolean {
    return this.hasFieldValue('defaultValueReference');
  }

  getDefaultValueSampledData(): SampledData | undefined {
    return this.defaultValueSampledData;
  }

  /** Sets `defaultValue[x]` as SampledData and clears every other type of it. */
  setDefaultValueSampledData(defaultValueSampledData: SampledData | undefined): this {
    return this.setFieldValue('defaultValueSampledData', defaultValueSampledData);
  }

  hasDefaultValueSampledData(): boolean {
    return this.hasFieldValue('defaultValueSampledData');
  }

  getDefaultValueSignature(): Signature | undefined {
    return this.defaultValueSignature;
  }

  /** Sets `defaultValue[x]` as Signature and clears every other type of it. */
  setDefaultValueSignature(defaultValueSignature: Signature | undefined): this {
    return this.setFieldValue('defaultValueSignature', defaultValueSignature);
  }

  hasDefaultValueSignature(): boolean {
    return this.hasFieldValue('defaultValueSignature');
  }

  getDefaultValueTiming(): Timing | undefined {
    return this.defaultValueTiming;
  }

  /** Sets `defaultValue[x]` as Timing and clears every other type of it. */
  setDefaultValueTiming(defaultValueTiming: Timing | undefined): this {
    return this.setFieldValue('defaultValueTiming', defaultValueTiming);
  }

  hasDefaultValueTiming(): boolean {
    return this.hasFieldValue('defaultValueTiming');
  }

  getDefaultValueContactDetail(): ContactDetail | undefined {
    return this.defaultValueContactDetail;
  }

  /** Sets `defaultValue[x]` as ContactDetail and clears every other type of it. */
  setDefaultValueContactDetail(defaultValueContactDetail: ContactDetail | undefined): this {
    return this.setFieldValue('defaultValueContactDetail', defaultValueContactDetail);
  }

  hasDefaultValueContactDetail(): boolean {
    return this.hasFieldValue('defaultValueContactDetail');
  }

  getDefaultValueContributor(): Contributor | undefined {
    return this.defaultValueContributor;
  }

  /** Sets `defaultValue[x]` as Contributor and clears every other type of it. */
  setDefaultValueContributor(defaultValueContributor: Contributor | undefined): this {
    return this.setFieldValue('defaultValueContributor', defaultValueContributor);
  }

  hasDefaultValueContributor(): boolean {
    return this.hasFieldValue('defaultValueContributor');
  }

  getDefaultValueDataRequirement(): DataRequirement | undefined {
    return this.defaultValueDataRequirement;
  }

  /** Sets `defaultValue[x]` as DataRequirement and clears every other type of it. */
  setDefaultValueDataRequirement(defaultValueDataRequirement: DataRequirement | undefined): this {
    return this.setFieldValue('defaultValueDataRequirement', defaultValueDataRequirement);
  }

  hasDefaultValueDataRequirement(): boolean {
    return this.hasFieldValue('defaultValueDataRequirement');
  }

  getDefaultValueExpression(): Expression | undefined {
    return this.defaultValueExpression;
  }

  /** Sets `defaultValue[x]` as Expression and clears every other type of it. */
  setDefaultValueExpression(defaultValueExpression: Expression | undefined): this {
    return this.setFieldValue('defaultValueExpression', defaultValueExpression);
  }

  hasDefaultValueExpression(): boolean {
    return this.hasFieldValue('defaultValueExpression');
  }

  getDefaultValueParameterDefinition(): ParameterDefinition | undefined {
    return this.defaultValueParameterDefinition;
  }

  /** Sets `defaultValue[x]` as ParameterDefinition and clears every other type of it. */
  setDefaultValueParameterDefinition(
    defaultValueParameterDefinition: ParameterDefinition | undefined
  ): this {
    return this.setFieldValue('defaultValueParameterDefinition', defaultValueParameterDefinition);
  }

  hasDefaultValueParameterDefinition(): boolean {
    return this.hasFieldValue('defaultValueParameterDefinition');
  }

  getDefaultValueRelatedArtifact(): RelatedArtifact | undefined {
    return this.defaultValueRelatedArtifact;
  }

  /** Sets `defaultValue[x]` as RelatedArtifact and clears every other type of it. */
  setDefaultValueRelatedArtifact(defaultValueRelatedArtifact: RelatedArtifact | undefined): this {
    return this.setFieldValue('defaultValueRelatedArtifact', defaultValueRelatedArtifact);
  }

  hasDefaultValueRelatedArtifact(): boolean {
    return this.hasFieldValue('defaultValueRelatedArtifact');
  }

  getDefaultValueTriggerDefinition(): TriggerDefinition | undefined {
    return this.defaultValueTriggerDefinition;
  }

  /** Sets `defaultValue[x]` as TriggerDefinition and clears every other type of it. */
  setDefaultValueTriggerDefinition(
    defaultValueTriggerDefinition: TriggerDefinition | undefined
  ): this {
    return this.setFieldValue('defaultValueTriggerDefinition', defaultValueTriggerDefinition);
  }

  hasDefaultValueTriggerDefinition(): boolean {
    return this.hasFieldValue('defaultValueTriggerDefinition');
  }

  getDefaultValueUsageContext(): UsageContext | undefined {
    return this.defaultValueUsageContext;
  }

  /** Sets `defaultValue[x]` as UsageContext and clears every other type of it. */
  setDefaultValueUsageContext(defaultValueUsageContext: UsageContext | undefined): this {
    return this.setFieldValue('defaultValueUsageContext', defaultValueUsageContext);
  }

  hasDefaultValueUsageContext(): boolean {
    return this.hasFieldValue('defaultValueUsageContext');
  }

  getDefaultValueDosage(): Dosage | undefined {
    return this.defaultValueDosage;
  }

  /** Sets `defaultValue[x]` as Dosage and clears every other type of it. */
  setDefaultValueDosage(defaultValueDosage: Dosage | undefined): this {
    return this.setFieldValue('defaultValueDosage', defaultValueDosage);
  }

  hasDefaultValueDosage(): boolean {
    return this.hasFieldValue('defaultValueDosage');
  }

  getDefaultValueMeta(): Meta | undefined {
    return this.defaultValueMeta;
  }

  /** Sets `defaultValue[x]` as Meta and clears every other type of it. */
  setDefaultValueMeta(defaultValueMeta: Meta | undefined): this {
    return this.setFieldValue('defaultValueMeta', defaultValueMeta);
  }

  hasDefaultValueMeta(): boolean {
    return this.hasFieldValue('defaultValueMeta');
  }

  /** Implicit meaning when this element is missing (0..1) */
  getMeaningWhenMissing(): string | undefined {
    return this.meaningWhenMissing;
  }

  /** Sets `meaningWhenMissing`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setMeaningWhenMissing(meaningWhenMissing: string | undefined): this {
    return this.setFieldValue('meaningWhenMissing', meaningWhenMissing);
  }

  hasMeaningWhenMissing(): boolean {
    return this.hasFieldValue('meaningWhenMissing');
  }

  /** The element carrying the id and extensions of `meaningWhenMissing`. Created when absent. */
  getMeaningWhenMissingElement(): Element {
    if (this._meaningWhenMissing === undefined) {
      this._meaningWhenMissing = new Element();
    }
    return this._meaningWhenMissing;
  }

  setMeaningWhenMissingElement(meaningWhenMissingElement: Element | undefined): this {
    this._meaningWhenMissing = meaningWhenMissingElement;
    return this;
  }

  /** What the order of the elements means (0..1) */
  getOrderMeaning(): string | undefined {
    return this.orderMeaning;
  }

  /** Sets `orderMeaning`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setOrderMeaning(orderMeaning: string | undefined): this {
    return this.setFieldValue('orderMeaning', orderMeaning);
  }

  hasOrderMeaning(): boolean {
    return this.hasFieldValue('orderMeaning');
  }

  /** The element carrying the id and extensions of `orderMeaning`. Created when absent. */
  getOrderMeaningElement(): Element {
    if (this._orderMeaning === undefined) {
      this._orderMeaning = new Element();
    }
    return this._orderMeaning;
  }

  setOrderMeaningElement(orderMeaningElement: Element | undefined): this {
    this._orderMeaning = orderMeaningElement;
    return this;
  }

  /** Value must be exactly this (0..1) Whichever type of `fixed[x]` is set. */
  getFixed():
    | string
    | boolean
    | number
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | Coding
    | ContactPoint
    | Count
    | Distance
    | Duration
    | HumanName
    | Identifier
    | Money
    | Period
    | Quantity
    | Range
    | Ratio
    | Reference
    | SampledData
    | Signature
    | Timing
    | ContactDetail
    | Contributor
    | DataRequirement
    | Expression
    | ParameterDefinition
    | RelatedArtifact
    | TriggerDefinition
    | UsageContext
    | Dosage
    | Meta
    | undefined {
    return this.getChoiceValue<
      | string
      | boolean
      | number
      | Address
      | Age
      | Annotation
      | Attachment
      | CodeableConcept
      | Coding
      | ContactPoint
      | Count
      | Distance
      | Duration
      | HumanName
      | Identifier
      | Money
      | Period
      | Quantity
      | Range
      | Ratio
      | Reference
      | SampledData
      | Signature
      | Timing
      | ContactDetail
      | Contributor
      | DataRequirement
      | Expression
      | ParameterDefinition
      | RelatedArtifact
      | TriggerDefinition
      | UsageContext
      | Dosage
      | Meta
    >('fixed');
  }

  /** True when any type of `fixed[x]` is set. */
  hasFixed(): boolean {
    return this.hasChoiceValue('fixed');
  }

  getFixedBase64Binary(): string | undefined {
    return this.fixedBase64Binary;
  }

  /** Sets `fixed[x]` as base64Binary and clears every other type of it. */
  setFixedBase64Binary(fixedBase64Binary: string | undefined): this {
    return this.setFieldValue('fixedBase64Binary', fixedBase64Binary);
  }

  hasFixedBase64Binary(): boolean {
    return this.hasFieldValue('fixedBase64Binary');
  }

  getFixedBoolean(): boolean | undefined {
    return this.fixedBoolean;
  }

  /** Sets `fixed[x]` as boolean and clears every other type of it. */
  setFixedBoolean(fixedBoolean: boolean | undefined): this {
    return this.setFieldValue('fixedBoolean', fixedBoolean);
  }

  hasFixedBoolean(): boolean {
    return this.hasFieldValue('fixedBoolean');
  }

  getFixedCanonical(): string | undefined {
    return this.fixedCanonical;
  }

  /** Sets `fixed[x]` as canonical and clears every other type of it. */
  setFixedCanonical(fixedCanonical: string | undefined): this {
    return this.setFieldValue('fixedCanonical', fixedCanonical);
  }

  hasFixedCanonical(): boolean {
    return this.hasFieldValue('fixedCanonical');
  }

  getFixedCode(): string | undefined {
    return this.fixedCode;
  }

  /** Sets `fixed[x]` as code and clears every other type of it. */
  setFixedCode(fixedCode: string | undefined): this {
    return this.setFieldValue('fixedCode', fixedCode);
  }

  hasFixedCode(): boolean {
    return this.hasFieldValue('fixedCode');
  }

  getFixedDate(): string | undefined {
    return this.fixedDate;
  }

  /** Sets `fixed[x]` as date and clears every other type of it. */
  setFixedDate(fixedDate: string | undefined): this {
    return this.setFieldValue('fixedDate', fixedDate);
  }

  hasFixedDate(): boolean {
    return this.hasFieldValue('fixedDate');
  }

  getFixedDateTime(): string | undefined {
    return this.fixedDateTime;
  }

  /** Sets `fixed[x]` as dateTime and clears every other type of it. */
  setFixedDateTime(fixedDateTime: string | undefined): this {
    return this.setFieldValue('fixedDateTime', fixedDateTime);
  }

  hasFixedDateTime(): boolean {
    return this.hasFieldValue('fixedDateTime');
  }

  getFixedDecimal(): number | undefined {
    return this.fixedDecimal;
  }

  /** Sets `fixed[x]` as decimal and clears every other type of it. */
  setFixedDecimal(fixedDecimal: number | undefined): this {
    return this.setFieldValue('fixedDecimal', fixedDecimal);
  }

  hasFixedDecimal(): boolean {
    return this.hasFieldValue('fixedDecimal');
  }

  getFixedId(): string | undefined {
    return this.fixedId;
  }

  /** Sets `fixed[x]` as id and clears every other type of it. */
  setFixedId(fixedId: string | undefined): this {
    return this.setFieldValue('fixedId', fixedId);
  }

  hasFixedId(): boolean {
    return this.hasFieldValue('fixedId');
  }

  getFixedInstant(): string | undefined {
    return this.fixedInstant;
  }

  /** Sets `fixed[x]` as instant and clears every other type of it. */
  setFixedInstant(fixedInstant: string | undefined): this {
    return this.setFieldValue('fixedInstant', fixedInstant);
  }

  hasFixedInstant(): boolean {
    return this.hasFieldValue('fixedInstant');
  }

  getFixedInteger(): number | undefined {
    return this.fixedInteger;
  }

  /** Sets `fixed[x]` as integer and clears every other type of it. */
  setFixedInteger(fixedInteger: number | undefined): this {
    return this.setFieldValue('fixedInteger', fixedInteger);
  }

  hasFixedInteger(): boolean {
    return this.hasFieldValue('fixedInteger');
  }

  getFixedMarkdown(): string | undefined {
    return this.fixedMarkdown;
  }

  /** Sets `fixed[x]` as markdown and clears every other type of it. */
  setFixedMarkdown(fixedMarkdown: string | undefined): this {
    return this.setFieldValue('fixedMarkdown', fixedMarkdown);
  }

  hasFixedMarkdown(): boolean {
    return this.hasFieldValue('fixedMarkdown');
  }

  getFixedOid(): string | undefined {
    return this.fixedOid;
  }

  /** Sets `fixed[x]` as oid and clears every other type of it. */
  setFixedOid(fixedOid: string | undefined): this {
    return this.setFieldValue('fixedOid', fixedOid);
  }

  hasFixedOid(): boolean {
    return this.hasFieldValue('fixedOid');
  }

  getFixedPositiveInt(): number | undefined {
    return this.fixedPositiveInt;
  }

  /** Sets `fixed[x]` as positiveInt and clears every other type of it. */
  setFixedPositiveInt(fixedPositiveInt: number | undefined): this {
    return this.setFieldValue('fixedPositiveInt', fixedPositiveInt);
  }

  hasFixedPositiveInt(): boolean {
    return this.hasFieldValue('fixedPositiveInt');
  }

  getFixedString(): string | undefined {
    return this.fixedString;
  }

  /** Sets `fixed[x]` as string and clears every other type of it. */
  setFixedString(fixedString: string | undefined): this {
    return this.setFieldValue('fixedString', fixedString);
  }

  hasFixedString(): boolean {
    return this.hasFieldValue('fixedString');
  }

  getFixedTime(): string | undefined {
    return this.fixedTime;
  }

  /** Sets `fixed[x]` as time and clears every other type of it. */
  setFixedTime(fixedTime: string | undefined): this {
    return this.setFieldValue('fixedTime', fixedTime);
  }

  hasFixedTime(): boolean {
    return this.hasFieldValue('fixedTime');
  }

  getFixedUnsignedInt(): number | undefined {
    return this.fixedUnsignedInt;
  }

  /** Sets `fixed[x]` as unsignedInt and clears every other type of it. */
  setFixedUnsignedInt(fixedUnsignedInt: number | undefined): this {
    return this.setFieldValue('fixedUnsignedInt', fixedUnsignedInt);
  }

  hasFixedUnsignedInt(): boolean {
    return this.hasFieldValue('fixedUnsignedInt');
  }

  getFixedUri(): string | undefined {
    return this.fixedUri;
  }

  /** Sets `fixed[x]` as uri and clears every other type of it. */
  setFixedUri(fixedUri: string | undefined): this {
    return this.setFieldValue('fixedUri', fixedUri);
  }

  hasFixedUri(): boolean {
    return this.hasFieldValue('fixedUri');
  }

  getFixedUrl(): string | undefined {
    return this.fixedUrl;
  }

  /** Sets `fixed[x]` as url and clears every other type of it. */
  setFixedUrl(fixedUrl: string | undefined): this {
    return this.setFieldValue('fixedUrl', fixedUrl);
  }

  hasFixedUrl(): boolean {
    return this.hasFieldValue('fixedUrl');
  }

  getFixedUuid(): string | undefined {
    return this.fixedUuid;
  }

  /** Sets `fixed[x]` as uuid and clears every other type of it. */
  setFixedUuid(fixedUuid: string | undefined): this {
    return this.setFieldValue('fixedUuid', fixedUuid);
  }

  hasFixedUuid(): boolean {
    return this.hasFieldValue('fixedUuid');
  }

  getFixedAddress(): Address | undefined {
    return this.fixedAddress;
  }

  /** Sets `fixed[x]` as Address and clears every other type of it. */
  setFixedAddress(fixedAddress: Address | undefined): this {
    return this.setFieldValue('fixedAddress', fixedAddress);
  }

  hasFixedAddress(): boolean {
    return this.hasFieldValue('fixedAddress');
  }

  getFixedAge(): Age | undefined {
    return this.fixedAge;
  }

  /** Sets `fixed[x]` as Age and clears every other type of it. */
  setFixedAge(fixedAge: Age | undefined): this {
    return this.setFieldValue('fixedAge', fixedAge);
  }

  hasFixedAge(): boolean {
    return this.hasFieldValue('fixedAge');
  }

  getFixedAnnotation(): Annotation | undefined {
    return this.fixedAnnotation;
  }

  /** Sets `fixed[x]` as Annotation and clears every other type of it. */
  setFixedAnnotation(fixedAnnotation: Annotation | undefined): this {
    return this.setFieldValue('fixedAnnotation', fixedAnnotation);
  }

  hasFixedAnnotation(): boolean {
    return this.hasFieldValue('fixedAnnotation');
  }

  getFixedAttachment(): Attachment | undefined {
    return this.fixedAttachment;
  }

  /** Sets `fixed[x]` as Attachment and clears every other type of it. */
  setFixedAttachment(fixedAttachment: Attachment | undefined): this {
    return this.setFieldValue('fixedAttachment', fixedAttachment);
  }

  hasFixedAttachment(): boolean {
    return this.hasFieldValue('fixedAttachment');
  }

  getFixedCodeableConcept(): CodeableConcept | undefined {
    return this.fixedCodeableConcept;
  }

  /** Sets `fixed[x]` as CodeableConcept and clears every other type of it. */
  setFixedCodeableConcept(fixedCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('fixedCodeableConcept', fixedCodeableConcept);
  }

  hasFixedCodeableConcept(): boolean {
    return this.hasFieldValue('fixedCodeableConcept');
  }

  getFixedCoding(): Coding | undefined {
    return this.fixedCoding;
  }

  /** Sets `fixed[x]` as Coding and clears every other type of it. */
  setFixedCoding(fixedCoding: Coding | undefined): this {
    return this.setFieldValue('fixedCoding', fixedCoding);
  }

  hasFixedCoding(): boolean {
    return this.hasFieldValue('fixedCoding');
  }

  getFixedContactPoint(): ContactPoint | undefined {
    return this.fixedContactPoint;
  }

  /** Sets `fixed[x]` as ContactPoint and clears every other type of it. */
  setFixedContactPoint(fixedContactPoint: ContactPoint | undefined): this {
    return this.setFieldValue('fixedContactPoint', fixedContactPoint);
  }

  hasFixedContactPoint(): boolean {
    return this.hasFieldValue('fixedContactPoint');
  }

  getFixedCount(): Count | undefined {
    return this.fixedCount;
  }

  /** Sets `fixed[x]` as Count and clears every other type of it. */
  setFixedCount(fixedCount: Count | undefined): this {
    return this.setFieldValue('fixedCount', fixedCount);
  }

  hasFixedCount(): boolean {
    return this.hasFieldValue('fixedCount');
  }

  getFixedDistance(): Distance | undefined {
    return this.fixedDistance;
  }

  /** Sets `fixed[x]` as Distance and clears every other type of it. */
  setFixedDistance(fixedDistance: Distance | undefined): this {
    return this.setFieldValue('fixedDistance', fixedDistance);
  }

  hasFixedDistance(): boolean {
    return this.hasFieldValue('fixedDistance');
  }

  getFixedDuration(): Duration | undefined {
    return this.fixedDuration;
  }

  /** Sets `fixed[x]` as Duration and clears every other type of it. */
  setFixedDuration(fixedDuration: Duration | undefined): this {
    return this.setFieldValue('fixedDuration', fixedDuration);
  }

  hasFixedDuration(): boolean {
    return this.hasFieldValue('fixedDuration');
  }

  getFixedHumanName(): HumanName | undefined {
    return this.fixedHumanName;
  }

  /** Sets `fixed[x]` as HumanName and clears every other type of it. */
  setFixedHumanName(fixedHumanName: HumanName | undefined): this {
    return this.setFieldValue('fixedHumanName', fixedHumanName);
  }

  hasFixedHumanName(): boolean {
    return this.hasFieldValue('fixedHumanName');
  }

  getFixedIdentifier(): Identifier | undefined {
    return this.fixedIdentifier;
  }

  /** Sets `fixed[x]` as Identifier and clears every other type of it. */
  setFixedIdentifier(fixedIdentifier: Identifier | undefined): this {
    return this.setFieldValue('fixedIdentifier', fixedIdentifier);
  }

  hasFixedIdentifier(): boolean {
    return this.hasFieldValue('fixedIdentifier');
  }

  getFixedMoney(): Money | undefined {
    return this.fixedMoney;
  }

  /** Sets `fixed[x]` as Money and clears every other type of it. */
  setFixedMoney(fixedMoney: Money | undefined): this {
    return this.setFieldValue('fixedMoney', fixedMoney);
  }

  hasFixedMoney(): boolean {
    return this.hasFieldValue('fixedMoney');
  }

  getFixedPeriod(): Period | undefined {
    return this.fixedPeriod;
  }

  /** Sets `fixed[x]` as Period and clears every other type of it. */
  setFixedPeriod(fixedPeriod: Period | undefined): this {
    return this.setFieldValue('fixedPeriod', fixedPeriod);
  }

  hasFixedPeriod(): boolean {
    return this.hasFieldValue('fixedPeriod');
  }

  getFixedQuantity(): Quantity | undefined {
    return this.fixedQuantity;
  }

  /** Sets `fixed[x]` as Quantity and clears every other type of it. */
  setFixedQuantity(fixedQuantity: Quantity | undefined): this {
    return this.setFieldValue('fixedQuantity', fixedQuantity);
  }

  hasFixedQuantity(): boolean {
    return this.hasFieldValue('fixedQuantity');
  }

  getFixedRange(): Range | undefined {
    return this.fixedRange;
  }

  /** Sets `fixed[x]` as Range and clears every other type of it. */
  setFixedRange(fixedRange: Range | undefined): this {
    return this.setFieldValue('fixedRange', fixedRange);
  }

  hasFixedRange(): boolean {
    return this.hasFieldValue('fixedRange');
  }

  getFixedRatio(): Ratio | undefined {
    return this.fixedRatio;
  }

  /** Sets `fixed[x]` as Ratio and clears every other type of it. */
  setFixedRatio(fixedRatio: Ratio | undefined): this {
    return this.setFieldValue('fixedRatio', fixedRatio);
  }

  hasFixedRatio(): boolean {
    return this.hasFieldValue('fixedRatio');
  }

  getFixedReference(): Reference | undefined {
    return this.fixedReference;
  }

  /** Sets `fixed[x]` as Reference and clears every other type of it. */
  setFixedReference(fixedReference: Reference | undefined): this {
    return this.setFieldValue('fixedReference', fixedReference);
  }

  hasFixedReference(): boolean {
    return this.hasFieldValue('fixedReference');
  }

  getFixedSampledData(): SampledData | undefined {
    return this.fixedSampledData;
  }

  /** Sets `fixed[x]` as SampledData and clears every other type of it. */
  setFixedSampledData(fixedSampledData: SampledData | undefined): this {
    return this.setFieldValue('fixedSampledData', fixedSampledData);
  }

  hasFixedSampledData(): boolean {
    return this.hasFieldValue('fixedSampledData');
  }

  getFixedSignature(): Signature | undefined {
    return this.fixedSignature;
  }

  /** Sets `fixed[x]` as Signature and clears every other type of it. */
  setFixedSignature(fixedSignature: Signature | undefined): this {
    return this.setFieldValue('fixedSignature', fixedSignature);
  }

  hasFixedSignature(): boolean {
    return this.hasFieldValue('fixedSignature');
  }

  getFixedTiming(): Timing | undefined {
    return this.fixedTiming;
  }

  /** Sets `fixed[x]` as Timing and clears every other type of it. */
  setFixedTiming(fixedTiming: Timing | undefined): this {
    return this.setFieldValue('fixedTiming', fixedTiming);
  }

  hasFixedTiming(): boolean {
    return this.hasFieldValue('fixedTiming');
  }

  getFixedContactDetail(): ContactDetail | undefined {
    return this.fixedContactDetail;
  }

  /** Sets `fixed[x]` as ContactDetail and clears every other type of it. */
  setFixedContactDetail(fixedContactDetail: ContactDetail | undefined): this {
    return this.setFieldValue('fixedContactDetail', fixedContactDetail);
  }

  hasFixedContactDetail(): boolean {
    return this.hasFieldValue('fixedContactDetail');
  }

  getFixedContributor(): Contributor | undefined {
    return this.fixedContributor;
  }

  /** Sets `fixed[x]` as Contributor and clears every other type of it. */
  setFixedContributor(fixedContributor: Contributor | undefined): this {
    return this.setFieldValue('fixedContributor', fixedContributor);
  }

  hasFixedContributor(): boolean {
    return this.hasFieldValue('fixedContributor');
  }

  getFixedDataRequirement(): DataRequirement | undefined {
    return this.fixedDataRequirement;
  }

  /** Sets `fixed[x]` as DataRequirement and clears every other type of it. */
  setFixedDataRequirement(fixedDataRequirement: DataRequirement | undefined): this {
    return this.setFieldValue('fixedDataRequirement', fixedDataRequirement);
  }

  hasFixedDataRequirement(): boolean {
    return this.hasFieldValue('fixedDataRequirement');
  }

  getFixedExpression(): Expression | undefined {
    return this.fixedExpression;
  }

  /** Sets `fixed[x]` as Expression and clears every other type of it. */
  setFixedExpression(fixedExpression: Expression | undefined): this {
    return this.setFieldValue('fixedExpression', fixedExpression);
  }

  hasFixedExpression(): boolean {
    return this.hasFieldValue('fixedExpression');
  }

  getFixedParameterDefinition(): ParameterDefinition | undefined {
    return this.fixedParameterDefinition;
  }

  /** Sets `fixed[x]` as ParameterDefinition and clears every other type of it. */
  setFixedParameterDefinition(fixedParameterDefinition: ParameterDefinition | undefined): this {
    return this.setFieldValue('fixedParameterDefinition', fixedParameterDefinition);
  }

  hasFixedParameterDefinition(): boolean {
    return this.hasFieldValue('fixedParameterDefinition');
  }

  getFixedRelatedArtifact(): RelatedArtifact | undefined {
    return this.fixedRelatedArtifact;
  }

  /** Sets `fixed[x]` as RelatedArtifact and clears every other type of it. */
  setFixedRelatedArtifact(fixedRelatedArtifact: RelatedArtifact | undefined): this {
    return this.setFieldValue('fixedRelatedArtifact', fixedRelatedArtifact);
  }

  hasFixedRelatedArtifact(): boolean {
    return this.hasFieldValue('fixedRelatedArtifact');
  }

  getFixedTriggerDefinition(): TriggerDefinition | undefined {
    return this.fixedTriggerDefinition;
  }

  /** Sets `fixed[x]` as TriggerDefinition and clears every other type of it. */
  setFixedTriggerDefinition(fixedTriggerDefinition: TriggerDefinition | undefined): this {
    return this.setFieldValue('fixedTriggerDefinition', fixedTriggerDefinition);
  }

  hasFixedTriggerDefinition(): boolean {
    return this.hasFieldValue('fixedTriggerDefinition');
  }

  getFixedUsageContext(): UsageContext | undefined {
    return this.fixedUsageContext;
  }

  /** Sets `fixed[x]` as UsageContext and clears every other type of it. */
  setFixedUsageContext(fixedUsageContext: UsageContext | undefined): this {
    return this.setFieldValue('fixedUsageContext', fixedUsageContext);
  }

  hasFixedUsageContext(): boolean {
    return this.hasFieldValue('fixedUsageContext');
  }

  getFixedDosage(): Dosage | undefined {
    return this.fixedDosage;
  }

  /** Sets `fixed[x]` as Dosage and clears every other type of it. */
  setFixedDosage(fixedDosage: Dosage | undefined): this {
    return this.setFieldValue('fixedDosage', fixedDosage);
  }

  hasFixedDosage(): boolean {
    return this.hasFieldValue('fixedDosage');
  }

  getFixedMeta(): Meta | undefined {
    return this.fixedMeta;
  }

  /** Sets `fixed[x]` as Meta and clears every other type of it. */
  setFixedMeta(fixedMeta: Meta | undefined): this {
    return this.setFieldValue('fixedMeta', fixedMeta);
  }

  hasFixedMeta(): boolean {
    return this.hasFieldValue('fixedMeta');
  }

  /** Value must have at least these property values (0..1) Whichever type of `pattern[x]` is set. */
  getPattern():
    | string
    | boolean
    | number
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | Coding
    | ContactPoint
    | Count
    | Distance
    | Duration
    | HumanName
    | Identifier
    | Money
    | Period
    | Quantity
    | Range
    | Ratio
    | Reference
    | SampledData
    | Signature
    | Timing
    | ContactDetail
    | Contributor
    | DataRequirement
    | Expression
    | ParameterDefinition
    | RelatedArtifact
    | TriggerDefinition
    | UsageContext
    | Dosage
    | Meta
    | undefined {
    return this.getChoiceValue<
      | string
      | boolean
      | number
      | Address
      | Age
      | Annotation
      | Attachment
      | CodeableConcept
      | Coding
      | ContactPoint
      | Count
      | Distance
      | Duration
      | HumanName
      | Identifier
      | Money
      | Period
      | Quantity
      | Range
      | Ratio
      | Reference
      | SampledData
      | Signature
      | Timing
      | ContactDetail
      | Contributor
      | DataRequirement
      | Expression
      | ParameterDefinition
      | RelatedArtifact
      | TriggerDefinition
      | UsageContext
      | Dosage
      | Meta
    >('pattern');
  }

  /** True when any type of `pattern[x]` is set. */
  hasPattern(): boolean {
    return this.hasChoiceValue('pattern');
  }

  getPatternBase64Binary(): string | undefined {
    return this.patternBase64Binary;
  }

  /** Sets `pattern[x]` as base64Binary and clears every other type of it. */
  setPatternBase64Binary(patternBase64Binary: string | undefined): this {
    return this.setFieldValue('patternBase64Binary', patternBase64Binary);
  }

  hasPatternBase64Binary(): boolean {
    return this.hasFieldValue('patternBase64Binary');
  }

  getPatternBoolean(): boolean | undefined {
    return this.patternBoolean;
  }

  /** Sets `pattern[x]` as boolean and clears every other type of it. */
  setPatternBoolean(patternBoolean: boolean | undefined): this {
    return this.setFieldValue('patternBoolean', patternBoolean);
  }

  hasPatternBoolean(): boolean {
    return this.hasFieldValue('patternBoolean');
  }

  getPatternCanonical(): string | undefined {
    return this.patternCanonical;
  }

  /** Sets `pattern[x]` as canonical and clears every other type of it. */
  setPatternCanonical(patternCanonical: string | undefined): this {
    return this.setFieldValue('patternCanonical', patternCanonical);
  }

  hasPatternCanonical(): boolean {
    return this.hasFieldValue('patternCanonical');
  }

  getPatternCode(): string | undefined {
    return this.patternCode;
  }

  /** Sets `pattern[x]` as code and clears every other type of it. */
  setPatternCode(patternCode: string | undefined): this {
    return this.setFieldValue('patternCode', patternCode);
  }

  hasPatternCode(): boolean {
    return this.hasFieldValue('patternCode');
  }

  getPatternDate(): string | undefined {
    return this.patternDate;
  }

  /** Sets `pattern[x]` as date and clears every other type of it. */
  setPatternDate(patternDate: string | undefined): this {
    return this.setFieldValue('patternDate', patternDate);
  }

  hasPatternDate(): boolean {
    return this.hasFieldValue('patternDate');
  }

  getPatternDateTime(): string | undefined {
    return this.patternDateTime;
  }

  /** Sets `pattern[x]` as dateTime and clears every other type of it. */
  setPatternDateTime(patternDateTime: string | undefined): this {
    return this.setFieldValue('patternDateTime', patternDateTime);
  }

  hasPatternDateTime(): boolean {
    return this.hasFieldValue('patternDateTime');
  }

  getPatternDecimal(): number | undefined {
    return this.patternDecimal;
  }

  /** Sets `pattern[x]` as decimal and clears every other type of it. */
  setPatternDecimal(patternDecimal: number | undefined): this {
    return this.setFieldValue('patternDecimal', patternDecimal);
  }

  hasPatternDecimal(): boolean {
    return this.hasFieldValue('patternDecimal');
  }

  getPatternId(): string | undefined {
    return this.patternId;
  }

  /** Sets `pattern[x]` as id and clears every other type of it. */
  setPatternId(patternId: string | undefined): this {
    return this.setFieldValue('patternId', patternId);
  }

  hasPatternId(): boolean {
    return this.hasFieldValue('patternId');
  }

  getPatternInstant(): string | undefined {
    return this.patternInstant;
  }

  /** Sets `pattern[x]` as instant and clears every other type of it. */
  setPatternInstant(patternInstant: string | undefined): this {
    return this.setFieldValue('patternInstant', patternInstant);
  }

  hasPatternInstant(): boolean {
    return this.hasFieldValue('patternInstant');
  }

  getPatternInteger(): number | undefined {
    return this.patternInteger;
  }

  /** Sets `pattern[x]` as integer and clears every other type of it. */
  setPatternInteger(patternInteger: number | undefined): this {
    return this.setFieldValue('patternInteger', patternInteger);
  }

  hasPatternInteger(): boolean {
    return this.hasFieldValue('patternInteger');
  }

  getPatternMarkdown(): string | undefined {
    return this.patternMarkdown;
  }

  /** Sets `pattern[x]` as markdown and clears every other type of it. */
  setPatternMarkdown(patternMarkdown: string | undefined): this {
    return this.setFieldValue('patternMarkdown', patternMarkdown);
  }

  hasPatternMarkdown(): boolean {
    return this.hasFieldValue('patternMarkdown');
  }

  getPatternOid(): string | undefined {
    return this.patternOid;
  }

  /** Sets `pattern[x]` as oid and clears every other type of it. */
  setPatternOid(patternOid: string | undefined): this {
    return this.setFieldValue('patternOid', patternOid);
  }

  hasPatternOid(): boolean {
    return this.hasFieldValue('patternOid');
  }

  getPatternPositiveInt(): number | undefined {
    return this.patternPositiveInt;
  }

  /** Sets `pattern[x]` as positiveInt and clears every other type of it. */
  setPatternPositiveInt(patternPositiveInt: number | undefined): this {
    return this.setFieldValue('patternPositiveInt', patternPositiveInt);
  }

  hasPatternPositiveInt(): boolean {
    return this.hasFieldValue('patternPositiveInt');
  }

  getPatternString(): string | undefined {
    return this.patternString;
  }

  /** Sets `pattern[x]` as string and clears every other type of it. */
  setPatternString(patternString: string | undefined): this {
    return this.setFieldValue('patternString', patternString);
  }

  hasPatternString(): boolean {
    return this.hasFieldValue('patternString');
  }

  getPatternTime(): string | undefined {
    return this.patternTime;
  }

  /** Sets `pattern[x]` as time and clears every other type of it. */
  setPatternTime(patternTime: string | undefined): this {
    return this.setFieldValue('patternTime', patternTime);
  }

  hasPatternTime(): boolean {
    return this.hasFieldValue('patternTime');
  }

  getPatternUnsignedInt(): number | undefined {
    return this.patternUnsignedInt;
  }

  /** Sets `pattern[x]` as unsignedInt and clears every other type of it. */
  setPatternUnsignedInt(patternUnsignedInt: number | undefined): this {
    return this.setFieldValue('patternUnsignedInt', patternUnsignedInt);
  }

  hasPatternUnsignedInt(): boolean {
    return this.hasFieldValue('patternUnsignedInt');
  }

  getPatternUri(): string | undefined {
    return this.patternUri;
  }

  /** Sets `pattern[x]` as uri and clears every other type of it. */
  setPatternUri(patternUri: string | undefined): this {
    return this.setFieldValue('patternUri', patternUri);
  }

  hasPatternUri(): boolean {
    return this.hasFieldValue('patternUri');
  }

  getPatternUrl(): string | undefined {
    return this.patternUrl;
  }

  /** Sets `pattern[x]` as url and clears every other type of it. */
  setPatternUrl(patternUrl: string | undefined): this {
    return this.setFieldValue('patternUrl', patternUrl);
  }

  hasPatternUrl(): boolean {
    return this.hasFieldValue('patternUrl');
  }

  getPatternUuid(): string | undefined {
    return this.patternUuid;
  }

  /** Sets `pattern[x]` as uuid and clears every other type of it. */
  setPatternUuid(patternUuid: string | undefined): this {
    return this.setFieldValue('patternUuid', patternUuid);
  }

  hasPatternUuid(): boolean {
    return this.hasFieldValue('patternUuid');
  }

  getPatternAddress(): Address | undefined {
    return this.patternAddress;
  }

  /** Sets `pattern[x]` as Address and clears every other type of it. */
  setPatternAddress(patternAddress: Address | undefined): this {
    return this.setFieldValue('patternAddress', patternAddress);
  }

  hasPatternAddress(): boolean {
    return this.hasFieldValue('patternAddress');
  }

  getPatternAge(): Age | undefined {
    return this.patternAge;
  }

  /** Sets `pattern[x]` as Age and clears every other type of it. */
  setPatternAge(patternAge: Age | undefined): this {
    return this.setFieldValue('patternAge', patternAge);
  }

  hasPatternAge(): boolean {
    return this.hasFieldValue('patternAge');
  }

  getPatternAnnotation(): Annotation | undefined {
    return this.patternAnnotation;
  }

  /** Sets `pattern[x]` as Annotation and clears every other type of it. */
  setPatternAnnotation(patternAnnotation: Annotation | undefined): this {
    return this.setFieldValue('patternAnnotation', patternAnnotation);
  }

  hasPatternAnnotation(): boolean {
    return this.hasFieldValue('patternAnnotation');
  }

  getPatternAttachment(): Attachment | undefined {
    return this.patternAttachment;
  }

  /** Sets `pattern[x]` as Attachment and clears every other type of it. */
  setPatternAttachment(patternAttachment: Attachment | undefined): this {
    return this.setFieldValue('patternAttachment', patternAttachment);
  }

  hasPatternAttachment(): boolean {
    return this.hasFieldValue('patternAttachment');
  }

  getPatternCodeableConcept(): CodeableConcept | undefined {
    return this.patternCodeableConcept;
  }

  /** Sets `pattern[x]` as CodeableConcept and clears every other type of it. */
  setPatternCodeableConcept(patternCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('patternCodeableConcept', patternCodeableConcept);
  }

  hasPatternCodeableConcept(): boolean {
    return this.hasFieldValue('patternCodeableConcept');
  }

  getPatternCoding(): Coding | undefined {
    return this.patternCoding;
  }

  /** Sets `pattern[x]` as Coding and clears every other type of it. */
  setPatternCoding(patternCoding: Coding | undefined): this {
    return this.setFieldValue('patternCoding', patternCoding);
  }

  hasPatternCoding(): boolean {
    return this.hasFieldValue('patternCoding');
  }

  getPatternContactPoint(): ContactPoint | undefined {
    return this.patternContactPoint;
  }

  /** Sets `pattern[x]` as ContactPoint and clears every other type of it. */
  setPatternContactPoint(patternContactPoint: ContactPoint | undefined): this {
    return this.setFieldValue('patternContactPoint', patternContactPoint);
  }

  hasPatternContactPoint(): boolean {
    return this.hasFieldValue('patternContactPoint');
  }

  getPatternCount(): Count | undefined {
    return this.patternCount;
  }

  /** Sets `pattern[x]` as Count and clears every other type of it. */
  setPatternCount(patternCount: Count | undefined): this {
    return this.setFieldValue('patternCount', patternCount);
  }

  hasPatternCount(): boolean {
    return this.hasFieldValue('patternCount');
  }

  getPatternDistance(): Distance | undefined {
    return this.patternDistance;
  }

  /** Sets `pattern[x]` as Distance and clears every other type of it. */
  setPatternDistance(patternDistance: Distance | undefined): this {
    return this.setFieldValue('patternDistance', patternDistance);
  }

  hasPatternDistance(): boolean {
    return this.hasFieldValue('patternDistance');
  }

  getPatternDuration(): Duration | undefined {
    return this.patternDuration;
  }

  /** Sets `pattern[x]` as Duration and clears every other type of it. */
  setPatternDuration(patternDuration: Duration | undefined): this {
    return this.setFieldValue('patternDuration', patternDuration);
  }

  hasPatternDuration(): boolean {
    return this.hasFieldValue('patternDuration');
  }

  getPatternHumanName(): HumanName | undefined {
    return this.patternHumanName;
  }

  /** Sets `pattern[x]` as HumanName and clears every other type of it. */
  setPatternHumanName(patternHumanName: HumanName | undefined): this {
    return this.setFieldValue('patternHumanName', patternHumanName);
  }

  hasPatternHumanName(): boolean {
    return this.hasFieldValue('patternHumanName');
  }

  getPatternIdentifier(): Identifier | undefined {
    return this.patternIdentifier;
  }

  /** Sets `pattern[x]` as Identifier and clears every other type of it. */
  setPatternIdentifier(patternIdentifier: Identifier | undefined): this {
    return this.setFieldValue('patternIdentifier', patternIdentifier);
  }

  hasPatternIdentifier(): boolean {
    return this.hasFieldValue('patternIdentifier');
  }

  getPatternMoney(): Money | undefined {
    return this.patternMoney;
  }

  /** Sets `pattern[x]` as Money and clears every other type of it. */
  setPatternMoney(patternMoney: Money | undefined): this {
    return this.setFieldValue('patternMoney', patternMoney);
  }

  hasPatternMoney(): boolean {
    return this.hasFieldValue('patternMoney');
  }

  getPatternPeriod(): Period | undefined {
    return this.patternPeriod;
  }

  /** Sets `pattern[x]` as Period and clears every other type of it. */
  setPatternPeriod(patternPeriod: Period | undefined): this {
    return this.setFieldValue('patternPeriod', patternPeriod);
  }

  hasPatternPeriod(): boolean {
    return this.hasFieldValue('patternPeriod');
  }

  getPatternQuantity(): Quantity | undefined {
    return this.patternQuantity;
  }

  /** Sets `pattern[x]` as Quantity and clears every other type of it. */
  setPatternQuantity(patternQuantity: Quantity | undefined): this {
    return this.setFieldValue('patternQuantity', patternQuantity);
  }

  hasPatternQuantity(): boolean {
    return this.hasFieldValue('patternQuantity');
  }

  getPatternRange(): Range | undefined {
    return this.patternRange;
  }

  /** Sets `pattern[x]` as Range and clears every other type of it. */
  setPatternRange(patternRange: Range | undefined): this {
    return this.setFieldValue('patternRange', patternRange);
  }

  hasPatternRange(): boolean {
    return this.hasFieldValue('patternRange');
  }

  getPatternRatio(): Ratio | undefined {
    return this.patternRatio;
  }

  /** Sets `pattern[x]` as Ratio and clears every other type of it. */
  setPatternRatio(patternRatio: Ratio | undefined): this {
    return this.setFieldValue('patternRatio', patternRatio);
  }

  hasPatternRatio(): boolean {
    return this.hasFieldValue('patternRatio');
  }

  getPatternReference(): Reference | undefined {
    return this.patternReference;
  }

  /** Sets `pattern[x]` as Reference and clears every other type of it. */
  setPatternReference(patternReference: Reference | undefined): this {
    return this.setFieldValue('patternReference', patternReference);
  }

  hasPatternReference(): boolean {
    return this.hasFieldValue('patternReference');
  }

  getPatternSampledData(): SampledData | undefined {
    return this.patternSampledData;
  }

  /** Sets `pattern[x]` as SampledData and clears every other type of it. */
  setPatternSampledData(patternSampledData: SampledData | undefined): this {
    return this.setFieldValue('patternSampledData', patternSampledData);
  }

  hasPatternSampledData(): boolean {
    return this.hasFieldValue('patternSampledData');
  }

  getPatternSignature(): Signature | undefined {
    return this.patternSignature;
  }

  /** Sets `pattern[x]` as Signature and clears every other type of it. */
  setPatternSignature(patternSignature: Signature | undefined): this {
    return this.setFieldValue('patternSignature', patternSignature);
  }

  hasPatternSignature(): boolean {
    return this.hasFieldValue('patternSignature');
  }

  getPatternTiming(): Timing | undefined {
    return this.patternTiming;
  }

  /** Sets `pattern[x]` as Timing and clears every other type of it. */
  setPatternTiming(patternTiming: Timing | undefined): this {
    return this.setFieldValue('patternTiming', patternTiming);
  }

  hasPatternTiming(): boolean {
    return this.hasFieldValue('patternTiming');
  }

  getPatternContactDetail(): ContactDetail | undefined {
    return this.patternContactDetail;
  }

  /** Sets `pattern[x]` as ContactDetail and clears every other type of it. */
  setPatternContactDetail(patternContactDetail: ContactDetail | undefined): this {
    return this.setFieldValue('patternContactDetail', patternContactDetail);
  }

  hasPatternContactDetail(): boolean {
    return this.hasFieldValue('patternContactDetail');
  }

  getPatternContributor(): Contributor | undefined {
    return this.patternContributor;
  }

  /** Sets `pattern[x]` as Contributor and clears every other type of it. */
  setPatternContributor(patternContributor: Contributor | undefined): this {
    return this.setFieldValue('patternContributor', patternContributor);
  }

  hasPatternContributor(): boolean {
    return this.hasFieldValue('patternContributor');
  }

  getPatternDataRequirement(): DataRequirement | undefined {
    return this.patternDataRequirement;
  }

  /** Sets `pattern[x]` as DataRequirement and clears every other type of it. */
  setPatternDataRequirement(patternDataRequirement: DataRequirement | undefined): this {
    return this.setFieldValue('patternDataRequirement', patternDataRequirement);
  }

  hasPatternDataRequirement(): boolean {
    return this.hasFieldValue('patternDataRequirement');
  }

  getPatternExpression(): Expression | undefined {
    return this.patternExpression;
  }

  /** Sets `pattern[x]` as Expression and clears every other type of it. */
  setPatternExpression(patternExpression: Expression | undefined): this {
    return this.setFieldValue('patternExpression', patternExpression);
  }

  hasPatternExpression(): boolean {
    return this.hasFieldValue('patternExpression');
  }

  getPatternParameterDefinition(): ParameterDefinition | undefined {
    return this.patternParameterDefinition;
  }

  /** Sets `pattern[x]` as ParameterDefinition and clears every other type of it. */
  setPatternParameterDefinition(patternParameterDefinition: ParameterDefinition | undefined): this {
    return this.setFieldValue('patternParameterDefinition', patternParameterDefinition);
  }

  hasPatternParameterDefinition(): boolean {
    return this.hasFieldValue('patternParameterDefinition');
  }

  getPatternRelatedArtifact(): RelatedArtifact | undefined {
    return this.patternRelatedArtifact;
  }

  /** Sets `pattern[x]` as RelatedArtifact and clears every other type of it. */
  setPatternRelatedArtifact(patternRelatedArtifact: RelatedArtifact | undefined): this {
    return this.setFieldValue('patternRelatedArtifact', patternRelatedArtifact);
  }

  hasPatternRelatedArtifact(): boolean {
    return this.hasFieldValue('patternRelatedArtifact');
  }

  getPatternTriggerDefinition(): TriggerDefinition | undefined {
    return this.patternTriggerDefinition;
  }

  /** Sets `pattern[x]` as TriggerDefinition and clears every other type of it. */
  setPatternTriggerDefinition(patternTriggerDefinition: TriggerDefinition | undefined): this {
    return this.setFieldValue('patternTriggerDefinition', patternTriggerDefinition);
  }

  hasPatternTriggerDefinition(): boolean {
    return this.hasFieldValue('patternTriggerDefinition');
  }

  getPatternUsageContext(): UsageContext | undefined {
    return this.patternUsageContext;
  }

  /** Sets `pattern[x]` as UsageContext and clears every other type of it. */
  setPatternUsageContext(patternUsageContext: UsageContext | undefined): this {
    return this.setFieldValue('patternUsageContext', patternUsageContext);
  }

  hasPatternUsageContext(): boolean {
    return this.hasFieldValue('patternUsageContext');
  }

  getPatternDosage(): Dosage | undefined {
    return this.patternDosage;
  }

  /** Sets `pattern[x]` as Dosage and clears every other type of it. */
  setPatternDosage(patternDosage: Dosage | undefined): this {
    return this.setFieldValue('patternDosage', patternDosage);
  }

  hasPatternDosage(): boolean {
    return this.hasFieldValue('patternDosage');
  }

  getPatternMeta(): Meta | undefined {
    return this.patternMeta;
  }

  /** Sets `pattern[x]` as Meta and clears every other type of it. */
  setPatternMeta(patternMeta: Meta | undefined): this {
    return this.setFieldValue('patternMeta', patternMeta);
  }

  hasPatternMeta(): boolean {
    return this.hasFieldValue('patternMeta');
  }

  /** Example value (as defined for type) (0..*) Never undefined; an empty list is created when absent. */
  getExample(): ElementDefinitionExample[] {
    if (this.example === undefined) {
      this.example = [];
    }
    return this.example;
  }

  setExample(example: ElementDefinitionExample[] | undefined): this {
    return this.setFieldValue('example', example);
  }

  hasExample(): boolean {
    return this.hasFieldValue('example');
  }

  /** Appends a new, empty ElementDefinitionExample to `example` and returns it so it can be filled in. */
  addExample(): ElementDefinitionExample;
  /** Appends the given ElementDefinitionExample to `example` and returns this object for chaining. */
  addExample(elementDefinitionExample: ElementDefinitionExample): this;
  addExample(elementDefinitionExample?: ElementDefinitionExample): ElementDefinitionExample | this {
    if (elementDefinitionExample !== undefined) {
      return this.addFieldValue('example', elementDefinitionExample);
    }
    const createdElementDefinitionExample = new ElementDefinitionExample();
    this.addFieldValue('example', createdElementDefinitionExample);
    return createdElementDefinitionExample;
  }

  /** The first ElementDefinitionExample of `example`. One is added when the list is empty. */
  getExampleFirstRep(): ElementDefinitionExample {
    const firstElementDefinitionExample = this.getExample()[0];
    return firstElementDefinitionExample === undefined
      ? this.addExample()
      : firstElementDefinitionExample;
  }

  /** Minimum Allowed Value (for some types) (0..1) Whichever type of `minValue[x]` is set. */
  getMinValue(): string | number | Quantity | undefined {
    return this.getChoiceValue<string | number | Quantity>('minValue');
  }

  /** True when any type of `minValue[x]` is set. */
  hasMinValue(): boolean {
    return this.hasChoiceValue('minValue');
  }

  getMinValueDate(): string | undefined {
    return this.minValueDate;
  }

  /** Sets `minValue[x]` as date and clears every other type of it. */
  setMinValueDate(minValueDate: string | undefined): this {
    return this.setFieldValue('minValueDate', minValueDate);
  }

  hasMinValueDate(): boolean {
    return this.hasFieldValue('minValueDate');
  }

  getMinValueDateTime(): string | undefined {
    return this.minValueDateTime;
  }

  /** Sets `minValue[x]` as dateTime and clears every other type of it. */
  setMinValueDateTime(minValueDateTime: string | undefined): this {
    return this.setFieldValue('minValueDateTime', minValueDateTime);
  }

  hasMinValueDateTime(): boolean {
    return this.hasFieldValue('minValueDateTime');
  }

  getMinValueInstant(): string | undefined {
    return this.minValueInstant;
  }

  /** Sets `minValue[x]` as instant and clears every other type of it. */
  setMinValueInstant(minValueInstant: string | undefined): this {
    return this.setFieldValue('minValueInstant', minValueInstant);
  }

  hasMinValueInstant(): boolean {
    return this.hasFieldValue('minValueInstant');
  }

  getMinValueTime(): string | undefined {
    return this.minValueTime;
  }

  /** Sets `minValue[x]` as time and clears every other type of it. */
  setMinValueTime(minValueTime: string | undefined): this {
    return this.setFieldValue('minValueTime', minValueTime);
  }

  hasMinValueTime(): boolean {
    return this.hasFieldValue('minValueTime');
  }

  getMinValueDecimal(): number | undefined {
    return this.minValueDecimal;
  }

  /** Sets `minValue[x]` as decimal and clears every other type of it. */
  setMinValueDecimal(minValueDecimal: number | undefined): this {
    return this.setFieldValue('minValueDecimal', minValueDecimal);
  }

  hasMinValueDecimal(): boolean {
    return this.hasFieldValue('minValueDecimal');
  }

  getMinValueInteger(): number | undefined {
    return this.minValueInteger;
  }

  /** Sets `minValue[x]` as integer and clears every other type of it. */
  setMinValueInteger(minValueInteger: number | undefined): this {
    return this.setFieldValue('minValueInteger', minValueInteger);
  }

  hasMinValueInteger(): boolean {
    return this.hasFieldValue('minValueInteger');
  }

  getMinValuePositiveInt(): number | undefined {
    return this.minValuePositiveInt;
  }

  /** Sets `minValue[x]` as positiveInt and clears every other type of it. */
  setMinValuePositiveInt(minValuePositiveInt: number | undefined): this {
    return this.setFieldValue('minValuePositiveInt', minValuePositiveInt);
  }

  hasMinValuePositiveInt(): boolean {
    return this.hasFieldValue('minValuePositiveInt');
  }

  getMinValueUnsignedInt(): number | undefined {
    return this.minValueUnsignedInt;
  }

  /** Sets `minValue[x]` as unsignedInt and clears every other type of it. */
  setMinValueUnsignedInt(minValueUnsignedInt: number | undefined): this {
    return this.setFieldValue('minValueUnsignedInt', minValueUnsignedInt);
  }

  hasMinValueUnsignedInt(): boolean {
    return this.hasFieldValue('minValueUnsignedInt');
  }

  getMinValueQuantity(): Quantity | undefined {
    return this.minValueQuantity;
  }

  /** Sets `minValue[x]` as Quantity and clears every other type of it. */
  setMinValueQuantity(minValueQuantity: Quantity | undefined): this {
    return this.setFieldValue('minValueQuantity', minValueQuantity);
  }

  hasMinValueQuantity(): boolean {
    return this.hasFieldValue('minValueQuantity');
  }

  /** Maximum Allowed Value (for some types) (0..1) Whichever type of `maxValue[x]` is set. */
  getMaxValue(): string | number | Quantity | undefined {
    return this.getChoiceValue<string | number | Quantity>('maxValue');
  }

  /** True when any type of `maxValue[x]` is set. */
  hasMaxValue(): boolean {
    return this.hasChoiceValue('maxValue');
  }

  getMaxValueDate(): string | undefined {
    return this.maxValueDate;
  }

  /** Sets `maxValue[x]` as date and clears every other type of it. */
  setMaxValueDate(maxValueDate: string | undefined): this {
    return this.setFieldValue('maxValueDate', maxValueDate);
  }

  hasMaxValueDate(): boolean {
    return this.hasFieldValue('maxValueDate');
  }

  getMaxValueDateTime(): string | undefined {
    return this.maxValueDateTime;
  }

  /** Sets `maxValue[x]` as dateTime and clears every other type of it. */
  setMaxValueDateTime(maxValueDateTime: string | undefined): this {
    return this.setFieldValue('maxValueDateTime', maxValueDateTime);
  }

  hasMaxValueDateTime(): boolean {
    return this.hasFieldValue('maxValueDateTime');
  }

  getMaxValueInstant(): string | undefined {
    return this.maxValueInstant;
  }

  /** Sets `maxValue[x]` as instant and clears every other type of it. */
  setMaxValueInstant(maxValueInstant: string | undefined): this {
    return this.setFieldValue('maxValueInstant', maxValueInstant);
  }

  hasMaxValueInstant(): boolean {
    return this.hasFieldValue('maxValueInstant');
  }

  getMaxValueTime(): string | undefined {
    return this.maxValueTime;
  }

  /** Sets `maxValue[x]` as time and clears every other type of it. */
  setMaxValueTime(maxValueTime: string | undefined): this {
    return this.setFieldValue('maxValueTime', maxValueTime);
  }

  hasMaxValueTime(): boolean {
    return this.hasFieldValue('maxValueTime');
  }

  getMaxValueDecimal(): number | undefined {
    return this.maxValueDecimal;
  }

  /** Sets `maxValue[x]` as decimal and clears every other type of it. */
  setMaxValueDecimal(maxValueDecimal: number | undefined): this {
    return this.setFieldValue('maxValueDecimal', maxValueDecimal);
  }

  hasMaxValueDecimal(): boolean {
    return this.hasFieldValue('maxValueDecimal');
  }

  getMaxValueInteger(): number | undefined {
    return this.maxValueInteger;
  }

  /** Sets `maxValue[x]` as integer and clears every other type of it. */
  setMaxValueInteger(maxValueInteger: number | undefined): this {
    return this.setFieldValue('maxValueInteger', maxValueInteger);
  }

  hasMaxValueInteger(): boolean {
    return this.hasFieldValue('maxValueInteger');
  }

  getMaxValuePositiveInt(): number | undefined {
    return this.maxValuePositiveInt;
  }

  /** Sets `maxValue[x]` as positiveInt and clears every other type of it. */
  setMaxValuePositiveInt(maxValuePositiveInt: number | undefined): this {
    return this.setFieldValue('maxValuePositiveInt', maxValuePositiveInt);
  }

  hasMaxValuePositiveInt(): boolean {
    return this.hasFieldValue('maxValuePositiveInt');
  }

  getMaxValueUnsignedInt(): number | undefined {
    return this.maxValueUnsignedInt;
  }

  /** Sets `maxValue[x]` as unsignedInt and clears every other type of it. */
  setMaxValueUnsignedInt(maxValueUnsignedInt: number | undefined): this {
    return this.setFieldValue('maxValueUnsignedInt', maxValueUnsignedInt);
  }

  hasMaxValueUnsignedInt(): boolean {
    return this.hasFieldValue('maxValueUnsignedInt');
  }

  getMaxValueQuantity(): Quantity | undefined {
    return this.maxValueQuantity;
  }

  /** Sets `maxValue[x]` as Quantity and clears every other type of it. */
  setMaxValueQuantity(maxValueQuantity: Quantity | undefined): this {
    return this.setFieldValue('maxValueQuantity', maxValueQuantity);
  }

  hasMaxValueQuantity(): boolean {
    return this.hasFieldValue('maxValueQuantity');
  }

  /** Max length for strings (0..1) */
  getMaxLength(): number | undefined {
    return this.maxLength;
  }

  /** Sets `maxLength`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setMaxLength(maxLength: number | undefined): this {
    return this.setFieldValue('maxLength', maxLength);
  }

  hasMaxLength(): boolean {
    return this.hasFieldValue('maxLength');
  }

  /** The element carrying the id and extensions of `maxLength`. Created when absent. */
  getMaxLengthElement(): Element {
    if (this._maxLength === undefined) {
      this._maxLength = new Element();
    }
    return this._maxLength;
  }

  setMaxLengthElement(maxLengthElement: Element | undefined): this {
    this._maxLength = maxLengthElement;
    return this;
  }

  /** Reference to invariant about presence (0..*) Never undefined; an empty list is created when absent. */
  getCondition(): string[] {
    if (this.condition === undefined) {
      this.condition = [];
    }
    return this.condition;
  }

  setCondition(condition: string[] | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Appends one value to `condition`. Throws a FhirModelError when it is not a valid FHIR id. */
  addCondition(condition: string): this {
    return this.addFieldValue('condition', condition);
  }

  /** Condition that must evaluate to true (0..*) Never undefined; an empty list is created when absent. */
  getConstraint(): ElementDefinitionConstraint[] {
    if (this.constraint === undefined) {
      this.constraint = [];
    }
    return this.constraint;
  }

  setConstraint(constraint: ElementDefinitionConstraint[] | undefined): this {
    return this.setFieldValue('constraint', constraint);
  }

  hasConstraint(): boolean {
    return this.hasFieldValue('constraint');
  }

  /** Appends a new, empty ElementDefinitionConstraint to `constraint` and returns it so it can be filled in. */
  addConstraint(): ElementDefinitionConstraint;
  /** Appends the given ElementDefinitionConstraint to `constraint` and returns this object for chaining. */
  addConstraint(elementDefinitionConstraint: ElementDefinitionConstraint): this;
  addConstraint(
    elementDefinitionConstraint?: ElementDefinitionConstraint
  ): ElementDefinitionConstraint | this {
    if (elementDefinitionConstraint !== undefined) {
      return this.addFieldValue('constraint', elementDefinitionConstraint);
    }
    const createdElementDefinitionConstraint = new ElementDefinitionConstraint();
    this.addFieldValue('constraint', createdElementDefinitionConstraint);
    return createdElementDefinitionConstraint;
  }

  /** The first ElementDefinitionConstraint of `constraint`. One is added when the list is empty. */
  getConstraintFirstRep(): ElementDefinitionConstraint {
    const firstElementDefinitionConstraint = this.getConstraint()[0];
    return firstElementDefinitionConstraint === undefined
      ? this.addConstraint()
      : firstElementDefinitionConstraint;
  }

  /** If the element must be supported (0..1) */
  getMustSupport(): boolean | undefined {
    return this.mustSupport;
  }

  /** Sets `mustSupport`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setMustSupport(mustSupport: boolean | undefined): this {
    return this.setFieldValue('mustSupport', mustSupport);
  }

  hasMustSupport(): boolean {
    return this.hasFieldValue('mustSupport');
  }

  /** The element carrying the id and extensions of `mustSupport`. Created when absent. */
  getMustSupportElement(): Element {
    if (this._mustSupport === undefined) {
      this._mustSupport = new Element();
    }
    return this._mustSupport;
  }

  setMustSupportElement(mustSupportElement: Element | undefined): this {
    this._mustSupport = mustSupportElement;
    return this;
  }

  /** If this modifies the meaning of other elements (0..1) */
  getIsModifier(): boolean | undefined {
    return this.isModifier;
  }

  /** Sets `isModifier`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsModifier(isModifier: boolean | undefined): this {
    return this.setFieldValue('isModifier', isModifier);
  }

  hasIsModifier(): boolean {
    return this.hasFieldValue('isModifier');
  }

  /** The element carrying the id and extensions of `isModifier`. Created when absent. */
  getIsModifierElement(): Element {
    if (this._isModifier === undefined) {
      this._isModifier = new Element();
    }
    return this._isModifier;
  }

  setIsModifierElement(isModifierElement: Element | undefined): this {
    this._isModifier = isModifierElement;
    return this;
  }

  /** Reason that this element is marked as a modifier (0..1) */
  getIsModifierReason(): string | undefined {
    return this.isModifierReason;
  }

  /** Sets `isModifierReason`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setIsModifierReason(isModifierReason: string | undefined): this {
    return this.setFieldValue('isModifierReason', isModifierReason);
  }

  hasIsModifierReason(): boolean {
    return this.hasFieldValue('isModifierReason');
  }

  /** The element carrying the id and extensions of `isModifierReason`. Created when absent. */
  getIsModifierReasonElement(): Element {
    if (this._isModifierReason === undefined) {
      this._isModifierReason = new Element();
    }
    return this._isModifierReason;
  }

  setIsModifierReasonElement(isModifierReasonElement: Element | undefined): this {
    this._isModifierReason = isModifierReasonElement;
    return this;
  }

  /** Include when _summary = true? (0..1) */
  getIsSummary(): boolean | undefined {
    return this.isSummary;
  }

  /** Sets `isSummary`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsSummary(isSummary: boolean | undefined): this {
    return this.setFieldValue('isSummary', isSummary);
  }

  hasIsSummary(): boolean {
    return this.hasFieldValue('isSummary');
  }

  /** The element carrying the id and extensions of `isSummary`. Created when absent. */
  getIsSummaryElement(): Element {
    if (this._isSummary === undefined) {
      this._isSummary = new Element();
    }
    return this._isSummary;
  }

  setIsSummaryElement(isSummaryElement: Element | undefined): this {
    this._isSummary = isSummaryElement;
    return this;
  }

  /** ValueSet details if this is coded (0..1) Created when absent. */
  getBinding(): ElementDefinitionBinding {
    if (this.binding === undefined) {
      this.binding = new ElementDefinitionBinding();
    }
    return this.binding;
  }

  setBinding(binding: ElementDefinitionBinding | undefined): this {
    return this.setFieldValue('binding', binding);
  }

  hasBinding(): boolean {
    return this.hasFieldValue('binding');
  }

  /** Map element to another set of definitions (0..*) Never undefined; an empty list is created when absent. */
  getMapping(): ElementDefinitionMapping[] {
    if (this.mapping === undefined) {
      this.mapping = [];
    }
    return this.mapping;
  }

  setMapping(mapping: ElementDefinitionMapping[] | undefined): this {
    return this.setFieldValue('mapping', mapping);
  }

  hasMapping(): boolean {
    return this.hasFieldValue('mapping');
  }

  /** Appends a new, empty ElementDefinitionMapping to `mapping` and returns it so it can be filled in. */
  addMapping(): ElementDefinitionMapping;
  /** Appends the given ElementDefinitionMapping to `mapping` and returns this object for chaining. */
  addMapping(elementDefinitionMapping: ElementDefinitionMapping): this;
  addMapping(elementDefinitionMapping?: ElementDefinitionMapping): ElementDefinitionMapping | this {
    if (elementDefinitionMapping !== undefined) {
      return this.addFieldValue('mapping', elementDefinitionMapping);
    }
    const createdElementDefinitionMapping = new ElementDefinitionMapping();
    this.addFieldValue('mapping', createdElementDefinitionMapping);
    return createdElementDefinitionMapping;
  }

  /** The first ElementDefinitionMapping of `mapping`. One is added when the list is empty. */
  getMappingFirstRep(): ElementDefinitionMapping {
    const firstElementDefinitionMapping = this.getMapping()[0];
    return firstElementDefinitionMapping === undefined
      ? this.addMapping()
      : firstElementDefinitionMapping;
  }
}

modelTypeRegistry.register('ElementDefinition', ElementDefinition, false);

/**
 * This element is sliced - slices follow
 */
export class ElementDefinitionSlicing extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'discriminator',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'discriminator', typeCode: 'ElementDefinitionSlicingDiscriminator' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'ordered',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ordered', typeCode: 'boolean' }],
    },
    {
      elementName: 'rules',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rules', typeCode: 'code', allowedCodes: valueSetCodes.SlicingRules }],
    },
  ];

  /** Element values that are used to distinguish the slices (0..*) */
  discriminator?: ElementDefinitionSlicingDiscriminator[];

  /** Text description of how slicing works (or not) (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** If elements must be in same order as slices (0..1) */
  ordered?: boolean;
  /** Id and extensions of the primitive `ordered`. */
  _ordered?: Element;

  /** closed | open | openAtEnd (1..1) */
  rules?: valueSetCodes.SlicingRules;
  /** Id and extensions of the primitive `rules`. */
  _rules?: Element;

  override fhirType(): string {
    return 'ElementDefinition.slicing';
  }

  /** FHIR JSON for this ElementDefinitionSlicing, typed as the plain `ElementDefinitionSlicing` data type. */
  override toJSON(): plainTypes.ElementDefinitionSlicing {
    return this.serialize() as plainTypes.ElementDefinitionSlicing;
  }

  /** Element values that are used to distinguish the slices (0..*) Never undefined; an empty list is created when absent. */
  getDiscriminator(): ElementDefinitionSlicingDiscriminator[] {
    if (this.discriminator === undefined) {
      this.discriminator = [];
    }
    return this.discriminator;
  }

  setDiscriminator(discriminator: ElementDefinitionSlicingDiscriminator[] | undefined): this {
    return this.setFieldValue('discriminator', discriminator);
  }

  hasDiscriminator(): boolean {
    return this.hasFieldValue('discriminator');
  }

  /** Appends a new, empty ElementDefinitionSlicingDiscriminator to `discriminator` and returns it so it can be filled in. */
  addDiscriminator(): ElementDefinitionSlicingDiscriminator;
  /** Appends the given ElementDefinitionSlicingDiscriminator to `discriminator` and returns this object for chaining. */
  addDiscriminator(
    elementDefinitionSlicingDiscriminator: ElementDefinitionSlicingDiscriminator
  ): this;
  addDiscriminator(
    elementDefinitionSlicingDiscriminator?: ElementDefinitionSlicingDiscriminator
  ): ElementDefinitionSlicingDiscriminator | this {
    if (elementDefinitionSlicingDiscriminator !== undefined) {
      return this.addFieldValue('discriminator', elementDefinitionSlicingDiscriminator);
    }
    const createdElementDefinitionSlicingDiscriminator =
      new ElementDefinitionSlicingDiscriminator();
    this.addFieldValue('discriminator', createdElementDefinitionSlicingDiscriminator);
    return createdElementDefinitionSlicingDiscriminator;
  }

  /** The first ElementDefinitionSlicingDiscriminator of `discriminator`. One is added when the list is empty. */
  getDiscriminatorFirstRep(): ElementDefinitionSlicingDiscriminator {
    const firstElementDefinitionSlicingDiscriminator = this.getDiscriminator()[0];
    return firstElementDefinitionSlicingDiscriminator === undefined
      ? this.addDiscriminator()
      : firstElementDefinitionSlicingDiscriminator;
  }

  /** Text description of how slicing works (or not) (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** If elements must be in same order as slices (0..1) */
  getOrdered(): boolean | undefined {
    return this.ordered;
  }

  /** Sets `ordered`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setOrdered(ordered: boolean | undefined): this {
    return this.setFieldValue('ordered', ordered);
  }

  hasOrdered(): boolean {
    return this.hasFieldValue('ordered');
  }

  /** The element carrying the id and extensions of `ordered`. Created when absent. */
  getOrderedElement(): Element {
    if (this._ordered === undefined) {
      this._ordered = new Element();
    }
    return this._ordered;
  }

  setOrderedElement(orderedElement: Element | undefined): this {
    this._ordered = orderedElement;
    return this;
  }

  /** closed | open | openAtEnd (1..1) */
  getRules(): valueSetCodes.SlicingRules | undefined {
    return this.rules;
  }

  /** Sets `rules`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRules(rules: valueSetCodes.SlicingRules | undefined): this {
    return this.setFieldValue('rules', rules);
  }

  hasRules(): boolean {
    return this.hasFieldValue('rules');
  }

  /** The element carrying the id and extensions of `rules`. Created when absent. */
  getRulesElement(): Element {
    if (this._rules === undefined) {
      this._rules = new Element();
    }
    return this._rules;
  }

  setRulesElement(rulesElement: Element | undefined): this {
    this._rules = rulesElement;
    return this;
  }
}

modelTypeRegistry.register('ElementDefinitionSlicing', ElementDefinitionSlicing, false);

/**
 * Element values that are used to distinguish the slices
 */
export class ElementDefinitionSlicingDiscriminator extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.DiscriminatorType }],
    },
    {
      elementName: 'path',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
  ];

  /** value | exists | pattern | type | profile (1..1) */
  type?: valueSetCodes.DiscriminatorType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Path to element value (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  override fhirType(): string {
    return 'ElementDefinition.slicing.discriminator';
  }

  /** FHIR JSON for this ElementDefinitionSlicingDiscriminator, typed as the plain `ElementDefinitionDiscriminator` data type. */
  override toJSON(): plainTypes.ElementDefinitionDiscriminator {
    return this.serialize() as plainTypes.ElementDefinitionDiscriminator;
  }

  /** value | exists | pattern | type | profile (1..1) */
  getType(): valueSetCodes.DiscriminatorType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.DiscriminatorType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Path to element value (1..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ElementDefinitionSlicingDiscriminator',
  ElementDefinitionSlicingDiscriminator,
  false
);

/**
 * Base definition information for tools
 */
export class ElementDefinitionBase extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'path',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'min',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'min', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'max',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'max', typeCode: 'string' }],
    },
  ];

  /** Path that identifies the base element (1..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** Min cardinality of the base element (1..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;

  /** Max cardinality of the base element (1..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;

  override fhirType(): string {
    return 'ElementDefinition.base';
  }

  /** FHIR JSON for this ElementDefinitionBase, typed as the plain `ElementDefinitionBase` data type. */
  override toJSON(): plainTypes.ElementDefinitionBase {
    return this.serialize() as plainTypes.ElementDefinitionBase;
  }

  /** Path that identifies the base element (1..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }

  /** Min cardinality of the base element (1..1) */
  getMin(): number | undefined {
    return this.min;
  }

  /** Sets `min`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setMin(min: number | undefined): this {
    return this.setFieldValue('min', min);
  }

  hasMin(): boolean {
    return this.hasFieldValue('min');
  }

  /** The element carrying the id and extensions of `min`. Created when absent. */
  getMinElement(): Element {
    if (this._min === undefined) {
      this._min = new Element();
    }
    return this._min;
  }

  setMinElement(minElement: Element | undefined): this {
    this._min = minElement;
    return this;
  }

  /** Max cardinality of the base element (1..1) */
  getMax(): string | undefined {
    return this.max;
  }

  /** Sets `max`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMax(max: string | undefined): this {
    return this.setFieldValue('max', max);
  }

  hasMax(): boolean {
    return this.hasFieldValue('max');
  }

  /** The element carrying the id and extensions of `max`. Created when absent. */
  getMaxElement(): Element {
    if (this._max === undefined) {
      this._max = new Element();
    }
    return this._max;
  }

  setMaxElement(maxElement: Element | undefined): this {
    this._max = maxElement;
    return this;
  }
}

modelTypeRegistry.register('ElementDefinitionBase', ElementDefinitionBase, false);

/**
 * Data type and Profile for this element
 */
export class ElementDefinitionType extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'uri' }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
    {
      elementName: 'targetProfile',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'targetProfile', typeCode: 'canonical' }],
    },
    {
      elementName: 'aggregation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'aggregation', typeCode: 'code', allowedCodes: valueSetCodes.AggregationMode },
      ],
    },
    {
      elementName: 'versioning',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'versioning',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ReferenceVersionRules,
        },
      ],
    },
  ];

  /** Data type or Resource (reference to definition) (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Profiles (StructureDefinition or IG) - one must apply (0..*) */
  profile?: string[];
  /** Id and extensions of the primitive `profile`. */
  _profile?: (Element | null)[];

  /** Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply (0..*) */
  targetProfile?: string[];
  /** Id and extensions of the primitive `targetProfile`. */
  _targetProfile?: (Element | null)[];

  /** contained | referenced | bundled - how aggregated (0..*) */
  aggregation?: valueSetCodes.AggregationMode[];
  /** Id and extensions of the primitive `aggregation`. */
  _aggregation?: (Element | null)[];

  /** either | independent | specific (0..1) */
  versioning?: valueSetCodes.ReferenceVersionRules;
  /** Id and extensions of the primitive `versioning`. */
  _versioning?: Element;

  override fhirType(): string {
    return 'ElementDefinition.type';
  }

  /** FHIR JSON for this ElementDefinitionType, typed as the plain `ElementDefinitionType` data type. */
  override toJSON(): plainTypes.ElementDefinitionType {
    return this.serialize() as plainTypes.ElementDefinitionType;
  }

  /** Data type or Resource (reference to definition) (1..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setCode(code: string | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** The element carrying the id and extensions of `code`. Created when absent. */
  getCodeElement(): Element {
    if (this._code === undefined) {
      this._code = new Element();
    }
    return this._code;
  }

  setCodeElement(codeElement: Element | undefined): this {
    this._code = codeElement;
    return this;
  }

  /** Profiles (StructureDefinition or IG) - one must apply (0..*) Never undefined; an empty list is created when absent. */
  getProfile(): string[] {
    if (this.profile === undefined) {
      this.profile = [];
    }
    return this.profile;
  }

  setProfile(profile: string[] | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** Appends one value to `profile`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addProfile(profile: string): this {
    return this.addFieldValue('profile', profile);
  }

  /** Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply (0..*) Never undefined; an empty list is created when absent. */
  getTargetProfile(): string[] {
    if (this.targetProfile === undefined) {
      this.targetProfile = [];
    }
    return this.targetProfile;
  }

  setTargetProfile(targetProfile: string[] | undefined): this {
    return this.setFieldValue('targetProfile', targetProfile);
  }

  hasTargetProfile(): boolean {
    return this.hasFieldValue('targetProfile');
  }

  /** Appends one value to `targetProfile`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addTargetProfile(targetProfile: string): this {
    return this.addFieldValue('targetProfile', targetProfile);
  }

  /** contained | referenced | bundled - how aggregated (0..*) Never undefined; an empty list is created when absent. */
  getAggregation(): valueSetCodes.AggregationMode[] {
    if (this.aggregation === undefined) {
      this.aggregation = [];
    }
    return this.aggregation;
  }

  setAggregation(aggregation: valueSetCodes.AggregationMode[] | undefined): this {
    return this.setFieldValue('aggregation', aggregation);
  }

  hasAggregation(): boolean {
    return this.hasFieldValue('aggregation');
  }

  /** Appends one value to `aggregation`. Throws a FhirModelError when it is not a valid FHIR code. */
  addAggregation(aggregation: valueSetCodes.AggregationMode): this {
    return this.addFieldValue('aggregation', aggregation);
  }

  /** either | independent | specific (0..1) */
  getVersioning(): valueSetCodes.ReferenceVersionRules | undefined {
    return this.versioning;
  }

  /** Sets `versioning`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setVersioning(versioning: valueSetCodes.ReferenceVersionRules | undefined): this {
    return this.setFieldValue('versioning', versioning);
  }

  hasVersioning(): boolean {
    return this.hasFieldValue('versioning');
  }

  /** The element carrying the id and extensions of `versioning`. Created when absent. */
  getVersioningElement(): Element {
    if (this._versioning === undefined) {
      this._versioning = new Element();
    }
    return this._versioning;
  }

  setVersioningElement(versioningElement: Element | undefined): this {
    this._versioning = versioningElement;
    return this;
  }
}

modelTypeRegistry.register('ElementDefinitionType', ElementDefinitionType, false);

/**
 * Example value (as defined for type)
 */
export class ElementDefinitionExample extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'label',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'label', typeCode: 'string' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueBase64Binary', typeCode: 'base64Binary' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueCanonical', typeCode: 'canonical' },
        { jsonKey: 'valueCode', typeCode: 'code' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueId', typeCode: 'id' },
        { jsonKey: 'valueInstant', typeCode: 'instant' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueMarkdown', typeCode: 'markdown' },
        { jsonKey: 'valueOid', typeCode: 'oid' },
        { jsonKey: 'valuePositiveInt', typeCode: 'positiveInt' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueUnsignedInt', typeCode: 'unsignedInt' },
        { jsonKey: 'valueUri', typeCode: 'uri' },
        { jsonKey: 'valueUrl', typeCode: 'url' },
        { jsonKey: 'valueUuid', typeCode: 'uuid' },
        { jsonKey: 'valueAddress', typeCode: 'Address' },
        { jsonKey: 'valueAge', typeCode: 'Age' },
        { jsonKey: 'valueAnnotation', typeCode: 'Annotation' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueContactPoint', typeCode: 'ContactPoint' },
        { jsonKey: 'valueCount', typeCode: 'Count' },
        { jsonKey: 'valueDistance', typeCode: 'Distance' },
        { jsonKey: 'valueDuration', typeCode: 'Duration' },
        { jsonKey: 'valueHumanName', typeCode: 'HumanName' },
        { jsonKey: 'valueIdentifier', typeCode: 'Identifier' },
        { jsonKey: 'valueMoney', typeCode: 'Money' },
        { jsonKey: 'valuePeriod', typeCode: 'Period' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueRange', typeCode: 'Range' },
        { jsonKey: 'valueRatio', typeCode: 'Ratio' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
        { jsonKey: 'valueSampledData', typeCode: 'SampledData' },
        { jsonKey: 'valueSignature', typeCode: 'Signature' },
        { jsonKey: 'valueTiming', typeCode: 'Timing' },
        { jsonKey: 'valueContactDetail', typeCode: 'ContactDetail' },
        { jsonKey: 'valueContributor', typeCode: 'Contributor' },
        { jsonKey: 'valueDataRequirement', typeCode: 'DataRequirement' },
        { jsonKey: 'valueExpression', typeCode: 'Expression' },
        { jsonKey: 'valueParameterDefinition', typeCode: 'ParameterDefinition' },
        { jsonKey: 'valueRelatedArtifact', typeCode: 'RelatedArtifact' },
        { jsonKey: 'valueTriggerDefinition', typeCode: 'TriggerDefinition' },
        { jsonKey: 'valueUsageContext', typeCode: 'UsageContext' },
        { jsonKey: 'valueDosage', typeCode: 'Dosage' },
        { jsonKey: 'valueMeta', typeCode: 'Meta' },
      ],
    },
  ];

  /** Describes the purpose of this example (1..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;

  /** Value of Example (one of allowed types) (1..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueCanonical?: string;
  /** Id and extensions of the primitive `valueCanonical`. */
  _valueCanonical?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueInstant?: string;
  /** Id and extensions of the primitive `valueInstant`. */
  _valueInstant?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueMarkdown?: string;
  /** Id and extensions of the primitive `valueMarkdown`. */
  _valueMarkdown?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueOid?: string;
  /** Id and extensions of the primitive `valueOid`. */
  _valueOid?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valuePositiveInt?: number;
  /** Id and extensions of the primitive `valuePositiveInt`. */
  _valuePositiveInt?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueUnsignedInt?: number;
  /** Id and extensions of the primitive `valueUnsignedInt`. */
  _valueUnsignedInt?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueUrl?: string;
  /** Id and extensions of the primitive `valueUrl`. */
  _valueUrl?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueUuid?: string;
  /** Id and extensions of the primitive `valueUuid`. */
  _valueUuid?: Element;
  /** Value of Example (one of allowed types) (1..1) */
  valueAddress?: Address;
  /** Value of Example (one of allowed types) (1..1) */
  valueAge?: Age;
  /** Value of Example (one of allowed types) (1..1) */
  valueAnnotation?: Annotation;
  /** Value of Example (one of allowed types) (1..1) */
  valueAttachment?: Attachment;
  /** Value of Example (one of allowed types) (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value of Example (one of allowed types) (1..1) */
  valueCoding?: Coding;
  /** Value of Example (one of allowed types) (1..1) */
  valueContactPoint?: ContactPoint;
  /** Value of Example (one of allowed types) (1..1) */
  valueCount?: Count;
  /** Value of Example (one of allowed types) (1..1) */
  valueDistance?: Distance;
  /** Value of Example (one of allowed types) (1..1) */
  valueDuration?: Duration;
  /** Value of Example (one of allowed types) (1..1) */
  valueHumanName?: HumanName;
  /** Value of Example (one of allowed types) (1..1) */
  valueIdentifier?: Identifier;
  /** Value of Example (one of allowed types) (1..1) */
  valueMoney?: Money;
  /** Value of Example (one of allowed types) (1..1) */
  valuePeriod?: Period;
  /** Value of Example (one of allowed types) (1..1) */
  valueQuantity?: Quantity;
  /** Value of Example (one of allowed types) (1..1) */
  valueRange?: Range;
  /** Value of Example (one of allowed types) (1..1) */
  valueRatio?: Ratio;
  /** Value of Example (one of allowed types) (1..1) */
  valueReference?: Reference;
  /** Value of Example (one of allowed types) (1..1) */
  valueSampledData?: SampledData;
  /** Value of Example (one of allowed types) (1..1) */
  valueSignature?: Signature;
  /** Value of Example (one of allowed types) (1..1) */
  valueTiming?: Timing;
  /** Value of Example (one of allowed types) (1..1) */
  valueContactDetail?: ContactDetail;
  /** Value of Example (one of allowed types) (1..1) */
  valueContributor?: Contributor;
  /** Value of Example (one of allowed types) (1..1) */
  valueDataRequirement?: DataRequirement;
  /** Value of Example (one of allowed types) (1..1) */
  valueExpression?: Expression;
  /** Value of Example (one of allowed types) (1..1) */
  valueParameterDefinition?: ParameterDefinition;
  /** Value of Example (one of allowed types) (1..1) */
  valueRelatedArtifact?: RelatedArtifact;
  /** Value of Example (one of allowed types) (1..1) */
  valueTriggerDefinition?: TriggerDefinition;
  /** Value of Example (one of allowed types) (1..1) */
  valueUsageContext?: UsageContext;
  /** Value of Example (one of allowed types) (1..1) */
  valueDosage?: Dosage;
  /** Value of Example (one of allowed types) (1..1) */
  valueMeta?: Meta;

  override fhirType(): string {
    return 'ElementDefinition.example';
  }

  /** FHIR JSON for this ElementDefinitionExample, typed as the plain `ElementDefinitionExample` data type. */
  override toJSON(): plainTypes.ElementDefinitionExample {
    return this.serialize() as plainTypes.ElementDefinitionExample;
  }

  /** Describes the purpose of this example (1..1) */
  getLabel(): string | undefined {
    return this.label;
  }

  /** Sets `label`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLabel(label: string | undefined): this {
    return this.setFieldValue('label', label);
  }

  hasLabel(): boolean {
    return this.hasFieldValue('label');
  }

  /** The element carrying the id and extensions of `label`. Created when absent. */
  getLabelElement(): Element {
    if (this._label === undefined) {
      this._label = new Element();
    }
    return this._label;
  }

  setLabelElement(labelElement: Element | undefined): this {
    this._label = labelElement;
    return this;
  }

  /** Value of Example (one of allowed types) (1..1) Whichever type of `value[x]` is set. */
  getValue():
    | string
    | boolean
    | number
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | Coding
    | ContactPoint
    | Count
    | Distance
    | Duration
    | HumanName
    | Identifier
    | Money
    | Period
    | Quantity
    | Range
    | Ratio
    | Reference
    | SampledData
    | Signature
    | Timing
    | ContactDetail
    | Contributor
    | DataRequirement
    | Expression
    | ParameterDefinition
    | RelatedArtifact
    | TriggerDefinition
    | UsageContext
    | Dosage
    | Meta
    | undefined {
    return this.getChoiceValue<
      | string
      | boolean
      | number
      | Address
      | Age
      | Annotation
      | Attachment
      | CodeableConcept
      | Coding
      | ContactPoint
      | Count
      | Distance
      | Duration
      | HumanName
      | Identifier
      | Money
      | Period
      | Quantity
      | Range
      | Ratio
      | Reference
      | SampledData
      | Signature
      | Timing
      | ContactDetail
      | Contributor
      | DataRequirement
      | Expression
      | ParameterDefinition
      | RelatedArtifact
      | TriggerDefinition
      | UsageContext
      | Dosage
      | Meta
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueBase64Binary(): string | undefined {
    return this.valueBase64Binary;
  }

  /** Sets `value[x]` as base64Binary and clears every other type of it. */
  setValueBase64Binary(valueBase64Binary: string | undefined): this {
    return this.setFieldValue('valueBase64Binary', valueBase64Binary);
  }

  hasValueBase64Binary(): boolean {
    return this.hasFieldValue('valueBase64Binary');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueCanonical(): string | undefined {
    return this.valueCanonical;
  }

  /** Sets `value[x]` as canonical and clears every other type of it. */
  setValueCanonical(valueCanonical: string | undefined): this {
    return this.setFieldValue('valueCanonical', valueCanonical);
  }

  hasValueCanonical(): boolean {
    return this.hasFieldValue('valueCanonical');
  }

  getValueCode(): string | undefined {
    return this.valueCode;
  }

  /** Sets `value[x]` as code and clears every other type of it. */
  setValueCode(valueCode: string | undefined): this {
    return this.setFieldValue('valueCode', valueCode);
  }

  hasValueCode(): boolean {
    return this.hasFieldValue('valueCode');
  }

  getValueDate(): string | undefined {
    return this.valueDate;
  }

  /** Sets `value[x]` as date and clears every other type of it. */
  setValueDate(valueDate: string | undefined): this {
    return this.setFieldValue('valueDate', valueDate);
  }

  hasValueDate(): boolean {
    return this.hasFieldValue('valueDate');
  }

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }

  getValueDecimal(): number | undefined {
    return this.valueDecimal;
  }

  /** Sets `value[x]` as decimal and clears every other type of it. */
  setValueDecimal(valueDecimal: number | undefined): this {
    return this.setFieldValue('valueDecimal', valueDecimal);
  }

  hasValueDecimal(): boolean {
    return this.hasFieldValue('valueDecimal');
  }

  getValueId(): string | undefined {
    return this.valueId;
  }

  /** Sets `value[x]` as id and clears every other type of it. */
  setValueId(valueId: string | undefined): this {
    return this.setFieldValue('valueId', valueId);
  }

  hasValueId(): boolean {
    return this.hasFieldValue('valueId');
  }

  getValueInstant(): string | undefined {
    return this.valueInstant;
  }

  /** Sets `value[x]` as instant and clears every other type of it. */
  setValueInstant(valueInstant: string | undefined): this {
    return this.setFieldValue('valueInstant', valueInstant);
  }

  hasValueInstant(): boolean {
    return this.hasFieldValue('valueInstant');
  }

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
  }

  getValueMarkdown(): string | undefined {
    return this.valueMarkdown;
  }

  /** Sets `value[x]` as markdown and clears every other type of it. */
  setValueMarkdown(valueMarkdown: string | undefined): this {
    return this.setFieldValue('valueMarkdown', valueMarkdown);
  }

  hasValueMarkdown(): boolean {
    return this.hasFieldValue('valueMarkdown');
  }

  getValueOid(): string | undefined {
    return this.valueOid;
  }

  /** Sets `value[x]` as oid and clears every other type of it. */
  setValueOid(valueOid: string | undefined): this {
    return this.setFieldValue('valueOid', valueOid);
  }

  hasValueOid(): boolean {
    return this.hasFieldValue('valueOid');
  }

  getValuePositiveInt(): number | undefined {
    return this.valuePositiveInt;
  }

  /** Sets `value[x]` as positiveInt and clears every other type of it. */
  setValuePositiveInt(valuePositiveInt: number | undefined): this {
    return this.setFieldValue('valuePositiveInt', valuePositiveInt);
  }

  hasValuePositiveInt(): boolean {
    return this.hasFieldValue('valuePositiveInt');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueTime(): string | undefined {
    return this.valueTime;
  }

  /** Sets `value[x]` as time and clears every other type of it. */
  setValueTime(valueTime: string | undefined): this {
    return this.setFieldValue('valueTime', valueTime);
  }

  hasValueTime(): boolean {
    return this.hasFieldValue('valueTime');
  }

  getValueUnsignedInt(): number | undefined {
    return this.valueUnsignedInt;
  }

  /** Sets `value[x]` as unsignedInt and clears every other type of it. */
  setValueUnsignedInt(valueUnsignedInt: number | undefined): this {
    return this.setFieldValue('valueUnsignedInt', valueUnsignedInt);
  }

  hasValueUnsignedInt(): boolean {
    return this.hasFieldValue('valueUnsignedInt');
  }

  getValueUri(): string | undefined {
    return this.valueUri;
  }

  /** Sets `value[x]` as uri and clears every other type of it. */
  setValueUri(valueUri: string | undefined): this {
    return this.setFieldValue('valueUri', valueUri);
  }

  hasValueUri(): boolean {
    return this.hasFieldValue('valueUri');
  }

  getValueUrl(): string | undefined {
    return this.valueUrl;
  }

  /** Sets `value[x]` as url and clears every other type of it. */
  setValueUrl(valueUrl: string | undefined): this {
    return this.setFieldValue('valueUrl', valueUrl);
  }

  hasValueUrl(): boolean {
    return this.hasFieldValue('valueUrl');
  }

  getValueUuid(): string | undefined {
    return this.valueUuid;
  }

  /** Sets `value[x]` as uuid and clears every other type of it. */
  setValueUuid(valueUuid: string | undefined): this {
    return this.setFieldValue('valueUuid', valueUuid);
  }

  hasValueUuid(): boolean {
    return this.hasFieldValue('valueUuid');
  }

  getValueAddress(): Address | undefined {
    return this.valueAddress;
  }

  /** Sets `value[x]` as Address and clears every other type of it. */
  setValueAddress(valueAddress: Address | undefined): this {
    return this.setFieldValue('valueAddress', valueAddress);
  }

  hasValueAddress(): boolean {
    return this.hasFieldValue('valueAddress');
  }

  getValueAge(): Age | undefined {
    return this.valueAge;
  }

  /** Sets `value[x]` as Age and clears every other type of it. */
  setValueAge(valueAge: Age | undefined): this {
    return this.setFieldValue('valueAge', valueAge);
  }

  hasValueAge(): boolean {
    return this.hasFieldValue('valueAge');
  }

  getValueAnnotation(): Annotation | undefined {
    return this.valueAnnotation;
  }

  /** Sets `value[x]` as Annotation and clears every other type of it. */
  setValueAnnotation(valueAnnotation: Annotation | undefined): this {
    return this.setFieldValue('valueAnnotation', valueAnnotation);
  }

  hasValueAnnotation(): boolean {
    return this.hasFieldValue('valueAnnotation');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueCoding(): Coding | undefined {
    return this.valueCoding;
  }

  /** Sets `value[x]` as Coding and clears every other type of it. */
  setValueCoding(valueCoding: Coding | undefined): this {
    return this.setFieldValue('valueCoding', valueCoding);
  }

  hasValueCoding(): boolean {
    return this.hasFieldValue('valueCoding');
  }

  getValueContactPoint(): ContactPoint | undefined {
    return this.valueContactPoint;
  }

  /** Sets `value[x]` as ContactPoint and clears every other type of it. */
  setValueContactPoint(valueContactPoint: ContactPoint | undefined): this {
    return this.setFieldValue('valueContactPoint', valueContactPoint);
  }

  hasValueContactPoint(): boolean {
    return this.hasFieldValue('valueContactPoint');
  }

  getValueCount(): Count | undefined {
    return this.valueCount;
  }

  /** Sets `value[x]` as Count and clears every other type of it. */
  setValueCount(valueCount: Count | undefined): this {
    return this.setFieldValue('valueCount', valueCount);
  }

  hasValueCount(): boolean {
    return this.hasFieldValue('valueCount');
  }

  getValueDistance(): Distance | undefined {
    return this.valueDistance;
  }

  /** Sets `value[x]` as Distance and clears every other type of it. */
  setValueDistance(valueDistance: Distance | undefined): this {
    return this.setFieldValue('valueDistance', valueDistance);
  }

  hasValueDistance(): boolean {
    return this.hasFieldValue('valueDistance');
  }

  getValueDuration(): Duration | undefined {
    return this.valueDuration;
  }

  /** Sets `value[x]` as Duration and clears every other type of it. */
  setValueDuration(valueDuration: Duration | undefined): this {
    return this.setFieldValue('valueDuration', valueDuration);
  }

  hasValueDuration(): boolean {
    return this.hasFieldValue('valueDuration');
  }

  getValueHumanName(): HumanName | undefined {
    return this.valueHumanName;
  }

  /** Sets `value[x]` as HumanName and clears every other type of it. */
  setValueHumanName(valueHumanName: HumanName | undefined): this {
    return this.setFieldValue('valueHumanName', valueHumanName);
  }

  hasValueHumanName(): boolean {
    return this.hasFieldValue('valueHumanName');
  }

  getValueIdentifier(): Identifier | undefined {
    return this.valueIdentifier;
  }

  /** Sets `value[x]` as Identifier and clears every other type of it. */
  setValueIdentifier(valueIdentifier: Identifier | undefined): this {
    return this.setFieldValue('valueIdentifier', valueIdentifier);
  }

  hasValueIdentifier(): boolean {
    return this.hasFieldValue('valueIdentifier');
  }

  getValueMoney(): Money | undefined {
    return this.valueMoney;
  }

  /** Sets `value[x]` as Money and clears every other type of it. */
  setValueMoney(valueMoney: Money | undefined): this {
    return this.setFieldValue('valueMoney', valueMoney);
  }

  hasValueMoney(): boolean {
    return this.hasFieldValue('valueMoney');
  }

  getValuePeriod(): Period | undefined {
    return this.valuePeriod;
  }

  /** Sets `value[x]` as Period and clears every other type of it. */
  setValuePeriod(valuePeriod: Period | undefined): this {
    return this.setFieldValue('valuePeriod', valuePeriod);
  }

  hasValuePeriod(): boolean {
    return this.hasFieldValue('valuePeriod');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueRange(): Range | undefined {
    return this.valueRange;
  }

  /** Sets `value[x]` as Range and clears every other type of it. */
  setValueRange(valueRange: Range | undefined): this {
    return this.setFieldValue('valueRange', valueRange);
  }

  hasValueRange(): boolean {
    return this.hasFieldValue('valueRange');
  }

  getValueRatio(): Ratio | undefined {
    return this.valueRatio;
  }

  /** Sets `value[x]` as Ratio and clears every other type of it. */
  setValueRatio(valueRatio: Ratio | undefined): this {
    return this.setFieldValue('valueRatio', valueRatio);
  }

  hasValueRatio(): boolean {
    return this.hasFieldValue('valueRatio');
  }

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }

  getValueSampledData(): SampledData | undefined {
    return this.valueSampledData;
  }

  /** Sets `value[x]` as SampledData and clears every other type of it. */
  setValueSampledData(valueSampledData: SampledData | undefined): this {
    return this.setFieldValue('valueSampledData', valueSampledData);
  }

  hasValueSampledData(): boolean {
    return this.hasFieldValue('valueSampledData');
  }

  getValueSignature(): Signature | undefined {
    return this.valueSignature;
  }

  /** Sets `value[x]` as Signature and clears every other type of it. */
  setValueSignature(valueSignature: Signature | undefined): this {
    return this.setFieldValue('valueSignature', valueSignature);
  }

  hasValueSignature(): boolean {
    return this.hasFieldValue('valueSignature');
  }

  getValueTiming(): Timing | undefined {
    return this.valueTiming;
  }

  /** Sets `value[x]` as Timing and clears every other type of it. */
  setValueTiming(valueTiming: Timing | undefined): this {
    return this.setFieldValue('valueTiming', valueTiming);
  }

  hasValueTiming(): boolean {
    return this.hasFieldValue('valueTiming');
  }

  getValueContactDetail(): ContactDetail | undefined {
    return this.valueContactDetail;
  }

  /** Sets `value[x]` as ContactDetail and clears every other type of it. */
  setValueContactDetail(valueContactDetail: ContactDetail | undefined): this {
    return this.setFieldValue('valueContactDetail', valueContactDetail);
  }

  hasValueContactDetail(): boolean {
    return this.hasFieldValue('valueContactDetail');
  }

  getValueContributor(): Contributor | undefined {
    return this.valueContributor;
  }

  /** Sets `value[x]` as Contributor and clears every other type of it. */
  setValueContributor(valueContributor: Contributor | undefined): this {
    return this.setFieldValue('valueContributor', valueContributor);
  }

  hasValueContributor(): boolean {
    return this.hasFieldValue('valueContributor');
  }

  getValueDataRequirement(): DataRequirement | undefined {
    return this.valueDataRequirement;
  }

  /** Sets `value[x]` as DataRequirement and clears every other type of it. */
  setValueDataRequirement(valueDataRequirement: DataRequirement | undefined): this {
    return this.setFieldValue('valueDataRequirement', valueDataRequirement);
  }

  hasValueDataRequirement(): boolean {
    return this.hasFieldValue('valueDataRequirement');
  }

  getValueExpression(): Expression | undefined {
    return this.valueExpression;
  }

  /** Sets `value[x]` as Expression and clears every other type of it. */
  setValueExpression(valueExpression: Expression | undefined): this {
    return this.setFieldValue('valueExpression', valueExpression);
  }

  hasValueExpression(): boolean {
    return this.hasFieldValue('valueExpression');
  }

  getValueParameterDefinition(): ParameterDefinition | undefined {
    return this.valueParameterDefinition;
  }

  /** Sets `value[x]` as ParameterDefinition and clears every other type of it. */
  setValueParameterDefinition(valueParameterDefinition: ParameterDefinition | undefined): this {
    return this.setFieldValue('valueParameterDefinition', valueParameterDefinition);
  }

  hasValueParameterDefinition(): boolean {
    return this.hasFieldValue('valueParameterDefinition');
  }

  getValueRelatedArtifact(): RelatedArtifact | undefined {
    return this.valueRelatedArtifact;
  }

  /** Sets `value[x]` as RelatedArtifact and clears every other type of it. */
  setValueRelatedArtifact(valueRelatedArtifact: RelatedArtifact | undefined): this {
    return this.setFieldValue('valueRelatedArtifact', valueRelatedArtifact);
  }

  hasValueRelatedArtifact(): boolean {
    return this.hasFieldValue('valueRelatedArtifact');
  }

  getValueTriggerDefinition(): TriggerDefinition | undefined {
    return this.valueTriggerDefinition;
  }

  /** Sets `value[x]` as TriggerDefinition and clears every other type of it. */
  setValueTriggerDefinition(valueTriggerDefinition: TriggerDefinition | undefined): this {
    return this.setFieldValue('valueTriggerDefinition', valueTriggerDefinition);
  }

  hasValueTriggerDefinition(): boolean {
    return this.hasFieldValue('valueTriggerDefinition');
  }

  getValueUsageContext(): UsageContext | undefined {
    return this.valueUsageContext;
  }

  /** Sets `value[x]` as UsageContext and clears every other type of it. */
  setValueUsageContext(valueUsageContext: UsageContext | undefined): this {
    return this.setFieldValue('valueUsageContext', valueUsageContext);
  }

  hasValueUsageContext(): boolean {
    return this.hasFieldValue('valueUsageContext');
  }

  getValueDosage(): Dosage | undefined {
    return this.valueDosage;
  }

  /** Sets `value[x]` as Dosage and clears every other type of it. */
  setValueDosage(valueDosage: Dosage | undefined): this {
    return this.setFieldValue('valueDosage', valueDosage);
  }

  hasValueDosage(): boolean {
    return this.hasFieldValue('valueDosage');
  }

  getValueMeta(): Meta | undefined {
    return this.valueMeta;
  }

  /** Sets `value[x]` as Meta and clears every other type of it. */
  setValueMeta(valueMeta: Meta | undefined): this {
    return this.setFieldValue('valueMeta', valueMeta);
  }

  hasValueMeta(): boolean {
    return this.hasFieldValue('valueMeta');
  }
}

modelTypeRegistry.register('ElementDefinitionExample', ElementDefinitionExample, false);

/**
 * Condition that must evaluate to true
 */
export class ElementDefinitionConstraint extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'key',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'key', typeCode: 'id' }],
    },
    {
      elementName: 'requirements',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requirements', typeCode: 'string' }],
    },
    {
      elementName: 'severity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'severity', typeCode: 'code', allowedCodes: valueSetCodes.ConstraintSeverity },
      ],
    },
    {
      elementName: 'human',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'human', typeCode: 'string' }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
    {
      elementName: 'xpath',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'xpath', typeCode: 'string' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'canonical' }],
    },
  ];

  /** Target of 'condition' reference above (1..1) */
  key?: string;
  /** Id and extensions of the primitive `key`. */
  _key?: Element;

  /** Why this constraint is necessary or appropriate (0..1) */
  requirements?: string;
  /** Id and extensions of the primitive `requirements`. */
  _requirements?: Element;

  /** error | warning (1..1) */
  severity?: valueSetCodes.ConstraintSeverity;
  /** Id and extensions of the primitive `severity`. */
  _severity?: Element;

  /** Human description of constraint (1..1) */
  human?: string;
  /** Id and extensions of the primitive `human`. */
  _human?: Element;

  /** FHIRPath expression of constraint (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  /** XPath expression of constraint (0..1) */
  xpath?: string;
  /** Id and extensions of the primitive `xpath`. */
  _xpath?: Element;

  /** Reference to original source of constraint (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;

  override fhirType(): string {
    return 'ElementDefinition.constraint';
  }

  /** FHIR JSON for this ElementDefinitionConstraint, typed as the plain `ElementDefinitionConstraint` data type. */
  override toJSON(): plainTypes.ElementDefinitionConstraint {
    return this.serialize() as plainTypes.ElementDefinitionConstraint;
  }

  /** Target of 'condition' reference above (1..1) */
  getKey(): string | undefined {
    return this.key;
  }

  /** Sets `key`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setKey(key: string | undefined): this {
    return this.setFieldValue('key', key);
  }

  hasKey(): boolean {
    return this.hasFieldValue('key');
  }

  /** The element carrying the id and extensions of `key`. Created when absent. */
  getKeyElement(): Element {
    if (this._key === undefined) {
      this._key = new Element();
    }
    return this._key;
  }

  setKeyElement(keyElement: Element | undefined): this {
    this._key = keyElement;
    return this;
  }

  /** Why this constraint is necessary or appropriate (0..1) */
  getRequirements(): string | undefined {
    return this.requirements;
  }

  /** Sets `requirements`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRequirements(requirements: string | undefined): this {
    return this.setFieldValue('requirements', requirements);
  }

  hasRequirements(): boolean {
    return this.hasFieldValue('requirements');
  }

  /** The element carrying the id and extensions of `requirements`. Created when absent. */
  getRequirementsElement(): Element {
    if (this._requirements === undefined) {
      this._requirements = new Element();
    }
    return this._requirements;
  }

  setRequirementsElement(requirementsElement: Element | undefined): this {
    this._requirements = requirementsElement;
    return this;
  }

  /** error | warning (1..1) */
  getSeverity(): valueSetCodes.ConstraintSeverity | undefined {
    return this.severity;
  }

  /** Sets `severity`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setSeverity(severity: valueSetCodes.ConstraintSeverity | undefined): this {
    return this.setFieldValue('severity', severity);
  }

  hasSeverity(): boolean {
    return this.hasFieldValue('severity');
  }

  /** The element carrying the id and extensions of `severity`. Created when absent. */
  getSeverityElement(): Element {
    if (this._severity === undefined) {
      this._severity = new Element();
    }
    return this._severity;
  }

  setSeverityElement(severityElement: Element | undefined): this {
    this._severity = severityElement;
    return this;
  }

  /** Human description of constraint (1..1) */
  getHuman(): string | undefined {
    return this.human;
  }

  /** Sets `human`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setHuman(human: string | undefined): this {
    return this.setFieldValue('human', human);
  }

  hasHuman(): boolean {
    return this.hasFieldValue('human');
  }

  /** The element carrying the id and extensions of `human`. Created when absent. */
  getHumanElement(): Element {
    if (this._human === undefined) {
      this._human = new Element();
    }
    return this._human;
  }

  setHumanElement(humanElement: Element | undefined): this {
    this._human = humanElement;
    return this;
  }

  /** FHIRPath expression of constraint (0..1) */
  getExpression(): string | undefined {
    return this.expression;
  }

  /** Sets `expression`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setExpression(expression: string | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }

  /** The element carrying the id and extensions of `expression`. Created when absent. */
  getExpressionElement(): Element {
    if (this._expression === undefined) {
      this._expression = new Element();
    }
    return this._expression;
  }

  setExpressionElement(expressionElement: Element | undefined): this {
    this._expression = expressionElement;
    return this;
  }

  /** XPath expression of constraint (0..1) */
  getXpath(): string | undefined {
    return this.xpath;
  }

  /** Sets `xpath`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setXpath(xpath: string | undefined): this {
    return this.setFieldValue('xpath', xpath);
  }

  hasXpath(): boolean {
    return this.hasFieldValue('xpath');
  }

  /** The element carrying the id and extensions of `xpath`. Created when absent. */
  getXpathElement(): Element {
    if (this._xpath === undefined) {
      this._xpath = new Element();
    }
    return this._xpath;
  }

  setXpathElement(xpathElement: Element | undefined): this {
    this._xpath = xpathElement;
    return this;
  }

  /** Reference to original source of constraint (0..1) */
  getSource(): string | undefined {
    return this.source;
  }

  /** Sets `source`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setSource(source: string | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** The element carrying the id and extensions of `source`. Created when absent. */
  getSourceElement(): Element {
    if (this._source === undefined) {
      this._source = new Element();
    }
    return this._source;
  }

  setSourceElement(sourceElement: Element | undefined): this {
    this._source = sourceElement;
    return this;
  }
}

modelTypeRegistry.register('ElementDefinitionConstraint', ElementDefinitionConstraint, false);

/**
 * ValueSet details if this is coded
 */
export class ElementDefinitionBinding extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'strength',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'strength', typeCode: 'code', allowedCodes: valueSetCodes.BindingStrength },
      ],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'valueSet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'valueSet', typeCode: 'canonical' }],
    },
  ];

  /** required | extensible | preferred | example (1..1) */
  strength?: valueSetCodes.BindingStrength;
  /** Id and extensions of the primitive `strength`. */
  _strength?: Element;

  /** Human explanation of the value set (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Source of value set (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;

  override fhirType(): string {
    return 'ElementDefinition.binding';
  }

  /** FHIR JSON for this ElementDefinitionBinding, typed as the plain `ElementDefinitionBinding` data type. */
  override toJSON(): plainTypes.ElementDefinitionBinding {
    return this.serialize() as plainTypes.ElementDefinitionBinding;
  }

  /** required | extensible | preferred | example (1..1) */
  getStrength(): valueSetCodes.BindingStrength | undefined {
    return this.strength;
  }

  /** Sets `strength`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStrength(strength: valueSetCodes.BindingStrength | undefined): this {
    return this.setFieldValue('strength', strength);
  }

  hasStrength(): boolean {
    return this.hasFieldValue('strength');
  }

  /** The element carrying the id and extensions of `strength`. Created when absent. */
  getStrengthElement(): Element {
    if (this._strength === undefined) {
      this._strength = new Element();
    }
    return this._strength;
  }

  setStrengthElement(strengthElement: Element | undefined): this {
    this._strength = strengthElement;
    return this;
  }

  /** Human explanation of the value set (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Source of value set (0..1) */
  getValueSet(): string | undefined {
    return this.valueSet;
  }

  /** Sets `valueSet`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setValueSet(valueSet: string | undefined): this {
    return this.setFieldValue('valueSet', valueSet);
  }

  hasValueSet(): boolean {
    return this.hasFieldValue('valueSet');
  }

  /** The element carrying the id and extensions of `valueSet`. Created when absent. */
  getValueSetElement(): Element {
    if (this._valueSet === undefined) {
      this._valueSet = new Element();
    }
    return this._valueSet;
  }

  setValueSetElement(valueSetElement: Element | undefined): this {
    this._valueSet = valueSetElement;
    return this;
  }
}

modelTypeRegistry.register('ElementDefinitionBinding', ElementDefinitionBinding, false);

/**
 * Map element to another set of definitions
 */
export class ElementDefinitionMapping extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identity', typeCode: 'id' }],
    },
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'code' }],
    },
    {
      elementName: 'map',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'map', typeCode: 'string' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
  ];

  /** Reference to mapping declaration (1..1) */
  identity?: string;
  /** Id and extensions of the primitive `identity`. */
  _identity?: Element;

  /** Computable language of mapping (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  /** Details of the mapping (1..1) */
  map?: string;
  /** Id and extensions of the primitive `map`. */
  _map?: Element;

  /** Comments about the mapping or its use (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  override fhirType(): string {
    return 'ElementDefinition.mapping';
  }

  /** FHIR JSON for this ElementDefinitionMapping, typed as the plain `ElementDefinitionMapping` data type. */
  override toJSON(): plainTypes.ElementDefinitionMapping {
    return this.serialize() as plainTypes.ElementDefinitionMapping;
  }

  /** Reference to mapping declaration (1..1) */
  getIdentity(): string | undefined {
    return this.identity;
  }

  /** Sets `identity`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setIdentity(identity: string | undefined): this {
    return this.setFieldValue('identity', identity);
  }

  hasIdentity(): boolean {
    return this.hasFieldValue('identity');
  }

  /** The element carrying the id and extensions of `identity`. Created when absent. */
  getIdentityElement(): Element {
    if (this._identity === undefined) {
      this._identity = new Element();
    }
    return this._identity;
  }

  setIdentityElement(identityElement: Element | undefined): this {
    this._identity = identityElement;
    return this;
  }

  /** Computable language of mapping (0..1) */
  getLanguage(): string | undefined {
    return this.language;
  }

  /** Sets `language`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setLanguage(language: string | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The element carrying the id and extensions of `language`. Created when absent. */
  getLanguageElement(): Element {
    if (this._language === undefined) {
      this._language = new Element();
    }
    return this._language;
  }

  setLanguageElement(languageElement: Element | undefined): this {
    this._language = languageElement;
    return this;
  }

  /** Details of the mapping (1..1) */
  getMap(): string | undefined {
    return this.map;
  }

  /** Sets `map`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMap(map: string | undefined): this {
    return this.setFieldValue('map', map);
  }

  hasMap(): boolean {
    return this.hasFieldValue('map');
  }

  /** The element carrying the id and extensions of `map`. Created when absent. */
  getMapElement(): Element {
    if (this._map === undefined) {
      this._map = new Element();
    }
    return this._map;
  }

  setMapElement(mapElement: Element | undefined): this {
    this._map = mapElement;
    return this;
  }

  /** Comments about the mapping or its use (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }
}

modelTypeRegistry.register('ElementDefinitionMapping', ElementDefinitionMapping, false);
