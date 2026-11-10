/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for DeviceComponent Resource
 */
export class DeviceComponent {
  resourceType: 'DeviceComponent';
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Instance id assigned by the software stack (1..1) */
  identifier: Identifier;
  /** What kind of component it is (1..1) */
  type: CodeableConcept;
  /** Recent system change timestamp (0..1) */
  lastSystemChange?: string;
  /** Id and extensions of the primitive `lastSystemChange`. */
  _lastSystemChange?: Element;
  /** Top-level device resource link (0..1) */
  source?: Reference;
  /** Parent resource link (0..1) */
  parent?: Reference;
  /** Current operational status of the component, for example On, Off or Standby (0..*) */
  operationalStatus?: Array<CodeableConcept>;
  /** Current supported parameter group (0..1) */
  parameterGroup?: CodeableConcept;
  /** other | chemical | electrical | impedance | nuclear | optical | thermal | biological | mechanical | acoustical | manual+ (0..1) */
  measurementPrinciple?: DeviceComponent.MeasurementPrincipleEnum;
  /** Id and extensions of the primitive `measurementPrinciple`. */
  _measurementPrinciple?: Element;
  /** Specification details such as Component Revisions, or Serial Numbers (0..*) */
  productionSpecification?: Array<DeviceComponentProductionSpecification>;
  /** Language code for the human-readable text strings produced by the device (0..1) */
  languageCode?: CodeableConcept;
}

export namespace DeviceComponent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/measurement-principle */
  export type MeasurementPrincipleEnum =
    | 'other'
    | 'chemical'
    | 'electrical'
    | 'impedance'
    | 'nuclear'
    | 'optical'
    | 'thermal'
    | 'biological'
    | 'mechanical'
    | 'acoustical'
    | 'manual';
  export const MeasurementPrincipleEnum = {
    Other: 'other' as MeasurementPrincipleEnum,
    Chemical: 'chemical' as MeasurementPrincipleEnum,
    Electrical: 'electrical' as MeasurementPrincipleEnum,
    Impedance: 'impedance' as MeasurementPrincipleEnum,
    Nuclear: 'nuclear' as MeasurementPrincipleEnum,
    Optical: 'optical' as MeasurementPrincipleEnum,
    Thermal: 'thermal' as MeasurementPrincipleEnum,
    Biological: 'biological' as MeasurementPrincipleEnum,
    Mechanical: 'mechanical' as MeasurementPrincipleEnum,
    Acoustical: 'acoustical' as MeasurementPrincipleEnum,
    Manual: 'manual' as MeasurementPrincipleEnum,
  };
}

/**
 * Specification details such as Component Revisions, or Serial Numbers
 */
export class DeviceComponentProductionSpecification {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type or kind of production specification, for example serial number or software revision (0..1) */
  specType?: CodeableConcept;
  /** Internal component unique identification (0..1) */
  componentId?: Identifier;
  /** A printable string defining the component (0..1) */
  productionSpec?: string;
  /** Id and extensions of the primitive `productionSpec`. */
  _productionSpec?: Element;
}
