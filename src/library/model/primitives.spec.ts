import { describe, expect, it } from 'vitest';
import {
  describePrimitiveProblem,
  describeValueKind,
  isPrimitiveTypeCode,
  primitiveJsonType,
} from './primitives';

describe('FHIR primitive validation', () => {
  const validExamples: Record<string, unknown[]> = {
    boolean: [true, false],
    integer: [0, -2147483648, 2147483647],
    unsignedInt: [0, 12],
    positiveInt: [1, 99],
    decimal: [0, -1.5, 1e10],
    integer64: ['0', '-9223372036854775808', '9223372036854775807', '+12'],
    string: ['a', ' leading space'],
    markdown: ['# Title'],
    xhtml: ['<div xmlns="http://www.w3.org/1999/xhtml">text</div>'],
    code: ['male', 'entered in error'],
    id: ['abc-123.X', 'a'.repeat(64)],
    uri: ['http://example.org/fhir', 'urn:oid:1.2.3'],
    url: ['https://example.org'],
    canonical: ['http://example.org/StructureDefinition/x|1.0'],
    oid: ['urn:oid:1.2.840.113556'],
    uuid: ['urn:uuid:c757873d-ec9a-4326-a141-556f43239520'],
    base64Binary: ['SGVsbG8=', 'SGVs\nbG8='],
    date: ['2024', '2024-02', '2024-02-29'],
    dateTime: ['2024', '2024-02-29', '2024-02-29T10:15:00Z', '2024-02-29T10:15:00.123+05:30'],
    instant: ['2024-02-29T10:15:00Z', '2024-02-29T10:15:00.5-04:00'],
    time: ['23:59:59', '08:00:00.123'],
  };

  const invalidExamples: Record<string, unknown[]> = {
    boolean: ['true', 1],
    integer: [1.5, 2147483648, '1'],
    unsignedInt: [-1, 0.5],
    positiveInt: [0, -3],
    decimal: [Number.NaN, Number.POSITIVE_INFINITY, '1.0'],
    integer64: ['01', '9223372036854775808', '-9223372036854775809', '1.5', 5],
    string: ['', 5],
    code: [' male', 'male ', 'two  spaces', ''],
    id: ['has space', 'under_score', 'a'.repeat(65), ''],
    uri: ['has space'],
    oid: ['1.2.3', 'urn:oid:9.1'],
    uuid: ['c757873d-ec9a-4326-a141-556f43239520'],
    base64Binary: ['not*base64'],
    date: ['2024-2-1', '2024-13-01', '2023-02-29', '2024-02-29T10:00:00Z', '24'],
    dateTime: ['2024-02-29T10:15:00', '2024-02-30', '2024-02-29 10:15:00Z'],
    instant: ['2024-02-29', '2024-02-29T10:15:00'],
    time: ['24:00:00', '8:00:00', '08:00'],
  };

  for (const typeCode of Object.keys(validExamples)) {
    it(`accepts valid ${typeCode} values`, () => {
      for (const validValue of validExamples[typeCode] ?? []) {
        expect(
          describePrimitiveProblem(typeCode, validValue),
          `${typeCode}: ${String(validValue)}`
        ).toBeUndefined();
      }
    });
  }

  for (const typeCode of Object.keys(invalidExamples)) {
    it(`rejects invalid ${typeCode} values`, () => {
      for (const invalidValue of invalidExamples[typeCode] ?? []) {
        expect(
          describePrimitiveProblem(typeCode, invalidValue),
          `${typeCode}: ${String(invalidValue)}`
        ).toEqual(expect.any(String));
      }
    });
  }

  it('abbreviates very long values in messages', () => {
    const longInvalidCode = ` ${'x'.repeat(500)}`;
    const problem = describePrimitiveProblem('code', longInvalidCode) as string;
    expect(problem.length).toBeLessThan(200);
    expect(problem).toContain('...');
  });

  it('knows which type codes are primitive and how they are carried in JSON', () => {
    expect(isPrimitiveTypeCode('date')).toBe(true);
    expect(isPrimitiveTypeCode('HumanName')).toBe(false);
    expect(isPrimitiveTypeCode('toString')).toBe(false);
    expect(primitiveJsonType('decimal')).toBe('number');
    expect(primitiveJsonType('boolean')).toBe('boolean');
    expect(primitiveJsonType('instant')).toBe('string');
  });

  it('refuses type codes that are not primitive', () => {
    expect(() => primitiveJsonType('HumanName')).toThrowError(RangeError);
    expect(() => describePrimitiveProblem('HumanName', 'x')).toThrowError(RangeError);
  });

  it('describes kinds of values for error messages', () => {
    expect(describeValueKind(null)).toBe('null');
    expect(describeValueKind([])).toBe('an array');
    expect(describeValueKind({})).toBe('a plain object');
    expect(describeValueKind(new Date())).toBe('an instance of Date');
    expect(describeValueKind('text')).toBe('a string');
    expect(describeValueKind(undefined)).toBe('a undefined');
  });
});
