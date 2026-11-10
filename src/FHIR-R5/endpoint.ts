/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactPoint } from './contactPoint';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information.
 */
export interface Endpoint {
  resourceType: 'Endpoint';
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
  /** Identifies this endpoint across multiple systems (0..*) */
  identifier?: Array<Identifier>;
  /** active | suspended | error | off | entered-in-error | test (1..1) */
  status?: Endpoint.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Protocol/Profile/Standard to be used with this endpoint connection (1..*) */
  connectionType: Array<CodeableConcept>;
  /** A name that this endpoint can be identified by (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Additional details about the endpoint that could be displayed as further information to identify the description beyond its name (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The type of environment(s) exposed at this endpoint (0..*) */
  environmentType?: Array<CodeableConcept>;
  /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) (0..1) */
  managingOrganization?: Reference;
  /** Contact details for source (e.g. troubleshooting) (0..*) */
  contact?: Array<ContactPoint>;
  /** Interval the endpoint is expected to be operational (0..1) */
  period?: Period;
  /** Set of payloads that are provided by this endpoint (0..*) */
  payload?: Array<EndpointPayload>;
  /** The technical base address for connecting to this endpoint (1..1) */
  address?: string;
  /** Id and extensions of the primitive `address`. */
  _address?: Element;
  /** Usage depends on the channel type (0..*) */
  header?: Array<string>;
  /** Id and extensions of the primitive `header`. */
  _header?: Array<Element | null>;
}

export namespace Endpoint {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/endpoint-status */
  export type StatusEnum = 'active' | 'suspended' | 'error' | 'off' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Suspended: 'suspended' as StatusEnum,
    Error: 'error' as StatusEnum,
    Off: 'off' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Set of payloads that are provided by this endpoint
 */
export interface EndpointPayload {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) (0..*) */
  type?: Array<CodeableConcept>;
  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) (0..*) */
  mimeType?: Array<string>;
  /** Id and extensions of the primitive `mimeType`. */
  _mimeType?: Array<Element | null>;
}
