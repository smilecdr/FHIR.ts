/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Specimen Resource
 */
export class Specimen {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
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
  /** Where the specimen came from. This may be from the patient(s) or from the environment or a device (1..1) */
  subject: Reference;
  /** The time when specimen was received for processing (0..1) */
  receivedTime?: string;
  /** Id and extensions of the primitive `receivedTime`. */
  _receivedTime?: Element;
  /** Specimen from which this specimen originated (0..*) */
  parent?: Array<Reference>;
  /** Why the specimen was collected (0..*) */
  request?: Array<Reference>;
  /** Collection details (0..1) */
  collection?: SpecimenCollection;
  /** Processing and processing step details (0..*) */
  processing?: Array<SpecimenProcessing>;
  /** Direct container of specimen (tube/slide, etc.) (0..*) */
  container?: Array<SpecimenContainer>;
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
}

/**
 * Collection details
 */
export class SpecimenCollection {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Who collected the specimen (0..1) */
  collector?: Reference;
  /** Collection time (0..1) */
  collectedDateTime?: string;
  /** Id and extensions of the primitive `collectedDateTime`. */
  _collectedDateTime?: Element;
  /** Collection time (0..1) */
  collectedPeriod?: Period;
  /** The quantity of specimen collected (0..1) */
  quantity?: Quantity;
  /** Technique used to perform collection (0..1) */
  method?: CodeableConcept;
  /** Anatomical collection site (0..1) */
  bodySite?: CodeableConcept;
}

/**
 * Processing and processing step details
 */
export class SpecimenProcessing {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Textual description of procedure (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Indicates the treatment step applied to the specimen (0..1) */
  procedure?: CodeableConcept;
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
export class SpecimenContainer {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Id for the container (0..*) */
  identifier?: Array<Identifier>;
  /** Textual description of the container (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Kind of container directly associated with specimen (0..1) */
  type?: CodeableConcept;
  /** Container volume or size (0..1) */
  capacity?: Quantity;
  /** Quantity of specimen within container (0..1) */
  specimenQuantity?: Quantity;
  /** Additive associated with container (0..1) */
  additiveCodeableConcept?: CodeableConcept;
  /** Additive associated with container (0..1) */
  additiveReference?: Reference;
}
