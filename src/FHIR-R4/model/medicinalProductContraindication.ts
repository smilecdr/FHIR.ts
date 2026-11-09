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
import { Reference } from './reference';

/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export class MedicinalProductContraindication extends DomainResource {
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
      elementName: 'disease',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'disease', typeCode: 'CodeableConcept' }],
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
      elementName: 'therapeuticIndication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'therapeuticIndication',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicinalProductIndication'],
        },
      ],
    },
    {
      elementName: 'otherTherapy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'otherTherapy', typeCode: 'MedicinalProductContraindicationOtherTherapy' },
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

  readonly resourceType = 'MedicinalProductContraindication';

  /** The medication for which this is an indication (0..*) */
  subject?: Reference[];

  /** The disease, symptom or procedure for the contraindication (0..1) */
  disease?: CodeableConcept;

  /** The status of the disease or symptom for the contraindication (0..1) */
  diseaseStatus?: CodeableConcept;

  /** A comorbidity (concurrent condition) or coinfection (0..*) */
  comorbidity?: CodeableConcept[];

  /** Information about the use of the medicinal product in relation to other therapies as part of the indication (0..*) */
  therapeuticIndication?: Reference[];

  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication (0..*) */
  otherTherapy?: MedicinalProductContraindicationOtherTherapy[];

  /** The population group to which this applies (0..*) */
  population?: Population[];

  override fhirType(): string {
    return 'MedicinalProductContraindication';
  }

  /** FHIR JSON for this MedicinalProductContraindication, typed as the plain `MedicinalProductContraindication` data type. */
  override toJSON(): plainTypes.MedicinalProductContraindication {
    return this.serialize() as plainTypes.MedicinalProductContraindication;
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

  /** The disease, symptom or procedure for the contraindication (0..1) Created when absent. */
  getDisease(): CodeableConcept {
    if (this.disease === undefined) {
      this.disease = new CodeableConcept();
    }
    return this.disease;
  }

  setDisease(disease: CodeableConcept | undefined): this {
    return this.setFieldValue('disease', disease);
  }

  hasDisease(): boolean {
    return this.hasFieldValue('disease');
  }

  /** The status of the disease or symptom for the contraindication (0..1) Created when absent. */
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

  /** A comorbidity (concurrent condition) or coinfection (0..*) Never undefined; an empty list is created when absent. */
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

  /** Information about the use of the medicinal product in relation to other therapies as part of the indication (0..*) Never undefined; an empty list is created when absent. */
  getTherapeuticIndication(): Reference[] {
    if (this.therapeuticIndication === undefined) {
      this.therapeuticIndication = [];
    }
    return this.therapeuticIndication;
  }

  setTherapeuticIndication(therapeuticIndication: Reference[] | undefined): this {
    return this.setFieldValue('therapeuticIndication', therapeuticIndication);
  }

  hasTherapeuticIndication(): boolean {
    return this.hasFieldValue('therapeuticIndication');
  }

  /** Appends a new, empty Reference to `therapeuticIndication` and returns it so it can be filled in. */
  addTherapeuticIndication(): Reference;
  /** Appends the given Reference to `therapeuticIndication` and returns this object for chaining. */
  addTherapeuticIndication(reference: Reference): this;
  addTherapeuticIndication(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('therapeuticIndication', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('therapeuticIndication', createdReference);
    return createdReference;
  }

  /** The first Reference of `therapeuticIndication`. One is added when the list is empty. */
  getTherapeuticIndicationFirstRep(): Reference {
    const firstReference = this.getTherapeuticIndication()[0];
    return firstReference === undefined ? this.addTherapeuticIndication() : firstReference;
  }

  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication (0..*) Never undefined; an empty list is created when absent. */
  getOtherTherapy(): MedicinalProductContraindicationOtherTherapy[] {
    if (this.otherTherapy === undefined) {
      this.otherTherapy = [];
    }
    return this.otherTherapy;
  }

  setOtherTherapy(otherTherapy: MedicinalProductContraindicationOtherTherapy[] | undefined): this {
    return this.setFieldValue('otherTherapy', otherTherapy);
  }

  hasOtherTherapy(): boolean {
    return this.hasFieldValue('otherTherapy');
  }

  /** Appends a new, empty MedicinalProductContraindicationOtherTherapy to `otherTherapy` and returns it so it can be filled in. */
  addOtherTherapy(): MedicinalProductContraindicationOtherTherapy;
  /** Appends the given MedicinalProductContraindicationOtherTherapy to `otherTherapy` and returns this object for chaining. */
  addOtherTherapy(
    medicinalProductContraindicationOtherTherapy: MedicinalProductContraindicationOtherTherapy
  ): this;
  addOtherTherapy(
    medicinalProductContraindicationOtherTherapy?: MedicinalProductContraindicationOtherTherapy
  ): MedicinalProductContraindicationOtherTherapy | this {
    if (medicinalProductContraindicationOtherTherapy !== undefined) {
      return this.addFieldValue('otherTherapy', medicinalProductContraindicationOtherTherapy);
    }
    const createdMedicinalProductContraindicationOtherTherapy =
      new MedicinalProductContraindicationOtherTherapy();
    this.addFieldValue('otherTherapy', createdMedicinalProductContraindicationOtherTherapy);
    return createdMedicinalProductContraindicationOtherTherapy;
  }

  /** The first MedicinalProductContraindicationOtherTherapy of `otherTherapy`. One is added when the list is empty. */
  getOtherTherapyFirstRep(): MedicinalProductContraindicationOtherTherapy {
    const firstMedicinalProductContraindicationOtherTherapy = this.getOtherTherapy()[0];
    return firstMedicinalProductContraindicationOtherTherapy === undefined
      ? this.addOtherTherapy()
      : firstMedicinalProductContraindicationOtherTherapy;
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
  'MedicinalProductContraindication',
  MedicinalProductContraindication,
  true
);

/** True when the value is a MedicinalProductContraindication model instance. */
export function isMedicinalProductContraindication(
  candidate: unknown
): candidate is MedicinalProductContraindication {
  return candidate instanceof MedicinalProductContraindication;
}

/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication
 */
export class MedicinalProductContraindicationOtherTherapy extends BackboneElement {
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
    return 'MedicinalProductContraindication.otherTherapy';
  }

  /** FHIR JSON for this MedicinalProductContraindicationOtherTherapy, typed as the plain `MedicinalProductContraindicationOtherTherapy` data type. */
  override toJSON(): plainTypes.MedicinalProductContraindicationOtherTherapy {
    return this.serialize() as plainTypes.MedicinalProductContraindicationOtherTherapy;
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
  'MedicinalProductContraindicationOtherTherapy',
  MedicinalProductContraindicationOtherTherapy,
  false
);
