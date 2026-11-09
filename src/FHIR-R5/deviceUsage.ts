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
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';

/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.
 */
export interface DeviceUsage {
  resourceType: 'DeviceUsage';
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
  /** External identifier for this record (0..*) */
  identifier?: Array<Identifier>;
  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Array<Reference>;
  /** active | completed | not-done | entered-in-error + (1..1) */
  status?: DeviceUsage.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The category of the statement - classifying how the statement is made (0..*) */
  category?: Array<CodeableConcept>;
  /** Patient using device (1..1) */
  patient: Reference;
  /** Supporting information (0..*) */
  derivedFrom?: Array<Reference>;
  /** The encounter or episode of care that establishes the context for this device use statement (0..1) */
  context?: Reference;
  /** How often the device was used (0..1) */
  timingTiming?: Timing;
  /** How often the device was used (0..1) */
  timingPeriod?: Period;
  /** How often the device was used (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;
  /** When the statement was made (and recorded) (0..1) */
  dateAsserted?: string;
  /** Id and extensions of the primitive `dateAsserted`. */
  _dateAsserted?: Element;
  /** The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement (0..1) */
  usageStatus?: CodeableConcept;
  /** The reason for asserting the usage status - for example forgot, lost, stolen, broken (0..*) */
  usageReason?: Array<CodeableConcept>;
  /** How device is being used (0..1) */
  adherence?: DeviceUsageAdherence;
  /** Who made the statement (0..1) */
  informationSource?: Reference;
  /** Code or Reference to device used (1..1) */
  device: CodeableReference;
  /** Why device was used (0..*) */
  reason?: Array<CodeableReference>;
  /** Target body site (0..1) */
  bodySite?: CodeableReference;
  /** Addition details (comments, instructions) (0..*) */
  note?: Array<Annotation>;
}

export namespace DeviceUsage {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/deviceusage-status */
  export type StatusEnum =
    'active' | 'completed' | 'not-done' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    NotDone: 'not-done' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Intended: 'intended' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
  };
}

/**
 * How device is being used
 */
export interface DeviceUsageAdherence {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** always | never | sometimes (1..1) */
  code: CodeableConcept;
  /** lost | stolen | prescribed | broken | burned | forgot (1..*) */
  reason: Array<CodeableConcept>;
}
