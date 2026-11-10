/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Period } from './period';
import type { Range } from './range';

/**
 * Base StructureDefinition for Timing Type
 */
export class Timing {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** When the event occurs (0..*) */
  event?: Array<string>;
  /** Id and extensions of the primitive `event`. */
  _event?: Array<Element | null>;
  /** When the event is to occur (0..1) */
  repeat?: TimingRepeat;
  /** BID | TID | QID | AM | PM | QD | QOD | Q4H | Q6H + (0..1) */
  code?: CodeableConcept;
}

/**
 * When the event is to occur
 */
export class TimingRepeat {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
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
  durationUnit?: TimingRepeat.DurationUnitEnum;
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
  periodUnit?: TimingRepeat.PeriodUnitEnum;
  /** Id and extensions of the primitive `periodUnit`. */
  _periodUnit?: Element;
  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  dayOfWeek?: Array<TimingRepeat.DayOfWeekEnum>;
  /** Id and extensions of the primitive `dayOfWeek`. */
  _dayOfWeek?: Array<Element | null>;
  /** Time of day for action (0..*) */
  timeOfDay?: Array<string>;
  /** Id and extensions of the primitive `timeOfDay`. */
  _timeOfDay?: Array<Element | null>;
  /** Regular life events the event is tied to (0..*) */
  when?: Array<TimingRepeat.WhenEnum>;
  /** Id and extensions of the primitive `when`. */
  _when?: Array<Element | null>;
  /** Minutes from event (before or after) (0..1) */
  offset?: number;
  /** Id and extensions of the primitive `offset`. */
  _offset?: Element;
}

export namespace TimingRepeat {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/units-of-time */
  export type DurationUnitEnum = 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';
  export const DurationUnitEnum = {
    S: 's' as DurationUnitEnum,
    Min: 'min' as DurationUnitEnum,
    H: 'h' as DurationUnitEnum,
    D: 'd' as DurationUnitEnum,
    Wk: 'wk' as DurationUnitEnum,
    Mo: 'mo' as DurationUnitEnum,
    A: 'a' as DurationUnitEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/units-of-time */
  export type PeriodUnitEnum = 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';
  export const PeriodUnitEnum = {
    S: 's' as PeriodUnitEnum,
    Min: 'min' as PeriodUnitEnum,
    H: 'h' as PeriodUnitEnum,
    D: 'd' as PeriodUnitEnum,
    Wk: 'wk' as PeriodUnitEnum,
    Mo: 'mo' as PeriodUnitEnum,
    A: 'a' as PeriodUnitEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/days-of-week */
  export type DayOfWeekEnum = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
  export const DayOfWeekEnum = {
    Mon: 'mon' as DayOfWeekEnum,
    Tue: 'tue' as DayOfWeekEnum,
    Wed: 'wed' as DayOfWeekEnum,
    Thu: 'thu' as DayOfWeekEnum,
    Fri: 'fri' as DayOfWeekEnum,
    Sat: 'sat' as DayOfWeekEnum,
    Sun: 'sun' as DayOfWeekEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-timing */
  export type WhenEnum =
    | 'MORN'
    | 'AFT'
    | 'EVE'
    | 'NIGHT'
    | 'PHS'
    | 'HS'
    | 'WAKE'
    | 'C'
    | 'CM'
    | 'CD'
    | 'CV'
    | 'AC'
    | 'ACM'
    | 'ACD'
    | 'ACV'
    | 'PC'
    | 'PCM'
    | 'PCD'
    | 'PCV';
  export const WhenEnum = {
    MORN: 'MORN' as WhenEnum,
    AFT: 'AFT' as WhenEnum,
    EVE: 'EVE' as WhenEnum,
    NIGHT: 'NIGHT' as WhenEnum,
    PHS: 'PHS' as WhenEnum,
    HS: 'HS' as WhenEnum,
    WAKE: 'WAKE' as WhenEnum,
    C: 'C' as WhenEnum,
    CM: 'CM' as WhenEnum,
    CD: 'CD' as WhenEnum,
    CV: 'CV' as WhenEnum,
    AC: 'AC' as WhenEnum,
    ACM: 'ACM' as WhenEnum,
    ACD: 'ACD' as WhenEnum,
    ACV: 'ACV' as WhenEnum,
    PC: 'PC' as WhenEnum,
    PCM: 'PCM' as WhenEnum,
    PCD: 'PCD' as WhenEnum,
    PCV: 'PCV' as WhenEnum,
  };
}
