/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Timing } from './timing';

/**
 * Dosage Type: Indicates how the medication is/was taken or should be taken by the patient.
 */
export interface Dosage {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The order of the dosage instructions (0..1) */
  sequence?: number;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Free text dosage instructions e.g. SIG (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" (0..*) */
  additionalInstruction?: Array<CodeableConcept>;
  /** Patient or consumer oriented instructions (0..1) */
  patientInstruction?: string;
  /** Id and extensions of the primitive `patientInstruction`. */
  _patientInstruction?: Element;
  /** When medication should be administered (0..1) */
  timing?: Timing;
  /** Take "as needed" (0..1) */
  asNeeded?: boolean;
  /** Id and extensions of the primitive `asNeeded`. */
  _asNeeded?: Element;
  /** Take "as needed" (for x) (0..*) */
  asNeededFor?: Array<CodeableConcept>;
  /** Body site to administer to (0..1) */
  site?: CodeableConcept;
  /** How drug should enter body (0..1) */
  route?: CodeableConcept;
  /** Technique for administering medication (0..1) */
  method?: CodeableConcept;
  /** Amount of medication administered, to be administered or typical amount to be administered (0..*) */
  doseAndRate?: Array<DosageDoseAndRate>;
  /** Upper limit on medication per unit of time (0..*) */
  maxDosePerPeriod?: Array<Ratio>;
  /** Upper limit on medication per administration (0..1) */
  maxDosePerAdministration?: Quantity;
  /** Upper limit on medication per lifetime of the patient (0..1) */
  maxDosePerLifetime?: Quantity;
}

/**
 * Amount of medication administered, to be administered or typical amount to be administered
 */
export interface DosageDoseAndRate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** The kind of dose or rate specified (0..1) */
  type?: CodeableConcept;
  /** Amount of medication per dose (0..1) */
  doseRange?: Range;
  /** Amount of medication per dose (0..1) */
  doseQuantity?: Quantity;
  /** Amount of medication per unit of time (0..1) */
  rateRatio?: Ratio;
  /** Amount of medication per unit of time (0..1) */
  rateRange?: Range;
  /** Amount of medication per unit of time (0..1) */
  rateQuantity?: Quantity;
}
