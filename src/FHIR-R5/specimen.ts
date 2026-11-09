/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A sample to be used for analysis.
 */
export interface Specimen {
  resourceType: 'Specimen';
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
  /** External Identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Identifier assigned by the lab (0..1) */
  accessionIdentifier?: Identifier;
  /** available | unavailable | unsatisfactory | entered-in-error (0..1) */
  status?: Specimen.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Kind of material that forms the specimen (0..1) */
  type?: CodeableConcept;
  /** Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance, a biologically-derived product, or a device (0..1) */
  subject?: Reference;
  /** The time when specimen is received by the testing laboratory (0..1) */
  receivedTime?: string;
  /** Id and extensions of the primitive `receivedTime`. */
  _receivedTime?: Element;
  /** Specimen from which this specimen originated (0..*) */
  parent?: Array<Reference>;
  /** Why the specimen was collected (0..*) */
  request?: Array<Reference>;
  /** grouped | pooled (0..1) */
  combined?: Specimen.CombinedEnum;
  /** Id and extensions of the primitive `combined`. */
  _combined?: Element;
  /** The role the specimen serves (0..*) */
  role?: Array<CodeableConcept>;
  /** The physical feature of a specimen (0..*) */
  feature?: Array<SpecimenFeature>;
  /** Collection details (0..1) */
  collection?: SpecimenCollection;
  /** Processing and processing step details (0..*) */
  processing?: Array<SpecimenProcessing>;
  /** Direct container of specimen (tube/slide, etc.) (0..*) */
  container?: Array<SpecimenContainer>;
  /** State of the specimen (0..*) */
  condition?: Array<CodeableConcept>;
  /** Comments (0..*) */
  note?: Array<Annotation>;
}

export namespace Specimen {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/specimen-status */
  export type StatusEnum = 'available' | 'unavailable' | 'unsatisfactory' | 'entered-in-error';
  export const StatusEnum = {
    Available: 'available' as StatusEnum,
    Unavailable: 'unavailable' as StatusEnum,
    Unsatisfactory: 'unsatisfactory' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/specimen-combined */
  export type CombinedEnum = 'grouped' | 'pooled';
  export const CombinedEnum = {
    Grouped: 'grouped' as CombinedEnum,
    Pooled: 'pooled' as CombinedEnum,
  };
}

/**
 * The physical feature of a specimen
 */
export interface SpecimenFeature {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Highlighted feature (1..1) */
  type: CodeableConcept;
  /** Information about the feature (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

/**
 * Collection details
 */
export interface SpecimenCollection {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Who collected the specimen (0..1) */
  collector?: Reference;
  /** Collection time (0..1) */
  collectedDateTime?: string;
  /** Id and extensions of the primitive `collectedDateTime`. */
  _collectedDateTime?: Element;
  /** Collection time (0..1) */
  collectedPeriod?: Period;
  /** How long it took to collect specimen (0..1) */
  duration?: Duration;
  /** The quantity of specimen collected (0..1) */
  quantity?: Quantity;
  /** Technique used to perform collection (0..1) */
  method?: CodeableConcept;
  /** Device used to perform collection (0..1) */
  device?: CodeableReference;
  /** The procedure that collects the specimen (0..1) */
  procedure?: Reference;
  /** Anatomical collection site (0..1) */
  bodySite?: CodeableReference;
  /** Whether or how long patient abstained from food and/or drink (0..1) */
  fastingStatusCodeableConcept?: CodeableConcept;
  /** Whether or how long patient abstained from food and/or drink (0..1) */
  fastingStatusDuration?: Duration;
}

/**
 * Processing and processing step details
 */
export interface SpecimenProcessing {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Textual description of procedure (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Indicates the treatment step applied to the specimen (0..1) */
  method?: CodeableConcept;
  /** Material used in the processing step (0..*) */
  additive?: Array<Reference>;
  /** Date and time of specimen processing (0..1) */
  timeDateTime?: string;
  /** Id and extensions of the primitive `timeDateTime`. */
  _timeDateTime?: Element;
  /** Date and time of specimen processing (0..1) */
  timePeriod?: Period;
}

/**
 * Direct container of specimen (tube/slide, etc.)
 */
export interface SpecimenContainer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Device resource for the container (1..1) */
  device: Reference;
  /** Where the container is (0..1) */
  location?: Reference;
  /** Quantity of specimen within container (0..1) */
  specimenQuantity?: Quantity;
}
