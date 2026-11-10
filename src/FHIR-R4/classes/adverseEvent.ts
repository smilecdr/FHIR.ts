/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Actual or potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export class AdverseEvent {
  resourceType: 'AdverseEvent';
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
  /** Business identifier for the event (0..1) */
  identifier?: Identifier;
  /** actual | potential (1..1) */
  actuality?: AdverseEvent.ActualityEnum;
  /** Id and extensions of the primitive `actuality`. */
  _actuality?: Element;
  /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment (0..*) */
  category?: Array<CodeableConcept>;
  /** Type of the event itself in relation to the subject (0..1) */
  event?: CodeableConcept;
  /** Subject impacted by event (1..1) */
  subject: Reference;
  /** Encounter created as part of (0..1) */
  encounter?: Reference;
  /** When the event occurred (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** When the event was detected (0..1) */
  detected?: Date | string;
  /** Id and extensions of the primitive `detected`. */
  _detected?: Element;
  /** When the event was recorded (0..1) */
  recordedDate?: Date | string;
  /** Id and extensions of the primitive `recordedDate`. */
  _recordedDate?: Element;
  /** Effect on the subject due to this event (0..*) */
  resultingCondition?: Array<Reference>;
  /** Location where adverse event occurred (0..1) */
  location?: Reference;
  /** Seriousness of the event (0..1) */
  seriousness?: CodeableConcept;
  /** mild | moderate | severe (0..1) */
  severity?: CodeableConcept;
  /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown (0..1) */
  outcome?: CodeableConcept;
  /** Who recorded the adverse event (0..1) */
  recorder?: Reference;
  /** Who was involved in the adverse event or the potential adverse event (0..*) */
  contributor?: Array<Reference>;
  /** The suspected agent causing the adverse event (0..*) */
  suspectEntity?: Array<AdverseEventSuspectEntity>;
  /** AdverseEvent.subjectMedicalHistory (0..*) */
  subjectMedicalHistory?: Array<Reference>;
  /** AdverseEvent.referenceDocument (0..*) */
  referenceDocument?: Array<Reference>;
  /** AdverseEvent.study (0..*) */
  study?: Array<Reference>;
}

export namespace AdverseEvent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/adverse-event-actuality */
  export type ActualityEnum = 'actual' | 'potential';
  export const ActualityEnum = {
    Actual: 'actual' as ActualityEnum,
    Potential: 'potential' as ActualityEnum,
  };
}

/**
 * The suspected agent causing the adverse event
 */
export class AdverseEventSuspectEntity {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Refers to the specific entity that caused the adverse event (1..1) */
  instance: Reference;
  /** Information on the possible cause of the event (0..*) */
  causality?: Array<AdverseEventCausality>;
}

/**
 * Information on the possible cause of the event
 */
export class AdverseEventCausality {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Assessment of if the entity caused the event (0..1) */
  assessment?: CodeableConcept;
  /** AdverseEvent.suspectEntity.causalityProductRelatedness (0..1) */
  productRelatedness?: string;
  /** Id and extensions of the primitive `productRelatedness`. */
  _productRelatedness?: Element;
  /** AdverseEvent.suspectEntity.causalityAuthor (0..1) */
  author?: Reference;
  /** ProbabilityScale | Bayesian | Checklist (0..1) */
  method?: CodeableConcept;
}
