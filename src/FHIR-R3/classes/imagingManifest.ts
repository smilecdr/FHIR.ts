/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for ImagingManifest Resource
 */
export class ImagingManifest {
  resourceType: 'ImagingManifest';
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
  /** SOP Instance UID (0..1) */
  identifier?: Identifier;
  /** Patient of the selected objects (1..1) */
  patient: Reference;
  /** Time when the selection of instances was made (0..1) */
  authoringTime?: string;
  /** Id and extensions of the primitive `authoringTime`. */
  _authoringTime?: Element;
  /** Author (human or machine) (0..1) */
  author?: Reference;
  /** Description text (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Study identity of the selected instances (1..*) */
  study: Array<ImagingManifestStudy>;
}

/**
 * Study identity of the selected instances
 */
export class ImagingManifestStudy {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Study instance UID (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;
  /** Reference to ImagingStudy (0..1) */
  imagingStudy?: Reference;
  /** Study access service endpoint (0..*) */
  endpoint?: Array<Reference>;
  /** Series identity of the selected instances (1..*) */
  series: Array<ImagingManifestSeries>;
}

/**
 * Series identity of the selected instances
 */
export class ImagingManifestSeries {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Series instance UID (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;
  /** Series access endpoint (0..*) */
  endpoint?: Array<Reference>;
  /** The selected instance (1..*) */
  instance: Array<ImagingManifestInstance>;
}

/**
 * The selected instance
 */
export class ImagingManifestInstance {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** SOP class UID of instance (1..1) */
  sopClass?: string;
  /** Id and extensions of the primitive `sopClass`. */
  _sopClass?: Element;
  /** Selected instance UID (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;
}
