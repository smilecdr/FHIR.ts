/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export class EnrollmentResponse {
  resourceType: 'EnrollmentResponse';
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
  /** Business Identifier (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: EnrollmentResponse.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Claim reference (0..1) */
  request?: Reference;
  /** queued | complete | error | partial (0..1) */
  outcome?: EnrollmentResponse.OutcomeEnum;
  /** Id and extensions of the primitive `outcome`. */
  _outcome?: Element;
  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** Creation date (0..1) */
  created?: Date | string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Insurer (0..1) */
  organization?: Reference;
  /** Responsible practitioner (0..1) */
  requestProvider?: Reference;
}

export namespace EnrollmentResponse {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/remittance-outcome */
  export type OutcomeEnum = 'queued' | 'complete' | 'error' | 'partial';
  export const OutcomeEnum = {
    Queued: 'queued' as OutcomeEnum,
    Complete: 'complete' as OutcomeEnum,
    Error: 'error' as OutcomeEnum,
    Partial: 'partial' as OutcomeEnum,
  };
}
