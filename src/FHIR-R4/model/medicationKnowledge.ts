/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Element } from './element';
import { Money } from './money';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * Information about a medication that is used to support knowledge.
 */
export class MedicationKnowledge extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MedicationKnowledgeStatusCodes,
        },
      ],
    },
    {
      elementName: 'manufacturer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'manufacturer', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'doseForm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doseForm', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
    {
      elementName: 'synonym',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'synonym', typeCode: 'string' }],
    },
    {
      elementName: 'relatedMedicationKnowledge',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'relatedMedicationKnowledge',
          typeCode: 'MedicationKnowledgeRelatedMedicationKnowledge',
        },
      ],
    },
    {
      elementName: 'associatedMedication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'associatedMedication',
          typeCode: 'Reference',
          targetResourceTypes: ['Medication'],
        },
      ],
    },
    {
      elementName: 'productType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'productType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'monograph',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'monograph', typeCode: 'MedicationKnowledgeMonograph' }],
    },
    {
      elementName: 'ingredient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'ingredient', typeCode: 'MedicationKnowledgeIngredient' }],
    },
    {
      elementName: 'preparationInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preparationInstruction', typeCode: 'markdown' }],
    },
    {
      elementName: 'intendedRoute',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'intendedRoute', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'cost',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'cost', typeCode: 'MedicationKnowledgeCost' }],
    },
    {
      elementName: 'monitoringProgram',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'monitoringProgram', typeCode: 'MedicationKnowledgeMonitoringProgram' }],
    },
    {
      elementName: 'administrationGuidelines',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'administrationGuidelines',
          typeCode: 'MedicationKnowledgeAdministrationGuidelines',
        },
      ],
    },
    {
      elementName: 'medicineClassification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'medicineClassification',
          typeCode: 'MedicationKnowledgeMedicineClassification',
        },
      ],
    },
    {
      elementName: 'packaging',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'packaging', typeCode: 'MedicationKnowledgePackaging' }],
    },
    {
      elementName: 'drugCharacteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'drugCharacteristic', typeCode: 'MedicationKnowledgeDrugCharacteristic' }],
    },
    {
      elementName: 'contraindication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'contraindication',
          typeCode: 'Reference',
          targetResourceTypes: ['DetectedIssue'],
        },
      ],
    },
    {
      elementName: 'regulatory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'regulatory', typeCode: 'MedicationKnowledgeRegulatory' }],
    },
    {
      elementName: 'kinetics',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'kinetics', typeCode: 'MedicationKnowledgeKinetics' }],
    },
  ];

  readonly resourceType = 'MedicationKnowledge';

  /** Code that identifies this medication (0..1) */
  code?: CodeableConcept;

  /** active | inactive | entered-in-error (0..1) */
  status?: valueSetCodes.MedicationKnowledgeStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Manufacturer of the item (0..1) */
  manufacturer?: Reference;

  /** powder | tablets | capsule + (0..1) */
  doseForm?: CodeableConcept;

  /** Amount of drug in package (0..1) */
  amount?: Quantity;

  /** Additional names for a medication (0..*) */
  synonym?: string[];
  /** Id and extensions of the primitive `synonym`. */
  _synonym?: (Element | null)[];

  /** Associated or related medication information (0..*) */
  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];

  /** A medication resource that is associated with this medication (0..*) */
  associatedMedication?: Reference[];

  /** Category of the medication or product (0..*) */
  productType?: CodeableConcept[];

  /** Associated documentation about the medication (0..*) */
  monograph?: MedicationKnowledgeMonograph[];

  /** Active or inactive ingredient (0..*) */
  ingredient?: MedicationKnowledgeIngredient[];

  /** The instructions for preparing the medication (0..1) */
  preparationInstruction?: string;
  /** Id and extensions of the primitive `preparationInstruction`. */
  _preparationInstruction?: Element;

  /** The intended or approved route of administration (0..*) */
  intendedRoute?: CodeableConcept[];

  /** The pricing of the medication (0..*) */
  cost?: MedicationKnowledgeCost[];

  /** Program under which a medication is reviewed (0..*) */
  monitoringProgram?: MedicationKnowledgeMonitoringProgram[];

  /** Guidelines for administration of the medication (0..*) */
  administrationGuidelines?: MedicationKnowledgeAdministrationGuidelines[];

  /** Categorization of the medication within a formulary or classification system (0..*) */
  medicineClassification?: MedicationKnowledgeMedicineClassification[];

  /** Details about packaged medications (0..1) */
  packaging?: MedicationKnowledgePackaging;

  /** Specifies descriptive properties of the medicine (0..*) */
  drugCharacteristic?: MedicationKnowledgeDrugCharacteristic[];

  /** Potential clinical issue with or between medication(s) (0..*) */
  contraindication?: Reference[];

  /** Regulatory information about a medication (0..*) */
  regulatory?: MedicationKnowledgeRegulatory[];

  /** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body (0..*) */
  kinetics?: MedicationKnowledgeKinetics[];

  override fhirType(): string {
    return 'MedicationKnowledge';
  }

  /** FHIR JSON for this MedicationKnowledge, typed as the plain `MedicationKnowledge` data type. */
  override toJSON(): plainTypes.MedicationKnowledge {
    return this.serialize() as plainTypes.MedicationKnowledge;
  }

  /** Code that identifies this medication (0..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** active | inactive | entered-in-error (0..1) */
  getStatus(): valueSetCodes.MedicationKnowledgeStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationKnowledgeStatusCodes | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** Manufacturer of the item (0..1) Created when absent. */
  getManufacturer(): Reference {
    if (this.manufacturer === undefined) {
      this.manufacturer = new Reference();
    }
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Reference | undefined): this {
    return this.setFieldValue('manufacturer', manufacturer);
  }

  hasManufacturer(): boolean {
    return this.hasFieldValue('manufacturer');
  }

  /** powder | tablets | capsule + (0..1) Created when absent. */
  getDoseForm(): CodeableConcept {
    if (this.doseForm === undefined) {
      this.doseForm = new CodeableConcept();
    }
    return this.doseForm;
  }

  setDoseForm(doseForm: CodeableConcept | undefined): this {
    return this.setFieldValue('doseForm', doseForm);
  }

  hasDoseForm(): boolean {
    return this.hasFieldValue('doseForm');
  }

  /** Amount of drug in package (0..1) Created when absent. */
  getAmount(): Quantity {
    if (this.amount === undefined) {
      this.amount = new Quantity();
    }
    return this.amount;
  }

  setAmount(amount: Quantity | undefined): this {
    return this.setFieldValue('amount', amount);
  }

  hasAmount(): boolean {
    return this.hasFieldValue('amount');
  }

  /** Additional names for a medication (0..*) Never undefined; an empty list is created when absent. */
  getSynonym(): string[] {
    if (this.synonym === undefined) {
      this.synonym = [];
    }
    return this.synonym;
  }

  setSynonym(synonym: string[] | undefined): this {
    return this.setFieldValue('synonym', synonym);
  }

  hasSynonym(): boolean {
    return this.hasFieldValue('synonym');
  }

  /** Appends one value to `synonym`. Throws a FhirModelError when it is not a valid FHIR string. */
  addSynonym(synonym: string): this {
    return this.addFieldValue('synonym', synonym);
  }

  /** Associated or related medication information (0..*) Never undefined; an empty list is created when absent. */
  getRelatedMedicationKnowledge(): MedicationKnowledgeRelatedMedicationKnowledge[] {
    if (this.relatedMedicationKnowledge === undefined) {
      this.relatedMedicationKnowledge = [];
    }
    return this.relatedMedicationKnowledge;
  }

  setRelatedMedicationKnowledge(
    relatedMedicationKnowledge: MedicationKnowledgeRelatedMedicationKnowledge[] | undefined
  ): this {
    return this.setFieldValue('relatedMedicationKnowledge', relatedMedicationKnowledge);
  }

  hasRelatedMedicationKnowledge(): boolean {
    return this.hasFieldValue('relatedMedicationKnowledge');
  }

  /** Appends a new, empty MedicationKnowledgeRelatedMedicationKnowledge to `relatedMedicationKnowledge` and returns it so it can be filled in. */
  addRelatedMedicationKnowledge(): MedicationKnowledgeRelatedMedicationKnowledge;
  /** Appends the given MedicationKnowledgeRelatedMedicationKnowledge to `relatedMedicationKnowledge` and returns this object for chaining. */
  addRelatedMedicationKnowledge(
    medicationKnowledgeRelatedMedicationKnowledge: MedicationKnowledgeRelatedMedicationKnowledge
  ): this;
  addRelatedMedicationKnowledge(
    medicationKnowledgeRelatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge
  ): MedicationKnowledgeRelatedMedicationKnowledge | this {
    if (medicationKnowledgeRelatedMedicationKnowledge !== undefined) {
      return this.addFieldValue(
        'relatedMedicationKnowledge',
        medicationKnowledgeRelatedMedicationKnowledge
      );
    }
    const createdMedicationKnowledgeRelatedMedicationKnowledge =
      new MedicationKnowledgeRelatedMedicationKnowledge();
    this.addFieldValue(
      'relatedMedicationKnowledge',
      createdMedicationKnowledgeRelatedMedicationKnowledge
    );
    return createdMedicationKnowledgeRelatedMedicationKnowledge;
  }

  /** The first MedicationKnowledgeRelatedMedicationKnowledge of `relatedMedicationKnowledge`. One is added when the list is empty. */
  getRelatedMedicationKnowledgeFirstRep(): MedicationKnowledgeRelatedMedicationKnowledge {
    const firstMedicationKnowledgeRelatedMedicationKnowledge =
      this.getRelatedMedicationKnowledge()[0];
    return firstMedicationKnowledgeRelatedMedicationKnowledge === undefined
      ? this.addRelatedMedicationKnowledge()
      : firstMedicationKnowledgeRelatedMedicationKnowledge;
  }

  /** A medication resource that is associated with this medication (0..*) Never undefined; an empty list is created when absent. */
  getAssociatedMedication(): Reference[] {
    if (this.associatedMedication === undefined) {
      this.associatedMedication = [];
    }
    return this.associatedMedication;
  }

  setAssociatedMedication(associatedMedication: Reference[] | undefined): this {
    return this.setFieldValue('associatedMedication', associatedMedication);
  }

  hasAssociatedMedication(): boolean {
    return this.hasFieldValue('associatedMedication');
  }

  /** Appends a new, empty Reference to `associatedMedication` and returns it so it can be filled in. */
  addAssociatedMedication(): Reference;
  /** Appends the given Reference to `associatedMedication` and returns this object for chaining. */
  addAssociatedMedication(reference: Reference): this;
  addAssociatedMedication(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('associatedMedication', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('associatedMedication', createdReference);
    return createdReference;
  }

  /** The first Reference of `associatedMedication`. One is added when the list is empty. */
  getAssociatedMedicationFirstRep(): Reference {
    const firstReference = this.getAssociatedMedication()[0];
    return firstReference === undefined ? this.addAssociatedMedication() : firstReference;
  }

  /** Category of the medication or product (0..*) Never undefined; an empty list is created when absent. */
  getProductType(): CodeableConcept[] {
    if (this.productType === undefined) {
      this.productType = [];
    }
    return this.productType;
  }

  setProductType(productType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('productType', productType);
  }

  hasProductType(): boolean {
    return this.hasFieldValue('productType');
  }

  /** Appends a new, empty CodeableConcept to `productType` and returns it so it can be filled in. */
  addProductType(): CodeableConcept;
  /** Appends the given CodeableConcept to `productType` and returns this object for chaining. */
  addProductType(codeableConcept: CodeableConcept): this;
  addProductType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('productType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('productType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `productType`. One is added when the list is empty. */
  getProductTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getProductType()[0];
    return firstCodeableConcept === undefined ? this.addProductType() : firstCodeableConcept;
  }

  /** Associated documentation about the medication (0..*) Never undefined; an empty list is created when absent. */
  getMonograph(): MedicationKnowledgeMonograph[] {
    if (this.monograph === undefined) {
      this.monograph = [];
    }
    return this.monograph;
  }

  setMonograph(monograph: MedicationKnowledgeMonograph[] | undefined): this {
    return this.setFieldValue('monograph', monograph);
  }

  hasMonograph(): boolean {
    return this.hasFieldValue('monograph');
  }

  /** Appends a new, empty MedicationKnowledgeMonograph to `monograph` and returns it so it can be filled in. */
  addMonograph(): MedicationKnowledgeMonograph;
  /** Appends the given MedicationKnowledgeMonograph to `monograph` and returns this object for chaining. */
  addMonograph(medicationKnowledgeMonograph: MedicationKnowledgeMonograph): this;
  addMonograph(
    medicationKnowledgeMonograph?: MedicationKnowledgeMonograph
  ): MedicationKnowledgeMonograph | this {
    if (medicationKnowledgeMonograph !== undefined) {
      return this.addFieldValue('monograph', medicationKnowledgeMonograph);
    }
    const createdMedicationKnowledgeMonograph = new MedicationKnowledgeMonograph();
    this.addFieldValue('monograph', createdMedicationKnowledgeMonograph);
    return createdMedicationKnowledgeMonograph;
  }

  /** The first MedicationKnowledgeMonograph of `monograph`. One is added when the list is empty. */
  getMonographFirstRep(): MedicationKnowledgeMonograph {
    const firstMedicationKnowledgeMonograph = this.getMonograph()[0];
    return firstMedicationKnowledgeMonograph === undefined
      ? this.addMonograph()
      : firstMedicationKnowledgeMonograph;
  }

  /** Active or inactive ingredient (0..*) Never undefined; an empty list is created when absent. */
  getIngredient(): MedicationKnowledgeIngredient[] {
    if (this.ingredient === undefined) {
      this.ingredient = [];
    }
    return this.ingredient;
  }

  setIngredient(ingredient: MedicationKnowledgeIngredient[] | undefined): this {
    return this.setFieldValue('ingredient', ingredient);
  }

  hasIngredient(): boolean {
    return this.hasFieldValue('ingredient');
  }

  /** Appends a new, empty MedicationKnowledgeIngredient to `ingredient` and returns it so it can be filled in. */
  addIngredient(): MedicationKnowledgeIngredient;
  /** Appends the given MedicationKnowledgeIngredient to `ingredient` and returns this object for chaining. */
  addIngredient(medicationKnowledgeIngredient: MedicationKnowledgeIngredient): this;
  addIngredient(
    medicationKnowledgeIngredient?: MedicationKnowledgeIngredient
  ): MedicationKnowledgeIngredient | this {
    if (medicationKnowledgeIngredient !== undefined) {
      return this.addFieldValue('ingredient', medicationKnowledgeIngredient);
    }
    const createdMedicationKnowledgeIngredient = new MedicationKnowledgeIngredient();
    this.addFieldValue('ingredient', createdMedicationKnowledgeIngredient);
    return createdMedicationKnowledgeIngredient;
  }

  /** The first MedicationKnowledgeIngredient of `ingredient`. One is added when the list is empty. */
  getIngredientFirstRep(): MedicationKnowledgeIngredient {
    const firstMedicationKnowledgeIngredient = this.getIngredient()[0];
    return firstMedicationKnowledgeIngredient === undefined
      ? this.addIngredient()
      : firstMedicationKnowledgeIngredient;
  }

  /** The instructions for preparing the medication (0..1) */
  getPreparationInstruction(): string | undefined {
    return this.preparationInstruction;
  }

  /** Sets `preparationInstruction`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setPreparationInstruction(preparationInstruction: string | undefined): this {
    return this.setFieldValue('preparationInstruction', preparationInstruction);
  }

  hasPreparationInstruction(): boolean {
    return this.hasFieldValue('preparationInstruction');
  }

  /** The element carrying the id and extensions of `preparationInstruction`. Created when absent. */
  getPreparationInstructionElement(): Element {
    if (this._preparationInstruction === undefined) {
      this._preparationInstruction = new Element();
    }
    return this._preparationInstruction;
  }

  setPreparationInstructionElement(preparationInstructionElement: Element | undefined): this {
    this._preparationInstruction = preparationInstructionElement;
    return this;
  }

  /** The intended or approved route of administration (0..*) Never undefined; an empty list is created when absent. */
  getIntendedRoute(): CodeableConcept[] {
    if (this.intendedRoute === undefined) {
      this.intendedRoute = [];
    }
    return this.intendedRoute;
  }

  setIntendedRoute(intendedRoute: CodeableConcept[] | undefined): this {
    return this.setFieldValue('intendedRoute', intendedRoute);
  }

  hasIntendedRoute(): boolean {
    return this.hasFieldValue('intendedRoute');
  }

  /** Appends a new, empty CodeableConcept to `intendedRoute` and returns it so it can be filled in. */
  addIntendedRoute(): CodeableConcept;
  /** Appends the given CodeableConcept to `intendedRoute` and returns this object for chaining. */
  addIntendedRoute(codeableConcept: CodeableConcept): this;
  addIntendedRoute(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('intendedRoute', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('intendedRoute', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `intendedRoute`. One is added when the list is empty. */
  getIntendedRouteFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getIntendedRoute()[0];
    return firstCodeableConcept === undefined ? this.addIntendedRoute() : firstCodeableConcept;
  }

  /** The pricing of the medication (0..*) Never undefined; an empty list is created when absent. */
  getCost(): MedicationKnowledgeCost[] {
    if (this.cost === undefined) {
      this.cost = [];
    }
    return this.cost;
  }

  setCost(cost: MedicationKnowledgeCost[] | undefined): this {
    return this.setFieldValue('cost', cost);
  }

  hasCost(): boolean {
    return this.hasFieldValue('cost');
  }

  /** Appends a new, empty MedicationKnowledgeCost to `cost` and returns it so it can be filled in. */
  addCost(): MedicationKnowledgeCost;
  /** Appends the given MedicationKnowledgeCost to `cost` and returns this object for chaining. */
  addCost(medicationKnowledgeCost: MedicationKnowledgeCost): this;
  addCost(medicationKnowledgeCost?: MedicationKnowledgeCost): MedicationKnowledgeCost | this {
    if (medicationKnowledgeCost !== undefined) {
      return this.addFieldValue('cost', medicationKnowledgeCost);
    }
    const createdMedicationKnowledgeCost = new MedicationKnowledgeCost();
    this.addFieldValue('cost', createdMedicationKnowledgeCost);
    return createdMedicationKnowledgeCost;
  }

  /** The first MedicationKnowledgeCost of `cost`. One is added when the list is empty. */
  getCostFirstRep(): MedicationKnowledgeCost {
    const firstMedicationKnowledgeCost = this.getCost()[0];
    return firstMedicationKnowledgeCost === undefined
      ? this.addCost()
      : firstMedicationKnowledgeCost;
  }

  /** Program under which a medication is reviewed (0..*) Never undefined; an empty list is created when absent. */
  getMonitoringProgram(): MedicationKnowledgeMonitoringProgram[] {
    if (this.monitoringProgram === undefined) {
      this.monitoringProgram = [];
    }
    return this.monitoringProgram;
  }

  setMonitoringProgram(
    monitoringProgram: MedicationKnowledgeMonitoringProgram[] | undefined
  ): this {
    return this.setFieldValue('monitoringProgram', monitoringProgram);
  }

  hasMonitoringProgram(): boolean {
    return this.hasFieldValue('monitoringProgram');
  }

  /** Appends a new, empty MedicationKnowledgeMonitoringProgram to `monitoringProgram` and returns it so it can be filled in. */
  addMonitoringProgram(): MedicationKnowledgeMonitoringProgram;
  /** Appends the given MedicationKnowledgeMonitoringProgram to `monitoringProgram` and returns this object for chaining. */
  addMonitoringProgram(
    medicationKnowledgeMonitoringProgram: MedicationKnowledgeMonitoringProgram
  ): this;
  addMonitoringProgram(
    medicationKnowledgeMonitoringProgram?: MedicationKnowledgeMonitoringProgram
  ): MedicationKnowledgeMonitoringProgram | this {
    if (medicationKnowledgeMonitoringProgram !== undefined) {
      return this.addFieldValue('monitoringProgram', medicationKnowledgeMonitoringProgram);
    }
    const createdMedicationKnowledgeMonitoringProgram = new MedicationKnowledgeMonitoringProgram();
    this.addFieldValue('monitoringProgram', createdMedicationKnowledgeMonitoringProgram);
    return createdMedicationKnowledgeMonitoringProgram;
  }

  /** The first MedicationKnowledgeMonitoringProgram of `monitoringProgram`. One is added when the list is empty. */
  getMonitoringProgramFirstRep(): MedicationKnowledgeMonitoringProgram {
    const firstMedicationKnowledgeMonitoringProgram = this.getMonitoringProgram()[0];
    return firstMedicationKnowledgeMonitoringProgram === undefined
      ? this.addMonitoringProgram()
      : firstMedicationKnowledgeMonitoringProgram;
  }

  /** Guidelines for administration of the medication (0..*) Never undefined; an empty list is created when absent. */
  getAdministrationGuidelines(): MedicationKnowledgeAdministrationGuidelines[] {
    if (this.administrationGuidelines === undefined) {
      this.administrationGuidelines = [];
    }
    return this.administrationGuidelines;
  }

  setAdministrationGuidelines(
    administrationGuidelines: MedicationKnowledgeAdministrationGuidelines[] | undefined
  ): this {
    return this.setFieldValue('administrationGuidelines', administrationGuidelines);
  }

  hasAdministrationGuidelines(): boolean {
    return this.hasFieldValue('administrationGuidelines');
  }

  /** Appends a new, empty MedicationKnowledgeAdministrationGuidelines to `administrationGuidelines` and returns it so it can be filled in. */
  addAdministrationGuidelines(): MedicationKnowledgeAdministrationGuidelines;
  /** Appends the given MedicationKnowledgeAdministrationGuidelines to `administrationGuidelines` and returns this object for chaining. */
  addAdministrationGuidelines(
    medicationKnowledgeAdministrationGuidelines: MedicationKnowledgeAdministrationGuidelines
  ): this;
  addAdministrationGuidelines(
    medicationKnowledgeAdministrationGuidelines?: MedicationKnowledgeAdministrationGuidelines
  ): MedicationKnowledgeAdministrationGuidelines | this {
    if (medicationKnowledgeAdministrationGuidelines !== undefined) {
      return this.addFieldValue(
        'administrationGuidelines',
        medicationKnowledgeAdministrationGuidelines
      );
    }
    const createdMedicationKnowledgeAdministrationGuidelines =
      new MedicationKnowledgeAdministrationGuidelines();
    this.addFieldValue(
      'administrationGuidelines',
      createdMedicationKnowledgeAdministrationGuidelines
    );
    return createdMedicationKnowledgeAdministrationGuidelines;
  }

  /** The first MedicationKnowledgeAdministrationGuidelines of `administrationGuidelines`. One is added when the list is empty. */
  getAdministrationGuidelinesFirstRep(): MedicationKnowledgeAdministrationGuidelines {
    const firstMedicationKnowledgeAdministrationGuidelines = this.getAdministrationGuidelines()[0];
    return firstMedicationKnowledgeAdministrationGuidelines === undefined
      ? this.addAdministrationGuidelines()
      : firstMedicationKnowledgeAdministrationGuidelines;
  }

  /** Categorization of the medication within a formulary or classification system (0..*) Never undefined; an empty list is created when absent. */
  getMedicineClassification(): MedicationKnowledgeMedicineClassification[] {
    if (this.medicineClassification === undefined) {
      this.medicineClassification = [];
    }
    return this.medicineClassification;
  }

  setMedicineClassification(
    medicineClassification: MedicationKnowledgeMedicineClassification[] | undefined
  ): this {
    return this.setFieldValue('medicineClassification', medicineClassification);
  }

  hasMedicineClassification(): boolean {
    return this.hasFieldValue('medicineClassification');
  }

  /** Appends a new, empty MedicationKnowledgeMedicineClassification to `medicineClassification` and returns it so it can be filled in. */
  addMedicineClassification(): MedicationKnowledgeMedicineClassification;
  /** Appends the given MedicationKnowledgeMedicineClassification to `medicineClassification` and returns this object for chaining. */
  addMedicineClassification(
    medicationKnowledgeMedicineClassification: MedicationKnowledgeMedicineClassification
  ): this;
  addMedicineClassification(
    medicationKnowledgeMedicineClassification?: MedicationKnowledgeMedicineClassification
  ): MedicationKnowledgeMedicineClassification | this {
    if (medicationKnowledgeMedicineClassification !== undefined) {
      return this.addFieldValue(
        'medicineClassification',
        medicationKnowledgeMedicineClassification
      );
    }
    const createdMedicationKnowledgeMedicineClassification =
      new MedicationKnowledgeMedicineClassification();
    this.addFieldValue('medicineClassification', createdMedicationKnowledgeMedicineClassification);
    return createdMedicationKnowledgeMedicineClassification;
  }

  /** The first MedicationKnowledgeMedicineClassification of `medicineClassification`. One is added when the list is empty. */
  getMedicineClassificationFirstRep(): MedicationKnowledgeMedicineClassification {
    const firstMedicationKnowledgeMedicineClassification = this.getMedicineClassification()[0];
    return firstMedicationKnowledgeMedicineClassification === undefined
      ? this.addMedicineClassification()
      : firstMedicationKnowledgeMedicineClassification;
  }

  /** Details about packaged medications (0..1) Created when absent. */
  getPackaging(): MedicationKnowledgePackaging {
    if (this.packaging === undefined) {
      this.packaging = new MedicationKnowledgePackaging();
    }
    return this.packaging;
  }

  setPackaging(packaging: MedicationKnowledgePackaging | undefined): this {
    return this.setFieldValue('packaging', packaging);
  }

  hasPackaging(): boolean {
    return this.hasFieldValue('packaging');
  }

  /** Specifies descriptive properties of the medicine (0..*) Never undefined; an empty list is created when absent. */
  getDrugCharacteristic(): MedicationKnowledgeDrugCharacteristic[] {
    if (this.drugCharacteristic === undefined) {
      this.drugCharacteristic = [];
    }
    return this.drugCharacteristic;
  }

  setDrugCharacteristic(
    drugCharacteristic: MedicationKnowledgeDrugCharacteristic[] | undefined
  ): this {
    return this.setFieldValue('drugCharacteristic', drugCharacteristic);
  }

  hasDrugCharacteristic(): boolean {
    return this.hasFieldValue('drugCharacteristic');
  }

  /** Appends a new, empty MedicationKnowledgeDrugCharacteristic to `drugCharacteristic` and returns it so it can be filled in. */
  addDrugCharacteristic(): MedicationKnowledgeDrugCharacteristic;
  /** Appends the given MedicationKnowledgeDrugCharacteristic to `drugCharacteristic` and returns this object for chaining. */
  addDrugCharacteristic(
    medicationKnowledgeDrugCharacteristic: MedicationKnowledgeDrugCharacteristic
  ): this;
  addDrugCharacteristic(
    medicationKnowledgeDrugCharacteristic?: MedicationKnowledgeDrugCharacteristic
  ): MedicationKnowledgeDrugCharacteristic | this {
    if (medicationKnowledgeDrugCharacteristic !== undefined) {
      return this.addFieldValue('drugCharacteristic', medicationKnowledgeDrugCharacteristic);
    }
    const createdMedicationKnowledgeDrugCharacteristic =
      new MedicationKnowledgeDrugCharacteristic();
    this.addFieldValue('drugCharacteristic', createdMedicationKnowledgeDrugCharacteristic);
    return createdMedicationKnowledgeDrugCharacteristic;
  }

  /** The first MedicationKnowledgeDrugCharacteristic of `drugCharacteristic`. One is added when the list is empty. */
  getDrugCharacteristicFirstRep(): MedicationKnowledgeDrugCharacteristic {
    const firstMedicationKnowledgeDrugCharacteristic = this.getDrugCharacteristic()[0];
    return firstMedicationKnowledgeDrugCharacteristic === undefined
      ? this.addDrugCharacteristic()
      : firstMedicationKnowledgeDrugCharacteristic;
  }

  /** Potential clinical issue with or between medication(s) (0..*) Never undefined; an empty list is created when absent. */
  getContraindication(): Reference[] {
    if (this.contraindication === undefined) {
      this.contraindication = [];
    }
    return this.contraindication;
  }

  setContraindication(contraindication: Reference[] | undefined): this {
    return this.setFieldValue('contraindication', contraindication);
  }

  hasContraindication(): boolean {
    return this.hasFieldValue('contraindication');
  }

  /** Appends a new, empty Reference to `contraindication` and returns it so it can be filled in. */
  addContraindication(): Reference;
  /** Appends the given Reference to `contraindication` and returns this object for chaining. */
  addContraindication(reference: Reference): this;
  addContraindication(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('contraindication', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('contraindication', createdReference);
    return createdReference;
  }

  /** The first Reference of `contraindication`. One is added when the list is empty. */
  getContraindicationFirstRep(): Reference {
    const firstReference = this.getContraindication()[0];
    return firstReference === undefined ? this.addContraindication() : firstReference;
  }

  /** Regulatory information about a medication (0..*) Never undefined; an empty list is created when absent. */
  getRegulatory(): MedicationKnowledgeRegulatory[] {
    if (this.regulatory === undefined) {
      this.regulatory = [];
    }
    return this.regulatory;
  }

  setRegulatory(regulatory: MedicationKnowledgeRegulatory[] | undefined): this {
    return this.setFieldValue('regulatory', regulatory);
  }

  hasRegulatory(): boolean {
    return this.hasFieldValue('regulatory');
  }

  /** Appends a new, empty MedicationKnowledgeRegulatory to `regulatory` and returns it so it can be filled in. */
  addRegulatory(): MedicationKnowledgeRegulatory;
  /** Appends the given MedicationKnowledgeRegulatory to `regulatory` and returns this object for chaining. */
  addRegulatory(medicationKnowledgeRegulatory: MedicationKnowledgeRegulatory): this;
  addRegulatory(
    medicationKnowledgeRegulatory?: MedicationKnowledgeRegulatory
  ): MedicationKnowledgeRegulatory | this {
    if (medicationKnowledgeRegulatory !== undefined) {
      return this.addFieldValue('regulatory', medicationKnowledgeRegulatory);
    }
    const createdMedicationKnowledgeRegulatory = new MedicationKnowledgeRegulatory();
    this.addFieldValue('regulatory', createdMedicationKnowledgeRegulatory);
    return createdMedicationKnowledgeRegulatory;
  }

  /** The first MedicationKnowledgeRegulatory of `regulatory`. One is added when the list is empty. */
  getRegulatoryFirstRep(): MedicationKnowledgeRegulatory {
    const firstMedicationKnowledgeRegulatory = this.getRegulatory()[0];
    return firstMedicationKnowledgeRegulatory === undefined
      ? this.addRegulatory()
      : firstMedicationKnowledgeRegulatory;
  }

  /** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body (0..*) Never undefined; an empty list is created when absent. */
  getKinetics(): MedicationKnowledgeKinetics[] {
    if (this.kinetics === undefined) {
      this.kinetics = [];
    }
    return this.kinetics;
  }

  setKinetics(kinetics: MedicationKnowledgeKinetics[] | undefined): this {
    return this.setFieldValue('kinetics', kinetics);
  }

  hasKinetics(): boolean {
    return this.hasFieldValue('kinetics');
  }

  /** Appends a new, empty MedicationKnowledgeKinetics to `kinetics` and returns it so it can be filled in. */
  addKinetics(): MedicationKnowledgeKinetics;
  /** Appends the given MedicationKnowledgeKinetics to `kinetics` and returns this object for chaining. */
  addKinetics(medicationKnowledgeKinetics: MedicationKnowledgeKinetics): this;
  addKinetics(
    medicationKnowledgeKinetics?: MedicationKnowledgeKinetics
  ): MedicationKnowledgeKinetics | this {
    if (medicationKnowledgeKinetics !== undefined) {
      return this.addFieldValue('kinetics', medicationKnowledgeKinetics);
    }
    const createdMedicationKnowledgeKinetics = new MedicationKnowledgeKinetics();
    this.addFieldValue('kinetics', createdMedicationKnowledgeKinetics);
    return createdMedicationKnowledgeKinetics;
  }

  /** The first MedicationKnowledgeKinetics of `kinetics`. One is added when the list is empty. */
  getKineticsFirstRep(): MedicationKnowledgeKinetics {
    const firstMedicationKnowledgeKinetics = this.getKinetics()[0];
    return firstMedicationKnowledgeKinetics === undefined
      ? this.addKinetics()
      : firstMedicationKnowledgeKinetics;
  }
}

modelTypeRegistry.register('MedicationKnowledge', MedicationKnowledge, true);

/** True when the value is a MedicationKnowledge model instance. */
export function isMedicationKnowledge(candidate: unknown): candidate is MedicationKnowledge {
  return candidate instanceof MedicationKnowledge;
}

/**
 * Associated or related medication information
 */
export class MedicationKnowledgeRelatedMedicationKnowledge extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reference',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationKnowledge'],
        },
      ],
    },
  ];

  /** Category of medicationKnowledge (1..1) */
  type?: CodeableConcept;

  /** Associated documentation about the associated medication knowledge (1..*) */
  reference?: Reference[];

  override fhirType(): string {
    return 'MedicationKnowledge.relatedMedicationKnowledge';
  }

  /** FHIR JSON for this MedicationKnowledgeRelatedMedicationKnowledge, typed as the plain `MedicationKnowledgeRelatedMedicationKnowledge` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeRelatedMedicationKnowledge {
    return this.serialize() as plainTypes.MedicationKnowledgeRelatedMedicationKnowledge;
  }

  /** Category of medicationKnowledge (1..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Associated documentation about the associated medication knowledge (1..*) Never undefined; an empty list is created when absent. */
  getReference(): Reference[] {
    if (this.reference === undefined) {
      this.reference = [];
    }
    return this.reference;
  }

  setReference(reference: Reference[] | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** Appends a new, empty Reference to `reference` and returns it so it can be filled in. */
  addReference(): Reference;
  /** Appends the given Reference to `reference` and returns this object for chaining. */
  addReference(reference: Reference): this;
  addReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reference`. One is added when the list is empty. */
  getReferenceFirstRep(): Reference {
    const firstReference = this.getReference()[0];
    return firstReference === undefined ? this.addReference() : firstReference;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeRelatedMedicationKnowledge',
  MedicationKnowledgeRelatedMedicationKnowledge,
  false
);

/**
 * Associated documentation about the medication
 */
export class MedicationKnowledgeMonograph extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'source',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference', 'Media'],
        },
      ],
    },
  ];

  /** The category of medication document (0..1) */
  type?: CodeableConcept;

  /** Associated documentation about the medication (0..1) */
  source?: Reference;

  override fhirType(): string {
    return 'MedicationKnowledge.monograph';
  }

  /** FHIR JSON for this MedicationKnowledgeMonograph, typed as the plain `MedicationKnowledgeMonograph` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeMonograph {
    return this.serialize() as plainTypes.MedicationKnowledgeMonograph;
  }

  /** The category of medication document (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Associated documentation about the medication (0..1) Created when absent. */
  getSource(): Reference {
    if (this.source === undefined) {
      this.source = new Reference();
    }
    return this.source;
  }

  setSource(source: Reference | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }
}

modelTypeRegistry.register('MedicationKnowledgeMonograph', MedicationKnowledgeMonograph, false);

/**
 * Active or inactive ingredient
 */
export class MedicationKnowledgeIngredient extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'item',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'itemCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'itemReference', typeCode: 'Reference', targetResourceTypes: ['Substance'] },
      ],
    },
    {
      elementName: 'isActive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isActive', typeCode: 'boolean' }],
    },
    {
      elementName: 'strength',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'strength', typeCode: 'Ratio' }],
    },
  ];

  /** Medication(s) or substance(s) contained in the medication (1..1) */
  itemCodeableConcept?: CodeableConcept;
  /** Medication(s) or substance(s) contained in the medication (1..1) */
  itemReference?: Reference;

  /** Active ingredient indicator (0..1) */
  isActive?: boolean;
  /** Id and extensions of the primitive `isActive`. */
  _isActive?: Element;

  /** Quantity of ingredient present (0..1) */
  strength?: Ratio;

  override fhirType(): string {
    return 'MedicationKnowledge.ingredient';
  }

  /** FHIR JSON for this MedicationKnowledgeIngredient, typed as the plain `MedicationKnowledgeIngredient` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeIngredient {
    return this.serialize() as plainTypes.MedicationKnowledgeIngredient;
  }

  /** Medication(s) or substance(s) contained in the medication (1..1) Whichever type of `item[x]` is set. */
  getItem(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('item');
  }

  /** True when any type of `item[x]` is set. */
  hasItem(): boolean {
    return this.hasChoiceValue('item');
  }

  getItemCodeableConcept(): CodeableConcept | undefined {
    return this.itemCodeableConcept;
  }

  /** Sets `item[x]` as CodeableConcept and clears every other type of it. */
  setItemCodeableConcept(itemCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('itemCodeableConcept', itemCodeableConcept);
  }

  hasItemCodeableConcept(): boolean {
    return this.hasFieldValue('itemCodeableConcept');
  }

  getItemReference(): Reference | undefined {
    return this.itemReference;
  }

  /** Sets `item[x]` as Reference and clears every other type of it. */
  setItemReference(itemReference: Reference | undefined): this {
    return this.setFieldValue('itemReference', itemReference);
  }

  hasItemReference(): boolean {
    return this.hasFieldValue('itemReference');
  }

  /** Active ingredient indicator (0..1) */
  getIsActive(): boolean | undefined {
    return this.isActive;
  }

  /** Sets `isActive`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsActive(isActive: boolean | undefined): this {
    return this.setFieldValue('isActive', isActive);
  }

  hasIsActive(): boolean {
    return this.hasFieldValue('isActive');
  }

  /** The element carrying the id and extensions of `isActive`. Created when absent. */
  getIsActiveElement(): Element {
    if (this._isActive === undefined) {
      this._isActive = new Element();
    }
    return this._isActive;
  }

  setIsActiveElement(isActiveElement: Element | undefined): this {
    this._isActive = isActiveElement;
    return this;
  }

  /** Quantity of ingredient present (0..1) Created when absent. */
  getStrength(): Ratio {
    if (this.strength === undefined) {
      this.strength = new Ratio();
    }
    return this.strength;
  }

  setStrength(strength: Ratio | undefined): this {
    return this.setFieldValue('strength', strength);
  }

  hasStrength(): boolean {
    return this.hasFieldValue('strength');
  }
}

modelTypeRegistry.register('MedicationKnowledgeIngredient', MedicationKnowledgeIngredient, false);

/**
 * The pricing of the medication
 */
export class MedicationKnowledgeCost extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'string' }],
    },
    {
      elementName: 'cost',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cost', typeCode: 'Money' }],
    },
  ];

  /** The category of the cost information (1..1) */
  type?: CodeableConcept;

  /** The source or owner for the price information (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;

  /** The price of the medication (1..1) */
  cost?: Money;

  override fhirType(): string {
    return 'MedicationKnowledge.cost';
  }

  /** FHIR JSON for this MedicationKnowledgeCost, typed as the plain `MedicationKnowledgeCost` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeCost {
    return this.serialize() as plainTypes.MedicationKnowledgeCost;
  }

  /** The category of the cost information (1..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The source or owner for the price information (0..1) */
  getSource(): string | undefined {
    return this.source;
  }

  /** Sets `source`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSource(source: string | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** The element carrying the id and extensions of `source`. Created when absent. */
  getSourceElement(): Element {
    if (this._source === undefined) {
      this._source = new Element();
    }
    return this._source;
  }

  setSourceElement(sourceElement: Element | undefined): this {
    this._source = sourceElement;
    return this;
  }

  /** The price of the medication (1..1) Created when absent. */
  getCost(): Money {
    if (this.cost === undefined) {
      this.cost = new Money();
    }
    return this.cost;
  }

  setCost(cost: Money | undefined): this {
    return this.setFieldValue('cost', cost);
  }

  hasCost(): boolean {
    return this.hasFieldValue('cost');
  }
}

modelTypeRegistry.register('MedicationKnowledgeCost', MedicationKnowledgeCost, false);

/**
 * Program under which a medication is reviewed
 */
export class MedicationKnowledgeMonitoringProgram extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
  ];

  /** Type of program under which the medication is monitored (0..1) */
  type?: CodeableConcept;

  /** Name of the reviewing program (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  override fhirType(): string {
    return 'MedicationKnowledge.monitoringProgram';
  }

  /** FHIR JSON for this MedicationKnowledgeMonitoringProgram, typed as the plain `MedicationKnowledgeMonitoringProgram` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeMonitoringProgram {
    return this.serialize() as plainTypes.MedicationKnowledgeMonitoringProgram;
  }

  /** Type of program under which the medication is monitored (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Name of the reviewing program (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeMonitoringProgram',
  MedicationKnowledgeMonitoringProgram,
  false
);

/**
 * Guidelines for administration of the medication
 */
export class MedicationKnowledgeAdministrationGuidelines extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'dosage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dosage', typeCode: 'MedicationKnowledgeAdministrationGuidelinesDosage' }],
    },
    {
      elementName: 'indication',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'indicationCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'indicationReference',
          typeCode: 'Reference',
          targetResourceTypes: ['ObservationDefinition'],
        },
      ],
    },
    {
      elementName: 'patientCharacteristics',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'patientCharacteristics',
          typeCode: 'MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics',
        },
      ],
    },
  ];

  /** Dosage for the medication for the specific guidelines (0..*) */
  dosage?: MedicationKnowledgeAdministrationGuidelinesDosage[];

  /** Indication for use that apply to the specific administration guidelines (0..1) */
  indicationCodeableConcept?: CodeableConcept;
  /** Indication for use that apply to the specific administration guidelines (0..1) */
  indicationReference?: Reference;

  /** Characteristics of the patient that are relevant to the administration guidelines (0..*) */
  patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];

  override fhirType(): string {
    return 'MedicationKnowledge.administrationGuidelines';
  }

  /** FHIR JSON for this MedicationKnowledgeAdministrationGuidelines, typed as the plain `MedicationKnowledgeAdministrationGuidelines` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeAdministrationGuidelines {
    return this.serialize() as plainTypes.MedicationKnowledgeAdministrationGuidelines;
  }

  /** Dosage for the medication for the specific guidelines (0..*) Never undefined; an empty list is created when absent. */
  getDosage(): MedicationKnowledgeAdministrationGuidelinesDosage[] {
    if (this.dosage === undefined) {
      this.dosage = [];
    }
    return this.dosage;
  }

  setDosage(dosage: MedicationKnowledgeAdministrationGuidelinesDosage[] | undefined): this {
    return this.setFieldValue('dosage', dosage);
  }

  hasDosage(): boolean {
    return this.hasFieldValue('dosage');
  }

  /** Appends a new, empty MedicationKnowledgeAdministrationGuidelinesDosage to `dosage` and returns it so it can be filled in. */
  addDosage(): MedicationKnowledgeAdministrationGuidelinesDosage;
  /** Appends the given MedicationKnowledgeAdministrationGuidelinesDosage to `dosage` and returns this object for chaining. */
  addDosage(
    medicationKnowledgeAdministrationGuidelinesDosage: MedicationKnowledgeAdministrationGuidelinesDosage
  ): this;
  addDosage(
    medicationKnowledgeAdministrationGuidelinesDosage?: MedicationKnowledgeAdministrationGuidelinesDosage
  ): MedicationKnowledgeAdministrationGuidelinesDosage | this {
    if (medicationKnowledgeAdministrationGuidelinesDosage !== undefined) {
      return this.addFieldValue('dosage', medicationKnowledgeAdministrationGuidelinesDosage);
    }
    const createdMedicationKnowledgeAdministrationGuidelinesDosage =
      new MedicationKnowledgeAdministrationGuidelinesDosage();
    this.addFieldValue('dosage', createdMedicationKnowledgeAdministrationGuidelinesDosage);
    return createdMedicationKnowledgeAdministrationGuidelinesDosage;
  }

  /** The first MedicationKnowledgeAdministrationGuidelinesDosage of `dosage`. One is added when the list is empty. */
  getDosageFirstRep(): MedicationKnowledgeAdministrationGuidelinesDosage {
    const firstMedicationKnowledgeAdministrationGuidelinesDosage = this.getDosage()[0];
    return firstMedicationKnowledgeAdministrationGuidelinesDosage === undefined
      ? this.addDosage()
      : firstMedicationKnowledgeAdministrationGuidelinesDosage;
  }

  /** Indication for use that apply to the specific administration guidelines (0..1) Whichever type of `indication[x]` is set. */
  getIndication(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('indication');
  }

  /** True when any type of `indication[x]` is set. */
  hasIndication(): boolean {
    return this.hasChoiceValue('indication');
  }

  getIndicationCodeableConcept(): CodeableConcept | undefined {
    return this.indicationCodeableConcept;
  }

  /** Sets `indication[x]` as CodeableConcept and clears every other type of it. */
  setIndicationCodeableConcept(indicationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('indicationCodeableConcept', indicationCodeableConcept);
  }

  hasIndicationCodeableConcept(): boolean {
    return this.hasFieldValue('indicationCodeableConcept');
  }

  getIndicationReference(): Reference | undefined {
    return this.indicationReference;
  }

  /** Sets `indication[x]` as Reference and clears every other type of it. */
  setIndicationReference(indicationReference: Reference | undefined): this {
    return this.setFieldValue('indicationReference', indicationReference);
  }

  hasIndicationReference(): boolean {
    return this.hasFieldValue('indicationReference');
  }

  /** Characteristics of the patient that are relevant to the administration guidelines (0..*) Never undefined; an empty list is created when absent. */
  getPatientCharacteristics(): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[] {
    if (this.patientCharacteristics === undefined) {
      this.patientCharacteristics = [];
    }
    return this.patientCharacteristics;
  }

  setPatientCharacteristics(
    patientCharacteristics:
      MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[] | undefined
  ): this {
    return this.setFieldValue('patientCharacteristics', patientCharacteristics);
  }

  hasPatientCharacteristics(): boolean {
    return this.hasFieldValue('patientCharacteristics');
  }

  /** Appends a new, empty MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics to `patientCharacteristics` and returns it so it can be filled in. */
  addPatientCharacteristics(): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
  /** Appends the given MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics to `patientCharacteristics` and returns this object for chaining. */
  addPatientCharacteristics(
    medicationKnowledgeAdministrationGuidelinesPatientCharacteristics: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics
  ): this;
  addPatientCharacteristics(
    medicationKnowledgeAdministrationGuidelinesPatientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics
  ): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics | this {
    if (medicationKnowledgeAdministrationGuidelinesPatientCharacteristics !== undefined) {
      return this.addFieldValue(
        'patientCharacteristics',
        medicationKnowledgeAdministrationGuidelinesPatientCharacteristics
      );
    }
    const createdMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics =
      new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics();
    this.addFieldValue(
      'patientCharacteristics',
      createdMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics
    );
    return createdMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
  }

  /** The first MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics of `patientCharacteristics`. One is added when the list is empty. */
  getPatientCharacteristicsFirstRep(): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    const firstMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics =
      this.getPatientCharacteristics()[0];
    return firstMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics === undefined
      ? this.addPatientCharacteristics()
      : firstMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeAdministrationGuidelines',
  MedicationKnowledgeAdministrationGuidelines,
  false
);

/**
 * Dosage for the medication for the specific guidelines
 */
export class MedicationKnowledgeAdministrationGuidelinesDosage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'dosage',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dosage', typeCode: 'Dosage' }],
    },
  ];

  /** Type of dosage (1..1) */
  type?: CodeableConcept;

  /** Dosage for the medication for the specific guidelines (1..*) */
  dosage?: Dosage[];

  override fhirType(): string {
    return 'MedicationKnowledge.administrationGuidelines.dosage';
  }

  /** FHIR JSON for this MedicationKnowledgeAdministrationGuidelinesDosage, typed as the plain `MedicationKnowledgeDosage` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeDosage {
    return this.serialize() as plainTypes.MedicationKnowledgeDosage;
  }

  /** Type of dosage (1..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Dosage for the medication for the specific guidelines (1..*) Never undefined; an empty list is created when absent. */
  getDosage(): Dosage[] {
    if (this.dosage === undefined) {
      this.dosage = [];
    }
    return this.dosage;
  }

  setDosage(dosage: Dosage[] | undefined): this {
    return this.setFieldValue('dosage', dosage);
  }

  hasDosage(): boolean {
    return this.hasFieldValue('dosage');
  }

  /** Appends a new, empty Dosage to `dosage` and returns it so it can be filled in. */
  addDosage(): Dosage;
  /** Appends the given Dosage to `dosage` and returns this object for chaining. */
  addDosage(dosage: Dosage): this;
  addDosage(dosage?: Dosage): Dosage | this {
    if (dosage !== undefined) {
      return this.addFieldValue('dosage', dosage);
    }
    const createdDosage = new Dosage();
    this.addFieldValue('dosage', createdDosage);
    return createdDosage;
  }

  /** The first Dosage of `dosage`. One is added when the list is empty. */
  getDosageFirstRep(): Dosage {
    const firstDosage = this.getDosage()[0];
    return firstDosage === undefined ? this.addDosage() : firstDosage;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeAdministrationGuidelinesDosage',
  MedicationKnowledgeAdministrationGuidelinesDosage,
  false
);

/**
 * Characteristics of the patient that are relevant to the administration guidelines
 */
export class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'characteristic',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'characteristicCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'characteristicQuantity', typeCode: 'Quantity' },
      ],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** Specific characteristic that is relevant to the administration guideline (1..1) */
  characteristicCodeableConcept?: CodeableConcept;
  /** Specific characteristic that is relevant to the administration guideline (1..1) */
  characteristicQuantity?: Quantity;

  /** The specific characteristic (0..*) */
  value?: string[];
  /** Id and extensions of the primitive `value`. */
  _value?: (Element | null)[];

  override fhirType(): string {
    return 'MedicationKnowledge.administrationGuidelines.patientCharacteristics';
  }

  /** FHIR JSON for this MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics, typed as the plain `MedicationKnowledgePatientCharacteristics` data type. */
  override toJSON(): plainTypes.MedicationKnowledgePatientCharacteristics {
    return this.serialize() as plainTypes.MedicationKnowledgePatientCharacteristics;
  }

  /** Specific characteristic that is relevant to the administration guideline (1..1) Whichever type of `characteristic[x]` is set. */
  getCharacteristic(): CodeableConcept | Quantity | undefined {
    return this.getChoiceValue<CodeableConcept | Quantity>('characteristic');
  }

  /** True when any type of `characteristic[x]` is set. */
  hasCharacteristic(): boolean {
    return this.hasChoiceValue('characteristic');
  }

  getCharacteristicCodeableConcept(): CodeableConcept | undefined {
    return this.characteristicCodeableConcept;
  }

  /** Sets `characteristic[x]` as CodeableConcept and clears every other type of it. */
  setCharacteristicCodeableConcept(
    characteristicCodeableConcept: CodeableConcept | undefined
  ): this {
    return this.setFieldValue('characteristicCodeableConcept', characteristicCodeableConcept);
  }

  hasCharacteristicCodeableConcept(): boolean {
    return this.hasFieldValue('characteristicCodeableConcept');
  }

  getCharacteristicQuantity(): Quantity | undefined {
    return this.characteristicQuantity;
  }

  /** Sets `characteristic[x]` as Quantity and clears every other type of it. */
  setCharacteristicQuantity(characteristicQuantity: Quantity | undefined): this {
    return this.setFieldValue('characteristicQuantity', characteristicQuantity);
  }

  hasCharacteristicQuantity(): boolean {
    return this.hasFieldValue('characteristicQuantity');
  }

  /** The specific characteristic (0..*) Never undefined; an empty list is created when absent. */
  getValue(): string[] {
    if (this.value === undefined) {
      this.value = [];
    }
    return this.value;
  }

  setValue(value: string[] | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** Appends one value to `value`. Throws a FhirModelError when it is not a valid FHIR string. */
  addValue(value: string): this {
    return this.addFieldValue('value', value);
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics',
  MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  false
);

/**
 * Categorization of the medication within a formulary or classification system
 */
export class MedicationKnowledgeMedicineClassification extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'classification',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classification', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) (1..1) */
  type?: CodeableConcept;

  /** Specific category assigned to the medication (0..*) */
  classification?: CodeableConcept[];

  override fhirType(): string {
    return 'MedicationKnowledge.medicineClassification';
  }

  /** FHIR JSON for this MedicationKnowledgeMedicineClassification, typed as the plain `MedicationKnowledgeMedicineClassification` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeMedicineClassification {
    return this.serialize() as plainTypes.MedicationKnowledgeMedicineClassification;
  }

  /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) (1..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Specific category assigned to the medication (0..*) Never undefined; an empty list is created when absent. */
  getClassification(): CodeableConcept[] {
    if (this.classification === undefined) {
      this.classification = [];
    }
    return this.classification;
  }

  setClassification(classification: CodeableConcept[] | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** Appends a new, empty CodeableConcept to `classification` and returns it so it can be filled in. */
  addClassification(): CodeableConcept;
  /** Appends the given CodeableConcept to `classification` and returns this object for chaining. */
  addClassification(codeableConcept: CodeableConcept): this;
  addClassification(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('classification', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('classification', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `classification`. One is added when the list is empty. */
  getClassificationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClassification()[0];
    return firstCodeableConcept === undefined ? this.addClassification() : firstCodeableConcept;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeMedicineClassification',
  MedicationKnowledgeMedicineClassification,
  false
);

/**
 * Details about packaged medications
 */
export class MedicationKnowledgePackaging extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
  ];

  /** A code that defines the specific type of packaging that the medication can be found in (0..1) */
  type?: CodeableConcept;

  /** The number of product units the package would contain if fully loaded (0..1) */
  quantity?: Quantity;

  override fhirType(): string {
    return 'MedicationKnowledge.packaging';
  }

  /** FHIR JSON for this MedicationKnowledgePackaging, typed as the plain `MedicationKnowledgePackaging` data type. */
  override toJSON(): plainTypes.MedicationKnowledgePackaging {
    return this.serialize() as plainTypes.MedicationKnowledgePackaging;
  }

  /** A code that defines the specific type of packaging that the medication can be found in (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The number of product units the package would contain if fully loaded (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }
}

modelTypeRegistry.register('MedicationKnowledgePackaging', MedicationKnowledgePackaging, false);

/**
 * Specifies descriptive properties of the medicine
 */
export class MedicationKnowledgeDrugCharacteristic extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueBase64Binary', typeCode: 'base64Binary' },
      ],
    },
  ];

  /** Code specifying the type of characteristic of medication (0..1) */
  type?: CodeableConcept;

  /** Description of the characteristic (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Description of the characteristic (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Description of the characteristic (0..1) */
  valueQuantity?: Quantity;
  /** Description of the characteristic (0..1) */
  valueBase64Binary?: string;
  /** Id and extensions of the primitive `valueBase64Binary`. */
  _valueBase64Binary?: Element;

  override fhirType(): string {
    return 'MedicationKnowledge.drugCharacteristic';
  }

  /** FHIR JSON for this MedicationKnowledgeDrugCharacteristic, typed as the plain `MedicationKnowledgeDrugCharacteristic` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeDrugCharacteristic {
    return this.serialize() as plainTypes.MedicationKnowledgeDrugCharacteristic;
  }

  /** Code specifying the type of characteristic of medication (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Description of the characteristic (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | string | Quantity | undefined {
    return this.getChoiceValue<CodeableConcept | string | Quantity>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueBase64Binary(): string | undefined {
    return this.valueBase64Binary;
  }

  /** Sets `value[x]` as base64Binary and clears every other type of it. */
  setValueBase64Binary(valueBase64Binary: string | undefined): this {
    return this.setFieldValue('valueBase64Binary', valueBase64Binary);
  }

  hasValueBase64Binary(): boolean {
    return this.hasFieldValue('valueBase64Binary');
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeDrugCharacteristic',
  MedicationKnowledgeDrugCharacteristic,
  false
);

/**
 * Regulatory information about a medication
 */
export class MedicationKnowledgeRegulatory extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'regulatoryAuthority',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'regulatoryAuthority',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'substitution',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'substitution', typeCode: 'MedicationKnowledgeRegulatorySubstitution' }],
    },
    {
      elementName: 'schedule',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'schedule', typeCode: 'MedicationKnowledgeRegulatorySchedule' }],
    },
    {
      elementName: 'maxDispense',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDispense', typeCode: 'MedicationKnowledgeRegulatoryMaxDispense' }],
    },
  ];

  /** Specifies the authority of the regulation (1..1) */
  regulatoryAuthority?: Reference;

  /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective (0..*) */
  substitution?: MedicationKnowledgeRegulatorySubstitution[];

  /** Specifies the schedule of a medication in jurisdiction (0..*) */
  schedule?: MedicationKnowledgeRegulatorySchedule[];

  /** The maximum number of units of the medication that can be dispensed in a period (0..1) */
  maxDispense?: MedicationKnowledgeRegulatoryMaxDispense;

  override fhirType(): string {
    return 'MedicationKnowledge.regulatory';
  }

  /** FHIR JSON for this MedicationKnowledgeRegulatory, typed as the plain `MedicationKnowledgeRegulatory` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeRegulatory {
    return this.serialize() as plainTypes.MedicationKnowledgeRegulatory;
  }

  /** Specifies the authority of the regulation (1..1) Created when absent. */
  getRegulatoryAuthority(): Reference {
    if (this.regulatoryAuthority === undefined) {
      this.regulatoryAuthority = new Reference();
    }
    return this.regulatoryAuthority;
  }

  setRegulatoryAuthority(regulatoryAuthority: Reference | undefined): this {
    return this.setFieldValue('regulatoryAuthority', regulatoryAuthority);
  }

  hasRegulatoryAuthority(): boolean {
    return this.hasFieldValue('regulatoryAuthority');
  }

  /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective (0..*) Never undefined; an empty list is created when absent. */
  getSubstitution(): MedicationKnowledgeRegulatorySubstitution[] {
    if (this.substitution === undefined) {
      this.substitution = [];
    }
    return this.substitution;
  }

  setSubstitution(substitution: MedicationKnowledgeRegulatorySubstitution[] | undefined): this {
    return this.setFieldValue('substitution', substitution);
  }

  hasSubstitution(): boolean {
    return this.hasFieldValue('substitution');
  }

  /** Appends a new, empty MedicationKnowledgeRegulatorySubstitution to `substitution` and returns it so it can be filled in. */
  addSubstitution(): MedicationKnowledgeRegulatorySubstitution;
  /** Appends the given MedicationKnowledgeRegulatorySubstitution to `substitution` and returns this object for chaining. */
  addSubstitution(
    medicationKnowledgeRegulatorySubstitution: MedicationKnowledgeRegulatorySubstitution
  ): this;
  addSubstitution(
    medicationKnowledgeRegulatorySubstitution?: MedicationKnowledgeRegulatorySubstitution
  ): MedicationKnowledgeRegulatorySubstitution | this {
    if (medicationKnowledgeRegulatorySubstitution !== undefined) {
      return this.addFieldValue('substitution', medicationKnowledgeRegulatorySubstitution);
    }
    const createdMedicationKnowledgeRegulatorySubstitution =
      new MedicationKnowledgeRegulatorySubstitution();
    this.addFieldValue('substitution', createdMedicationKnowledgeRegulatorySubstitution);
    return createdMedicationKnowledgeRegulatorySubstitution;
  }

  /** The first MedicationKnowledgeRegulatorySubstitution of `substitution`. One is added when the list is empty. */
  getSubstitutionFirstRep(): MedicationKnowledgeRegulatorySubstitution {
    const firstMedicationKnowledgeRegulatorySubstitution = this.getSubstitution()[0];
    return firstMedicationKnowledgeRegulatorySubstitution === undefined
      ? this.addSubstitution()
      : firstMedicationKnowledgeRegulatorySubstitution;
  }

  /** Specifies the schedule of a medication in jurisdiction (0..*) Never undefined; an empty list is created when absent. */
  getSchedule(): MedicationKnowledgeRegulatorySchedule[] {
    if (this.schedule === undefined) {
      this.schedule = [];
    }
    return this.schedule;
  }

  setSchedule(schedule: MedicationKnowledgeRegulatorySchedule[] | undefined): this {
    return this.setFieldValue('schedule', schedule);
  }

  hasSchedule(): boolean {
    return this.hasFieldValue('schedule');
  }

  /** Appends a new, empty MedicationKnowledgeRegulatorySchedule to `schedule` and returns it so it can be filled in. */
  addSchedule(): MedicationKnowledgeRegulatorySchedule;
  /** Appends the given MedicationKnowledgeRegulatorySchedule to `schedule` and returns this object for chaining. */
  addSchedule(medicationKnowledgeRegulatorySchedule: MedicationKnowledgeRegulatorySchedule): this;
  addSchedule(
    medicationKnowledgeRegulatorySchedule?: MedicationKnowledgeRegulatorySchedule
  ): MedicationKnowledgeRegulatorySchedule | this {
    if (medicationKnowledgeRegulatorySchedule !== undefined) {
      return this.addFieldValue('schedule', medicationKnowledgeRegulatorySchedule);
    }
    const createdMedicationKnowledgeRegulatorySchedule =
      new MedicationKnowledgeRegulatorySchedule();
    this.addFieldValue('schedule', createdMedicationKnowledgeRegulatorySchedule);
    return createdMedicationKnowledgeRegulatorySchedule;
  }

  /** The first MedicationKnowledgeRegulatorySchedule of `schedule`. One is added when the list is empty. */
  getScheduleFirstRep(): MedicationKnowledgeRegulatorySchedule {
    const firstMedicationKnowledgeRegulatorySchedule = this.getSchedule()[0];
    return firstMedicationKnowledgeRegulatorySchedule === undefined
      ? this.addSchedule()
      : firstMedicationKnowledgeRegulatorySchedule;
  }

  /** The maximum number of units of the medication that can be dispensed in a period (0..1) Created when absent. */
  getMaxDispense(): MedicationKnowledgeRegulatoryMaxDispense {
    if (this.maxDispense === undefined) {
      this.maxDispense = new MedicationKnowledgeRegulatoryMaxDispense();
    }
    return this.maxDispense;
  }

  setMaxDispense(maxDispense: MedicationKnowledgeRegulatoryMaxDispense | undefined): this {
    return this.setFieldValue('maxDispense', maxDispense);
  }

  hasMaxDispense(): boolean {
    return this.hasFieldValue('maxDispense');
  }
}

modelTypeRegistry.register('MedicationKnowledgeRegulatory', MedicationKnowledgeRegulatory, false);

/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 */
export class MedicationKnowledgeRegulatorySubstitution extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'allowed',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allowed', typeCode: 'boolean' }],
    },
  ];

  /** Specifies the type of substitution allowed (1..1) */
  type?: CodeableConcept;

  /** Specifies if regulation allows for changes in the medication when dispensing (1..1) */
  allowed?: boolean;
  /** Id and extensions of the primitive `allowed`. */
  _allowed?: Element;

  override fhirType(): string {
    return 'MedicationKnowledge.regulatory.substitution';
  }

  /** FHIR JSON for this MedicationKnowledgeRegulatorySubstitution, typed as the plain `MedicationKnowledgeSubstitution` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeSubstitution {
    return this.serialize() as plainTypes.MedicationKnowledgeSubstitution;
  }

  /** Specifies the type of substitution allowed (1..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Specifies if regulation allows for changes in the medication when dispensing (1..1) */
  getAllowed(): boolean | undefined {
    return this.allowed;
  }

  /** Sets `allowed`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAllowed(allowed: boolean | undefined): this {
    return this.setFieldValue('allowed', allowed);
  }

  hasAllowed(): boolean {
    return this.hasFieldValue('allowed');
  }

  /** The element carrying the id and extensions of `allowed`. Created when absent. */
  getAllowedElement(): Element {
    if (this._allowed === undefined) {
      this._allowed = new Element();
    }
    return this._allowed;
  }

  setAllowedElement(allowedElement: Element | undefined): this {
    this._allowed = allowedElement;
    return this;
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeRegulatorySubstitution',
  MedicationKnowledgeRegulatorySubstitution,
  false
);

/**
 * Specifies the schedule of a medication in jurisdiction
 */
export class MedicationKnowledgeRegulatorySchedule extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'schedule',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'schedule', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Specifies the specific drug schedule (1..1) */
  schedule?: CodeableConcept;

  override fhirType(): string {
    return 'MedicationKnowledge.regulatory.schedule';
  }

  /** FHIR JSON for this MedicationKnowledgeRegulatorySchedule, typed as the plain `MedicationKnowledgeSchedule` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeSchedule {
    return this.serialize() as plainTypes.MedicationKnowledgeSchedule;
  }

  /** Specifies the specific drug schedule (1..1) Created when absent. */
  getSchedule(): CodeableConcept {
    if (this.schedule === undefined) {
      this.schedule = new CodeableConcept();
    }
    return this.schedule;
  }

  setSchedule(schedule: CodeableConcept | undefined): this {
    return this.setFieldValue('schedule', schedule);
  }

  hasSchedule(): boolean {
    return this.hasFieldValue('schedule');
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeRegulatorySchedule',
  MedicationKnowledgeRegulatorySchedule,
  false
);

/**
 * The maximum number of units of the medication that can be dispensed in a period
 */
export class MedicationKnowledgeRegulatoryMaxDispense extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'quantity',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Duration' }],
    },
  ];

  /** The maximum number of units of the medication that can be dispensed (1..1) */
  quantity?: Quantity;

  /** The period that applies to the maximum number of units (0..1) */
  period?: Duration;

  override fhirType(): string {
    return 'MedicationKnowledge.regulatory.maxDispense';
  }

  /** FHIR JSON for this MedicationKnowledgeRegulatoryMaxDispense, typed as the plain `MedicationKnowledgeMaxDispense` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeMaxDispense {
    return this.serialize() as plainTypes.MedicationKnowledgeMaxDispense;
  }

  /** The maximum number of units of the medication that can be dispensed (1..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** The period that applies to the maximum number of units (0..1) Created when absent. */
  getPeriod(): Duration {
    if (this.period === undefined) {
      this.period = new Duration();
    }
    return this.period;
  }

  setPeriod(period: Duration | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register(
  'MedicationKnowledgeRegulatoryMaxDispense',
  MedicationKnowledgeRegulatoryMaxDispense,
  false
);

/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
 */
export class MedicationKnowledgeKinetics extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'areaUnderCurve',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'areaUnderCurve', typeCode: 'Quantity' }],
    },
    {
      elementName: 'lethalDose50',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'lethalDose50', typeCode: 'Quantity' }],
    },
    {
      elementName: 'halfLifePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'halfLifePeriod', typeCode: 'Duration' }],
    },
  ];

  /** The drug concentration measured at certain discrete points in time (0..*) */
  areaUnderCurve?: Quantity[];

  /** The median lethal dose of a drug (0..*) */
  lethalDose50?: Quantity[];

  /** Time required for concentration in the body to decrease by half (0..1) */
  halfLifePeriod?: Duration;

  override fhirType(): string {
    return 'MedicationKnowledge.kinetics';
  }

  /** FHIR JSON for this MedicationKnowledgeKinetics, typed as the plain `MedicationKnowledgeKinetics` data type. */
  override toJSON(): plainTypes.MedicationKnowledgeKinetics {
    return this.serialize() as plainTypes.MedicationKnowledgeKinetics;
  }

  /** The drug concentration measured at certain discrete points in time (0..*) Never undefined; an empty list is created when absent. */
  getAreaUnderCurve(): Quantity[] {
    if (this.areaUnderCurve === undefined) {
      this.areaUnderCurve = [];
    }
    return this.areaUnderCurve;
  }

  setAreaUnderCurve(areaUnderCurve: Quantity[] | undefined): this {
    return this.setFieldValue('areaUnderCurve', areaUnderCurve);
  }

  hasAreaUnderCurve(): boolean {
    return this.hasFieldValue('areaUnderCurve');
  }

  /** Appends a new, empty Quantity to `areaUnderCurve` and returns it so it can be filled in. */
  addAreaUnderCurve(): Quantity;
  /** Appends the given Quantity to `areaUnderCurve` and returns this object for chaining. */
  addAreaUnderCurve(quantity: Quantity): this;
  addAreaUnderCurve(quantity?: Quantity): Quantity | this {
    if (quantity !== undefined) {
      return this.addFieldValue('areaUnderCurve', quantity);
    }
    const createdQuantity = new Quantity();
    this.addFieldValue('areaUnderCurve', createdQuantity);
    return createdQuantity;
  }

  /** The first Quantity of `areaUnderCurve`. One is added when the list is empty. */
  getAreaUnderCurveFirstRep(): Quantity {
    const firstQuantity = this.getAreaUnderCurve()[0];
    return firstQuantity === undefined ? this.addAreaUnderCurve() : firstQuantity;
  }

  /** The median lethal dose of a drug (0..*) Never undefined; an empty list is created when absent. */
  getLethalDose50(): Quantity[] {
    if (this.lethalDose50 === undefined) {
      this.lethalDose50 = [];
    }
    return this.lethalDose50;
  }

  setLethalDose50(lethalDose50: Quantity[] | undefined): this {
    return this.setFieldValue('lethalDose50', lethalDose50);
  }

  hasLethalDose50(): boolean {
    return this.hasFieldValue('lethalDose50');
  }

  /** Appends a new, empty Quantity to `lethalDose50` and returns it so it can be filled in. */
  addLethalDose50(): Quantity;
  /** Appends the given Quantity to `lethalDose50` and returns this object for chaining. */
  addLethalDose50(quantity: Quantity): this;
  addLethalDose50(quantity?: Quantity): Quantity | this {
    if (quantity !== undefined) {
      return this.addFieldValue('lethalDose50', quantity);
    }
    const createdQuantity = new Quantity();
    this.addFieldValue('lethalDose50', createdQuantity);
    return createdQuantity;
  }

  /** The first Quantity of `lethalDose50`. One is added when the list is empty. */
  getLethalDose50FirstRep(): Quantity {
    const firstQuantity = this.getLethalDose50()[0];
    return firstQuantity === undefined ? this.addLethalDose50() : firstQuantity;
  }

  /** Time required for concentration in the body to decrease by half (0..1) Created when absent. */
  getHalfLifePeriod(): Duration {
    if (this.halfLifePeriod === undefined) {
      this.halfLifePeriod = new Duration();
    }
    return this.halfLifePeriod;
  }

  setHalfLifePeriod(halfLifePeriod: Duration | undefined): this {
    return this.setFieldValue('halfLifePeriod', halfLifePeriod);
  }

  hasHalfLifePeriod(): boolean {
    return this.hasFieldValue('halfLifePeriod');
  }
}

modelTypeRegistry.register('MedicationKnowledgeKinetics', MedicationKnowledgeKinetics, false);
