/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Population } from './population';
import { Reference } from './reference';

/**
 * Describe the undesirable effects of the medicinal product.
 */
export class MedicinalProductUndesirableEffect extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'subject',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Medication', 'MedicinalProduct'],
        },
      ],
    },
    {
      elementName: 'symptomConditionEffect',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'symptomConditionEffect', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'classification',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'classification', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'frequencyOfOccurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'frequencyOfOccurrence', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'population',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'population', typeCode: 'Population' }],
    },
  ];

  readonly resourceType = 'MedicinalProductUndesirableEffect';

  /** The medication for which this is an indication (0..*) */
  subject?: Reference[];

  /** The symptom, condition or undesirable effect (0..1) */
  symptomConditionEffect?: CodeableConcept;

  /** Classification of the effect (0..1) */
  classification?: CodeableConcept;

  /** The frequency of occurrence of the effect (0..1) */
  frequencyOfOccurrence?: CodeableConcept;

  /** The population group to which this applies (0..*) */
  population?: Population[];

  override fhirType(): string {
    return 'MedicinalProductUndesirableEffect';
  }

  /** FHIR JSON for this MedicinalProductUndesirableEffect, typed as the plain `MedicinalProductUndesirableEffect` data type. */
  override toJSON(): plainTypes.MedicinalProductUndesirableEffect {
    return this.serialize() as plainTypes.MedicinalProductUndesirableEffect;
  }

  /** The medication for which this is an indication (0..*) Never undefined; an empty list is created when absent. */
  getSubject(): Reference[] {
    if (this.subject === undefined) {
      this.subject = [];
    }
    return this.subject;
  }

  setSubject(subject: Reference[] | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Appends a new, empty Reference to `subject` and returns it so it can be filled in. */
  addSubject(): Reference;
  /** Appends the given Reference to `subject` and returns this object for chaining. */
  addSubject(reference: Reference): this;
  addSubject(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subject', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subject', createdReference);
    return createdReference;
  }

  /** The first Reference of `subject`. One is added when the list is empty. */
  getSubjectFirstRep(): Reference {
    const firstReference = this.getSubject()[0];
    return firstReference === undefined ? this.addSubject() : firstReference;
  }

  /** The symptom, condition or undesirable effect (0..1) Created when absent. */
  getSymptomConditionEffect(): CodeableConcept {
    if (this.symptomConditionEffect === undefined) {
      this.symptomConditionEffect = new CodeableConcept();
    }
    return this.symptomConditionEffect;
  }

  setSymptomConditionEffect(symptomConditionEffect: CodeableConcept | undefined): this {
    return this.setFieldValue('symptomConditionEffect', symptomConditionEffect);
  }

  hasSymptomConditionEffect(): boolean {
    return this.hasFieldValue('symptomConditionEffect');
  }

  /** Classification of the effect (0..1) Created when absent. */
  getClassification(): CodeableConcept {
    if (this.classification === undefined) {
      this.classification = new CodeableConcept();
    }
    return this.classification;
  }

  setClassification(classification: CodeableConcept | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** The frequency of occurrence of the effect (0..1) Created when absent. */
  getFrequencyOfOccurrence(): CodeableConcept {
    if (this.frequencyOfOccurrence === undefined) {
      this.frequencyOfOccurrence = new CodeableConcept();
    }
    return this.frequencyOfOccurrence;
  }

  setFrequencyOfOccurrence(frequencyOfOccurrence: CodeableConcept | undefined): this {
    return this.setFieldValue('frequencyOfOccurrence', frequencyOfOccurrence);
  }

  hasFrequencyOfOccurrence(): boolean {
    return this.hasFieldValue('frequencyOfOccurrence');
  }

  /** The population group to which this applies (0..*) Never undefined; an empty list is created when absent. */
  getPopulation(): Population[] {
    if (this.population === undefined) {
      this.population = [];
    }
    return this.population;
  }

  setPopulation(population: Population[] | undefined): this {
    return this.setFieldValue('population', population);
  }

  hasPopulation(): boolean {
    return this.hasFieldValue('population');
  }

  /** Appends a new, empty Population to `population` and returns it so it can be filled in. */
  addPopulation(): Population;
  /** Appends the given Population to `population` and returns this object for chaining. */
  addPopulation(population: Population): this;
  addPopulation(population?: Population): Population | this {
    if (population !== undefined) {
      return this.addFieldValue('population', population);
    }
    const createdPopulation = new Population();
    this.addFieldValue('population', createdPopulation);
    return createdPopulation;
  }

  /** The first Population of `population`. One is added when the list is empty. */
  getPopulationFirstRep(): Population {
    const firstPopulation = this.getPopulation()[0];
    return firstPopulation === undefined ? this.addPopulation() : firstPopulation;
  }
}

modelTypeRegistry.register(
  'MedicinalProductUndesirableEffect',
  MedicinalProductUndesirableEffect,
  true
);

/** True when the value is a MedicinalProductUndesirableEffect model instance. */
export function isMedicinalProductUndesirableEffect(
  candidate: unknown
): candidate is MedicinalProductUndesirableEffect {
  return candidate instanceof MedicinalProductUndesirableEffect;
}
