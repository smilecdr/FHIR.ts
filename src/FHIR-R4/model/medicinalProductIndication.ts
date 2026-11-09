/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Population } from './population';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Indication for the Medicinal Product.
 */
export class MedicinalProductIndication extends DomainResource {
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
      elementName: 'diseaseSymptomProcedure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'diseaseSymptomProcedure', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'diseaseStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'diseaseStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'comorbidity',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'comorbidity', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'intendedEffect',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intendedEffect', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'duration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'duration', typeCode: 'Quantity' }],
    },
    {
      elementName: 'otherTherapy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'otherTherapy', typeCode: 'MedicinalProductIndicationOtherTherapy' }],
    },
    {
      elementName: 'undesirableEffect',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'undesirableEffect',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductUndesirableEffect'],
        },
      ],
    },
    {
      elementName: 'population',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'population', typeCode: 'Population' }],
    },
  ];

  readonly resourceType = 'MedicinalProductIndication';

  /** The medication for which this is an indication (0..*) */
  subject?: Reference[];

  /** The disease, symptom or procedure that is the indication for treatment (0..1) */
  diseaseSymptomProcedure?: CodeableConcept;

  /** The status of the disease or symptom for which the indication applies (0..1) */
  diseaseStatus?: CodeableConcept;

  /** Comorbidity (concurrent condition) or co-infection as part of the indication (0..*) */
  comorbidity?: CodeableConcept[];

  /** The intended effect, aim or strategy to be achieved by the indication (0..1) */
  intendedEffect?: CodeableConcept;

  /** Timing or duration information as part of the indication (0..1) */
  duration?: Quantity;

  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication (0..*) */
  otherTherapy?: MedicinalProductIndicationOtherTherapy[];

  /** Describe the undesirable effects of the medicinal product (0..*) */
  undesirableEffect?: Reference[];

  /** The population group to which this applies (0..*) */
  population?: Population[];

  override fhirType(): string {
    return 'MedicinalProductIndication';
  }

  /** FHIR JSON for this MedicinalProductIndication, typed as the plain `MedicinalProductIndication` data type. */
  override toJSON(): plainTypes.MedicinalProductIndication {
    return this.serialize() as plainTypes.MedicinalProductIndication;
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

  /** The disease, symptom or procedure that is the indication for treatment (0..1) Created when absent. */
  getDiseaseSymptomProcedure(): CodeableConcept {
    if (this.diseaseSymptomProcedure === undefined) {
      this.diseaseSymptomProcedure = new CodeableConcept();
    }
    return this.diseaseSymptomProcedure;
  }

  setDiseaseSymptomProcedure(diseaseSymptomProcedure: CodeableConcept | undefined): this {
    return this.setFieldValue('diseaseSymptomProcedure', diseaseSymptomProcedure);
  }

  hasDiseaseSymptomProcedure(): boolean {
    return this.hasFieldValue('diseaseSymptomProcedure');
  }

  /** The status of the disease or symptom for which the indication applies (0..1) Created when absent. */
  getDiseaseStatus(): CodeableConcept {
    if (this.diseaseStatus === undefined) {
      this.diseaseStatus = new CodeableConcept();
    }
    return this.diseaseStatus;
  }

  setDiseaseStatus(diseaseStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('diseaseStatus', diseaseStatus);
  }

  hasDiseaseStatus(): boolean {
    return this.hasFieldValue('diseaseStatus');
  }

  /** Comorbidity (concurrent condition) or co-infection as part of the indication (0..*) Never undefined; an empty list is created when absent. */
  getComorbidity(): CodeableConcept[] {
    if (this.comorbidity === undefined) {
      this.comorbidity = [];
    }
    return this.comorbidity;
  }

  setComorbidity(comorbidity: CodeableConcept[] | undefined): this {
    return this.setFieldValue('comorbidity', comorbidity);
  }

  hasComorbidity(): boolean {
    return this.hasFieldValue('comorbidity');
  }

  /** Appends a new, empty CodeableConcept to `comorbidity` and returns it so it can be filled in. */
  addComorbidity(): CodeableConcept;
  /** Appends the given CodeableConcept to `comorbidity` and returns this object for chaining. */
  addComorbidity(codeableConcept: CodeableConcept): this;
  addComorbidity(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('comorbidity', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('comorbidity', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `comorbidity`. One is added when the list is empty. */
  getComorbidityFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getComorbidity()[0];
    return firstCodeableConcept === undefined ? this.addComorbidity() : firstCodeableConcept;
  }

  /** The intended effect, aim or strategy to be achieved by the indication (0..1) Created when absent. */
  getIntendedEffect(): CodeableConcept {
    if (this.intendedEffect === undefined) {
      this.intendedEffect = new CodeableConcept();
    }
    return this.intendedEffect;
  }

  setIntendedEffect(intendedEffect: CodeableConcept | undefined): this {
    return this.setFieldValue('intendedEffect', intendedEffect);
  }

  hasIntendedEffect(): boolean {
    return this.hasFieldValue('intendedEffect');
  }

  /** Timing or duration information as part of the indication (0..1) Created when absent. */
  getDuration(): Quantity {
    if (this.duration === undefined) {
      this.duration = new Quantity();
    }
    return this.duration;
  }

  setDuration(duration: Quantity | undefined): this {
    return this.setFieldValue('duration', duration);
  }

  hasDuration(): boolean {
    return this.hasFieldValue('duration');
  }

  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication (0..*) Never undefined; an empty list is created when absent. */
  getOtherTherapy(): MedicinalProductIndicationOtherTherapy[] {
    if (this.otherTherapy === undefined) {
      this.otherTherapy = [];
    }
    return this.otherTherapy;
  }

  setOtherTherapy(otherTherapy: MedicinalProductIndicationOtherTherapy[] | undefined): this {
    return this.setFieldValue('otherTherapy', otherTherapy);
  }

  hasOtherTherapy(): boolean {
    return this.hasFieldValue('otherTherapy');
  }

  /** Appends a new, empty MedicinalProductIndicationOtherTherapy to `otherTherapy` and returns it so it can be filled in. */
  addOtherTherapy(): MedicinalProductIndicationOtherTherapy;
  /** Appends the given MedicinalProductIndicationOtherTherapy to `otherTherapy` and returns this object for chaining. */
  addOtherTherapy(
    medicinalProductIndicationOtherTherapy: MedicinalProductIndicationOtherTherapy
  ): this;
  addOtherTherapy(
    medicinalProductIndicationOtherTherapy?: MedicinalProductIndicationOtherTherapy
  ): MedicinalProductIndicationOtherTherapy | this {
    if (medicinalProductIndicationOtherTherapy !== undefined) {
      return this.addFieldValue('otherTherapy', medicinalProductIndicationOtherTherapy);
    }
    const createdMedicinalProductIndicationOtherTherapy =
      new MedicinalProductIndicationOtherTherapy();
    this.addFieldValue('otherTherapy', createdMedicinalProductIndicationOtherTherapy);
    return createdMedicinalProductIndicationOtherTherapy;
  }

  /** The first MedicinalProductIndicationOtherTherapy of `otherTherapy`. One is added when the list is empty. */
  getOtherTherapyFirstRep(): MedicinalProductIndicationOtherTherapy {
    const firstMedicinalProductIndicationOtherTherapy = this.getOtherTherapy()[0];
    return firstMedicinalProductIndicationOtherTherapy === undefined
      ? this.addOtherTherapy()
      : firstMedicinalProductIndicationOtherTherapy;
  }

  /** Describe the undesirable effects of the medicinal product (0..*) Never undefined; an empty list is created when absent. */
  getUndesirableEffect(): Reference[] {
    if (this.undesirableEffect === undefined) {
      this.undesirableEffect = [];
    }
    return this.undesirableEffect;
  }

  setUndesirableEffect(undesirableEffect: Reference[] | undefined): this {
    return this.setFieldValue('undesirableEffect', undesirableEffect);
  }

  hasUndesirableEffect(): boolean {
    return this.hasFieldValue('undesirableEffect');
  }

  /** Appends a new, empty Reference to `undesirableEffect` and returns it so it can be filled in. */
  addUndesirableEffect(): Reference;
  /** Appends the given Reference to `undesirableEffect` and returns this object for chaining. */
  addUndesirableEffect(reference: Reference): this;
  addUndesirableEffect(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('undesirableEffect', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('undesirableEffect', createdReference);
    return createdReference;
  }

  /** The first Reference of `undesirableEffect`. One is added when the list is empty. */
  getUndesirableEffectFirstRep(): Reference {
    const firstReference = this.getUndesirableEffect()[0];
    return firstReference === undefined ? this.addUndesirableEffect() : firstReference;
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

modelTypeRegistry.register('MedicinalProductIndication', MedicinalProductIndication, true);

/** True when the value is a MedicinalProductIndication model instance. */
export function isMedicinalProductIndication(
  candidate: unknown
): candidate is MedicinalProductIndication {
  return candidate instanceof MedicinalProductIndication;
}

/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication
 */
export class MedicinalProductIndicationOtherTherapy extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'therapyRelationshipType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'therapyRelationshipType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'medication',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'medicationCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'medicationReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Medication',
            'MedicinalProduct',
            'Substance',
            'SubstanceSpecification',
          ],
        },
      ],
    },
  ];

  /** The type of relationship between the medicinal product indication or contraindication and another therapy (1..1) */
  therapyRelationshipType?: CodeableConcept;

  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication (1..1) */
  medicationCodeableConcept?: CodeableConcept;
  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication (1..1) */
  medicationReference?: Reference;

  override fhirType(): string {
    return 'MedicinalProductIndication.otherTherapy';
  }

  /** FHIR JSON for this MedicinalProductIndicationOtherTherapy, typed as the plain `MedicinalProductIndicationOtherTherapy` data type. */
  override toJSON(): plainTypes.MedicinalProductIndicationOtherTherapy {
    return this.serialize() as plainTypes.MedicinalProductIndicationOtherTherapy;
  }

  /** The type of relationship between the medicinal product indication or contraindication and another therapy (1..1) Created when absent. */
  getTherapyRelationshipType(): CodeableConcept {
    if (this.therapyRelationshipType === undefined) {
      this.therapyRelationshipType = new CodeableConcept();
    }
    return this.therapyRelationshipType;
  }

  setTherapyRelationshipType(therapyRelationshipType: CodeableConcept | undefined): this {
    return this.setFieldValue('therapyRelationshipType', therapyRelationshipType);
  }

  hasTherapyRelationshipType(): boolean {
    return this.hasFieldValue('therapyRelationshipType');
  }

  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication (1..1) Whichever type of `medication[x]` is set. */
  getMedication(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('medication');
  }

  /** True when any type of `medication[x]` is set. */
  hasMedication(): boolean {
    return this.hasChoiceValue('medication');
  }

  getMedicationCodeableConcept(): CodeableConcept | undefined {
    return this.medicationCodeableConcept;
  }

  /** Sets `medication[x]` as CodeableConcept and clears every other type of it. */
  setMedicationCodeableConcept(medicationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('medicationCodeableConcept', medicationCodeableConcept);
  }

  hasMedicationCodeableConcept(): boolean {
    return this.hasFieldValue('medicationCodeableConcept');
  }

  getMedicationReference(): Reference | undefined {
    return this.medicationReference;
  }

  /** Sets `medication[x]` as Reference and clears every other type of it. */
  setMedicationReference(medicationReference: Reference | undefined): this {
    return this.setFieldValue('medicationReference', medicationReference);
  }

  hasMedicationReference(): boolean {
    return this.hasFieldValue('medicationReference');
  }
}

modelTypeRegistry.register(
  'MedicinalProductIndicationOtherTherapy',
  MedicinalProductIndicationOtherTherapy,
  false
);
