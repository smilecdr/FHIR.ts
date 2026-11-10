/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { DataType } from './dataType';
import { Element } from './element';
import { Quantity } from './quantity';

/**
 * SampledData Type: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export class SampledData extends DataType {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'origin',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'origin', typeCode: 'Quantity' }],
    },
    {
      elementName: 'interval',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'interval', typeCode: 'decimal' }],
    },
    {
      elementName: 'intervalUnit',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intervalUnit', typeCode: 'code' }],
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
      elementName: 'codeMap',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'codeMap', typeCode: 'canonical' }],
    },
    {
      elementName: 'offsets',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'offsets', typeCode: 'string' }],
    },
    {
      elementName: 'data',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'data', typeCode: 'string' }],
    },
  ];

  /** Zero value and units (1..1) */
  origin?: Quantity;

  /** Number of intervalUnits between samples (0..1) */
  interval?: number;
  /** Id and extensions of the primitive `interval`. */
  _interval?: Element;

  /** The measurement unit of the interval between samples (1..1) */
  intervalUnit?: string;
  /** Id and extensions of the primitive `intervalUnit`. */
  _intervalUnit?: Element;

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

  /** Defines the codes used in the data (0..1) */
  codeMap?: string;
  /** Id and extensions of the primitive `codeMap`. */
  _codeMap?: Element;

  /** Offsets, typically in time, at which data values were taken (0..1) */
  offsets?: string;
  /** Id and extensions of the primitive `offsets`. */
  _offsets?: Element;

  /** Decimal values with spaces, or "E" | "U" | "L", or another code (0..1) */
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

  /** Number of intervalUnits between samples (0..1) */
  getInterval(): number | undefined {
    return this.interval;
  }

  /** Sets `interval`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setInterval(interval: number | undefined): this {
    return this.setFieldValue('interval', interval);
  }

  hasInterval(): boolean {
    return this.hasFieldValue('interval');
  }

  /** The element carrying the id and extensions of `interval`. Created when absent. */
  getIntervalElement(): Element {
    if (this._interval === undefined) {
      this._interval = new Element();
    }
    return this._interval;
  }

  setIntervalElement(intervalElement: Element | undefined): this {
    this._interval = intervalElement;
    return this;
  }

  /** The measurement unit of the interval between samples (1..1) */
  getIntervalUnit(): string | undefined {
    return this.intervalUnit;
  }

  /** Sets `intervalUnit`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setIntervalUnit(intervalUnit: string | undefined): this {
    return this.setFieldValue('intervalUnit', intervalUnit);
  }

  hasIntervalUnit(): boolean {
    return this.hasFieldValue('intervalUnit');
  }

  /** The element carrying the id and extensions of `intervalUnit`. Created when absent. */
  getIntervalUnitElement(): Element {
    if (this._intervalUnit === undefined) {
      this._intervalUnit = new Element();
    }
    return this._intervalUnit;
  }

  setIntervalUnitElement(intervalUnitElement: Element | undefined): this {
    this._intervalUnit = intervalUnitElement;
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

  /** Defines the codes used in the data (0..1) */
  getCodeMap(): string | undefined {
    return this.codeMap;
  }

  /** Sets `codeMap`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setCodeMap(codeMap: string | undefined): this {
    return this.setFieldValue('codeMap', codeMap);
  }

  hasCodeMap(): boolean {
    return this.hasFieldValue('codeMap');
  }

  /** The element carrying the id and extensions of `codeMap`. Created when absent. */
  getCodeMapElement(): Element {
    if (this._codeMap === undefined) {
      this._codeMap = new Element();
    }
    return this._codeMap;
  }

  setCodeMapElement(codeMapElement: Element | undefined): this {
    this._codeMap = codeMapElement;
    return this;
  }

  /** Offsets, typically in time, at which data values were taken (0..1) */
  getOffsets(): string | undefined {
    return this.offsets;
  }

  /** Sets `offsets`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setOffsets(offsets: string | undefined): this {
    return this.setFieldValue('offsets', offsets);
  }

  hasOffsets(): boolean {
    return this.hasFieldValue('offsets');
  }

  /** The element carrying the id and extensions of `offsets`. Created when absent. */
  getOffsetsElement(): Element {
    if (this._offsets === undefined) {
      this._offsets = new Element();
    }
    return this._offsets;
  }

  setOffsetsElement(offsetsElement: Element | undefined): this {
    this._offsets = offsetsElement;
    return this;
  }

  /** Decimal values with spaces, or "E" | "U" | "L", or another code (0..1) */
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
