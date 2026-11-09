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
 * Base StructureDefinition for Immunization Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** completed | entered-in-error (1..1) */
  status?: Immunization.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Flag for whether immunization was given (1..1) */
  notGiven?: boolean;
  /** Id and extensions of the primitive `notGiven`. */
  _notGiven?: Element;
  /** Vaccine product administered (1..1) */
  vaccineCode: CodeableConcept;
  /** Who was immunized (1..1) */
  patient: Reference;
  /** Encounter administered as part of (0..1) */
  encounter?: Reference;
  /** Vaccination administration date (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Indicates context the data was recorded in (1..1) */
  primarySource?: boolean;
  /** Id and extensions of the primitive `primarySource`. */
  _primarySource?: Element;
  /** Indicates the source of a secondarily reported record (0..1) */
  reportOrigin?: CodeableConcept;
  /** Where vaccination occurred (0..1) */
  location?: Reference;
  /** Vaccine manufacturer (0..1) */
  manufacturer?: Reference;
  /** Vaccine lot number (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;
  /** Vaccine expiration date (0..1) */
  expirationDate?: string;
  /** Id and extensions of the primitive `expirationDate`. */
  _expirationDate?: Element;
  /** Body site vaccine was administered (0..1) */
  site?: CodeableConcept;
  /** How vaccine entered body (0..1) */
  route?: CodeableConcept;
  /** Amount of vaccine administered (0..1) */
  doseQuantity?: Quantity;
  /** Who performed event (0..*) */
  practitioner?: Array<ImmunizationPractitioner>;
  /** Vaccination notes (0..*) */
  note?: Array<Annotation>;
  /** Administration/non-administration reasons (0..1) */
  explanation?: ImmunizationExplanation;
  /** Details of a reaction that follows immunization (0..*) */
  reaction?: Array<ImmunizationReaction>;
  /** What protocol was followed (0..*) */
  vaccinationProtocol?: Array<ImmunizationVaccinationProtocol>;
}

export namespace Immunization {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/immunization-status */
  export type StatusEnum = 'completed' | 'entered-in-error';
  export const StatusEnum = {
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Who performed event
 */
export class ImmunizationPractitioner {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** What type of performance was done (0..1) */
  role?: CodeableConcept;
  /** Individual who was performing (1..1) */
  actor: Reference;
}

/**
 * Administration/non-administration reasons
 */
export class ImmunizationExplanation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Why immunization occurred (0..*) */
  reason?: Array<CodeableConcept>;
  /** Why immunization did not occur (0..*) */
  reasonNotGiven?: Array<CodeableConcept>;
}

/**
 * Details of a reaction that follows immunization
 */
export class ImmunizationReaction {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** When reaction started (0..1) */
  date?: string;
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
 * What protocol was followed
 */
export class ImmunizationVaccinationProtocol {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Dose number within series (0..1) */
  doseSequence?: number;
  /** Id and extensions of the primitive `doseSequence`. */
  _doseSequence?: Element;
  /** Details of vaccine protocol (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Who is responsible for protocol (0..1) */
  authority?: Reference;
  /** Name of vaccine series (0..1) */
  series?: string;
  /** Id and extensions of the primitive `series`. */
  _series?: Element;
  /** Recommended number of doses for immunity (0..1) */
  seriesDoses?: number;
  /** Id and extensions of the primitive `seriesDoses`. */
  _seriesDoses?: Element;
  /** Disease immunized against (1..*) */
  targetDisease: Array<CodeableConcept>;
  /** Indicates if dose counts towards immunity (1..1) */
  doseStatus: CodeableConcept;
  /** Why dose does (not) count (0..1) */
  doseStatusReason?: CodeableConcept;
}
