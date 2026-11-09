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
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export class DeviceMetric extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'unit',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unit', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'parent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'parent', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
    },
    {
      elementName: 'operationalStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'operationalStatus',
          typeCode: 'code',
          allowedCodes: valueSetCodes.DeviceMetricOperationalStatus,
        },
      ],
    },
    {
      elementName: 'color',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'color', typeCode: 'code', allowedCodes: valueSetCodes.DeviceMetricColor },
      ],
    },
    {
      elementName: 'category',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'category', typeCode: 'code', allowedCodes: valueSetCodes.DeviceMetricCategory },
      ],
    },
    {
      elementName: 'measurementPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'measurementPeriod', typeCode: 'Timing' }],
    },
    {
      elementName: 'calibration',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'calibration', typeCode: 'DeviceMetricCalibration' }],
    },
  ];

  readonly resourceType = 'DeviceMetric';

  /** Instance identifier (0..*) */
  identifier?: Identifier[];

  /** Identity of metric, for example Heart Rate or PEEP Setting (1..1) */
  type?: CodeableConcept;

  /** Unit of Measure for the Metric (0..1) */
  unit?: CodeableConcept;

  /** Describes the link to the source Device (0..1) */
  source?: Reference;

  /** Describes the link to the parent Device (0..1) */
  parent?: Reference;

  /** on | off | standby | entered-in-error (0..1) */
  operationalStatus?: valueSetCodes.DeviceMetricOperationalStatus;
  /** Id and extensions of the primitive `operationalStatus`. */
  _operationalStatus?: Element;

  /** black | red | green | yellow | blue | magenta | cyan | white (0..1) */
  color?: valueSetCodes.DeviceMetricColor;
  /** Id and extensions of the primitive `color`. */
  _color?: Element;

  /** measurement | setting | calculation | unspecified (1..1) */
  category?: valueSetCodes.DeviceMetricCategory;
  /** Id and extensions of the primitive `category`. */
  _category?: Element;

  /** Describes the measurement repetition time (0..1) */
  measurementPeriod?: Timing;

  /** Describes the calibrations that have been performed or that are required to be performed (0..*) */
  calibration?: DeviceMetricCalibration[];

  override fhirType(): string {
    return 'DeviceMetric';
  }

  /** FHIR JSON for this DeviceMetric, typed as the plain `DeviceMetric` data type. */
  override toJSON(): plainTypes.DeviceMetric {
    return this.serialize() as plainTypes.DeviceMetric;
  }

  /** Instance identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Identity of metric, for example Heart Rate or PEEP Setting (1..1) Created when absent. */
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

  /** Unit of Measure for the Metric (0..1) Created when absent. */
  getUnit(): CodeableConcept {
    if (this.unit === undefined) {
      this.unit = new CodeableConcept();
    }
    return this.unit;
  }

  setUnit(unit: CodeableConcept | undefined): this {
    return this.setFieldValue('unit', unit);
  }

  hasUnit(): boolean {
    return this.hasFieldValue('unit');
  }

  /** Describes the link to the source Device (0..1) Created when absent. */
  getSource(): Reference {
    if (this.source === undefined) {
      this.source = new Reference();
    }
    return this.source;
  }

  setSource(source: Reference | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Describes the link to the parent Device (0..1) Created when absent. */
  getParent(): Reference {
    if (this.parent === undefined) {
      this.parent = new Reference();
    }
    return this.parent;
  }

  setParent(parent: Reference | undefined): this {
    return this.setFieldValue('parent', parent);
  }

  hasParent(): boolean {
    return this.hasFieldValue('parent');
  }

  /** on | off | standby | entered-in-error (0..1) */
  getOperationalStatus(): valueSetCodes.DeviceMetricOperationalStatus | undefined {
    return this.operationalStatus;
  }

  /** Sets `operationalStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setOperationalStatus(
    operationalStatus: valueSetCodes.DeviceMetricOperationalStatus | undefined
  ): this {
    return this.setFieldValue('operationalStatus', operationalStatus);
  }

  hasOperationalStatus(): boolean {
    return this.hasFieldValue('operationalStatus');
  }

  /** The element carrying the id and extensions of `operationalStatus`. Created when absent. */
  getOperationalStatusElement(): Element {
    if (this._operationalStatus === undefined) {
      this._operationalStatus = new Element();
    }
    return this._operationalStatus;
  }

  setOperationalStatusElement(operationalStatusElement: Element | undefined): this {
    this._operationalStatus = operationalStatusElement;
    return this;
  }

  /** black | red | green | yellow | blue | magenta | cyan | white (0..1) */
  getColor(): valueSetCodes.DeviceMetricColor | undefined {
    return this.color;
  }

  /** Sets `color`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setColor(color: valueSetCodes.DeviceMetricColor | undefined): this {
    return this.setFieldValue('color', color);
  }

  hasColor(): boolean {
    return this.hasFieldValue('color');
  }

  /** The element carrying the id and extensions of `color`. Created when absent. */
  getColorElement(): Element {
    if (this._color === undefined) {
      this._color = new Element();
    }
    return this._color;
  }

  setColorElement(colorElement: Element | undefined): this {
    this._color = colorElement;
    return this;
  }

  /** measurement | setting | calculation | unspecified (1..1) */
  getCategory(): valueSetCodes.DeviceMetricCategory | undefined {
    return this.category;
  }

  /** Sets `category`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCategory(category: valueSetCodes.DeviceMetricCategory | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** The element carrying the id and extensions of `category`. Created when absent. */
  getCategoryElement(): Element {
    if (this._category === undefined) {
      this._category = new Element();
    }
    return this._category;
  }

  setCategoryElement(categoryElement: Element | undefined): this {
    this._category = categoryElement;
    return this;
  }

  /** Describes the measurement repetition time (0..1) Created when absent. */
  getMeasurementPeriod(): Timing {
    if (this.measurementPeriod === undefined) {
      this.measurementPeriod = new Timing();
    }
    return this.measurementPeriod;
  }

  setMeasurementPeriod(measurementPeriod: Timing | undefined): this {
    return this.setFieldValue('measurementPeriod', measurementPeriod);
  }

  hasMeasurementPeriod(): boolean {
    return this.hasFieldValue('measurementPeriod');
  }

  /** Describes the calibrations that have been performed or that are required to be performed (0..*) Never undefined; an empty list is created when absent. */
  getCalibration(): DeviceMetricCalibration[] {
    if (this.calibration === undefined) {
      this.calibration = [];
    }
    return this.calibration;
  }

  setCalibration(calibration: DeviceMetricCalibration[] | undefined): this {
    return this.setFieldValue('calibration', calibration);
  }

  hasCalibration(): boolean {
    return this.hasFieldValue('calibration');
  }

  /** Appends a new, empty DeviceMetricCalibration to `calibration` and returns it so it can be filled in. */
  addCalibration(): DeviceMetricCalibration;
  /** Appends the given DeviceMetricCalibration to `calibration` and returns this object for chaining. */
  addCalibration(deviceMetricCalibration: DeviceMetricCalibration): this;
  addCalibration(
    deviceMetricCalibration?: DeviceMetricCalibration
  ): DeviceMetricCalibration | this {
    if (deviceMetricCalibration !== undefined) {
      return this.addFieldValue('calibration', deviceMetricCalibration);
    }
    const createdDeviceMetricCalibration = new DeviceMetricCalibration();
    this.addFieldValue('calibration', createdDeviceMetricCalibration);
    return createdDeviceMetricCalibration;
  }

  /** The first DeviceMetricCalibration of `calibration`. One is added when the list is empty. */
  getCalibrationFirstRep(): DeviceMetricCalibration {
    const firstDeviceMetricCalibration = this.getCalibration()[0];
    return firstDeviceMetricCalibration === undefined
      ? this.addCalibration()
      : firstDeviceMetricCalibration;
  }
}

modelTypeRegistry.register('DeviceMetric', DeviceMetric, true);

/** True when the value is a DeviceMetric model instance. */
export function isDeviceMetric(candidate: unknown): candidate is DeviceMetric {
  return candidate instanceof DeviceMetric;
}

/**
 * Describes the calibrations that have been performed or that are required to be performed
 */
export class DeviceMetricCalibration extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.DeviceMetricCalibrationType,
        },
      ],
    },
    {
      elementName: 'state',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'state',
          typeCode: 'code',
          allowedCodes: valueSetCodes.DeviceMetricCalibrationState,
        },
      ],
    },
    {
      elementName: 'time',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'time', typeCode: 'instant' }],
    },
  ];

  /** unspecified | offset | gain | two-point (0..1) */
  type?: valueSetCodes.DeviceMetricCalibrationType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** not-calibrated | calibration-required | calibrated | unspecified (0..1) */
  state?: valueSetCodes.DeviceMetricCalibrationState;
  /** Id and extensions of the primitive `state`. */
  _state?: Element;

  /** Describes the time last calibration has been performed (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;

  override fhirType(): string {
    return 'DeviceMetric.calibration';
  }

  /** FHIR JSON for this DeviceMetricCalibration, typed as the plain `DeviceMetricCalibration` data type. */
  override toJSON(): plainTypes.DeviceMetricCalibration {
    return this.serialize() as plainTypes.DeviceMetricCalibration;
  }

  /** unspecified | offset | gain | two-point (0..1) */
  getType(): valueSetCodes.DeviceMetricCalibrationType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.DeviceMetricCalibrationType | undefined): this {
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

  /** not-calibrated | calibration-required | calibrated | unspecified (0..1) */
  getState(): valueSetCodes.DeviceMetricCalibrationState | undefined {
    return this.state;
  }

  /** Sets `state`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setState(state: valueSetCodes.DeviceMetricCalibrationState | undefined): this {
    return this.setFieldValue('state', state);
  }

  hasState(): boolean {
    return this.hasFieldValue('state');
  }

  /** The element carrying the id and extensions of `state`. Created when absent. */
  getStateElement(): Element {
    if (this._state === undefined) {
      this._state = new Element();
    }
    return this._state;
  }

  setStateElement(stateElement: Element | undefined): this {
    this._state = stateElement;
    return this;
  }

  /** Describes the time last calibration has been performed (0..1) */
  getTime(): string | undefined {
    return this.time;
  }

  /** Sets `time`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setTime(time: string | undefined): this {
    return this.setFieldValue('time', time);
  }

  hasTime(): boolean {
    return this.hasFieldValue('time');
  }

  /** The element carrying the id and extensions of `time`. Created when absent. */
  getTimeElement(): Element {
    if (this._time === undefined) {
      this._time = new Element();
    }
    return this._time;
  }

  setTimeElement(timeElement: Element | undefined): this {
    this._time = timeElement;
    return this;
  }
}

modelTypeRegistry.register('DeviceMetricCalibration', DeviceMetricCalibration, false);
