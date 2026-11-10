/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { DataType } from './dataType';
import { Element } from './element';
import { Period } from './period';

/**
 * Availability Type: Availability data for an {item}.
 */
export class Availability extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'availableTime',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'availableTime', typeCode: 'AvailabilityAvailableTime' }],
    },
    {
      elementName: 'notAvailableTime',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'notAvailableTime', typeCode: 'AvailabilityNotAvailableTime' }],
    },
  ];

  /** Times the {item} is available (0..*) */
  availableTime?: AvailabilityAvailableTime[];

  /** Not available during this time due to provided reason (0..*) */
  notAvailableTime?: AvailabilityNotAvailableTime[];

  override fhirType(): string {
    return 'Availability';
  }

  /** FHIR JSON for this Availability, typed as the plain `Availability` data type. */
  override toJSON(): plainTypes.Availability {
    return this.serialize() as plainTypes.Availability;
  }

  /** Times the {item} is available (0..*) Never undefined; an empty list is created when absent. */
  getAvailableTime(): AvailabilityAvailableTime[] {
    if (this.availableTime === undefined) {
      this.availableTime = [];
    }
    return this.availableTime;
  }

  setAvailableTime(availableTime: AvailabilityAvailableTime[] | undefined): this {
    return this.setFieldValue('availableTime', availableTime);
  }

  hasAvailableTime(): boolean {
    return this.hasFieldValue('availableTime');
  }

  /** Appends a new, empty AvailabilityAvailableTime to `availableTime` and returns it so it can be filled in. */
  addAvailableTime(): AvailabilityAvailableTime;
  /** Appends the given AvailabilityAvailableTime to `availableTime` and returns this object for chaining. */
  addAvailableTime(availabilityAvailableTime: AvailabilityAvailableTime): this;
  addAvailableTime(
    availabilityAvailableTime?: AvailabilityAvailableTime
  ): AvailabilityAvailableTime | this {
    if (availabilityAvailableTime !== undefined) {
      return this.addFieldValue('availableTime', availabilityAvailableTime);
    }
    const createdAvailabilityAvailableTime = new AvailabilityAvailableTime();
    this.addFieldValue('availableTime', createdAvailabilityAvailableTime);
    return createdAvailabilityAvailableTime;
  }

  /** The first AvailabilityAvailableTime of `availableTime`. One is added when the list is empty. */
  getAvailableTimeFirstRep(): AvailabilityAvailableTime {
    const firstAvailabilityAvailableTime = this.getAvailableTime()[0];
    return firstAvailabilityAvailableTime === undefined
      ? this.addAvailableTime()
      : firstAvailabilityAvailableTime;
  }

  /** Not available during this time due to provided reason (0..*) Never undefined; an empty list is created when absent. */
  getNotAvailableTime(): AvailabilityNotAvailableTime[] {
    if (this.notAvailableTime === undefined) {
      this.notAvailableTime = [];
    }
    return this.notAvailableTime;
  }

  setNotAvailableTime(notAvailableTime: AvailabilityNotAvailableTime[] | undefined): this {
    return this.setFieldValue('notAvailableTime', notAvailableTime);
  }

  hasNotAvailableTime(): boolean {
    return this.hasFieldValue('notAvailableTime');
  }

  /** Appends a new, empty AvailabilityNotAvailableTime to `notAvailableTime` and returns it so it can be filled in. */
  addNotAvailableTime(): AvailabilityNotAvailableTime;
  /** Appends the given AvailabilityNotAvailableTime to `notAvailableTime` and returns this object for chaining. */
  addNotAvailableTime(availabilityNotAvailableTime: AvailabilityNotAvailableTime): this;
  addNotAvailableTime(
    availabilityNotAvailableTime?: AvailabilityNotAvailableTime
  ): AvailabilityNotAvailableTime | this {
    if (availabilityNotAvailableTime !== undefined) {
      return this.addFieldValue('notAvailableTime', availabilityNotAvailableTime);
    }
    const createdAvailabilityNotAvailableTime = new AvailabilityNotAvailableTime();
    this.addFieldValue('notAvailableTime', createdAvailabilityNotAvailableTime);
    return createdAvailabilityNotAvailableTime;
  }

  /** The first AvailabilityNotAvailableTime of `notAvailableTime`. One is added when the list is empty. */
  getNotAvailableTimeFirstRep(): AvailabilityNotAvailableTime {
    const firstAvailabilityNotAvailableTime = this.getNotAvailableTime()[0];
    return firstAvailabilityNotAvailableTime === undefined
      ? this.addNotAvailableTime()
      : firstAvailabilityNotAvailableTime;
  }
}

modelTypeRegistry.register('Availability', Availability, false);

/**
 * Times the {item} is available
 */
export class AvailabilityAvailableTime extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'daysOfWeek',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'daysOfWeek', typeCode: 'code', allowedCodes: valueSetCodes.DaysOfWeek }],
    },
    {
      elementName: 'allDay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allDay', typeCode: 'boolean' }],
    },
    {
      elementName: 'availableStartTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availableStartTime', typeCode: 'time' }],
    },
    {
      elementName: 'availableEndTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availableEndTime', typeCode: 'time' }],
    },
  ];

  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  daysOfWeek?: valueSetCodes.DaysOfWeek[];
  /** Id and extensions of the primitive `daysOfWeek`. */
  _daysOfWeek?: (Element | null)[];

  /** Always available? i.e. 24 hour service (0..1) */
  allDay?: boolean;
  /** Id and extensions of the primitive `allDay`. */
  _allDay?: Element;

  /** Opening time of day (ignored if allDay = true) (0..1) */
  availableStartTime?: string;
  /** Id and extensions of the primitive `availableStartTime`. */
  _availableStartTime?: Element;

  /** Closing time of day (ignored if allDay = true) (0..1) */
  availableEndTime?: string;
  /** Id and extensions of the primitive `availableEndTime`. */
  _availableEndTime?: Element;

  override fhirType(): string {
    return 'Availability.availableTime';
  }

  /** FHIR JSON for this AvailabilityAvailableTime, typed as the plain `AvailabilityAvailableTime` data type. */
  override toJSON(): plainTypes.AvailabilityAvailableTime {
    return this.serialize() as plainTypes.AvailabilityAvailableTime;
  }

  /** mon | tue | wed | thu | fri | sat | sun (0..*) Never undefined; an empty list is created when absent. */
  getDaysOfWeek(): valueSetCodes.DaysOfWeek[] {
    if (this.daysOfWeek === undefined) {
      this.daysOfWeek = [];
    }
    return this.daysOfWeek;
  }

  setDaysOfWeek(daysOfWeek: valueSetCodes.DaysOfWeek[] | undefined): this {
    return this.setFieldValue('daysOfWeek', daysOfWeek);
  }

  hasDaysOfWeek(): boolean {
    return this.hasFieldValue('daysOfWeek');
  }

  /** Appends one value to `daysOfWeek`. Throws a FhirModelError when it is not a valid FHIR code. */
  addDaysOfWeek(daysOfWeek: valueSetCodes.DaysOfWeek): this {
    return this.addFieldValue('daysOfWeek', daysOfWeek);
  }

  /** Always available? i.e. 24 hour service (0..1) */
  getAllDay(): boolean | undefined {
    return this.allDay;
  }

  /** Sets `allDay`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAllDay(allDay: boolean | undefined): this {
    return this.setFieldValue('allDay', allDay);
  }

  hasAllDay(): boolean {
    return this.hasFieldValue('allDay');
  }

  /** The element carrying the id and extensions of `allDay`. Created when absent. */
  getAllDayElement(): Element {
    if (this._allDay === undefined) {
      this._allDay = new Element();
    }
    return this._allDay;
  }

  setAllDayElement(allDayElement: Element | undefined): this {
    this._allDay = allDayElement;
    return this;
  }

  /** Opening time of day (ignored if allDay = true) (0..1) */
  getAvailableStartTime(): string | undefined {
    return this.availableStartTime;
  }

  /** Sets `availableStartTime`. Throws a FhirModelError when the value is not a valid FHIR time. */
  setAvailableStartTime(availableStartTime: string | undefined): this {
    return this.setFieldValue('availableStartTime', availableStartTime);
  }

  hasAvailableStartTime(): boolean {
    return this.hasFieldValue('availableStartTime');
  }

  /** The element carrying the id and extensions of `availableStartTime`. Created when absent. */
  getAvailableStartTimeElement(): Element {
    if (this._availableStartTime === undefined) {
      this._availableStartTime = new Element();
    }
    return this._availableStartTime;
  }

  setAvailableStartTimeElement(availableStartTimeElement: Element | undefined): this {
    this._availableStartTime = availableStartTimeElement;
    return this;
  }

  /** Closing time of day (ignored if allDay = true) (0..1) */
  getAvailableEndTime(): string | undefined {
    return this.availableEndTime;
  }

  /** Sets `availableEndTime`. Throws a FhirModelError when the value is not a valid FHIR time. */
  setAvailableEndTime(availableEndTime: string | undefined): this {
    return this.setFieldValue('availableEndTime', availableEndTime);
  }

  hasAvailableEndTime(): boolean {
    return this.hasFieldValue('availableEndTime');
  }

  /** The element carrying the id and extensions of `availableEndTime`. Created when absent. */
  getAvailableEndTimeElement(): Element {
    if (this._availableEndTime === undefined) {
      this._availableEndTime = new Element();
    }
    return this._availableEndTime;
  }

  setAvailableEndTimeElement(availableEndTimeElement: Element | undefined): this {
    this._availableEndTime = availableEndTimeElement;
    return this;
  }
}

modelTypeRegistry.register('AvailabilityAvailableTime', AvailabilityAvailableTime, false);

/**
 * Not available during this time due to provided reason
 */
export class AvailabilityNotAvailableTime extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'during',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'during', typeCode: 'Period' }],
    },
  ];

  /** Reason presented to the user explaining why time not available (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Service not available during this period (0..1) */
  during?: Period;

  override fhirType(): string {
    return 'Availability.notAvailableTime';
  }

  /** FHIR JSON for this AvailabilityNotAvailableTime, typed as the plain `AvailabilityNotAvailableTime` data type. */
  override toJSON(): plainTypes.AvailabilityNotAvailableTime {
    return this.serialize() as plainTypes.AvailabilityNotAvailableTime;
  }

  /** Reason presented to the user explaining why time not available (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Service not available during this period (0..1) Created when absent. */
  getDuring(): Period {
    if (this.during === undefined) {
      this.during = new Period();
    }
    return this.during;
  }

  setDuring(during: Period | undefined): this {
    return this.setFieldValue('during', during);
  }

  hasDuring(): boolean {
    return this.hasFieldValue('during');
  }
}

modelTypeRegistry.register('AvailabilityNotAvailableTime', AvailabilityNotAvailableTime, false);
