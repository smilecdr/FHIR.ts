/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Range } from './range';

/**
 * A populatioof people with some set of grouping criteria.
 */
export class Population extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'age',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'ageRange', typeCode: 'Range' },
        { jsonKey: 'ageCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'gender',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'gender', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'race',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'race', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'physiologicalCondition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'physiologicalCondition', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The age of the specific population (0..1) */
  ageRange?: Range;
  /** The age of the specific population (0..1) */
  ageCodeableConcept?: CodeableConcept;

  /** The gender of the specific population (0..1) */
  gender?: CodeableConcept;

  /** Race of the specific population (0..1) */
  race?: CodeableConcept;

  /** The existing physiological conditions of the specific population to which this applies (0..1) */
  physiologicalCondition?: CodeableConcept;

  override fhirType(): string {
    return 'Population';
  }

  /** FHIR JSON for this Population, typed as the plain `Population` data type. */
  override toJSON(): plainTypes.Population {
    return this.serialize() as plainTypes.Population;
  }

  /** The age of the specific population (0..1) Whichever type of `age[x]` is set. */
  getAge(): Range | CodeableConcept | undefined {
    return this.getChoiceValue<Range | CodeableConcept>('age');
  }

  /** True when any type of `age[x]` is set. */
  hasAge(): boolean {
    return this.hasChoiceValue('age');
  }

  getAgeRange(): Range | undefined {
    return this.ageRange;
  }

  /** Sets `age[x]` as Range and clears every other type of it. */
  setAgeRange(ageRange: Range | undefined): this {
    return this.setFieldValue('ageRange', ageRange);
  }

  hasAgeRange(): boolean {
    return this.hasFieldValue('ageRange');
  }

  getAgeCodeableConcept(): CodeableConcept | undefined {
    return this.ageCodeableConcept;
  }

  /** Sets `age[x]` as CodeableConcept and clears every other type of it. */
  setAgeCodeableConcept(ageCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('ageCodeableConcept', ageCodeableConcept);
  }

  hasAgeCodeableConcept(): boolean {
    return this.hasFieldValue('ageCodeableConcept');
  }

  /** The gender of the specific population (0..1) Created when absent. */
  getGender(): CodeableConcept {
    if (this.gender === undefined) {
      this.gender = new CodeableConcept();
    }
    return this.gender;
  }

  setGender(gender: CodeableConcept | undefined): this {
    return this.setFieldValue('gender', gender);
  }

  hasGender(): boolean {
    return this.hasFieldValue('gender');
  }

  /** Race of the specific population (0..1) Created when absent. */
  getRace(): CodeableConcept {
    if (this.race === undefined) {
      this.race = new CodeableConcept();
    }
    return this.race;
  }

  setRace(race: CodeableConcept | undefined): this {
    return this.setFieldValue('race', race);
  }

  hasRace(): boolean {
    return this.hasFieldValue('race');
  }

  /** The existing physiological conditions of the specific population to which this applies (0..1) Created when absent. */
  getPhysiologicalCondition(): CodeableConcept {
    if (this.physiologicalCondition === undefined) {
      this.physiologicalCondition = new CodeableConcept();
    }
    return this.physiologicalCondition;
  }

  setPhysiologicalCondition(physiologicalCondition: CodeableConcept | undefined): this {
    return this.setFieldValue('physiologicalCondition', physiologicalCondition);
  }

  hasPhysiologicalCondition(): boolean {
    return this.hasFieldValue('physiologicalCondition');
  }
}

modelTypeRegistry.register('Population', Population, false);
