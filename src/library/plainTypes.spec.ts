import { describe, expect, expectTypeOf, it } from 'vitest';
import * as fhirR3Model from '../FHIR-R3/model';
import * as fhirR4Model from '../FHIR-R4/model';
import * as fhirR5Model from '../FHIR-R5/model';
import * as packageRoot from '../index';
import * as utilitiesEntryPoint from './index';
import { fhirR3, fhirR4, fhirR5, IfhirR4 } from '../index';

/**
 * The plain data types have no behaviour, so much of what matters is what
 * compiles. The test run type-checks this file (see `typecheck` in
 * vitest.config.ts), so the `expectTypeOf` assertions and `@ts-expect-error`
 * lines below fail the run when a type changes.
 */
describe('plain FHIR data types', () => {
  it('types coded elements with the codes of their required value set', () => {
    const patient: fhirR4.Patient = {
      resourceType: 'Patient',
      gender: fhirR4.Patient.GenderEnum.Female,
      name: [{ use: 'official', family: 'Chalmers', given: ['Peter'] }],
    };
    const r5Patient: fhirR5.Patient = { resourceType: 'Patient', gender: 'other' };
    const r3Patient: fhirR3.Patient = { resourceType: 'Patient', gender: 'male' };

    expect(patient.gender).toBe('female');
    expect(fhirR5.Patient.GenderEnum.Other).toBe(r5Patient.gender as string);
    expect(fhirR3.Patient.GenderEnum.Male).toBe(r3Patient.gender as string);
    expect(fhirR4.Quantity.ComparatorEnum.LessThanOrEqualTo).toBe('<=');
  });

  it('narrows the resource union by resourceType', () => {
    const describeResource = (resource: fhirR4.Resource): string => {
      if (resource.resourceType === 'Observation') {
        return `Observation ${resource.status ?? 'without status'}`;
      }
      if (resource.resourceType === 'Basic') {
        return `Basic ${resource.code.text ?? ''}`;
      }
      return resource.resourceType;
    };
    const resourceTypeName: fhirR4.ResourceList = 'Patient';
    const r5Resource: fhirR5.ResourceList = {
      resourceType: 'List',
      status: 'current',
      mode: 'working',
    };

    expect(
      describeResource({ resourceType: 'Observation', status: 'final', code: { text: 'Glucose' } })
    ).toBe('Observation final');
    expect(describeResource({ resourceType: 'Basic', code: { text: 'note' } })).toBe('Basic note');
    expect(describeResource({ resourceType: resourceTypeName })).toBe('Patient');
    expect(r5Resource.resourceType).toBe('List');
  });

  it('uses the FHIR JSON names for elements that are reserved words', () => {
    const taskPerformer: fhirR5.TaskPerformer = {
      function: { text: 'reviewer' },
      actor: { reference: 'Practitioner/1' },
    };
    const structureMap: Partial<fhirR4.StructureMap> = {
      import: ['http://example.org/StructureMap/other'],
    };

    expect(taskPerformer.function?.text).toBe('reviewer');
    expect(structureMap.import?.length).toBe(1);
  });

  it('has a property for the id and extensions of every primitive', () => {
    const patient: fhirR4.Patient = {
      resourceType: 'Patient',
      _birthDate: { extension: [{ url: 'http://example.org/reason', valueCode: 'unknown' }] },
      name: [{ given: ['Ada', 'A.'], _given: [null, { id: 'initial' }] }],
    };
    expect(patient._birthDate?.extension?.length).toBe(1);
  });

  it('accepts a JavaScript Date or a string for R4 dates', () => {
    const lastUpdated = new Date('2024-05-01T10:00:00Z');
    const composition: Partial<fhirR4.Composition> = { date: lastUpdated };
    const patient: IfhirR4.IPatient = {
      resourceType: 'Patient',
      birthDate: '1974-12-25',
      deceasedDateTime: lastUpdated,
      meta: { lastUpdated },
    };
    const r5Patient: fhirR5.Patient = { resourceType: 'Patient', birthDate: '1974-12-25' };

    expect(JSON.parse(JSON.stringify(patient)).meta.lastUpdated).toBe('2024-05-01T10:00:00.000Z');
    expect(composition.date).toBe(lastUpdated);
    expect(typeof r5Patient.birthDate).toBe('string');
  });

  it('keeps the R4 interfaces and classes interchangeable', () => {
    const patientInterface: IfhirR4.IPatient = { resourceType: 'Patient', gender: 'unknown' };
    const patientClass: fhirR4.Patient = patientInterface;
    const genderFromInterfacesBarrel: IfhirR4.Patient.GenderEnum =
      IfhirR4.Patient.GenderEnum.Unknown;

    expect(patientClass.gender).toBe(genderFromInterfacesBarrel);
    expect(new fhirR4.Patient()).toEqual(expect.any(fhirR4.Patient));
    expect(new fhirR3.Patient()).toEqual(expect.any(fhirR3.Patient));
  });

  it('accepts the JSON of the model classes of the same version', () => {
    const r3Json: fhirR3.Patient = new fhirR3Model.Patient().setGender('female').toJSON();
    const r4Json: fhirR4.BundleRequest = new fhirR4Model.BundleEntryRequest()
      .setMethod('GET')
      .setUrl('Patient')
      .toJSON();
    const r5Json: fhirR5.Observation = new fhirR5Model.Observation().setStatus('final').toJSON();

    expect(r3Json).toEqual({ resourceType: 'Patient', gender: 'female' });
    expect(r4Json).toEqual({ method: 'GET', url: 'Patient' });
    expect(r5Json.status).toBe('final');
  });
});

describe('plain FHIR data types, at the type level', () => {
  it('types resourceType as the literal name of the resource', () => {
    expectTypeOf<fhirR4.Patient['resourceType']>().toEqualTypeOf<'Patient'>();
    expectTypeOf<fhirR3.Basic['resourceType']>().toEqualTypeOf<'Basic'>();
    expectTypeOf<IfhirR4.IObservation['resourceType']>().toEqualTypeOf<'Observation'>();
    expectTypeOf<fhirR5.Bundle['resourceType']>().toEqualTypeOf<'Bundle'>();
  });

  it('extracts one resource type from the union by its resourceType', () => {
    expectTypeOf<
      Extract<fhirR4.Resource, { resourceType: 'CarePlan' }>
    >().toEqualTypeOf<fhirR4.CarePlan>();
    expectTypeOf<
      Extract<fhirR5.ResourceList, { resourceType: 'List' }>
    >().toEqualTypeOf<fhirR5.List>();
    expectTypeOf<
      Extract<fhirR3.Resource, { resourceType: 'Patient' }>
    >().toEqualTypeOf<fhirR3.Patient>();
  });

  it('limits coded elements to the codes of their required value set', () => {
    type AdministrativeGender = 'male' | 'female' | 'other' | 'unknown';
    expectTypeOf<fhirR3.Patient['gender']>().toEqualTypeOf<AdministrativeGender | undefined>();
    expectTypeOf<fhirR4.Patient['gender']>().toEqualTypeOf<AdministrativeGender | undefined>();
    expectTypeOf<fhirR5.Patient['gender']>().toEqualTypeOf<AdministrativeGender | undefined>();

    // @ts-expect-error 'robot' is not an administrative gender
    const invalidPatient: fhirR4.Patient = { resourceType: 'Patient', gender: 'robot' };
    expect(invalidPatient.resourceType).toBe('Patient');
  });

  it('accepts a JavaScript Date for dates in R4 only', () => {
    expectTypeOf<fhirR4.Patient['birthDate']>().toEqualTypeOf<Date | string | undefined>();
    expectTypeOf<fhirR4.Meta['lastUpdated']>().toEqualTypeOf<Date | string | undefined>();
    expectTypeOf<fhirR3.Patient['birthDate']>().toEqualTypeOf<string | undefined>();
    expectTypeOf<fhirR5.Patient['birthDate']>().toEqualTypeOf<string | undefined>();
  });

  it('requires complex elements FHIR requires and leaves required primitives optional', () => {
    expectTypeOf<fhirR4.Basic['code']>().toEqualTypeOf<fhirR4.CodeableConcept>();
    expectTypeOf<fhirR4.Observation['status']>().toEqualTypeOf<
      fhirR4.Observation.StatusEnum | undefined
    >();
    expectTypeOf<fhirR4.Patient['_birthDate']>().toEqualTypeOf<fhirR4.Element | undefined>();
    expectTypeOf<fhirR4.HumanName['_given']>().toEqualTypeOf<
      Array<fhirR4.Element | null> | undefined
    >();
  });

  it('types the JSON of a model class as the data type of the same resource', () => {
    expectTypeOf(new fhirR3Model.Patient().toJSON()).toEqualTypeOf<fhirR3.Patient>();
    expectTypeOf(new fhirR4Model.Patient().toJSON()).toEqualTypeOf<fhirR4.Patient>();
    expectTypeOf(
      new fhirR4Model.BundleEntryRequest().toJSON()
    ).toEqualTypeOf<fhirR4.BundleRequest>();
    expectTypeOf(new fhirR5Model.Patient().toJSON()).toEqualTypeOf<fhirR5.Patient>();
    expectTypeOf<IfhirR4.IPatient>().toExtend<fhirR4.Patient>();
    expectTypeOf<fhirR4.Patient>().toExtend<IfhirR4.IPatient>();
  });

  it('types model setters with the codes of the required value set', () => {
    expectTypeOf(new fhirR4Model.Patient().setGender)
      .parameter(0)
      .toEqualTypeOf<fhirR4Model.valueSetCodes.AdministrativeGender | undefined>();
    expectTypeOf(new fhirR4Model.Patient().getName()).toEqualTypeOf<fhirR4Model.HumanName[]>();
    expectTypeOf(new fhirR4Model.Patient().addName()).toEqualTypeOf<fhirR4Model.HumanName>();
    expectTypeOf(
      new fhirR4Model.Patient().getMaritalStatus()
    ).toEqualTypeOf<fhirR4Model.CodeableConcept>();
    expectTypeOf(new fhirR4Model.Observation().getValueQuantity()).toEqualTypeOf<
      fhirR4Model.Quantity | undefined
    >();
  });
});

describe('package root', () => {
  it('does not load the model classes, which have their own entry points', () => {
    const modelExportNames = Object.keys(packageRoot).filter((exportName) =>
      exportName.endsWith('Model')
    );
    expect(modelExportNames).toEqual([]);
    expect(packageRoot.FhirModelError).toBe(fhirR4Model.FhirModelError);
  });

  it('offers the utilities on their own', () => {
    expect(Object.keys(utilitiesEntryPoint).sort()).toEqual([
      'BundleUtils',
      'FhirModelError',
      'PatchUtils',
      'QueryBuilder',
      'ResourceUtils',
      'fhirtsConstants',
    ]);
    expect(utilitiesEntryPoint.QueryBuilder).toBe(packageRoot.QueryBuilder);
    expect(utilitiesEntryPoint.FhirModelError).toBe(packageRoot.FhirModelError);
  });
});

describe('FHIR R3 model classes', () => {
  const { Patient, Reference, Observation, Quantity } = fhirR3Model;

  it('offers the fluent API and checks on STU3 resources', () => {
    const patient = new Patient()
      .setId('stu3-patient')
      .setGender('male')
      .setBirthDate('1970-01-01');
    patient.addName().setFamily('Everyman').addGiven('Adam');
    patient.addGeneralPractitioner(new Reference().setReference('Practitioner/7'));

    expect(patient.validate()).toEqual([]);
    expect(JSON.parse(JSON.stringify(patient))).toEqual({
      resourceType: 'Patient',
      id: 'stu3-patient',
      name: [{ family: 'Everyman', given: ['Adam'] }],
      gender: 'male',
      birthDate: '1970-01-01',
      generalPractitioner: [{ reference: 'Practitioner/7' }],
    });
    expect(() => patient.setGender('robot' as never)).toThrowError(/not in the required value set/);
    expect(() =>
      patient.addGeneralPractitioner(new Reference().setReference('Device/1'))
    ).toThrowError(
      /a reference to Device is not allowed here \(allowed: Organization, Practitioner\)/
    );
  });

  it('parses STU3 JSON and validates it', () => {
    const observation = Observation.fromJSON({
      resourceType: 'Observation',
      code: { text: 'Glucose' },
      valueQuantity: { value: 6.3, unit: 'mmol/l' },
    });
    expect(observation.getValueQuantity()).toEqual(expect.any(Quantity));
    expect(observation.validate().map((validationIssue) => validationIssue.path)).toEqual([
      'Observation.status',
    ]);
    expect(fhirR3Model.parseResource({ resourceType: 'Patient' })).toEqual(expect.any(Patient));
  });
});
