/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { Timing } from './timing';

/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export class DeviceUseStatement {
  resourceType: 'DeviceUseStatement';
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
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** External identifier for this record (0..*) */
  identifier?: Array<Identifier>;
  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Array<Reference>;
  /** active | completed | entered-in-error + (1..1) */
  status?: DeviceUseStatement.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Patient using device (1..1) */
  subject: Reference;
  /** Supporting information (0..*) */
  derivedFrom?: Array<Reference>;
  /** How often the device was used (0..1) */
  timingTiming?: Timing;
  /** How often the device was used (0..1) */
  timingPeriod?: Period;
  /** How often the device was used (0..1) */
  timingDateTime?: Date | string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** When statement was recorded (0..1) */
  recordedOn?: Date | string;
  /** Id and extensions of the primitive `recordedOn`. */
  _recordedOn?: Element;
  /** Who made the statement (0..1) */
  source?: Reference;
  /** Reference to device used (1..1) */
  device: Reference;
  /** Why device was used (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Why was DeviceUseStatement performed? (0..*) */
  reasonReference?: Array<Reference>;
  /** Target body site (0..1) */
  bodySite?: CodeableConcept;
  /** Addition details (comments, instructions) (0..*) */
  note?: Array<Annotation>;
}

export namespace DeviceUseStatement {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/device-statement-status */
  export type StatusEnum =
    'active' | 'completed' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Intended: 'intended' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
  };
}
