import { describe, expect, it } from 'vitest';
import * as fhirR4Model from '../../FHIR-R4/model';
import * as fhirR5Model from '../../FHIR-R5/model';
import { FhirModelError, ValidationIssue } from './errors';

const {
  Bundle,
  CodeableConcept,
  Element,
  HumanName,
  Observation,
  Organization,
  Patient,
  Period,
  Quantity,
  Reference,
} = fhirR4Model;

function catchModelError(action: () => unknown): FhirModelError {
  try {
    action();
  } catch (caughtError) {
    if (caughtError instanceof FhirModelError) {
      return caughtError;
    }
    throw caughtError;
  }
  throw new Error('expected a FhirModelError but nothing was thrown');
}

function issueSummaries(validationIssues: ValidationIssue[]): string[] {
  return validationIssues.map(
    (validationIssue) => `${validationIssue.code} ${validationIssue.path}`
  );
}

describe('FHIR model classes', () => {
  describe('fluent accessors', () => {
    it('builds a resource with chained setters and adders', () => {
      const patient = new Patient().setId('patient-1').setActive(true).setGender('female');
      patient
        .addName()
        .setUse('official')
        .setFamily('Chalmers')
        .addGiven('Peter')
        .addGiven('James');
      patient.addIdentifier().setSystem('urn:oid:1.2.36.146.595.217.0.1').setValue('12345');
      patient.getMaritalStatus().addCoding().setCode('M');

      expect(patient.toJSON()).toEqual({
        resourceType: 'Patient',
        id: 'patient-1',
        identifier: [{ system: 'urn:oid:1.2.36.146.595.217.0.1', value: '12345' }],
        active: true,
        name: [{ use: 'official', family: 'Chalmers', given: ['Peter', 'James'] }],
        gender: 'female',
        maritalStatus: { coding: [{ code: 'M' }] },
      });
    });

    it('returns this from addX(value) and the new element from addX()', () => {
      const patient = new Patient();
      const existingName = new HumanName().setFamily('Windsor');
      expect(patient.addName(existingName)).toBe(patient);
      const createdName = patient.addName();
      expect(createdName).toEqual(expect.any(HumanName));
      expect(patient.getName()).toEqual([existingName, createdName]);
    });

    it('gives the first repetition, creating it when the list is empty', () => {
      const patient = new Patient();
      const firstName = patient.getNameFirstRep();
      expect(patient.getName().length).toBe(1);
      expect(patient.getNameFirstRep()).toBe(firstName);
    });

    it('reports presence with hasX and ignores elements that are empty', () => {
      const patient = new Patient();
      expect(patient.hasName()).toBe(false);
      expect(patient.hasBirthDate()).toBe(false);
      patient.getName();
      patient.addName();
      patient.getMaritalStatus();
      expect(patient.hasName()).toBe(false);
      expect(patient.hasMaritalStatus()).toBe(false);
      expect(patient.isEmpty()).toBe(true);
      expect(patient.toJSON()).toEqual({ resourceType: 'Patient' });
      patient.getNameFirstRep().setFamily('Curie');
      expect(patient.hasName()).toBe(true);
      expect(patient.isEmpty()).toBe(false);
    });

    it('clears a value when a setter is given undefined', () => {
      const patient = new Patient()
        .setBirthDate('1990-01-01')
        .setName([new HumanName().setText('A')]);
      patient.setBirthDate(undefined).setName(undefined);
      expect(patient.getBirthDate()).toBeUndefined();
      expect(patient.getName()).toEqual([]);
    });

    it('finds extensions by URL', () => {
      const patient = new Patient();
      patient.addExtension().setUrl('http://example.org/a').setValueString('first');
      patient.addExtension().setUrl('http://example.org/b').setValueBoolean(true);
      patient.addExtension().setUrl('http://example.org/a').setValueString('second');

      expect(patient.hasExtension()).toBe(true);
      expect(patient.hasExtension('http://example.org/b')).toBe(true);
      expect(patient.hasExtension('http://example.org/missing')).toBe(false);
      expect(patient.getExtensionByUrl('http://example.org/a')?.getValueString()).toBe('first');
      expect(patient.getExtensionsByUrl('http://example.org/a').length).toBe(2);
      expect(patient.getExtensionByUrl('http://example.org/missing')).toBeUndefined();
      expect(new HumanName().hasExtension()).toBe(false);
    });

    it('builds references to resources that have an id', () => {
      const organization = new Organization().setId('org-7');
      expect(Reference.to(organization).getReference()).toBe('Organization/org-7');
      expect(catchModelError(() => Reference.to(new Organization())).code).toBe('required');
    });

    it('identifies resources with type guards', () => {
      const resource: unknown = new Patient();
      expect(fhirR4Model.isPatient(resource)).toBe(true);
      expect(fhirR4Model.isObservation(resource)).toBe(false);
      expect(fhirR4Model.isPatient({ resourceType: 'Patient' })).toBe(false);
    });
  });

  describe('choice elements', () => {
    it('keeps only the type that was set last', () => {
      const observation = new Observation().setValueQuantity(
        new Quantity().setValue(6.3).setUnit('mmol/l')
      );
      expect(observation.hasValueQuantity()).toBe(true);
      observation.setValueString('high');

      expect(observation.hasValueQuantity()).toBe(false);
      expect(observation.getValueQuantity()).toBeUndefined();
      expect(observation.getValue()).toBe('high');
      expect(observation.hasValue()).toBe(true);
      expect(observation.toJSON() as object).toEqual({
        resourceType: 'Observation',
        valueString: 'high',
      });
    });

    it('has no value until one type is set', () => {
      const observation = new Observation();
      expect(observation.hasValue()).toBe(false);
      expect(observation.getValue()).toBeUndefined();
    });

    it('reports two types set by direct assignment', () => {
      const patient = new Patient();
      patient.deceasedBoolean = true;
      patient.deceasedDateTime = '2020-01-01';
      expect(issueSummaries(patient.validate())).toEqual([
        'choice-exclusivity Patient.deceased[x]',
      ]);
    });
  });

  describe('setter checks', () => {
    it('rejects a code outside a required value set', () => {
      const modelError = catchModelError(() => new Patient().setGender('robot' as never));
      expect(modelError.code).toBe('invalid-code');
      expect(modelError.path).toBe('Patient.gender');
      expect(modelError.message).toContain('female, male, other, unknown');
    });

    it('lists only the first codes of a large value set', () => {
      const modelError = catchModelError(() =>
        new fhirR4Model.SearchParameter().addBase('NotAResource' as never)
      );
      expect(modelError.code).toBe('invalid-code');
      expect(modelError.message).toMatch(/and \d+ more/);
    });

    it('rejects malformed primitives', () => {
      expect(catchModelError(() => new Patient().setBirthDate('01/02/1990')).code).toBe(
        'invalid-primitive'
      );
      expect(catchModelError(() => new Patient().setId('not a valid id')).code).toBe(
        'invalid-primitive'
      );
      expect(catchModelError(() => new Patient().setActive('yes' as never)).code).toBe(
        'invalid-primitive'
      );
      expect(catchModelError(() => new HumanName().addGiven('')).path).toBe('HumanName.given[0]');
    });

    it('rejects values that are not instances of the expected class', () => {
      const plainObjectError = catchModelError(() =>
        new Patient().addName({ family: 'x' } as never)
      );
      expect(plainObjectError.code).toBe('invalid-type');
      expect(plainObjectError.message).toContain('HumanName');
      expect(
        catchModelError(() => new Patient().setMaritalStatus(new Period() as never)).code
      ).toBe('invalid-type');
      expect(catchModelError(() => new Patient().setName(new HumanName() as never)).code).toBe(
        'invalid-type'
      );
      expect(catchModelError(() => new Patient().setName([new Period()] as never)).path).toBe(
        'Patient.name[0]'
      );
    });

    it('accepts any resource where the element holds a resource', () => {
      const patient = new Patient().addContained(new Organization().setId('org-1'));
      expect(patient.getContained().length).toBe(1);
      expect(catchModelError(() => patient.addContained(new HumanName() as never)).code).toBe(
        'invalid-type'
      );
    });

    it('rejects references to resource types the element does not allow', () => {
      const patient = new Patient();
      const referenceError = catchModelError(() =>
        patient.setManagingOrganization(new Reference().setReference('Practitioner/7'))
      );
      expect(referenceError.code).toBe('invalid-reference-target');
      expect(referenceError.message).toContain('Organization');
      expect(
        catchModelError(() => patient.addGeneralPractitioner(new Reference().setType('Patient')))
          .code
      ).toBe('invalid-reference-target');

      patient.setManagingOrganization(new Reference().setReference('Organization/1/_history/2'));
      patient.setManagingOrganization(
        new Reference().setReference('http://example.org/fhir/Organization/1')
      );
      patient.setManagingOrganization(
        new Reference().setReference('urn:uuid:c757873d-ec9a-4326-a141-556f43239520')
      );
      patient.setManagingOrganization(new Reference().setReference('#contained-organization'));
      patient.addGeneralPractitioner(new Reference().setReference('PractitionerRole/3'));
      expect(patient.isValid()).toBe(true);
    });
  });

  describe('JSON conversion', () => {
    const patientJson = {
      resourceType: 'Patient',
      id: 'example',
      meta: { versionId: '3', lastUpdated: '2024-05-01T10:00:00Z' },
      contained: [{ resourceType: 'Organization', id: 'org-1', name: 'Good Health Clinic' }],
      extension: [{ url: 'http://example.org/eye-colour', valueCode: 'brown' }],
      name: [
        {
          family: 'Everyman',
          given: ['Adam', 'A.'],
          _given: [
            null,
            { extension: [{ url: 'http://example.org/initial', valueBoolean: true }] },
          ],
        },
      ],
      birthDate: '1970-03-30',
      _birthDate: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-birthTime',
            valueDateTime: '1970-03-30T11:15:00-05:00',
          },
        ],
      },
      multipleBirthInteger: 2,
      managingOrganization: { reference: '#org-1' },
    };

    it('parses nested elements, contained resources and primitive extensions into classes', () => {
      const patient = Patient.fromJSON(patientJson);
      expect(patient.getNameFirstRep()).toEqual(expect.any(HumanName));
      expect(patient.getContained()[0]).toEqual(expect.any(Organization));
      expect(patient.getMeta().getVersionId()).toBe('3');
      expect(patient.getMultipleBirthInteger()).toBe(2);
      expect(patient.getBirthDateElement().getExtension()[0]?.getValueDateTime()).toBe(
        '1970-03-30T11:15:00-05:00'
      );
      expect(patient._birthDate).toEqual(expect.any(Element));
      expect(patient.getNameFirstRep()._given?.[0]).toBeNull();
      expect(patient.getNameFirstRep()._given?.[1]).toEqual(expect.any(Element));
    });

    it('serialises back to the same JSON', () => {
      expect(JSON.parse(JSON.stringify(Patient.fromJSON(patientJson)))).toEqual(patientJson);
    });

    it('sets and removes primitive extensions through the Element accessors', () => {
      const patient = new Patient();
      patient
        .getBirthDateElement()
        .addExtension()
        .setUrl('http://example.org/reason')
        .setValueCode('unknown');
      expect(patient.hasBirthDate()).toBe(true);
      expect(patient.toJSON() as object).toEqual({
        resourceType: 'Patient',
        _birthDate: { extension: [{ url: 'http://example.org/reason', valueCode: 'unknown' }] },
      });
      patient.setBirthDateElement(undefined);
      expect(patient.hasBirthDate()).toBe(false);
    });

    it('chooses the class from resourceType with parseResource', () => {
      const resource = fhirR4Model.parseResource({ resourceType: 'Organization', name: 'Clinic' });
      expect(resource).toEqual(expect.any(Organization));
      expect(resource.resourceType).toBe('Organization');
      expect(
        catchModelError(() => fhirR4Model.parseResource({ resourceType: 'Spaceship' })).code
      ).toBe('unknown-resource-type');
      expect(catchModelError(() => fhirR4Model.parseResource('Patient')).code).toBe(
        'unknown-resource-type'
      );
    });

    it('revives the resources of a Bundle', () => {
      const bundle = Bundle.fromJSON({
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          { resource: patientJson },
          { resource: { resourceType: 'Observation', status: 'final', code: { text: 'x' } } },
        ],
      });
      expect(bundle.getEntry().map((entry) => entry.getResource()?.resourceType)).toEqual([
        'Patient',
        'Observation',
      ]);
      expect(bundle.getEntryFirstRep().getResource()).toEqual(expect.any(Patient));
      expect(
        catchModelError(() =>
          Bundle.fromJSON({
            resourceType: 'Bundle',
            type: 'collection',
            entry: [{ resource: { resourceType: 'Nope' } }],
          })
        ).path
      ).toBe('Bundle.entry[0].resource.resourceType');
    });

    it('rejects JSON whose shape does not match the type', () => {
      const shapeProblems: [unknown, string, string][] = [
        [{ resourceType: 'Observation' }, 'invalid-type', 'Patient.resourceType'],
        [{ resourceType: 'Patient', name: { family: 'x' } }, 'invalid-type', 'Patient.name'],
        [{ resourceType: 'Patient', birthDate: ['1990'] }, 'invalid-type', 'Patient.birthDate'],
        [{ resourceType: 'Patient', active: 'true' }, 'invalid-type', 'Patient.active'],
        [
          { resourceType: 'Patient', name: [{ given: [5] }] },
          'invalid-type',
          'Patient.name[0].given[0]',
        ],
        [{ resourceType: 'Patient', name: ['x'] }, 'invalid-type', 'Patient.name[0]'],
        [{ resourceType: 'Patient', maritalStatus: [] }, 'invalid-type', 'Patient.maritalStatus'],
        [{ resourceType: 'Patient', _birthDate: [] }, 'invalid-type', 'Patient._birthDate'],
        [{ resourceType: 'Patient', nmae: [] }, 'unknown-property', 'Patient.nmae'],
        [[], 'invalid-type', 'Patient'],
        [null, 'invalid-type', 'Patient'],
      ];
      for (const [json, expectedCode, expectedPath] of shapeProblems) {
        const modelError = catchModelError(() => Patient.fromJSON(json));
        expect(modelError.code, JSON.stringify(json)).toBe(expectedCode as never);
        expect(modelError.path, JSON.stringify(json)).toBe(expectedPath);
      }
    });

    it('can drop unknown properties instead of throwing', () => {
      const patient = Patient.fromJSON(
        { resourceType: 'Patient', active: true, nmae: [], name: [{ familly: 'x', family: 'y' }] },
        { ignoreUnknownProperties: true }
      );
      expect(patient.toJSON() as object).toEqual({
        resourceType: 'Patient',
        active: true,
        name: [{ family: 'y' }],
      });
    });

    it('accepts invalid content unless validation is requested', () => {
      const invalidJson = { resourceType: 'Patient', gender: 'robot', birthDate: 'yesterday' };
      const patient = Patient.fromJSON(invalidJson);
      expect(patient.isValid()).toBe(false);
      const modelError = catchModelError(() => Patient.fromJSON(invalidJson, { validate: true }));
      expect(modelError.code).toBe('invalid-model');
      expect(modelError.message).toContain('2 validation error(s)');
      expect(issueSummaries([...modelError.validationIssues])).toEqual([
        'invalid-code Patient.gender',
        'invalid-primitive Patient.birthDate',
      ]);
    });

    it('treats JSON null as absent', () => {
      expect(
        Patient.fromJSON({ resourceType: 'Patient', active: null, name: null }).isEmpty()
      ).toBe(true);
    });

    it('copies deeply', () => {
      const original = Patient.fromJSON(patientJson);
      const duplicate = original.copy();
      expect(duplicate).toEqual(expect.any(Patient));
      expect(duplicate).not.toBe(original);
      expect(duplicate.toJSON()).toEqual(original.toJSON());
      duplicate.getNameFirstRep().setFamily('Changed');
      expect(original.getNameFirstRep().getFamily()).toBe('Everyman');
    });
  });

  describe('validate()', () => {
    it('reports nothing for a valid resource', () => {
      const observation = new Observation()
        .setStatus('final')
        .setCode(new CodeableConcept().setText('Glucose'));
      expect(observation.validate()).toEqual([]);
      expect(observation.isValid()).toBe(true);
      expect(() => observation.assertValid()).not.toThrow();
    });

    it('reports missing required elements, including inside backbone elements', () => {
      const patient = new Patient();
      patient.addCommunication().setPreferred(true);
      patient.addLink().setType('refer');
      expect(issueSummaries(new Observation().validate())).toEqual([
        'required Observation.status',
        'required Observation.code',
      ]);
      expect(issueSummaries(patient.validate())).toEqual([
        'required Patient.communication[0].language',
        'required Patient.link[0].other',
      ]);
      expect(() => patient.assertValid()).toThrowError(FhirModelError);
    });

    it('accepts a required primitive that is present only as an extension', () => {
      const observation = new Observation().setCode(new CodeableConcept().setText('Glucose'));
      observation
        .getStatusElement()
        .addExtension()
        .setUrl('http://hl7.org/fhir/StructureDefinition/data-absent-reason')
        .setValueCode('unknown');
      expect(observation.validate()).toEqual([]);
    });

    it('re-checks everything that was assigned directly', () => {
      const patient = new Patient();
      patient.gender = 'robot' as never;
      patient.birthDate = '1990-13-01';
      patient.name = [{ family: 'plain object' } as never, new HumanName().setFamily('ok')];
      patient.active = [true] as never;
      patient.telecom = new fhirR4Model.ContactPoint() as never;
      patient.managingOrganization = new Reference().setReference('Device/1');
      const elementWithEmptyId = new Element();
      elementWithEmptyId.id = '';
      patient._birthDate = elementWithEmptyId;
      (patient as unknown as Record<string, unknown>)['favouriteColour'] = 'blue';

      const validationIssues = patient.validate();
      expect(issueSummaries(validationIssues).sort()).toEqual(
        [
          'invalid-type Patient.active',
          'invalid-type Patient.telecom',
          'invalid-type Patient.name[0]',
          'invalid-code Patient.gender',
          'invalid-primitive Patient.birthDate',
          'invalid-primitive Patient._birthDate.id',
          'invalid-reference-target Patient.managingOrganization',
          'unknown-property Patient.favouriteColour',
        ].sort()
      );
      const unknownPropertyIssue = validationIssues.find(
        (validationIssue) => validationIssue.code === 'unknown-property'
      );
      expect(unknownPropertyIssue?.severity).toBe('warning');
      expect(patient.toJSON() as object).not.toEqual(
        expect.objectContaining({ favouriteColour: 'blue' })
      );
    });

    it('validates the elements of primitive extension lists', () => {
      const humanName = new HumanName().addGiven('Ada');
      const elementWithEmptyId = new Element();
      elementWithEmptyId.id = '';
      humanName._given = [elementWithEmptyId];
      expect(issueSummaries(humanName.validate())).toEqual([
        'invalid-primitive HumanName._given[0].id',
      ]);
    });

    it('descends into contained resources', () => {
      const patient = new Patient().addContained(new Observation());
      expect(issueSummaries(patient.validate())).toEqual([
        'required Patient.contained[0].status',
        'required Patient.contained[0].code',
      ]);
    });

    it('is only a warning-free pass when there are no errors', () => {
      const patient = new Patient();
      (patient as unknown as Record<string, unknown>)['extra'] = 1;
      expect(patient.validate().length).toBe(1);
      expect(patient.isValid()).toBe(true);
    });
  });

  describe('cardinality', () => {
    it('reports more repetitions than the maximum and fewer than the minimum', () => {
      const period = new Period();
      const limitedPeriodClass = class LimitedPeriod extends Period {
        static override readonly ownFields = [
          {
            elementName: 'note',
            minimum: 2,
            maximum: 3,
            isList: true,
            types: [{ jsonKey: 'note', typeCode: 'string' }],
          },
        ];
        note?: string[];
        addNote(note: string): this {
          return this.addFieldValue('note', note);
        }
        setNote(note: string[] | undefined): this {
          return this.setFieldValue('note', note);
        }
        clearUnknown(): this {
          return this.setFieldValue('doesNotExist', 1);
        }
        unknownChoice(): boolean {
          return this.hasChoiceValue('doesNotExist');
        }
      };
      const limitedPeriod = new limitedPeriodClass();
      expect(period.isEmpty()).toBe(true);
      expect(issueSummaries(limitedPeriod.validate())).toEqual(['required Period.note']);

      limitedPeriod.addNote('one');
      expect(issueSummaries(limitedPeriod.validate())).toEqual(['required Period.note']);
      limitedPeriod.addNote('two').addNote('three');
      expect(limitedPeriod.validate()).toEqual([]);

      expect(catchModelError(() => limitedPeriod.addNote('four')).code).toBe('max-cardinality');
      expect(catchModelError(() => limitedPeriod.setNote(['1', '2', '3', '4'])).code).toBe(
        'max-cardinality'
      );
      limitedPeriod.note = ['1', '2', '3', '4'];
      expect(issueSummaries(limitedPeriod.validate())).toEqual(['max-cardinality Period.note']);

      expect(catchModelError(() => limitedPeriod.clearUnknown()).code).toBe('unknown-field');
      expect(catchModelError(() => limitedPeriod.unknownChoice()).code).toBe('unknown-field');
    });
  });

  describe('FHIR R5', () => {
    it('offers the same API on the R5 classes', () => {
      const patient = new fhirR5Model.Patient().setId('r5-patient').setGender('other');
      patient.addName().setFamily('Lovelace').addGiven('Ada');
      patient
        .addLink()
        .setType('seealso')
        .setOther(new fhirR5Model.Reference().setReference('RelatedPerson/9'));
      expect(patient.validate()).toEqual([]);
      expect(JSON.parse(JSON.stringify(patient))).toEqual({
        resourceType: 'Patient',
        id: 'r5-patient',
        name: [{ family: 'Lovelace', given: ['Ada'] }],
        gender: 'other',
        link: [{ other: { reference: 'RelatedPerson/9' }, type: 'seealso' }],
      });
    });

    it('carries integer64 as a string and supports CodeableReference', () => {
      const extension = new fhirR5Model.Extension()
        .setUrl('http://example.org/count')
        .setValueInteger64('9007199254740993');
      expect(extension.toJSON() as object).toEqual({
        url: 'http://example.org/count',
        valueInteger64: '9007199254740993',
      });
      expect(catchModelError(() => extension.setValueInteger64(5 as never)).code).toBe(
        'invalid-primitive'
      );

      const medicationRequest = new fhirR5Model.MedicationRequest();
      medicationRequest.getMedication().getConcept().setText('Amoxicillin');
      expect(medicationRequest.toJSON() as object).toEqual({
        resourceType: 'MedicationRequest',
        medication: { concept: { text: 'Amoxicillin' } },
      });
    });

    it('keeps the two versions apart', () => {
      expect(
        catchModelError(() => new fhirR5Model.Patient().addName(new HumanName() as never)).code
      ).toBe('invalid-type');
      expect(fhirR5Model.modelTypeRegistry.fhirVersion).toBe('R5');
      expect(fhirR4Model.modelTypeRegistry.isResourceType('ActorDefinition')).toBe(false);
      expect(fhirR5Model.modelTypeRegistry.isResourceType('ActorDefinition')).toBe(true);
      expect(
        catchModelError(() => fhirR4Model.modelTypeRegistry.resolve('ActorDefinition')).code
      ).toBe('invalid-model');
      expect(fhirR4Model.modelTypeRegistry.isRegistered('Patient')).toBe(true);
      expect(fhirR4Model.modelTypeRegistry.getResourceTypeNames()).toContain('Patient');
    });
  });
});
