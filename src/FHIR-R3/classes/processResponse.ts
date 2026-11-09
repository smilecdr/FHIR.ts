/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for ProcessResponse Resource
 */
export class ProcessResponse {
  resourceType: 'ProcessResponse';
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
  status?: ProcessResponse.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Authoring Organization (0..1) */
  organization?: Reference;
  /** Request reference (0..1) */
  request?: Reference;
  /** Processing outcome (0..1) */
  outcome?: CodeableConcept;
  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** Responsible Practitioner (0..1) */
  requestProvider?: Reference;
  /** Responsible organization (0..1) */
  requestOrganization?: Reference;
  /** Printed Form Identifier (0..1) */
  form?: CodeableConcept;
  /** Processing comments or additional requirements (0..*) */
  processNote?: Array<ProcessResponseProcessNote>;
  /** Error code (0..*) */
  error?: Array<CodeableConcept>;
  /** Request for additional information (0..*) */
  communicationRequest?: Array<Reference>;
}

export namespace ProcessResponse {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}

/**
 * Processing comments or additional requirements
 */
export class ProcessResponseProcessNote {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** display | print | printoper (0..1) */
  type?: CodeableConcept;
  /** Comment on the processing (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
}
