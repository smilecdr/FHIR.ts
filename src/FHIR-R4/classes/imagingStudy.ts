/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context. A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export class ImagingStudy {
  resourceType: 'ImagingStudy';
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
  /** Identifiers for the whole study (0..*) */
  identifier?: Array<Identifier>;
  /** registered | available | cancelled | entered-in-error | unknown (1..1) */
  status?: ImagingStudy.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** All series modality if actual acquisition modalities (0..*) */
  modality?: Array<Coding>;
  /** Who or what is the subject of the study (1..1) */
  subject: Reference;
  /** Encounter with which this imaging study is associated (0..1) */
  encounter?: Reference;
  /** When the study was started (0..1) */
  started?: Date | string;
  /** Id and extensions of the primitive `started`. */
  _started?: Element;
  /** Request fulfilled (0..*) */
  basedOn?: Array<Reference>;
  /** Referring physician (0..1) */
  referrer?: Reference;
  /** Who interpreted images (0..*) */
  interpreter?: Array<Reference>;
  /** Study access endpoint (0..*) */
  endpoint?: Array<Reference>;
  /** Number of Study Related Series (0..1) */
  numberOfSeries?: number;
  /** Id and extensions of the primitive `numberOfSeries`. */
  _numberOfSeries?: Element;
  /** Number of Study Related Instances (0..1) */
  numberOfInstances?: number;
  /** Id and extensions of the primitive `numberOfInstances`. */
  _numberOfInstances?: Element;
  /** The performed Procedure reference (0..1) */
  procedureReference?: Reference;
  /** The performed procedure code (0..*) */
  procedureCode?: Array<CodeableConcept>;
  /** Where ImagingStudy occurred (0..1) */
  location?: Reference;
  /** Why the study was requested (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Why was study performed (0..*) */
  reasonReference?: Array<Reference>;
  /** User-defined comments (0..*) */
  note?: Array<Annotation>;
  /** Institution-generated description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Each study has one or more series of instances (0..*) */
  series?: Array<ImagingStudySeries>;
}

export namespace ImagingStudy {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/imagingstudy-status */
  export type StatusEnum =
    'registered' | 'available' | 'cancelled' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Registered: 'registered' as StatusEnum,
    Available: 'available' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Each study has one or more series of instances
 */
export class ImagingStudySeries {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** DICOM Series Instance UID for the series (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;
  /** Numeric identifier of this series (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;
  /** The modality of the instances in the series (1..1) */
  modality: Coding;
  /** A short human readable summary of the series (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Number of Series Related Instances (0..1) */
  numberOfInstances?: number;
  /** Id and extensions of the primitive `numberOfInstances`. */
  _numberOfInstances?: Element;
  /** Series access endpoint (0..*) */
  endpoint?: Array<Reference>;
  /** Body part examined (0..1) */
  bodySite?: Coding;
  /** Body part laterality (0..1) */
  laterality?: Coding;
  /** Specimen imaged (0..*) */
  specimen?: Array<Reference>;
  /** When the series started (0..1) */
  started?: Date | string;
  /** Id and extensions of the primitive `started`. */
  _started?: Element;
  /** Who performed the series (0..*) */
  performer?: Array<ImagingStudyPerformer>;
  /** A single SOP instance from the series (0..*) */
  instance?: Array<ImagingStudyInstance>;
}

/**
 * Who performed the series
 */
export class ImagingStudyPerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of performance (0..1) */
  function?: CodeableConcept;
  /** Who performed the series (1..1) */
  actor: Reference;
}

/**
 * A single SOP instance from the series
 */
export class ImagingStudyInstance {
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
  /** DICOM class type (1..1) */
  sopClass: Coding;
  /** The number of this instance in the series (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;
  /** Description of instance (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
}
