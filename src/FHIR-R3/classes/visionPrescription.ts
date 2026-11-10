/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for VisionPrescription Resource
 */
export class VisionPrescription {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: VisionPrescription.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Who prescription is for (0..1) */
  patient?: Reference;
  /** Created during encounter / admission / stay (0..1) */
  encounter?: Reference;
  /** When prescription was authorized (0..1) */
  dateWritten?: string;
  /** Id and extensions of the primitive `dateWritten`. */
  _dateWritten?: Element;
  /** Who authorizes the vision product (0..1) */
  prescriber?: Reference;
  /** Reason or indication for writing the prescription (0..1) */
  reasonCodeableConcept?: CodeableConcept;
  /** Reason or indication for writing the prescription (0..1) */
  reasonReference?: Reference;
  /** Vision supply authorization (0..*) */
  dispense?: Array<VisionPrescriptionDispense>;
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
 * Vision supply authorization
 */
export class VisionPrescriptionDispense {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Product to be supplied (0..1) */
  product?: CodeableConcept;
  /** right | left (0..1) */
  eye?: VisionPrescriptionDispense.EyeEnum;
  /** Id and extensions of the primitive `eye`. */
  _eye?: Element;
  /** Lens sphere (0..1) */
  sphere?: number;
  /** Id and extensions of the primitive `sphere`. */
  _sphere?: Element;
  /** Lens cylinder (0..1) */
  cylinder?: number;
  /** Id and extensions of the primitive `cylinder`. */
  _cylinder?: Element;
  /** Lens axis (0..1) */
  axis?: number;
  /** Id and extensions of the primitive `axis`. */
  _axis?: Element;
  /** Lens prism (0..1) */
  prism?: number;
  /** Id and extensions of the primitive `prism`. */
  _prism?: Element;
  /** up | down | in | out (0..1) */
  base?: VisionPrescriptionDispense.BaseEnum;
  /** Id and extensions of the primitive `base`. */
  _base?: Element;
  /** Lens add (0..1) */
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

export namespace VisionPrescriptionDispense {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/vision-eye-codes */
  export type EyeEnum = 'right' | 'left';
  export const EyeEnum = { Right: 'right' as EyeEnum, Left: 'left' as EyeEnum };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/vision-base-codes */
  export type BaseEnum = 'up' | 'down' | 'in' | 'out';
  export const BaseEnum = {
    Up: 'up' as BaseEnum,
    Down: 'down' as BaseEnum,
    In: 'in' as BaseEnum,
    Out: 'out' as BaseEnum,
  };
}
