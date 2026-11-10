/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export class Media {
  resourceType: 'Media';
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
  /** Identifier(s) for the image (0..*) */
  identifier?: Array<Identifier>;
  /** Procedure that caused this media to be created (0..*) */
  basedOn?: Array<Reference>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  status?: Media.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Classification of media as image, video, or audio (0..1) */
  type?: CodeableConcept;
  /** The type of acquisition equipment/process (0..1) */
  modality?: CodeableConcept;
  /** Imaging view, e.g. Lateral or Antero-posterior (0..1) */
  view?: CodeableConcept;
  /** Who/What this Media is a record of (0..1) */
  subject?: Reference;
  /** Encounter associated with media (0..1) */
  encounter?: Reference;
  /** When Media was collected (0..1) */
  createdDateTime?: Date | string;
  /** Id and extensions of the primitive `createdDateTime`. */
  _createdDateTime?: Element;
  /** When Media was collected (0..1) */
  createdPeriod?: Period;
  /** Date/Time this version was made available (0..1) */
  issued?: Date | string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;
  /** The person who generated the image (0..1) */
  operator?: Reference;
  /** Why was event performed? (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Observed body part (0..1) */
  bodySite?: CodeableConcept;
  /** Name of the device/manufacturer (0..1) */
  deviceName?: string;
  /** Id and extensions of the primitive `deviceName`. */
  _deviceName?: Element;
  /** Observing Device (0..1) */
  device?: Reference;
  /** Height of the image in pixels (photo/video) (0..1) */
  height?: number;
  /** Id and extensions of the primitive `height`. */
  _height?: Element;
  /** Width of the image in pixels (photo/video) (0..1) */
  width?: number;
  /** Id and extensions of the primitive `width`. */
  _width?: Element;
  /** Number of frames if > 1 (photo) (0..1) */
  frames?: number;
  /** Id and extensions of the primitive `frames`. */
  _frames?: Element;
  /** Length in seconds (audio / video) (0..1) */
  duration?: number;
  /** Id and extensions of the primitive `duration`. */
  _duration?: Element;
  /** Actual Media - reference or data (1..1) */
  content: Attachment;
  /** Comments made about the media (0..*) */
  note?: Array<Annotation>;
}

export namespace Media {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-status */
  export type StatusEnum =
    | 'preparation'
    | 'in-progress'
    | 'not-done'
    | 'on-hold'
    | 'stopped'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    NotDone: 'not-done' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}
