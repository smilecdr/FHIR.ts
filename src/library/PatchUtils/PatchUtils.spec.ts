import { beforeEach, describe, expect, expectTypeOf, it } from 'vitest';
import type * as fhirR4 from '../../FHIR-R4/classes/models-r4';
import type * as fhirR5 from '../../FHIR-R5/models';
import { Quantity } from '../../FHIR-R4/model';
import { PATCH_DATATYPE, PatchAddValueParams, PatchAddBackboneElementParams } from '../constants';
import { PatchUtils } from './PatchUtils';
describe('PatchUtils', () => {
  let patchUtils: PatchUtils;

  beforeEach(() => {
    patchUtils = new PatchUtils();
  });

  it('createReplaceParameters() should create Parameters for FHIR patch replace operation', () => {
    // setup
    const expected = {
      resourceType: 'Parameters',
      parameter: [
        {
          name: 'operation',
          part: [
            {
              name: 'type',
              valueCode: 'replace',
            },
            {
              name: 'path',
              valueString: 'Patient.birthDate',
            },
            {
              name: 'value',
              valueDate: '1930-01-01',
            },
          ],
        },
      ],
    };
    // execute
    const actual = patchUtils.createReplaceParameters(
      'Patient.birthDate',
      '1930-01-01',
      PATCH_DATATYPE.DATE
    );
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('createDeleteParameters() should create Parameters for FHIR patch delete operation', () => {
    // setup
    const expected = {
      resourceType: 'Parameters',
      parameter: [
        {
          name: 'operation',
          part: [
            {
              name: 'type',
              valueCode: 'delete',
            },
            {
              name: 'path',
              valueString: 'Patient.status',
            },
          ],
        },
      ],
    };
    // execute
    const actual = patchUtils.createDeleteParameters('Patient.status');
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('createMoveParameters() should create Parameters for FHIR patch move operation', () => {
    // setup
    const expected = {
      resourceType: 'Parameters',
      parameter: [
        {
          name: 'operation',
          part: [
            {
              name: 'type',
              valueCode: 'move',
            },
            {
              name: 'path',
              valueString: 'Patient.identifier',
            },
            {
              name: 'source',
              valueInteger: 0,
            },
            {
              name: 'destination',
              valueInteger: 1,
            },
          ],
        },
      ],
    };
    // execute
    const actual = patchUtils.createMoveParameters('Patient.identifier', 0, 1);
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('createAddParameters() should create Parameters for FHIR patch add operation', () => {
    // setup
    const expected = {
      resourceType: 'Parameters',
      parameter: [
        {
          name: 'operation',
          part: [
            {
              name: 'type',
              valueCode: 'add',
            },
            {
              name: 'path',
              valueString: 'Patient',
            },
            {
              name: 'name',
              valueString: 'birthDate',
            },
            {
              name: 'value',
              valueDate: '1930-01-01',
            },
          ],
        },
      ],
    };
    const params: PatchAddValueParams = {
      value: '1930-01-01',
      valueDataType: PATCH_DATATYPE.DATE,
    };
    // execute
    const actual = patchUtils.createAddParameters('Patient', 'birthDate', params);
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('createAddParametersForBackboneElement() should create Parameters for FHIR patch add operation', () => {
    // setup
    const expected = {
      resourceType: 'Parameters',
      parameter: [
        {
          name: 'operation',
          part: [
            {
              name: 'type',
              valueCode: 'add',
            },
            {
              name: 'path',
              valueString: 'Patient',
            },
            {
              name: 'name',
              valueString: 'contact',
            },
            {
              name: 'value',
              part: [
                {
                  name: 'address',
                  valueAddress: {
                    use: 'work',
                  },
                },
                {
                  name: 'name',
                  valueHumanName: {
                    use: 'official',
                  },
                },
              ],
            },
          ],
        },
      ],
    };
    const params: PatchAddBackboneElementParams[] = [
      {
        value: {
          use: 'work',
        },
        valueDataType: PATCH_DATATYPE.ADDRESS,
        backBoneElementProperty: 'address',
      },
      {
        value: {
          use: 'official',
        },
        valueDataType: PATCH_DATATYPE.HUMAN_NAME,
        backBoneElementProperty: 'name',
      },
    ];
    // execute
    const actual = patchUtils.createAddParametersForBackboneElement('Patient', 'contact', params);
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('createInsertParameters() should create Parameters for FHIR patch add operation', () => {
    // setup
    const identifier = {
      system: 'http://some-system.com',
      value: 'someValue',
    };
    const expected = {
      resourceType: 'Parameters',
      parameter: [
        {
          name: 'operation',
          part: [
            {
              name: 'type',
              valueCode: 'insert',
            },
            {
              name: 'path',
              valueString: 'Patient.identifier',
            },
            {
              name: 'index',
              valueInteger: 1,
            },
            {
              name: 'value',
              valueIdentifier: identifier,
            },
          ],
        },
      ],
    };
    // execute
    const actual = patchUtils.createInsertParameters(
      'Patient.identifier',
      identifier,
      PATCH_DATATYPE.IDENTIFIER,
      1
    );
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('resetPatchParameters() should reset Parameter property inside Parameters resource for PATCH operation', () => {
    // setup
    // validate delete params are present
    expect(
      patchUtils.createDeleteParameters('Patient.status').getPatchParameters().parameter
    ).toHaveLength(1);
    // execute
    const actual = patchUtils.resetPatchParameters().getPatchParameters();
    // validate
    expect(actual.parameter).toHaveLength(0);
  });

  it('getPatchParameters() should not change a result that was already returned', () => {
    const firstResult = patchUtils
      .createDeleteParameters('Patient.identifier[0]')
      .getPatchParameters();
    patchUtils.createDeleteParameters('Patient.identifier[1]');

    expect(firstResult.parameter.length).toBe(1);
    expect(patchUtils.getPatchParameters().parameter.length).toBe(2);
    expect(patchUtils.resetPatchParameters().getPatchParameters()).toEqual({
      resourceType: 'Parameters',
      parameter: [],
    });
    expect(firstResult.parameter.length).toBe(1);
  });

  it('should accept every FHIR data type for a value', () => {
    const patchParameters = patchUtils
      .createReplaceParameters('Observation.valueInteger', 7, PATCH_DATATYPE.INTEGER)
      .createReplaceParameters(
        'Observation.value',
        { value: 6.3, unit: 'mmol/l' },
        PATCH_DATATYPE.QUANTITY
      )
      .createInsertParameters(
        'Patient.telecom',
        { system: 'phone', value: '555' },
        PATCH_DATATYPE.CONTACT_POINT,
        0
      )
      .createAddParameters('Encounter', 'period', {
        value: { start: '2024-01-01' },
        valueDataType: PATCH_DATATYPE.PERIOD,
      })
      .createReplaceParameters('Basic.extension[0].value', '9007199254740993', 'valueInteger64')
      .getPatchParameters();

    const valueParts = patchParameters.parameter.map((operation) =>
      operation.part?.find((operationPart) => operationPart.name === 'value')
    );
    expect(valueParts).toEqual([
      { name: 'value', valueInteger: 7 },
      { name: 'value', valueQuantity: { value: 6.3, unit: 'mmol/l' } },
      { name: 'value', valueContactPoint: { system: 'phone', value: '555' } },
      { name: 'value', valuePeriod: { start: '2024-01-01' } },
      { name: 'value', valueInteger64: '9007199254740993' },
    ]);
    expect(PATCH_DATATYPE.DATE_TIME).toBe('valueDateTime');
    expect(PATCH_DATATYPE.BASE64_BINARY).toBe('valueBase64Binary');
  });

  it('should serialise a model class instance given as a value', () => {
    const patchParameters = patchUtils
      .createReplaceParameters(
        'Observation.value',
        new Quantity().setValue(5).setUnit('mg'),
        PATCH_DATATYPE.QUANTITY
      )
      .getPatchParameters();
    expect(JSON.parse(JSON.stringify(patchParameters)).parameter[0].part[2]).toEqual({
      name: 'value',
      valueQuantity: { value: 5, unit: 'mg' },
    });
  });

  it('should return a Parameters resource of any FHIR version', () => {
    const patchParameters = patchUtils
      .createDeleteParameters('Patient.active')
      .getPatchParameters();
    expectTypeOf(patchParameters.resourceType).toEqualTypeOf<'Parameters'>();
    const r4Parameters: fhirR4.Parameters = patchParameters;
    const r5Parameters: fhirR5.Parameters = patchParameters;
    expect(r4Parameters.parameter?.length).toBe(1);
    expect(r5Parameters.resourceType).toBe('Parameters');
    // @ts-expect-error a value property name must start with "value"
    patchUtils.createReplaceParameters('Patient.active', true, 'boolean');
  });
});
