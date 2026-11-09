/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

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
 * Base StructureDefinition for ImagingStudy Resource
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
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Formal DICOM identifier for the study (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;
  /** Related workflow identifier ("Accession Number") (0..1) */
  accession?: Identifier;
  /** Other identifiers for the study (0..*) */
  identifier?: Array<Identifier>;
  /** ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0..1) */
  availability?: ImagingStudy.AvailabilityEnum;
  /** Id and extensions of the primitive `availability`. */
  _availability?: Element;
  /** All series modality if actual acquisition modalities (0..*) */
  modalityList?: Array<Coding>;
  /** Who the images are of (1..1) */
  patient: Reference;
  /** Originating context (0..1) */
  context?: Reference;
  /** When the study was started (0..1) */
  started?: string;
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
  /** The performed Procedure reference (0..*) */
  procedureReference?: Array<Reference>;
  /** The performed procedure code (0..*) */
  procedureCode?: Array<CodeableConcept>;
  /** Why the study was requested (0..1) */
  reason?: CodeableConcept;
  /** Institution-generated description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Each study has one or more series of instances (0..*) */
  series?: Array<ImagingStudySeries>;
}

export namespace ImagingStudy {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/instance-availability */
  export type AvailabilityEnum = 'ONLINE' | 'OFFLINE' | 'NEARLINE' | 'UNAVAILABLE';
  export const AvailabilityEnum = {
    ONLINE: 'ONLINE' as AvailabilityEnum,
    OFFLINE: 'OFFLINE' as AvailabilityEnum,
    NEARLINE: 'NEARLINE' as AvailabilityEnum,
    UNAVAILABLE: 'UNAVAILABLE' as AvailabilityEnum,
  };
}

/**
 * Each study has one or more series of instances
 */
export class ImagingStudySeries {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Formal DICOM identifier for this series (1..1) */
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
  /** ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0..1) */
  availability?: ImagingStudySeries.AvailabilityEnum;
  /** Id and extensions of the primitive `availability`. */
  _availability?: Element;
  /** Series access endpoint (0..*) */
  endpoint?: Array<Reference>;
  /** Body part examined (0..1) */
  bodySite?: Coding;
  /** Body part laterality (0..1) */
  laterality?: Coding;
  /** When the series started (0..1) */
  started?: string;
  /** Id and extensions of the primitive `started`. */
  _started?: Element;
  /** Who performed the series (0..*) */
  performer?: Array<Reference>;
  /** A single SOP instance from the series (0..*) */
  instance?: Array<ImagingStudyInstance>;
}

export namespace ImagingStudySeries {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/instance-availability */
  export type AvailabilityEnum = 'ONLINE' | 'OFFLINE' | 'NEARLINE' | 'UNAVAILABLE';
  export const AvailabilityEnum = {
    ONLINE: 'ONLINE' as AvailabilityEnum,
    OFFLINE: 'OFFLINE' as AvailabilityEnum,
    NEARLINE: 'NEARLINE' as AvailabilityEnum,
    UNAVAILABLE: 'UNAVAILABLE' as AvailabilityEnum,
  };
}

/**
 * A single SOP instance from the series
 */
export class ImagingStudyInstance {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Formal DICOM identifier for this instance (1..1) */
  uid?: string;
  /** Id and extensions of the primitive `uid`. */
  _uid?: Element;
  /** The number of this instance in the series (0..1) */
  number?: number;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;
  /** DICOM class type (1..1) */
  sopClass?: string;
  /** Id and extensions of the primitive `sopClass`. */
  _sopClass?: Element;
  /** Description of instance (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
}
