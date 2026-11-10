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
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export interface Immunization {
  resourceType: 'Immunization';
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
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Authority that the immunization event is based on (0..*) */
  basedOn?: Array<Reference>;
  /** completed | entered-in-error | not-done (1..1) */
  status?: Immunization.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..1) */
  statusReason?: CodeableConcept;
  /** Vaccine administered (1..1) */
  vaccineCode: CodeableConcept;
  /** Product that was administered (0..1) */
  administeredProduct?: CodeableReference;
  /** Vaccine manufacturer (0..1) */
  manufacturer?: CodeableReference;
  /** Vaccine lot number (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;
  /** Vaccine expiration date (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;
  /** Who was immunized (1..1) */
  patient: Reference;
  /** Encounter immunization was part of (0..1) */
  encounter?: Reference;
  /** Additional information in support of the immunization (0..*) */
  supportingInformation?: Array<Reference>;
  /** Vaccine administration date (1..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** Vaccine administration date (1..1) */
  occurrenceString?: string;
  /** Id and extensions of the primitive `occurrenceString`. */
  _occurrenceString?: Element;
  /** Indicates context the data was captured in (0..1) */
  primarySource?: boolean;
  /** Id and extensions of the primitive `primarySource`. */
  _primarySource?: Element;
  /** Indicates the source of a reported record (0..1) */
  informationSource?: CodeableReference;
  /** Where immunization occurred (0..1) */
  location?: Reference;
  /** Body site vaccine was administered (0..1) */
  site?: CodeableConcept;
  /** How vaccine entered body (0..1) */
  route?: CodeableConcept;
  /** Amount of vaccine administered (0..1) */
  doseQuantity?: Quantity;
  /** Who performed event (0..*) */
  performer?: Array<ImmunizationPerformer>;
  /** Additional immunization notes (0..*) */
  note?: Array<Annotation>;
  /** Why immunization occurred (0..*) */
  reason?: Array<CodeableReference>;
  /** Dose potency (0..1) */
  isSubpotent?: boolean;
  /** Id and extensions of the primitive `isSubpotent`. */
  _isSubpotent?: Element;
  /** Reason for being subpotent (0..*) */
  subpotentReason?: Array<CodeableConcept>;
  /** Patient eligibility for a specific vaccination program (0..*) */
  programEligibility?: Array<ImmunizationProgramEligibility>;
  /** Funding source for the vaccine (0..1) */
  fundingSource?: CodeableConcept;
  /** Details of a reaction that follows immunization (0..*) */
  reaction?: Array<ImmunizationReaction>;
  /** Protocol followed by the provider (0..*) */
  protocolApplied?: Array<ImmunizationProtocolApplied>;
}

export namespace Immunization {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/immunization-status */
  export type StatusEnum = 'completed' | 'entered-in-error' | 'not-done';
  export const StatusEnum = {
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    NotDone: 'not-done' as StatusEnum,
  };
}

/**
 * Who performed event
 */
export interface ImmunizationPerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What type of performance was done (0..1) */
  function?: CodeableConcept;
  /** Individual or organization who was performing (1..1) */
  actor: Reference;
}

/**
 * Patient eligibility for a specific vaccination program
 */
export interface ImmunizationProgramEligibility {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The program that eligibility is declared for (1..1) */
  program: CodeableConcept;
  /** The patient's eligibility status for the program (1..1) */
  programStatus: CodeableConcept;
}

/**
 * Details of a reaction that follows immunization
 */
export interface ImmunizationReaction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** When reaction started (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Additional information on reaction (0..1) */
  manifestation?: CodeableReference;
  /** Indicates self-reported reaction (0..1) */
  reported?: boolean;
  /** Id and extensions of the primitive `reported`. */
  _reported?: Element;
}

/**
 * Protocol followed by the provider
 */
export interface ImmunizationProtocolApplied {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of vaccine series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;
  /** Who is responsible for publishing the recommendations (0..1) */
  authority?: Reference;
  /** Vaccine preventatable disease being targeted (0..*) */
  targetDisease?: Array<CodeableConcept>;
  /** Dose number within series (1..1) */
  doseNumber?: string;
  /** Id and extensions of the primitive `doseNumber`. */
  _doseNumber?: Element;
  /** Recommended number of doses for immunity (0..1) */
  seriesDoses?: string;
  /** Id and extensions of the primitive `seriesDoses`. */
  _seriesDoses?: Element;
}
