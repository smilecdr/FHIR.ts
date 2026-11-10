/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
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
import { Resource } from './resource';
import { SampledData } from './sampledData';
import { Signature } from './signature';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';
import { UsageContext } from './usageContext';

/**
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export class Parameters extends Resource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'parameter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'ParametersParameter' }],
    },
  ];

  readonly resourceType = 'Parameters';

  /** Operation Parameter (0..*) */
  parameter?: ParametersParameter[];

  override fhirType(): string {
    return 'Parameters';
  }

  /** FHIR JSON for this Parameters, typed as the plain `Parameters` data type. */
  override toJSON(): plainTypes.Parameters {
    return this.serialize() as plainTypes.Parameters;
  }

  /** Operation Parameter (0..*) Never undefined; an empty list is created when absent. */
  getParameter(): ParametersParameter[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: ParametersParameter[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty ParametersParameter to `parameter` and returns it so it can be filled in. */
  addParameter(): ParametersParameter;
  /** Appends the given ParametersParameter to `parameter` and returns this object for chaining. */
  addParameter(parametersParameter: ParametersParameter): this;
  addParameter(parametersParameter?: ParametersParameter): ParametersParameter | this {
    if (parametersParameter !== undefined) {
      return this.addFieldValue('parameter', parametersParameter);
    }
    const createdParametersParameter = new ParametersParameter();
    this.addFieldValue('parameter', createdParametersParameter);
    return createdParametersParameter;
  }

  /** The first ParametersParameter of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): ParametersParameter {
    const firstParametersParameter = this.getParameter()[0];
    return firstParametersParameter === undefined ? this.addParameter() : firstParametersParameter;
  }
}

modelTypeRegistry.register('Parameters', Parameters, true);

/** True when the value is a Parameters model instance. */
export function isParameters(candidate: unknown): candidate is Parameters {
  return candidate instanceof Parameters;
}

/**
 * Operation Parameter
 */
export class ParametersParameter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'value',
      minimum: 0,
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
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'Resource' }],
    },
    {
      elementName: 'part',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'part', typeCode: 'ParametersParameter' }],
    },
  ];

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
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** If parameter is a data type (0..1) */
  valueDateTime?: string;
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
  valueInstant?: string;
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
  part?: ParametersParameter[];

  override fhirType(): string {
    return 'Parameters.parameter';
  }

  /** FHIR JSON for this ParametersParameter, typed as the plain `ParametersParameter` data type. */
  override toJSON(): plainTypes.ParametersParameter {
    return this.serialize() as plainTypes.ParametersParameter;
  }

  /** Name from the definition (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** If parameter is a data type (0..1) Whichever type of `value[x]` is set. */
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

  /** If parameter is a whole resource (0..1) */
  getResource(): Resource | undefined {
    return this.resource;
  }

  setResource(resource: Resource | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** Named part of a multi-part parameter (0..*) Never undefined; an empty list is created when absent. */
  getPart(): ParametersParameter[] {
    if (this.part === undefined) {
      this.part = [];
    }
    return this.part;
  }

  setPart(part: ParametersParameter[] | undefined): this {
    return this.setFieldValue('part', part);
  }

  hasPart(): boolean {
    return this.hasFieldValue('part');
  }

  /** Appends a new, empty ParametersParameter to `part` and returns it so it can be filled in. */
  addPart(): ParametersParameter;
  /** Appends the given ParametersParameter to `part` and returns this object for chaining. */
  addPart(parametersParameter: ParametersParameter): this;
  addPart(parametersParameter?: ParametersParameter): ParametersParameter | this {
    if (parametersParameter !== undefined) {
      return this.addFieldValue('part', parametersParameter);
    }
    const createdParametersParameter = new ParametersParameter();
    this.addFieldValue('part', createdParametersParameter);
    return createdParametersParameter;
  }

  /** The first ParametersParameter of `part`. One is added when the list is empty. */
  getPartFirstRep(): ParametersParameter {
    const firstParametersParameter = this.getPart()[0];
    return firstParametersParameter === undefined ? this.addPart() : firstParametersParameter;
  }
}

modelTypeRegistry.register('ParametersParameter', ParametersParameter, false);
