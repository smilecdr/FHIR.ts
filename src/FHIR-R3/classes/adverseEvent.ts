/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
 * Base StructureDefinition for AdverseEvent Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business identifier for the event (0..1) */
  identifier?: Identifier;
  /** AE | PAE An adverse event is an event that caused harm to a patient, an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not (0..1) */
  category?: AdverseEvent.CategoryEnum;
  /** Id and extensions of the primitive `category`. */
  _category?: Element;
  /** actual | potential (0..1) */
  type?: CodeableConcept;
  /** Subject or group impacted by event (0..1) */
  subject?: Reference;
  /** When the event occurred (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Adverse Reaction Events linked to exposure to substance (0..*) */
  reaction?: Array<Reference>;
  /** Location where adverse event occurred (0..1) */
  location?: Reference;
  /** Mild | Moderate | Severe (0..1) */
  seriousness?: CodeableConcept;
  /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown (0..1) */
  outcome?: CodeableConcept;
  /** Who recorded the adverse event (0..1) */
  recorder?: Reference;
  /** Who was involved in the adverse event or the potential adverse event (0..1) */
  eventParticipant?: Reference;
  /** Description of the adverse event (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
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
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/adverse-event-category */
  export type CategoryEnum = 'AE' | 'PAE';
  export const CategoryEnum = { AE: 'AE' as CategoryEnum, PAE: 'PAE' as CategoryEnum };
}

/**
 * The suspected agent causing the adverse event
 */
export class AdverseEventSuspectEntity {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Refers to the specific entity that caused the adverse event (1..1) */
  instance: Reference;
  /** causality1 | causality2 (0..1) */
  causality?: AdverseEventSuspectEntity.CausalityEnum;
  /** Id and extensions of the primitive `causality`. */
  _causality?: Element;
  /** assess1 | assess2 (0..1) */
  causalityAssessment?: CodeableConcept;
  /** AdverseEvent.suspectEntity.causalityProductRelatedness (0..1) */
  causalityProductRelatedness?: string;
  /** Id and extensions of the primitive `causalityProductRelatedness`. */
  _causalityProductRelatedness?: Element;
  /** method1 | method2 (0..1) */
  causalityMethod?: CodeableConcept;
  /** AdverseEvent.suspectEntity.causalityAuthor (0..1) */
  causalityAuthor?: Reference;
  /** result1 | result2 (0..1) */
  causalityResult?: CodeableConcept;
}

export namespace AdverseEventSuspectEntity {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/adverse-event-causality */
  export type CausalityEnum = 'causality1' | 'causality2';
  export const CausalityEnum = {
    Causality1: 'causality1' as CausalityEnum,
    Causality2: 'causality2' as CausalityEnum,
  };
}
