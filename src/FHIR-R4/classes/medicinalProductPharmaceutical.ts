/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export class MedicinalProductPharmaceutical {
  resourceType: 'MedicinalProductPharmaceutical';
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
  /** An identifier for the pharmaceutical medicinal product (0..*) */
  identifier?: Array<Identifier>;
  /** The administrable dose form, after necessary reconstitution (1..1) */
  administrableDoseForm: CodeableConcept;
  /** Todo (0..1) */
  unitOfPresentation?: CodeableConcept;
  /** Ingredient (0..*) */
  ingredient?: Array<Reference>;
  /** Accompanying device (0..*) */
  device?: Array<Reference>;
  /** Characteristics e.g. a products onset of action (0..*) */
  characteristics?: Array<MedicinalProductPharmaceuticalCharacteristics>;
  /** The path by which the pharmaceutical product is taken into or makes contact with the body (1..*) */
  routeOfAdministration: Array<MedicinalProductPharmaceuticalRouteOfAdministration>;
}

/**
 * Characteristics e.g. a products onset of action
 */
export class MedicinalProductPharmaceuticalCharacteristics {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A coded characteristic (1..1) */
  code: CodeableConcept;
  /** The status of characteristic e.g. assigned or pending (0..1) */
  status?: CodeableConcept;
}

/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body
 */
export class MedicinalProductPharmaceuticalRouteOfAdministration {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Coded expression for the route (1..1) */
  code: CodeableConcept;
  /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement (0..1) */
  firstDose?: Quantity;
  /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement (0..1) */
  maxSingleDose?: Quantity;
  /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation (0..1) */
  maxDosePerDay?: Quantity;
  /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation (0..1) */
  maxDosePerTreatmentPeriod?: Ratio;
  /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation (0..1) */
  maxTreatmentPeriod?: Duration;
  /** A species for which this route applies (0..*) */
  targetSpecies?: Array<MedicinalProductPharmaceuticalTargetSpecies>;
}

/**
 * A species for which this route applies
 */
export class MedicinalProductPharmaceuticalTargetSpecies {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Coded expression for the species (1..1) */
  code: CodeableConcept;
  /** A species specific time during which consumption of animal product is not appropriate (0..*) */
  withdrawalPeriod?: Array<MedicinalProductPharmaceuticalWithdrawalPeriod>;
}

/**
 * A species specific time during which consumption of animal product is not appropriate
 */
export class MedicinalProductPharmaceuticalWithdrawalPeriod {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk (1..1) */
  tissue: CodeableConcept;
  /** A value for the time (1..1) */
  value: Quantity;
  /** Extra information about the withdrawal period (0..1) */
  supportingInformation?: string;
  /** Id and extensions of the primitive `supportingInformation`. */
  _supportingInformation?: Element;
}
