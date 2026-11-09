/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for MessageHeader Resource
 */
export class MessageHeader {
  resourceType: 'MessageHeader';
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
  /** Code for the event this message represents (1..1) */
  event: Coding;
  /** Message destination application(s) (0..*) */
  destination?: Array<MessageHeaderDestination>;
  /** Intended "real-world" recipient for the data (0..1) */
  receiver?: Reference;
  /** Real world sender of the message (0..1) */
  sender?: Reference;
  /** Time that the message was sent (1..1) */
  timestamp?: string;
  /** Id and extensions of the primitive `timestamp`. */
  _timestamp?: Element;
  /** The source of the data entry (0..1) */
  enterer?: Reference;
  /** The source of the decision (0..1) */
  author?: Reference;
  /** Message source application (1..1) */
  source: MessageHeaderSource;
  /** Final responsibility for event (0..1) */
  responsible?: Reference;
  /** Cause of event (0..1) */
  reason?: CodeableConcept;
  /** If this is a reply to prior message (0..1) */
  response?: MessageHeaderResponse;
  /** The actual content of the message (0..*) */
  focus?: Array<Reference>;
}

/**
 * Message destination application(s)
 */
export class MessageHeaderDestination {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of system (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Particular delivery destination within the destination (0..1) */
  target?: Reference;
  /** Actual destination address or id (1..1) */
  endpoint?: string;
  /** Id and extensions of the primitive `endpoint`. */
  _endpoint?: Element;
}

/**
 * Message source application
 */
export class MessageHeaderSource {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of system (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name of software running the system (0..1) */
  software?: string;
  /** Id and extensions of the primitive `software`. */
  _software?: Element;
  /** Version of software running (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Human contact for problems (0..1) */
  contact?: ContactPoint;
  /** Actual message source address or id (1..1) */
  endpoint?: string;
  /** Id and extensions of the primitive `endpoint`. */
  _endpoint?: Element;
}

/**
 * If this is a reply to prior message
 */
export class MessageHeaderResponse {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Id of original message (1..1) */
  identifier?: string;
  /** Id and extensions of the primitive `identifier`. */
  _identifier?: Element;
  /** ok | transient-error | fatal-error (1..1) */
  code?: MessageHeaderResponse.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Specific list of hints/warnings/errors (0..1) */
  details?: Reference;
}

export namespace MessageHeaderResponse {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/response-code */
  export type CodeEnum = 'ok' | 'transient-error' | 'fatal-error';
  export const CodeEnum = {
    Ok: 'ok' as CodeEnum,
    TransientError: 'transient-error' as CodeEnum,
    FatalError: 'fatal-error' as CodeEnum,
  };
}
