export enum SORT_ORDER {
  ASCENDING,
  DESCENDING,
}

/**
 * The `value[x]` property of `Parameters.parameter` that carries a patch value,
 * one per FHIR data type. Some data types only exist in some FHIR versions
 * (for example `INTEGER64` and `CODEABLE_REFERENCE` are R5 only).
 */
export enum PATCH_DATATYPE {
  CODE = 'valueCode',
  DATE = 'valueDate',
  DATE_TIME = 'valueDateTime',
  BOOLEAN = 'valueBoolean',
  CODEABLE_CONCEPT = 'valueCodeableConcept',
  CODING = 'valueCoding',
  IDENTIFIER = 'valueIdentifier',
  HUMAN_NAME = 'valueHumanName',
  STRING = 'valueString',
  ADDRESS = 'valueAddress',
  REFERENCE = 'valueReference',
  AGE = 'valueAge',
  ANNOTATION = 'valueAnnotation',
  ATTACHMENT = 'valueAttachment',
  AVAILABILITY = 'valueAvailability',
  BASE64_BINARY = 'valueBase64Binary',
  CANONICAL = 'valueCanonical',
  CODEABLE_REFERENCE = 'valueCodeableReference',
  CONTACT_DETAIL = 'valueContactDetail',
  CONTACT_POINT = 'valueContactPoint',
  CONTRIBUTOR = 'valueContributor',
  COUNT = 'valueCount',
  DATA_REQUIREMENT = 'valueDataRequirement',
  DECIMAL = 'valueDecimal',
  DISTANCE = 'valueDistance',
  DOSAGE = 'valueDosage',
  DURATION = 'valueDuration',
  EXPRESSION = 'valueExpression',
  EXTENDED_CONTACT_DETAIL = 'valueExtendedContactDetail',
  ID = 'valueId',
  INSTANT = 'valueInstant',
  INTEGER = 'valueInteger',
  INTEGER64 = 'valueInteger64',
  MARKDOWN = 'valueMarkdown',
  META = 'valueMeta',
  MONEY = 'valueMoney',
  OID = 'valueOid',
  PARAMETER_DEFINITION = 'valueParameterDefinition',
  PERIOD = 'valuePeriod',
  POSITIVE_INT = 'valuePositiveInt',
  QUANTITY = 'valueQuantity',
  RANGE = 'valueRange',
  RATIO = 'valueRatio',
  RATIO_RANGE = 'valueRatioRange',
  RELATED_ARTIFACT = 'valueRelatedArtifact',
  SAMPLED_DATA = 'valueSampledData',
  SIGNATURE = 'valueSignature',
  TIME = 'valueTime',
  TIMING = 'valueTiming',
  TRIGGER_DEFINITION = 'valueTriggerDefinition',
  UNSIGNED_INT = 'valueUnsignedInt',
  URI = 'valueUri',
  URL = 'valueUrl',
  USAGE_CONTEXT = 'valueUsageContext',
  UUID = 'valueUuid',
}

/**
 * A `value[x]` property name. Use a PATCH_DATATYPE member where one exists; a
 * plain `value...` string is accepted for data types added by later FHIR versions.
 */
export type PatchValueProperty = PATCH_DATATYPE | `value${string}`;

export interface PatchAddValueParams {
  value: unknown;
  valueDataType: PatchValueProperty;
}

export interface PatchAddBackboneElementParams extends PatchAddValueParams {
  backBoneElementProperty: string;
}

/** One entry of `Parameters.parameter`, or one of its nested parts. */
export interface PatchParametersPart {
  name: string;
  part?: PatchParametersPart[];
  [valueProperty: `value${string}`]: unknown;
}

/** The `Parameters` resource that describes a FHIRPath Patch. */
export interface PatchParameters {
  resourceType: 'Parameters';
  parameter: PatchParametersPart[];
}
