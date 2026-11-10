/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Indicates that a device is to be or has been dispensed for a named person/patient. This includes a description of the product (supply) provided and the instructions for using the device.
 */
export interface DeviceDispense {
  resourceType: 'DeviceDispense';
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
  /** Business identifier for this dispensation (0..*) */
  identifier?: Array<Identifier>;
  /** The order or request that this dispense is fulfilling (0..*) */
  basedOn?: Array<Reference>;
  /** The bigger event that this dispense is a part of (0..*) */
  partOf?: Array<Reference>;
  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown (1..1) */
  status?: DeviceDispense.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Why a dispense was or was not performed (0..1) */
  statusReason?: CodeableReference;
  /** Type of device dispense (0..*) */
  category?: Array<CodeableConcept>;
  /** What device was supplied (1..1) */
  device: CodeableReference;
  /** Who the dispense is for (1..1) */
  subject: Reference;
  /** Who collected the device or where the medication was delivered (0..1) */
  receiver?: Reference;
  /** Encounter associated with event (0..1) */
  encounter?: Reference;
  /** Information that supports the dispensing of the device (0..*) */
  supportingInformation?: Array<Reference>;
  /** Who performed event (0..*) */
  performer?: Array<DeviceDispensePerformer>;
  /** Where the dispense occurred (0..1) */
  location?: Reference;
  /** Trial fill, partial fill, emergency fill, etc (0..1) */
  type?: CodeableConcept;
  /** Amount dispensed (0..1) */
  quantity?: Quantity;
  /** When product was packaged and reviewed (0..1) */
  preparedDate?: string;
  /** Id and extensions of the primitive `preparedDate`. */
  _preparedDate?: Element;
  /** When product was given out (0..1) */
  whenHandedOver?: string;
  /** Id and extensions of the primitive `whenHandedOver`. */
  _whenHandedOver?: Element;
  /** Where the device was sent or should be sent (0..1) */
  destination?: Reference;
  /** Information about the dispense (0..*) */
  note?: Array<Annotation>;
  /** Full representation of the usage instructions (0..1) */
  usageInstruction?: string;
  /** Id and extensions of the primitive `usageInstruction`. */
  _usageInstruction?: Element;
  /** A list of relevant lifecycle events (0..*) */
  eventHistory?: Array<Reference>;
}

export namespace DeviceDispense {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/devicedispense-status */
  export type StatusEnum =
    | 'preparation'
    | 'in-progress'
    | 'cancelled'
    | 'on-hold'
    | 'completed'
    | 'entered-in-error'
    | 'stopped'
    | 'declined'
    | 'unknown';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Declined: 'declined' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Who performed event
 */
export interface DeviceDispensePerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Who performed the dispense and what they did (0..1) */
  function?: CodeableConcept;
  /** Individual who was performing (1..1) */
  actor: Reference;
}
