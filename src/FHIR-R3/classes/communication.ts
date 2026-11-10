/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for Communication Resource
 */
export class Communication {
  resourceType: 'Communication';
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
  /** Unique identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates protocol or definition (0..*) */
  definition?: Array<Reference>;
  /** Request fulfilled by this communication (0..*) */
  basedOn?: Array<Reference>;
  /** Part of this action (0..*) */
  partOf?: Array<Reference>;
  /** preparation | in-progress | suspended | aborted | completed | entered-in-error (1..1) */
  status?: Communication.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Communication did not occur (0..1) */
  notDone?: boolean;
  /** Id and extensions of the primitive `notDone`. */
  _notDone?: Element;
  /** Why communication did not occur (0..1) */
  notDoneReason?: CodeableConcept;
  /** Message category (0..*) */
  category?: Array<CodeableConcept>;
  /** A channel of communication (0..*) */
  medium?: Array<CodeableConcept>;
  /** Focus of message (0..1) */
  subject?: Reference;
  /** Message recipient (0..*) */
  recipient?: Array<Reference>;
  /** Focal resources (0..*) */
  topic?: Array<Reference>;
  /** Encounter or episode leading to message (0..1) */
  context?: Reference;
  /** When sent (0..1) */
  sent?: string;
  /** Id and extensions of the primitive `sent`. */
  _sent?: Element;
  /** When received (0..1) */
  received?: string;
  /** Id and extensions of the primitive `received`. */
  _received?: Element;
  /** Message sender (0..1) */
  sender?: Reference;
  /** Indication for message (0..*) */
  reasonCode?: Array<CodeableConcept>;
  /** Why was communication done? (0..*) */
  reasonReference?: Array<Reference>;
  /** Message payload (0..*) */
  payload?: Array<CommunicationPayload>;
  /** Comments made about the communication (0..*) */
  note?: Array<Annotation>;
}

export namespace Communication {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-status */
  export type StatusEnum =
    | 'preparation'
    | 'in-progress'
    | 'suspended'
    | 'aborted'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    Suspended: 'suspended' as StatusEnum,
    Aborted: 'aborted' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Message payload
 */
export class CommunicationPayload {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Message part content (1..1) */
  contentString?: string;
  /** Id and extensions of the primitive `contentString`. */
  _contentString?: Element;
  /** Message part content (1..1) */
  contentAttachment?: Attachment;
  /** Message part content (1..1) */
  contentReference?: Reference;
}
