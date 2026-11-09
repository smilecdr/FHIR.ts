/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export class Goal extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'lifecycleStatus',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'lifecycleStatus',
          typeCode: 'code',
          allowedCodes: valueSetCodes.GoalLifecycleStatus,
        },
      ],
    },
    {
      elementName: 'achievementStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'achievementStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'subject',
          typeCode: 'Reference',
          targetResourceTypes: ['Group', 'Organization', 'Patient'],
        },
      ],
    },
    {
      elementName: 'start',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'startDate', typeCode: 'date' },
        { jsonKey: 'startCodeableConcept', typeCode: 'CodeableConcept' },
      ],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'target', typeCode: 'GoalTarget' }],
    },
    {
      elementName: 'statusDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusDate', typeCode: 'date' }],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'statusReason', typeCode: 'string' }],
    },
    {
      elementName: 'expressedBy',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'expressedBy',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Practitioner', 'PractitionerRole', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'addresses',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'addresses',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Condition',
            'MedicationStatement',
            'NutritionOrder',
            'Observation',
            'RiskAssessment',
            'ServiceRequest',
          ],
        },
      ],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'outcomeCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'outcomeCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'outcomeReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'outcomeReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Observation'],
        },
      ],
    },
  ];

  readonly resourceType = 'Goal';

  /** External Ids for this goal (0..*) */
  identifier?: Identifier[];

  /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected (1..1) */
  lifecycleStatus?: valueSetCodes.GoalLifecycleStatus;
  /** Id and extensions of the primitive `lifecycleStatus`. */
  _lifecycleStatus?: Element;

  /** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable (0..1) */
  achievementStatus?: CodeableConcept;

  /** E.g. Treatment, dietary, behavioral, etc. (0..*) */
  category?: CodeableConcept[];

  /** high-priority | medium-priority | low-priority (0..1) */
  priority?: CodeableConcept;

  /** Code or text describing goal (1..1) */
  description?: CodeableConcept;

  /** Who this goal is intended for (1..1) */
  subject?: Reference;

  /** When goal pursuit begins (0..1) */
  startDate?: string;
  /** Id and extensions of the primitive `startDate`. */
  _startDate?: Element;
  /** When goal pursuit begins (0..1) */
  startCodeableConcept?: CodeableConcept;

  /** Target outcome for the goal (0..*) */
  target?: GoalTarget[];

  /** When goal status took effect (0..1) */
  statusDate?: string;
  /** Id and extensions of the primitive `statusDate`. */
  _statusDate?: Element;

  /** Reason for current status (0..1) */
  statusReason?: string;
  /** Id and extensions of the primitive `statusReason`. */
  _statusReason?: Element;

  /** Who's responsible for creating Goal? (0..1) */
  expressedBy?: Reference;

  /** Issues addressed by this goal (0..*) */
  addresses?: Reference[];

  /** Comments about the goal (0..*) */
  note?: Annotation[];

  /** What result was achieved regarding the goal? (0..*) */
  outcomeCode?: CodeableConcept[];

  /** Observation that resulted from goal (0..*) */
  outcomeReference?: Reference[];

  override fhirType(): string {
    return 'Goal';
  }

  /** FHIR JSON for this Goal, typed as the plain `Goal` data type. */
  override toJSON(): plainTypes.Goal {
    return this.serialize() as plainTypes.Goal;
  }

  /** External Ids for this goal (0..*) Never undefined; an empty list is created when absent. */
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

  /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected (1..1) */
  getLifecycleStatus(): valueSetCodes.GoalLifecycleStatus | undefined {
    return this.lifecycleStatus;
  }

  /** Sets `lifecycleStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setLifecycleStatus(lifecycleStatus: valueSetCodes.GoalLifecycleStatus | undefined): this {
    return this.setFieldValue('lifecycleStatus', lifecycleStatus);
  }

  hasLifecycleStatus(): boolean {
    return this.hasFieldValue('lifecycleStatus');
  }

  /** The element carrying the id and extensions of `lifecycleStatus`. Created when absent. */
  getLifecycleStatusElement(): Element {
    if (this._lifecycleStatus === undefined) {
      this._lifecycleStatus = new Element();
    }
    return this._lifecycleStatus;
  }

  setLifecycleStatusElement(lifecycleStatusElement: Element | undefined): this {
    this._lifecycleStatus = lifecycleStatusElement;
    return this;
  }

  /** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable (0..1) Created when absent. */
  getAchievementStatus(): CodeableConcept {
    if (this.achievementStatus === undefined) {
      this.achievementStatus = new CodeableConcept();
    }
    return this.achievementStatus;
  }

  setAchievementStatus(achievementStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('achievementStatus', achievementStatus);
  }

  hasAchievementStatus(): boolean {
    return this.hasFieldValue('achievementStatus');
  }

  /** E.g. Treatment, dietary, behavioral, etc. (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** high-priority | medium-priority | low-priority (0..1) Created when absent. */
  getPriority(): CodeableConcept {
    if (this.priority === undefined) {
      this.priority = new CodeableConcept();
    }
    return this.priority;
  }

  setPriority(priority: CodeableConcept | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** Code or text describing goal (1..1) Created when absent. */
  getDescription(): CodeableConcept {
    if (this.description === undefined) {
      this.description = new CodeableConcept();
    }
    return this.description;
  }

  setDescription(description: CodeableConcept | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** Who this goal is intended for (1..1) Created when absent. */
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

  /** When goal pursuit begins (0..1) Whichever type of `start[x]` is set. */
  getStart(): string | CodeableConcept | undefined {
    return this.getChoiceValue<string | CodeableConcept>('start');
  }

  /** True when any type of `start[x]` is set. */
  hasStart(): boolean {
    return this.hasChoiceValue('start');
  }

  getStartDate(): string | undefined {
    return this.startDate;
  }

  /** Sets `start[x]` as date and clears every other type of it. */
  setStartDate(startDate: string | undefined): this {
    return this.setFieldValue('startDate', startDate);
  }

  hasStartDate(): boolean {
    return this.hasFieldValue('startDate');
  }

  getStartCodeableConcept(): CodeableConcept | undefined {
    return this.startCodeableConcept;
  }

  /** Sets `start[x]` as CodeableConcept and clears every other type of it. */
  setStartCodeableConcept(startCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('startCodeableConcept', startCodeableConcept);
  }

  hasStartCodeableConcept(): boolean {
    return this.hasFieldValue('startCodeableConcept');
  }

  /** Target outcome for the goal (0..*) Never undefined; an empty list is created when absent. */
  getTarget(): GoalTarget[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: GoalTarget[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends a new, empty GoalTarget to `target` and returns it so it can be filled in. */
  addTarget(): GoalTarget;
  /** Appends the given GoalTarget to `target` and returns this object for chaining. */
  addTarget(goalTarget: GoalTarget): this;
  addTarget(goalTarget?: GoalTarget): GoalTarget | this {
    if (goalTarget !== undefined) {
      return this.addFieldValue('target', goalTarget);
    }
    const createdGoalTarget = new GoalTarget();
    this.addFieldValue('target', createdGoalTarget);
    return createdGoalTarget;
  }

  /** The first GoalTarget of `target`. One is added when the list is empty. */
  getTargetFirstRep(): GoalTarget {
    const firstGoalTarget = this.getTarget()[0];
    return firstGoalTarget === undefined ? this.addTarget() : firstGoalTarget;
  }

  /** When goal status took effect (0..1) */
  getStatusDate(): string | undefined {
    return this.statusDate;
  }

  /** Sets `statusDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setStatusDate(statusDate: string | undefined): this {
    return this.setFieldValue('statusDate', statusDate);
  }

  hasStatusDate(): boolean {
    return this.hasFieldValue('statusDate');
  }

  /** The element carrying the id and extensions of `statusDate`. Created when absent. */
  getStatusDateElement(): Element {
    if (this._statusDate === undefined) {
      this._statusDate = new Element();
    }
    return this._statusDate;
  }

  setStatusDateElement(statusDateElement: Element | undefined): this {
    this._statusDate = statusDateElement;
    return this;
  }

  /** Reason for current status (0..1) */
  getStatusReason(): string | undefined {
    return this.statusReason;
  }

  /** Sets `statusReason`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setStatusReason(statusReason: string | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
  }

  /** The element carrying the id and extensions of `statusReason`. Created when absent. */
  getStatusReasonElement(): Element {
    if (this._statusReason === undefined) {
      this._statusReason = new Element();
    }
    return this._statusReason;
  }

  setStatusReasonElement(statusReasonElement: Element | undefined): this {
    this._statusReason = statusReasonElement;
    return this;
  }

  /** Who's responsible for creating Goal? (0..1) Created when absent. */
  getExpressedBy(): Reference {
    if (this.expressedBy === undefined) {
      this.expressedBy = new Reference();
    }
    return this.expressedBy;
  }

  setExpressedBy(expressedBy: Reference | undefined): this {
    return this.setFieldValue('expressedBy', expressedBy);
  }

  hasExpressedBy(): boolean {
    return this.hasFieldValue('expressedBy');
  }

  /** Issues addressed by this goal (0..*) Never undefined; an empty list is created when absent. */
  getAddresses(): Reference[] {
    if (this.addresses === undefined) {
      this.addresses = [];
    }
    return this.addresses;
  }

  setAddresses(addresses: Reference[] | undefined): this {
    return this.setFieldValue('addresses', addresses);
  }

  hasAddresses(): boolean {
    return this.hasFieldValue('addresses');
  }

  /** Appends a new, empty Reference to `addresses` and returns it so it can be filled in. */
  addAddresses(): Reference;
  /** Appends the given Reference to `addresses` and returns this object for chaining. */
  addAddresses(reference: Reference): this;
  addAddresses(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('addresses', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('addresses', createdReference);
    return createdReference;
  }

  /** The first Reference of `addresses`. One is added when the list is empty. */
  getAddressesFirstRep(): Reference {
    const firstReference = this.getAddresses()[0];
    return firstReference === undefined ? this.addAddresses() : firstReference;
  }

  /** Comments about the goal (0..*) Never undefined; an empty list is created when absent. */
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

  /** What result was achieved regarding the goal? (0..*) Never undefined; an empty list is created when absent. */
  getOutcomeCode(): CodeableConcept[] {
    if (this.outcomeCode === undefined) {
      this.outcomeCode = [];
    }
    return this.outcomeCode;
  }

  setOutcomeCode(outcomeCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('outcomeCode', outcomeCode);
  }

  hasOutcomeCode(): boolean {
    return this.hasFieldValue('outcomeCode');
  }

  /** Appends a new, empty CodeableConcept to `outcomeCode` and returns it so it can be filled in. */
  addOutcomeCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `outcomeCode` and returns this object for chaining. */
  addOutcomeCode(codeableConcept: CodeableConcept): this;
  addOutcomeCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('outcomeCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('outcomeCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `outcomeCode`. One is added when the list is empty. */
  getOutcomeCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getOutcomeCode()[0];
    return firstCodeableConcept === undefined ? this.addOutcomeCode() : firstCodeableConcept;
  }

  /** Observation that resulted from goal (0..*) Never undefined; an empty list is created when absent. */
  getOutcomeReference(): Reference[] {
    if (this.outcomeReference === undefined) {
      this.outcomeReference = [];
    }
    return this.outcomeReference;
  }

  setOutcomeReference(outcomeReference: Reference[] | undefined): this {
    return this.setFieldValue('outcomeReference', outcomeReference);
  }

  hasOutcomeReference(): boolean {
    return this.hasFieldValue('outcomeReference');
  }

  /** Appends a new, empty Reference to `outcomeReference` and returns it so it can be filled in. */
  addOutcomeReference(): Reference;
  /** Appends the given Reference to `outcomeReference` and returns this object for chaining. */
  addOutcomeReference(reference: Reference): this;
  addOutcomeReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('outcomeReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('outcomeReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `outcomeReference`. One is added when the list is empty. */
  getOutcomeReferenceFirstRep(): Reference {
    const firstReference = this.getOutcomeReference()[0];
    return firstReference === undefined ? this.addOutcomeReference() : firstReference;
  }
}

modelTypeRegistry.register('Goal', Goal, true);

/** True when the value is a Goal model instance. */
export function isGoal(candidate: unknown): candidate is Goal {
  return candidate instanceof Goal;
}

/**
 * Target outcome for the goal
 */
export class GoalTarget extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'measure',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'measure', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'detail',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'detailQuantity', typeCode: 'Quantity' },
        { jsonKey: 'detailRange', typeCode: 'Range' },
        { jsonKey: 'detailCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'detailString', typeCode: 'string' },
        { jsonKey: 'detailBoolean', typeCode: 'boolean' },
        { jsonKey: 'detailInteger', typeCode: 'integer' },
        { jsonKey: 'detailRatio', typeCode: 'Ratio' },
      ],
    },
    {
      elementName: 'due',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'dueDate', typeCode: 'date' },
        { jsonKey: 'dueDuration', typeCode: 'Duration' },
      ],
    },
  ];

  /** The parameter whose value is being tracked (0..1) */
  measure?: CodeableConcept;

  /** The target value to be achieved (0..1) */
  detailQuantity?: Quantity;
  /** The target value to be achieved (0..1) */
  detailRange?: Range;
  /** The target value to be achieved (0..1) */
  detailCodeableConcept?: CodeableConcept;
  /** The target value to be achieved (0..1) */
  detailString?: string;
  /** Id and extensions of the primitive `detailString`. */
  _detailString?: Element;
  /** The target value to be achieved (0..1) */
  detailBoolean?: boolean;
  /** Id and extensions of the primitive `detailBoolean`. */
  _detailBoolean?: Element;
  /** The target value to be achieved (0..1) */
  detailInteger?: number;
  /** Id and extensions of the primitive `detailInteger`. */
  _detailInteger?: Element;
  /** The target value to be achieved (0..1) */
  detailRatio?: Ratio;

  /** Reach goal on or before (0..1) */
  dueDate?: string;
  /** Id and extensions of the primitive `dueDate`. */
  _dueDate?: Element;
  /** Reach goal on or before (0..1) */
  dueDuration?: Duration;

  override fhirType(): string {
    return 'Goal.target';
  }

  /** FHIR JSON for this GoalTarget, typed as the plain `GoalTarget` data type. */
  override toJSON(): plainTypes.GoalTarget {
    return this.serialize() as plainTypes.GoalTarget;
  }

  /** The parameter whose value is being tracked (0..1) Created when absent. */
  getMeasure(): CodeableConcept {
    if (this.measure === undefined) {
      this.measure = new CodeableConcept();
    }
    return this.measure;
  }

  setMeasure(measure: CodeableConcept | undefined): this {
    return this.setFieldValue('measure', measure);
  }

  hasMeasure(): boolean {
    return this.hasFieldValue('measure');
  }

  /** The target value to be achieved (0..1) Whichever type of `detail[x]` is set. */
  getDetail(): Quantity | Range | CodeableConcept | string | boolean | number | Ratio | undefined {
    return this.getChoiceValue<
      Quantity | Range | CodeableConcept | string | boolean | number | Ratio
    >('detail');
  }

  /** True when any type of `detail[x]` is set. */
  hasDetail(): boolean {
    return this.hasChoiceValue('detail');
  }

  getDetailQuantity(): Quantity | undefined {
    return this.detailQuantity;
  }

  /** Sets `detail[x]` as Quantity and clears every other type of it. */
  setDetailQuantity(detailQuantity: Quantity | undefined): this {
    return this.setFieldValue('detailQuantity', detailQuantity);
  }

  hasDetailQuantity(): boolean {
    return this.hasFieldValue('detailQuantity');
  }

  getDetailRange(): Range | undefined {
    return this.detailRange;
  }

  /** Sets `detail[x]` as Range and clears every other type of it. */
  setDetailRange(detailRange: Range | undefined): this {
    return this.setFieldValue('detailRange', detailRange);
  }

  hasDetailRange(): boolean {
    return this.hasFieldValue('detailRange');
  }

  getDetailCodeableConcept(): CodeableConcept | undefined {
    return this.detailCodeableConcept;
  }

  /** Sets `detail[x]` as CodeableConcept and clears every other type of it. */
  setDetailCodeableConcept(detailCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('detailCodeableConcept', detailCodeableConcept);
  }

  hasDetailCodeableConcept(): boolean {
    return this.hasFieldValue('detailCodeableConcept');
  }

  getDetailString(): string | undefined {
    return this.detailString;
  }

  /** Sets `detail[x]` as string and clears every other type of it. */
  setDetailString(detailString: string | undefined): this {
    return this.setFieldValue('detailString', detailString);
  }

  hasDetailString(): boolean {
    return this.hasFieldValue('detailString');
  }

  getDetailBoolean(): boolean | undefined {
    return this.detailBoolean;
  }

  /** Sets `detail[x]` as boolean and clears every other type of it. */
  setDetailBoolean(detailBoolean: boolean | undefined): this {
    return this.setFieldValue('detailBoolean', detailBoolean);
  }

  hasDetailBoolean(): boolean {
    return this.hasFieldValue('detailBoolean');
  }

  getDetailInteger(): number | undefined {
    return this.detailInteger;
  }

  /** Sets `detail[x]` as integer and clears every other type of it. */
  setDetailInteger(detailInteger: number | undefined): this {
    return this.setFieldValue('detailInteger', detailInteger);
  }

  hasDetailInteger(): boolean {
    return this.hasFieldValue('detailInteger');
  }

  getDetailRatio(): Ratio | undefined {
    return this.detailRatio;
  }

  /** Sets `detail[x]` as Ratio and clears every other type of it. */
  setDetailRatio(detailRatio: Ratio | undefined): this {
    return this.setFieldValue('detailRatio', detailRatio);
  }

  hasDetailRatio(): boolean {
    return this.hasFieldValue('detailRatio');
  }

  /** Reach goal on or before (0..1) Whichever type of `due[x]` is set. */
  getDue(): string | Duration | undefined {
    return this.getChoiceValue<string | Duration>('due');
  }

  /** True when any type of `due[x]` is set. */
  hasDue(): boolean {
    return this.hasChoiceValue('due');
  }

  getDueDate(): string | undefined {
    return this.dueDate;
  }

  /** Sets `due[x]` as date and clears every other type of it. */
  setDueDate(dueDate: string | undefined): this {
    return this.setFieldValue('dueDate', dueDate);
  }

  hasDueDate(): boolean {
    return this.hasFieldValue('dueDate');
  }

  getDueDuration(): Duration | undefined {
    return this.dueDuration;
  }

  /** Sets `due[x]` as Duration and clears every other type of it. */
  setDueDuration(dueDuration: Duration | undefined): this {
    return this.setFieldValue('dueDuration', dueDuration);
  }

  hasDueDuration(): boolean {
    return this.hasFieldValue('dueDuration');
  }
}

modelTypeRegistry.register('GoalTarget', GoalTarget, false);
