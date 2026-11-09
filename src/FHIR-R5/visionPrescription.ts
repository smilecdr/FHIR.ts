/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
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
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export interface VisionPrescription {
  resourceType: 'VisionPrescription';
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
  /** Business Identifier for vision prescription (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (1..1) */
  status?: VisionPrescription.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Response creation date (1..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Who prescription is for (1..1) */
  patient: Reference;
  /** Created during encounter / admission / stay (0..1) */
  encounter?: Reference;
  /** When prescription was authorized (1..1) */
  dateWritten?: string;
  /** Id and extensions of the primitive `dateWritten`. */
  _dateWritten?: Element;
  /** Who authorized the vision prescription (1..1) */
  prescriber: Reference;
  /** Vision lens authorization (1..*) */
  lensSpecification: Array<VisionPrescriptionLensSpecification>;
}

export namespace VisionPrescription {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Vision lens authorization
 */
export interface VisionPrescriptionLensSpecification {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Product to be supplied (1..1) */
  product: CodeableConcept;
  /** right | left (1..1) */
  eye?: VisionPrescriptionLensSpecification.EyeEnum;
  /** Id and extensions of the primitive `eye`. */
  _eye?: Element;
  /** Power of the lens (0..1) */
  sphere?: number;
  /** Id and extensions of the primitive `sphere`. */
  _sphere?: Element;
  /** Lens power for astigmatism (0..1) */
  cylinder?: number;
  /** Id and extensions of the primitive `cylinder`. */
  _cylinder?: Element;
  /** Lens meridian which contain no power for astigmatism (0..1) */
  axis?: number;
  /** Id and extensions of the primitive `axis`. */
  _axis?: Element;
  /** Eye alignment compensation (0..*) */
  prism?: Array<VisionPrescriptionPrism>;
  /** Added power for multifocal levels (0..1) */
  add?: number;
  /** Id and extensions of the primitive `add`. */
  _add?: Element;
  /** Contact lens power (0..1) */
  power?: number;
  /** Id and extensions of the primitive `power`. */
  _power?: Element;
  /** Contact lens back curvature (0..1) */
  backCurve?: number;
  /** Id and extensions of the primitive `backCurve`. */
  _backCurve?: Element;
  /** Contact lens diameter (0..1) */
  diameter?: number;
  /** Id and extensions of the primitive `diameter`. */
  _diameter?: Element;
  /** Lens wear duration (0..1) */
  duration?: Quantity;
  /** Color required (0..1) */
  color?: string;
  /** Id and extensions of the primitive `color`. */
  _color?: Element;
  /** Brand required (0..1) */
  brand?: string;
  /** Id and extensions of the primitive `brand`. */
  _brand?: Element;
  /** Notes for coatings (0..*) */
  note?: Array<Annotation>;
}

export namespace VisionPrescriptionLensSpecification {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/vision-eye-codes */
  export type EyeEnum = 'right' | 'left';
  export const EyeEnum = { Right: 'right' as EyeEnum, Left: 'left' as EyeEnum };
}

/**
 * Eye alignment compensation
 */
export interface VisionPrescriptionPrism {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Amount of adjustment (1..1) */
  amount?: number;
  /** Id and extensions of the primitive `amount`. */
  _amount?: Element;
  /** up | down | in | out (1..1) */
  base?: VisionPrescriptionPrism.BaseEnum;
  /** Id and extensions of the primitive `base`. */
  _base?: Element;
}

export namespace VisionPrescriptionPrism {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/vision-base-codes */
  export type BaseEnum = 'up' | 'down' | 'in' | 'out';
  export const BaseEnum = {
    Up: 'up' as BaseEnum,
    Down: 'down' as BaseEnum,
    In: 'in' as BaseEnum,
    Out: 'out' as BaseEnum,
  };
}
