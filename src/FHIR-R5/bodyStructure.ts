/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * Record details about an anatomical structure. This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export interface BodyStructure {
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
  contained?: Array<ResourceList>;
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
  /** Included anatomic location(s) (1..*) */
  includedStructure: Array<BodyStructureIncludedStructure>;
  /** Excluded anatomic locations(s) (0..*) */
  excludedStructure?: Array<BodyStructureIncludedStructure>;
  /** Text description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Attached images (0..*) */
  image?: Array<Attachment>;
  /** Who this is about (1..1) */
  patient: Reference;
}

/**
 * Included anatomic location(s)
 */
export interface BodyStructureIncludedStructure {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code that represents the included structure (1..1) */
  structure: CodeableConcept;
  /** Code that represents the included structure laterality (0..1) */
  laterality?: CodeableConcept;
  /** Landmark relative location (0..*) */
  bodyLandmarkOrientation?: Array<BodyStructureBodyLandmarkOrientation>;
  /** Cartesian reference for structure (0..*) */
  spatialReference?: Array<Reference>;
  /** Code that represents the included structure qualifier (0..*) */
  qualifier?: Array<CodeableConcept>;
}

/**
 * Landmark relative location
 */
export interface BodyStructureBodyLandmarkOrientation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Body ]andmark description (0..*) */
  landmarkDescription?: Array<CodeableConcept>;
  /** Clockface orientation (0..*) */
  clockFacePosition?: Array<CodeableConcept>;
  /** Landmark relative location (0..*) */
  distanceFromLandmark?: Array<BodyStructureDistanceFromLandmark>;
  /** Relative landmark surface orientation (0..*) */
  surfaceOrientation?: Array<CodeableConcept>;
}

/**
 * Landmark relative location
 */
export interface BodyStructureDistanceFromLandmark {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Measurement device (0..*) */
  device?: Array<CodeableReference>;
  /** Measured distance from body landmark (0..*) */
  value?: Array<Quantity>;
}
