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
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for MedicationAdministration Resource
 */
export class MedicationAdministration {
  resourceType: 'MedicationAdministration';
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
  /** External identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates protocol or definition (0..*) */
  definition?: Array<Reference>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** in-progress | on-hold | completed | entered-in-error | stopped | unknown (1..1) */
  status?: MedicationAdministration.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Type of medication usage (0..1) */
  category?: CodeableConcept;
  /** What was administered (1..1) */
  medicationCodeableConcept?: CodeableConcept;
  /** What was administered (1..1) */
  medicationReference?: Reference;
  /** Who received medication (1..1) */
  subject: Reference;
  /** Encounter or Episode of Care administered as part of (0..1) */
  context?: Reference;
  /** Additional information to support administration (0..*) */
  supportingInformation?: Array<Reference>;
  /** Start and end time of administration (1..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Start and end time of administration (1..1) */
  effectivePeriod?: Period;
  /** Who administered substance (0..*) */
  performer?: Array<MedicationAdministrationPerformer>;
  /** True if medication not administered (0..1) */
  notGiven?: boolean;
  /** Id and extensions of the primitive `notGiven`. */
  _notGiven?: Element;
  /** Reason administration not performed (0..*) */
  reasonNotGiven?: Array<CodeableConcept>;
  /** Reason administration performed (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Condition or Observation that supports why the medication was administered (0..*) */
  reasonReference?: Array<Reference>;
  /** Request administration performed against (0..1) */
  prescription?: Reference;
  /** Device used to administer (0..*) */
  device?: Array<Reference>;
  /** Information about the administration (0..*) */
  note?: Array<Annotation>;
  /** Details of how medication was taken (0..1) */
  dosage?: MedicationAdministrationDosage;
  /** A list of events of interest in the lifecycle (0..*) */
  eventHistory?: Array<Reference>;
}

export namespace MedicationAdministration {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/medication-admin-status */
  export type StatusEnum =
    'in-progress' | 'on-hold' | 'completed' | 'entered-in-error' | 'stopped' | 'unknown';
  export const StatusEnum = {
    InProgress: 'in-progress' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Who administered substance
 */
export class MedicationAdministrationPerformer {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Individual who was performing (1..1) */
  actor: Reference;
  /** Organization organization was acting for (0..1) */
  onBehalfOf?: Reference;
}

/**
 * Details of how medication was taken
 */
export class MedicationAdministrationDosage {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Free text dosage instructions e.g. SIG (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Body site administered to (0..1) */
  site?: CodeableConcept;
  /** Path of substance into body (0..1) */
  route?: CodeableConcept;
  /** How drug was administered (0..1) */
  method?: CodeableConcept;
  /** Amount of medication per dose (0..1) */
  dose?: Quantity;
  /** Dose quantity per unit of time (0..1) */
  rateRatio?: Ratio;
  /** Dose quantity per unit of time (0..1) */
  rateQuantity?: Quantity;
}
