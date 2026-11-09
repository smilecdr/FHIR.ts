/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { CodeableConcept } from './codeableConcept';
import { DataRequirement } from './dataRequirement';
import { DataType } from './dataType';
import { Element } from './element';
import { Expression } from './expression';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * TriggerDefinition Type: A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
export class TriggerDefinition extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.TriggerType }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subscriptionTopic',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subscriptionTopic', typeCode: 'canonical' }],
    },
    {
      elementName: 'timing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timingTiming', typeCode: 'Timing' },
        { jsonKey: 'timingReference', typeCode: 'Reference', targetResourceTypes: ['Schedule'] },
        { jsonKey: 'timingDate', typeCode: 'date' },
        { jsonKey: 'timingDateTime', typeCode: 'dateTime' },
      ],
    },
    {
      elementName: 'data',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'data', typeCode: 'DataRequirement' }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'condition', typeCode: 'Expression' }],
    },
  ];

  /** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended (1..1) */
  type?: valueSetCodes.TriggerType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Name or URI that identifies the event (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Coded definition of the event (0..1) */
  code?: CodeableConcept;

  /** What event (0..1) */
  subscriptionTopic?: string;
  /** Id and extensions of the primitive `subscriptionTopic`. */
  _subscriptionTopic?: Element;

  /** Timing of the event (0..1) */
  timingTiming?: Timing;
  /** Timing of the event (0..1) */
  timingReference?: Reference;
  /** Timing of the event (0..1) */
  timingDate?: string;
  /** Id and extensions of the primitive `timingDate`. */
  _timingDate?: Element;
  /** Timing of the event (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;

  /** Triggering data of the event (multiple = 'and') (0..*) */
  data?: DataRequirement[];

  /** Whether the event triggers (boolean expression) (0..1) */
  condition?: Expression;

  override fhirType(): string {
    return 'TriggerDefinition';
  }

  /** FHIR JSON for this TriggerDefinition, typed as the plain `TriggerDefinition` data type. */
  override toJSON(): plainTypes.TriggerDefinition {
    return this.serialize() as plainTypes.TriggerDefinition;
  }

  /** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended (1..1) */
  getType(): valueSetCodes.TriggerType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.TriggerType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Name or URI that identifies the event (0..1) */
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

  /** Coded definition of the event (0..1) Created when absent. */
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

  /** What event (0..1) */
  getSubscriptionTopic(): string | undefined {
    return this.subscriptionTopic;
  }

  /** Sets `subscriptionTopic`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setSubscriptionTopic(subscriptionTopic: string | undefined): this {
    return this.setFieldValue('subscriptionTopic', subscriptionTopic);
  }

  hasSubscriptionTopic(): boolean {
    return this.hasFieldValue('subscriptionTopic');
  }

  /** The element carrying the id and extensions of `subscriptionTopic`. Created when absent. */
  getSubscriptionTopicElement(): Element {
    if (this._subscriptionTopic === undefined) {
      this._subscriptionTopic = new Element();
    }
    return this._subscriptionTopic;
  }

  setSubscriptionTopicElement(subscriptionTopicElement: Element | undefined): this {
    this._subscriptionTopic = subscriptionTopicElement;
    return this;
  }

  /** Timing of the event (0..1) Whichever type of `timing[x]` is set. */
  getTiming(): Timing | Reference | string | undefined {
    return this.getChoiceValue<Timing | Reference | string>('timing');
  }

  /** True when any type of `timing[x]` is set. */
  hasTiming(): boolean {
    return this.hasChoiceValue('timing');
  }

  getTimingTiming(): Timing | undefined {
    return this.timingTiming;
  }

  /** Sets `timing[x]` as Timing and clears every other type of it. */
  setTimingTiming(timingTiming: Timing | undefined): this {
    return this.setFieldValue('timingTiming', timingTiming);
  }

  hasTimingTiming(): boolean {
    return this.hasFieldValue('timingTiming');
  }

  getTimingReference(): Reference | undefined {
    return this.timingReference;
  }

  /** Sets `timing[x]` as Reference and clears every other type of it. */
  setTimingReference(timingReference: Reference | undefined): this {
    return this.setFieldValue('timingReference', timingReference);
  }

  hasTimingReference(): boolean {
    return this.hasFieldValue('timingReference');
  }

  getTimingDate(): string | undefined {
    return this.timingDate;
  }

  /** Sets `timing[x]` as date and clears every other type of it. */
  setTimingDate(timingDate: string | undefined): this {
    return this.setFieldValue('timingDate', timingDate);
  }

  hasTimingDate(): boolean {
    return this.hasFieldValue('timingDate');
  }

  getTimingDateTime(): string | undefined {
    return this.timingDateTime;
  }

  /** Sets `timing[x]` as dateTime and clears every other type of it. */
  setTimingDateTime(timingDateTime: string | undefined): this {
    return this.setFieldValue('timingDateTime', timingDateTime);
  }

  hasTimingDateTime(): boolean {
    return this.hasFieldValue('timingDateTime');
  }

  /** Triggering data of the event (multiple = 'and') (0..*) Never undefined; an empty list is created when absent. */
  getData(): DataRequirement[] {
    if (this.data === undefined) {
      this.data = [];
    }
    return this.data;
  }

  setData(data: DataRequirement[] | undefined): this {
    return this.setFieldValue('data', data);
  }

  hasData(): boolean {
    return this.hasFieldValue('data');
  }

  /** Appends a new, empty DataRequirement to `data` and returns it so it can be filled in. */
  addData(): DataRequirement;
  /** Appends the given DataRequirement to `data` and returns this object for chaining. */
  addData(dataRequirement: DataRequirement): this;
  addData(dataRequirement?: DataRequirement): DataRequirement | this {
    if (dataRequirement !== undefined) {
      return this.addFieldValue('data', dataRequirement);
    }
    const createdDataRequirement = new DataRequirement();
    this.addFieldValue('data', createdDataRequirement);
    return createdDataRequirement;
  }

  /** The first DataRequirement of `data`. One is added when the list is empty. */
  getDataFirstRep(): DataRequirement {
    const firstDataRequirement = this.getData()[0];
    return firstDataRequirement === undefined ? this.addData() : firstDataRequirement;
  }

  /** Whether the event triggers (boolean expression) (0..1) Created when absent. */
  getCondition(): Expression {
    if (this.condition === undefined) {
      this.condition = new Expression();
    }
    return this.condition;
  }

  setCondition(condition: Expression | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }
}

modelTypeRegistry.register('TriggerDefinition', TriggerDefinition, false);
