/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource.
 */
export interface ImagingSelection {
  resourceType: 'ImagingSelection';
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
  /** Business Identifier for Imaging Selection (0..*) */
  identifier?: Array<Identifier>;
  /** available | entered-in-error | unknown (1..1) */
  status?: ImagingSelection.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Subject of the selected instances (0..1) */
  subject?: Reference;
  /** Date / Time when this imaging selection was created (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;
  /** Selector of the instances (human or machine) (0..*) */
  performer?: Array<ImagingSelectionPerformer>;
  /** Associated request (0..*) */
  basedOn?: Array<Reference>;
  /** Classifies the imaging selection (0..*) */
  category?: Array<CodeableConcept>;
  /** Imaging Selection purpose text or code (1..1) */
  code: CodeableConcept;
  /** DICOM Study Instance UID (0..1) */
  studyUid?: string;
  /** Id and extensions of the primitive `studyUid`. */
  _studyUid?: Element;
  /** The imaging study from which the imaging selection is derived (0..*) */
  derivedFrom?: Array<Reference>;
  /** The network service providing retrieval for the images referenced in the imaging selection (0..*) */
  endpoint?: Array<Reference>;
  /** DICOM Series Instance UID (0..1) */
  seriesUid?: string;
  /** Id and extensions of the primitive `seriesUid`. */
  _seriesUid?: Element;
  /** DICOM Series Number (0..1) */
  seriesNumber?: number;
  /** Id and extensions of the primitive `seriesNumber`. */
  _seriesNumber?: Element;
  /** The Frame of Reference UID for the selected images (0..1) */
  frameOfReferenceUid?: string;
  /** Id and extensions of the primitive `frameOfReferenceUid`. */
  _frameOfReferenceUid?: Element;
  /** Body part examined (0..1) */
  bodySite?: CodeableReference;
  /** Related resource that is the focus for the imaging selection (0..*) */
  focus?: Array<Reference>;
  /** The selected instances (0..*) */
  instance?: Array<ImagingSelectionInstance>;
}

export namespace ImagingSelection {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/imagingselection-status */
  export type StatusEnum = 'available' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Available: 'available' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Selector of the instances (human or machine)
 */
export interface ImagingSelectionPerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of performer (0..1) */
  function?: CodeableConcept;
  /** Author (human or machine) (0..1) */
  actor?: Reference;
}

/**
 * The selected instances
 */
export interface ImagingSelectionInstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** DICOM SOP Instance UID (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;
  /** DICOM Instance Number (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;
  /** DICOM SOP Class UID (0..1) */
  sopClass?: Coding;
  /** The selected subset of the SOP Instance (0..*) */
  subset?: Array<string>;
  /** Id and extensions of the primitive `subset`. */
  _subset?: Array<Element | null>;
  /** A specific 2D region in a DICOM image / frame (0..*) */
  imageRegion2D?: Array<ImagingSelectionImageRegion2D>;
  /** A specific 3D region in a DICOM frame of reference (0..*) */
  imageRegion3D?: Array<ImagingSelectionImageRegion3D>;
}

/**
 * A specific 2D region in a DICOM image / frame
 */
export interface ImagingSelectionImageRegion2D {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** point | polyline | interpolated | circle | ellipse (1..1) */
  regionType?: ImagingSelectionImageRegion2D.RegionTypeEnum;
  /** Id and extensions of the primitive `regionType`. */
  _regionType?: Element;
  /** Specifies the coordinates that define the image region (1..*) */
  coordinate?: Array<number>;
  /** Id and extensions of the primitive `coordinate`. */
  _coordinate?: Array<Element | null>;
}

export namespace ImagingSelectionImageRegion2D {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/imagingselection-2dgraphictype */
  export type RegionTypeEnum = 'point' | 'polyline' | 'interpolated' | 'circle' | 'ellipse';
  export const RegionTypeEnum = {
    Point: 'point' as RegionTypeEnum,
    Polyline: 'polyline' as RegionTypeEnum,
    Interpolated: 'interpolated' as RegionTypeEnum,
    Circle: 'circle' as RegionTypeEnum,
    Ellipse: 'ellipse' as RegionTypeEnum,
  };
}

/**
 * A specific 3D region in a DICOM frame of reference
 */
export interface ImagingSelectionImageRegion3D {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** point | multipoint | polyline | polygon | ellipse | ellipsoid (1..1) */
  regionType?: ImagingSelectionImageRegion3D.RegionTypeEnum;
  /** Id and extensions of the primitive `regionType`. */
  _regionType?: Element;
  /** Specifies the coordinates that define the image region (1..*) */
  coordinate?: Array<number>;
  /** Id and extensions of the primitive `coordinate`. */
  _coordinate?: Array<Element | null>;
}

export namespace ImagingSelectionImageRegion3D {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/imagingselection-3dgraphictype */
  export type RegionTypeEnum =
    'point' | 'multipoint' | 'polyline' | 'polygon' | 'ellipse' | 'ellipsoid';
  export const RegionTypeEnum = {
    Point: 'point' as RegionTypeEnum,
    Multipoint: 'multipoint' as RegionTypeEnum,
    Polyline: 'polyline' as RegionTypeEnum,
    Polygon: 'polygon' as RegionTypeEnum,
    Ellipse: 'ellipse' as RegionTypeEnum,
    Ellipsoid: 'ellipsoid' as RegionTypeEnum,
  };
}
