/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
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
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
    },
    {
      elementName: 'instantiates',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiates', typeCode: 'uri' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: ['CarePlan', 'NutritionOrder', 'ServiceRequest'],
        },
      ],
    },
    {
      elementName: 'groupIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'groupIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.RequestStatus }],
    },
    {
      elementName: 'intent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intent', typeCode: 'code', allowedCodes: valueSetCodes.RequestIntent }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'priority', typeCode: 'code', allowedCodes: valueSetCodes.RequestPriority },
      ],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
      ],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'Reference' }],
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
      types: [
        {
          jsonKey: 'orderer',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'CodeableReference' }],
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
      elementName: 'outsideFoodAllowed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outsideFoodAllowed', typeCode: 'boolean' }],
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
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'NutritionOrder';

  /** Identifiers assigned to this order (0..*) */
  identifier?: Identifier[];

  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: string[];
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: (Element | null)[];

  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: string[];
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: (Element | null)[];

  /** Instantiates protocol or definition (0..*) */
  instantiates?: string[];
  /** Id and extensions of the primitive `instantiates`. */
  _instantiates?: (Element | null)[];

  /** What this order fulfills (0..*) */
  basedOn?: Reference[];

  /** Composite Request ID (0..1) */
  groupIdentifier?: Identifier;

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.RequestStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  intent?: valueSetCodes.RequestIntent;
  /** Id and extensions of the primitive `intent`. */
  _intent?: Element;

  /** routine | urgent | asap | stat (0..1) */
  priority?: valueSetCodes.RequestPriority;
  /** Id and extensions of the primitive `priority`. */
  _priority?: Element;

  /** Who requires the diet, formula or nutritional supplement (1..1) */
  subject?: Reference;

  /** The encounter associated with this nutrition order (0..1) */
  encounter?: Reference;

  /** Information to support fulfilling of the nutrition order (0..*) */
  supportingInformation?: Reference[];

  /** Date and time the nutrition order was requested (1..1) */
  dateTime?: string;
  /** Id and extensions of the primitive `dateTime`. */
  _dateTime?: Element;

  /** Who ordered the diet, formula or nutritional supplement (0..1) */
  orderer?: Reference;

  /** Who is desired to perform the administration of what is being ordered (0..*) */
  performer?: CodeableReference[];

  /** List of the patient's food and nutrition-related allergies and intolerances (0..*) */
  allergyIntolerance?: Reference[];

  /** Order-specific modifier about the type of food that should be given (0..*) */
  foodPreferenceModifier?: CodeableConcept[];

  /** Order-specific modifier about the type of food that should not be given (0..*) */
  excludeFoodModifier?: CodeableConcept[];

  /** Capture when a food item is brought in by the patient and/or family (0..1) */
  outsideFoodAllowed?: boolean;
  /** Id and extensions of the primitive `outsideFoodAllowed`. */
  _outsideFoodAllowed?: Element;

  /** Oral diet components (0..1) */
  oralDiet?: NutritionOrderOralDiet;

  /** Supplement components (0..*) */
  supplement?: NutritionOrderSupplement[];

  /** Enteral formula components (0..1) */
  enteralFormula?: NutritionOrderEnteralFormula;

  /** Comments (0..*) */
  note?: Annotation[];

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

  /** Instantiates FHIR protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesCanonical(): string[] {
    if (this.instantiatesCanonical === undefined) {
      this.instantiatesCanonical = [];
    }
    return this.instantiatesCanonical;
  }

  setInstantiatesCanonical(instantiatesCanonical: string[] | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** Appends one value to `instantiatesCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  /** Instantiates external protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesUri(): string[] {
    if (this.instantiatesUri === undefined) {
      this.instantiatesUri = [];
    }
    return this.instantiatesUri;
  }

  setInstantiatesUri(instantiatesUri: string[] | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** Appends one value to `instantiatesUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addFieldValue('instantiatesUri', instantiatesUri);
  }

  /** Instantiates protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiates(): string[] {
    if (this.instantiates === undefined) {
      this.instantiates = [];
    }
    return this.instantiates;
  }

  setInstantiates(instantiates: string[] | undefined): this {
    return this.setFieldValue('instantiates', instantiates);
  }

  hasInstantiates(): boolean {
    return this.hasFieldValue('instantiates');
  }

  /** Appends one value to `instantiates`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addInstantiates(instantiates: string): this {
    return this.addFieldValue('instantiates', instantiates);
  }

  /** What this order fulfills (0..*) Never undefined; an empty list is created when absent. */
  getBasedOn(): Reference[] {
    if (this.basedOn === undefined) {
      this.basedOn = [];
    }
    return this.basedOn;
  }

  setBasedOn(basedOn: Reference[] | undefined): this {
    return this.setFieldValue('basedOn', basedOn);
  }

  hasBasedOn(): boolean {
    return this.hasFieldValue('basedOn');
  }

  /** Appends a new, empty Reference to `basedOn` and returns it so it can be filled in. */
  addBasedOn(): Reference;
  /** Appends the given Reference to `basedOn` and returns this object for chaining. */
  addBasedOn(reference: Reference): this;
  addBasedOn(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('basedOn', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('basedOn', createdReference);
    return createdReference;
  }

  /** The first Reference of `basedOn`. One is added when the list is empty. */
  getBasedOnFirstRep(): Reference {
    const firstReference = this.getBasedOn()[0];
    return firstReference === undefined ? this.addBasedOn() : firstReference;
  }

  /** Composite Request ID (0..1) Created when absent. */
  getGroupIdentifier(): Identifier {
    if (this.groupIdentifier === undefined) {
      this.groupIdentifier = new Identifier();
    }
    return this.groupIdentifier;
  }

  setGroupIdentifier(groupIdentifier: Identifier | undefined): this {
    return this.setFieldValue('groupIdentifier', groupIdentifier);
  }

  hasGroupIdentifier(): boolean {
    return this.hasFieldValue('groupIdentifier');
  }

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.RequestStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.RequestStatus | undefined): this {
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

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option (1..1) */
  getIntent(): valueSetCodes.RequestIntent | undefined {
    return this.intent;
  }

  /** Sets `intent`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setIntent(intent: valueSetCodes.RequestIntent | undefined): this {
    return this.setFieldValue('intent', intent);
  }

  hasIntent(): boolean {
    return this.hasFieldValue('intent');
  }

  /** The element carrying the id and extensions of `intent`. Created when absent. */
  getIntentElement(): Element {
    if (this._intent === undefined) {
      this._intent = new Element();
    }
    return this._intent;
  }

  setIntentElement(intentElement: Element | undefined): this {
    this._intent = intentElement;
    return this;
  }

  /** routine | urgent | asap | stat (0..1) */
  getPriority(): valueSetCodes.RequestPriority | undefined {
    return this.priority;
  }

  /** Sets `priority`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPriority(priority: valueSetCodes.RequestPriority | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The element carrying the id and extensions of `priority`. Created when absent. */
  getPriorityElement(): Element {
    if (this._priority === undefined) {
      this._priority = new Element();
    }
    return this._priority;
  }

  setPriorityElement(priorityElement: Element | undefined): this {
    this._priority = priorityElement;
    return this;
  }

  /** Who requires the diet, formula or nutritional supplement (1..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
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

  /** Information to support fulfilling of the nutrition order (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInformation(): Reference[] {
    if (this.supportingInformation === undefined) {
      this.supportingInformation = [];
    }
    return this.supportingInformation;
  }

  setSupportingInformation(supportingInformation: Reference[] | undefined): this {
    return this.setFieldValue('supportingInformation', supportingInformation);
  }

  hasSupportingInformation(): boolean {
    return this.hasFieldValue('supportingInformation');
  }

  /** Appends a new, empty Reference to `supportingInformation` and returns it so it can be filled in. */
  addSupportingInformation(): Reference;
  /** Appends the given Reference to `supportingInformation` and returns this object for chaining. */
  addSupportingInformation(reference: Reference): this;
  addSupportingInformation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supportingInformation', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supportingInformation', createdReference);
    return createdReference;
  }

  /** The first Reference of `supportingInformation`. One is added when the list is empty. */
  getSupportingInformationFirstRep(): Reference {
    const firstReference = this.getSupportingInformation()[0];
    return firstReference === undefined ? this.addSupportingInformation() : firstReference;
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

  /** Who is desired to perform the administration of what is being ordered (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): CodeableReference[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: CodeableReference[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty CodeableReference to `performer` and returns it so it can be filled in. */
  addPerformer(): CodeableReference;
  /** Appends the given CodeableReference to `performer` and returns this object for chaining. */
  addPerformer(codeableReference: CodeableReference): this;
  addPerformer(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('performer', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('performer', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): CodeableReference {
    const firstCodeableReference = this.getPerformer()[0];
    return firstCodeableReference === undefined ? this.addPerformer() : firstCodeableReference;
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

  /** Capture when a food item is brought in by the patient and/or family (0..1) */
  getOutsideFoodAllowed(): boolean | undefined {
    return this.outsideFoodAllowed;
  }

  /** Sets `outsideFoodAllowed`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setOutsideFoodAllowed(outsideFoodAllowed: boolean | undefined): this {
    return this.setFieldValue('outsideFoodAllowed', outsideFoodAllowed);
  }

  hasOutsideFoodAllowed(): boolean {
    return this.hasFieldValue('outsideFoodAllowed');
  }

  /** The element carrying the id and extensions of `outsideFoodAllowed`. Created when absent. */
  getOutsideFoodAllowedElement(): Element {
    if (this._outsideFoodAllowed === undefined) {
      this._outsideFoodAllowed = new Element();
    }
    return this._outsideFoodAllowed;
  }

  setOutsideFoodAllowedElement(outsideFoodAllowedElement: Element | undefined): this {
    this._outsideFoodAllowed = outsideFoodAllowedElement;
    return this;
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

  /** Comments (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'schedule', typeCode: 'NutritionOrderOralDietSchedule' }],
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

  /** Scheduling information for oral diets (0..1) */
  schedule?: NutritionOrderOralDietSchedule;

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

  /** Scheduling information for oral diets (0..1) Created when absent. */
  getSchedule(): NutritionOrderOralDietSchedule {
    if (this.schedule === undefined) {
      this.schedule = new NutritionOrderOralDietSchedule();
    }
    return this.schedule;
  }

  setSchedule(schedule: NutritionOrderOralDietSchedule | undefined): this {
    return this.setFieldValue('schedule', schedule);
  }

  hasSchedule(): boolean {
    return this.hasFieldValue('schedule');
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
 * Scheduling information for oral diets
 */
export class NutritionOrderOralDietSchedule extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'timing',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'timing', typeCode: 'Timing' }],
    },
    {
      elementName: 'asNeeded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'asNeeded', typeCode: 'boolean' }],
    },
    {
      elementName: 'asNeededFor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'asNeededFor', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Scheduled frequency of diet (0..*) */
  timing?: Timing[];

  /** Take 'as needed' (0..1) */
  asNeeded?: boolean;
  /** Id and extensions of the primitive `asNeeded`. */
  _asNeeded?: Element;

  /** Take 'as needed' for x (0..1) */
  asNeededFor?: CodeableConcept;

  override fhirType(): string {
    return 'NutritionOrder.oralDiet.schedule';
  }

  /** FHIR JSON for this NutritionOrderOralDietSchedule, typed as the plain `NutritionOrderSchedule` data type. */
  override toJSON(): plainTypes.NutritionOrderSchedule {
    return this.serialize() as plainTypes.NutritionOrderSchedule;
  }

  /** Scheduled frequency of diet (0..*) Never undefined; an empty list is created when absent. */
  getTiming(): Timing[] {
    if (this.timing === undefined) {
      this.timing = [];
    }
    return this.timing;
  }

  setTiming(timing: Timing[] | undefined): this {
    return this.setFieldValue('timing', timing);
  }

  hasTiming(): boolean {
    return this.hasFieldValue('timing');
  }

  /** Appends a new, empty Timing to `timing` and returns it so it can be filled in. */
  addTiming(): Timing;
  /** Appends the given Timing to `timing` and returns this object for chaining. */
  addTiming(timing: Timing): this;
  addTiming(timing?: Timing): Timing | this {
    if (timing !== undefined) {
      return this.addFieldValue('timing', timing);
    }
    const createdTiming = new Timing();
    this.addFieldValue('timing', createdTiming);
    return createdTiming;
  }

  /** The first Timing of `timing`. One is added when the list is empty. */
  getTimingFirstRep(): Timing {
    const firstTiming = this.getTiming()[0];
    return firstTiming === undefined ? this.addTiming() : firstTiming;
  }

  /** Take 'as needed' (0..1) */
  getAsNeeded(): boolean | undefined {
    return this.asNeeded;
  }

  /** Sets `asNeeded`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAsNeeded(asNeeded: boolean | undefined): this {
    return this.setFieldValue('asNeeded', asNeeded);
  }

  hasAsNeeded(): boolean {
    return this.hasFieldValue('asNeeded');
  }

  /** The element carrying the id and extensions of `asNeeded`. Created when absent. */
  getAsNeededElement(): Element {
    if (this._asNeeded === undefined) {
      this._asNeeded = new Element();
    }
    return this._asNeeded;
  }

  setAsNeededElement(asNeededElement: Element | undefined): this {
    this._asNeeded = asNeededElement;
    return this;
  }

  /** Take 'as needed' for x (0..1) Created when absent. */
  getAsNeededFor(): CodeableConcept {
    if (this.asNeededFor === undefined) {
      this.asNeededFor = new CodeableConcept();
    }
    return this.asNeededFor;
  }

  setAsNeededFor(asNeededFor: CodeableConcept | undefined): this {
    return this.setFieldValue('asNeededFor', asNeededFor);
  }

  hasAsNeededFor(): boolean {
    return this.hasFieldValue('asNeededFor');
  }
}

modelTypeRegistry.register('NutritionOrderOralDietSchedule', NutritionOrderOralDietSchedule, false);

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
      types: [{ jsonKey: 'type', typeCode: 'CodeableReference' }],
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'schedule', typeCode: 'NutritionOrderSupplementSchedule' }],
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
  type?: CodeableReference;

  /** Product or brand name of the nutritional supplement (0..1) */
  productName?: string;
  /** Id and extensions of the primitive `productName`. */
  _productName?: Element;

  /** Scheduling information for supplements (0..1) */
  schedule?: NutritionOrderSupplementSchedule;

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
  getType(): CodeableReference {
    if (this.type === undefined) {
      this.type = new CodeableReference();
    }
    return this.type;
  }

  setType(type: CodeableReference | undefined): this {
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

  /** Scheduling information for supplements (0..1) Created when absent. */
  getSchedule(): NutritionOrderSupplementSchedule {
    if (this.schedule === undefined) {
      this.schedule = new NutritionOrderSupplementSchedule();
    }
    return this.schedule;
  }

  setSchedule(schedule: NutritionOrderSupplementSchedule | undefined): this {
    return this.setFieldValue('schedule', schedule);
  }

  hasSchedule(): boolean {
    return this.hasFieldValue('schedule');
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
 * Scheduling information for supplements
 */
export class NutritionOrderSupplementSchedule extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'timing',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'timing', typeCode: 'Timing' }],
    },
    {
      elementName: 'asNeeded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'asNeeded', typeCode: 'boolean' }],
    },
    {
      elementName: 'asNeededFor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'asNeededFor', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Scheduled frequency of diet (0..*) */
  timing?: Timing[];

  /** Take 'as needed' (0..1) */
  asNeeded?: boolean;
  /** Id and extensions of the primitive `asNeeded`. */
  _asNeeded?: Element;

  /** Take 'as needed' for x (0..1) */
  asNeededFor?: CodeableConcept;

  override fhirType(): string {
    return 'NutritionOrder.supplement.schedule';
  }

  /** FHIR JSON for this NutritionOrderSupplementSchedule, typed as the plain `NutritionOrderSchedule1` data type. */
  override toJSON(): plainTypes.NutritionOrderSchedule1 {
    return this.serialize() as plainTypes.NutritionOrderSchedule1;
  }

  /** Scheduled frequency of diet (0..*) Never undefined; an empty list is created when absent. */
  getTiming(): Timing[] {
    if (this.timing === undefined) {
      this.timing = [];
    }
    return this.timing;
  }

  setTiming(timing: Timing[] | undefined): this {
    return this.setFieldValue('timing', timing);
  }

  hasTiming(): boolean {
    return this.hasFieldValue('timing');
  }

  /** Appends a new, empty Timing to `timing` and returns it so it can be filled in. */
  addTiming(): Timing;
  /** Appends the given Timing to `timing` and returns this object for chaining. */
  addTiming(timing: Timing): this;
  addTiming(timing?: Timing): Timing | this {
    if (timing !== undefined) {
      return this.addFieldValue('timing', timing);
    }
    const createdTiming = new Timing();
    this.addFieldValue('timing', createdTiming);
    return createdTiming;
  }

  /** The first Timing of `timing`. One is added when the list is empty. */
  getTimingFirstRep(): Timing {
    const firstTiming = this.getTiming()[0];
    return firstTiming === undefined ? this.addTiming() : firstTiming;
  }

  /** Take 'as needed' (0..1) */
  getAsNeeded(): boolean | undefined {
    return this.asNeeded;
  }

  /** Sets `asNeeded`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAsNeeded(asNeeded: boolean | undefined): this {
    return this.setFieldValue('asNeeded', asNeeded);
  }

  hasAsNeeded(): boolean {
    return this.hasFieldValue('asNeeded');
  }

  /** The element carrying the id and extensions of `asNeeded`. Created when absent. */
  getAsNeededElement(): Element {
    if (this._asNeeded === undefined) {
      this._asNeeded = new Element();
    }
    return this._asNeeded;
  }

  setAsNeededElement(asNeededElement: Element | undefined): this {
    this._asNeeded = asNeededElement;
    return this;
  }

  /** Take 'as needed' for x (0..1) Created when absent. */
  getAsNeededFor(): CodeableConcept {
    if (this.asNeededFor === undefined) {
      this.asNeededFor = new CodeableConcept();
    }
    return this.asNeededFor;
  }

  setAsNeededFor(asNeededFor: CodeableConcept | undefined): this {
    return this.setFieldValue('asNeededFor', asNeededFor);
  }

  hasAsNeededFor(): boolean {
    return this.hasFieldValue('asNeededFor');
  }
}

modelTypeRegistry.register(
  'NutritionOrderSupplementSchedule',
  NutritionOrderSupplementSchedule,
  false
);

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
      types: [{ jsonKey: 'baseFormulaType', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'baseFormulaProductName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'baseFormulaProductName', typeCode: 'string' }],
    },
    {
      elementName: 'deliveryDevice',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'deliveryDevice', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'additive',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additive', typeCode: 'NutritionOrderEnteralFormulaAdditive' }],
    },
    {
      elementName: 'caloricDensity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'caloricDensity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'routeOfAdministration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'routeOfAdministration', typeCode: 'CodeableConcept' }],
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
      types: [{ jsonKey: 'administrationInstruction', typeCode: 'markdown' }],
    },
  ];

  /** Type of enteral or infant formula (0..1) */
  baseFormulaType?: CodeableReference;

  /** Product or brand name of the enteral or infant formula (0..1) */
  baseFormulaProductName?: string;
  /** Id and extensions of the primitive `baseFormulaProductName`. */
  _baseFormulaProductName?: Element;

  /** Intended type of device for the administration (0..*) */
  deliveryDevice?: CodeableReference[];

  /** Components to add to the feeding (0..*) */
  additive?: NutritionOrderEnteralFormulaAdditive[];

  /** Amount of energy per specified volume that is required (0..1) */
  caloricDensity?: Quantity;

  /** How the formula should enter the patient's gastrointestinal tract (0..1) */
  routeOfAdministration?: CodeableConcept;

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
  getBaseFormulaType(): CodeableReference {
    if (this.baseFormulaType === undefined) {
      this.baseFormulaType = new CodeableReference();
    }
    return this.baseFormulaType;
  }

  setBaseFormulaType(baseFormulaType: CodeableReference | undefined): this {
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

  /** Intended type of device for the administration (0..*) Never undefined; an empty list is created when absent. */
  getDeliveryDevice(): CodeableReference[] {
    if (this.deliveryDevice === undefined) {
      this.deliveryDevice = [];
    }
    return this.deliveryDevice;
  }

  setDeliveryDevice(deliveryDevice: CodeableReference[] | undefined): this {
    return this.setFieldValue('deliveryDevice', deliveryDevice);
  }

  hasDeliveryDevice(): boolean {
    return this.hasFieldValue('deliveryDevice');
  }

  /** Appends a new, empty CodeableReference to `deliveryDevice` and returns it so it can be filled in. */
  addDeliveryDevice(): CodeableReference;
  /** Appends the given CodeableReference to `deliveryDevice` and returns this object for chaining. */
  addDeliveryDevice(codeableReference: CodeableReference): this;
  addDeliveryDevice(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('deliveryDevice', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('deliveryDevice', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `deliveryDevice`. One is added when the list is empty. */
  getDeliveryDeviceFirstRep(): CodeableReference {
    const firstCodeableReference = this.getDeliveryDevice()[0];
    return firstCodeableReference === undefined ? this.addDeliveryDevice() : firstCodeableReference;
  }

  /** Components to add to the feeding (0..*) Never undefined; an empty list is created when absent. */
  getAdditive(): NutritionOrderEnteralFormulaAdditive[] {
    if (this.additive === undefined) {
      this.additive = [];
    }
    return this.additive;
  }

  setAdditive(additive: NutritionOrderEnteralFormulaAdditive[] | undefined): this {
    return this.setFieldValue('additive', additive);
  }

  hasAdditive(): boolean {
    return this.hasFieldValue('additive');
  }

  /** Appends a new, empty NutritionOrderEnteralFormulaAdditive to `additive` and returns it so it can be filled in. */
  addAdditive(): NutritionOrderEnteralFormulaAdditive;
  /** Appends the given NutritionOrderEnteralFormulaAdditive to `additive` and returns this object for chaining. */
  addAdditive(nutritionOrderEnteralFormulaAdditive: NutritionOrderEnteralFormulaAdditive): this;
  addAdditive(
    nutritionOrderEnteralFormulaAdditive?: NutritionOrderEnteralFormulaAdditive
  ): NutritionOrderEnteralFormulaAdditive | this {
    if (nutritionOrderEnteralFormulaAdditive !== undefined) {
      return this.addFieldValue('additive', nutritionOrderEnteralFormulaAdditive);
    }
    const createdNutritionOrderEnteralFormulaAdditive = new NutritionOrderEnteralFormulaAdditive();
    this.addFieldValue('additive', createdNutritionOrderEnteralFormulaAdditive);
    return createdNutritionOrderEnteralFormulaAdditive;
  }

  /** The first NutritionOrderEnteralFormulaAdditive of `additive`. One is added when the list is empty. */
  getAdditiveFirstRep(): NutritionOrderEnteralFormulaAdditive {
    const firstNutritionOrderEnteralFormulaAdditive = this.getAdditive()[0];
    return firstNutritionOrderEnteralFormulaAdditive === undefined
      ? this.addAdditive()
      : firstNutritionOrderEnteralFormulaAdditive;
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
  getRouteOfAdministration(): CodeableConcept {
    if (this.routeOfAdministration === undefined) {
      this.routeOfAdministration = new CodeableConcept();
    }
    return this.routeOfAdministration;
  }

  setRouteOfAdministration(routeOfAdministration: CodeableConcept | undefined): this {
    return this.setFieldValue('routeOfAdministration', routeOfAdministration);
  }

  hasRouteOfAdministration(): boolean {
    return this.hasFieldValue('routeOfAdministration');
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

  /** Sets `administrationInstruction`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
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
 * Components to add to the feeding
 */
export class NutritionOrderEnteralFormulaAdditive extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'productName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'productName', typeCode: 'string' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
  ];

  /** Type of modular component to add to the feeding (0..1) */
  type?: CodeableReference;

  /** Product or brand name of the modular additive (0..1) */
  productName?: string;
  /** Id and extensions of the primitive `productName`. */
  _productName?: Element;

  /** Amount of additive to be given or mixed in (0..1) */
  quantity?: Quantity;

  override fhirType(): string {
    return 'NutritionOrder.enteralFormula.additive';
  }

  /** FHIR JSON for this NutritionOrderEnteralFormulaAdditive, typed as the plain `NutritionOrderAdditive` data type. */
  override toJSON(): plainTypes.NutritionOrderAdditive {
    return this.serialize() as plainTypes.NutritionOrderAdditive;
  }

  /** Type of modular component to add to the feeding (0..1) Created when absent. */
  getType(): CodeableReference {
    if (this.type === undefined) {
      this.type = new CodeableReference();
    }
    return this.type;
  }

  setType(type: CodeableReference | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Product or brand name of the modular additive (0..1) */
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

  /** Amount of additive to be given or mixed in (0..1) Created when absent. */
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

modelTypeRegistry.register(
  'NutritionOrderEnteralFormulaAdditive',
  NutritionOrderEnteralFormulaAdditive,
  false
);

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
      types: [
        { jsonKey: 'schedule', typeCode: 'NutritionOrderEnteralFormulaAdministrationSchedule' },
      ],
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

  /** Scheduling information for enteral formula products (0..1) */
  schedule?: NutritionOrderEnteralFormulaAdministrationSchedule;

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

  /** Scheduling information for enteral formula products (0..1) Created when absent. */
  getSchedule(): NutritionOrderEnteralFormulaAdministrationSchedule {
    if (this.schedule === undefined) {
      this.schedule = new NutritionOrderEnteralFormulaAdministrationSchedule();
    }
    return this.schedule;
  }

  setSchedule(schedule: NutritionOrderEnteralFormulaAdministrationSchedule | undefined): this {
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

/**
 * Scheduling information for enteral formula products
 */
export class NutritionOrderEnteralFormulaAdministrationSchedule extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'timing',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'timing', typeCode: 'Timing' }],
    },
    {
      elementName: 'asNeeded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'asNeeded', typeCode: 'boolean' }],
    },
    {
      elementName: 'asNeededFor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'asNeededFor', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Scheduled frequency of enteral formula (0..*) */
  timing?: Timing[];

  /** Take 'as needed' (0..1) */
  asNeeded?: boolean;
  /** Id and extensions of the primitive `asNeeded`. */
  _asNeeded?: Element;

  /** Take 'as needed' for x (0..1) */
  asNeededFor?: CodeableConcept;

  override fhirType(): string {
    return 'NutritionOrder.enteralFormula.administration.schedule';
  }

  /** FHIR JSON for this NutritionOrderEnteralFormulaAdministrationSchedule, typed as the plain `NutritionOrderSchedule2` data type. */
  override toJSON(): plainTypes.NutritionOrderSchedule2 {
    return this.serialize() as plainTypes.NutritionOrderSchedule2;
  }

  /** Scheduled frequency of enteral formula (0..*) Never undefined; an empty list is created when absent. */
  getTiming(): Timing[] {
    if (this.timing === undefined) {
      this.timing = [];
    }
    return this.timing;
  }

  setTiming(timing: Timing[] | undefined): this {
    return this.setFieldValue('timing', timing);
  }

  hasTiming(): boolean {
    return this.hasFieldValue('timing');
  }

  /** Appends a new, empty Timing to `timing` and returns it so it can be filled in. */
  addTiming(): Timing;
  /** Appends the given Timing to `timing` and returns this object for chaining. */
  addTiming(timing: Timing): this;
  addTiming(timing?: Timing): Timing | this {
    if (timing !== undefined) {
      return this.addFieldValue('timing', timing);
    }
    const createdTiming = new Timing();
    this.addFieldValue('timing', createdTiming);
    return createdTiming;
  }

  /** The first Timing of `timing`. One is added when the list is empty. */
  getTimingFirstRep(): Timing {
    const firstTiming = this.getTiming()[0];
    return firstTiming === undefined ? this.addTiming() : firstTiming;
  }

  /** Take 'as needed' (0..1) */
  getAsNeeded(): boolean | undefined {
    return this.asNeeded;
  }

  /** Sets `asNeeded`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAsNeeded(asNeeded: boolean | undefined): this {
    return this.setFieldValue('asNeeded', asNeeded);
  }

  hasAsNeeded(): boolean {
    return this.hasFieldValue('asNeeded');
  }

  /** The element carrying the id and extensions of `asNeeded`. Created when absent. */
  getAsNeededElement(): Element {
    if (this._asNeeded === undefined) {
      this._asNeeded = new Element();
    }
    return this._asNeeded;
  }

  setAsNeededElement(asNeededElement: Element | undefined): this {
    this._asNeeded = asNeededElement;
    return this;
  }

  /** Take 'as needed' for x (0..1) Created when absent. */
  getAsNeededFor(): CodeableConcept {
    if (this.asNeededFor === undefined) {
      this.asNeededFor = new CodeableConcept();
    }
    return this.asNeededFor;
  }

  setAsNeededFor(asNeededFor: CodeableConcept | undefined): this {
    return this.setFieldValue('asNeededFor', asNeededFor);
  }

  hasAsNeededFor(): boolean {
    return this.hasFieldValue('asNeededFor');
  }
}

modelTypeRegistry.register(
  'NutritionOrderEnteralFormulaAdministrationSchedule',
  NutritionOrderEnteralFormulaAdministrationSchedule,
  false
);
