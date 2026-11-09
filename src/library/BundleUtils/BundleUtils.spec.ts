import { describe, expect, expectTypeOf, it } from 'vitest';
import { BundleUtils } from './BundleUtils';
import type * as fhirR4 from '../../FHIR-R4/classes/models-r4';
import type * as fhirR5 from '../../FHIR-R5/models';
import * as fhirR4Model from '../../FHIR-R4/model';

const inputPayload = require('./../../test-resources/Bundle-R4.json');
describe('BundleUtils', () => {
  const bundleUtils = new BundleUtils();

  describe('#getResources()', () => {
    it('should return empty array if null is passed as bundle entries', () => {
      // execute
      const actual = bundleUtils.getResources(null, 'Patient');
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return empty array if invalid resourceType is passed', () => {
      // execute
      const actual = bundleUtils.getResources(inputPayload.entry, 'patient');
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return all matches array', () => {
      // execute
      const actual = bundleUtils.getResources(inputPayload.entry, 'Claim');
      // validate
      expect(actual.length).toEqual(27);
    });
  });

  describe('#getResource()', () => {
    it('should return null if null is passed as bundle entries', () => {
      // execute
      const actual = bundleUtils.getResource(null, '123');
      // validate
      expect(actual).toBeNull();
    });

    it('should return undefined if resourceId is not found', () => {
      // execute
      const actual = bundleUtils.getResource(inputPayload.entry, '123');
      // validate
      expect(actual).toBeUndefined();
    });

    it('should return resource if resource is found', () => {
      // execute
      const actual = bundleUtils.getResource(
        inputPayload.entry,
        'ec0bb1b3-b229-36cf-7e34-3f5fec9d3afe'
      );
      // validate
      expect(actual).not.toBeUndefined();
    });
  });

  describe('#getResourceByFullUrl()', () => {
    it('should return null if null is passed as bundle entries', () => {
      // execute
      const actual = bundleUtils.getResourceByFullUrl(null, '123');
      // validate
      expect(actual).toBeNull();
    });

    it('should return undefined if fullUrl is not found', () => {
      // execute
      const actual = bundleUtils.getResourceByFullUrl(inputPayload.entry, '123');
      // validate
      expect(actual).toBeUndefined();
    });

    it('should return resource if resource is found', () => {
      // execute
      const actual = bundleUtils.getResourceByFullUrl(
        inputPayload.entry,
        'urn:uuid:7c52dd91-73f8-83e1-cab2-2ffdd7a34601'
      );
      // validate
      expect(actual).not.toBeUndefined();
    });
  });

  describe('entries without a resource', () => {
    const responseEntries = [
      { fullUrl: 'urn:uuid:1', response: { status: '201 Created' } },
      { fullUrl: 'urn:uuid:2', resource: { resourceType: 'Patient', id: 'patient-1' } },
      { resource: { resourceType: 'Observation', id: 'observation-1' } },
    ];

    it('should skip them when filtering by resource type', () => {
      expect(bundleUtils.getResources(responseEntries, 'Patient')).toEqual([
        { resourceType: 'Patient', id: 'patient-1' },
      ]);
      expect(bundleUtils.getResources([], 'Patient')).toEqual([]);
      expect(bundleUtils.getResources(undefined, 'Patient')).toEqual([]);
    });

    it('should skip them when looking up by id or full URL', () => {
      expect(bundleUtils.getResource(responseEntries, 'observation-1')).toEqual({
        resourceType: 'Observation',
        id: 'observation-1',
      });
      expect(bundleUtils.getResourceByFullUrl(responseEntries, 'urn:uuid:1')).toBeUndefined();
      expect(bundleUtils.getResourceByFullUrl(responseEntries, 'urn:uuid:2')).toEqual({
        resourceType: 'Patient',
        id: 'patient-1',
      });
    });
  });

  describe('types', () => {
    const r4Bundle: fhirR4.Bundle = {
      resourceType: 'Bundle',
      type: 'collection',
      entry: [
        {
          fullUrl: 'urn:uuid:1',
          resource: { resourceType: 'Patient', id: 'patient-1', gender: 'other' },
        },
        {
          fullUrl: 'urn:uuid:2',
          resource: { resourceType: 'Claim', id: 'claim-1' } as fhirR4.Claim,
        },
      ],
    };

    it('should type the result from the resource type name', () => {
      const patients = bundleUtils.getResources(r4Bundle.entry, 'Patient');
      expectTypeOf(patients).toEqualTypeOf<fhirR4.Patient[]>();
      expectTypeOf(bundleUtils.getResources(r4Bundle.entry, 'Claim')).toEqualTypeOf<
        fhirR4.Claim[]
      >();
      expect(patients.map((patient) => patient.gender)).toEqual(['other']);

      const r5Entries: fhirR5.BundleEntry[] = [];
      expectTypeOf(bundleUtils.getResources(r5Entries, 'Observation')).toEqualTypeOf<
        fhirR5.Observation[]
      >();

      // A name that is not a resource type of the entries loses the typing instead of guessing one.
      expectTypeOf(bundleUtils.getResources(r4Bundle.entry, 'Pateint')).toEqualTypeOf<unknown[]>();
      expect(bundleUtils.getResources(r4Bundle.entry, 'Pateint')).toEqual([]);
    });

    it('should type single lookups as any resource of the bundle', () => {
      expectTypeOf(bundleUtils.getResource(r4Bundle.entry, 'claim-1')).toEqualTypeOf<
        fhirR4.Resource | null | undefined
      >();
      expectTypeOf(bundleUtils.getResourceByFullUrl(r4Bundle.entry, 'urn:uuid:1')).toEqualTypeOf<
        fhirR4.Resource | null | undefined
      >();
      expect(bundleUtils.getResource(r4Bundle.entry, 'claim-1')?.resourceType).toBe('Claim');
    });

    it('should still accept a result type named by the caller', () => {
      const untypedEntries: { resource?: unknown }[] = inputPayload.entry;
      expectTypeOf(
        bundleUtils.getResources<fhirR4.Patient>(untypedEntries, 'Patient')
      ).toEqualTypeOf<fhirR4.Patient[]>();
      expectTypeOf(
        bundleUtils.getResource<fhirR4.Patient>(r4Bundle.entry, 'patient-1')
      ).toEqualTypeOf<fhirR4.Patient | null | undefined>();
      expect(
        bundleUtils.getResources<fhirR4.Patient>(untypedEntries, 'Patient').length
      ).toBeGreaterThan(0);
    });

    it('should work on the entries of a model class bundle', () => {
      const bundle = new fhirR4Model.Bundle().setType('collection');
      bundle
        .addEntry()
        .setFullUrl('urn:uuid:1')
        .setResource(new fhirR4Model.Patient().setId('patient-1'));
      bundle.addEntry().setFullUrl('urn:uuid:2');

      const patients = bundleUtils.getResources(bundle.getEntry(), 'Patient');
      expectTypeOf(patients).toEqualTypeOf<fhirR4Model.Resource[]>();
      expect(patients.length).toBe(1);
      expect(patients[0]).toEqual(expect.any(fhirR4Model.Patient));
      expect(bundleUtils.getResource(bundle.getEntry(), 'patient-1')).toBe(patients[0]);
    });
  });
});
