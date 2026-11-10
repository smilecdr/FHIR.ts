/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Record details about an anatomical structure. This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export class BodyStructure {
  resourceType: 'BodyStructure';
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
  /** Bodystructure identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Whether this record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;
  /** Kind of Structure (0..1) */
  morphology?: CodeableConcept;
  /** Body site (0..1) */
  location?: CodeableConcept;
  /** Body site modifier (0..*) */
  locationQualifier?: Array<CodeableConcept>;
  /** Text description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Attached images (0..*) */
  image?: Array<Attachment>;
  /** Who this is about (1..1) */
  patient: Reference;
}
