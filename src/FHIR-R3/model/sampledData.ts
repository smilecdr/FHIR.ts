/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../classes/models-r3';
import { Element } from './element';
import { Quantity } from './quantity';

/**
 * Base StructureDefinition for SampledData Type
 */
export class SampledData extends Element {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'origin',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'origin', typeCode: 'Quantity' }],
    },
    {
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'decimal' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'lowerLimit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lowerLimit', typeCode: 'decimal' }],
    },
    {
      elementName: 'upperLimit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'upperLimit', typeCode: 'decimal' }],
    },
    {
      elementName: 'dimensions',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dimensions', typeCode: 'positiveInt' }],
    },
    {
      elementName: 'data',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'data', typeCode: 'string' }],
    },
  ];

  /** Zero value and units (1..1) */
  origin?: Quantity;

  /** Number of milliseconds between samples (1..1) */
  period?: number;
  /** Id and extensions of the primitive `period`. */
  _period?: Element;

  /** Multiply data by this before adding to origin (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Lower limit of detection (0..1) */
  lowerLimit?: number;
  /** Id and extensions of the primitive `lowerLimit`. */
  _lowerLimit?: Element;

  /** Upper limit of detection (0..1) */
  upperLimit?: number;
  /** Id and extensions of the primitive `upperLimit`. */
  _upperLimit?: Element;

  /** Number of sample points at each time point (1..1) */
  dimensions?: number;
  /** Id and extensions of the primitive `dimensions`. */
  _dimensions?: Element;

  /** Decimal values with spaces, or "E" | "U" | "L" (1..1) */
  data?: string;
  /** Id and extensions of the primitive `data`. */
  _data?: Element;

  override fhirType(): string {
    return 'SampledData';
  }

  /** FHIR JSON for this SampledData, typed as the plain `SampledData` data type. */
  override toJSON(): plainTypes.SampledData {
    return this.serialize() as plainTypes.SampledData;
  }

  /** Zero value and units (1..1) Created when absent. */
  getOrigin(): Quantity {
    if (this.origin === undefined) {
      this.origin = new Quantity();
    }
    return this.origin;
  }

  setOrigin(origin: Quantity | undefined): this {
    return this.setFieldValue('origin', origin);
  }

  hasOrigin(): boolean {
    return this.hasFieldValue('origin');
  }

  /** Number of milliseconds between samples (1..1) */
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

  /** Multiply data by this before adding to origin (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Lower limit of detection (0..1) */
  getLowerLimit(): number | undefined {
    return this.lowerLimit;
  }

  /** Sets `lowerLimit`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setLowerLimit(lowerLimit: number | undefined): this {
    return this.setFieldValue('lowerLimit', lowerLimit);
  }

  hasLowerLimit(): boolean {
    return this.hasFieldValue('lowerLimit');
  }

  /** The element carrying the id and extensions of `lowerLimit`. Created when absent. */
  getLowerLimitElement(): Element {
    if (this._lowerLimit === undefined) {
      this._lowerLimit = new Element();
    }
    return this._lowerLimit;
  }

  setLowerLimitElement(lowerLimitElement: Element | undefined): this {
    this._lowerLimit = lowerLimitElement;
    return this;
  }

  /** Upper limit of detection (0..1) */
  getUpperLimit(): number | undefined {
    return this.upperLimit;
  }

  /** Sets `upperLimit`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setUpperLimit(upperLimit: number | undefined): this {
    return this.setFieldValue('upperLimit', upperLimit);
  }

  hasUpperLimit(): boolean {
    return this.hasFieldValue('upperLimit');
  }

  /** The element carrying the id and extensions of `upperLimit`. Created when absent. */
  getUpperLimitElement(): Element {
    if (this._upperLimit === undefined) {
      this._upperLimit = new Element();
    }
    return this._upperLimit;
  }

  setUpperLimitElement(upperLimitElement: Element | undefined): this {
    this._upperLimit = upperLimitElement;
    return this;
  }

  /** Number of sample points at each time point (1..1) */
  getDimensions(): number | undefined {
    return this.dimensions;
  }

  /** Sets `dimensions`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setDimensions(dimensions: number | undefined): this {
    return this.setFieldValue('dimensions', dimensions);
  }

  hasDimensions(): boolean {
    return this.hasFieldValue('dimensions');
  }

  /** The element carrying the id and extensions of `dimensions`. Created when absent. */
  getDimensionsElement(): Element {
    if (this._dimensions === undefined) {
      this._dimensions = new Element();
    }
    return this._dimensions;
  }

  setDimensionsElement(dimensionsElement: Element | undefined): this {
    this._dimensions = dimensionsElement;
    return this;
  }

  /** Decimal values with spaces, or "E" | "U" | "L" (1..1) */
  getData(): string | undefined {
    return this.data;
  }

  /** Sets `data`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setData(data: string | undefined): this {
    return this.setFieldValue('data', data);
  }

  hasData(): boolean {
    return this.hasFieldValue('data');
  }

  /** The element carrying the id and extensions of `data`. Created when absent. */
  getDataElement(): Element {
    if (this._data === undefined) {
      this._data = new Element();
    }
    return this._data;
  }

  setDataElement(dataElement: Element | undefined): this {
    this._data = dataElement;
    return this;
  }
}

modelTypeRegistry.register('SampledData', SampledData, false);
