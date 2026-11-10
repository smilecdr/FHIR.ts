/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * The header for a message exchange that is either requesting or responding to an action. The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export interface MessageHeader {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Event code or link to EventDefinition (1..1) */
  eventCoding?: Coding;
  /** Event code or link to EventDefinition (1..1) */
  eventCanonical?: string;
  /** Id and extensions of the primitive `eventCanonical`. */
  _eventCanonical?: Element;
  /** Message destination application(s) (0..*) */
  destination?: Array<MessageHeaderDestination>;
  /** Real world sender of the message (0..1) */
  sender?: Reference;
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
  /** Link to the definition for this message (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
}

/**
 * Message destination application(s)
 */
export interface MessageHeaderDestination {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Actual destination address or Endpoint resource (0..1) */
  endpointUrl?: string;
  /** Id and extensions of the primitive `endpointUrl`. */
  _endpointUrl?: Element;
  /** Actual destination address or Endpoint resource (0..1) */
  endpointReference?: Reference;
  /** Name of system (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Particular delivery destination within the destination (0..1) */
  target?: Reference;
  /** Intended "real-world" recipient for the data (0..1) */
  receiver?: Reference;
}

/**
 * Message source application
 */
export interface MessageHeaderSource {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Actual source address or Endpoint resource (0..1) */
  endpointUrl?: string;
  /** Id and extensions of the primitive `endpointUrl`. */
  _endpointUrl?: Element;
  /** Actual source address or Endpoint resource (0..1) */
  endpointReference?: Reference;
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
}

/**
 * If this is a reply to prior message
 */
export interface MessageHeaderResponse {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Bundle.identifier of original message (1..1) */
  identifier: Identifier;
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
