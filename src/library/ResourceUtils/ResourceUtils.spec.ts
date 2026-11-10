import { describe, expect, expectTypeOf, it } from 'vitest';
import { ResourceUtils } from './ResourceUtils';
import type { Coding, Extension, Identifier, Patient } from '../../FHIR-R4/classes/models-r4';
import * as fhirR4Model from '../../FHIR-R4/model';

const patientPayload = require('./../../test-resources/Patient-R4.json');
const careTeamPayload = require('./../../test-resources/CareTeam-R4.json');
const careTeamContainedPayload = require('./../../test-resources/CareTeam-R4-contained.json');
describe('ResourceUtils', () => {
  const resourceUtils = new ResourceUtils();

  describe('#getResourceProperty()', () => {
    it('should return property if property exists in valid inputJson', () => {
      // execute
      const actual = resourceUtils.getResourceProperty(patientPayload, 'deceasedBoolean');
      // validate
      expect(actual).toBe(false);
    });

    it('should return null if property exists in valid inputJson', () => {
      // execute
      const actual = resourceUtils.getResourceProperty(patientPayload, 'abcd');
      // validate
      expect(actual).toBeNull();
    });

    it('should return null if invalid inputJson is passed', () => {
      // setup
      const inputPayload = [1, 2];
      // execute
      const actual = resourceUtils.getResourceProperty(inputPayload, 'deceasedBoolean');
      // validate
      expect(actual).toBeNull();
    });
  });

  describe('#getIdentifiersByProperty()', () => {
    const identifierList: Identifier[] = [
      {
        use: 'temp',
        system: 'http://hl7.org/fhir/sid/us-ssn',
        value: 'abc',
      },
      {
        use: 'usual',
        system: 'http://ns.electronichealth.net.au/id/hi/ihi/1.0',
        value: 'abc',
      },
    ];

    it('should return empty array if null is passed as identifier list', () => {
      // setup
      const value = 'shouldBeIgnored';
      // execute
      const actual = resourceUtils.getIdentifiersByProperty(null, 'id', value);
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return empty array if property not found', () => {
      // setup
      const value = 'abc';
      // execute
      const actual = resourceUtils.getIdentifiersByProperty(
        identifierList,
        // @ts-expect-error only primitive elements of Identifier can be compared
        'extension',
        value
      );
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return empty array if no matches found', () => {
      // setup
      const systemUrl = 'http://somesystem.com';
      // execute
      const actual = resourceUtils.getIdentifiersByProperty(identifierList, 'system', systemUrl);
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return array with all matches', () => {
      // setup
      const value = 'abc';
      // execute
      const actual = resourceUtils.getIdentifiersByProperty(identifierList, 'value', value);
      // validate
      expect(actual.length).toEqual(2);
    });
  });

  describe('#getExtensionsByUrl()', () => {
    const extensionList: Extension[] = [
      {
        url: 'http://hl7.org/fhir/sid/us-ssn',
        valueBoolean: true,
      },
      {
        url: 'http://ns.electronichealth.net.au/id/hi/ihi/1.0',
        valueString: 'abc',
      },
    ];

    it('should return empty array if null is passed as extension list', () => {
      // execute
      const actual = resourceUtils.getExtensionsByUrl(null, 'url');
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return empty array if invalid extension array passed', () => {
      // setup
      const extensionListInvalid = [
        {
          use: 'temp',
          system: 'http://hl7.org/fhir/sid/us-ssn',
          value: 'abc',
        },
      ] as unknown as Extension[]; // not extensions at all
      const url = 'http://ns.electronichealth.net.au/id/hi/ihi/1.0';
      // execute
      const actual = resourceUtils.getExtensionsByUrl(extensionListInvalid, url);
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return empty array if no matches found', () => {
      // setup
      const url = 'http://somesystem.com';
      // execute
      const actual = resourceUtils.getExtensionsByUrl(extensionList, url);
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return array with all matches', () => {
      // setup
      const url = 'http://ns.electronichealth.net.au/id/hi/ihi/1.0';
      // execute
      const actual = resourceUtils.getExtensionsByUrl(extensionList, url);
      // validate
      expect(actual.length).toEqual(1);
    });
  });

  describe('#getCodingsByProperty()', () => {
    const codingList: Coding[] = [
      {
        version: '1.0',
        system: 'http://hl7.org/fhir/sid/us-ssn',
        code: 'abc',
        display: 'abc',
        userSelected: false,
      },
      {
        version: '1.1',
        system: 'http://ns.electronichealth.net.au/id/hi/ihi/1.0',
        code: 'abc',
        display: 'abc',
      },
    ];

    it('should return empty array if null is passed as coding list', () => {
      // setup
      const value = 'shouldBeIgnored';
      // execute
      const actual = resourceUtils.getCodingsByProperty(null, 'display', value);
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return empty array if property not found', () => {
      // setup
      const value = 'abc';
      // execute
      const actual = resourceUtils.getCodingsByProperty(
        codingList,
        'id', // expect no ID in codingList
        value
      );
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return empty array if no matches found', () => {
      // setup
      const systemUrl = 'http://somesystem.com';
      // execute
      const actual = resourceUtils.getCodingsByProperty(codingList, 'system', systemUrl);
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return array with all matches for string values', () => {
      // setup
      const value = 'abc';
      // execute
      const actual = resourceUtils.getCodingsByProperty(codingList, 'code', value);
      // validate
      expect(actual.length).toEqual(2);
    });

    it('should return array with all matches for boolean values', () => {
      // setup
      const value = false;
      // execute
      const actual = resourceUtils.getCodingsByProperty(codingList, 'userSelected', value);
      // validate
      expect(actual.length).toEqual(1);
    });
  });

  describe('#getValuesAtResourcePath()', () => {
    it('should return empty array if the root of the path path does not match the resource type', () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(
        patientPayload,
        'Practitioner.name.given'
      );
      // validate
      expect(pathValues.length).toEqual(0);
    });

    it('should return array with values if path exists for a top level element', () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(patientPayload, 'Patient.gender');
      // validate
      expect(pathValues.length).toEqual(1);
      expect(pathValues[0]).toEqual('male');
    });

    it('should return array with values if path exists for a top level element and is an object', () => {
      const expected = [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
              code: 'M',
              display: 'Married',
            },
          ],
          text: 'Getrouwd',
        },
      ];
      // execute
      const actual = resourceUtils.getValuesAtResourcePath(patientPayload, 'Patient.maritalStatus');
      // validate
      expect(actual.length).toEqual(1);
      expect(actual).toEqual(expected);
    });

    it('should return array with values if path exists for a top level element and is an array', () => {
      // setup
      const expected = [
        {
          use: 'usual',
          family: 'van de Heuvel',
          given: ['Pieter', 'Peter'],
          suffix: ['MSc'],
        },
        {
          use: 'usual',
          family: 'van de Heuvel',
          given: ['Pieter'],
          suffix: ['MSc'],
        },
      ];
      // execute
      const actual = resourceUtils.getValuesAtResourcePath(patientPayload, 'Patient.name');
      // validate
      expect(actual.length).toEqual(2);
      expect(actual).toEqual(expected);
    });

    it('should return array with values for a array under object', () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(
        patientPayload,
        'Patient.name.given'
      );
      // validate
      expect(pathValues.length).toEqual(3);
      expect(pathValues[0]).toEqual('Pieter');
      expect(pathValues[1]).toEqual('Peter');
      expect(pathValues[2]).toEqual('Pieter');
    });

    it('should return array with values if path exists for a deep array element', () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(
        patientPayload,
        'Patient.contact.relationship.coding.system'
      );
      // validate
      expect(pathValues.length).toEqual(2);
      expect(pathValues[0]).toEqual('http://terminology.hl7.org/CodeSystem/v2-0131');
      expect(pathValues[1]).toEqual('http://terminology.hl7.org/CodeSystem/v2-0132');
    });

    it('should return array with values if path exists for a deep json element', () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(
        patientPayload,
        'Patient.maritalStatus.coding.system'
      );
      // validate
      expect(pathValues.length).toEqual(1);
      expect(pathValues[0]).toEqual('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus');
    });

    it('should return empty array if path does not exist', () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(
        patientPayload,
        'Patient.contact.relationship.coding.abcd'
      );
      // validate
      expect(pathValues.length).toEqual(0);
    });
  });

  describe('#getAllResourceReferences()', () => {
    it('should return array of all references in a resource when references found', () => {
      // execute
      const actual = resourceUtils.getAllReferencesFromResource(careTeamPayload);
      // validate
      expect(actual.length).toEqual(6);
    });

    it('should return empty array if references in a resource not found', () => {
      // setup
      const input = {
        resourceType: 'Patient',
      };
      // execute
      const actual = resourceUtils.getAllReferencesFromResource(input);
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return the reference of a contained resource', () => {
      // execute
      const actual = resourceUtils.getAllReferencesFromResource(
        careTeamContainedPayload.contained[0]
      );
      // validate
      expect(actual).toEqual(['CarePlan/123']);
    });

    it('should return each reference exactly as written, in document order', () => {
      // setup
      const input = {
        resourceType: 'Observation',
        subject: { reference: 'Patient/123', display: 'the "reference": of the subject' },
        performer: [{ reference: 'Practitioner/7' }, { reference: 'urn:uuid:9f2c' }],
        contained: [{ resourceType: 'Specimen', subject: { reference: '#patient-1' } }],
        hasMember: [{ identifier: { value: 'no literal reference' } }],
      };
      // execute
      const actual = resourceUtils.getAllReferencesFromResource(input);
      // validate
      expect(actual).toEqual(['Patient/123', 'Practitioner/7', 'urn:uuid:9f2c', '#patient-1']);
    });

    it('should return empty array for a missing resource', () => {
      expect(resourceUtils.getAllReferencesFromResource(undefined)).toEqual([]);
      expect(resourceUtils.getAllReferencesFromResource(null)).toEqual([]);
    });

    it('should read references from a model class instance', () => {
      // setup
      const patient = new fhirR4Model.Patient();
      patient.getManagingOrganization().setReference('Organization/1');
      patient.addGeneralPractitioner().setReference('Practitioner/2');
      // execute
      const actual = resourceUtils.getAllReferencesFromResource(patient);
      // validate
      expect(actual).toEqual(['Practitioner/2', 'Organization/1']);
    });
  });

  describe('values that are false or zero', () => {
    it('should return false and 0 at a path instead of dropping them', () => {
      const observation = {
        resourceType: 'Observation',
        valueBoolean: false,
        valueInteger: 0,
        component: [{ valueInteger: 0 }, { valueInteger: 12 }, { valueBoolean: false }],
      };
      expect(
        resourceUtils.getValuesAtResourcePath(observation, 'Observation.valueBoolean')
      ).toEqual([false]);
      expect(
        resourceUtils.getValuesAtResourcePath(observation, 'Observation.valueInteger')
      ).toEqual([0]);
      expect(
        resourceUtils.getValuesAtResourcePath(observation, 'Observation.component.valueInteger')
      ).toEqual([0, 12]);
      expect(
        resourceUtils.getValuesAtResourcePath(observation, 'Observation.component.valueBoolean')
      ).toEqual([false]);
    });

    it('should return numbers held in an array', () => {
      const sampledData = {
        resourceType: 'Basic',
        extension: [{ valueSampledData: { dimensions: 2, offsets: [0, 5, 10] } }],
      };
      expect(
        resourceUtils.getValuesAtResourcePath<number>(
          sampledData,
          'Basic.extension.valueSampledData.offsets'
        )
      ).toEqual([0, 5, 10]);
    });

    it('should return nothing when the path continues past a primitive', () => {
      expect(resourceUtils.getValuesAtResourcePath(patientPayload, 'Patient.gender.code')).toEqual(
        []
      );
    });

    it('should read a path from a model class instance', () => {
      const patient = new fhirR4Model.Patient().setActive(false);
      patient.addName().addGiven('Peter').addGiven('James');
      expect(resourceUtils.getValuesAtResourcePath(patient, 'Patient.name.given')).toEqual([
        'Peter',
        'James',
      ]);
      expect(resourceUtils.getValuesAtResourcePath(patient, 'Patient.active')).toEqual([false]);
    });
  });

  describe('types', () => {
    const typedPatient: Patient = { resourceType: 'Patient', gender: 'female', active: true };

    it('should type a top level property from the resource type', () => {
      expectTypeOf(resourceUtils.getResourceProperty(typedPatient, 'gender')).toEqualTypeOf<
        Patient['gender'] | null
      >();
      expectTypeOf(
        resourceUtils.getResourceProperty(typedPatient, 'notAnElement')
      ).toEqualTypeOf<unknown>();
      expect(resourceUtils.getResourceProperty(typedPatient, 'gender')).toBe('female');
    });

    it('should return the type of the list it was given', () => {
      const identifiers: Identifier[] = [{ system: 'urn:example', value: '1' }];
      const codings: Coding[] = [{ code: 'M', userSelected: true }];
      const extensions: Extension[] = [{ url: 'http://example.org/a' }];
      expectTypeOf(resourceUtils.getIdentifiersByProperty(identifiers, 'value', '1')).toEqualTypeOf<
        Identifier[]
      >();
      expectTypeOf(resourceUtils.getCodingsByProperty(codings, 'userSelected', true)).toEqualTypeOf<
        Coding[]
      >();
      expectTypeOf(
        resourceUtils.getExtensionsByUrl(extensions, 'http://example.org/a')
      ).toEqualTypeOf<Extension[]>();
      expectTypeOf(
        resourceUtils.getValuesAtResourcePath(typedPatient, 'Patient.gender')
      ).toEqualTypeOf<unknown[]>();
      expectTypeOf(
        resourceUtils.getValuesAtResourcePath<string>(typedPatient, 'Patient.gender')
      ).toEqualTypeOf<string[]>();
      expect(resourceUtils.getCodingsByProperty(codings, 'userSelected', true)).toEqual(codings);
    });

    it('should filter lists of model class instances', () => {
      const patient = new fhirR4Model.Patient();
      patient.addIdentifier().setSystem('urn:example').setValue('1');
      patient.addIdentifier().setSystem('urn:other').setValue('2');
      const matches = resourceUtils.getIdentifiersByProperty(
        patient.getIdentifier(),
        'system',
        'urn:other'
      );
      expectTypeOf(matches).toEqualTypeOf<fhirR4Model.Identifier[]>();
      expect(matches.map((identifier) => identifier.getValue())).toEqual(['2']);
    });
  });
});
