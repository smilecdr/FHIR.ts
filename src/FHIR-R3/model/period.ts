/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Element } from './element';

/**
 * Base StructureDefinition for Period Type
 */
export class Period extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'start',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'dateTime' }],
    },
    {
      elementName: 'end',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'end', typeCode: 'dateTime' }],
    },
  ];

  /** Starting time with inclusive boundary (0..1) */
  start?: string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** End time with inclusive boundary, if not ongoing (0..1) */
  end?: string;
  /** Id and extensions of the primitive `end`. */
  _end?: Element;

  override fhirType(): string {
    return 'Period';
  }

  /** FHIR JSON for this Period, typed as the plain `Period` data type. */
  override toJSON(): plainTypes.Period {
    return this.serialize() as plainTypes.Period;
  }

  /** Starting time with inclusive boundary (0..1) */
  getStart(): string | undefined {
    return this.start;
  }

  /** Sets `start`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setStart(start: string | undefined): this {
    return this.setFieldValue('start', start);
  }

  hasStart(): boolean {
    return this.hasFieldValue('start');
  }

  /** The element carrying the id and extensions of `start`. Created when absent. */
  getStartElement(): Element {
    if (this._start === undefined) {
      this._start = new Element();
    }
    return this._start;
  }

  setStartElement(startElement: Element | undefined): this {
    this._start = startElement;
    return this;
  }

  /** End time with inclusive boundary, if not ongoing (0..1) */
  getEnd(): string | undefined {
    return this.end;
  }

  /** Sets `end`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setEnd(end: string | undefined): this {
    return this.setFieldValue('end', end);
  }

  hasEnd(): boolean {
    return this.hasFieldValue('end');
  }

  /** The element carrying the id and extensions of `end`. Created when absent. */
  getEndElement(): Element {
    if (this._end === undefined) {
      this._end = new Element();
    }
    return this._end;
  }

  setEndElement(endElement: Element | undefined): this {
    this._end = endElement;
    return this;
  }
}

modelTypeRegistry.register('Period', Period, false);
