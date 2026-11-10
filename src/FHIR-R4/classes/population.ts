/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Range } from './range';

/**
 * A populatioof people with some set of grouping criteria.
 */
export class Population {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The age of the specific population (0..1) */
  ageRange?: Range;
  /** The age of the specific population (0..1) */
  ageCodeableConcept?: CodeableConcept;
  /** The gender of the specific population (0..1) */
  gender?: CodeableConcept;
  /** Race of the specific population (0..1) */
  race?: CodeableConcept;
  /** The existing physiological conditions of the specific population to which this applies (0..1) */
  physiologicalCondition?: CodeableConcept;
}
