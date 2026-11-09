/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Age } from './age';
import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Range } from './range';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 */
export class Procedure {
  resourceType: 'Procedure';
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
  /** External Identifiers for this procedure (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: Array<string>;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Array<Element | null>;
  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: Array<string>;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Array<Element | null>;
  /** A request for this procedure (0..*) */
  basedOn?: Array<Reference>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  status?: Procedure.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;
  /** Classification of the procedure (0..1) */
  category?: CodeableConcept;
  /** Identification of the procedure (0..1) */
  code?: CodeableConcept;
  /** Who the procedure was performed on (1..1) */
  subject: Reference;
  /** Encounter created as part of (0..1) */
  encounter?: Reference;
  /** When the procedure was performed (0..1) */
  performedDateTime?: Date | string;
  /** Id and extensions of the primitive `performedDateTime`. */
  _performedDateTime?: Element;
  /** When the procedure was performed (0..1) */
  performedPeriod?: Period;
  /** When the procedure was performed (0..1) */
  performedString?: string;
  /** Id and extensions of the primitive `performedString`. */
  _performedString?: Element;
  /** When the procedure was performed (0..1) */
  performedAge?: Age;
  /** When the procedure was performed (0..1) */
  performedRange?: Range;
  /** Who recorded the procedure (0..1) */
  recorder?: Reference;
  /** Person who asserts this procedure (0..1) */
  asserter?: Reference;
  /** The people who performed the procedure (0..*) */
  performer?: Array<ProcedurePerformer>;
  /** Where the procedure happened (0..1) */
  location?: Reference;
  /** Coded reason procedure performed (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** The justification that the procedure was performed (0..*) */
  reasonReference?: Array<Reference>;
  /** Target body sites (0..*) */
  bodySite?: Array<CodeableConcept>;
  /** The result of procedure (0..1) */
  outcome?: CodeableConcept;
  /** Any report resulting from the procedure (0..*) */
  report?: Array<Reference>;
  /** Complication following the procedure (0..*) */
  complication?: Array<CodeableConcept>;
  /** A condition that is a result of the procedure (0..*) */
  complicationDetail?: Array<Reference>;
  /** Instructions for follow up (0..*) */
  followUp?: Array<CodeableConcept>;
  /** Additional information about the procedure (0..*) */
  note?: Array<Annotation>;
  /** Manipulated, implanted, or removed device (0..*) */
  focalDevice?: Array<ProcedureFocalDevice>;
  /** Items used during procedure (0..*) */
  usedReference?: Array<Reference>;
  /** Coded items used during the procedure (0..*) */
  usedCode?: Array<CodeableConcept>;
}

export namespace Procedure {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-status */
  export type StatusEnum =
    | 'preparation'
    | 'in-progress'
    | 'not-done'
    | 'on-hold'
    | 'stopped'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    NotDone: 'not-done' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * The people who performed the procedure
 */
export class ProcedurePerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of performance (0..1) */
  function?: CodeableConcept;
  /** The reference to the practitioner (1..1) */
  actor: Reference;
  /** Organization the device or practitioner was acting for (0..1) */
  onBehalfOf?: Reference;
}

/**
 * Manipulated, implanted, or removed device
 */
export class ProcedureFocalDevice {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Kind of change to device (0..1) */
  action?: CodeableConcept;
  /** Device that was changed (1..1) */
  manipulated: Reference;
}
