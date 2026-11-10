/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { DataRequirement } from './dataRequirement';
import { Element } from './element';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * Base StructureDefinition for TriggerDefinition Type
 */
export class TriggerDefinition extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.TriggerType }],
    },
    {
      elementName: 'eventName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'eventName', typeCode: 'string' }],
    },
    {
      elementName: 'eventTiming',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'eventTimingTiming', typeCode: 'Timing' },
        {
          jsonKey: 'eventTimingReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Schedule'],
        },
        { jsonKey: 'eventTimingDate', typeCode: 'date' },
        { jsonKey: 'eventTimingDateTime', typeCode: 'dateTime' },
      ],
    },
    {
      elementName: 'eventData',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'eventData', typeCode: 'DataRequirement' }],
    },
  ];

  /** named-event | periodic | data-added | data-modified | data-removed | data-accessed | data-access-ended (1..1) */
  type?: valueSetCodes.TriggerType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Triggering event name (0..1) */
  eventName?: string;
  /** Id and extensions of the primitive `eventName`. */
  _eventName?: Element;

  /** Timing of the event (0..1) */
  eventTimingTiming?: Timing;
  /** Timing of the event (0..1) */
  eventTimingReference?: Reference;
  /** Timing of the event (0..1) */
  eventTimingDate?: string;
  /** Id and extensions of the primitive `eventTimingDate`. */
  _eventTimingDate?: Element;
  /** Timing of the event (0..1) */
  eventTimingDateTime?: string;
  /** Id and extensions of the primitive `eventTimingDateTime`. */
  _eventTimingDateTime?: Element;

  /** Triggering data of the event (0..1) */
  eventData?: DataRequirement;

  override fhirType(): string {
    return 'TriggerDefinition';
  }

  /** FHIR JSON for this TriggerDefinition, typed as the plain `TriggerDefinition` data type. */
  override toJSON(): plainTypes.TriggerDefinition {
    return this.serialize() as plainTypes.TriggerDefinition;
  }

  /** named-event | periodic | data-added | data-modified | data-removed | data-accessed | data-access-ended (1..1) */
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

  /** Triggering event name (0..1) */
  getEventName(): string | undefined {
    return this.eventName;
  }

  /** Sets `eventName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setEventName(eventName: string | undefined): this {
    return this.setFieldValue('eventName', eventName);
  }

  hasEventName(): boolean {
    return this.hasFieldValue('eventName');
  }

  /** The element carrying the id and extensions of `eventName`. Created when absent. */
  getEventNameElement(): Element {
    if (this._eventName === undefined) {
      this._eventName = new Element();
    }
    return this._eventName;
  }

  setEventNameElement(eventNameElement: Element | undefined): this {
    this._eventName = eventNameElement;
    return this;
  }

  /** Timing of the event (0..1) Whichever type of `eventTiming[x]` is set. */
  getEventTiming(): Timing | Reference | string | undefined {
    return this.getChoiceValue<Timing | Reference | string>('eventTiming');
  }

  /** True when any type of `eventTiming[x]` is set. */
  hasEventTiming(): boolean {
    return this.hasChoiceValue('eventTiming');
  }

  getEventTimingTiming(): Timing | undefined {
    return this.eventTimingTiming;
  }

  /** Sets `eventTiming[x]` as Timing and clears every other type of it. */
  setEventTimingTiming(eventTimingTiming: Timing | undefined): this {
    return this.setFieldValue('eventTimingTiming', eventTimingTiming);
  }

  hasEventTimingTiming(): boolean {
    return this.hasFieldValue('eventTimingTiming');
  }

  getEventTimingReference(): Reference | undefined {
    return this.eventTimingReference;
  }

  /** Sets `eventTiming[x]` as Reference and clears every other type of it. */
  setEventTimingReference(eventTimingReference: Reference | undefined): this {
    return this.setFieldValue('eventTimingReference', eventTimingReference);
  }

  hasEventTimingReference(): boolean {
    return this.hasFieldValue('eventTimingReference');
  }

  getEventTimingDate(): string | undefined {
    return this.eventTimingDate;
  }

  /** Sets `eventTiming[x]` as date and clears every other type of it. */
  setEventTimingDate(eventTimingDate: string | undefined): this {
    return this.setFieldValue('eventTimingDate', eventTimingDate);
  }

  hasEventTimingDate(): boolean {
    return this.hasFieldValue('eventTimingDate');
  }

  getEventTimingDateTime(): string | undefined {
    return this.eventTimingDateTime;
  }

  /** Sets `eventTiming[x]` as dateTime and clears every other type of it. */
  setEventTimingDateTime(eventTimingDateTime: string | undefined): this {
    return this.setFieldValue('eventTimingDateTime', eventTimingDateTime);
  }

  hasEventTimingDateTime(): boolean {
    return this.hasFieldValue('eventTimingDateTime');
  }

  /** Triggering data of the event (0..1) Created when absent. */
  getEventData(): DataRequirement {
    if (this.eventData === undefined) {
      this.eventData = new DataRequirement();
    }
    return this.eventData;
  }

  setEventData(eventData: DataRequirement | undefined): this {
    return this.setFieldValue('eventData', eventData);
  }

  hasEventData(): boolean {
    return this.hasFieldValue('eventData');
  }
}

modelTypeRegistry.register('TriggerDefinition', TriggerDefinition, false);
