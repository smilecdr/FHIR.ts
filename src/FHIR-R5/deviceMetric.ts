/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Describes a measurement, calculation or setting capability of a device. The DeviceMetric resource is derived from the ISO/IEEE 11073-10201 Domain Information Model standard, but is more widely applicable.
 */
export interface DeviceMetric {
  resourceType: 'DeviceMetric';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Text summary of the resource, for human interpretation (0..1) */
  text?: Narrative;
  /** Contained, inline Resources (0..*) */
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Instance identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Identity of metric, for example Heart Rate or PEEP Setting (1..1) */
  type: CodeableConcept;
  /** Unit of Measure for the Metric (0..1) */
  unit?: CodeableConcept;
  /** Describes the link to the Device (1..1) */
  device: Reference;
  /** on | off | standby | entered-in-error (0..1) */
  operationalStatus?: DeviceMetric.OperationalStatusEnum;
  /** Id and extensions of the primitive `operationalStatus`. */
  _operationalStatus?: Element;
  /** Color name (from CSS4) or #RRGGBB code (0..1) */
  color?: string;
  /** Id and extensions of the primitive `color`. */
  _color?: Element;
  /** measurement | setting | calculation | unspecified (1..1) */
  category?: DeviceMetric.CategoryEnum;
  /** Id and extensions of the primitive `category`. */
  _category?: Element;
  /** Indicates how often the metric is taken or recorded (0..1) */
  measurementFrequency?: Quantity;
  /** Describes the calibrations that have been performed or that are required to be performed (0..*) */
  calibration?: Array<DeviceMetricCalibration>;
}

export namespace DeviceMetric {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/metric-operational-status */
  export type OperationalStatusEnum = 'on' | 'off' | 'standby' | 'entered-in-error';
  export const OperationalStatusEnum = {
    On: 'on' as OperationalStatusEnum,
    Off: 'off' as OperationalStatusEnum,
    Standby: 'standby' as OperationalStatusEnum,
    EnteredInError: 'entered-in-error' as OperationalStatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/metric-category */
  export type CategoryEnum = 'measurement' | 'setting' | 'calculation' | 'unspecified';
  export const CategoryEnum = {
    Measurement: 'measurement' as CategoryEnum,
    Setting: 'setting' as CategoryEnum,
    Calculation: 'calculation' as CategoryEnum,
    Unspecified: 'unspecified' as CategoryEnum,
  };
}

/**
 * Describes the calibrations that have been performed or that are required to be performed
 */
export interface DeviceMetricCalibration {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** unspecified | offset | gain | two-point (0..1) */
  type?: DeviceMetricCalibration.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** not-calibrated | calibration-required | calibrated | unspecified (0..1) */
  state?: DeviceMetricCalibration.StateEnum;
  /** Id and extensions of the primitive `state`. */
  _state?: Element;
  /** Describes the time last calibration has been performed (0..1) */
  time?: string;
  /** Id and extensions of the primitive `time`. */
  _time?: Element;
}

export namespace DeviceMetricCalibration {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/metric-calibration-type */
  export type TypeEnum = 'unspecified' | 'offset' | 'gain' | 'two-point';
  export const TypeEnum = {
    Unspecified: 'unspecified' as TypeEnum,
    Offset: 'offset' as TypeEnum,
    Gain: 'gain' as TypeEnum,
    TwoPoint: 'two-point' as TypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/metric-calibration-state */
  export type StateEnum = 'not-calibrated' | 'calibration-required' | 'calibrated' | 'unspecified';
  export const StateEnum = {
    NotCalibrated: 'not-calibrated' as StateEnum,
    CalibrationRequired: 'calibration-required' as StateEnum,
    Calibrated: 'calibrated' as StateEnum,
    Unspecified: 'unspecified' as StateEnum,
  };
}
