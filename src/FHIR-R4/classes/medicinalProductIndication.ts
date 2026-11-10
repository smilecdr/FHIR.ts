/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Population } from './population';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Indication for the Medicinal Product.
 */
export class MedicinalProductIndication {
  resourceType: 'MedicinalProductIndication';
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
  /** The medication for which this is an indication (0..*) */
  subject?: Array<Reference>;
  /** The disease, symptom or procedure that is the indication for treatment (0..1) */
  diseaseSymptomProcedure?: CodeableConcept;
  /** The status of the disease or symptom for which the indication applies (0..1) */
  diseaseStatus?: CodeableConcept;
  /** Comorbidity (concurrent condition) or co-infection as part of the indication (0..*) */
  comorbidity?: Array<CodeableConcept>;
  /** The intended effect, aim or strategy to be achieved by the indication (0..1) */
  intendedEffect?: CodeableConcept;
  /** Timing or duration information as part of the indication (0..1) */
  duration?: Quantity;
  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication (0..*) */
  otherTherapy?: Array<MedicinalProductIndicationOtherTherapy>;
  /** Describe the undesirable effects of the medicinal product (0..*) */
  undesirableEffect?: Array<Reference>;
  /** The population group to which this applies (0..*) */
  population?: Array<Population>;
}

/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication
 */
export class MedicinalProductIndicationOtherTherapy {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of relationship between the medicinal product indication or contraindication and another therapy (1..1) */
  therapyRelationshipType: CodeableConcept;
  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication (1..1) */
  medicationCodeableConcept?: CodeableConcept;
  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication (1..1) */
  medicationReference?: Reference;
}
