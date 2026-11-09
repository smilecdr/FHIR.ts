/**
 * The JSON representation used for a FHIR primitive type.
 */
export type PrimitiveJsonType = 'string' | 'number' | 'boolean';

export type PrimitiveValue = string | number | boolean;

interface PrimitiveTypeRule {
  jsonType: PrimitiveJsonType;
  /** Returns a description of what is wrong with the value, or undefined when it is valid. */
  describeProblem: (primitiveValue: PrimitiveValue) => string | undefined;
}

const YEAR_PATTERN = '([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)';
const MONTH_PATTERN = '(0[1-9]|1[0-2])';
const DAY_PATTERN = '(0[1-9]|[1-2][0-9]|3[0-1])';
const TIME_PATTERN = '([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?';
const TIME_ZONE_PATTERN = '(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))';

const DATE_REGEX = new RegExp(`^${YEAR_PATTERN}(-${MONTH_PATTERN}(-${DAY_PATTERN})?)?$`);
const DATE_TIME_REGEX = new RegExp(
  `^${YEAR_PATTERN}(-${MONTH_PATTERN}(-${DAY_PATTERN}(T${TIME_PATTERN}${TIME_ZONE_PATTERN})?)?)?$`
);
const INSTANT_REGEX = new RegExp(
  `^${YEAR_PATTERN}-${MONTH_PATTERN}-${DAY_PATTERN}T${TIME_PATTERN}${TIME_ZONE_PATTERN}$`
);
const TIME_REGEX = new RegExp(`^${TIME_PATTERN}$`);
const CODE_REGEX = /^[^\s]+(\s[^\s]+)*$/;
const ID_REGEX = /^[A-Za-z0-9\-.]{1,64}$/;
const OID_REGEX = /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/;
const UUID_REGEX =
  /^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const NO_WHITESPACE_REGEX = /^\S*$/;
const BASE64_REGEX = /^[A-Za-z0-9+/\s]*={0,2}\s*$/;
const INTEGER64_REGEX = /^(0|[-+]?[1-9][0-9]*)$/;
const CALENDAR_DATE_PREFIX_REGEX = /^(\d{4})-(\d{2})-(\d{2})/;

const MINIMUM_INTEGER = -2147483648;
const MAXIMUM_INTEGER = 2147483647;
const MAXIMUM_INTEGER64_DIGITS = '9223372036854775807';
const MINIMUM_INTEGER64_DIGITS = '9223372036854775808';

function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/**
 * The FHIR regular expressions accept any day from 01 to 31 for every month.
 * This rejects dates that do not exist, such as 2024-02-30.
 */
function describeCalendarProblem(dateText: string): string | undefined {
  const calendarDateMatch = CALENDAR_DATE_PREFIX_REGEX.exec(dateText);
  if (calendarDateMatch === null) {
    return undefined;
  }
  const year = Number(calendarDateMatch[1]);
  const month = Number(calendarDateMatch[2]);
  const day = Number(calendarDateMatch[3]);
  if (day > daysInMonth(year, month)) {
    return `'${dateText}' is not a real calendar date`;
  }
  return undefined;
}

function stringRule(
  typeCode: string,
  expectedFormat: string,
  isWellFormed: (stringValue: string) => boolean,
  describeExtraProblem?: (stringValue: string) => string | undefined
): PrimitiveTypeRule {
  return {
    jsonType: 'string',
    describeProblem: (primitiveValue) => {
      const stringValue = primitiveValue as string;
      if (!isWellFormed(stringValue)) {
        return `'${abbreviate(stringValue)}' is not a valid FHIR ${typeCode} (expected ${expectedFormat})`;
      }
      return describeExtraProblem === undefined ? undefined : describeExtraProblem(stringValue);
    },
  };
}

function integerRule(typeCode: string, minimumValue: number): PrimitiveTypeRule {
  return {
    jsonType: 'number',
    describeProblem: (primitiveValue) => {
      const numberValue = primitiveValue as number;
      if (
        !Number.isInteger(numberValue) ||
        numberValue < minimumValue ||
        numberValue > MAXIMUM_INTEGER
      ) {
        return `${numberValue} is not a valid FHIR ${typeCode} (expected a whole number from ${minimumValue} to ${MAXIMUM_INTEGER})`;
      }
      return undefined;
    },
  };
}

function abbreviate(longText: string): string {
  const maximumLength = 60;
  return longText.length > maximumLength ? `${longText.slice(0, maximumLength)}...` : longText;
}

function isInteger64(stringValue: string): boolean {
  if (!INTEGER64_REGEX.test(stringValue)) {
    return false;
  }
  const isNegative = stringValue.startsWith('-');
  const digits = stringValue.replace(/^[-+]/, '');
  const largestDigits = isNegative ? MINIMUM_INTEGER64_DIGITS : MAXIMUM_INTEGER64_DIGITS;
  if (digits.length !== largestDigits.length) {
    return digits.length < largestDigits.length;
  }
  return digits <= largestDigits;
}

const nonEmptyText = (stringValue: string): boolean => stringValue.length > 0;
const uriText = (stringValue: string): boolean => NO_WHITESPACE_REGEX.test(stringValue);

const PRIMITIVE_TYPE_RULES: Readonly<Record<string, PrimitiveTypeRule>> = {
  boolean: { jsonType: 'boolean', describeProblem: () => undefined },
  integer: integerRule('integer', MINIMUM_INTEGER),
  unsignedInt: integerRule('unsignedInt', 0),
  positiveInt: integerRule('positiveInt', 1),
  decimal: {
    jsonType: 'number',
    describeProblem: (primitiveValue) =>
      Number.isFinite(primitiveValue as number)
        ? undefined
        : `${String(primitiveValue)} is not a valid FHIR decimal (expected a finite number)`,
  },
  integer64: stringRule('integer64', 'a signed 64 bit whole number as a string', isInteger64),
  string: stringRule('string', 'a non-empty string', nonEmptyText),
  markdown: stringRule('markdown', 'a non-empty string', nonEmptyText),
  xhtml: stringRule('xhtml', 'a non-empty XHTML fragment', nonEmptyText),
  code: stringRule('code', 'no leading, trailing or repeated whitespace', (stringValue) =>
    CODE_REGEX.test(stringValue)
  ),
  id: stringRule('id', '1 to 64 characters of A-Z, a-z, 0-9, "-" and "."', (stringValue) =>
    ID_REGEX.test(stringValue)
  ),
  uri: stringRule('uri', 'no whitespace', uriText),
  url: stringRule('url', 'no whitespace', uriText),
  canonical: stringRule('canonical', 'no whitespace', uriText),
  oid: stringRule('oid', 'urn:oid: followed by a dotted OID', (stringValue) =>
    OID_REGEX.test(stringValue)
  ),
  uuid: stringRule('uuid', 'urn:uuid: followed by a UUID', (stringValue) =>
    UUID_REGEX.test(stringValue)
  ),
  base64Binary: stringRule('base64Binary', 'base64 encoded content', (stringValue) =>
    BASE64_REGEX.test(stringValue)
  ),
  date: stringRule(
    'date',
    'YYYY, YYYY-MM or YYYY-MM-DD',
    (stringValue) => DATE_REGEX.test(stringValue),
    describeCalendarProblem
  ),
  dateTime: stringRule(
    'dateTime',
    'YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz',
    (stringValue) => DATE_TIME_REGEX.test(stringValue),
    describeCalendarProblem
  ),
  instant: stringRule(
    'instant',
    'YYYY-MM-DDThh:mm:ss.sss+zz:zz',
    (stringValue) => INSTANT_REGEX.test(stringValue),
    describeCalendarProblem
  ),
  time: stringRule('time', 'hh:mm:ss', (stringValue) => TIME_REGEX.test(stringValue)),
};

/**
 * True when the FHIR type code names a primitive type (`string`, `date`, `code`...).
 */
export function isPrimitiveTypeCode(typeCode: string): boolean {
  return Object.prototype.hasOwnProperty.call(PRIMITIVE_TYPE_RULES, typeCode);
}

/**
 * The JSON type (`string`, `number` or `boolean`) used to carry a FHIR primitive.
 */
export function primitiveJsonType(typeCode: string): PrimitiveJsonType {
  const primitiveTypeRule = PRIMITIVE_TYPE_RULES[typeCode];
  if (primitiveTypeRule === undefined) {
    throw new RangeError(`'${typeCode}' is not a FHIR primitive type`);
  }
  return primitiveTypeRule.jsonType;
}

/**
 * Describes why a value is not a valid instance of a FHIR primitive type.
 * Returns undefined when the value is valid.
 */
export function describePrimitiveProblem(
  typeCode: string,
  candidateValue: unknown
): string | undefined {
  const primitiveTypeRule = PRIMITIVE_TYPE_RULES[typeCode];
  if (primitiveTypeRule === undefined) {
    throw new RangeError(`'${typeCode}' is not a FHIR primitive type`);
  }
  if (typeof candidateValue !== primitiveTypeRule.jsonType) {
    return `expected a ${primitiveTypeRule.jsonType} for FHIR ${typeCode} but received ${describeValueKind(candidateValue)}`;
  }
  return primitiveTypeRule.describeProblem(candidateValue as PrimitiveValue);
}

/**
 * Short human readable description of the kind of value, used in error messages.
 */
export function describeValueKind(candidateValue: unknown): string {
  if (candidateValue === null) {
    return 'null';
  }
  if (Array.isArray(candidateValue)) {
    return 'an array';
  }
  if (typeof candidateValue === 'object') {
    const constructorName = (candidateValue as object).constructor?.name;
    return constructorName !== undefined && constructorName !== 'Object'
      ? `an instance of ${constructorName}`
      : 'a plain object';
  }
  return `a ${typeof candidateValue}`;
}
