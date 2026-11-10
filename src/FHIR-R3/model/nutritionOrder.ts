/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * Base StructureDefinition for NutritionOrder Resource
 */
export class NutritionOrder extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.NutritionOrderStatus },
      ],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'dateTime',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'orderer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'orderer', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] }],
    },
    {
      elementName: 'allergyIntolerance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'allergyIntolerance',
          typeCode: 'Reference',
          targetResourceTypes: ['AllergyIntolerance'],
        },
      ],
    },
    {
      elementName: 'foodPreferenceModifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'foodPreferenceModifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'excludeFoodModifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'excludeFoodModifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'oralDiet',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'oralDiet', typeCode: 'NutritionOrderOralDiet' }],
    },
    {
      elementName: 'supplement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supplement', typeCode: 'NutritionOrderSupplement' }],
    },
    {
      elementName: 'enteralFormula',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'enteralFormula', typeCode: 'NutritionOrderEnteralFormula' }],
    },
  ];

  readonly resourceType = 'NutritionOrder';

  /** Identifiers assigned to this order (0..*) */
  identifier?: Identifier[];

  /** proposed | draft | planned | requested | active | on-hold | completed | cancelled | entered-in-error (0..1) */
  status?: valueSetCodes.NutritionOrderStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The person who requires the diet, formula or nutritional supplement (1..1) */
  patient?: Reference;

  /** The encounter associated with this nutrition order (0..1) */
  encounter?: Reference;

  /** Date and time the nutrition order was requested (1..1) */
  dateTime?: string;
  /** Id and extensions of the primitive `dateTime`. */
  _dateTime?: Element;

  /** Who ordered the diet, formula or nutritional supplement (0..1) */
  orderer?: Reference;

  /** List of the patient's food and nutrition-related allergies and intolerances (0..*) */
  allergyIntolerance?: Reference[];

  /** Order-specific modifier about the type of food that should be given (0..*) */
  foodPreferenceModifier?: CodeableConcept[];

  /** Order-specific modifier about the type of food that should not be given (0..*) */
  excludeFoodModifier?: CodeableConcept[];

  /** Oral diet components (0..1) */
  oralDiet?: NutritionOrderOralDiet;

  /** Supplement components (0..*) */
  supplement?: NutritionOrderSupplement[];

  /** Enteral formula components (0..1) */
  enteralFormula?: NutritionOrderEnteralFormula;

  override fhirType(): string {
    return 'NutritionOrder';
  }

  /** FHIR JSON for this NutritionOrder, typed as the plain `NutritionOrder` data type. */
  override toJSON(): plainTypes.NutritionOrder {
    return this.serialize() as plainTypes.NutritionOrder;
  }

  /** Identifiers assigned to this order (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
  }

  /** proposed | draft | planned | requested | active | on-hold | completed | cancelled | entered-in-error (0..1) */
  getStatus(): valueSetCodes.NutritionOrderStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.NutritionOrderStatus | undefined): this {
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

  /** The person who requires the diet, formula or nutritional supplement (1..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** The encounter associated with this nutrition order (0..1) Created when absent. */
  getEncounter(): Reference {
    if (this.encounter === undefined) {
      this.encounter = new Reference();
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
  }

  /** Date and time the nutrition order was requested (1..1) */
  getDateTime(): string | undefined {
    return this.dateTime;
  }

  /** Sets `dateTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDateTime(dateTime: string | undefined): this {
    return this.setFieldValue('dateTime', dateTime);
  }

  hasDateTime(): boolean {
    return this.hasFieldValue('dateTime');
  }

  /** The element carrying the id and extensions of `dateTime`. Created when absent. */
  getDateTimeElement(): Element {
    if (this._dateTime === undefined) {
      this._dateTime = new Element();
    }
    return this._dateTime;
  }

  setDateTimeElement(dateTimeElement: Element | undefined): this {
    this._dateTime = dateTimeElement;
    return this;
  }

  /** Who ordered the diet, formula or nutritional supplement (0..1) Created when absent. */
  getOrderer(): Reference {
    if (this.orderer === undefined) {
      this.orderer = new Reference();
    }
    return this.orderer;
  }

  setOrderer(orderer: Reference | undefined): this {
    return this.setFieldValue('orderer', orderer);
  }

  hasOrderer(): boolean {
    return this.hasFieldValue('orderer');
  }

  /** List of the patient's food and nutrition-related allergies and intolerances (0..*) Never undefined; an empty list is created when absent. */
  getAllergyIntolerance(): Reference[] {
    if (this.allergyIntolerance === undefined) {
      this.allergyIntolerance = [];
    }
    return this.allergyIntolerance;
  }

  setAllergyIntolerance(allergyIntolerance: Reference[] | undefined): this {
    return this.setFieldValue('allergyIntolerance', allergyIntolerance);
  }

  hasAllergyIntolerance(): boolean {
    return this.hasFieldValue('allergyIntolerance');
  }

  /** Appends a new, empty Reference to `allergyIntolerance` and returns it so it can be filled in. */
  addAllergyIntolerance(): Reference;
  /** Appends the given Reference to `allergyIntolerance` and returns this object for chaining. */
  addAllergyIntolerance(reference: Reference): this;
  addAllergyIntolerance(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('allergyIntolerance', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('allergyIntolerance', createdReference);
    return createdReference;
  }

  /** The first Reference of `allergyIntolerance`. One is added when the list is empty. */
  getAllergyIntoleranceFirstRep(): Reference {
    const firstReference = this.getAllergyIntolerance()[0];
    return firstReference === undefined ? this.addAllergyIntolerance() : firstReference;
  }

  /** Order-specific modifier about the type of food that should be given (0..*) Never undefined; an empty list is created when absent. */
  getFoodPreferenceModifier(): CodeableConcept[] {
    if (this.foodPreferenceModifier === undefined) {
      this.foodPreferenceModifier = [];
    }
    return this.foodPreferenceModifier;
  }

  setFoodPreferenceModifier(foodPreferenceModifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('foodPreferenceModifier', foodPreferenceModifier);
  }

  hasFoodPreferenceModifier(): boolean {
    return this.hasFieldValue('foodPreferenceModifier');
  }

  /** Appends a new, empty CodeableConcept to `foodPreferenceModifier` and returns it so it can be filled in. */
  addFoodPreferenceModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `foodPreferenceModifier` and returns this object for chaining. */
  addFoodPreferenceModifier(codeableConcept: CodeableConcept): this;
  addFoodPreferenceModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('foodPreferenceModifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('foodPreferenceModifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `foodPreferenceModifier`. One is added when the list is empty. */
  getFoodPreferenceModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getFoodPreferenceModifier()[0];
    return firstCodeableConcept === undefined
      ? this.addFoodPreferenceModifier()
      : firstCodeableConcept;
  }

  /** Order-specific modifier about the type of food that should not be given (0..*) Never undefined; an empty list is created when absent. */
  getExcludeFoodModifier(): CodeableConcept[] {
    if (this.excludeFoodModifier === undefined) {
      this.excludeFoodModifier = [];
    }
    return this.excludeFoodModifier;
  }

  setExcludeFoodModifier(excludeFoodModifier: CodeableConcept[] | undefined): this {
    return this.setFieldValue('excludeFoodModifier', excludeFoodModifier);
  }

  hasExcludeFoodModifier(): boolean {
    return this.hasFieldValue('excludeFoodModifier');
  }

  /** Appends a new, empty CodeableConcept to `excludeFoodModifier` and returns it so it can be filled in. */
  addExcludeFoodModifier(): CodeableConcept;
  /** Appends the given CodeableConcept to `excludeFoodModifier` and returns this object for chaining. */
  addExcludeFoodModifier(codeableConcept: CodeableConcept): this;
  addExcludeFoodModifier(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('excludeFoodModifier', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('excludeFoodModifier', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `excludeFoodModifier`. One is added when the list is empty. */
  getExcludeFoodModifierFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getExcludeFoodModifier()[0];
    return firstCodeableConcept === undefined
      ? this.addExcludeFoodModifier()
      : firstCodeableConcept;
  }

  /** Oral diet components (0..1) Created when absent. */
  getOralDiet(): NutritionOrderOralDiet {
    if (this.oralDiet === undefined) {
      this.oralDiet = new NutritionOrderOralDiet();
    }
    return this.oralDiet;
  }

  setOralDiet(oralDiet: NutritionOrderOralDiet | undefined): this {
    return this.setFieldValue('oralDiet', oralDiet);
  }

  hasOralDiet(): boolean {
    return this.hasFieldValue('oralDiet');
  }

  /** Supplement components (0..*) Never undefined; an empty list is created when absent. */
  getSupplement(): NutritionOrderSupplement[] {
    if (this.supplement === undefined) {
      this.supplement = [];
    }
    return this.supplement;
  }

  setSupplement(supplement: NutritionOrderSupplement[] | undefined): this {
    return this.setFieldValue('supplement', supplement);
  }

  hasSupplement(): boolean {
    return this.hasFieldValue('supplement');
  }

  /** Appends a new, empty NutritionOrderSupplement to `supplement` and returns it so it can be filled in. */
  addSupplement(): NutritionOrderSupplement;
  /** Appends the given NutritionOrderSupplement to `supplement` and returns this object for chaining. */
  addSupplement(nutritionOrderSupplement: NutritionOrderSupplement): this;
  addSupplement(
    nutritionOrderSupplement?: NutritionOrderSupplement
  ): NutritionOrderSupplement | this {
    if (nutritionOrderSupplement !== undefined) {
      return this.addFieldValue('supplement', nutritionOrderSupplement);
    }
    const createdNutritionOrderSupplement = new NutritionOrderSupplement();
    this.addFieldValue('supplement', createdNutritionOrderSupplement);
    return createdNutritionOrderSupplement;
  }

  /** The first NutritionOrderSupplement of `supplement`. One is added when the list is empty. */
  getSupplementFirstRep(): NutritionOrderSupplement {
    const firstNutritionOrderSupplement = this.getSupplement()[0];
    return firstNutritionOrderSupplement === undefined
      ? this.addSupplement()
      : firstNutritionOrderSupplement;
  }

  /** Enteral formula components (0..1) Created when absent. */
  getEnteralFormula(): NutritionOrderEnteralFormula {
    if (this.enteralFormula === undefined) {
      this.enteralFormula = new NutritionOrderEnteralFormula();
    }
    return this.enteralFormula;
  }

  setEnteralFormula(enteralFormula: NutritionOrderEnteralFormula | undefined): this {
    return this.setFieldValue('enteralFormula', enteralFormula);
  }

  hasEnteralFormula(): boolean {
    return this.hasFieldValue('enteralFormula');
  }
}

modelTypeRegistry.register('NutritionOrder', NutritionOrder, true);

/** True when the value is a NutritionOrder model instance. */
export function isNutritionOrder(candidate: unknown): candidate is NutritionOrder {
  return candidate instanceof NutritionOrder;
}

/**
 * Oral diet components
 */
export class NutritionOrderOralDiet extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'schedule',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'schedule', typeCode: 'Timing' }],
    },
    {
      elementName: 'nutrient',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'nutrient', typeCode: 'NutritionOrderOralDietNutrient' }],
    },
    {
      elementName: 'texture',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'texture', typeCode: 'NutritionOrderOralDietTexture' }],
    },
    {
      elementName: 'fluidConsistencyType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'fluidConsistencyType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'instruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instruction', typeCode: 'string' }],
    },
  ];

  /** Type of oral diet or diet restrictions that describe what can be consumed orally (0..*) */
  type?: CodeableConcept[];

  /** Scheduled frequency of diet (0..*) */
  schedule?: Timing[];

  /** Required nutrient modifications (0..*) */
  nutrient?: NutritionOrderOralDietNutrient[];

  /** Required texture modifications (0..*) */
  texture?: NutritionOrderOralDietTexture[];

  /** The required consistency of fluids and liquids provided to the patient (0..*) */
  fluidConsistencyType?: CodeableConcept[];

  /** Instructions or additional information about the oral diet (0..1) */
  instruction?: string;
  /** Id and extensions of the primitive `instruction`. */
  _instruction?: Element;

  override fhirType(): string {
    return 'NutritionOrder.oralDiet';
  }

  /** FHIR JSON for this NutritionOrderOralDiet, typed as the plain `NutritionOrderOralDiet` data type. */
  override toJSON(): plainTypes.NutritionOrderOralDiet {
    return this.serialize() as plainTypes.NutritionOrderOralDiet;
  }

  /** Type of oral diet or diet restrictions that describe what can be consumed orally (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** Scheduled frequency of diet (0..*) Never undefined; an empty list is created when absent. */
  getSchedule(): Timing[] {
    if (this.schedule === undefined) {
      this.schedule = [];
    }
    return this.schedule;
  }

  setSchedule(schedule: Timing[] | undefined): this {
    return this.setFieldValue('schedule', schedule);
  }

  hasSchedule(): boolean {
    return this.hasFieldValue('schedule');
  }

  /** Appends a new, empty Timing to `schedule` and returns it so it can be filled in. */
  addSchedule(): Timing;
  /** Appends the given Timing to `schedule` and returns this object for chaining. */
  addSchedule(timing: Timing): this;
  addSchedule(timing?: Timing): Timing | this {
    if (timing !== undefined) {
      return this.addFieldValue('schedule', timing);
    }
    const createdTiming = new Timing();
    this.addFieldValue('schedule', createdTiming);
    return createdTiming;
  }

  /** The first Timing of `schedule`. One is added when the list is empty. */
  getScheduleFirstRep(): Timing {
    const firstTiming = this.getSchedule()[0];
    return firstTiming === undefined ? this.addSchedule() : firstTiming;
  }

  /** Required nutrient modifications (0..*) Never undefined; an empty list is created when absent. */
  getNutrient(): NutritionOrderOralDietNutrient[] {
    if (this.nutrient === undefined) {
      this.nutrient = [];
    }
    return this.nutrient;
  }

  setNutrient(nutrient: NutritionOrderOralDietNutrient[] | undefined): this {
    return this.setFieldValue('nutrient', nutrient);
  }

  hasNutrient(): boolean {
    return this.hasFieldValue('nutrient');
  }

  /** Appends a new, empty NutritionOrderOralDietNutrient to `nutrient` and returns it so it can be filled in. */
  addNutrient(): NutritionOrderOralDietNutrient;
  /** Appends the given NutritionOrderOralDietNutrient to `nutrient` and returns this object for chaining. */
  addNutrient(nutritionOrderOralDietNutrient: NutritionOrderOralDietNutrient): this;
  addNutrient(
    nutritionOrderOralDietNutrient?: NutritionOrderOralDietNutrient
  ): NutritionOrderOralDietNutrient | this {
    if (nutritionOrderOralDietNutrient !== undefined) {
      return this.addFieldValue('nutrient', nutritionOrderOralDietNutrient);
    }
    const createdNutritionOrderOralDietNutrient = new NutritionOrderOralDietNutrient();
    this.addFieldValue('nutrient', createdNutritionOrderOralDietNutrient);
    return createdNutritionOrderOralDietNutrient;
  }

  /** The first NutritionOrderOralDietNutrient of `nutrient`. One is added when the list is empty. */
  getNutrientFirstRep(): NutritionOrderOralDietNutrient {
    const firstNutritionOrderOralDietNutrient = this.getNutrient()[0];
    return firstNutritionOrderOralDietNutrient === undefined
      ? this.addNutrient()
      : firstNutritionOrderOralDietNutrient;
  }

  /** Required texture modifications (0..*) Never undefined; an empty list is created when absent. */
  getTexture(): NutritionOrderOralDietTexture[] {
    if (this.texture === undefined) {
      this.texture = [];
    }
    return this.texture;
  }

  setTexture(texture: NutritionOrderOralDietTexture[] | undefined): this {
    return this.setFieldValue('texture', texture);
  }

  hasTexture(): boolean {
    return this.hasFieldValue('texture');
  }

  /** Appends a new, empty NutritionOrderOralDietTexture to `texture` and returns it so it can be filled in. */
  addTexture(): NutritionOrderOralDietTexture;
  /** Appends the given NutritionOrderOralDietTexture to `texture` and returns this object for chaining. */
  addTexture(nutritionOrderOralDietTexture: NutritionOrderOralDietTexture): this;
  addTexture(
    nutritionOrderOralDietTexture?: NutritionOrderOralDietTexture
  ): NutritionOrderOralDietTexture | this {
    if (nutritionOrderOralDietTexture !== undefined) {
      return this.addFieldValue('texture', nutritionOrderOralDietTexture);
    }
    const createdNutritionOrderOralDietTexture = new NutritionOrderOralDietTexture();
    this.addFieldValue('texture', createdNutritionOrderOralDietTexture);
    return createdNutritionOrderOralDietTexture;
  }

  /** The first NutritionOrderOralDietTexture of `texture`. One is added when the list is empty. */
  getTextureFirstRep(): NutritionOrderOralDietTexture {
    const firstNutritionOrderOralDietTexture = this.getTexture()[0];
    return firstNutritionOrderOralDietTexture === undefined
      ? this.addTexture()
      : firstNutritionOrderOralDietTexture;
  }

  /** The required consistency of fluids and liquids provided to the patient (0..*) Never undefined; an empty list is created when absent. */
  getFluidConsistencyType(): CodeableConcept[] {
    if (this.fluidConsistencyType === undefined) {
      this.fluidConsistencyType = [];
    }
    return this.fluidConsistencyType;
  }

  setFluidConsistencyType(fluidConsistencyType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('fluidConsistencyType', fluidConsistencyType);
  }

  hasFluidConsistencyType(): boolean {
    return this.hasFieldValue('fluidConsistencyType');
  }

  /** Appends a new, empty CodeableConcept to `fluidConsistencyType` and returns it so it can be filled in. */
  addFluidConsistencyType(): CodeableConcept;
  /** Appends the given CodeableConcept to `fluidConsistencyType` and returns this object for chaining. */
  addFluidConsistencyType(codeableConcept: CodeableConcept): this;
  addFluidConsistencyType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('fluidConsistencyType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('fluidConsistencyType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `fluidConsistencyType`. One is added when the list is empty. */
  getFluidConsistencyTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getFluidConsistencyType()[0];
    return firstCodeableConcept === undefined
      ? this.addFluidConsistencyType()
      : firstCodeableConcept;
  }

  /** Instructions or additional information about the oral diet (0..1) */
  getInstruction(): string | undefined {
    return this.instruction;
  }

  /** Sets `instruction`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setInstruction(instruction: string | undefined): this {
    return this.setFieldValue('instruction', instruction);
  }

  hasInstruction(): boolean {
    return this.hasFieldValue('instruction');
  }

  /** The element carrying the id and extensions of `instruction`. Created when absent. */
  getInstructionElement(): Element {
    if (this._instruction === undefined) {
      this._instruction = new Element();
    }
    return this._instruction;
  }

  setInstructionElement(instructionElement: Element | undefined): this {
    this._instruction = instructionElement;
    return this;
  }
}

modelTypeRegistry.register('NutritionOrderOralDiet', NutritionOrderOralDiet, false);

/**
 * Required nutrient modifications
 */
export class NutritionOrderOralDietNutrient extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
  ];

  /** Type of nutrient that is being modified (0..1) */
  modifier?: CodeableConcept;

  /** Quantity of the specified nutrient (0..1) */
  amount?: Quantity;

  override fhirType(): string {
    return 'NutritionOrder.oralDiet.nutrient';
  }

  /** FHIR JSON for this NutritionOrderOralDietNutrient, typed as the plain `NutritionOrderNutrient` data type. */
  override toJSON(): plainTypes.NutritionOrderNutrient {
    return this.serialize() as plainTypes.NutritionOrderNutrient;
  }

  /** Type of nutrient that is being modified (0..1) Created when absent. */
  getModifier(): CodeableConcept {
    if (this.modifier === undefined) {
      this.modifier = new CodeableConcept();
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Quantity of the specified nutrient (0..1) Created when absent. */
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
}

modelTypeRegistry.register('NutritionOrderOralDietNutrient', NutritionOrderOralDietNutrient, false);

/**
 * Required texture modifications
 */
export class NutritionOrderOralDietTexture extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'modifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'modifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'foodType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'foodType', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Code to indicate how to alter the texture of the foods, e.g. pureed (0..1) */
  modifier?: CodeableConcept;

  /** Concepts that are used to identify an entity that is ingested for nutritional purposes (0..1) */
  foodType?: CodeableConcept;

  override fhirType(): string {
    return 'NutritionOrder.oralDiet.texture';
  }

  /** FHIR JSON for this NutritionOrderOralDietTexture, typed as the plain `NutritionOrderTexture` data type. */
  override toJSON(): plainTypes.NutritionOrderTexture {
    return this.serialize() as plainTypes.NutritionOrderTexture;
  }

  /** Code to indicate how to alter the texture of the foods, e.g. pureed (0..1) Created when absent. */
  getModifier(): CodeableConcept {
    if (this.modifier === undefined) {
      this.modifier = new CodeableConcept();
    }
    return this.modifier;
  }

  setModifier(modifier: CodeableConcept | undefined): this {
    return this.setFieldValue('modifier', modifier);
  }

  hasModifier(): boolean {
    return this.hasFieldValue('modifier');
  }

  /** Concepts that are used to identify an entity that is ingested for nutritional purposes (0..1) Created when absent. */
  getFoodType(): CodeableConcept {
    if (this.foodType === undefined) {
      this.foodType = new CodeableConcept();
    }
    return this.foodType;
  }

  setFoodType(foodType: CodeableConcept | undefined): this {
    return this.setFieldValue('foodType', foodType);
  }

  hasFoodType(): boolean {
    return this.hasFieldValue('foodType');
  }
}

modelTypeRegistry.register('NutritionOrderOralDietTexture', NutritionOrderOralDietTexture, false);

/**
 * Supplement components
 */
export class NutritionOrderSupplement extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'productName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productName', typeCode: 'string' }],
    },
    {
      elementName: 'schedule',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'schedule', typeCode: 'Timing' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'instruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instruction', typeCode: 'string' }],
    },
  ];

  /** Type of supplement product requested (0..1) */
  type?: CodeableConcept;

  /** Product or brand name of the nutritional supplement (0..1) */
  productName?: string;
  /** Id and extensions of the primitive `productName`. */
  _productName?: Element;

  /** Scheduled frequency of supplement (0..*) */
  schedule?: Timing[];

  /** Amount of the nutritional supplement (0..1) */
  quantity?: Quantity;

  /** Instructions or additional information about the oral supplement (0..1) */
  instruction?: string;
  /** Id and extensions of the primitive `instruction`. */
  _instruction?: Element;

  override fhirType(): string {
    return 'NutritionOrder.supplement';
  }

  /** FHIR JSON for this NutritionOrderSupplement, typed as the plain `NutritionOrderSupplement` data type. */
  override toJSON(): plainTypes.NutritionOrderSupplement {
    return this.serialize() as plainTypes.NutritionOrderSupplement;
  }

  /** Type of supplement product requested (0..1) Created when absent. */
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

  /** Product or brand name of the nutritional supplement (0..1) */
  getProductName(): string | undefined {
    return this.productName;
  }

  /** Sets `productName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setProductName(productName: string | undefined): this {
    return this.setFieldValue('productName', productName);
  }

  hasProductName(): boolean {
    return this.hasFieldValue('productName');
  }

  /** The element carrying the id and extensions of `productName`. Created when absent. */
  getProductNameElement(): Element {
    if (this._productName === undefined) {
      this._productName = new Element();
    }
    return this._productName;
  }

  setProductNameElement(productNameElement: Element | undefined): this {
    this._productName = productNameElement;
    return this;
  }

  /** Scheduled frequency of supplement (0..*) Never undefined; an empty list is created when absent. */
  getSchedule(): Timing[] {
    if (this.schedule === undefined) {
      this.schedule = [];
    }
    return this.schedule;
  }

  setSchedule(schedule: Timing[] | undefined): this {
    return this.setFieldValue('schedule', schedule);
  }

  hasSchedule(): boolean {
    return this.hasFieldValue('schedule');
  }

  /** Appends a new, empty Timing to `schedule` and returns it so it can be filled in. */
  addSchedule(): Timing;
  /** Appends the given Timing to `schedule` and returns this object for chaining. */
  addSchedule(timing: Timing): this;
  addSchedule(timing?: Timing): Timing | this {
    if (timing !== undefined) {
      return this.addFieldValue('schedule', timing);
    }
    const createdTiming = new Timing();
    this.addFieldValue('schedule', createdTiming);
    return createdTiming;
  }

  /** The first Timing of `schedule`. One is added when the list is empty. */
  getScheduleFirstRep(): Timing {
    const firstTiming = this.getSchedule()[0];
    return firstTiming === undefined ? this.addSchedule() : firstTiming;
  }

  /** Amount of the nutritional supplement (0..1) Created when absent. */
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

  /** Instructions or additional information about the oral supplement (0..1) */
  getInstruction(): string | undefined {
    return this.instruction;
  }

  /** Sets `instruction`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setInstruction(instruction: string | undefined): this {
    return this.setFieldValue('instruction', instruction);
  }

  hasInstruction(): boolean {
    return this.hasFieldValue('instruction');
  }

  /** The element carrying the id and extensions of `instruction`. Created when absent. */
  getInstructionElement(): Element {
    if (this._instruction === undefined) {
      this._instruction = new Element();
    }
    return this._instruction;
  }

  setInstructionElement(instructionElement: Element | undefined): this {
    this._instruction = instructionElement;
    return this;
  }
}

modelTypeRegistry.register('NutritionOrderSupplement', NutritionOrderSupplement, false);

/**
 * Enteral formula components
 */
export class NutritionOrderEnteralFormula extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'baseFormulaType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'baseFormulaType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'baseFormulaProductName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'baseFormulaProductName', typeCode: 'string' }],
    },
    {
      elementName: 'additiveType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'additiveType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'additiveProductName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'additiveProductName', typeCode: 'string' }],
    },
    {
      elementName: 'caloricDensity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'caloricDensity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'routeofAdministration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'routeofAdministration', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'administration',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'administration', typeCode: 'NutritionOrderEnteralFormulaAdministration' },
      ],
    },
    {
      elementName: 'maxVolumeToDeliver',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxVolumeToDeliver', typeCode: 'Quantity' }],
    },
    {
      elementName: 'administrationInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'administrationInstruction', typeCode: 'string' }],
    },
  ];

  /** Type of enteral or infant formula (0..1) */
  baseFormulaType?: CodeableConcept;

  /** Product or brand name of the enteral or infant formula (0..1) */
  baseFormulaProductName?: string;
  /** Id and extensions of the primitive `baseFormulaProductName`. */
  _baseFormulaProductName?: Element;

  /** Type of modular component to add to the feeding (0..1) */
  additiveType?: CodeableConcept;

  /** Product or brand name of the modular additive (0..1) */
  additiveProductName?: string;
  /** Id and extensions of the primitive `additiveProductName`. */
  _additiveProductName?: Element;

  /** Amount of energy per specified volume that is required (0..1) */
  caloricDensity?: Quantity;

  /** How the formula should enter the patient's gastrointestinal tract (0..1) */
  routeofAdministration?: CodeableConcept;

  /** Formula feeding instruction as structured data (0..*) */
  administration?: NutritionOrderEnteralFormulaAdministration[];

  /** Upper limit on formula volume per unit of time (0..1) */
  maxVolumeToDeliver?: Quantity;

  /** Formula feeding instructions expressed as text (0..1) */
  administrationInstruction?: string;
  /** Id and extensions of the primitive `administrationInstruction`. */
  _administrationInstruction?: Element;

  override fhirType(): string {
    return 'NutritionOrder.enteralFormula';
  }

  /** FHIR JSON for this NutritionOrderEnteralFormula, typed as the plain `NutritionOrderEnteralFormula` data type. */
  override toJSON(): plainTypes.NutritionOrderEnteralFormula {
    return this.serialize() as plainTypes.NutritionOrderEnteralFormula;
  }

  /** Type of enteral or infant formula (0..1) Created when absent. */
  getBaseFormulaType(): CodeableConcept {
    if (this.baseFormulaType === undefined) {
      this.baseFormulaType = new CodeableConcept();
    }
    return this.baseFormulaType;
  }

  setBaseFormulaType(baseFormulaType: CodeableConcept | undefined): this {
    return this.setFieldValue('baseFormulaType', baseFormulaType);
  }

  hasBaseFormulaType(): boolean {
    return this.hasFieldValue('baseFormulaType');
  }

  /** Product or brand name of the enteral or infant formula (0..1) */
  getBaseFormulaProductName(): string | undefined {
    return this.baseFormulaProductName;
  }

  /** Sets `baseFormulaProductName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setBaseFormulaProductName(baseFormulaProductName: string | undefined): this {
    return this.setFieldValue('baseFormulaProductName', baseFormulaProductName);
  }

  hasBaseFormulaProductName(): boolean {
    return this.hasFieldValue('baseFormulaProductName');
  }

  /** The element carrying the id and extensions of `baseFormulaProductName`. Created when absent. */
  getBaseFormulaProductNameElement(): Element {
    if (this._baseFormulaProductName === undefined) {
      this._baseFormulaProductName = new Element();
    }
    return this._baseFormulaProductName;
  }

  setBaseFormulaProductNameElement(baseFormulaProductNameElement: Element | undefined): this {
    this._baseFormulaProductName = baseFormulaProductNameElement;
    return this;
  }

  /** Type of modular component to add to the feeding (0..1) Created when absent. */
  getAdditiveType(): CodeableConcept {
    if (this.additiveType === undefined) {
      this.additiveType = new CodeableConcept();
    }
    return this.additiveType;
  }

  setAdditiveType(additiveType: CodeableConcept | undefined): this {
    return this.setFieldValue('additiveType', additiveType);
  }

  hasAdditiveType(): boolean {
    return this.hasFieldValue('additiveType');
  }

  /** Product or brand name of the modular additive (0..1) */
  getAdditiveProductName(): string | undefined {
    return this.additiveProductName;
  }

  /** Sets `additiveProductName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAdditiveProductName(additiveProductName: string | undefined): this {
    return this.setFieldValue('additiveProductName', additiveProductName);
  }

  hasAdditiveProductName(): boolean {
    return this.hasFieldValue('additiveProductName');
  }

  /** The element carrying the id and extensions of `additiveProductName`. Created when absent. */
  getAdditiveProductNameElement(): Element {
    if (this._additiveProductName === undefined) {
      this._additiveProductName = new Element();
    }
    return this._additiveProductName;
  }

  setAdditiveProductNameElement(additiveProductNameElement: Element | undefined): this {
    this._additiveProductName = additiveProductNameElement;
    return this;
  }

  /** Amount of energy per specified volume that is required (0..1) Created when absent. */
  getCaloricDensity(): Quantity {
    if (this.caloricDensity === undefined) {
      this.caloricDensity = new Quantity();
    }
    return this.caloricDensity;
  }

  setCaloricDensity(caloricDensity: Quantity | undefined): this {
    return this.setFieldValue('caloricDensity', caloricDensity);
  }

  hasCaloricDensity(): boolean {
    return this.hasFieldValue('caloricDensity');
  }

  /** How the formula should enter the patient's gastrointestinal tract (0..1) Created when absent. */
  getRouteofAdministration(): CodeableConcept {
    if (this.routeofAdministration === undefined) {
      this.routeofAdministration = new CodeableConcept();
    }
    return this.routeofAdministration;
  }

  setRouteofAdministration(routeofAdministration: CodeableConcept | undefined): this {
    return this.setFieldValue('routeofAdministration', routeofAdministration);
  }

  hasRouteofAdministration(): boolean {
    return this.hasFieldValue('routeofAdministration');
  }

  /** Formula feeding instruction as structured data (0..*) Never undefined; an empty list is created when absent. */
  getAdministration(): NutritionOrderEnteralFormulaAdministration[] {
    if (this.administration === undefined) {
      this.administration = [];
    }
    return this.administration;
  }

  setAdministration(
    administration: NutritionOrderEnteralFormulaAdministration[] | undefined
  ): this {
    return this.setFieldValue('administration', administration);
  }

  hasAdministration(): boolean {
    return this.hasFieldValue('administration');
  }

  /** Appends a new, empty NutritionOrderEnteralFormulaAdministration to `administration` and returns it so it can be filled in. */
  addAdministration(): NutritionOrderEnteralFormulaAdministration;
  /** Appends the given NutritionOrderEnteralFormulaAdministration to `administration` and returns this object for chaining. */
  addAdministration(
    nutritionOrderEnteralFormulaAdministration: NutritionOrderEnteralFormulaAdministration
  ): this;
  addAdministration(
    nutritionOrderEnteralFormulaAdministration?: NutritionOrderEnteralFormulaAdministration
  ): NutritionOrderEnteralFormulaAdministration | this {
    if (nutritionOrderEnteralFormulaAdministration !== undefined) {
      return this.addFieldValue('administration', nutritionOrderEnteralFormulaAdministration);
    }
    const createdNutritionOrderEnteralFormulaAdministration =
      new NutritionOrderEnteralFormulaAdministration();
    this.addFieldValue('administration', createdNutritionOrderEnteralFormulaAdministration);
    return createdNutritionOrderEnteralFormulaAdministration;
  }

  /** The first NutritionOrderEnteralFormulaAdministration of `administration`. One is added when the list is empty. */
  getAdministrationFirstRep(): NutritionOrderEnteralFormulaAdministration {
    const firstNutritionOrderEnteralFormulaAdministration = this.getAdministration()[0];
    return firstNutritionOrderEnteralFormulaAdministration === undefined
      ? this.addAdministration()
      : firstNutritionOrderEnteralFormulaAdministration;
  }

  /** Upper limit on formula volume per unit of time (0..1) Created when absent. */
  getMaxVolumeToDeliver(): Quantity {
    if (this.maxVolumeToDeliver === undefined) {
      this.maxVolumeToDeliver = new Quantity();
    }
    return this.maxVolumeToDeliver;
  }

  setMaxVolumeToDeliver(maxVolumeToDeliver: Quantity | undefined): this {
    return this.setFieldValue('maxVolumeToDeliver', maxVolumeToDeliver);
  }

  hasMaxVolumeToDeliver(): boolean {
    return this.hasFieldValue('maxVolumeToDeliver');
  }

  /** Formula feeding instructions expressed as text (0..1) */
  getAdministrationInstruction(): string | undefined {
    return this.administrationInstruction;
  }

  /** Sets `administrationInstruction`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAdministrationInstruction(administrationInstruction: string | undefined): this {
    return this.setFieldValue('administrationInstruction', administrationInstruction);
  }

  hasAdministrationInstruction(): boolean {
    return this.hasFieldValue('administrationInstruction');
  }

  /** The element carrying the id and extensions of `administrationInstruction`. Created when absent. */
  getAdministrationInstructionElement(): Element {
    if (this._administrationInstruction === undefined) {
      this._administrationInstruction = new Element();
    }
    return this._administrationInstruction;
  }

  setAdministrationInstructionElement(administrationInstructionElement: Element | undefined): this {
    this._administrationInstruction = administrationInstructionElement;
    return this;
  }
}

modelTypeRegistry.register('NutritionOrderEnteralFormula', NutritionOrderEnteralFormula, false);

/**
 * Formula feeding instruction as structured data
 */
export class NutritionOrderEnteralFormulaAdministration extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'schedule',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'schedule', typeCode: 'Timing' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'rate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'rateQuantity', typeCode: 'Quantity' },
        { jsonKey: 'rateRatio', typeCode: 'Ratio' },
      ],
    },
  ];

  /** Scheduled frequency of enteral feeding (0..1) */
  schedule?: Timing;

  /** The volume of formula to provide (0..1) */
  quantity?: Quantity;

  /** Speed with which the formula is provided per period of time (0..1) */
  rateQuantity?: Quantity;
  /** Speed with which the formula is provided per period of time (0..1) */
  rateRatio?: Ratio;

  override fhirType(): string {
    return 'NutritionOrder.enteralFormula.administration';
  }

  /** FHIR JSON for this NutritionOrderEnteralFormulaAdministration, typed as the plain `NutritionOrderAdministration` data type. */
  override toJSON(): plainTypes.NutritionOrderAdministration {
    return this.serialize() as plainTypes.NutritionOrderAdministration;
  }

  /** Scheduled frequency of enteral feeding (0..1) Created when absent. */
  getSchedule(): Timing {
    if (this.schedule === undefined) {
      this.schedule = new Timing();
    }
    return this.schedule;
  }

  setSchedule(schedule: Timing | undefined): this {
    return this.setFieldValue('schedule', schedule);
  }

  hasSchedule(): boolean {
    return this.hasFieldValue('schedule');
  }

  /** The volume of formula to provide (0..1) Created when absent. */
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

  /** Speed with which the formula is provided per period of time (0..1) Whichever type of `rate[x]` is set. */
  getRate(): Quantity | Ratio | undefined {
    return this.getChoiceValue<Quantity | Ratio>('rate');
  }

  /** True when any type of `rate[x]` is set. */
  hasRate(): boolean {
    return this.hasChoiceValue('rate');
  }

  getRateQuantity(): Quantity | undefined {
    return this.rateQuantity;
  }

  /** Sets `rate[x]` as Quantity and clears every other type of it. */
  setRateQuantity(rateQuantity: Quantity | undefined): this {
    return this.setFieldValue('rateQuantity', rateQuantity);
  }

  hasRateQuantity(): boolean {
    return this.hasFieldValue('rateQuantity');
  }

  getRateRatio(): Ratio | undefined {
    return this.rateRatio;
  }

  /** Sets `rate[x]` as Ratio and clears every other type of it. */
  setRateRatio(rateRatio: Ratio | undefined): this {
    return this.setFieldValue('rateRatio', rateRatio);
  }

  hasRateRatio(): boolean {
    return this.hasFieldValue('rateRatio');
  }
}

modelTypeRegistry.register(
  'NutritionOrderEnteralFormulaAdministration',
  NutritionOrderEnteralFormulaAdministration,
  false
);
