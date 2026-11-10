import { describe, expect, it } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import * as fhirR3Model from '../../FHIR-R3/model';
import * as fhirR4Model from '../../FHIR-R4/model';
import * as fhirR5Model from '../../FHIR-R5/model';
import { Base, FieldDefinition, FieldTypeDefinition } from './Base';
import { FhirModelError } from './errors';
import { isPrimitiveTypeCode } from './primitives';
import type { ConcreteModelClass, TypeRegistry } from './TypeRegistry';

type ModelClassWithStatics = ConcreteModelClass & {
  ownFields: readonly FieldDefinition[];
  fromJSON: (json: unknown) => Base;
};

interface ModelVersion {
  versionLabel: string;
  exportedMembers: Record<string, unknown>;
  modelTypeRegistry: TypeRegistry;
  parseResource: (json: unknown) => Base;
  /** Number of resource types the FHIR version defines. */
  resourceTypeCount: number;
}

const REPOSITORY_ROOT = path.resolve(__dirname, '..', '..', '..');
const TEST_RESOURCE_DIRECTORY = path.join(REPOSITORY_ROOT, 'src', 'test-resources');
const MAXIMUM_SAMPLE_DEPTH = 2;

const MODEL_VERSIONS: ModelVersion[] = [
  {
    versionLabel: 'R3',
    exportedMembers: fhirR3Model as unknown as Record<string, unknown>,
    modelTypeRegistry: fhirR3Model.modelTypeRegistry,
    parseResource: fhirR3Model.parseResource,
    resourceTypeCount: 117,
  },
  {
    versionLabel: 'R4',
    exportedMembers: fhirR4Model as unknown as Record<string, unknown>,
    modelTypeRegistry: fhirR4Model.modelTypeRegistry,
    parseResource: fhirR4Model.parseResource,
    resourceTypeCount: 146,
  },
  {
    versionLabel: 'R5',
    exportedMembers: fhirR5Model as unknown as Record<string, unknown>,
    modelTypeRegistry: fhirR5Model.modelTypeRegistry,
    parseResource: fhirR5Model.parseResource,
    resourceTypeCount: 158,
  },
];

const SAMPLE_PRIMITIVE_VALUES: Readonly<Record<string, string | number | boolean>> = {
  boolean: true,
  integer: -3,
  unsignedInt: 0,
  positiveInt: 4,
  decimal: 1.25,
  integer64: '9007199254740993',
  string: 'sample text',
  markdown: '**sample** text',
  xhtml: '<div xmlns="http://www.w3.org/1999/xhtml">sample</div>',
  code: 'sample-code',
  id: 'sample-id',
  uri: 'http://example.org/sample',
  url: 'http://example.org/sample',
  canonical: 'http://example.org/StructureDefinition/sample',
  oid: 'urn:oid:1.2.3.4',
  uuid: 'urn:uuid:c757873d-ec9a-4326-a141-556f43239520',
  base64Binary: 'c2FtcGxl',
  date: '2024-02-29',
  dateTime: '2024-02-29T10:15:00Z',
  instant: '2024-02-29T10:15:00.000Z',
  time: '10:15:00',
};

function modelClassesOf(modelVersion: ModelVersion): Map<string, ModelClassWithStatics> {
  const modelClasses = new Map<string, ModelClassWithStatics>();
  for (const exportName of Object.keys(modelVersion.exportedMembers).sort()) {
    const exportedMember = modelVersion.exportedMembers[exportName];
    const isModelClass =
      typeof exportedMember === 'function' &&
      exportedMember !== Base &&
      exportedMember.prototype instanceof Base;
    if (isModelClass) {
      modelClasses.set(exportName, exportedMember as ModelClassWithStatics);
    }
  }
  return modelClasses;
}

function allFieldDefinitions(modelClass: object): FieldDefinition[] {
  const parentClass: object | null = Object.getPrototypeOf(modelClass);
  const inheritedFields =
    parentClass === null || parentClass === Base ? [] : allFieldDefinitions(parentClass);
  const ownFields = Object.prototype.hasOwnProperty.call(modelClass, 'ownFields')
    ? (modelClass as ModelClassWithStatics).ownFields
    : [];
  return [...inheritedFields, ...ownFields];
}

function methodNamesOf(model: Base): string[] {
  const methodNames = new Set<string>();
  let prototype: object | null = Object.getPrototypeOf(model);
  while (prototype !== null && prototype !== Object.prototype) {
    Object.getOwnPropertyNames(prototype).forEach((propertyName) => methodNames.add(propertyName));
    prototype = Object.getPrototypeOf(prototype);
  }
  return Array.from(methodNames).sort();
}

/**
 * Builds FHIR JSON that fills every element of a type with a valid sample
 * value, descending a limited number of levels into nested types.
 */
function buildSampleJson(
  modelVersion: ModelVersion,
  modelClasses: Map<string, ModelClassWithStatics>,
  typeName: string,
  depth: number
): Record<string, unknown> {
  const modelClass = modelClasses.get(typeName) as ModelClassWithStatics;
  const sampleJson: Record<string, unknown> = {};
  if (modelVersion.modelTypeRegistry.isResourceType(typeName)) {
    sampleJson['resourceType'] = typeName;
  }
  for (const fieldDefinition of allFieldDefinitions(modelClass)) {
    const fieldType = fieldDefinition.types[0] as FieldTypeDefinition;
    const sampleValue = buildSampleValue(modelVersion, modelClasses, fieldType, depth);
    if (sampleValue !== undefined) {
      sampleJson[fieldType.jsonKey] = fieldDefinition.isList ? [sampleValue] : sampleValue;
    }
  }
  return sampleJson;
}

function buildSampleValue(
  modelVersion: ModelVersion,
  modelClasses: Map<string, ModelClassWithStatics>,
  fieldType: FieldTypeDefinition,
  depth: number
): unknown {
  if (isPrimitiveTypeCode(fieldType.typeCode)) {
    if (fieldType.allowedCodes !== undefined) {
      const firstCodeName = Object.keys(fieldType.allowedCodes)[0] as string;
      return fieldType.allowedCodes[firstCodeName];
    }
    return SAMPLE_PRIMITIVE_VALUES[fieldType.typeCode];
  }
  if (fieldType.typeCode === 'Resource' || fieldType.typeCode === 'DomainResource') {
    return { resourceType: 'Basic', id: 'contained-sample', code: { text: 'sample' } };
  }
  if (fieldType.typeCode === 'Reference' && fieldType.targetResourceTypes !== undefined) {
    return { reference: `${fieldType.targetResourceTypes[0] as string}/sample-id` };
  }
  if (depth >= MAXIMUM_SAMPLE_DEPTH) {
    return undefined;
  }
  const nestedSample = buildSampleJson(modelVersion, modelClasses, fieldType.typeCode, depth + 1);
  return Object.keys(nestedSample).length === 0 ? undefined : nestedSample;
}

describe('generated FHIR model classes', () => {
  for (const modelVersion of MODEL_VERSIONS) {
    describe(modelVersion.versionLabel, () => {
      const modelClasses = modelClassesOf(modelVersion);

      it('generates a class for every resource and data type', () => {
        const resourceTypeNames = modelVersion.modelTypeRegistry.getResourceTypeNames();
        expect(resourceTypeNames.length).toBe(modelVersion.resourceTypeCount);
        expect(modelClasses.size).toBeGreaterThan(resourceTypeNames.length * 3);
        for (const resourceTypeName of modelVersion.modelTypeRegistry.getResourceTypeNames()) {
          expect(
            typeof modelVersion.exportedMembers[`is${resourceTypeName}`],
            resourceTypeName
          ).toBe('function');
        }
      });

      it('only refers to types that exist', () => {
        for (const [className, modelClass] of modelClasses) {
          for (const fieldDefinition of allFieldDefinitions(modelClass)) {
            for (const fieldType of fieldDefinition.types) {
              const isKnownType =
                isPrimitiveTypeCode(fieldType.typeCode) ||
                modelVersion.modelTypeRegistry.isRegistered(fieldType.typeCode);
              expect(isKnownType, `${className}.${fieldType.jsonKey}: ${fieldType.typeCode}`).toBe(
                true
              );
            }
          }
        }
      });

      it('creates every class empty, and getters and adders leave it serialising as empty', () => {
        for (const [className, modelClass] of modelClasses) {
          const model = new modelClass();
          const emptyJson = modelVersion.modelTypeRegistry.isResourceType(className)
            ? { resourceType: className }
            : {};
          expect(model.isEmpty(), className).toBe(true);
          for (const methodName of methodNamesOf(model)) {
            const method = (
              model as unknown as Record<string, (...methodArguments: unknown[]) => unknown>
            )[methodName];
            const isAccessorWithoutArguments =
              typeof method === 'function' &&
              method.length === 0 &&
              /^(get|add|has)[A-Z]/.test(methodName);
            if (!isAccessorWithoutArguments) {
              continue;
            }
            const accessorResult = method.call(model);
            if (methodName.startsWith('has')) {
              expect(accessorResult, `${className}.${methodName}`).toBe(false);
            }
          }
          expect(model.isEmpty(), className).toBe(true);
          expect(model.toJSON() as object, className).toEqual(emptyJson);
          expect(model.copy().toJSON() as object, className).toEqual(emptyJson);
          expect(Array.isArray(model.validate())).toBe(true);
        }
      });

      it('round-trips a fully populated sample of every class through JSON', () => {
        for (const [className, modelClass] of modelClasses) {
          const sampleJson = buildSampleJson(modelVersion, modelClasses, className, 0);
          const model = modelClass.fromJSON(sampleJson);
          expect(JSON.parse(JSON.stringify(model)), className).toEqual(sampleJson);
          const unexpectedIssues = model
            .validate()
            .filter((validationIssue) => validationIssue.code !== 'required');
          expect(unexpectedIssues, className).toEqual([]);
        }
      });

      it('refuses resources of the wrong type', () => {
        expect(() => modelVersion.parseResource({ resourceType: 'NotAResource' })).toThrowError(
          FhirModelError
        );
      });
    });
  }

  describe('R4 example resources', () => {
    for (const fixtureFileName of ['Bundle-R4.json', 'Patient-R4.json', 'CareTeam-R4.json']) {
      it(`round-trips ${fixtureFileName} without loss and finds it valid`, () => {
        const fixtureJson = JSON.parse(
          fs.readFileSync(path.join(TEST_RESOURCE_DIRECTORY, fixtureFileName), 'utf8')
        );
        const resource = fhirR4Model.parseResource(fixtureJson);
        expect(JSON.parse(JSON.stringify(resource))).toEqual(fixtureJson);
        expect(resource.validate()).toEqual([]);
      });
    }

    it('rejects a fixture whose contained resource has the wrong shape', () => {
      const fixtureJson = JSON.parse(
        fs.readFileSync(path.join(TEST_RESOURCE_DIRECTORY, 'CareTeam-R4-contained.json'), 'utf8')
      );
      expect(() => fhirR4Model.parseResource(fixtureJson)).toThrowError(
        /CareTeam\.contained\[0\]\.basedOn: this element repeats/
      );
      expect(() => fhirR4Model.parseResource(fixtureJson)).toThrowError(FhirModelError);
    });
  });
});
