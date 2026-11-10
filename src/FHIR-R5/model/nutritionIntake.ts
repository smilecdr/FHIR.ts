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
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * A record of food or fluid that is being consumed by a patient. A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past. The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician. A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed. The consumption information may come from sources such as the patient's memory, from a nutrition label, or from a clinician documenting observed intake.
 */
export class NutritionIntake extends DomainResource {
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
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'partOf',
          typeCode: 'Reference',
          targetResourceTypes: ['NutritionIntake', 'Observation', 'Procedure'],
        },
      ],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EventStatus }],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
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
      elementName: 'occurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrencePeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'recorded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recorded', typeCode: 'dateTime' }],
    },
    {
      elementName: 'reported',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reportedBoolean', typeCode: 'boolean' },
        {
          jsonKey: 'reportedReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'consumedItem',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'consumedItem', typeCode: 'NutritionIntakeConsumedItem' }],
    },
    {
      elementName: 'ingredientLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'ingredientLabel', typeCode: 'NutritionIntakeIngredientLabel' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'NutritionIntakePerformer' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'derivedFrom', typeCode: 'Reference' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'NutritionIntake';

  /** External identifier (0..*) */
  identifier?: Identifier[];

  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: string[];
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: (Element | null)[];

  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: string[];
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: (Element | null)[];

  /** Fulfils plan, proposal or order (0..*) */
  basedOn?: Reference[];

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.EventStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason for current status (0..*) */
  statusReason?: CodeableConcept[];

  /** Code representing an overall type of nutrition intake (0..1) */
  code?: CodeableConcept;

  /** Who is/was consuming the food or fluid (1..1) */
  subject?: Reference;

  /** Encounter associated with NutritionIntake (0..1) */
  encounter?: Reference;

  /** The date/time or interval when the food or fluid is/was consumed (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** The date/time or interval when the food or fluid is/was consumed (0..1) */
  occurrencePeriod?: Period;

  /** When the intake was recorded (0..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;

  /** Person or organization that provided the information about the consumption of this food or fluid (0..1) */
  reportedBoolean?: boolean;
  /** Id and extensions of the primitive `reportedBoolean`. */
  _reportedBoolean?: Element;
  /** Person or organization that provided the information about the consumption of this food or fluid (0..1) */
  reportedReference?: Reference;

  /** What food or fluid product or item was consumed (1..*) */
  consumedItem?: NutritionIntakeConsumedItem[];

  /** Total nutrient for the whole meal, product, serving (0..*) */
  ingredientLabel?: NutritionIntakeIngredientLabel[];

  /** Who was performed in the intake (0..*) */
  performer?: NutritionIntakePerformer[];

  /** Where the intake occurred (0..1) */
  location?: Reference;

  /** Additional supporting information (0..*) */
  derivedFrom?: Reference[];

  /** Reason for why the food or fluid is /was consumed (0..*) */
  reason?: CodeableReference[];

  /** Further information about the consumption (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'NutritionIntake';
  }

  /** FHIR JSON for this NutritionIntake, typed as the plain `NutritionIntake` data type. */
  override toJSON(): plainTypes.NutritionIntake {
    return this.serialize() as plainTypes.NutritionIntake;
  }

  /** External identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Fulfils plan, proposal or order (0..*) Never undefined; an empty list is created when absent. */
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

  /** Part of referenced event (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): Reference[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends a new, empty Reference to `partOf` and returns it so it can be filled in. */
  addPartOf(): Reference;
  /** Appends the given Reference to `partOf` and returns this object for chaining. */
  addPartOf(reference: Reference): this;
  addPartOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('partOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('partOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `partOf`. One is added when the list is empty. */
  getPartOfFirstRep(): Reference {
    const firstReference = this.getPartOf()[0];
    return firstReference === undefined ? this.addPartOf() : firstReference;
  }

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.EventStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EventStatus | undefined): this {
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

  /** Reason for current status (0..*) Never undefined; an empty list is created when absent. */
  getStatusReason(): CodeableConcept[] {
    if (this.statusReason === undefined) {
      this.statusReason = [];
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
  }

  /** Appends a new, empty CodeableConcept to `statusReason` and returns it so it can be filled in. */
  addStatusReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `statusReason` and returns this object for chaining. */
  addStatusReason(codeableConcept: CodeableConcept): this;
  addStatusReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('statusReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('statusReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `statusReason`. One is added when the list is empty. */
  getStatusReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getStatusReason()[0];
    return firstCodeableConcept === undefined ? this.addStatusReason() : firstCodeableConcept;
  }

  /** Code representing an overall type of nutrition intake (0..1) Created when absent. */
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

  /** Who is/was consuming the food or fluid (1..1) Created when absent. */
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

  /** Encounter associated with NutritionIntake (0..1) Created when absent. */
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

  /** The date/time or interval when the food or fluid is/was consumed (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('occurrence');
  }

  /** True when any type of `occurrence[x]` is set. */
  hasOccurrence(): boolean {
    return this.hasChoiceValue('occurrence');
  }

  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrence[x]` as dateTime and clears every other type of it. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  getOccurrencePeriod(): Period | undefined {
    return this.occurrencePeriod;
  }

  /** Sets `occurrence[x]` as Period and clears every other type of it. */
  setOccurrencePeriod(occurrencePeriod: Period | undefined): this {
    return this.setFieldValue('occurrencePeriod', occurrencePeriod);
  }

  hasOccurrencePeriod(): boolean {
    return this.hasFieldValue('occurrencePeriod');
  }

  /** When the intake was recorded (0..1) */
  getRecorded(): string | undefined {
    return this.recorded;
  }

  /** Sets `recorded`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setRecorded(recorded: string | undefined): this {
    return this.setFieldValue('recorded', recorded);
  }

  hasRecorded(): boolean {
    return this.hasFieldValue('recorded');
  }

  /** The element carrying the id and extensions of `recorded`. Created when absent. */
  getRecordedElement(): Element {
    if (this._recorded === undefined) {
      this._recorded = new Element();
    }
    return this._recorded;
  }

  setRecordedElement(recordedElement: Element | undefined): this {
    this._recorded = recordedElement;
    return this;
  }

  /** Person or organization that provided the information about the consumption of this food or fluid (0..1) Whichever type of `reported[x]` is set. */
  getReported(): boolean | Reference | undefined {
    return this.getChoiceValue<boolean | Reference>('reported');
  }

  /** True when any type of `reported[x]` is set. */
  hasReported(): boolean {
    return this.hasChoiceValue('reported');
  }

  getReportedBoolean(): boolean | undefined {
    return this.reportedBoolean;
  }

  /** Sets `reported[x]` as boolean and clears every other type of it. */
  setReportedBoolean(reportedBoolean: boolean | undefined): this {
    return this.setFieldValue('reportedBoolean', reportedBoolean);
  }

  hasReportedBoolean(): boolean {
    return this.hasFieldValue('reportedBoolean');
  }

  getReportedReference(): Reference | undefined {
    return this.reportedReference;
  }

  /** Sets `reported[x]` as Reference and clears every other type of it. */
  setReportedReference(reportedReference: Reference | undefined): this {
    return this.setFieldValue('reportedReference', reportedReference);
  }

  hasReportedReference(): boolean {
    return this.hasFieldValue('reportedReference');
  }

  /** What food or fluid product or item was consumed (1..*) Never undefined; an empty list is created when absent. */
  getConsumedItem(): NutritionIntakeConsumedItem[] {
    if (this.consumedItem === undefined) {
      this.consumedItem = [];
    }
    return this.consumedItem;
  }

  setConsumedItem(consumedItem: NutritionIntakeConsumedItem[] | undefined): this {
    return this.setFieldValue('consumedItem', consumedItem);
  }

  hasConsumedItem(): boolean {
    return this.hasFieldValue('consumedItem');
  }

  /** Appends a new, empty NutritionIntakeConsumedItem to `consumedItem` and returns it so it can be filled in. */
  addConsumedItem(): NutritionIntakeConsumedItem;
  /** Appends the given NutritionIntakeConsumedItem to `consumedItem` and returns this object for chaining. */
  addConsumedItem(nutritionIntakeConsumedItem: NutritionIntakeConsumedItem): this;
  addConsumedItem(
    nutritionIntakeConsumedItem?: NutritionIntakeConsumedItem
  ): NutritionIntakeConsumedItem | this {
    if (nutritionIntakeConsumedItem !== undefined) {
      return this.addFieldValue('consumedItem', nutritionIntakeConsumedItem);
    }
    const createdNutritionIntakeConsumedItem = new NutritionIntakeConsumedItem();
    this.addFieldValue('consumedItem', createdNutritionIntakeConsumedItem);
    return createdNutritionIntakeConsumedItem;
  }

  /** The first NutritionIntakeConsumedItem of `consumedItem`. One is added when the list is empty. */
  getConsumedItemFirstRep(): NutritionIntakeConsumedItem {
    const firstNutritionIntakeConsumedItem = this.getConsumedItem()[0];
    return firstNutritionIntakeConsumedItem === undefined
      ? this.addConsumedItem()
      : firstNutritionIntakeConsumedItem;
  }

  /** Total nutrient for the whole meal, product, serving (0..*) Never undefined; an empty list is created when absent. */
  getIngredientLabel(): NutritionIntakeIngredientLabel[] {
    if (this.ingredientLabel === undefined) {
      this.ingredientLabel = [];
    }
    return this.ingredientLabel;
  }

  setIngredientLabel(ingredientLabel: NutritionIntakeIngredientLabel[] | undefined): this {
    return this.setFieldValue('ingredientLabel', ingredientLabel);
  }

  hasIngredientLabel(): boolean {
    return this.hasFieldValue('ingredientLabel');
  }

  /** Appends a new, empty NutritionIntakeIngredientLabel to `ingredientLabel` and returns it so it can be filled in. */
  addIngredientLabel(): NutritionIntakeIngredientLabel;
  /** Appends the given NutritionIntakeIngredientLabel to `ingredientLabel` and returns this object for chaining. */
  addIngredientLabel(nutritionIntakeIngredientLabel: NutritionIntakeIngredientLabel): this;
  addIngredientLabel(
    nutritionIntakeIngredientLabel?: NutritionIntakeIngredientLabel
  ): NutritionIntakeIngredientLabel | this {
    if (nutritionIntakeIngredientLabel !== undefined) {
      return this.addFieldValue('ingredientLabel', nutritionIntakeIngredientLabel);
    }
    const createdNutritionIntakeIngredientLabel = new NutritionIntakeIngredientLabel();
    this.addFieldValue('ingredientLabel', createdNutritionIntakeIngredientLabel);
    return createdNutritionIntakeIngredientLabel;
  }

  /** The first NutritionIntakeIngredientLabel of `ingredientLabel`. One is added when the list is empty. */
  getIngredientLabelFirstRep(): NutritionIntakeIngredientLabel {
    const firstNutritionIntakeIngredientLabel = this.getIngredientLabel()[0];
    return firstNutritionIntakeIngredientLabel === undefined
      ? this.addIngredientLabel()
      : firstNutritionIntakeIngredientLabel;
  }

  /** Who was performed in the intake (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): NutritionIntakePerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: NutritionIntakePerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty NutritionIntakePerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): NutritionIntakePerformer;
  /** Appends the given NutritionIntakePerformer to `performer` and returns this object for chaining. */
  addPerformer(nutritionIntakePerformer: NutritionIntakePerformer): this;
  addPerformer(
    nutritionIntakePerformer?: NutritionIntakePerformer
  ): NutritionIntakePerformer | this {
    if (nutritionIntakePerformer !== undefined) {
      return this.addFieldValue('performer', nutritionIntakePerformer);
    }
    const createdNutritionIntakePerformer = new NutritionIntakePerformer();
    this.addFieldValue('performer', createdNutritionIntakePerformer);
    return createdNutritionIntakePerformer;
  }

  /** The first NutritionIntakePerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): NutritionIntakePerformer {
    const firstNutritionIntakePerformer = this.getPerformer()[0];
    return firstNutritionIntakePerformer === undefined
      ? this.addPerformer()
      : firstNutritionIntakePerformer;
  }

  /** Where the intake occurred (0..1) Created when absent. */
  getLocation(): Reference {
    if (this.location === undefined) {
      this.location = new Reference();
    }
    return this.location;
  }

  setLocation(location: Reference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Additional supporting information (0..*) Never undefined; an empty list is created when absent. */
  getDerivedFrom(): Reference[] {
    if (this.derivedFrom === undefined) {
      this.derivedFrom = [];
    }
    return this.derivedFrom;
  }

  setDerivedFrom(derivedFrom: Reference[] | undefined): this {
    return this.setFieldValue('derivedFrom', derivedFrom);
  }

  hasDerivedFrom(): boolean {
    return this.hasFieldValue('derivedFrom');
  }

  /** Appends a new, empty Reference to `derivedFrom` and returns it so it can be filled in. */
  addDerivedFrom(): Reference;
  /** Appends the given Reference to `derivedFrom` and returns this object for chaining. */
  addDerivedFrom(reference: Reference): this;
  addDerivedFrom(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('derivedFrom', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('derivedFrom', createdReference);
    return createdReference;
  }

  /** The first Reference of `derivedFrom`. One is added when the list is empty. */
  getDerivedFromFirstRep(): Reference {
    const firstReference = this.getDerivedFrom()[0];
    return firstReference === undefined ? this.addDerivedFrom() : firstReference;
  }

  /** Reason for why the food or fluid is /was consumed (0..*) Never undefined; an empty list is created when absent. */
  getReason(): CodeableReference[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: CodeableReference[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty CodeableReference to `reason` and returns it so it can be filled in. */
  addReason(): CodeableReference;
  /** Appends the given CodeableReference to `reason` and returns this object for chaining. */
  addReason(codeableReference: CodeableReference): this;
  addReason(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('reason', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('reason', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): CodeableReference {
    const firstCodeableReference = this.getReason()[0];
    return firstCodeableReference === undefined ? this.addReason() : firstCodeableReference;
  }

  /** Further information about the consumption (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('NutritionIntake', NutritionIntake, true);

/** True when the value is a NutritionIntake model instance. */
export function isNutritionIntake(candidate: unknown): candidate is NutritionIntake {
  return candidate instanceof NutritionIntake;
}

/**
 * What food or fluid product or item was consumed
 */
export class NutritionIntakeConsumedItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'nutritionProduct',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nutritionProduct', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'schedule',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'schedule', typeCode: 'Timing' }],
    },
    {
      elementName: 'amount',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
    {
      elementName: 'rate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rate', typeCode: 'Quantity' }],
    },
    {
      elementName: 'notConsumed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'notConsumed', typeCode: 'boolean' }],
    },
    {
      elementName: 'notConsumedReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'notConsumedReason', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The type of food or fluid product (1..1) */
  type?: CodeableConcept;

  /** Code that identifies the food or fluid product that was consumed (1..1) */
  nutritionProduct?: CodeableReference;

  /** Scheduled frequency of consumption (0..1) */
  schedule?: Timing;

  /** Quantity of the specified food (0..1) */
  amount?: Quantity;

  /** Rate at which enteral feeding was administered (0..1) */
  rate?: Quantity;

  /** Flag to indicate if the food or fluid item was refused or otherwise not consumed (0..1) */
  notConsumed?: boolean;
  /** Id and extensions of the primitive `notConsumed`. */
  _notConsumed?: Element;

  /** Reason food or fluid was not consumed (0..1) */
  notConsumedReason?: CodeableConcept;

  override fhirType(): string {
    return 'NutritionIntake.consumedItem';
  }

  /** FHIR JSON for this NutritionIntakeConsumedItem, typed as the plain `NutritionIntakeConsumedItem` data type. */
  override toJSON(): plainTypes.NutritionIntakeConsumedItem {
    return this.serialize() as plainTypes.NutritionIntakeConsumedItem;
  }

  /** The type of food or fluid product (1..1) Created when absent. */
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

  /** Code that identifies the food or fluid product that was consumed (1..1) Created when absent. */
  getNutritionProduct(): CodeableReference {
    if (this.nutritionProduct === undefined) {
      this.nutritionProduct = new CodeableReference();
    }
    return this.nutritionProduct;
  }

  setNutritionProduct(nutritionProduct: CodeableReference | undefined): this {
    return this.setFieldValue('nutritionProduct', nutritionProduct);
  }

  hasNutritionProduct(): boolean {
    return this.hasFieldValue('nutritionProduct');
  }

  /** Scheduled frequency of consumption (0..1) Created when absent. */
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

  /** Quantity of the specified food (0..1) Created when absent. */
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

  /** Rate at which enteral feeding was administered (0..1) Created when absent. */
  getRate(): Quantity {
    if (this.rate === undefined) {
      this.rate = new Quantity();
    }
    return this.rate;
  }

  setRate(rate: Quantity | undefined): this {
    return this.setFieldValue('rate', rate);
  }

  hasRate(): boolean {
    return this.hasFieldValue('rate');
  }

  /** Flag to indicate if the food or fluid item was refused or otherwise not consumed (0..1) */
  getNotConsumed(): boolean | undefined {
    return this.notConsumed;
  }

  /** Sets `notConsumed`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setNotConsumed(notConsumed: boolean | undefined): this {
    return this.setFieldValue('notConsumed', notConsumed);
  }

  hasNotConsumed(): boolean {
    return this.hasFieldValue('notConsumed');
  }

  /** The element carrying the id and extensions of `notConsumed`. Created when absent. */
  getNotConsumedElement(): Element {
    if (this._notConsumed === undefined) {
      this._notConsumed = new Element();
    }
    return this._notConsumed;
  }

  setNotConsumedElement(notConsumedElement: Element | undefined): this {
    this._notConsumed = notConsumedElement;
    return this;
  }

  /** Reason food or fluid was not consumed (0..1) Created when absent. */
  getNotConsumedReason(): CodeableConcept {
    if (this.notConsumedReason === undefined) {
      this.notConsumedReason = new CodeableConcept();
    }
    return this.notConsumedReason;
  }

  setNotConsumedReason(notConsumedReason: CodeableConcept | undefined): this {
    return this.setFieldValue('notConsumedReason', notConsumedReason);
  }

  hasNotConsumedReason(): boolean {
    return this.hasFieldValue('notConsumedReason');
  }
}

modelTypeRegistry.register('NutritionIntakeConsumedItem', NutritionIntakeConsumedItem, false);

/**
 * Total nutrient for the whole meal, product, serving
 */
export class NutritionIntakeIngredientLabel extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'nutrient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nutrient', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'amount',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'amount', typeCode: 'Quantity' }],
    },
  ];

  /** Total nutrient consumed (1..1) */
  nutrient?: CodeableReference;

  /** Total amount of nutrient consumed (1..1) */
  amount?: Quantity;

  override fhirType(): string {
    return 'NutritionIntake.ingredientLabel';
  }

  /** FHIR JSON for this NutritionIntakeIngredientLabel, typed as the plain `NutritionIntakeIngredientLabel` data type. */
  override toJSON(): plainTypes.NutritionIntakeIngredientLabel {
    return this.serialize() as plainTypes.NutritionIntakeIngredientLabel;
  }

  /** Total nutrient consumed (1..1) Created when absent. */
  getNutrient(): CodeableReference {
    if (this.nutrient === undefined) {
      this.nutrient = new CodeableReference();
    }
    return this.nutrient;
  }

  setNutrient(nutrient: CodeableReference | undefined): this {
    return this.setFieldValue('nutrient', nutrient);
  }

  hasNutrient(): boolean {
    return this.hasFieldValue('nutrient');
  }

  /** Total amount of nutrient consumed (1..1) Created when absent. */
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

modelTypeRegistry.register('NutritionIntakeIngredientLabel', NutritionIntakeIngredientLabel, false);

/**
 * Who was performed in the intake
 */
export class NutritionIntakePerformer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'function',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
  ];

  /** Type of performer (0..1) */
  function?: CodeableConcept;

  /** Who performed the intake (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'NutritionIntake.performer';
  }

  /** FHIR JSON for this NutritionIntakePerformer, typed as the plain `NutritionIntakePerformer` data type. */
  override toJSON(): plainTypes.NutritionIntakePerformer {
    return this.serialize() as plainTypes.NutritionIntakePerformer;
  }

  /** Type of performer (0..1) Created when absent. */
  getFunction(): CodeableConcept {
    if (this.function === undefined) {
      this.function = new CodeableConcept();
    }
    return this.function;
  }

  setFunction(functionValue: CodeableConcept | undefined): this {
    return this.setFieldValue('function', functionValue);
  }

  hasFunction(): boolean {
    return this.hasFieldValue('function');
  }

  /** Who performed the intake (1..1) Created when absent. */
  getActor(): Reference {
    if (this.actor === undefined) {
      this.actor = new Reference();
    }
    return this.actor;
  }

  setActor(actor: Reference | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }
}

modelTypeRegistry.register('NutritionIntakePerformer', NutritionIntakePerformer, false);
