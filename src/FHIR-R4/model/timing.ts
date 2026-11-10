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
import { Duration } from './duration';
import { Element } from './element';
import { Period } from './period';
import { Range } from './range';

/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export class Timing extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'event',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'event', typeCode: 'dateTime' }],
    },
    {
      elementName: 'repeat',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'repeat', typeCode: 'TimingRepeat' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
  ];

  /** When the event occurs (0..*) */
  event?: string[];
  /** Id and extensions of the primitive `event`. */
  _event?: (Element | null)[];

  /** When the event is to occur (0..1) */
  repeat?: TimingRepeat;

  /** BID | TID | QID | AM | PM | QD | QOD | + (0..1) */
  code?: CodeableConcept;

  override fhirType(): string {
    return 'Timing';
  }

  /** FHIR JSON for this Timing, typed as the plain `Timing` data type. */
  override toJSON(): plainTypes.Timing {
    return this.serialize() as plainTypes.Timing;
  }

  /** When the event occurs (0..*) Never undefined; an empty list is created when absent. */
  getEvent(): string[] {
    if (this.event === undefined) {
      this.event = [];
    }
    return this.event;
  }

  setEvent(event: string[] | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
  }

  /** Appends one value to `event`. Throws a FhirModelError when it is not a valid FHIR dateTime. */
  addEvent(event: string): this {
    return this.addFieldValue('event', event);
  }

  /** When the event is to occur (0..1) Created when absent. */
  getRepeat(): TimingRepeat {
    if (this.repeat === undefined) {
      this.repeat = new TimingRepeat();
    }
    return this.repeat;
  }

  setRepeat(repeat: TimingRepeat | undefined): this {
    return this.setFieldValue('repeat', repeat);
  }

  hasRepeat(): boolean {
    return this.hasFieldValue('repeat');
  }

  /** BID | TID | QID | AM | PM | QD | QOD | + (0..1) Created when absent. */
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
}

modelTypeRegistry.register('Timing', Timing, false);

/**
 * When the event is to occur
 */
export class TimingRepeat extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'bounds',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'boundsDuration', typeCode: 'Duration' },
        { jsonKey: 'boundsRange', typeCode: 'Range' },
        { jsonKey: 'boundsPeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'count',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'count', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'countMax',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'countMax', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'duration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'duration', typeCode: 'decimal' }],
    },
    {
      elementName: 'durationMax',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'durationMax', typeCode: 'decimal' }],
    },
    {
      elementName: 'durationUnit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'durationUnit', typeCode: 'code', allowedCodes: valueSetCodes.UnitsOfTime },
      ],
    },
    {
      elementName: 'frequency',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'frequency', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'frequencyMax',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'frequencyMax', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'decimal' }],
    },
    {
      elementName: 'periodMax',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'periodMax', typeCode: 'decimal' }],
    },
    {
      elementName: 'periodUnit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'periodUnit', typeCode: 'code', allowedCodes: valueSetCodes.UnitsOfTime }],
    },
    {
      elementName: 'dayOfWeek',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dayOfWeek', typeCode: 'code', allowedCodes: valueSetCodes.DaysOfWeek }],
    },
    {
      elementName: 'timeOfDay',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'timeOfDay', typeCode: 'time' }],
    },
    {
      elementName: 'when',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'when', typeCode: 'code', allowedCodes: valueSetCodes.EventTiming }],
    },
    {
      elementName: 'offset',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'offset', typeCode: 'unsignedInt' }],
    },
  ];

  /** Length/Range of lengths, or (Start and/or end) limits (0..1) */
  boundsDuration?: Duration;
  /** Length/Range of lengths, or (Start and/or end) limits (0..1) */
  boundsRange?: Range;
  /** Length/Range of lengths, or (Start and/or end) limits (0..1) */
  boundsPeriod?: Period;

  /** Number of times to repeat (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;

  /** Maximum number of times to repeat (0..1) */
  countMax?: number;
  /** Id and extensions of the primitive `countMax`. */
  _countMax?: Element;

  /** How long when it happens (0..1) */
  duration?: number;
  /** Id and extensions of the primitive `duration`. */
  _duration?: Element;

  /** How long when it happens (Max) (0..1) */
  durationMax?: number;
  /** Id and extensions of the primitive `durationMax`. */
  _durationMax?: Element;

  /** s | min | h | d | wk | mo | a - unit of time (UCUM) (0..1) */
  durationUnit?: valueSetCodes.UnitsOfTime;
  /** Id and extensions of the primitive `durationUnit`. */
  _durationUnit?: Element;

  /** Event occurs frequency times per period (0..1) */
  frequency?: number;
  /** Id and extensions of the primitive `frequency`. */
  _frequency?: Element;

  /** Event occurs up to frequencyMax times per period (0..1) */
  frequencyMax?: number;
  /** Id and extensions of the primitive `frequencyMax`. */
  _frequencyMax?: Element;

  /** Event occurs frequency times per period (0..1) */
  period?: number;
  /** Id and extensions of the primitive `period`. */
  _period?: Element;

  /** Upper limit of period (3-4 hours) (0..1) */
  periodMax?: number;
  /** Id and extensions of the primitive `periodMax`. */
  _periodMax?: Element;

  /** s | min | h | d | wk | mo | a - unit of time (UCUM) (0..1) */
  periodUnit?: valueSetCodes.UnitsOfTime;
  /** Id and extensions of the primitive `periodUnit`. */
  _periodUnit?: Element;

  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  dayOfWeek?: valueSetCodes.DaysOfWeek[];
  /** Id and extensions of the primitive `dayOfWeek`. */
  _dayOfWeek?: (Element | null)[];

  /** Time of day for action (0..*) */
  timeOfDay?: string[];
  /** Id and extensions of the primitive `timeOfDay`. */
  _timeOfDay?: (Element | null)[];

  /** Code for time period of occurrence (0..*) */
  when?: valueSetCodes.EventTiming[];
  /** Id and extensions of the primitive `when`. */
  _when?: (Element | null)[];

  /** Minutes from event (before or after) (0..1) */
  offset?: number;
  /** Id and extensions of the primitive `offset`. */
  _offset?: Element;

  override fhirType(): string {
    return 'Timing.repeat';
  }

  /** FHIR JSON for this TimingRepeat, typed as the plain `TimingRepeat` data type. */
  override toJSON(): plainTypes.TimingRepeat {
    return this.serialize() as plainTypes.TimingRepeat;
  }

  /** Length/Range of lengths, or (Start and/or end) limits (0..1) Whichever type of `bounds[x]` is set. */
  getBounds(): Duration | Range | Period | undefined {
    return this.getChoiceValue<Duration | Range | Period>('bounds');
  }

  /** True when any type of `bounds[x]` is set. */
  hasBounds(): boolean {
    return this.hasChoiceValue('bounds');
  }

  getBoundsDuration(): Duration | undefined {
    return this.boundsDuration;
  }

  /** Sets `bounds[x]` as Duration and clears every other type of it. */
  setBoundsDuration(boundsDuration: Duration | undefined): this {
    return this.setFieldValue('boundsDuration', boundsDuration);
  }

  hasBoundsDuration(): boolean {
    return this.hasFieldValue('boundsDuration');
  }

  getBoundsRange(): Range | undefined {
    return this.boundsRange;
  }

  /** Sets `bounds[x]` as Range and clears every other type of it. */
  setBoundsRange(boundsRange: Range | undefined): this {
    return this.setFieldValue('boundsRange', boundsRange);
  }

  hasBoundsRange(): boolean {
    return this.hasFieldValue('boundsRange');
  }

  getBoundsPeriod(): Period | undefined {
    return this.boundsPeriod;
  }

  /** Sets `bounds[x]` as Period and clears every other type of it. */
  setBoundsPeriod(boundsPeriod: Period | undefined): this {
    return this.setFieldValue('boundsPeriod', boundsPeriod);
  }

  hasBoundsPeriod(): boolean {
    return this.hasFieldValue('boundsPeriod');
  }

  /** Number of times to repeat (0..1) */
  getCount(): number | undefined {
    return this.count;
  }

  /** Sets `count`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setCount(count: number | undefined): this {
    return this.setFieldValue('count', count);
  }

  hasCount(): boolean {
    return this.hasFieldValue('count');
  }

  /** The element carrying the id and extensions of `count`. Created when absent. */
  getCountElement(): Element {
    if (this._count === undefined) {
      this._count = new Element();
    }
    return this._count;
  }

  setCountElement(countElement: Element | undefined): this {
    this._count = countElement;
    return this;
  }

  /** Maximum number of times to repeat (0..1) */
  getCountMax(): number | undefined {
    return this.countMax;
  }

  /** Sets `countMax`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setCountMax(countMax: number | undefined): this {
    return this.setFieldValue('countMax', countMax);
  }

  hasCountMax(): boolean {
    return this.hasFieldValue('countMax');
  }

  /** The element carrying the id and extensions of `countMax`. Created when absent. */
  getCountMaxElement(): Element {
    if (this._countMax === undefined) {
      this._countMax = new Element();
    }
    return this._countMax;
  }

  setCountMaxElement(countMaxElement: Element | undefined): this {
    this._countMax = countMaxElement;
    return this;
  }

  /** How long when it happens (0..1) */
  getDuration(): number | undefined {
    return this.duration;
  }

  /** Sets `duration`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setDuration(duration: number | undefined): this {
    return this.setFieldValue('duration', duration);
  }

  hasDuration(): boolean {
    return this.hasFieldValue('duration');
  }

  /** The element carrying the id and extensions of `duration`. Created when absent. */
  getDurationElement(): Element {
    if (this._duration === undefined) {
      this._duration = new Element();
    }
    return this._duration;
  }

  setDurationElement(durationElement: Element | undefined): this {
    this._duration = durationElement;
    return this;
  }

  /** How long when it happens (Max) (0..1) */
  getDurationMax(): number | undefined {
    return this.durationMax;
  }

  /** Sets `durationMax`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setDurationMax(durationMax: number | undefined): this {
    return this.setFieldValue('durationMax', durationMax);
  }

  hasDurationMax(): boolean {
    return this.hasFieldValue('durationMax');
  }

  /** The element carrying the id and extensions of `durationMax`. Created when absent. */
  getDurationMaxElement(): Element {
    if (this._durationMax === undefined) {
      this._durationMax = new Element();
    }
    return this._durationMax;
  }

  setDurationMaxElement(durationMaxElement: Element | undefined): this {
    this._durationMax = durationMaxElement;
    return this;
  }

  /** s | min | h | d | wk | mo | a - unit of time (UCUM) (0..1) */
  getDurationUnit(): valueSetCodes.UnitsOfTime | undefined {
    return this.durationUnit;
  }

  /** Sets `durationUnit`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setDurationUnit(durationUnit: valueSetCodes.UnitsOfTime | undefined): this {
    return this.setFieldValue('durationUnit', durationUnit);
  }

  hasDurationUnit(): boolean {
    return this.hasFieldValue('durationUnit');
  }

  /** The element carrying the id and extensions of `durationUnit`. Created when absent. */
  getDurationUnitElement(): Element {
    if (this._durationUnit === undefined) {
      this._durationUnit = new Element();
    }
    return this._durationUnit;
  }

  setDurationUnitElement(durationUnitElement: Element | undefined): this {
    this._durationUnit = durationUnitElement;
    return this;
  }

  /** Event occurs frequency times per period (0..1) */
  getFrequency(): number | undefined {
    return this.frequency;
  }

  /** Sets `frequency`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setFrequency(frequency: number | undefined): this {
    return this.setFieldValue('frequency', frequency);
  }

  hasFrequency(): boolean {
    return this.hasFieldValue('frequency');
  }

  /** The element carrying the id and extensions of `frequency`. Created when absent. */
  getFrequencyElement(): Element {
    if (this._frequency === undefined) {
      this._frequency = new Element();
    }
    return this._frequency;
  }

  setFrequencyElement(frequencyElement: Element | undefined): this {
    this._frequency = frequencyElement;
    return this;
  }

  /** Event occurs up to frequencyMax times per period (0..1) */
  getFrequencyMax(): number | undefined {
    return this.frequencyMax;
  }

  /** Sets `frequencyMax`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setFrequencyMax(frequencyMax: number | undefined): this {
    return this.setFieldValue('frequencyMax', frequencyMax);
  }

  hasFrequencyMax(): boolean {
    return this.hasFieldValue('frequencyMax');
  }

  /** The element carrying the id and extensions of `frequencyMax`. Created when absent. */
  getFrequencyMaxElement(): Element {
    if (this._frequencyMax === undefined) {
      this._frequencyMax = new Element();
    }
    return this._frequencyMax;
  }

  setFrequencyMaxElement(frequencyMaxElement: Element | undefined): this {
    this._frequencyMax = frequencyMaxElement;
    return this;
  }

  /** Event occurs frequency times per period (0..1) */
  getPeriod(): number | undefined {
    return this.period;
  }

  /** Sets `period`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setPeriod(period: number | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** The element carrying the id and extensions of `period`. Created when absent. */
  getPeriodElement(): Element {
    if (this._period === undefined) {
      this._period = new Element();
    }
    return this._period;
  }

  setPeriodElement(periodElement: Element | undefined): this {
    this._period = periodElement;
    return this;
  }

  /** Upper limit of period (3-4 hours) (0..1) */
  getPeriodMax(): number | undefined {
    return this.periodMax;
  }

  /** Sets `periodMax`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setPeriodMax(periodMax: number | undefined): this {
    return this.setFieldValue('periodMax', periodMax);
  }

  hasPeriodMax(): boolean {
    return this.hasFieldValue('periodMax');
  }

  /** The element carrying the id and extensions of `periodMax`. Created when absent. */
  getPeriodMaxElement(): Element {
    if (this._periodMax === undefined) {
      this._periodMax = new Element();
    }
    return this._periodMax;
  }

  setPeriodMaxElement(periodMaxElement: Element | undefined): this {
    this._periodMax = periodMaxElement;
    return this;
  }

  /** s | min | h | d | wk | mo | a - unit of time (UCUM) (0..1) */
  getPeriodUnit(): valueSetCodes.UnitsOfTime | undefined {
    return this.periodUnit;
  }

  /** Sets `periodUnit`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPeriodUnit(periodUnit: valueSetCodes.UnitsOfTime | undefined): this {
    return this.setFieldValue('periodUnit', periodUnit);
  }

  hasPeriodUnit(): boolean {
    return this.hasFieldValue('periodUnit');
  }

  /** The element carrying the id and extensions of `periodUnit`. Created when absent. */
  getPeriodUnitElement(): Element {
    if (this._periodUnit === undefined) {
      this._periodUnit = new Element();
    }
    return this._periodUnit;
  }

  setPeriodUnitElement(periodUnitElement: Element | undefined): this {
    this._periodUnit = periodUnitElement;
    return this;
  }

  /** mon | tue | wed | thu | fri | sat | sun (0..*) Never undefined; an empty list is created when absent. */
  getDayOfWeek(): valueSetCodes.DaysOfWeek[] {
    if (this.dayOfWeek === undefined) {
      this.dayOfWeek = [];
    }
    return this.dayOfWeek;
  }

  setDayOfWeek(dayOfWeek: valueSetCodes.DaysOfWeek[] | undefined): this {
    return this.setFieldValue('dayOfWeek', dayOfWeek);
  }

  hasDayOfWeek(): boolean {
    return this.hasFieldValue('dayOfWeek');
  }

  /** Appends one value to `dayOfWeek`. Throws a FhirModelError when it is not a valid FHIR code. */
  addDayOfWeek(dayOfWeek: valueSetCodes.DaysOfWeek): this {
    return this.addFieldValue('dayOfWeek', dayOfWeek);
  }

  /** Time of day for action (0..*) Never undefined; an empty list is created when absent. */
  getTimeOfDay(): string[] {
    if (this.timeOfDay === undefined) {
      this.timeOfDay = [];
    }
    return this.timeOfDay;
  }

  setTimeOfDay(timeOfDay: string[] | undefined): this {
    return this.setFieldValue('timeOfDay', timeOfDay);
  }

  hasTimeOfDay(): boolean {
    return this.hasFieldValue('timeOfDay');
  }

  /** Appends one value to `timeOfDay`. Throws a FhirModelError when it is not a valid FHIR time. */
  addTimeOfDay(timeOfDay: string): this {
    return this.addFieldValue('timeOfDay', timeOfDay);
  }

  /** Code for time period of occurrence (0..*) Never undefined; an empty list is created when absent. */
  getWhen(): valueSetCodes.EventTiming[] {
    if (this.when === undefined) {
      this.when = [];
    }
    return this.when;
  }

  setWhen(when: valueSetCodes.EventTiming[] | undefined): this {
    return this.setFieldValue('when', when);
  }

  hasWhen(): boolean {
    return this.hasFieldValue('when');
  }

  /** Appends one value to `when`. Throws a FhirModelError when it is not a valid FHIR code. */
  addWhen(when: valueSetCodes.EventTiming): this {
    return this.addFieldValue('when', when);
  }

  /** Minutes from event (before or after) (0..1) */
  getOffset(): number | undefined {
    return this.offset;
  }

  /** Sets `offset`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setOffset(offset: number | undefined): this {
    return this.setFieldValue('offset', offset);
  }

  hasOffset(): boolean {
    return this.hasFieldValue('offset');
  }

  /** The element carrying the id and extensions of `offset`. Created when absent. */
  getOffsetElement(): Element {
    if (this._offset === undefined) {
      this._offset = new Element();
    }
    return this._offset;
  }

  setOffsetElement(offsetElement: Element | undefined): this {
    this._offset = offsetElement;
    return this;
  }
}

modelTypeRegistry.register('TimingRepeat', TimingRepeat, false);
