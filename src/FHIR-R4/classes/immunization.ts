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
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export class Immunization {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** completed | entered-in-error | not-done (1..1) */
  status?: Immunization.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason not done (0..1) */
  statusReason?: CodeableConcept;
  /** Vaccine product administered (1..1) */
  vaccineCode: CodeableConcept;
  /** Who was immunized (1..1) */
  patient: Reference;
  /** Encounter immunization was part of (0..1) */
  encounter?: Reference;
  /** Vaccine administration date (1..1) */
  occurrenceDateTime?: Date | string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** Vaccine administration date (1..1) */
  occurrenceString?: string;
  /** Id and extensions of the primitive `occurrenceString`. */
  _occurrenceString?: Element;
  /** When the immunization was first captured in the subject's record (0..1) */
  recorded?: Date | string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;
  /** Indicates context the data was recorded in (0..1) */
  primarySource?: boolean;
  /** Id and extensions of the primitive `primarySource`. */
  _primarySource?: Element;
  /** Indicates the source of a secondarily reported record (0..1) */
  reportOrigin?: CodeableConcept;
  /** Where immunization occurred (0..1) */
  location?: Reference;
  /** Vaccine manufacturer (0..1) */
  manufacturer?: Reference;
  /** Vaccine lot number (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;
  /** Vaccine expiration date (0..1) */
  expirationDate?: Date | string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;
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
  reasonCode?: Array<CodeableConcept>;
  /** Why immunization occurred (0..*) */
  reasonReference?: Array<Reference>;
  /** Dose potency (0..1) */
  isSubpotent?: boolean;
  /** Id and extensions of the primitive `isSubpotent`. */
  _isSubpotent?: Element;
  /** Reason for being subpotent (0..*) */
  subpotentReason?: Array<CodeableConcept>;
  /** Educational material presented to patient (0..*) */
  education?: Array<ImmunizationEducation>;
  /** Patient eligibility for a vaccination program (0..*) */
  programEligibility?: Array<CodeableConcept>;
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
export class ImmunizationPerformer {
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
 * Educational material presented to patient
 */
export class ImmunizationEducation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Educational material document identifier (0..1) */
  documentType?: string;
  /** Id and extensions of the primitive `documentType`. */
  _documentType?: Element;
  /** Educational material reference pointer (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;
  /** Educational material publication date (0..1) */
  publicationDate?: Date | string;
  /** Id and extensions of the primitive `publicationDate`. */
  _publicationDate?: Element;
  /** Educational material presentation date (0..1) */
  presentationDate?: Date | string;
  /** Id and extensions of the primitive `presentationDate`. */
  _presentationDate?: Element;
}

/**
 * Details of a reaction that follows immunization
 */
export class ImmunizationReaction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** When reaction started (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Additional information on reaction (0..1) */
  detail?: Reference;
  /** Indicates self-reported reaction (0..1) */
  reported?: boolean;
  /** Id and extensions of the primitive `reported`. */
  _reported?: Element;
}

/**
 * Protocol followed by the provider
 */
export class ImmunizationProtocolApplied {
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
  /** Vaccine preventatable disease being targetted (0..*) */
  targetDisease?: Array<CodeableConcept>;
  /** Dose number within series (1..1) */
  doseNumberPositiveInt?: number;
  /** Id and extensions of the primitive `doseNumberPositiveInt`. */
  _doseNumberPositiveInt?: Element;
  /** Dose number within series (1..1) */
  doseNumberString?: string;
  /** Id and extensions of the primitive `doseNumberString`. */
  _doseNumberString?: Element;
  /** Recommended number of doses for immunity (0..1) */
  seriesDosesPositiveInt?: number;
  /** Id and extensions of the primitive `seriesDosesPositiveInt`. */
  _seriesDosesPositiveInt?: Element;
  /** Recommended number of doses for immunity (0..1) */
  seriesDosesString?: string;
  /** Id and extensions of the primitive `seriesDosesString`. */
  _seriesDosesString?: Element;
}
