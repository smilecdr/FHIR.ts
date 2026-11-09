/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export class MedicinalProductInteraction {
  resourceType: 'MedicinalProductInteraction';
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
  /** The medication for which this is a described interaction (0..*) */
  subject?: Array<Reference>;
  /** The interaction described (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The specific medication, food or laboratory test that interacts (0..*) */
  interactant?: Array<MedicinalProductInteractionInteractant>;
  /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction (0..1) */
  type?: CodeableConcept;
  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" (0..1) */
  effect?: CodeableConcept;
  /** The incidence of the interaction, e.g. theoretical, observed (0..1) */
  incidence?: CodeableConcept;
  /** Actions for managing the interaction (0..1) */
  management?: CodeableConcept;
}

/**
 * The specific medication, food or laboratory test that interacts
 */
export class MedicinalProductInteractionInteractant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The specific medication, food or laboratory test that interacts (1..1) */
  itemReference?: Reference;
  /** The specific medication, food or laboratory test that interacts (1..1) */
  itemCodeableConcept?: CodeableConcept;
}
