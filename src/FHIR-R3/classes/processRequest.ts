/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for ProcessRequest Resource
 */
export class ProcessRequest {
  resourceType: 'ProcessRequest';
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
  /** Business Identifier (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: ProcessRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** cancel | poll | reprocess | status (0..1) */
  action?: ProcessRequest.ActionEnum;
  /** Id and extensions of the primitive `action`. */
  _action?: Element;
  /** Party which is the target of the request (0..1) */
  target?: Reference;
  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Responsible practitioner (0..1) */
  provider?: Reference;
  /** Responsible organization (0..1) */
  organization?: Reference;
  /** Reference to the Request resource (0..1) */
  request?: Reference;
  /** Reference to the Response resource (0..1) */
  response?: Reference;
  /** Remove history (0..1) */
  nullify?: boolean;
  /** Id and extensions of the primitive `nullify`. */
  _nullify?: Element;
  /** Reference number/string (0..1) */
  reference?: string;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Element;
  /** Items to re-adjudicate (0..*) */
  item?: Array<ProcessRequestItem>;
  /** Resource type(s) to include (0..*) */
  include?: Array<string>;
  /** Id and extensions of the primitive `include`. */
  _include?: Array<Element | null>;
  /** Resource type(s) to exclude (0..*) */
  exclude?: Array<string>;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Array<Element | null>;
  /** Selection period (0..1) */
  period?: Period;
}

export namespace ProcessRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/actionlist */
  export type ActionEnum = 'cancel' | 'poll' | 'reprocess' | 'status';
  export const ActionEnum = {
    Cancel: 'cancel' as ActionEnum,
    Poll: 'poll' as ActionEnum,
    Reprocess: 'reprocess' as ActionEnum,
    Status: 'status' as ActionEnum,
  };
}

/**
 * Items to re-adjudicate
 */
export class ProcessRequestItem {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Service instance (1..1) */
  sequenceLinkId?: number;
  /** Id and extensions of the primitive `sequenceLinkId`. */
  _sequenceLinkId?: Element;
}
